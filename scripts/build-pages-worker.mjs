// Gera dist/_worker.js (Cloudflare Pages, advanced mode) a partir de cloudflare/worker.ts
import { rolldown } from 'rolldown';
import path from 'node:path';
import fs from 'node:fs';

const root = process.cwd();
const out = path.join(root, 'dist', '_worker.js');
if (!fs.existsSync(path.join(root, 'dist'))) throw new Error('Rode o build do site antes (dist/ ausente).');

const bundle = await rolldown({
  input: path.join(root, 'cloudflare', 'worker.ts'),
  platform: 'browser',
  resolve: {
    conditionNames: ['worker', 'browser', 'import', 'default'],
    alias: {
      'pdfjs-dist/legacy/build/pdf.mjs': path.join(root, 'cloudflare', 'stubs', 'pdfjs-stub.ts'),
      'pdfjs-dist/legacy/build/pdf.worker.min.mjs': path.join(root, 'cloudflare', 'stubs', 'pdfjs-stub.ts'),
      '@napi-rs/canvas': path.join(root, 'cloudflare', 'stubs', 'pdfjs-stub.ts'),
    },
  },
  external: [/^node:/],
  logLevel: 'warn',
});
await bundle.write({ file: out, format: 'esm', codeSplitting: false });
console.log('worker gerado:', out, fs.statSync(out).size, 'bytes');
