import { describe, expect, it } from 'vitest';
import worker from '../../cloudflare/worker';

const env: any = {
  ASSETS: { fetch: async (r: Request) => new Response(`ASSET:${new URL(r.url).pathname}`) },
  VITE_SUPABASE_URL: 'https://zlzydfdcirdbfbyaiyzk.supabase.co',
  VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_test',
};
const call = (path: string, init?: RequestInit) => worker.fetch(new Request(`https://preview.test${path}`, init), env);

describe('Cloudflare Pages worker', () => {
  it('serve arquivos estáticos e rotas do SPA pelo ASSETS', async () => {
    expect(await (await call('/')).text()).toBe('ASSET:/');
    expect(await (await call('/login')).text()).toBe('ASSET:/login');
  });

  it('responde JSON 501 (fail-closed) para /api não portada, nunca HTML', async () => {
    const res = await call('/api/portal-access', { method: 'POST' });
    expect(res.status).toBe(501);
    expect(res.headers.get('content-type')).toContain('application/json');
    expect(await res.json()).toMatchObject({ ok: false, error: 'api_indisponivel_no_preview' });
  });

  it('frota-upload exige método POST e sessão autenticada', async () => {
    expect((await call('/api/frota-upload')).status).toBe(405);
    const noToken = await call('/api/frota-upload', { method: 'POST', body: 'x' });
    expect(noToken.status).toBe(401);
  });

  it('rejeita corpo acima do limite antes de ler o upload', async () => {
    const res = await call('/api/frota-upload', {
      method: 'POST',
      headers: { authorization: 'Bearer x', 'content-length': '9999999' },
      body: 'x',
    });
    expect(res.status).toBe(413);
  });
});
