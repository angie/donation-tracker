"use strict";var precacheConfig=[["/donation-tracker/index.html","970b2af882eb1cb657c0c232901d8740"],["/donation-tracker/static/css/main.8e76b009.css","159ff5ab8a37a7efa033ddfb6adbae06"],["/donation-tracker/static/js/main.0ac70d43.js","17d35a28dde4f802331b8a502ed0b7c9"],["/donation-tracker/static/media/12d643f2-3899-49d5-a85b-ff430f5fad15.a26d0a97.eot","a26d0a973355e486cd9cff6b42d53205"],["/donation-tracker/static/media/18839597-afa8-4f0b-9abb-4a30262d0da8.6e2731ae.ttf","6e2731aee2ade7a0abb5072c7cdc1b6a"],["/donation-tracker/static/media/1a7c9181-cd24-4943-a9d9-d033189524e0.13be2b0b.eot","13be2b0b8c29bd0cec24ac1c6c0ccd12"],["/donation-tracker/static/media/1de7e6f4-9d4d-47e7-ab23-7d5cf10ab585.2122e4fd.svg","2122e4fd260ea9d8e27a57ebbdeb9962"],["/donation-tracker/static/media/1e9892c0-6927-4412-9874-1b82801ba47a.a17c827d.woff","a17c827d23b2077f3be3824965774bba"],["/donation-tracker/static/media/2cd55546-ec00-4af9-aeca-4a3cd186da53.457e94a5.woff2","457e94a5b665614917d1dc45a13d97b8"],["/donation-tracker/static/media/46cf1067-688d-4aab-b0f7-bd942af6efd8.7c6fbea2.ttf","7c6fbea20b5d03a764465cea64c89987"],["/donation-tracker/static/media/4862b373-2643-46b1-b0b5-88537c52d15c.e32f0114.svg","e32f0114dca2034c5fa05c1e0e746785"],["/donation-tracker/static/media/52a192b1-bea5-4b48-879f-107f009b666f.c8f32e0c.svg","c8f32e0c10b8af8949d253fdff2165f6"],["/donation-tracker/static/media/627fbb5a-3bae-4cd9-b617-2f923e29d55e.24932ad0.woff2","24932ad03d1891ed270a4ede16bdf03e"],["/donation-tracker/static/media/63a74598-733c-4d0c-bd91-b01bffcd6e69.f828f3ce.ttf","f828f3cec274290a7ff24cad74872b1f"],["/donation-tracker/static/media/687932cb-145b-4690-a21d-ed1243db9e36.fee7f6b0.woff2","fee7f6b07451c77e66f08eeecd50d1b1"],["/donation-tracker/static/media/7377dbe6-f11a-4a05-b33c-bc8ce1f60f84.2b7037ef.woff2","2b7037ef717e05e1950802a5f09beab5"],["/donation-tracker/static/media/770d9a7e-8842-4376-9319-8f2c8b8e880d.94a737b6.eot","94a737b6503649b54ba95e2ee832ee0a"],["/donation-tracker/static/media/91b50bbb-9aa1-4d54-9159-ec6f19d14a7c.7d6afb9b.woff","7d6afb9bfc9ae3dda53b3b8feb59c684"],["/donation-tracker/static/media/92b66dbd-4201-4ac2-a605-4d4ffc8705cc.8d680843.woff","8d68084351a47c845fecc8806e0466fd"],["/donation-tracker/static/media/99affa9a-a5e9-4559-bd07-20cf0071852d.29fab215.svg","29fab21500612b0a00d3229236ec3caf"],["/donation-tracker/static/media/a0f4c2f9-8a42-4786-ad00-fce42b57b148.220cfb22.ttf","220cfb221bdc9389b51641b4faa08627"],["/donation-tracker/static/media/a89d6ad1-a04f-4a8f-b140-e55478dbea80.5a510be9.svg","5a510be9cd7b06297e7f3869fa893760"],["/donation-tracker/static/media/aad99a1f-7917-4dd6-bbb5-b07cedbff64f.d42bfc91.woff2","d42bfc911f5d68722bc0e2bb0f0e46d3"],["/donation-tracker/static/media/bc13ae80-cd05-42b4-b2a9-c123259cb166.f13e80f8.ttf","f13e80f8ba5194411bb81e22e5ef764f"],["/donation-tracker/static/media/bc350df4-3100-4ce1-84ce-4a5363dbccfa.d5ffbc66.woff","d5ffbc6688ebf0b1b882d2d210beed6b"],["/donation-tracker/static/media/coopicons.2349c192.ttf","2349c19294fbf39f9912ccfc7c9727e2"],["/donation-tracker/static/media/coopicons.371b2ed5.woff","371b2ed58cdf140bb33c6ca08c658c24"],["/donation-tracker/static/media/coopicons.5cd89568.eot","5cd895682c999d35c3893f06d30049b4"],["/donation-tracker/static/media/coopicons.b67698d8.svg","b67698d8d19d7b20e2e8410efb321d17"],["/donation-tracker/static/media/d1fddef1-d940-4904-8f6c-17e809462301.826fe77c.eot","826fe77c30bd98a42be18e31e9aeddb2"],["/donation-tracker/static/media/e9167238-3b3f-4813-a04a-a384394eed42.e1d3b592.eot","e1d3b592f63bc8e9c80e8f5d6c6111e9"],["/donation-tracker/static/media/f26faddb-86cc-4477-a253-1e1287684336.6b04d165.woff","6b04d1656ab054b0e3feea2c2eb0355e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/donation-tracker/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});