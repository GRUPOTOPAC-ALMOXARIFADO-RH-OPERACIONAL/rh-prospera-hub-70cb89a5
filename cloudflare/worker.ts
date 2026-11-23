/**
 * Cloudflare Pages (advanced mode) — _worker.js
 *
 * - Serve os arquivos estáticos do SPA via env.ASSETS.
 * - Executa no Worker apenas rotas /api/* portadas e seguras (autenticação do usuário
 *   via JWT do Supabase, RLS preservada, sem service role).
 * - Toda outra rota /api/* responde JSON 501 (fail-closed), em vez de cair no index.html.
 *
 * Handlers estilo Vercel (req, res) são executados por um adaptador mínimo.
 */
import frotaUpload from '../api/frota-upload-v2';
import protocolosParse from '../api/protocolos-parse';
import mechanicFace from '../api/mechanic-face';
import payrollAdmin from '../api/payroll-admin';
import payrollArchive from '../api/payroll-archive';
import payrollFace from '../api/payroll-face';
import payrollPhysicalSignature from '../api/payroll-physical-signature';
import payrollPublicV2 from '../api/payroll-public-v2';
import preCadastroCandidato from '../api/pre-cadastro-candidato';
import preCadastroConvite from '../api/pre-cadastro-convite';
import preCadastroPublico from '../api/pre-cadastro-publico';
import accountingPortalAdminView from '../api/accounting-portal-admin-view';
import accountingVacationDocuments from '../api/accounting-vacation-documents';
import accountingEmailProcess from '../api/accounting-email-process';

type Env = {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  [key: string]: unknown;
};

type Handler = (req: any, res: any) => unknown | Promise<unknown>;

// Rotas portadas. Chave = pathname exato.
// Excluídas de propósito: rotas que enviam e-mail (Resend/SMTP), bootstrap/cron e OCR/PDF.js.
const ROUTES: Record<string, Handler> = {
  '/api/frota-upload': frotaUpload,
  '/api/frota-upload-v2': frotaUpload,
  '/api/protocolos-parse': protocolosParse,
  '/api/mechanic-face': mechanicFace,
  '/api/payroll-admin': payrollAdmin,
  '/api/payroll-archive': payrollArchive,
  '/api/payroll-face': payrollFace,
  '/api/payroll-physical-signature': payrollPhysicalSignature,
  '/api/payroll-public': payrollPublicV2, // vercel.json: /api/payroll-public -> payroll-public-v2
  '/api/payroll-public-v2': payrollPublicV2,
  '/api/pre-cadastro-candidato': preCadastroCandidato,
  '/api/pre-cadastro-convite': preCadastroConvite,
  '/api/pre-cadastro-publico': preCadastroPublico,
  '/api/accounting-portal-admin-view': accountingPortalAdminView,
  '/api/accounting-vacation-documents': accountingVacationDocuments,
  '/api/accounting-email-process': accountingEmailProcess,
};

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const MAX_BODY_BYTES = 4_400_000;

async function runHandler(handler: Handler, request: Request, env: Env): Promise<Response> {
  const g = globalThis as any;
  // Expõe variáveis do Pages (apenas strings) como process.env para os handlers.
  g.process = g.process || { env: {} };
  g.process.env = g.process.env || {};
  for (const [k, v] of Object.entries(env)) if (typeof v === 'string') g.process.env[k] = v;

  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => { headers[key.toLowerCase()] = value; });

  const declared = Number(headers['content-length'] || 0);
  if (declared > MAX_BODY_BYTES) return json(413, { ok: false, error: 'PDF acima do limite da Function.' });
  const bodyBytes = request.method === 'GET' || request.method === 'HEAD'
    ? new Uint8Array(0)
    : new Uint8Array(await request.arrayBuffer());
  if (bodyBytes.length > MAX_BODY_BYTES) return json(413, { ok: false, error: 'PDF acima do limite da Function.' });

  // Compatibilidade com o runtime da Vercel: IP/host/proto de origem e corpo JSON já interpretado.
  const url = new URL(request.url);
  if (!headers['x-forwarded-for'] && headers['cf-connecting-ip']) headers['x-forwarded-for'] = headers['cf-connecting-ip'];
  if (!headers['x-forwarded-host']) headers['x-forwarded-host'] = url.host;
  if (!headers['x-forwarded-proto']) headers['x-forwarded-proto'] = url.protocol.replace(':', '');
  let parsedBody: unknown = undefined;
  if (bodyBytes.length && /application\/json/i.test(headers['content-type'] || '')) {
    try { parsedBody = JSON.parse(new TextDecoder().decode(bodyBytes)); } catch { parsedBody = undefined; }
  }

  const req: any = {
    method: request.method,
    headers,
    url: request.url,
    body: parsedBody,
    async *[Symbol.asyncIterator]() { if (bodyBytes.length) yield bodyBytes; },
  };

  return await new Promise<Response>((resolve) => {
    let status = 200;
    const outHeaders = new Headers();
    let done = false;
    const finish = (payload: BodyInit | null) => {
      if (done) return;
      done = true;
      resolve(new Response(payload, { status, headers: outHeaders }));
    };
    const res: any = {
      setHeader(name: string, value: string) { outHeaders.set(name, String(value)); return res; },
      status(code: number) { status = code; return res; },
      json(body: unknown) {
        if (!outHeaders.has('content-type')) outHeaders.set('content-type', 'application/json; charset=utf-8');
        finish(JSON.stringify(body));
        return res;
      },
      send(body: unknown) { finish(typeof body === 'string' ? body : JSON.stringify(body)); return res; },
      end(body?: string) { finish(body ?? null); return res; },
    };
    Promise.resolve(handler(req, res)).then((result) => {
      // Handlers que retornam um Response (estilo Web) em vez de usar res.
      if (!done && result instanceof Response) { done = true; resolve(result); return; }
      if (!done) finish(null);
    }).catch((error: any) => {
      console.error('[pages-worker] erro no handler:', error?.message || error);
      status = 500;
      outHeaders.set('content-type', 'application/json; charset=utf-8');
      finish(JSON.stringify({ ok: false, error: 'Erro interno na função.' }));
    });
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (!pathname.startsWith('/api/')) return env.ASSETS.fetch(request);

    const handler = ROUTES[pathname.replace(/\/+$/, '')];
    if (!handler) {
      return json(501, {
        ok: false,
        error: 'api_indisponivel_no_preview',
        message: 'Esta rota /api ainda não foi portada para o Cloudflare. Use o ambiente Vercel ou aguarde a migração.',
        route: pathname,
      });
    }
    return runHandler(handler, request, env);
  },
};
