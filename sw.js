// Service worker ของ kungrc.dev — ออฟไลน์ได้เฉพาะหน้าเว็บ คู่มือ ผังพิน (ไม่เก็บเฟิร์มแวร์ ตามที่เจ้าของเลือก 2026-11-05)
// เปลี่ยนรายการ SHELL เมื่อไหร่ให้ขยับเลข CACHE
const CACHE = 'kungrc-v1';
const SHELL = ['./', 'index.html', 'orbitron.ttf', 'cyd_pinout.jpg', 'manifest.webmanifest',
  'icons/favicon-32.png', 'icons/favicon-16.png', 'icons/icon-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// คีย์แคชไม่เอา query — หน้าเว็บดึง manifest ด้วย ?_=เวลา ทุกครั้ง ไม่งั้นแคชโตไม่หยุด
const key = url => url.split('?')[0];

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const same = url.origin === self.location.origin;
  if (!same && url.hostname !== 'unpkg.com') return;          // ESP Web Tools มาจาก unpkg
  if (/\.bin$/.test(url.pathname) || /\/ota/.test(url.pathname)) return;   // เฟิร์มแวร์: เน็ตอย่างเดียว

  const fresh = req.mode === 'navigate' || /\.(html|json|webmanifest)$/.test(url.pathname) || url.pathname.endsWith('/');
  if (fresh) {
    // หน้าเว็บ/เลขรุ่น: เน็ตก่อนเสมอ (รุ่นต้องสด) ตกเน็ตค่อยใช้ของเก่า
    e.respondWith(fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key(req.url), copy)); }
      return res;
    }).catch(() => caches.match(key(req.url)).then(r => r || caches.match('index.html'))));
    return;
  }
  // ฟอนต์ รูป ไอคอน สคริปต์: ใช้ของในแคชทันที แล้วอัปเดตเบื้องหลัง
  e.respondWith(caches.match(key(req.url)).then(hit => {
    const net = fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key(req.url), copy)); }
      return res;
    }).catch(() => hit || Response.error());
    return hit || net;
  }));
});
