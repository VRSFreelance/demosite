const CACHE_NAME = "hadaltech-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/css/svg.css",
  "/assets/images/image1.png",
  "/assets/images/image2.png",
  "/assets/images/image3.png",
  "/assets/images/image4.png",
  "/assets/images/contact-support.png",
  "/assets/svg/hero-graphic.svg",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png"
];

// Install SW
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Serve from Cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
