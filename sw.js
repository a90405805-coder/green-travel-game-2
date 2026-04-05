const CACHE_NAME = 'green-planning-v2';
// 列出所有需要離線使用的檔案
const ASSETS = [
  'index2.html',
  '1.png', '2.png', '3.png', '4.png',
  '1-1.png', '1-2.png', '1-3.png', '1-4.png', '1-5.png', '1-6.png', '1-7.png', '1-8.png', '1-9.png',
  '2-1.png', '2-2.png', '2-3.png', '2-4.png', '2-5.png',
  '3-1.png', '3-2.png',
  '4-1.png', '4-2.png', '4-3.png',
  'success.mp3',
  'error.mp3',
  'applaud.mp3',
  'itsOK.mp3',
  'icon-512.png',
  'manifest2.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});