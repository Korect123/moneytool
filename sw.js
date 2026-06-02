/* 账本 Ledger — 极简 service worker
   - HTML 走 network-first：Vercel 一更新，app 立刻是新版（联网时不会卡旧版）
   - 静态库/图标走 cache-first：启动更快、可离线加载界面外壳
   - 跨域请求（Supabase 同步 / AI 接口）完全不拦截 */
const CACHE = 'ledger-shell-v1';
const ASSETS = [
  './index.html',
  './supabase.min.js',
  './chart.min.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // 只处理同源 GET；Supabase / AI 等跨域请求放行，绝不缓存
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;

  // HTML / 导航：network-first，离线再回退缓存
  if (e.request.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./index.html').then(r => r || caches.match(e.request)))
    );
    return;
  }

  // 其它静态资源：cache-first，缺失则取网络并回填缓存
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      const cp = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, cp));
      return resp;
    }))
  );
});
