if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>r(e,o),t={module:{uri:o},exports:c,require:l};s[o]=Promise.all(i.map((e=>t[e]||l(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4f586afe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"connectfour"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/assets/arrow.glb",revision:"a0cb405f59b6531c7993f70f47b07dd0"},{url:"/assets/board.glb",revision:"a362e466b7944015f1742772f2f9f4d0"},{url:"/assets/red-disc.glb",revision:"29ab0a47c1c84a6b10ea83c5fd88e247"},{url:"/assets/yellow-disc.glb",revision:"8fa6bccea6773a95a8188082f6c1ea5a"},{url:"/css/app.1c0cf068.css",revision:null},{url:"/css/chunk-vendors.87f8c167.css",revision:null},{url:"/index.html",revision:"7c9f274ccfa858548f32292d12600bd5"},{url:"/js/app.821ae785.js",revision:null},{url:"/js/chunk-vendors.ed564fe7.js",revision:null},{url:"/manifest.json",revision:"694e2509d24b29061bd5621e7d8aa0fb"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
