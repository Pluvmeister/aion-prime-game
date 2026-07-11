(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function z_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kf={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function My(){if(vv)return Ao;vv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Ao.Fragment=t,Ao.jsx=i,Ao.jsxs=i,Ao}var _v;function by(){return _v||(_v=1,Kf.exports=My()),Kf.exports}var g=by(),Qf={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function Ey(){if(xv)return st;xv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function v(L,j,_e){this.props=L,this.context=j,this.refs=b,this.updater=_e||T}v.prototype.isReactComponent={},v.prototype.setState=function(L,j){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,j,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function G(){}G.prototype=v.prototype;function P(L,j,_e){this.props=L,this.context=j,this.refs=b,this.updater=_e||T}var U=P.prototype=new G;U.constructor=P,w(U,v.prototype),U.isPureReactComponent=!0;var X=Array.isArray;function k(){}var I={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function R(L,j,_e){var Te=_e.ref;return{$$typeof:o,type:L,key:j,ref:Te!==void 0?Te:null,props:_e}}function D(L,j){return R(L.type,j,L.props)}function F(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function de(L){var j={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(_e){return j[_e]})}var ce=/\/+/g;function ue(L,j){return typeof L=="object"&&L!==null&&L.key!=null?de(""+L.key):j.toString(36)}function pe(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(k,k):(L.status="pending",L.then(function(j){L.status==="pending"&&(L.status="fulfilled",L.value=j)},function(j){L.status==="pending"&&(L.status="rejected",L.reason=j)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,j,_e,Te,K){var xe=typeof L;(xe==="undefined"||xe==="boolean")&&(L=null);var ge=!1;if(L===null)ge=!0;else switch(xe){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(L.$$typeof){case o:case t:ge=!0;break;case x:return ge=L._init,O(ge(L._payload),j,_e,Te,K)}}if(ge)return K=K(L),ge=Te===""?"."+ue(L,0):Te,X(K)?(_e="",ge!=null&&(_e=ge.replace(ce,"$&/")+"/"),O(K,j,_e,"",function(Je){return Je})):K!=null&&(F(K)&&(K=D(K,_e+(K.key==null||L&&L.key===K.key?"":(""+K.key).replace(ce,"$&/")+"/")+ge)),j.push(K)),1;ge=0;var He=Te===""?".":Te+":";if(X(L))for(var Oe=0;Oe<L.length;Oe++)Te=L[Oe],xe=He+ue(Te,Oe),ge+=O(Te,j,_e,xe,K);else if(Oe=M(L),typeof Oe=="function")for(L=Oe.call(L),Oe=0;!(Te=L.next()).done;)Te=Te.value,xe=He+ue(Te,Oe++),ge+=O(Te,j,_e,xe,K);else if(xe==="object"){if(typeof L.then=="function")return O(pe(L),j,_e,Te,K);throw j=String(L),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ge}function q(L,j,_e){if(L==null)return L;var Te=[],K=0;return O(L,Te,"","",function(xe){return j.call(_e,xe,K++)}),Te}function Z(L){if(L._status===-1){var j=L._result;j=j(),j.then(function(_e){(L._status===0||L._status===-1)&&(L._status=1,L._result=_e)},function(_e){(L._status===0||L._status===-1)&&(L._status=2,L._result=_e)}),L._status===-1&&(L._status=0,L._result=j)}if(L._status===1)return L._result.default;throw L._result}var oe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},me={map:q,forEach:function(L,j,_e){q(L,function(){j.apply(this,arguments)},_e)},count:function(L){var j=0;return q(L,function(){j++}),j},toArray:function(L){return q(L,function(j){return j})||[]},only:function(L){if(!F(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return st.Activity=y,st.Children=me,st.Component=v,st.Fragment=i,st.Profiler=l,st.PureComponent=P,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,st.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},st.cache=function(L){return function(){return L.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(L,j,_e){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Te=w({},L.props),K=L.key;if(j!=null)for(xe in j.key!==void 0&&(K=""+j.key),j)!$.call(j,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&j.ref===void 0||(Te[xe]=j[xe]);var xe=arguments.length-2;if(xe===1)Te.children=_e;else if(1<xe){for(var ge=Array(xe),He=0;He<xe;He++)ge[He]=arguments[He+2];Te.children=ge}return R(L.type,K,Te)},st.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},st.createElement=function(L,j,_e){var Te,K={},xe=null;if(j!=null)for(Te in j.key!==void 0&&(xe=""+j.key),j)$.call(j,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(K[Te]=j[Te]);var ge=arguments.length-2;if(ge===1)K.children=_e;else if(1<ge){for(var He=Array(ge),Oe=0;Oe<ge;Oe++)He[Oe]=arguments[Oe+2];K.children=He}if(L&&L.defaultProps)for(Te in ge=L.defaultProps,ge)K[Te]===void 0&&(K[Te]=ge[Te]);return R(L,xe,K)},st.createRef=function(){return{current:null}},st.forwardRef=function(L){return{$$typeof:h,render:L}},st.isValidElement=F,st.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:Z}},st.memo=function(L,j){return{$$typeof:p,type:L,compare:j===void 0?null:j}},st.startTransition=function(L){var j=I.T,_e={};I.T=_e;try{var Te=L(),K=I.S;K!==null&&K(_e,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(k,oe)}catch(xe){oe(xe)}finally{j!==null&&_e.types!==null&&(j.types=_e.types),I.T=j}},st.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},st.use=function(L){return I.H.use(L)},st.useActionState=function(L,j,_e){return I.H.useActionState(L,j,_e)},st.useCallback=function(L,j){return I.H.useCallback(L,j)},st.useContext=function(L){return I.H.useContext(L)},st.useDebugValue=function(){},st.useDeferredValue=function(L,j){return I.H.useDeferredValue(L,j)},st.useEffect=function(L,j){return I.H.useEffect(L,j)},st.useEffectEvent=function(L){return I.H.useEffectEvent(L)},st.useId=function(){return I.H.useId()},st.useImperativeHandle=function(L,j,_e){return I.H.useImperativeHandle(L,j,_e)},st.useInsertionEffect=function(L,j){return I.H.useInsertionEffect(L,j)},st.useLayoutEffect=function(L,j){return I.H.useLayoutEffect(L,j)},st.useMemo=function(L,j){return I.H.useMemo(L,j)},st.useOptimistic=function(L,j){return I.H.useOptimistic(L,j)},st.useReducer=function(L,j,_e){return I.H.useReducer(L,j,_e)},st.useRef=function(L){return I.H.useRef(L)},st.useState=function(L){return I.H.useState(L)},st.useSyncExternalStore=function(L,j,_e){return I.H.useSyncExternalStore(L,j,_e)},st.useTransition=function(){return I.H.useTransition()},st.version="19.2.7",st}var yv;function yh(){return yv||(yv=1,Qf.exports=Ey()),Qf.exports}var Yt=yh();const Ty=z_(Yt);var Jf={exports:{}},Ro={},$f={exports:{}},ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function Ay(){return Sv||(Sv=1,(function(o){function t(O,q){var Z=O.length;O.push(q);e:for(;0<Z;){var oe=Z-1>>>1,me=O[oe];if(0<l(me,q))O[oe]=q,O[Z]=me,Z=oe;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var q=O[0],Z=O.pop();if(Z!==q){O[0]=Z;e:for(var oe=0,me=O.length,L=me>>>1;oe<L;){var j=2*(oe+1)-1,_e=O[j],Te=j+1,K=O[Te];if(0>l(_e,Z))Te<me&&0>l(K,_e)?(O[oe]=K,O[Te]=Z,oe=Te):(O[oe]=_e,O[j]=Z,oe=j);else if(Te<me&&0>l(K,Z))O[oe]=K,O[Te]=Z,oe=Te;else break e}}return q}function l(O,q){var Z=O.sortIndex-q.sortIndex;return Z!==0?Z:O.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,y=null,S=3,M=!1,T=!1,w=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=O)r(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function X(O){if(w=!1,U(O),!T)if(i(m)!==null)T=!0,k||(k=!0,de());else{var q=i(p);q!==null&&pe(X,q.startTime-O)}}var k=!1,I=-1,$=5,R=-1;function D(){return b?!0:!(o.unstable_now()-R<$)}function F(){if(b=!1,k){var O=o.unstable_now();R=O;var q=!0;try{e:{T=!1,w&&(w=!1,G(I),I=-1),M=!0;var Z=S;try{t:{for(U(O),y=i(m);y!==null&&!(y.expirationTime>O&&D());){var oe=y.callback;if(typeof oe=="function"){y.callback=null,S=y.priorityLevel;var me=oe(y.expirationTime<=O);if(O=o.unstable_now(),typeof me=="function"){y.callback=me,U(O),q=!0;break t}y===i(m)&&r(m),U(O)}else r(m);y=i(m)}if(y!==null)q=!0;else{var L=i(p);L!==null&&pe(X,L.startTime-O),q=!1}}break e}finally{y=null,S=Z,M=!1}q=void 0}}finally{q?de():k=!1}}}var de;if(typeof P=="function")de=function(){P(F)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ue=ce.port2;ce.port1.onmessage=F,de=function(){ue.postMessage(null)}}else de=function(){v(F,0)};function pe(O,q){I=v(function(){O(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var q=3;break;default:q=S}var Z=S;S=q;try{return O()}finally{S=Z}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=S;S=O;try{return q()}finally{S=Z}},o.unstable_scheduleCallback=function(O,q,Z){var oe=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,O){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Z+me,O={id:x++,callback:q,priorityLevel:O,startTime:Z,expirationTime:me,sortIndex:-1},Z>oe?(O.sortIndex=Z,t(p,O),i(m)===null&&O===i(p)&&(w?(G(I),I=-1):w=!0,pe(X,Z-oe))):(O.sortIndex=me,t(m,O),T||M||(T=!0,k||(k=!0,de()))),O},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(O){var q=S;return function(){var Z=S;S=q;try{return O.apply(this,arguments)}finally{S=Z}}}})(ed)),ed}var Mv;function Ry(){return Mv||(Mv=1,$f.exports=Ay()),$f.exports}var td={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function wy(){if(bv)return An;bv=1;var o=yh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,x)},An.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,y=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:M}):x==="script"&&r.d.X(m,{crossOrigin:y,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,y=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.7",An}var Ev;function Cy(){if(Ev)return td.exports;Ev=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),td.exports=wy(),td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function Dy(){if(Tv)return Ro;Tv=1;var o=Ry(),t=yh(),i=Cy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,A=c.child;A;){if(A===a){_=!0,a=c,s=f;break}if(A===s){_=!0,s=c,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,s=c;break}if(A===s){_=!0,s=f,a=c;break}A=A.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),P=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case X:return"Suspense";case k:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case P:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}var pe=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},oe=[],me=-1;function L(e){return{current:e}}function j(e){0>me||(e.current=oe[me],oe[me]=null,me--)}function _e(e,n){me++,oe[me]=e.current,e.current=n}var Te=L(null),K=L(null),xe=L(null),ge=L(null);function He(e,n){switch(_e(xe,n),_e(K,e),_e(Te,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Hg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Hg(n),e=kg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Te),_e(Te,e)}function Oe(){j(Te),j(K),j(xe)}function Je(e){e.memoizedState!==null&&_e(ge,e);var n=Te.current,a=kg(n,e.type);n!==a&&(_e(K,e),_e(Te,a))}function Lt(e){K.current===e&&(j(Te),j(K)),ge.current===e&&(j(ge),Mo._currentValue=Z)}var ct,H;function ut(e){if(ct===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ct=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ct+e+H}var B=!1;function Ne(e,n){if(!e||B)return"";B=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(le){var ae=le}Reflect.construct(e,[],Se)}else{try{Se.call()}catch(le){ae=le}e.call(Se.prototype)}}else{try{throw Error()}catch(le){ae=le}(Se=e())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var z=_.split(`
`),ie=A.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<ie.length&&!ie[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===ie.length)for(s=z.length-1,c=ie.length-1;1<=s&&0<=c&&z[s]!==ie[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==ie[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==ie[c]){var he=`
`+z[s].replace(" at new "," at ");return e.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",e.displayName)),he}while(1<=s&&0<=c);break}}}finally{B=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ut(a):""}function Le(e,n){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Ne(e.type,!1);case 11:return Ne(e.type.render,!1);case 1:return Ne(e.type,!0);case 31:return ut("Activity");default:return""}}function ht(e){try{var n="",a=null;do n+=Le(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Fe=Object.prototype.hasOwnProperty,at=o.unstable_scheduleCallback,Vt=o.unstable_cancelCallback,jt=o.unstable_shouldYield,N=o.unstable_requestPaint,E=o.unstable_now,te=o.unstable_getCurrentPriorityLevel,ve=o.unstable_ImmediatePriority,Ee=o.unstable_UserBlockingPriority,fe=o.unstable_NormalPriority,Ke=o.unstable_LowPriority,Ce=o.unstable_IdlePriority,Ye=o.log,Ze=o.unstable_setDisableYieldValue,Re=null,De=null;function Qe(e){if(typeof Ye=="function"&&Ze(e),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Re,e)}catch{}}var ke=Math.clz32?Math.clz32:W,Pe=Math.log,ot=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Pe(e)/ot|0)|0}var we=256,Ue=262144,Ge=4194304;function Ae(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Me(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?c=Ae(s):(_&=A,_!==0?c=Ae(_):a||(a=A&~e,a!==0&&(c=Ae(a))))):(A=s&~f,A!==0?c=Ae(A):_!==0?c=Ae(_):a||(a=s&~e,a!==0&&(c=Ae(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ve(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function rt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ei(e,n,a,s,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,ie=e.hiddenUpdates;for(a=_&~a;0<a;){var he=31-ke(a),Se=1<<he;A[he]=0,z[he]=-1;var ae=ie[he];if(ae!==null)for(ie[he]=null,he=0;he<ae.length;he++){var le=ae[he];le!==null&&(le.lane&=-536870913)}a&=~Se}s!==0&&Ps(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Ps(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-ke(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Si(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-ke(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Tr(e,n){var a=n&-n;return a=(a&42)!==0?1:Ar(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ar(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wa(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:uv(e.type))}function zs(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Vn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Vn,xn="__reactProps$"+Vn,ca="__reactContainer$"+Vn,Bs="__reactEvents$"+Vn,Vc="__reactListeners$"+Vn,jc="__reactHandles$"+Vn,Yo="__reactResources$"+Vn,qa="__reactMarker$"+Vn;function C(e){delete e[rn],delete e[xn],delete e[Bs],delete e[Vc],delete e[jc]}function Y(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ca]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Yg(e);e!==null;){if(a=e[rn])return a;e=Yg(e)}return n}e=a,a=e.parentNode}return null}function re(e){if(e=e[rn]||e[ca]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function se(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Q(e){var n=e[Yo];return n||(n=e[Yo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function be(e){e[qa]=!0}var ze=new Set,Xe={};function Ie(e,n){$e(e,n),$e(e+"Capture",n)}function $e(e,n){for(Xe[e]=n,e=0;e<n.length;e++)ze.add(n[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},mt={};function Nt(e){return Fe.call(mt,e)?!0:Fe.call(et,e)?!1:it.test(e)?mt[e]=!0:(et[e]=!0,!1)}function Xt(e,n,a){if(Nt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ot(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function gt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function We(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yn(e){if(!e._valueTracker){var n=qt(e)?"checked":"value";e._valueTracker=Tt(e,n,""+e[n])}}function Oi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=qt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ya=/[\n"\\]/g;function xt(e){return e.replace(Ya,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,s,c,f,_,A){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+We(n)):e.value!==""+We(n)&&(e.value=""+We(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?fn(e,_,We(n)):a!=null?fn(e,_,We(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+We(A):e.removeAttribute("name")}function Dn(e,n,a,s,c,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){yn(e);return}a=a!=null?""+We(a):"",n=n!=null?""+We(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=A?e.checked:!!s,e.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),yn(e)}function fn(e,n,a){n==="number"&&mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+We(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function wr(e,n,a){if(n!=null&&(n=""+We(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+We(a):""}function Mi(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(pe(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=We(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),yn(e)}function Cr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var v0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||v0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Fh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Bh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Bh(e,f,n[f])}function Xc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),x0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(e){return x0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pi(){}var Wc=null;function qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,Ur=null;function Ih(e){var n=re(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[xn]||null;if(!c)throw Error(r(90));Tn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Oi(s)}break e;case"textarea":wr(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var Yc=!1;function Hh(e,n,a){if(Yc)return e(n,a);Yc=!0;try{var s=e(n);return s}finally{if(Yc=!1,(Dr!==null||Ur!==null)&&(zl(),Dr&&(n=Dr,e=Ur,Ur=Dr=null,Ih(n),e)))for(n=0;n<e.length;n++)Ih(e[n])}}function Fs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(zi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{Zc=!1}var ua=null,Kc=null,Ko=null;function kh(){if(Ko)return Ko;var e,n=Kc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return Ko=c.slice(e,1<s?1-s:void 0)}function Qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function Gh(){return!1}function On(e){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jo:Gh,this.isPropagationStopped=Gh,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=On(Za),Hs=y({},Za,{view:0,detail:0}),y0=On(Hs),Qc,Jc,ks,el=y({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ks&&(ks&&e.type==="mousemove"?(Qc=e.screenX-ks.screenX,Jc=e.screenY-ks.screenY):Jc=Qc=0,ks=e),Qc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),Vh=On(el),S0=y({},el,{dataTransfer:0}),M0=On(S0),b0=y({},Hs,{relatedTarget:0}),$c=On(b0),E0=y({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=On(E0),A0=y({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R0=On(A0),w0=y({},Za,{data:0}),jh=On(w0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=U0[e])?!!n[e]:!1}function eu(){return L0}var N0=y({},Hs,{key:function(e){if(e.key){var n=C0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O0=On(N0),P0=y({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=On(P0),z0=y({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),B0=On(z0),F0=y({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),I0=On(F0),H0=y({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=On(H0),G0=y({},Za,{newState:0,oldState:0}),V0=On(G0),j0=[9,13,27,32],tu=zi&&"CompositionEvent"in window,Gs=null;zi&&"documentMode"in document&&(Gs=document.documentMode);var X0=zi&&"TextEvent"in window&&!Gs,Wh=zi&&(!tu||Gs&&8<Gs&&11>=Gs),qh=" ",Yh=!1;function Zh(e,n){switch(e){case"keyup":return j0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function W0(e,n){switch(e){case"compositionend":return Kh(n);case"keypress":return n.which!==32?null:(Yh=!0,qh);case"textInput":return e=n.data,e===qh&&Yh?null:e;default:return null}}function q0(e,n){if(Lr)return e==="compositionend"||!tu&&Zh(e,n)?(e=kh(),Ko=Kc=ua=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wh&&n.locale!=="ko"?null:n.data;default:return null}}var Y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Y0[e.type]:n==="textarea"}function Jh(e,n,a,s){Dr?Ur?Ur.push(s):Ur=[s]:Dr=s,n=Vl(n,"onChange"),0<n.length&&(a=new $o("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Vs=null,js=null;function Z0(e){Og(e,0)}function tl(e){var n=se(e);if(Oi(n))return e}function $h(e,n){if(e==="change")return n}var ep=!1;if(zi){var nu;if(zi){var iu="oninput"in document;if(!iu){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),iu=typeof tp.oninput=="function"}nu=iu}else nu=!1;ep=nu&&(!document.documentMode||9<document.documentMode)}function np(){Vs&&(Vs.detachEvent("onpropertychange",ip),js=Vs=null)}function ip(e){if(e.propertyName==="value"&&tl(js)){var n=[];Jh(n,js,e,qc(e)),Hh(Z0,n)}}function K0(e,n,a){e==="focusin"?(np(),Vs=n,js=a,Vs.attachEvent("onpropertychange",ip)):e==="focusout"&&np()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(js)}function J0(e,n){if(e==="click")return tl(n)}function $0(e,n){if(e==="input"||e==="change")return tl(n)}function ex(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:ex;function Xs(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Fe.call(n,c)||!jn(e[c],n[c]))return!1}return!0}function ap(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rp(e,n){var a=ap(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ap(a)}}function sp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?sp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function op(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mn(e.document)}return n}function au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var tx=zi&&"documentMode"in document&&11>=document.documentMode,Nr=null,ru=null,Ws=null,su=!1;function lp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Nr==null||Nr!==mn(s)||(s=Nr,"selectionStart"in s&&au(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ws&&Xs(Ws,s)||(Ws=s,s=Vl(ru,"onSelect"),0<s.length&&(n=new $o("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Nr)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Or={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},ou={},cp={};zi&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Qa(e){if(ou[e])return ou[e];if(!Or[e])return e;var n=Or[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in cp)return ou[e]=n[a];return e}var up=Qa("animationend"),fp=Qa("animationiteration"),dp=Qa("animationstart"),nx=Qa("transitionrun"),ix=Qa("transitionstart"),ax=Qa("transitioncancel"),hp=Qa("transitionend"),pp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function fi(e,n){pp.set(e,n),Ie(n,[e])}var nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ti=[],Pr=0,cu=0;function il(){for(var e=Pr,n=cu=Pr=0;n<e;){var a=ti[n];ti[n++]=null;var s=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&mp(a,c,f)}}function al(e,n,a,s){ti[Pr++]=e,ti[Pr++]=n,ti[Pr++]=a,ti[Pr++]=s,cu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function uu(e,n,a,s){return al(e,n,a,s),rl(e)}function Ja(e,n){return al(e,null,null,n),rl(e)}function mp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ke(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<mo)throw mo=0,yf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function rx(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,s){return new rx(e,n,a,s)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bi(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function gp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function sl(e,n,a,s,c,f){var _=0;if(s=e,typeof e=="function")fu(e)&&(_=1);else if(typeof e=="string")_=uy(e,a,Te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case R:return e=Xn(31,a,n,c),e.elementType=R,e.lanes=f,e;case w:return $a(a.children,c,f,n);case b:_=8,c|=24;break;case v:return e=Xn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case X:return e=Xn(13,a,n,c),e.elementType=X,e.lanes=f,e;case k:return e=Xn(19,a,n,c),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:_=10;break e;case G:_=9;break e;case U:_=11;break e;case I:_=14;break e;case $:_=16,s=null;break e}_=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Xn(_,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function $a(e,n,a,s){return e=Xn(7,e,s,n),e.lanes=a,e}function du(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function vp(e){var n=Xn(18,null,null,0);return n.stateNode=e,n}function hu(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var _p=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=_p.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ht(n)},_p.set(e,n),n)}return{value:e,source:n,stack:ht(n)}}var Br=[],Fr=0,ol=null,qs=0,ii=[],ai=0,fa=null,bi=1,Ei="";function Fi(e,n){Br[Fr++]=qs,Br[Fr++]=ol,ol=e,qs=n}function xp(e,n,a){ii[ai++]=bi,ii[ai++]=Ei,ii[ai++]=fa,fa=e;var s=bi;e=Ei;var c=32-ke(s)-1;s&=~(1<<c),a+=1;var f=32-ke(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,bi=1<<32-ke(n)+c|a<<c|s,Ei=f+e}else bi=1<<f|a<<c|s,Ei=e}function pu(e){e.return!==null&&(Fi(e,1),xp(e,1,0))}function mu(e){for(;e===ol;)ol=Br[--Fr],Br[Fr]=null,qs=Br[--Fr],Br[Fr]=null;for(;e===fa;)fa=ii[--ai],ii[ai]=null,Ei=ii[--ai],ii[ai]=null,bi=ii[--ai],ii[ai]=null}function yp(e,n){ii[ai++]=bi,ii[ai++]=Ei,ii[ai++]=fa,bi=n.id,Ei=n.overflow,fa=e}var Sn=null,Zt=null,bt=!1,da=null,ri=!1,gu=Error(r(519));function ha(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ys(ni(n,e)),gu}function Sp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[rn]=e,n[xn]=s,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)_t(vo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Dn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Mi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Fg(n.textContent,a)?(s.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),s.onScroll!=null&&_t("scroll",n),s.onScrollEnd!=null&&_t("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||ha(e,!0)}function Mp(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:Sn=Sn.return}}function Ir(e){if(e!==Sn)return!1;if(!bt)return Mp(e),bt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pf(e.type,e.memoizedProps)),a=!a),a&&Zt&&ha(e),Mp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=qg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=qg(e)}else n===27?(n=Zt,Ra(e.type)?(e=Hf,Hf=null,Zt=e):Zt=n):Zt=Sn?oi(e.stateNode.nextSibling):null;return!0}function er(){Zt=Sn=null,bt=!1}function vu(){var e=da;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),da=null),e}function Ys(e){da===null?da=[e]:da.push(e)}var _u=L(null),tr=null,Ii=null;function pa(e,n,a){_e(_u,n._currentValue),n._currentValue=a}function Hi(e){e._currentValue=_u.current,j(_u)}function xu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function yu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=c;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),xu(f.return,a,e),s||(_=null);break e}f=A.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),xu(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Hr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var A=c.type;jn(c.pendingProps.value,_.value)||(e!==null?e.push(A):e=[A])}}else if(c===ge.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}c=c.return}e!==null&&yu(n,e,a,s),n.flags|=262144}function ll(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){tr=e,Ii=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return bp(tr,e)}function cl(e,n){return tr===null&&nr(e),bp(e,n)}function bp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(e===null)throw Error(r(308));Ii=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ii=Ii.next=n;return a}var sx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ox=o.unstable_scheduleCallback,lx=o.unstable_NormalPriority,sn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new sx,data:new Map,refCount:0}}function Zs(e){e.refCount--,e.refCount===0&&ox(lx,function(){e.controller.abort()})}var Ks=null,Mu=0,kr=0,Gr=null;function cx(e,n){if(Ks===null){var a=Ks=[];Mu=0,kr=Af(),Gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Mu++,n.then(Ep,Ep),n}function Ep(){if(--Mu===0&&Ks!==null){Gr!==null&&(Gr.status="fulfilled");var e=Ks;Ks=null,kr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ux(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Tp=O.S;O.S=function(e,n){lg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&cx(e,n),Tp!==null&&Tp(e,n)};var ir=L(null);function bu(){var e=ir.current;return e!==null?e:Wt.pooledCache}function ul(e,n){n===null?_e(ir,ir.current):_e(ir,n.pool)}function Ap(){var e=bu();return e===null?null:{parent:sn._currentValue,pool:e}}var Vr=Error(r(460)),Eu=Error(r(474)),fl=Error(r(542)),dl={then:function(){}};function Rp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dp(e),e;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Dp(e),e}throw rr=n,Vr}}function ar(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rr=a,Vr):a}}var rr=null;function Cp(){if(rr===null)throw Error(r(459));var e=rr;return rr=null,e}function Dp(e){if(e===Vr||e===fl)throw Error(r(483))}var jr=null,Qs=0;function hl(e){var n=Qs;return Qs+=1,jr===null&&(jr=[]),wp(jr,e,n)}function Js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pl(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Up(e){function n(J,V){if(e){var ne=J.deletions;ne===null?(J.deletions=[V],J.flags|=16):ne.push(V)}}function a(J,V){if(!e)return null;for(;V!==null;)n(J,V),V=V.sibling;return null}function s(J){for(var V=new Map;J!==null;)J.key!==null?V.set(J.key,J):V.set(J.index,J),J=J.sibling;return V}function c(J,V){return J=Bi(J,V),J.index=0,J.sibling=null,J}function f(J,V,ne){return J.index=ne,e?(ne=J.alternate,ne!==null?(ne=ne.index,ne<V?(J.flags|=67108866,V):ne):(J.flags|=67108866,V)):(J.flags|=1048576,V)}function _(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function A(J,V,ne,ye){return V===null||V.tag!==6?(V=du(ne,J.mode,ye),V.return=J,V):(V=c(V,ne),V.return=J,V)}function z(J,V,ne,ye){var tt=ne.type;return tt===w?he(J,V,ne.props.children,ye,ne.key):V!==null&&(V.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===$&&ar(tt)===V.type)?(V=c(V,ne.props),Js(V,ne),V.return=J,V):(V=sl(ne.type,ne.key,ne.props,null,J.mode,ye),Js(V,ne),V.return=J,V)}function ie(J,V,ne,ye){return V===null||V.tag!==4||V.stateNode.containerInfo!==ne.containerInfo||V.stateNode.implementation!==ne.implementation?(V=hu(ne,J.mode,ye),V.return=J,V):(V=c(V,ne.children||[]),V.return=J,V)}function he(J,V,ne,ye,tt){return V===null||V.tag!==7?(V=$a(ne,J.mode,ye,tt),V.return=J,V):(V=c(V,ne),V.return=J,V)}function Se(J,V,ne){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=du(""+V,J.mode,ne),V.return=J,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return ne=sl(V.type,V.key,V.props,null,J.mode,ne),Js(ne,V),ne.return=J,ne;case T:return V=hu(V,J.mode,ne),V.return=J,V;case $:return V=ar(V),Se(J,V,ne)}if(pe(V)||de(V))return V=$a(V,J.mode,ne,null),V.return=J,V;if(typeof V.then=="function")return Se(J,hl(V),ne);if(V.$$typeof===P)return Se(J,cl(J,V),ne);pl(J,V)}return null}function ae(J,V,ne,ye){var tt=V!==null?V.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return tt!==null?null:A(J,V,""+ne,ye);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:return ne.key===tt?z(J,V,ne,ye):null;case T:return ne.key===tt?ie(J,V,ne,ye):null;case $:return ne=ar(ne),ae(J,V,ne,ye)}if(pe(ne)||de(ne))return tt!==null?null:he(J,V,ne,ye,null);if(typeof ne.then=="function")return ae(J,V,hl(ne),ye);if(ne.$$typeof===P)return ae(J,V,cl(J,ne),ye);pl(J,ne)}return null}function le(J,V,ne,ye,tt){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return J=J.get(ne)||null,A(V,J,""+ye,tt);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case M:return J=J.get(ye.key===null?ne:ye.key)||null,z(V,J,ye,tt);case T:return J=J.get(ye.key===null?ne:ye.key)||null,ie(V,J,ye,tt);case $:return ye=ar(ye),le(J,V,ne,ye,tt)}if(pe(ye)||de(ye))return J=J.get(ne)||null,he(V,J,ye,tt,null);if(typeof ye.then=="function")return le(J,V,ne,hl(ye),tt);if(ye.$$typeof===P)return le(J,V,ne,cl(V,ye),tt);pl(V,ye)}return null}function je(J,V,ne,ye){for(var tt=null,Rt=null,qe=V,ft=V=0,St=null;qe!==null&&ft<ne.length;ft++){qe.index>ft?(St=qe,qe=null):St=qe.sibling;var wt=ae(J,qe,ne[ft],ye);if(wt===null){qe===null&&(qe=St);break}e&&qe&&wt.alternate===null&&n(J,qe),V=f(wt,V,ft),Rt===null?tt=wt:Rt.sibling=wt,Rt=wt,qe=St}if(ft===ne.length)return a(J,qe),bt&&Fi(J,ft),tt;if(qe===null){for(;ft<ne.length;ft++)qe=Se(J,ne[ft],ye),qe!==null&&(V=f(qe,V,ft),Rt===null?tt=qe:Rt.sibling=qe,Rt=qe);return bt&&Fi(J,ft),tt}for(qe=s(qe);ft<ne.length;ft++)St=le(qe,J,ft,ne[ft],ye),St!==null&&(e&&St.alternate!==null&&qe.delete(St.key===null?ft:St.key),V=f(St,V,ft),Rt===null?tt=St:Rt.sibling=St,Rt=St);return e&&qe.forEach(function(La){return n(J,La)}),bt&&Fi(J,ft),tt}function nt(J,V,ne,ye){if(ne==null)throw Error(r(151));for(var tt=null,Rt=null,qe=V,ft=V=0,St=null,wt=ne.next();qe!==null&&!wt.done;ft++,wt=ne.next()){qe.index>ft?(St=qe,qe=null):St=qe.sibling;var La=ae(J,qe,wt.value,ye);if(La===null){qe===null&&(qe=St);break}e&&qe&&La.alternate===null&&n(J,qe),V=f(La,V,ft),Rt===null?tt=La:Rt.sibling=La,Rt=La,qe=St}if(wt.done)return a(J,qe),bt&&Fi(J,ft),tt;if(qe===null){for(;!wt.done;ft++,wt=ne.next())wt=Se(J,wt.value,ye),wt!==null&&(V=f(wt,V,ft),Rt===null?tt=wt:Rt.sibling=wt,Rt=wt);return bt&&Fi(J,ft),tt}for(qe=s(qe);!wt.done;ft++,wt=ne.next())wt=le(qe,J,ft,wt.value,ye),wt!==null&&(e&&wt.alternate!==null&&qe.delete(wt.key===null?ft:wt.key),V=f(wt,V,ft),Rt===null?tt=wt:Rt.sibling=wt,Rt=wt);return e&&qe.forEach(function(Sy){return n(J,Sy)}),bt&&Fi(J,ft),tt}function Ht(J,V,ne,ye){if(typeof ne=="object"&&ne!==null&&ne.type===w&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:e:{for(var tt=ne.key;V!==null;){if(V.key===tt){if(tt=ne.type,tt===w){if(V.tag===7){a(J,V.sibling),ye=c(V,ne.props.children),ye.return=J,J=ye;break e}}else if(V.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===$&&ar(tt)===V.type){a(J,V.sibling),ye=c(V,ne.props),Js(ye,ne),ye.return=J,J=ye;break e}a(J,V);break}else n(J,V);V=V.sibling}ne.type===w?(ye=$a(ne.props.children,J.mode,ye,ne.key),ye.return=J,J=ye):(ye=sl(ne.type,ne.key,ne.props,null,J.mode,ye),Js(ye,ne),ye.return=J,J=ye)}return _(J);case T:e:{for(tt=ne.key;V!==null;){if(V.key===tt)if(V.tag===4&&V.stateNode.containerInfo===ne.containerInfo&&V.stateNode.implementation===ne.implementation){a(J,V.sibling),ye=c(V,ne.children||[]),ye.return=J,J=ye;break e}else{a(J,V);break}else n(J,V);V=V.sibling}ye=hu(ne,J.mode,ye),ye.return=J,J=ye}return _(J);case $:return ne=ar(ne),Ht(J,V,ne,ye)}if(pe(ne))return je(J,V,ne,ye);if(de(ne)){if(tt=de(ne),typeof tt!="function")throw Error(r(150));return ne=tt.call(ne),nt(J,V,ne,ye)}if(typeof ne.then=="function")return Ht(J,V,hl(ne),ye);if(ne.$$typeof===P)return Ht(J,V,cl(J,ne),ye);pl(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,V!==null&&V.tag===6?(a(J,V.sibling),ye=c(V,ne),ye.return=J,J=ye):(a(J,V),ye=du(ne,J.mode,ye),ye.return=J,J=ye),_(J)):a(J,V)}return function(J,V,ne,ye){try{Qs=0;var tt=Ht(J,V,ne,ye);return jr=null,tt}catch(qe){if(qe===Vr||qe===fl)throw qe;var Rt=Xn(29,qe,null,J.mode);return Rt.lanes=ye,Rt.return=J,Rt}finally{}}}var sr=Up(!0),Lp=Up(!1),ma=!1;function Tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ut&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=rl(e),mp(e,null,a),n}return al(e,s,n,a),rl(e)}function $s(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Si(e,a)}}function Ru(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var wu=!1;function eo(){if(wu){var e=Gr;if(e!==null)throw e}}function to(e,n,a,s){wu=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var z=A,ie=z.next;z.next=null,_===null?f=ie:_.next=ie,_=z;var he=e.alternate;he!==null&&(he=he.updateQueue,A=he.lastBaseUpdate,A!==_&&(A===null?he.firstBaseUpdate=ie:A.next=ie,he.lastBaseUpdate=z))}if(f!==null){var Se=c.baseState;_=0,he=ie=z=null,A=f;do{var ae=A.lane&-536870913,le=ae!==A.lane;if(le?(yt&ae)===ae:(s&ae)===ae){ae!==0&&ae===kr&&(wu=!0),he!==null&&(he=he.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var je=e,nt=A;ae=n;var Ht=a;switch(nt.tag){case 1:if(je=nt.payload,typeof je=="function"){Se=je.call(Ht,Se,ae);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=nt.payload,ae=typeof je=="function"?je.call(Ht,Se,ae):je,ae==null)break e;Se=y({},Se,ae);break e;case 2:ma=!0}}ae=A.callback,ae!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:A.tag,payload:A.payload,callback:A.callback,next:null},he===null?(ie=he=le,z=Se):he=he.next=le,_|=ae;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;le=A,A=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);he===null&&(z=Se),c.baseState=z,c.firstBaseUpdate=ie,c.lastBaseUpdate=he,f===null&&(c.shared.lanes=0),Ma|=_,e.lanes=_,e.memoizedState=Se}}function Np(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Op(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Np(a[e],n)}var Xr=L(null),ml=L(0);function Pp(e,n){e=Zi,_e(ml,e),_e(Xr,n),Zi=e|n.baseLanes}function Cu(){_e(ml,Zi),_e(Xr,Xr.current)}function Du(){Zi=ml.current,j(Xr),j(ml)}var Wn=L(null),si=null;function _a(e){var n=e.alternate;_e(nn,nn.current&1),_e(Wn,e),si===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(si=e)}function Uu(e){_e(nn,nn.current),_e(Wn,e),si===null&&(si=e)}function zp(e){e.tag===22?(_e(nn,nn.current),_e(Wn,e),si===null&&(si=e)):xa()}function xa(){_e(nn,nn.current),_e(Wn,Wn.current)}function qn(e){j(Wn),si===e&&(si=null),j(nn)}var nn=L(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,lt=null,Ft=null,on=null,vl=!1,Wr=!1,or=!1,_l=0,no=0,qr=null,fx=0;function $t(){throw Error(r(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function Nu(e,n,a,s,c,f){return ki=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?xm:Yu,or=!1,f=a(s,c),or=!1,Wr&&(f=Fp(n,a,s,c)),Bp(e),f}function Bp(e){O.H=ro;var n=Ft!==null&&Ft.next!==null;if(ki=0,on=Ft=lt=null,vl=!1,no=0,qr=null,n)throw Error(r(300));e===null||ln||(e=e.dependencies,e!==null&&ll(e)&&(ln=!0))}function Fp(e,n,a,s){lt=e;var c=0;do{if(Wr&&(qr=null),no=0,Wr=!1,25<=c)throw Error(r(301));if(c+=1,on=Ft=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=ym,f=n(a,s)}while(Wr);return f}function dx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?io(n):n,e=e.useState()[0],(Ft!==null?Ft.memoizedState:null)!==e&&(lt.flags|=1024),n}function Ou(){var e=_l!==0;return _l=0,e}function Pu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zu(e){if(vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vl=!1}ki=0,on=Ft=lt=null,Wr=!1,no=_l=0,qr=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?lt.memoizedState=on=e:on=on.next=e,on}function an(){if(Ft===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var n=on===null?lt.memoizedState:on.next;if(n!==null)on=n,Ft=e;else{if(e===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},on===null?lt.memoizedState=on=e:on=on.next=e}return on}function xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(e){var n=no;return no+=1,qr===null&&(qr=[]),e=wp(qr,e,n),n=lt,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?xm:Yu),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return io(e);if(e.$$typeof===P)return Mn(e)}throw Error(r(438,String(e)))}function Bu(e){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=lt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=D;return n.index++,a}function Gi(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=an();return Fu(n,Ft,e)}function Fu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=_=null,z=null,ie=n,he=!1;do{var Se=ie.lane&-536870913;if(Se!==ie.lane?(yt&Se)===Se:(ki&Se)===Se){var ae=ie.revertLane;if(ae===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Se===kr&&(he=!0);else if((ki&ae)===ae){ie=ie.next,ae===kr&&(he=!0);continue}else Se={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},z===null?(A=z=Se,_=f):z=z.next=Se,lt.lanes|=ae,Ma|=ae;Se=ie.action,or&&a(f,Se),f=ie.hasEagerState?ie.eagerState:a(f,Se)}else ae={lane:Se,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},z===null?(A=z=ae,_=f):z=z.next=ae,lt.lanes|=Se,Ma|=Se;ie=ie.next}while(ie!==null&&ie!==n);if(z===null?_=f:z.next=A,!jn(f,e.memoizedState)&&(ln=!0,he&&(a=Gr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Iu(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);jn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Ip(e,n,a){var s=lt,c=an(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!jn((Ft||c).memoizedState,a);if(_&&(c.memoizedState=a,ln=!0),c=c.queue,Gu(Gp.bind(null,s,c,e),[e]),c.getSnapshot!==n||_||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Yr(9,{destroy:void 0},kp.bind(null,s,c,a,n),null),Wt===null)throw Error(r(349));f||(ki&127)!==0||Hp(s,n,a)}return a}function Hp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=xl(),lt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function kp(e,n,a,s){n.value=a,n.getSnapshot=s,Vp(n)&&jp(e)}function Gp(e,n,a){return a(function(){Vp(n)&&jp(e)})}function Vp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function jp(e){var n=Ja(e,2);n!==null&&In(n,e,2)}function Hu(e){var n=Un();if(typeof e=="function"){var a=e;if(e=a(),or){Qe(!0);try{a()}finally{Qe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},n}function Xp(e,n,a,s){return e.baseState=a,Fu(e,Ft,typeof s=="function"?s:Gi)}function hx(e,n,a,s,c){if(El(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var A=a(c,s),z=O.S;z!==null&&z(_,A),qp(e,n,A)}catch(ie){ku(e,n,ie)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(c,s),qp(e,n,f)}catch(ie){ku(e,n,ie)}}function qp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Yp(e,n,s)},function(s){return ku(e,n,s)}):Yp(e,n,a)}function Yp(e,n,a){n.status="fulfilled",n.value=a,Zp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wp(e,a)))}function ku(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Zp(n),n=n.next;while(n!==s)}e.action=null}function Zp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Kp(e,n){return n}function Qp(e,n){if(bt){var a=Wt.formState;if(a!==null){e:{var s=lt;if(bt){if(Zt){t:{for(var c=Zt,f=ri;c.nodeType!==8;){if(!f){c=null;break t}if(c=oi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Zt=oi(c.nextSibling),s=c.data==="F!";break e}}ha(s)}s=!1}s&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:n},a.queue=s,a=gm.bind(null,lt,s),s.dispatch=a,s=Hu(!1),f=qu.bind(null,lt,!1,s.queue),s=Un(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=hx.bind(null,lt,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Jp(e){var n=an();return $p(n,Ft,e)}function $p(e,n,a){if(n=Fu(e,n,Kp)[0],e=Sl(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=io(n)}catch(_){throw _===Vr?fl:_}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,Yr(9,{destroy:void 0},px.bind(null,c,a),null)),[s,f,e]}function px(e,n){e.action=n}function em(e){var n=an(),a=Ft;if(a!==null)return $p(n,a,e);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Yr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=lt.updateQueue,n===null&&(n=xl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function tm(){return an().memoizedState}function Ml(e,n,a,s){var c=Un();lt.flags|=e,c.memoizedState=Yr(1|n,{destroy:void 0},a,s===void 0?null:s)}function bl(e,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Ft!==null&&s!==null&&Lu(s,Ft.memoizedState.deps)?c.memoizedState=Yr(n,f,a,s):(lt.flags|=e,c.memoizedState=Yr(1|n,f,a,s))}function nm(e,n){Ml(8390656,8,e,n)}function Gu(e,n){bl(2048,8,e,n)}function mx(e){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=xl(),lt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function im(e){var n=an().memoizedState;return mx({ref:n,nextImpl:e}),function(){if((Ut&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function am(e,n){return bl(4,2,e,n)}function rm(e,n){return bl(4,4,e,n)}function sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function om(e,n,a){a=a!=null?a.concat([e]):null,bl(4,4,sm.bind(null,n,e),a)}function Vu(){}function lm(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Lu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function cm(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Lu(n,s[1]))return s[0];if(s=e(),or){Qe(!0);try{e()}finally{Qe(!1)}}return a.memoizedState=[s,n],s}function ju(e,n,a){return a===void 0||(ki&1073741824)!==0&&(yt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=ug(),lt.lanes|=e,Ma|=e,a)}function um(e,n,a,s){return jn(a,n)?a:Xr.current!==null?(e=ju(e,a,s),jn(e,n)||(ln=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(yt&261930)===0?(ln=!0,e.memoizedState=a):(e=ug(),lt.lanes|=e,Ma|=e,n)}function fm(e,n,a,s,c){var f=q.p;q.p=f!==0&&8>f?f:8;var _=O.T,A={};O.T=A,qu(e,!1,n,a);try{var z=c(),ie=O.S;if(ie!==null&&ie(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var he=ux(z,s);ao(e,n,he,Kn(e))}else ao(e,n,s,Kn(e))}catch(Se){ao(e,n,{then:function(){},status:"rejected",reason:Se},Kn())}finally{q.p=f,_!==null&&A.types!==null&&(_.types=A.types),O.T=_}}function gx(){}function Xu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=dm(e).queue;fm(e,c,n,Z,a===null?gx:function(){return hm(e),a(s)})}function dm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function hm(e){var n=dm(e);n.next===null&&(n=e.alternate.memoizedState),ao(e,n.next.queue,{},Kn())}function Wu(){return Mn(Mo)}function pm(){return an().memoizedState}function mm(){return an().memoizedState}function vx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();e=ga(a);var s=va(n,e,a);s!==null&&(In(s,n,a),$s(s,n,a)),n={cache:Su()},e.payload=n;return}n=n.return}}function _x(e,n,a){var s=Kn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},El(e)?vm(n,a):(a=uu(e,n,a,s),a!==null&&(In(a,e,s),_m(a,n,s)))}function gm(e,n,a){var s=Kn();ao(e,n,a,s)}function ao(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(e))vm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(c.hasEagerState=!0,c.eagerState=A,jn(A,_))return al(e,n,c,0),Wt===null&&il(),!1}catch{}finally{}if(a=uu(e,n,c,s),a!==null)return In(a,e,s),_m(a,n,s),!0}return!1}function qu(e,n,a,s){if(s={lane:2,revertLane:Af(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},El(e)){if(n)throw Error(r(479))}else n=uu(e,a,s,2),n!==null&&In(n,e,2)}function El(e){var n=e.alternate;return e===lt||n!==null&&n===lt}function vm(e,n){Wr=vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function _m(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Si(e,a)}}var ro={readContext:Mn,use:yl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};ro.useEffectEvent=$t;var xm={readContext:Mn,use:yl,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=Un();n=n===void 0?null:n;var s=e();if(or){Qe(!0);try{e()}finally{Qe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Un();if(a!==void 0){var c=a(n);if(or){Qe(!0);try{a(n)}finally{Qe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=_x.bind(null,lt,e),[s.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:function(e){e=Hu(e);var n=e.queue,a=gm.bind(null,lt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(e,n){var a=Un();return ju(a,e,n)},useTransition:function(){var e=Hu(!1);return e=fm.bind(null,lt,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=lt,c=Un();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(yt&127)!==0||Hp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,nm(Gp.bind(null,s,f,e),[e]),s.flags|=2048,Yr(9,{destroy:void 0},kp.bind(null,s,f,a,n),null),a},useId:function(){var e=Un(),n=Wt.identifierPrefix;if(bt){var a=Ei,s=bi;a=(s&~(1<<32-ke(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=_l++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Wu,useFormState:Qp,useActionState:Qp,useOptimistic:function(e){var n=Un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,lt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Bu,useCacheRefresh:function(){return Un().memoizedState=vx.bind(null,lt)},useEffectEvent:function(e){var n=Un(),a={impl:e};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Yu={readContext:Mn,use:yl,useCallback:lm,useContext:Mn,useEffect:Gu,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:cm,useReducer:Sl,useRef:tm,useState:function(){return Sl(Gi)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=an();return um(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Sl(Gi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:Ip,useId:pm,useHostTransitionStatus:Wu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e,n){var a=an();return Xp(a,Ft,e,n)},useMemoCache:Bu,useCacheRefresh:mm};Yu.useEffectEvent=im;var ym={readContext:Mn,use:yl,useCallback:lm,useContext:Mn,useEffect:Gu,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:cm,useReducer:Iu,useRef:tm,useState:function(){return Iu(Gi)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=an();return Ft===null?ju(a,e,n):um(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Iu(Gi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:Ip,useId:pm,useHostTransitionStatus:Wu,useFormState:em,useActionState:em,useOptimistic:function(e,n){var a=an();return Ft!==null?Xp(a,Ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:mm};ym.useEffectEvent=im;function Zu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Kn(),c=ga(s);c.payload=n,a!=null&&(c.callback=a),n=va(e,c,s),n!==null&&(In(n,e,s),$s(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Kn(),c=ga(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=va(e,c,s),n!==null&&(In(n,e,s),$s(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Kn(),s=ga(a);s.tag=2,n!=null&&(s.callback=n),n=va(e,s,a),n!==null&&(In(n,e,a),$s(n,e,a))}};function Sm(e,n,a,s,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Xs(a,s)||!Xs(c,f):!0}function Mm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Ku.enqueueReplaceState(n,n.state,null)}function lr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function bm(e){nl(e)}function Em(e){console.error(e)}function Tm(e){nl(e)}function Tl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Am(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Qu(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Tl(e,n)},a}function Rm(e){return e=ga(e),e.tag=3,e}function wm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Am(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Am(n,a,s),typeof c!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function xx(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Hr(n,a,c,!0),a=Wn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Bl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),bf(e,s,c)),!1;case 22:return a.flags|=65536,s===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),bf(e,s,c)),!1}throw Error(r(435,a.tag))}return bf(e,s,c),Bl(),!1}if(bt)return n=Wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==gu&&(e=Error(r(422),{cause:s}),Ys(ni(e,a)))):(s!==gu&&(n=Error(r(423),{cause:s}),Ys(ni(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ni(s,a),c=Qu(e.stateNode,s,c),Ru(e,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),po===null?po=[f]:po.push(f),en!==4&&(en=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Qu(a.stateNode,s,e),Ru(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Rm(c),wm(c,e,a,s),Ru(a,c),!1}a=a.return}while(a!==null);return!1}var Ju=Error(r(461)),ln=!1;function bn(e,n,a,s){n.child=e===null?Lp(n,null,a,s):sr(n,e.child,a,s)}function Cm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var A in s)A!=="ref"&&(_[A]=s[A])}else _=s;return nr(n),s=Nu(e,n,a,_,f,c),A=Ou(),e!==null&&!ln?(Pu(e,n,c),Vi(e,n,c)):(bt&&A&&pu(n),n.flags|=1,bn(e,n,s,c),n.child)}function Dm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Um(e,n,f,s,c)):(e=sl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!of(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xs,a(_,s)&&e.ref===n.ref)return Vi(e,n,c)}return n.flags|=1,e=Bi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Um(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Xs(f,s)&&e.ref===n.ref)if(ln=!1,n.pendingProps=s=f,of(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Vi(e,n,c)}return $u(e,n,a,s,c)}function Lm(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Nm(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(n,f!==null?f.cachePool:null),f!==null?Pp(n,f):Cu(),zp(n);else return s=n.lanes=536870912,Nm(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(ul(n,f.cachePool),Pp(n,f),xa(),n.memoizedState=null):(e!==null&&ul(n,null),Cu(),xa());return bn(e,n,c,a),n.child}function so(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Nm(e,n,a,s,c){var f=bu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ul(n,null),Cu(),zp(n),e!==null&&Hr(e,n,s,!0),n.childLanes=c,null}function Al(e,n){return n=wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Om(e,n,a){return sr(n,e.child,null,a),e=Al(n,n.pendingProps),e.flags|=2,qn(n),n.memoizedState=null,e}function yx(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(bt){if(s.mode==="hidden")return e=Al(n,s),n.lanes=536870912,so(null,e);if(Uu(n),(e=Zt)?(e=Wg(e,ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:fa!==null?{id:bi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=n,n.child=a,Sn=n,Zt=null)):e=null,e===null)throw ha(n);return n.lanes=536870912,null}return Al(n,s)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Uu(n),c)if(n.flags&256)n.flags&=-257,n=Om(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Hr(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(s=Wt,s!==null&&(_=Tr(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ja(e,_),In(s,e,_),Ju;Bl(),n=Om(e,n,a)}else e=f.treeContext,Zt=oi(_.nextSibling),Sn=n,bt=!0,da=null,ri=!1,e!==null&&yp(n,e),n=Al(n,s),n.flags|=4096;return n}return e=Bi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Rl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function $u(e,n,a,s,c){return nr(n),a=Nu(e,n,a,s,void 0,c),s=Ou(),e!==null&&!ln?(Pu(e,n,c),Vi(e,n,c)):(bt&&s&&pu(n),n.flags|=1,bn(e,n,a,c),n.child)}function Pm(e,n,a,s,c,f){return nr(n),n.updateQueue=null,a=Fp(n,s,a,c),Bp(e),s=Ou(),e!==null&&!ln?(Pu(e,n,f),Vi(e,n,f)):(bt&&s&&pu(n),n.flags|=1,bn(e,n,a,f),n.child)}function zm(e,n,a,s,c){if(nr(n),n.stateNode===null){var f=zr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Tu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):zr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Zu(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Ku.enqueueReplaceState(f,f.state,null),to(n,s,f,c),eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,z=lr(a,A);f.props=z;var ie=f.context,he=a.contextType;_=zr,typeof he=="object"&&he!==null&&(_=Mn(he));var Se=a.getDerivedStateFromProps;he=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||ie!==_)&&Mm(n,f,s,_),ma=!1;var ae=n.memoizedState;f.state=ae,to(n,s,f,c),eo(),ie=n.memoizedState,A||ae!==ie||ma?(typeof Se=="function"&&(Zu(n,a,Se,s),ie=n.memoizedState),(z=ma||Sm(n,a,z,s,ae,ie,_))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ie),f.props=s,f.state=ie,f.context=_,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Au(e,n),_=n.memoizedProps,he=lr(a,_),f.props=he,Se=n.pendingProps,ae=f.context,ie=a.contextType,z=zr,typeof ie=="object"&&ie!==null&&(z=Mn(ie)),A=a.getDerivedStateFromProps,(ie=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Se||ae!==z)&&Mm(n,f,s,z),ma=!1,ae=n.memoizedState,f.state=ae,to(n,s,f,c),eo();var le=n.memoizedState;_!==Se||ae!==le||ma||e!==null&&e.dependencies!==null&&ll(e.dependencies)?(typeof A=="function"&&(Zu(n,a,A,s),le=n.memoizedState),(he=ma||Sm(n,a,he,s,ae,le,z)||e!==null&&e.dependencies!==null&&ll(e.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,le,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,le,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),f.props=s,f.state=le,f.context=z,s=he):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Rl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=sr(n,e.child,null,c),n.child=sr(n,null,a,c)):bn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Vi(e,n,c),e}function Bm(e,n,a,s){return er(),n.flags|=256,bn(e,n,a,s),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tf(e){return{baseLanes:e,cachePool:Ap()}}function nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Zn),e}function Fm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(bt){if(c?_a(n):xa(),(e=Zt)?(e=Wg(e,ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:fa!==null?{id:bi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=n,n.child=a,Sn=n,Zt=null)):e=null,e===null)throw ha(n);return If(e)?n.lanes=32:n.lanes=536870912,null}var A=s.children;return s=s.fallback,c?(xa(),c=n.mode,A=wl({mode:"hidden",children:A},c),s=$a(s,c,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,s=n.child,s.memoizedState=tf(a),s.childLanes=nf(e,_,a),n.memoizedState=ef,so(null,s)):(_a(n),af(n,A))}var z=e.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=rf(e,n,a)):n.memoizedState!==null?(xa(),n.child=e.child,n.flags|=128,n=null):(xa(),A=s.fallback,c=n.mode,s=wl({mode:"visible",children:s.children},c),A=$a(A,c,a,null),A.flags|=2,s.return=n,A.return=n,s.sibling=A,n.child=s,sr(n,e.child,null,a),s=n.child,s.memoizedState=tf(a),s.childLanes=nf(e,_,a),n.memoizedState=ef,n=so(null,s));else if(_a(n),If(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var ie=_.dgst;_=ie,s=Error(r(419)),s.stack="",s.digest=_,Ys({value:s,source:null,stack:null}),n=rf(e,n,a)}else if(ln||Hr(e,n,a,!1),_=(a&e.childLanes)!==0,ln||_){if(_=Wt,_!==null&&(s=Tr(_,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,Ja(e,s),In(_,e,s),Ju;Ff(A)||Bl(),n=rf(e,n,a)}else Ff(A)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Zt=oi(A.nextSibling),Sn=n,bt=!0,da=null,ri=!1,e!==null&&yp(n,e),n=af(n,s.children),n.flags|=4096);return n}return c?(xa(),A=s.fallback,c=n.mode,z=e.child,ie=z.sibling,s=Bi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,ie!==null?A=Bi(ie,A):(A=$a(A,c,a,null),A.flags|=2),A.return=n,s.return=n,s.sibling=A,n.child=s,so(null,s),s=n.child,A=e.child.memoizedState,A===null?A=tf(a):(c=A.cachePool,c!==null?(z=sn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=Ap(),A={baseLanes:A.baseLanes|a,cachePool:c}),s.memoizedState=A,s.childLanes=nf(e,_,a),n.memoizedState=ef,so(e.child,s)):(_a(n),a=e.child,e=a.sibling,a=Bi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function af(e,n){return n=wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wl(e,n){return e=Xn(22,e,null,n),e.lanes=0,e}function rf(e,n,a){return sr(n,e.child,null,a),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Im(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),xu(e.return,n,a)}function sf(e,n,a,s,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Hm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=nn.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,_e(nn,_),bn(e,n,s,a),s=bt?qs:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Im(e,a,n);else if(e.tag===19)Im(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),sf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&gl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}sf(n,!0,a,null,f,s);break;case"together":sf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Vi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Hr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Bi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Bi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ll(e)))}function Sx(e,n,a){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),pa(n,sn,e.memoizedState.cache),er();break;case 27:case 5:Je(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Fm(e,n,a):(_a(n),e=Vi(e,n,a),e!==null?e.sibling:null);_a(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Hr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Hm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_e(nn,nn.current),s)break;return null;case 22:return n.lanes=0,Lm(e,n,a,n.pendingProps);case 24:pa(n,sn,e.memoizedState.cache)}return Vi(e,n,a)}function km(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!of(e,a)&&(n.flags&128)===0)return ln=!1,Sx(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,bt&&(n.flags&1048576)!==0&&xp(n,qs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=ar(n.elementType),n.type=e,typeof e=="function")fu(e)?(s=lr(e,s),n.tag=1,n=zm(null,n,e,s,a)):(n.tag=0,n=$u(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===U){n.tag=11,n=Cm(null,n,e,s,a);break e}else if(c===I){n.tag=14,n=Dm(null,n,e,s,a);break e}}throw n=ue(e)||e,Error(r(306,n,""))}}return n;case 0:return $u(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=lr(s,n.pendingProps),zm(e,n,s,c,a);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Au(e,n),to(n,s,null,a);var _=n.memoizedState;if(s=_.cache,pa(n,sn,s),s!==f.cache&&yu(n,[sn],a,!0),eo(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Bm(e,n,s,a);break e}else if(s!==c){c=ni(Error(r(424)),n),Ys(c),n=Bm(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Zt=oi(e.firstChild),Sn=n,bt=!0,da=null,ri=!0,a=Lp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(er(),s===c){n=Vi(e,n,a);break e}bn(e,n,s,a)}n=n.child}return n;case 26:return Rl(e,n),e===null?(a=Jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,e=n.pendingProps,s=jl(xe.current).createElement(a),s[rn]=n,s[xn]=e,En(s,a,e),be(s),n.stateNode=s):n.memoizedState=Jg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Je(n),e===null&&bt&&(s=n.stateNode=Zg(n.type,n.pendingProps,xe.current),Sn=n,ri=!0,c=Zt,Ra(n.type)?(Hf=c,Zt=oi(s.firstChild)):Zt=c),bn(e,n,n.pendingProps.children,a),Rl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&bt&&((c=s=Zt)&&(s=Qx(s,n.type,n.pendingProps,ri),s!==null?(n.stateNode=s,Sn=n,Zt=oi(s.firstChild),ri=!1,c=!0):c=!1),c||ha(n)),Je(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,s=f.children,Pf(c,f)?s=null:_!==null&&Pf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Nu(e,n,dx,null,null,a),Mo._currentValue=c),Rl(e,n),bn(e,n,s,a),n.child;case 6:return e===null&&bt&&((e=a=Zt)&&(a=Jx(a,n.pendingProps,ri),a!==null?(n.stateNode=a,Sn=n,Zt=null,e=!0):e=!1),e||ha(n)),null;case 13:return Fm(e,n,a);case 4:return He(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=sr(n,null,s,a):bn(e,n,s,a),n.child;case 11:return Cm(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,pa(n,n.type,s.value),bn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,nr(n),c=Mn(c),s=s(c),n.flags|=1,bn(e,n,s,a),n.child;case 14:return Dm(e,n,n.type,n.pendingProps,a);case 15:return Um(e,n,n.type,n.pendingProps,a);case 19:return Hm(e,n,a);case 31:return yx(e,n,a);case 22:return Lm(e,n,a,n.pendingProps);case 24:return nr(n),s=Mn(sn),e===null?(c=bu(),c===null&&(c=Wt,f=Su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Tu(n),pa(n,sn,c)):((e.lanes&a)!==0&&(Au(e,n),to(n,null,null,a),eo()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,sn,s)):(s=f.cache,pa(n,sn,s),s!==c.cache&&yu(n,[sn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(e){e.flags|=4}function lf(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(pg())e.flags|=8192;else throw rr=dl,Eu}else e.flags&=-16777217}function Gm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!iv(n))if(pg())e.flags|=8192;else throw rr=dl,Eu}function Cl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,Jr|=n)}function oo(e,n){if(!bt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Kt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Mx(e,n,a){var s=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Hi(sn),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),Kt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ji(n),f!==null?(Kt(n),Gm(n,f)):(Kt(n),lf(n,c,null,s,a))):f?f!==e.memoizedState?(ji(n),Kt(n),Gm(n,f)):(Kt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&ji(n),Kt(n),lf(n,c,e,s,a)),null;case 27:if(Lt(n),a=xe.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}e=Te.current,Ir(n)?Sp(n):(e=Zg(c,s,a),n.stateNode=e,ji(n))}return Kt(n),null;case 5:if(Lt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}if(f=Te.current,Ir(n))Sp(n);else{var _=jl(xe.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[rn]=n,f[xn]=s;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(En(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ji(n)}}return Kt(n),lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=xe.current,Ir(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Fg(e.nodeValue,a)),e||ha(n,!0)}else e=jl(e).createTextNode(s),e[rn]=n,n.stateNode=e}return Kt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Ir(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),e=!1}else a=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Kt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ir(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),c=!1}else c=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Cl(n,n.updateQueue),Kt(n),null);case 4:return Oe(),e===null&&Df(n.stateNode.containerInfo),Kt(n),null;case 10:return Hi(n.type),Kt(n),null;case 19:if(j(nn),s=n.memoizedState,s===null)return Kt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)oo(s,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=gl(e),f!==null){for(n.flags|=128,oo(s,!1),e=f.updateQueue,n.updateQueue=e,Cl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)gp(a,e),a=a.sibling;return _e(nn,nn.current&1|2),bt&&Fi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&E()>Ol&&(n.flags|=128,c=!0,oo(s,!1),n.lanes=4194304)}else{if(!c)if(e=gl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Cl(n,e),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!bt)return Kt(n),null}else 2*E()-s.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,c=!0,oo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=E(),e.sibling=null,a=nn.current,_e(nn,c?a&1|2:a&1),bt&&Fi(n,s.treeForkCount),e):(Kt(n),null);case 22:case 23:return qn(n),Du(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Cl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&j(ir),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(sn),Kt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function bx(e,n){switch(mu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(sn),Oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Lt(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(nn),null;case 4:return Oe(),null;case 10:return Hi(n.type),null;case 22:case 23:return qn(n),Du(),e!==null&&j(ir),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hi(sn),null;case 25:return null;default:return null}}function Vm(e,n){switch(mu(n),n.tag){case 3:Hi(sn),Oe();break;case 26:case 27:case 5:Lt(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:j(nn);break;case 10:Hi(n.type);break;case 22:case 23:qn(n),Du(),e!==null&&j(ir);break;case 24:Hi(sn)}}function lo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(A){Bt(n,n.return,A)}}function ya(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var _=s.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,c=n;var z=a,ie=A;try{ie()}catch(he){Bt(c,z,he)}}}s=s.next}while(s!==f)}}catch(he){Bt(n,n.return,he)}}function jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Op(n,a)}catch(s){Bt(e,e.return,s)}}}function Xm(e,n,a){a.props=lr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Bt(e,n,s)}}function co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Bt(e,n,c)}}function Ti(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Bt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Bt(e,n,c)}else a.current=null}function Wm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Bt(e,e.return,c)}}function cf(e,n,a){try{var s=e.stateNode;Xx(s,e.type,a,n),s[xn]=n}catch(c){Bt(e,e.return,c)}}function qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function uf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function Dl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Dl(e,n,a),e=e.sibling;e!==null;)Dl(e,n,a),e=e.sibling}function Ym(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,s,a),n[rn]=e,n[xn]=a}catch(f){Bt(e,e.return,f)}}var Xi=!1,cn=!1,df=!1,Zm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Ex(e,n){if(e=e.containerInfo,Nf=Ql,e=op(e),au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,A=-1,z=-1,ie=0,he=0,Se=e,ae=null;t:for(;;){for(var le;Se!==a||c!==0&&Se.nodeType!==3||(A=_+c),Se!==f||s!==0&&Se.nodeType!==3||(z=_+s),Se.nodeType===3&&(_+=Se.nodeValue.length),(le=Se.firstChild)!==null;)ae=Se,Se=le;for(;;){if(Se===e)break t;if(ae===a&&++ie===c&&(A=_),ae===f&&++he===s&&(z=_),(le=Se.nextSibling)!==null)break;Se=ae,ae=Se.parentNode}Se=le}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:e,selectionRange:a},Ql=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var je=lr(a.type,c);e=s.getSnapshotBeforeUpdate(je,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(nt){Bt(a,a.return,nt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Bf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function Km(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:qi(e,a),s&4&&lo(5,a);break;case 1:if(qi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Bt(a,a.return,_)}else{var c=lr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Bt(a,a.return,_)}}s&64&&jm(a),s&512&&co(a,a.return);break;case 3:if(qi(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Op(e,n)}catch(_){Bt(a,a.return,_)}}break;case 27:n===null&&s&4&&Ym(a);case 26:case 5:qi(e,a),n===null&&s&4&&Wm(a),s&512&&co(a,a.return);break;case 12:qi(e,a);break;case 31:qi(e,a),s&4&&$m(e,a);break;case 13:qi(e,a),s&4&&eg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Nx.bind(null,a),$x(e,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||cn,c=Xi;var f=cn;Xi=s,(cn=n)&&!f?Yi(e,a,(a.subtreeFlags&8772)!==0):qi(e,a),Xi=c,cn=f}break;case 30:break;default:qi(e,a)}}function Qm(e){var n=e.alternate;n!==null&&(e.alternate=null,Qm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&C(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,Pn=!1;function Wi(e,n,a){for(a=a.child;a!==null;)Jm(e,n,a),a=a.sibling}function Jm(e,n,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:cn||Ti(a,n),Wi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ti(a,n);var s=Qt,c=Pn;Ra(a.type)&&(Qt=a.stateNode,Pn=!1),Wi(e,n,a),xo(a.stateNode),Qt=s,Pn=c;break;case 5:cn||Ti(a,n);case 6:if(s=Qt,c=Pn,Qt=null,Wi(e,n,a),Qt=s,Pn=c,Qt!==null)if(Pn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Qt!==null&&(Pn?(e=Qt,jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ss(e)):jg(Qt,a.stateNode));break;case 4:s=Qt,c=Pn,Qt=a.stateNode.containerInfo,Pn=!0,Wi(e,n,a),Qt=s,Pn=c;break;case 0:case 11:case 14:case 15:ya(2,a,n),cn||ya(4,a,n),Wi(e,n,a);break;case 1:cn||(Ti(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Xm(a,n,s)),Wi(e,n,a);break;case 21:Wi(e,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Wi(e,n,a),cn=s;break;default:Wi(e,n,a)}}function $m(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ss(e)}catch(a){Bt(n,n.return,a)}}}function eg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ss(e)}catch(a){Bt(n,n.return,a)}}function Tx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Zm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Zm),n;default:throw Error(r(435,e.tag))}}function Ul(e,n){var a=Tx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Ox.bind(null,e,s);s.then(c,c)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,_=n,A=_;e:for(;A!==null;){switch(A.tag){case 27:if(Ra(A.type)){Qt=A.stateNode,Pn=!1;break e}break;case 5:Qt=A.stateNode,Pn=!1;break e;case 3:case 4:Qt=A.stateNode.containerInfo,Pn=!0;break e}A=A.return}if(Qt===null)throw Error(r(160));Jm(f,_,c),Qt=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)tg(n,e),n=n.sibling}var di=null;function tg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),Bn(e),s&4&&(ya(3,e,e.return),lo(3,e),ya(5,e,e.return));break;case 1:zn(n,e),Bn(e),s&512&&(cn||a===null||Ti(a,a.return)),s&64&&Xi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=di;if(zn(n,e),Bn(e),s&512&&(cn||a===null||Ti(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[qa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,s,a),f[rn]=e,be(f),s=f;break e;case"link":var _=tv("link","href",c).get(s+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break t}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;case"meta":if(_=tv("meta","content",c).get(s+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break t}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=e,be(f),s=f}e.stateNode=s}else nv(c,e.type,e.stateNode);else e.stateNode=ev(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?nv(c,e.type,e.stateNode):ev(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),Bn(e),s&512&&(cn||a===null||Ti(a,a.return)),a!==null&&s&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),Bn(e),s&512&&(cn||a===null||Ti(a,a.return)),e.flags&32){c=e.stateNode;try{Cr(c,"")}catch(je){Bt(e,e.return,je)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,cf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(df=!0);break;case 6:if(zn(n,e),Bn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(je){Bt(e,e.return,je)}}break;case 3:if(ql=null,c=di,di=Xl(n.containerInfo),zn(n,e),di=c,Bn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ss(n.containerInfo)}catch(je){Bt(e,e.return,je)}df&&(df=!1,ng(e));break;case 4:s=di,di=Xl(e.stateNode.containerInfo),zn(n,e),Bn(e),di=s;break;case 12:zn(n,e),Bn(e);break;case 31:zn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 13:zn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nl=E()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,ie=Xi,he=cn;if(Xi=ie||c,cn=he||z,zn(n,e),cn=he,Xi=ie,Bn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Xi||cn||cr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=z.stateNode;var Se=z.memoizedProps.style,ae=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;A.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(je){Bt(z,z.return,je)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(je){Bt(z,z.return,je)}}}else if(n.tag===18){if(a===null){z=n;try{var le=z.stateNode;c?Xg(le,!0):Xg(z.stateNode,!1)}catch(je){Bt(z,z.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ul(e,a))));break;case 19:zn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 30:break;case 21:break;default:zn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(qm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(e);Dl(e,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Cr(_,""),a.flags&=-33);var A=uf(e);Dl(e,A,_);break;case 3:case 4:var z=a.stateNode.containerInfo,ie=uf(e);ff(e,ie,z);break;default:throw Error(r(161))}}catch(he){Bt(e,e.return,he)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ng(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ng(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Km(e,n.alternate,n),n=n.sibling}function cr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),cr(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xm(n,n.return,a),cr(n);break;case 27:xo(n.stateNode);case 26:case 5:Ti(n,n.return),cr(n);break;case 22:n.memoizedState===null&&cr(n);break;case 30:cr(n);break;default:cr(n)}e=e.sibling}}function Yi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Yi(c,f,a),lo(4,f);break;case 1:if(Yi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ie){Bt(s,s.return,ie)}if(s=f,c=s.updateQueue,c!==null){var A=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Np(z[c],A)}catch(ie){Bt(s,s.return,ie)}}a&&_&64&&jm(f),co(f,f.return);break;case 27:Ym(f);case 26:case 5:Yi(c,f,a),a&&s===null&&_&4&&Wm(f),co(f,f.return);break;case 12:Yi(c,f,a);break;case 31:Yi(c,f,a),a&&_&4&&$m(c,f);break;case 13:Yi(c,f,a),a&&_&4&&eg(c,f);break;case 22:f.memoizedState===null&&Yi(c,f,a),co(f,f.return);break;case 30:break;default:Yi(c,f,a)}n=n.sibling}}function hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zs(a))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zs(e))}function hi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ig(e,n,a,s),n=n.sibling}function ig(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:hi(e,n,a,s),c&2048&&lo(9,n);break;case 1:hi(e,n,a,s);break;case 3:hi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zs(e)));break;case 12:if(c&2048){hi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Bt(n,n.return,z)}}else hi(e,n,a,s);break;case 31:hi(e,n,a,s);break;case 13:hi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?hi(e,n,a,s):uo(e,n):f._visibility&2?hi(e,n,a,s):(f._visibility|=2,Zr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&hf(_,n);break;case 24:hi(e,n,a,s),c&2048&&pf(n.alternate,n);break;default:hi(e,n,a,s)}}function Zr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,A=a,z=s,ie=_.flags;switch(_.tag){case 0:case 11:case 15:Zr(f,_,A,z,c),lo(8,_);break;case 23:break;case 22:var he=_.stateNode;_.memoizedState!==null?he._visibility&2?Zr(f,_,A,z,c):uo(f,_):(he._visibility|=2,Zr(f,_,A,z,c)),c&&ie&2048&&hf(_.alternate,_);break;case 24:Zr(f,_,A,z,c),c&&ie&2048&&pf(_.alternate,_);break;default:Zr(f,_,A,z,c)}n=n.sibling}}function uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:uo(a,s),c&2048&&hf(s.alternate,s);break;case 24:uo(a,s),c&2048&&pf(s.alternate,s);break;default:uo(a,s)}n=n.sibling}}var fo=8192;function Kr(e,n,a){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)ag(e,n,a),e=e.sibling}function ag(e,n,a){switch(e.tag){case 26:Kr(e,n,a),e.flags&fo&&e.memoizedState!==null&&fy(a,di,e.memoizedState,e.memoizedProps);break;case 5:Kr(e,n,a);break;case 3:case 4:var s=di;di=Xl(e.stateNode.containerInfo),Kr(e,n,a),di=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=fo,fo=16777216,Kr(e,n,a),fo=s):Kr(e,n,a));break;default:Kr(e,n,a)}}function rg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,og(s,e)}rg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sg(e),e=e.sibling}function sg(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&ya(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ll(e)):ho(e);break;default:ho(e)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,og(s,e)}rg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}e=e.sibling}}function og(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Zs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else e:for(a=e;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(Qm(s),s===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var Ax={getCacheForType:function(e){var n=Mn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},Rx=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Wt=null,vt=null,yt=0,zt=0,Yn=null,Sa=!1,Qr=!1,mf=!1,Zi=0,en=0,Ma=0,ur=0,gf=0,Zn=0,Jr=0,po=null,Fn=null,vf=!1,Nl=0,lg=0,Ol=1/0,Pl=null,ba=null,dn=0,Ea=null,$r=null,Ki=0,_f=0,xf=null,cg=null,mo=0,yf=null;function Kn(){return(Ut&2)!==0&&yt!==0?yt&-yt:O.T!==null?Af():Wa()}function ug(){if(Zn===0)if((yt&536870912)===0||bt){var e=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),Zn=e}else Zn=536870912;return e=Wn.current,e!==null&&(e.flags|=32),Zn}function In(e,n,a){(e===Wt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(es(e,0),Ta(e,yt,Zn,!1)),Cn(e,a),((Ut&2)===0||e!==Wt)&&(e===Wt&&((Ut&2)===0&&(ur|=a),en===4&&Ta(e,yt,Zn,!1)),Ai(e))}function fg(e,n,a){if((Ut&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ve(e,n),c=s?Dx(e,n):Mf(e,n,!0),f=s;do{if(c===0){Qr&&!s&&Ta(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!wx(a)){c=Mf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var A=e;c=po;var z=A.current.memoizedState.isDehydrated;if(z&&(es(A,_).flags|=256),_=Mf(A,_,!1),_!==2){if(mf&&!z){A.errorRecoveryDisabledLanes|=f,ur|=f,c=4;break e}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){es(e,0),Ta(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,Zn,!Sa);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Nl+300-E(),10<c)){if(Ta(s,n,Zn,!Sa),Me(s,0,!0)!==0)break e;Ki=n,s.timeoutHandle=Gg(dg.bind(null,s,a,Fn,Pl,vf,n,Zn,ur,Jr,Sa,f,"Throttled",-0,0),c);break e}dg(s,a,Fn,Pl,vf,n,Zn,ur,Jr,Sa,f,null,-0,0)}}break}while(!0);Ai(e)}function dg(e,n,a,s,c,f,_,A,z,ie,he,Se,ae,le){if(e.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},ag(n,f,Se);var je=(f&62914560)===f?Nl-E():(f&4194048)===f?lg-E():0;if(je=dy(Se,je),je!==null){Ki=f,e.cancelPendingCommit=je(yg.bind(null,e,n,f,a,s,c,_,A,z,he,Se,null,ae,le)),Ta(e,f,_,!ie);return}}yg(e,n,f,a,s,c,_,A,z)}function wx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!jn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(e,n,a,s){n&=~gf,n&=~ur,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-ke(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&Ps(e,a,n)}function zl(){return(Ut&6)===0?(go(0),!1):!0}function Sf(){if(vt!==null){if(zt===0)var e=vt.return;else e=vt,Ii=tr=null,zu(e),jr=null,Qs=0,e=vt;for(;e!==null;)Vm(e.alternate,e),e=e.return;vt=null}}function es(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Yx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ki=0,Sf(),Wt=e,vt=a=Bi(e.current,null),yt=n,zt=0,Yn=null,Sa=!1,Qr=Ve(e,n),mf=!1,Jr=Zn=gf=ur=Ma=en=0,Fn=po=null,vf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-ke(s),f=1<<c;n|=e[c],s&=~f}return Zi=n,il(),a}function hg(e,n){lt=null,O.H=ro,n===Vr||n===fl?(n=Cp(),zt=3):n===Eu?(n=Cp(),zt=4):zt=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,vt===null&&(en=1,Tl(e,ni(n,e.current)))}function pg(){var e=Wn.current;return e===null?!0:(yt&4194048)===yt?si===null:(yt&62914560)===yt||(yt&536870912)!==0?e===si:!1}function mg(){var e=O.H;return O.H=ro,e===null?ro:e}function gg(){var e=O.A;return O.A=Ax,e}function Bl(){en=4,Sa||(yt&4194048)!==yt&&Wn.current!==null||(Qr=!0),(Ma&134217727)===0&&(ur&134217727)===0||Wt===null||Ta(Wt,yt,Zn,!1)}function Mf(e,n,a){var s=Ut;Ut|=2;var c=mg(),f=gg();(Wt!==e||yt!==n)&&(Pl=null,es(e,n)),n=!1;var _=en;e:do try{if(zt!==0&&vt!==null){var A=vt,z=Yn;switch(zt){case 8:Sf(),_=6;break e;case 3:case 2:case 9:case 6:Wn.current===null&&(n=!0);var ie=zt;if(zt=0,Yn=null,ts(e,A,z,ie),a&&Qr){_=0;break e}break;default:ie=zt,zt=0,Yn=null,ts(e,A,z,ie)}}Cx(),_=en;break}catch(he){hg(e,he)}while(!0);return n&&e.shellSuspendCounter++,Ii=tr=null,Ut=s,O.H=c,O.A=f,vt===null&&(Wt=null,yt=0,il()),_}function Cx(){for(;vt!==null;)vg(vt)}function Dx(e,n){var a=Ut;Ut|=2;var s=mg(),c=gg();Wt!==e||yt!==n?(Pl=null,Ol=E()+500,es(e,n)):Qr=Ve(e,n);e:do try{if(zt!==0&&vt!==null){n=vt;var f=Yn;t:switch(zt){case 1:zt=0,Yn=null,ts(e,n,f,1);break;case 2:case 9:if(Rp(f)){zt=0,Yn=null,_g(n);break}n=function(){zt!==2&&zt!==9||Wt!==e||(zt=7),Ai(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Rp(f)?(zt=0,Yn=null,_g(n)):(zt=0,Yn=null,ts(e,n,f,7));break;case 5:var _=null;switch(vt.tag){case 26:_=vt.memoizedState;case 5:case 27:var A=vt;if(_?iv(_):A.stateNode.complete){zt=0,Yn=null;var z=A.sibling;if(z!==null)vt=z;else{var ie=A.return;ie!==null?(vt=ie,Fl(ie)):vt=null}break t}}zt=0,Yn=null,ts(e,n,f,5);break;case 6:zt=0,Yn=null,ts(e,n,f,6);break;case 8:Sf(),en=6;break e;default:throw Error(r(462))}}Ux();break}catch(he){hg(e,he)}while(!0);return Ii=tr=null,O.H=s,O.A=c,Ut=a,vt!==null?0:(Wt=null,yt=0,il(),en)}function Ux(){for(;vt!==null&&!jt();)vg(vt)}function vg(e){var n=km(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Fl(e):vt=n}function _g(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Pm(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Pm(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:zu(n);default:Vm(a,n),n=vt=gp(n,Zi),n=km(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Fl(e):vt=n}function ts(e,n,a,s){Ii=tr=null,zu(n),jr=null,Qs=0;var c=n.return;try{if(xx(e,c,n,a,yt)){en=1,Tl(e,ni(a,e.current)),vt=null;return}}catch(f){if(c!==null)throw vt=c,f;en=1,Tl(e,ni(a,e.current)),vt=null;return}n.flags&32768?(bt||s===1?e=!0:Qr||(yt&536870912)!==0?e=!1:(Sa=e=!0,(s===2||s===9||s===3||s===6)&&(s=Wn.current,s!==null&&s.tag===13&&(s.flags|=16384))),xg(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){xg(n,Sa);return}e=n.return;var a=Mx(n.alternate,n,Zi);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=e}while(n!==null);en===0&&(en=5)}function xg(e,n){do{var a=bx(e.alternate,e);if(a!==null){a.flags&=32767,vt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){vt=e;return}vt=e=a}while(e!==null);en=6,vt=null}function yg(e,n,a,s,c,f,_,A,z){e.cancelPendingCommit=null;do Il();while(dn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=cu,ei(e,a,f,_,A,z),e===Wt&&(vt=Wt=null,yt=0),$r=n,Ea=e,Ki=a,_f=f,xf=c,cg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Px(fe,function(){return Tg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=q.p,q.p=2,_=Ut,Ut|=4;try{Ex(e,n,a)}finally{Ut=_,q.p=c,O.T=s}}dn=1,Sg(),Mg(),bg()}}function Sg(){if(dn===1){dn=0;var e=Ea,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=q.p;q.p=2;var c=Ut;Ut|=4;try{tg(n,e);var f=Of,_=op(e.containerInfo),A=f.focusedElem,z=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&sp(A.ownerDocument.documentElement,A)){if(z!==null&&au(A)){var ie=z.start,he=z.end;if(he===void 0&&(he=ie),"selectionStart"in A)A.selectionStart=ie,A.selectionEnd=Math.min(he,A.value.length);else{var Se=A.ownerDocument||document,ae=Se&&Se.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),je=A.textContent.length,nt=Math.min(z.start,je),Ht=z.end===void 0?nt:Math.min(z.end,je);!le.extend&&nt>Ht&&(_=Ht,Ht=nt,nt=_);var J=rp(A,nt),V=rp(A,Ht);if(J&&V&&(le.rangeCount!==1||le.anchorNode!==J.node||le.anchorOffset!==J.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var ne=Se.createRange();ne.setStart(J.node,J.offset),le.removeAllRanges(),nt>Ht?(le.addRange(ne),le.extend(V.node,V.offset)):(ne.setEnd(V.node,V.offset),le.addRange(ne))}}}}for(Se=[],le=A;le=le.parentNode;)le.nodeType===1&&Se.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Se.length;A++){var ye=Se[A];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}Ql=!!Nf,Of=Nf=null}finally{Ut=c,q.p=s,O.T=a}}e.current=n,dn=2}}function Mg(){if(dn===2){dn=0;var e=Ea,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=q.p;q.p=2;var c=Ut;Ut|=4;try{Km(e,n.alternate,n)}finally{Ut=c,q.p=s,O.T=a}}dn=3}}function bg(){if(dn===4||dn===3){dn=0,N();var e=Ea,n=$r,a=Ki,s=cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,$r=Ea=null,Eg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ba=null),Rr(a),n=n.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Re,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=q.p,q.p=2,O.T=null;try{for(var f=e.onRecoverableError,_=0;_<s.length;_++){var A=s[_];f(A.value,{componentStack:A.stack})}}finally{O.T=n,q.p=c}}(Ki&3)!==0&&Il(),Ai(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===yf?mo++:(mo=0,yf=e):mo=0,go(0)}}function Eg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zs(n)))}function Il(){return Sg(),Mg(),bg(),Tg()}function Tg(){if(dn!==5)return!1;var e=Ea,n=_f;_f=0;var a=Rr(Ki),s=O.T,c=q.p;try{q.p=32>a?32:a,O.T=null,a=xf,xf=null;var f=Ea,_=Ki;if(dn=0,$r=Ea=null,Ki=0,(Ut&6)!==0)throw Error(r(331));var A=Ut;if(Ut|=4,sg(f.current),ig(f,f.current,_,a),Ut=A,go(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Re,f)}catch{}return!0}finally{q.p=c,O.T=s,Eg(e,n)}}function Ag(e,n,a){n=ni(a,n),n=Qu(e.stateNode,n,2),e=va(e,n,2),e!==null&&(Cn(e,2),Ai(e))}function Bt(e,n,a){if(e.tag===3)Ag(e,e,a);else for(;n!==null;){if(n.tag===3){Ag(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){e=ni(a,e),a=Rm(2),s=va(n,a,2),s!==null&&(wm(a,s,n,e),Cn(s,2),Ai(s));break}}n=n.return}}function bf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Rx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(mf=!0,c.add(a),e=Lx.bind(null,e,n,a),n.then(e,e))}function Lx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(yt&a)===a&&(en===4||en===3&&(yt&62914560)===yt&&300>E()-Nl?(Ut&2)===0&&es(e,0):gf|=a,Jr===yt&&(Jr=0)),Ai(e)}function Rg(e,n){n===0&&(n=Pt()),e=Ja(e,n),e!==null&&(Cn(e,n),Ai(e))}function Nx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Rg(e,a)}function Ox(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Rg(e,a)}function Px(e,n){return at(e,n)}var Hl=null,ns=null,Ef=!1,kl=!1,Tf=!1,Aa=0;function Ai(e){e!==ns&&e.next===null&&(ns===null?Hl=ns=e:ns=ns.next=e),kl=!0,Ef||(Ef=!0,Bx())}function go(e,n){if(!Tf&&kl){Tf=!0;do for(var a=!1,s=Hl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-ke(42|e)+1)-1,f&=c&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ug(s,f))}else f=yt,f=Me(s,s===Wt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ve(s,f)||(a=!0,Ug(s,f));s=s.next}while(a);Tf=!1}}function zx(){wg()}function wg(){kl=Ef=!1;var e=0;Aa!==0&&qx()&&(e=Aa);for(var n=E(),a=null,s=Hl;s!==null;){var c=s.next,f=Cg(s,n);f===0?(s.next=null,a===null?Hl=c:a.next=c,c===null&&(ns=a)):(a=s,(e!==0||(f&3)!==0)&&(kl=!0)),s=c}dn!==0&&dn!==5||go(e),Aa!==0&&(Aa=0)}function Cg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-ke(f),A=1<<_,z=c[_];z===-1?((A&a)===0||(A&s)!==0)&&(c[_]=rt(A,n)):z<=n&&(e.expiredLanes|=A),f&=~A}if(n=Wt,a=yt,a=Me(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Vt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ve(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Vt(s),Rr(a)){case 2:case 8:a=Ee;break;case 32:a=fe;break;case 268435456:a=Ce;break;default:a=fe}return s=Dg.bind(null,e),a=at(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Vt(s),e.callbackPriority=2,e.callbackNode=null,2}function Dg(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Il()&&e.callbackNode!==a)return null;var s=yt;return s=Me(e,e===Wt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(fg(e,s,n),Cg(e,E()),e.callbackNode!=null&&e.callbackNode===a?Dg.bind(null,e):null)}function Ug(e,n){if(Il())return null;fg(e,n,!0)}function Bx(){Zx(function(){(Ut&6)!==0?at(ve,zx):wg()})}function Af(){if(Aa===0){var e=kr;e===0&&(e=we,we<<=1,(we&261888)===0&&(we=256)),Aa=e}return Aa}function Lg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zo(""+e)}function Ng(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Fx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Lg((c[xn]||null).action),_=s.submitter;_&&(n=(n=_[xn]||null)?Lg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new $o("action","action",null,s,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Aa!==0){var z=_?Ng(c,_):new FormData(c);Xu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=_?Ng(c,_):new FormData(c),Xu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var Rf=0;Rf<lu.length;Rf++){var wf=lu[Rf],Ix=wf.toLowerCase(),Hx=wf[0].toUpperCase()+wf.slice(1);fi(Ix,"on"+Hx)}fi(up,"onAnimationEnd"),fi(fp,"onAnimationIteration"),fi(dp,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(nx,"onTransitionRun"),fi(ix,"onTransitionStart"),fi(ax,"onTransitionCancel"),fi(hp,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),Ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Og(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var A=s[_],z=A.instance,ie=A.currentTarget;if(A=A.listener,z!==f&&c.isPropagationStopped())break e;f=A,c.currentTarget=ie;try{f(c)}catch(he){nl(he)}c.currentTarget=null,f=z}else for(_=0;_<s.length;_++){if(A=s[_],z=A.instance,ie=A.currentTarget,A=A.listener,z!==f&&c.isPropagationStopped())break e;f=A,c.currentTarget=ie;try{f(c)}catch(he){nl(he)}c.currentTarget=null,f=z}}}}function _t(e,n){var a=n[Bs];a===void 0&&(a=n[Bs]=new Set);var s=e+"__bubble";a.has(s)||(Pg(n,e,2,!1),a.add(s))}function Cf(e,n,a){var s=0;n&&(s|=4),Pg(a,e,s,n)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[Gl]){e[Gl]=!0,ze.forEach(function(a){a!=="selectionchange"&&(kx.has(a)||Cf(a,!1,e),Cf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gl]||(n[Gl]=!0,Cf("selectionchange",!1,n))}}function Pg(e,n,a,s){switch(uv(n)){case 2:var c=my;break;case 8:c=gy;break;default:c=Xf}a=c.bind(null,n,a,e),c=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Uf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var A=s.stateNode.containerInfo;if(A===c)break;if(_===4)for(_=s.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;A!==null;){if(_=Y(A),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){s=f=_;continue e}A=A.parentNode}}s=s.return}Hh(function(){var ie=f,he=qc(a),Se=[];e:{var ae=pp.get(e);if(ae!==void 0){var le=$o,je=e;switch(e){case"keypress":if(Qo(a)===0)break e;case"keydown":case"keyup":le=O0;break;case"focusin":je="focus",le=$c;break;case"focusout":je="blur",le=$c;break;case"beforeblur":case"afterblur":le=$c;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=B0;break;case up:case fp:case dp:le=T0;break;case hp:le=I0;break;case"scroll":case"scrollend":le=y0;break;case"wheel":le=k0;break;case"copy":case"cut":case"paste":le=R0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Xh;break;case"toggle":case"beforetoggle":le=V0}var nt=(n&4)!==0,Ht=!nt&&(e==="scroll"||e==="scrollend"),J=nt?ae!==null?ae+"Capture":null:ae;nt=[];for(var V=ie,ne;V!==null;){var ye=V;if(ne=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||ne===null||J===null||(ye=Fs(V,J),ye!=null&&nt.push(_o(V,ye,ne))),Ht)break;V=V.return}0<nt.length&&(ae=new le(ae,je,null,a,he),Se.push({event:ae,listeners:nt}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ae&&a!==Wc&&(je=a.relatedTarget||a.fromElement)&&(Y(je)||je[ca]))break e;if((le||ae)&&(ae=he.window===he?he:(ae=he.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(je=a.relatedTarget||a.toElement,le=ie,je=je?Y(je):null,je!==null&&(Ht=u(je),nt=je.tag,je!==Ht||nt!==5&&nt!==27&&nt!==6)&&(je=null)):(le=null,je=ie),le!==je)){if(nt=Vh,ye="onMouseLeave",J="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(nt=Xh,ye="onPointerLeave",J="onPointerEnter",V="pointer"),Ht=le==null?ae:se(le),ne=je==null?ae:se(je),ae=new nt(ye,V+"leave",le,a,he),ae.target=Ht,ae.relatedTarget=ne,ye=null,Y(he)===ie&&(nt=new nt(J,V+"enter",je,a,he),nt.target=ne,nt.relatedTarget=Ht,ye=nt),Ht=ye,le&&je)t:{for(nt=Gx,J=le,V=je,ne=0,ye=J;ye;ye=nt(ye))ne++;ye=0;for(var tt=V;tt;tt=nt(tt))ye++;for(;0<ne-ye;)J=nt(J),ne--;for(;0<ye-ne;)V=nt(V),ye--;for(;ne--;){if(J===V||V!==null&&J===V.alternate){nt=J;break t}J=nt(J),V=nt(V)}nt=null}else nt=null;le!==null&&zg(Se,ae,le,nt,!1),je!==null&&Ht!==null&&zg(Se,Ht,je,nt,!0)}}e:{if(ae=ie?se(ie):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var Rt=$h;else if(Qh(ae))if(ep)Rt=$0;else{Rt=Q0;var qe=K0}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ie&&Xc(ie.elementType)&&(Rt=$h):Rt=J0;if(Rt&&(Rt=Rt(e,ie))){Jh(Se,Rt,a,he);break e}qe&&qe(e,ae,ie),e==="focusout"&&ie&&ae.type==="number"&&ie.memoizedProps.value!=null&&fn(ae,"number",ae.value)}switch(qe=ie?se(ie):window,e){case"focusin":(Qh(qe)||qe.contentEditable==="true")&&(Nr=qe,ru=ie,Ws=null);break;case"focusout":Ws=ru=Nr=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,lp(Se,a,he);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":lp(Se,a,he)}var ft;if(tu)e:{switch(e){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Lr?Zh(e,a)&&(St="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Wh&&a.locale!=="ko"&&(Lr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Lr&&(ft=kh()):(ua=he,Kc="value"in ua?ua.value:ua.textContent,Lr=!0)),qe=Vl(ie,St),0<qe.length&&(St=new jh(St,e,null,a,he),Se.push({event:St,listeners:qe}),ft?St.data=ft:(ft=Kh(a),ft!==null&&(St.data=ft)))),(ft=X0?W0(e,a):q0(e,a))&&(St=Vl(ie,"onBeforeInput"),0<St.length&&(qe=new jh("onBeforeInput","beforeinput",null,a,he),Se.push({event:qe,listeners:St}),qe.data=ft)),Fx(Se,e,ie,a,he)}Og(Se,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Vl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Fs(e,a),c!=null&&s.unshift(_o(e,c,f)),c=Fs(e,n),c!=null&&s.push(_o(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Gx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zg(e,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var A=a,z=A.alternate,ie=A.stateNode;if(A=A.tag,z!==null&&z===s)break;A!==5&&A!==26&&A!==27||ie===null||(z=ie,c?(ie=Fs(a,f),ie!=null&&_.unshift(_o(a,ie,z))):c||(ie=Fs(a,f),ie!=null&&_.push(_o(a,ie,z)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var Vx=/\r\n?/g,jx=/\u0000|\uFFFD/g;function Bg(e){return(typeof e=="string"?e:""+e).replace(Vx,`
`).replace(jx,"")}function Fg(e,n){return n=Bg(n),Bg(e)===n}function It(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Cr(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Cr(e,""+s);break;case"className":Ot(e,"class",s);break;case"tabIndex":Ot(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ot(e,a,s);break;case"style":Fh(e,s,f);break;case"data":if(n!=="object"){Ot(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Zo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(e,n,"name",c.name,c,null),It(e,n,"formEncType",c.formEncType,c,null),It(e,n,"formMethod",c.formMethod,c,null),It(e,n,"formTarget",c.formTarget,c,null)):(It(e,n,"encType",c.encType,c,null),It(e,n,"method",c.method,c,null),It(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Zo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Zo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":_t("beforetoggle",e),_t("toggle",e),Xt(e,"popover",s);break;case"xlinkActuate":gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":gt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":gt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":gt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":gt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Xt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_0.get(a)||a,Xt(e,a,s))}}function Lf(e,n,a,s,c,f){switch(a){case"style":Fh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Cr(e,s):(typeof s=="number"||typeof s=="bigint")&&Cr(e,""+s);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Xt(e,a,s)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,f,_,a,null)}}c&&It(e,n,"srcSet",a.srcSet,a,null),s&&It(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var A=f=_=c=null,z=null,ie=null;for(s in a)if(a.hasOwnProperty(s)){var he=a[s];if(he!=null)switch(s){case"name":c=he;break;case"type":_=he;break;case"checked":z=he;break;case"defaultChecked":ie=he;break;case"value":f=he;break;case"defaultValue":A=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:It(e,n,s,he,a,null)}}Dn(e,f,A,z,ie,_,c,!1);return;case"select":_t("invalid",e),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":s=A;default:It(e,n,c,A,a,null)}n=f,a=_,e.multiple=!!s,n!=null?tn(e,!!s,n,!1):a!=null&&tn(e,!!s,a,!0);return;case"textarea":_t("invalid",e),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":s=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:It(e,n,_,A,a,null)}Mi(e,s,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:It(e,n,z,s,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(s=0;s<vo.length;s++)_t(vo[s],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(s=a[ie],s!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,ie,s,a,null)}return;default:if(Xc(n)){for(he in a)a.hasOwnProperty(he)&&(s=a[he],s!==void 0&&Lf(e,n,he,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&It(e,n,A,s,a,null))}function Xx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,A=null,z=null,ie=null,he=null;for(le in a){var Se=a[le];if(a.hasOwnProperty(le)&&Se!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":z=Se;default:s.hasOwnProperty(le)||It(e,n,le,null,s,Se)}}for(var ae in s){var le=s[ae];if(Se=a[ae],s.hasOwnProperty(ae)&&(le!=null||Se!=null))switch(ae){case"type":f=le;break;case"name":c=le;break;case"checked":ie=le;break;case"defaultChecked":he=le;break;case"value":_=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==Se&&It(e,n,ae,le,s,Se)}}Tn(e,_,A,z,ie,he,f,c);return;case"select":le=_=A=ae=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":le=z;default:s.hasOwnProperty(f)||It(e,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":ae=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==z&&It(e,n,c,f,s,z)}n=A,a=_,s=le,ae!=null?tn(e,!!a,ae,!1):!!s!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":le=ae=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:It(e,n,A,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":ae=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&It(e,n,_,c,s,f)}wr(e,ae,le);return;case"option":for(var je in a)if(ae=a[je],a.hasOwnProperty(je)&&ae!=null&&!s.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:It(e,n,je,null,s,ae)}for(z in s)if(ae=s[z],le=a[z],s.hasOwnProperty(z)&&ae!==le&&(ae!=null||le!=null))switch(z){case"selected":e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:It(e,n,z,ae,s,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ae=a[nt],a.hasOwnProperty(nt)&&ae!=null&&!s.hasOwnProperty(nt)&&It(e,n,nt,null,s,ae);for(ie in s)if(ae=s[ie],le=a[ie],s.hasOwnProperty(ie)&&ae!==le&&(ae!=null||le!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:It(e,n,ie,ae,s,le)}return;default:if(Xc(n)){for(var Ht in a)ae=a[Ht],a.hasOwnProperty(Ht)&&ae!==void 0&&!s.hasOwnProperty(Ht)&&Lf(e,n,Ht,void 0,s,ae);for(he in s)ae=s[he],le=a[he],!s.hasOwnProperty(he)||ae===le||ae===void 0&&le===void 0||Lf(e,n,he,ae,s,le);return}}for(var J in a)ae=a[J],a.hasOwnProperty(J)&&ae!=null&&!s.hasOwnProperty(J)&&It(e,n,J,null,s,ae);for(Se in s)ae=s[Se],le=a[Se],!s.hasOwnProperty(Se)||ae===le||ae==null&&le==null||It(e,n,Se,ae,s,le)}function Ig(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,A=c.duration;if(f&&A&&Ig(_)){for(_=0,A=c.responseEnd,s+=1;s<a.length;s++){var z=a[s],ie=z.startTime;if(ie>A)break;var he=z.transferSize,Se=z.initiatorType;he&&Ig(Se)&&(z=z.responseEnd,_+=he*(z<A?1:(A-ie)/(z-ie)))}if(--s,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nf=null,Of=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function Hg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function qx(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var Gg=typeof setTimeout=="function"?setTimeout:void 0,Yx=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(e){return Vg.resolve(null).then(e).catch(Kx)}:Gg;function Kx(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function jg(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),ss(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")xo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,xo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[qa]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&xo(e.ownerDocument.body);a=c}while(a);ss(n)}function Xg(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Bf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),C(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Qx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[qa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=oi(e.nextSibling),e===null)break}return null}function Jx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=oi(e.nextSibling),e===null))return null;return e}function Wg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=oi(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function If(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $x(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function oi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Hf=null;function qg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return oi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Yg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Zg(e,n,a){switch(n=jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);C(e)}var li=new Map,Kg=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=q.d;q.d={f:ey,r:ty,D:ny,C:iy,L:ay,m:ry,X:oy,S:sy,M:ly};function ey(){var e=Qi.f(),n=zl();return e||n}function ty(e){var n=re(e);n!==null&&n.tag===5&&n.type==="form"?hm(n):Qi.r(e)}var is=typeof document>"u"?null:document;function Qg(e,n,a){var s=is;if(s&&typeof n=="string"&&n){var c=xt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Kg.has(c)||(Kg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),En(n,"link",e),be(n),s.head.appendChild(n)))}}function ny(e){Qi.D(e),Qg("dns-prefetch",e,null)}function iy(e,n){Qi.C(e,n),Qg("preconnect",e,n)}function ay(e,n,a){Qi.L(e,n,a);var s=is;if(s&&e&&n){var c='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+xt(a.imageSizes)+'"]')):c+='[href="'+xt(e)+'"]';var f=c;switch(n){case"style":f=as(e);break;case"script":f=rs(e)}li.has(f)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(So(f))||(n=s.createElement("link"),En(n,"link",e),be(n),s.head.appendChild(n)))}}function ry(e,n){Qi.m(e,n);var a=is;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xt(s)+'"][href="'+xt(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rs(e)}if(!li.has(f)&&(e=y({rel:"modulepreload",href:e},n),li.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}s=a.createElement("link"),En(s,"link",e),be(s),a.head.appendChild(s)}}}function sy(e,n,a){Qi.S(e,n,a);var s=is;if(s&&e){var c=Q(s).hoistableStyles,f=as(e);n=n||"default";var _=c.get(f);if(!_){var A={loading:0,preload:null};if(_=s.querySelector(yo(f)))A.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(f))&&kf(e,a);var z=_=s.createElement("link");be(z),En(z,"link",e),z._p=new Promise(function(ie,he){z.onload=ie,z.onerror=he}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Wl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:A},c.set(f,_)}}}function oy(e,n){Qi.X(e,n);var a=is;if(a&&e){var s=Q(a).hoistableScripts,c=rs(e),f=s.get(c);f||(f=a.querySelector(So(c)),f||(e=y({src:e,async:!0},n),(n=li.get(c))&&Gf(e,n),f=a.createElement("script"),be(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function ly(e,n){Qi.M(e,n);var a=is;if(a&&e){var s=Q(a).hoistableScripts,c=rs(e),f=s.get(c);f||(f=a.querySelector(So(c)),f||(e=y({src:e,async:!0,type:"module"},n),(n=li.get(c))&&Gf(e,n),f=a.createElement("script"),be(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Jg(e,n,a,s){var c=(c=xe.current)?Xl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=Q(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=as(a.href);var f=Q(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(yo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),f||cy(c,e,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=Q(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function as(e){return'href="'+xt(e)+'"'}function yo(e){return'link[rel="stylesheet"]['+e+"]"}function $g(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function cy(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),be(n),e.head.appendChild(n))}function rs(e){return'[src="'+xt(e)+'"]'}function So(e){return"script[async]"+e}function ev(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(s)return n.instance=s,be(s),s;var c=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),be(s),En(s,"style",c),Wl(s,a.precedence,e),n.instance=s;case"stylesheet":c=as(a.href);var f=e.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,be(f),f;s=$g(a),(c=li.get(c))&&kf(s,c),f=(e.ownerDocument||e).createElement("link"),be(f);var _=f;return _._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),En(f,"link",s),n.state.loading|=4,Wl(f,a.precedence,e),n.instance=f;case"script":return f=rs(a.src),(c=e.querySelector(So(f)))?(n.instance=c,be(c),c):(s=a,(c=li.get(f))&&(s=y({},a),Gf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),be(c),En(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Wl(s,a.precedence,e));return n.instance}function Wl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var A=s[_];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ql=null;function tv(e,n,a){if(ql===null){var s=new Map,c=ql=new Map;c.set(a,s)}else c=ql,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[qa]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var A=s.get(_);A?A.push(f):s.set(_,[f])}}return s}function nv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function uy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function iv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fy(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=as(s.href),f=n.querySelector(yo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Yl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,be(f);return}f=n.ownerDocument||n,s=$g(s),(c=li.get(c))&&kf(s,c),f=f.createElement("link"),be(f);var _=f;_._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),En(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vf=0;function dy(e,n){return e.stylesheets&&e.count===0&&Kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Vf===0&&(Vf=62500*Wx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Vf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Yl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(hy,e),Zl=null,Yl.call(e))}function hy(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var s=a.get(null);else{a=new Map,Zl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=Yl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:P,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function py(e,n,a,s,c,f,_,A,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function av(e,n,a,s,c,f,_,A,z,ie,he,Se){return e=new py(e,n,a,_,z,ie,he,Se,A),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),e.current=f,f.stateNode=e,n=Su(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Tu(f),e}function rv(e){return e?(e=zr,e):zr}function sv(e,n,a,s,c,f){c=rv(c),s.context===null?s.context=c:s.pendingContext=c,s=ga(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=va(e,s,n),a!==null&&(In(a,e,n),$s(a,e,n))}function ov(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jf(e,n){ov(e,n),(e=e.alternate)&&ov(e,n)}function lv(e){if(e.tag===13||e.tag===31){var n=Ja(e,67108864);n!==null&&In(n,e,67108864),jf(e,67108864)}}function cv(e){if(e.tag===13||e.tag===31){var n=Kn();n=Ar(n);var a=Ja(e,n);a!==null&&In(a,e,n),jf(e,n)}}var Ql=!0;function my(e,n,a,s){var c=O.T;O.T=null;var f=q.p;try{q.p=2,Xf(e,n,a,s)}finally{q.p=f,O.T=c}}function gy(e,n,a,s){var c=O.T;O.T=null;var f=q.p;try{q.p=8,Xf(e,n,a,s)}finally{q.p=f,O.T=c}}function Xf(e,n,a,s){if(Ql){var c=Wf(s);if(c===null)Uf(e,n,s,Jl,a),fv(e,s);else if(_y(c,e,n,a,s))s.stopPropagation();else if(fv(e,s),n&4&&-1<vy.indexOf(e)){for(;c!==null;){var f=re(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ae(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var z=1<<31-ke(_);A.entanglements[1]|=z,_&=~z}Ai(f),(Ut&6)===0&&(Ol=E()+500,go(0))}}break;case 31:case 13:A=Ja(f,2),A!==null&&In(A,f,2),zl(),jf(f,2)}if(f=Wf(s),f===null&&Uf(e,n,s,Jl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Uf(e,n,s,null,a)}}function Wf(e){return e=qc(e),qf(e)}var Jl=null;function qf(e){if(Jl=null,e=Y(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function uv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(te()){case ve:return 2;case Ee:return 8;case fe:case Ke:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Yf=!1,wa=null,Ca=null,Da=null,bo=new Map,Eo=new Map,Ua=[],vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fv(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function To(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=re(n),n!==null&&lv(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function _y(e,n,a,s,c){switch(n){case"focusin":return wa=To(wa,e,n,a,s,c),!0;case"dragenter":return Ca=To(Ca,e,n,a,s,c),!0;case"mouseover":return Da=To(Da,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,To(bo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Eo.set(f,To(Eo.get(f)||null,e,n,a,s,c)),!0}return!1}function dv(e){var n=Y(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,zs(e.priority,function(){cv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,zs(e.priority,function(){cv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Wc=s,a.target.dispatchEvent(s),Wc=null}else return n=re(a),n!==null&&lv(n),e.blockedOn=a,!1;n.shift()}return!0}function hv(e,n,a){$l(e)&&a.delete(n)}function xy(){Yf=!1,wa!==null&&$l(wa)&&(wa=null),Ca!==null&&$l(Ca)&&(Ca=null),Da!==null&&$l(Da)&&(Da=null),bo.forEach(hv),Eo.forEach(hv)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Yf||(Yf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,xy)))}var tc=null;function pv(e){tc!==e&&(tc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){tc===e&&(tc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(qf(s||a)===null)continue;break}var f=re(a);f!==null&&(e.splice(n,3),n-=3,Xu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ss(e){function n(z){return ec(z,e)}wa!==null&&ec(wa,e),Ca!==null&&ec(Ca,e),Da!==null&&ec(Da,e),bo.forEach(n),Eo.forEach(n);for(var a=0;a<Ua.length;a++){var s=Ua[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)dv(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[xn]||null;if(typeof f=="function")_||pv(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[xn]||null)A=_.formAction;else if(qf(c)!==null)continue}else A=_.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),pv(a)}}}function mv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Zf(e){this._internalRoot=e}nc.prototype.render=Zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();sv(a,s,e,n,null,null)},nc.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;sv(e.current,2,null,e,null,null),zl(),n[ca]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Wa();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&dv(e)}};var gv=t.version;if(gv!=="19.2.7")throw Error(r(527,gv,"19.2.7"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var yy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Re=ic.inject(yy),De=ic}catch{}}return Ro.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=bm,f=Em,_=Tm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=av(e,1,!1,null,null,a,s,null,c,f,_,mv),e[ca]=n.current,Df(e),new Zf(n)},Ro.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=bm,_=Em,A=Tm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=av(e,1,!0,n,a??null,s,c,z,f,_,A,mv),n.context=rv(null),a=n.current,s=Kn(),s=Ar(s),c=ga(s),c.callback=null,va(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Ai(n),e[ca]=n.current,Df(e),new nc(n)},Ro.version="19.2.7",Ro}var Av;function Uy(){if(Av)return Jf.exports;Av=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Jf.exports=Dy(),Jf.exports}var Ly=Uy();const Ny=z_(Ly);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="179",Oy=0,Rv=1,Py=2,B_=1,F_=2,aa=3,ja=0,Hn=1,ra=2,Ga=0,Es=1,wv=2,Cv=3,Dv=4,zy=5,xr=100,By=101,Fy=102,Iy=103,Hy=104,ky=200,Gy=201,Vy=202,jy=203,Od=204,Pd=205,Xy=206,Wy=207,qy=208,Yy=209,Zy=210,Ky=211,Qy=212,Jy=213,$y=214,zd=0,Bd=1,Fd=2,Rs=3,Id=4,Hd=5,kd=6,Gd=7,I_=0,eS=1,tS=2,Va=0,nS=1,iS=2,aS=3,rS=4,sS=5,oS=6,lS=7,H_=300,ws=301,Cs=302,Vd=303,jd=304,Ic=306,Xd=1e3,Sr=1001,Wd=1002,xi=1003,cS=1004,ac=1005,Ci=1006,nd=1007,Mr=1008,Ni=1009,k_=1010,G_=1011,Fo=1012,Mh=1013,br=1014,sa=1015,Vo=1016,bh=1017,Eh=1018,Io=1020,V_=35902,j_=1021,X_=1022,_i=1023,Ho=1026,ko=1027,W_=1028,Th=1029,q_=1030,Ah=1031,Rh=1033,wc=33776,Cc=33777,Dc=33778,Uc=33779,qd=35840,Yd=35841,Zd=35842,Kd=35843,Qd=36196,Jd=37492,$d=37496,eh=37808,th=37809,nh=37810,ih=37811,ah=37812,rh=37813,sh=37814,oh=37815,lh=37816,ch=37817,uh=37818,fh=37819,dh=37820,hh=37821,Lc=36492,ph=36494,mh=36495,Y_=36283,gh=36284,vh=36285,_h=36286,uS=3200,fS=3201,dS=0,hS=1,ka="",ui="srgb",Ds="srgb-linear",Oc="linear",kt="srgb",os=7680,Uv=519,pS=512,mS=513,gS=514,Z_=515,vS=516,_S=517,xS=518,yS=519,Lv=35044,Nv="300 es",Di=2e3,Pc=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ov=1234567;const zo=Math.PI/180,Go=180/Math.PI;function Ns(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Mt(o,t,i){return Math.max(t,Math.min(i,o))}function wh(o,t){return(o%t+t)%t}function SS(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function MS(o,t,i){return o!==t?(i-o)/(t-o):0}function Bo(o,t,i){return(1-i)*o+i*t}function bS(o,t,i,r){return Bo(o,t,1-Math.exp(-i*r))}function ES(o,t=1){return t-Math.abs(wh(o,t*2)-t)}function TS(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function AS(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function RS(o,t){return o+Math.floor(Math.random()*(t-o+1))}function wS(o,t){return o+Math.random()*(t-o)}function CS(o){return o*(.5-Math.random())}function DS(o){o!==void 0&&(Ov=o);let t=Ov+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function US(o){return o*zo}function LS(o){return o*Go}function NS(o){return(o&o-1)===0&&o!==0}function OS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function PS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function zS(o,t,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),m=d(i/2),p=u((t+r)/2),x=d((t+r)/2),y=u((t-r)/2),S=d((t-r)/2),M=u((r-t)/2),T=d((r-t)/2);switch(l){case"XYX":o.set(h*x,m*y,m*S,h*p);break;case"YZY":o.set(m*S,h*x,m*y,h*p);break;case"ZXZ":o.set(m*y,m*S,h*x,h*p);break;case"XZX":o.set(h*x,m*T,m*M,h*p);break;case"YXY":o.set(m*M,h*x,m*T,h*p);break;case"ZYZ":o.set(m*T,m*M,h*x,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ms(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ln(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ls={DEG2RAD:zo,RAD2DEG:Go,generateUUID:Ns,clamp:Mt,euclideanModulo:wh,mapLinear:SS,inverseLerp:MS,lerp:Bo,damp:bS,pingpong:ES,smoothstep:TS,smootherstep:AS,randInt:RS,randFloat:wS,randFloatSpread:CS,seededRandom:DS,degToRad:US,radToDeg:LS,isPowerOfTwo:NS,ceilPowerOfTwo:OS,floorPowerOfTwo:PS,setQuaternionFromProperEuler:zS,normalize:Ln,denormalize:Ms};class Dt{constructor(t=0,i=0){Dt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],y=r[l+3];const S=u[d+0],M=u[d+1],T=u[d+2],w=u[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=y;return}if(h===1){t[i+0]=S,t[i+1]=M,t[i+2]=T,t[i+3]=w;return}if(y!==w||m!==S||p!==M||x!==T){let b=1-h;const v=m*S+p*M+x*T+y*w,G=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const X=Math.sqrt(P),k=Math.atan2(X,v*G);b=Math.sin(b*k)/X,h=Math.sin(h*k)/X}const U=h*G;if(m=m*b+S*U,p=p*b+M*U,x=x*b+T*U,y=y*b+w*U,b===1-h){const X=1/Math.sqrt(m*m+p*p+x*x+y*y);m*=X,p*=X,x*=X,y*=X}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=y}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],y=u[d],S=u[d+1],M=u[d+2],T=u[d+3];return t[i]=h*T+x*y+m*M-p*S,t[i+1]=m*T+x*S+p*y-h*M,t[i+2]=p*T+x*M+h*S-m*y,t[i+3]=x*T-h*y-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),y=h(u/2),S=m(r/2),M=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=S*x*y+p*M*T,this._y=p*M*y-S*x*T,this._z=p*x*T+S*M*y,this._w=p*x*y-S*M*T;break;case"YXZ":this._x=S*x*y+p*M*T,this._y=p*M*y-S*x*T,this._z=p*x*T-S*M*y,this._w=p*x*y+S*M*T;break;case"ZXY":this._x=S*x*y-p*M*T,this._y=p*M*y+S*x*T,this._z=p*x*T+S*M*y,this._w=p*x*y-S*M*T;break;case"ZYX":this._x=S*x*y-p*M*T,this._y=p*M*y+S*x*T,this._z=p*x*T-S*M*y,this._w=p*x*y+S*M*T;break;case"YZX":this._x=S*x*y+p*M*T,this._y=p*M*y+S*x*T,this._z=p*x*T-S*M*y,this._w=p*x*y-S*M*T;break;case"XZY":this._x=S*x*y-p*M*T,this._y=p*M*y-S*x*T,this._z=p*x*T+S*M*y,this._w=p*x*y+S*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],y=i[10],S=r+h+y;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>y){const M=2*Math.sqrt(1+r-h-y);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>y){const M=2*Math.sqrt(1+h-r-y);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+y-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-r*p,this._z=u*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,h),y=Math.sin((1-i)*x)/p,S=Math.sin(i*x)/p;return this._w=d*y+this._w*S,this._x=r*y+this._x*S,this._y=l*y+this._y*S,this._z=u*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(t=0,i=0,r=0){ee.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Pv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Pv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),x=2*(h*i-u*l),y=2*(u*r-d*i);return this.x=i+m*p+d*y-h*x,this.y=r+m*x+h*p-u*y,this.z=l+m*y+u*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return id.copy(this).projectOnVector(t),this.sub(id)}reflect(t){return this.sub(id.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new ee,Pv=new jo;class dt{constructor(t,i,r,l,u,d,h,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],y=r[7],S=r[2],M=r[5],T=r[8],w=l[0],b=l[3],v=l[6],G=l[1],P=l[4],U=l[7],X=l[2],k=l[5],I=l[8];return u[0]=d*w+h*G+m*X,u[3]=d*b+h*P+m*k,u[6]=d*v+h*U+m*I,u[1]=p*w+x*G+y*X,u[4]=p*b+x*P+y*k,u[7]=p*v+x*U+y*I,u[2]=S*w+M*G+T*X,u[5]=S*b+M*P+T*k,u[8]=S*v+M*U+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-r*u*x+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],y=x*d-h*p,S=h*m-x*u,M=p*u-d*m,T=i*y+r*S+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=y*w,t[1]=(l*p-x*r)*w,t[2]=(h*r-l*d)*w,t[3]=S*w,t[4]=(x*i-l*m)*w,t[5]=(l*u-h*i)*w,t[6]=M*w,t[7]=(r*m-p*i)*w,t[8]=(d*i-r*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ad.makeScale(t,i)),this}rotate(t){return this.premultiply(ad.makeRotation(-t)),this}translate(t,i){return this.premultiply(ad.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new dt;function K_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function BS(){const o=zc("canvas");return o.style.display="block",o}const zv={};function Ts(o){o in zv||(zv[o]=!0,console.warn(o))}function FS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const Bv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fv=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IS(){const o={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===kt&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=As(l.r),l.g=As(l.g),l.b=As(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Oc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ds]:{primaries:t,whitePoint:r,transfer:Oc,toXYZ:Bv,fromXYZ:Fv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:r,transfer:kt,toXYZ:Bv,fromXYZ:Fv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),o}const Ct=IS();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function As(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let cs;class HS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{cs===void 0&&(cs=zc("canvas")),cs.width=t.width,cs.height=t.height;const l=cs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=cs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=zc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=oa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(oa(i[r]/255)*255):i[r]=oa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kS=0;class Ch{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(rd(l[d].image)):u.push(rd(l[d]))}else u=rd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?HS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GS=0;const sd=new ee;class kn extends Ls{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Sr,l=Sr,u=Ci,d=Mr,h=_i,m=Ni,p=kn.DEFAULT_ANISOTROPY,x=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Ns(),this.name="",this.source=new Ch(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==H_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xd:t.x=t.x-Math.floor(t.x);break;case Sr:t.x=t.x<0?0:1;break;case Wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xd:t.y=t.y-Math.floor(t.y);break;case Sr:t.y=t.y<0?0:1;break;case Wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=H_;kn.DEFAULT_ANISOTROPY=1;class Gt{constructor(t=0,i=0,r=0,l=1){Gt.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],x=m[4],y=m[8],S=m[1],M=m[5],T=m[9],w=m[2],b=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(y-w)<.01&&Math.abs(T-b)<.01){if(Math.abs(x+S)<.1&&Math.abs(y+w)<.1&&Math.abs(T+b)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,U=(M+1)/2,X=(v+1)/2,k=(x+S)/4,I=(y+w)/4,$=(T+b)/4;return P>U&&P>X?P<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(P),l=k/r,u=I/r):U>X?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=k/l,u=$/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=I/u,l=$/u),this.set(r,l,u,i),this}let G=Math.sqrt((b-T)*(b-T)+(y-w)*(y-w)+(S-x)*(S-x));return Math.abs(G)<.001&&(G=1),this.x=(b-T)/G,this.y=(y-w)/G,this.z=(S-x)/G,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this.w=Mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this.w=Mt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VS extends Ls{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Gt(0,0,t,i),this.scissorTest=!1,this.viewport=new Gt(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new kn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ch(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends VS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Q_ extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jS extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(t=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,pi):pi.fromBufferAttribute(u,d),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),sc.subVectors(this.max,wo),us.subVectors(t.a,wo),fs.subVectors(t.b,wo),ds.subVectors(t.c,wo),Na.subVectors(fs,us),Oa.subVectors(ds,fs),fr.subVectors(us,ds);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-fr.z,fr.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,fr.z,0,-fr.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-fr.y,fr.x,0];return!od(i,us,fs,ds,sc)||(i=[1,0,0,0,1,0,0,0,1],!od(i,us,fs,ds,sc))?!1:(oc.crossVectors(Na,Oa),i=[oc.x,oc.y,oc.z],od(i,us,fs,ds,sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],pi=new ee,rc=new Xo,us=new ee,fs=new ee,ds=new ee,Na=new ee,Oa=new ee,fr=new ee,wo=new ee,sc=new ee,oc=new ee,dr=new ee;function od(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){dr.fromArray(o,u);const h=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),m=t.dot(dr),p=i.dot(dr),x=r.dot(dr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const XS=new Xo,Co=new ee,ld=new ee;class Hc{constructor(t=new ee,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):XS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Co,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(ld)),this.expandByPoint(Co.copy(t.center).sub(ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const $i=new ee,cd=new ee,lc=new ee,Pa=new ee,ud=new ee,cc=new ee,fd=new ee;class J_{constructor(t=new ee,i=new ee(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){cd.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(cd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(lc),h=Pa.dot(this.direction),m=-Pa.dot(lc),p=Pa.lengthSq(),x=Math.abs(1-d*d);let y,S,M,T;if(x>0)if(y=d*m-h,S=d*h-m,T=u*x,y>=0)if(S>=-T)if(S<=T){const w=1/x;y*=w,S*=w,M=y*(y+d*S+2*h)+S*(d*y+S+2*m)+p}else S=u,y=Math.max(0,-(d*S+h)),M=-y*y+S*(S+2*m)+p;else S=-u,y=Math.max(0,-(d*S+h)),M=-y*y+S*(S+2*m)+p;else S<=-T?(y=Math.max(0,-(-d*u+h)),S=y>0?-u:Math.min(Math.max(-u,-m),u),M=-y*y+S*(S+2*m)+p):S<=T?(y=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(y=Math.max(0,-(d*u+h)),S=y>0?u:Math.min(Math.max(-u,-m),u),M=-y*y+S*(S+2*m)+p);else S=d>0?-u:u,y=Math.max(0,-(d*S+h)),M=-y*y+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(cd).addScaledVector(lc,S),M}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),x>=0?(u=(t.min.y-S.y)*x,d=(t.max.y-S.y)*x):(u=(t.max.y-S.y)*x,d=(t.min.y-S.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),y>=0?(h=(t.min.z-S.z)*y,m=(t.max.z-S.z)*y):(h=(t.max.z-S.z)*y,m=(t.min.z-S.z)*y),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,r,l,u){ud.subVectors(i,t),cc.subVectors(r,t),fd.crossVectors(ud,cc);let d=this.direction.dot(fd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Pa.subVectors(this.origin,t);const m=h*this.direction.dot(cc.crossVectors(Pa,cc));if(m<0)return null;const p=h*this.direction.dot(ud.cross(Pa));if(p<0||m+p>d)return null;const x=-h*Pa.dot(fd);return x<0?null:this.at(x/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,i,r,l,u,d,h,m,p,x,y,S,M,T,w,b){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,x,y,S,M,T,w,b)}set(t,i,r,l,u,d,h,m,p,x,y,S,M,T,w,b){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=y,v[14]=S,v[3]=M,v[7]=T,v[11]=w,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/hs.setFromMatrixColumn(t,0).length(),u=1/hs.setFromMatrixColumn(t,1).length(),d=1/hs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),y=Math.sin(u);if(t.order==="XYZ"){const S=d*x,M=d*y,T=h*x,w=h*y;i[0]=m*x,i[4]=-m*y,i[8]=p,i[1]=M+T*p,i[5]=S-w*p,i[9]=-h*m,i[2]=w-S*p,i[6]=T+M*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*x,M=m*y,T=p*x,w=p*y;i[0]=S+w*h,i[4]=T*h-M,i[8]=d*p,i[1]=d*y,i[5]=d*x,i[9]=-h,i[2]=M*h-T,i[6]=w+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*x,M=m*y,T=p*x,w=p*y;i[0]=S-w*h,i[4]=-d*y,i[8]=T+M*h,i[1]=M+T*h,i[5]=d*x,i[9]=w-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*x,M=d*y,T=h*x,w=h*y;i[0]=m*x,i[4]=T*p-M,i[8]=S*p+w,i[1]=m*y,i[5]=w*p+S,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,M=d*p,T=h*m,w=h*p;i[0]=m*x,i[4]=w-S*y,i[8]=T*y+M,i[1]=y,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=M*y+T,i[10]=S-w*y}else if(t.order==="XZY"){const S=d*m,M=d*p,T=h*m,w=h*p;i[0]=m*x,i[4]=-y,i[8]=p*x,i[1]=S*y+w,i[5]=d*x,i[9]=M*y-T,i[2]=T*y-M,i[6]=h*x,i[10]=w*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(WS,t,qS)}lookAt(t,i,r){const l=this.elements;return Qn.subVectors(t,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),za.crossVectors(r,Qn),za.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),za.crossVectors(r,Qn)),za.normalize(),uc.crossVectors(Qn,za),l[0]=za.x,l[4]=uc.x,l[8]=Qn.x,l[1]=za.y,l[5]=uc.y,l[9]=Qn.y,l[2]=za.z,l[6]=uc.z,l[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],y=r[5],S=r[9],M=r[13],T=r[2],w=r[6],b=r[10],v=r[14],G=r[3],P=r[7],U=r[11],X=r[15],k=l[0],I=l[4],$=l[8],R=l[12],D=l[1],F=l[5],de=l[9],ce=l[13],ue=l[2],pe=l[6],O=l[10],q=l[14],Z=l[3],oe=l[7],me=l[11],L=l[15];return u[0]=d*k+h*D+m*ue+p*Z,u[4]=d*I+h*F+m*pe+p*oe,u[8]=d*$+h*de+m*O+p*me,u[12]=d*R+h*ce+m*q+p*L,u[1]=x*k+y*D+S*ue+M*Z,u[5]=x*I+y*F+S*pe+M*oe,u[9]=x*$+y*de+S*O+M*me,u[13]=x*R+y*ce+S*q+M*L,u[2]=T*k+w*D+b*ue+v*Z,u[6]=T*I+w*F+b*pe+v*oe,u[10]=T*$+w*de+b*O+v*me,u[14]=T*R+w*ce+b*q+v*L,u[3]=G*k+P*D+U*ue+X*Z,u[7]=G*I+P*F+U*pe+X*oe,u[11]=G*$+P*de+U*O+X*me,u[15]=G*R+P*ce+U*q+X*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],y=t[6],S=t[10],M=t[14],T=t[3],w=t[7],b=t[11],v=t[15];return T*(+u*m*y-l*p*y-u*h*S+r*p*S+l*h*M-r*m*M)+w*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*x-u*m*x)+b*(+i*p*y-i*h*M-u*d*y+r*d*M+u*h*x-r*p*x)+v*(-l*h*x-i*m*y+i*h*S+l*d*y-r*d*S+r*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],y=t[9],S=t[10],M=t[11],T=t[12],w=t[13],b=t[14],v=t[15],G=y*b*p-w*S*p+w*m*M-h*b*M-y*m*v+h*S*v,P=T*S*p-x*b*p-T*m*M+d*b*M+x*m*v-d*S*v,U=x*w*p-T*y*p+T*h*M-d*w*M-x*h*v+d*y*v,X=T*y*m-x*w*m-T*h*S+d*w*S+x*h*b-d*y*b,k=i*G+r*P+l*U+u*X;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return t[0]=G*I,t[1]=(w*S*u-y*b*u-w*l*M+r*b*M+y*l*v-r*S*v)*I,t[2]=(h*b*u-w*m*u+w*l*p-r*b*p-h*l*v+r*m*v)*I,t[3]=(y*m*u-h*S*u-y*l*p+r*S*p+h*l*M-r*m*M)*I,t[4]=P*I,t[5]=(x*b*u-T*S*u+T*l*M-i*b*M-x*l*v+i*S*v)*I,t[6]=(T*m*u-d*b*u-T*l*p+i*b*p+d*l*v-i*m*v)*I,t[7]=(d*S*u-x*m*u+x*l*p-i*S*p-d*l*M+i*m*M)*I,t[8]=U*I,t[9]=(T*y*u-x*w*u-T*r*M+i*w*M+x*r*v-i*y*v)*I,t[10]=(d*w*u-T*h*u+T*r*p-i*w*p-d*r*v+i*h*v)*I,t[11]=(x*h*u-d*y*u-x*r*p+i*y*p+d*r*M-i*h*M)*I,t[12]=X*I,t[13]=(x*w*l-T*y*l+T*r*S-i*w*S-x*r*b+i*y*b)*I,t[14]=(T*h*l-d*w*l-T*r*m+i*w*m+d*r*b-i*h*b)*I,t[15]=(d*y*l-x*h*l+x*r*m-i*y*m-d*r*S+i*h*S)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,x=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,y=h+h,S=u*p,M=u*x,T=u*y,w=d*x,b=d*y,v=h*y,G=m*p,P=m*x,U=m*y,X=r.x,k=r.y,I=r.z;return l[0]=(1-(w+v))*X,l[1]=(M+U)*X,l[2]=(T-P)*X,l[3]=0,l[4]=(M-U)*k,l[5]=(1-(S+v))*k,l[6]=(b+G)*k,l[7]=0,l[8]=(T+P)*I,l[9]=(b-G)*I,l[10]=(1-(S+w))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=hs.set(l[0],l[1],l[2]).length();const d=hs.set(l[4],l[5],l[6]).length(),h=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],mi.copy(this);const p=1/u,x=1/d,y=1/h;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=x,mi.elements[5]*=x,mi.elements[6]*=x,mi.elements[8]*=y,mi.elements[9]*=y,mi.elements[10]*=y,i.setFromRotationMatrix(mi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Di,m=!1){const p=this.elements,x=2*u/(i-t),y=2*u/(r-l),S=(i+t)/(i-t),M=(r+l)/(r-l);let T,w;if(m)T=u/(d-u),w=d*u/(d-u);else if(h===Di)T=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(h===Pc)T=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=y,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Di,m=!1){const p=this.elements,x=2/(i-t),y=2/(r-l),S=-(i+t)/(i-t),M=-(r+l)/(r-l);let T,w;if(m)T=1/(d-u),w=d/(d-u);else if(h===Di)T=-2/(d-u),w=-(d+u)/(d-u);else if(h===Pc)T=-1/(d-u),w=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=y,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const hs=new ee,mi=new Jt,WS=new ee(0,0,0),qS=new ee(1,1,1),za=new ee,uc=new ee,Qn=new ee,Iv=new Jt,Hv=new jo;class la{constructor(t=0,i=0,r=0,l=la.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],y=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Iv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Iv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Hv.setFromEuler(this),this.setFromQuaternion(Hv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class $_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let YS=0;const kv=new ee,ps=new jo,ea=new Jt,fc=new ee,Do=new ee,ZS=new ee,KS=new jo,Gv=new ee(1,0,0),Vv=new ee(0,1,0),jv=new ee(0,0,1),Xv={type:"added"},QS={type:"removed"},ms={type:"childadded",child:null},dd={type:"childremoved",child:null};class _n extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new ee,i=new la,r=new jo,l=new ee(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Jt},normalMatrix:{value:new dt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Gv,t)}rotateY(t){return this.rotateOnAxis(Vv,t)}rotateZ(t){return this.rotateOnAxis(jv,t)}translateOnAxis(t,i){return kv.copy(t).applyQuaternion(this.quaternion),this.position.add(kv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Gv,t)}translateY(t){return this.translateOnAxis(Vv,t)}translateZ(t){return this.translateOnAxis(jv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fc.copy(t):fc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Do,fc,this.up):ea.lookAt(fc,Do,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),ps.setFromRotationMatrix(ea),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xv),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(QS),dd.child=t,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xv),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,ZS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,KS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const y=m[p];u(t.shapes,y)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),y=d(t.shapes),S=d(t.skeletons),M=d(t.animations),T=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),y.length>0&&(r.shapes=y),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}_n.DEFAULT_UP=new ee(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new ee,ta=new ee,hd=new ee,na=new ee,gs=new ee,vs=new ee,Wv=new ee,pd=new ee,md=new ee,gd=new ee,vd=new Gt,_d=new Gt,xd=new Gt;class vi{constructor(t=new ee,i=new ee,r=new ee){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),gi.subVectors(t,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){gi.subVectors(l,i),ta.subVectors(r,i),hd.subVectors(t,i);const d=gi.dot(gi),h=gi.dot(ta),m=gi.dot(hd),p=ta.dot(ta),x=ta.dot(hd),y=d*p-h*h;if(y===0)return u.set(0,0,0),null;const S=1/y,M=(p*m-h*x)*S,T=(d*x-h*m)*S;return u.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(d,na.y),m.addScaledVector(h,na.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return vd.setScalar(0),_d.setScalar(0),xd.setScalar(0),vd.fromBufferAttribute(t,i),_d.fromBufferAttribute(t,r),xd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(vd,u.x),d.addScaledVector(_d,u.y),d.addScaledVector(xd,u.z),d}static isFrontFacing(t,i,r,l){return gi.subVectors(r,i),ta.subVectors(t,i),gi.cross(ta).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),gi.cross(ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return vi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;gs.subVectors(l,r),vs.subVectors(u,r),pd.subVectors(t,r);const m=gs.dot(pd),p=vs.dot(pd);if(m<=0&&p<=0)return i.copy(r);md.subVectors(t,l);const x=gs.dot(md),y=vs.dot(md);if(x>=0&&y<=x)return i.copy(l);const S=m*y-x*p;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(gs,d);gd.subVectors(t,u);const M=gs.dot(gd),T=vs.dot(gd);if(T>=0&&M<=T)return i.copy(u);const w=M*p-m*T;if(w<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(vs,h);const b=x*T-M*y;if(b<=0&&y-x>=0&&M-T>=0)return Wv.subVectors(u,l),h=(y-x)/(y-x+(M-T)),i.copy(l).addScaledVector(Wv,h);const v=1/(b+w+S);return d=w*v,h=S*v,i.copy(r).addScaledVector(gs,d).addScaledVector(vs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const e0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},dc={h:0,s:0,l:0};function yd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class At{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ct.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ct.workingColorSpace){if(t=wh(t,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=yd(d,u,t+1/3),this.g=yd(d,u,t),this.b=yd(d,u,t-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(t,i=ui){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const r=e0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Ct.workingToColorSpace(wn.copy(this),t),Math.round(Mt(wn.r*255,0,255))*65536+Math.round(Mt(wn.g*255,0,255))*256+Math.round(Mt(wn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ct.workingColorSpace){Ct.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const y=d-h;switch(p=x<=.5?y/(d+h):y/(2-d-h),d){case r:m=(l-u)/y+(l<u?6:0);break;case l:m=(u-r)/y+2;break;case u:m=(r-l)/y+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Ct.workingColorSpace){return Ct.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=ui){Ct.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+i,Ba.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ba),t.getHSL(dc);const r=Bo(Ba.h,dc.h,i),l=Bo(Ba.s,dc.s,i),u=Bo(Ba.l,dc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new At;At.NAMES=e0;let JS=0;class Wo extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Es,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Pd,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Od&&(r.blendSrc=this.blendSrc),this.blendDst!==Pd&&(r.blendDst=this.blendDst),this.blendEquation!==xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Dh extends Wo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=I_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new ee,hc=new Dt;let $S=0;class Li{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$S++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Lv,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ms(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ln(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ms(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ms(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ms(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ms(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array),u=Ln(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lv&&(t.usage=this.usage),t}}class t0 extends Li{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class n0 extends Li{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Gn extends Li{constructor(t,i,r){super(new Float32Array(t),i,r)}}let eM=0;const ci=new Jt,Sd=new _n,_s=new ee,Jn=new Xo,Uo=new Xo,vn=new ee;class yi extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(K_(t)?n0:t0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new dt().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return Sd.lookAt(t),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(t){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Uo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(Jn.min,Uo.min),Jn.expandByPoint(vn),vn.addVectors(Jn.max,Uo.max),Jn.expandByPoint(vn)):(Jn.expandByPoint(Uo.min),Jn.expandByPoint(Uo.max))}Jn.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)vn.fromBufferAttribute(h,p),m&&(_s.fromBufferAttribute(t,p),vn.add(_s)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let $=0;$<r.count;$++)h[$]=new ee,m[$]=new ee;const p=new ee,x=new ee,y=new ee,S=new Dt,M=new Dt,T=new Dt,w=new ee,b=new ee;function v($,R,D){p.fromBufferAttribute(r,$),x.fromBufferAttribute(r,R),y.fromBufferAttribute(r,D),S.fromBufferAttribute(u,$),M.fromBufferAttribute(u,R),T.fromBufferAttribute(u,D),x.sub(p),y.sub(p),M.sub(S),T.sub(S);const F=1/(M.x*T.y-T.x*M.y);isFinite(F)&&(w.copy(x).multiplyScalar(T.y).addScaledVector(y,-M.y).multiplyScalar(F),b.copy(y).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(F),h[$].add(w),h[R].add(w),h[D].add(w),m[$].add(b),m[R].add(b),m[D].add(b))}let G=this.groups;G.length===0&&(G=[{start:0,count:t.count}]);for(let $=0,R=G.length;$<R;++$){const D=G[$],F=D.start,de=D.count;for(let ce=F,ue=F+de;ce<ue;ce+=3)v(t.getX(ce+0),t.getX(ce+1),t.getX(ce+2))}const P=new ee,U=new ee,X=new ee,k=new ee;function I($){X.fromBufferAttribute(l,$),k.copy(X);const R=h[$];P.copy(R),P.sub(X.multiplyScalar(X.dot(R))).normalize(),U.crossVectors(k,R);const F=U.dot(m[$])<0?-1:1;d.setXYZW($,P.x,P.y,P.z,F)}for(let $=0,R=G.length;$<R;++$){const D=G[$],F=D.start,de=D.count;for(let ce=F,ue=F+de;ce<ue;ce+=3)I(t.getX(ce+0)),I(t.getX(ce+1)),I(t.getX(ce+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new ee,u=new ee,d=new ee,h=new ee,m=new ee,p=new ee,x=new ee,y=new ee;if(t)for(let S=0,M=t.count;S<M;S+=3){const T=t.getX(S+0),w=t.getX(S+1),b=t.getX(S+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),x.subVectors(d,u),y.subVectors(l,u),x.cross(y),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),h.add(x),m.add(x),p.add(x),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),x.subVectors(d,u),y.subVectors(l,u),x.cross(y),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,y=h.normalized,S=new p.constructor(m.length*x);let M=0,T=0;for(let w=0,b=m.length;w<b;w++){h.isInterleavedBufferAttribute?M=m[w]*h.data.stride+h.offset:M=m[w]*x;for(let v=0;v<x;v++)S[T++]=p[M++]}return new Li(S,x,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new yi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,y=p.length;x<y;x++){const S=p[x],M=t(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let y=0,S=p.length;y<S;y++){const M=p[y];x.push(M.toJSON(t.data))}x.length>0&&(l[m]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=t.morphAttributes;for(const p in u){const x=[],y=u[p];for(let S=0,M=y.length;S<M;S++)x.push(y[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const y=d[p];this.addGroup(y.start,y.count,y.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qv=new Jt,hr=new J_,pc=new Hc,Yv=new ee,mc=new ee,gc=new ee,vc=new ee,Md=new ee,_c=new ee,Zv=new ee,xc=new ee;class Ui extends _n{constructor(t=new yi,i=new Dh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){_c.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],y=u[m];x!==0&&(Md.fromBufferAttribute(y,t),d?_c.addScaledVector(Md,x):_c.addScaledVector(Md.sub(i),x))}i.add(_c)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(u),hr.copy(t.ray).recast(t.near),!(pc.containsPoint(hr.origin)===!1&&(hr.intersectSphere(pc,Yv)===null||hr.origin.distanceToSquared(Yv)>(t.far-t.near)**2))&&(qv.copy(u).invert(),hr.copy(t.ray).applyMatrix4(qv),!(r.boundingBox!==null&&hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,hr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,y=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,w=S.length;T<w;T++){const b=S[T],v=d[b.materialIndex],G=Math.max(b.start,M.start),P=Math.min(h.count,Math.min(b.start+b.count,M.start+M.count));for(let U=G,X=P;U<X;U+=3){const k=h.getX(U),I=h.getX(U+1),$=h.getX(U+2);l=yc(this,v,t,r,p,x,y,k,I,$),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let b=T,v=w;b<v;b+=3){const G=h.getX(b),P=h.getX(b+1),U=h.getX(b+2);l=yc(this,d,t,r,p,x,y,G,P,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,w=S.length;T<w;T++){const b=S[T],v=d[b.materialIndex],G=Math.max(b.start,M.start),P=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let U=G,X=P;U<X;U+=3){const k=U,I=U+1,$=U+2;l=yc(this,v,t,r,p,x,y,k,I,$),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let b=T,v=w;b<v;b+=3){const G=b,P=b+1,U=b+2;l=yc(this,d,t,r,p,x,y,G,P,U),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function tM(o,t,i,r,l,u,d,h){let m;if(t.side===Hn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ja,h),m===null)return null;xc.copy(h),xc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(xc);return p<i.near||p>i.far?null:{distance:p,point:xc.clone(),object:o}}function yc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,mc),o.getVertexPosition(m,gc),o.getVertexPosition(p,vc);const x=tM(o,t,i,r,mc,gc,vc,Zv);if(x){const y=new ee;vi.getBarycoord(Zv,mc,gc,vc,y),l&&(x.uv=vi.getInterpolatedAttribute(l,h,m,p,y,new Dt)),u&&(x.uv1=vi.getInterpolatedAttribute(u,h,m,p,y,new Dt)),d&&(x.normal=vi.getInterpolatedAttribute(d,h,m,p,y,new ee),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ee,materialIndex:0};vi.getNormal(mc,gc,vc,S.normal),x.face=S,x.barycoord=y}return x}class qo extends yi{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],y=[];let S=0,M=0;T("z","y","x",-1,-1,r,i,t,d,u,0),T("z","y","x",1,-1,r,i,-t,d,u,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Gn(p,3)),this.setAttribute("normal",new Gn(x,3)),this.setAttribute("uv",new Gn(y,2));function T(w,b,v,G,P,U,X,k,I,$,R){const D=U/I,F=X/$,de=U/2,ce=X/2,ue=k/2,pe=I+1,O=$+1;let q=0,Z=0;const oe=new ee;for(let me=0;me<O;me++){const L=me*F-ce;for(let j=0;j<pe;j++){const _e=j*D-de;oe[w]=_e*G,oe[b]=L*P,oe[v]=ue,p.push(oe.x,oe.y,oe.z),oe[w]=0,oe[b]=0,oe[v]=k>0?1:-1,x.push(oe.x,oe.y,oe.z),y.push(j/I),y.push(1-me/$),q+=1}}for(let me=0;me<$;me++)for(let L=0;L<I;L++){const j=S+L+pe*me,_e=S+L+pe*(me+1),Te=S+(L+1)+pe*(me+1),K=S+(L+1)+pe*me;m.push(j,_e,K),m.push(_e,Te,K),Z+=6}h.addGroup(M,Z,R),M+=Z,S+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=Us(o[i]);for(const l in r)t[l]=r[l]}return t}function nM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function i0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ct.workingColorSpace}const iM={clone:Us,merge:Nn};var aM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends Wo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aM,this.fragmentShader=rM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=nM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class a0 extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new ee,Kv=new Dt,Qv=new Dt;class $n extends a0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Go*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,i){return this.getViewBounds(t,Kv,Qv),i.subVectors(Qv,Kv)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,ys=1;class sM extends _n{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new $n(xs,ys,t,i);l.layers=this.layers,this.add(l);const u=new $n(xs,ys,t,i);u.layers=this.layers,this.add(u);const d=new $n(xs,ys,t,i);d.layers=this.layers,this.add(d);const h=new $n(xs,ys,t,i);h.layers=this.layers,this.add(h);const m=new $n(xs,ys,t,i);m.layers=this.layers,this.add(m);const p=new $n(xs,ys,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Di)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Pc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,y=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(y,S,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class r0 extends kn{constructor(t=[],i=ws,r,l,u,d,h,m,p,x){super(t,i,r,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class oM extends Er{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new r0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qo(5,5,5),u=new Xa({name:"CubemapFromEquirect",uniforms:Us(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ga});u.uniforms.tEquirect.value=i;const d=new Ui(l,u),h=i.minFilter;return i.minFilter===Mr&&(i.minFilter=Ci),new sM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class Sc extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lM={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const w of t.hand.values()){const b=i.getJointPose(w,r),v=this._getHandJoint(p,w);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const x=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],S=x.position.distanceTo(y.position),M=.02,T=.005;p.inputState.pinching&&S>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(lM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Sc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Uh{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=i,this.far=r}clone(){return new Uh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cM extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new la,this.environmentIntensity=1,this.environmentRotation=new la,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ed=new ee,uM=new ee,fM=new dt;class vr{constructor(t=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ed.subVectors(r,i).cross(uM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ed),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||fM.getNormalMatrix(t),l=this.coplanarPoint(Ed).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Hc,dM=new Dt(.5,.5),Mc=new ee;class Lh{constructor(t=new vr,i=new vr,r=new vr,l=new vr,u=new vr,d=new vr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Di,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],x=u[4],y=u[5],S=u[6],M=u[7],T=u[8],w=u[9],b=u[10],v=u[11],G=u[12],P=u[13],U=u[14],X=u[15];if(l[0].setComponents(p-d,M-x,v-T,X-G).normalize(),l[1].setComponents(p+d,M+x,v+T,X+G).normalize(),l[2].setComponents(p+h,M+y,v+w,X+P).normalize(),l[3].setComponents(p-h,M-y,v-w,X-P).normalize(),r)l[4].setComponents(m,S,b,U).normalize(),l[5].setComponents(p-m,M-S,v-b,X-U).normalize();else if(l[4].setComponents(p-m,M-S,v-b,X-U).normalize(),i===Di)l[5].setComponents(p+m,M+S,v+b,X+U).normalize();else if(i===Pc)l[5].setComponents(m,S,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){pr.center.set(0,0,0);const i=dM.distanceTo(t.center);return pr.radius=.7071067811865476+i,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nh extends Wo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Bc=new ee,Fc=new ee,Jv=new Jt,Lo=new J_,bc=new Hc,Td=new ee,$v=new ee;class s0 extends _n{constructor(t=new yi,i=new Nh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Bc.fromBufferAttribute(i,l-1),Fc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Bc.distanceTo(Fc);t.setAttribute("lineDistance",new Gn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(l),bc.radius+=u,t.ray.intersectsSphere(bc)===!1)return;Jv.copy(l).invert(),Lo.copy(t.ray).applyMatrix4(Jv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=r.index,S=r.attributes.position;if(x!==null){const M=Math.max(0,d.start),T=Math.min(x.count,d.start+d.count);for(let w=M,b=T-1;w<b;w+=p){const v=x.getX(w),G=x.getX(w+1),P=Ec(this,t,Lo,m,v,G,w);P&&i.push(P)}if(this.isLineLoop){const w=x.getX(T-1),b=x.getX(M),v=Ec(this,t,Lo,m,w,b,T-1);v&&i.push(v)}}else{const M=Math.max(0,d.start),T=Math.min(S.count,d.start+d.count);for(let w=M,b=T-1;w<b;w+=p){const v=Ec(this,t,Lo,m,w,w+1,w);v&&i.push(v)}if(this.isLineLoop){const w=Ec(this,t,Lo,m,T-1,M,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Ec(o,t,i,r,l,u,d){const h=o.geometry.attributes.position;if(Bc.fromBufferAttribute(h,l),Fc.fromBufferAttribute(h,u),i.distanceSqToSegment(Bc,Fc,Td,$v)>r)return;Td.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Td);if(!(p<t.near||p>t.far))return{distance:p,point:$v.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const e_=new ee,t_=new ee;class hM extends s0{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)e_.fromBufferAttribute(i,l),t_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+e_.distanceTo(t_);t.setAttribute("lineDistance",new Gn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class o0 extends kn{constructor(t,i,r=br,l,u,d,h=xi,m=xi,p,x=Ho,y=1){if(x!==Ho&&x!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:y};super(S,l,u,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ch(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class kc extends yi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,y=t/h,S=i/m,M=[],T=[],w=[],b=[];for(let v=0;v<x;v++){const G=v*S-d;for(let P=0;P<p;P++){const U=P*y-u;T.push(U,-G,0),w.push(0,0,1),b.push(P/h),b.push(1-v/m)}}for(let v=0;v<m;v++)for(let G=0;G<h;G++){const P=G+p*v,U=G+p*(v+1),X=G+1+p*(v+1),k=G+1+p*v;M.push(P,U,k),M.push(U,X,k)}this.setIndex(M),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(w,3)),this.setAttribute("uv",new Gn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Oh extends yi{constructor(t=.5,i=1,r=32,l=1,u=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:d},r=Math.max(3,r),l=Math.max(1,l);const h=[],m=[],p=[],x=[];let y=t;const S=(i-t)/l,M=new ee,T=new Dt;for(let w=0;w<=l;w++){for(let b=0;b<=r;b++){const v=u+b/r*d;M.x=y*Math.cos(v),M.y=y*Math.sin(v),m.push(M.x,M.y,M.z),p.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,x.push(T.x,T.y)}y+=S}for(let w=0;w<l;w++){const b=w*(r+1);for(let v=0;v<r;v++){const G=v+b,P=G,U=G+r+1,X=G+r+2,k=G+1;h.push(P,U,k),h.push(U,X,k)}}this.setIndex(h),this.setAttribute("position",new Gn(m,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pM extends Wo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mM extends Wo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ph extends _n{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class gM extends Ph{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Ad=new Jt,n_=new ee,i_=new ee;class l0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;n_.setFromMatrixPosition(t.matrixWorld),i.position.copy(n_),i_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(i_),i.updateMatrixWorld(),Ad.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ad)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const a_=new Jt,No=new ee,Rd=new ee;class vM extends l0{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new ee(1,0,0),new ee(-1,0,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,1,0),new ee(0,-1,0)],this._cubeUps=[new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,0,1),new ee(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),No.setFromMatrixPosition(t.matrixWorld),r.position.copy(No),Rd.copy(r.position),Rd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Rd),r.updateMatrixWorld(),l.makeTranslation(-No.x,-No.y,-No.z),a_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(a_,r.coordinateSystem,r.reversedDepth)}}class _M extends Ph{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new vM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class c0 extends a0{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class xM extends l0{constructor(){super(new c0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yM extends Ph{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new xM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class SM extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class MM extends hM{constructor(t=10,i=10,r=4473924,l=8947848){r=new At(r),l=new At(l);const u=i/2,d=t/i,h=t/2,m=[],p=[];for(let S=0,M=0,T=-h;S<=i;S++,T+=d){m.push(-h,0,T,h,0,T),m.push(T,0,-h,T,0,h);const w=S===u?r:l;w.toArray(p,M),M+=3,w.toArray(p,M),M+=3,w.toArray(p,M),M+=3,w.toArray(p,M),M+=3}const x=new yi;x.setAttribute("position",new Gn(m,3)),x.setAttribute("color",new Gn(p,3));const y=new Nh({vertexColors:!0,toneMapped:!1});super(x,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function r_(o,t,i,r){const l=bM(r);switch(i){case j_:return o*t;case W_:return o*t/l.components*l.byteLength;case Th:return o*t/l.components*l.byteLength;case q_:return o*t*2/l.components*l.byteLength;case Ah:return o*t*2/l.components*l.byteLength;case X_:return o*t*3/l.components*l.byteLength;case _i:return o*t*4/l.components*l.byteLength;case Rh:return o*t*4/l.components*l.byteLength;case wc:case Cc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yd:case Kd:return Math.max(o,16)*Math.max(t,8)/4;case qd:case Zd:return Math.max(o,8)*Math.max(t,8)/2;case Qd:case Jd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case $d:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case th:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case nh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ih:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ah:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case rh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case sh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case oh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case lh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case dh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case hh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Lc:case ph:case mh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Y_:case gh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case vh:case _h:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bM(o){switch(o){case Ni:case k_:return{byteLength:1,components:1};case Fo:case G_:case Vo:return{byteLength:2,components:1};case bh:case Eh:return{byteLength:2,components:4};case br:case Mh:case sa:return{byteLength:4,components:1};case V_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function u0(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function EM(o){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,y=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:y}}function r(h,m,p){const x=m.array,y=m.updateRanges;if(o.bindBuffer(p,h),y.length===0)o.bufferSubData(p,0,x);else{y.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<y.length;M++){const T=y[S],w=y[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++S,y[S]=w)}y.length=S+1;for(let M=0,T=y.length;M<T;M++){const w=y[M];o.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var TM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,IM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ub=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,db=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ob=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$b=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:TM,alphahash_pars_fragment:AM,alphamap_fragment:RM,alphamap_pars_fragment:wM,alphatest_fragment:CM,alphatest_pars_fragment:DM,aomap_fragment:UM,aomap_pars_fragment:LM,batching_pars_vertex:NM,batching_vertex:OM,begin_vertex:PM,beginnormal_vertex:zM,bsdfs:BM,iridescence_fragment:FM,bumpmap_pars_fragment:IM,clipping_planes_fragment:HM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:VM,color_fragment:jM,color_pars_fragment:XM,color_pars_vertex:WM,color_vertex:qM,common:YM,cube_uv_reflection_fragment:ZM,defaultnormal_vertex:KM,displacementmap_pars_vertex:QM,displacementmap_vertex:JM,emissivemap_fragment:$M,emissivemap_pars_fragment:eb,colorspace_fragment:tb,colorspace_pars_fragment:nb,envmap_fragment:ib,envmap_common_pars_fragment:ab,envmap_pars_fragment:rb,envmap_pars_vertex:sb,envmap_physical_pars_fragment:vb,envmap_vertex:ob,fog_vertex:lb,fog_pars_vertex:cb,fog_fragment:ub,fog_pars_fragment:fb,gradientmap_pars_fragment:db,lightmap_pars_fragment:hb,lights_lambert_fragment:pb,lights_lambert_pars_fragment:mb,lights_pars_begin:gb,lights_toon_fragment:_b,lights_toon_pars_fragment:xb,lights_phong_fragment:yb,lights_phong_pars_fragment:Sb,lights_physical_fragment:Mb,lights_physical_pars_fragment:bb,lights_fragment_begin:Eb,lights_fragment_maps:Tb,lights_fragment_end:Ab,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Cb,logdepthbuf_vertex:Db,map_fragment:Ub,map_pars_fragment:Lb,map_particle_fragment:Nb,map_particle_pars_fragment:Ob,metalnessmap_fragment:Pb,metalnessmap_pars_fragment:zb,morphinstance_vertex:Bb,morphcolor_vertex:Fb,morphnormal_vertex:Ib,morphtarget_pars_vertex:Hb,morphtarget_vertex:kb,normal_fragment_begin:Gb,normal_fragment_maps:Vb,normal_pars_fragment:jb,normal_pars_vertex:Xb,normal_vertex:Wb,normalmap_pars_fragment:qb,clearcoat_normal_fragment_begin:Yb,clearcoat_normal_fragment_maps:Zb,clearcoat_pars_fragment:Kb,iridescence_pars_fragment:Qb,opaque_fragment:Jb,packing:$b,premultiplied_alpha_fragment:eE,project_vertex:tE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:fE,skinning_vertex:dE,skinnormal_vertex:hE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:vE,transmission_fragment:_E,transmission_pars_fragment:xE,uv_pars_fragment:yE,uv_pars_vertex:SE,uv_vertex:ME,worldpos_vertex:bE,background_vert:EE,background_frag:TE,backgroundCube_vert:AE,backgroundCube_frag:RE,cube_vert:wE,cube_frag:CE,depth_vert:DE,depth_frag:UE,distanceRGBA_vert:LE,distanceRGBA_frag:NE,equirect_vert:OE,equirect_frag:PE,linedashed_vert:zE,linedashed_frag:BE,meshbasic_vert:FE,meshbasic_frag:IE,meshlambert_vert:HE,meshlambert_frag:kE,meshmatcap_vert:GE,meshmatcap_frag:VE,meshnormal_vert:jE,meshnormal_frag:XE,meshphong_vert:WE,meshphong_frag:qE,meshphysical_vert:YE,meshphysical_frag:ZE,meshtoon_vert:KE,meshtoon_frag:QE,points_vert:JE,points_frag:$E,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},Be={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},wi={basic:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Nn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Nn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Nn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Nn([Be.points,Be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Nn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Nn([Be.common,Be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Nn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Nn([Be.sprite,Be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Nn([Be.common,Be.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Nn([Be.lights,Be.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};wi.physical={uniforms:Nn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Tc={r:0,b:0,g:0},mr=new la,aT=new Jt;function rT(o,t,i,r,l,u,d){const h=new At(0);let m=u===!0?0:1,p,x,y=null,S=0,M=null;function T(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:t).get(U)),U}function w(P){let U=!1;const X=T(P);X===null?v(h,m):X&&X.isColor&&(v(X,1),U=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,d):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(P,U){const X=T(U);X&&(X.isCubeTexture||X.mapping===Ic)?(x===void 0&&(x=new Ui(new qo(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Us(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(k,I,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),mr.copy(U.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),x.material.uniforms.envMap.value=X,x.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(mr)),x.material.toneMapped=Ct.getTransfer(X.colorSpace)!==kt,(y!==X||S!==X.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,y=X,S=X.version,M=o.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new Ui(new kc(2,2),new Xa({name:"BackgroundMaterial",uniforms:Us(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(X.colorSpace)!==kt,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(y!==X||S!==X.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,y=X,S=X.version,M=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function v(P,U){P.getRGB(Tc,i0(o)),r.buffers.color.setClear(Tc.r,Tc.g,Tc.b,U,d)}function G(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,U=1){h.set(P),m=U,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,v(h,m)},render:w,addToRenderList:b,dispose:G}}function sT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(D,F,de,ce,ue){let pe=!1;const O=y(ce,de,F);u!==O&&(u=O,p(u.object)),pe=M(D,ce,de,ue),pe&&T(D,ce,de,ue),ue!==null&&t.update(ue,o.ELEMENT_ARRAY_BUFFER),(pe||d)&&(d=!1,U(D,F,de,ce),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ue).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function x(D){return o.deleteVertexArray(D)}function y(D,F,de){const ce=de.wireframe===!0;let ue=r[D.id];ue===void 0&&(ue={},r[D.id]=ue);let pe=ue[F.id];pe===void 0&&(pe={},ue[F.id]=pe);let O=pe[ce];return O===void 0&&(O=S(m()),pe[ce]=O),O}function S(D){const F=[],de=[],ce=[];for(let ue=0;ue<i;ue++)F[ue]=0,de[ue]=0,ce[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:de,attributeDivisors:ce,object:D,attributes:{},index:null}}function M(D,F,de,ce){const ue=u.attributes,pe=F.attributes;let O=0;const q=de.getAttributes();for(const Z in q)if(q[Z].location>=0){const me=ue[Z];let L=pe[Z];if(L===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),me===void 0||me.attribute!==L||L&&me.data!==L.data)return!0;O++}return u.attributesNum!==O||u.index!==ce}function T(D,F,de,ce){const ue={},pe=F.attributes;let O=0;const q=de.getAttributes();for(const Z in q)if(q[Z].location>=0){let me=pe[Z];me===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(me=D.instanceColor));const L={};L.attribute=me,me&&me.data&&(L.data=me.data),ue[Z]=L,O++}u.attributes=ue,u.attributesNum=O,u.index=ce}function w(){const D=u.newAttributes;for(let F=0,de=D.length;F<de;F++)D[F]=0}function b(D){v(D,0)}function v(D,F){const de=u.newAttributes,ce=u.enabledAttributes,ue=u.attributeDivisors;de[D]=1,ce[D]===0&&(o.enableVertexAttribArray(D),ce[D]=1),ue[D]!==F&&(o.vertexAttribDivisor(D,F),ue[D]=F)}function G(){const D=u.newAttributes,F=u.enabledAttributes;for(let de=0,ce=F.length;de<ce;de++)F[de]!==D[de]&&(o.disableVertexAttribArray(de),F[de]=0)}function P(D,F,de,ce,ue,pe,O){O===!0?o.vertexAttribIPointer(D,F,de,ue,pe):o.vertexAttribPointer(D,F,de,ce,ue,pe)}function U(D,F,de,ce){w();const ue=ce.attributes,pe=de.getAttributes(),O=F.defaultAttributeValues;for(const q in pe){const Z=pe[q];if(Z.location>=0){let oe=ue[q];if(oe===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){const me=oe.normalized,L=oe.itemSize,j=t.get(oe);if(j===void 0)continue;const _e=j.buffer,Te=j.type,K=j.bytesPerElement,xe=Te===o.INT||Te===o.UNSIGNED_INT||oe.gpuType===Mh;if(oe.isInterleavedBufferAttribute){const ge=oe.data,He=ge.stride,Oe=oe.offset;if(ge.isInstancedInterleavedBuffer){for(let Je=0;Je<Z.locationSize;Je++)v(Z.location+Je,ge.meshPerAttribute);D.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Je=0;Je<Z.locationSize;Je++)b(Z.location+Je);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let Je=0;Je<Z.locationSize;Je++)P(Z.location+Je,L/Z.locationSize,Te,me,He*K,(Oe+L/Z.locationSize*Je)*K,xe)}else{if(oe.isInstancedBufferAttribute){for(let ge=0;ge<Z.locationSize;ge++)v(Z.location+ge,oe.meshPerAttribute);D.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<Z.locationSize;ge++)b(Z.location+ge);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let ge=0;ge<Z.locationSize;ge++)P(Z.location+ge,L/Z.locationSize,Te,me,L*K,L/Z.locationSize*ge*K,xe)}}else if(O!==void 0){const me=O[q];if(me!==void 0)switch(me.length){case 2:o.vertexAttrib2fv(Z.location,me);break;case 3:o.vertexAttrib3fv(Z.location,me);break;case 4:o.vertexAttrib4fv(Z.location,me);break;default:o.vertexAttrib1fv(Z.location,me)}}}}G()}function X(){$();for(const D in r){const F=r[D];for(const de in F){const ce=F[de];for(const ue in ce)x(ce[ue].object),delete ce[ue];delete F[de]}delete r[D]}}function k(D){if(r[D.id]===void 0)return;const F=r[D.id];for(const de in F){const ce=F[de];for(const ue in ce)x(ce[ue].object),delete ce[ue];delete F[de]}delete r[D.id]}function I(D){for(const F in r){const de=r[F];if(de[D.id]===void 0)continue;const ce=de[D.id];for(const ue in ce)x(ce[ue].object),delete ce[ue];delete de[D.id]}}function $(){R(),d=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:R,dispose:X,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:b,disableUnusedAttributes:G}}function oT(o,t,i){let r;function l(p){r=p}function u(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,y){y!==0&&(o.drawArraysInstanced(r,p,x,y),i.update(x,r,y))}function h(p,x,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,y);let M=0;for(let T=0;T<y;T++)M+=x[T];i.update(M,r,1)}function m(p,x,y,S){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)d(p[T],x[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,y);let T=0;for(let w=0;w<y;w++)T+=x[w]*S[w];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function lT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==_i&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const $=I===Vo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Ni&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==sa&&!$)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const y=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),G=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=T>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:G,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:X,maxSamples:k}}function cT(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new vr,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const M=y.length!==0||S||r!==0||l;return l=S,r=y.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,S){i=x(y,S,0)},this.setState=function(y,S,M){const T=y.clippingPlanes,w=y.clipIntersection,b=y.clipShadows,v=o.get(y);if(!l||T===null||T.length===0||u&&!b)u?x(null):p();else{const G=u?0:r,P=G*4;let U=v.clippingState||null;m.value=U,U=x(T,S,P,M);for(let X=0;X!==P;++X)U[X]=i[X];v.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=G}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(y,S,M,T){const w=y!==null?y.length:0;let b=null;if(w!==0){if(b=m.value,T!==!0||b===null){const v=M+w*4,G=S.matrixWorldInverse;h.getNormalMatrix(G),(b===null||b.length<v)&&(b=new Float32Array(v));for(let P=0,U=M;P!==w;++P,U+=4)d.copy(y[P]).applyMatrix4(G,h),d.normal.toArray(b,U),b[U+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,b}}function uT(o){let t=new WeakMap;function i(d,h){return h===Vd?d.mapping=ws:h===jd&&(d.mapping=Cs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Vd||h===jd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new oM(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const bs=4,s_=[.125,.215,.35,.446,.526,.582],yr=20,wd=new c0,o_=new At;let Cd=null,Dd=0,Ud=0,Ld=!1;const _r=(1+Math.sqrt(5))/2,Ss=1/_r,l_=[new ee(-_r,Ss,0),new ee(_r,Ss,0),new ee(-Ss,0,_r),new ee(Ss,0,_r),new ee(0,_r,-Ss),new ee(0,_r,Ss),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)],fT=new ee;class c_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=fT}=u;Cd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=d_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cd,Dd,Ud),this._renderer.xr.enabled=Ld,t.scissorTest=!1,Ac(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ws||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Vo,format:_i,colorSpace:Ds,depthBuffer:!1},l=u_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dT(u)),this._blurMaterial=hT(u,t,i)}return l}_compileMaterial(t){const i=new Ui(this._lodPlanes[0],t);this._renderer.compile(i,wd)}_sceneToCubeUV(t,i,r,l,u){const m=new $n(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],y=this._renderer,S=y.autoClear,M=y.toneMapping;y.getClearColor(o_),y.toneMapping=Va,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null));const w=new Dh({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),b=new Ui(new qo,w);let v=!1;const G=t.background;G?G.isColor&&(w.color.copy(G),t.background=null,v=!0):(w.color.copy(o_),v=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[P],u.y,u.z)):U===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[P]));const X=this._cubeSize;Ac(l,U*X,P>2?X:0,X,X),y.setRenderTarget(l),v&&y.render(b,m),y.render(t,m)}b.geometry.dispose(),b.material.dispose(),y.toneMapping=M,y.autoClear=S,t.background=G}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ws||t.mapping===Cs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=d_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ui(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Ac(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,wd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=l_[(l-u-1)%l_.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,y=new Ui(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*yr-1),w=u/T,b=isFinite(u)?1+Math.floor(x*w):yr;b>yr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${yr}`);const v=[];let G=0;for(let I=0;I<yr;++I){const $=I/w,R=Math.exp(-$*$/2);v.push(R),I===0?G+=R:I<b&&(G+=2*R)}for(let I=0;I<v.length;I++)v[I]=v[I]/G;S.envMap.value=t.texture,S.samples.value=b,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:P}=this;S.dTheta.value=T,S.mipInt.value=P-r;const U=this._sizeLods[l],X=3*U*(l>P-bs?l-P+bs:0),k=4*(this._cubeSize-U);Ac(i,X,k,3*U,2*U),m.setRenderTarget(i),m.render(y,wd)}}function dT(o){const t=[],i=[],r=[];let l=o;const u=o-bs+1+s_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-bs?m=s_[d-o+bs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),x=-p,y=1+p,S=[x,x,y,x,y,y,x,x,y,y,x,y],M=6,T=6,w=3,b=2,v=1,G=new Float32Array(w*T*M),P=new Float32Array(b*T*M),U=new Float32Array(v*T*M);for(let k=0;k<M;k++){const I=k%3*2/3-1,$=k>2?0:-1,R=[I,$,0,I+2/3,$,0,I+2/3,$+1,0,I,$,0,I+2/3,$+1,0,I,$+1,0];G.set(R,w*T*k),P.set(S,b*T*k);const D=[k,k,k,k,k,k];U.set(D,v*T*k)}const X=new yi;X.setAttribute("position",new Li(G,w)),X.setAttribute("uv",new Li(P,b)),X.setAttribute("faceIndex",new Li(U,v)),t.push(X),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function u_(o,t,i){const r=new Er(o,t,i);return r.texture.mapping=Ic,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ac(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function hT(o,t,i){const r=new Float32Array(yr),l=new ee(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function f_(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function d_(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pT(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Vd||m===jd,x=m===ws||m===Cs;if(p||x){let y=t.get(h);const S=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new c_(o)),y=p?i.fromEquirectangular(h,y):i.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),y.texture;if(y!==void 0)return y.texture;{const M=h.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new c_(o)),y=p?i.fromEquirectangular(h):i.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),h.addEventListener("dispose",u),y.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function mT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ts("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function gT(o,t,i,r){const l={},u=new WeakMap;function d(y){const S=y.target;S.index!==null&&t.remove(S.index);for(const T in S.attributes)t.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(y,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(y){const S=y.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(y){const S=[],M=y.index,T=y.attributes.position;let w=0;if(M!==null){const G=M.array;w=M.version;for(let P=0,U=G.length;P<U;P+=3){const X=G[P+0],k=G[P+1],I=G[P+2];S.push(X,k,k,I,I,X)}}else if(T!==void 0){const G=T.array;w=T.version;for(let P=0,U=G.length/3-1;P<U;P+=3){const X=P+0,k=P+1,I=P+2;S.push(X,k,k,I,I,X)}}else return;const b=new(K_(S)?n0:t0)(S,1);b.version=w;const v=u.get(y);v&&t.remove(v),u.set(y,b)}function x(y){const S=u.get(y);if(S){const M=y.index;M!==null&&S.version<M.version&&p(y)}else p(y);return u.get(y)}return{get:h,update:m,getWireframeAttribute:x}}function vT(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*d),i.update(M,r,1)}function p(S,M,T){T!==0&&(o.drawElementsInstanced(r,M,u,S*d,T),i.update(M,r,T))}function x(S,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,T);let b=0;for(let v=0;v<T;v++)b+=M[v];i.update(b,r,1)}function y(S,M,T,w){if(T===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let v=0;v<S.length;v++)p(S[v]/d,M[v],w[v]);else{b.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,w,0,T);let v=0;for(let G=0;G<T;G++)v+=M[G]*w[G];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=y}function _T(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function xT(o,t,i){const r=new WeakMap,l=new Gt;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=x!==void 0?x.length:0;let S=r.get(h);if(S===void 0||S.count!==y){let R=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",R)};S!==void 0&&S.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let P=0;M===!0&&(P=1),T===!0&&(P=2),w===!0&&(P=3);let U=h.attributes.position.count*P,X=1;U>t.maxTextureSize&&(X=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const k=new Float32Array(U*X*4*y),I=new Q_(k,U,X,y);I.type=sa,I.needsUpdate=!0;const $=P*4;for(let D=0;D<y;D++){const F=b[D],de=v[D],ce=G[D],ue=U*X*4*D;for(let pe=0;pe<F.count;pe++){const O=pe*$;M===!0&&(l.fromBufferAttribute(F,pe),k[ue+O+0]=l.x,k[ue+O+1]=l.y,k[ue+O+2]=l.z,k[ue+O+3]=0),T===!0&&(l.fromBufferAttribute(de,pe),k[ue+O+4]=l.x,k[ue+O+5]=l.y,k[ue+O+6]=l.z,k[ue+O+7]=0),w===!0&&(l.fromBufferAttribute(ce,pe),k[ue+O+8]=l.x,k[ue+O+9]=l.y,k[ue+O+10]=l.z,k[ue+O+11]=ce.itemSize===4?l.w:1)}}S={count:y,texture:I,size:new Dt(U,X)},r.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let M=0;for(let w=0;w<p.length;w++)M+=p[w];const T=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function yT(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,x=m.geometry,y=t.get(m,x);if(l.get(y)!==p&&(t.update(y),l.set(y,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return y}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const f0=new kn,h_=new o0(1,1),d0=new Q_,h0=new jS,p0=new r0,p_=[],m_=[],g_=new Float32Array(16),v_=new Float32Array(9),__=new Float32Array(4);function Os(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=p_[l];if(u===void 0&&(u=new Float32Array(l),p_[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Gc(o,t){let i=m_[t];i===void 0&&(i=new Int32Array(t),m_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function ST(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function MT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function bT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function TT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;__.set(r),o.uniformMatrix2fv(this.addr,!1,__),pn(i,r)}}function AT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;v_.set(r),o.uniformMatrix3fv(this.addr,!1,v_),pn(i,r)}}function RT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;g_.set(r),o.uniformMatrix4fv(this.addr,!1,g_),pn(i,r)}}function wT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function UT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function LT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function NT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function zT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(h_.compareFunction=Z_,u=h_):u=f0,i.setTexture2D(t||u,l)}function BT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||h0,l)}function FT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||p0,l)}function IT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||d0,l)}function HT(o){switch(o){case 5126:return ST;case 35664:return MT;case 35665:return bT;case 35666:return ET;case 35674:return TT;case 35675:return AT;case 35676:return RT;case 5124:case 35670:return wT;case 35667:case 35671:return CT;case 35668:case 35672:return DT;case 35669:case 35673:return UT;case 5125:return LT;case 36294:return NT;case 36295:return OT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return IT}}function kT(o,t){o.uniform1fv(this.addr,t)}function GT(o,t){const i=Os(t,this.size,2);o.uniform2fv(this.addr,i)}function VT(o,t){const i=Os(t,this.size,3);o.uniform3fv(this.addr,i)}function jT(o,t){const i=Os(t,this.size,4);o.uniform4fv(this.addr,i)}function XT(o,t){const i=Os(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function WT(o,t){const i=Os(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function qT(o,t){const i=Os(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function YT(o,t){o.uniform1iv(this.addr,t)}function ZT(o,t){o.uniform2iv(this.addr,t)}function KT(o,t){o.uniform3iv(this.addr,t)}function QT(o,t){o.uniform4iv(this.addr,t)}function JT(o,t){o.uniform1uiv(this.addr,t)}function $T(o,t){o.uniform2uiv(this.addr,t)}function eA(o,t){o.uniform3uiv(this.addr,t)}function tA(o,t){o.uniform4uiv(this.addr,t)}function nA(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f0,u[d])}function iA(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||h0,u[d])}function aA(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||p0,u[d])}function rA(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||d0,u[d])}function sA(o){switch(o){case 5126:return kT;case 35664:return GT;case 35665:return VT;case 35666:return jT;case 35674:return XT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return $T;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return rA}}class oA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=HT(i.type)}}class lA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sA(i.type)}}class cA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function x_(o,t){o.seq.push(t),o.map[t.id]=t}function uA(o,t,i){const r=o.name,l=r.length;for(Nd.lastIndex=0;;){const u=Nd.exec(r),d=Nd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){x_(i,p===void 0?new oA(h,o,t):new lA(h,o,t));break}else{let y=i.map[h];y===void 0&&(y=new cA(h),x_(i,y)),i=y}}}class Nc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);uA(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function y_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const fA=37297;let dA=0;function hA(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const S_=new dt;function pA(o){Ct._getMatrix(S_,Ct.workingColorSpace,o);const t=`mat3( ${S_.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(o)){case Oc:return[t,"LinearTransferOETF"];case kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function M_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+hA(o.getShaderSource(t),h)}else return u}function mA(o,t){const i=pA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function gA(o,t){let i;switch(t){case nS:i="Linear";break;case iS:i="Reinhard";break;case aS:i="Cineon";break;case rS:i="ACESFilmic";break;case oS:i="AgX";break;case lS:i="Neutral";break;case sS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new ee;function vA(){Ct.getLuminanceCoefficients(Rc);const o=Rc.x.toFixed(4),t=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _A(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function xA(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function yA(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Po(o){return o!==""}function b_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function E_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(o){return o.replace(SA,bA)}const MA=new Map;function bA(o,t){let i=pt[t];if(i===void 0){const r=MA.get(t);if(r!==void 0)i=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return xh(i)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T_(o){return o.replace(EA,TA)}function TA(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function A_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function AA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===B_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===F_?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function RA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ws:case Cs:t="ENVMAP_TYPE_CUBE";break;case Ic:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function CA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case I_:t="ENVMAP_BLENDING_MULTIPLY";break;case eS:t="ENVMAP_BLENDING_MIX";break;case tS:t="ENVMAP_BLENDING_ADD";break}return t}function DA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function UA(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=AA(i),p=RA(i),x=wA(i),y=CA(i),S=DA(i),M=_A(i),T=xA(u),w=l.createProgram();let b,v,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Po).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Po).join(`
`),v.length>0&&(v+=`
`)):(b=[A_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),v=[A_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?pt.tonemapping_pars_fragment:"",i.toneMapping!==Va?gA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,mA("linearToOutputTexel",i.outputColorSpace),vA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),d=xh(d),d=b_(d,i),d=E_(d,i),h=xh(h),h=b_(h,i),h=E_(h,i),d=T_(d),h=T_(h),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,b=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",i.glslVersion===Nv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Nv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=G+b+d,U=G+v+h,X=y_(l,l.VERTEX_SHADER,P),k=y_(l,l.FRAGMENT_SHADER,U);l.attachShader(w,X),l.attachShader(w,k),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(F){if(o.debug.checkShaderErrors){const de=l.getProgramInfoLog(w)||"",ce=l.getShaderInfoLog(X)||"",ue=l.getShaderInfoLog(k)||"",pe=de.trim(),O=ce.trim(),q=ue.trim();let Z=!0,oe=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,X,k);else{const me=M_(l,X,"vertex"),L=M_(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+pe+`
`+me+`
`+L)}else pe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pe):(O===""||q==="")&&(oe=!1);oe&&(F.diagnostics={runnable:Z,programLog:pe,vertexShader:{log:O,prefix:b},fragmentShader:{log:q,prefix:v}})}l.deleteShader(X),l.deleteShader(k),$=new Nc(l,w),R=yA(l,w)}let $;this.getUniforms=function(){return $===void 0&&I(this),$};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(w,fA)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=k,this}let LA=0;class NA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new OA(t),i.set(t,r)),r}}class OA{constructor(t){this.id=LA++,this.code=t,this.usedTimes=0}}function PA(o,t,i,r,l,u,d){const h=new $_,m=new NA,p=new Set,x=[],y=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return p.add(R),R===0?"uv":`uv${R}`}function b(R,D,F,de,ce){const ue=de.fog,pe=ce.geometry,O=R.isMeshStandardMaterial?de.environment:null,q=(R.isMeshStandardMaterial?i:t).get(R.envMap||O),Z=q&&q.mapping===Ic?q.image.height:null,oe=T[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const me=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,L=me!==void 0?me.length:0;let j=0;pe.morphAttributes.position!==void 0&&(j=1),pe.morphAttributes.normal!==void 0&&(j=2),pe.morphAttributes.color!==void 0&&(j=3);let _e,Te,K,xe;if(oe){const Et=wi[oe];_e=Et.vertexShader,Te=Et.fragmentShader}else _e=R.vertexShader,Te=R.fragmentShader,m.update(R),K=m.getVertexShaderID(R),xe=m.getFragmentShaderID(R);const ge=o.getRenderTarget(),He=o.state.buffers.depth.getReversed(),Oe=ce.isInstancedMesh===!0,Je=ce.isBatchedMesh===!0,Lt=!!R.map,ct=!!R.matcap,H=!!q,ut=!!R.aoMap,B=!!R.lightMap,Ne=!!R.bumpMap,Le=!!R.normalMap,ht=!!R.displacementMap,Fe=!!R.emissiveMap,at=!!R.metalnessMap,Vt=!!R.roughnessMap,jt=R.anisotropy>0,N=R.clearcoat>0,E=R.dispersion>0,te=R.iridescence>0,ve=R.sheen>0,Ee=R.transmission>0,fe=jt&&!!R.anisotropyMap,Ke=N&&!!R.clearcoatMap,Ce=N&&!!R.clearcoatNormalMap,Ye=N&&!!R.clearcoatRoughnessMap,Ze=te&&!!R.iridescenceMap,Re=te&&!!R.iridescenceThicknessMap,De=ve&&!!R.sheenColorMap,Qe=ve&&!!R.sheenRoughnessMap,ke=!!R.specularMap,Pe=!!R.specularColorMap,ot=!!R.specularIntensityMap,W=Ee&&!!R.transmissionMap,we=Ee&&!!R.thicknessMap,Ue=!!R.gradientMap,Ge=!!R.alphaMap,Ae=R.alphaTest>0,Me=!!R.alphaHash,Ve=!!R.extensions;let rt=Va;R.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(rt=o.toneMapping);const Pt={shaderID:oe,shaderType:R.type,shaderName:R.name,vertexShader:_e,fragmentShader:Te,defines:R.defines,customVertexShaderID:K,customFragmentShaderID:xe,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Je,batchingColor:Je&&ce._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&ce.instanceColor!==null,instancingMorph:Oe&&ce.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ge===null?o.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ds,alphaToCoverage:!!R.alphaToCoverage,map:Lt,matcap:ct,envMap:H,envMapMode:H&&q.mapping,envMapCubeUVHeight:Z,aoMap:ut,lightMap:B,bumpMap:Ne,normalMap:Le,displacementMap:S&&ht,emissiveMap:Fe,normalMapObjectSpace:Le&&R.normalMapType===hS,normalMapTangentSpace:Le&&R.normalMapType===dS,metalnessMap:at,roughnessMap:Vt,anisotropy:jt,anisotropyMap:fe,clearcoat:N,clearcoatMap:Ke,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,dispersion:E,iridescence:te,iridescenceMap:Ze,iridescenceThicknessMap:Re,sheen:ve,sheenColorMap:De,sheenRoughnessMap:Qe,specularMap:ke,specularColorMap:Pe,specularIntensityMap:ot,transmission:Ee,transmissionMap:W,thicknessMap:we,gradientMap:Ue,opaque:R.transparent===!1&&R.blending===Es&&R.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ae,alphaHash:Me,combine:R.combine,mapUv:Lt&&w(R.map.channel),aoMapUv:ut&&w(R.aoMap.channel),lightMapUv:B&&w(R.lightMap.channel),bumpMapUv:Ne&&w(R.bumpMap.channel),normalMapUv:Le&&w(R.normalMap.channel),displacementMapUv:ht&&w(R.displacementMap.channel),emissiveMapUv:Fe&&w(R.emissiveMap.channel),metalnessMapUv:at&&w(R.metalnessMap.channel),roughnessMapUv:Vt&&w(R.roughnessMap.channel),anisotropyMapUv:fe&&w(R.anisotropyMap.channel),clearcoatMapUv:Ke&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:De&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&w(R.sheenRoughnessMap.channel),specularMapUv:ke&&w(R.specularMap.channel),specularColorMapUv:Pe&&w(R.specularColorMap.channel),specularIntensityMapUv:ot&&w(R.specularIntensityMap.channel),transmissionMapUv:W&&w(R.transmissionMap.channel),thicknessMapUv:we&&w(R.thicknessMap.channel),alphaMapUv:Ge&&w(R.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(Le||jt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!pe.attributes.uv&&(Lt||Ge),fog:!!ue,useFog:R.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:He,skinning:ce.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:j,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:rt,decodeVideoTexture:Lt&&R.map.isVideoTexture===!0&&Ct.getTransfer(R.map.colorSpace)===kt,decodeVideoTextureEmissive:Fe&&R.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(R.emissiveMap.colorSpace)===kt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ra,flipSided:R.side===Hn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ve&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&R.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function v(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const F in R.defines)D.push(F),D.push(R.defines[F]);return R.isRawShaderMaterial===!1&&(G(D,R),P(D,R),D.push(o.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function G(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function P(R,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),R.push(h.mask)}function U(R){const D=T[R.type];let F;if(D){const de=wi[D];F=iM.clone(de.uniforms)}else F=R.uniforms;return F}function X(R,D){let F;for(let de=0,ce=x.length;de<ce;de++){const ue=x[de];if(ue.cacheKey===D){F=ue,++F.usedTimes;break}}return F===void 0&&(F=new UA(o,D,R,u),x.push(F)),F}function k(R){if(--R.usedTimes===0){const D=x.indexOf(R);x[D]=x[x.length-1],x.pop(),R.destroy()}}function I(R){m.remove(R)}function $(){m.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:U,acquireProgram:X,releaseProgram:k,releaseShaderCache:I,programs:x,dispose:$}}function zA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function BA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function R_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function w_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(y,S,M,T,w,b){let v=o[t];return v===void 0?(v={id:y.id,object:y,geometry:S,material:M,groupOrder:T,renderOrder:y.renderOrder,z:w,group:b},o[t]=v):(v.id=y.id,v.object=y,v.geometry=S,v.material=M,v.groupOrder=T,v.renderOrder=y.renderOrder,v.z=w,v.group=b),t++,v}function h(y,S,M,T,w,b){const v=d(y,S,M,T,w,b);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(y,S,M,T,w,b){const v=d(y,S,M,T,w,b);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(y,S){i.length>1&&i.sort(y||BA),r.length>1&&r.sort(S||R_),l.length>1&&l.sort(S||R_)}function x(){for(let y=t,S=o.length;y<S;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:x,sort:p}}function FA(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new w_,o.set(r,[d])):l>=u.length?(d=new w_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function IA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ee,color:new At};break;case"SpotLight":i={position:new ee,direction:new ee,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return o[t.id]=i,i}}}function HA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let kA=0;function GA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function VA(o){const t=new IA,i=HA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ee);const l=new ee,u=new Jt,d=new Jt;function h(p){let x=0,y=0,S=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,T=0,w=0,b=0,v=0,G=0,P=0,U=0,X=0,k=0,I=0;p.sort(GA);for(let R=0,D=p.length;R<D;R++){const F=p[R],de=F.color,ce=F.intensity,ue=F.distance,pe=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)x+=de.r*ce,y+=de.g*ce,S+=de.b*ce;else if(F.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(F.sh.coefficients[O],ce);I++}else if(F.isDirectionalLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const q=F.shadow,Z=i.get(F);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=pe,r.directionalShadowMatrix[M]=F.shadow.matrix,G++}r.directional[M]=O,M++}else if(F.isSpotLight){const O=t.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(de).multiplyScalar(ce),O.distance=ue,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,r.spot[w]=O;const q=F.shadow;if(F.map&&(r.spotLightMap[X]=F.map,X++,q.updateMatrices(F),F.castShadow&&k++),r.spotLightMatrix[w]=q.matrix,F.castShadow){const Z=i.get(F);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.spotShadow[w]=Z,r.spotShadowMap[w]=pe,U++}w++}else if(F.isRectAreaLight){const O=t.get(F);O.color.copy(de).multiplyScalar(ce),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),r.rectArea[b]=O,b++}else if(F.isPointLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const q=F.shadow,Z=i.get(F);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,r.pointShadow[T]=Z,r.pointShadowMap[T]=pe,r.pointShadowMatrix[T]=F.shadow.matrix,P++}r.point[T]=O,T++}else if(F.isHemisphereLight){const O=t.get(F);O.skyColor.copy(F.color).multiplyScalar(ce),O.groundColor.copy(F.groundColor).multiplyScalar(ce),r.hemi[v]=O,v++}}b>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=y,r.ambient[2]=S;const $=r.hash;($.directionalLength!==M||$.pointLength!==T||$.spotLength!==w||$.rectAreaLength!==b||$.hemiLength!==v||$.numDirectionalShadows!==G||$.numPointShadows!==P||$.numSpotShadows!==U||$.numSpotMaps!==X||$.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=b,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=G,r.directionalShadowMap.length=G,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=G,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=U+X-k,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=I,$.directionalLength=M,$.pointLength=T,$.spotLength=w,$.rectAreaLength=b,$.hemiLength=v,$.numDirectionalShadows=G,$.numPointShadows=P,$.numSpotShadows=U,$.numSpotMaps=X,$.numLightProbes=I,r.version=kA++)}function m(p,x){let y=0,S=0,M=0,T=0,w=0;const b=x.matrixWorldInverse;for(let v=0,G=p.length;v<G;v++){const P=p[v];if(P.isDirectionalLight){const U=r.directional[y];U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),y++}else if(P.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(b),U.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(b),M++}else if(P.isRectAreaLight){const U=r.rectArea[T];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(b),d.identity(),u.copy(P.matrixWorld),u.premultiply(b),d.extractRotation(u),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),T++}else if(P.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(b),S++}else if(P.isHemisphereLight){const U=r.hemi[w];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(b),w++}}}return{setup:h,setupView:m,state:r}}function C_(o){const t=new VA(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function d(x){r.push(x)}function h(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function jA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new C_(o),t.set(l,[h])):u>=d.length?(h=new C_(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const XA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qA(o,t,i){let r=new Lh;const l=new Dt,u=new Dt,d=new Gt,h=new pM({depthPacking:fS}),m=new mM,p={},x=i.maxTextureSize,y={[ja]:Hn,[Hn]:ja,[ra]:ra},S=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:XA,fragmentShader:WA}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new yi;T.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ui(T,S),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=B_;let v=this.type;this.render=function(k,I,$){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||k.length===0)return;const R=o.getRenderTarget(),D=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),de=o.state;de.setBlending(Ga),de.buffers.depth.getReversed()?de.buffers.color.setClear(0,0,0,0):de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const ce=v!==aa&&this.type===aa,ue=v===aa&&this.type!==aa;for(let pe=0,O=k.length;pe<O;pe++){const q=k[pe],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const oe=Z.getFrameExtents();if(l.multiply(oe),u.copy(Z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/oe.x),l.x=u.x*oe.x,Z.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/oe.y),l.y=u.y*oe.y,Z.mapSize.y=u.y)),Z.map===null||ce===!0||ue===!0){const L=this.type!==aa?{minFilter:xi,magFilter:xi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Er(l.x,l.y,L),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const me=Z.getViewportCount();for(let L=0;L<me;L++){const j=Z.getViewport(L);d.set(u.x*j.x,u.y*j.y,u.x*j.z,u.y*j.w),de.viewport(d),Z.updateMatrices(q,L),r=Z.getFrustum(),U(I,$,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===aa&&G(Z,$),Z.needsUpdate=!1}v=this.type,b.needsUpdate=!1,o.setRenderTarget(R,D,F)};function G(k,I){const $=t.update(w);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Er(l.x,l.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(I,null,$,S,w,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(I,null,$,M,w,null)}function P(k,I,$,R){let D=null;const F=$.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(F!==void 0)D=F;else if(D=$.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const de=D.uuid,ce=I.uuid;let ue=p[de];ue===void 0&&(ue={},p[de]=ue);let pe=ue[ce];pe===void 0&&(pe=D.clone(),ue[ce]=pe,I.addEventListener("dispose",X)),D=pe}if(D.visible=I.visible,D.wireframe=I.wireframe,R===aa?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:y[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,$.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const de=o.properties.get(D);de.light=$}return D}function U(k,I,$,R,D){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&D===aa)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,k.matrixWorld);const ce=t.update(k),ue=k.material;if(Array.isArray(ue)){const pe=ce.groups;for(let O=0,q=pe.length;O<q;O++){const Z=pe[O],oe=ue[Z.materialIndex];if(oe&&oe.visible){const me=P(k,oe,R,D);k.onBeforeShadow(o,k,I,$,ce,me,Z),o.renderBufferDirect($,null,ce,me,k,Z),k.onAfterShadow(o,k,I,$,ce,me,Z)}}}else if(ue.visible){const pe=P(k,ue,R,D);k.onBeforeShadow(o,k,I,$,ce,pe,null),o.renderBufferDirect($,null,ce,pe,k,null),k.onAfterShadow(o,k,I,$,ce,pe,null)}}const de=k.children;for(let ce=0,ue=de.length;ce<ue;ce++)U(de[ce],I,$,R,D)}function X(k){k.target.removeEventListener("dispose",X);for(const $ in p){const R=p[$],D=k.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const YA={[zd]:Bd,[Fd]:kd,[Id]:Gd,[Rs]:Hd,[Bd]:zd,[kd]:Fd,[Gd]:Id,[Hd]:Rs};function ZA(o,t){function i(){let W=!1;const we=new Gt;let Ue=null;const Ge=new Gt(0,0,0,0);return{setMask:function(Ae){Ue!==Ae&&!W&&(o.colorMask(Ae,Ae,Ae,Ae),Ue=Ae)},setLocked:function(Ae){W=Ae},setClear:function(Ae,Me,Ve,rt,Pt){Pt===!0&&(Ae*=rt,Me*=rt,Ve*=rt),we.set(Ae,Me,Ve,rt),Ge.equals(we)===!1&&(o.clearColor(Ae,Me,Ve,rt),Ge.copy(we))},reset:function(){W=!1,Ue=null,Ge.set(-1,0,0,0)}}}function r(){let W=!1,we=!1,Ue=null,Ge=null,Ae=null;return{setReversed:function(Me){if(we!==Me){const Ve=t.get("EXT_clip_control");Me?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),we=Me;const rt=Ae;Ae=null,this.setClear(rt)}},getReversed:function(){return we},setTest:function(Me){Me?ge(o.DEPTH_TEST):He(o.DEPTH_TEST)},setMask:function(Me){Ue!==Me&&!W&&(o.depthMask(Me),Ue=Me)},setFunc:function(Me){if(we&&(Me=YA[Me]),Ge!==Me){switch(Me){case zd:o.depthFunc(o.NEVER);break;case Bd:o.depthFunc(o.ALWAYS);break;case Fd:o.depthFunc(o.LESS);break;case Rs:o.depthFunc(o.LEQUAL);break;case Id:o.depthFunc(o.EQUAL);break;case Hd:o.depthFunc(o.GEQUAL);break;case kd:o.depthFunc(o.GREATER);break;case Gd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ge=Me}},setLocked:function(Me){W=Me},setClear:function(Me){Ae!==Me&&(we&&(Me=1-Me),o.clearDepth(Me),Ae=Me)},reset:function(){W=!1,Ue=null,Ge=null,Ae=null,we=!1}}}function l(){let W=!1,we=null,Ue=null,Ge=null,Ae=null,Me=null,Ve=null,rt=null,Pt=null;return{setTest:function(Et){W||(Et?ge(o.STENCIL_TEST):He(o.STENCIL_TEST))},setMask:function(Et){we!==Et&&!W&&(o.stencilMask(Et),we=Et)},setFunc:function(Et,Cn,ei){(Ue!==Et||Ge!==Cn||Ae!==ei)&&(o.stencilFunc(Et,Cn,ei),Ue=Et,Ge=Cn,Ae=ei)},setOp:function(Et,Cn,ei){(Me!==Et||Ve!==Cn||rt!==ei)&&(o.stencilOp(Et,Cn,ei),Me=Et,Ve=Cn,rt=ei)},setLocked:function(Et){W=Et},setClear:function(Et){Pt!==Et&&(o.clearStencil(Et),Pt=Et)},reset:function(){W=!1,we=null,Ue=null,Ge=null,Ae=null,Me=null,Ve=null,rt=null,Pt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},y={},S=new WeakMap,M=[],T=null,w=!1,b=null,v=null,G=null,P=null,U=null,X=null,k=null,I=new At(0,0,0),$=0,R=!1,D=null,F=null,de=null,ce=null,ue=null;const pe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,q=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=q>=2);let oe=null,me={};const L=o.getParameter(o.SCISSOR_BOX),j=o.getParameter(o.VIEWPORT),_e=new Gt().fromArray(L),Te=new Gt().fromArray(j);function K(W,we,Ue,Ge){const Ae=new Uint8Array(4),Me=o.createTexture();o.bindTexture(W,Me),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ve=0;Ve<Ue;Ve++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,Ge,0,o.RGBA,o.UNSIGNED_BYTE,Ae):o.texImage2D(we+Ve,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ae);return Me}const xe={};xe[o.TEXTURE_2D]=K(o.TEXTURE_2D,o.TEXTURE_2D,1),xe[o.TEXTURE_CUBE_MAP]=K(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[o.TEXTURE_2D_ARRAY]=K(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xe[o.TEXTURE_3D]=K(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ge(o.DEPTH_TEST),d.setFunc(Rs),Ne(!1),Le(Rv),ge(o.CULL_FACE),ut(Ga);function ge(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function He(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function Oe(W,we){return y[W]!==we?(o.bindFramebuffer(W,we),y[W]=we,W===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=we),W===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=we),!0):!1}function Je(W,we){let Ue=M,Ge=!1;if(W){Ue=S.get(we),Ue===void 0&&(Ue=[],S.set(we,Ue));const Ae=W.textures;if(Ue.length!==Ae.length||Ue[0]!==o.COLOR_ATTACHMENT0){for(let Me=0,Ve=Ae.length;Me<Ve;Me++)Ue[Me]=o.COLOR_ATTACHMENT0+Me;Ue.length=Ae.length,Ge=!0}}else Ue[0]!==o.BACK&&(Ue[0]=o.BACK,Ge=!0);Ge&&o.drawBuffers(Ue)}function Lt(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const ct={[xr]:o.FUNC_ADD,[By]:o.FUNC_SUBTRACT,[Fy]:o.FUNC_REVERSE_SUBTRACT};ct[Iy]=o.MIN,ct[Hy]=o.MAX;const H={[ky]:o.ZERO,[Gy]:o.ONE,[Vy]:o.SRC_COLOR,[Od]:o.SRC_ALPHA,[Zy]:o.SRC_ALPHA_SATURATE,[qy]:o.DST_COLOR,[Xy]:o.DST_ALPHA,[jy]:o.ONE_MINUS_SRC_COLOR,[Pd]:o.ONE_MINUS_SRC_ALPHA,[Yy]:o.ONE_MINUS_DST_COLOR,[Wy]:o.ONE_MINUS_DST_ALPHA,[Ky]:o.CONSTANT_COLOR,[Qy]:o.ONE_MINUS_CONSTANT_COLOR,[Jy]:o.CONSTANT_ALPHA,[$y]:o.ONE_MINUS_CONSTANT_ALPHA};function ut(W,we,Ue,Ge,Ae,Me,Ve,rt,Pt,Et){if(W===Ga){w===!0&&(He(o.BLEND),w=!1);return}if(w===!1&&(ge(o.BLEND),w=!0),W!==zy){if(W!==b||Et!==R){if((v!==xr||U!==xr)&&(o.blendEquation(o.FUNC_ADD),v=xr,U=xr),Et)switch(W){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wv:o.blendFunc(o.ONE,o.ONE);break;case Cv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Dv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Cv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}G=null,P=null,X=null,k=null,I.set(0,0,0),$=0,b=W,R=Et}return}Ae=Ae||we,Me=Me||Ue,Ve=Ve||Ge,(we!==v||Ae!==U)&&(o.blendEquationSeparate(ct[we],ct[Ae]),v=we,U=Ae),(Ue!==G||Ge!==P||Me!==X||Ve!==k)&&(o.blendFuncSeparate(H[Ue],H[Ge],H[Me],H[Ve]),G=Ue,P=Ge,X=Me,k=Ve),(rt.equals(I)===!1||Pt!==$)&&(o.blendColor(rt.r,rt.g,rt.b,Pt),I.copy(rt),$=Pt),b=W,R=!1}function B(W,we){W.side===ra?He(o.CULL_FACE):ge(o.CULL_FACE);let Ue=W.side===Hn;we&&(Ue=!Ue),Ne(Ue),W.blending===Es&&W.transparent===!1?ut(Ga):ut(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),u.setMask(W.colorWrite);const Ge=W.stencilWrite;h.setTest(Ge),Ge&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Fe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ge(o.SAMPLE_ALPHA_TO_COVERAGE):He(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(W){D!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),D=W)}function Le(W){W!==Oy?(ge(o.CULL_FACE),W!==F&&(W===Rv?o.cullFace(o.BACK):W===Py?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):He(o.CULL_FACE),F=W}function ht(W){W!==de&&(O&&o.lineWidth(W),de=W)}function Fe(W,we,Ue){W?(ge(o.POLYGON_OFFSET_FILL),(ce!==we||ue!==Ue)&&(o.polygonOffset(we,Ue),ce=we,ue=Ue)):He(o.POLYGON_OFFSET_FILL)}function at(W){W?ge(o.SCISSOR_TEST):He(o.SCISSOR_TEST)}function Vt(W){W===void 0&&(W=o.TEXTURE0+pe-1),oe!==W&&(o.activeTexture(W),oe=W)}function jt(W,we,Ue){Ue===void 0&&(oe===null?Ue=o.TEXTURE0+pe-1:Ue=oe);let Ge=me[Ue];Ge===void 0&&(Ge={type:void 0,texture:void 0},me[Ue]=Ge),(Ge.type!==W||Ge.texture!==we)&&(oe!==Ue&&(o.activeTexture(Ue),oe=Ue),o.bindTexture(W,we||xe[W]),Ge.type=W,Ge.texture=we)}function N(){const W=me[oe];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function te(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ye(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ze(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(W){_e.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),_e.copy(W))}function Qe(W){Te.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Te.copy(W))}function ke(W,we){let Ue=p.get(we);Ue===void 0&&(Ue=new WeakMap,p.set(we,Ue));let Ge=Ue.get(W);Ge===void 0&&(Ge=o.getUniformBlockIndex(we,W.name),Ue.set(W,Ge))}function Pe(W,we){const Ge=p.get(we).get(W);m.get(we)!==Ge&&(o.uniformBlockBinding(we,Ge,W.__bindingPointIndex),m.set(we,Ge))}function ot(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},oe=null,me={},y={},S=new WeakMap,M=[],T=null,w=!1,b=null,v=null,G=null,P=null,U=null,X=null,k=null,I=new At(0,0,0),$=0,R=!1,D=null,F=null,de=null,ce=null,ue=null,_e.set(0,0,o.canvas.width,o.canvas.height),Te.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ge,disable:He,bindFramebuffer:Oe,drawBuffers:Je,useProgram:Lt,setBlending:ut,setMaterial:B,setFlipSided:Ne,setCullFace:Le,setLineWidth:ht,setPolygonOffset:Fe,setScissorTest:at,activeTexture:Vt,bindTexture:jt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:te,texImage2D:Ze,texImage3D:Re,updateUBOMapping:ke,uniformBlockBinding:Pe,texStorage2D:Ce,texStorage3D:Ye,texSubImage2D:ve,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ke,scissor:De,viewport:Qe,reset:ot}}function KA(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,x=new WeakMap;let y;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,E){return M?new OffscreenCanvas(N,E):zc("canvas")}function w(N,E,te){let ve=1;const Ee=jt(N);if((Ee.width>te||Ee.height>te)&&(ve=te/Math.max(Ee.width,Ee.height)),ve<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const fe=Math.floor(ve*Ee.width),Ke=Math.floor(ve*Ee.height);y===void 0&&(y=T(fe,Ke));const Ce=E?T(fe,Ke):y;return Ce.width=fe,Ce.height=Ke,Ce.getContext("2d").drawImage(N,0,0,fe,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+fe+"x"+Ke+")."),Ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),N;return N}function b(N){return N.generateMipmaps}function v(N){o.generateMipmap(N)}function G(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(N,E,te,ve,Ee=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe=E;if(E===o.RED&&(te===o.FLOAT&&(fe=o.R32F),te===o.HALF_FLOAT&&(fe=o.R16F),te===o.UNSIGNED_BYTE&&(fe=o.R8)),E===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(fe=o.R8UI),te===o.UNSIGNED_SHORT&&(fe=o.R16UI),te===o.UNSIGNED_INT&&(fe=o.R32UI),te===o.BYTE&&(fe=o.R8I),te===o.SHORT&&(fe=o.R16I),te===o.INT&&(fe=o.R32I)),E===o.RG&&(te===o.FLOAT&&(fe=o.RG32F),te===o.HALF_FLOAT&&(fe=o.RG16F),te===o.UNSIGNED_BYTE&&(fe=o.RG8)),E===o.RG_INTEGER&&(te===o.UNSIGNED_BYTE&&(fe=o.RG8UI),te===o.UNSIGNED_SHORT&&(fe=o.RG16UI),te===o.UNSIGNED_INT&&(fe=o.RG32UI),te===o.BYTE&&(fe=o.RG8I),te===o.SHORT&&(fe=o.RG16I),te===o.INT&&(fe=o.RG32I)),E===o.RGB_INTEGER&&(te===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),te===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),te===o.UNSIGNED_INT&&(fe=o.RGB32UI),te===o.BYTE&&(fe=o.RGB8I),te===o.SHORT&&(fe=o.RGB16I),te===o.INT&&(fe=o.RGB32I)),E===o.RGBA_INTEGER&&(te===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),te===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),te===o.UNSIGNED_INT&&(fe=o.RGBA32UI),te===o.BYTE&&(fe=o.RGBA8I),te===o.SHORT&&(fe=o.RGBA16I),te===o.INT&&(fe=o.RGBA32I)),E===o.RGB&&te===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),E===o.RGBA){const Ke=Ee?Oc:Ct.getTransfer(ve);te===o.FLOAT&&(fe=o.RGBA32F),te===o.HALF_FLOAT&&(fe=o.RGBA16F),te===o.UNSIGNED_BYTE&&(fe=Ke===kt?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),fe}function U(N,E){let te;return N?E===null||E===br||E===Io?te=o.DEPTH24_STENCIL8:E===sa?te=o.DEPTH32F_STENCIL8:E===Fo&&(te=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===br||E===Io?te=o.DEPTH_COMPONENT24:E===sa?te=o.DEPTH_COMPONENT32F:E===Fo&&(te=o.DEPTH_COMPONENT16),te}function X(N,E){return b(N)===!0||N.isFramebufferTexture&&N.minFilter!==xi&&N.minFilter!==Ci?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function k(N){const E=N.target;E.removeEventListener("dispose",k),$(E),E.isVideoTexture&&x.delete(E)}function I(N){const E=N.target;E.removeEventListener("dispose",I),D(E)}function $(N){const E=r.get(N);if(E.__webglInit===void 0)return;const te=N.source,ve=S.get(te);if(ve){const Ee=ve[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&R(N),Object.keys(ve).length===0&&S.delete(te)}r.remove(N)}function R(N){const E=r.get(N);o.deleteTexture(E.__webglTexture);const te=N.source,ve=S.get(te);delete ve[E.__cacheKey],d.memory.textures--}function D(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(E.__webglFramebuffer[ve]))for(let Ee=0;Ee<E.__webglFramebuffer[ve].length;Ee++)o.deleteFramebuffer(E.__webglFramebuffer[ve][Ee]);else o.deleteFramebuffer(E.__webglFramebuffer[ve]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ve])}else{if(Array.isArray(E.__webglFramebuffer))for(let ve=0;ve<E.__webglFramebuffer.length;ve++)o.deleteFramebuffer(E.__webglFramebuffer[ve]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ve=0;ve<E.__webglColorRenderbuffer.length;ve++)E.__webglColorRenderbuffer[ve]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ve]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const te=N.textures;for(let ve=0,Ee=te.length;ve<Ee;ve++){const fe=r.get(te[ve]);fe.__webglTexture&&(o.deleteTexture(fe.__webglTexture),d.memory.textures--),r.remove(te[ve])}r.remove(N)}let F=0;function de(){F=0}function ce(){const N=F;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),F+=1,N}function ue(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function pe(N,E){const te=r.get(N);if(N.isVideoTexture&&at(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&te.__version!==N.version){const ve=N.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(te,N,E);return}}else N.isExternalTexture&&(te.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+E)}function O(N,E){const te=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){xe(te,N,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+E)}function q(N,E){const te=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){xe(te,N,E);return}i.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+E)}function Z(N,E){const te=r.get(N);if(N.version>0&&te.__version!==N.version){ge(te,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+E)}const oe={[Xd]:o.REPEAT,[Sr]:o.CLAMP_TO_EDGE,[Wd]:o.MIRRORED_REPEAT},me={[xi]:o.NEAREST,[cS]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[nd]:o.LINEAR_MIPMAP_NEAREST,[Mr]:o.LINEAR_MIPMAP_LINEAR},L={[pS]:o.NEVER,[yS]:o.ALWAYS,[mS]:o.LESS,[Z_]:o.LEQUAL,[gS]:o.EQUAL,[xS]:o.GEQUAL,[vS]:o.GREATER,[_S]:o.NOTEQUAL};function j(N,E){if(E.type===sa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ci||E.magFilter===nd||E.magFilter===ac||E.magFilter===Mr||E.minFilter===Ci||E.minFilter===nd||E.minFilter===ac||E.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,oe[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,oe[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,oe[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,me[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,me[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===xi||E.minFilter!==ac&&E.minFilter!==Mr||E.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const te=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function _e(N,E){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",k));const ve=E.source;let Ee=S.get(ve);Ee===void 0&&(Ee={},S.set(ve,Ee));const fe=ue(E);if(fe!==N.__cacheKey){Ee[fe]===void 0&&(Ee[fe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,te=!0),Ee[fe].usedTimes++;const Ke=Ee[N.__cacheKey];Ke!==void 0&&(Ee[N.__cacheKey].usedTimes--,Ke.usedTimes===0&&R(E)),N.__cacheKey=fe,N.__webglTexture=Ee[fe].texture}return te}function Te(N,E,te){return Math.floor(Math.floor(N/te)/E)}function K(N,E,te,ve){const fe=N.updateRanges;if(fe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,te,ve,E.data);else{fe.sort((Re,De)=>Re.start-De.start);let Ke=0;for(let Re=1;Re<fe.length;Re++){const De=fe[Ke],Qe=fe[Re],ke=De.start+De.count,Pe=Te(Qe.start,E.width,4),ot=Te(De.start,E.width,4);Qe.start<=ke+1&&Pe===ot&&Te(Qe.start+Qe.count-1,E.width,4)===Pe?De.count=Math.max(De.count,Qe.start+Qe.count-De.start):(++Ke,fe[Ke]=Qe)}fe.length=Ke+1;const Ce=o.getParameter(o.UNPACK_ROW_LENGTH),Ye=o.getParameter(o.UNPACK_SKIP_PIXELS),Ze=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Re=0,De=fe.length;Re<De;Re++){const Qe=fe[Re],ke=Math.floor(Qe.start/4),Pe=Math.ceil(Qe.count/4),ot=ke%E.width,W=Math.floor(ke/E.width),we=Pe,Ue=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ot),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ot,W,we,Ue,te,ve,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ce),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ye),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ze)}}function xe(N,E,te){let ve=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=o.TEXTURE_3D);const Ee=_e(N,E),fe=E.source;i.bindTexture(ve,N.__webglTexture,o.TEXTURE0+te);const Ke=r.get(fe);if(fe.version!==Ke.__version||Ee===!0){i.activeTexture(o.TEXTURE0+te);const Ce=Ct.getPrimaries(Ct.workingColorSpace),Ye=E.colorSpace===ka?null:Ct.getPrimaries(E.colorSpace),Ze=E.colorSpace===ka||Ce===Ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Re=w(E.image,!1,l.maxTextureSize);Re=Vt(E,Re);const De=u.convert(E.format,E.colorSpace),Qe=u.convert(E.type);let ke=P(E.internalFormat,De,Qe,E.colorSpace,E.isVideoTexture);j(ve,E);let Pe;const ot=E.mipmaps,W=E.isVideoTexture!==!0,we=Ke.__version===void 0||Ee===!0,Ue=fe.dataReady,Ge=X(E,Re);if(E.isDepthTexture)ke=U(E.format===ko,E.type),we&&(W?i.texStorage2D(o.TEXTURE_2D,1,ke,Re.width,Re.height):i.texImage2D(o.TEXTURE_2D,0,ke,Re.width,Re.height,0,De,Qe,null));else if(E.isDataTexture)if(ot.length>0){W&&we&&i.texStorage2D(o.TEXTURE_2D,Ge,ke,ot[0].width,ot[0].height);for(let Ae=0,Me=ot.length;Ae<Me;Ae++)Pe=ot[Ae],W?Ue&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,Pe.width,Pe.height,De,Qe,Pe.data):i.texImage2D(o.TEXTURE_2D,Ae,ke,Pe.width,Pe.height,0,De,Qe,Pe.data);E.generateMipmaps=!1}else W?(we&&i.texStorage2D(o.TEXTURE_2D,Ge,ke,Re.width,Re.height),Ue&&K(E,Re,De,Qe)):i.texImage2D(o.TEXTURE_2D,0,ke,Re.width,Re.height,0,De,Qe,Re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ge,ke,ot[0].width,ot[0].height,Re.depth);for(let Ae=0,Me=ot.length;Ae<Me;Ae++)if(Pe=ot[Ae],E.format!==_i)if(De!==null)if(W){if(Ue)if(E.layerUpdates.size>0){const Ve=r_(Pe.width,Pe.height,E.format,E.type);for(const rt of E.layerUpdates){const Pt=Pe.data.subarray(rt*Ve/Pe.data.BYTES_PER_ELEMENT,(rt+1)*Ve/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,rt,Pe.width,Pe.height,1,De,Pt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,0,Pe.width,Pe.height,Re.depth,De,Pe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ae,ke,Pe.width,Pe.height,Re.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ue&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,0,Pe.width,Pe.height,Re.depth,De,Qe,Pe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ae,ke,Pe.width,Pe.height,Re.depth,0,De,Qe,Pe.data)}else{W&&we&&i.texStorage2D(o.TEXTURE_2D,Ge,ke,ot[0].width,ot[0].height);for(let Ae=0,Me=ot.length;Ae<Me;Ae++)Pe=ot[Ae],E.format!==_i?De!==null?W?Ue&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ae,0,0,Pe.width,Pe.height,De,Pe.data):i.compressedTexImage2D(o.TEXTURE_2D,Ae,ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ue&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,Pe.width,Pe.height,De,Qe,Pe.data):i.texImage2D(o.TEXTURE_2D,Ae,ke,Pe.width,Pe.height,0,De,Qe,Pe.data)}else if(E.isDataArrayTexture)if(W){if(we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ge,ke,Re.width,Re.height,Re.depth),Ue)if(E.layerUpdates.size>0){const Ae=r_(Re.width,Re.height,E.format,E.type);for(const Me of E.layerUpdates){const Ve=Re.data.subarray(Me*Ae/Re.data.BYTES_PER_ELEMENT,(Me+1)*Ae/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Me,Re.width,Re.height,1,De,Qe,Ve)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,De,Qe,Re.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ke,Re.width,Re.height,Re.depth,0,De,Qe,Re.data);else if(E.isData3DTexture)W?(we&&i.texStorage3D(o.TEXTURE_3D,Ge,ke,Re.width,Re.height,Re.depth),Ue&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,De,Qe,Re.data)):i.texImage3D(o.TEXTURE_3D,0,ke,Re.width,Re.height,Re.depth,0,De,Qe,Re.data);else if(E.isFramebufferTexture){if(we)if(W)i.texStorage2D(o.TEXTURE_2D,Ge,ke,Re.width,Re.height);else{let Ae=Re.width,Me=Re.height;for(let Ve=0;Ve<Ge;Ve++)i.texImage2D(o.TEXTURE_2D,Ve,ke,Ae,Me,0,De,Qe,null),Ae>>=1,Me>>=1}}else if(ot.length>0){if(W&&we){const Ae=jt(ot[0]);i.texStorage2D(o.TEXTURE_2D,Ge,ke,Ae.width,Ae.height)}for(let Ae=0,Me=ot.length;Ae<Me;Ae++)Pe=ot[Ae],W?Ue&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,De,Qe,Pe):i.texImage2D(o.TEXTURE_2D,Ae,ke,De,Qe,Pe);E.generateMipmaps=!1}else if(W){if(we){const Ae=jt(Re);i.texStorage2D(o.TEXTURE_2D,Ge,ke,Ae.width,Ae.height)}Ue&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,De,Qe,Re)}else i.texImage2D(o.TEXTURE_2D,0,ke,De,Qe,Re);b(E)&&v(ve),Ke.__version=fe.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ge(N,E,te){if(E.image.length!==6)return;const ve=_e(N,E),Ee=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+te);const fe=r.get(Ee);if(Ee.version!==fe.__version||ve===!0){i.activeTexture(o.TEXTURE0+te);const Ke=Ct.getPrimaries(Ct.workingColorSpace),Ce=E.colorSpace===ka?null:Ct.getPrimaries(E.colorSpace),Ye=E.colorSpace===ka||Ke===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const Ze=E.isCompressedTexture||E.image[0].isCompressedTexture,Re=E.image[0]&&E.image[0].isDataTexture,De=[];for(let Me=0;Me<6;Me++)!Ze&&!Re?De[Me]=w(E.image[Me],!0,l.maxCubemapSize):De[Me]=Re?E.image[Me].image:E.image[Me],De[Me]=Vt(E,De[Me]);const Qe=De[0],ke=u.convert(E.format,E.colorSpace),Pe=u.convert(E.type),ot=P(E.internalFormat,ke,Pe,E.colorSpace),W=E.isVideoTexture!==!0,we=fe.__version===void 0||ve===!0,Ue=Ee.dataReady;let Ge=X(E,Qe);j(o.TEXTURE_CUBE_MAP,E);let Ae;if(Ze){W&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ge,ot,Qe.width,Qe.height);for(let Me=0;Me<6;Me++){Ae=De[Me].mipmaps;for(let Ve=0;Ve<Ae.length;Ve++){const rt=Ae[Ve];E.format!==_i?ke!==null?W?Ue&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,0,0,rt.width,rt.height,ke,rt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,ot,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,0,0,rt.width,rt.height,ke,Pe,rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve,ot,rt.width,rt.height,0,ke,Pe,rt.data)}}}else{if(Ae=E.mipmaps,W&&we){Ae.length>0&&Ge++;const Me=jt(De[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ge,ot,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Re){W?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,De[Me].width,De[Me].height,ke,Pe,De[Me].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ot,De[Me].width,De[Me].height,0,ke,Pe,De[Me].data);for(let Ve=0;Ve<Ae.length;Ve++){const Pt=Ae[Ve].image[Me].image;W?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,0,0,Pt.width,Pt.height,ke,Pe,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,ot,Pt.width,Pt.height,0,ke,Pe,Pt.data)}}else{W?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ke,Pe,De[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ot,ke,Pe,De[Me]);for(let Ve=0;Ve<Ae.length;Ve++){const rt=Ae[Ve];W?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,0,0,ke,Pe,rt.image[Me]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ve+1,ot,ke,Pe,rt.image[Me])}}}b(E)&&v(o.TEXTURE_CUBE_MAP),fe.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function He(N,E,te,ve,Ee,fe){const Ke=u.convert(te.format,te.colorSpace),Ce=u.convert(te.type),Ye=P(te.internalFormat,Ke,Ce,te.colorSpace),Ze=r.get(E),Re=r.get(te);if(Re.__renderTarget=E,!Ze.__hasExternalTextures){const De=Math.max(1,E.width>>fe),Qe=Math.max(1,E.height>>fe);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?i.texImage3D(Ee,fe,Ye,De,Qe,E.depth,0,Ke,Ce,null):i.texImage2D(Ee,fe,Ye,De,Qe,0,Ke,Ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Fe(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,Ee,Re.__webglTexture,0,ht(E)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ve,Ee,Re.__webglTexture,fe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Oe(N,E,te){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ve=E.depthTexture,Ee=ve&&ve.isDepthTexture?ve.type:null,fe=U(E.stencilBuffer,Ee),Ke=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=ht(E);Fe(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ce,fe,E.width,E.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ce,fe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,fe,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ke,o.RENDERBUFFER,N)}else{const ve=E.textures;for(let Ee=0;Ee<ve.length;Ee++){const fe=ve[Ee],Ke=u.convert(fe.format,fe.colorSpace),Ce=u.convert(fe.type),Ye=P(fe.internalFormat,Ke,Ce,fe.colorSpace),Ze=ht(E);te&&Fe(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ze,Ye,E.width,E.height):Fe(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ze,Ye,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ye,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Je(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(E.depthTexture);ve.__renderTarget=E,(!ve.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe(E.depthTexture,0);const Ee=ve.__webglTexture,fe=ht(E);if(E.depthTexture.format===Ho)Fe(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0);else if(E.depthTexture.format===ko)Fe(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0,fe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Lt(N){const E=r.get(N),te=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ve=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ve){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ve.removeEventListener("dispose",Ee)};ve.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=ve}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const ve=N.texture.mipmaps;ve&&ve.length>0?Je(E.__webglFramebuffer[0],N):Je(E.__webglFramebuffer,N)}else if(te){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]===void 0)E.__webglDepthbuffer[ve]=o.createRenderbuffer(),Oe(E.__webglDepthbuffer[ve],N,!1);else{const Ee=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[ve];o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,fe)}}else{const ve=N.texture.mipmaps;if(ve&&ve.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Oe(E.__webglDepthbuffer,N,!1);else{const Ee=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,fe)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ct(N,E,te){const ve=r.get(N);E!==void 0&&He(ve.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&Lt(N)}function H(N){const E=N.texture,te=r.get(N),ve=r.get(E);N.addEventListener("dispose",I);const Ee=N.textures,fe=N.isWebGLCubeRenderTarget===!0,Ke=Ee.length>1;if(Ke||(ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture()),ve.__version=E.version,d.memory.textures++),fe){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let Ye=0;Ye<E.mipmaps.length;Ye++)te.__webglFramebuffer[Ce][Ye]=o.createFramebuffer()}else te.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(Ke)for(let Ce=0,Ye=Ee.length;Ce<Ye;Ce++){const Ze=r.get(Ee[Ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&Fe(N)===!1){te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Ee.length;Ce++){const Ye=Ee[Ce];te.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[Ce]);const Ze=u.convert(Ye.format,Ye.colorSpace),Re=u.convert(Ye.type),De=P(Ye.internalFormat,Ze,Re,Ye.colorSpace,N.isXRRenderTarget===!0),Qe=ht(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qe,De,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,te.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),Oe(te.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(fe){i.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),j(o.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)He(te.__webglFramebuffer[Ce][Ye],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ye);else He(te.__webglFramebuffer[Ce],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);b(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Ce=0,Ye=Ee.length;Ce<Ye;Ce++){const Ze=Ee[Ce],Re=r.get(Ze);let De=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,Re.__webglTexture),j(De,Ze),He(te.__webglFramebuffer,N,Ze,o.COLOR_ATTACHMENT0+Ce,De,0),b(Ze)&&v(De)}i.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,ve.__webglTexture),j(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)He(te.__webglFramebuffer[Ye],N,E,o.COLOR_ATTACHMENT0,Ce,Ye);else He(te.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Ce,0);b(E)&&v(Ce),i.unbindTexture()}N.depthBuffer&&Lt(N)}function ut(N){const E=N.textures;for(let te=0,ve=E.length;te<ve;te++){const Ee=E[te];if(b(Ee)){const fe=G(N),Ke=r.get(Ee).__webglTexture;i.bindTexture(fe,Ke),v(fe),i.unbindTexture()}}}const B=[],Ne=[];function Le(N){if(N.samples>0){if(Fe(N)===!1){const E=N.textures,te=N.width,ve=N.height;let Ee=o.COLOR_BUFFER_BIT;const fe=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ke=r.get(N),Ce=E.length>1;if(Ce)for(let Ze=0;Ze<E.length;Ze++)i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ze,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ze,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Ye=N.texture.mipmaps;Ye&&Ye.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ze=0;Ze<E.length;Ze++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const Re=r.get(E[Ze]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Re,0)}o.blitFramebuffer(0,0,te,ve,0,0,te,ve,Ee,o.NEAREST),m===!0&&(B.length=0,Ne.length=0,B.push(o.COLOR_ATTACHMENT0+Ze),N.depthBuffer&&N.resolveDepthBuffer===!1&&(B.push(fe),Ne.push(fe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,B))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let Ze=0;Ze<E.length;Ze++){i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ze,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const Re=r.get(E[Ze]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ze,o.TEXTURE_2D,Re,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ht(N){return Math.min(l.maxSamples,N.samples)}function Fe(N){const E=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function at(N){const E=d.render.frame;x.get(N)!==E&&(x.set(N,E),N.update())}function Vt(N,E){const te=N.colorSpace,ve=N.format,Ee=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||te!==Ds&&te!==ka&&(Ct.getTransfer(te)===kt?(ve!==_i||Ee!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),E}function jt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=de,this.setTexture2D=pe,this.setTexture2DArray=O,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=ct,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Fe}function QA(o,t){function i(r,l=ka){let u;const d=Ct.getTransfer(l);if(r===Ni)return o.UNSIGNED_BYTE;if(r===bh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Eh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===V_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===k_)return o.BYTE;if(r===G_)return o.SHORT;if(r===Fo)return o.UNSIGNED_SHORT;if(r===Mh)return o.INT;if(r===br)return o.UNSIGNED_INT;if(r===sa)return o.FLOAT;if(r===Vo)return o.HALF_FLOAT;if(r===j_)return o.ALPHA;if(r===X_)return o.RGB;if(r===_i)return o.RGBA;if(r===Ho)return o.DEPTH_COMPONENT;if(r===ko)return o.DEPTH_STENCIL;if(r===W_)return o.RED;if(r===Th)return o.RED_INTEGER;if(r===q_)return o.RG;if(r===Ah)return o.RG_INTEGER;if(r===Rh)return o.RGBA_INTEGER;if(r===wc||r===Cc||r===Dc||r===Uc)if(d===kt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qd||r===Yd||r===Zd||r===Kd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===qd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qd||r===Jd||r===$d)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Qd||r===Jd)return d===kt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===$d)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===eh||r===th||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===eh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===th)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ih)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ah)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ch)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lc||r===ph||r===mh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Lc)return d===kt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ph)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Y_||r===gh||r===vh||r===_h)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Lc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===gh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_h)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Io?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class m0 extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const JA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$A=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new m0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Xa({vertexShader:JA,fragmentShader:$A,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ui(new kc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t1 extends Ls{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,y=null,S=null,M=null,T=null;const w=new e1,b={},v=i.getContextAttributes();let G=null,P=null;const U=[],X=[],k=new Dt;let I=null;const $=new $n;$.viewport=new Gt;const R=new $n;R.viewport=new Gt;const D=[$,R],F=new SM;let de=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let xe=U[K];return xe===void 0&&(xe=new bd,U[K]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(K){let xe=U[K];return xe===void 0&&(xe=new bd,U[K]=xe),xe.getGripSpace()},this.getHand=function(K){let xe=U[K];return xe===void 0&&(xe=new bd,U[K]=xe),xe.getHandSpace()};function ue(K){const xe=X.indexOf(K.inputSource);if(xe===-1)return;const ge=U[xe];ge!==void 0&&(ge.update(K.inputSource,K.frame,p||d),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function pe(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",pe),l.removeEventListener("inputsourceschange",O);for(let K=0;K<U.length;K++){const xe=X[K];xe!==null&&(X[K]=null,U[K].disconnect(xe))}de=null,ce=null,w.reset();for(const K in b)delete b[K];t.setRenderTarget(G),M=null,S=null,y=null,l=null,P=null,Te.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(G=t.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",pe),l.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&(y=new XRWebGLBinding(l,i)),y!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,He=null,Oe=null;v.depth&&(Oe=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ge=v.stencil?ko:Ho,He=v.stencil?Io:br);const Je={colorFormat:i.RGBA8,depthFormat:Oe,scaleFactor:u};S=y.createProjectionLayer(Je),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),P=new Er(S.textureWidth,S.textureHeight,{format:_i,type:Ni,depthTexture:new o0(S.textureWidth,S.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const ge={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ge),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Er(M.framebufferWidth,M.framebufferHeight,{format:_i,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Te.setContext(l),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function O(K){for(let xe=0;xe<K.removed.length;xe++){const ge=K.removed[xe],He=X.indexOf(ge);He>=0&&(X[He]=null,U[He].disconnect(ge))}for(let xe=0;xe<K.added.length;xe++){const ge=K.added[xe];let He=X.indexOf(ge);if(He===-1){for(let Je=0;Je<U.length;Je++)if(Je>=X.length){X.push(ge),He=Je;break}else if(X[Je]===null){X[Je]=ge,He=Je;break}if(He===-1)break}const Oe=U[He];Oe&&Oe.connect(ge)}}const q=new ee,Z=new ee;function oe(K,xe,ge){q.setFromMatrixPosition(xe.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const He=q.distanceTo(Z),Oe=xe.projectionMatrix.elements,Je=ge.projectionMatrix.elements,Lt=Oe[14]/(Oe[10]-1),ct=Oe[14]/(Oe[10]+1),H=(Oe[9]+1)/Oe[5],ut=(Oe[9]-1)/Oe[5],B=(Oe[8]-1)/Oe[0],Ne=(Je[8]+1)/Je[0],Le=Lt*B,ht=Lt*Ne,Fe=He/(-B+Ne),at=Fe*-B;if(xe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(at),K.translateZ(Fe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Oe[10]===-1)K.projectionMatrix.copy(xe.projectionMatrix),K.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Vt=Lt+Fe,jt=ct+Fe,N=Le-at,E=ht+(He-at),te=H*ct/jt*Vt,ve=ut*ct/jt*Vt;K.projectionMatrix.makePerspective(N,E,te,ve,Vt,jt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function me(K,xe){xe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(xe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let xe=K.near,ge=K.far;w.texture!==null&&(w.depthNear>0&&(xe=w.depthNear),w.depthFar>0&&(ge=w.depthFar)),F.near=R.near=$.near=xe,F.far=R.far=$.far=ge,(de!==F.near||ce!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),de=F.near,ce=F.far),F.layers.mask=K.layers.mask|6,$.layers.mask=F.layers.mask&3,R.layers.mask=F.layers.mask&5;const He=K.parent,Oe=F.cameras;me(F,He);for(let Je=0;Je<Oe.length;Je++)me(Oe[Je],He);Oe.length===2?oe(F,$,R):F.projectionMatrix.copy($.projectionMatrix),L(K,F,He)};function L(K,xe,ge){ge===null?K.matrix.copy(xe.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(xe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(xe.projectionMatrix),K.projectionMatrixInverse.copy(xe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Go*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(K){m=K,S!==null&&(S.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(F)},this.getCameraTexture=function(K){return b[K]};let j=null;function _e(K,xe){if(x=xe.getViewerPose(p||d),T=xe,x!==null){const ge=x.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let He=!1;ge.length!==F.cameras.length&&(F.cameras.length=0,He=!0);for(let ct=0;ct<ge.length;ct++){const H=ge[ct];let ut=null;if(M!==null)ut=M.getViewport(H);else{const Ne=y.getViewSubImage(S,H);ut=Ne.viewport,ct===0&&(t.setRenderTargetTextures(P,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(P))}let B=D[ct];B===void 0&&(B=new $n,B.layers.enable(ct),B.viewport=new Gt,D[ct]=B),B.matrix.fromArray(H.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(H.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(ut.x,ut.y,ut.width,ut.height),ct===0&&(F.matrix.copy(B.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),He===!0&&F.cameras.push(B)}const Oe=l.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&y){const ct=y.getDepthInformation(ge[0]);ct&&ct.isValid&&ct.texture&&w.init(ct,l.renderState)}if(Oe&&Oe.includes("camera-access")&&(t.state.unbindTexture(),y))for(let ct=0;ct<ge.length;ct++){const H=ge[ct].camera;if(H){let ut=b[H];ut||(ut=new m0,b[H]=ut);const B=y.getCameraImage(H);ut.sourceTexture=B}}}for(let ge=0;ge<U.length;ge++){const He=X[ge],Oe=U[ge];He!==null&&Oe!==void 0&&Oe.update(He,xe,p||d)}j&&j(K,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),T=null}const Te=new u0;Te.setAnimationLoop(_e),this.setAnimationLoop=function(K){j=K},this.dispose=function(){}}}const gr=new la,n1=new Jt;function i1(o,t){function i(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function r(b,v){v.color.getRGB(b.fogColor.value,i0(o)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function l(b,v,G,P,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(b,v):v.isMeshToonMaterial?(u(b,v),y(b,v)):v.isMeshPhongMaterial?(u(b,v),x(b,v)):v.isMeshStandardMaterial?(u(b,v),S(b,v),v.isMeshPhysicalMaterial&&M(b,v,U)):v.isMeshMatcapMaterial?(u(b,v),T(b,v)):v.isMeshDepthMaterial?u(b,v):v.isMeshDistanceMaterial?(u(b,v),w(b,v)):v.isMeshNormalMaterial?u(b,v):v.isLineBasicMaterial?(d(b,v),v.isLineDashedMaterial&&h(b,v)):v.isPointsMaterial?m(b,v,G,P):v.isSpriteMaterial?p(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,i(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===Hn&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,i(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===Hn&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,i(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,i(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const G=t.get(v),P=G.envMap,U=G.envMapRotation;P&&(b.envMap.value=P,gr.copy(U),gr.x*=-1,gr.y*=-1,gr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),b.envMapRotation.value.setFromMatrix4(n1.makeRotationFromEuler(gr)),b.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,b.aoMapTransform))}function d(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform))}function h(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function m(b,v,G,P){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*G,b.scale.value=P*.5,v.map&&(b.map.value=v.map,i(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function p(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function x(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function y(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function S(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function M(b,v,G){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=G.texture,b.transmissionSamplerSize.value.set(G.width,G.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,b.specularIntensityMapTransform))}function T(b,v){v.matcap&&(b.matcap.value=v.matcap)}function w(b,v){const G=t.get(v).light;b.referencePosition.value.setFromMatrixPosition(G.matrixWorld),b.nearDistance.value=G.shadow.camera.near,b.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function a1(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(G,P){const U=P.program;r.uniformBlockBinding(G,U)}function p(G,P){let U=l[G.id];U===void 0&&(T(G),U=x(G),l[G.id]=U,G.addEventListener("dispose",b));const X=P.program;r.updateUBOMapping(G,X);const k=t.render.frame;u[G.id]!==k&&(S(G),u[G.id]=k)}function x(G){const P=y();G.__bindingPointIndex=P;const U=o.createBuffer(),X=G.__size,k=G.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,X,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,U),U}function y(){for(let G=0;G<h;G++)if(d.indexOf(G)===-1)return d.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(G){const P=l[G.id],U=G.uniforms,X=G.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let k=0,I=U.length;k<I;k++){const $=Array.isArray(U[k])?U[k]:[U[k]];for(let R=0,D=$.length;R<D;R++){const F=$[R];if(M(F,k,R,X)===!0){const de=F.__offset,ce=Array.isArray(F.value)?F.value:[F.value];let ue=0;for(let pe=0;pe<ce.length;pe++){const O=ce[pe],q=w(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,de+ue,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,ue),ue+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,de,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(G,P,U,X){const k=G.value,I=P+"_"+U;if(X[I]===void 0)return typeof k=="number"||typeof k=="boolean"?X[I]=k:X[I]=k.clone(),!0;{const $=X[I];if(typeof k=="number"||typeof k=="boolean"){if($!==k)return X[I]=k,!0}else if($.equals(k)===!1)return $.copy(k),!0}return!1}function T(G){const P=G.uniforms;let U=0;const X=16;for(let I=0,$=P.length;I<$;I++){const R=Array.isArray(P[I])?P[I]:[P[I]];for(let D=0,F=R.length;D<F;D++){const de=R[D],ce=Array.isArray(de.value)?de.value:[de.value];for(let ue=0,pe=ce.length;ue<pe;ue++){const O=ce[ue],q=w(O),Z=U%X,oe=Z%q.boundary,me=Z+oe;U+=oe,me!==0&&X-me<q.storage&&(U+=X-me),de.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=U,U+=q.storage}}}const k=U%X;return k>0&&(U+=X-k),G.__size=U,G.__cache={},this}function w(G){const P={boundary:0,storage:0};return typeof G=="number"||typeof G=="boolean"?(P.boundary=4,P.storage=4):G.isVector2?(P.boundary=8,P.storage=8):G.isVector3||G.isColor?(P.boundary=16,P.storage=12):G.isVector4?(P.boundary=16,P.storage=16):G.isMatrix3?(P.boundary=48,P.storage=48):G.isMatrix4?(P.boundary=64,P.storage=64):G.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G),P}function b(G){const P=G.target;P.removeEventListener("dispose",b);const U=d.indexOf(P.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function v(){for(const G in l)o.deleteBuffer(l[G]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}class r1{constructor(t={}){const{canvas:i=BS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const T=new Uint32Array(4),w=new Int32Array(4);let b=null,v=null;const G=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let X=!1;this._outputColorSpace=ui;let k=0,I=0,$=null,R=-1,D=null;const F=new Gt,de=new Gt;let ce=null;const ue=new At(0);let pe=0,O=i.width,q=i.height,Z=1,oe=null,me=null;const L=new Gt(0,0,O,q),j=new Gt(0,0,O,q);let _e=!1;const Te=new Lh;let K=!1,xe=!1;const ge=new Jt,He=new ee,Oe=new Gt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function ct(){return $===null?Z:1}let H=r;function ut(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Sh}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",Ge,!1),i.addEventListener("webglcontextcreationerror",Ae,!1),H===null){const Y="webgl2";if(H=ut(Y,C),H===null)throw ut(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let B,Ne,Le,ht,Fe,at,Vt,jt,N,E,te,ve,Ee,fe,Ke,Ce,Ye,Ze,Re,De,Qe,ke,Pe,ot;function W(){B=new mT(H),B.init(),ke=new QA(H,B),Ne=new lT(H,B,t,ke),Le=new ZA(H,B),Ne.reversedDepthBuffer&&S&&Le.buffers.depth.setReversed(!0),ht=new _T(H),Fe=new zA,at=new KA(H,B,Le,Fe,Ne,ke,ht),Vt=new uT(U),jt=new pT(U),N=new EM(H),Pe=new sT(H,N),E=new gT(H,N,ht,Pe),te=new yT(H,E,N,ht),Re=new xT(H,Ne,at),Ce=new cT(Fe),ve=new PA(U,Vt,jt,B,Ne,Pe,Ce),Ee=new i1(U,Fe),fe=new FA,Ke=new jA(B),Ze=new rT(U,Vt,jt,Le,te,M,m),Ye=new qA(U,te,Ne),ot=new a1(H,ht,Ne,Le),De=new oT(H,B,ht),Qe=new vT(H,B,ht),ht.programs=ve.programs,U.capabilities=Ne,U.extensions=B,U.properties=Fe,U.renderLists=fe,U.shadowMap=Ye,U.state=Le,U.info=ht}W();const we=new t1(U,H);this.xr=we,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=B.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=B.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(O,q,!1))},this.getSize=function(C){return C.set(O,q)},this.setSize=function(C,Y,re=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,q=Y,i.width=Math.floor(C*Z),i.height=Math.floor(Y*Z),re===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(O*Z,q*Z).floor()},this.setDrawingBufferSize=function(C,Y,re){O=C,q=Y,Z=re,i.width=Math.floor(C*re),i.height=Math.floor(Y*re),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,Y,re,se){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,Y,re,se),Le.viewport(F.copy(L).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(j)},this.setScissor=function(C,Y,re,se){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,Y,re,se),Le.scissor(de.copy(j).multiplyScalar(Z).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(C){Le.setScissorTest(_e=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){me=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,re=!0){let se=0;if(C){let Q=!1;if($!==null){const be=$.texture.format;Q=be===Rh||be===Ah||be===Th}if(Q){const be=$.texture.type,ze=be===Ni||be===br||be===Fo||be===Io||be===bh||be===Eh,Xe=Ze.getClearColor(),Ie=Ze.getClearAlpha(),$e=Xe.r,it=Xe.g,et=Xe.b;ze?(T[0]=$e,T[1]=it,T[2]=et,T[3]=Ie,H.clearBufferuiv(H.COLOR,0,T)):(w[0]=$e,w[1]=it,w[2]=et,w[3]=Ie,H.clearBufferiv(H.COLOR,0,w))}else se|=H.COLOR_BUFFER_BIT}Y&&(se|=H.DEPTH_BUFFER_BIT),re&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",Ge,!1),i.removeEventListener("webglcontextcreationerror",Ae,!1),Ze.dispose(),fe.dispose(),Ke.dispose(),Fe.dispose(),Vt.dispose(),jt.dispose(),te.dispose(),Pe.dispose(),ot.dispose(),ve.dispose(),we.dispose(),we.removeEventListener("sessionstart",ei),we.removeEventListener("sessionend",Ps),Si.stop()};function Ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const C=ht.autoReset,Y=Ye.enabled,re=Ye.autoUpdate,se=Ye.needsUpdate,Q=Ye.type;W(),ht.autoReset=C,Ye.enabled=Y,Ye.autoUpdate=re,Ye.needsUpdate=se,Ye.type=Q}function Ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Me(C){const Y=C.target;Y.removeEventListener("dispose",Me),Ve(Y)}function Ve(C){rt(C),Fe.remove(C)}function rt(C){const Y=Fe.get(C).programs;Y!==void 0&&(Y.forEach(function(re){ve.releaseProgram(re)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,re,se,Q,be){Y===null&&(Y=Je);const ze=Q.isMesh&&Q.matrixWorld.determinant()<0,Xe=ca(C,Y,re,se,Q);Le.setMaterial(se,ze);let Ie=re.index,$e=1;if(se.wireframe===!0){if(Ie=E.getWireframeAttribute(re),Ie===void 0)return;$e=2}const it=re.drawRange,et=re.attributes.position;let mt=it.start*$e,Nt=(it.start+it.count)*$e;be!==null&&(mt=Math.max(mt,be.start*$e),Nt=Math.min(Nt,(be.start+be.count)*$e)),Ie!==null?(mt=Math.max(mt,0),Nt=Math.min(Nt,Ie.count)):et!=null&&(mt=Math.max(mt,0),Nt=Math.min(Nt,et.count));const Xt=Nt-mt;if(Xt<0||Xt===1/0)return;Pe.setup(Q,se,Xe,re,Ie);let Ot,gt=De;if(Ie!==null&&(Ot=N.get(Ie),gt=Qe,gt.setIndex(Ot)),Q.isMesh)se.wireframe===!0?(Le.setLineWidth(se.wireframeLinewidth*ct()),gt.setMode(H.LINES)):gt.setMode(H.TRIANGLES);else if(Q.isLine){let We=se.linewidth;We===void 0&&(We=1),Le.setLineWidth(We*ct()),Q.isLineSegments?gt.setMode(H.LINES):Q.isLineLoop?gt.setMode(H.LINE_LOOP):gt.setMode(H.LINE_STRIP)}else Q.isPoints?gt.setMode(H.POINTS):Q.isSprite&&gt.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))gt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const We=Q._multiDrawStarts,qt=Q._multiDrawCounts,Tt=Q._multiDrawCount,yn=Ie?N.get(Ie).bytesPerElement:1,Oi=Fe.get(se).currentProgram.getUniforms();for(let mn=0;mn<Tt;mn++)Oi.setValue(H,"_gl_DrawID",mn),gt.render(We[mn]/yn,qt[mn])}else if(Q.isInstancedMesh)gt.renderInstances(mt,Xt,Q.count);else if(re.isInstancedBufferGeometry){const We=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,qt=Math.min(re.instanceCount,We);gt.renderInstances(mt,Xt,qt)}else gt.render(mt,Xt)};function Pt(C,Y,re){C.transparent===!0&&C.side===ra&&C.forceSinglePass===!1?(C.side=Hn,C.needsUpdate=!0,Vn(C,Y,re),C.side=ja,C.needsUpdate=!0,Vn(C,Y,re),C.side=ra):Vn(C,Y,re)}this.compile=function(C,Y,re=null){re===null&&(re=C),v=Ke.get(re),v.init(Y),P.push(v),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),C!==re&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),v.setupLights();const se=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const be=Q.material;if(be)if(Array.isArray(be))for(let ze=0;ze<be.length;ze++){const Xe=be[ze];Pt(Xe,re,Q),se.add(Xe)}else Pt(be,re,Q),se.add(be)}),v=P.pop(),se},this.compileAsync=function(C,Y,re=null){const se=this.compile(C,Y,re);return new Promise(Q=>{function be(){if(se.forEach(function(ze){Fe.get(ze).currentProgram.isReady()&&se.delete(ze)}),se.size===0){Q(C);return}setTimeout(be,10)}B.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Et=null;function Cn(C){Et&&Et(C)}function ei(){Si.stop()}function Ps(){Si.start()}const Si=new u0;Si.setAnimationLoop(Cn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(C){Et=C,we.setAnimationLoop(C),C===null?Si.stop():Si.start()},we.addEventListener("sessionstart",ei),we.addEventListener("sessionend",Ps),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Y),Y=we.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,Y,$),v=Ke.get(C,P.length),v.init(Y),P.push(v),ge.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Te.setFromProjectionMatrix(ge,Di,Y.reversedDepth),xe=this.localClippingEnabled,K=Ce.init(this.clippingPlanes,xe),b=fe.get(C,G.length),b.init(),G.push(b),we.enabled===!0&&we.isPresenting===!0){const be=U.xr.getDepthSensingMesh();be!==null&&Tr(be,Y,-1/0,U.sortObjects)}Tr(C,Y,0,U.sortObjects),b.finish(),U.sortObjects===!0&&b.sort(oe,me),Lt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Lt&&Ze.addToRenderList(b,C),this.info.render.frame++,K===!0&&Ce.beginShadows();const re=v.state.shadowsArray;Ye.render(re,C,Y),K===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=b.opaque,Q=b.transmissive;if(v.setupLights(),Y.isArrayCamera){const be=Y.cameras;if(Q.length>0)for(let ze=0,Xe=be.length;ze<Xe;ze++){const Ie=be[ze];Rr(se,Q,C,Ie)}Lt&&Ze.render(C);for(let ze=0,Xe=be.length;ze<Xe;ze++){const Ie=be[ze];Ar(b,C,Ie,Ie.viewport)}}else Q.length>0&&Rr(se,Q,C,Y),Lt&&Ze.render(C),Ar(b,C,Y);$!==null&&I===0&&(at.updateMultisampleRenderTarget($),at.updateRenderTargetMipmap($)),C.isScene===!0&&C.onAfterRender(U,C,Y),Pe.resetDefaultState(),R=-1,D=null,P.pop(),P.length>0?(v=P[P.length-1],K===!0&&Ce.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,G.pop(),G.length>0?b=G[G.length-1]:b=null};function Tr(C,Y,re,se){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Te.intersectsSprite(C)){se&&Oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const ze=te.update(C),Xe=C.material;Xe.visible&&b.push(C,ze,Xe,re,Oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Te.intersectsObject(C))){const ze=te.update(C),Xe=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Oe.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Oe.copy(ze.boundingSphere.center)),Oe.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(Xe)){const Ie=ze.groups;for(let $e=0,it=Ie.length;$e<it;$e++){const et=Ie[$e],mt=Xe[et.materialIndex];mt&&mt.visible&&b.push(C,ze,mt,re,Oe.z,et)}}else Xe.visible&&b.push(C,ze,Xe,re,Oe.z,null)}}const be=C.children;for(let ze=0,Xe=be.length;ze<Xe;ze++)Tr(be[ze],Y,re,se)}function Ar(C,Y,re,se){const Q=C.opaque,be=C.transmissive,ze=C.transparent;v.setupLightsView(re),K===!0&&Ce.setGlobalState(U.clippingPlanes,re),se&&Le.viewport(F.copy(se)),Q.length>0&&Wa(Q,Y,re),be.length>0&&Wa(be,Y,re),ze.length>0&&Wa(ze,Y,re),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Rr(C,Y,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[se.id]===void 0&&(v.state.transmissionRenderTarget[se.id]=new Er(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Vo:Ni,minFilter:Mr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const be=v.state.transmissionRenderTarget[se.id],ze=se.viewport||F;be.setSize(ze.z*U.transmissionResolutionScale,ze.w*U.transmissionResolutionScale);const Xe=U.getRenderTarget(),Ie=U.getActiveCubeFace(),$e=U.getActiveMipmapLevel();U.setRenderTarget(be),U.getClearColor(ue),pe=U.getClearAlpha(),pe<1&&U.setClearColor(16777215,.5),U.clear(),Lt&&Ze.render(re);const it=U.toneMapping;U.toneMapping=Va;const et=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),v.setupLightsView(se),K===!0&&Ce.setGlobalState(U.clippingPlanes,se),Wa(C,re,se),at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be),B.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Nt=0,Xt=Y.length;Nt<Xt;Nt++){const Ot=Y[Nt],gt=Ot.object,We=Ot.geometry,qt=Ot.material,Tt=Ot.group;if(qt.side===ra&&gt.layers.test(se.layers)){const yn=qt.side;qt.side=Hn,qt.needsUpdate=!0,zs(gt,re,se,We,qt,Tt),qt.side=yn,qt.needsUpdate=!0,mt=!0}}mt===!0&&(at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be))}U.setRenderTarget(Xe,Ie,$e),U.setClearColor(ue,pe),et!==void 0&&(se.viewport=et),U.toneMapping=it}function Wa(C,Y,re){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,be=C.length;Q<be;Q++){const ze=C[Q],Xe=ze.object,Ie=ze.geometry,$e=ze.group;let it=ze.material;it.allowOverride===!0&&se!==null&&(it=se),Xe.layers.test(re.layers)&&zs(Xe,Y,re,Ie,it,$e)}}function zs(C,Y,re,se,Q,be){C.onBeforeRender(U,Y,re,se,Q,be),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(U,Y,re,se,C,be),Q.transparent===!0&&Q.side===ra&&Q.forceSinglePass===!1?(Q.side=Hn,Q.needsUpdate=!0,U.renderBufferDirect(re,Y,se,Q,C,be),Q.side=ja,Q.needsUpdate=!0,U.renderBufferDirect(re,Y,se,Q,C,be),Q.side=ra):U.renderBufferDirect(re,Y,se,Q,C,be),C.onAfterRender(U,Y,re,se,Q,be)}function Vn(C,Y,re){Y.isScene!==!0&&(Y=Je);const se=Fe.get(C),Q=v.state.lights,be=v.state.shadowsArray,ze=Q.state.version,Xe=ve.getParameters(C,Q.state,be,Y,re),Ie=ve.getProgramCacheKey(Xe);let $e=se.programs;se.environment=C.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(C.isMeshStandardMaterial?jt:Vt).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",Me),$e=new Map,se.programs=$e);let it=$e.get(Ie);if(it!==void 0){if(se.currentProgram===it&&se.lightsStateVersion===ze)return xn(C,Xe),it}else Xe.uniforms=ve.getUniforms(C),C.onBeforeCompile(Xe,U),it=ve.acquireProgram(Xe,Ie),$e.set(Ie,it),se.uniforms=Xe.uniforms;const et=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=Ce.uniform),xn(C,Xe),se.needsLights=Vc(C),se.lightsStateVersion=ze,se.needsLights&&(et.ambientLightColor.value=Q.state.ambient,et.lightProbe.value=Q.state.probe,et.directionalLights.value=Q.state.directional,et.directionalLightShadows.value=Q.state.directionalShadow,et.spotLights.value=Q.state.spot,et.spotLightShadows.value=Q.state.spotShadow,et.rectAreaLights.value=Q.state.rectArea,et.ltc_1.value=Q.state.rectAreaLTC1,et.ltc_2.value=Q.state.rectAreaLTC2,et.pointLights.value=Q.state.point,et.pointLightShadows.value=Q.state.pointShadow,et.hemisphereLights.value=Q.state.hemi,et.directionalShadowMap.value=Q.state.directionalShadowMap,et.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,et.spotShadowMap.value=Q.state.spotShadowMap,et.spotLightMatrix.value=Q.state.spotLightMatrix,et.spotLightMap.value=Q.state.spotLightMap,et.pointShadowMap.value=Q.state.pointShadowMap,et.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=it,se.uniformsList=null,it}function rn(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Nc.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function xn(C,Y){const re=Fe.get(C);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function ca(C,Y,re,se,Q){Y.isScene!==!0&&(Y=Je),at.resetTextureUnits();const be=Y.fog,ze=se.isMeshStandardMaterial?Y.environment:null,Xe=$===null?U.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ds,Ie=(se.isMeshStandardMaterial?jt:Vt).get(se.envMap||ze),$e=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,it=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),et=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,Nt=!!re.morphAttributes.color;let Xt=Va;se.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Xt=U.toneMapping);const Ot=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,gt=Ot!==void 0?Ot.length:0,We=Fe.get(se),qt=v.state.lights;if(K===!0&&(xe===!0||C!==D)){const fn=C===D&&se.id===R;Ce.setState(se,C,fn)}let Tt=!1;se.version===We.__version?(We.needsLights&&We.lightsStateVersion!==qt.state.version||We.outputColorSpace!==Xe||Q.isBatchedMesh&&We.batching===!1||!Q.isBatchedMesh&&We.batching===!0||Q.isBatchedMesh&&We.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&We.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||Q.isInstancedMesh&&We.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&We.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&We.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&We.instancingMorph===!1&&Q.morphTexture!==null||We.envMap!==Ie||se.fog===!0&&We.fog!==be||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ce.numPlanes||We.numIntersection!==Ce.numIntersection)||We.vertexAlphas!==$e||We.vertexTangents!==it||We.morphTargets!==et||We.morphNormals!==mt||We.morphColors!==Nt||We.toneMapping!==Xt||We.morphTargetsCount!==gt)&&(Tt=!0):(Tt=!0,We.__version=se.version);let yn=We.currentProgram;Tt===!0&&(yn=Vn(se,Y,Q));let Oi=!1,mn=!1,Ya=!1;const xt=yn.getUniforms(),Tn=We.uniforms;if(Le.useProgram(yn.program)&&(Oi=!0,mn=!0,Ya=!0),se.id!==R&&(R=se.id,mn=!0),Oi||D!==C){Le.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),xt.setValue(H,"projectionMatrix",C.projectionMatrix),xt.setValue(H,"viewMatrix",C.matrixWorldInverse);const tn=xt.map.cameraPosition;tn!==void 0&&tn.setValue(H,He.setFromMatrixPosition(C.matrixWorld)),Ne.logarithmicDepthBuffer&&xt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&xt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,mn=!0,Ya=!0)}if(Q.isSkinnedMesh){xt.setOptional(H,Q,"bindMatrix"),xt.setOptional(H,Q,"bindMatrixInverse");const fn=Q.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),xt.setValue(H,"boneTexture",fn.boneTexture,at))}Q.isBatchedMesh&&(xt.setOptional(H,Q,"batchingTexture"),xt.setValue(H,"batchingTexture",Q._matricesTexture,at),xt.setOptional(H,Q,"batchingIdTexture"),xt.setValue(H,"batchingIdTexture",Q._indirectTexture,at),xt.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&xt.setValue(H,"batchingColorTexture",Q._colorsTexture,at));const Dn=re.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Re.update(Q,re,yn),(mn||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,xt.setValue(H,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Tn.envMap.value=Ie,Tn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),mn&&(xt.setValue(H,"toneMappingExposure",U.toneMappingExposure),We.needsLights&&Bs(Tn,Ya),be&&se.fog===!0&&Ee.refreshFogUniforms(Tn,be),Ee.refreshMaterialUniforms(Tn,se,Z,q,v.state.transmissionRenderTarget[C.id]),Nc.upload(H,rn(We),Tn,at)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Nc.upload(H,rn(We),Tn,at),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&xt.setValue(H,"center",Q.center),xt.setValue(H,"modelViewMatrix",Q.modelViewMatrix),xt.setValue(H,"normalMatrix",Q.normalMatrix),xt.setValue(H,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const fn=se.uniformsGroups;for(let tn=0,wr=fn.length;tn<wr;tn++){const Mi=fn[tn];ot.update(Mi,yn),ot.bind(Mi,yn)}}return yn}function Bs(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Vc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,Y,re){const se=Fe.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Fe.get(C.texture).__webglTexture=Y,Fe.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const re=Fe.get(C);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0};const jc=H.createFramebuffer();this.setRenderTarget=function(C,Y=0,re=0){$=C,k=Y,I=re;let se=!0,Q=null,be=!1,ze=!1;if(C){const Ie=Fe.get(C);if(Ie.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(Ie.__webglFramebuffer===void 0)at.setupRenderTarget(C);else if(Ie.__hasExternalTextures)at.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Ie.__boundDepthTexture!==et){if(et!==null&&Fe.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ze=!0);const it=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?Q=it[Y][re]:Q=it[Y],be=!0):C.samples>0&&at.useMultisampledRTT(C)===!1?Q=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?Q=it[re]:Q=it,F.copy(C.viewport),de.copy(C.scissor),ce=C.scissorTest}else F.copy(L).multiplyScalar(Z).floor(),de.copy(j).multiplyScalar(Z).floor(),ce=_e;if(re!==0&&(Q=jc),Le.bindFramebuffer(H.FRAMEBUFFER,Q)&&se&&Le.drawBuffers(C,Q),Le.viewport(F),Le.scissor(de),Le.setScissorTest(ce),be){const Ie=Fe.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,re)}else if(ze){const Ie=Y;for(let $e=0;$e<C.textures.length;$e++){const it=Fe.get(C.textures[$e]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$e,it.__webglTexture,re,Ie)}}else if(C!==null&&re!==0){const Ie=Fe.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ie.__webglTexture,re)}R=-1},this.readRenderTargetPixels=function(C,Y,re,se,Q,be,ze,Xe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Ie=Ie[ze]),Ie){Le.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const $e=C.textures[Xe],it=$e.format,et=$e.type;if(!Ne.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-se&&re>=0&&re<=C.height-Q&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Xe),H.readPixels(Y,re,se,Q,ke.convert(it),ke.convert(et),be))}finally{const $e=$!==null?Fe.get($).__webglFramebuffer:null;Le.bindFramebuffer(H.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,Y,re,se,Q,be,ze,Xe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Ie=Ie[ze]),Ie)if(Y>=0&&Y<=C.width-se&&re>=0&&re<=C.height-Q){Le.bindFramebuffer(H.FRAMEBUFFER,Ie);const $e=C.textures[Xe],it=$e.format,et=$e.type;if(!Ne.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,mt),H.bufferData(H.PIXEL_PACK_BUFFER,be.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Xe),H.readPixels(Y,re,se,Q,ke.convert(it),ke.convert(et),0);const Nt=$!==null?Fe.get($).__webglFramebuffer:null;Le.bindFramebuffer(H.FRAMEBUFFER,Nt);const Xt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await FS(H,Xt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,mt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,be),H.deleteBuffer(mt),H.deleteSync(Xt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,re=0){const se=Math.pow(2,-re),Q=Math.floor(C.image.width*se),be=Math.floor(C.image.height*se),ze=Y!==null?Y.x:0,Xe=Y!==null?Y.y:0;at.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,ze,Xe,Q,be),Le.unbindTexture()};const Yo=H.createFramebuffer(),qa=H.createFramebuffer();this.copyTextureToTexture=function(C,Y,re=null,se=null,Q=0,be=null){be===null&&(Q!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=Q,Q=0):be=0);let ze,Xe,Ie,$e,it,et,mt,Nt,Xt;const Ot=C.isCompressedTexture?C.mipmaps[be]:C.image;if(re!==null)ze=re.max.x-re.min.x,Xe=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,$e=re.min.x,it=re.min.y,et=re.isBox3?re.min.z:0;else{const Dn=Math.pow(2,-Q);ze=Math.floor(Ot.width*Dn),Xe=Math.floor(Ot.height*Dn),C.isDataArrayTexture?Ie=Ot.depth:C.isData3DTexture?Ie=Math.floor(Ot.depth*Dn):Ie=1,$e=0,it=0,et=0}se!==null?(mt=se.x,Nt=se.y,Xt=se.z):(mt=0,Nt=0,Xt=0);const gt=ke.convert(Y.format),We=ke.convert(Y.type);let qt;Y.isData3DTexture?(at.setTexture3D(Y,0),qt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(at.setTexture2DArray(Y,0),qt=H.TEXTURE_2D_ARRAY):(at.setTexture2D(Y,0),qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Tt=H.getParameter(H.UNPACK_ROW_LENGTH),yn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Oi=H.getParameter(H.UNPACK_SKIP_PIXELS),mn=H.getParameter(H.UNPACK_SKIP_ROWS),Ya=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ot.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ot.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,et);const xt=C.isDataArrayTexture||C.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const Dn=Fe.get(C),fn=Fe.get(Y),tn=Fe.get(Dn.__renderTarget),wr=Fe.get(fn.__renderTarget);Le.bindFramebuffer(H.READ_FRAMEBUFFER,tn.__webglFramebuffer),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let Mi=0;Mi<Ie;Mi++)xt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.get(C).__webglTexture,Q,et+Mi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.get(Y).__webglTexture,be,Xt+Mi)),H.blitFramebuffer($e,it,ze,Xe,mt,Nt,ze,Xe,H.DEPTH_BUFFER_BIT,H.NEAREST);Le.bindFramebuffer(H.READ_FRAMEBUFFER,null),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Fe.has(C)){const Dn=Fe.get(C),fn=Fe.get(Y);Le.bindFramebuffer(H.READ_FRAMEBUFFER,Yo),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,qa);for(let tn=0;tn<Ie;tn++)xt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dn.__webglTexture,Q,et+tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dn.__webglTexture,Q),Tn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fn.__webglTexture,be,Xt+tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fn.__webglTexture,be),Q!==0?H.blitFramebuffer($e,it,ze,Xe,mt,Nt,ze,Xe,H.COLOR_BUFFER_BIT,H.NEAREST):Tn?H.copyTexSubImage3D(qt,be,mt,Nt,Xt+tn,$e,it,ze,Xe):H.copyTexSubImage2D(qt,be,mt,Nt,$e,it,ze,Xe);Le.bindFramebuffer(H.READ_FRAMEBUFFER,null),Le.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(qt,be,mt,Nt,Xt,ze,Xe,Ie,gt,We,Ot.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(qt,be,mt,Nt,Xt,ze,Xe,Ie,gt,Ot.data):H.texSubImage3D(qt,be,mt,Nt,Xt,ze,Xe,Ie,gt,We,Ot):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,be,mt,Nt,ze,Xe,gt,We,Ot.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,be,mt,Nt,Ot.width,Ot.height,gt,Ot.data):H.texSubImage2D(H.TEXTURE_2D,be,mt,Nt,ze,Xe,gt,We,Ot);H.pixelStorei(H.UNPACK_ROW_LENGTH,Tt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Oi),H.pixelStorei(H.UNPACK_SKIP_ROWS,mn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ya),be===0&&Y.generateMipmaps&&H.generateMipmap(qt),Le.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,re=null,se=null,Q=0){return Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Y,re,se,Q)},this.initRenderTarget=function(C){Fe.get(C).__webglFramebuffer===void 0&&at.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?at.setTextureCube(C,0):C.isData3DTexture?at.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?at.setTexture2DArray(C,0):at.setTexture2D(C,0),Le.unbindTexture()},this.resetState=function(){k=0,I=0,$=null,Le.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const g0=""+new URL("combat-vehicle-hangar-B8cOoZvu.png",import.meta.url).href,s1=["WASD move","Mouse drag look","Shift sprint","Space jump","Ctrl crouch","F fire"],D_=[{x:43,y:-1,z:45},{x:57,y:-1,z:44},{x:31,y:2,z:42},{x:69,y:2,z:41}];function o1({codename:o,operatorName:t,role:i,weapons:r,characterArt:l,squad:u}){var M;const d=Yt.useRef(null),h=Yt.useRef({x:-2.75,z:-2.72,y:0,velocityY:0,yaw:Math.PI,crouched:!1,grounded:!0,gaitPhase:0,recoil:0}),m=Yt.useRef({}),p=Yt.useRef({dragging:!1,lastX:0}),x=Yt.useRef({lastAt:0,flashTimer:0}),[y,S]=Yt.useState({speed:"0.0",stance:"Standing",weapon:((M=r[0])==null?void 0:M[0])??"Primary",event:"Simulation ready"});return Yt.useEffect(()=>{if(!d.current)return;const T=d.current,w=new cM;w.background=null,w.fog=new Uh(725265,12,32);const b=new $n(58,1,.1,80),v=new r1({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});v.setClearColor(0,0),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.shadowMap.enabled=!0,v.shadowMap.type=F_,T.appendChild(v.domElement);const G=new gM(10479836,1511954,1.8);w.add(G);const P=new yM(16777215,2.5);P.position.set(5,10,3),P.castShadow=!0,P.shadow.mapSize.set(2048,2048),w.add(P);const U=new _M(8315084,55,10);U.position.set(-4,3.5,2),w.add(U);const X=new MM(22,22,8315084,2965308);X.position.y=-.03,X.material.opacity=.26,X.material.transparent=!0,w.add(X);const k=new Ui(new Oh(.42,.5,32),new Dh({color:15885909,transparent:!0,opacity:.72}));k.rotation.x=-Math.PI/2,k.position.set(2.85,.025,-4.8),w.add(k);let I=0,$=performance.now(),R=0;function D(){const oe=T.getBoundingClientRect();v.setSize(oe.width,oe.height,!1),b.aspect=oe.width/Math.max(oe.height,1),b.updateProjectionMatrix()}function F(oe=performance.now()){if(oe-x.current.lastAt<145)return;x.current.lastAt=oe,x.current.flashTimer=.1;const me=h.current;me.recoil=Math.min(me.recoil+1,1.7);const L=new ee(me.x,me.y+1.45,me.z),j=new ee(Math.sin(me.yaw),-.04,Math.cos(me.yaw)).normalize(),_e=L.clone().add(j.multiplyScalar(12)),Te=new s0(new yi().setFromPoints([L,_e]),new Nh({color:8315084}));w.add(Te),window.setTimeout(()=>w.remove(Te),95),T.style.setProperty("--muzzle-opacity","1"),window.setTimeout(()=>T.style.setProperty("--muzzle-opacity","0"),80),S(K=>{var xe;return{...K,weapon:((xe=r[0])==null?void 0:xe[0])??K.weapon,event:"Rounds downrange"}})}function de(oe){m.current[oe.key.toLowerCase()]=!0,oe.code==="Space"&&h.current.grounded&&(h.current.velocityY=5.2,h.current.grounded=!1),oe.key.toLowerCase()==="f"&&F(),[" ","w","a","s","d"].includes(oe.key.toLowerCase())&&oe.preventDefault()}function ce(oe){m.current[oe.key.toLowerCase()]=!1}function ue(oe){p.current={dragging:!0,lastX:oe.clientX},T.setPointerCapture(oe.pointerId)}function pe(oe){if(!p.current.dragging)return;const me=oe.clientX-p.current.lastX;p.current.lastX=oe.clientX,h.current.yaw-=me*.008}function O(oe){p.current.dragging=!1,T.releasePointerCapture(oe.pointerId)}function q(oe,me){var N,E,te,ve;const L=m.current,j=h.current,_e=navigator.getGamepads?navigator.getGamepads()[0]:null,Te=(L.w?1:0)-(L.s?1:0)-((_e==null?void 0:_e.axes[1])??0),K=(L.d?1:0)-(L.a?1:0)+((_e==null?void 0:_e.axes[0])??0),xe=L.shift||((N=_e==null?void 0:_e.buttons[10])==null?void 0:N.pressed);j.crouched=L.control||L.c||!!((E=_e==null?void 0:_e.buttons[1])!=null&&E.pressed),_e&&Math.abs(_e.axes[2]??0)>.08&&(j.yaw-=(_e.axes[2]??0)*oe*2.6),(te=_e==null?void 0:_e.buttons[7])!=null&&te.pressed&&F(me);const ge=Math.min(Math.hypot(Te,K),1),He=j.crouched?2.2:xe?6.2:3.7,Oe=Math.abs(K)>.04?Math.sign(K):0;if(ge>.02){const Ee=Math.sin(j.yaw),fe=Math.cos(j.yaw);j.x+=(Ee*Te+fe*K)*He*oe,j.z+=(fe*Te-Ee*K)*He*oe,j.gaitPhase+=oe*(xe?13:j.crouched?6.5:9.2)*ge}j.x=ls.clamp(j.x,-8.8,8.8),j.z=ls.clamp(j.z,-8.2,7.2);const Je=Math.sin(j.yaw)*34,Lt=ls.clamp(-j.x*18+Je,-150,150),ct=ls.clamp(j.z*7-j.y*16,-72,72),H=1.12+Math.min(Math.abs(j.z+2.72)*.012,.06);T.style.setProperty("--scene-pan-x",`${Lt.toFixed(1)}px`),T.style.setProperty("--scene-pan-y",`${ct.toFixed(1)}px`),T.style.setProperty("--scene-scale",H.toFixed(3)),j.velocityY-=13.5*oe,j.y=Math.max(0,j.y+j.velocityY*oe),j.y===0&&(j.velocityY=0,j.grounded=!0),x.current.flashTimer=Math.max(0,x.current.flashTimer-oe),j.recoil=Math.max(0,j.recoil-oe*5.5);const ut=ge>.02?ge:.18,B=Math.sin(j.gaitPhase*2)*(ge>.02?8:2.5)-j.y*22,Ne=Oe*16+Math.sin(j.gaitPhase)*ut*5,Le=Oe*4+Math.sin(j.gaitPhase)*ut*1.4,ht=j.recoil*10,Fe=ls.clamp(50+j.x*3.15,25,75),at=ls.clamp(1.5-j.z*.95+j.y*7,-2,15),Vt=j.crouched?.88:xe&&ge>.1?1.03:1;T.style.setProperty("--operator-x",`${Fe.toFixed(2)}%`),T.style.setProperty("--operator-bottom",`${at.toFixed(2)}%`),T.style.setProperty("--operator-bob",`${B.toFixed(2)}px`),T.style.setProperty("--operator-lean",`${Ne.toFixed(2)}px`),T.style.setProperty("--operator-tilt",`${Le.toFixed(2)}deg`),T.style.setProperty("--operator-scale",Vt.toFixed(3)),T.style.setProperty("--operator-recoil",`${ht.toFixed(2)}px`),T.style.setProperty("--muzzle-opacity",x.current.flashTimer>0?"1":"0"),k.material.opacity=.5+Math.sin(me*.006)*.22,k.scale.setScalar(1+Math.sin(me*.006)*.12);const jt=new ee(-Math.sin(j.yaw)*5.2,3.1,-Math.cos(j.yaw)*5.2);b.position.lerp(new ee(j.x,j.y+1.2,j.z).add(jt),.12),b.lookAt(j.x,j.y+1.25,j.z),me-R>180&&(R=me,S({speed:(ge*He).toFixed(1),stance:j.crouched?"Crouched":xe&&ge>.1?"Sprinting":"Standing",weapon:((ve=r[0])==null?void 0:ve[0])??"Primary",event:ge>.1?"Movement input active":"Holding position"}))}function Z(oe){const me=Math.min((oe-$)/1e3,.033);$=oe,q(me,oe),v.render(w,b),I=requestAnimationFrame(Z)}return D(),I=requestAnimationFrame(Z),window.addEventListener("resize",D),window.addEventListener("keydown",de),window.addEventListener("keyup",ce),T.addEventListener("pointerdown",ue),T.addEventListener("pointermove",pe),T.addEventListener("pointerup",O),()=>{cancelAnimationFrame(I),window.removeEventListener("resize",D),window.removeEventListener("keydown",de),window.removeEventListener("keyup",ce),T.removeEventListener("pointerdown",ue),T.removeEventListener("pointermove",pe),T.removeEventListener("pointerup",O),v.dispose(),T.removeChild(v.domElement)}},[o,l.front,r]),g.jsxs("section",{className:"section-block simulation-section",id:"simulation",children:[g.jsxs("div",{className:"section-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Playable combat simulation"}),g.jsxs("h2",{children:[o," live movement arena"]})]}),g.jsx("p",{className:"section-note",children:"Move the selected operator beside the mounted-gun combat vehicle inside the realistic hangar scene."})]}),g.jsxs("div",{className:"simulation-shell",children:[g.jsxs("div",{className:"simulation-canvas",ref:d,"aria-label":`${t} combat environment`,style:{"--sim-character-art":`url(${l.front})`,"--sim-bg-art":`url(${g0})`,"--scene-pan-x":"0px","--scene-pan-y":"-19px","--scene-scale":"1.12","--operator-x":"50%","--operator-bottom":"4%","--operator-bob":"0px","--operator-lean":"0px","--operator-tilt":"0deg","--operator-scale":"1","--operator-recoil":"0px","--muzzle-opacity":"0"},children:[g.jsx("div",{className:"simulation-reticle","aria-hidden":"true"}),g.jsx("div",{className:"simulation-squad-layer","aria-label":"Full roster staged in the hangar",children:u.map((T,w)=>{const b=D_[w%D_.length],v=T.codename===o;return g.jsxs("figure",{className:v?"simulation-squad-member selected":"simulation-squad-member",style:{"--squad-x":`${b.x}%`,"--squad-bottom":`${b.y}%`,"--squad-z":b.z},children:[g.jsx("span",{className:"simulation-character-shadow","aria-hidden":"true"}),g.jsx("img",{src:T.art.front,alt:`${T.name} positioned in the hangar scenery`})]},`sim-squad-${T.codename}`)})})]}),g.jsxs("aside",{className:"simulation-hud",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Operator"}),g.jsx("h3",{children:t}),g.jsx("span",{children:i})]}),g.jsxs("div",{className:"sim-stat-grid",children:[g.jsxs("span",{children:[g.jsx("small",{children:"Speed"}),g.jsx("strong",{children:y.speed})]}),g.jsxs("span",{children:[g.jsx("small",{children:"Stance"}),g.jsx("strong",{children:y.stance})]}),g.jsxs("span",{children:[g.jsx("small",{children:"Weapon"}),g.jsx("strong",{children:y.weapon})]}),g.jsxs("span",{children:[g.jsx("small",{children:"Event"}),g.jsx("strong",{children:y.event})]})]}),g.jsx("div",{className:"sim-control-list",children:s1.map(T=>g.jsx("span",{children:T},T))})]})]})]})}const l1=""+new URL("aion-prime-home-C4HNHDJK.png",import.meta.url).href,c1=""+new URL("aegis-orb-hires-xVlC5fAS.jpg",import.meta.url).href,u1=""+new URL("bastion-gunner-hires-CVTUK6-W.jpg",import.meta.url).href,f1=""+new URL("dominion-rifleman-hires-BYP7g31p.jpg",import.meta.url).href,d1=""+new URL("hex-sniper-hires-CCGIFgjc.jpg",import.meta.url).href,h1=""+new URL("iron-apostle-hires-TJYtnEFW.jpg",import.meta.url).href,p1=""+new URL("needle-scout-hires-fzvRVVF6.jpg",import.meta.url).href,m1=""+new URL("praetorian-nine-hires-4okPHZi8.jpg",import.meta.url).href,g1=""+new URL("reaper-carrier-hires-2DkUUZq2.jpg",import.meta.url).href,v1=""+new URL("seraph-prime-hires-0ospeCB1.jpg",import.meta.url).href,_1=""+new URL("shade-stalker-hires-DksbQ67S.jpg",import.meta.url).href,x1=""+new URL("signal-warden-hires-CyHMg49M.jpg",import.meta.url).href,y1=""+new URL("vulture-striker-hires-DdBPjLGU.jpg",import.meta.url).href,S1=""+new URL("raptor-lrv2-CBwrI-W1.jpg",import.meta.url).href,M1=""+new URL("rhino-mgv4-Chpebvii.jpg",import.meta.url).href,b1=""+new URL("valkyrie-vt9-CmKiJ9iv.jpg",import.meta.url).href,E1=""+new URL("wraith-str6-B7PtUNKj.jpg",import.meta.url).href,T1=""+new URL("aion-core-vault-DJtFPE_S.jpg",import.meta.url).href,A1=""+new URL("blackwater-port-C0_Tsc8u.jpg",import.meta.url).href,R1=""+new URL("dustline-convoy-n1NHwwgZ.jpg",import.meta.url).href,w1=""+new URL("flooded-metro-grid-BojSRyXw.jpg",import.meta.url).href,C1=""+new URL("hydro-dam-breach-CETpE_B8.jpg",import.meta.url).href,D1=""+new URL("iron-meridian-hangar-VQ4pYBxY.jpg",import.meta.url).href,U1=""+new URL("jungle-signal-ruins-DQ5sVBme.jpg",import.meta.url).href,L1=""+new URL("mountain-battery-BOAgl7gQ.jpg",import.meta.url).href,N1=""+new URL("orbital-debris-yard-cNIclmez.jpg",import.meta.url).href,O1=""+new URL("skybridge-helix-CObhQHIh.jpg",import.meta.url).href,P1=""+new URL("subzero-relay-6BVGEo5B.jpg",import.meta.url).href,z1=""+new URL("urban-breach-zone-K1BnE1gy.jpg",import.meta.url).href,B1=""+new URL("mara-voss-back-cutout-B60mCn99.png",import.meta.url).href,F1=""+new URL("mara-voss-front-cutout-_HJJOHln.png",import.meta.url).href,I1=""+new URL("mara-voss-side-cutout-Bvswx1rg.png",import.meta.url).href,H1=""+new URL("amani-mwangi-back-Dzy---MM.png",import.meta.url).href,k1=""+new URL("amani-mwangi-side-DPt4hc26.png",import.meta.url).href,G1=""+new URL("amani-mwangi-BJtJhSwL.png",import.meta.url).href,V1=""+new URL("amara-okonkwo-back-yf8yjfo5.png",import.meta.url).href,j1=""+new URL("amara-okonkwo-side-nnKOteR9.png",import.meta.url).href,X1=""+new URL("amara-okonkwo-FY_bPxDg.png",import.meta.url).href,W1=""+new URL("diego-rojas-back-B8mK-HUU.png",import.meta.url).href,q1=""+new URL("diego-rojas-side-Bd2jQ2WC.png",import.meta.url).href,Y1=""+new URL("diego-rojas-DzEK7ZPh.png",import.meta.url).href,Z1=""+new URL("ingrid-solberg-back-D0_9GQrv.png",import.meta.url).href,K1=""+new URL("ingrid-solberg-side-Cc5SK0Uo.png",import.meta.url).href,Q1=""+new URL("ingrid-solberg-BRLrXACg.png",import.meta.url).href,J1=""+new URL("jean-paul-desrosiers-back-DJJNf4Z1.png",import.meta.url).href,$1=""+new URL("jean-paul-desrosiers-side-DKEEiZRE.png",import.meta.url).href,eR=""+new URL("jean-paul-desrosiers-x4hMl4pb.png",import.meta.url).href,tR=""+new URL("leila-haddad-back-D5_7-NXM.png",import.meta.url).href,nR=""+new URL("leila-haddad-side-8MRI1PHH.png",import.meta.url).href,iR=""+new URL("leila-haddad-Dxh5h0Ph.png",import.meta.url).href,aR=""+new URL("luca-romano-back-BNFsE0Sx.png",import.meta.url).href,rR=""+new URL("luca-romano-side-Bv7KWuGU.png",import.meta.url).href,sR=""+new URL("luca-romano-BLde7TVd.png",import.meta.url).href,oR=""+new URL("marcus-reed-back-DgwYj6Jw.png",import.meta.url).href,lR=""+new URL("marcus-reed-side-cla8xhVV.png",import.meta.url).href,cR=""+new URL("marcus-reed-r3xB289m.png",import.meta.url).href,uR=""+new URL("mateo-silva-back-DxTsLMOq.png",import.meta.url).href,fR=""+new URL("mateo-silva-side-DJc6NE5x.png",import.meta.url).href,dR=""+new URL("mateo-silva-5HZKvz0P.png",import.meta.url).href,hR=""+new URL("mathieu-toussaint-back-qyV5eh2-.png",import.meta.url).href,pR=""+new URL("mathieu-toussaint-side-CH6g55hc.png",import.meta.url).href,mR=""+new URL("mathieu-toussaint-DDmKt_8S.png",import.meta.url).href,gR=""+new URL("mireya-baptiste-back-B2zAE_tM.png",import.meta.url).href,vR=""+new URL("mireya-baptiste-side-_hx8wxE3.png",import.meta.url).href,_R=""+new URL("mireya-baptiste-UtQZLkcJ.png",import.meta.url).href,xR=""+new URL("nadine-jean-baptiste-back-DjCdWuTk.png",import.meta.url).href,yR=""+new URL("nadine-jean-baptiste-side-DRE5o003.png",import.meta.url).href,SR=""+new URL("nadine-jean-baptiste-U6aEeAW3.png",import.meta.url).href,MR=""+new URL("omar-el-sayed-back-DvZ0YzV3.png",import.meta.url).href,bR=""+new URL("omar-el-sayed-side-GbsxNpnm.png",import.meta.url).href,ER=""+new URL("omar-el-sayed-BMPnC4NG.png",import.meta.url).href,TR=""+new URL("park-tae-min-back-D1wDi4ib.png",import.meta.url).href,AR=""+new URL("park-tae-min-side-BZejPE1D.png",import.meta.url).href,RR=""+new URL("park-tae-min-BTjYZmcm.png",import.meta.url).href,wR=""+new URL("priya-nair-back-Dx5txwin.png",import.meta.url).href,CR=""+new URL("priya-nair-side-CRHTHMmA.png",import.meta.url).href,DR=""+new URL("priya-nair-DFXsfudy.png",import.meta.url).href,UR=""+new URL("samir-khan-back-D1HMM4ex.png",import.meta.url).href,LR=""+new URL("samir-khan-side-lnwg1j9U.png",import.meta.url).href,NR=""+new URL("samir-khan-afwMkOKc.png",import.meta.url).href,OR=""+new URL("sofia-alvarez-back-BmPLZWff.png",import.meta.url).href,PR=""+new URL("sofia-alvarez-side-Dz9NXRSQ.png",import.meta.url).href,zR=""+new URL("sofia-alvarez-Cjr7OGqX.png",import.meta.url).href,BR=""+new URL("tomas-novak-back-LWo0EKI-.png",import.meta.url).href,FR=""+new URL("tomas-novak-side-y2dMENIS.png",import.meta.url).href,IR=""+new URL("tomas-novak-ao_fJqd-.png",import.meta.url).href,HR=""+new URL("yuki-tanaka-back-KAS85P0S.png",import.meta.url).href,kR=""+new URL("yuki-tanaka-side-BApmwsfq.png",import.meta.url).href,GR=""+new URL("yuki-tanaka-Njn3uOWV.png",import.meta.url).href,VR=""+new URL("zoe-mensah-back-D4NVfIWL.png",import.meta.url).href,jR=""+new URL("zoe-mensah-side-C2ywuUPz.png",import.meta.url).href,XR=""+new URL("zoe-mensah-lg5b-19l.png",import.meta.url).href,U_=[{name:"Kinetic Breach",type:"Active",cooldown:"18s",keyboard:"Z",controller:"LB",purpose:"Client-predicted directional burst for entry, chase, and escape chains.",counterplay:"Linear path, brief recovery on miss, blocked by heavy shields and stasis traps.",vfx:"Compressed air ribbon, suit sparks, and a hard-edged impact flash.",audio:"Pressure crack, servo snap, and close-range concussion tail.",network:"Predicted movement on owner, server-authoritative hit cone and final capsule location."},{name:"Echo Spike",type:"Active",cooldown:"24s",keyboard:"X",controller:"RB",purpose:"Throwable movement sensor that rewards timing before a coordinated push.",counterplay:"Device is visible, destructible, and only pings moving targets inside radius.",vfx:"Low-profile floor spike with pulsing scan rings and clean team-only silhouettes.",audio:"Soft sonar ticks that accelerate when recent motion is detected.",network:"Server-owned detection volume replicates compressed ping events to allied clients."},{name:"Snap Guard",type:"Active",cooldown:"28s",keyboard:"G",controller:"D-Pad Up",purpose:"1.25s frontal damage reduction for surviving a committed breach without tanking.",counterplay:"Flanks, explosives, melee, and delayed fire bypass the short protection window.",vfx:"Angular translucent forearm shield with directional impact ripples.",audio:"Rising charge tone, glassy block clicks, and a clean shutdown snap.",network:"Server validates guard angle, active tag, and damage modifier against attacker vector."},{name:"Overclock Vector",type:"Ultimate",cooldown:"Charge",keyboard:"T",controller:"LB + RB",purpose:"10s tempo spike: faster reloads, extended slides, and reduced movement cooldown recovery.",counterplay:"Range denial, suppression zones, burst focus, and trap layering.",vfx:"Subtle suit line glow, footstep light trails, and intensified breach distortion.",audio:"Heartbeat layer, exposed servo whine, and sharper movement transients.",network:"Replicated gameplay effect with scoped stat modifiers and montage-safe cancellation tags."}],WR=[["Move","W A S D","Left Stick","Analog movement with acceleration, strafing, and server-authoritative velocity caps."],["Look / Aim","Mouse","Right Stick","Raw mouse input, tuned stick response curve, ADS sensitivity scalar."],["Fire","Left Mouse","Right Trigger","Client-side muzzle feedback, server-authoritative trace and damage."],["Aim Down Sights","Right Mouse","Left Trigger","Hold-to-ADS with camera FOV blend and weapon sway reduction."],["Jump / Mantle","Space","A / Cross","Jump instantly; mantle triggers when ledge traces validate in front arc."],["Sprint","Left Shift","Left Stick Click","Hold sprint, cancellable into slide, jump, mantle, reload, or ability windup."],["Tactical Sprint","Double-tap Shift","Double-click Left Stick","Short burst with weapon lowered and stronger audio signature."],["Crouch / Slide","Left Ctrl","B / Circle","Tap crouch; hold or press while sprinting to enter slide."],["Lean Left","Q","D-Pad Left while ADS","ADS-only shoulder lean with exposed capsule and weapon obstruction checks."],["Lean Right","E","D-Pad Right while ADS","Mirrors left lean for corner play without changing ability bindings."],["Reload / Interact","R / F","X / Square","Context priority favors reload unless interact target is centered and valid."],["Swap Weapon","1 / 2 / Wheel","Y / Triangle","Fast swap queue respects reload cancel and equip animation windows."],["Melee","V / Mouse 4","Right Stick Click","Short lunge, server-confirmed hit frame, combo-safe recovery."],["Ping","Middle Mouse","D-Pad Down","Team ping raycast with cooldown throttling and replicated marker events."]],qR=[["Walk","420 uu/s","High-fidelity strafe control for ADS peeking and micro-correction."],["Sprint","650 uu/s","Fast baseline traversal with cancellable jump, crouch, and slide entry."],["Tac Sprint","780 uu/s","Short stamina burst that cannot fire but can cancel into mantle or breach."],["Slide","850 -> 420 uu/s","0.75s decay curve, hip-fire penalty, and melee-lunge combo window."],["Air Control","0.42 scalar","Midair correction supports skill expression without arena-shooter drift."],["Mantle","0.38-0.72s","Predictive traces, motion warping, and camera-stable climb starts."]],Ri=[{id:"dominion-rifleman",name:"Dominion Rifleman",designation:"H-01 Line Infantry",enemyClass:"Henchman",threat:"Standard",role:"Mobile suppression",description:"Disciplined corporate infantry deployed in linked fireteams to hold lanes and force operators out of cover.",armament:"VX pulse carbine, fragmentation charge, tactical smoke",behavior:"Advances by bounds, shares target pings, and suppresses the last known operator position.",weakness:"Break the fireteam link with flanks, vertical attacks, or signal disruption.",image:f1,imagePosition:"center"},{id:"bastion-gunner",name:"Bastion Gunner",designation:"H-07 Heavy Enforcer",enemyClass:"Henchman",threat:"Elevated",role:"Area denial",description:"Armored heavy who anchors enemy formations with sustained fire and a directional kinetic shield.",armament:"Helix rotary cannon, forearm shield, proximity mine",behavior:"Claims a firing lane, braces behind cover, and rotates slowly while the shield is active.",weakness:"Attack from separated angles or overload the shield before the weapon reaches full spin.",image:u1,imagePosition:"center"},{id:"shade-stalker",name:"Shade Stalker",designation:"H-12 Infiltrator",enemyClass:"Henchman",threat:"Severe",role:"Assassination",description:"Silent flanker equipped with refractive camouflage and a jammer that isolates operators from squad telemetry.",armament:"Suppressed flechette SMG, mono-edge blade, signal jammer",behavior:"Avoids direct sightlines, marks isolated targets, then attacks during reload or ability recovery.",weakness:"Motion sensors, area damage, and close squad spacing expose the camouflage approach.",image:_1,imagePosition:"center"},{id:"signal-warden",name:"Signal Warden",designation:"H-18 Command Support",enemyClass:"Henchman",threat:"Elevated",role:"Squad coordination",description:"Battlefield coordinator who improves nearby hostile accuracy, armor recovery, and response to operator pings.",armament:"Arc burst rifle, command beacon, repair injector",behavior:"Stays behind the line, relocates when exposed, and revives one disabled henchman per encounter.",weakness:"Destroy the command beacon or eliminate the Warden before engaging reinforced units.",image:x1,imagePosition:"center"},{id:"needle-scout",name:"Needle Scout",designation:"D-03 Recon Drone",enemyClass:"Drone",threat:"Standard",role:"Detection",description:"Fast aerial observer that paints operators for every connected enemy and tracks movement through light cover.",armament:"Optical marker, micro-dart burst, wideband scanner",behavior:"Circles above the squad, breaks line of sight after marking, and returns on a new approach vector.",weakness:"Low armor and a bright scan lens make it vulnerable to focused fire and EMP effects.",image:p1,imagePosition:"center"},{id:"vulture-striker",name:"Vulture Striker",designation:"D-11 Assault Drone",enemyClass:"Drone",threat:"Elevated",role:"Aerial pressure",description:"Attack drone that dives through open lanes, fires a kinetic burst, and climbs before operators can return fire.",armament:"Twin coil repeaters, dive rockets, evasive flare",behavior:"Alternates high cover with rapid attack runs and prioritizes stationary or wounded targets.",weakness:"Predict the climb path, use hard overhead cover, or interrupt the dive with shock damage.",image:y1,imagePosition:"center"},{id:"aegis-orb",name:"Aegis Orb",designation:"D-16 Defense Drone",enemyClass:"Drone",threat:"Elevated",role:"Protection",description:"Mobile shield projector that follows high-value units and redirects its barrier toward incoming damage.",armament:"Directional barrier, pulse repeater, repair tether",behavior:"Maintains distance from its protected unit and shifts the shield toward the highest damage source.",weakness:"Crossfire overwhelms its facing logic; the exposed rear capacitor takes amplified damage.",image:c1,imagePosition:"center"},{id:"reaper-carrier",name:"Reaper Carrier",designation:"D-24 Swarm Platform",enemyClass:"Drone",threat:"Severe",role:"Swarm deployment",description:"Armored carrier that seeds combat spaces with disposable hunter drones and remote explosive charges.",armament:"Hunter swarm bay, cluster charge, defensive laser",behavior:"Keeps long sightlines, deploys cover-seeking drones, and retreats while its swarm surrounds the squad.",weakness:"Damage the open launch bay during deployment to destroy the stored swarm and stagger the carrier.",image:g1,imagePosition:"center"},{id:"praetorian-nine",name:"Praetorian-9",designation:"C-09 Shock Cyborg",enemyClass:"Cyborg",threat:"Severe",role:"Close assault",description:"Reinforced breach unit that converts incoming damage into short bursts of speed and melee force.",armament:"Arc cleaver, shoulder scattergun, reactive plating",behavior:"Absorbs initial fire, closes rapidly, and chains cleaver strikes against grouped operators.",weakness:"Stagger effects interrupt the charge; leg servos remain vulnerable after a missed heavy strike.",image:m1,imagePosition:"center"},{id:"hex-sniper",name:"HEX Sniper",designation:"C-14 Neural Marksman",enemyClass:"Cyborg",threat:"Severe",role:"Long-range execution",description:"Precision cyborg that predicts repeated movement patterns and adjusts its lead calculation after every shot.",armament:"Mag-rail rifle, decoy projector, target prediction core",behavior:"Changes nests after two shots and punishes operators who repeat the same peek timing.",weakness:"Irregular movement, smoke, and decoy targets corrupt its prediction stack.",image:d1,imagePosition:"center"},{id:"iron-apostle",name:"Iron Apostle",designation:"C-22 Siege Cyborg",enemyClass:"Cyborg",threat:"Severe",role:"Objective breach",description:"Massive biomechanical siege unit built to destroy fortified positions and deny extraction zones.",armament:"Thermal lance, seismic fist, back-mounted mortar",behavior:"Bombards cover, advances through the impact zone, then uses the lance to split the squad.",weakness:"Cooling vents open after mortar volleys and expose the power spine to critical damage.",image:h1,imagePosition:"center"},{id:"seraph-prime",name:"Seraph Prime",designation:"C-Ω Command Avatar",enemyClass:"Cyborg",threat:"Apex",role:"Boss command unit",description:"AION Prime’s embodied battlefield intelligence, capable of rewriting encounter rules and directing every connected machine.",armament:"Gravitic field, neural beam, drone fabrication lattice",behavior:"Cycles between command, assault, and recovery phases while changing arena hazards and unit priorities.",weakness:"Sever three network anchors to interrupt phase transitions and expose the central cognition core.",image:v1,imagePosition:"center"}],Ia=[{id:"valkyrie-vt9",name:"Valkyrie VT-9",designation:"A-01 Aerial Insertion Craft",transportClass:"Aerial",role:"Fast squad insertion and extraction",capacity:"8 operators + pilot pair",speed:"310 km/h cruise / 0-90m vertical insert",terrain:"Rooftops, carrier decks, offshore rigs, contested hangars",deployment:"Dual ducted rotors hold a stable hover while the rear ramp and side rappel points deploy two fireteams.",protection:"Composite armor, IR baffling, active flare pods, and underside blast plating for hot-zone pickup.",operatorUse:"Best for opening cinematic drops, rapid objective swaps, and emergency extraction when ground routes are blocked.",image:b1},{id:"rhino-mgv4",name:"Rhino MGV-4",designation:"G-11 Heavy Ground Carrier",transportClass:"Ground",role:"Armored breach transport",capacity:"10 operators + gunner",speed:"92 km/h road / 54 km/h broken terrain",terrain:"Urban streets, checkpoint lanes, industrial yards, fortified gates",deployment:"Side troop doors let operators dismount under cover while the roof weapon suppresses hard angles.",protection:"Active armor tiles, run-flat wheels, smoke launchers, and a remote heavy machine gun mount.",operatorUse:"Best for convoy pushes, objective breach waves, and escort missions where durability matters more than stealth.",image:M1},{id:"raptor-lrv2",name:"Raptor LRV-2",designation:"G-04 Light Recon Vehicle",transportClass:"Ground",role:"High-speed flank and scout transport",capacity:"4 operators",speed:"148 km/h road / 88 km/h rough terrain",terrain:"Desert flats, service tunnels, perimeter roads, open refinery lanes",deployment:"Low chassis, exposed suspension, and a compact remote weapon station support fast hit-and-run rotations.",protection:"Light composite plating, counter-drone jammer, roll cage, and short-duration kinetic windshield shield.",operatorUse:"Best for recon teams, fast rotations, chase sequences, and flanking routes that reward driving skill.",image:S1},{id:"wraith-str6",name:"Wraith STR-6",designation:"G-19 Stealth Track Carrier",transportClass:"Ground",role:"Silent infiltration transport",capacity:"6 operators",speed:"76 km/h silent mode / 104 km/h overdrive",terrain:"Night raids, tunnel networks, rain-slick streets, sensor-heavy facilities",deployment:"Rubberized dual tracks and dampened bay doors let operators exit with minimal acoustic signature.",protection:"Radar-absorbent panels, thermal masking, low-noise drive train, and directional EMP hardening.",operatorUse:"Best for stealth openings, sabotage objectives, ambush setups, and missions where detection changes the encounter.",image:E1}],Ha=[{id:"urban-breach-zone",code:"M-01",name:"Urban Breach Zone",biome:"Dense city combat",priority:"Playable Slice",mode:"6v6 control / PvE breach variant",scale:"220m x 180m, three-lane city block",traversal:"Rooftops, window vaults, alley slides, stairwell flanks",vehicles:"Rhino breach carrier as moving cover and extraction blocker",aiForces:"Dominion riflemen, Needle scouts, one Bastion gunner event",objective:"Operators push through a barricaded district to sever AION street relays.",ue5Prep:"Build with modular storefronts, Nanite rubble kits, destructible cover sockets, and replicated objective volumes.",streaming:"One persistent street grid with rooftop and interior sublevels loaded by World Partition cells.",perfBudget:"120 FPS target, 8ms game thread, 6ms render thread, 4 active VFX combat clusters.",artDirection:"Wet asphalt, tactical floodlights, burnt signage, teal AION surveillance lines.",image:z1,accent:"#f26655"},{id:"iron-meridian-hangar",code:"M-02",name:"Iron Meridian Hangar",biome:"Industrial vehicle bay",priority:"Playable Slice",mode:"Payload escort / training simulation",scale:"180m x 140m, layered hangar floor",traversal:"Catwalk mantles, cargo vaults, crane-route verticality, vehicle cover",vehicles:"Rhino carrier, Raptor recon vehicle, mounted gun prop lanes",aiForces:"Bastion gunner, Reaper carrier drones, Iron Apostle boss lane",objective:"Capture the hangar control spine and launch a captured operator transport.",ue5Prep:"Use Chaos-enabled cargo props, spline doors, cover tagging, and animatable vehicle bay set pieces.",streaming:"Interior sublevels split into bay floor, catwalk ring, maintenance tunnel, and exterior apron.",perfBudget:"120 FPS target, baked reflection captures plus selective Lumen hardware ray tracing.",artDirection:"Black steel, amber safety lights, rain spill from open bay doors, heavy machine silhouettes.",image:D1,accent:"#f6c36c"},{id:"aion-core-vault",code:"M-03",name:"AION Core Vault",biome:"AI megastructure interior",priority:"Playable Slice",mode:"Boss arena / sabotage",scale:"160m circular arena plus three server wings",traversal:"Rotating bridges, shielded data lanes, low-gravity jump pads",vehicles:"No driveable vehicle; Valkyrie appears as extraction sequence",aiForces:"Aegis orbs, Seraph Prime, Shade stalkers, Signal wardens",objective:"Destroy three cognition anchors before Seraph Prime completes neural sync.",ue5Prep:"Prepare phase-state data assets, replicated encounter directors, Niagara data-stream hazards, and boss nav islands.",streaming:"Core arena persistent; server wings stream during phase transitions to hide loading.",perfBudget:"90 FPS boss target, strict Niagara budget, pooled projectile trails, 24 active AI max.",artDirection:"Cold blue cognition rings, mirrored black floors, enormous AI face holography.",image:T1,accent:"#7ee0cc"},{id:"dustline-convoy",code:"M-04",name:"Dustline Convoy Route",biome:"Desert highway ambush",priority:"Playable Slice",mode:"Convoy assault / extraction chase",scale:"480m spline route with two combat stops",traversal:"Dune climbs, ravine drops, vehicle leap-outs, pipeline cover",vehicles:"Raptor recon vehicles and Rhino convoy hauler",aiForces:"Vulture strikers, Dominion riflemen, Hex sniper overwatch",objective:"Intercept an AION supply convoy and extract the encrypted drive before drone reinforcements arrive.",ue5Prep:"Use spline-driven vehicle rails, Chaos dust volumes, replicated seat states, and long-range HLOD clusters.",streaming:"World Partition route cells with preloaded combat stop arenas and distant impostor terrain.",perfBudget:"100 FPS target, aggressive HLOD, 3 vehicle physics actors, dust VFX capped per client.",artDirection:"Sun-blasted road, black convoy armor, copper dust clouds, blue drone search beams.",image:R1,accent:"#d89a54"},{id:"blackwater-port",code:"M-05",name:"Blackwater Port",biome:"Rainy container terminal",priority:"Launch Core",mode:"Hardpoint / stealth raid",scale:"260m x 210m, container maze plus ship deck",traversal:"Container mantles, crane catwalks, ship ramps, drainage tunnels",vehicles:"Wraith stealth carrier for silent insertion and extraction",aiForces:"Shade stalkers, Needle scouts, Reaper carrier patrols",objective:"Plant signal scramblers across the port before AION ships leave the harbor.",ue5Prep:"Author modular container stacks, wet-material instances, reflection volumes, and audio occlusion zones.",streaming:"Port yard persistent with ship deck, warehouse, and crane sublevels streaming by distance.",perfBudget:"120 FPS target, screen-space rain reflections tuned for mid-range GPUs.",artDirection:"Rain streaks, sodium work lights, steel cranes, black water with teal signal reflections.",image:A1,accent:"#4aa7ba"},{id:"skybridge-helix",code:"M-06",name:"Skybridge Helix",biome:"Aerial platform",priority:"Launch Core",mode:"King of the hill / aerial insertion",scale:"190m vertical platform with exposed bridges",traversal:"Jump gaps, wind tunnels, rappel lines, vertical lift shafts",vehicles:"Valkyrie hover insertion and emergency pickup routes",aiForces:"Vulture strikers, Aegis orbs, Signal wardens",objective:"Hold the platform transmitter while aerial drones attempt to cut the bridge network.",ue5Prep:"Create wind volumes, fall-recovery rules, moving platform replication, and vertical nav links.",streaming:"Central tower persistent; bridge arms stream independently with distance HLOD.",perfBudget:"120 FPS target, cloud cards baked, vertical visibility controlled by fog layers.",artDirection:"Storm clouds, white platform plating, blue orbital glow, aircraft silhouettes.",image:O1,accent:"#9edfff"},{id:"subzero-relay",code:"M-07",name:"Subzero Relay Complex",biome:"Arctic communications base",priority:"Launch Core",mode:"Uplink sabotage / survival",scale:"240m x 170m, exterior base plus antenna interior",traversal:"Ice slides, ladder shafts, snowdrift cover, antenna catwalks",vehicles:"Wraith track carrier in snow camouflage",aiForces:"Hex snipers, Signal wardens, Aegis orbs",objective:"Disable the polar relay before AION geolocates the operator network.",ue5Prep:"Prepare snow deformation masks, low-visibility volumes, thermal readability materials, and cold audio filters.",streaming:"Exterior bowl persistent with antenna, bunker, and tunnel cells.",perfBudget:"110 FPS target, fog sheets and snow particles capped by camera altitude.",artDirection:"Blue-white ice, red warning strobes, frosted antennas, aurora interference lines.",image:P1,accent:"#bcecff"},{id:"jungle-signal-ruins",code:"M-08",name:"Jungle Signal Ruins",biome:"Overgrown tech ruin",priority:"Launch Core",mode:"Recon hunt / artifact recovery",scale:"260m x 220m, temple bowl with buried server rooms",traversal:"Root vaults, canopy routes, broken-stone climbs, underwater flank",vehicles:"Raptor recon vehicle on perimeter loop",aiForces:"Needle scouts, Shade stalkers, Dominion riflemen",objective:"Recover a Prime-era relay core before AION converts the ruin into a drone nest.",ue5Prep:"Use foliage actors with gameplay collision rules, Nanite rock kits, and navmesh cost volumes for dense vegetation.",streaming:"Canopy, temple, and underground cells stream around a central ruin objective.",perfBudget:"100 FPS target, foliage culling zones and fixed shadow cascades.",artDirection:"Wet leaves, old stone, glowing buried circuitry, shafts of green light.",image:U1,accent:"#70c879"},{id:"flooded-metro-grid",code:"M-09",name:"Flooded Metro Grid",biome:"Underground transit network",priority:"Expansion Ready",mode:"Search and destroy / tunnel chase",scale:"300m tunnel loop with two station arenas",traversal:"Train car vaults, water-slow lanes, maintenance shafts, platform drops",vehicles:"No vehicle driving; damaged metro train as moving hazard",aiForces:"Needle scouts, Aegis orbs, Reaper carrier drones",objective:"Move a signal package through flooded stations while AION tracks acoustic signatures.",ue5Prep:"Build water volumes, reflection captures, audio propagation zones, and moving train encounter splines.",streaming:"Tunnel cells stream around the player squad with station hubs kept persistent during objectives.",perfBudget:"110 FPS target, water material LODs and pooled splash VFX.",artDirection:"Dark tile, emergency red lights, knee-high water, flickering digital adverts.",image:w1,accent:"#5dc8d5"},{id:"orbital-debris-yard",code:"M-10",name:"Orbital Debris Yard",biome:"Space elevator wreckage",priority:"Expansion Ready",mode:"Low-gravity control / extraction",scale:"210m platform cluster with exterior void lanes",traversal:"Mag-boots, low-gravity jump arcs, airlock tunnels, rotating debris cover",vehicles:"Valkyrie docked as extraction craft",aiForces:"Aegis orbs, Vulture strikers, Seraph remote echoes",objective:"Extract a black-box AI shard from a broken orbital cargo ring.",ue5Prep:"Prototype gravity volumes, custom movement mode, tethered fall recovery, and replicated rotating debris.",streaming:"Clustered platform cells with background debris as HLOD impostors.",perfBudget:"90 FPS target, low-gravity physics capped to authored hero objects.",artDirection:"Stars, Earth glow, broken black plating, blue electrical arcs.",image:N1,accent:"#8da7ff"},{id:"mountain-battery",code:"M-11",name:"Mountain Battery Outpost",biome:"Alpine artillery base",priority:"Expansion Ready",mode:"Siege disable / long-range duel",scale:"360m ridge map with bunker interiors",traversal:"Cliff mantles, cable bridge crossings, bunker stairs, snow trench lanes",vehicles:"Rhino carrier used as shielded artillery approach",aiForces:"Hex snipers, Bastion gunners, Iron Apostle event",objective:"Disable AION rail cannons before they fire on allied transport routes.",ue5Prep:"Prepare long-sightline occlusion, HLOD mountain terrain, artillery telegraph VFX, and cover markers.",streaming:"Ridge lanes, bunker cells, and lower valley HLOD loaded by camera-facing distance.",perfBudget:"100 FPS target, distant terrain Nanite budget and scoped optic render limits.",artDirection:"Cold rock, artillery muzzle flash, steel bunkers, drifting snow.",image:L1,accent:"#c8d4dd"},{id:"hydro-dam-breach",code:"M-12",name:"Hydro Dam Breach",biome:"Megadam power facility",priority:"Expansion Ready",mode:"Multi-stage assault / power shutdown",scale:"340m dam face, turbine hall, control room",traversal:"Turbine catwalks, service elevators, spillway edges, maintenance ducts",vehicles:"Raptor approach route and Valkyrie final extraction",aiForces:"Dominion riflemen, Signal wardens, Reaper carriers",objective:"Shut down the dam’s AION power spine while floodgates change playable lanes.",ue5Prep:"Create replicated floodgate states, water hazard volumes, turbine audio zones, and encounter stage data assets.",streaming:"Exterior dam, turbine hall, and command room stream as stage-specific sublevels.",perfBudget:"100 FPS target, water VFX capped by phase and pooled debris simulation.",artDirection:"Concrete scale, roaring water, orange maintenance lights, teal power conduits.",image:C1,accent:"#5fc4e8"}],L_={Vector:[["Slide chain","+18% exit speed","Keeps momentum after a clean slide kill or breach dash, rewarding aggressive entries."],["Mantle recovery","-90ms weapon raise","Returns to fire-ready faster after vaults so vertical flanks feel sharp."],["Risk hook","Louder sprint tail","High speed creates readable audio pressure for defenders."]],Bulwark:[["Braced advance","-12% sprint speed","Moves slower but keeps weapon stability while crossing open lanes."],["Knockback resist","45% reduction","Heavy stance resists explosions, melee bumps, and shield impacts."],["Risk hook","Slow turn while braced","Commitment is punishable by flanks and quick angle swaps."]],Kitsune:[["Quiet route","-35% footstep radius","Crouch-walk and short sprint bursts produce softer positional reads."],["Mantle decoy","1 false step ping","A brief decoy footstep plays after ledge traversal to sell misdirection."],["Risk hook","Lower stumble resist","Taking damage during stealth routes slows recovery more than average."]],Mirage:[["Signal drift","+12% strafe blend","Strafes feel slippery during ability windows to support doorway misdirection."],["Ghost vault","0.18s shimmer","Vaulting through masked zones leaves a readable afterimage trail."],["Risk hook","No sprint bonus","Relies on deception rather than raw speed."]],Cinder:[["Heat stride","+10% through burn lanes","Moves faster across owned thermite lanes to reposition around denial zones."],["Ash slide","+0.2s slide sustain","Slides carry slightly longer when entering from sprint near active area denial."],["Risk hook","Bright movement VFX","Enhanced lane movement is easy to visually track."]],Lumine:[["Triage sprint","+14% toward allies","Gains speed when sprinting toward downed or low-health teammates."],["Revive crouch","+20% crouch speed","Can reposition while staying low during revive setup."],["Risk hook","Combat speed neutral","No duel mobility bonus when away from team play."]],Siren:[["Masked steps","2.5s audio dampen","Can briefly suppress team footstep spikes before a coordinated push."],["Pulse brake","Fast stop control","Decelerates quickly after sprint to bait audio reads and corner swings."],["Risk hook","Visible waveform","Audio masking creates subtle readable suit pulses."]],Monsoon:[["Smoke slip","+16% inside cover","Accelerates slightly while moving through owned smoke or dampening fields."],["Flow strafe","+10% direction swap","Changes lateral direction faster for controller-style lane shaping."],["Risk hook","Field dependent","Mobility identity weakens when abilities are on cooldown."]],Frostline:[["Anchor step","+18% ADS walk","Keeps tighter marksman movement while holding long angles."],["Cold retreat","+12% backpedal after hit","Can disengage from punished peeks without becoming a speed duelist."],["Risk hook","Slow mantle","+110ms ledge recovery keeps high-ground rotations committal."]],Relay:[["Link hop","Short ally tether","Gets a short reposition burst after linking with a nearby teammate."],["Squad tempo","+8% team sprint aura","Small movement benefit for allies rotating through her link radius."],["Risk hook","Requires proximity","Solo routes lose most mobility value."]],Citadel:[["Shoulder breach","Door shove impulse","Can push through light barricade contact without full stop."],["Armor gait","-8% sprint accel","Heavy gear starts slower but maintains steady push speed under fire."],["Risk hook","Large audio profile","Movement is intentionally easy to identify."]],Vanguard:[["Hard push","+18% tac sprint duration","Longer tactical sprint supports first-contact entries."],["Flash footing","No stumble on blind","Maintains basic movement control during flash resistance windows."],["Risk hook","Wide turn radius","Hard pushes need commitment and path planning."]],Condor:[["Climb burst","+24% climb speed","Fast ledge and rooftop traversal defines the vertical assault role."],["Aerial control","+0.14 air scalar","Better midair correction after grapple or high-ground drops."],["Risk hook","Landing noise spike","Aggressive vertical routes announce arrival."]],Scarab:[["Trap crawl","+18% crouch near devices","Moves faster while maintaining low profile around deployed traps."],["Lockdown pivot","+12% turn accel","Can rotate around objective traps without becoming a runner."],["Risk hook","Low chase speed","Weak at pursuing enemies outside prepared routes."]],Hammer:[["Heavy carry","-10% sprint speed","Big weapon kit moves slower but keeps suppression stable."],["Impact lunge","+18% melee reach","Short, heavy shove gives close-range space without dash mobility."],["Risk hook","Slow recovery","Missed lunges and slides take longer to recover."]],Circuit:[["Overclock step","+12% after hack","Brief speed bump after a successful drone or HUD interference action."],["Signal sidestep","+10% ADS strafe","Keeps small lateral corrections while using tech tools."],["Risk hook","Cooldown tied","Mobility spike depends on successful system interaction."]],Veloce:[["Burst strafe","+22% first step","Explosive first lateral step supports quick peeks and duel resets."],["Reset sprint","0.35s faster re-entry","Returns to sprint faster after weapon swap or slide cancel."],["Risk hook","Low sustain","Short bursts fade quickly in long chases."]],Lockjaw:[["Snare stance","+16% ADS hold speed","Can hold angles around traps while keeping steady micro-movement."],["Chase cut","+10% toward snared targets","Small chase bonus only when anti-mobility tools connect."],["Risk hook","No free escape","Defensive kit lacks raw disengage movement."]],Rift:[["Terrain read","+20% mantle after scan","Route scans unlock faster mantle and climb timing on marked paths."],["Pathfinder vault","Longer vault reach","Can clear slightly wider cover gaps with readable animation."],["Risk hook","Needs route setup","Unscanned terrain uses standard movement only."]],Null:[["Blackout drift","No radar sprint ping","Sprint pings are suppressed during blackout windows."],["Decoy brake","Instant stop fake","Can create a false movement stop to disrupt sensor reads."],["Risk hook","Lower acceleration","Baseline sprint starts slightly slower to offset stealth value."]],Forge:[["Workbench walk","Deploy while moving","Can place light hardpoints while walking instead of fully stopping."],["Repair shuffle","+16% strafe during repair","Keeps small movement while maintaining engineer interactions."],["Risk hook","No chase perk","Mobility supports setup, not pursuit."]]},YR=["Enhanced Input contexts for movement, combat, ability targeting, and controller aim tuning.","Gameplay Ability System tags drive cooldowns, lockouts, ultimate modifiers, and interrupt rules.","Owner-only cosmetic prediction fires instantly, then reconciles against server-confirmed ability state.","Animation layers split lower-body locomotion, upper-body weapon handling, additive recoil, and ability overlays.","Network relevancy, pooled VFX, compact tag replication, and event-based traces keep matches scalable."],ZR=["Idle","Walk","Sprint","Tac Sprint","Slide","Mantle","ADS","Fire","Reload","Ability","Hit React","Recovery","Death"],KR={name:"Mara Voss",codename:"Vector",gender:"Female",country:"Germany / Brazil",flag:"🇩🇪 🇧🇷",heritage:"German-Brazilian",role:"Mobile assault",specialization:"Momentum entries, vertical flanks, and pressure conversion."},ia=[KR,{name:"Amara Okonkwo",codename:"Bulwark",gender:"Female",country:"Nigeria",flag:"🇳🇬",heritage:"Igbo Nigerian",role:"Anchor defender",specialization:"Deployable cover, lane control, and anti-breach denial."},{name:"Yuki Tanaka",codename:"Kitsune",gender:"Female",country:"Japan",flag:"🇯🇵",heritage:"Japanese",role:"Recon infiltrator",specialization:"Silent routing, decoy pings, and precision flank timing."},{name:"Leila Haddad",codename:"Mirage",gender:"Female",country:"Lebanon",flag:"🇱🇧",heritage:"Lebanese Arab",role:"Disruption support",specialization:"Visual clutter, signal masking, and doorway misdirection."},{name:"Sofia Alvarez",codename:"Cinder",gender:"Female",country:"Mexico",flag:"🇲🇽",heritage:"Mexican",role:"Area denial",specialization:"Thermite lanes, reload pressure, and objective burn control."},{name:"Nadine Jean-Baptiste",codename:"Lumine",gender:"Female",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Combat medic",specialization:"Fast revives, temporary armor boosts, and triage routing."},{name:"Mireya Baptiste",codename:"Siren",gender:"Female",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Audio warfare",specialization:"Footstep masking, sonic reveals, and anti-rush disruption."},{name:"Priya Nair",codename:"Monsoon",gender:"Female",country:"India",flag:"🇮🇳",heritage:"Malayali Indian",role:"Tactical controller",specialization:"Smoke shaping, sightline breaks, and sensor dampening."},{name:"Ingrid Solberg",codename:"Frostline",gender:"Female",country:"Norway",flag:"🇳🇴",heritage:"Norwegian",role:"Marksman control",specialization:"Long-angle overwatch, slow fields, and retreat punishment."},{name:"Zoe Mensah",codename:"Relay",gender:"Female",country:"Ghana",flag:"🇬🇭",heritage:"Ghanaian",role:"Team mobility",specialization:"Short-range reposition links, squad tempo, and flank rescue."},{name:"Jean-Paul Desrosiers",codename:"Citadel",gender:"Male",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Shield breaker",specialization:"Armor cracking, barricade pressure, and breach follow-through."},{name:"Mathieu Toussaint",codename:"Vanguard",gender:"Male",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Point man",specialization:"First-contact survivability, flash resistance, and hard pushes."},{name:"Diego Rojas",codename:"Condor",gender:"Male",country:"Colombia",flag:"🇨🇴",heritage:"Colombian",role:"Vertical assault",specialization:"Grapple entries, rooftop angles, and high-ground duels."},{name:"Omar El-Sayed",codename:"Scarab",gender:"Male",country:"Egypt",flag:"🇪🇬",heritage:"Egyptian Arab",role:"Trap engineer",specialization:"Pressure mines, route prediction, and objective lockdown."},{name:"Marcus Reed",codename:"Hammer",gender:"Male",country:"United States",flag:"🇺🇸",heritage:"African American",role:"Heavy gunner",specialization:"Suppressive fire, cover shredding, and squad advance windows."},{name:"Park Tae-min",codename:"Circuit",gender:"Male",country:"South Korea",flag:"🇰🇷",heritage:"Korean",role:"Systems hacker",specialization:"Drone hijacks, HUD noise, and cooldown interference."},{name:"Luca Romano",codename:"Veloce",gender:"Male",country:"Italy",flag:"🇮🇹",heritage:"Italian",role:"Skirmisher",specialization:"Quick peeks, burst strafes, and duel reset timing."},{name:"Tomas Novak",codename:"Lockjaw",gender:"Male",country:"Czech Republic",flag:"🇨🇿",heritage:"Czech",role:"Anti-mobility",specialization:"Snare traps, dash denial, and chase interruption."},{name:"Amani Mwangi",codename:"Rift",gender:"Male",country:"Kenya",flag:"🇰🇪",heritage:"Kikuyu Kenyan",role:"Pathfinder",specialization:"Route scans, mantle boosts, and terrain-aware rotations."},{name:"Samir Khan",codename:"Null",gender:"Male",country:"Pakistan",flag:"🇵🇰",heritage:"Pakistani",role:"Counter-intel",specialization:"Recon denial, decoy signatures, and sensor blackout."},{name:"Mateo Silva",codename:"Forge",gender:"Male",country:"Brazil",flag:"🇧🇷",heritage:"Afro-Brazilian",role:"Combat engineer",specialization:"Portable hardpoints, ammo stations, and repair denial."}],N_={Vector:{front:F1,side:I1,back:B1},Bulwark:{front:X1,side:j1,back:V1},Kitsune:{front:GR,side:kR,back:HR},Mirage:{front:iR,side:nR,back:tR},Cinder:{front:zR,side:PR,back:OR},Lumine:{front:SR,side:yR,back:xR},Siren:{front:_R,side:vR,back:gR},Monsoon:{front:DR,side:CR,back:wR},Frostline:{front:Q1,side:K1,back:Z1},Relay:{front:XR,side:jR,back:VR},Citadel:{front:eR,side:$1,back:J1},Vanguard:{front:mR,side:pR,back:hR},Condor:{front:Y1,side:q1,back:W1},Scarab:{front:ER,side:bR,back:MR},Hammer:{front:cR,side:lR,back:oR},Circuit:{front:RR,side:AR,back:TR},Veloce:{front:sR,side:rR,back:aR},Lockjaw:{front:IR,side:FR,back:BR},Rift:{front:G1,side:k1,back:H1},Null:{front:NR,side:LR,back:UR},Forge:{front:dR,side:fR,back:uR}},O_={Vector:[["KX-9 Shardline","Primary carbine","27 body / 40 head","720 RPM","10-38m","30 rounds"],["P-17 Latch","Machine pistol","18 body / 27 head","950 RPM","0-15m","20 rounds"],["Shock Baton","Melee","50 quick / 90 heavy","0.32s hit frame","2.2m lunge","Combo reset"]],Bulwark:[["Aegis-12 Bastion","Primary shotgun","96 body / 124 head","92 RPM","0-12m","8 shells"],["R-40 Anchor","Heavy revolver","48 body / 72 head","180 RPM","0-24m","6 rounds"],["Tower Maul","Melee","65 quick / 115 heavy","0.42s hit frame","2.0m lunge","Armor stagger"]],Kitsune:[["S-19 Whisper","Suppressed SMG","22 body / 33 head","860 RPM","0-26m","34 rounds"],["Tanto-9 Ghost","Suppressed pistol","31 body / 46 head","360 RPM","0-18m","13 rounds"],["Ceramic Tanto","Melee","45 quick / 85 heavy","0.26s hit frame","2.4m lunge","Backstab bonus"]],Mirage:[["M7 Prism","Burst rifle","26 body / 39 head","690 RPM","12-42m","27 rounds"],["Fennec Pulse","Compact sidearm","24 body / 36 head","520 RPM","0-16m","16 rounds"],["Signal Knife","Melee","45 quick / 90 heavy","0.30s hit frame","2.2m lunge","Sensor tag"]],Cinder:[["HX-44 Ember","Thermite LMG","25 body / 36 head","650 RPM","10-34m","55 rounds"],["Flare-6 Compact","Flare pistol","38 body / 55 head","150 RPM","0-20m","1 round"],["Heat Axe","Melee","60 quick / 110 heavy","0.38s hit frame","2.1m lunge","Burn tick"]],Lumine:[["MediCore V9","Support SMG","21 body / 32 head","820 RPM","0-24m","32 rounds"],["Suture-15","Burst pistol","28 body / 42 head","480 RPM","0-18m","15 rounds"],["Rescue Baton","Melee","42 quick / 80 heavy","0.28s hit frame","2.1m lunge","Revive cancel safe"]],Siren:[["Wail-3 Resonator","Sonic rifle","24 body / 35 head","700 RPM","8-32m","30 rounds"],["Mute-11 Sidearm","Damped pistol","30 body / 45 head","390 RPM","0-18m","14 rounds"],["Tuning Blade","Melee","46 quick / 88 heavy","0.31s hit frame","2.2m lunge","Audio reveal"]],Monsoon:[["R-7 Cloudburst","Tactical AR","26 body / 38 head","680 RPM","10-40m","30 rounds"],["Mist-18","Utility pistol","25 body / 38 head","430 RPM","0-17m","18 rounds"],["Katar Relay","Melee","48 quick / 92 heavy","0.29s hit frame","2.2m lunge","Smoke exit"]],Frostline:[["N-88 Glacier","Marksman rifle","62 body / 96 head","170 RPM","24-70m","12 rounds"],["Fjord-9","Precision pistol","34 body / 51 head","330 RPM","0-22m","10 rounds"],["Ice Pick","Melee","52 quick / 96 heavy","0.33s hit frame","2.0m lunge","Slow tag"]],Relay:[["Link-45 Vector","Compact AR","24 body / 36 head","760 RPM","8-32m","30 rounds"],["Hopline PDW","Machine pistol","17 body / 26 head","980 RPM","0-14m","22 rounds"],["Relay Tonfa","Melee","46 quick / 86 heavy","0.28s hit frame","2.3m lunge","Swap cancel"]],Citadel:[["Breach-10 Mason","Slug shotgun","82 body / 120 head","105 RPM","0-20m","7 shells"],["Rampart .50","Hand cannon","55 body / 82 head","155 RPM","0-28m","5 rounds"],["Breaker Hammer","Melee","70 quick / 125 heavy","0.45s hit frame","1.9m lunge","Shield crack"]],Vanguard:[["V-30 Pointman","Assault rifle","28 body / 41 head","640 RPM","10-38m","32 rounds"],["Guard-12","Tactical sidearm","32 body / 48 head","360 RPM","0-20m","12 rounds"],["Combat Kukri","Melee","52 quick / 98 heavy","0.32s hit frame","2.2m lunge","Flash resist"]],Condor:[["Talon-5 Carbine","Light carbine","25 body / 37 head","780 RPM","8-34m","28 rounds"],["Aerie-2","Climb pistol","27 body / 41 head","450 RPM","0-16m","15 rounds"],["Grapple Hook Blade","Melee","48 quick / 90 heavy","0.30s hit frame","2.5m lunge","Air cancel"]],Scarab:[["Khepri-4 AR","Trap rifle","27 body / 40 head","620 RPM","12-44m","30 rounds"],["Scarab Stinger","Dart pistol","22 body / 34 head","500 RPM","0-18m","12 darts"],["Hooked Khopesh","Melee","55 quick / 100 heavy","0.35s hit frame","2.0m lunge","Trap trigger"]],Hammer:[["M60 Atlas","Heavy LMG","31 body / 43 head","560 RPM","14-50m","75 rounds"],["Breaker-8","Sawed sidearm","70 body / 98 head","115 RPM","0-8m","2 shells"],["Breach Sledge","Melee","75 quick / 135 heavy","0.48s hit frame","1.8m lunge","Cover shred"]],Circuit:[["Arc-22 Carbine","Smart carbine","24 body / 36 head","740 RPM","8-36m","30 rounds"],["ShortBus EMP","EMP pistol","18 body / 27 head","600 RPM","0-15m","18 rounds"],["Livewire Baton","Melee","45 quick / 85 heavy","0.30s hit frame","2.1m lunge","Cooldown zap"]],Veloce:[["VX-11 Sprint","Duel SMG","20 body / 30 head","920 RPM","0-24m","36 rounds"],["Stiletto-7","Fast pistol","26 body / 39 head","540 RPM","0-16m","17 rounds"],["Carbon Stiletto","Melee","44 quick / 82 heavy","0.24s hit frame","2.6m lunge","Duel reset"]],Lockjaw:[["Clamp-40 DMR","Anti-mobility DMR","48 body / 72 head","260 RPM","18-56m","16 rounds"],["Snare-9","Tether pistol","24 body / 36 head","460 RPM","0-18m","15 rounds"],["Jaw Trap Blade","Melee","54 quick / 100 heavy","0.34s hit frame","2.0m lunge","Dash snare"]],Rift:[["Trail-6 Scout","Scout rifle","42 body / 63 head","300 RPM","18-58m","18 rounds"],["Path-12 Compact","Trail pistol","29 body / 44 head","410 RPM","0-20m","14 rounds"],["Rift Machete","Melee","55 quick / 102 heavy","0.33s hit frame","2.3m lunge","Mantle boost"]],Null:[["Blackout-13","Suppressed DMR","45 body / 68 head","280 RPM","16-54m","15 rounds"],["Void-5","Jammer pistol","21 body / 32 head","620 RPM","0-14m","20 rounds"],["Null Spike","Melee","47 quick / 90 heavy","0.30s hit frame","2.2m lunge","Sensor blank"]],Forge:[["Anvil-27 AR","Engineer rifle","27 body / 40 head","650 RPM","10-40m","34 rounds"],["Rivet-3","Nail sidearm","35 body / 52 head","300 RPM","0-20m","9 rounds"],["Forge Wrench","Melee","58 quick / 108 heavy","0.36s hit frame","2.0m lunge","Repair denial"]]};function QR(o,t,i,r){const l=o*(1-r)+40*r,d=(Math.ceil(i/l)-1)*60/t;return Math.max(d,.08).toFixed(2)}function Oo(o,t,i=88){const r=Math.abs((o-t+540)%360-180);return Math.max(0,1-r/i)}function P_(o){const t=o.replace("#","");return t==="operators"||t==="enemies"||t==="transport"||t==="scenes"||t==="simulation"||t==="systems"||t==="combat"?t:"home"}function JR(o){const t=o.role.split(" ")[0]??"Adaptive",i=o.heritage.split(/[\s-]/)[0]??"Global",r=o.specialization.split(",")[0].replace(".","");return[t,i,r,o.gender==="Female"?"Precision-led":"Pressure-ready"]}function $R(){const[o,t]=Yt.useState(()=>P_(window.location.hash)),[i,r]=Yt.useState(U_[0]),[l,u]=Yt.useState(50),[d,h]=Yt.useState(35),[m,p]=Yt.useState(0),[x,y]=Yt.useState("All"),[S,M]=Yt.useState(Ri[0].id),[T,w]=Yt.useState(Ia[0].id),[b,v]=Yt.useState(Ha[0].id),G=Yt.useRef(null),P=Yt.useRef(null),[U,X]=Yt.useState({angle:0,glareX:50,glareY:35,rotateX:0}),k=Yt.useRef(0),I=Yt.useMemo(()=>QR(27,720,100+l,d/100),[l,d]),$=100+l,R=ia[m],D=N_[R.codename],F=["Vector","Bulwark","Kitsune","Siren"],de=[R,...ia.filter(B=>B.codename!==R.codename&&F.includes(B.codename))].slice(0,4).map(B=>({art:N_[B.codename],codename:B.codename,name:B.name})),ce=O_[R.codename]??O_.Vector,ue=L_[R.codename]??L_.Vector,pe=Ri.find(B=>B.id===S)??Ri[0],O=Ia.find(B=>B.id===T)??Ia[0],q=Ha.find(B=>B.id===b)??Ha[0],Z=x==="All"?Ri:Ri.filter(B=>B.enemyClass===x),oe=Yt.useMemo(()=>U_.map(B=>({...B,name:B.type==="Ultimate"?`Overclock ${R.codename}`:B.name,purpose:B.type==="Ultimate"?`10s ${R.role.toLowerCase()} tempo spike tuned for ${R.specialization.toLowerCase()}`:B.purpose.replace("entry, chase, and escape chains",`${R.role.toLowerCase()} execution windows`),vfx:B.type==="Ultimate"?`${R.codename} suit lines intensify with role-colored movement trails and a clean activation pulse.`:B.vfx})),[R]),me=oe.find(B=>B.keyboard===i.keyboard&&B.controller===i.controller)??oe[0],L=(U.angle%360+360)%360,j=Math.max(Oo(L,90),Oo(L,270)),_e=L>180?-1:1,Te={"--back-opacity":`${Oo(L,180)}`,"--front-opacity":`${Math.max(Oo(L,0),Oo(L,360))}`,"--glare-x":`${U.glareX}%`,"--glare-y":`${U.glareY}%`,"--side-opacity":`${j}`,"--side-scale":`${_e}`,"--turn-angle":`${U.angle}deg`,"--rotate-x":`${U.rotateX}deg`};function K(B){t(B),window.history.replaceState(null,"",`#${B}`),window.scrollTo({top:0,behavior:"smooth"})}function xe(B){if(y(B),B!=="All"&&pe.enemyClass!==B){const Ne=Ri.find(Le=>Le.enemyClass===B);Ne&&M(Ne.id)}}function ge(B){w(B),window.requestAnimationFrame(()=>{var Ne,Le;(Ne=G.current)==null||Ne.focus({preventScroll:!0}),(Le=G.current)==null||Le.scrollIntoView({behavior:"smooth",block:"start"})})}function He(B){v(B),window.requestAnimationFrame(()=>{var Ne,Le;(Ne=P.current)==null||Ne.focus({preventScroll:!0}),(Le=P.current)==null||Le.scrollIntoView({behavior:"smooth",block:"start"})})}function Oe(B){const Ne=(B+ia.length)%ia.length;p(Ne),X({angle:0,glareX:50,glareY:35,rotateX:0})}function Je(B){p(Ne=>(Ne+B+ia.length)%ia.length),X({angle:0,glareX:50,glareY:35,rotateX:0})}Yt.useEffect(()=>{function B(Ne){(Ne.key==="ArrowRight"||Ne.key==="ArrowDown")&&(Ne.preventDefault(),Je(1)),(Ne.key==="ArrowLeft"||Ne.key==="ArrowUp")&&(Ne.preventDefault(),Je(-1)),Ne.key==="Home"&&(Ne.preventDefault(),Oe(0))}return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[]),Yt.useEffect(()=>{function B(){t(P_(window.location.hash)),window.scrollTo({top:0,behavior:"smooth"})}return window.addEventListener("hashchange",B),()=>window.removeEventListener("hashchange",B)},[]),Yt.useEffect(()=>{let B=0;function Ne(){var Fe,at;const[Le]=navigator.getGamepads?navigator.getGamepads():[],ht=performance.now();if(Le&&ht-k.current>260){const Vt=Le.axes[0]??0,jt=((Fe=Le.buttons[14])==null?void 0:Fe.pressed)||Vt<-.65;((at=Le.buttons[15])==null?void 0:at.pressed)||Vt>.65?(Je(1),k.current=ht):jt&&(Je(-1),k.current=ht)}B=requestAnimationFrame(Ne)}return B=requestAnimationFrame(Ne),()=>cancelAnimationFrame(B)},[]);function Lt(B){const Ne=B.currentTarget.getBoundingClientRect(),Le=(B.clientX-Ne.left)/Ne.width,ht=(B.clientY-Ne.top)/Ne.height,Fe=ht-.5;X({angle:Math.round(Le*360),glareX:Math.round(Le*100),glareY:Math.round(ht*100),rotateX:Number((-Fe*10).toFixed(2))})}function ct(){X(B=>({...B,glareX:50,glareY:35,rotateX:0}))}function H(B){X({angle:B,glareX:Math.round(B/360*100),glareY:35,rotateX:0})}const ut=g.jsxs("nav",{className:"operator-rail",id:o==="operators"?"operators":`${o}-operators`,"aria-label":"Quick operator selection",children:[g.jsxs("div",{className:"operator-rail-header",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Operator select"}),g.jsxs("strong",{children:[ia.length," playable characters"]})]}),g.jsx("span",{children:"Click, arrows, or controller"})]}),g.jsx("div",{className:"operator-rail-list",children:ia.map((B,Ne)=>g.jsxs("button",{"aria-current":Ne===m?"true":void 0,className:Ne===m?"operator-pill active":"operator-pill",onClick:()=>Oe(Ne),type:"button",children:[g.jsx("span",{className:"operator-pill-flag",children:B.flag}),g.jsxs("span",{className:"operator-pill-copy",children:[g.jsx("strong",{children:B.codename}),g.jsx("small",{children:B.name})]})]},`rail-${B.codename}-${B.name}`))})]});return g.jsxs("main",{className:"app-shell",children:[g.jsxs("header",{className:"game-topbar","aria-label":"AION Prime navigation",children:[g.jsxs("button",{className:"game-brand",onClick:()=>K("home"),type:"button","aria-label":"AION Prime home",children:[g.jsx("span",{children:"AION"}),g.jsx("strong",{children:"Prime"})]}),g.jsxs("nav",{className:"game-nav","aria-label":"Page sections",children:[g.jsx("button",{"aria-current":o==="home"?"page":void 0,onClick:()=>K("home"),type:"button",children:"Home"}),g.jsx("button",{"aria-current":o==="operators"?"page":void 0,onClick:()=>K("operators"),type:"button",children:"Operators"}),g.jsx("button",{"aria-current":o==="enemies"?"page":void 0,onClick:()=>K("enemies"),type:"button",children:"Enemy Forces"}),g.jsx("button",{"aria-current":o==="transport"?"page":void 0,onClick:()=>K("transport"),type:"button",children:"Transport"}),g.jsx("button",{"aria-current":o==="scenes"?"page":void 0,onClick:()=>K("scenes"),type:"button",children:"Combat Scenes"}),g.jsx("button",{"aria-current":o==="simulation"?"page":void 0,onClick:()=>K("simulation"),type:"button",children:"Simulation"}),g.jsx("button",{"aria-current":o==="systems"?"page":void 0,onClick:()=>K("systems"),type:"button",children:"Systems"}),g.jsx("button",{"aria-current":o==="combat"?"page":void 0,onClick:()=>K("combat"),type:"button",children:"Combat Systems"})]})]}),o==="home"&&g.jsxs("section",{className:"game-home",id:"home",style:{"--home-bg":`url(${l1})`},children:[g.jsxs("div",{className:"game-home-copy",children:[g.jsx("p",{className:"eyebrow",children:"AAA tactical AI FPS"}),g.jsx("h1",{children:"AION Prime"}),g.jsx("p",{className:"game-home-subtitle",children:"Lead a global roster of Prime operators into adaptive combat zones where vehicle cover, squad timing, battlefield AI, and high-skill movement decide every fight."}),g.jsxs("div",{className:"hero-cta-row","aria-label":"AION Prime home actions",children:[g.jsx("button",{className:"primary-cta enter-game-cta",onClick:()=>K("operators"),type:"button",children:"Enter game"}),g.jsx("button",{className:"secondary-cta",onClick:()=>K("simulation"),type:"button",children:"Preview combat scene"})]}),g.jsxs("div",{className:"home-feature-grid","aria-label":"AION Prime feature pillars",children:[g.jsxs("article",{children:[g.jsx("span",{children:"01"}),g.jsx("strong",{children:"Prime roster"}),g.jsx("p",{children:"21 global operators with role-specific weapons, flags, and readable combat identities."})]}),g.jsxs("article",{children:[g.jsx("span",{children:"02"}),g.jsx("strong",{children:"Vehicle warfare"}),g.jsx("p",{children:"Mounted-gun combat vehicles shape lanes, cover choices, and tactical pressure."})]}),g.jsxs("article",{children:[g.jsx("span",{children:"03"}),g.jsx("strong",{children:"Engineer ready"}),g.jsx("p",{children:"Movement, abilities, networking, animation, and balancing details built for review."})]})]})]}),g.jsxs("div",{className:"game-home-panel","aria-label":"AION Prime launch telemetry",children:[g.jsx("span",{children:"Current operation"}),g.jsx("strong",{children:"Hangar breach"}),g.jsx("p",{children:"Enter the operator page, select a Prime unit, inspect the 360 kit, then move into the live scene."}),g.jsxs("dl",{children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Operators"}),g.jsx("dd",{children:ia.length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Scene"}),g.jsx("dd",{children:"Live"})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Build"}),g.jsx("dd",{children:"UE5-ready"})]})]})]})]}),o==="operators"&&g.jsxs(g.Fragment,{children:[ut,g.jsxs("section",{className:"hero",style:{"--hero-bg":`url(${g0})`},children:[g.jsxs("div",{className:"hero-copy",children:[g.jsx("p",{className:"eyebrow",children:"Character overview"}),g.jsxs("div",{className:"hero-title-row",children:[g.jsx("h1",{children:R.name}),g.jsx("span",{children:R.codename})]}),g.jsxs("p",{className:"subtitle",children:[R.flag," ",R.country," origin / ",R.heritage," /"," ",R.role]}),g.jsxs("p",{className:"hero-overview",children:[R.specialization," Built for a modern Unreal Engine 5 multiplayer shooter with readable silhouette, fast combat decisions, and responsive 360 inspection."]}),g.jsxs("div",{className:"featured-prime-card","aria-label":"Selected operator overview",children:[g.jsxs("span",{children:[R.flag," ",R.country]}),g.jsxs("strong",{children:[R.name," / ",R.codename]}),g.jsxs("p",{children:[R.heritage," / ",R.role," / ",R.specialization]})]})]}),g.jsxs("div",{className:"operator-visual","aria-label":`Interactive 3D ${R.codename} character visualization`,onPointerLeave:ct,onPointerMove:Lt,style:Te,children:[g.jsxs("div",{className:"turntable-hud",children:[g.jsx("span",{children:"360 turntable"}),g.jsxs("strong",{children:[U.angle," deg"]})]}),g.jsx("div",{className:"weapon-stack","aria-label":`${R.codename} weapon loadout`,children:ce.map(([B,Ne,Le,ht])=>g.jsxs("article",{className:"weapon-stack-item",children:[g.jsx("div",{className:"weapon-silhouette","aria-hidden":"true",children:g.jsx("span",{})}),g.jsxs("div",{children:[g.jsx("small",{children:Ne}),g.jsx("strong",{children:B}),g.jsxs("p",{children:[Le," / ",ht]})]})]},`visual-${B}`))}),g.jsx("div",{className:"soldier-stage",children:g.jsxs("div",{className:"real-character-turntable","aria-label":`Realistic ${R.name} character viewer`,children:[g.jsx("img",{className:"character-view front-view",src:D.front,alt:`${R.name} front view`}),g.jsx("img",{className:"character-view side-view",src:D.side,alt:`${R.name} side view`}),g.jsx("img",{className:"character-view back-view",src:D.back,alt:`${R.name} back view`}),g.jsx("div",{className:"turntable-floor"}),g.jsx("div",{className:"view-marker front-marker",children:"Front"}),g.jsx("div",{className:"view-marker side-marker",children:"Side"}),g.jsx("div",{className:"view-marker back-marker",children:"Back"})]})}),g.jsx("div",{className:"turntable-track","aria-hidden":"true",children:g.jsx("span",{})}),g.jsxs("label",{className:"turntable-control",children:["Rotate ",R.codename,g.jsx("input",{type:"range",min:"0",max:"360",value:U.angle,onChange:B=>H(Number(B.target.value)),onInput:B=>H(Number(B.currentTarget.value))})]})]})]}),g.jsxs("section",{className:"metrics-strip","aria-label":"Core balancing metrics",children:[g.jsxs("div",{children:[g.jsx("span",{children:"Health"}),g.jsx("strong",{children:"100"})]}),g.jsxs("div",{children:[g.jsx("span",{children:"Armor"}),g.jsx("strong",{children:l})]}),g.jsxs("div",{children:[g.jsx("span",{children:"Effective HP"}),g.jsx("strong",{children:$})]}),g.jsxs("div",{children:[g.jsx("span",{children:"Avg TTK"}),g.jsxs("strong",{children:[I,"s"]})]})]})]}),o==="enemies"&&g.jsxs(g.Fragment,{children:[g.jsxs("section",{className:"enemy-command-header",id:"enemies",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"AION hostile index"}),g.jsx("h1",{children:"Enemy Forces"})]}),g.jsxs("dl",{className:"enemy-command-stats","aria-label":"Enemy force counts",children:[g.jsxs("div",{children:[g.jsx("dt",{children:"All"}),g.jsx("dd",{children:Ri.length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Henchmen"}),g.jsx("dd",{children:Ri.filter(B=>B.enemyClass==="Henchman").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Drones"}),g.jsx("dd",{children:Ri.filter(B=>B.enemyClass==="Drone").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Cyborgs"}),g.jsx("dd",{children:Ri.filter(B=>B.enemyClass==="Cyborg").length})]})]})]}),g.jsxs("section",{className:"enemy-browser","aria-label":"AION Prime enemy force browser",children:[g.jsxs("aside",{className:"enemy-selector",children:[g.jsxs("div",{className:"enemy-selector-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Threat roster"}),g.jsx("h2",{children:"Combat units"})]}),g.jsx("strong",{children:Z.length})]}),g.jsx("div",{className:"enemy-filter","aria-label":"Filter enemy units",children:["All","Henchman","Drone","Cyborg"].map(B=>g.jsx("button",{"aria-pressed":x===B,onClick:()=>xe(B),type:"button",children:B==="All"?"All units":`${B}s`},B))}),g.jsx("div",{className:"enemy-force-list",children:Z.map(B=>g.jsxs("button",{"aria-pressed":pe.id===B.id,className:"enemy-force-option",onClick:()=>M(B.id),type:"button",children:[g.jsx("span",{className:"enemy-force-thumb",children:g.jsx("img",{alt:"",src:B.image})}),g.jsxs("span",{className:"enemy-force-option-copy",children:[g.jsx("small",{children:B.designation}),g.jsx("strong",{children:B.name}),g.jsxs("span",{children:[B.enemyClass," / ",B.role]})]}),g.jsx("i",{className:`enemy-level threat-${B.threat.toLowerCase()}`,"aria-label":`${B.threat} threat`})]},B.id))})]}),g.jsxs("article",{className:"enemy-force-viewer","aria-live":"polite",children:[g.jsxs("div",{className:"enemy-force-visual",children:[g.jsx("img",{alt:`${pe.name} combat unit`,src:pe.image}),g.jsxs("div",{className:"enemy-force-overlay",children:[g.jsx("span",{className:"enemy-class",children:pe.enemyClass}),g.jsxs("span",{className:`enemy-threat threat-${pe.threat.toLowerCase()}`,children:[pe.threat," threat"]})]}),g.jsxs("div",{className:"enemy-force-identity",children:[g.jsx("small",{children:pe.designation}),g.jsx("h2",{children:pe.name}),g.jsx("strong",{children:pe.role})]})]}),g.jsxs("div",{className:"enemy-force-details",children:[g.jsx("p",{children:pe.description}),g.jsxs("dl",{children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Armament"}),g.jsx("dd",{children:pe.armament})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Behavior"}),g.jsx("dd",{children:pe.behavior})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Counterplay"}),g.jsx("dd",{children:pe.weakness})]})]})]})]})]})]}),o==="transport"&&g.jsxs(g.Fragment,{children:[g.jsxs("section",{className:"transport-command-header",id:"transport",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Operator mobility fleet"}),g.jsx("h1",{children:"Transport"})]}),g.jsxs("dl",{className:"transport-command-stats","aria-label":"Transport fleet counts",children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Total"}),g.jsx("dd",{children:Ia.length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Aerial"}),g.jsx("dd",{children:Ia.filter(B=>B.transportClass==="Aerial").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Ground"}),g.jsx("dd",{children:Ia.filter(B=>B.transportClass==="Ground").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Selected"}),g.jsx("dd",{children:O.transportClass})]})]})]}),g.jsxs("section",{className:"transport-browser","aria-label":"AION Prime operator transport browser",children:[g.jsxs("aside",{className:"transport-selector",children:[g.jsxs("div",{className:"transport-selector-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Fleet roster"}),g.jsx("h2",{children:"Transport platforms"})]}),g.jsx("strong",{children:Ia.length})]}),g.jsx("div",{className:"transport-force-list",children:Ia.map(B=>g.jsxs("button",{"aria-pressed":O.id===B.id,"aria-controls":"transport-viewer",className:"transport-force-option",onClick:()=>ge(B.id),type:"button",children:[g.jsx("span",{className:"transport-force-thumb",children:g.jsx("img",{alt:"",src:B.image})}),g.jsxs("span",{className:"transport-force-option-copy",children:[g.jsx("small",{children:B.designation}),g.jsx("strong",{children:B.name}),g.jsxs("span",{children:[B.transportClass," / ",B.role]})]}),g.jsx("span",{className:"transport-force-action",children:"View"})]},B.id))})]}),g.jsxs("article",{className:"transport-force-viewer",id:"transport-viewer",ref:G,tabIndex:-1,"aria-live":"polite",children:[g.jsxs("div",{className:"transport-force-visual",children:[g.jsx("img",{alt:`${O.name} operator transport`,src:O.image}),g.jsxs("div",{className:"transport-force-overlay",children:[g.jsx("span",{className:"transport-class",children:O.transportClass}),g.jsx("span",{children:O.capacity})]}),g.jsxs("div",{className:"transport-force-identity",children:[g.jsx("small",{children:O.designation}),g.jsx("h2",{children:O.name}),g.jsx("strong",{children:O.role})]})]}),g.jsxs("div",{className:"transport-force-details",children:[g.jsx("p",{children:O.operatorUse}),g.jsxs("dl",{children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Speed"}),g.jsx("dd",{children:O.speed})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Terrain"}),g.jsx("dd",{children:O.terrain})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Deployment"}),g.jsx("dd",{children:O.deployment})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Protection"}),g.jsx("dd",{children:O.protection})]})]})]})]})]})]}),o==="scenes"&&g.jsxs(g.Fragment,{children:[g.jsxs("section",{className:"scene-command-header",id:"scenes",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"UE5 map production plan"}),g.jsx("h1",{children:"Combat Scenes"}),g.jsx("p",{children:"Realistic target: 12 combat scenes total, with 4 built first as the playable UE5 vertical slice."})]}),g.jsxs("dl",{className:"scene-command-stats","aria-label":"Combat scene production counts",children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Total maps"}),g.jsx("dd",{children:Ha.length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"First playable"}),g.jsx("dd",{children:Ha.filter(B=>B.priority==="Playable Slice").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Launch core"}),g.jsx("dd",{children:Ha.filter(B=>B.priority==="Launch Core").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Expansion"}),g.jsx("dd",{children:Ha.filter(B=>B.priority==="Expansion Ready").length})]})]})]}),g.jsxs("section",{className:"scene-browser","aria-label":"AION Prime combat scene browser",children:[g.jsxs("aside",{className:"scene-selector",children:[g.jsxs("div",{className:"scene-selector-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Scene roster"}),g.jsx("h2",{children:"12 UE5-ready maps"})]}),g.jsx("strong",{children:"12"})]}),g.jsxs("div",{className:"scene-production-note",children:[g.jsx("strong",{children:"Build order"}),g.jsx("p",{children:"Block out the 4 playable-slice maps first, then reuse their modular kits, AI rules, and streaming budgets across the remaining 8."})]}),g.jsx("div",{className:"scene-list",children:Ha.map(B=>g.jsxs("button",{"aria-controls":"scene-viewer","aria-pressed":q.id===B.id,className:"scene-option",onClick:()=>He(B.id),style:{"--scene-accent":B.accent},type:"button",children:[g.jsxs("span",{className:"scene-thumb",children:[g.jsx("img",{alt:"",src:B.image}),g.jsx("i",{children:B.code})]}),g.jsxs("span",{className:"scene-option-copy",children:[g.jsx("small",{children:B.priority}),g.jsx("strong",{children:B.name}),g.jsxs("span",{children:[B.biome," / ",B.mode]})]}),g.jsx("span",{className:"scene-option-action",children:"View"})]},B.id))})]}),g.jsxs("article",{className:"scene-viewer",id:"scene-viewer",ref:P,style:{"--scene-bg":`url(${q.image})`,"--scene-accent":q.accent},tabIndex:-1,"aria-live":"polite",children:[g.jsxs("div",{className:"scene-visual",children:[g.jsx("img",{alt:`${q.name} production reference`,src:q.image}),g.jsxs("div",{className:"scene-visual-overlay",children:[g.jsx("span",{children:q.code}),g.jsx("span",{children:q.priority})]}),g.jsxs("div",{className:"scene-identity",children:[g.jsx("small",{children:q.biome}),g.jsx("h2",{children:q.name}),g.jsx("strong",{children:q.mode})]})]}),g.jsxs("div",{className:"scene-details",children:[g.jsx("p",{children:q.objective}),g.jsxs("div",{className:"scene-detail-grid",children:[g.jsxs("article",{children:[g.jsx("span",{children:"Scale"}),g.jsx("strong",{children:q.scale})]}),g.jsxs("article",{children:[g.jsx("span",{children:"Traversal"}),g.jsx("strong",{children:q.traversal})]}),g.jsxs("article",{children:[g.jsx("span",{children:"Vehicles"}),g.jsx("strong",{children:q.vehicles})]}),g.jsxs("article",{children:[g.jsx("span",{children:"AI Forces"}),g.jsx("strong",{children:q.aiForces})]})]}),g.jsxs("div",{className:"scene-ue5-grid","aria-label":`${q.name} UE5 preparation`,children:[g.jsxs("article",{children:[g.jsx("span",{children:"UE5 Setup"}),g.jsx("p",{children:q.ue5Prep})]}),g.jsxs("article",{children:[g.jsx("span",{children:"Streaming"}),g.jsx("p",{children:q.streaming})]}),g.jsxs("article",{children:[g.jsx("span",{children:"Performance"}),g.jsx("p",{children:q.perfBudget})]}),g.jsxs("article",{children:[g.jsx("span",{children:"Art Direction"}),g.jsx("p",{children:q.artDirection})]})]})]})]})]})]}),o==="simulation"&&g.jsx(o1,{codename:R.codename,operatorName:R.name,role:R.role,weapons:ce,characterArt:D,squad:de}),o==="systems"&&g.jsxs(g.Fragment,{children:[ut,g.jsxs("section",{className:"two-column",children:[g.jsxs("article",{className:"panel overview-panel",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Character overview"}),g.jsxs("h2",{children:[R.flag," ",R.name,", codename ",R.codename]})]}),g.jsxs("p",{children:[R.name," is a ",R.heritage," ",R.role.toLowerCase()," operator from ",R.flag," ",R.country,". ",R.specialization," The systems profile below updates this operator's movement expectations, bindings, abilities, weapons, and engineering review surface."]}),g.jsx("div",{className:"trait-grid",children:JR(R).map(B=>g.jsx("span",{children:B},B))})]}),g.jsxs("article",{className:"panel tuning-panel",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Live balance sandbox"}),g.jsx("h2",{children:"TTK tuning assumptions"})]}),g.jsxs("label",{children:["Armor value",g.jsx("input",{type:"range",min:"0",max:"100",step:"5",value:l,onChange:B=>u(Number(B.target.value))})]}),g.jsxs("label",{children:["Headshot accuracy",g.jsx("input",{type:"range",min:"0",max:"75",step:"5",value:d,onChange:B=>h(Number(B.target.value))})]}),g.jsxs("p",{children:[ce[0][0]," weighted TTK against ",$," HP at ",d,"% headshot rate:"," ",g.jsxs("strong",{children:[I,"s"]})]})]})]}),g.jsxs("section",{className:"section-block",id:"systems",children:[g.jsxs("div",{className:"section-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Core movement systems"}),g.jsx("h2",{children:"Responsiveness first, animation clean second, never animation last"})]}),g.jsxs("p",{className:"section-note",children:["These are shared FPS rules. ",R.codename,"'s unique movement layer is tuned below."]})]}),g.jsx("div",{className:"movement-grid",children:qR.map(([B,Ne,Le])=>g.jsxs("article",{className:"system-card",children:[g.jsx("span",{children:Ne}),g.jsx("h3",{children:B}),g.jsx("p",{children:Le})]},B))})]}),g.jsxs("section",{className:"section-block mobility-signature-section",children:[g.jsxs("div",{className:"section-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Character mobility signature"}),g.jsxs("h2",{children:[R.codename," moves differently from the shared baseline"]})]}),g.jsx("p",{className:"section-note",children:"Per-operator tuning adds mastery without breaking the universal controller feel."})]}),g.jsx("div",{className:"mobility-signature-grid",children:ue.map(([B,Ne,Le])=>g.jsxs("article",{className:"mobility-signature-card",children:[g.jsx("span",{children:Ne}),g.jsx("h3",{children:B}),g.jsx("p",{children:Le})]},`${R.codename}-${B}`))})]}),g.jsxs("section",{className:"section-block input-section",children:[g.jsxs("div",{className:"section-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Input and abilities"}),g.jsxs("h2",{children:["Explicit action bindings for ",R.codename]})]}),g.jsx("p",{className:"section-note",children:"Shared movement inputs stay universal; abilities change behavior per operator while keeping the same tactical button layout."})]}),g.jsxs("div",{className:"input-layout",children:[g.jsxs("article",{className:"panel ability-bindings-panel",children:[g.jsxs("div",{className:"ability-title",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Selected loadout"}),g.jsx("h3",{children:R.name})]}),g.jsx("strong",{children:R.codename})]}),g.jsx("div",{className:"ability-binding-grid","aria-label":`${R.codename} ability bindings`,children:oe.map(B=>g.jsxs("article",{className:"ability-binding-card",children:[g.jsxs("div",{children:[g.jsx("span",{children:B.type}),g.jsx("h3",{children:B.name}),g.jsx("p",{children:B.purpose})]}),g.jsxs("div",{className:"binding-chips","aria-label":`${B.name} controls`,children:[g.jsxs("span",{children:[g.jsx("small",{children:"Keyboard"}),g.jsx("strong",{children:B.keyboard})]}),g.jsxs("span",{children:[g.jsx("small",{children:"Controller"}),g.jsx("strong",{children:B.controller})]}),g.jsxs("span",{children:[g.jsx("small",{children:"Cooldown"}),g.jsx("strong",{children:B.cooldown})]})]})]},`binding-${B.name}`))})]}),g.jsxs("article",{className:"input-map-panel",children:[g.jsxs("div",{className:"input-map-row input-map-header",role:"row",children:[g.jsx("span",{children:"Action"}),g.jsx("span",{children:"Keyboard"}),g.jsx("span",{children:"Controller"}),g.jsx("span",{children:"Engineering behavior"})]}),WR.map(([B,Ne,Le,ht])=>g.jsxs("div",{className:"input-map-row",role:"row",children:[g.jsx("span",{children:B}),g.jsx("kbd",{children:Ne}),g.jsx("kbd",{children:Le}),g.jsx("p",{children:ht})]},B))]})]})]})]}),o==="combat"&&g.jsxs(g.Fragment,{children:[ut,g.jsx("section",{className:"section-block combat-page-header",id:"combat",children:g.jsxs("div",{className:"section-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Combat Systems"}),g.jsxs("h2",{children:[R.flag," ",R.codename," combat package"]})]}),g.jsx("p",{className:"section-note",children:"Weapons, active abilities, animation surfaces, feedback rules, networking notes, and team-play balance update from the selected operator."})]})}),g.jsxs("section",{className:"section-block",children:[g.jsxs("div",{className:"section-heading",children:[g.jsx("p",{className:"eyebrow",children:"Combat systems"}),g.jsxs("h2",{children:[R.codename," weapons tuned for ",R.role.toLowerCase()]})]}),g.jsxs("div",{className:"weapon-table",role:"table","aria-label":"Weapon specifications",children:[g.jsxs("div",{className:"weapon-row weapon-header",role:"row",children:[g.jsx("span",{children:"Name"}),g.jsx("span",{children:"Role"}),g.jsx("span",{children:"Damage"}),g.jsx("span",{children:"Fire rate"}),g.jsx("span",{children:"Range"}),g.jsx("span",{children:"Handling"})]}),ce.map(B=>g.jsx("div",{className:"weapon-row",role:"row",children:B.map(Ne=>g.jsx("span",{children:Ne},Ne))},B[0]))]})]}),g.jsxs("section",{className:"section-block",children:[g.jsxs("div",{className:"section-heading",children:[g.jsx("p",{className:"eyebrow",children:"Special abilities"}),g.jsxs("h2",{children:[R.codename," ability implementation cards"]})]}),g.jsxs("div",{className:"ability-layout",children:[g.jsx("div",{className:"ability-list",role:"tablist","aria-label":`${R.codename} abilities`,children:oe.map(B=>g.jsxs("button",{className:B.name===me.name?"ability-tab active":"ability-tab",type:"button",onClick:()=>r(B),children:[g.jsx("span",{children:B.type}),B.name]},B.name))}),g.jsxs("article",{className:"panel ability-detail",children:[g.jsxs("div",{className:"ability-title",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:me.type}),g.jsx("h3",{children:me.name})]}),g.jsx("strong",{children:me.cooldown})]}),g.jsxs("dl",{children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Input binding"}),g.jsxs("dd",{children:["Keyboard ",me.keyboard," / Controller ",me.controller]})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Gameplay purpose"}),g.jsx("dd",{children:me.purpose})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Counterplay"}),g.jsx("dd",{children:me.counterplay})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Visual effects"}),g.jsx("dd",{children:me.vfx})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Audio feedback"}),g.jsx("dd",{children:me.audio})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Networking"}),g.jsx("dd",{children:me.network})]})]})]})]})]}),g.jsxs("section",{className:"two-column",children:[g.jsxs("article",{className:"panel",children:[g.jsx("p",{className:"eyebrow",children:"Animation requirements"}),g.jsx("h2",{children:"State machine surface"}),g.jsx("div",{className:"state-machine",children:ZR.map(B=>g.jsx("span",{children:B},B))}),g.jsx("p",{children:"Transition logic prioritizes input response with short blend windows, motion warping for traversal, montage sections for recovery, and additive recoil aligned to weapon camera feedback."})]}),g.jsxs("article",{className:"panel",children:[g.jsx("p",{className:"eyebrow",children:"Combat feel requirements"}),g.jsx("h2",{children:"Feedback stack"}),g.jsxs("ul",{className:"check-list",children:[g.jsx("li",{children:"Distinct armor break, headshot, elimination, and ability-hit confirmations."}),g.jsx("li",{children:"Impulse camera shake capped for target readability and accessibility settings."}),g.jsx("li",{children:"Controller-only rotational aim assist with conservative slowdown windows."}),g.jsx("li",{children:"Layered recoil: camera pitch, weapon bone animation, muzzle climb, and recovery spring."}),g.jsx("li",{children:"Vibration envelopes for auto fire, blocked damage, melee impact, and ultimate activation."})]})]})]}),g.jsxs("section",{className:"section-block engineering-section",children:[g.jsxs("div",{className:"section-heading",children:[g.jsx("p",{className:"eyebrow",children:"Technical gameplay implementation"}),g.jsx("h2",{children:"Lead Gameplay Engineer review"})]}),g.jsx("div",{className:"engineering-grid",children:YR.map(B=>g.jsxs("article",{className:"engineering-card",children:[g.jsx("span",{}),g.jsx("p",{children:B})]},B))})]}),g.jsxs("section",{className:"team-band",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Team play design"}),g.jsx("h2",{children:"Strong pressure, meaningful weaknesses"})]}),g.jsxs("div",{className:"team-grid",children:[g.jsxs("article",{children:[g.jsx("h3",{children:"Strengths"}),g.jsx("p",{children:"Fast entries, aggressive flanks, duel initiation, repositioning, and fight conversion."})]}),g.jsxs("article",{children:[g.jsx("h3",{children:"Weaknesses"}),g.jsx("p",{children:"Limited sustain, exposed recovery after missed breach, weaker at long range, trap-vulnerable."})]}),g.jsxs("article",{children:[g.jsx("h3",{children:"Synergies"}),g.jsx("p",{children:"Pairs with recon, smoke, shield break, suppression, and area-denial teammates."})]}),g.jsxs("article",{children:[g.jsx("h3",{children:"Counter picks"}),g.jsx("p",{children:"Trap specialists, marksmen, anti-mobility kits, stasis fields, and coordinated focus fire."})]})]})]})]})]})}Ny.createRoot(document.getElementById("root")).render(g.jsx(Ty.StrictMode,{children:g.jsx($R,{})}));
