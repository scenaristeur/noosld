if(!self.define){let e,s={};const o=(o,n)=>(o=new URL(o+".js",n).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const d=e=>o(e,r),t={module:{uri:r},exports:i,require:d};s[r]=Promise.all(n.map((e=>t[e]||d(e)))).then((e=>(l(...e),i)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"noosld"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/noosld/404.html",revision:"da49b2cb68568ea85286895207abde85"},{url:"/noosld/css/app.41bc1633.css",revision:null},{url:"/noosld/css/chunk-vendors.b5df9542.css",revision:null},{url:"/noosld/index.html",revision:"5ebda8f4611458e42c6f24098210690c"},{url:"/noosld/js/about.751b4230.js",revision:null},{url:"/noosld/js/app.653c7962.js",revision:null},{url:"/noosld/js/chunk-vendors.9231d023.js",revision:null},{url:"/noosld/manifest.json",revision:"42c344d088769edae829d27eb2a2680b"},{url:"/noosld/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
