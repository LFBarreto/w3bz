"use strict";

// Workbox RuntimeCaching config: https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.RuntimeCachingEntry
module.exports = [
  {
    urlPattern: /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
    handler: "CacheFirst",
    options: {
      cacheName: "google-fonts-webfonts",
      expiration: {
        maxEntries: 4,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
      },
    },
  },
  {
    urlPattern: /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "google-fonts-stylesheets",
      expiration: {
        maxEntries: 4,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      },
    },
  },
  {
    urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "static-font-assets",
      expiration: {
        maxEntries: 4,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      },
    },
  },
  {
    urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "static-image-assets",
      expiration: {
        maxEntries: 64,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\/_next\/image\?url=.+$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "next-image",
      expiration: {
        maxEntries: 64,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:mp3|wav|ogg)$/i,
    handler: "CacheFirst",
    options: {
      rangeRequests: true,
      cacheName: "static-audio-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:mp4)$/i,
    handler: "CacheFirst",
    options: {
      rangeRequests: true,
      cacheName: "static-video-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:js)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "static-js-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:css|less)$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "static-style-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\/_next\/data\/.+\/.+\.json$/i,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "next-data",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: /\.(?:json|xml|csv)$/i,
    handler: "NetworkFirst",
    options: {
      cacheName: "static-data-assets",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
  {
    urlPattern: ({ url }) => {
      const isSameOrigin = self.origin === url.origin;
      return !isSameOrigin;
    },
    handler: "NetworkFirst",
    options: {
      cacheName: "cross-origin",
      expiration: {
        maxEntries: 32,
        maxAgeSeconds: 60 * 60, // 1 hour
      },
      networkTimeoutSeconds: 10,
    },
  },
  {
    urlPattern: /^https:\/\/polygon-mainnet\.infura\.io\/v3\/*/,
    handler: "CacheFirst",
    method: "POST",
    options: {
      cacheName: "infura-api",
      expiration: {
        maxEntries: 25,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      },
    },
  },
];