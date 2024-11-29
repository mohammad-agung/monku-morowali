importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox)
    console.log(`Workbox berhasil dimuat`);
else
    console.log(`Workbox gagal dimuat`);

workbox.core.skipWaiting();

workbox.precaching.precacheAndRoute([
    {
        url: "/index.html",
        revision: '1'
    },
    {
        url: "/sw.js",
        revision: '1'
    },
    {
        url: "/manifest.json",
        revision: '1'
    },
    {
        url: "/assets/css/styles.css",
        revision: '1'
    },
    {
        url: "/assets/css/weather.css",
        revision: '1'
    },
    {
        url: "/assets/icon/icon32.png",
        revision: '1'
    },
    {
        url: "/assets/icon/icon64.png",
        revision: '1'
    },
    {
        url: "/assets/icon/icon128.png",
        revision: '1'
    },
    {
        url: "/assets/icon/icon256.png",
        revision: '1'
    },
    {
        url: "/assets/icon/icon512.png",
        revision: '1'
    },
    {
        url: "/assets/js/api.js",
        revision: '1'
    },
    {
        url: "/assets/js/home.js",
        revision: '1'
    },
    {
        url: "/assets/js/notifikasi.js",
        revision: '1'
    },
    {
        url: "/assets/video/moku.mp4",
        revision: '1'
    }
], {
    ignoreURLParametersMatching: [/.*/]
});


workbox.routing.registerRoute(
    /^http:\/\/monku\-\morowali\.\.\/api\//,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'moku-api',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 120,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
            }),
        ],
    })
);

workbox.routing.registerRoute(
    /\.(?:png|jpg|svg|jpeg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
            }),
        ],
    })
);

workbox.routing.registerRoute(
    /\.(?:mp4)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'video',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
            }),
        ],
    })
);


self.addEventListener('push', function (event) {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: body,
        icon: '/assets/icon/icon32.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});