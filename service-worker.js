"use strict";var precacheConfig=[["/react-music-searcher/index.html","3cf9522e42096d448fb327cc8493519f"],["/react-music-searcher/static/css/vendors.b739c18c.chunk.css","d41d8cd98f00b204e9800998ecf8427e"],["/react-music-searcher/static/js/1.755d2940.chunk.js","ea2e09b213f33c8f93f0fd6e451ef185"],["/react-music-searcher/static/js/2.041c2724.chunk.js","c1e9e8f44d4377c797394391c8169ee6"],["/react-music-searcher/static/js/3.405c036f.chunk.js","3285f624eec1d7a4e95575fa2db6ea4e"],["/react-music-searcher/static/js/4.e6994428.chunk.js","4dded221901f8ddec864e6dfe284deb7"],["/react-music-searcher/static/js/5.9a5e8a27.chunk.js","b1b52d6124122780f9e21bf18c5dc694"],["/react-music-searcher/static/js/main.58449ce1.chunk.js","ffb66da611132c681d01143ec883149a"],["/react-music-searcher/static/js/runtime~main.e2fc7af3.js","aabec25c10bed3f90d0fe2d0234817ec"],["/react-music-searcher/static/js/vendors.98181cf3.chunk.js","2b3a6f25ed3e84adda17fe269467112c"],["/react-music-searcher/static/media/roboto-latin-100.987b8457.woff2","987b84570ea69ee660455b8d5e91f5f1"],["/react-music-searcher/static/media/roboto-latin-100.e9dbbe8a.woff","e9dbbe8a693dd275c16d32feb101f1c1"],["/react-music-searcher/static/media/roboto-latin-100italic.6232f43d.woff2","6232f43d15b0e7a0bf0fe82e295bdd06"],["/react-music-searcher/static/media/roboto-latin-100italic.d704bb3d.woff","d704bb3d579b7d5e40880c75705c8a71"],["/react-music-searcher/static/media/roboto-latin-300.55536c8e.woff2","55536c8e9e9a532651e3cf374f290ea3"],["/react-music-searcher/static/media/roboto-latin-300.a1471d1d.woff","a1471d1d6431c893582a5f6a250db3f9"],["/react-music-searcher/static/media/roboto-latin-300italic.210a7c78.woff","210a7c781f5a354a0e4985656ab456d9"],["/react-music-searcher/static/media/roboto-latin-300italic.d69924b9.woff2","d69924b98acd849cdeba9fbff3f88ea6"],["/react-music-searcher/static/media/roboto-latin-400.5d4aeb4e.woff2","5d4aeb4e5f5ef754e307d7ffaef688bd"],["/react-music-searcher/static/media/roboto-latin-400.bafb105b.woff","bafb105baeb22d965c70fe52ba6b49d9"],["/react-music-searcher/static/media/roboto-latin-400italic.9680d5a0.woff","9680d5a0c32d2fd084e07bbc4c8b2923"],["/react-music-searcher/static/media/roboto-latin-400italic.d8bcbe72.woff2","d8bcbe724fd6f4ba44d0ee6a2675890f"],["/react-music-searcher/static/media/roboto-latin-500.28546717.woff2","285467176f7fe6bb6a9c6873b3dad2cc"],["/react-music-searcher/static/media/roboto-latin-500.de8b7431.woff","de8b7431b74642e830af4d4f4b513ec9"],["/react-music-searcher/static/media/roboto-latin-500italic.510dec37.woff2","510dec37fa69fba39593e01a469ee018"],["/react-music-searcher/static/media/roboto-latin-500italic.ffcc050b.woff","ffcc050b2d92d4b14a4fcb527ee0bcc8"],["/react-music-searcher/static/media/roboto-latin-700.037d8304.woff2","037d830416495def72b7881024c14b7b"],["/react-music-searcher/static/media/roboto-latin-700.cf6613d1.woff","cf6613d1adf490972c557a8e318e0868"],["/react-music-searcher/static/media/roboto-latin-700italic.010c1aee.woff2","010c1aeee3c6d1cbb1d5761d80353823"],["/react-music-searcher/static/media/roboto-latin-700italic.846d1890.woff","846d1890aee87fde5d8ced8eba360c3a"],["/react-music-searcher/static/media/roboto-latin-900.19b7a0ad.woff2","19b7a0adfdd4f808b53af7e2ce2ad4e5"],["/react-music-searcher/static/media/roboto-latin-900.8c2ade50.woff","8c2ade503b34e31430d6c98aa29a52a3"],["/react-music-searcher/static/media/roboto-latin-900italic.7b770d6c.woff2","7b770d6c53423deb1a8e49d3c9175184"],["/react-music-searcher/static/media/roboto-latin-900italic.bc833e72.woff","bc833e725c137257c2c42a789845d82f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});