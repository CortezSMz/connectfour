(function(){"use strict";var e={4912:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Scene")],1)},i=[],s=n(2751),a=n(6133),c=n(796),l=n(7237),d=n(9726),u=(n(5003),n(1539),n(1299),n(4958)),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scene",staticClass:"scene"},[n("Board",{attrs:{size:16}})],1)},h=[],p=n(3263),v=n(3796),m=(n(2222),n(6599)),g=n(3448),y=n(5200);n(4916),n(3123),n(9714),n(9720);function Z(e,t){return e.uuid+t.toString().split("").reduce((function(e,t){return e=(e<<5)-e+t.charCodeAt(0),e&e}),0)}var w=function(){function e(t,n){(0,a.Z)(this,e),(0,v.Z)(this,"listeners",{}),(0,v.Z)(this,"raycaster",new m.iMs),(0,v.Z)(this,"mouse",new m.FM8),(0,v.Z)(this,"camera",void 0),(0,v.Z)(this,"element",void 0),this.camera=t,this.element=n}return(0,s.Z)(e,[{key:"raycast",value:function(e,t,n){this.mouse.x=e.clientX/this.element.clientWidth*2-1,this.mouse.y=-e.clientY/this.element.clientHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);var r=this.raycaster.intersectObjects([t])[0];r&&n(e)}},{key:"on",value:function(e,t,n){var r=this;if(this.listeners[e]||(this.listeners[e]={}),t){var o=function(e){return r.raycast(e,t,n)},i=this.listeners[e],s=Z(t,n);i&&(i[s]=o,this.element.addEventListener(e,o))}}},{key:"off",value:function(e,t,n){if(t){var r=Z(t,n),o=this.listeners[e];if(o){var i=o[r];i&&(this.element.removeEventListener(e,i),delete o[r],o[r]=void 0)}}}},{key:"removeAll",value:function(){for(var e=0,t=Object.entries(this.listeners);e<t.length;e++)for(var n=(0,y.Z)(t[e],2),r=n[0],o=n[1],i=0,s=Object.entries(o);i<s.length;i++){var a=(0,y.Z)(s[i],2),c=a[0],l=a[1];this.element.removeEventListener(r,l),this.listeners[c]=void 0,delete this.listeners[c]}this.listeners}}]),e}(),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.assets?n("div",[e._l(this.manager.board.grid[0].filter((function(e){return!e.filled})),(function(e){return n("Arrow",{key:e.x,attrs:{col:e.x}})})),e._l(this.manager.board.discs.slice(0,42),(function(e){return n("Disc",{key:e.id,attrs:{x:e.x,z:e.z,id:e.id,color:e.color,dropped:e.dropped}})})),n("Controls")],2):e._e()},k=[],x=n(6903),$=(n(9826),n(4553),function(){function e(){(0,a.Z)(this,e),(0,v.Z)(this,"discs",[]),(0,v.Z)(this,"grid",void 0),this.grid=this.createGrid(),this.spawnNext(-1,"YELLOW")}return(0,s.Z)(e,[{key:"createGrid",value:function(){for(var e=[],t=.02822279930114746,n=.0847,r=.0679,o=0;o<6;o++){e[o]=[];for(var i=0;i<7;i++)e[o].push({x:i*t-n,z:o*t-r,filled:!1})}return e}},{key:"isValidLocation",value:function(e){for(var t=this.grid.length-1;t>=0;t--){var n=this.grid[this.grid.length-1].findIndex((function(t){return t.x===e}));if(!this.grid[t][n].filled)return this.grid[t][n].filled=!0,this.grid[t][n]}return null}},{key:"spawnNext",value:function(e,t){this.discs.push({id:e+1,color:"RED"===t?"YELLOW":"RED",dropped:!1,x:0,z:-.14})}},{key:"getDiscById",value:function(e){return this.discs.find((function(t){return t.id===e}))}}]),e}()),O=function(){function e(){(0,a.Z)(this,e),(0,v.Z)(this,"board",void 0),(0,v.Z)(this,"dropping",void 0),this.board=new $,this.dropping=!1}return(0,s.Z)(e,[{key:"drop",value:function(e){if(!this.dropping){var t=this.board.isValidLocation(e);if(t){this.dropping=!0;var n=this.getCurrentDisc();if(!n)return;n.x=t.x,n.z=t.z,n.dropped=!0}}}},{key:"getCurrentDisc",value:function(){return this.board.discs.find((function(e){return!e.dropped}))}}]),e}(),j=n(2932),R=n(7039),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:this.col+"-arrow"}})},z=[],_=(n(9653),function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,d.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),P=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),(0,v.Z)((0,p.Z)(e),"col",void 0),(0,v.Z)((0,p.Z)(e),"model",void 0),(0,v.Z)((0,p.Z)(e),"$parent",void 0),e}return(0,s.Z)(n,[{key:"addToBoard",value:function(e){var t=this,n=this.$parent.model;n?n.scene.add(this.model.scene):setTimeout((function(){t.addToBoard(e)}),250)}},{key:"moveCurrentDisc",value:function(){try{var e=this.$parent.manager.getCurrentDisc();e&&e.model&&j.ZP.to(e.model.scene.position,{duration:2,ease:"elastic",x:this.col})}catch(t){console.log(t)}}}]),n}(u.w3);_([(0,u.fI)({type:Number,required:!0})],P.prototype,"col",void 0),P=_([(0,u.wA)({mounted:function(){var e=this;return this.$parent.gltfLoader.load("assets/arrow.glb",(function(t){e.model=t,e.model.scene.position.set(e.col,0,-.1),e.$parent.$parent.raycaster.on("pointermove",e.model.scene,e.moveCurrentDisc),e.$parent.$parent.raycaster.on("pointerdown",e.model.scene,(function(){return e.$parent.manager.drop(e.col)})),j.ZP.timeline({repeat:-1,yoyo:!0,defaults:{duration:.25}}).to(e.model.scene.position,{z:-.105}),e.addToBoard(e.model)}))},destroyed:function(){this.$parent.model.scene.remove(this.model.scene),this.$parent.$parent.raycaster.off("pointermove",this.model.scene,this.moveCurrentDisc)}})],P);var L=P,D=L,A=n(1001),E=(0,A.Z)(D,C,z,!1,null,null,null),T=E.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{color:"primary lighten-1",app:""}},[n("v-row",{staticClass:"footer-row text-center",attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{light:"",color:"primary lighten-1",fab:"",small:"",href:"https://github.com/CortezSMz/connectfour",target:"blank"}},[n("font-awesome-icon",{staticStyle:{color:"white"},attrs:{icon:"fa-brands fa-github",transform:"grow-2",size:"3x"}})],1)],1),n("v-col",{attrs:{cols:"8"}},[n("strong",[e._v("Connect Four")])]),n("v-col",{attrs:{cols:"2"}},[n("v-bottom-sheet",{scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{light:"",fab:"",small:""}},"v-btn",o,!1),r),[n("font-awesome-icon",{style:{color:"var(--v-primary-lighten1)"},attrs:{icon:"gear",size:"2x"}})],1)]}}]),model:{value:e.controls,callback:function(t){e.controls=t},expression:"controls"}},[n("v-sheet",{staticClass:"footer-sheet",attrs:{color:"primary lighten-1"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h3",[e._v("Connect Four")]),n("p",[e._v(" The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four discs. ")])]),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{staticClass:"footer-btn",attrs:{rounded:"",light:""},on:{click:e.resetCamera}},[e._v("Reset camera")]),n("v-btn",{staticClass:"footer-btn",attrs:{rounded:"",light:""},on:{click:e.resetGame}},[e._v("Reset game")])],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[e._e()],1)],1)],1)],1)],1)],1)},B=[],I=n(7310),F=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,d.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},N=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),(0,v.Z)((0,p.Z)(e),"$parent",void 0),e}return(0,s.Z)(n,[{key:"resetCamera",value:function(){this.$parent.$parent.resetCamera(),this.close()}},{key:"resetGame",value:function(){this.$parent.resetGame(),this.close()}},{key:"save",value:function(){this.close()}},{key:"close",value:function(){this.$data.controls=!this.$data.controls}}]),n}(r.Z);N=F([(0,I.ZP)({data:function(){return{controls:!1}}})],N);var M=N,V=M,W=n(3453),q=n.n(W),G=n(9706),H=n(7369),X=n(2102),Y=n(5652),J=n(2877),K=n(4308),Q=(0,A.Z)(V,S,B,!1,null,null,null),U=Q.exports;q()(Q,{VBottomSheet:G.Z,VBtn:H.Z,VCol:X.Z,VFooter:Y.Z,VRow:J.Z,VSheet:K.Z});var ee=function(){var e=this,t=e.$createElement;e._self._c;return e._e()},te=[],ne=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,d.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};j.p8.registerPlugin(R.X);var re=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),(0,v.Z)((0,p.Z)(e),"color",void 0),(0,v.Z)((0,p.Z)(e),"id",void 0),(0,v.Z)((0,p.Z)(e),"x",void 0),(0,v.Z)((0,p.Z)(e),"z",void 0),(0,v.Z)((0,p.Z)(e),"dropped",void 0),(0,v.Z)((0,p.Z)(e),"model",void 0),(0,v.Z)((0,p.Z)(e),"$parent",void 0),e}return(0,s.Z)(n,[{key:"isDropped",value:function(){this.drop()}},{key:"addToBoard",value:function(e){var t=this,n=this.$parent.model;n?(n.scene.add(this.model.scene),j.p8.timeline({defaults:{ease:"elastic"}}).from(this.model.scene.scale,{x:0,y:0,z:0})):setTimeout((function(){t.addToBoard(e)}),250)}},{key:"drop",value:function(){var e=this;j.p8.fromTo(this.model.scene.position,{x:this.x},{x:this.x,z:this.z,duration:.5,ease:"bounce",onComplete:function(){setTimeout((function(){e.$parent.manager.board.spawnNext(e.id,e.color),e.$parent.manager.dropping=!1}),250)}})}}]),n}(u.w3);ne([(0,u.fI)({type:String,required:!0})],re.prototype,"color",void 0),ne([(0,u.fI)({type:Number,required:!0})],re.prototype,"id",void 0),ne([(0,u.fI)({type:Number,required:!0})],re.prototype,"x",void 0),ne([(0,u.fI)({type:Number,required:!0})],re.prototype,"z",void 0),ne([(0,u.fI)({type:Boolean,required:!0})],re.prototype,"dropped",void 0),ne([(0,u.RL)("dropped")],re.prototype,"isDropped",null),re=ne([(0,u.wA)({mounted:function(){var e=this;return this.$parent.gltfLoader.load("assets/".concat(this.color.toLowerCase(),"-disc.glb"),(function(t){e.model=t;var n=e.$parent.manager.board.getDiscById(e.id);n&&(n.model=e.model),e.model.scene.position.x=e.x,e.model.scene.position.z=e.z,e.addToBoard(e.model)}))},destroyed:function(){this.$parent.model.scene.remove(this.model.scene)}})],re);var oe=re,ie=oe,se=(0,A.Z)(ie,ee,te,!1,null,null,null),ae=se.exports,ce=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,d.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};j.p8.registerPlugin(R.X);var le=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),(0,v.Z)((0,p.Z)(e),"gltfLoader",new x.E),(0,v.Z)((0,p.Z)(e),"manager",new O),(0,v.Z)((0,p.Z)(e),"assets",void 0),(0,v.Z)((0,p.Z)(e),"model",void 0),(0,v.Z)((0,p.Z)(e),"disc",void 0),(0,v.Z)((0,p.Z)(e),"$parent",void 0),e}return(0,s.Z)(n,[{key:"generateBoard",value:function(){var e=this;this.$nextTick((function(){e.gltfLoader.load("assets/board.glb",(function(t){e.model=t,e.model.scene.rotateX(Math.PI/2),e.model.scene.rotateY(0),e.$parent.scene.add(t.scene)}))}))}},{key:"dropDisc",value:function(){j.p8.to(this.disc.scene.position,{ease:"bounce",z:.0725})}},{key:"resetGame",value:function(){var e=this;this.manager=new O,this.$parent.raycaster.removeAll(),this.assets=!1,this.$nextTick((function(){return e.assets=!0}))}}]),n}(u.w3);le=ce([(0,u.wA)({data:function(){return{assets:!0}},components:{Arrow:T,Disc:ae,Controls:U},mounted:function(){this.generateBoard()},destroyed:function(){this.$parent.scene.remove(this.model.scene)}})],le);var de=le,ue=de,fe=(0,A.Z)(ue,b,k,!1,null,null,null),he=fe.exports,pe=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,d.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},ve=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),(0,v.Z)((0,p.Z)(e),"hemisphereLight",new m.vmT(11184810,0,.9)),(0,v.Z)((0,p.Z)(e),"directionalLight",new m.Ox3(16777215,.9)),(0,v.Z)((0,p.Z)(e),"ambientLight",new m.Mig(14452852,.5)),(0,v.Z)((0,p.Z)(e),"renderer",new m.CP7({alpha:!0,antialias:!0})),(0,v.Z)((0,p.Z)(e),"camera",void 0),(0,v.Z)((0,p.Z)(e),"controls",void 0),(0,v.Z)((0,p.Z)(e),"raycaster",void 0),(0,v.Z)((0,p.Z)(e),"scene",new m.xsS),e}return(0,s.Z)(n,[{key:"resetCamera",value:function(){this.camera.position.set(0,0,.25)}},{key:"animate",value:function(){this.renderer.render(this.scene,this.camera),this.controls.update(),requestAnimationFrame(this.animate)}},{key:"onWindowResize",value:function(){this.camera&&this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}}]),n}(u.w3);ve=pe([(0,u.wA)({components:{Board:he},mounted:function(){this.camera=new m.cPb(90,window.innerWidth/window.innerHeight,.1,1e3),this.controls=new g.z(this.camera,this.renderer.domElement),this.raycaster=new w(this.camera,this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",this.onWindowResize,!1),this.scene.add(this.ambientLight,this.hemisphereLight,this.directionalLight),this.scene.background=new m.Ilk(15921906),this.directionalLight.position.set(150,350,350),this.$refs.scene.appendChild(this.renderer.domElement),this.controls.enablePan=!1,this.resetCamera(),this.animate()}})],ve);var me=ve,ge=me,ye=(0,A.Z)(ge,f,h,!1,null,null,null),Ze=ye.exports,we=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,d.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},be=function(e){(0,c.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n)}(u.w3);be=we([(0,u.wA)({components:{Scene:Ze}})],be);var ke=be,xe=ke,$e=n(7524),Oe=(0,A.Z)(xe,o,i,!1,null,null,null),je=Oe.exports;q()(Oe,{VApp:$e.Z});var Re=n(563);(0,Re.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ce=n(5613);r.Z.use(Ce.Z);var ze=new Ce.Z({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:"#2361d7",secondary:"#FF0000"}}},icons:{iconfont:"fa"}}),_e=n(81),Pe=n(6978),Le=n(4842),De=n(9009);_e.vI.add(Pe.gr5,Pe.r6l,Pe.g82,Le.zhw),r.Z.component("font-awesome-icon",De.GN),r.Z.config.productionTip=!1,new r.Z({vuetify:ze,render:function(e){return e(je)}}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],c=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(t&&t(r);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self["webpackChunkconnectfour"]=self["webpackChunkconnectfour"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4912)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.aef3d1db.js.map