'use strict';
importScripts('sw-toolbox.js');
toolbox.precache(["index.html","style.css"]);
toolbox.router.get('/img/icon/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});