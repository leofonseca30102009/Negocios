// Service worker do app Negócios: deixa instalar e mostra um aviso quando estiver sem internet.
const OFFLINE = '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sem internet</title><body style="font-family:-apple-system,system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0;background:#e4e4e9;color:#111"><div style="text-align:center;padding:24px"><h1 style="font-size:22px">Sem internet</h1><p>Confira a conexão e tente de novo.</p><button onclick="location.reload()" style="font:inherit;border:0;border-radius:999px;padding:10px 18px;background:#0071e3;color:#fff">Tentar de novo</button></div></body></html>';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(OFFLINE, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
