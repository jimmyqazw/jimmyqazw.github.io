/*! For license information please see shifty.js.LICENSE.txt */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("shifty",[],n):"object"==typeof exports?exports.shifty=n():t.shifty=n()}(self,(function(){return function(){"use strict";var t={720:function(t,n,e){e.r(n),e.d(n,{Scene:function(){return Xt},Tweenable:function(){return _t},interpolate:function(){return Wt},processTweens:function(){return ft},setBezierFunction:function(){return Yt},tween:function(){return yt},unsetBezierFunction:function(){return Zt}});var r={};e.r(r),e.d(r,{bounce:function(){return D},bouncePast:function(){return q},easeFrom:function(){return B},easeFromTo:function(){return Q},easeInBack:function(){return T},easeInCirc:function(){return j},easeInCubic:function(){return c},easeInExpo:function(){return w},easeInOutBack:function(){return F},easeInOutCirc:function(){return P},easeInOutCubic:function(){return l},easeInOutExpo:function(){return S},easeInOutQuad:function(){return s},easeInOutQuart:function(){return v},easeInOutQuint:function(){return d},easeInOutSine:function(){return b},easeInQuad:function(){return o},easeInQuart:function(){return h},easeInQuint:function(){return _},easeInSine:function(){return m},easeOutBack:function(){return E},easeOutBounce:function(){return M},easeOutCirc:function(){return k},easeOutCubic:function(){return f},easeOutExpo:function(){return O},easeOutQuad:function(){return a},easeOutQuart:function(){return p},easeOutQuint:function(){return y},easeOutSine:function(){return g},easeTo:function(){return N},elastic:function(){return x},linear:function(){return u},swingFrom:function(){return I},swingFromTo:function(){return A},swingTo:function(){return C}});var i={};e.r(i),e.d(i,{afterTween:function(){return Nt},beforeTween:function(){return Bt},doesApply:function(){return qt},tweenCreated:function(){return Qt}});var u=function(t){return t},o=function(t){return Math.pow(t,2)},a=function(t){return-(Math.pow(t-1,2)-1)},s=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},c=function(t){return Math.pow(t,3)},f=function(t){return Math.pow(t-1,3)+1},l=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},h=function(t){return Math.pow(t,4)},p=function(t){return-(Math.pow(t-1,4)-1)},v=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},_=function(t){return Math.pow(t,5)},y=function(t){return Math.pow(t-1,5)+1},d=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},m=function(t){return 1-Math.cos(t*(Math.PI/2))},g=function(t){return Math.sin(t*(Math.PI/2))},b=function(t){return-.5*(Math.cos(Math.PI*t)-1)},w=function(t){return 0===t?0:Math.pow(2,10*(t-1))},O=function(t){return 1===t?1:1-Math.pow(2,-10*t)},S=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},j=function(t){return-(Math.sqrt(1-t*t)-1)},k=function(t){return Math.sqrt(1-Math.pow(t-1,2))},P=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},M=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},T=function(t){var n=1.70158;return t*t*((n+1)*t-n)},E=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},F=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},x=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},A=function(t){var n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},I=function(t){var n=1.70158;return t*t*((n+1)*t-n)},C=function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},D=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},q=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},Q=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},B=function(t){return Math.pow(t,4)},N=function(t){return Math.pow(t,.25)};function R(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function z(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function U(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function V(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?U(Object(e),!0).forEach((function(n){W(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):U(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function W(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var $,G,H,J="linear",K="undefined"!=typeof window?window:e.g,X="afterTween",Y="afterTweenEnd",Z="beforeTween",tt="tweenCreated",nt="function",et="string",rt=K.requestAnimationFrame||K.webkitRequestAnimationFrame||K.oRequestAnimationFrame||K.msRequestAnimationFrame||K.mozCancelRequestAnimationFrame&&K.mozRequestAnimationFrame||setTimeout,it=function(){},ut=null,ot=null,at=V({},r),st=function(t,n,e,r,i,u,o){var a,s,c,f=t<u?0:(t-u)/i,l=!1;for(var h in o&&o.call&&(l=!0,a=o(f)),n)l||(a=((s=o[h]).call?s:at[s])(f)),c=e[h],n[h]=c+(r[h]-c)*a;return n},ct=function(t,n){var e=t._timestamp,r=t._currentState,i=t._delay;if(!(n<e+i)){var u=t._duration,o=t._targetState,a=e+i+u,s=n>a?a:n,c=s>=a,f=u-(a-s),l=t._filters.length>0;if(c)return t._render(o,t._data,f),t.stop(!0);l&&t._applyFilter(Z),s<e+i?e=u=s=1:e+=i,st(s,r,t._originalState,o,u,e,t._easing),l&&t._applyFilter(X),t._render(r,t._data,f)}},ft=function(){for(var t,n=_t.now(),e=ut;e;)t=e._next,ct(e,n),e=t},lt=Date.now||function(){return+new Date},ht=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=L(n);if(at[n])return at[n];if(r===et||r===nt)for(var i in t)e[i]=n;else for(var u in t)e[u]=n[u]||J;return e},pt=function(t){t===ut?(ut=t._next)?ut._previous=null:ot=null:t===ot?(ot=t._previous)?ot._next=null:ut=null:(G=t._previous,H=t._next,G._next=H,H._previous=G),t._previous=t._next=null},vt="function"==typeof Promise?Promise:null,_t=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;R(this,t),this._config={},this._data={},this._delay=0,this._filters=[],this._next=null,this._previous=null,this._timestamp=null,this._resolve=null,this._reject=null,this._currentState=n||{},this._originalState={},this._targetState={},this._start=it,this._render=it,this._promiseCtor=vt,e&&this.setConfig(e)}var n,e;return n=t,(e=[{key:"_applyFilter",value:function(t){for(var n=this._filters.length;n>0;n--){var e=this._filters[n-n][t];e&&e(this)}}},{key:"tween",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this._isPlaying&&this.stop(),!n&&this._config||this.setConfig(n),this._pausedAtTime=null,this._timestamp=t.now(),this._start(this.get(),this._data),this._delay&&this._render(this._currentState,this._data,0),this._resume(this._timestamp)}},{key:"setConfig",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this._config;for(var r in n)e[r]=n[r];var i=e.promise,u=void 0===i?this._promiseCtor:i,o=e.start,a=void 0===o?it:o,s=e.finish,c=e.render,f=void 0===c?this._config.step||it:c,l=e.step,h=void 0===l?it:l;this._data=e.data||e.attachment||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=n.delay||0,this._start=a,this._render=f||h,this._duration=e.duration||500,this._promiseCtor=u,s&&(this._resolve=s);var p=n.from,v=n.to,_=void 0===v?{}:v,y=this._currentState,d=this._originalState,m=this._targetState;for(var g in p)y[g]=p[g];var b=!1;for(var w in y){var O=y[w];b||L(O)!==et||(b=!0),d[w]=O,m[w]=_.hasOwnProperty(w)?_[w]:O}if(this._easing=ht(this._currentState,e.easing,this._easing),this._filters.length=0,b){for(var S in t.filters)t.filters[S].doesApply(this)&&this._filters.push(t.filters[S]);this._applyFilter(tt)}return this}},{key:"then",value:function(t,n){var e=this;return this._promise=new this._promiseCtor((function(t,n){e._resolve=t,e._reject=n})),this._promise.then(t,n)}},{key:"catch",value:function(t){return this.then().catch(t)}},{key:"get",value:function(){return V({},this._currentState)}},{key:"set",value:function(t){this._currentState=t}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=t.now(),this._isPlaying=!1,pt(this),this}},{key:"resume",value:function(){return this._resume()}},{key:"_resume",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.now();return null===this._timestamp?this.tween():this._isPlaying?this._promise:(this._pausedAtTime&&(this._timestamp+=n-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===ut?(ut=this,ot=this):(this._previous=ot,ot._next=this,ot=this),this)}},{key:"seek",value:function(n){n=Math.max(n,0);var e=t.now();return this._timestamp+n===0||(this._timestamp=e-n,ct(this,e)),this}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this._isPlaying)return this;this._isPlaying=!1,pt(this);var n=this._filters.length>0;return t&&(n&&this._applyFilter(Z),st(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),n&&(this._applyFilter(X),this._applyFilter(Y))),this._resolve&&this._resolve({data:this._data,state:this._currentState,tweenable:this}),this._resolve=null,this._reject=null,this}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this._currentState,e=this._data,r=this._isPlaying;return r?(this._reject&&this._reject({data:e,state:n,tweenable:this}),this._resolve=null,this._reject=null,this.stop(t)):this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(n){t.setScheduleFunction(n)}},{key:"data",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t&&(this._data=V({},t)),this._data}},{key:"dispose",value:function(){for(var t in this)delete this[t]}}])&&z(n.prototype,e),t}();function yt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new _t;return n.tween(t),n.tweenable=n,n}W(_t,"now",(function(){return $})),_t.setScheduleFunction=function(t){return rt=t},_t.formulas=at,_t.filters={},function t(){$=lt(),rt.call(K,t,16.666666666666668),ft()}();var dt,mt,gt=/(\d|-|\.)/,bt=/([^\-0-9.]+)/g,wt=/[0-9.-]+/g,Ot=(dt=wt.source,mt=/,\s*/.source,new RegExp("rgb\\(".concat(dt).concat(mt).concat(dt).concat(mt).concat(dt,"\\)"),"g")),St=/^.*\(/,jt=/#([0-9]|[a-f]){3,6}/gi,kt="VAL",Pt=function(t,n){return t.map((function(t,e){return"_".concat(n,"_").concat(e)}))};function Mt(t){return parseInt(t,16)}var Tt=function(t){return"rgb(".concat((n=t,3===(n=n.replace(/#/,"")).length&&(n=(n=n.split(""))[0]+n[0]+n[1]+n[1]+n[2]+n[2]),[Mt(n.substr(0,2)),Mt(n.substr(2,2)),Mt(n.substr(4,2))]).join(","),")");var n},Et=function(t,n,e){var r=n.match(t),i=n.replace(t,kt);return r&&r.forEach((function(t){return i=i.replace(kt,e(t))})),i},Ft=function(t){for(var n in t){var e=t[n];"string"==typeof e&&e.match(jt)&&(t[n]=Et(jt,e,Tt))}},xt=function(t){var n=t.match(wt).map(Math.floor),e=t.match(St)[0];return"".concat(e).concat(n.join(","),")")},At=function(t){return t.match(wt)},It=function(t,n){var e={};return n.forEach((function(n){e[n]=t[n],delete t[n]})),e},Ct=function(t,n){return n.map((function(n){return t[n]}))},Dt=function(t,n){return n.forEach((function(n){return t=t.replace(kt,+n.toFixed(4))})),t},qt=function(t){for(var n in t._currentState)if("string"==typeof t._currentState[n])return!0;return!1};function Qt(t){var n=t._currentState;[n,t._originalState,t._targetState].forEach(Ft),t._tokenData=function(t){var n,e,r={};for(var i in t){var u=t[i];"string"==typeof u&&(r[i]={formatString:(n=u,e=void 0,e=n.match(bt),e?(1===e.length||n.charAt(0).match(gt))&&e.unshift(""):e=["",""],e.join(kt)),chunkNames:Pt(At(u),i)})}return r}(n)}function Bt(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;!function(t,n){var e=function(e){var r=n[e].chunkNames,i=t[e];if("string"==typeof i){var u=i.split(" "),o=u[u.length-1];r.forEach((function(n,e){return t[n]=u[e]||o}))}else r.forEach((function(n){return t[n]=i}));delete t[e]};for(var r in n)e(r)}(i,u),[n,e,r].forEach((function(t){return function(t,n){var e=function(e){At(t[e]).forEach((function(r,i){return t[n[e].chunkNames[i]]=+r})),delete t[e]};for(var r in n)e(r)}(t,u)}))}function Nt(t){var n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;[n,e,r].forEach((function(t){return function(t,n){for(var e in n){var r=n[e],i=r.chunkNames,u=r.formatString,o=Dt(u,Ct(It(t,i),i));t[e]=Et(Ot,o,xt)}}(t,u)})),function(t,n){for(var e in n){var r=n[e].chunkNames,i=t[r[0]];t[e]="string"==typeof i?r.map((function(n){var e=t[n];return delete t[n],e})).join(" "):i}}(i,u)}function Rt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function zt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Rt(Object(e),!0).forEach((function(n){Lt(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Rt(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function Lt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var Ut=new _t,Vt=_t.filters,Wt=function(t,n,e,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,u=zt({},t),o=ht(t,r);for(var a in Ut._filters.length=0,Ut.set({}),Ut._currentState=u,Ut._originalState=t,Ut._targetState=n,Ut._easing=o,Vt)Vt[a].doesApply(Ut)&&Ut._filters.push(Vt[a]);Ut._applyFilter("tweenCreated"),Ut._applyFilter("beforeTween");var s=st(e,u,t,n,1,i,o);return Ut._applyFilter("afterTween"),s};function $t(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function Gt(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Ht(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Jt(t,n){var e=n.get(t);if(!e)throw new TypeError("attempted to get private field on non-instance");return e.get?e.get.call(t):e.value}var Kt=new WeakMap,Xt=function(){function t(){Gt(this,t),Kt.set(this,{writable:!0,value:[]});for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];e.forEach(this.add.bind(this))}var n,e;return n=t,(e=[{key:"add",value:function(t){return Jt(this,Kt).push(t),t}},{key:"remove",value:function(t){var n=Jt(this,Kt).indexOf(t);return~n&&Jt(this,Kt).splice(n,1),t}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return Jt(this,Kt).some((function(t){return t.isPlaying()}))}},{key:"play",value:function(){return Jt(this,Kt).forEach((function(t){return t.tween()})),this}},{key:"pause",value:function(){return Jt(this,Kt).forEach((function(t){return t.pause()})),this}},{key:"resume",value:function(){return Jt(this,Kt).forEach((function(t){return t.resume()})),this}},{key:"stop",value:function(t){return Jt(this,Kt).forEach((function(n){return n.stop(t)})),this}},{key:"tweenables",get:function(){return function(t){if(Array.isArray(t))return $t(t)}(t=Jt(this,Kt))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return $t(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?$t(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var t}},{key:"promises",get:function(){return Jt(this,Kt).map((function(t){return t.then()}))}}])&&Ht(n.prototype,e),t}();var Yt=function(t,n,e,r,i){var u=function(t,n,e,r){return function(i){return f=0,l=0,h=0,p=function(t){return((f*t+l)*t+h)*t},v=function(t){return(3*f*t+2*l)*t+h},_=function(t){return t>=0?t:0-t},f=1-(h=3*(u=t))-(l=3*(e-u)-h),a=1-(c=3*(o=n))-(s=3*(r-o)-c),function(t){return((a*t+s)*t+c)*t}(function(t,n){var e,r,i,u,o,a;for(i=t,a=0;a<8;a++){if(u=p(i)-t,_(u)<n)return i;if(o=v(i),_(o)<1e-6)break;i-=u/o}if((i=t)<(e=0))return e;if(i>(r=1))return r;for(;e<r;){if(u=p(i),_(u-t)<n)return i;t>u?e=i:r=i,i=.5*(r-e)+e}return i}(i,function(t){return 1/(200*t)}(1)));var u,o,a,s,c,f,l,h,p,v,_}}(n,e,r,i);return u.displayName=t,u.x1=n,u.y1=e,u.x2=r,u.y2=i,_t.formulas[t]=u},Zt=function(t){return delete _t.formulas[t]};_t.filters.token=i}},n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}return e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e(720)}()}));
// Disabled to avoid warnings in Chrome (see https://github.com/4ian/GDevelop/pull/3947)
// //# sourceMappingURL=shifty.js.map