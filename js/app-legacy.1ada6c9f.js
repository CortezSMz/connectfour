(function(){"use strict";var e={802:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var n=r(8935),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("Scene")],1)},o=[],s=r(2751),a=r(6133),c=r(796),l=r(7237),u=r(9726),d=(r(5003),r(1539),r(1299),r(4958)),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"scene",staticClass:"scene"},[r("Board")],1)},h=[],p=r(3263),v=r(3796),m=(r(2222),r(3226)),g=r(3448),y=r(5200);r(4916),r(3123),r(9714),r(9720);function Z(e,t){return e.uuid+t.toString().split("").reduce((function(e,t){return e=(e<<5)-e+t.charCodeAt(0),e&e}),0)}var w=function(){function e(t,r){(0,a.Z)(this,e),(0,v.Z)(this,"listeners",{}),(0,v.Z)(this,"raycaster",new m.iMs),(0,v.Z)(this,"mouse",new m.FM8),(0,v.Z)(this,"camera",void 0),(0,v.Z)(this,"element",void 0),this.camera=t,this.element=r}return(0,s.Z)(e,[{key:"raycast",value:function(e,t,r){this.mouse.x=e.clientX/this.element.clientWidth*2-1,this.mouse.y=-e.clientY/this.element.clientHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);var n=this.raycaster.intersectObjects([t])[0];n&&r(e)}},{key:"on",value:function(e,t,r){var n=this;if(this.listeners[e]||(this.listeners[e]={}),t){var i=function(e){return n.raycast(e,t,r)},o=this.listeners[e],s=Z(t,r);o&&(o[s]=i,this.element.addEventListener(e,i))}}},{key:"off",value:function(e,t,r){if(t){var n=Z(t,r),i=this.listeners[e];if(i){var o=i[n];o&&(this.element.removeEventListener(e,o),delete i[n],i[n]=void 0)}}}},{key:"removeAll",value:function(){for(var e=0,t=Object.entries(this.listeners);e<t.length;e++)for(var r=(0,y.Z)(t[e],2),n=r[0],i=r[1],o=0,s=Object.entries(i);o<s.length;o++){var a=(0,y.Z)(s[o],2),c=a[0],l=a[1];this.element.removeEventListener(n,l),this.listeners[c]=void 0,delete this.listeners[c]}this.listeners}}]),e}(),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.assets?r("div",[this.manager.state.finished?e._e():r("div",e._l(this.manager.board.grid[0].filter((function(e){return!e.disc})),(function(t){return r("Arrow",{key:t.x,attrs:{col:t.x,currentColor:e.currentColor}})})),1),e._l(this.manager.board.discs.slice(0,42),(function(e){return r("Disc",{key:e.id,attrs:{x:e.x,z:e.z,id:e.id,color:e.color,dropped:e.dropped}})})),r("Controls")],2):e._e()},x=[],k=r(6903),C=(r(9826),r(2032)),$=r(8932),O=(r(7327),function(){function e(t){(0,a.Z)(this,e),(0,v.Z)(this,"manager",void 0),(0,v.Z)(this,"depth",void 0),this.manager=t,this.depth=5}return(0,s.Z)(e,[{key:"getBestMove",value:function(){var e=this.getMoves(),t=(0,y.Z)(e,2),r=t[0],n=t[1],i=r.filter((function(e){return e[1]===n}));if(1===i.length)return i[0];var o=i[Math.floor(Math.random()*i.length)];return o}},{key:"getMoves",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.depth,t=(0,$.Z)(this.manager.board.grid),r=this.minimax(t,e,-1/0,1/0,!0);return r}},{key:"minimax",value:function(e,t,r,n,i){var o=this.manager.check(e);if(null!=o.result||0===t)return"RED"===o.result?[[],-1]:"YELLOW"===o.result?[[],1]:[[],0];if(i){var s,a=[[],r],c=this.manager.board.allValidLocations(e),l=(0,C.Z)(c);try{for(l.s();!(s=l.n()).done;){var u=s.value,d=u.row,f=u.col,h=u.x,p=u.z;e[d][f].disc={dropped:!1,color:"YELLOW",id:-1,x:h,z:p};var v=this.minimax(e,t-1,r,n,!1);if(e[d][f].disc=null,a[0].push([h,v[1]]),v[1]>a[1]&&(a[1]=v[1],r=v[1]),r>=n)return a}}catch(R){l.e(R)}finally{l.f()}return a}var m,g=[[],n],y=this.manager.board.allValidLocations(e),Z=(0,C.Z)(y);try{for(Z.s();!(m=Z.n()).done;){var w=m.value,b=w.row,x=w.col,k=w.x,$=w.z;e[b][x].disc={dropped:!1,color:"RED",id:-1,x:k,z:$};var O=this.minimax(e,t-1,r,n,!0);e[b][x].disc=null,g[0].push([k,O[1]]),O[1]<g[1]&&(g[1]=O[1],n=O[1])}}catch(R){Z.e(R)}finally{Z.f()}return g}}]),e}()),R=r(4367),j=(r(4553),function(){function e(){(0,a.Z)(this,e),(0,v.Z)(this,"discs",[]),(0,v.Z)(this,"grid",void 0),this.grid=this.createGrid()}return(0,s.Z)(e,[{key:"createGrid",value:function(){for(var e=[],t=.02822279930114746,r=.0847,n=.0679,i=0;i<6;i++){e[i]=[];for(var o=0;o<7;o++)e[i].push({x:o*t-r,z:i*t-n,row:i,col:o,disc:null})}return e}},{key:"getColFromXCoord",value:function(e){return this.grid[this.grid.length-1].findIndex((function(t){return t.x===e}))}},{key:"isValidLocation",value:function(e,t){for(var r=e.length-1;r>=0;r--)if(!e[r][t].disc)return(0,R.Z)((0,R.Z)({},e[r][t]),{},{col:t,row:r});return null}},{key:"allValidLocations",value:function(e){for(var t=[],r=0;r<e[0].length;r++){var n=this.isValidLocation(e,r);n&&t.push(n)}return t}},{key:"getDiscById",value:function(e){return this.discs.find((function(t){return t.id===e}))}}]),e}()),E=function(){function e(){(0,a.Z)(this,e),(0,v.Z)(this,"board",void 0),(0,v.Z)(this,"minimax",void 0),(0,v.Z)(this,"dropping",void 0),(0,v.Z)(this,"state",void 0),this.board=new j,this.minimax=new O(this),0===this.board.discs.length&&this.spawnNext(-1,"YELLOW"),this.dropping=!1,this.state={finished:!1}}return(0,s.Z)(e,[{key:"drop",value:function(e){if(!this.dropping){var t=this.getCurrentDisc();if(t){var r=this.board.isValidLocation(this.board.grid,this.board.getColFromXCoord(e));r&&(this.dropping=!0,this.board.grid[r.row][r.col].disc=t,t.x=r.x,t.z=r.z,t.dropped=!0)}}}},{key:"spawnNext",value:function(e,t){var r=this,n=this.check(this.board.grid);if(n.result)return this.state={finished:!0,winner:"TIE"===n.result?"TIE":n.discs[0].color};if(this.board.discs.push({id:e+1,color:"RED"===t?"YELLOW":"RED",dropped:!1,x:0,z:-.14}),"RED"===t){var i=this.minimax.getBestMove();this.dropping=!1,setTimeout((function(){r.drop(i[0]||i)}),100)}setTimeout((function(){r.dropping=!1}),250)}},{key:"check",value:function(e){for(var t=e.length,r=e[0].length,n=0,i=0;i<t;i++)for(var o=0;o<r;o++){var s=e[i][o].disc;if(s){if(o<r-3&&this.fourConnected(s,e[i][o+1].disc,e[i][o+2].disc,e[i][o+3].disc))return{result:s.color,discs:[s,e[i][o+1].disc,e[i][o+2].disc,e[i][o+3].disc]};if(i<t-3&&this.fourConnected(s,e[i+1][o].disc,e[i+2][o].disc,e[i+3][o].disc))return{result:s.color,discs:[s,e[i+1][o].disc,e[i+2][o].disc,e[i+3][o].disc]};if(i<t-3&&o<r-3&&this.fourConnected(s,e[i+1][o+1].disc,e[i+2][o+2].disc,e[i+3][o+3].disc))return{result:s.color,discs:[s,e[i+1][o+1].disc,e[i+2][o+2].disc,e[i+3][o+3].disc]};if(i<t-3&&o>2&&this.fourConnected(s,e[i+1][o-1].disc,e[i+2][o-2].disc,e[i+3][o-3].disc))return{result:s.color,discs:[s,e[i+1][o-1].disc,e[i+2][o-2].disc,e[i+3][o-3].disc]};s&&n++}}return 42===n?{result:"TIE",discs:[]}:{result:null,discs:[]}}},{key:"fourConnected",value:function(e,t,r,n){return!!e&&!!t&&!!r&&!!n&&e.color==t.color&&e.color==r.color&&e.color==n.color}},{key:"getCurrentDisc",value:function(){return this.board.discs.find((function(e){return!e.dropped}))}}]),e}(),z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:this.$parent.manager.board.getColFromXCoord(this.col)+"-arrow"}})},L=[],_=(r(9653),r(2932)),P=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"===typeof Reflect?"undefined":(0,u.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},D=function(e){(0,c.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,v.Z)((0,p.Z)(e),"col",void 0),(0,v.Z)((0,p.Z)(e),"currentColor",void 0),(0,v.Z)((0,p.Z)(e),"model",void 0),(0,v.Z)((0,p.Z)(e),"$parent",void 0),e}return(0,s.Z)(r,[{key:"moveCurrentDisc",value:function(){try{var e=this.$parent.manager.getCurrentDisc();e&&e.model&&_.ZP.to(e.model.position,{duration:2,ease:"elastic",x:this.col})}catch(t){console.log(t)}}}]),r}(d.w3);P([(0,d.fI)({type:Number,required:!0})],D.prototype,"col",void 0),P([(0,d.fI)({type:String,required:!0})],D.prototype,"currentColor",void 0),D=P([(0,d.wA)({mounted:function(){var e=this;return this.$parent.gltfLoader.load("assets/arrow.glb",(function(t){var r=t.scene.children[0];r.removeFromParent(),e.model=r,e.model.position.set(e.col,0,-.1),e.$parent.$parent.raycaster.on("pointermove",e.model,(function(){"RED"===e.currentColor&&e.moveCurrentDisc()})),e.$parent.$parent.raycaster.on("pointerdown",e.model,(function(){"RED"===e.currentColor&&e.$parent.manager.drop(e.col)})),_.ZP.timeline({repeat:-1,yoyo:!0,defaults:{duration:.25}}).to(e.model.position,{z:-.105}),e.$parent.$parent.spawnObject(e.model)}))},destroyed:function(){var e=this;this.$parent.$parent.scene.remove(this.model),this.$parent.$parent.raycaster.off("pointermove",this.model,(function(){"RED"===e.currentColor&&e.moveCurrentDisc}))}})],D);var A=D,F=A,S=r(1001),I=(0,S.Z)(F,z,L,!1,null,null,null),T=I.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{color:"primary",app:""}},[r("v-row",{staticClass:"footer-row text-center",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"2"}},[r("v-btn",{attrs:{light:"",color:"primary",fab:"",small:"",href:"https://github.com/CortezSMz/connectfour",target:"blank"}},[r("font-awesome-icon",{staticStyle:{color:"white"},attrs:{icon:"fa-brands fa-github",transform:"grow-2",size:"3x"}})],1)],1),r("v-col",{attrs:{cols:"8"}},[r("strong",[e._v("Connect Four")])]),r("v-col",{attrs:{cols:"2"}},[r("v-bottom-sheet",{attrs:{persistent:e.finished,eager:"","overlay-opacity":"0.05"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[r("v-btn",e._g(e._b({attrs:{light:"",fab:"",small:""}},"v-btn",i,!1),n),[r("font-awesome-icon",{style:{color:"var(--v-primary-base)"},attrs:{icon:"gear",size:"2x"}})],1)]}}]),model:{value:e.controls,callback:function(t){e.controls=t},expression:"controls"}},[r("v-alert",{staticClass:"text-center",attrs:{color:"primary"},model:{value:e.finished,callback:function(t){e.finished=t},expression:"finished"}},[e._v(" "+e._s(this.$parent.manager.state.finished?"TIE"===this.$parent.manager.state.winner?"it's a tie!":"RED"===this.$parent.manager.state.winner?"🔴 won the game!":"🟡 won the game!":"")+" ")]),r("v-sheet",{staticClass:"footer-sheet",attrs:{color:"primary"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h3",[e._v("Connect Four")]),r("p",[e._v(" The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four discs. ")])]),r("v-col",{attrs:{cols:"10",lg:"6"}},[r("v-slider",{attrs:{readonly:e.finished,color:"secondary",label:"Difficult",min:"1",max:"8","thumb-label":"always",ticks:"always","tick-size":"4","persistent-hint":"",hint:e.difficultHint},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var n=t.value;return[r("span",{staticClass:"v-btn"},[e._v(e._s(n))])]}}]),model:{value:e.$parent.manager.minimax.depth,callback:function(t){e.$set(e.$parent.manager.minimax,"depth",t)},expression:"$parent.manager.minimax.depth"}})],1),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{staticClass:"footer-btn",attrs:{rounded:"",light:""},on:{click:e.resetCamera}},[e._v("Reset camera")]),r("v-btn",{staticClass:"footer-btn",attrs:{rounded:"",light:""},on:{click:e.resetGame}},[e._v("Reset game")])],1)],1)],1)],1)],1)],1)],1)},V=[],N=r(7310),W=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"===typeof Reflect?"undefined":(0,u.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},B=function(e){(0,c.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,v.Z)((0,p.Z)(e),"controls",!1),(0,v.Z)((0,p.Z)(e),"$parent",void 0),e}return(0,s.Z)(r,[{key:"setControls",value:function(){this.controls=!0}},{key:"resetCamera",value:function(){this.$parent.$parent.resetCamera(),this.$parent.manager.state.finished||this.close()}},{key:"resetGame",value:function(){this.$parent.resetGame(),this.close()}},{key:"save",value:function(){this.close()}},{key:"close",value:function(){this.$data.controls=!this.$data.controls}}]),r}(n.Z);W([(0,d.RL)("finished")],B.prototype,"setControls",null),B=W([(0,N.ZP)({computed:{finished:function(){return this.$parent.manager.state.finished},difficultHint:function(){var e={1:"passive",2:"passive",3:"easy",4:"easy",5:"moderate",6:"moderate",7:"tougher",8:"tougher"};return"AI ".concat(this.$parent.manager.state.finished?"was testing":"will test","  ").concat(this.$parent.manager.minimax.depth," plays in the future. (").concat(e[this.$parent.manager.minimax.depth],")")}}})],B);var q=B,G=q,H=r(3453),X=r.n(H),Y=r(3401),J=r(5890),K=r(1948),Q=r(2102),U=r(5652),ee=r(2877),te=r(3439),re=r(4676),ne=(0,S.Z)(G,M,V,!1,null,null,null),ie=ne.exports;X()(ne,{VAlert:Y.Z,VBottomSheet:J.Z,VBtn:K.Z,VCol:Q.Z,VFooter:U.Z,VRow:ee.Z,VSheet:te.Z,VSlider:re.Z});var oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:this.id+"-"+this.color.toLowerCase()+"-disc"}})},se=[],ae=r(6198),ce=(r(8975),r(7039)),le=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"===typeof Reflect?"undefined":(0,u.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};_.p8.registerPlugin(ce.X);var ue=function(e){(0,c.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,v.Z)((0,p.Z)(e),"color",void 0),(0,v.Z)((0,p.Z)(e),"id",void 0),(0,v.Z)((0,p.Z)(e),"x",void 0),(0,v.Z)((0,p.Z)(e),"z",void 0),(0,v.Z)((0,p.Z)(e),"dropped",void 0),(0,v.Z)((0,p.Z)(e),"model",void 0),(0,v.Z)((0,p.Z)(e),"$parent",void 0),e}return(0,s.Z)(r,[{key:"isDropped",value:function(){var e=(0,ae.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.model){e.next=4;break}this.drop(),e.next=7;break;case 4:return e.next=6,new Promise((function(e){return setTimeout(e,100)}));case 6:this.isDropped();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"drop",value:function(){var e=(0,ae.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.p8.fromTo(this.model.position,{x:this.x},{x:this.x,z:this.z,duration:.5,ease:"bounce"});case 2:this.model.position.set(this.x,0,this.z),this.$parent.manager.spawnNext(this.id,this.color);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(d.w3);le([(0,d.fI)({type:String,required:!0})],ue.prototype,"color",void 0),le([(0,d.fI)({type:Number,required:!0})],ue.prototype,"id",void 0),le([(0,d.fI)({type:Number,required:!0})],ue.prototype,"x",void 0),le([(0,d.fI)({type:Number,required:!0})],ue.prototype,"z",void 0),le([(0,d.fI)({type:Boolean,required:!0})],ue.prototype,"dropped",void 0),le([(0,d.RL)("dropped")],ue.prototype,"isDropped",null),ue=le([(0,d.wA)({mounted:function(){var e=this;return this.$parent.gltfLoader.load("assets/".concat(this.color.toLowerCase(),"-disc.glb"),(function(t){var r=t.scene.children[0];r.removeFromParent(),e.model=r;var n=e.$parent.manager.board.getDiscById(e.id);n&&(n.model=e.model),e.model.position.x=e.x,e.model.position.z=e.z,e.$parent.$parent.spawnObject(e.model)}))},destroyed:function(){this.$parent.$parent.scene.remove(this.model)}})],ue);var de=ue,fe=de,he=(0,S.Z)(fe,oe,se,!1,null,null,null),pe=he.exports,ve=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"===typeof Reflect?"undefined":(0,u.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},me=function(e){(0,c.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,v.Z)((0,p.Z)(e),"gltfLoader",new k.E),(0,v.Z)((0,p.Z)(e),"manager",new E),(0,v.Z)((0,p.Z)(e),"assets",void 0),(0,v.Z)((0,p.Z)(e),"model",void 0),(0,v.Z)((0,p.Z)(e),"$parent",void 0),e}return(0,s.Z)(r,[{key:"resetGame",value:function(){var e=this;this.manager=new E,this.$parent.raycaster.removeAll(),this.assets=!1,this.$nextTick((function(){return e.assets=!0}))}}]),r}(d.w3);me=ve([(0,d.wA)({data:function(){return{assets:!0}},components:{Arrow:T,Disc:pe,Controls:ie},mounted:function(){var e=this;this.$nextTick((function(){e.gltfLoader.load("assets/board.glb",(function(t){var r=t.scene.children[0];r.removeFromParent(),e.model=r,e.$parent.spawnObject(e.model)}))}))},destroyed:function(){this.$parent.scene.remove(this.model)},computed:{currentColor:function(){var e=this.manager.getCurrentDisc();return e?e.color:"NONE"}}})],me);var ge=me,ye=ge,Ze=(0,S.Z)(ye,b,x,!1,null,null,null),we=Ze.exports,be=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"===typeof Reflect?"undefined":(0,u.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};_.p8.registerPlugin(ce.X);var xe=function(e){(0,c.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,v.Z)((0,p.Z)(e),"hemisphereLight",new m.vmT(11184810,0,.9)),(0,v.Z)((0,p.Z)(e),"directionalLight",new m.Ox3(16777215,.9)),(0,v.Z)((0,p.Z)(e),"ambientLight",new m.Mig(14452852,.5)),(0,v.Z)((0,p.Z)(e),"renderer",new m.CP7({alpha:!0,antialias:!0})),(0,v.Z)((0,p.Z)(e),"camera",void 0),(0,v.Z)((0,p.Z)(e),"controls",void 0),(0,v.Z)((0,p.Z)(e),"raycaster",void 0),(0,v.Z)((0,p.Z)(e),"scene",new m.xsS),e}return(0,s.Z)(r,[{key:"resetCamera",value:function(){this.scene.rotation.set(Math.PI/2,0,0),this.camera.position.set(0,0,.25)}},{key:"animate",value:function(){this.renderer.render(this.scene,this.camera),this.controls.update(),requestAnimationFrame(this.animate)}},{key:"onWindowResize",value:function(){this.camera&&this.renderer&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}},{key:"spawnObject",value:function(e){this.scene.add(e),_.p8.timeline({defaults:{ease:"elastic"}}).from(e.scale,{x:0,y:0,z:0})}}]),r}(d.w3);xe=be([(0,d.wA)({components:{Board:we},mounted:function(){this.camera=new m.cPb(90,window.innerWidth/window.innerHeight,.1,2e3),this.controls=new g.z(this.camera,this.renderer.domElement),this.raycaster=new w(this.camera,this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",this.onWindowResize,!1),this.scene.add(this.ambientLight,this.hemisphereLight,this.directionalLight),this.scene.background=new m.Ilk(15921906),this.directionalLight.position.set(150,350,350),this.$refs.scene.appendChild(this.renderer.domElement),this.controls.enablePan=!1,this.resetCamera(),this.animate()}})],xe);var ke=xe,Ce=ke,$e=(0,S.Z)(Ce,f,h,!1,null,null,null),Oe=$e.exports,Re=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===("undefined"===typeof Reflect?"undefined":(0,u.Z)(Reflect))&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},je=function(e){(0,c.Z)(r,e);var t=(0,l.Z)(r);function r(){return(0,a.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r)}(d.w3);je=Re([(0,d.wA)({components:{Scene:Oe}})],je);var Ee=je,ze=Ee,Le=r(7524),_e=(0,S.Z)(ze,i,o,!1,null,null,null),Pe=_e.exports;X()(_e,{VApp:Le.Z});var De=r(563);(0,De.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ae=r(5613);n.Z.use(Ae.Z);var Fe=new Ae.Z({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:"#4e79f4",secondary:"#FFFFFF"}}},icons:{iconfont:"fa"}}),Se=r(81),Ie=r(6978),Te=r(4842),Me=r(9009);Se.vI.add(Ie.gr5,Ie.r6l,Ie.g82,Te.zhw),n.Z.component("font-awesome-icon",Me.GN),n.Z.config.productionTip=!1,new n.Z({vuetify:Fe,render:function(e){return e(Pe)}}).$mount("#app")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n](o,o.exports,r),o.loaded=!0,o.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,o){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],o=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,s=n[0],a=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(c)var u=c(r)}for(t&&t(n);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self["webpackChunkconnectfour"]=self["webpackChunkconnectfour"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(802)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.1ada6c9f.js.map