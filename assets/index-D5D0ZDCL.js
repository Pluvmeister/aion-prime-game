(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function D_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Zf={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function vy(){if(hv)return bo;hv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return bo.Fragment=t,bo.jsx=i,bo.jsxs=i,bo}var pv;function _y(){return pv||(pv=1,Zf.exports=vy()),Zf.exports}var S=_y(),Kf={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function xy(){if(mv)return st;mv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function g(N,ee,Ee){this.props=N,this.context=ee,this.refs=E,this.updater=Ee||A}g.prototype.isReactComponent={},g.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function G(){}G.prototype=g.prototype;function z(N,ee,Ee){this.props=N,this.context=ee,this.refs=E,this.updater=Ee||A}var L=z.prototype=new G;L.constructor=z,w(L,g.prototype),L.isPureReactComponent=!0;var j=Array.isArray;function O(){}var I={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function U(N,ee,Ee){var Ae=Ee.ref;return{$$typeof:o,type:N,key:ee,ref:Ae!==void 0?Ae:null,props:Ee}}function C(N,ee){return U(N.type,ee,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function le(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ee){return ee[Ee]})}var se=/\/+/g;function fe(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?le(""+N.key):ee.toString(36)}function _e(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(O,O):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function D(N,ee,Ee,Ae,J){var xe=typeof N;(xe==="undefined"||xe==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(xe){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case o:case t:ve=!0;break;case x:return ve=N._init,D(ve(N._payload),ee,Ee,Ae,J)}}if(ve)return J=J(N),ve=Ae===""?"."+fe(N,0):Ae,j(J)?(Ee="",ve!=null&&(Ee=ve.replace(se,"$&/")+"/"),D(J,ee,Ee,"",function(k){return k})):J!=null&&(H(J)&&(J=C(J,Ee+(J.key==null||N&&N.key===J.key?"":(""+J.key).replace(se,"$&/")+"/")+ve)),ee.push(J)),1;ve=0;var Ie=Ae===""?".":Ae+":";if(j(N))for(var Le=0;Le<N.length;Le++)Ae=N[Le],xe=Ie+fe(Ae,Le),ve+=D(Ae,ee,Ee,xe,J);else if(Le=M(N),typeof Le=="function")for(N=Le.call(N),Le=0;!(Ae=N.next()).done;)Ae=Ae.value,xe=Ie+fe(Ae,Le++),ve+=D(Ae,ee,Ee,xe,J);else if(xe==="object"){if(typeof N.then=="function")return D(_e(N),ee,Ee,Ae,J);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ve}function K(N,ee,Ee){if(N==null)return N;var Ae=[],J=0;return D(N,Ae,"","",function(xe){return ee.call(Ee,xe,J++)}),Ae}function q(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(Ee){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ee)},function(Ee){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ee)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var ue=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},me={map:K,forEach:function(N,ee,Ee){K(N,function(){ee.apply(this,arguments)},Ee)},count:function(N){var ee=0;return K(N,function(){ee++}),ee},toArray:function(N){return K(N,function(ee){return ee})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return st.Activity=_,st.Children=me,st.Component=g,st.Fragment=i,st.Profiler=l,st.PureComponent=z,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,st.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},st.cache=function(N){return function(){return N.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(N,ee,Ee){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ae=w({},N.props),J=N.key;if(ee!=null)for(xe in ee.key!==void 0&&(J=""+ee.key),ee)!Q.call(ee,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&ee.ref===void 0||(Ae[xe]=ee[xe]);var xe=arguments.length-2;if(xe===1)Ae.children=Ee;else if(1<xe){for(var ve=Array(xe),Ie=0;Ie<xe;Ie++)ve[Ie]=arguments[Ie+2];Ae.children=ve}return U(N.type,J,Ae)},st.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},st.createElement=function(N,ee,Ee){var Ae,J={},xe=null;if(ee!=null)for(Ae in ee.key!==void 0&&(xe=""+ee.key),ee)Q.call(ee,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(J[Ae]=ee[Ae]);var ve=arguments.length-2;if(ve===1)J.children=Ee;else if(1<ve){for(var Ie=Array(ve),Le=0;Le<ve;Le++)Ie[Le]=arguments[Le+2];J.children=Ie}if(N&&N.defaultProps)for(Ae in ve=N.defaultProps,ve)J[Ae]===void 0&&(J[Ae]=ve[Ae]);return U(N,xe,J)},st.createRef=function(){return{current:null}},st.forwardRef=function(N){return{$$typeof:h,render:N}},st.isValidElement=H,st.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:q}},st.memo=function(N,ee){return{$$typeof:p,type:N,compare:ee===void 0?null:ee}},st.startTransition=function(N){var ee=I.T,Ee={};I.T=Ee;try{var Ae=N(),J=I.S;J!==null&&J(Ee,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(O,ue)}catch(xe){ue(xe)}finally{ee!==null&&Ee.types!==null&&(ee.types=Ee.types),I.T=ee}},st.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},st.use=function(N){return I.H.use(N)},st.useActionState=function(N,ee,Ee){return I.H.useActionState(N,ee,Ee)},st.useCallback=function(N,ee){return I.H.useCallback(N,ee)},st.useContext=function(N){return I.H.useContext(N)},st.useDebugValue=function(){},st.useDeferredValue=function(N,ee){return I.H.useDeferredValue(N,ee)},st.useEffect=function(N,ee){return I.H.useEffect(N,ee)},st.useEffectEvent=function(N){return I.H.useEffectEvent(N)},st.useId=function(){return I.H.useId()},st.useImperativeHandle=function(N,ee,Ee){return I.H.useImperativeHandle(N,ee,Ee)},st.useInsertionEffect=function(N,ee){return I.H.useInsertionEffect(N,ee)},st.useLayoutEffect=function(N,ee){return I.H.useLayoutEffect(N,ee)},st.useMemo=function(N,ee){return I.H.useMemo(N,ee)},st.useOptimistic=function(N,ee){return I.H.useOptimistic(N,ee)},st.useReducer=function(N,ee,Ee){return I.H.useReducer(N,ee,Ee)},st.useRef=function(N){return I.H.useRef(N)},st.useState=function(N){return I.H.useState(N)},st.useSyncExternalStore=function(N,ee,Ee){return I.H.useSyncExternalStore(N,ee,Ee)},st.useTransition=function(){return I.H.useTransition()},st.version="19.2.7",st}var gv;function xh(){return gv||(gv=1,Kf.exports=xy()),Kf.exports}var Kt=xh();const yy=D_(Kt);var Qf={exports:{}},To={},Jf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function Sy(){return vv||(vv=1,(function(o){function t(D,K){var q=D.length;D.push(K);e:for(;0<q;){var ue=q-1>>>1,me=D[ue];if(0<l(me,K))D[ue]=K,D[q]=me,q=ue;else break e}}function i(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var K=D[0],q=D.pop();if(q!==K){D[0]=q;e:for(var ue=0,me=D.length,N=me>>>1;ue<N;){var ee=2*(ue+1)-1,Ee=D[ee],Ae=ee+1,J=D[Ae];if(0>l(Ee,q))Ae<me&&0>l(J,Ee)?(D[ue]=J,D[Ae]=q,ue=Ae):(D[ue]=Ee,D[ee]=q,ue=ee);else if(Ae<me&&0>l(J,q))D[ue]=J,D[Ae]=q,ue=Ae;else break e}}return K}function l(D,K){var q=D.sortIndex-K.sortIndex;return q!==0?q:D.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,_=null,y=3,M=!1,A=!1,w=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function L(D){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=D)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function j(D){if(w=!1,L(D),!A)if(i(m)!==null)A=!0,O||(O=!0,le());else{var K=i(p);K!==null&&_e(j,K.startTime-D)}}var O=!1,I=-1,Q=5,U=-1;function C(){return E?!0:!(o.unstable_now()-U<Q)}function H(){if(E=!1,O){var D=o.unstable_now();U=D;var K=!0;try{e:{A=!1,w&&(w=!1,G(I),I=-1),M=!0;var q=y;try{t:{for(L(D),_=i(m);_!==null&&!(_.expirationTime>D&&C());){var ue=_.callback;if(typeof ue=="function"){_.callback=null,y=_.priorityLevel;var me=ue(_.expirationTime<=D);if(D=o.unstable_now(),typeof me=="function"){_.callback=me,L(D),K=!0;break t}_===i(m)&&r(m),L(D)}else r(m);_=i(m)}if(_!==null)K=!0;else{var N=i(p);N!==null&&_e(j,N.startTime-D),K=!1}}break e}finally{_=null,y=q,M=!1}K=void 0}}finally{K?le():O=!1}}}var le;if(typeof z=="function")le=function(){z(H)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,fe=se.port2;se.port1.onmessage=H,le=function(){fe.postMessage(null)}}else le=function(){g(H,0)};function _e(D,K){I=g(function(){D(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(D){D.callback=null},o.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<D?Math.floor(1e3/D):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(D){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var q=y;y=K;try{return D()}finally{y=q}},o.unstable_requestPaint=function(){E=!0},o.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=y;y=D;try{return K()}finally{y=q}},o.unstable_scheduleCallback=function(D,K,q){var ue=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ue+q:ue):q=ue,D){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=q+me,D={id:x++,callback:K,priorityLevel:D,startTime:q,expirationTime:me,sortIndex:-1},q>ue?(D.sortIndex=q,t(p,D),i(m)===null&&D===i(p)&&(w?(G(I),I=-1):w=!0,_e(j,q-ue))):(D.sortIndex=me,t(m,D),A||M||(A=!0,O||(O=!0,le()))),D},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(D){var K=y;return function(){var q=y;y=K;try{return D.apply(this,arguments)}finally{y=q}}}})($f)),$f}var _v;function My(){return _v||(_v=1,Jf.exports=Sy()),Jf.exports}var ed={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function Ey(){if(xv)return An;xv=1;var o=xh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,x)},An.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:M}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.7",An}var yv;function by(){if(yv)return ed.exports;yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ed.exports=Ey(),ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function Ty(){if(Sv)return To;Sv=1;var o=My(),t=xh(),i=by();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,s=f;break}if(T===s){v=!0,s=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=c;break}if(T===s){v=!0,s=f,a=c;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),z=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function fe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case g:return"Profiler";case E:return"StrictMode";case j:return"Suspense";case O:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case z:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:fe(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return fe(e(n))}catch{}}return null}var _e=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ue=[],me=-1;function N(e){return{current:e}}function ee(e){0>me||(e.current=ue[me],ue[me]=null,me--)}function Ee(e,n){me++,ue[me]=e.current,e.current=n}var Ae=N(null),J=N(null),xe=N(null),ve=N(null);function Ie(e,n){switch(Ee(xe,n),Ee(J,e),Ee(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?zg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=zg(n),e=Bg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ee(Ae),Ee(Ae,e)}function Le(){ee(Ae),ee(J),ee(xe)}function k(e){e.memoizedState!==null&&Ee(ve,e);var n=Ae.current,a=Bg(n,e.type);n!==a&&(Ee(J,e),Ee(Ae,a))}function Be(e){J.current===e&&(ee(Ae),ee(J)),ve.current===e&&(ee(ve),yo._currentValue=q)}var qe,F;function ct(e){if(qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qe=n&&n[1]||"",F=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qe+e+F}var We=!1;function ft(e,n){if(!e||We)return"";We=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ce){var ae=ce}Reflect.construct(e,[],ye)}else{try{ye.call()}catch(ce){ae=ce}e.call(ye.prototype)}}else{try{throw Error()}catch(ce){ae=ce}(ye=e())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ce){if(ce&&ae&&typeof ce.stack=="string")return[ce.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var B=v.split(`
`),ne=T.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<ne.length&&!ne[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===ne.length)for(s=B.length-1,c=ne.length-1;1<=s&&0<=c&&B[s]!==ne[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==ne[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==ne[c]){var he=`
`+B[s].replace(" at new "," at ");return e.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",e.displayName)),he}while(1<=s&&0<=c);break}}}finally{We=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ct(a):""}function Qe(e,n){switch(e.tag){case 26:case 27:case 5:return ct(e.type);case 16:return ct("Lazy");case 13:return e.child!==n&&n!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return ft(e.type,!1);case 11:return ft(e.type.render,!1);case 1:return ft(e.type,!0);case 31:return ct("Activity");default:return""}}function Bt(e){try{var n="",a=null;do n+=Qe(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ge=Object.prototype.hasOwnProperty,ot=o.unstable_scheduleCallback,Jt=o.unstable_cancelCallback,Zt=o.unstable_shouldYield,P=o.unstable_requestPaint,b=o.unstable_now,ie=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,be=o.unstable_UserBlockingPriority,de=o.unstable_NormalPriority,Je=o.unstable_LowPriority,Ce=o.unstable_IdlePriority,Ze=o.log,Ke=o.unstable_setDisableYieldValue,Re=null,De=null;function $e(e){if(typeof Ze=="function"&&Ke(e),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Re,e)}catch{}}var Fe=Math.clz32?Math.clz32:X,Ne=Math.log,lt=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ne(e)/lt|0)|0}var we=256,Ue=262144,He=4194304;function Te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Se(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Te(s):(v&=T,v!==0?c=Te(v):a||(a=T&~e,a!==0&&(c=Te(a))))):(T=s&~f,T!==0?c=Te(T):v!==0?c=Te(v):a||(a=s&~e,a!==0&&(c=Te(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ve(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function rt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=He;return He<<=1,(He&62914560)===0&&(He=4194304),e}function bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $n(e,n,a,s,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,ne=e.hiddenUpdates;for(a=v&~a;0<a;){var he=31-Fe(a),ye=1<<he;T[he]=0,B[he]=-1;var ae=ne[he];if(ae!==null)for(ne[he]=null,he=0;he<ae.length;he++){var ce=ae[he];ce!==null&&(ce.lane&=-536870913)}a&=~ye}s!==0&&Ns(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Ns(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Fe(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function xi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Fe(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function br(e,n){var a=n&-n;return a=(a&42)!==0?1:Tr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Tr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ar(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xa(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:sv(e.type))}function Os(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var Vn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Vn,xn="__reactProps$"+Vn,la="__reactContainer$"+Vn,Ps="__reactEvents$"+Vn,Vc="__reactListeners$"+Vn,kc="__reactHandles$"+Vn,qo="__reactResources$"+Vn,qa="__reactMarker$"+Vn;function R(e){delete e[rn],delete e[xn],delete e[Ps],delete e[Vc],delete e[kc]}function W(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[la]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=jg(e);e!==null;){if(a=e[rn])return a;e=jg(e)}return n}e=a,a=e.parentNode}return null}function re(e){if(e=e[rn]||e[la]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function oe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Y(e){var n=e[qo];return n||(n=e[qo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Me(e){e[qa]=!0}var Oe=new Set,je={};function ze(e,n){et(e,n),et(e+"Capture",n)}function et(e,n){for(je[e]=n,e=0;e<n.length;e++)Oe.add(n[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},mt={};function Lt(e){return Ge.call(mt,e)?!0:Ge.call(tt,e)?!1:at.test(e)?mt[e]=!0:(tt[e]=!0,!1)}function kt(e,n,a){if(Lt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Nt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function gt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function Xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yn(e){if(!e._valueTracker){var n=Xt(e)?"checked":"value";e._valueTracker=Tt(e,n,""+e[n])}}function Ui(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Xt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wa=/[\n"\\]/g;function xt(e){return e.replace(Wa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,s,c,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xe(n)):e.value!==""+Xe(n)&&(e.value=""+Xe(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?fn(e,v,Xe(n)):a!=null?fn(e,v,Xe(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Xe(T):e.removeAttribute("name")}function Dn(e,n,a,s,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){yn(e);return}a=a!=null?""+Xe(a):"",n=n!=null?""+Xe(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),yn(e)}function fn(e,n,a){n==="number"&&mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Xe(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Rr(e,n,a){if(n!=null&&(n=""+Xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Xe(a):""}function yi(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(_e(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Xe(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),yn(e)}function wr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var d0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||d0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Oh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Nh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Nh(e,f,n[f])}function jc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),p0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(e){return p0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Li(){}var Xc=null;function qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cr=null,Dr=null;function Ph(e){var n=re(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[xn]||null;if(!c)throw Error(r(90));Tn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ui(s)}break e;case"textarea":Rr(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var Wc=!1;function zh(e,n,a){if(Wc)return e(n,a);Wc=!0;try{var s=e(n);return s}finally{if(Wc=!1,(Cr!==null||Dr!==null)&&(Ol(),Cr&&(n=Cr,e=Dr,Dr=Cr=null,Ph(n),e)))for(n=0;n<e.length;n++)Ph(e[n])}}function zs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(Ni)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Yc=!1}var ca=null,Zc=null,Yo=null;function Bh(){if(Yo)return Yo;var e,n=Zc,a=n.length,s,c="value"in ca?ca.value:ca.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(s=1;s<=v&&n[a-s]===c[f-s];s++);return Yo=c.slice(e,1<s?1-s:void 0)}function Zo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function Fh(){return!1}function On(e){function n(a,s,c,f,v){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:Fh,this.isPropagationStopped=Fh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=On(Ya),Fs=_({},Ya,{view:0,detail:0}),m0=On(Fs),Kc,Qc,Is,Jo=_({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Is&&(Is&&e.type==="mousemove"?(Kc=e.screenX-Is.screenX,Qc=e.screenY-Is.screenY):Qc=Kc=0,Is=e),Kc)},movementY:function(e){return"movementY"in e?e.movementY:Qc}}),Ih=On(Jo),g0=_({},Jo,{dataTransfer:0}),v0=On(g0),_0=_({},Fs,{relatedTarget:0}),Jc=On(_0),x0=_({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),y0=On(x0),S0=_({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),M0=On(S0),E0=_({},Ya,{data:0}),Hh=On(E0),b0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=A0[e])?!!n[e]:!1}function $c(){return R0}var w0=_({},Fs,{key:function(e){if(e.key){var n=b0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),C0=On(w0),D0=_({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=On(D0),U0=_({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),L0=On(U0),N0=_({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=On(N0),P0=_({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=On(P0),B0=_({},Ya,{newState:0,oldState:0}),F0=On(B0),I0=[9,13,27,32],eu=Ni&&"CompositionEvent"in window,Hs=null;Ni&&"documentMode"in document&&(Hs=document.documentMode);var H0=Ni&&"TextEvent"in window&&!Hs,Vh=Ni&&(!eu||Hs&&8<Hs&&11>=Hs),kh=" ",jh=!1;function Xh(e,n){switch(e){case"keyup":return I0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function G0(e,n){switch(e){case"compositionend":return qh(n);case"keypress":return n.which!==32?null:(jh=!0,kh);case"textInput":return e=n.data,e===kh&&jh?null:e;default:return null}}function V0(e,n){if(Ur)return e==="compositionend"||!eu&&Xh(e,n)?(e=Bh(),Yo=Zc=ca=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vh&&n.locale!=="ko"?null:n.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!k0[e.type]:n==="textarea"}function Yh(e,n,a,s){Cr?Dr?Dr.push(s):Dr=[s]:Cr=s,n=Gl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Gs=null,Vs=null;function j0(e){Dg(e,0)}function $o(e){var n=oe(e);if(Ui(n))return e}function Zh(e,n){if(e==="change")return n}var Kh=!1;if(Ni){var tu;if(Ni){var nu="oninput"in document;if(!nu){var Qh=document.createElement("div");Qh.setAttribute("oninput","return;"),nu=typeof Qh.oninput=="function"}tu=nu}else tu=!1;Kh=tu&&(!document.documentMode||9<document.documentMode)}function Jh(){Gs&&(Gs.detachEvent("onpropertychange",$h),Vs=Gs=null)}function $h(e){if(e.propertyName==="value"&&$o(Vs)){var n=[];Yh(n,Vs,e,qc(e)),zh(j0,n)}}function X0(e,n,a){e==="focusin"?(Jh(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",$h)):e==="focusout"&&Jh()}function q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Vs)}function W0(e,n){if(e==="click")return $o(n)}function Y0(e,n){if(e==="input"||e==="change")return $o(n)}function Z0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:Z0;function ks(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ge.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tp(e,n){var a=ep(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ep(a)}}function np(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?np(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ip(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mn(e.document)}return n}function iu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var K0=Ni&&"documentMode"in document&&11>=document.documentMode,Lr=null,au=null,js=null,ru=!1;function ap(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||Lr==null||Lr!==mn(s)||(s=Lr,"selectionStart"in s&&iu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&ks(js,s)||(js=s,s=Gl(au,"onSelect"),0<s.length&&(n=new Qo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Lr)))}function Za(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Nr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},su={},rp={};Ni&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Ka(e){if(su[e])return su[e];if(!Nr[e])return e;var n=Nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in rp)return su[e]=n[a];return e}var sp=Ka("animationend"),op=Ka("animationiteration"),lp=Ka("animationstart"),Q0=Ka("transitionrun"),J0=Ka("transitionstart"),$0=Ka("transitioncancel"),cp=Ka("transitionend"),up=new Map,ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ou.push("scrollEnd");function ui(e,n){up.set(e,n),ze(n,[e])}var el=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ei=[],Or=0,lu=0;function tl(){for(var e=Or,n=lu=Or=0;n<e;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}f!==0&&fp(a,c,f)}}function nl(e,n,a,s){ei[Or++]=e,ei[Or++]=n,ei[Or++]=a,ei[Or++]=s,lu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function cu(e,n,a,s){return nl(e,n,a,s),il(e)}function Qa(e,n){return nl(e,null,null,n),il(e)}function fp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Fe(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function il(e){if(50<ho)throw ho=0,xf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Pr={};function ex(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,s){return new ex(e,n,a,s)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function al(e,n,a,s,c,f){var v=0;if(s=e,typeof e=="function")uu(e)&&(v=1);else if(typeof e=="string")v=ry(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=jn(31,a,n,c),e.elementType=U,e.lanes=f,e;case w:return Ja(a.children,c,f,n);case E:v=8,c|=24;break;case g:return e=jn(12,a,n,c|2),e.elementType=g,e.lanes=f,e;case j:return e=jn(13,a,n,c),e.elementType=j,e.lanes=f,e;case O:return e=jn(19,a,n,c),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:v=10;break e;case G:v=9;break e;case L:v=11;break e;case I:v=14;break e;case Q:v=16,s=null;break e}v=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=jn(v,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Ja(e,n,a,s){return e=jn(7,e,s,n),e.lanes=a,e}function fu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function hp(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function du(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var pp=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=pp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Bt(n)},pp.set(e,n),n)}return{value:e,source:n,stack:Bt(n)}}var zr=[],Br=0,rl=null,Xs=0,ni=[],ii=0,ua=null,Si=1,Mi="";function Pi(e,n){zr[Br++]=Xs,zr[Br++]=rl,rl=e,Xs=n}function mp(e,n,a){ni[ii++]=Si,ni[ii++]=Mi,ni[ii++]=ua,ua=e;var s=Si;e=Mi;var c=32-Fe(s)-1;s&=~(1<<c),a+=1;var f=32-Fe(n)+c;if(30<f){var v=c-c%5;f=(s&(1<<v)-1).toString(32),s>>=v,c-=v,Si=1<<32-Fe(n)+c|a<<c|s,Mi=f+e}else Si=1<<f|a<<c|s,Mi=e}function hu(e){e.return!==null&&(Pi(e,1),mp(e,1,0))}function pu(e){for(;e===rl;)rl=zr[--Br],zr[Br]=null,Xs=zr[--Br],zr[Br]=null;for(;e===ua;)ua=ni[--ii],ni[ii]=null,Mi=ni[--ii],ni[ii]=null,Si=ni[--ii],ni[ii]=null}function gp(e,n){ni[ii++]=Si,ni[ii++]=Mi,ni[ii++]=ua,Si=n.id,Mi=n.overflow,ua=e}var Sn=null,qt=null,Et=!1,fa=null,ai=!1,mu=Error(r(519));function da(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qs(ti(n,e)),mu}function vp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[rn]=e,n[xn]=s,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)_t(mo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Dn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),yi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Og(n.textContent,a)?(s.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),s.onScroll!=null&&_t("scroll",n),s.onScrollEnd!=null&&_t("scrollend",n),s.onClick!=null&&(n.onclick=Li),n=!0):n=!1,n||da(e,!0)}function _p(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:Sn=Sn.return}}function Fr(e){if(e!==Sn)return!1;if(!Et)return _p(e),Et=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Of(e.type,e.memoizedProps)),a=!a),a&&qt&&da(e),_p(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qt=kg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qt=kg(e)}else n===27?(n=qt,Aa(e.type)?(e=If,If=null,qt=e):qt=n):qt=Sn?si(e.stateNode.nextSibling):null;return!0}function $a(){qt=Sn=null,Et=!1}function gu(){var e=fa;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),fa=null),e}function qs(e){fa===null?fa=[e]:fa.push(e)}var vu=N(null),er=null,zi=null;function ha(e,n,a){Ee(vu,n._currentValue),n._currentValue=a}function Bi(e){e._currentValue=vu.current,ee(vu)}function _u(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function xu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),_u(f.return,a,e),s||(v=null);break e}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),_u(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Ir(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=c.type;kn(c.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(c===ve.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}c=c.return}e!==null&&xu(n,e,a,s),n.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tr(e){er=e,zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return xp(er,e)}function ol(e,n){return er===null&&tr(e),xp(e,n)}function xp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(e===null)throw Error(r(308));zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else zi=zi.next=n;return a}var tx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},nx=o.unstable_scheduleCallback,ix=o.unstable_NormalPriority,sn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new tx,data:new Map,refCount:0}}function Ws(e){e.refCount--,e.refCount===0&&nx(ix,function(){e.controller.abort()})}var Ys=null,Su=0,Hr=0,Gr=null;function ax(e,n){if(Ys===null){var a=Ys=[];Su=0,Hr=Tf(),Gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Su++,n.then(yp,yp),n}function yp(){if(--Su===0&&Ys!==null){Gr!==null&&(Gr.status="fulfilled");var e=Ys;Ys=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function rx(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Sp=D.S;D.S=function(e,n){ag=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ax(e,n),Sp!==null&&Sp(e,n)};var nr=N(null);function Mu(){var e=nr.current;return e!==null?e:jt.pooledCache}function ll(e,n){n===null?Ee(nr,nr.current):Ee(nr,n.pool)}function Mp(){var e=Mu();return e===null?null:{parent:sn._currentValue,pool:e}}var Vr=Error(r(460)),Eu=Error(r(474)),cl=Error(r(542)),ul={then:function(){}};function Ep(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Li,Li),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ap(e),e;default:if(typeof n.status=="string")n.then(Li,Li);else{if(e=jt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ap(e),e}throw ar=n,Vr}}function ir(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ar=a,Vr):a}}var ar=null;function Tp(){if(ar===null)throw Error(r(459));var e=ar;return ar=null,e}function Ap(e){if(e===Vr||e===cl)throw Error(r(483))}var kr=null,Zs=0;function fl(e){var n=Zs;return Zs+=1,kr===null&&(kr=[]),bp(kr,e,n)}function Ks(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function dl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Rp(e){function n(Z,V){if(e){var te=Z.deletions;te===null?(Z.deletions=[V],Z.flags|=16):te.push(V)}}function a(Z,V){if(!e)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function s(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function c(Z,V){return Z=Oi(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,te){return Z.index=te,e?(te=Z.alternate,te!==null?(te=te.index,te<V?(Z.flags|=67108866,V):te):(Z.flags|=67108866,V)):(Z.flags|=1048576,V)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,V,te,ge){return V===null||V.tag!==6?(V=fu(te,Z.mode,ge),V.return=Z,V):(V=c(V,te),V.return=Z,V)}function B(Z,V,te,ge){var nt=te.type;return nt===w?he(Z,V,te.props.children,ge,te.key):V!==null&&(V.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Q&&ir(nt)===V.type)?(V=c(V,te.props),Ks(V,te),V.return=Z,V):(V=al(te.type,te.key,te.props,null,Z.mode,ge),Ks(V,te),V.return=Z,V)}function ne(Z,V,te,ge){return V===null||V.tag!==4||V.stateNode.containerInfo!==te.containerInfo||V.stateNode.implementation!==te.implementation?(V=du(te,Z.mode,ge),V.return=Z,V):(V=c(V,te.children||[]),V.return=Z,V)}function he(Z,V,te,ge,nt){return V===null||V.tag!==7?(V=Ja(te,Z.mode,ge,nt),V.return=Z,V):(V=c(V,te),V.return=Z,V)}function ye(Z,V,te){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=fu(""+V,Z.mode,te),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return te=al(V.type,V.key,V.props,null,Z.mode,te),Ks(te,V),te.return=Z,te;case A:return V=du(V,Z.mode,te),V.return=Z,V;case Q:return V=ir(V),ye(Z,V,te)}if(_e(V)||le(V))return V=Ja(V,Z.mode,te,null),V.return=Z,V;if(typeof V.then=="function")return ye(Z,fl(V),te);if(V.$$typeof===z)return ye(Z,ol(Z,V),te);dl(Z,V)}return null}function ae(Z,V,te,ge){var nt=V!==null?V.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return nt!==null?null:T(Z,V,""+te,ge);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case M:return te.key===nt?B(Z,V,te,ge):null;case A:return te.key===nt?ne(Z,V,te,ge):null;case Q:return te=ir(te),ae(Z,V,te,ge)}if(_e(te)||le(te))return nt!==null?null:he(Z,V,te,ge,null);if(typeof te.then=="function")return ae(Z,V,fl(te),ge);if(te.$$typeof===z)return ae(Z,V,ol(Z,te),ge);dl(Z,te)}return null}function ce(Z,V,te,ge,nt){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get(te)||null,T(V,Z,""+ge,nt);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return Z=Z.get(ge.key===null?te:ge.key)||null,B(V,Z,ge,nt);case A:return Z=Z.get(ge.key===null?te:ge.key)||null,ne(V,Z,ge,nt);case Q:return ge=ir(ge),ce(Z,V,te,ge,nt)}if(_e(ge)||le(ge))return Z=Z.get(te)||null,he(V,Z,ge,nt,null);if(typeof ge.then=="function")return ce(Z,V,te,fl(ge),nt);if(ge.$$typeof===z)return ce(Z,V,te,ol(V,ge),nt);dl(V,ge)}return null}function ke(Z,V,te,ge){for(var nt=null,At=null,Ye=V,dt=V=0,St=null;Ye!==null&&dt<te.length;dt++){Ye.index>dt?(St=Ye,Ye=null):St=Ye.sibling;var Rt=ae(Z,Ye,te[dt],ge);if(Rt===null){Ye===null&&(Ye=St);break}e&&Ye&&Rt.alternate===null&&n(Z,Ye),V=f(Rt,V,dt),At===null?nt=Rt:At.sibling=Rt,At=Rt,Ye=St}if(dt===te.length)return a(Z,Ye),Et&&Pi(Z,dt),nt;if(Ye===null){for(;dt<te.length;dt++)Ye=ye(Z,te[dt],ge),Ye!==null&&(V=f(Ye,V,dt),At===null?nt=Ye:At.sibling=Ye,At=Ye);return Et&&Pi(Z,dt),nt}for(Ye=s(Ye);dt<te.length;dt++)St=ce(Ye,Z,dt,te[dt],ge),St!==null&&(e&&St.alternate!==null&&Ye.delete(St.key===null?dt:St.key),V=f(St,V,dt),At===null?nt=St:At.sibling=St,At=St);return e&&Ye.forEach(function(Ua){return n(Z,Ua)}),Et&&Pi(Z,dt),nt}function it(Z,V,te,ge){if(te==null)throw Error(r(151));for(var nt=null,At=null,Ye=V,dt=V=0,St=null,Rt=te.next();Ye!==null&&!Rt.done;dt++,Rt=te.next()){Ye.index>dt?(St=Ye,Ye=null):St=Ye.sibling;var Ua=ae(Z,Ye,Rt.value,ge);if(Ua===null){Ye===null&&(Ye=St);break}e&&Ye&&Ua.alternate===null&&n(Z,Ye),V=f(Ua,V,dt),At===null?nt=Ua:At.sibling=Ua,At=Ua,Ye=St}if(Rt.done)return a(Z,Ye),Et&&Pi(Z,dt),nt;if(Ye===null){for(;!Rt.done;dt++,Rt=te.next())Rt=ye(Z,Rt.value,ge),Rt!==null&&(V=f(Rt,V,dt),At===null?nt=Rt:At.sibling=Rt,At=Rt);return Et&&Pi(Z,dt),nt}for(Ye=s(Ye);!Rt.done;dt++,Rt=te.next())Rt=ce(Ye,Z,dt,Rt.value,ge),Rt!==null&&(e&&Rt.alternate!==null&&Ye.delete(Rt.key===null?dt:Rt.key),V=f(Rt,V,dt),At===null?nt=Rt:At.sibling=Rt,At=Rt);return e&&Ye.forEach(function(gy){return n(Z,gy)}),Et&&Pi(Z,dt),nt}function Ht(Z,V,te,ge){if(typeof te=="object"&&te!==null&&te.type===w&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case M:e:{for(var nt=te.key;V!==null;){if(V.key===nt){if(nt=te.type,nt===w){if(V.tag===7){a(Z,V.sibling),ge=c(V,te.props.children),ge.return=Z,Z=ge;break e}}else if(V.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Q&&ir(nt)===V.type){a(Z,V.sibling),ge=c(V,te.props),Ks(ge,te),ge.return=Z,Z=ge;break e}a(Z,V);break}else n(Z,V);V=V.sibling}te.type===w?(ge=Ja(te.props.children,Z.mode,ge,te.key),ge.return=Z,Z=ge):(ge=al(te.type,te.key,te.props,null,Z.mode,ge),Ks(ge,te),ge.return=Z,Z=ge)}return v(Z);case A:e:{for(nt=te.key;V!==null;){if(V.key===nt)if(V.tag===4&&V.stateNode.containerInfo===te.containerInfo&&V.stateNode.implementation===te.implementation){a(Z,V.sibling),ge=c(V,te.children||[]),ge.return=Z,Z=ge;break e}else{a(Z,V);break}else n(Z,V);V=V.sibling}ge=du(te,Z.mode,ge),ge.return=Z,Z=ge}return v(Z);case Q:return te=ir(te),Ht(Z,V,te,ge)}if(_e(te))return ke(Z,V,te,ge);if(le(te)){if(nt=le(te),typeof nt!="function")throw Error(r(150));return te=nt.call(te),it(Z,V,te,ge)}if(typeof te.then=="function")return Ht(Z,V,fl(te),ge);if(te.$$typeof===z)return Ht(Z,V,ol(Z,te),ge);dl(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,V!==null&&V.tag===6?(a(Z,V.sibling),ge=c(V,te),ge.return=Z,Z=ge):(a(Z,V),ge=fu(te,Z.mode,ge),ge.return=Z,Z=ge),v(Z)):a(Z,V)}return function(Z,V,te,ge){try{Zs=0;var nt=Ht(Z,V,te,ge);return kr=null,nt}catch(Ye){if(Ye===Vr||Ye===cl)throw Ye;var At=jn(29,Ye,null,Z.mode);return At.lanes=ge,At.return=Z,At}finally{}}}var rr=Rp(!0),wp=Rp(!1),pa=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Dt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=il(e),fp(e,null,a),n}return nl(e,s,n,a),il(e)}function Qs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,xi(e,a)}}function Au(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ru=!1;function Js(){if(Ru){var e=Gr;if(e!==null)throw e}}function $s(e,n,a,s){Ru=!1;var c=e.updateQueue;pa=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,ne=B.next;B.next=null,v===null?f=ne:v.next=ne,v=B;var he=e.alternate;he!==null&&(he=he.updateQueue,T=he.lastBaseUpdate,T!==v&&(T===null?he.firstBaseUpdate=ne:T.next=ne,he.lastBaseUpdate=B))}if(f!==null){var ye=c.baseState;v=0,he=ne=B=null,T=f;do{var ae=T.lane&-536870913,ce=ae!==T.lane;if(ce?(yt&ae)===ae:(s&ae)===ae){ae!==0&&ae===Hr&&(Ru=!0),he!==null&&(he=he.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ke=e,it=T;ae=n;var Ht=a;switch(it.tag){case 1:if(ke=it.payload,typeof ke=="function"){ye=ke.call(Ht,ye,ae);break e}ye=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=it.payload,ae=typeof ke=="function"?ke.call(Ht,ye,ae):ke,ae==null)break e;ye=_({},ye,ae);break e;case 2:pa=!0}}ae=T.callback,ae!==null&&(e.flags|=64,ce&&(e.flags|=8192),ce=c.callbacks,ce===null?c.callbacks=[ae]:ce.push(ae))}else ce={lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},he===null?(ne=he=ce,B=ye):he=he.next=ce,v|=ae;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ce=T,T=ce.next,ce.next=null,c.lastBaseUpdate=ce,c.shared.pending=null}}while(!0);he===null&&(B=ye),c.baseState=B,c.firstBaseUpdate=ne,c.lastBaseUpdate=he,f===null&&(c.shared.lanes=0),Sa|=v,e.lanes=v,e.memoizedState=ye}}function Cp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Dp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cp(a[e],n)}var jr=N(null),hl=N(0);function Up(e,n){e=qi,Ee(hl,e),Ee(jr,n),qi=e|n.baseLanes}function wu(){Ee(hl,qi),Ee(jr,jr.current)}function Cu(){qi=hl.current,ee(jr),ee(hl)}var Xn=N(null),ri=null;function va(e){var n=e.alternate;Ee(nn,nn.current&1),Ee(Xn,e),ri===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(ri=e)}function Du(e){Ee(nn,nn.current),Ee(Xn,e),ri===null&&(ri=e)}function Lp(e){e.tag===22?(Ee(nn,nn.current),Ee(Xn,e),ri===null&&(ri=e)):_a()}function _a(){Ee(nn,nn.current),Ee(Xn,Xn.current)}function qn(e){ee(Xn),ri===e&&(ri=null),ee(nn)}var nn=N(0);function pl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||Ff(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=0,ut=null,Ft=null,on=null,ml=!1,Xr=!1,sr=!1,gl=0,eo=0,qr=null,sx=0;function $t(){throw Error(r(321))}function Uu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Lu(e,n,a,s,c,f){return Fi=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?mm:Wu,sr=!1,f=a(s,c),sr=!1,Xr&&(f=Op(n,a,s,c)),Np(e),f}function Np(e){D.H=io;var n=Ft!==null&&Ft.next!==null;if(Fi=0,on=Ft=ut=null,ml=!1,eo=0,qr=null,n)throw Error(r(300));e===null||ln||(e=e.dependencies,e!==null&&sl(e)&&(ln=!0))}function Op(e,n,a,s){ut=e;var c=0;do{if(Xr&&(qr=null),eo=0,Xr=!1,25<=c)throw Error(r(301));if(c+=1,on=Ft=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=gm,f=n(a,s)}while(Xr);return f}function ox(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?to(n):n,e=e.useState()[0],(Ft!==null?Ft.memoizedState:null)!==e&&(ut.flags|=1024),n}function Nu(){var e=gl!==0;return gl=0,e}function Ou(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pu(e){if(ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ml=!1}Fi=0,on=Ft=ut=null,Xr=!1,eo=gl=0,qr=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ut.memoizedState=on=e:on=on.next=e,on}function an(){if(Ft===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var n=on===null?ut.memoizedState:on.next;if(n!==null)on=n,Ft=e;else{if(e===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},on===null?ut.memoizedState=on=e:on=on.next=e}return on}function vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(e){var n=eo;return eo+=1,qr===null&&(qr=[]),e=bp(qr,e,n),n=ut,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?mm:Wu),e}function _l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return to(e);if(e.$$typeof===z)return Mn(e)}throw Error(r(438,String(e)))}function zu(e){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ut.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=vl(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=an();return Bu(n,Ft,e)}function Bu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=v=null,B=null,ne=n,he=!1;do{var ye=ne.lane&-536870913;if(ye!==ne.lane?(yt&ye)===ye:(Fi&ye)===ye){var ae=ne.revertLane;if(ae===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ye===Hr&&(he=!0);else if((Fi&ae)===ae){ne=ne.next,ae===Hr&&(he=!0);continue}else ye={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(T=B=ye,v=f):B=B.next=ye,ut.lanes|=ae,Sa|=ae;ye=ne.action,sr&&a(f,ye),f=ne.hasEagerState?ne.eagerState:a(f,ye)}else ae={lane:ye,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(T=B=ae,v=f):B=B.next=ae,ut.lanes|=ye,Sa|=ye;ne=ne.next}while(ne!==null&&ne!==n);if(B===null?v=f:B.next=T,!kn(f,e.memoizedState)&&(ln=!0,he&&(a=Gr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Fu(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);kn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Pp(e,n,a){var s=ut,c=an(),f=Et;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!kn((Ft||c).memoizedState,a);if(v&&(c.memoizedState=a,ln=!0),c=c.queue,Gu(Fp.bind(null,s,c,e),[e]),c.getSnapshot!==n||v||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Wr(9,{destroy:void 0},Bp.bind(null,s,c,a,n),null),jt===null)throw Error(r(349));f||(Fi&127)!==0||zp(s,n,a)}return a}function zp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=vl(),ut.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Bp(e,n,a,s){n.value=a,n.getSnapshot=s,Ip(n)&&Hp(e)}function Fp(e,n,a){return a(function(){Ip(n)&&Hp(e)})}function Ip(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Hp(e){var n=Qa(e,2);n!==null&&In(n,e,2)}function Iu(e){var n=Un();if(typeof e=="function"){var a=e;if(e=a(),sr){$e(!0);try{a()}finally{$e(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function Gp(e,n,a,s){return e.baseState=a,Bu(e,Ft,typeof s=="function"?s:Ii)}function lx(e,n,a,s,c){if(Ml(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};D.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Vp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Vp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=D.T,v={};D.T=v;try{var T=a(c,s),B=D.S;B!==null&&B(v,T),kp(e,n,T)}catch(ne){Hu(e,n,ne)}finally{f!==null&&v.types!==null&&(f.types=v.types),D.T=f}}else try{f=a(c,s),kp(e,n,f)}catch(ne){Hu(e,n,ne)}}function kp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){jp(e,n,s)},function(s){return Hu(e,n,s)}):jp(e,n,a)}function jp(e,n,a){n.status="fulfilled",n.value=a,Xp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Vp(e,a)))}function Hu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Xp(n),n=n.next;while(n!==s)}e.action=null}function Xp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function qp(e,n){return n}function Wp(e,n){if(Et){var a=jt.formState;if(a!==null){e:{var s=ut;if(Et){if(qt){t:{for(var c=qt,f=ai;c.nodeType!==8;){if(!f){c=null;break t}if(c=si(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qt=si(c.nextSibling),s=c.data==="F!";break e}}da(s)}s=!1}s&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qp,lastRenderedState:n},a.queue=s,a=dm.bind(null,ut,s),s.dispatch=a,s=Iu(!1),f=qu.bind(null,ut,!1,s.queue),s=Un(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=lx.bind(null,ut,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Yp(e){var n=an();return Zp(n,Ft,e)}function Zp(e,n,a){if(n=Bu(e,n,qp)[0],e=xl(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(v){throw v===Vr?cl:v}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,Wr(9,{destroy:void 0},cx.bind(null,c,a),null)),[s,f,e]}function cx(e,n){e.action=n}function Kp(e){var n=an(),a=Ft;if(a!==null)return Zp(n,a,e);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Wr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ut.updateQueue,n===null&&(n=vl(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Qp(){return an().memoizedState}function yl(e,n,a,s){var c=Un();ut.flags|=e,c.memoizedState=Wr(1|n,{destroy:void 0},a,s===void 0?null:s)}function Sl(e,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Ft!==null&&s!==null&&Uu(s,Ft.memoizedState.deps)?c.memoizedState=Wr(n,f,a,s):(ut.flags|=e,c.memoizedState=Wr(1|n,f,a,s))}function Jp(e,n){yl(8390656,8,e,n)}function Gu(e,n){Sl(2048,8,e,n)}function ux(e){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=vl(),ut.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function $p(e){var n=an().memoizedState;return ux({ref:n,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function em(e,n){return Sl(4,2,e,n)}function tm(e,n){return Sl(4,4,e,n)}function nm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function im(e,n,a){a=a!=null?a.concat([e]):null,Sl(4,4,nm.bind(null,n,e),a)}function Vu(){}function am(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Uu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function rm(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Uu(n,s[1]))return s[0];if(s=e(),sr){$e(!0);try{e()}finally{$e(!1)}}return a.memoizedState=[s,n],s}function ku(e,n,a){return a===void 0||(Fi&1073741824)!==0&&(yt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=sg(),ut.lanes|=e,Sa|=e,a)}function sm(e,n,a,s){return kn(a,n)?a:jr.current!==null?(e=ku(e,a,s),kn(e,n)||(ln=!0),e):(Fi&42)===0||(Fi&1073741824)!==0&&(yt&261930)===0?(ln=!0,e.memoizedState=a):(e=sg(),ut.lanes|=e,Sa|=e,n)}function om(e,n,a,s,c){var f=K.p;K.p=f!==0&&8>f?f:8;var v=D.T,T={};D.T=T,qu(e,!1,n,a);try{var B=c(),ne=D.S;if(ne!==null&&ne(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var he=rx(B,s);no(e,n,he,Zn(e))}else no(e,n,s,Zn(e))}catch(ye){no(e,n,{then:function(){},status:"rejected",reason:ye},Zn())}finally{K.p=f,v!==null&&T.types!==null&&(v.types=T.types),D.T=v}}function fx(){}function ju(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=lm(e).queue;om(e,c,n,q,a===null?fx:function(){return cm(e),a(s)})}function lm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function cm(e){var n=lm(e);n.next===null&&(n=e.alternate.memoizedState),no(e,n.next.queue,{},Zn())}function Xu(){return Mn(yo)}function um(){return an().memoizedState}function fm(){return an().memoizedState}function dx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=ma(a);var s=ga(n,e,a);s!==null&&(In(s,n,a),Qs(s,n,a)),n={cache:yu()},e.payload=n;return}n=n.return}}function hx(e,n,a){var s=Zn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(e)?hm(n,a):(a=cu(e,n,a,s),a!==null&&(In(a,e,s),pm(a,n,s)))}function dm(e,n,a){var s=Zn();no(e,n,a,s)}function no(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(e))hm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,v))return nl(e,n,c,0),jt===null&&tl(),!1}catch{}finally{}if(a=cu(e,n,c,s),a!==null)return In(a,e,s),pm(a,n,s),!0}return!1}function qu(e,n,a,s){if(s={lane:2,revertLane:Tf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ml(e)){if(n)throw Error(r(479))}else n=cu(e,a,s,2),n!==null&&In(n,e,2)}function Ml(e){var n=e.alternate;return e===ut||n!==null&&n===ut}function hm(e,n){Xr=ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function pm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,xi(e,a)}}var io={readContext:Mn,use:_l,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};io.useEffectEvent=$t;var mm={readContext:Mn,use:_l,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Jp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,yl(4194308,4,nm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return yl(4194308,4,e,n)},useInsertionEffect:function(e,n){yl(4,2,e,n)},useMemo:function(e,n){var a=Un();n=n===void 0?null:n;var s=e();if(sr){$e(!0);try{e()}finally{$e(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Un();if(a!==void 0){var c=a(n);if(sr){$e(!0);try{a(n)}finally{$e(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=hx.bind(null,ut,e),[s.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:function(e){e=Iu(e);var n=e.queue,a=dm.bind(null,ut,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(e,n){var a=Un();return ku(a,e,n)},useTransition:function(){var e=Iu(!1);return e=om.bind(null,ut,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ut,c=Un();if(Et){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),jt===null)throw Error(r(349));(yt&127)!==0||zp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Jp(Fp.bind(null,s,f,e),[e]),s.flags|=2048,Wr(9,{destroy:void 0},Bp.bind(null,s,f,a,n),null),a},useId:function(){var e=Un(),n=jt.identifierPrefix;if(Et){var a=Mi,s=Si;a=(s&~(1<<32-Fe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Xu,useFormState:Wp,useActionState:Wp,useOptimistic:function(e){var n=Un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,ut,!0,a),a.dispatch=n,[e,n]},useMemoCache:zu,useCacheRefresh:function(){return Un().memoizedState=dx.bind(null,ut)},useEffectEvent:function(e){var n=Un(),a={impl:e};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Wu={readContext:Mn,use:_l,useCallback:am,useContext:Mn,useEffect:Gu,useImperativeHandle:im,useInsertionEffect:em,useLayoutEffect:tm,useMemo:rm,useReducer:xl,useRef:Qp,useState:function(){return xl(Ii)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=an();return sm(a,Ft.memoizedState,e,n)},useTransition:function(){var e=xl(Ii)[0],n=an().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:Pp,useId:um,useHostTransitionStatus:Xu,useFormState:Yp,useActionState:Yp,useOptimistic:function(e,n){var a=an();return Gp(a,Ft,e,n)},useMemoCache:zu,useCacheRefresh:fm};Wu.useEffectEvent=$p;var gm={readContext:Mn,use:_l,useCallback:am,useContext:Mn,useEffect:Gu,useImperativeHandle:im,useInsertionEffect:em,useLayoutEffect:tm,useMemo:rm,useReducer:Fu,useRef:Qp,useState:function(){return Fu(Ii)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=an();return Ft===null?ku(a,e,n):sm(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Fu(Ii)[0],n=an().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:Pp,useId:um,useHostTransitionStatus:Xu,useFormState:Kp,useActionState:Kp,useOptimistic:function(e,n){var a=an();return Ft!==null?Gp(a,Ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:zu,useCacheRefresh:fm};gm.useEffectEvent=$p;function Yu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=ma(s);c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,s),n!==null&&(In(n,e,s),Qs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=ma(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,s),n!==null&&(In(n,e,s),Qs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),s=ma(a);s.tag=2,n!=null&&(s.callback=n),n=ga(e,s,a),n!==null&&(In(n,e,a),Qs(n,e,a))}};function vm(e,n,a,s,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!ks(a,s)||!ks(c,f):!0}function _m(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Zu.enqueueReplaceState(n,n.state,null)}function or(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function xm(e){el(e)}function ym(e){console.error(e)}function Sm(e){el(e)}function El(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Mm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ku(e,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){El(e,n)},a}function Em(e){return e=ma(e),e.tag=3,e}function bm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Mm(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Mm(n,a,s),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function px(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,c,!0),a=Xn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?Pl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Mf(e,s,c)),!1;case 22:return a.flags|=65536,s===ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Mf(e,s,c)),!1}throw Error(r(435,a.tag))}return Mf(e,s,c),Pl(),!1}if(Et)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==mu&&(e=Error(r(422),{cause:s}),qs(ti(e,a)))):(s!==mu&&(n=Error(r(423),{cause:s}),qs(ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ti(s,a),c=Ku(e.stateNode,s,c),Au(e,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ti(f,a),fo===null?fo=[f]:fo.push(f),en!==4&&(en=2),n===null)return!0;s=ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Ku(a.stateNode,s,e),Au(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Em(c),bm(c,e,a,s),Au(a,c),!1}a=a.return}while(a!==null);return!1}var Qu=Error(r(461)),ln=!1;function En(e,n,a,s){n.child=e===null?wp(n,null,a,s):rr(n,e.child,a,s)}function Tm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return tr(n),s=Lu(e,n,a,v,f,c),T=Nu(),e!==null&&!ln?(Ou(e,n,c),Hi(e,n,c)):(Et&&T&&hu(n),n.flags|=1,En(e,n,s,c),n.child)}function Am(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Rm(e,n,f,s,c)):(e=al(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!sf(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ks,a(v,s)&&e.ref===n.ref)return Hi(e,n,c)}return n.flags|=1,e=Oi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Rm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(ks(f,s)&&e.ref===n.ref)if(ln=!1,n.pendingProps=s=f,sf(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Hi(e,n,c)}return Ju(e,n,a,s,c)}function wm(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Cm(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ll(n,f!==null?f.cachePool:null),f!==null?Up(n,f):wu(),Lp(n);else return s=n.lanes=536870912,Cm(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(ll(n,f.cachePool),Up(n,f),_a(),n.memoizedState=null):(e!==null&&ll(n,null),wu(),_a());return En(e,n,c,a),n.child}function ao(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Cm(e,n,a,s,c){var f=Mu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ll(n,null),wu(),Lp(n),e!==null&&Ir(e,n,s,!0),n.childLanes=c,null}function bl(e,n){return n=Al({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Dm(e,n,a){return rr(n,e.child,null,a),e=bl(n,n.pendingProps),e.flags|=2,qn(n),n.memoizedState=null,e}function mx(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Et){if(s.mode==="hidden")return e=bl(n,s),n.lanes=536870912,ao(null,e);if(Du(n),(e=qt)?(e=Vg(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=hp(e),a.return=n,n.child=a,Sn=n,qt=null)):e=null,e===null)throw da(n);return n.lanes=536870912,null}return bl(n,s)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Du(n),c)if(n.flags&256)n.flags&=-257,n=Dm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Ir(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(s=jt,s!==null&&(v=br(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Qa(e,v),In(s,e,v),Qu;Pl(),n=Dm(e,n,a)}else e=f.treeContext,qt=si(v.nextSibling),Sn=n,Et=!0,fa=null,ai=!1,e!==null&&gp(n,e),n=bl(n,s),n.flags|=4096;return n}return e=Oi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Tl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ju(e,n,a,s,c){return tr(n),a=Lu(e,n,a,s,void 0,c),s=Nu(),e!==null&&!ln?(Ou(e,n,c),Hi(e,n,c)):(Et&&s&&hu(n),n.flags|=1,En(e,n,a,c),n.child)}function Um(e,n,a,s,c,f){return tr(n),n.updateQueue=null,a=Op(n,s,a,c),Np(e),s=Nu(),e!==null&&!ln?(Ou(e,n,f),Hi(e,n,f)):(Et&&s&&hu(n),n.flags|=1,En(e,n,a,f),n.child)}function Lm(e,n,a,s,c){if(tr(n),n.stateNode===null){var f=Pr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Mn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},bu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Mn(v):Pr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Yu(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Zu.enqueueReplaceState(f,f.state,null),$s(n,s,f,c),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=or(a,T);f.props=B;var ne=f.context,he=a.contextType;v=Pr,typeof he=="object"&&he!==null&&(v=Mn(he));var ye=a.getDerivedStateFromProps;he=typeof ye=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||ne!==v)&&_m(n,f,s,v),pa=!1;var ae=n.memoizedState;f.state=ae,$s(n,s,f,c),Js(),ne=n.memoizedState,T||ae!==ne||pa?(typeof ye=="function"&&(Yu(n,a,ye,s),ne=n.memoizedState),(B=pa||vm(n,a,B,s,ae,ne,v))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ne),f.props=s,f.state=ne,f.context=v,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Tu(e,n),v=n.memoizedProps,he=or(a,v),f.props=he,ye=n.pendingProps,ae=f.context,ne=a.contextType,B=Pr,typeof ne=="object"&&ne!==null&&(B=Mn(ne)),T=a.getDerivedStateFromProps,(ne=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ye||ae!==B)&&_m(n,f,s,B),pa=!1,ae=n.memoizedState,f.state=ae,$s(n,s,f,c),Js();var ce=n.memoizedState;v!==ye||ae!==ce||pa||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof T=="function"&&(Yu(n,a,T,s),ce=n.memoizedState),(he=pa||vm(n,a,he,s,ae,ce,B)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ce,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ce,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ce),f.props=s,f.state=ce,f.context=B,s=he):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Tl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=rr(n,e.child,null,c),n.child=rr(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Hi(e,n,c),e}function Nm(e,n,a,s){return $a(),n.flags|=256,En(e,n,a,s),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Mp()}}function tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Yn),e}function Om(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Et){if(c?va(n):_a(),(e=qt)?(e=Vg(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=hp(e),a.return=n,n.child=a,Sn=n,qt=null)):e=null,e===null)throw da(n);return Ff(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(_a(),c=n.mode,T=Al({mode:"hidden",children:T},c),s=Ja(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=ef(a),s.childLanes=tf(e,v,a),n.memoizedState=$u,ao(null,s)):(va(n),nf(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=af(e,n,a)):n.memoizedState!==null?(_a(),n.child=e.child,n.flags|=128,n=null):(_a(),T=s.fallback,c=n.mode,s=Al({mode:"visible",children:s.children},c),T=Ja(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,rr(n,e.child,null,a),s=n.child,s.memoizedState=ef(a),s.childLanes=tf(e,v,a),n.memoizedState=$u,n=ao(null,s));else if(va(n),Ff(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var ne=v.dgst;v=ne,s=Error(r(419)),s.stack="",s.digest=v,qs({value:s,source:null,stack:null}),n=af(e,n,a)}else if(ln||Ir(e,n,a,!1),v=(a&e.childLanes)!==0,ln||v){if(v=jt,v!==null&&(s=br(v,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Qa(e,s),In(v,e,s),Qu;Bf(T)||Pl(),n=af(e,n,a)}else Bf(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,qt=si(T.nextSibling),Sn=n,Et=!0,fa=null,ai=!1,e!==null&&gp(n,e),n=nf(n,s.children),n.flags|=4096);return n}return c?(_a(),T=s.fallback,c=n.mode,B=e.child,ne=B.sibling,s=Oi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,ne!==null?T=Oi(ne,T):(T=Ja(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,ao(null,s),s=n.child,T=e.child.memoizedState,T===null?T=ef(a):(c=T.cachePool,c!==null?(B=sn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Mp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=tf(e,v,a),n.memoizedState=$u,ao(e.child,s)):(va(n),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function nf(e,n){return n=Al({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Al(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function af(e,n,a){return rr(n,e.child,null,a),e=nf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),_u(e.return,n,a)}function rf(e,n,a,s,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function zm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var v=nn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,Ee(nn,v),En(e,n,s,a),s=Et?Xs:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,a,n);else if(e.tag===19)Pm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&pl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),rf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&pl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}rf(n,!0,a,null,f,s);break;case"together":rf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Hi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Oi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function gx(e,n,a){switch(n.tag){case 3:Ie(n,n.stateNode.containerInfo),ha(n,sn,e.memoizedState.cache),$a();break;case 27:case 5:k(n);break;case 4:Ie(n,n.stateNode.containerInfo);break;case 10:ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Du(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Om(e,n,a):(va(n),e=Hi(e,n,a),e!==null?e.sibling:null);va(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ir(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return zm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ee(nn,nn.current),s)break;return null;case 22:return n.lanes=0,wm(e,n,a,n.pendingProps);case 24:ha(n,sn,e.memoizedState.cache)}return Hi(e,n,a)}function Bm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!sf(e,a)&&(n.flags&128)===0)return ln=!1,gx(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,Et&&(n.flags&1048576)!==0&&mp(n,Xs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=ir(n.elementType),n.type=e,typeof e=="function")uu(e)?(s=or(e,s),n.tag=1,n=Lm(null,n,e,s,a)):(n.tag=0,n=Ju(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===L){n.tag=11,n=Tm(null,n,e,s,a);break e}else if(c===I){n.tag=14,n=Am(null,n,e,s,a);break e}}throw n=fe(e)||e,Error(r(306,n,""))}}return n;case 0:return Ju(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=or(s,n.pendingProps),Lm(e,n,s,c,a);case 3:e:{if(Ie(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Tu(e,n),$s(n,s,null,a);var v=n.memoizedState;if(s=v.cache,ha(n,sn,s),s!==f.cache&&xu(n,[sn],a,!0),Js(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Nm(e,n,s,a);break e}else if(s!==c){c=ti(Error(r(424)),n),qs(c),n=Nm(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qt=si(e.firstChild),Sn=n,Et=!0,fa=null,ai=!0,a=wp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if($a(),s===c){n=Hi(e,n,a);break e}En(e,n,s,a)}n=n.child}return n;case 26:return Tl(e,n),e===null?(a=Yg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,e=n.pendingProps,s=Vl(xe.current).createElement(a),s[rn]=n,s[xn]=e,bn(s,a,e),Me(s),n.stateNode=s):n.memoizedState=Yg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return k(n),e===null&&Et&&(s=n.stateNode=Xg(n.type,n.pendingProps,xe.current),Sn=n,ai=!0,c=qt,Aa(n.type)?(If=c,qt=si(s.firstChild)):qt=c),En(e,n,n.pendingProps.children,a),Tl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Et&&((c=s=qt)&&(s=qx(s,n.type,n.pendingProps,ai),s!==null?(n.stateNode=s,Sn=n,qt=si(s.firstChild),ai=!1,c=!0):c=!1),c||da(n)),k(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,s=f.children,Of(c,f)?s=null:v!==null&&Of(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Lu(e,n,ox,null,null,a),yo._currentValue=c),Tl(e,n),En(e,n,s,a),n.child;case 6:return e===null&&Et&&((e=a=qt)&&(a=Wx(a,n.pendingProps,ai),a!==null?(n.stateNode=a,Sn=n,qt=null,e=!0):e=!1),e||da(n)),null;case 13:return Om(e,n,a);case 4:return Ie(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=rr(n,null,s,a):En(e,n,s,a),n.child;case 11:return Tm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ha(n,n.type,s.value),En(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,tr(n),c=Mn(c),s=s(c),n.flags|=1,En(e,n,s,a),n.child;case 14:return Am(e,n,n.type,n.pendingProps,a);case 15:return Rm(e,n,n.type,n.pendingProps,a);case 19:return zm(e,n,a);case 31:return mx(e,n,a);case 22:return wm(e,n,a,n.pendingProps);case 24:return tr(n),s=Mn(sn),e===null?(c=Mu(),c===null&&(c=jt,f=yu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},bu(n),ha(n,sn,c)):((e.lanes&a)!==0&&(Tu(e,n),$s(n,null,null,a),Js()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ha(n,sn,s)):(s=f.cache,ha(n,sn,s),s!==c.cache&&xu(n,[sn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Gi(e){e.flags|=4}function of(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(ug())e.flags|=8192;else throw ar=ul,Eu}else e.flags&=-16777217}function Fm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$g(n))if(ug())e.flags|=8192;else throw ar=ul,Eu}function Rl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ot():536870912,e.lanes|=n,Qr|=n)}function ro(e,n){if(!Et)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Wt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function vx(e,n,a){var s=n.pendingProps;switch(pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(sn),Le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?Gi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),Wt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Gi(n),f!==null?(Wt(n),Fm(n,f)):(Wt(n),of(n,c,null,s,a))):f?f!==e.memoizedState?(Gi(n),Wt(n),Fm(n,f)):(Wt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Gi(n),Wt(n),of(n,c,e,s,a)),null;case 27:if(Be(n),a=xe.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}e=Ae.current,Fr(n)?vp(n):(e=Xg(c,s,a),n.stateNode=e,Gi(n))}return Wt(n),null;case 5:if(Be(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}if(f=Ae.current,Fr(n))vp(n);else{var v=Vl(xe.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(c,{is:s.is}):v.createElement(c)}}f[rn]=n,f[xn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(bn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Gi(n)}}return Wt(n),of(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=xe.current,Fr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Og(e.nodeValue,a)),e||da(n,!0)}else e=Vl(e).createTextNode(s),e[rn]=n,n.stateNode=e}return Wt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Fr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),e=!1}else a=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Wt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Fr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),c=!1}else c=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),Wt(n),null);case 4:return Le(),e===null&&Cf(n.stateNode.containerInfo),Wt(n),null;case 10:return Bi(n.type),Wt(n),null;case 19:if(ee(nn),s=n.memoizedState,s===null)return Wt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ro(s,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=pl(e),f!==null){for(n.flags|=128,ro(s,!1),e=f.updateQueue,n.updateQueue=e,Rl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)dp(a,e),a=a.sibling;return Ee(nn,nn.current&1|2),Et&&Pi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&b()>Ll&&(n.flags|=128,c=!0,ro(s,!1),n.lanes=4194304)}else{if(!c)if(e=pl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Rl(n,e),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Et)return Wt(n),null}else 2*b()-s.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,c=!0,ro(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=b(),e.sibling=null,a=nn.current,Ee(nn,c?a&1|2:a&1),Et&&Pi(n,s.treeForkCount),e):(Wt(n),null);case 22:case 23:return qn(n),Cu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ee(nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(sn),Wt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function _x(e,n){switch(pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bi(sn),Le(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Be(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(r(340));$a()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));$a()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ee(nn),null;case 4:return Le(),null;case 10:return Bi(n.type),null;case 22:case 23:return qn(n),Cu(),e!==null&&ee(nr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Bi(sn),null;case 25:return null;default:return null}}function Im(e,n){switch(pu(n),n.tag){case 3:Bi(sn),Le();break;case 26:case 27:case 5:Be(n);break;case 4:Le();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:ee(nn);break;case 10:Bi(n.type);break;case 22:case 23:qn(n),Cu(),e!==null&&ee(nr);break;case 24:Bi(sn)}}function so(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==c)}}catch(T){zt(n,n.return,T)}}function xa(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var B=a,ne=T;try{ne()}catch(he){zt(c,B,he)}}}s=s.next}while(s!==f)}}catch(he){zt(n,n.return,he)}}function Hm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Dp(n,a)}catch(s){zt(e,e.return,s)}}}function Gm(e,n,a){a.props=or(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){zt(e,n,s)}}function oo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){zt(e,n,c)}}function Ei(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(e,n,c)}else a.current=null}function Vm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){zt(e,e.return,c)}}function lf(e,n,a){try{var s=e.stateNode;Hx(s,e.type,a,n),s[xn]=n}catch(c){zt(e,e.return,c)}}function km(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function cf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Li));else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(uf(e,n,a),e=e.sibling;e!==null;)uf(e,n,a),e=e.sibling}function wl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(wl(e,n,a),e=e.sibling;e!==null;)wl(e,n,a),e=e.sibling}function jm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,s,a),n[rn]=e,n[xn]=a}catch(f){zt(e,e.return,f)}}var Vi=!1,cn=!1,ff=!1,Xm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function xx(e,n){if(e=e.containerInfo,Lf=Zl,e=ip(e),iu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,B=-1,ne=0,he=0,ye=e,ae=null;t:for(;;){for(var ce;ye!==a||c!==0&&ye.nodeType!==3||(T=v+c),ye!==f||s!==0&&ye.nodeType!==3||(B=v+s),ye.nodeType===3&&(v+=ye.nodeValue.length),(ce=ye.firstChild)!==null;)ae=ye,ye=ce;for(;;){if(ye===e)break t;if(ae===a&&++ne===c&&(T=v),ae===f&&++he===s&&(B=v),(ce=ye.nextSibling)!==null)break;ye=ae,ae=ye.parentNode}ye=ce}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nf={focusedElem:e,selectionRange:a},Zl=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ke=or(a.type,c);e=s.getSnapshotBeforeUpdate(ke,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(it){zt(a,a.return,it)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function qm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),s&4&&so(5,a);break;case 1:if(ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){zt(a,a.return,v)}else{var c=or(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){zt(a,a.return,v)}}s&64&&Hm(a),s&512&&oo(a,a.return);break;case 3:if(ji(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dp(e,n)}catch(v){zt(a,a.return,v)}}break;case 27:n===null&&s&4&&jm(a);case 26:case 5:ji(e,a),n===null&&s&4&&Vm(a),s&512&&oo(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),s&4&&Zm(e,a);break;case 13:ji(e,a),s&4&&Km(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wx.bind(null,a),Yx(e,a))));break;case 22:if(s=a.memoizedState!==null||Vi,!s){n=n!==null&&n.memoizedState!==null||cn,c=Vi;var f=cn;Vi=s,(cn=n)&&!f?Xi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),Vi=c,cn=f}break;case 30:break;default:ji(e,a)}}function Wm(e){var n=e.alternate;n!==null&&(e.alternate=null,Wm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Yt=null,Pn=!1;function ki(e,n,a){for(a=a.child;a!==null;)Ym(e,n,a),a=a.sibling}function Ym(e,n,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:cn||Ei(a,n),ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ei(a,n);var s=Yt,c=Pn;Aa(a.type)&&(Yt=a.stateNode,Pn=!1),ki(e,n,a),vo(a.stateNode),Yt=s,Pn=c;break;case 5:cn||Ei(a,n);case 6:if(s=Yt,c=Pn,Yt=null,ki(e,n,a),Yt=s,Pn=c,Yt!==null)if(Pn)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Yt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Yt!==null&&(Pn?(e=Yt,Hg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rs(e)):Hg(Yt,a.stateNode));break;case 4:s=Yt,c=Pn,Yt=a.stateNode.containerInfo,Pn=!0,ki(e,n,a),Yt=s,Pn=c;break;case 0:case 11:case 14:case 15:xa(2,a,n),cn||xa(4,a,n),ki(e,n,a);break;case 1:cn||(Ei(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Gm(a,n,s)),ki(e,n,a);break;case 21:ki(e,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,ki(e,n,a),cn=s;break;default:ki(e,n,a)}}function Zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rs(e)}catch(a){zt(n,n.return,a)}}}function Km(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rs(e)}catch(a){zt(n,n.return,a)}}function yx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Xm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Xm),n;default:throw Error(r(435,e.tag))}}function Cl(e,n){var a=yx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Cx.bind(null,e,s);s.then(c,c)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Aa(T.type)){Yt=T.stateNode,Pn=!1;break e}break;case 5:Yt=T.stateNode,Pn=!1;break e;case 3:case 4:Yt=T.stateNode.containerInfo,Pn=!0;break e}T=T.return}if(Yt===null)throw Error(r(160));Ym(f,v,c),Yt=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Qm(n,e),n=n.sibling}var fi=null;function Qm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),Bn(e),s&4&&(xa(3,e,e.return),so(3,e),xa(5,e,e.return));break;case 1:zn(n,e),Bn(e),s&512&&(cn||a===null||Ei(a,a.return)),s&64&&Vi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=fi;if(zn(n,e),Bn(e),s&512&&(cn||a===null||Ei(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[qa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,s,a),f[rn]=e,Me(f),s=f;break e;case"link":var v=Qg("link","href",c).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;case"meta":if(v=Qg("meta","content",c).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=e,Me(f),s=f}e.stateNode=s}else Jg(c,e.type,e.stateNode);else e.stateNode=Kg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Jg(c,e.type,e.stateNode):Kg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),Bn(e),s&512&&(cn||a===null||Ei(a,a.return)),a!==null&&s&4&&lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),Bn(e),s&512&&(cn||a===null||Ei(a,a.return)),e.flags&32){c=e.stateNode;try{wr(c,"")}catch(ke){zt(e,e.return,ke)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,lf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(ff=!0);break;case 6:if(zn(n,e),Bn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(ke){zt(e,e.return,ke)}}break;case 3:if(Xl=null,c=fi,fi=kl(n.containerInfo),zn(n,e),fi=c,Bn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(ke){zt(e,e.return,ke)}ff&&(ff=!1,Jm(e));break;case 4:s=fi,fi=kl(e.stateNode.containerInfo),zn(n,e),Bn(e),fi=s;break;case 12:zn(n,e),Bn(e);break;case 31:zn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Cl(e,s)));break;case 13:zn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ul=b()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Cl(e,s)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ne=Vi,he=cn;if(Vi=ne||c,cn=he||B,zn(n,e),cn=he,Vi=ne,Bn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Vi||cn||lr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=B.stateNode;var ye=B.memoizedProps.style,ae=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;T.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(ke){zt(B,B.return,ke)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(ke){zt(B,B.return,ke)}}}else if(n.tag===18){if(a===null){B=n;try{var ce=B.stateNode;c?Gg(ce,!0):Gg(B.stateNode,!1)}catch(ke){zt(B,B.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Cl(e,a))));break;case 19:zn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Cl(e,s)));break;case 30:break;case 21:break;default:zn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(km(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(e);wl(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(wr(v,""),a.flags&=-33);var T=cf(e);wl(e,T,v);break;case 3:case 4:var B=a.stateNode.containerInfo,ne=cf(e);uf(e,ne,B);break;default:throw Error(r(161))}}catch(he){zt(e,e.return,he)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Jm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qm(e,n.alternate,n),n=n.sibling}function lr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),lr(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Gm(n,n.return,a),lr(n);break;case 27:vo(n.stateNode);case 26:case 5:Ei(n,n.return),lr(n);break;case 22:n.memoizedState===null&&lr(n);break;case 30:lr(n);break;default:lr(n)}e=e.sibling}}function Xi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(c,f,a),so(4,f);break;case 1:if(Xi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ne){zt(s,s.return,ne)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Cp(B[c],T)}catch(ne){zt(s,s.return,ne)}}a&&v&64&&Hm(f),oo(f,f.return);break;case 27:jm(f);case 26:case 5:Xi(c,f,a),a&&s===null&&v&4&&Vm(f),oo(f,f.return);break;case 12:Xi(c,f,a);break;case 31:Xi(c,f,a),a&&v&4&&Zm(c,f);break;case 13:Xi(c,f,a),a&&v&4&&Km(c,f);break;case 22:f.memoizedState===null&&Xi(c,f,a),oo(f,f.return);break;case 30:break;default:Xi(c,f,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ws(a))}function hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e))}function di(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$m(e,n,a,s),n=n.sibling}function $m(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:di(e,n,a,s),c&2048&&so(9,n);break;case 1:di(e,n,a,s);break;case 3:di(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e)));break;case 12:if(c&2048){di(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){zt(n,n.return,B)}}else di(e,n,a,s);break;case 31:di(e,n,a,s);break;case 13:di(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?di(e,n,a,s):lo(e,n):f._visibility&2?di(e,n,a,s):(f._visibility|=2,Yr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(v,n);break;case 24:di(e,n,a,s),c&2048&&hf(n.alternate,n);break;default:di(e,n,a,s)}}function Yr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,B=s,ne=v.flags;switch(v.tag){case 0:case 11:case 15:Yr(f,v,T,B,c),so(8,v);break;case 23:break;case 22:var he=v.stateNode;v.memoizedState!==null?he._visibility&2?Yr(f,v,T,B,c):lo(f,v):(he._visibility|=2,Yr(f,v,T,B,c)),c&&ne&2048&&df(v.alternate,v);break;case 24:Yr(f,v,T,B,c),c&&ne&2048&&hf(v.alternate,v);break;default:Yr(f,v,T,B,c)}n=n.sibling}}function lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:lo(a,s),c&2048&&df(s.alternate,s);break;case 24:lo(a,s),c&2048&&hf(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var co=8192;function Zr(e,n,a){if(e.subtreeFlags&co)for(e=e.child;e!==null;)eg(e,n,a),e=e.sibling}function eg(e,n,a){switch(e.tag){case 26:Zr(e,n,a),e.flags&co&&e.memoizedState!==null&&sy(a,fi,e.memoizedState,e.memoizedProps);break;case 5:Zr(e,n,a);break;case 3:case 4:var s=fi;fi=kl(e.stateNode.containerInfo),Zr(e,n,a),fi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=co,co=16777216,Zr(e,n,a),co=s):Zr(e,n,a));break;default:Zr(e,n,a)}}function tg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,ig(s,e)}tg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ng(e),e=e.sibling}function ng(e){switch(e.tag){case 0:case 11:case 15:uo(e),e.flags&2048&&xa(9,e,e.return);break;case 3:uo(e);break;case 12:uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Dl(e)):uo(e);break;default:uo(e)}}function Dl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,ig(s,e)}tg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}e=e.sibling}}function ig(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else e:for(a=e;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(Wm(s),s===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var Sx={getCacheForType:function(e){var n=Mn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},Mx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,jt=null,vt=null,yt=0,Pt=0,Wn=null,ya=!1,Kr=!1,pf=!1,qi=0,en=0,Sa=0,cr=0,mf=0,Yn=0,Qr=0,fo=null,Fn=null,gf=!1,Ul=0,ag=0,Ll=1/0,Nl=null,Ma=null,dn=0,Ea=null,Jr=null,Wi=0,vf=0,_f=null,rg=null,ho=0,xf=null;function Zn(){return(Dt&2)!==0&&yt!==0?yt&-yt:D.T!==null?Tf():Xa()}function sg(){if(Yn===0)if((yt&536870912)===0||Et){var e=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),Yn=e}else Yn=536870912;return e=Xn.current,e!==null&&(e.flags|=32),Yn}function In(e,n,a){(e===jt&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)&&($r(e,0),ba(e,yt,Yn,!1)),Cn(e,a),((Dt&2)===0||e!==jt)&&(e===jt&&((Dt&2)===0&&(cr|=a),en===4&&ba(e,yt,Yn,!1)),bi(e))}function og(e,n,a){if((Dt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ve(e,n),c=s?Tx(e,n):Sf(e,n,!0),f=s;do{if(c===0){Kr&&!s&&ba(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ex(a)){c=Sf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=e;c=fo;var B=T.current.memoizedState.isDehydrated;if(B&&($r(T,v).flags|=256),v=Sf(T,v,!1),v!==2){if(pf&&!B){T.errorRecoveryDisabledLanes|=f,cr|=f,c=4;break e}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){$r(e,0),ba(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ba(s,n,Yn,!ya);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Ul+300-b(),10<c)){if(ba(s,n,Yn,!ya),Se(s,0,!0)!==0)break e;Wi=n,s.timeoutHandle=Fg(lg.bind(null,s,a,Fn,Nl,gf,n,Yn,cr,Qr,ya,f,"Throttled",-0,0),c);break e}lg(s,a,Fn,Nl,gf,n,Yn,cr,Qr,ya,f,null,-0,0)}}break}while(!0);bi(e)}function lg(e,n,a,s,c,f,v,T,B,ne,he,ye,ae,ce){if(e.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},eg(n,f,ye);var ke=(f&62914560)===f?Ul-b():(f&4194048)===f?ag-b():0;if(ke=oy(ye,ke),ke!==null){Wi=f,e.cancelPendingCommit=ke(gg.bind(null,e,n,f,a,s,c,v,T,B,he,ye,null,ae,ce)),ba(e,f,v,!ne);return}}gg(e,n,f,a,s,c,v,T,B)}function Ex(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(e,n,a,s){n&=~mf,n&=~cr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Fe(c),v=1<<f;s[f]=-1,c&=~v}a!==0&&Ns(e,a,n)}function Ol(){return(Dt&6)===0?(po(0),!1):!0}function yf(){if(vt!==null){if(Pt===0)var e=vt.return;else e=vt,zi=er=null,Pu(e),kr=null,Zs=0,e=vt;for(;e!==null;)Im(e.alternate,e),e=e.return;vt=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,kx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wi=0,yf(),jt=e,vt=a=Oi(e.current,null),yt=n,Pt=0,Wn=null,ya=!1,Kr=Ve(e,n),pf=!1,Qr=Yn=mf=cr=Sa=en=0,Fn=fo=null,gf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Fe(s),f=1<<c;n|=e[c],s&=~f}return qi=n,tl(),a}function cg(e,n){ut=null,D.H=io,n===Vr||n===cl?(n=Tp(),Pt=3):n===Eu?(n=Tp(),Pt=4):Pt=n===Qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,vt===null&&(en=1,El(e,ti(n,e.current)))}function ug(){var e=Xn.current;return e===null?!0:(yt&4194048)===yt?ri===null:(yt&62914560)===yt||(yt&536870912)!==0?e===ri:!1}function fg(){var e=D.H;return D.H=io,e===null?io:e}function dg(){var e=D.A;return D.A=Sx,e}function Pl(){en=4,ya||(yt&4194048)!==yt&&Xn.current!==null||(Kr=!0),(Sa&134217727)===0&&(cr&134217727)===0||jt===null||ba(jt,yt,Yn,!1)}function Sf(e,n,a){var s=Dt;Dt|=2;var c=fg(),f=dg();(jt!==e||yt!==n)&&(Nl=null,$r(e,n)),n=!1;var v=en;e:do try{if(Pt!==0&&vt!==null){var T=vt,B=Wn;switch(Pt){case 8:yf(),v=6;break e;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var ne=Pt;if(Pt=0,Wn=null,es(e,T,B,ne),a&&Kr){v=0;break e}break;default:ne=Pt,Pt=0,Wn=null,es(e,T,B,ne)}}bx(),v=en;break}catch(he){cg(e,he)}while(!0);return n&&e.shellSuspendCounter++,zi=er=null,Dt=s,D.H=c,D.A=f,vt===null&&(jt=null,yt=0,tl()),v}function bx(){for(;vt!==null;)hg(vt)}function Tx(e,n){var a=Dt;Dt|=2;var s=fg(),c=dg();jt!==e||yt!==n?(Nl=null,Ll=b()+500,$r(e,n)):Kr=Ve(e,n);e:do try{if(Pt!==0&&vt!==null){n=vt;var f=Wn;t:switch(Pt){case 1:Pt=0,Wn=null,es(e,n,f,1);break;case 2:case 9:if(Ep(f)){Pt=0,Wn=null,pg(n);break}n=function(){Pt!==2&&Pt!==9||jt!==e||(Pt=7),bi(e)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:Ep(f)?(Pt=0,Wn=null,pg(n)):(Pt=0,Wn=null,es(e,n,f,7));break;case 5:var v=null;switch(vt.tag){case 26:v=vt.memoizedState;case 5:case 27:var T=vt;if(v?$g(v):T.stateNode.complete){Pt=0,Wn=null;var B=T.sibling;if(B!==null)vt=B;else{var ne=T.return;ne!==null?(vt=ne,zl(ne)):vt=null}break t}}Pt=0,Wn=null,es(e,n,f,5);break;case 6:Pt=0,Wn=null,es(e,n,f,6);break;case 8:yf(),en=6;break e;default:throw Error(r(462))}}Ax();break}catch(he){cg(e,he)}while(!0);return zi=er=null,D.H=s,D.A=c,Dt=a,vt!==null?0:(jt=null,yt=0,tl(),en)}function Ax(){for(;vt!==null&&!Zt();)hg(vt)}function hg(e){var n=Bm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,n===null?zl(e):vt=n}function pg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Um(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Um(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Pu(n);default:Im(a,n),n=vt=dp(n,qi),n=Bm(a,n,qi)}e.memoizedProps=e.pendingProps,n===null?zl(e):vt=n}function es(e,n,a,s){zi=er=null,Pu(n),kr=null,Zs=0;var c=n.return;try{if(px(e,c,n,a,yt)){en=1,El(e,ti(a,e.current)),vt=null;return}}catch(f){if(c!==null)throw vt=c,f;en=1,El(e,ti(a,e.current)),vt=null;return}n.flags&32768?(Et||s===1?e=!0:Kr||(yt&536870912)!==0?e=!1:(ya=e=!0,(s===2||s===9||s===3||s===6)&&(s=Xn.current,s!==null&&s.tag===13&&(s.flags|=16384))),mg(n,e)):zl(n)}function zl(e){var n=e;do{if((n.flags&32768)!==0){mg(n,ya);return}e=n.return;var a=vx(n.alternate,n,qi);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=e}while(n!==null);en===0&&(en=5)}function mg(e,n){do{var a=_x(e.alternate,e);if(a!==null){a.flags&=32767,vt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){vt=e;return}vt=e=a}while(e!==null);en=6,vt=null}function gg(e,n,a,s,c,f,v,T,B){e.cancelPendingCommit=null;do Bl();while(dn!==0);if((Dt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=lu,$n(e,a,f,v,T,B),e===jt&&(vt=jt=null,yt=0),Jr=n,Ea=e,Wi=a,vf=f,_f=c,rg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Dx(de,function(){return Sg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=D.T,D.T=null,c=K.p,K.p=2,v=Dt,Dt|=4;try{xx(e,n,a)}finally{Dt=v,K.p=c,D.T=s}}dn=1,vg(),_g(),xg()}}function vg(){if(dn===1){dn=0;var e=Ea,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var s=K.p;K.p=2;var c=Dt;Dt|=4;try{Qm(n,e);var f=Nf,v=ip(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&np(T.ownerDocument.documentElement,T)){if(B!==null&&iu(T)){var ne=B.start,he=B.end;if(he===void 0&&(he=ne),"selectionStart"in T)T.selectionStart=ne,T.selectionEnd=Math.min(he,T.value.length);else{var ye=T.ownerDocument||document,ae=ye&&ye.defaultView||window;if(ae.getSelection){var ce=ae.getSelection(),ke=T.textContent.length,it=Math.min(B.start,ke),Ht=B.end===void 0?it:Math.min(B.end,ke);!ce.extend&&it>Ht&&(v=Ht,Ht=it,it=v);var Z=tp(T,it),V=tp(T,Ht);if(Z&&V&&(ce.rangeCount!==1||ce.anchorNode!==Z.node||ce.anchorOffset!==Z.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var te=ye.createRange();te.setStart(Z.node,Z.offset),ce.removeAllRanges(),it>Ht?(ce.addRange(te),ce.extend(V.node,V.offset)):(te.setEnd(V.node,V.offset),ce.addRange(te))}}}}for(ye=[],ce=T;ce=ce.parentNode;)ce.nodeType===1&&ye.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ye.length;T++){var ge=ye[T];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Zl=!!Lf,Nf=Lf=null}finally{Dt=c,K.p=s,D.T=a}}e.current=n,dn=2}}function _g(){if(dn===2){dn=0;var e=Ea,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var s=K.p;K.p=2;var c=Dt;Dt|=4;try{qm(e,n.alternate,n)}finally{Dt=c,K.p=s,D.T=a}}dn=3}}function xg(){if(dn===4||dn===3){dn=0,P();var e=Ea,n=Jr,a=Wi,s=rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,Jr=Ea=null,yg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ma=null),Ar(a),n=n.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Re,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=D.T,c=K.p,K.p=2,D.T=null;try{for(var f=e.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{D.T=n,K.p=c}}(Wi&3)!==0&&Bl(),bi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===xf?ho++:(ho=0,xf=e):ho=0,po(0)}}function yg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ws(n)))}function Bl(){return vg(),_g(),xg(),Sg()}function Sg(){if(dn!==5)return!1;var e=Ea,n=vf;vf=0;var a=Ar(Wi),s=D.T,c=K.p;try{K.p=32>a?32:a,D.T=null,a=_f,_f=null;var f=Ea,v=Wi;if(dn=0,Jr=Ea=null,Wi=0,(Dt&6)!==0)throw Error(r(331));var T=Dt;if(Dt|=4,ng(f.current),$m(f,f.current,v,a),Dt=T,po(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Re,f)}catch{}return!0}finally{K.p=c,D.T=s,yg(e,n)}}function Mg(e,n,a){n=ti(a,n),n=Ku(e.stateNode,n,2),e=ga(e,n,2),e!==null&&(Cn(e,2),bi(e))}function zt(e,n,a){if(e.tag===3)Mg(e,e,a);else for(;n!==null;){if(n.tag===3){Mg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){e=ti(a,e),a=Em(2),s=ga(n,a,2),s!==null&&(bm(a,s,n,e),Cn(s,2),bi(s));break}}n=n.return}}function Mf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Mx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(pf=!0,c.add(a),e=Rx.bind(null,e,n,a),n.then(e,e))}function Rx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,jt===e&&(yt&a)===a&&(en===4||en===3&&(yt&62914560)===yt&&300>b()-Ul?(Dt&2)===0&&$r(e,0):mf|=a,Qr===yt&&(Qr=0)),bi(e)}function Eg(e,n){n===0&&(n=Ot()),e=Qa(e,n),e!==null&&(Cn(e,n),bi(e))}function wx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Eg(e,a)}function Cx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Eg(e,a)}function Dx(e,n){return ot(e,n)}var Fl=null,ts=null,Ef=!1,Il=!1,bf=!1,Ta=0;function bi(e){e!==ts&&e.next===null&&(ts===null?Fl=ts=e:ts=ts.next=e),Il=!0,Ef||(Ef=!0,Lx())}function po(e,n){if(!bf&&Il){bf=!0;do for(var a=!1,s=Fl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Fe(42|e)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Rg(s,f))}else f=yt,f=Se(s,s===jt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ve(s,f)||(a=!0,Rg(s,f));s=s.next}while(a);bf=!1}}function Ux(){bg()}function bg(){Il=Ef=!1;var e=0;Ta!==0&&Vx()&&(e=Ta);for(var n=b(),a=null,s=Fl;s!==null;){var c=s.next,f=Tg(s,n);f===0?(s.next=null,a===null?Fl=c:a.next=c,c===null&&(ts=a)):(a=s,(e!==0||(f&3)!==0)&&(Il=!0)),s=c}dn!==0&&dn!==5||po(e),Ta!==0&&(Ta=0)}function Tg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Fe(f),T=1<<v,B=c[v];B===-1?((T&a)===0||(T&s)!==0)&&(c[v]=rt(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=jt,a=yt,a=Se(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Jt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ve(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Jt(s),Ar(a)){case 2:case 8:a=be;break;case 32:a=de;break;case 268435456:a=Ce;break;default:a=de}return s=Ag.bind(null,e),a=ot(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Jt(s),e.callbackPriority=2,e.callbackNode=null,2}function Ag(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bl()&&e.callbackNode!==a)return null;var s=yt;return s=Se(e,e===jt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(og(e,s,n),Tg(e,b()),e.callbackNode!=null&&e.callbackNode===a?Ag.bind(null,e):null)}function Rg(e,n){if(Bl())return null;og(e,n,!0)}function Lx(){jx(function(){(Dt&6)!==0?ot(pe,Ux):bg()})}function Tf(){if(Ta===0){var e=Hr;e===0&&(e=we,we<<=1,(we&261888)===0&&(we=256)),Ta=e}return Ta}function wg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wo(""+e)}function Cg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Nx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=wg((c[xn]||null).action),v=s.submitter;v&&(n=(n=v[xn]||null)?wg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new Qo("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ta!==0){var B=v?Cg(c,v):new FormData(c);ju(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=v?Cg(c,v):new FormData(c),ju(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Af=0;Af<ou.length;Af++){var Rf=ou[Af],Ox=Rf.toLowerCase(),Px=Rf[0].toUpperCase()+Rf.slice(1);ui(Ox,"on"+Px)}ui(sp,"onAnimationEnd"),ui(op,"onAnimationIteration"),ui(lp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(Q0,"onTransitionRun"),ui(J0,"onTransitionStart"),ui($0,"onTransitionCancel"),ui(cp,"onTransitionEnd"),et("onMouseEnter",["mouseout","mouseover"]),et("onMouseLeave",["mouseout","mouseover"]),et("onPointerEnter",["pointerout","pointerover"]),et("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Dg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],B=T.instance,ne=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=ne;try{f(c)}catch(he){el(he)}c.currentTarget=null,f=B}else for(v=0;v<s.length;v++){if(T=s[v],B=T.instance,ne=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=ne;try{f(c)}catch(he){el(he)}c.currentTarget=null,f=B}}}}function _t(e,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var s=e+"__bubble";a.has(s)||(Ug(n,e,2,!1),a.add(s))}function wf(e,n,a){var s=0;n&&(s|=4),Ug(a,e,s,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Cf(e){if(!e[Hl]){e[Hl]=!0,Oe.forEach(function(a){a!=="selectionchange"&&(zx.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,wf("selectionchange",!1,n))}}function Ug(e,n,a,s){switch(sv(n)){case 2:var c=uy;break;case 8:c=fy;break;default:c=jf}a=c.bind(null,n,a,e),c=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Df(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=s.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=W(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){s=f=v;continue e}T=T.parentNode}}s=s.return}zh(function(){var ne=f,he=qc(a),ye=[];e:{var ae=up.get(e);if(ae!==void 0){var ce=Qo,ke=e;switch(e){case"keypress":if(Zo(a)===0)break e;case"keydown":case"keyup":ce=C0;break;case"focusin":ke="focus",ce=Jc;break;case"focusout":ke="blur",ce=Jc;break;case"beforeblur":case"afterblur":ce=Jc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=L0;break;case sp:case op:case lp:ce=y0;break;case cp:ce=O0;break;case"scroll":case"scrollend":ce=m0;break;case"wheel":ce=z0;break;case"copy":case"cut":case"paste":ce=M0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Gh;break;case"toggle":case"beforetoggle":ce=F0}var it=(n&4)!==0,Ht=!it&&(e==="scroll"||e==="scrollend"),Z=it?ae!==null?ae+"Capture":null:ae;it=[];for(var V=ne,te;V!==null;){var ge=V;if(te=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||te===null||Z===null||(ge=zs(V,Z),ge!=null&&it.push(go(V,ge,te))),Ht)break;V=V.return}0<it.length&&(ae=new ce(ae,ke,null,a,he),ye.push({event:ae,listeners:it}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",ce=e==="mouseout"||e==="pointerout",ae&&a!==Xc&&(ke=a.relatedTarget||a.fromElement)&&(W(ke)||ke[la]))break e;if((ce||ae)&&(ae=he.window===he?he:(ae=he.ownerDocument)?ae.defaultView||ae.parentWindow:window,ce?(ke=a.relatedTarget||a.toElement,ce=ne,ke=ke?W(ke):null,ke!==null&&(Ht=u(ke),it=ke.tag,ke!==Ht||it!==5&&it!==27&&it!==6)&&(ke=null)):(ce=null,ke=ne),ce!==ke)){if(it=Ih,ge="onMouseLeave",Z="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(it=Gh,ge="onPointerLeave",Z="onPointerEnter",V="pointer"),Ht=ce==null?ae:oe(ce),te=ke==null?ae:oe(ke),ae=new it(ge,V+"leave",ce,a,he),ae.target=Ht,ae.relatedTarget=te,ge=null,W(he)===ne&&(it=new it(Z,V+"enter",ke,a,he),it.target=te,it.relatedTarget=Ht,ge=it),Ht=ge,ce&&ke)t:{for(it=Bx,Z=ce,V=ke,te=0,ge=Z;ge;ge=it(ge))te++;ge=0;for(var nt=V;nt;nt=it(nt))ge++;for(;0<te-ge;)Z=it(Z),te--;for(;0<ge-te;)V=it(V),ge--;for(;te--;){if(Z===V||V!==null&&Z===V.alternate){it=Z;break t}Z=it(Z),V=it(V)}it=null}else it=null;ce!==null&&Lg(ye,ae,ce,it,!1),ke!==null&&Ht!==null&&Lg(ye,Ht,ke,it,!0)}}e:{if(ae=ne?oe(ne):window,ce=ae.nodeName&&ae.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ae.type==="file")var At=Zh;else if(Wh(ae))if(Kh)At=Y0;else{At=q0;var Ye=X0}else ce=ae.nodeName,!ce||ce.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ne&&jc(ne.elementType)&&(At=Zh):At=W0;if(At&&(At=At(e,ne))){Yh(ye,At,a,he);break e}Ye&&Ye(e,ae,ne),e==="focusout"&&ne&&ae.type==="number"&&ne.memoizedProps.value!=null&&fn(ae,"number",ae.value)}switch(Ye=ne?oe(ne):window,e){case"focusin":(Wh(Ye)||Ye.contentEditable==="true")&&(Lr=Ye,au=ne,js=null);break;case"focusout":js=au=Lr=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,ap(ye,a,he);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":ap(ye,a,he)}var dt;if(eu)e:{switch(e){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Ur?Xh(e,a)&&(St="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Vh&&a.locale!=="ko"&&(Ur||St!=="onCompositionStart"?St==="onCompositionEnd"&&Ur&&(dt=Bh()):(ca=he,Zc="value"in ca?ca.value:ca.textContent,Ur=!0)),Ye=Gl(ne,St),0<Ye.length&&(St=new Hh(St,e,null,a,he),ye.push({event:St,listeners:Ye}),dt?St.data=dt:(dt=qh(a),dt!==null&&(St.data=dt)))),(dt=H0?G0(e,a):V0(e,a))&&(St=Gl(ne,"onBeforeInput"),0<St.length&&(Ye=new Hh("onBeforeInput","beforeinput",null,a,he),ye.push({event:Ye,listeners:St}),Ye.data=dt)),Nx(ye,e,ne,a,he)}Dg(ye,n)})}function go(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Gl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(e,a),c!=null&&s.unshift(go(e,c,f)),c=zs(e,n),c!=null&&s.push(go(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Bx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lg(e,n,a,s,c){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,B=T.alternate,ne=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||ne===null||(B=ne,c?(ne=zs(a,f),ne!=null&&v.unshift(go(a,ne,B))):c||(ne=zs(a,f),ne!=null&&v.push(go(a,ne,B)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Fx=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function Ng(e){return(typeof e=="string"?e:""+e).replace(Fx,`
`).replace(Ix,"")}function Og(e,n){return n=Ng(n),Ng(e)===n}function It(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||wr(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&wr(e,""+s);break;case"className":Nt(e,"class",s);break;case"tabIndex":Nt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(e,a,s);break;case"style":Oh(e,s,f);break;case"data":if(n!=="object"){Nt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Wo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(e,n,"name",c.name,c,null),It(e,n,"formEncType",c.formEncType,c,null),It(e,n,"formMethod",c.formMethod,c,null),It(e,n,"formTarget",c.formTarget,c,null)):(It(e,n,"encType",c.encType,c,null),It(e,n,"method",c.method,c,null),It(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Wo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Li);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Wo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":_t("beforetoggle",e),_t("toggle",e),kt(e,"popover",s);break;case"xlinkActuate":gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":gt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":gt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":gt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":gt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":kt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=h0.get(a)||a,kt(e,a,s))}}function Uf(e,n,a,s,c,f){switch(a){case"style":Oh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?wr(e,s):(typeof s=="number"||typeof s=="bigint")&&wr(e,""+s);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!je.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):kt(e,a,s)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,f,v,a,null)}}c&&It(e,n,"srcSet",a.srcSet,a,null),s&&It(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var T=f=v=c=null,B=null,ne=null;for(s in a)if(a.hasOwnProperty(s)){var he=a[s];if(he!=null)switch(s){case"name":c=he;break;case"type":v=he;break;case"checked":B=he;break;case"defaultChecked":ne=he;break;case"value":f=he;break;case"defaultValue":T=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:It(e,n,s,he,a,null)}}Dn(e,f,T,B,ne,v,c,!1);return;case"select":_t("invalid",e),s=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:It(e,n,c,T,a,null)}n=f,a=v,e.multiple=!!s,n!=null?tn(e,!!s,n,!1):a!=null&&tn(e,!!s,a,!0);return;case"textarea":_t("invalid",e),f=c=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:It(e,n,v,T,a,null)}yi(e,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:It(e,n,B,s,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(s=0;s<mo.length;s++)_t(mo[s],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(s=a[ne],s!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,ne,s,a,null)}return;default:if(jc(n)){for(he in a)a.hasOwnProperty(he)&&(s=a[he],s!==void 0&&Uf(e,n,he,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&It(e,n,T,s,a,null))}function Hx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,B=null,ne=null,he=null;for(ce in a){var ye=a[ce];if(a.hasOwnProperty(ce)&&ye!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":B=ye;default:s.hasOwnProperty(ce)||It(e,n,ce,null,s,ye)}}for(var ae in s){var ce=s[ae];if(ye=a[ae],s.hasOwnProperty(ae)&&(ce!=null||ye!=null))switch(ae){case"type":f=ce;break;case"name":c=ce;break;case"checked":ne=ce;break;case"defaultChecked":he=ce;break;case"value":v=ce;break;case"defaultValue":T=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==ye&&It(e,n,ae,ce,s,ye)}}Tn(e,v,T,B,ne,he,f,c);return;case"select":ce=v=T=ae=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ce=B;default:s.hasOwnProperty(f)||It(e,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":ae=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==B&&It(e,n,c,f,s,B)}n=T,a=v,s=ce,ae!=null?tn(e,!!a,ae,!1):!!s!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":ce=ae=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:It(e,n,T,null,s,c)}for(v in s)if(c=s[v],f=a[v],s.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":ae=c;break;case"defaultValue":ce=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&It(e,n,v,c,s,f)}Rr(e,ae,ce);return;case"option":for(var ke in a)if(ae=a[ke],a.hasOwnProperty(ke)&&ae!=null&&!s.hasOwnProperty(ke))switch(ke){case"selected":e.selected=!1;break;default:It(e,n,ke,null,s,ae)}for(B in s)if(ae=s[B],ce=a[B],s.hasOwnProperty(B)&&ae!==ce&&(ae!=null||ce!=null))switch(B){case"selected":e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:It(e,n,B,ae,s,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)ae=a[it],a.hasOwnProperty(it)&&ae!=null&&!s.hasOwnProperty(it)&&It(e,n,it,null,s,ae);for(ne in s)if(ae=s[ne],ce=a[ne],s.hasOwnProperty(ne)&&ae!==ce&&(ae!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:It(e,n,ne,ae,s,ce)}return;default:if(jc(n)){for(var Ht in a)ae=a[Ht],a.hasOwnProperty(Ht)&&ae!==void 0&&!s.hasOwnProperty(Ht)&&Uf(e,n,Ht,void 0,s,ae);for(he in s)ae=s[he],ce=a[he],!s.hasOwnProperty(he)||ae===ce||ae===void 0&&ce===void 0||Uf(e,n,he,ae,s,ce);return}}for(var Z in a)ae=a[Z],a.hasOwnProperty(Z)&&ae!=null&&!s.hasOwnProperty(Z)&&It(e,n,Z,null,s,ae);for(ye in s)ae=s[ye],ce=a[ye],!s.hasOwnProperty(ye)||ae===ce||ae==null&&ce==null||It(e,n,ye,ae,s,ce)}function Pg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&Pg(v)){for(v=0,T=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],ne=B.startTime;if(ne>T)break;var he=B.transferSize,ye=B.initiatorType;he&&Pg(ye)&&(B=B.responseEnd,v+=he*(B<T?1:(T-ne)/(B-ne)))}if(--s,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lf=null,Nf=null;function Vl(e){return e.nodeType===9?e:e.ownerDocument}function zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Of(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function Vx(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,kx=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,jx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(e){return Ig.resolve(null).then(e).catch(Xx)}:Fg;function Xx(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Hg(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),rs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")vo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,vo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[qa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&vo(e.ownerDocument.body);a=c}while(a);rs(n)}function Gg(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function qx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[qa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=si(e.nextSibling),e===null)break}return null}function Wx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=si(e.nextSibling),e===null))return null;return e}function Vg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=si(e.nextSibling),e===null))return null;return e}function Bf(e){return e.data==="$?"||e.data==="$~"}function Ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Yx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var If=null;function kg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function jg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Xg(e,n,a){switch(n=Vl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function vo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var oi=new Map,qg=new Set;function kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=K.d;K.d={f:Zx,r:Kx,D:Qx,C:Jx,L:$x,m:ey,X:ny,S:ty,M:iy};function Zx(){var e=Yi.f(),n=Ol();return e||n}function Kx(e){var n=re(e);n!==null&&n.tag===5&&n.type==="form"?cm(n):Yi.r(e)}var ns=typeof document>"u"?null:document;function Wg(e,n,a){var s=ns;if(s&&typeof n=="string"&&n){var c=xt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),qg.has(c)||(qg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),bn(n,"link",e),Me(n),s.head.appendChild(n)))}}function Qx(e){Yi.D(e),Wg("dns-prefetch",e,null)}function Jx(e,n){Yi.C(e,n),Wg("preconnect",e,n)}function $x(e,n,a){Yi.L(e,n,a);var s=ns;if(s&&e&&n){var c='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+xt(a.imageSizes)+'"]')):c+='[href="'+xt(e)+'"]';var f=c;switch(n){case"style":f=is(e);break;case"script":f=as(e)}oi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(xo(f))||(n=s.createElement("link"),bn(n,"link",e),Me(n),s.head.appendChild(n)))}}function ey(e,n){Yi.m(e,n);var a=ns;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xt(s)+'"][href="'+xt(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(e)}if(!oi.has(f)&&(e=_({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}s=a.createElement("link"),bn(s,"link",e),Me(s),a.head.appendChild(s)}}}function ty(e,n,a){Yi.S(e,n,a);var s=ns;if(s&&e){var c=Y(s).hoistableStyles,f=is(e);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(_o(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&Hf(e,a);var B=v=s.createElement("link");Me(B),bn(B,"link",e),B._p=new Promise(function(ne,he){B.onload=ne,B.onerror=he}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,jl(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function ny(e,n){Yi.X(e,n);var a=ns;if(a&&e){var s=Y(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(e=_({src:e,async:!0},n),(n=oi.get(c))&&Gf(e,n),f=a.createElement("script"),Me(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function iy(e,n){Yi.M(e,n);var a=ns;if(a&&e){var s=Y(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&Gf(e,n),f=a.createElement("script"),Me(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Yg(e,n,a,s){var c=(c=xe.current)?kl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=Y(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var f=Y(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(_o(e)))&&!f._p&&(v.instance=f,v.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||ay(c,e,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=Y(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+xt(e)+'"'}function _o(e){return'link[rel="stylesheet"]['+e+"]"}function Zg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function ay(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),Me(n),e.head.appendChild(n))}function as(e){return'[src="'+xt(e)+'"]'}function xo(e){return"script[async]"+e}function Kg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(s)return n.instance=s,Me(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Me(s),bn(s,"style",c),jl(s,a.precedence,e),n.instance=s;case"stylesheet":c=is(a.href);var f=e.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,Me(f),f;s=Zg(a),(c=oi.get(c))&&Hf(s,c),f=(e.ownerDocument||e).createElement("link"),Me(f);var v=f;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),bn(f,"link",s),n.state.loading|=4,jl(f,a.precedence,e),n.instance=f;case"script":return f=as(a.src),(c=e.querySelector(xo(f)))?(n.instance=c,Me(c),c):(s=a,(c=oi.get(f))&&(s=_({},a),Gf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Me(c),bn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,jl(s,a.precedence,e));return n.instance}function jl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Xl=null;function Qg(e,n,a){if(Xl===null){var s=new Map,c=Xl=new Map;c.set(a,s)}else c=Xl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[qa]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function Jg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ry(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $g(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sy(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=is(s.href),f=n.querySelector(_o(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ql.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Me(f);return}f=n.ownerDocument||n,s=Zg(s),(c=oi.get(c))&&Hf(s,c),f=f.createElement("link"),Me(f);var v=f;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),bn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ql.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vf=0;function oy(e,n){return e.stylesheets&&e.count===0&&Yl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Yl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Vf===0&&(Vf=62500*Gx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Vf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wl=null;function Yl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wl=new Map,n.forEach(ly,e),Wl=null,ql.call(e))}function ly(e,n){if(!(n.state.loading&4)){var a=Wl.get(e);if(a)var s=a.get(null);else{a=new Map,Wl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,c),a.set(v,c),this.count++,s=ql.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var yo={$$typeof:z,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function cy(e,n,a,s,c,f,v,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function ev(e,n,a,s,c,f,v,T,B,ne,he,ye){return e=new cy(e,n,a,v,B,ne,he,ye,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=yu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},bu(f),e}function tv(e){return e?(e=Pr,e):Pr}function nv(e,n,a,s,c,f){c=tv(c),s.context===null?s.context=c:s.pendingContext=c,s=ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ga(e,s,n),a!==null&&(In(a,e,n),Qs(a,e,n))}function iv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function kf(e,n){iv(e,n),(e=e.alternate)&&iv(e,n)}function av(e){if(e.tag===13||e.tag===31){var n=Qa(e,67108864);n!==null&&In(n,e,67108864),kf(e,67108864)}}function rv(e){if(e.tag===13||e.tag===31){var n=Zn();n=Tr(n);var a=Qa(e,n);a!==null&&In(a,e,n),kf(e,n)}}var Zl=!0;function uy(e,n,a,s){var c=D.T;D.T=null;var f=K.p;try{K.p=2,jf(e,n,a,s)}finally{K.p=f,D.T=c}}function fy(e,n,a,s){var c=D.T;D.T=null;var f=K.p;try{K.p=8,jf(e,n,a,s)}finally{K.p=f,D.T=c}}function jf(e,n,a,s){if(Zl){var c=Xf(s);if(c===null)Df(e,n,s,Kl,a),ov(e,s);else if(hy(c,e,n,a,s))s.stopPropagation();else if(ov(e,s),n&4&&-1<dy.indexOf(e)){for(;c!==null;){var f=re(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Te(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-Fe(v);T.entanglements[1]|=B,v&=~B}bi(f),(Dt&6)===0&&(Ll=b()+500,po(0))}}break;case 31:case 13:T=Qa(f,2),T!==null&&In(T,f,2),Ol(),kf(f,2)}if(f=Xf(s),f===null&&Df(e,n,s,Kl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Df(e,n,s,null,a)}}function Xf(e){return e=qc(e),qf(e)}var Kl=null;function qf(e){if(Kl=null,e=W(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Kl=e,null}function sv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case pe:return 2;case be:return 8;case de:case Je:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Wf=!1,Ra=null,wa=null,Ca=null,So=new Map,Mo=new Map,Da=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ov(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=re(n),n!==null&&av(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function hy(e,n,a,s,c){switch(n){case"focusin":return Ra=Eo(Ra,e,n,a,s,c),!0;case"dragenter":return wa=Eo(wa,e,n,a,s,c),!0;case"mouseover":return Ca=Eo(Ca,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,Eo(So.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,Eo(Mo.get(f)||null,e,n,a,s,c)),!0}return!1}function lv(e){var n=W(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Os(e.priority,function(){rv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Os(e.priority,function(){rv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Xf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Xc=s,a.target.dispatchEvent(s),Xc=null}else return n=re(a),n!==null&&av(n),e.blockedOn=a,!1;n.shift()}return!0}function cv(e,n,a){Ql(e)&&a.delete(n)}function py(){Wf=!1,Ra!==null&&Ql(Ra)&&(Ra=null),wa!==null&&Ql(wa)&&(wa=null),Ca!==null&&Ql(Ca)&&(Ca=null),So.forEach(cv),Mo.forEach(cv)}function Jl(e,n){e.blockedOn===n&&(e.blockedOn=null,Wf||(Wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,py)))}var $l=null;function uv(e){$l!==e&&($l=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$l===e&&($l=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(qf(s||a)===null)continue;break}var f=re(a);f!==null&&(e.splice(n,3),n-=3,ju(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function rs(e){function n(B){return Jl(B,e)}Ra!==null&&Jl(Ra,e),wa!==null&&Jl(wa,e),Ca!==null&&Jl(Ca,e),So.forEach(n),Mo.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)lv(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],v=c[xn]||null;if(typeof f=="function")v||uv(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[xn]||null)T=v.formAction;else if(qf(c)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),uv(a)}}}function fv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Yf(e){this._internalRoot=e}ec.prototype.render=Yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();nv(a,s,e,n,null,null)},ec.prototype.unmount=Yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nv(e.current,2,null,e,null,null),Ol(),n[la]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xa();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&lv(e)}};var dv=t.version;if(dv!=="19.2.7")throw Error(r(527,dv,"19.2.7"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var my={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Re=tc.inject(my),De=tc}catch{}}return To.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=xm,f=ym,v=Sm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=ev(e,1,!1,null,null,a,s,null,c,f,v,fv),e[la]=n.current,Cf(e),new Yf(n)},To.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=xm,v=ym,T=Sm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=ev(e,1,!0,n,a??null,s,c,B,f,v,T,fv),n.context=tv(null),a=n.current,s=Zn(),s=Tr(s),c=ma(s),c.callback=null,ga(a,c,s),a=s,n.current.lanes=a,Cn(n,a),bi(n),e[la]=n.current,Cf(e),new ec(n)},To.version="19.2.7",To}var Mv;function Ay(){if(Mv)return Qf.exports;Mv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Qf.exports=Ty(),Qf.exports}var Ry=Ay();const wy=D_(Ry);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yh="179",Cy=0,Ev=1,Dy=2,U_=1,L_=2,ta=3,ka=0,Hn=1,na=2,Ha=0,Ms=1,bv=2,Tv=3,Av=4,Uy=5,_r=100,Ly=101,Ny=102,Oy=103,Py=104,zy=200,By=201,Fy=202,Iy=203,Nd=204,Od=205,Hy=206,Gy=207,Vy=208,ky=209,jy=210,Xy=211,qy=212,Wy=213,Yy=214,Pd=0,zd=1,Bd=2,Ts=3,Fd=4,Id=5,Hd=6,Gd=7,N_=0,Zy=1,Ky=2,Ga=0,Qy=1,Jy=2,$y=3,eS=4,tS=5,nS=6,iS=7,O_=300,As=301,Rs=302,Vd=303,kd=304,Fc=306,jd=1e3,yr=1001,Xd=1002,_i=1003,aS=1004,nc=1005,Ri=1006,td=1007,Sr=1008,Di=1009,P_=1010,z_=1011,zo=1012,Sh=1013,Mr=1014,ia=1015,Go=1016,Mh=1017,Eh=1018,Bo=1020,B_=35902,F_=1021,I_=1022,vi=1023,Fo=1026,Io=1027,H_=1028,bh=1029,G_=1030,Th=1031,Ah=1033,Rc=33776,wc=33777,Cc=33778,Dc=33779,qd=35840,Wd=35841,Yd=35842,Zd=35843,Kd=36196,Qd=37492,Jd=37496,$d=37808,eh=37809,th=37810,nh=37811,ih=37812,ah=37813,rh=37814,sh=37815,oh=37816,lh=37817,ch=37818,uh=37819,fh=37820,dh=37821,Uc=36492,hh=36494,ph=36495,V_=36283,mh=36284,gh=36285,vh=36286,rS=3200,sS=3201,oS=0,lS=1,Ia="",ci="srgb",ws="srgb-linear",Nc="linear",Gt="srgb",ss=7680,Rv=519,cS=512,uS=513,fS=514,k_=515,dS=516,hS=517,pS=518,mS=519,wv=35044,Cv="300 es",wi=2e3,Oc=2001;class Ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dv=1234567;const Oo=Math.PI/180,Ho=180/Math.PI;function Us(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Mt(o,t,i){return Math.max(t,Math.min(i,o))}function Rh(o,t){return(o%t+t)%t}function gS(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function vS(o,t,i){return o!==t?(i-o)/(t-o):0}function Po(o,t,i){return(1-i)*o+i*t}function _S(o,t,i,r){return Po(o,t,1-Math.exp(-i*r))}function xS(o,t=1){return t-Math.abs(Rh(o,t*2)-t)}function yS(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function SS(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function MS(o,t){return o+Math.floor(Math.random()*(t-o+1))}function ES(o,t){return o+Math.random()*(t-o)}function bS(o){return o*(.5-Math.random())}function TS(o){o!==void 0&&(Dv=o);let t=Dv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function AS(o){return o*Oo}function RS(o){return o*Ho}function wS(o){return(o&o-1)===0&&o!==0}function CS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function DS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function US(o,t,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),m=d(i/2),p=u((t+r)/2),x=d((t+r)/2),_=u((t-r)/2),y=d((t-r)/2),M=u((r-t)/2),A=d((r-t)/2);switch(l){case"XYX":o.set(h*x,m*_,m*y,h*p);break;case"YZY":o.set(m*y,h*x,m*_,h*p);break;case"ZXZ":o.set(m*_,m*y,h*x,h*p);break;case"XZX":o.set(h*x,m*A,m*M,h*p);break;case"YXY":o.set(m*M,h*x,m*A,h*p);break;case"ZYZ":o.set(m*A,m*M,h*x,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ys(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ln(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const ic={DEG2RAD:Oo,RAD2DEG:Ho,generateUUID:Us,clamp:Mt,euclideanModulo:Rh,mapLinear:gS,inverseLerp:vS,lerp:Po,damp:_S,pingpong:xS,smoothstep:yS,smootherstep:SS,randInt:MS,randFloat:ES,randFloatSpread:bS,seededRandom:TS,degToRad:AS,radToDeg:RS,isPowerOfTwo:wS,ceilPowerOfTwo:CS,floorPowerOfTwo:DS,setQuaternionFromProperEuler:US,normalize:Ln,denormalize:ys};class Ut{constructor(t=0,i=0){Ut.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],_=r[l+3];const y=u[d+0],M=u[d+1],A=u[d+2],w=u[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_;return}if(h===1){t[i+0]=y,t[i+1]=M,t[i+2]=A,t[i+3]=w;return}if(_!==w||m!==y||p!==M||x!==A){let E=1-h;const g=m*y+p*M+x*A+_*w,G=g>=0?1:-1,z=1-g*g;if(z>Number.EPSILON){const j=Math.sqrt(z),O=Math.atan2(j,g*G);E=Math.sin(E*O)/j,h=Math.sin(h*O)/j}const L=h*G;if(m=m*E+y*L,p=p*E+M*L,x=x*E+A*L,_=_*E+w*L,E===1-h){const j=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=j,p*=j,x*=j,_*=j}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],_=u[d],y=u[d+1],M=u[d+2],A=u[d+3];return t[i]=h*A+x*_+m*M-p*y,t[i+1]=m*A+x*y+p*_-h*M,t[i+2]=p*A+x*M+h*y-m*_,t[i+3]=x*A-h*_-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),_=h(u/2),y=m(r/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=y*x*_+p*M*A,this._y=p*M*_-y*x*A,this._z=p*x*A+y*M*_,this._w=p*x*_-y*M*A;break;case"YXZ":this._x=y*x*_+p*M*A,this._y=p*M*_-y*x*A,this._z=p*x*A-y*M*_,this._w=p*x*_+y*M*A;break;case"ZXY":this._x=y*x*_-p*M*A,this._y=p*M*_+y*x*A,this._z=p*x*A+y*M*_,this._w=p*x*_-y*M*A;break;case"ZYX":this._x=y*x*_-p*M*A,this._y=p*M*_+y*x*A,this._z=p*x*A-y*M*_,this._w=p*x*_+y*M*A;break;case"YZX":this._x=y*x*_+p*M*A,this._y=p*M*_+y*x*A,this._z=p*x*A-y*M*_,this._w=p*x*_-y*M*A;break;case"XZY":this._x=y*x*_-p*M*A,this._y=p*M*_-y*x*A,this._z=p*x*A+y*M*_,this._w=p*x*_+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],_=i[10],y=r+h+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-r*p,this._z=u*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,h),_=Math.sin((1-i)*x)/p,y=Math.sin(i*x)/p;return this._w=d*_+this._w*y,this._x=r*_+this._x*y,this._y=l*_+this._y*y,this._z=u*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,r=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Uv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Uv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),x=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+m*p+d*_-h*x,this.y=r+m*x+h*p-u*_,this.z=l+m*_+u*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return nd.copy(this).projectOnVector(t),this.sub(nd)}reflect(t){return this.sub(nd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nd=new $,Uv=new Vo;class ht{constructor(t,i,r,l,u,d,h,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],_=r[7],y=r[2],M=r[5],A=r[8],w=l[0],E=l[3],g=l[6],G=l[1],z=l[4],L=l[7],j=l[2],O=l[5],I=l[8];return u[0]=d*w+h*G+m*j,u[3]=d*E+h*z+m*O,u[6]=d*g+h*L+m*I,u[1]=p*w+x*G+_*j,u[4]=p*E+x*z+_*O,u[7]=p*g+x*L+_*I,u[2]=y*w+M*G+A*j,u[5]=y*E+M*z+A*O,u[8]=y*g+M*L+A*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-r*u*x+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],_=x*d-h*p,y=h*m-x*u,M=p*u-d*m,A=i*_+r*y+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=_*w,t[1]=(l*p-x*r)*w,t[2]=(h*r-l*d)*w,t[3]=y*w,t[4]=(x*i-l*m)*w,t[5]=(l*u-h*i)*w,t[6]=M*w,t[7]=(r*m-p*i)*w,t[8]=(d*i-r*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(id.makeScale(t,i)),this}rotate(t){return this.premultiply(id.makeRotation(-t)),this}translate(t,i){return this.premultiply(id.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const id=new ht;function j_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Pc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function LS(){const o=Pc("canvas");return o.style.display="block",o}const Lv={};function Es(o){o in Lv||(Lv[o]=!0,console.warn(o))}function NS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const Nv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ov=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){const o={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Gt&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Gt&&(l.r=bs(l.r),l.g=bs(l.g),l.b=bs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?Nc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ws]:{primaries:t,whitePoint:r,transfer:Nc,toXYZ:Nv,fromXYZ:Ov,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:Gt,toXYZ:Nv,fromXYZ:Ov,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const wt=OS();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let os;class PS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=Pc("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ra(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zS=0;class wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(ad(l[d].image)):u.push(ad(l[d]))}else u=ad(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function ad(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?PS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BS=0;const rd=new $;class Gn extends Ds{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=yr,l=yr,u=Ri,d=Sr,h=vi,m=Di,p=Gn.DEFAULT_ANISOTROPY,x=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Us(),this.name="",this.source=new wh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==O_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case yr:t.x=t.x<0?0:1;break;case Xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case yr:t.y=t.y<0?0:1;break;case Xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=O_;Gn.DEFAULT_ANISOTROPY=1;class Vt{constructor(t=0,i=0,r=0,l=1){Vt.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],x=m[4],_=m[8],y=m[1],M=m[5],A=m[9],w=m[2],E=m[6],g=m[10];if(Math.abs(x-y)<.01&&Math.abs(_-w)<.01&&Math.abs(A-E)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+w)<.1&&Math.abs(A+E)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,L=(M+1)/2,j=(g+1)/2,O=(x+y)/4,I=(_+w)/4,Q=(A+E)/4;return z>L&&z>j?z<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(z),l=O/r,u=I/r):L>j?L<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),r=O/l,u=Q/l):j<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(j),r=I/u,l=Q/u),this.set(r,l,u,i),this}let G=Math.sqrt((E-A)*(E-A)+(_-w)*(_-w)+(y-x)*(y-x));return Math.abs(G)<.001&&(G=1),this.x=(E-A)/G,this.y=(_-w)/G,this.z=(y-x)/G,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this.w=Mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this.w=Mt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FS extends Ds{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Vt(0,0,t,i),this.scissorTest=!1,this.viewport=new Vt(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Gn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new wh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends FS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class X_ extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IS extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,hi):hi.fromBufferAttribute(u,d),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ac.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ac.copy(r.boundingBox)),ac.applyMatrix4(t.matrixWorld),this.union(ac)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),rc.subVectors(this.max,Ao),ls.subVectors(t.a,Ao),cs.subVectors(t.b,Ao),us.subVectors(t.c,Ao),La.subVectors(cs,ls),Na.subVectors(us,cs),ur.subVectors(ls,us);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-ur.z,ur.y,La.z,0,-La.x,Na.z,0,-Na.x,ur.z,0,-ur.x,-La.y,La.x,0,-Na.y,Na.x,0,-ur.y,ur.x,0];return!sd(i,ls,cs,us,rc)||(i=[1,0,0,0,1,0,0,0,1],!sd(i,ls,cs,us,rc))?!1:(sc.crossVectors(La,Na),i=[sc.x,sc.y,sc.z],sd(i,ls,cs,us,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new $,new $,new $,new $,new $,new $,new $,new $],hi=new $,ac=new ko,ls=new $,cs=new $,us=new $,La=new $,Na=new $,ur=new $,Ao=new $,rc=new $,sc=new $,fr=new $;function sd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){fr.fromArray(o,u);const h=l.x*Math.abs(fr.x)+l.y*Math.abs(fr.y)+l.z*Math.abs(fr.z),m=t.dot(fr),p=i.dot(fr),x=r.dot(fr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const HS=new ko,Ro=new $,od=new $;class Ic{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):HS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(od.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(od)),this.expandByPoint(Ro.copy(t.center).sub(od))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ki=new $,ld=new $,oc=new $,Oa=new $,cd=new $,lc=new $,ud=new $;class q_{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ld.copy(t).add(i).multiplyScalar(.5),oc.copy(i).sub(t).normalize(),Oa.copy(this.origin).sub(ld);const u=t.distanceTo(i)*.5,d=-this.direction.dot(oc),h=Oa.dot(this.direction),m=-Oa.dot(oc),p=Oa.lengthSq(),x=Math.abs(1-d*d);let _,y,M,A;if(x>0)if(_=d*m-h,y=d*h-m,A=u*x,_>=0)if(y>=-A)if(y<=A){const w=1/x;_*=w,y*=w,M=_*(_+d*y+2*h)+y*(d*_+y+2*m)+p}else y=u,_=Math.max(0,-(d*y+h)),M=-_*_+y*(y+2*m)+p;else y=-u,_=Math.max(0,-(d*y+h)),M=-_*_+y*(y+2*m)+p;else y<=-A?(_=Math.max(0,-(-d*u+h)),y=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+y*(y+2*m)+p):y<=A?(_=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(_=Math.max(0,-(d*u+h)),y=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+y*(y+2*m)+p);else y=d>0?-u:u,_=Math.max(0,-(d*y+h)),M=-_*_+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ld).addScaledVector(oc,y),M}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),x>=0?(u=(t.min.y-y.y)*x,d=(t.max.y-y.y)*x):(u=(t.max.y-y.y)*x,d=(t.min.y-y.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(h=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,r,l,u){cd.subVectors(i,t),lc.subVectors(r,t),ud.crossVectors(cd,lc);let d=this.direction.dot(ud),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Oa.subVectors(this.origin,t);const m=h*this.direction.dot(lc.crossVectors(Oa,lc));if(m<0)return null;const p=h*this.direction.dot(cd.cross(Oa));if(p<0||m+p>d)return null;const x=-h*Oa.dot(ud);return x<0?null:this.at(x/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,i,r,l,u,d,h,m,p,x,_,y,M,A,w,E){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,x,_,y,M,A,w,E)}set(t,i,r,l,u,d,h,m,p,x,_,y,M,A,w,E){const g=this.elements;return g[0]=t,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=d,g[9]=h,g[13]=m,g[2]=p,g[6]=x,g[10]=_,g[14]=y,g[3]=M,g[7]=A,g[11]=w,g[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),d=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const y=d*x,M=d*_,A=h*x,w=h*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=M+A*p,i[5]=y-w*p,i[9]=-h*m,i[2]=w-y*p,i[6]=A+M*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*x,M=m*_,A=p*x,w=p*_;i[0]=y+w*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=M*h-A,i[6]=w+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*x,M=m*_,A=p*x,w=p*_;i[0]=y-w*h,i[4]=-d*_,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*x,i[9]=w-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*x,M=d*_,A=h*x,w=h*_;i[0]=m*x,i[4]=A*p-M,i[8]=y*p+w,i[1]=m*_,i[5]=w*p+y,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,M=d*p,A=h*m,w=h*p;i[0]=m*x,i[4]=w-y*_,i[8]=A*_+M,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=M*_+A,i[10]=y-w*_}else if(t.order==="XZY"){const y=d*m,M=d*p,A=h*m,w=h*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=y*_+w,i[5]=d*x,i[9]=M*_-A,i[2]=A*_-M,i[6]=h*x,i[10]=w*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GS,t,VS)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Pa.crossVectors(r,Kn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Pa.crossVectors(r,Kn)),Pa.normalize(),cc.crossVectors(Kn,Pa),l[0]=Pa.x,l[4]=cc.x,l[8]=Kn.x,l[1]=Pa.y,l[5]=cc.y,l[9]=Kn.y,l[2]=Pa.z,l[6]=cc.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],_=r[5],y=r[9],M=r[13],A=r[2],w=r[6],E=r[10],g=r[14],G=r[3],z=r[7],L=r[11],j=r[15],O=l[0],I=l[4],Q=l[8],U=l[12],C=l[1],H=l[5],le=l[9],se=l[13],fe=l[2],_e=l[6],D=l[10],K=l[14],q=l[3],ue=l[7],me=l[11],N=l[15];return u[0]=d*O+h*C+m*fe+p*q,u[4]=d*I+h*H+m*_e+p*ue,u[8]=d*Q+h*le+m*D+p*me,u[12]=d*U+h*se+m*K+p*N,u[1]=x*O+_*C+y*fe+M*q,u[5]=x*I+_*H+y*_e+M*ue,u[9]=x*Q+_*le+y*D+M*me,u[13]=x*U+_*se+y*K+M*N,u[2]=A*O+w*C+E*fe+g*q,u[6]=A*I+w*H+E*_e+g*ue,u[10]=A*Q+w*le+E*D+g*me,u[14]=A*U+w*se+E*K+g*N,u[3]=G*O+z*C+L*fe+j*q,u[7]=G*I+z*H+L*_e+j*ue,u[11]=G*Q+z*le+L*D+j*me,u[15]=G*U+z*se+L*K+j*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],_=t[6],y=t[10],M=t[14],A=t[3],w=t[7],E=t[11],g=t[15];return A*(+u*m*_-l*p*_-u*h*y+r*p*y+l*h*M-r*m*M)+w*(+i*m*M-i*p*y+u*d*y-l*d*M+l*p*x-u*m*x)+E*(+i*p*_-i*h*M-u*d*_+r*d*M+u*h*x-r*p*x)+g*(-l*h*x-i*m*_+i*h*y+l*d*_-r*d*y+r*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],_=t[9],y=t[10],M=t[11],A=t[12],w=t[13],E=t[14],g=t[15],G=_*E*p-w*y*p+w*m*M-h*E*M-_*m*g+h*y*g,z=A*y*p-x*E*p-A*m*M+d*E*M+x*m*g-d*y*g,L=x*w*p-A*_*p+A*h*M-d*w*M-x*h*g+d*_*g,j=A*_*m-x*w*m-A*h*y+d*w*y+x*h*E-d*_*E,O=i*G+r*z+l*L+u*j;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return t[0]=G*I,t[1]=(w*y*u-_*E*u-w*l*M+r*E*M+_*l*g-r*y*g)*I,t[2]=(h*E*u-w*m*u+w*l*p-r*E*p-h*l*g+r*m*g)*I,t[3]=(_*m*u-h*y*u-_*l*p+r*y*p+h*l*M-r*m*M)*I,t[4]=z*I,t[5]=(x*E*u-A*y*u+A*l*M-i*E*M-x*l*g+i*y*g)*I,t[6]=(A*m*u-d*E*u-A*l*p+i*E*p+d*l*g-i*m*g)*I,t[7]=(d*y*u-x*m*u+x*l*p-i*y*p-d*l*M+i*m*M)*I,t[8]=L*I,t[9]=(A*_*u-x*w*u-A*r*M+i*w*M+x*r*g-i*_*g)*I,t[10]=(d*w*u-A*h*u+A*r*p-i*w*p-d*r*g+i*h*g)*I,t[11]=(x*h*u-d*_*u-x*r*p+i*_*p+d*r*M-i*h*M)*I,t[12]=j*I,t[13]=(x*w*l-A*_*l+A*r*y-i*w*y-x*r*E+i*_*E)*I,t[14]=(A*h*l-d*w*l-A*r*m+i*w*m+d*r*E-i*h*E)*I,t[15]=(d*_*l-x*h*l+x*r*m-i*_*m-d*r*y+i*h*y)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,x=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,_=h+h,y=u*p,M=u*x,A=u*_,w=d*x,E=d*_,g=h*_,G=m*p,z=m*x,L=m*_,j=r.x,O=r.y,I=r.z;return l[0]=(1-(w+g))*j,l[1]=(M+L)*j,l[2]=(A-z)*j,l[3]=0,l[4]=(M-L)*O,l[5]=(1-(y+g))*O,l[6]=(E+G)*O,l[7]=0,l[8]=(A+z)*I,l[9]=(E-G)*I,l[10]=(1-(y+w))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const d=fs.set(l[4],l[5],l[6]).length(),h=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/u,x=1/d,_=1/h;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=x,pi.elements[5]*=x,pi.elements[6]*=x,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,i.setFromRotationMatrix(pi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=wi,m=!1){const p=this.elements,x=2*u/(i-t),_=2*u/(r-l),y=(i+t)/(i-t),M=(r+l)/(r-l);let A,w;if(m)A=u/(d-u),w=d*u/(d-u);else if(h===wi)A=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(h===Oc)A=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=wi,m=!1){const p=this.elements,x=2/(i-t),_=2/(r-l),y=-(i+t)/(i-t),M=-(r+l)/(r-l);let A,w;if(m)A=1/(d-u),w=d/(d-u);else if(h===wi)A=-2/(d-u),w=-(d+u)/(d-u);else if(h===Oc)A=-1/(d-u),w=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new $,pi=new Qt,GS=new $(0,0,0),VS=new $(1,1,1),Pa=new $,cc=new $,Kn=new $,Pv=new Qt,zv=new Vo;class sa{constructor(t=0,i=0,r=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],_=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Pv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return zv.setFromEuler(this),this.setFromQuaternion(zv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class W_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kS=0;const Bv=new $,ds=new Vo,Qi=new Qt,uc=new $,wo=new $,jS=new $,XS=new Vo,Fv=new $(1,0,0),Iv=new $(0,1,0),Hv=new $(0,0,1),Gv={type:"added"},qS={type:"removed"},hs={type:"childadded",child:null},fd={type:"childremoved",child:null};class _n extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new $,i=new sa,r=new Vo,l=new $(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ht}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new W_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Fv,t)}rotateY(t){return this.rotateOnAxis(Iv,t)}rotateZ(t){return this.rotateOnAxis(Hv,t)}translateOnAxis(t,i){return Bv.copy(t).applyQuaternion(this.quaternion),this.position.add(Bv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Fv,t)}translateY(t){return this.translateOnAxis(Iv,t)}translateZ(t){return this.translateOnAxis(Hv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?uc.copy(t):uc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(wo,uc,this.up):Qi.lookAt(uc,wo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(Qi),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gv),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(qS),fd.child=t,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gv),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,jS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,XS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),_=d(t.shapes),y=d(t.skeletons),M=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}_n.DEFAULT_UP=new $(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new $,Ji=new $,dd=new $,$i=new $,ps=new $,ms=new $,Vv=new $,hd=new $,pd=new $,md=new $,gd=new Vt,vd=new Vt,_d=new Vt;class gi{constructor(t=new $,i=new $,r=new $){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){mi.subVectors(l,i),Ji.subVectors(r,i),dd.subVectors(t,i);const d=mi.dot(mi),h=mi.dot(Ji),m=mi.dot(dd),p=Ji.dot(Ji),x=Ji.dot(dd),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const y=1/_,M=(p*m-h*x)*y,A=(d*x-h*m)*y;return u.set(1-M-A,A,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(d,$i.y),m.addScaledVector(h,$i.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return gd.setScalar(0),vd.setScalar(0),_d.setScalar(0),gd.fromBufferAttribute(t,i),vd.fromBufferAttribute(t,r),_d.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(gd,u.x),d.addScaledVector(vd,u.y),d.addScaledVector(_d,u.z),d}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),Ji.subVectors(t,i),mi.cross(Ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),mi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ps.subVectors(l,r),ms.subVectors(u,r),hd.subVectors(t,r);const m=ps.dot(hd),p=ms.dot(hd);if(m<=0&&p<=0)return i.copy(r);pd.subVectors(t,l);const x=ps.dot(pd),_=ms.dot(pd);if(x>=0&&_<=x)return i.copy(l);const y=m*_-x*p;if(y<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(ps,d);md.subVectors(t,u);const M=ps.dot(md),A=ms.dot(md);if(A>=0&&M<=A)return i.copy(u);const w=M*p-m*A;if(w<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(ms,h);const E=x*A-M*_;if(E<=0&&_-x>=0&&M-A>=0)return Vv.subVectors(u,l),h=(_-x)/(_-x+(M-A)),i.copy(l).addScaledVector(Vv,h);const g=1/(E+w+y);return d=w*g,h=y*g,i.copy(r).addScaledVector(ps,d).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},fc={h:0,s:0,l:0};function xd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ct{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=wt.workingColorSpace){return this.r=t,this.g=i,this.b=r,wt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=wt.workingColorSpace){if(t=Rh(t,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=xd(d,u,t+1/3),this.g=xd(d,u,t),this.b=xd(d,u,t-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const r=Y_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return wt.workingToColorSpace(wn.copy(this),t),Math.round(Mt(wn.r*255,0,255))*65536+Math.round(Mt(wn.g*255,0,255))*256+Math.round(Mt(wn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=wt.workingColorSpace){wt.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=x<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=wt.workingColorSpace){return wt.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=ci){wt.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(za),this.setHSL(za.h+t,za.s+i,za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(za),t.getHSL(fc);const r=Po(za.h,fc.h,i),l=Po(za.s,fc.s,i),u=Po(za.l,fc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ct;Ct.NAMES=Y_;let WS=0;class jo extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Ms,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nd,this.blendDst=Od,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nd&&(r.blendSrc=this.blendSrc),this.blendDst!==Od&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Z_ extends jo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new $,dc=new Ut;let YS=0;class Ci{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=wv,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=ys(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ln(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ys(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ys(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ys(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ys(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array),u=Ln(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wv&&(t.usage=this.usage),t}}class K_ extends Ci{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Q_ extends Ci{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Va extends Ci{constructor(t,i,r){super(new Float32Array(t),i,r)}}let ZS=0;const li=new Qt,yd=new _n,gs=new $,Qn=new ko,Co=new ko,vn=new $;class oa extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(j_(t)?Q_:K_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ht().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,r){return li.makeTranslation(t,i,r),this.applyMatrix4(li),this}scale(t,i,r){return li.makeScale(t,i,r),this.applyMatrix4(li),this}lookAt(t){return yd.lookAt(t),yd.updateMatrix(),this.applyMatrix4(yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Va(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ic);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Co.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(Qn.min,Co.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,Co.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(Co.min),Qn.expandByPoint(Co.max))}Qn.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)vn.fromBufferAttribute(h,p),m&&(gs.fromBufferAttribute(t,p),vn.add(gs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Q=0;Q<r.count;Q++)h[Q]=new $,m[Q]=new $;const p=new $,x=new $,_=new $,y=new Ut,M=new Ut,A=new Ut,w=new $,E=new $;function g(Q,U,C){p.fromBufferAttribute(r,Q),x.fromBufferAttribute(r,U),_.fromBufferAttribute(r,C),y.fromBufferAttribute(u,Q),M.fromBufferAttribute(u,U),A.fromBufferAttribute(u,C),x.sub(p),_.sub(p),M.sub(y),A.sub(y);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(w.copy(x).multiplyScalar(A.y).addScaledVector(_,-M.y).multiplyScalar(H),E.copy(_).multiplyScalar(M.x).addScaledVector(x,-A.x).multiplyScalar(H),h[Q].add(w),h[U].add(w),h[C].add(w),m[Q].add(E),m[U].add(E),m[C].add(E))}let G=this.groups;G.length===0&&(G=[{start:0,count:t.count}]);for(let Q=0,U=G.length;Q<U;++Q){const C=G[Q],H=C.start,le=C.count;for(let se=H,fe=H+le;se<fe;se+=3)g(t.getX(se+0),t.getX(se+1),t.getX(se+2))}const z=new $,L=new $,j=new $,O=new $;function I(Q){j.fromBufferAttribute(l,Q),O.copy(j);const U=h[Q];z.copy(U),z.sub(j.multiplyScalar(j.dot(U))).normalize(),L.crossVectors(O,U);const H=L.dot(m[Q])<0?-1:1;d.setXYZW(Q,z.x,z.y,z.z,H)}for(let Q=0,U=G.length;Q<U;++Q){const C=G[Q],H=C.start,le=C.count;for(let se=H,fe=H+le;se<fe;se+=3)I(t.getX(se+0)),I(t.getX(se+1)),I(t.getX(se+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new $,u=new $,d=new $,h=new $,m=new $,p=new $,x=new $,_=new $;if(t)for(let y=0,M=t.count;y<M;y+=3){const A=t.getX(y+0),w=t.getX(y+1),E=t.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,E),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,E),h.add(x),m.add(x),p.add(x),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(E,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,_=h.normalized,y=new p.constructor(m.length*x);let M=0,A=0;for(let w=0,E=m.length;w<E;w++){h.isInterleavedBufferAttribute?M=m[w]*h.data.stride+h.offset:M=m[w]*x;for(let g=0;g<x;g++)y[A++]=p[M++]}return new Ci(y,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oa,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,_=p.length;x<_;x++){const y=p[x],M=t(y,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,y=p.length;_<y;_++){const M=p[_];x.push(M.toJSON(t.data))}x.length>0&&(l[m]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=t.morphAttributes;for(const p in u){const x=[],_=u[p];for(let y=0,M=_.length;y<M;y++)x.push(_[y].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kv=new Qt,dr=new q_,hc=new Ic,jv=new $,pc=new $,mc=new $,gc=new $,Sd=new $,vc=new $,Xv=new $,_c=new $;class aa extends _n{constructor(t=new oa,i=new Z_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){vc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],_=u[m];x!==0&&(Sd.fromBufferAttribute(_,t),d?vc.addScaledVector(Sd,x):vc.addScaledVector(Sd.sub(i),x))}i.add(vc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(u),dr.copy(t.ray).recast(t.near),!(hc.containsPoint(dr.origin)===!1&&(dr.intersectSphere(hc,jv)===null||dr.origin.distanceToSquared(jv)>(t.far-t.near)**2))&&(kv.copy(u).invert(),dr.copy(t.ray).applyMatrix4(kv),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,dr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,_=u.attributes.normal,y=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,w=y.length;A<w;A++){const E=y[A],g=d[E.materialIndex],G=Math.max(E.start,M.start),z=Math.min(h.count,Math.min(E.start+E.count,M.start+M.count));for(let L=G,j=z;L<j;L+=3){const O=h.getX(L),I=h.getX(L+1),Q=h.getX(L+2);l=xc(this,g,t,r,p,x,_,O,I,Q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let E=A,g=w;E<g;E+=3){const G=h.getX(E),z=h.getX(E+1),L=h.getX(E+2);l=xc(this,d,t,r,p,x,_,G,z,L),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,w=y.length;A<w;A++){const E=y[A],g=d[E.materialIndex],G=Math.max(E.start,M.start),z=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let L=G,j=z;L<j;L+=3){const O=L,I=L+1,Q=L+2;l=xc(this,g,t,r,p,x,_,O,I,Q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let E=A,g=w;E<g;E+=3){const G=E,z=E+1,L=E+2;l=xc(this,d,t,r,p,x,_,G,z,L),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function KS(o,t,i,r,l,u,d,h){let m;if(t.side===Hn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ka,h),m===null)return null;_c.copy(h),_c.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(_c);return p<i.near||p>i.far?null:{distance:p,point:_c.clone(),object:o}}function xc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,pc),o.getVertexPosition(m,mc),o.getVertexPosition(p,gc);const x=KS(o,t,i,r,pc,mc,gc,Xv);if(x){const _=new $;gi.getBarycoord(Xv,pc,mc,gc,_),l&&(x.uv=gi.getInterpolatedAttribute(l,h,m,p,_,new Ut)),u&&(x.uv1=gi.getInterpolatedAttribute(u,h,m,p,_,new Ut)),d&&(x.normal=gi.getInterpolatedAttribute(d,h,m,p,_,new $),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new $,materialIndex:0};gi.getNormal(pc,mc,gc,y.normal),x.face=y,x.barycoord=_}return x}class Xo extends oa{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],_=[];let y=0,M=0;A("z","y","x",-1,-1,r,i,t,d,u,0),A("z","y","x",1,-1,r,i,-t,d,u,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,u,4),A("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Va(p,3)),this.setAttribute("normal",new Va(x,3)),this.setAttribute("uv",new Va(_,2));function A(w,E,g,G,z,L,j,O,I,Q,U){const C=L/I,H=j/Q,le=L/2,se=j/2,fe=O/2,_e=I+1,D=Q+1;let K=0,q=0;const ue=new $;for(let me=0;me<D;me++){const N=me*H-se;for(let ee=0;ee<_e;ee++){const Ee=ee*C-le;ue[w]=Ee*G,ue[E]=N*z,ue[g]=fe,p.push(ue.x,ue.y,ue.z),ue[w]=0,ue[E]=0,ue[g]=O>0?1:-1,x.push(ue.x,ue.y,ue.z),_.push(ee/I),_.push(1-me/Q),K+=1}}for(let me=0;me<Q;me++)for(let N=0;N<I;N++){const ee=y+N+_e*me,Ee=y+N+_e*(me+1),Ae=y+(N+1)+_e*(me+1),J=y+(N+1)+_e*me;m.push(ee,Ee,J),m.push(Ee,Ae,J),q+=6}h.addGroup(M,q,U),M+=q,y+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)t[l]=r[l]}return t}function QS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function J_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:wt.workingColorSpace}const JS={clone:Cs,merge:Nn};var $S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends jo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$S,this.fragmentShader=eM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=QS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class $_ extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new $,qv=new Ut,Wv=new Ut;class Jn extends $_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ho*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,qv,Wv),i.subVectors(Wv,qv)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Oo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,_s=1;class tM extends _n{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(vs,_s,t,i);l.layers=this.layers,this.add(l);const u=new Jn(vs,_s,t,i);u.layers=this.layers,this.add(u);const d=new Jn(vs,_s,t,i);d.layers=this.layers,this.add(d);const h=new Jn(vs,_s,t,i);h.layers=this.layers,this.add(h);const m=new Jn(vs,_s,t,i);m.layers=this.layers,this.add(m);const p=new Jn(vs,_s,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Oc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(_,y,M),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class e0 extends Gn{constructor(t=[],i=As,r,l,u,d,h,m,p,x){super(t,i,r,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nM extends Er{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new e0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Xo(5,5,5),u=new ja({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ha});u.uniforms.tEquirect.value=i;const d=new aa(l,u),h=i.minFilter;return i.minFilter===Sr&&(i.minFilter=Ri),new tM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class yc extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iM={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const w of t.hand.values()){const E=i.getJointPose(w,r),g=this._getHandJoint(p,w);E!==null&&(g.matrix.fromArray(E.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=E.radius),g.visible=E!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=x.position.distanceTo(_.position),M=.02,A=.005;p.inputState.pinching&&y>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new yc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Ch{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=i,this.far=r}clone(){return new Ch(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class aM extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ed=new $,rM=new $,sM=new ht;class gr{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ed.subVectors(r,i).cross(rM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ed),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||sM.getNormalMatrix(t),l=this.coplanarPoint(Ed).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Ic,oM=new Ut(.5,.5),Sc=new $;class Dh{constructor(t=new gr,i=new gr,r=new gr,l=new gr,u=new gr,d=new gr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=wi,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],x=u[4],_=u[5],y=u[6],M=u[7],A=u[8],w=u[9],E=u[10],g=u[11],G=u[12],z=u[13],L=u[14],j=u[15];if(l[0].setComponents(p-d,M-x,g-A,j-G).normalize(),l[1].setComponents(p+d,M+x,g+A,j+G).normalize(),l[2].setComponents(p+h,M+_,g+w,j+z).normalize(),l[3].setComponents(p-h,M-_,g-w,j-z).normalize(),r)l[4].setComponents(m,y,E,L).normalize(),l[5].setComponents(p-m,M-y,g-E,j-L).normalize();else if(l[4].setComponents(p-m,M-y,g-E,j-L).normalize(),i===wi)l[5].setComponents(p+m,M+y,g+E,j+L).normalize();else if(i===Oc)l[5].setComponents(m,y,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){hr.center.set(0,0,0);const i=oM.distanceTo(t.center);return hr.radius=.7071067811865476+i,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Sc.x=l.normal.x>0?t.max.x:t.min.x,Sc.y=l.normal.y>0?t.max.y:t.min.y,Sc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class t0 extends jo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zc=new $,Bc=new $,Yv=new Qt,Do=new q_,Mc=new Ic,bd=new $,Zv=new $;class lM extends _n{constructor(t=new oa,i=new t0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)zc.fromBufferAttribute(i,l-1),Bc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=zc.distanceTo(Bc);t.setAttribute("lineDistance",new Va(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Mc.copy(r.boundingSphere),Mc.applyMatrix4(l),Mc.radius+=u,t.ray.intersectsSphere(Mc)===!1)return;Yv.copy(l).invert(),Do.copy(t.ray).applyMatrix4(Yv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=r.index,y=r.attributes.position;if(x!==null){const M=Math.max(0,d.start),A=Math.min(x.count,d.start+d.count);for(let w=M,E=A-1;w<E;w+=p){const g=x.getX(w),G=x.getX(w+1),z=Ec(this,t,Do,m,g,G,w);z&&i.push(z)}if(this.isLineLoop){const w=x.getX(A-1),E=x.getX(M),g=Ec(this,t,Do,m,w,E,A-1);g&&i.push(g)}}else{const M=Math.max(0,d.start),A=Math.min(y.count,d.start+d.count);for(let w=M,E=A-1;w<E;w+=p){const g=Ec(this,t,Do,m,w,w+1,w);g&&i.push(g)}if(this.isLineLoop){const w=Ec(this,t,Do,m,A-1,M,A-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Ec(o,t,i,r,l,u,d){const h=o.geometry.attributes.position;if(zc.fromBufferAttribute(h,l),Bc.fromBufferAttribute(h,u),i.distanceSqToSegment(zc,Bc,bd,Zv)>r)return;bd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(bd);if(!(p<t.near||p>t.far))return{distance:p,point:Zv.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class n0 extends Gn{constructor(t,i,r=Mr,l,u,d,h=_i,m=_i,p,x=Fo,_=1){if(x!==Fo&&x!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:_};super(y,l,u,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Hc extends oa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,_=t/h,y=i/m,M=[],A=[],w=[],E=[];for(let g=0;g<x;g++){const G=g*y-d;for(let z=0;z<p;z++){const L=z*_-u;A.push(L,-G,0),w.push(0,0,1),E.push(z/h),E.push(1-g/m)}}for(let g=0;g<m;g++)for(let G=0;G<h;G++){const z=G+p*g,L=G+p*(g+1),j=G+1+p*(g+1),O=G+1+p*g;M.push(z,L,O),M.push(L,j,O)}this.setIndex(M),this.setAttribute("position",new Va(A,3)),this.setAttribute("normal",new Va(w,3)),this.setAttribute("uv",new Va(E,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.width,t.height,t.widthSegments,t.heightSegments)}}class cM extends jo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uM extends jo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Uh extends _n{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class fM extends Uh{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Td=new Qt,Kv=new $,Qv=new $;class i0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dh,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Kv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Kv),Qv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Qv),i.updateMatrixWorld(),Td.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Jv=new Qt,Uo=new $,Ad=new $;class dM extends i0{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Uo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Uo),Ad.copy(r.position),Ad.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Ad),r.updateMatrixWorld(),l.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Jv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jv,r.coordinateSystem,r.reversedDepth)}}class hM extends Uh{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new dM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class a0 extends $_{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class pM extends i0{constructor(){super(new a0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mM extends Uh{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new pM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gM extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function $v(o,t,i,r){const l=vM(r);switch(i){case F_:return o*t;case H_:return o*t/l.components*l.byteLength;case bh:return o*t/l.components*l.byteLength;case G_:return o*t*2/l.components*l.byteLength;case Th:return o*t*2/l.components*l.byteLength;case I_:return o*t*3/l.components*l.byteLength;case vi:return o*t*4/l.components*l.byteLength;case Ah:return o*t*4/l.components*l.byteLength;case Rc:case wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Cc:case Dc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wd:case Zd:return Math.max(o,16)*Math.max(t,8)/4;case qd:case Yd:return Math.max(o,8)*Math.max(t,8)/2;case Kd:case Qd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Jd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $d:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case eh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case th:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case nh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ih:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ah:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case rh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case sh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case oh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case lh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ch:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case uh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case fh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case dh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Uc:case hh:case ph:return Math.ceil(o/4)*Math.ceil(t/4)*16;case V_:case mh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case gh:case vh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vM(o){switch(o){case Di:case P_:return{byteLength:1,components:1};case zo:case z_:case Go:return{byteLength:2,components:1};case Mh:case Eh:return{byteLength:2,components:4};case Mr:case Sh:case ia:return{byteLength:4,components:1};case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function r0(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function _M(o){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,_=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const x=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,x);else{_.sort((M,A)=>M.start-A.start);let y=0;for(let M=1;M<_.length;M++){const A=_[y],w=_[M];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++y,_[y]=w)}_.length=y+1;for(let M=0,A=_.length;M<A;M++){const w=_[M];o.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var xM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yM=`#ifdef USE_ALPHAHASH
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
#endif`,SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
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
#endif`,AM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RM=`#ifdef USE_BATCHING
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
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LM=`#ifdef USE_IRIDESCENCE
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
#endif`,NM=`#ifdef USE_BUMPMAP
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
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,VM=`#define PI 3.141592653589793
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
} // validated`,kM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jM=`vec3 transformedNormal = objectNormal;
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
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZM="gl_FragColor = linearToOutputTexel( gl_FragColor );",KM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,nE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
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
}`,oE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
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
#endif`,fE=`#ifdef USE_ENVMAP
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
#endif`,dE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gE=`PhysicalMaterial material;
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
#endif`,vE=`struct PhysicalMaterial {
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
}`,_E=`
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
#endif`,xE=`#if defined( RE_IndirectDiffuse )
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ME=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wE=`#if defined( USE_POINTS_UV )
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
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`#ifdef USE_MORPHTARGETS
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
#endif`,PE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
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
#endif`,VE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ib=`float getShadowMask() {
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
}`,ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
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
#endif`,sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ob=`#ifdef USE_SKINNING
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
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
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
#endif`,hb=`#ifdef USE_TRANSMISSION
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
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
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`#include <common>
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
}`,Tb=`#if DEPTH_PACKING == 3200
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
}`,Ab=`#define DISTANCE
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
}`,Rb=`#define DISTANCE
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`uniform float scale;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Lb=`#include <common>
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Ob=`#define LAMBERT
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
}`,Pb=`#define LAMBERT
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
}`,zb=`#define MATCAP
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
}`,Bb=`#define MATCAP
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
}`,Fb=`#define NORMAL
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
}`,Ib=`#define NORMAL
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
}`,Hb=`#define PHONG
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
}`,Gb=`#define PHONG
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
}`,Vb=`#define STANDARD
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
}`,kb=`#define STANDARD
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
}`,jb=`#define TOON
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
}`,Xb=`#define TOON
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
}`,qb=`uniform float size;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,Yb=`#include <common>
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
}`,Zb=`uniform vec3 color;
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
}`,Kb=`uniform float rotation;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:xM,alphahash_pars_fragment:yM,alphamap_fragment:SM,alphamap_pars_fragment:MM,alphatest_fragment:EM,alphatest_pars_fragment:bM,aomap_fragment:TM,aomap_pars_fragment:AM,batching_pars_vertex:RM,batching_vertex:wM,begin_vertex:CM,beginnormal_vertex:DM,bsdfs:UM,iridescence_fragment:LM,bumpmap_pars_fragment:NM,clipping_planes_fragment:OM,clipping_planes_pars_fragment:PM,clipping_planes_pars_vertex:zM,clipping_planes_vertex:BM,color_fragment:FM,color_pars_fragment:IM,color_pars_vertex:HM,color_vertex:GM,common:VM,cube_uv_reflection_fragment:kM,defaultnormal_vertex:jM,displacementmap_pars_vertex:XM,displacementmap_vertex:qM,emissivemap_fragment:WM,emissivemap_pars_fragment:YM,colorspace_fragment:ZM,colorspace_pars_fragment:KM,envmap_fragment:QM,envmap_common_pars_fragment:JM,envmap_pars_fragment:$M,envmap_pars_vertex:eE,envmap_physical_pars_fragment:fE,envmap_vertex:tE,fog_vertex:nE,fog_pars_vertex:iE,fog_fragment:aE,fog_pars_fragment:rE,gradientmap_pars_fragment:sE,lightmap_pars_fragment:oE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:cE,lights_pars_begin:uE,lights_toon_fragment:dE,lights_toon_pars_fragment:hE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:gE,lights_physical_pars_fragment:vE,lights_fragment_begin:_E,lights_fragment_maps:xE,lights_fragment_end:yE,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:ME,logdepthbuf_pars_vertex:EE,logdepthbuf_vertex:bE,map_fragment:TE,map_pars_fragment:AE,map_particle_fragment:RE,map_particle_pars_fragment:wE,metalnessmap_fragment:CE,metalnessmap_pars_fragment:DE,morphinstance_vertex:UE,morphcolor_vertex:LE,morphnormal_vertex:NE,morphtarget_pars_vertex:OE,morphtarget_vertex:PE,normal_fragment_begin:zE,normal_fragment_maps:BE,normal_pars_fragment:FE,normal_pars_vertex:IE,normal_vertex:HE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:VE,clearcoat_normal_fragment_maps:kE,clearcoat_pars_fragment:jE,iridescence_pars_fragment:XE,opaque_fragment:qE,packing:WE,premultiplied_alpha_fragment:YE,project_vertex:ZE,dithering_fragment:KE,dithering_pars_fragment:QE,roughnessmap_fragment:JE,roughnessmap_pars_fragment:$E,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:tb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:ab,skinning_pars_vertex:rb,skinning_vertex:sb,skinnormal_vertex:ob,specularmap_fragment:lb,specularmap_pars_fragment:cb,tonemapping_fragment:ub,tonemapping_pars_fragment:fb,transmission_fragment:db,transmission_pars_fragment:hb,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,worldpos_vertex:vb,background_vert:_b,background_frag:xb,backgroundCube_vert:yb,backgroundCube_frag:Sb,cube_vert:Mb,cube_frag:Eb,depth_vert:bb,depth_frag:Tb,distanceRGBA_vert:Ab,distanceRGBA_frag:Rb,equirect_vert:wb,equirect_frag:Cb,linedashed_vert:Db,linedashed_frag:Ub,meshbasic_vert:Lb,meshbasic_frag:Nb,meshlambert_vert:Ob,meshlambert_frag:Pb,meshmatcap_vert:zb,meshmatcap_frag:Bb,meshnormal_vert:Fb,meshnormal_frag:Ib,meshphong_vert:Hb,meshphong_frag:Gb,meshphysical_vert:Vb,meshphysical_frag:kb,meshtoon_vert:jb,meshtoon_frag:Xb,points_vert:qb,points_frag:Wb,shadow_vert:Yb,shadow_frag:Zb,sprite_vert:Kb,sprite_frag:Qb},Pe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ai={basic:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Nn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Nn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Nn([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Nn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Nn([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Nn([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Nn([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Nn([Pe.lights,Pe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ai.physical={uniforms:Nn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const bc={r:0,b:0,g:0},pr=new sa,Jb=new Qt;function $b(o,t,i,r,l,u,d){const h=new Ct(0);let m=u===!0?0:1,p,x,_=null,y=0,M=null;function A(z){let L=z.isScene===!0?z.background:null;return L&&L.isTexture&&(L=(z.backgroundBlurriness>0?i:t).get(L)),L}function w(z){let L=!1;const j=A(z);j===null?g(h,m):j&&j.isColor&&(g(j,1),L=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(z,L){const j=A(L);j&&(j.isCubeTexture||j.mapping===Fc)?(x===void 0&&(x=new aa(new Xo(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Cs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,I,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),pr.copy(L.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),x.material.uniforms.envMap.value=j,x.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(pr)),x.material.toneMapped=wt.getTransfer(j.colorSpace)!==Gt,(_!==j||y!==j.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,_=j,y=j.version,M=o.toneMapping),x.layers.enableAll(),z.unshift(x,x.geometry,x.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new aa(new Hc(2,2),new ja({name:"BackgroundMaterial",uniforms:Cs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=wt.getTransfer(j.colorSpace)!==Gt,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(_!==j||y!==j.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=j,y=j.version,M=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function g(z,L){z.getRGB(bc,J_(o)),r.buffers.color.setClear(bc.r,bc.g,bc.b,L,d)}function G(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(z,L=1){h.set(z),m=L,g(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,g(h,m)},render:w,addToRenderList:E,dispose:G}}function eT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,d=!1;function h(C,H,le,se,fe){let _e=!1;const D=_(se,le,H);u!==D&&(u=D,p(u.object)),_e=M(C,se,le,fe),_e&&A(C,se,le,fe),fe!==null&&t.update(fe,o.ELEMENT_ARRAY_BUFFER),(_e||d)&&(d=!1,L(C,H,le,se),fe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(fe).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function _(C,H,le){const se=le.wireframe===!0;let fe=r[C.id];fe===void 0&&(fe={},r[C.id]=fe);let _e=fe[H.id];_e===void 0&&(_e={},fe[H.id]=_e);let D=_e[se];return D===void 0&&(D=y(m()),_e[se]=D),D}function y(C){const H=[],le=[],se=[];for(let fe=0;fe<i;fe++)H[fe]=0,le[fe]=0,se[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:le,attributeDivisors:se,object:C,attributes:{},index:null}}function M(C,H,le,se){const fe=u.attributes,_e=H.attributes;let D=0;const K=le.getAttributes();for(const q in K)if(K[q].location>=0){const me=fe[q];let N=_e[q];if(N===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),me===void 0||me.attribute!==N||N&&me.data!==N.data)return!0;D++}return u.attributesNum!==D||u.index!==se}function A(C,H,le,se){const fe={},_e=H.attributes;let D=0;const K=le.getAttributes();for(const q in K)if(K[q].location>=0){let me=_e[q];me===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(me=C.instanceColor));const N={};N.attribute=me,me&&me.data&&(N.data=me.data),fe[q]=N,D++}u.attributes=fe,u.attributesNum=D,u.index=se}function w(){const C=u.newAttributes;for(let H=0,le=C.length;H<le;H++)C[H]=0}function E(C){g(C,0)}function g(C,H){const le=u.newAttributes,se=u.enabledAttributes,fe=u.attributeDivisors;le[C]=1,se[C]===0&&(o.enableVertexAttribArray(C),se[C]=1),fe[C]!==H&&(o.vertexAttribDivisor(C,H),fe[C]=H)}function G(){const C=u.newAttributes,H=u.enabledAttributes;for(let le=0,se=H.length;le<se;le++)H[le]!==C[le]&&(o.disableVertexAttribArray(le),H[le]=0)}function z(C,H,le,se,fe,_e,D){D===!0?o.vertexAttribIPointer(C,H,le,fe,_e):o.vertexAttribPointer(C,H,le,se,fe,_e)}function L(C,H,le,se){w();const fe=se.attributes,_e=le.getAttributes(),D=H.defaultAttributeValues;for(const K in _e){const q=_e[K];if(q.location>=0){let ue=fe[K];if(ue===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ue!==void 0){const me=ue.normalized,N=ue.itemSize,ee=t.get(ue);if(ee===void 0)continue;const Ee=ee.buffer,Ae=ee.type,J=ee.bytesPerElement,xe=Ae===o.INT||Ae===o.UNSIGNED_INT||ue.gpuType===Sh;if(ue.isInterleavedBufferAttribute){const ve=ue.data,Ie=ve.stride,Le=ue.offset;if(ve.isInstancedInterleavedBuffer){for(let k=0;k<q.locationSize;k++)g(q.location+k,ve.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let k=0;k<q.locationSize;k++)E(q.location+k);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let k=0;k<q.locationSize;k++)z(q.location+k,N/q.locationSize,Ae,me,Ie*J,(Le+N/q.locationSize*k)*J,xe)}else{if(ue.isInstancedBufferAttribute){for(let ve=0;ve<q.locationSize;ve++)g(q.location+ve,ue.meshPerAttribute);C.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<q.locationSize;ve++)E(q.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let ve=0;ve<q.locationSize;ve++)z(q.location+ve,N/q.locationSize,Ae,me,N*J,N/q.locationSize*ve*J,xe)}}else if(D!==void 0){const me=D[K];if(me!==void 0)switch(me.length){case 2:o.vertexAttrib2fv(q.location,me);break;case 3:o.vertexAttrib3fv(q.location,me);break;case 4:o.vertexAttrib4fv(q.location,me);break;default:o.vertexAttrib1fv(q.location,me)}}}}G()}function j(){Q();for(const C in r){const H=r[C];for(const le in H){const se=H[le];for(const fe in se)x(se[fe].object),delete se[fe];delete H[le]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const le in H){const se=H[le];for(const fe in se)x(se[fe].object),delete se[fe];delete H[le]}delete r[C.id]}function I(C){for(const H in r){const le=r[H];if(le[C.id]===void 0)continue;const se=le[C.id];for(const fe in se)x(se[fe].object),delete se[fe];delete le[C.id]}}function Q(){U(),d=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:U,dispose:j,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:E,disableUnusedAttributes:G}}function tT(o,t,i){let r;function l(p){r=p}function u(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,_){_!==0&&(o.drawArraysInstanced(r,p,x,_),i.update(x,r,_))}function h(p,x,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let M=0;for(let A=0;A<_;A++)M+=x[A];i.update(M,r,1)}function m(p,x,_,y){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],x[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,x,0,y,0,_);let A=0;for(let w=0;w<_;w++)A+=x[w]*y[w];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function nT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==vi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const Q=I===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Di&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ia&&!Q)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),E=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),G=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),j=A>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:E,maxAttributes:g,maxVertexUniforms:G,maxVaryings:z,maxFragmentUniforms:L,vertexTextures:j,maxSamples:O}}function iT(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new gr,h=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||l;return l=y,r=_.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,y){i=x(_,y,0)},this.setState=function(_,y,M){const A=_.clippingPlanes,w=_.clipIntersection,E=_.clipShadows,g=o.get(_);if(!l||A===null||A.length===0||u&&!E)u?x(null):p();else{const G=u?0:r,z=G*4;let L=g.clippingState||null;m.value=L,L=x(A,y,z,M);for(let j=0;j!==z;++j)L[j]=i[j];g.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=G}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(_,y,M,A){const w=_!==null?_.length:0;let E=null;if(w!==0){if(E=m.value,A!==!0||E===null){const g=M+w*4,G=y.matrixWorldInverse;h.getNormalMatrix(G),(E===null||E.length<g)&&(E=new Float32Array(g));for(let z=0,L=M;z!==w;++z,L+=4)d.copy(_[z]).applyMatrix4(G,h),d.normal.toArray(E,L),E[L+3]=d.constant}m.value=E,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,E}}function aT(o){let t=new WeakMap;function i(d,h){return h===Vd?d.mapping=As:h===kd&&(d.mapping=Rs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Vd||h===kd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new nM(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ss=4,e_=[.125,.215,.35,.446,.526,.582],xr=20,Rd=new a0,t_=new Ct;let wd=null,Cd=0,Dd=0,Ud=!1;const vr=(1+Math.sqrt(5))/2,xs=1/vr,n_=[new $(-vr,xs,0),new $(vr,xs,0),new $(-xs,0,vr),new $(xs,0,vr),new $(0,vr,-xs),new $(0,vr,xs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],rT=new $;class i_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=rT}=u;wd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wd,Cd,Dd),this._renderer.xr.enabled=Ud,t.scissorTest=!1,Tc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wd=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Go,format:vi,colorSpace:ws,depthBuffer:!1},l=a_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sT(u)),this._blurMaterial=oT(u,t,i)}return l}_compileMaterial(t){const i=new aa(this._lodPlanes[0],t);this._renderer.compile(i,Rd)}_sceneToCubeUV(t,i,r,l,u){const m=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,M=_.toneMapping;_.getClearColor(t_),_.toneMapping=Ga,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const w=new Z_({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),E=new aa(new Xo,w);let g=!1;const G=t.background;G?G.isColor&&(w.color.copy(G),t.background=null,g=!0):(w.color.copy(t_),g=!0);for(let z=0;z<6;z++){const L=z%3;L===0?(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[z],u.y,u.z)):L===1?(m.up.set(0,0,p[z]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[z],u.z)):(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[z]));const j=this._cubeSize;Tc(l,L*j,z>2?j:0,j,j),_.setRenderTarget(l),g&&_.render(E,m),_.render(t,m)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=M,_.autoClear=y,t.background=G}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===As||t.mapping===Rs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new aa(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Tc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Rd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=n_[(l-u-1)%n_.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new aa(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*xr-1),w=u/A,E=isFinite(u)?1+Math.floor(x*w):xr;E>xr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${xr}`);const g=[];let G=0;for(let I=0;I<xr;++I){const Q=I/w,U=Math.exp(-Q*Q/2);g.push(U),I===0?G+=U:I<E&&(G+=2*U)}for(let I=0;I<g.length;I++)g[I]=g[I]/G;y.envMap.value=t.texture,y.samples.value=E,y.weights.value=g,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:z}=this;y.dTheta.value=A,y.mipInt.value=z-r;const L=this._sizeLods[l],j=3*L*(l>z-Ss?l-z+Ss:0),O=4*(this._cubeSize-L);Tc(i,j,O,3*L,2*L),m.setRenderTarget(i),m.render(_,Rd)}}function sT(o){const t=[],i=[],r=[];let l=o;const u=o-Ss+1+e_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-Ss?m=e_[d-o+Ss-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),x=-p,_=1+p,y=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,A=6,w=3,E=2,g=1,G=new Float32Array(w*A*M),z=new Float32Array(E*A*M),L=new Float32Array(g*A*M);for(let O=0;O<M;O++){const I=O%3*2/3-1,Q=O>2?0:-1,U=[I,Q,0,I+2/3,Q,0,I+2/3,Q+1,0,I,Q,0,I+2/3,Q+1,0,I,Q+1,0];G.set(U,w*A*O),z.set(y,E*A*O);const C=[O,O,O,O,O,O];L.set(C,g*A*O)}const j=new oa;j.setAttribute("position",new Ci(G,w)),j.setAttribute("uv",new Ci(z,E)),j.setAttribute("faceIndex",new Ci(L,g)),t.push(j),l>Ss&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function a_(o,t,i){const r=new Er(o,t,i);return r.texture.mapping=Fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function oT(o,t,i){const r=new Float32Array(xr),l=new $(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function r_(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function s_(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function lT(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Vd||m===kd,x=m===As||m===Rs;if(p||x){let _=t.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new i_(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new i_(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function cT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Es("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function uT(o,t,i,r){const l={},u=new WeakMap;function d(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const A in y.attributes)t.remove(y.attributes[A]);y.removeEventListener("dispose",d),delete l[y.id];const M=u.get(y);M&&(t.remove(M),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(_,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const M in y)t.update(y[M],o.ARRAY_BUFFER)}function p(_){const y=[],M=_.index,A=_.attributes.position;let w=0;if(M!==null){const G=M.array;w=M.version;for(let z=0,L=G.length;z<L;z+=3){const j=G[z+0],O=G[z+1],I=G[z+2];y.push(j,O,O,I,I,j)}}else if(A!==void 0){const G=A.array;w=A.version;for(let z=0,L=G.length/3-1;z<L;z+=3){const j=z+0,O=z+1,I=z+2;y.push(j,O,O,I,I,j)}}else return;const E=new(j_(y)?Q_:K_)(y,1);E.version=w;const g=u.get(_);g&&t.remove(g),u.set(_,E)}function x(_){const y=u.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:x}}function fT(o,t,i){let r;function l(y){r=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function m(y,M){o.drawElements(r,M,u,y*d),i.update(M,r,1)}function p(y,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,y*d,A),i.update(M,r,A))}function x(y,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,y,0,A);let E=0;for(let g=0;g<A;g++)E+=M[g];i.update(E,r,1)}function _(y,M,A,w){if(A===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let g=0;g<y.length;g++)p(y[g]/d,M[g],w[g]);else{E.multiDrawElementsInstancedWEBGL(r,M,0,u,y,0,w,0,A);let g=0;for(let G=0;G<A;G++)g+=M[G]*w[G];i.update(g,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function dT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function hT(o,t,i){const r=new WeakMap,l=new Vt;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(h);if(y===void 0||y.count!==_){let U=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",U)};y!==void 0&&y.texture.dispose();const M=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],g=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let z=0;M===!0&&(z=1),A===!0&&(z=2),w===!0&&(z=3);let L=h.attributes.position.count*z,j=1;L>t.maxTextureSize&&(j=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const O=new Float32Array(L*j*4*_),I=new X_(O,L,j,_);I.type=ia,I.needsUpdate=!0;const Q=z*4;for(let C=0;C<_;C++){const H=E[C],le=g[C],se=G[C],fe=L*j*4*C;for(let _e=0;_e<H.count;_e++){const D=_e*Q;M===!0&&(l.fromBufferAttribute(H,_e),O[fe+D+0]=l.x,O[fe+D+1]=l.y,O[fe+D+2]=l.z,O[fe+D+3]=0),A===!0&&(l.fromBufferAttribute(le,_e),O[fe+D+4]=l.x,O[fe+D+5]=l.y,O[fe+D+6]=l.z,O[fe+D+7]=0),w===!0&&(l.fromBufferAttribute(se,_e),O[fe+D+8]=l.x,O[fe+D+9]=l.y,O[fe+D+10]=l.z,O[fe+D+11]=se.itemSize===4?l.w:1)}}y={count:_,texture:I,size:new Ut(L,j)},r.set(h,y),h.addEventListener("dispose",U)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let M=0;for(let w=0;w<p.length;w++)M+=p[w];const A=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function pT(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,x=m.geometry,_=t.get(m,x);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const s0=new Gn,o_=new n0(1,1),o0=new X_,l0=new IS,c0=new e0,l_=[],c_=[],u_=new Float32Array(16),f_=new Float32Array(9),d_=new Float32Array(4);function Ls(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=l_[l];if(u===void 0&&(u=new Float32Array(l),l_[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Gc(o,t){let i=c_[t];i===void 0&&(i=new Int32Array(t),c_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function mT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function vT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function xT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;d_.set(r),o.uniformMatrix2fv(this.addr,!1,d_),pn(i,r)}}function yT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;f_.set(r),o.uniformMatrix3fv(this.addr,!1,f_),pn(i,r)}}function ST(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;u_.set(r),o.uniformMatrix4fv(this.addr,!1,u_),pn(i,r)}}function MT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function bT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function TT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function AT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function RT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function DT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(o_.compareFunction=k_,u=o_):u=s0,i.setTexture2D(t||u,l)}function UT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||l0,l)}function LT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||c0,l)}function NT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||o0,l)}function OT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return vT;case 35666:return _T;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return ET;case 35668:case 35672:return bT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return RT;case 36295:return wT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}function PT(o,t){o.uniform1fv(this.addr,t)}function zT(o,t){const i=Ls(t,this.size,2);o.uniform2fv(this.addr,i)}function BT(o,t){const i=Ls(t,this.size,3);o.uniform3fv(this.addr,i)}function FT(o,t){const i=Ls(t,this.size,4);o.uniform4fv(this.addr,i)}function IT(o,t){const i=Ls(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function HT(o,t){const i=Ls(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function GT(o,t){const i=Ls(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function VT(o,t){o.uniform1iv(this.addr,t)}function kT(o,t){o.uniform2iv(this.addr,t)}function jT(o,t){o.uniform3iv(this.addr,t)}function XT(o,t){o.uniform4iv(this.addr,t)}function qT(o,t){o.uniform1uiv(this.addr,t)}function WT(o,t){o.uniform2uiv(this.addr,t)}function YT(o,t){o.uniform3uiv(this.addr,t)}function ZT(o,t){o.uniform4uiv(this.addr,t)}function KT(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||s0,u[d])}function QT(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||l0,u[d])}function JT(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||c0,u[d])}function $T(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||o0,u[d])}function eA(o){switch(o){case 5126:return PT;case 35664:return zT;case 35665:return BT;case 35666:return FT;case 35674:return IT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return VT;case 35667:case 35671:return kT;case 35668:case 35672:return jT;case 35669:case 35673:return XT;case 5125:return qT;case 36294:return WT;case 36295:return YT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return $T}}class tA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=OT(i.type)}}class nA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=eA(i.type)}}class iA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function h_(o,t){o.seq.push(t),o.map[t.id]=t}function aA(o,t,i){const r=o.name,l=r.length;for(Ld.lastIndex=0;;){const u=Ld.exec(r),d=Ld.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){h_(i,p===void 0?new tA(h,o,t):new nA(h,o,t));break}else{let _=i.map[h];_===void 0&&(_=new iA(h),h_(i,_)),i=_}}}class Lc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);aA(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function p_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const rA=37297;let sA=0;function oA(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const m_=new ht;function lA(o){wt._getMatrix(m_,wt.workingColorSpace,o);const t=`mat3( ${m_.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(o)){case Nc:return[t,"LinearTransferOETF"];case Gt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function g_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+oA(o.getShaderSource(t),h)}else return u}function cA(o,t){const i=lA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function uA(o,t){let i;switch(t){case Qy:i="Linear";break;case Jy:i="Reinhard";break;case $y:i="Cineon";break;case eS:i="ACESFilmic";break;case nS:i="AgX";break;case iS:i="Neutral";break;case tS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new $;function fA(){wt.getLuminanceCoefficients(Ac);const o=Ac.x.toFixed(4),t=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function hA(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function pA(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function No(o){return o!==""}function v_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function __(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mA=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(o){return o.replace(mA,vA)}const gA=new Map;function vA(o,t){let i=pt[t];if(i===void 0){const r=gA.get(t);if(r!==void 0)i=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return _h(i)}const _A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x_(o){return o.replace(_A,xA)}function xA(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function y_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function yA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===U_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===L_?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function SA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case Fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function MA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function EA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case N_:t="ENVMAP_BLENDING_MULTIPLY";break;case Zy:t="ENVMAP_BLENDING_MIX";break;case Ky:t="ENVMAP_BLENDING_ADD";break}return t}function bA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function TA(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=yA(i),p=SA(i),x=MA(i),_=EA(i),y=bA(i),M=dA(i),A=hA(u),w=l.createProgram();let E,g,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(No).join(`
`),E.length>0&&(E+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(No).join(`
`),g.length>0&&(g+=`
`)):(E=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?pt.tonemapping_pars_fragment:"",i.toneMapping!==Ga?uA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,cA("linearToOutputTexel",i.outputColorSpace),fA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),d=_h(d),d=v_(d,i),d=__(d,i),h=_h(h),h=v_(h,i),h=__(h,i),d=x_(d),h=x_(h),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,g=["#define varying in",i.glslVersion===Cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const z=G+E+d,L=G+g+h,j=p_(l,l.VERTEX_SHADER,z),O=p_(l,l.FRAGMENT_SHADER,L);l.attachShader(w,j),l.attachShader(w,O),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(H){if(o.debug.checkShaderErrors){const le=l.getProgramInfoLog(w)||"",se=l.getShaderInfoLog(j)||"",fe=l.getShaderInfoLog(O)||"",_e=le.trim(),D=se.trim(),K=fe.trim();let q=!0,ue=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,j,O);else{const me=g_(l,j,"vertex"),N=g_(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+_e+`
`+me+`
`+N)}else _e!==""?console.warn("THREE.WebGLProgram: Program Info Log:",_e):(D===""||K==="")&&(ue=!1);ue&&(H.diagnostics={runnable:q,programLog:_e,vertexShader:{log:D,prefix:E},fragmentShader:{log:K,prefix:g}})}l.deleteShader(j),l.deleteShader(O),Q=new Lc(l,w),U=pA(l,w)}let Q;this.getUniforms=function(){return Q===void 0&&I(this),Q};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(w,rA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=sA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=j,this.fragmentShader=O,this}let AA=0;class RA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new wA(t),i.set(t,r)),r}}class wA{constructor(t){this.id=AA++,this.code=t,this.usedTimes=0}}function CA(o,t,i,r,l,u,d){const h=new W_,m=new RA,p=new Set,x=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(U){return p.add(U),U===0?"uv":`uv${U}`}function E(U,C,H,le,se){const fe=le.fog,_e=se.geometry,D=U.isMeshStandardMaterial?le.environment:null,K=(U.isMeshStandardMaterial?i:t).get(U.envMap||D),q=K&&K.mapping===Fc?K.image.height:null,ue=A[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const me=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,N=me!==void 0?me.length:0;let ee=0;_e.morphAttributes.position!==void 0&&(ee=1),_e.morphAttributes.normal!==void 0&&(ee=2),_e.morphAttributes.color!==void 0&&(ee=3);let Ee,Ae,J,xe;if(ue){const bt=Ai[ue];Ee=bt.vertexShader,Ae=bt.fragmentShader}else Ee=U.vertexShader,Ae=U.fragmentShader,m.update(U),J=m.getVertexShaderID(U),xe=m.getFragmentShaderID(U);const ve=o.getRenderTarget(),Ie=o.state.buffers.depth.getReversed(),Le=se.isInstancedMesh===!0,k=se.isBatchedMesh===!0,Be=!!U.map,qe=!!U.matcap,F=!!K,ct=!!U.aoMap,We=!!U.lightMap,ft=!!U.bumpMap,Qe=!!U.normalMap,Bt=!!U.displacementMap,Ge=!!U.emissiveMap,ot=!!U.metalnessMap,Jt=!!U.roughnessMap,Zt=U.anisotropy>0,P=U.clearcoat>0,b=U.dispersion>0,ie=U.iridescence>0,pe=U.sheen>0,be=U.transmission>0,de=Zt&&!!U.anisotropyMap,Je=P&&!!U.clearcoatMap,Ce=P&&!!U.clearcoatNormalMap,Ze=P&&!!U.clearcoatRoughnessMap,Ke=ie&&!!U.iridescenceMap,Re=ie&&!!U.iridescenceThicknessMap,De=pe&&!!U.sheenColorMap,$e=pe&&!!U.sheenRoughnessMap,Fe=!!U.specularMap,Ne=!!U.specularColorMap,lt=!!U.specularIntensityMap,X=be&&!!U.transmissionMap,we=be&&!!U.thicknessMap,Ue=!!U.gradientMap,He=!!U.alphaMap,Te=U.alphaTest>0,Se=!!U.alphaHash,Ve=!!U.extensions;let rt=Ga;U.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(rt=o.toneMapping);const Ot={shaderID:ue,shaderType:U.type,shaderName:U.name,vertexShader:Ee,fragmentShader:Ae,defines:U.defines,customVertexShaderID:J,customFragmentShaderID:xe,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:k,batchingColor:k&&se._colorsTexture!==null,instancing:Le,instancingColor:Le&&se.instanceColor!==null,instancingMorph:Le&&se.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ws,alphaToCoverage:!!U.alphaToCoverage,map:Be,matcap:qe,envMap:F,envMapMode:F&&K.mapping,envMapCubeUVHeight:q,aoMap:ct,lightMap:We,bumpMap:ft,normalMap:Qe,displacementMap:y&&Bt,emissiveMap:Ge,normalMapObjectSpace:Qe&&U.normalMapType===lS,normalMapTangentSpace:Qe&&U.normalMapType===oS,metalnessMap:ot,roughnessMap:Jt,anisotropy:Zt,anisotropyMap:de,clearcoat:P,clearcoatMap:Je,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ze,dispersion:b,iridescence:ie,iridescenceMap:Ke,iridescenceThicknessMap:Re,sheen:pe,sheenColorMap:De,sheenRoughnessMap:$e,specularMap:Fe,specularColorMap:Ne,specularIntensityMap:lt,transmission:be,transmissionMap:X,thicknessMap:we,gradientMap:Ue,opaque:U.transparent===!1&&U.blending===Ms&&U.alphaToCoverage===!1,alphaMap:He,alphaTest:Te,alphaHash:Se,combine:U.combine,mapUv:Be&&w(U.map.channel),aoMapUv:ct&&w(U.aoMap.channel),lightMapUv:We&&w(U.lightMap.channel),bumpMapUv:ft&&w(U.bumpMap.channel),normalMapUv:Qe&&w(U.normalMap.channel),displacementMapUv:Bt&&w(U.displacementMap.channel),emissiveMapUv:Ge&&w(U.emissiveMap.channel),metalnessMapUv:ot&&w(U.metalnessMap.channel),roughnessMapUv:Jt&&w(U.roughnessMap.channel),anisotropyMapUv:de&&w(U.anisotropyMap.channel),clearcoatMapUv:Je&&w(U.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&w(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&w(U.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&w(U.iridescenceThicknessMap.channel),sheenColorMapUv:De&&w(U.sheenColorMap.channel),sheenRoughnessMapUv:$e&&w(U.sheenRoughnessMap.channel),specularMapUv:Fe&&w(U.specularMap.channel),specularColorMapUv:Ne&&w(U.specularColorMap.channel),specularIntensityMapUv:lt&&w(U.specularIntensityMap.channel),transmissionMapUv:X&&w(U.transmissionMap.channel),thicknessMapUv:we&&w(U.thicknessMap.channel),alphaMapUv:He&&w(U.alphaMap.channel),vertexTangents:!!_e.attributes.tangent&&(Qe||Zt),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!_e.attributes.uv&&(Be||He),fog:!!fe,useFog:U.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ie,skinning:se.isSkinnedMesh===!0,morphTargets:_e.morphAttributes.position!==void 0,morphNormals:_e.morphAttributes.normal!==void 0,morphColors:_e.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:rt,decodeVideoTexture:Be&&U.map.isVideoTexture===!0&&wt.getTransfer(U.map.colorSpace)===Gt,decodeVideoTextureEmissive:Ge&&U.emissiveMap.isVideoTexture===!0&&wt.getTransfer(U.emissiveMap.colorSpace)===Gt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===na,flipSided:U.side===Hn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Ve&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&U.extensions.multiDraw===!0||k)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function g(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)C.push(H),C.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(G(C,U),z(C,U),C.push(o.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function G(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function z(U,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),U.push(h.mask)}function L(U){const C=A[U.type];let H;if(C){const le=Ai[C];H=JS.clone(le.uniforms)}else H=U.uniforms;return H}function j(U,C){let H;for(let le=0,se=x.length;le<se;le++){const fe=x[le];if(fe.cacheKey===C){H=fe,++H.usedTimes;break}}return H===void 0&&(H=new TA(o,C,U,u),x.push(H)),H}function O(U){if(--U.usedTimes===0){const C=x.indexOf(U);x[C]=x[x.length-1],x.pop(),U.destroy()}}function I(U){m.remove(U)}function Q(){m.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:L,acquireProgram:j,releaseProgram:O,releaseShaderCache:I,programs:x,dispose:Q}}function DA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function UA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function S_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function M_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(_,y,M,A,w,E){let g=o[t];return g===void 0?(g={id:_.id,object:_,geometry:y,material:M,groupOrder:A,renderOrder:_.renderOrder,z:w,group:E},o[t]=g):(g.id=_.id,g.object=_,g.geometry=y,g.material=M,g.groupOrder=A,g.renderOrder=_.renderOrder,g.z=w,g.group=E),t++,g}function h(_,y,M,A,w,E){const g=d(_,y,M,A,w,E);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(_,y,M,A,w,E){const g=d(_,y,M,A,w,E);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(_,y){i.length>1&&i.sort(_||UA),r.length>1&&r.sort(y||S_),l.length>1&&l.sort(y||S_)}function x(){for(let _=t,y=o.length;_<y;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:x,sort:p}}function LA(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new M_,o.set(r,[d])):l>=u.length?(d=new M_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function NA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new Ct};break;case"SpotLight":i={position:new $,direction:new $,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=i,i}}}function OA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let PA=0;function zA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function BA(o){const t=new NA,i=OA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,u=new Qt,d=new Qt;function h(p){let x=0,_=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,A=0,w=0,E=0,g=0,G=0,z=0,L=0,j=0,O=0,I=0;p.sort(zA);for(let U=0,C=p.length;U<C;U++){const H=p[U],le=H.color,se=H.intensity,fe=H.distance,_e=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)x+=le.r*se,_+=le.g*se,y+=le.b*se;else if(H.isLightProbe){for(let D=0;D<9;D++)r.probe[D].addScaledVector(H.sh.coefficients[D],se);I++}else if(H.isDirectionalLight){const D=t.get(H);if(D.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,q=i.get(H);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=_e,r.directionalShadowMatrix[M]=H.shadow.matrix,G++}r.directional[M]=D,M++}else if(H.isSpotLight){const D=t.get(H);D.position.setFromMatrixPosition(H.matrixWorld),D.color.copy(le).multiplyScalar(se),D.distance=fe,D.coneCos=Math.cos(H.angle),D.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),D.decay=H.decay,r.spot[w]=D;const K=H.shadow;if(H.map&&(r.spotLightMap[j]=H.map,j++,K.updateMatrices(H),H.castShadow&&O++),r.spotLightMatrix[w]=K.matrix,H.castShadow){const q=i.get(H);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.spotShadow[w]=q,r.spotShadowMap[w]=_e,L++}w++}else if(H.isRectAreaLight){const D=t.get(H);D.color.copy(le).multiplyScalar(se),D.halfWidth.set(H.width*.5,0,0),D.halfHeight.set(0,H.height*.5,0),r.rectArea[E]=D,E++}else if(H.isPointLight){const D=t.get(H);if(D.color.copy(H.color).multiplyScalar(H.intensity),D.distance=H.distance,D.decay=H.decay,H.castShadow){const K=H.shadow,q=i.get(H);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,r.pointShadow[A]=q,r.pointShadowMap[A]=_e,r.pointShadowMatrix[A]=H.shadow.matrix,z++}r.point[A]=D,A++}else if(H.isHemisphereLight){const D=t.get(H);D.skyColor.copy(H.color).multiplyScalar(se),D.groundColor.copy(H.groundColor).multiplyScalar(se),r.hemi[g]=D,g++}}E>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const Q=r.hash;(Q.directionalLength!==M||Q.pointLength!==A||Q.spotLength!==w||Q.rectAreaLength!==E||Q.hemiLength!==g||Q.numDirectionalShadows!==G||Q.numPointShadows!==z||Q.numSpotShadows!==L||Q.numSpotMaps!==j||Q.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=E,r.point.length=A,r.hemi.length=g,r.directionalShadow.length=G,r.directionalShadowMap.length=G,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=G,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=L+j-O,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=I,Q.directionalLength=M,Q.pointLength=A,Q.spotLength=w,Q.rectAreaLength=E,Q.hemiLength=g,Q.numDirectionalShadows=G,Q.numPointShadows=z,Q.numSpotShadows=L,Q.numSpotMaps=j,Q.numLightProbes=I,r.version=PA++)}function m(p,x){let _=0,y=0,M=0,A=0,w=0;const E=x.matrixWorldInverse;for(let g=0,G=p.length;g<G;g++){const z=p[g];if(z.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(E),_++}else if(z.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(z.matrixWorld),L.position.applyMatrix4(E),L.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(E),M++}else if(z.isRectAreaLight){const L=r.rectArea[A];L.position.setFromMatrixPosition(z.matrixWorld),L.position.applyMatrix4(E),d.identity(),u.copy(z.matrixWorld),u.premultiply(E),d.extractRotation(u),L.halfWidth.set(z.width*.5,0,0),L.halfHeight.set(0,z.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),A++}else if(z.isPointLight){const L=r.point[y];L.position.setFromMatrixPosition(z.matrixWorld),L.position.applyMatrix4(E),y++}else if(z.isHemisphereLight){const L=r.hemi[w];L.direction.setFromMatrixPosition(z.matrixWorld),L.direction.transformDirection(E),w++}}}return{setup:h,setupView:m,state:r}}function E_(o){const t=new BA(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function d(x){r.push(x)}function h(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function FA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new E_(o),t.set(l,[h])):u>=d.length?(h=new E_(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const IA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HA=`uniform sampler2D shadow_pass;
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
}`;function GA(o,t,i){let r=new Dh;const l=new Ut,u=new Ut,d=new Vt,h=new cM({depthPacking:sS}),m=new uM,p={},x=i.maxTextureSize,_={[ka]:Hn,[Hn]:ka,[na]:na},y=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:IA,fragmentShader:HA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new oa;A.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new aa(A,y),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U_;let g=this.type;this.render=function(O,I,Q){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||O.length===0)return;const U=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),le=o.state;le.setBlending(Ha),le.buffers.depth.getReversed()?le.buffers.color.setClear(0,0,0,0):le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const se=g!==ta&&this.type===ta,fe=g===ta&&this.type!==ta;for(let _e=0,D=O.length;_e<D;_e++){const K=O[_e],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const ue=q.getFrameExtents();if(l.multiply(ue),u.copy(q.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/ue.x),l.x=u.x*ue.x,q.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/ue.y),l.y=u.y*ue.y,q.mapSize.y=u.y)),q.map===null||se===!0||fe===!0){const N=this.type!==ta?{minFilter:_i,magFilter:_i}:{};q.map!==null&&q.map.dispose(),q.map=new Er(l.x,l.y,N),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const me=q.getViewportCount();for(let N=0;N<me;N++){const ee=q.getViewport(N);d.set(u.x*ee.x,u.y*ee.y,u.x*ee.z,u.y*ee.w),le.viewport(d),q.updateMatrices(K,N),r=q.getFrustum(),L(I,Q,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===ta&&G(q,Q),q.needsUpdate=!1}g=this.type,E.needsUpdate=!1,o.setRenderTarget(U,C,H)};function G(O,I){const Q=t.update(w);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Er(l.x,l.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(I,null,Q,y,w,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(I,null,Q,M,w,null)}function z(O,I,Q,U){let C=null;const H=Q.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)C=H;else if(C=Q.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const le=C.uuid,se=I.uuid;let fe=p[le];fe===void 0&&(fe={},p[le]=fe);let _e=fe[se];_e===void 0&&(_e=C.clone(),fe[se]=_e,I.addEventListener("dispose",j)),C=_e}if(C.visible=I.visible,C.wireframe=I.wireframe,U===ta?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:_[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,Q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=o.properties.get(C);le.light=Q}return C}function L(O,I,Q,U,C){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===ta)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,O.matrixWorld);const se=t.update(O),fe=O.material;if(Array.isArray(fe)){const _e=se.groups;for(let D=0,K=_e.length;D<K;D++){const q=_e[D],ue=fe[q.materialIndex];if(ue&&ue.visible){const me=z(O,ue,U,C);O.onBeforeShadow(o,O,I,Q,se,me,q),o.renderBufferDirect(Q,null,se,me,O,q),O.onAfterShadow(o,O,I,Q,se,me,q)}}}else if(fe.visible){const _e=z(O,fe,U,C);O.onBeforeShadow(o,O,I,Q,se,_e,null),o.renderBufferDirect(Q,null,se,_e,O,null),O.onAfterShadow(o,O,I,Q,se,_e,null)}}const le=O.children;for(let se=0,fe=le.length;se<fe;se++)L(le[se],I,Q,U,C)}function j(O){O.target.removeEventListener("dispose",j);for(const Q in p){const U=p[Q],C=O.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const VA={[Pd]:zd,[Bd]:Hd,[Fd]:Gd,[Ts]:Id,[zd]:Pd,[Hd]:Bd,[Gd]:Fd,[Id]:Ts};function kA(o,t){function i(){let X=!1;const we=new Vt;let Ue=null;const He=new Vt(0,0,0,0);return{setMask:function(Te){Ue!==Te&&!X&&(o.colorMask(Te,Te,Te,Te),Ue=Te)},setLocked:function(Te){X=Te},setClear:function(Te,Se,Ve,rt,Ot){Ot===!0&&(Te*=rt,Se*=rt,Ve*=rt),we.set(Te,Se,Ve,rt),He.equals(we)===!1&&(o.clearColor(Te,Se,Ve,rt),He.copy(we))},reset:function(){X=!1,Ue=null,He.set(-1,0,0,0)}}}function r(){let X=!1,we=!1,Ue=null,He=null,Te=null;return{setReversed:function(Se){if(we!==Se){const Ve=t.get("EXT_clip_control");Se?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),we=Se;const rt=Te;Te=null,this.setClear(rt)}},getReversed:function(){return we},setTest:function(Se){Se?ve(o.DEPTH_TEST):Ie(o.DEPTH_TEST)},setMask:function(Se){Ue!==Se&&!X&&(o.depthMask(Se),Ue=Se)},setFunc:function(Se){if(we&&(Se=VA[Se]),He!==Se){switch(Se){case Pd:o.depthFunc(o.NEVER);break;case zd:o.depthFunc(o.ALWAYS);break;case Bd:o.depthFunc(o.LESS);break;case Ts:o.depthFunc(o.LEQUAL);break;case Fd:o.depthFunc(o.EQUAL);break;case Id:o.depthFunc(o.GEQUAL);break;case Hd:o.depthFunc(o.GREATER);break;case Gd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}He=Se}},setLocked:function(Se){X=Se},setClear:function(Se){Te!==Se&&(we&&(Se=1-Se),o.clearDepth(Se),Te=Se)},reset:function(){X=!1,Ue=null,He=null,Te=null,we=!1}}}function l(){let X=!1,we=null,Ue=null,He=null,Te=null,Se=null,Ve=null,rt=null,Ot=null;return{setTest:function(bt){X||(bt?ve(o.STENCIL_TEST):Ie(o.STENCIL_TEST))},setMask:function(bt){we!==bt&&!X&&(o.stencilMask(bt),we=bt)},setFunc:function(bt,Cn,$n){(Ue!==bt||He!==Cn||Te!==$n)&&(o.stencilFunc(bt,Cn,$n),Ue=bt,He=Cn,Te=$n)},setOp:function(bt,Cn,$n){(Se!==bt||Ve!==Cn||rt!==$n)&&(o.stencilOp(bt,Cn,$n),Se=bt,Ve=Cn,rt=$n)},setLocked:function(bt){X=bt},setClear:function(bt){Ot!==bt&&(o.clearStencil(bt),Ot=bt)},reset:function(){X=!1,we=null,Ue=null,He=null,Te=null,Se=null,Ve=null,rt=null,Ot=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},_={},y=new WeakMap,M=[],A=null,w=!1,E=null,g=null,G=null,z=null,L=null,j=null,O=null,I=new Ct(0,0,0),Q=0,U=!1,C=null,H=null,le=null,se=null,fe=null;const _e=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,K=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),D=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),D=K>=2);let ue=null,me={};const N=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),Ee=new Vt().fromArray(N),Ae=new Vt().fromArray(ee);function J(X,we,Ue,He){const Te=new Uint8Array(4),Se=o.createTexture();o.bindTexture(X,Se),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ve=0;Ve<Ue;Ve++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,He,0,o.RGBA,o.UNSIGNED_BYTE,Te):o.texImage2D(we+Ve,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Te);return Se}const xe={};xe[o.TEXTURE_2D]=J(o.TEXTURE_2D,o.TEXTURE_2D,1),xe[o.TEXTURE_CUBE_MAP]=J(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[o.TEXTURE_2D_ARRAY]=J(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xe[o.TEXTURE_3D]=J(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ve(o.DEPTH_TEST),d.setFunc(Ts),ft(!1),Qe(Ev),ve(o.CULL_FACE),ct(Ha);function ve(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function Ie(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function Le(X,we){return _[X]!==we?(o.bindFramebuffer(X,we),_[X]=we,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=we),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=we),!0):!1}function k(X,we){let Ue=M,He=!1;if(X){Ue=y.get(we),Ue===void 0&&(Ue=[],y.set(we,Ue));const Te=X.textures;if(Ue.length!==Te.length||Ue[0]!==o.COLOR_ATTACHMENT0){for(let Se=0,Ve=Te.length;Se<Ve;Se++)Ue[Se]=o.COLOR_ATTACHMENT0+Se;Ue.length=Te.length,He=!0}}else Ue[0]!==o.BACK&&(Ue[0]=o.BACK,He=!0);He&&o.drawBuffers(Ue)}function Be(X){return A!==X?(o.useProgram(X),A=X,!0):!1}const qe={[_r]:o.FUNC_ADD,[Ly]:o.FUNC_SUBTRACT,[Ny]:o.FUNC_REVERSE_SUBTRACT};qe[Oy]=o.MIN,qe[Py]=o.MAX;const F={[zy]:o.ZERO,[By]:o.ONE,[Fy]:o.SRC_COLOR,[Nd]:o.SRC_ALPHA,[jy]:o.SRC_ALPHA_SATURATE,[Vy]:o.DST_COLOR,[Hy]:o.DST_ALPHA,[Iy]:o.ONE_MINUS_SRC_COLOR,[Od]:o.ONE_MINUS_SRC_ALPHA,[ky]:o.ONE_MINUS_DST_COLOR,[Gy]:o.ONE_MINUS_DST_ALPHA,[Xy]:o.CONSTANT_COLOR,[qy]:o.ONE_MINUS_CONSTANT_COLOR,[Wy]:o.CONSTANT_ALPHA,[Yy]:o.ONE_MINUS_CONSTANT_ALPHA};function ct(X,we,Ue,He,Te,Se,Ve,rt,Ot,bt){if(X===Ha){w===!0&&(Ie(o.BLEND),w=!1);return}if(w===!1&&(ve(o.BLEND),w=!0),X!==Uy){if(X!==E||bt!==U){if((g!==_r||L!==_r)&&(o.blendEquation(o.FUNC_ADD),g=_r,L=_r),bt)switch(X){case Ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bv:o.blendFunc(o.ONE,o.ONE);break;case Tv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Av:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Tv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Av:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}G=null,z=null,j=null,O=null,I.set(0,0,0),Q=0,E=X,U=bt}return}Te=Te||we,Se=Se||Ue,Ve=Ve||He,(we!==g||Te!==L)&&(o.blendEquationSeparate(qe[we],qe[Te]),g=we,L=Te),(Ue!==G||He!==z||Se!==j||Ve!==O)&&(o.blendFuncSeparate(F[Ue],F[He],F[Se],F[Ve]),G=Ue,z=He,j=Se,O=Ve),(rt.equals(I)===!1||Ot!==Q)&&(o.blendColor(rt.r,rt.g,rt.b,Ot),I.copy(rt),Q=Ot),E=X,U=!1}function We(X,we){X.side===na?Ie(o.CULL_FACE):ve(o.CULL_FACE);let Ue=X.side===Hn;we&&(Ue=!Ue),ft(Ue),X.blending===Ms&&X.transparent===!1?ct(Ha):ct(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const He=X.stencilWrite;h.setTest(He),He&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ge(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Ie(o.SAMPLE_ALPHA_TO_COVERAGE)}function ft(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function Qe(X){X!==Cy?(ve(o.CULL_FACE),X!==H&&(X===Ev?o.cullFace(o.BACK):X===Dy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ie(o.CULL_FACE),H=X}function Bt(X){X!==le&&(D&&o.lineWidth(X),le=X)}function Ge(X,we,Ue){X?(ve(o.POLYGON_OFFSET_FILL),(se!==we||fe!==Ue)&&(o.polygonOffset(we,Ue),se=we,fe=Ue)):Ie(o.POLYGON_OFFSET_FILL)}function ot(X){X?ve(o.SCISSOR_TEST):Ie(o.SCISSOR_TEST)}function Jt(X){X===void 0&&(X=o.TEXTURE0+_e-1),ue!==X&&(o.activeTexture(X),ue=X)}function Zt(X,we,Ue){Ue===void 0&&(ue===null?Ue=o.TEXTURE0+_e-1:Ue=ue);let He=me[Ue];He===void 0&&(He={type:void 0,texture:void 0},me[Ue]=He),(He.type!==X||He.texture!==we)&&(ue!==Ue&&(o.activeTexture(Ue),ue=Ue),o.bindTexture(X,we||xe[X]),He.type=X,He.texture=we)}function P(){const X=me[ue];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ie(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ze(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(X){Ee.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Ee.copy(X))}function $e(X){Ae.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Ae.copy(X))}function Fe(X,we){let Ue=p.get(we);Ue===void 0&&(Ue=new WeakMap,p.set(we,Ue));let He=Ue.get(X);He===void 0&&(He=o.getUniformBlockIndex(we,X.name),Ue.set(X,He))}function Ne(X,we){const He=p.get(we).get(X);m.get(we)!==He&&(o.uniformBlockBinding(we,He,X.__bindingPointIndex),m.set(we,He))}function lt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},ue=null,me={},_={},y=new WeakMap,M=[],A=null,w=!1,E=null,g=null,G=null,z=null,L=null,j=null,O=null,I=new Ct(0,0,0),Q=0,U=!1,C=null,H=null,le=null,se=null,fe=null,Ee.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ve,disable:Ie,bindFramebuffer:Le,drawBuffers:k,useProgram:Be,setBlending:ct,setMaterial:We,setFlipSided:ft,setCullFace:Qe,setLineWidth:Bt,setPolygonOffset:Ge,setScissorTest:ot,activeTexture:Jt,bindTexture:Zt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:ie,texImage2D:Ke,texImage3D:Re,updateUBOMapping:Fe,uniformBlockBinding:Ne,texStorage2D:Ce,texStorage3D:Ze,texSubImage2D:pe,texSubImage3D:be,compressedTexSubImage2D:de,compressedTexSubImage3D:Je,scissor:De,viewport:$e,reset:lt}}function jA(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,x=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,b){return M?new OffscreenCanvas(P,b):Pc("canvas")}function w(P,b,ie){let pe=1;const be=Zt(P);if((be.width>ie||be.height>ie)&&(pe=ie/Math.max(be.width,be.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(pe*be.width),Je=Math.floor(pe*be.height);_===void 0&&(_=A(de,Je));const Ce=b?A(de,Je):_;return Ce.width=de,Ce.height=Je,Ce.getContext("2d").drawImage(P,0,0,de,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+de+"x"+Je+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),P;return P}function E(P){return P.generateMipmaps}function g(P){o.generateMipmap(P)}function G(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(P,b,ie,pe,be=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=b;if(b===o.RED&&(ie===o.FLOAT&&(de=o.R32F),ie===o.HALF_FLOAT&&(de=o.R16F),ie===o.UNSIGNED_BYTE&&(de=o.R8)),b===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(de=o.R8UI),ie===o.UNSIGNED_SHORT&&(de=o.R16UI),ie===o.UNSIGNED_INT&&(de=o.R32UI),ie===o.BYTE&&(de=o.R8I),ie===o.SHORT&&(de=o.R16I),ie===o.INT&&(de=o.R32I)),b===o.RG&&(ie===o.FLOAT&&(de=o.RG32F),ie===o.HALF_FLOAT&&(de=o.RG16F),ie===o.UNSIGNED_BYTE&&(de=o.RG8)),b===o.RG_INTEGER&&(ie===o.UNSIGNED_BYTE&&(de=o.RG8UI),ie===o.UNSIGNED_SHORT&&(de=o.RG16UI),ie===o.UNSIGNED_INT&&(de=o.RG32UI),ie===o.BYTE&&(de=o.RG8I),ie===o.SHORT&&(de=o.RG16I),ie===o.INT&&(de=o.RG32I)),b===o.RGB_INTEGER&&(ie===o.UNSIGNED_BYTE&&(de=o.RGB8UI),ie===o.UNSIGNED_SHORT&&(de=o.RGB16UI),ie===o.UNSIGNED_INT&&(de=o.RGB32UI),ie===o.BYTE&&(de=o.RGB8I),ie===o.SHORT&&(de=o.RGB16I),ie===o.INT&&(de=o.RGB32I)),b===o.RGBA_INTEGER&&(ie===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),ie===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),ie===o.UNSIGNED_INT&&(de=o.RGBA32UI),ie===o.BYTE&&(de=o.RGBA8I),ie===o.SHORT&&(de=o.RGBA16I),ie===o.INT&&(de=o.RGBA32I)),b===o.RGB&&ie===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),b===o.RGBA){const Je=be?Nc:wt.getTransfer(pe);ie===o.FLOAT&&(de=o.RGBA32F),ie===o.HALF_FLOAT&&(de=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(de=Je===Gt?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&t.get("EXT_color_buffer_float"),de}function L(P,b){let ie;return P?b===null||b===Mr||b===Bo?ie=o.DEPTH24_STENCIL8:b===ia?ie=o.DEPTH32F_STENCIL8:b===zo&&(ie=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Mr||b===Bo?ie=o.DEPTH_COMPONENT24:b===ia?ie=o.DEPTH_COMPONENT32F:b===zo&&(ie=o.DEPTH_COMPONENT16),ie}function j(P,b){return E(P)===!0||P.isFramebufferTexture&&P.minFilter!==_i&&P.minFilter!==Ri?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function O(P){const b=P.target;b.removeEventListener("dispose",O),Q(b),b.isVideoTexture&&x.delete(b)}function I(P){const b=P.target;b.removeEventListener("dispose",I),C(b)}function Q(P){const b=r.get(P);if(b.__webglInit===void 0)return;const ie=P.source,pe=y.get(ie);if(pe){const be=pe[b.__cacheKey];be.usedTimes--,be.usedTimes===0&&U(P),Object.keys(pe).length===0&&y.delete(ie)}r.remove(P)}function U(P){const b=r.get(P);o.deleteTexture(b.__webglTexture);const ie=P.source,pe=y.get(ie);delete pe[b.__cacheKey],d.memory.textures--}function C(P){const b=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let be=0;be<b.__webglFramebuffer[pe].length;be++)o.deleteFramebuffer(b.__webglFramebuffer[pe][be]);else o.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)o.deleteFramebuffer(b.__webglFramebuffer[pe]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ie=P.textures;for(let pe=0,be=ie.length;pe<be;pe++){const de=r.get(ie[pe]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),d.memory.textures--),r.remove(ie[pe])}r.remove(P)}let H=0;function le(){H=0}function se(){const P=H;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),H+=1,P}function fe(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function _e(P,b){const ie=r.get(P);if(P.isVideoTexture&&ot(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ie.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(ie,P,b);return}}else P.isExternalTexture&&(ie.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+b)}function D(P,b){const ie=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ie.__version!==P.version){xe(ie,P,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+b)}function K(P,b){const ie=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ie.__version!==P.version){xe(ie,P,b);return}i.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+b)}function q(P,b){const ie=r.get(P);if(P.version>0&&ie.__version!==P.version){ve(ie,P,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+b)}const ue={[jd]:o.REPEAT,[yr]:o.CLAMP_TO_EDGE,[Xd]:o.MIRRORED_REPEAT},me={[_i]:o.NEAREST,[aS]:o.NEAREST_MIPMAP_NEAREST,[nc]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[td]:o.LINEAR_MIPMAP_NEAREST,[Sr]:o.LINEAR_MIPMAP_LINEAR},N={[cS]:o.NEVER,[mS]:o.ALWAYS,[uS]:o.LESS,[k_]:o.LEQUAL,[fS]:o.EQUAL,[pS]:o.GEQUAL,[dS]:o.GREATER,[hS]:o.NOTEQUAL};function ee(P,b){if(b.type===ia&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ri||b.magFilter===td||b.magFilter===nc||b.magFilter===Sr||b.minFilter===Ri||b.minFilter===td||b.minFilter===nc||b.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,ue[b.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,ue[b.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,ue[b.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,me[b.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_i||b.minFilter!==nc&&b.minFilter!==Sr||b.type===ia&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ie=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Ee(P,b){let ie=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",O));const pe=b.source;let be=y.get(pe);be===void 0&&(be={},y.set(pe,be));const de=fe(b);if(de!==P.__cacheKey){be[de]===void 0&&(be[de]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),be[de].usedTimes++;const Je=be[P.__cacheKey];Je!==void 0&&(be[P.__cacheKey].usedTimes--,Je.usedTimes===0&&U(b)),P.__cacheKey=de,P.__webglTexture=be[de].texture}return ie}function Ae(P,b,ie){return Math.floor(Math.floor(P/ie)/b)}function J(P,b,ie,pe){const de=P.updateRanges;if(de.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,ie,pe,b.data);else{de.sort((Re,De)=>Re.start-De.start);let Je=0;for(let Re=1;Re<de.length;Re++){const De=de[Je],$e=de[Re],Fe=De.start+De.count,Ne=Ae($e.start,b.width,4),lt=Ae(De.start,b.width,4);$e.start<=Fe+1&&Ne===lt&&Ae($e.start+$e.count-1,b.width,4)===Ne?De.count=Math.max(De.count,$e.start+$e.count-De.start):(++Je,de[Je]=$e)}de.length=Je+1;const Ce=o.getParameter(o.UNPACK_ROW_LENGTH),Ze=o.getParameter(o.UNPACK_SKIP_PIXELS),Ke=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Re=0,De=de.length;Re<De;Re++){const $e=de[Re],Fe=Math.floor($e.start/4),Ne=Math.ceil($e.count/4),lt=Fe%b.width,X=Math.floor(Fe/b.width),we=Ne,Ue=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,lt,X,we,Ue,ie,pe,b.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ce),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ze),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ke)}}function xe(P,b,ie){let pe=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=o.TEXTURE_3D);const be=Ee(P,b),de=b.source;i.bindTexture(pe,P.__webglTexture,o.TEXTURE0+ie);const Je=r.get(de);if(de.version!==Je.__version||be===!0){i.activeTexture(o.TEXTURE0+ie);const Ce=wt.getPrimaries(wt.workingColorSpace),Ze=b.colorSpace===Ia?null:wt.getPrimaries(b.colorSpace),Ke=b.colorSpace===Ia||Ce===Ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Re=w(b.image,!1,l.maxTextureSize);Re=Jt(b,Re);const De=u.convert(b.format,b.colorSpace),$e=u.convert(b.type);let Fe=z(b.internalFormat,De,$e,b.colorSpace,b.isVideoTexture);ee(pe,b);let Ne;const lt=b.mipmaps,X=b.isVideoTexture!==!0,we=Je.__version===void 0||be===!0,Ue=de.dataReady,He=j(b,Re);if(b.isDepthTexture)Fe=L(b.format===Io,b.type),we&&(X?i.texStorage2D(o.TEXTURE_2D,1,Fe,Re.width,Re.height):i.texImage2D(o.TEXTURE_2D,0,Fe,Re.width,Re.height,0,De,$e,null));else if(b.isDataTexture)if(lt.length>0){X&&we&&i.texStorage2D(o.TEXTURE_2D,He,Fe,lt[0].width,lt[0].height);for(let Te=0,Se=lt.length;Te<Se;Te++)Ne=lt[Te],X?Ue&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,De,$e,Ne.data):i.texImage2D(o.TEXTURE_2D,Te,Fe,Ne.width,Ne.height,0,De,$e,Ne.data);b.generateMipmaps=!1}else X?(we&&i.texStorage2D(o.TEXTURE_2D,He,Fe,Re.width,Re.height),Ue&&J(b,Re,De,$e)):i.texImage2D(o.TEXTURE_2D,0,Fe,Re.width,Re.height,0,De,$e,Re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,He,Fe,lt[0].width,lt[0].height,Re.depth);for(let Te=0,Se=lt.length;Te<Se;Te++)if(Ne=lt[Te],b.format!==vi)if(De!==null)if(X){if(Ue)if(b.layerUpdates.size>0){const Ve=$v(Ne.width,Ne.height,b.format,b.type);for(const rt of b.layerUpdates){const Ot=Ne.data.subarray(rt*Ve/Ne.data.BYTES_PER_ELEMENT,(rt+1)*Ve/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,rt,Ne.width,Ne.height,1,De,Ot)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,Re.depth,De,Ne.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Te,Fe,Ne.width,Ne.height,Re.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ue&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,Re.depth,De,$e,Ne.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Te,Fe,Ne.width,Ne.height,Re.depth,0,De,$e,Ne.data)}else{X&&we&&i.texStorage2D(o.TEXTURE_2D,He,Fe,lt[0].width,lt[0].height);for(let Te=0,Se=lt.length;Te<Se;Te++)Ne=lt[Te],b.format!==vi?De!==null?X?Ue&&i.compressedTexSubImage2D(o.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,De,Ne.data):i.compressedTexImage2D(o.TEXTURE_2D,Te,Fe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ue&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,De,$e,Ne.data):i.texImage2D(o.TEXTURE_2D,Te,Fe,Ne.width,Ne.height,0,De,$e,Ne.data)}else if(b.isDataArrayTexture)if(X){if(we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,He,Fe,Re.width,Re.height,Re.depth),Ue)if(b.layerUpdates.size>0){const Te=$v(Re.width,Re.height,b.format,b.type);for(const Se of b.layerUpdates){const Ve=Re.data.subarray(Se*Te/Re.data.BYTES_PER_ELEMENT,(Se+1)*Te/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Se,Re.width,Re.height,1,De,$e,Ve)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,De,$e,Re.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Fe,Re.width,Re.height,Re.depth,0,De,$e,Re.data);else if(b.isData3DTexture)X?(we&&i.texStorage3D(o.TEXTURE_3D,He,Fe,Re.width,Re.height,Re.depth),Ue&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,De,$e,Re.data)):i.texImage3D(o.TEXTURE_3D,0,Fe,Re.width,Re.height,Re.depth,0,De,$e,Re.data);else if(b.isFramebufferTexture){if(we)if(X)i.texStorage2D(o.TEXTURE_2D,He,Fe,Re.width,Re.height);else{let Te=Re.width,Se=Re.height;for(let Ve=0;Ve<He;Ve++)i.texImage2D(o.TEXTURE_2D,Ve,Fe,Te,Se,0,De,$e,null),Te>>=1,Se>>=1}}else if(lt.length>0){if(X&&we){const Te=Zt(lt[0]);i.texStorage2D(o.TEXTURE_2D,He,Fe,Te.width,Te.height)}for(let Te=0,Se=lt.length;Te<Se;Te++)Ne=lt[Te],X?Ue&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,De,$e,Ne):i.texImage2D(o.TEXTURE_2D,Te,Fe,De,$e,Ne);b.generateMipmaps=!1}else if(X){if(we){const Te=Zt(Re);i.texStorage2D(o.TEXTURE_2D,He,Fe,Te.width,Te.height)}Ue&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,De,$e,Re)}else i.texImage2D(o.TEXTURE_2D,0,Fe,De,$e,Re);E(b)&&g(pe),Je.__version=de.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ve(P,b,ie){if(b.image.length!==6)return;const pe=Ee(P,b),be=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+ie);const de=r.get(be);if(be.version!==de.__version||pe===!0){i.activeTexture(o.TEXTURE0+ie);const Je=wt.getPrimaries(wt.workingColorSpace),Ce=b.colorSpace===Ia?null:wt.getPrimaries(b.colorSpace),Ze=b.colorSpace===Ia||Je===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const Ke=b.isCompressedTexture||b.image[0].isCompressedTexture,Re=b.image[0]&&b.image[0].isDataTexture,De=[];for(let Se=0;Se<6;Se++)!Ke&&!Re?De[Se]=w(b.image[Se],!0,l.maxCubemapSize):De[Se]=Re?b.image[Se].image:b.image[Se],De[Se]=Jt(b,De[Se]);const $e=De[0],Fe=u.convert(b.format,b.colorSpace),Ne=u.convert(b.type),lt=z(b.internalFormat,Fe,Ne,b.colorSpace),X=b.isVideoTexture!==!0,we=de.__version===void 0||pe===!0,Ue=be.dataReady;let He=j(b,$e);ee(o.TEXTURE_CUBE_MAP,b);let Te;if(Ke){X&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,He,lt,$e.width,$e.height);for(let Se=0;Se<6;Se++){Te=De[Se].mipmaps;for(let Ve=0;Ve<Te.length;Ve++){const rt=Te[Ve];b.format!==vi?Fe!==null?X?Ue&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,0,0,rt.width,rt.height,Fe,rt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,lt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,0,0,rt.width,rt.height,Fe,Ne,rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,lt,rt.width,rt.height,0,Fe,Ne,rt.data)}}}else{if(Te=b.mipmaps,X&&we){Te.length>0&&He++;const Se=Zt(De[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,He,lt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Re){X?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,De[Se].width,De[Se].height,Fe,Ne,De[Se].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,lt,De[Se].width,De[Se].height,0,Fe,Ne,De[Se].data);for(let Ve=0;Ve<Te.length;Ve++){const Ot=Te[Ve].image[Se].image;X?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,0,0,Ot.width,Ot.height,Fe,Ne,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,lt,Ot.width,Ot.height,0,Fe,Ne,Ot.data)}}else{X?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Fe,Ne,De[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,lt,Fe,Ne,De[Se]);for(let Ve=0;Ve<Te.length;Ve++){const rt=Te[Ve];X?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,0,0,Fe,Ne,rt.image[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,lt,Fe,Ne,rt.image[Se])}}}E(b)&&g(o.TEXTURE_CUBE_MAP),de.__version=be.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ie(P,b,ie,pe,be,de){const Je=u.convert(ie.format,ie.colorSpace),Ce=u.convert(ie.type),Ze=z(ie.internalFormat,Je,Ce,ie.colorSpace),Ke=r.get(b),Re=r.get(ie);if(Re.__renderTarget=b,!Ke.__hasExternalTextures){const De=Math.max(1,b.width>>de),$e=Math.max(1,b.height>>de);be===o.TEXTURE_3D||be===o.TEXTURE_2D_ARRAY?i.texImage3D(be,de,Ze,De,$e,b.depth,0,Je,Ce,null):i.texImage2D(be,de,Ze,De,$e,0,Je,Ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Ge(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,be,Re.__webglTexture,0,Bt(b)):(be===o.TEXTURE_2D||be>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,be,Re.__webglTexture,de),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(P,b,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,P),b.depthBuffer){const pe=b.depthTexture,be=pe&&pe.isDepthTexture?pe.type:null,de=L(b.stencilBuffer,be),Je=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=Bt(b);Ge(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ce,de,b.width,b.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ce,de,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,de,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Je,o.RENDERBUFFER,P)}else{const pe=b.textures;for(let be=0;be<pe.length;be++){const de=pe[be],Je=u.convert(de.format,de.colorSpace),Ce=u.convert(de.type),Ze=z(de.internalFormat,Je,Ce,de.colorSpace),Ke=Bt(b);ie&&Ge(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke,Ze,b.width,b.height):Ge(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ke,Ze,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ze,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function k(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(b.depthTexture);pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_e(b.depthTexture,0);const be=pe.__webglTexture,de=Bt(b);if(b.depthTexture.format===Fo)Ge(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0);else if(b.depthTexture.format===Io)Ge(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function Be(P){const b=r.get(P),ie=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const be=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",be)};pe.addEventListener("dispose",be),b.__depthDisposeCallback=be}b.__boundDepthTexture=pe}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const pe=P.texture.mipmaps;pe&&pe.length>0?k(b.__webglFramebuffer[0],P):k(b.__webglFramebuffer,P)}else if(ie){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=o.createRenderbuffer(),Le(b.__webglDepthbuffer[pe],P,!1);else{const be=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,de)}}else{const pe=P.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Le(b.__webglDepthbuffer,P,!1);else{const be=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,de)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function qe(P,b,ie){const pe=r.get(P);b!==void 0&&Ie(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&Be(P)}function F(P){const b=P.texture,ie=r.get(P),pe=r.get(b);P.addEventListener("dispose",I);const be=P.textures,de=P.isWebGLCubeRenderTarget===!0,Je=be.length>1;if(Je||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=b.version,d.memory.textures++),de){ie.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer[Ce]=[];for(let Ze=0;Ze<b.mipmaps.length;Ze++)ie.__webglFramebuffer[Ce][Ze]=o.createFramebuffer()}else ie.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)ie.__webglFramebuffer[Ce]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(Je)for(let Ce=0,Ze=be.length;Ce<Ze;Ce++){const Ke=r.get(be[Ce]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=o.createTexture(),d.memory.textures++)}if(P.samples>0&&Ge(P)===!1){ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ce=0;Ce<be.length;Ce++){const Ze=be[Ce];ie.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce]);const Ke=u.convert(Ze.format,Ze.colorSpace),Re=u.convert(Ze.type),De=z(Ze.internalFormat,Ke,Re,Ze.colorSpace,P.isXRRenderTarget===!0),$e=Bt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,$e,De,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),Le(ie.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ee(o.TEXTURE_CUBE_MAP,b);for(let Ce=0;Ce<6;Ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ze=0;Ze<b.mipmaps.length;Ze++)Ie(ie.__webglFramebuffer[Ce][Ze],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ze);else Ie(ie.__webglFramebuffer[Ce],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);E(b)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Je){for(let Ce=0,Ze=be.length;Ce<Ze;Ce++){const Ke=be[Ce],Re=r.get(Ke);let De=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(De=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,Re.__webglTexture),ee(De,Ke),Ie(ie.__webglFramebuffer,P,Ke,o.COLOR_ATTACHMENT0+Ce,De,0),E(Ke)&&g(De)}i.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,pe.__webglTexture),ee(Ce,b),b.mipmaps&&b.mipmaps.length>0)for(let Ze=0;Ze<b.mipmaps.length;Ze++)Ie(ie.__webglFramebuffer[Ze],P,b,o.COLOR_ATTACHMENT0,Ce,Ze);else Ie(ie.__webglFramebuffer,P,b,o.COLOR_ATTACHMENT0,Ce,0);E(b)&&g(Ce),i.unbindTexture()}P.depthBuffer&&Be(P)}function ct(P){const b=P.textures;for(let ie=0,pe=b.length;ie<pe;ie++){const be=b[ie];if(E(be)){const de=G(P),Je=r.get(be).__webglTexture;i.bindTexture(de,Je),g(de),i.unbindTexture()}}}const We=[],ft=[];function Qe(P){if(P.samples>0){if(Ge(P)===!1){const b=P.textures,ie=P.width,pe=P.height;let be=o.COLOR_BUFFER_BIT;const de=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Je=r.get(P),Ce=b.length>1;if(Ce)for(let Ke=0;Ke<b.length;Ke++)i.bindFramebuffer(o.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);const Ze=P.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let Ke=0;Ke<b.length;Ke++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(be|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(be|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Je.__webglColorRenderbuffer[Ke]);const Re=r.get(b[Ke]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Re,0)}o.blitFramebuffer(0,0,ie,pe,0,0,ie,pe,be,o.NEAREST),m===!0&&(We.length=0,ft.length=0,We.push(o.COLOR_ATTACHMENT0+Ke),P.depthBuffer&&P.resolveDepthBuffer===!1&&(We.push(de),ft.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ft)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,We))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let Ke=0;Ke<b.length;Ke++){i.bindFramebuffer(o.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.RENDERBUFFER,Je.__webglColorRenderbuffer[Ke]);const Re=r.get(b[Ke]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ke,o.TEXTURE_2D,Re,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Bt(P){return Math.min(l.maxSamples,P.samples)}function Ge(P){const b=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ot(P){const b=d.render.frame;x.get(P)!==b&&(x.set(P,b),P.update())}function Jt(P,b){const ie=P.colorSpace,pe=P.format,be=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ie!==ws&&ie!==Ia&&(wt.getTransfer(ie)===Gt?(pe!==vi||be!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),b}function Zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=le,this.setTexture2D=_e,this.setTexture2DArray=D,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=qe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ge}function XA(o,t){function i(r,l=Ia){let u;const d=wt.getTransfer(l);if(r===Di)return o.UNSIGNED_BYTE;if(r===Mh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Eh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===B_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===P_)return o.BYTE;if(r===z_)return o.SHORT;if(r===zo)return o.UNSIGNED_SHORT;if(r===Sh)return o.INT;if(r===Mr)return o.UNSIGNED_INT;if(r===ia)return o.FLOAT;if(r===Go)return o.HALF_FLOAT;if(r===F_)return o.ALPHA;if(r===I_)return o.RGB;if(r===vi)return o.RGBA;if(r===Fo)return o.DEPTH_COMPONENT;if(r===Io)return o.DEPTH_STENCIL;if(r===H_)return o.RED;if(r===bh)return o.RED_INTEGER;if(r===G_)return o.RG;if(r===Th)return o.RG_INTEGER;if(r===Ah)return o.RGBA_INTEGER;if(r===Rc||r===wc||r===Cc||r===Dc)if(d===Gt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Rc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Rc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qd||r===Wd||r===Yd||r===Zd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===qd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kd||r===Qd||r===Jd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Kd||r===Qd)return d===Gt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Jd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$d||r===eh||r===th||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===$d)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===eh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===th)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ih)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ah)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===oh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ch)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===uh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uc||r===hh||r===ph)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Uc)return d===Gt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ph)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===V_||r===mh||r===gh||r===vh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Uc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===mh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class u0 extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const qA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WA=`
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

}`;class YA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new u0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ja({vertexShader:qA,fragmentShader:WA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new aa(new Hc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZA extends Ds{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,_=null,y=null,M=null,A=null;const w=new YA,E={},g=i.getContextAttributes();let G=null,z=null;const L=[],j=[],O=new Ut;let I=null;const Q=new Jn;Q.viewport=new Vt;const U=new Jn;U.viewport=new Vt;const C=[Q,U],H=new gM;let le=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let xe=L[J];return xe===void 0&&(xe=new Md,L[J]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(J){let xe=L[J];return xe===void 0&&(xe=new Md,L[J]=xe),xe.getGripSpace()},this.getHand=function(J){let xe=L[J];return xe===void 0&&(xe=new Md,L[J]=xe),xe.getHandSpace()};function fe(J){const xe=j.indexOf(J.inputSource);if(xe===-1)return;const ve=L[xe];ve!==void 0&&(ve.update(J.inputSource,J.frame,p||d),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function _e(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",_e),l.removeEventListener("inputsourceschange",D);for(let J=0;J<L.length;J++){const xe=j[J];xe!==null&&(j[J]=null,L[J].disconnect(xe))}le=null,se=null,w.reset();for(const J in E)delete E[J];t.setRenderTarget(G),M=null,y=null,_=null,l=null,z=null,Ae.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(G=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",_e),l.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(O),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ie=null,Le=null;g.depth&&(Le=g.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ve=g.stencil?Io:Fo,Ie=g.stencil?Bo:Mr);const k={colorFormat:i.RGBA8,depthFormat:Le,scaleFactor:u};y=_.createProjectionLayer(k),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),z=new Er(y.textureWidth,y.textureHeight,{format:vi,type:Di,depthTexture:new n0(y.textureWidth,y.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ve={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ve),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Er(M.framebufferWidth,M.framebufferHeight,{format:vi,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ae.setContext(l),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function D(J){for(let xe=0;xe<J.removed.length;xe++){const ve=J.removed[xe],Ie=j.indexOf(ve);Ie>=0&&(j[Ie]=null,L[Ie].disconnect(ve))}for(let xe=0;xe<J.added.length;xe++){const ve=J.added[xe];let Ie=j.indexOf(ve);if(Ie===-1){for(let k=0;k<L.length;k++)if(k>=j.length){j.push(ve),Ie=k;break}else if(j[k]===null){j[k]=ve,Ie=k;break}if(Ie===-1)break}const Le=L[Ie];Le&&Le.connect(ve)}}const K=new $,q=new $;function ue(J,xe,ve){K.setFromMatrixPosition(xe.matrixWorld),q.setFromMatrixPosition(ve.matrixWorld);const Ie=K.distanceTo(q),Le=xe.projectionMatrix.elements,k=ve.projectionMatrix.elements,Be=Le[14]/(Le[10]-1),qe=Le[14]/(Le[10]+1),F=(Le[9]+1)/Le[5],ct=(Le[9]-1)/Le[5],We=(Le[8]-1)/Le[0],ft=(k[8]+1)/k[0],Qe=Be*We,Bt=Be*ft,Ge=Ie/(-We+ft),ot=Ge*-We;if(xe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ot),J.translateZ(Ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Le[10]===-1)J.projectionMatrix.copy(xe.projectionMatrix),J.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Jt=Be+Ge,Zt=qe+Ge,P=Qe-ot,b=Bt+(Ie-ot),ie=F*qe/Zt*Jt,pe=ct*qe/Zt*Jt;J.projectionMatrix.makePerspective(P,b,ie,pe,Jt,Zt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function me(J,xe){xe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(xe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let xe=J.near,ve=J.far;w.texture!==null&&(w.depthNear>0&&(xe=w.depthNear),w.depthFar>0&&(ve=w.depthFar)),H.near=U.near=Q.near=xe,H.far=U.far=Q.far=ve,(le!==H.near||se!==H.far)&&(l.updateRenderState({depthNear:H.near,depthFar:H.far}),le=H.near,se=H.far),H.layers.mask=J.layers.mask|6,Q.layers.mask=H.layers.mask&3,U.layers.mask=H.layers.mask&5;const Ie=J.parent,Le=H.cameras;me(H,Ie);for(let k=0;k<Le.length;k++)me(Le[k],Ie);Le.length===2?ue(H,Q,U):H.projectionMatrix.copy(Q.projectionMatrix),N(J,H,Ie)};function N(J,xe,ve){ve===null?J.matrix.copy(xe.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(xe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(xe.projectionMatrix),J.projectionMatrixInverse.copy(xe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ho*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(J){m=J,y!==null&&(y.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(H)},this.getCameraTexture=function(J){return E[J]};let ee=null;function Ee(J,xe){if(x=xe.getViewerPose(p||d),A=xe,x!==null){const ve=x.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let Ie=!1;ve.length!==H.cameras.length&&(H.cameras.length=0,Ie=!0);for(let qe=0;qe<ve.length;qe++){const F=ve[qe];let ct=null;if(M!==null)ct=M.getViewport(F);else{const ft=_.getViewSubImage(y,F);ct=ft.viewport,qe===0&&(t.setRenderTargetTextures(z,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(z))}let We=C[qe];We===void 0&&(We=new Jn,We.layers.enable(qe),We.viewport=new Vt,C[qe]=We),We.matrix.fromArray(F.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(F.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ct.x,ct.y,ct.width,ct.height),qe===0&&(H.matrix.copy(We.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ie===!0&&H.cameras.push(We)}const Le=l.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const qe=_.getDepthInformation(ve[0]);qe&&qe.isValid&&qe.texture&&w.init(qe,l.renderState)}if(Le&&Le.includes("camera-access")&&(t.state.unbindTexture(),_))for(let qe=0;qe<ve.length;qe++){const F=ve[qe].camera;if(F){let ct=E[F];ct||(ct=new u0,E[F]=ct);const We=_.getCameraImage(F);ct.sourceTexture=We}}}for(let ve=0;ve<L.length;ve++){const Ie=j[ve],Le=L[ve];Ie!==null&&Le!==void 0&&Le.update(Ie,xe,p||d)}ee&&ee(J,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),A=null}const Ae=new r0;Ae.setAnimationLoop(Ee),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const mr=new sa,KA=new Qt;function QA(o,t){function i(E,g){E.matrixAutoUpdate===!0&&E.updateMatrix(),g.value.copy(E.matrix)}function r(E,g){g.color.getRGB(E.fogColor.value,J_(o)),g.isFog?(E.fogNear.value=g.near,E.fogFar.value=g.far):g.isFogExp2&&(E.fogDensity.value=g.density)}function l(E,g,G,z,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(E,g):g.isMeshToonMaterial?(u(E,g),_(E,g)):g.isMeshPhongMaterial?(u(E,g),x(E,g)):g.isMeshStandardMaterial?(u(E,g),y(E,g),g.isMeshPhysicalMaterial&&M(E,g,L)):g.isMeshMatcapMaterial?(u(E,g),A(E,g)):g.isMeshDepthMaterial?u(E,g):g.isMeshDistanceMaterial?(u(E,g),w(E,g)):g.isMeshNormalMaterial?u(E,g):g.isLineBasicMaterial?(d(E,g),g.isLineDashedMaterial&&h(E,g)):g.isPointsMaterial?m(E,g,G,z):g.isSpriteMaterial?p(E,g):g.isShadowMaterial?(E.color.value.copy(g.color),E.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(E,g){E.opacity.value=g.opacity,g.color&&E.diffuse.value.copy(g.color),g.emissive&&E.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(E.map.value=g.map,i(g.map,E.mapTransform)),g.alphaMap&&(E.alphaMap.value=g.alphaMap,i(g.alphaMap,E.alphaMapTransform)),g.bumpMap&&(E.bumpMap.value=g.bumpMap,i(g.bumpMap,E.bumpMapTransform),E.bumpScale.value=g.bumpScale,g.side===Hn&&(E.bumpScale.value*=-1)),g.normalMap&&(E.normalMap.value=g.normalMap,i(g.normalMap,E.normalMapTransform),E.normalScale.value.copy(g.normalScale),g.side===Hn&&E.normalScale.value.negate()),g.displacementMap&&(E.displacementMap.value=g.displacementMap,i(g.displacementMap,E.displacementMapTransform),E.displacementScale.value=g.displacementScale,E.displacementBias.value=g.displacementBias),g.emissiveMap&&(E.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,E.emissiveMapTransform)),g.specularMap&&(E.specularMap.value=g.specularMap,i(g.specularMap,E.specularMapTransform)),g.alphaTest>0&&(E.alphaTest.value=g.alphaTest);const G=t.get(g),z=G.envMap,L=G.envMapRotation;z&&(E.envMap.value=z,mr.copy(L),mr.x*=-1,mr.y*=-1,mr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),E.envMapRotation.value.setFromMatrix4(KA.makeRotationFromEuler(mr)),E.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=g.reflectivity,E.ior.value=g.ior,E.refractionRatio.value=g.refractionRatio),g.lightMap&&(E.lightMap.value=g.lightMap,E.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,E.lightMapTransform)),g.aoMap&&(E.aoMap.value=g.aoMap,E.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,E.aoMapTransform))}function d(E,g){E.diffuse.value.copy(g.color),E.opacity.value=g.opacity,g.map&&(E.map.value=g.map,i(g.map,E.mapTransform))}function h(E,g){E.dashSize.value=g.dashSize,E.totalSize.value=g.dashSize+g.gapSize,E.scale.value=g.scale}function m(E,g,G,z){E.diffuse.value.copy(g.color),E.opacity.value=g.opacity,E.size.value=g.size*G,E.scale.value=z*.5,g.map&&(E.map.value=g.map,i(g.map,E.uvTransform)),g.alphaMap&&(E.alphaMap.value=g.alphaMap,i(g.alphaMap,E.alphaMapTransform)),g.alphaTest>0&&(E.alphaTest.value=g.alphaTest)}function p(E,g){E.diffuse.value.copy(g.color),E.opacity.value=g.opacity,E.rotation.value=g.rotation,g.map&&(E.map.value=g.map,i(g.map,E.mapTransform)),g.alphaMap&&(E.alphaMap.value=g.alphaMap,i(g.alphaMap,E.alphaMapTransform)),g.alphaTest>0&&(E.alphaTest.value=g.alphaTest)}function x(E,g){E.specular.value.copy(g.specular),E.shininess.value=Math.max(g.shininess,1e-4)}function _(E,g){g.gradientMap&&(E.gradientMap.value=g.gradientMap)}function y(E,g){E.metalness.value=g.metalness,g.metalnessMap&&(E.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,E.metalnessMapTransform)),E.roughness.value=g.roughness,g.roughnessMap&&(E.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,E.roughnessMapTransform)),g.envMap&&(E.envMapIntensity.value=g.envMapIntensity)}function M(E,g,G){E.ior.value=g.ior,g.sheen>0&&(E.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),E.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(E.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,E.sheenColorMapTransform)),g.sheenRoughnessMap&&(E.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,E.sheenRoughnessMapTransform))),g.clearcoat>0&&(E.clearcoat.value=g.clearcoat,E.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(E.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,E.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(E.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Hn&&E.clearcoatNormalScale.value.negate())),g.dispersion>0&&(E.dispersion.value=g.dispersion),g.iridescence>0&&(E.iridescence.value=g.iridescence,E.iridescenceIOR.value=g.iridescenceIOR,E.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(E.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,E.iridescenceMapTransform)),g.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),g.transmission>0&&(E.transmission.value=g.transmission,E.transmissionSamplerMap.value=G.texture,E.transmissionSamplerSize.value.set(G.width,G.height),g.transmissionMap&&(E.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,E.transmissionMapTransform)),E.thickness.value=g.thickness,g.thicknessMap&&(E.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=g.attenuationDistance,E.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(E.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(E.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=g.specularIntensity,E.specularColor.value.copy(g.specularColor),g.specularColorMap&&(E.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,E.specularColorMapTransform)),g.specularIntensityMap&&(E.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,E.specularIntensityMapTransform))}function A(E,g){g.matcap&&(E.matcap.value=g.matcap)}function w(E,g){const G=t.get(g).light;E.referencePosition.value.setFromMatrixPosition(G.matrixWorld),E.nearDistance.value=G.shadow.camera.near,E.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function JA(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(G,z){const L=z.program;r.uniformBlockBinding(G,L)}function p(G,z){let L=l[G.id];L===void 0&&(A(G),L=x(G),l[G.id]=L,G.addEventListener("dispose",E));const j=z.program;r.updateUBOMapping(G,j);const O=t.render.frame;u[G.id]!==O&&(y(G),u[G.id]=O)}function x(G){const z=_();G.__bindingPointIndex=z;const L=o.createBuffer(),j=G.__size,O=G.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,j,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,L),L}function _(){for(let G=0;G<h;G++)if(d.indexOf(G)===-1)return d.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(G){const z=l[G.id],L=G.uniforms,j=G.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let O=0,I=L.length;O<I;O++){const Q=Array.isArray(L[O])?L[O]:[L[O]];for(let U=0,C=Q.length;U<C;U++){const H=Q[U];if(M(H,O,U,j)===!0){const le=H.__offset,se=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let _e=0;_e<se.length;_e++){const D=se[_e],K=w(D);typeof D=="number"||typeof D=="boolean"?(H.__data[0]=D,o.bufferSubData(o.UNIFORM_BUFFER,le+fe,H.__data)):D.isMatrix3?(H.__data[0]=D.elements[0],H.__data[1]=D.elements[1],H.__data[2]=D.elements[2],H.__data[3]=0,H.__data[4]=D.elements[3],H.__data[5]=D.elements[4],H.__data[6]=D.elements[5],H.__data[7]=0,H.__data[8]=D.elements[6],H.__data[9]=D.elements[7],H.__data[10]=D.elements[8],H.__data[11]=0):(D.toArray(H.__data,fe),fe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(G,z,L,j){const O=G.value,I=z+"_"+L;if(j[I]===void 0)return typeof O=="number"||typeof O=="boolean"?j[I]=O:j[I]=O.clone(),!0;{const Q=j[I];if(typeof O=="number"||typeof O=="boolean"){if(Q!==O)return j[I]=O,!0}else if(Q.equals(O)===!1)return Q.copy(O),!0}return!1}function A(G){const z=G.uniforms;let L=0;const j=16;for(let I=0,Q=z.length;I<Q;I++){const U=Array.isArray(z[I])?z[I]:[z[I]];for(let C=0,H=U.length;C<H;C++){const le=U[C],se=Array.isArray(le.value)?le.value:[le.value];for(let fe=0,_e=se.length;fe<_e;fe++){const D=se[fe],K=w(D),q=L%j,ue=q%K.boundary,me=q+ue;L+=ue,me!==0&&j-me<K.storage&&(L+=j-me),le.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=L,L+=K.storage}}}const O=L%j;return O>0&&(L+=j-O),G.__size=L,G.__cache={},this}function w(G){const z={boundary:0,storage:0};return typeof G=="number"||typeof G=="boolean"?(z.boundary=4,z.storage=4):G.isVector2?(z.boundary=8,z.storage=8):G.isVector3||G.isColor?(z.boundary=16,z.storage=12):G.isVector4?(z.boundary=16,z.storage=16):G.isMatrix3?(z.boundary=48,z.storage=48):G.isMatrix4?(z.boundary=64,z.storage=64):G.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G),z}function E(G){const z=G.target;z.removeEventListener("dispose",E);const L=d.indexOf(z.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete u[z.id]}function g(){for(const G in l)o.deleteBuffer(l[G]);d=[],l={},u={}}return{bind:m,update:p,dispose:g}}class $A{constructor(t={}){const{canvas:i=LS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=new Uint32Array(4),w=new Int32Array(4);let E=null,g=null;const G=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let j=!1;this._outputColorSpace=ci;let O=0,I=0,Q=null,U=-1,C=null;const H=new Vt,le=new Vt;let se=null;const fe=new Ct(0);let _e=0,D=i.width,K=i.height,q=1,ue=null,me=null;const N=new Vt(0,0,D,K),ee=new Vt(0,0,D,K);let Ee=!1;const Ae=new Dh;let J=!1,xe=!1;const ve=new Qt,Ie=new $,Le=new Vt,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function qe(){return Q===null?q:1}let F=r;function ct(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yh}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",He,!1),i.addEventListener("webglcontextcreationerror",Te,!1),F===null){const W="webgl2";if(F=ct(W,R),F===null)throw ct(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let We,ft,Qe,Bt,Ge,ot,Jt,Zt,P,b,ie,pe,be,de,Je,Ce,Ze,Ke,Re,De,$e,Fe,Ne,lt;function X(){We=new cT(F),We.init(),Fe=new XA(F,We),ft=new nT(F,We,t,Fe),Qe=new kA(F,We),ft.reversedDepthBuffer&&y&&Qe.buffers.depth.setReversed(!0),Bt=new dT(F),Ge=new DA,ot=new jA(F,We,Qe,Ge,ft,Fe,Bt),Jt=new aT(L),Zt=new lT(L),P=new _M(F),Ne=new eT(F,P),b=new uT(F,P,Bt,Ne),ie=new pT(F,b,P,Bt),Re=new hT(F,ft,ot),Ce=new iT(Ge),pe=new CA(L,Jt,Zt,We,ft,Ne,Ce),be=new QA(L,Ge),de=new LA,Je=new FA(We),Ke=new $b(L,Jt,Zt,Qe,ie,M,m),Ze=new GA(L,ie,ft),lt=new JA(F,Bt,ft,Qe),De=new tT(F,We,Bt),$e=new fT(F,We,Bt),Bt.programs=pe.programs,L.capabilities=ft,L.extensions=We,L.properties=Ge,L.renderLists=de,L.shadowMap=Ze,L.state=Qe,L.info=Bt}X();const we=new ZA(L,F);this.xr=we,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=We.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=We.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(D,K,!1))},this.getSize=function(R){return R.set(D,K)},this.setSize=function(R,W,re=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=R,K=W,i.width=Math.floor(R*q),i.height=Math.floor(W*q),re===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(D*q,K*q).floor()},this.setDrawingBufferSize=function(R,W,re){D=R,K=W,q=re,i.width=Math.floor(R*re),i.height=Math.floor(W*re),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,W,re,oe){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,W,re,oe),Qe.viewport(H.copy(N).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,W,re,oe){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,W,re,oe),Qe.scissor(le.copy(ee).multiplyScalar(q).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){Qe.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){me=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,re=!0){let oe=0;if(R){let Y=!1;if(Q!==null){const Me=Q.texture.format;Y=Me===Ah||Me===Th||Me===bh}if(Y){const Me=Q.texture.type,Oe=Me===Di||Me===Mr||Me===zo||Me===Bo||Me===Mh||Me===Eh,je=Ke.getClearColor(),ze=Ke.getClearAlpha(),et=je.r,at=je.g,tt=je.b;Oe?(A[0]=et,A[1]=at,A[2]=tt,A[3]=ze,F.clearBufferuiv(F.COLOR,0,A)):(w[0]=et,w[1]=at,w[2]=tt,w[3]=ze,F.clearBufferiv(F.COLOR,0,w))}else oe|=F.COLOR_BUFFER_BIT}W&&(oe|=F.DEPTH_BUFFER_BIT),re&&(oe|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",He,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Ke.dispose(),de.dispose(),Je.dispose(),Ge.dispose(),Jt.dispose(),Zt.dispose(),ie.dispose(),Ne.dispose(),lt.dispose(),pe.dispose(),we.dispose(),we.removeEventListener("sessionstart",$n),we.removeEventListener("sessionend",Ns),xi.stop()};function Ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const R=Bt.autoReset,W=Ze.enabled,re=Ze.autoUpdate,oe=Ze.needsUpdate,Y=Ze.type;X(),Bt.autoReset=R,Ze.enabled=W,Ze.autoUpdate=re,Ze.needsUpdate=oe,Ze.type=Y}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Se(R){const W=R.target;W.removeEventListener("dispose",Se),Ve(W)}function Ve(R){rt(R),Ge.remove(R)}function rt(R){const W=Ge.get(R).programs;W!==void 0&&(W.forEach(function(re){pe.releaseProgram(re)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,re,oe,Y,Me){W===null&&(W=k);const Oe=Y.isMesh&&Y.matrixWorld.determinant()<0,je=la(R,W,re,oe,Y);Qe.setMaterial(oe,Oe);let ze=re.index,et=1;if(oe.wireframe===!0){if(ze=b.getWireframeAttribute(re),ze===void 0)return;et=2}const at=re.drawRange,tt=re.attributes.position;let mt=at.start*et,Lt=(at.start+at.count)*et;Me!==null&&(mt=Math.max(mt,Me.start*et),Lt=Math.min(Lt,(Me.start+Me.count)*et)),ze!==null?(mt=Math.max(mt,0),Lt=Math.min(Lt,ze.count)):tt!=null&&(mt=Math.max(mt,0),Lt=Math.min(Lt,tt.count));const kt=Lt-mt;if(kt<0||kt===1/0)return;Ne.setup(Y,oe,je,re,ze);let Nt,gt=De;if(ze!==null&&(Nt=P.get(ze),gt=$e,gt.setIndex(Nt)),Y.isMesh)oe.wireframe===!0?(Qe.setLineWidth(oe.wireframeLinewidth*qe()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(Y.isLine){let Xe=oe.linewidth;Xe===void 0&&(Xe=1),Qe.setLineWidth(Xe*qe()),Y.isLineSegments?gt.setMode(F.LINES):Y.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else Y.isPoints?gt.setMode(F.POINTS):Y.isSprite&&gt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))gt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xe=Y._multiDrawStarts,Xt=Y._multiDrawCounts,Tt=Y._multiDrawCount,yn=ze?P.get(ze).bytesPerElement:1,Ui=Ge.get(oe).currentProgram.getUniforms();for(let mn=0;mn<Tt;mn++)Ui.setValue(F,"_gl_DrawID",mn),gt.render(Xe[mn]/yn,Xt[mn])}else if(Y.isInstancedMesh)gt.renderInstances(mt,kt,Y.count);else if(re.isInstancedBufferGeometry){const Xe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xt=Math.min(re.instanceCount,Xe);gt.renderInstances(mt,kt,Xt)}else gt.render(mt,kt)};function Ot(R,W,re){R.transparent===!0&&R.side===na&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,Vn(R,W,re),R.side=ka,R.needsUpdate=!0,Vn(R,W,re),R.side=na):Vn(R,W,re)}this.compile=function(R,W,re=null){re===null&&(re=R),g=Je.get(re),g.init(W),z.push(g),re.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),R!==re&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const oe=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Oe=0;Oe<Me.length;Oe++){const je=Me[Oe];Ot(je,re,Y),oe.add(je)}else Ot(Me,re,Y),oe.add(Me)}),g=z.pop(),oe},this.compileAsync=function(R,W,re=null){const oe=this.compile(R,W,re);return new Promise(Y=>{function Me(){if(oe.forEach(function(Oe){Ge.get(Oe).currentProgram.isReady()&&oe.delete(Oe)}),oe.size===0){Y(R);return}setTimeout(Me,10)}We.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let bt=null;function Cn(R){bt&&bt(R)}function $n(){xi.stop()}function Ns(){xi.start()}const xi=new r0;xi.setAnimationLoop(Cn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(R){bt=R,we.setAnimationLoop(R),R===null?xi.stop():xi.start()},we.addEventListener("sessionstart",$n),we.addEventListener("sessionend",Ns),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(W),W=we.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,W,Q),g=Je.get(R,z.length),g.init(W),z.push(g),ve.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ae.setFromProjectionMatrix(ve,wi,W.reversedDepth),xe=this.localClippingEnabled,J=Ce.init(this.clippingPlanes,xe),E=de.get(R,G.length),E.init(),G.push(E),we.enabled===!0&&we.isPresenting===!0){const Me=L.xr.getDepthSensingMesh();Me!==null&&br(Me,W,-1/0,L.sortObjects)}br(R,W,0,L.sortObjects),E.finish(),L.sortObjects===!0&&E.sort(ue,me),Be=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Be&&Ke.addToRenderList(E,R),this.info.render.frame++,J===!0&&Ce.beginShadows();const re=g.state.shadowsArray;Ze.render(re,R,W),J===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=E.opaque,Y=E.transmissive;if(g.setupLights(),W.isArrayCamera){const Me=W.cameras;if(Y.length>0)for(let Oe=0,je=Me.length;Oe<je;Oe++){const ze=Me[Oe];Ar(oe,Y,R,ze)}Be&&Ke.render(R);for(let Oe=0,je=Me.length;Oe<je;Oe++){const ze=Me[Oe];Tr(E,R,ze,ze.viewport)}}else Y.length>0&&Ar(oe,Y,R,W),Be&&Ke.render(R),Tr(E,R,W);Q!==null&&I===0&&(ot.updateMultisampleRenderTarget(Q),ot.updateRenderTargetMipmap(Q)),R.isScene===!0&&R.onAfterRender(L,R,W),Ne.resetDefaultState(),U=-1,C=null,z.pop(),z.length>0?(g=z[z.length-1],J===!0&&Ce.setGlobalState(L.clippingPlanes,g.state.camera)):g=null,G.pop(),G.length>0?E=G[G.length-1]:E=null};function br(R,W,re,oe){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ae.intersectsSprite(R)){oe&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const Oe=ie.update(R),je=R.material;je.visible&&E.push(R,Oe,je,re,Le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ae.intersectsObject(R))){const Oe=ie.update(R),je=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Le.copy(Oe.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(ve)),Array.isArray(je)){const ze=Oe.groups;for(let et=0,at=ze.length;et<at;et++){const tt=ze[et],mt=je[tt.materialIndex];mt&&mt.visible&&E.push(R,Oe,mt,re,Le.z,tt)}}else je.visible&&E.push(R,Oe,je,re,Le.z,null)}}const Me=R.children;for(let Oe=0,je=Me.length;Oe<je;Oe++)br(Me[Oe],W,re,oe)}function Tr(R,W,re,oe){const Y=R.opaque,Me=R.transmissive,Oe=R.transparent;g.setupLightsView(re),J===!0&&Ce.setGlobalState(L.clippingPlanes,re),oe&&Qe.viewport(H.copy(oe)),Y.length>0&&Xa(Y,W,re),Me.length>0&&Xa(Me,W,re),Oe.length>0&&Xa(Oe,W,re),Qe.buffers.depth.setTest(!0),Qe.buffers.depth.setMask(!0),Qe.buffers.color.setMask(!0),Qe.setPolygonOffset(!1)}function Ar(R,W,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[oe.id]===void 0&&(g.state.transmissionRenderTarget[oe.id]=new Er(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Go:Di,minFilter:Sr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Me=g.state.transmissionRenderTarget[oe.id],Oe=oe.viewport||H;Me.setSize(Oe.z*L.transmissionResolutionScale,Oe.w*L.transmissionResolutionScale);const je=L.getRenderTarget(),ze=L.getActiveCubeFace(),et=L.getActiveMipmapLevel();L.setRenderTarget(Me),L.getClearColor(fe),_e=L.getClearAlpha(),_e<1&&L.setClearColor(16777215,.5),L.clear(),Be&&Ke.render(re);const at=L.toneMapping;L.toneMapping=Ga;const tt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),g.setupLightsView(oe),J===!0&&Ce.setGlobalState(L.clippingPlanes,oe),Xa(R,re,oe),ot.updateMultisampleRenderTarget(Me),ot.updateRenderTargetMipmap(Me),We.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Lt=0,kt=W.length;Lt<kt;Lt++){const Nt=W[Lt],gt=Nt.object,Xe=Nt.geometry,Xt=Nt.material,Tt=Nt.group;if(Xt.side===na&&gt.layers.test(oe.layers)){const yn=Xt.side;Xt.side=Hn,Xt.needsUpdate=!0,Os(gt,re,oe,Xe,Xt,Tt),Xt.side=yn,Xt.needsUpdate=!0,mt=!0}}mt===!0&&(ot.updateMultisampleRenderTarget(Me),ot.updateRenderTargetMipmap(Me))}L.setRenderTarget(je,ze,et),L.setClearColor(fe,_e),tt!==void 0&&(oe.viewport=tt),L.toneMapping=at}function Xa(R,W,re){const oe=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Me=R.length;Y<Me;Y++){const Oe=R[Y],je=Oe.object,ze=Oe.geometry,et=Oe.group;let at=Oe.material;at.allowOverride===!0&&oe!==null&&(at=oe),je.layers.test(re.layers)&&Os(je,W,re,ze,at,et)}}function Os(R,W,re,oe,Y,Me){R.onBeforeRender(L,W,re,oe,Y,Me),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(L,W,re,oe,R,Me),Y.transparent===!0&&Y.side===na&&Y.forceSinglePass===!1?(Y.side=Hn,Y.needsUpdate=!0,L.renderBufferDirect(re,W,oe,Y,R,Me),Y.side=ka,Y.needsUpdate=!0,L.renderBufferDirect(re,W,oe,Y,R,Me),Y.side=na):L.renderBufferDirect(re,W,oe,Y,R,Me),R.onAfterRender(L,W,re,oe,Y,Me)}function Vn(R,W,re){W.isScene!==!0&&(W=k);const oe=Ge.get(R),Y=g.state.lights,Me=g.state.shadowsArray,Oe=Y.state.version,je=pe.getParameters(R,Y.state,Me,W,re),ze=pe.getProgramCacheKey(je);let et=oe.programs;oe.environment=R.isMeshStandardMaterial?W.environment:null,oe.fog=W.fog,oe.envMap=(R.isMeshStandardMaterial?Zt:Jt).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",Se),et=new Map,oe.programs=et);let at=et.get(ze);if(at!==void 0){if(oe.currentProgram===at&&oe.lightsStateVersion===Oe)return xn(R,je),at}else je.uniforms=pe.getUniforms(R),R.onBeforeCompile(je,L),at=pe.acquireProgram(je,ze),et.set(ze,at),oe.uniforms=je.uniforms;const tt=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(tt.clippingPlanes=Ce.uniform),xn(R,je),oe.needsLights=Vc(R),oe.lightsStateVersion=Oe,oe.needsLights&&(tt.ambientLightColor.value=Y.state.ambient,tt.lightProbe.value=Y.state.probe,tt.directionalLights.value=Y.state.directional,tt.directionalLightShadows.value=Y.state.directionalShadow,tt.spotLights.value=Y.state.spot,tt.spotLightShadows.value=Y.state.spotShadow,tt.rectAreaLights.value=Y.state.rectArea,tt.ltc_1.value=Y.state.rectAreaLTC1,tt.ltc_2.value=Y.state.rectAreaLTC2,tt.pointLights.value=Y.state.point,tt.pointLightShadows.value=Y.state.pointShadow,tt.hemisphereLights.value=Y.state.hemi,tt.directionalShadowMap.value=Y.state.directionalShadowMap,tt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,tt.spotShadowMap.value=Y.state.spotShadowMap,tt.spotLightMatrix.value=Y.state.spotLightMatrix,tt.spotLightMap.value=Y.state.spotLightMap,tt.pointShadowMap.value=Y.state.pointShadowMap,tt.pointShadowMatrix.value=Y.state.pointShadowMatrix),oe.currentProgram=at,oe.uniformsList=null,at}function rn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Lc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function xn(R,W){const re=Ge.get(R);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function la(R,W,re,oe,Y){W.isScene!==!0&&(W=k),ot.resetTextureUnits();const Me=W.fog,Oe=oe.isMeshStandardMaterial?W.environment:null,je=Q===null?L.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ws,ze=(oe.isMeshStandardMaterial?Zt:Jt).get(oe.envMap||Oe),et=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,at=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),tt=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,Lt=!!re.morphAttributes.color;let kt=Ga;oe.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(kt=L.toneMapping);const Nt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,gt=Nt!==void 0?Nt.length:0,Xe=Ge.get(oe),Xt=g.state.lights;if(J===!0&&(xe===!0||R!==C)){const fn=R===C&&oe.id===U;Ce.setState(oe,R,fn)}let Tt=!1;oe.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Xt.state.version||Xe.outputColorSpace!==je||Y.isBatchedMesh&&Xe.batching===!1||!Y.isBatchedMesh&&Xe.batching===!0||Y.isBatchedMesh&&Xe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Y.isInstancedMesh&&Xe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xe.instancingMorph===!1&&Y.morphTexture!==null||Xe.envMap!==ze||oe.fog===!0&&Xe.fog!==Me||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ce.numPlanes||Xe.numIntersection!==Ce.numIntersection)||Xe.vertexAlphas!==et||Xe.vertexTangents!==at||Xe.morphTargets!==tt||Xe.morphNormals!==mt||Xe.morphColors!==Lt||Xe.toneMapping!==kt||Xe.morphTargetsCount!==gt)&&(Tt=!0):(Tt=!0,Xe.__version=oe.version);let yn=Xe.currentProgram;Tt===!0&&(yn=Vn(oe,W,Y));let Ui=!1,mn=!1,Wa=!1;const xt=yn.getUniforms(),Tn=Xe.uniforms;if(Qe.useProgram(yn.program)&&(Ui=!0,mn=!0,Wa=!0),oe.id!==U&&(U=oe.id,mn=!0),Ui||C!==R){Qe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xt.setValue(F,"projectionMatrix",R.projectionMatrix),xt.setValue(F,"viewMatrix",R.matrixWorldInverse);const tn=xt.map.cameraPosition;tn!==void 0&&tn.setValue(F,Ie.setFromMatrixPosition(R.matrixWorld)),ft.logarithmicDepthBuffer&&xt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&xt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,mn=!0,Wa=!0)}if(Y.isSkinnedMesh){xt.setOptional(F,Y,"bindMatrix"),xt.setOptional(F,Y,"bindMatrixInverse");const fn=Y.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),xt.setValue(F,"boneTexture",fn.boneTexture,ot))}Y.isBatchedMesh&&(xt.setOptional(F,Y,"batchingTexture"),xt.setValue(F,"batchingTexture",Y._matricesTexture,ot),xt.setOptional(F,Y,"batchingIdTexture"),xt.setValue(F,"batchingIdTexture",Y._indirectTexture,ot),xt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&xt.setValue(F,"batchingColorTexture",Y._colorsTexture,ot));const Dn=re.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Re.update(Y,re,yn),(mn||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,xt.setValue(F,"receiveShadow",Y.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Tn.envMap.value=ze,Tn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&W.environment!==null&&(Tn.envMapIntensity.value=W.environmentIntensity),mn&&(xt.setValue(F,"toneMappingExposure",L.toneMappingExposure),Xe.needsLights&&Ps(Tn,Wa),Me&&oe.fog===!0&&be.refreshFogUniforms(Tn,Me),be.refreshMaterialUniforms(Tn,oe,q,K,g.state.transmissionRenderTarget[R.id]),Lc.upload(F,rn(Xe),Tn,ot)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Lc.upload(F,rn(Xe),Tn,ot),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&xt.setValue(F,"center",Y.center),xt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),xt.setValue(F,"normalMatrix",Y.normalMatrix),xt.setValue(F,"modelMatrix",Y.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const fn=oe.uniformsGroups;for(let tn=0,Rr=fn.length;tn<Rr;tn++){const yi=fn[tn];lt.update(yi,yn),lt.bind(yi,yn)}}return yn}function Ps(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Vc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,W,re){const oe=Ge.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),Ge.get(R.texture).__webglTexture=W,Ge.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:re,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const re=Ge.get(R);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0};const kc=F.createFramebuffer();this.setRenderTarget=function(R,W=0,re=0){Q=R,O=W,I=re;let oe=!0,Y=null,Me=!1,Oe=!1;if(R){const ze=Ge.get(R);if(ze.__useDefaultFramebuffer!==void 0)Qe.bindFramebuffer(F.FRAMEBUFFER,null),oe=!1;else if(ze.__webglFramebuffer===void 0)ot.setupRenderTarget(R);else if(ze.__hasExternalTextures)ot.rebindTextures(R,Ge.get(R.texture).__webglTexture,Ge.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const tt=R.depthTexture;if(ze.__boundDepthTexture!==tt){if(tt!==null&&Ge.has(tt)&&(R.width!==tt.image.width||R.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Oe=!0);const at=Ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[W])?Y=at[W][re]:Y=at[W],Me=!0):R.samples>0&&ot.useMultisampledRTT(R)===!1?Y=Ge.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?Y=at[re]:Y=at,H.copy(R.viewport),le.copy(R.scissor),se=R.scissorTest}else H.copy(N).multiplyScalar(q).floor(),le.copy(ee).multiplyScalar(q).floor(),se=Ee;if(re!==0&&(Y=kc),Qe.bindFramebuffer(F.FRAMEBUFFER,Y)&&oe&&Qe.drawBuffers(R,Y),Qe.viewport(H),Qe.scissor(le),Qe.setScissorTest(se),Me){const ze=Ge.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,re)}else if(Oe){const ze=W;for(let et=0;et<R.textures.length;et++){const at=Ge.get(R.textures[et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+et,at.__webglTexture,re,ze)}}else if(R!==null&&re!==0){const ze=Ge.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ze.__webglTexture,re)}U=-1},this.readRenderTargetPixels=function(R,W,re,oe,Y,Me,Oe,je=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){Qe.bindFramebuffer(F.FRAMEBUFFER,ze);try{const et=R.textures[je],at=et.format,tt=et.type;if(!ft.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-oe&&re>=0&&re<=R.height-Y&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+je),F.readPixels(W,re,oe,Y,Fe.convert(at),Fe.convert(tt),Me))}finally{const et=Q!==null?Ge.get(Q).__webglFramebuffer:null;Qe.bindFramebuffer(F.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,W,re,oe,Y,Me,Oe,je=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(W>=0&&W<=R.width-oe&&re>=0&&re<=R.height-Y){Qe.bindFramebuffer(F.FRAMEBUFFER,ze);const et=R.textures[je],at=et.format,tt=et.type;if(!ft.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+je),F.readPixels(W,re,oe,Y,Fe.convert(at),Fe.convert(tt),0);const Lt=Q!==null?Ge.get(Q).__webglFramebuffer:null;Qe.bindFramebuffer(F.FRAMEBUFFER,Lt);const kt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await NS(F,kt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.deleteBuffer(mt),F.deleteSync(kt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,re=0){const oe=Math.pow(2,-re),Y=Math.floor(R.image.width*oe),Me=Math.floor(R.image.height*oe),Oe=W!==null?W.x:0,je=W!==null?W.y:0;ot.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,Oe,je,Y,Me),Qe.unbindTexture()};const qo=F.createFramebuffer(),qa=F.createFramebuffer();this.copyTextureToTexture=function(R,W,re=null,oe=null,Y=0,Me=null){Me===null&&(Y!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=Y,Y=0):Me=0);let Oe,je,ze,et,at,tt,mt,Lt,kt;const Nt=R.isCompressedTexture?R.mipmaps[Me]:R.image;if(re!==null)Oe=re.max.x-re.min.x,je=re.max.y-re.min.y,ze=re.isBox3?re.max.z-re.min.z:1,et=re.min.x,at=re.min.y,tt=re.isBox3?re.min.z:0;else{const Dn=Math.pow(2,-Y);Oe=Math.floor(Nt.width*Dn),je=Math.floor(Nt.height*Dn),R.isDataArrayTexture?ze=Nt.depth:R.isData3DTexture?ze=Math.floor(Nt.depth*Dn):ze=1,et=0,at=0,tt=0}oe!==null?(mt=oe.x,Lt=oe.y,kt=oe.z):(mt=0,Lt=0,kt=0);const gt=Fe.convert(W.format),Xe=Fe.convert(W.type);let Xt;W.isData3DTexture?(ot.setTexture3D(W,0),Xt=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ot.setTexture2DArray(W,0),Xt=F.TEXTURE_2D_ARRAY):(ot.setTexture2D(W,0),Xt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Tt=F.getParameter(F.UNPACK_ROW_LENGTH),yn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ui=F.getParameter(F.UNPACK_SKIP_PIXELS),mn=F.getParameter(F.UNPACK_SKIP_ROWS),Wa=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Nt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,et),F.pixelStorei(F.UNPACK_SKIP_ROWS,at),F.pixelStorei(F.UNPACK_SKIP_IMAGES,tt);const xt=R.isDataArrayTexture||R.isData3DTexture,Tn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Dn=Ge.get(R),fn=Ge.get(W),tn=Ge.get(Dn.__renderTarget),Rr=Ge.get(fn.__renderTarget);Qe.bindFramebuffer(F.READ_FRAMEBUFFER,tn.__webglFramebuffer),Qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let yi=0;yi<ze;yi++)xt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.get(R).__webglTexture,Y,tt+yi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.get(W).__webglTexture,Me,kt+yi)),F.blitFramebuffer(et,at,Oe,je,mt,Lt,Oe,je,F.DEPTH_BUFFER_BIT,F.NEAREST);Qe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||Ge.has(R)){const Dn=Ge.get(R),fn=Ge.get(W);Qe.bindFramebuffer(F.READ_FRAMEBUFFER,qo),Qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,qa);for(let tn=0;tn<ze;tn++)xt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dn.__webglTexture,Y,tt+tn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dn.__webglTexture,Y),Tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fn.__webglTexture,Me,kt+tn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fn.__webglTexture,Me),Y!==0?F.blitFramebuffer(et,at,Oe,je,mt,Lt,Oe,je,F.COLOR_BUFFER_BIT,F.NEAREST):Tn?F.copyTexSubImage3D(Xt,Me,mt,Lt,kt+tn,et,at,Oe,je):F.copyTexSubImage2D(Xt,Me,mt,Lt,et,at,Oe,je);Qe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Qe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Xt,Me,mt,Lt,kt,Oe,je,ze,gt,Xe,Nt.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Xt,Me,mt,Lt,kt,Oe,je,ze,gt,Nt.data):F.texSubImage3D(Xt,Me,mt,Lt,kt,Oe,je,ze,gt,Xe,Nt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,mt,Lt,Oe,je,gt,Xe,Nt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,mt,Lt,Nt.width,Nt.height,gt,Nt.data):F.texSubImage2D(F.TEXTURE_2D,Me,mt,Lt,Oe,je,gt,Xe,Nt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Tt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ui),F.pixelStorei(F.UNPACK_SKIP_ROWS,mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wa),Me===0&&W.generateMipmaps&&F.generateMipmap(Xt),Qe.unbindTexture()},this.copyTextureToTexture3D=function(R,W,re=null,oe=null,Y=0){return Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,re,oe,Y)},this.initRenderTarget=function(R){Ge.get(R).__webglFramebuffer===void 0&&ot.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ot.setTextureCube(R,0):R.isData3DTexture?ot.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ot.setTexture2DArray(R,0):ot.setTexture2D(R,0),Qe.unbindTexture()},this.resetState=function(){O=0,I=0,Q=null,Qe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(t),i.unpackColorSpace=wt._getUnpackColorSpace()}}const f0=""+new URL("combat-vehicle-hangar-B8cOoZvu.png",import.meta.url).href,e1=["WASD move","Mouse drag look","Shift sprint","Space jump","Ctrl crouch","F fire"],b_=[{x:43,y:-1,z:45},{x:57,y:-1,z:44},{x:31,y:2,z:42},{x:69,y:2,z:41}];function t1({codename:o,operatorName:t,role:i,weapons:r,characterArt:l,squad:u}){var y;const d=Kt.useRef(null),h=Kt.useRef({x:-2.75,z:-2.72,y:0,velocityY:0,yaw:Math.PI,crouched:!1,grounded:!0}),m=Kt.useRef({}),p=Kt.useRef({dragging:!1,lastX:0}),[x,_]=Kt.useState({speed:"0.0",stance:"Standing",weapon:((y=r[0])==null?void 0:y[0])??"Primary",event:"Simulation ready"});return Kt.useEffect(()=>{if(!d.current)return;const M=d.current,A=new aM;A.background=null,A.fog=new Ch(725265,12,32);const w=new Jn(58,1,.1,80),E=new $A({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});E.setClearColor(0,0),E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.shadowMap.enabled=!0,E.shadowMap.type=L_,M.appendChild(E.domElement);const g=new fM(10479836,1511954,1.8);A.add(g);const G=new mM(16777215,2.5);G.position.set(5,10,3),G.castShadow=!0,G.shadow.mapSize.set(2048,2048),A.add(G);const z=new hM(8315084,55,10);z.position.set(-4,3.5,2),A.add(z);let L=0,j=performance.now(),O=0;function I(){const D=M.getBoundingClientRect();E.setSize(D.width,D.height,!1),w.aspect=D.width/Math.max(D.height,1),w.updateProjectionMatrix()}function Q(){const D=h.current,K=new $(D.x,D.y+1.45,D.z),q=new $(Math.sin(D.yaw),-.04,Math.cos(D.yaw)).normalize(),ue=K.clone().add(q.multiplyScalar(12)),me=new lM(new oa().setFromPoints([K,ue]),new t0({color:8315084}));A.add(me),window.setTimeout(()=>A.remove(me),95),_(N=>{var ee;return{...N,weapon:((ee=r[0])==null?void 0:ee[0])??N.weapon,event:"Rounds downrange"}})}function U(D){m.current[D.key.toLowerCase()]=!0,D.code==="Space"&&h.current.grounded&&(h.current.velocityY=5.2,h.current.grounded=!1),D.key.toLowerCase()==="f"&&Q(),[" ","w","a","s","d"].includes(D.key.toLowerCase())&&D.preventDefault()}function C(D){m.current[D.key.toLowerCase()]=!1}function H(D){p.current={dragging:!0,lastX:D.clientX},M.setPointerCapture(D.pointerId)}function le(D){if(!p.current.dragging)return;const K=D.clientX-p.current.lastX;p.current.lastX=D.clientX,h.current.yaw-=K*.008}function se(D){p.current.dragging=!1,M.releasePointerCapture(D.pointerId)}function fe(D,K){var Be,qe,F,ct;const q=m.current,ue=h.current,me=navigator.getGamepads?navigator.getGamepads()[0]:null,N=(q.w?1:0)-(q.s?1:0)-((me==null?void 0:me.axes[1])??0),ee=(q.d?1:0)-(q.a?1:0)+((me==null?void 0:me.axes[0])??0),Ee=q.shift||((Be=me==null?void 0:me.buttons[10])==null?void 0:Be.pressed);ue.crouched=q.control||q.c||!!((qe=me==null?void 0:me.buttons[1])!=null&&qe.pressed),me&&Math.abs(me.axes[2]??0)>.08&&(ue.yaw-=(me.axes[2]??0)*D*2.6),(F=me==null?void 0:me.buttons[7])!=null&&F.pressed&&Q();const Ae=Math.min(Math.hypot(N,ee),1),J=ue.crouched?2.2:Ee?6.2:3.7;if(Ae>.02){const We=Math.sin(ue.yaw),ft=Math.cos(ue.yaw);ue.x+=(We*N+ft*ee)*J*D,ue.z+=(ft*N-We*ee)*J*D}ue.x=ic.clamp(ue.x,-8.8,8.8),ue.z=ic.clamp(ue.z,-8.2,7.2);const xe=Math.sin(ue.yaw)*34,ve=ic.clamp(-ue.x*18+xe,-150,150),Ie=ic.clamp(ue.z*7-ue.y*16,-72,72),Le=1.12+Math.min(Math.abs(ue.z+2.72)*.012,.06);M.style.setProperty("--scene-pan-x",`${ve.toFixed(1)}px`),M.style.setProperty("--scene-pan-y",`${Ie.toFixed(1)}px`),M.style.setProperty("--scene-scale",Le.toFixed(3)),ue.velocityY-=13.5*D,ue.y=Math.max(0,ue.y+ue.velocityY*D),ue.y===0&&(ue.velocityY=0,ue.grounded=!0);const k=new $(-Math.sin(ue.yaw)*5.2,3.1,-Math.cos(ue.yaw)*5.2);w.position.lerp(new $(ue.x,ue.y+1.2,ue.z).add(k),.12),w.lookAt(ue.x,ue.y+1.25,ue.z),K-O>180&&(O=K,_({speed:(Ae*J).toFixed(1),stance:ue.crouched?"Crouched":Ee&&Ae>.1?"Sprinting":"Standing",weapon:((ct=r[0])==null?void 0:ct[0])??"Primary",event:Ae>.1?"Movement input active":"Holding position"}))}function _e(D){const K=Math.min((D-j)/1e3,.033);j=D,fe(K,D),E.render(A,w),L=requestAnimationFrame(_e)}return I(),L=requestAnimationFrame(_e),window.addEventListener("resize",I),window.addEventListener("keydown",U),window.addEventListener("keyup",C),M.addEventListener("pointerdown",H),M.addEventListener("pointermove",le),M.addEventListener("pointerup",se),()=>{cancelAnimationFrame(L),window.removeEventListener("resize",I),window.removeEventListener("keydown",U),window.removeEventListener("keyup",C),M.removeEventListener("pointerdown",H),M.removeEventListener("pointermove",le),M.removeEventListener("pointerup",se),E.dispose(),M.removeChild(E.domElement)}},[o,l.front,r]),S.jsxs("section",{className:"section-block simulation-section",id:"simulation",children:[S.jsxs("div",{className:"section-heading",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Playable combat simulation"}),S.jsxs("h2",{children:[o," live movement arena"]})]}),S.jsx("p",{className:"section-note",children:"Move the selected operator beside the mounted-gun combat vehicle inside the realistic hangar scene."})]}),S.jsxs("div",{className:"simulation-shell",children:[S.jsx("div",{className:"simulation-canvas",ref:d,"aria-label":`${t} combat environment`,style:{"--sim-character-art":`url(${l.front})`,"--sim-bg-art":`url(${f0})`,"--scene-pan-x":"0px","--scene-pan-y":"-19px","--scene-scale":"1.12"},children:S.jsx("div",{className:"simulation-squad-layer","aria-label":"Full roster staged in the hangar",children:u.map((M,A)=>{const w=b_[A%b_.length],E=M.codename===o;return S.jsxs("figure",{className:E?"simulation-squad-member selected":"simulation-squad-member",style:{"--squad-x":`${w.x}%`,"--squad-bottom":`${w.y}%`,"--squad-z":w.z},children:[S.jsx("span",{className:"simulation-character-shadow","aria-hidden":"true"}),S.jsx("img",{src:M.art.front,alt:`${M.name} positioned in the hangar scenery`})]},`sim-squad-${M.codename}`)})})}),S.jsxs("aside",{className:"simulation-hud",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Operator"}),S.jsx("h3",{children:t}),S.jsx("span",{children:i})]}),S.jsxs("div",{className:"sim-stat-grid",children:[S.jsxs("span",{children:[S.jsx("small",{children:"Speed"}),S.jsx("strong",{children:x.speed})]}),S.jsxs("span",{children:[S.jsx("small",{children:"Stance"}),S.jsx("strong",{children:x.stance})]}),S.jsxs("span",{children:[S.jsx("small",{children:"Weapon"}),S.jsx("strong",{children:x.weapon})]}),S.jsxs("span",{children:[S.jsx("small",{children:"Event"}),S.jsx("strong",{children:x.event})]})]}),S.jsx("div",{className:"sim-control-list",children:e1.map(M=>S.jsx("span",{children:M},M))})]})]})]})}const n1=""+new URL("aion-prime-home-C4HNHDJK.png",import.meta.url).href,i1=""+new URL("aegis-orb-hires-xVlC5fAS.jpg",import.meta.url).href,a1=""+new URL("bastion-gunner-hires-CVTUK6-W.jpg",import.meta.url).href,r1=""+new URL("dominion-rifleman-hires-BYP7g31p.jpg",import.meta.url).href,s1=""+new URL("hex-sniper-hires-CCGIFgjc.jpg",import.meta.url).href,o1=""+new URL("iron-apostle-hires-TJYtnEFW.jpg",import.meta.url).href,l1=""+new URL("needle-scout-hires-fzvRVVF6.jpg",import.meta.url).href,c1=""+new URL("praetorian-nine-hires-4okPHZi8.jpg",import.meta.url).href,u1=""+new URL("reaper-carrier-hires-2DkUUZq2.jpg",import.meta.url).href,f1=""+new URL("seraph-prime-hires-0ospeCB1.jpg",import.meta.url).href,d1=""+new URL("shade-stalker-hires-DksbQ67S.jpg",import.meta.url).href,h1=""+new URL("signal-warden-hires-CyHMg49M.jpg",import.meta.url).href,p1=""+new URL("vulture-striker-hires-DdBPjLGU.jpg",import.meta.url).href,m1=""+new URL("raptor-lrv2-CBwrI-W1.jpg",import.meta.url).href,g1=""+new URL("rhino-mgv4-Chpebvii.jpg",import.meta.url).href,v1=""+new URL("valkyrie-vt9-CmKiJ9iv.jpg",import.meta.url).href,_1=""+new URL("wraith-str6-B7PtUNKj.jpg",import.meta.url).href,x1=""+new URL("mara-voss-back-cutout-B60mCn99.png",import.meta.url).href,y1=""+new URL("mara-voss-front-cutout-_HJJOHln.png",import.meta.url).href,S1=""+new URL("mara-voss-side-cutout-Bvswx1rg.png",import.meta.url).href,M1=""+new URL("amani-mwangi-back-Dzy---MM.png",import.meta.url).href,E1=""+new URL("amani-mwangi-side-DPt4hc26.png",import.meta.url).href,b1=""+new URL("amani-mwangi-BJtJhSwL.png",import.meta.url).href,T1=""+new URL("amara-okonkwo-back-yf8yjfo5.png",import.meta.url).href,A1=""+new URL("amara-okonkwo-side-nnKOteR9.png",import.meta.url).href,R1=""+new URL("amara-okonkwo-FY_bPxDg.png",import.meta.url).href,w1=""+new URL("diego-rojas-back-B8mK-HUU.png",import.meta.url).href,C1=""+new URL("diego-rojas-side-Bd2jQ2WC.png",import.meta.url).href,D1=""+new URL("diego-rojas-DzEK7ZPh.png",import.meta.url).href,U1=""+new URL("ingrid-solberg-back-D0_9GQrv.png",import.meta.url).href,L1=""+new URL("ingrid-solberg-side-Cc5SK0Uo.png",import.meta.url).href,N1=""+new URL("ingrid-solberg-BRLrXACg.png",import.meta.url).href,O1=""+new URL("jean-paul-desrosiers-back-DJJNf4Z1.png",import.meta.url).href,P1=""+new URL("jean-paul-desrosiers-side-DKEEiZRE.png",import.meta.url).href,z1=""+new URL("jean-paul-desrosiers-x4hMl4pb.png",import.meta.url).href,B1=""+new URL("leila-haddad-back-D5_7-NXM.png",import.meta.url).href,F1=""+new URL("leila-haddad-side-8MRI1PHH.png",import.meta.url).href,I1=""+new URL("leila-haddad-Dxh5h0Ph.png",import.meta.url).href,H1=""+new URL("luca-romano-back-BNFsE0Sx.png",import.meta.url).href,G1=""+new URL("luca-romano-side-Bv7KWuGU.png",import.meta.url).href,V1=""+new URL("luca-romano-BLde7TVd.png",import.meta.url).href,k1=""+new URL("marcus-reed-back-DgwYj6Jw.png",import.meta.url).href,j1=""+new URL("marcus-reed-side-cla8xhVV.png",import.meta.url).href,X1=""+new URL("marcus-reed-r3xB289m.png",import.meta.url).href,q1=""+new URL("mateo-silva-back-DxTsLMOq.png",import.meta.url).href,W1=""+new URL("mateo-silva-side-DJc6NE5x.png",import.meta.url).href,Y1=""+new URL("mateo-silva-5HZKvz0P.png",import.meta.url).href,Z1=""+new URL("mathieu-toussaint-back-qyV5eh2-.png",import.meta.url).href,K1=""+new URL("mathieu-toussaint-side-CH6g55hc.png",import.meta.url).href,Q1=""+new URL("mathieu-toussaint-DDmKt_8S.png",import.meta.url).href,J1=""+new URL("mireya-baptiste-back-B2zAE_tM.png",import.meta.url).href,$1=""+new URL("mireya-baptiste-side-_hx8wxE3.png",import.meta.url).href,eR=""+new URL("mireya-baptiste-UtQZLkcJ.png",import.meta.url).href,tR=""+new URL("nadine-jean-baptiste-back-DjCdWuTk.png",import.meta.url).href,nR=""+new URL("nadine-jean-baptiste-side-DRE5o003.png",import.meta.url).href,iR=""+new URL("nadine-jean-baptiste-U6aEeAW3.png",import.meta.url).href,aR=""+new URL("omar-el-sayed-back-DvZ0YzV3.png",import.meta.url).href,rR=""+new URL("omar-el-sayed-side-GbsxNpnm.png",import.meta.url).href,sR=""+new URL("omar-el-sayed-BMPnC4NG.png",import.meta.url).href,oR=""+new URL("park-tae-min-back-D1wDi4ib.png",import.meta.url).href,lR=""+new URL("park-tae-min-side-BZejPE1D.png",import.meta.url).href,cR=""+new URL("park-tae-min-BTjYZmcm.png",import.meta.url).href,uR=""+new URL("priya-nair-back-Dx5txwin.png",import.meta.url).href,fR=""+new URL("priya-nair-side-CRHTHMmA.png",import.meta.url).href,dR=""+new URL("priya-nair-DFXsfudy.png",import.meta.url).href,hR=""+new URL("samir-khan-back-D1HMM4ex.png",import.meta.url).href,pR=""+new URL("samir-khan-side-lnwg1j9U.png",import.meta.url).href,mR=""+new URL("samir-khan-afwMkOKc.png",import.meta.url).href,gR=""+new URL("sofia-alvarez-back-BmPLZWff.png",import.meta.url).href,vR=""+new URL("sofia-alvarez-side-Dz9NXRSQ.png",import.meta.url).href,_R=""+new URL("sofia-alvarez-Cjr7OGqX.png",import.meta.url).href,xR=""+new URL("tomas-novak-back-LWo0EKI-.png",import.meta.url).href,yR=""+new URL("tomas-novak-side-y2dMENIS.png",import.meta.url).href,SR=""+new URL("tomas-novak-ao_fJqd-.png",import.meta.url).href,MR=""+new URL("yuki-tanaka-back-KAS85P0S.png",import.meta.url).href,ER=""+new URL("yuki-tanaka-side-BApmwsfq.png",import.meta.url).href,bR=""+new URL("yuki-tanaka-Njn3uOWV.png",import.meta.url).href,TR=""+new URL("zoe-mensah-back-D4NVfIWL.png",import.meta.url).href,AR=""+new URL("zoe-mensah-side-C2ywuUPz.png",import.meta.url).href,RR=""+new URL("zoe-mensah-lg5b-19l.png",import.meta.url).href,T_=[{name:"Kinetic Breach",type:"Active",cooldown:"18s",keyboard:"Z",controller:"LB",purpose:"Client-predicted directional burst for entry, chase, and escape chains.",counterplay:"Linear path, brief recovery on miss, blocked by heavy shields and stasis traps.",vfx:"Compressed air ribbon, suit sparks, and a hard-edged impact flash.",audio:"Pressure crack, servo snap, and close-range concussion tail.",network:"Predicted movement on owner, server-authoritative hit cone and final capsule location."},{name:"Echo Spike",type:"Active",cooldown:"24s",keyboard:"X",controller:"RB",purpose:"Throwable movement sensor that rewards timing before a coordinated push.",counterplay:"Device is visible, destructible, and only pings moving targets inside radius.",vfx:"Low-profile floor spike with pulsing scan rings and clean team-only silhouettes.",audio:"Soft sonar ticks that accelerate when recent motion is detected.",network:"Server-owned detection volume replicates compressed ping events to allied clients."},{name:"Snap Guard",type:"Active",cooldown:"28s",keyboard:"G",controller:"D-Pad Up",purpose:"1.25s frontal damage reduction for surviving a committed breach without tanking.",counterplay:"Flanks, explosives, melee, and delayed fire bypass the short protection window.",vfx:"Angular translucent forearm shield with directional impact ripples.",audio:"Rising charge tone, glassy block clicks, and a clean shutdown snap.",network:"Server validates guard angle, active tag, and damage modifier against attacker vector."},{name:"Overclock Vector",type:"Ultimate",cooldown:"Charge",keyboard:"T",controller:"LB + RB",purpose:"10s tempo spike: faster reloads, extended slides, and reduced movement cooldown recovery.",counterplay:"Range denial, suppression zones, burst focus, and trap layering.",vfx:"Subtle suit line glow, footstep light trails, and intensified breach distortion.",audio:"Heartbeat layer, exposed servo whine, and sharper movement transients.",network:"Replicated gameplay effect with scoped stat modifiers and montage-safe cancellation tags."}],wR=[["Move","W A S D","Left Stick","Analog movement with acceleration, strafing, and server-authoritative velocity caps."],["Look / Aim","Mouse","Right Stick","Raw mouse input, tuned stick response curve, ADS sensitivity scalar."],["Fire","Left Mouse","Right Trigger","Client-side muzzle feedback, server-authoritative trace and damage."],["Aim Down Sights","Right Mouse","Left Trigger","Hold-to-ADS with camera FOV blend and weapon sway reduction."],["Jump / Mantle","Space","A / Cross","Jump instantly; mantle triggers when ledge traces validate in front arc."],["Sprint","Left Shift","Left Stick Click","Hold sprint, cancellable into slide, jump, mantle, reload, or ability windup."],["Tactical Sprint","Double-tap Shift","Double-click Left Stick","Short burst with weapon lowered and stronger audio signature."],["Crouch / Slide","Left Ctrl","B / Circle","Tap crouch; hold or press while sprinting to enter slide."],["Lean Left","Q","D-Pad Left while ADS","ADS-only shoulder lean with exposed capsule and weapon obstruction checks."],["Lean Right","E","D-Pad Right while ADS","Mirrors left lean for corner play without changing ability bindings."],["Reload / Interact","R / F","X / Square","Context priority favors reload unless interact target is centered and valid."],["Swap Weapon","1 / 2 / Wheel","Y / Triangle","Fast swap queue respects reload cancel and equip animation windows."],["Melee","V / Mouse 4","Right Stick Click","Short lunge, server-confirmed hit frame, combo-safe recovery."],["Ping","Middle Mouse","D-Pad Down","Team ping raycast with cooldown throttling and replicated marker events."]],CR=[["Walk","420 uu/s","High-fidelity strafe control for ADS peeking and micro-correction."],["Sprint","650 uu/s","Fast baseline traversal with cancellable jump, crouch, and slide entry."],["Tac Sprint","780 uu/s","Short stamina burst that cannot fire but can cancel into mantle or breach."],["Slide","850 -> 420 uu/s","0.75s decay curve, hip-fire penalty, and melee-lunge combo window."],["Air Control","0.42 scalar","Midair correction supports skill expression without arena-shooter drift."],["Mantle","0.38-0.72s","Predictive traces, motion warping, and camera-stable climb starts."]],Ti=[{id:"dominion-rifleman",name:"Dominion Rifleman",designation:"H-01 Line Infantry",enemyClass:"Henchman",threat:"Standard",role:"Mobile suppression",description:"Disciplined corporate infantry deployed in linked fireteams to hold lanes and force operators out of cover.",armament:"VX pulse carbine, fragmentation charge, tactical smoke",behavior:"Advances by bounds, shares target pings, and suppresses the last known operator position.",weakness:"Break the fireteam link with flanks, vertical attacks, or signal disruption.",image:r1,imagePosition:"center"},{id:"bastion-gunner",name:"Bastion Gunner",designation:"H-07 Heavy Enforcer",enemyClass:"Henchman",threat:"Elevated",role:"Area denial",description:"Armored heavy who anchors enemy formations with sustained fire and a directional kinetic shield.",armament:"Helix rotary cannon, forearm shield, proximity mine",behavior:"Claims a firing lane, braces behind cover, and rotates slowly while the shield is active.",weakness:"Attack from separated angles or overload the shield before the weapon reaches full spin.",image:a1,imagePosition:"center"},{id:"shade-stalker",name:"Shade Stalker",designation:"H-12 Infiltrator",enemyClass:"Henchman",threat:"Severe",role:"Assassination",description:"Silent flanker equipped with refractive camouflage and a jammer that isolates operators from squad telemetry.",armament:"Suppressed flechette SMG, mono-edge blade, signal jammer",behavior:"Avoids direct sightlines, marks isolated targets, then attacks during reload or ability recovery.",weakness:"Motion sensors, area damage, and close squad spacing expose the camouflage approach.",image:d1,imagePosition:"center"},{id:"signal-warden",name:"Signal Warden",designation:"H-18 Command Support",enemyClass:"Henchman",threat:"Elevated",role:"Squad coordination",description:"Battlefield coordinator who improves nearby hostile accuracy, armor recovery, and response to operator pings.",armament:"Arc burst rifle, command beacon, repair injector",behavior:"Stays behind the line, relocates when exposed, and revives one disabled henchman per encounter.",weakness:"Destroy the command beacon or eliminate the Warden before engaging reinforced units.",image:h1,imagePosition:"center"},{id:"needle-scout",name:"Needle Scout",designation:"D-03 Recon Drone",enemyClass:"Drone",threat:"Standard",role:"Detection",description:"Fast aerial observer that paints operators for every connected enemy and tracks movement through light cover.",armament:"Optical marker, micro-dart burst, wideband scanner",behavior:"Circles above the squad, breaks line of sight after marking, and returns on a new approach vector.",weakness:"Low armor and a bright scan lens make it vulnerable to focused fire and EMP effects.",image:l1,imagePosition:"center"},{id:"vulture-striker",name:"Vulture Striker",designation:"D-11 Assault Drone",enemyClass:"Drone",threat:"Elevated",role:"Aerial pressure",description:"Attack drone that dives through open lanes, fires a kinetic burst, and climbs before operators can return fire.",armament:"Twin coil repeaters, dive rockets, evasive flare",behavior:"Alternates high cover with rapid attack runs and prioritizes stationary or wounded targets.",weakness:"Predict the climb path, use hard overhead cover, or interrupt the dive with shock damage.",image:p1,imagePosition:"center"},{id:"aegis-orb",name:"Aegis Orb",designation:"D-16 Defense Drone",enemyClass:"Drone",threat:"Elevated",role:"Protection",description:"Mobile shield projector that follows high-value units and redirects its barrier toward incoming damage.",armament:"Directional barrier, pulse repeater, repair tether",behavior:"Maintains distance from its protected unit and shifts the shield toward the highest damage source.",weakness:"Crossfire overwhelms its facing logic; the exposed rear capacitor takes amplified damage.",image:i1,imagePosition:"center"},{id:"reaper-carrier",name:"Reaper Carrier",designation:"D-24 Swarm Platform",enemyClass:"Drone",threat:"Severe",role:"Swarm deployment",description:"Armored carrier that seeds combat spaces with disposable hunter drones and remote explosive charges.",armament:"Hunter swarm bay, cluster charge, defensive laser",behavior:"Keeps long sightlines, deploys cover-seeking drones, and retreats while its swarm surrounds the squad.",weakness:"Damage the open launch bay during deployment to destroy the stored swarm and stagger the carrier.",image:u1,imagePosition:"center"},{id:"praetorian-nine",name:"Praetorian-9",designation:"C-09 Shock Cyborg",enemyClass:"Cyborg",threat:"Severe",role:"Close assault",description:"Reinforced breach unit that converts incoming damage into short bursts of speed and melee force.",armament:"Arc cleaver, shoulder scattergun, reactive plating",behavior:"Absorbs initial fire, closes rapidly, and chains cleaver strikes against grouped operators.",weakness:"Stagger effects interrupt the charge; leg servos remain vulnerable after a missed heavy strike.",image:c1,imagePosition:"center"},{id:"hex-sniper",name:"HEX Sniper",designation:"C-14 Neural Marksman",enemyClass:"Cyborg",threat:"Severe",role:"Long-range execution",description:"Precision cyborg that predicts repeated movement patterns and adjusts its lead calculation after every shot.",armament:"Mag-rail rifle, decoy projector, target prediction core",behavior:"Changes nests after two shots and punishes operators who repeat the same peek timing.",weakness:"Irregular movement, smoke, and decoy targets corrupt its prediction stack.",image:s1,imagePosition:"center"},{id:"iron-apostle",name:"Iron Apostle",designation:"C-22 Siege Cyborg",enemyClass:"Cyborg",threat:"Severe",role:"Objective breach",description:"Massive biomechanical siege unit built to destroy fortified positions and deny extraction zones.",armament:"Thermal lance, seismic fist, back-mounted mortar",behavior:"Bombards cover, advances through the impact zone, then uses the lance to split the squad.",weakness:"Cooling vents open after mortar volleys and expose the power spine to critical damage.",image:o1,imagePosition:"center"},{id:"seraph-prime",name:"Seraph Prime",designation:"C-Ω Command Avatar",enemyClass:"Cyborg",threat:"Apex",role:"Boss command unit",description:"AION Prime’s embodied battlefield intelligence, capable of rewriting encounter rules and directing every connected machine.",armament:"Gravitic field, neural beam, drone fabrication lattice",behavior:"Cycles between command, assault, and recovery phases while changing arena hazards and unit priorities.",weakness:"Sever three network anchors to interrupt phase transitions and expose the central cognition core.",image:f1,imagePosition:"center"}],Fa=[{id:"valkyrie-vt9",name:"Valkyrie VT-9",designation:"A-01 Aerial Insertion Craft",transportClass:"Aerial",role:"Fast squad insertion and extraction",capacity:"8 operators + pilot pair",speed:"310 km/h cruise / 0-90m vertical insert",terrain:"Rooftops, carrier decks, offshore rigs, contested hangars",deployment:"Dual ducted rotors hold a stable hover while the rear ramp and side rappel points deploy two fireteams.",protection:"Composite armor, IR baffling, active flare pods, and underside blast plating for hot-zone pickup.",operatorUse:"Best for opening cinematic drops, rapid objective swaps, and emergency extraction when ground routes are blocked.",image:v1},{id:"rhino-mgv4",name:"Rhino MGV-4",designation:"G-11 Heavy Ground Carrier",transportClass:"Ground",role:"Armored breach transport",capacity:"10 operators + gunner",speed:"92 km/h road / 54 km/h broken terrain",terrain:"Urban streets, checkpoint lanes, industrial yards, fortified gates",deployment:"Side troop doors let operators dismount under cover while the roof weapon suppresses hard angles.",protection:"Active armor tiles, run-flat wheels, smoke launchers, and a remote heavy machine gun mount.",operatorUse:"Best for convoy pushes, objective breach waves, and escort missions where durability matters more than stealth.",image:g1},{id:"raptor-lrv2",name:"Raptor LRV-2",designation:"G-04 Light Recon Vehicle",transportClass:"Ground",role:"High-speed flank and scout transport",capacity:"4 operators",speed:"148 km/h road / 88 km/h rough terrain",terrain:"Desert flats, service tunnels, perimeter roads, open refinery lanes",deployment:"Low chassis, exposed suspension, and a compact remote weapon station support fast hit-and-run rotations.",protection:"Light composite plating, counter-drone jammer, roll cage, and short-duration kinetic windshield shield.",operatorUse:"Best for recon teams, fast rotations, chase sequences, and flanking routes that reward driving skill.",image:m1},{id:"wraith-str6",name:"Wraith STR-6",designation:"G-19 Stealth Track Carrier",transportClass:"Ground",role:"Silent infiltration transport",capacity:"6 operators",speed:"76 km/h silent mode / 104 km/h overdrive",terrain:"Night raids, tunnel networks, rain-slick streets, sensor-heavy facilities",deployment:"Rubberized dual tracks and dampened bay doors let operators exit with minimal acoustic signature.",protection:"Radar-absorbent panels, thermal masking, low-noise drive train, and directional EMP hardening.",operatorUse:"Best for stealth openings, sabotage objectives, ambush setups, and missions where detection changes the encounter.",image:_1}],A_={Vector:[["Slide chain","+18% exit speed","Keeps momentum after a clean slide kill or breach dash, rewarding aggressive entries."],["Mantle recovery","-90ms weapon raise","Returns to fire-ready faster after vaults so vertical flanks feel sharp."],["Risk hook","Louder sprint tail","High speed creates readable audio pressure for defenders."]],Bulwark:[["Braced advance","-12% sprint speed","Moves slower but keeps weapon stability while crossing open lanes."],["Knockback resist","45% reduction","Heavy stance resists explosions, melee bumps, and shield impacts."],["Risk hook","Slow turn while braced","Commitment is punishable by flanks and quick angle swaps."]],Kitsune:[["Quiet route","-35% footstep radius","Crouch-walk and short sprint bursts produce softer positional reads."],["Mantle decoy","1 false step ping","A brief decoy footstep plays after ledge traversal to sell misdirection."],["Risk hook","Lower stumble resist","Taking damage during stealth routes slows recovery more than average."]],Mirage:[["Signal drift","+12% strafe blend","Strafes feel slippery during ability windows to support doorway misdirection."],["Ghost vault","0.18s shimmer","Vaulting through masked zones leaves a readable afterimage trail."],["Risk hook","No sprint bonus","Relies on deception rather than raw speed."]],Cinder:[["Heat stride","+10% through burn lanes","Moves faster across owned thermite lanes to reposition around denial zones."],["Ash slide","+0.2s slide sustain","Slides carry slightly longer when entering from sprint near active area denial."],["Risk hook","Bright movement VFX","Enhanced lane movement is easy to visually track."]],Lumine:[["Triage sprint","+14% toward allies","Gains speed when sprinting toward downed or low-health teammates."],["Revive crouch","+20% crouch speed","Can reposition while staying low during revive setup."],["Risk hook","Combat speed neutral","No duel mobility bonus when away from team play."]],Siren:[["Masked steps","2.5s audio dampen","Can briefly suppress team footstep spikes before a coordinated push."],["Pulse brake","Fast stop control","Decelerates quickly after sprint to bait audio reads and corner swings."],["Risk hook","Visible waveform","Audio masking creates subtle readable suit pulses."]],Monsoon:[["Smoke slip","+16% inside cover","Accelerates slightly while moving through owned smoke or dampening fields."],["Flow strafe","+10% direction swap","Changes lateral direction faster for controller-style lane shaping."],["Risk hook","Field dependent","Mobility identity weakens when abilities are on cooldown."]],Frostline:[["Anchor step","+18% ADS walk","Keeps tighter marksman movement while holding long angles."],["Cold retreat","+12% backpedal after hit","Can disengage from punished peeks without becoming a speed duelist."],["Risk hook","Slow mantle","+110ms ledge recovery keeps high-ground rotations committal."]],Relay:[["Link hop","Short ally tether","Gets a short reposition burst after linking with a nearby teammate."],["Squad tempo","+8% team sprint aura","Small movement benefit for allies rotating through her link radius."],["Risk hook","Requires proximity","Solo routes lose most mobility value."]],Citadel:[["Shoulder breach","Door shove impulse","Can push through light barricade contact without full stop."],["Armor gait","-8% sprint accel","Heavy gear starts slower but maintains steady push speed under fire."],["Risk hook","Large audio profile","Movement is intentionally easy to identify."]],Vanguard:[["Hard push","+18% tac sprint duration","Longer tactical sprint supports first-contact entries."],["Flash footing","No stumble on blind","Maintains basic movement control during flash resistance windows."],["Risk hook","Wide turn radius","Hard pushes need commitment and path planning."]],Condor:[["Climb burst","+24% climb speed","Fast ledge and rooftop traversal defines the vertical assault role."],["Aerial control","+0.14 air scalar","Better midair correction after grapple or high-ground drops."],["Risk hook","Landing noise spike","Aggressive vertical routes announce arrival."]],Scarab:[["Trap crawl","+18% crouch near devices","Moves faster while maintaining low profile around deployed traps."],["Lockdown pivot","+12% turn accel","Can rotate around objective traps without becoming a runner."],["Risk hook","Low chase speed","Weak at pursuing enemies outside prepared routes."]],Hammer:[["Heavy carry","-10% sprint speed","Big weapon kit moves slower but keeps suppression stable."],["Impact lunge","+18% melee reach","Short, heavy shove gives close-range space without dash mobility."],["Risk hook","Slow recovery","Missed lunges and slides take longer to recover."]],Circuit:[["Overclock step","+12% after hack","Brief speed bump after a successful drone or HUD interference action."],["Signal sidestep","+10% ADS strafe","Keeps small lateral corrections while using tech tools."],["Risk hook","Cooldown tied","Mobility spike depends on successful system interaction."]],Veloce:[["Burst strafe","+22% first step","Explosive first lateral step supports quick peeks and duel resets."],["Reset sprint","0.35s faster re-entry","Returns to sprint faster after weapon swap or slide cancel."],["Risk hook","Low sustain","Short bursts fade quickly in long chases."]],Lockjaw:[["Snare stance","+16% ADS hold speed","Can hold angles around traps while keeping steady micro-movement."],["Chase cut","+10% toward snared targets","Small chase bonus only when anti-mobility tools connect."],["Risk hook","No free escape","Defensive kit lacks raw disengage movement."]],Rift:[["Terrain read","+20% mantle after scan","Route scans unlock faster mantle and climb timing on marked paths."],["Pathfinder vault","Longer vault reach","Can clear slightly wider cover gaps with readable animation."],["Risk hook","Needs route setup","Unscanned terrain uses standard movement only."]],Null:[["Blackout drift","No radar sprint ping","Sprint pings are suppressed during blackout windows."],["Decoy brake","Instant stop fake","Can create a false movement stop to disrupt sensor reads."],["Risk hook","Lower acceleration","Baseline sprint starts slightly slower to offset stealth value."]],Forge:[["Workbench walk","Deploy while moving","Can place light hardpoints while walking instead of fully stopping."],["Repair shuffle","+16% strafe during repair","Keeps small movement while maintaining engineer interactions."],["Risk hook","No chase perk","Mobility supports setup, not pursuit."]]},DR=["Enhanced Input contexts for movement, combat, ability targeting, and controller aim tuning.","Gameplay Ability System tags drive cooldowns, lockouts, ultimate modifiers, and interrupt rules.","Owner-only cosmetic prediction fires instantly, then reconciles against server-confirmed ability state.","Animation layers split lower-body locomotion, upper-body weapon handling, additive recoil, and ability overlays.","Network relevancy, pooled VFX, compact tag replication, and event-based traces keep matches scalable."],UR=["Idle","Walk","Sprint","Tac Sprint","Slide","Mantle","ADS","Fire","Reload","Ability","Hit React","Recovery","Death"],LR={name:"Mara Voss",codename:"Vector",gender:"Female",country:"Germany / Brazil",flag:"🇩🇪 🇧🇷",heritage:"German-Brazilian",role:"Mobile assault",specialization:"Momentum entries, vertical flanks, and pressure conversion."},ea=[LR,{name:"Amara Okonkwo",codename:"Bulwark",gender:"Female",country:"Nigeria",flag:"🇳🇬",heritage:"Igbo Nigerian",role:"Anchor defender",specialization:"Deployable cover, lane control, and anti-breach denial."},{name:"Yuki Tanaka",codename:"Kitsune",gender:"Female",country:"Japan",flag:"🇯🇵",heritage:"Japanese",role:"Recon infiltrator",specialization:"Silent routing, decoy pings, and precision flank timing."},{name:"Leila Haddad",codename:"Mirage",gender:"Female",country:"Lebanon",flag:"🇱🇧",heritage:"Lebanese Arab",role:"Disruption support",specialization:"Visual clutter, signal masking, and doorway misdirection."},{name:"Sofia Alvarez",codename:"Cinder",gender:"Female",country:"Mexico",flag:"🇲🇽",heritage:"Mexican",role:"Area denial",specialization:"Thermite lanes, reload pressure, and objective burn control."},{name:"Nadine Jean-Baptiste",codename:"Lumine",gender:"Female",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Combat medic",specialization:"Fast revives, temporary armor boosts, and triage routing."},{name:"Mireya Baptiste",codename:"Siren",gender:"Female",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Audio warfare",specialization:"Footstep masking, sonic reveals, and anti-rush disruption."},{name:"Priya Nair",codename:"Monsoon",gender:"Female",country:"India",flag:"🇮🇳",heritage:"Malayali Indian",role:"Tactical controller",specialization:"Smoke shaping, sightline breaks, and sensor dampening."},{name:"Ingrid Solberg",codename:"Frostline",gender:"Female",country:"Norway",flag:"🇳🇴",heritage:"Norwegian",role:"Marksman control",specialization:"Long-angle overwatch, slow fields, and retreat punishment."},{name:"Zoe Mensah",codename:"Relay",gender:"Female",country:"Ghana",flag:"🇬🇭",heritage:"Ghanaian",role:"Team mobility",specialization:"Short-range reposition links, squad tempo, and flank rescue."},{name:"Jean-Paul Desrosiers",codename:"Citadel",gender:"Male",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Shield breaker",specialization:"Armor cracking, barricade pressure, and breach follow-through."},{name:"Mathieu Toussaint",codename:"Vanguard",gender:"Male",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Point man",specialization:"First-contact survivability, flash resistance, and hard pushes."},{name:"Diego Rojas",codename:"Condor",gender:"Male",country:"Colombia",flag:"🇨🇴",heritage:"Colombian",role:"Vertical assault",specialization:"Grapple entries, rooftop angles, and high-ground duels."},{name:"Omar El-Sayed",codename:"Scarab",gender:"Male",country:"Egypt",flag:"🇪🇬",heritage:"Egyptian Arab",role:"Trap engineer",specialization:"Pressure mines, route prediction, and objective lockdown."},{name:"Marcus Reed",codename:"Hammer",gender:"Male",country:"United States",flag:"🇺🇸",heritage:"African American",role:"Heavy gunner",specialization:"Suppressive fire, cover shredding, and squad advance windows."},{name:"Park Tae-min",codename:"Circuit",gender:"Male",country:"South Korea",flag:"🇰🇷",heritage:"Korean",role:"Systems hacker",specialization:"Drone hijacks, HUD noise, and cooldown interference."},{name:"Luca Romano",codename:"Veloce",gender:"Male",country:"Italy",flag:"🇮🇹",heritage:"Italian",role:"Skirmisher",specialization:"Quick peeks, burst strafes, and duel reset timing."},{name:"Tomas Novak",codename:"Lockjaw",gender:"Male",country:"Czech Republic",flag:"🇨🇿",heritage:"Czech",role:"Anti-mobility",specialization:"Snare traps, dash denial, and chase interruption."},{name:"Amani Mwangi",codename:"Rift",gender:"Male",country:"Kenya",flag:"🇰🇪",heritage:"Kikuyu Kenyan",role:"Pathfinder",specialization:"Route scans, mantle boosts, and terrain-aware rotations."},{name:"Samir Khan",codename:"Null",gender:"Male",country:"Pakistan",flag:"🇵🇰",heritage:"Pakistani",role:"Counter-intel",specialization:"Recon denial, decoy signatures, and sensor blackout."},{name:"Mateo Silva",codename:"Forge",gender:"Male",country:"Brazil",flag:"🇧🇷",heritage:"Afro-Brazilian",role:"Combat engineer",specialization:"Portable hardpoints, ammo stations, and repair denial."}],R_={Vector:{front:y1,side:S1,back:x1},Bulwark:{front:R1,side:A1,back:T1},Kitsune:{front:bR,side:ER,back:MR},Mirage:{front:I1,side:F1,back:B1},Cinder:{front:_R,side:vR,back:gR},Lumine:{front:iR,side:nR,back:tR},Siren:{front:eR,side:$1,back:J1},Monsoon:{front:dR,side:fR,back:uR},Frostline:{front:N1,side:L1,back:U1},Relay:{front:RR,side:AR,back:TR},Citadel:{front:z1,side:P1,back:O1},Vanguard:{front:Q1,side:K1,back:Z1},Condor:{front:D1,side:C1,back:w1},Scarab:{front:sR,side:rR,back:aR},Hammer:{front:X1,side:j1,back:k1},Circuit:{front:cR,side:lR,back:oR},Veloce:{front:V1,side:G1,back:H1},Lockjaw:{front:SR,side:yR,back:xR},Rift:{front:b1,side:E1,back:M1},Null:{front:mR,side:pR,back:hR},Forge:{front:Y1,side:W1,back:q1}},w_={Vector:[["KX-9 Shardline","Primary carbine","27 body / 40 head","720 RPM","10-38m","30 rounds"],["P-17 Latch","Machine pistol","18 body / 27 head","950 RPM","0-15m","20 rounds"],["Shock Baton","Melee","50 quick / 90 heavy","0.32s hit frame","2.2m lunge","Combo reset"]],Bulwark:[["Aegis-12 Bastion","Primary shotgun","96 body / 124 head","92 RPM","0-12m","8 shells"],["R-40 Anchor","Heavy revolver","48 body / 72 head","180 RPM","0-24m","6 rounds"],["Tower Maul","Melee","65 quick / 115 heavy","0.42s hit frame","2.0m lunge","Armor stagger"]],Kitsune:[["S-19 Whisper","Suppressed SMG","22 body / 33 head","860 RPM","0-26m","34 rounds"],["Tanto-9 Ghost","Suppressed pistol","31 body / 46 head","360 RPM","0-18m","13 rounds"],["Ceramic Tanto","Melee","45 quick / 85 heavy","0.26s hit frame","2.4m lunge","Backstab bonus"]],Mirage:[["M7 Prism","Burst rifle","26 body / 39 head","690 RPM","12-42m","27 rounds"],["Fennec Pulse","Compact sidearm","24 body / 36 head","520 RPM","0-16m","16 rounds"],["Signal Knife","Melee","45 quick / 90 heavy","0.30s hit frame","2.2m lunge","Sensor tag"]],Cinder:[["HX-44 Ember","Thermite LMG","25 body / 36 head","650 RPM","10-34m","55 rounds"],["Flare-6 Compact","Flare pistol","38 body / 55 head","150 RPM","0-20m","1 round"],["Heat Axe","Melee","60 quick / 110 heavy","0.38s hit frame","2.1m lunge","Burn tick"]],Lumine:[["MediCore V9","Support SMG","21 body / 32 head","820 RPM","0-24m","32 rounds"],["Suture-15","Burst pistol","28 body / 42 head","480 RPM","0-18m","15 rounds"],["Rescue Baton","Melee","42 quick / 80 heavy","0.28s hit frame","2.1m lunge","Revive cancel safe"]],Siren:[["Wail-3 Resonator","Sonic rifle","24 body / 35 head","700 RPM","8-32m","30 rounds"],["Mute-11 Sidearm","Damped pistol","30 body / 45 head","390 RPM","0-18m","14 rounds"],["Tuning Blade","Melee","46 quick / 88 heavy","0.31s hit frame","2.2m lunge","Audio reveal"]],Monsoon:[["R-7 Cloudburst","Tactical AR","26 body / 38 head","680 RPM","10-40m","30 rounds"],["Mist-18","Utility pistol","25 body / 38 head","430 RPM","0-17m","18 rounds"],["Katar Relay","Melee","48 quick / 92 heavy","0.29s hit frame","2.2m lunge","Smoke exit"]],Frostline:[["N-88 Glacier","Marksman rifle","62 body / 96 head","170 RPM","24-70m","12 rounds"],["Fjord-9","Precision pistol","34 body / 51 head","330 RPM","0-22m","10 rounds"],["Ice Pick","Melee","52 quick / 96 heavy","0.33s hit frame","2.0m lunge","Slow tag"]],Relay:[["Link-45 Vector","Compact AR","24 body / 36 head","760 RPM","8-32m","30 rounds"],["Hopline PDW","Machine pistol","17 body / 26 head","980 RPM","0-14m","22 rounds"],["Relay Tonfa","Melee","46 quick / 86 heavy","0.28s hit frame","2.3m lunge","Swap cancel"]],Citadel:[["Breach-10 Mason","Slug shotgun","82 body / 120 head","105 RPM","0-20m","7 shells"],["Rampart .50","Hand cannon","55 body / 82 head","155 RPM","0-28m","5 rounds"],["Breaker Hammer","Melee","70 quick / 125 heavy","0.45s hit frame","1.9m lunge","Shield crack"]],Vanguard:[["V-30 Pointman","Assault rifle","28 body / 41 head","640 RPM","10-38m","32 rounds"],["Guard-12","Tactical sidearm","32 body / 48 head","360 RPM","0-20m","12 rounds"],["Combat Kukri","Melee","52 quick / 98 heavy","0.32s hit frame","2.2m lunge","Flash resist"]],Condor:[["Talon-5 Carbine","Light carbine","25 body / 37 head","780 RPM","8-34m","28 rounds"],["Aerie-2","Climb pistol","27 body / 41 head","450 RPM","0-16m","15 rounds"],["Grapple Hook Blade","Melee","48 quick / 90 heavy","0.30s hit frame","2.5m lunge","Air cancel"]],Scarab:[["Khepri-4 AR","Trap rifle","27 body / 40 head","620 RPM","12-44m","30 rounds"],["Scarab Stinger","Dart pistol","22 body / 34 head","500 RPM","0-18m","12 darts"],["Hooked Khopesh","Melee","55 quick / 100 heavy","0.35s hit frame","2.0m lunge","Trap trigger"]],Hammer:[["M60 Atlas","Heavy LMG","31 body / 43 head","560 RPM","14-50m","75 rounds"],["Breaker-8","Sawed sidearm","70 body / 98 head","115 RPM","0-8m","2 shells"],["Breach Sledge","Melee","75 quick / 135 heavy","0.48s hit frame","1.8m lunge","Cover shred"]],Circuit:[["Arc-22 Carbine","Smart carbine","24 body / 36 head","740 RPM","8-36m","30 rounds"],["ShortBus EMP","EMP pistol","18 body / 27 head","600 RPM","0-15m","18 rounds"],["Livewire Baton","Melee","45 quick / 85 heavy","0.30s hit frame","2.1m lunge","Cooldown zap"]],Veloce:[["VX-11 Sprint","Duel SMG","20 body / 30 head","920 RPM","0-24m","36 rounds"],["Stiletto-7","Fast pistol","26 body / 39 head","540 RPM","0-16m","17 rounds"],["Carbon Stiletto","Melee","44 quick / 82 heavy","0.24s hit frame","2.6m lunge","Duel reset"]],Lockjaw:[["Clamp-40 DMR","Anti-mobility DMR","48 body / 72 head","260 RPM","18-56m","16 rounds"],["Snare-9","Tether pistol","24 body / 36 head","460 RPM","0-18m","15 rounds"],["Jaw Trap Blade","Melee","54 quick / 100 heavy","0.34s hit frame","2.0m lunge","Dash snare"]],Rift:[["Trail-6 Scout","Scout rifle","42 body / 63 head","300 RPM","18-58m","18 rounds"],["Path-12 Compact","Trail pistol","29 body / 44 head","410 RPM","0-20m","14 rounds"],["Rift Machete","Melee","55 quick / 102 heavy","0.33s hit frame","2.3m lunge","Mantle boost"]],Null:[["Blackout-13","Suppressed DMR","45 body / 68 head","280 RPM","16-54m","15 rounds"],["Void-5","Jammer pistol","21 body / 32 head","620 RPM","0-14m","20 rounds"],["Null Spike","Melee","47 quick / 90 heavy","0.30s hit frame","2.2m lunge","Sensor blank"]],Forge:[["Anvil-27 AR","Engineer rifle","27 body / 40 head","650 RPM","10-40m","34 rounds"],["Rivet-3","Nail sidearm","35 body / 52 head","300 RPM","0-20m","9 rounds"],["Forge Wrench","Melee","58 quick / 108 heavy","0.36s hit frame","2.0m lunge","Repair denial"]]};function NR(o,t,i,r){const l=o*(1-r)+40*r,d=(Math.ceil(i/l)-1)*60/t;return Math.max(d,.08).toFixed(2)}function Lo(o,t,i=88){const r=Math.abs((o-t+540)%360-180);return Math.max(0,1-r/i)}function C_(o){const t=o.replace("#","");return t==="operators"||t==="enemies"||t==="transport"||t==="simulation"||t==="systems"||t==="combat"?t:"home"}function OR(o){const t=o.role.split(" ")[0]??"Adaptive",i=o.heritage.split(/[\s-]/)[0]??"Global",r=o.specialization.split(",")[0].replace(".","");return[t,i,r,o.gender==="Female"?"Precision-led":"Pressure-ready"]}function PR(){const[o,t]=Kt.useState(()=>C_(window.location.hash)),[i,r]=Kt.useState(T_[0]),[l,u]=Kt.useState(50),[d,h]=Kt.useState(35),[m,p]=Kt.useState(0),[x,_]=Kt.useState("All"),[y,M]=Kt.useState(Ti[0].id),[A,w]=Kt.useState(Fa[0].id),E=Kt.useRef(null),[g,G]=Kt.useState({angle:0,glareX:50,glareY:35,rotateX:0}),z=Kt.useRef(0),L=Kt.useMemo(()=>NR(27,720,100+l,d/100),[l,d]),j=100+l,O=ea[m],I=R_[O.codename],Q=["Vector","Bulwark","Kitsune","Siren"],U=[O,...ea.filter(k=>k.codename!==O.codename&&Q.includes(k.codename))].slice(0,4).map(k=>({art:R_[k.codename],codename:k.codename,name:k.name})),C=w_[O.codename]??w_.Vector,H=A_[O.codename]??A_.Vector,le=Ti.find(k=>k.id===y)??Ti[0],se=Fa.find(k=>k.id===A)??Fa[0],fe=x==="All"?Ti:Ti.filter(k=>k.enemyClass===x),_e=Kt.useMemo(()=>T_.map(k=>({...k,name:k.type==="Ultimate"?`Overclock ${O.codename}`:k.name,purpose:k.type==="Ultimate"?`10s ${O.role.toLowerCase()} tempo spike tuned for ${O.specialization.toLowerCase()}`:k.purpose.replace("entry, chase, and escape chains",`${O.role.toLowerCase()} execution windows`),vfx:k.type==="Ultimate"?`${O.codename} suit lines intensify with role-colored movement trails and a clean activation pulse.`:k.vfx})),[O]),D=_e.find(k=>k.keyboard===i.keyboard&&k.controller===i.controller)??_e[0],K=(g.angle%360+360)%360,q=Math.max(Lo(K,90),Lo(K,270)),ue=K>180?-1:1,me={"--back-opacity":`${Lo(K,180)}`,"--front-opacity":`${Math.max(Lo(K,0),Lo(K,360))}`,"--glare-x":`${g.glareX}%`,"--glare-y":`${g.glareY}%`,"--side-opacity":`${q}`,"--side-scale":`${ue}`,"--turn-angle":`${g.angle}deg`,"--rotate-x":`${g.rotateX}deg`};function N(k){t(k),window.history.replaceState(null,"",`#${k}`),window.scrollTo({top:0,behavior:"smooth"})}function ee(k){if(_(k),k!=="All"&&le.enemyClass!==k){const Be=Ti.find(qe=>qe.enemyClass===k);Be&&M(Be.id)}}function Ee(k){w(k),window.requestAnimationFrame(()=>{var Be,qe;(Be=E.current)==null||Be.focus({preventScroll:!0}),(qe=E.current)==null||qe.scrollIntoView({behavior:"smooth",block:"start"})})}function Ae(k){const Be=(k+ea.length)%ea.length;p(Be),G({angle:0,glareX:50,glareY:35,rotateX:0})}function J(k){p(Be=>(Be+k+ea.length)%ea.length),G({angle:0,glareX:50,glareY:35,rotateX:0})}Kt.useEffect(()=>{function k(Be){(Be.key==="ArrowRight"||Be.key==="ArrowDown")&&(Be.preventDefault(),J(1)),(Be.key==="ArrowLeft"||Be.key==="ArrowUp")&&(Be.preventDefault(),J(-1)),Be.key==="Home"&&(Be.preventDefault(),Ae(0))}return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[]),Kt.useEffect(()=>{function k(){t(C_(window.location.hash)),window.scrollTo({top:0,behavior:"smooth"})}return window.addEventListener("hashchange",k),()=>window.removeEventListener("hashchange",k)},[]),Kt.useEffect(()=>{let k=0;function Be(){var ct,We;const[qe]=navigator.getGamepads?navigator.getGamepads():[],F=performance.now();if(qe&&F-z.current>260){const ft=qe.axes[0]??0,Qe=((ct=qe.buttons[14])==null?void 0:ct.pressed)||ft<-.65;((We=qe.buttons[15])==null?void 0:We.pressed)||ft>.65?(J(1),z.current=F):Qe&&(J(-1),z.current=F)}k=requestAnimationFrame(Be)}return k=requestAnimationFrame(Be),()=>cancelAnimationFrame(k)},[]);function xe(k){const Be=k.currentTarget.getBoundingClientRect(),qe=(k.clientX-Be.left)/Be.width,F=(k.clientY-Be.top)/Be.height,ct=F-.5;G({angle:Math.round(qe*360),glareX:Math.round(qe*100),glareY:Math.round(F*100),rotateX:Number((-ct*10).toFixed(2))})}function ve(){G(k=>({...k,glareX:50,glareY:35,rotateX:0}))}function Ie(k){G({angle:k,glareX:Math.round(k/360*100),glareY:35,rotateX:0})}const Le=S.jsxs("nav",{className:"operator-rail",id:o==="operators"?"operators":`${o}-operators`,"aria-label":"Quick operator selection",children:[S.jsxs("div",{className:"operator-rail-header",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Operator select"}),S.jsxs("strong",{children:[ea.length," playable characters"]})]}),S.jsx("span",{children:"Click, arrows, or controller"})]}),S.jsx("div",{className:"operator-rail-list",children:ea.map((k,Be)=>S.jsxs("button",{"aria-current":Be===m?"true":void 0,className:Be===m?"operator-pill active":"operator-pill",onClick:()=>Ae(Be),type:"button",children:[S.jsx("span",{className:"operator-pill-flag",children:k.flag}),S.jsxs("span",{className:"operator-pill-copy",children:[S.jsx("strong",{children:k.codename}),S.jsx("small",{children:k.name})]})]},`rail-${k.codename}-${k.name}`))})]});return S.jsxs("main",{className:"app-shell",children:[S.jsxs("header",{className:"game-topbar","aria-label":"AION Prime navigation",children:[S.jsxs("button",{className:"game-brand",onClick:()=>N("home"),type:"button","aria-label":"AION Prime home",children:[S.jsx("span",{children:"AION"}),S.jsx("strong",{children:"Prime"})]}),S.jsxs("nav",{className:"game-nav","aria-label":"Page sections",children:[S.jsx("button",{"aria-current":o==="home"?"page":void 0,onClick:()=>N("home"),type:"button",children:"Home"}),S.jsx("button",{"aria-current":o==="operators"?"page":void 0,onClick:()=>N("operators"),type:"button",children:"Operators"}),S.jsx("button",{"aria-current":o==="enemies"?"page":void 0,onClick:()=>N("enemies"),type:"button",children:"Enemy Forces"}),S.jsx("button",{"aria-current":o==="transport"?"page":void 0,onClick:()=>N("transport"),type:"button",children:"Transport"}),S.jsx("button",{"aria-current":o==="simulation"?"page":void 0,onClick:()=>N("simulation"),type:"button",children:"Simulation"}),S.jsx("button",{"aria-current":o==="systems"?"page":void 0,onClick:()=>N("systems"),type:"button",children:"Systems"}),S.jsx("button",{"aria-current":o==="combat"?"page":void 0,onClick:()=>N("combat"),type:"button",children:"Combat Systems"})]})]}),o==="home"&&S.jsxs("section",{className:"game-home",id:"home",style:{"--home-bg":`url(${n1})`},children:[S.jsxs("div",{className:"game-home-copy",children:[S.jsx("p",{className:"eyebrow",children:"AAA tactical AI FPS"}),S.jsx("h1",{children:"AION Prime"}),S.jsx("p",{className:"game-home-subtitle",children:"Lead a global roster of Prime operators into adaptive combat zones where vehicle cover, squad timing, battlefield AI, and high-skill movement decide every fight."}),S.jsxs("div",{className:"hero-cta-row","aria-label":"AION Prime home actions",children:[S.jsx("button",{className:"primary-cta enter-game-cta",onClick:()=>N("operators"),type:"button",children:"Enter game"}),S.jsx("button",{className:"secondary-cta",onClick:()=>N("simulation"),type:"button",children:"Preview combat scene"})]}),S.jsxs("div",{className:"home-feature-grid","aria-label":"AION Prime feature pillars",children:[S.jsxs("article",{children:[S.jsx("span",{children:"01"}),S.jsx("strong",{children:"Prime roster"}),S.jsx("p",{children:"21 global operators with role-specific weapons, flags, and readable combat identities."})]}),S.jsxs("article",{children:[S.jsx("span",{children:"02"}),S.jsx("strong",{children:"Vehicle warfare"}),S.jsx("p",{children:"Mounted-gun combat vehicles shape lanes, cover choices, and tactical pressure."})]}),S.jsxs("article",{children:[S.jsx("span",{children:"03"}),S.jsx("strong",{children:"Engineer ready"}),S.jsx("p",{children:"Movement, abilities, networking, animation, and balancing details built for review."})]})]})]}),S.jsxs("div",{className:"game-home-panel","aria-label":"AION Prime launch telemetry",children:[S.jsx("span",{children:"Current operation"}),S.jsx("strong",{children:"Hangar breach"}),S.jsx("p",{children:"Enter the operator page, select a Prime unit, inspect the 360 kit, then move into the live scene."}),S.jsxs("dl",{children:[S.jsxs("div",{children:[S.jsx("dt",{children:"Operators"}),S.jsx("dd",{children:ea.length})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Scene"}),S.jsx("dd",{children:"Live"})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Build"}),S.jsx("dd",{children:"UE5-ready"})]})]})]})]}),o==="operators"&&S.jsxs(S.Fragment,{children:[Le,S.jsxs("section",{className:"hero",style:{"--hero-bg":`url(${f0})`},children:[S.jsxs("div",{className:"hero-copy",children:[S.jsx("p",{className:"eyebrow",children:"Character overview"}),S.jsxs("div",{className:"hero-title-row",children:[S.jsx("h1",{children:O.name}),S.jsx("span",{children:O.codename})]}),S.jsxs("p",{className:"subtitle",children:[O.flag," ",O.country," origin / ",O.heritage," /"," ",O.role]}),S.jsxs("p",{className:"hero-overview",children:[O.specialization," Built for a modern Unreal Engine 5 multiplayer shooter with readable silhouette, fast combat decisions, and responsive 360 inspection."]}),S.jsxs("div",{className:"featured-prime-card","aria-label":"Selected operator overview",children:[S.jsxs("span",{children:[O.flag," ",O.country]}),S.jsxs("strong",{children:[O.name," / ",O.codename]}),S.jsxs("p",{children:[O.heritage," / ",O.role," / ",O.specialization]})]})]}),S.jsxs("div",{className:"operator-visual","aria-label":`Interactive 3D ${O.codename} character visualization`,onPointerLeave:ve,onPointerMove:xe,style:me,children:[S.jsxs("div",{className:"turntable-hud",children:[S.jsx("span",{children:"360 turntable"}),S.jsxs("strong",{children:[g.angle," deg"]})]}),S.jsx("div",{className:"weapon-stack","aria-label":`${O.codename} weapon loadout`,children:C.map(([k,Be,qe,F])=>S.jsxs("article",{className:"weapon-stack-item",children:[S.jsx("div",{className:"weapon-silhouette","aria-hidden":"true",children:S.jsx("span",{})}),S.jsxs("div",{children:[S.jsx("small",{children:Be}),S.jsx("strong",{children:k}),S.jsxs("p",{children:[qe," / ",F]})]})]},`visual-${k}`))}),S.jsx("div",{className:"soldier-stage",children:S.jsxs("div",{className:"real-character-turntable","aria-label":`Realistic ${O.name} character viewer`,children:[S.jsx("img",{className:"character-view front-view",src:I.front,alt:`${O.name} front view`}),S.jsx("img",{className:"character-view side-view",src:I.side,alt:`${O.name} side view`}),S.jsx("img",{className:"character-view back-view",src:I.back,alt:`${O.name} back view`}),S.jsx("div",{className:"turntable-floor"}),S.jsx("div",{className:"view-marker front-marker",children:"Front"}),S.jsx("div",{className:"view-marker side-marker",children:"Side"}),S.jsx("div",{className:"view-marker back-marker",children:"Back"})]})}),S.jsx("div",{className:"turntable-track","aria-hidden":"true",children:S.jsx("span",{})}),S.jsxs("label",{className:"turntable-control",children:["Rotate ",O.codename,S.jsx("input",{type:"range",min:"0",max:"360",value:g.angle,onChange:k=>Ie(Number(k.target.value)),onInput:k=>Ie(Number(k.currentTarget.value))})]})]})]}),S.jsxs("section",{className:"metrics-strip","aria-label":"Core balancing metrics",children:[S.jsxs("div",{children:[S.jsx("span",{children:"Health"}),S.jsx("strong",{children:"100"})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Armor"}),S.jsx("strong",{children:l})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Effective HP"}),S.jsx("strong",{children:j})]}),S.jsxs("div",{children:[S.jsx("span",{children:"Avg TTK"}),S.jsxs("strong",{children:[L,"s"]})]})]})]}),o==="enemies"&&S.jsxs(S.Fragment,{children:[S.jsxs("section",{className:"enemy-command-header",id:"enemies",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"AION hostile index"}),S.jsx("h1",{children:"Enemy Forces"})]}),S.jsxs("dl",{className:"enemy-command-stats","aria-label":"Enemy force counts",children:[S.jsxs("div",{children:[S.jsx("dt",{children:"All"}),S.jsx("dd",{children:Ti.length})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Henchmen"}),S.jsx("dd",{children:Ti.filter(k=>k.enemyClass==="Henchman").length})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Drones"}),S.jsx("dd",{children:Ti.filter(k=>k.enemyClass==="Drone").length})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Cyborgs"}),S.jsx("dd",{children:Ti.filter(k=>k.enemyClass==="Cyborg").length})]})]})]}),S.jsxs("section",{className:"enemy-browser","aria-label":"AION Prime enemy force browser",children:[S.jsxs("aside",{className:"enemy-selector",children:[S.jsxs("div",{className:"enemy-selector-heading",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Threat roster"}),S.jsx("h2",{children:"Combat units"})]}),S.jsx("strong",{children:fe.length})]}),S.jsx("div",{className:"enemy-filter","aria-label":"Filter enemy units",children:["All","Henchman","Drone","Cyborg"].map(k=>S.jsx("button",{"aria-pressed":x===k,onClick:()=>ee(k),type:"button",children:k==="All"?"All units":`${k}s`},k))}),S.jsx("div",{className:"enemy-force-list",children:fe.map(k=>S.jsxs("button",{"aria-pressed":le.id===k.id,className:"enemy-force-option",onClick:()=>M(k.id),type:"button",children:[S.jsx("span",{className:"enemy-force-thumb",children:S.jsx("img",{alt:"",src:k.image})}),S.jsxs("span",{className:"enemy-force-option-copy",children:[S.jsx("small",{children:k.designation}),S.jsx("strong",{children:k.name}),S.jsxs("span",{children:[k.enemyClass," / ",k.role]})]}),S.jsx("i",{className:`enemy-level threat-${k.threat.toLowerCase()}`,"aria-label":`${k.threat} threat`})]},k.id))})]}),S.jsxs("article",{className:"enemy-force-viewer","aria-live":"polite",children:[S.jsxs("div",{className:"enemy-force-visual",children:[S.jsx("img",{alt:`${le.name} combat unit`,src:le.image}),S.jsxs("div",{className:"enemy-force-overlay",children:[S.jsx("span",{className:"enemy-class",children:le.enemyClass}),S.jsxs("span",{className:`enemy-threat threat-${le.threat.toLowerCase()}`,children:[le.threat," threat"]})]}),S.jsxs("div",{className:"enemy-force-identity",children:[S.jsx("small",{children:le.designation}),S.jsx("h2",{children:le.name}),S.jsx("strong",{children:le.role})]})]}),S.jsxs("div",{className:"enemy-force-details",children:[S.jsx("p",{children:le.description}),S.jsxs("dl",{children:[S.jsxs("div",{children:[S.jsx("dt",{children:"Armament"}),S.jsx("dd",{children:le.armament})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Behavior"}),S.jsx("dd",{children:le.behavior})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Counterplay"}),S.jsx("dd",{children:le.weakness})]})]})]})]})]})]}),o==="transport"&&S.jsxs(S.Fragment,{children:[S.jsxs("section",{className:"transport-command-header",id:"transport",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Operator mobility fleet"}),S.jsx("h1",{children:"Transport"})]}),S.jsxs("dl",{className:"transport-command-stats","aria-label":"Transport fleet counts",children:[S.jsxs("div",{children:[S.jsx("dt",{children:"Total"}),S.jsx("dd",{children:Fa.length})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Aerial"}),S.jsx("dd",{children:Fa.filter(k=>k.transportClass==="Aerial").length})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Ground"}),S.jsx("dd",{children:Fa.filter(k=>k.transportClass==="Ground").length})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Selected"}),S.jsx("dd",{children:se.transportClass})]})]})]}),S.jsxs("section",{className:"transport-browser","aria-label":"AION Prime operator transport browser",children:[S.jsxs("aside",{className:"transport-selector",children:[S.jsxs("div",{className:"transport-selector-heading",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Fleet roster"}),S.jsx("h2",{children:"Transport platforms"})]}),S.jsx("strong",{children:Fa.length})]}),S.jsx("div",{className:"transport-force-list",children:Fa.map(k=>S.jsxs("button",{"aria-pressed":se.id===k.id,"aria-controls":"transport-viewer",className:"transport-force-option",onClick:()=>Ee(k.id),type:"button",children:[S.jsx("span",{className:"transport-force-thumb",children:S.jsx("img",{alt:"",src:k.image})}),S.jsxs("span",{className:"transport-force-option-copy",children:[S.jsx("small",{children:k.designation}),S.jsx("strong",{children:k.name}),S.jsxs("span",{children:[k.transportClass," / ",k.role]})]}),S.jsx("span",{className:"transport-force-action",children:"View"})]},k.id))})]}),S.jsxs("article",{className:"transport-force-viewer",id:"transport-viewer",ref:E,tabIndex:-1,"aria-live":"polite",children:[S.jsxs("div",{className:"transport-force-visual",children:[S.jsx("img",{alt:`${se.name} operator transport`,src:se.image}),S.jsxs("div",{className:"transport-force-overlay",children:[S.jsx("span",{className:"transport-class",children:se.transportClass}),S.jsx("span",{children:se.capacity})]}),S.jsxs("div",{className:"transport-force-identity",children:[S.jsx("small",{children:se.designation}),S.jsx("h2",{children:se.name}),S.jsx("strong",{children:se.role})]})]}),S.jsxs("div",{className:"transport-force-details",children:[S.jsx("p",{children:se.operatorUse}),S.jsxs("dl",{children:[S.jsxs("div",{children:[S.jsx("dt",{children:"Speed"}),S.jsx("dd",{children:se.speed})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Terrain"}),S.jsx("dd",{children:se.terrain})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Deployment"}),S.jsx("dd",{children:se.deployment})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Protection"}),S.jsx("dd",{children:se.protection})]})]})]})]})]})]}),o==="simulation"&&S.jsx(t1,{codename:O.codename,operatorName:O.name,role:O.role,weapons:C,characterArt:I,squad:U}),o==="systems"&&S.jsxs(S.Fragment,{children:[Le,S.jsxs("section",{className:"two-column",children:[S.jsxs("article",{className:"panel overview-panel",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Character overview"}),S.jsxs("h2",{children:[O.flag," ",O.name,", codename ",O.codename]})]}),S.jsxs("p",{children:[O.name," is a ",O.heritage," ",O.role.toLowerCase()," operator from ",O.flag," ",O.country,". ",O.specialization," The systems profile below updates this operator's movement expectations, bindings, abilities, weapons, and engineering review surface."]}),S.jsx("div",{className:"trait-grid",children:OR(O).map(k=>S.jsx("span",{children:k},k))})]}),S.jsxs("article",{className:"panel tuning-panel",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Live balance sandbox"}),S.jsx("h2",{children:"TTK tuning assumptions"})]}),S.jsxs("label",{children:["Armor value",S.jsx("input",{type:"range",min:"0",max:"100",step:"5",value:l,onChange:k=>u(Number(k.target.value))})]}),S.jsxs("label",{children:["Headshot accuracy",S.jsx("input",{type:"range",min:"0",max:"75",step:"5",value:d,onChange:k=>h(Number(k.target.value))})]}),S.jsxs("p",{children:[C[0][0]," weighted TTK against ",j," HP at ",d,"% headshot rate:"," ",S.jsxs("strong",{children:[L,"s"]})]})]})]}),S.jsxs("section",{className:"section-block",id:"systems",children:[S.jsxs("div",{className:"section-heading",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Core movement systems"}),S.jsx("h2",{children:"Responsiveness first, animation clean second, never animation last"})]}),S.jsxs("p",{className:"section-note",children:["These are shared FPS rules. ",O.codename,"'s unique movement layer is tuned below."]})]}),S.jsx("div",{className:"movement-grid",children:CR.map(([k,Be,qe])=>S.jsxs("article",{className:"system-card",children:[S.jsx("span",{children:Be}),S.jsx("h3",{children:k}),S.jsx("p",{children:qe})]},k))})]}),S.jsxs("section",{className:"section-block mobility-signature-section",children:[S.jsxs("div",{className:"section-heading",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Character mobility signature"}),S.jsxs("h2",{children:[O.codename," moves differently from the shared baseline"]})]}),S.jsx("p",{className:"section-note",children:"Per-operator tuning adds mastery without breaking the universal controller feel."})]}),S.jsx("div",{className:"mobility-signature-grid",children:H.map(([k,Be,qe])=>S.jsxs("article",{className:"mobility-signature-card",children:[S.jsx("span",{children:Be}),S.jsx("h3",{children:k}),S.jsx("p",{children:qe})]},`${O.codename}-${k}`))})]}),S.jsxs("section",{className:"section-block input-section",children:[S.jsxs("div",{className:"section-heading",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Input and abilities"}),S.jsxs("h2",{children:["Explicit action bindings for ",O.codename]})]}),S.jsx("p",{className:"section-note",children:"Shared movement inputs stay universal; abilities change behavior per operator while keeping the same tactical button layout."})]}),S.jsxs("div",{className:"input-layout",children:[S.jsxs("article",{className:"panel ability-bindings-panel",children:[S.jsxs("div",{className:"ability-title",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Selected loadout"}),S.jsx("h3",{children:O.name})]}),S.jsx("strong",{children:O.codename})]}),S.jsx("div",{className:"ability-binding-grid","aria-label":`${O.codename} ability bindings`,children:_e.map(k=>S.jsxs("article",{className:"ability-binding-card",children:[S.jsxs("div",{children:[S.jsx("span",{children:k.type}),S.jsx("h3",{children:k.name}),S.jsx("p",{children:k.purpose})]}),S.jsxs("div",{className:"binding-chips","aria-label":`${k.name} controls`,children:[S.jsxs("span",{children:[S.jsx("small",{children:"Keyboard"}),S.jsx("strong",{children:k.keyboard})]}),S.jsxs("span",{children:[S.jsx("small",{children:"Controller"}),S.jsx("strong",{children:k.controller})]}),S.jsxs("span",{children:[S.jsx("small",{children:"Cooldown"}),S.jsx("strong",{children:k.cooldown})]})]})]},`binding-${k.name}`))})]}),S.jsxs("article",{className:"input-map-panel",children:[S.jsxs("div",{className:"input-map-row input-map-header",role:"row",children:[S.jsx("span",{children:"Action"}),S.jsx("span",{children:"Keyboard"}),S.jsx("span",{children:"Controller"}),S.jsx("span",{children:"Engineering behavior"})]}),wR.map(([k,Be,qe,F])=>S.jsxs("div",{className:"input-map-row",role:"row",children:[S.jsx("span",{children:k}),S.jsx("kbd",{children:Be}),S.jsx("kbd",{children:qe}),S.jsx("p",{children:F})]},k))]})]})]})]}),o==="combat"&&S.jsxs(S.Fragment,{children:[Le,S.jsx("section",{className:"section-block combat-page-header",id:"combat",children:S.jsxs("div",{className:"section-heading",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Combat Systems"}),S.jsxs("h2",{children:[O.flag," ",O.codename," combat package"]})]}),S.jsx("p",{className:"section-note",children:"Weapons, active abilities, animation surfaces, feedback rules, networking notes, and team-play balance update from the selected operator."})]})}),S.jsxs("section",{className:"section-block",children:[S.jsxs("div",{className:"section-heading",children:[S.jsx("p",{className:"eyebrow",children:"Combat systems"}),S.jsxs("h2",{children:[O.codename," weapons tuned for ",O.role.toLowerCase()]})]}),S.jsxs("div",{className:"weapon-table",role:"table","aria-label":"Weapon specifications",children:[S.jsxs("div",{className:"weapon-row weapon-header",role:"row",children:[S.jsx("span",{children:"Name"}),S.jsx("span",{children:"Role"}),S.jsx("span",{children:"Damage"}),S.jsx("span",{children:"Fire rate"}),S.jsx("span",{children:"Range"}),S.jsx("span",{children:"Handling"})]}),C.map(k=>S.jsx("div",{className:"weapon-row",role:"row",children:k.map(Be=>S.jsx("span",{children:Be},Be))},k[0]))]})]}),S.jsxs("section",{className:"section-block",children:[S.jsxs("div",{className:"section-heading",children:[S.jsx("p",{className:"eyebrow",children:"Special abilities"}),S.jsxs("h2",{children:[O.codename," ability implementation cards"]})]}),S.jsxs("div",{className:"ability-layout",children:[S.jsx("div",{className:"ability-list",role:"tablist","aria-label":`${O.codename} abilities`,children:_e.map(k=>S.jsxs("button",{className:k.name===D.name?"ability-tab active":"ability-tab",type:"button",onClick:()=>r(k),children:[S.jsx("span",{children:k.type}),k.name]},k.name))}),S.jsxs("article",{className:"panel ability-detail",children:[S.jsxs("div",{className:"ability-title",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:D.type}),S.jsx("h3",{children:D.name})]}),S.jsx("strong",{children:D.cooldown})]}),S.jsxs("dl",{children:[S.jsxs("div",{children:[S.jsx("dt",{children:"Input binding"}),S.jsxs("dd",{children:["Keyboard ",D.keyboard," / Controller ",D.controller]})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Gameplay purpose"}),S.jsx("dd",{children:D.purpose})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Counterplay"}),S.jsx("dd",{children:D.counterplay})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Visual effects"}),S.jsx("dd",{children:D.vfx})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Audio feedback"}),S.jsx("dd",{children:D.audio})]}),S.jsxs("div",{children:[S.jsx("dt",{children:"Networking"}),S.jsx("dd",{children:D.network})]})]})]})]})]}),S.jsxs("section",{className:"two-column",children:[S.jsxs("article",{className:"panel",children:[S.jsx("p",{className:"eyebrow",children:"Animation requirements"}),S.jsx("h2",{children:"State machine surface"}),S.jsx("div",{className:"state-machine",children:UR.map(k=>S.jsx("span",{children:k},k))}),S.jsx("p",{children:"Transition logic prioritizes input response with short blend windows, motion warping for traversal, montage sections for recovery, and additive recoil aligned to weapon camera feedback."})]}),S.jsxs("article",{className:"panel",children:[S.jsx("p",{className:"eyebrow",children:"Combat feel requirements"}),S.jsx("h2",{children:"Feedback stack"}),S.jsxs("ul",{className:"check-list",children:[S.jsx("li",{children:"Distinct armor break, headshot, elimination, and ability-hit confirmations."}),S.jsx("li",{children:"Impulse camera shake capped for target readability and accessibility settings."}),S.jsx("li",{children:"Controller-only rotational aim assist with conservative slowdown windows."}),S.jsx("li",{children:"Layered recoil: camera pitch, weapon bone animation, muzzle climb, and recovery spring."}),S.jsx("li",{children:"Vibration envelopes for auto fire, blocked damage, melee impact, and ultimate activation."})]})]})]}),S.jsxs("section",{className:"section-block engineering-section",children:[S.jsxs("div",{className:"section-heading",children:[S.jsx("p",{className:"eyebrow",children:"Technical gameplay implementation"}),S.jsx("h2",{children:"Lead Gameplay Engineer review"})]}),S.jsx("div",{className:"engineering-grid",children:DR.map(k=>S.jsxs("article",{className:"engineering-card",children:[S.jsx("span",{}),S.jsx("p",{children:k})]},k))})]}),S.jsxs("section",{className:"team-band",children:[S.jsxs("div",{children:[S.jsx("p",{className:"eyebrow",children:"Team play design"}),S.jsx("h2",{children:"Strong pressure, meaningful weaknesses"})]}),S.jsxs("div",{className:"team-grid",children:[S.jsxs("article",{children:[S.jsx("h3",{children:"Strengths"}),S.jsx("p",{children:"Fast entries, aggressive flanks, duel initiation, repositioning, and fight conversion."})]}),S.jsxs("article",{children:[S.jsx("h3",{children:"Weaknesses"}),S.jsx("p",{children:"Limited sustain, exposed recovery after missed breach, weaker at long range, trap-vulnerable."})]}),S.jsxs("article",{children:[S.jsx("h3",{children:"Synergies"}),S.jsx("p",{children:"Pairs with recon, smoke, shield break, suppression, and area-denial teammates."})]}),S.jsxs("article",{children:[S.jsx("h3",{children:"Counter picks"}),S.jsx("p",{children:"Trap specialists, marksmen, anti-mobility kits, stasis fields, and coordinated focus fire."})]})]})]})]})]})}wy.createRoot(document.getElementById("root")).render(S.jsx(yy.StrictMode,{children:S.jsx(PR,{})}));
