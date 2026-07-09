(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function P_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Jf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function by(){if(_v)return To;_v=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return To.Fragment=t,To.jsx=i,To.jsxs=i,To}var xv;function Ey(){return xv||(xv=1,Jf.exports=by()),Jf.exports}var g=Ey(),$f={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function Ty(){if(yv)return st;yv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,b={};function _(N,ee,be){this.props=N,this.context=ee,this.refs=b,this.updater=be||R}_.prototype.isReactComponent={},_.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function k(){}k.prototype=_.prototype;function P(N,ee,be){this.props=N,this.context=ee,this.refs=b,this.updater=be||R}var L=P.prototype=new k;L.constructor=P,C(L,_.prototype),L.isPureReactComponent=!0;var j=Array.isArray;function G(){}var I={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function A(N,ee,be){var Ae=be.ref;return{$$typeof:o,type:N,key:ee,ref:Ae!==void 0?Ae:null,props:be}}function D(N,ee){return A(N.type,ee,N.props)}function F(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function fe(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(be){return ee[be]})}var ce=/\/+/g;function ue(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?fe(""+N.key):ee.toString(36)}function me(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(G,G):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function U(N,ee,be,Ae,Q){var xe=typeof N;(xe==="undefined"||xe==="boolean")&&(N=null);var _e=!1;if(N===null)_e=!0;else switch(xe){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(N.$$typeof){case o:case t:_e=!0;break;case y:return _e=N._init,U(_e(N._payload),ee,be,Ae,Q)}}if(_e)return Q=Q(N),_e=Ae===""?"."+ue(N,0):Ae,j(Q)?(be="",_e!=null&&(be=_e.replace(ce,"$&/")+"/"),U(Q,ee,be,"",function(Je){return Je})):Q!=null&&(F(Q)&&(Q=D(Q,be+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(ce,"$&/")+"/")+_e)),ee.push(Q)),1;_e=0;var ke=Ae===""?".":Ae+":";if(j(N))for(var Oe=0;Oe<N.length;Oe++)Ae=N[Oe],xe=ke+ue(Ae,Oe),_e+=U(Ae,ee,be,xe,Q);else if(Oe=M(N),typeof Oe=="function")for(N=Oe.call(N),Oe=0;!(Ae=N.next()).done;)Ae=Ae.value,xe=ke+ue(Ae,Oe++),_e+=U(Ae,ee,be,xe,Q);else if(xe==="object"){if(typeof N.then=="function")return U(me(N),ee,be,Ae,Q);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return _e}function W(N,ee,be){if(N==null)return N;var Ae=[],Q=0;return U(N,Ae,"","",function(xe){return ee.call(be,xe,Q++)}),Ae}function q(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(be){(N._status===0||N._status===-1)&&(N._status=1,N._result=be)},function(be){(N._status===0||N._status===-1)&&(N._status=2,N._result=be)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var oe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},de={map:W,forEach:function(N,ee,be){W(N,function(){ee.apply(this,arguments)},be)},count:function(N){var ee=0;return W(N,function(){ee++}),ee},toArray:function(N){return W(N,function(ee){return ee})||[]},only:function(N){if(!F(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return st.Activity=x,st.Children=de,st.Component=_,st.Fragment=i,st.Profiler=l,st.PureComponent=P,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,st.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},st.cache=function(N){return function(){return N.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(N,ee,be){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ae=C({},N.props),Q=N.key;if(ee!=null)for(xe in ee.key!==void 0&&(Q=""+ee.key),ee)!J.call(ee,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&ee.ref===void 0||(Ae[xe]=ee[xe]);var xe=arguments.length-2;if(xe===1)Ae.children=be;else if(1<xe){for(var _e=Array(xe),ke=0;ke<xe;ke++)_e[ke]=arguments[ke+2];Ae.children=_e}return A(N.type,Q,Ae)},st.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},st.createElement=function(N,ee,be){var Ae,Q={},xe=null;if(ee!=null)for(Ae in ee.key!==void 0&&(xe=""+ee.key),ee)J.call(ee,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Q[Ae]=ee[Ae]);var _e=arguments.length-2;if(_e===1)Q.children=be;else if(1<_e){for(var ke=Array(_e),Oe=0;Oe<_e;Oe++)ke[Oe]=arguments[Oe+2];Q.children=ke}if(N&&N.defaultProps)for(Ae in _e=N.defaultProps,_e)Q[Ae]===void 0&&(Q[Ae]=_e[Ae]);return A(N,xe,Q)},st.createRef=function(){return{current:null}},st.forwardRef=function(N){return{$$typeof:h,render:N}},st.isValidElement=F,st.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:q}},st.memo=function(N,ee){return{$$typeof:p,type:N,compare:ee===void 0?null:ee}},st.startTransition=function(N){var ee=I.T,be={};I.T=be;try{var Ae=N(),Q=I.S;Q!==null&&Q(be,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(G,oe)}catch(xe){oe(xe)}finally{ee!==null&&be.types!==null&&(ee.types=be.types),I.T=ee}},st.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},st.use=function(N){return I.H.use(N)},st.useActionState=function(N,ee,be){return I.H.useActionState(N,ee,be)},st.useCallback=function(N,ee){return I.H.useCallback(N,ee)},st.useContext=function(N){return I.H.useContext(N)},st.useDebugValue=function(){},st.useDeferredValue=function(N,ee){return I.H.useDeferredValue(N,ee)},st.useEffect=function(N,ee){return I.H.useEffect(N,ee)},st.useEffectEvent=function(N){return I.H.useEffectEvent(N)},st.useId=function(){return I.H.useId()},st.useImperativeHandle=function(N,ee,be){return I.H.useImperativeHandle(N,ee,be)},st.useInsertionEffect=function(N,ee){return I.H.useInsertionEffect(N,ee)},st.useLayoutEffect=function(N,ee){return I.H.useLayoutEffect(N,ee)},st.useMemo=function(N,ee){return I.H.useMemo(N,ee)},st.useOptimistic=function(N,ee){return I.H.useOptimistic(N,ee)},st.useReducer=function(N,ee,be){return I.H.useReducer(N,ee,be)},st.useRef=function(N){return I.H.useRef(N)},st.useState=function(N){return I.H.useState(N)},st.useSyncExternalStore=function(N,ee,be){return I.H.useSyncExternalStore(N,ee,be)},st.useTransition=function(){return I.H.useTransition()},st.version="19.2.7",st}var Sv;function Eh(){return Sv||(Sv=1,$f.exports=Ty()),$f.exports}var Kt=Eh();const Ay=P_(Kt);var ed={exports:{}},Ao={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function Ry(){return Mv||(Mv=1,(function(o){function t(U,W){var q=U.length;U.push(W);e:for(;0<q;){var oe=q-1>>>1,de=U[oe];if(0<l(de,W))U[oe]=W,U[q]=de,q=oe;else break e}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var W=U[0],q=U.pop();if(q!==W){U[0]=q;e:for(var oe=0,de=U.length,N=de>>>1;oe<N;){var ee=2*(oe+1)-1,be=U[ee],Ae=ee+1,Q=U[Ae];if(0>l(be,q))Ae<de&&0>l(Q,be)?(U[oe]=Q,U[Ae]=q,oe=Ae):(U[oe]=be,U[ee]=q,oe=ee);else if(Ae<de&&0>l(Q,q))U[oe]=Q,U[Ae]=q,oe=Ae;else break e}}return W}function l(U,W){var q=U.sortIndex-W.sortIndex;return q!==0?q:U.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],y=1,x=null,S=3,M=!1,R=!1,C=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function L(U){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=U)r(p),W.sortIndex=W.expirationTime,t(m,W);else break;W=i(p)}}function j(U){if(C=!1,L(U),!R)if(i(m)!==null)R=!0,G||(G=!0,fe());else{var W=i(p);W!==null&&me(j,W.startTime-U)}}var G=!1,I=-1,J=5,A=-1;function D(){return b?!0:!(o.unstable_now()-A<J)}function F(){if(b=!1,G){var U=o.unstable_now();A=U;var W=!0;try{e:{R=!1,C&&(C=!1,k(I),I=-1),M=!0;var q=S;try{t:{for(L(U),x=i(m);x!==null&&!(x.expirationTime>U&&D());){var oe=x.callback;if(typeof oe=="function"){x.callback=null,S=x.priorityLevel;var de=oe(x.expirationTime<=U);if(U=o.unstable_now(),typeof de=="function"){x.callback=de,L(U),W=!0;break t}x===i(m)&&r(m),L(U)}else r(m);x=i(m)}if(x!==null)W=!0;else{var N=i(p);N!==null&&me(j,N.startTime-U),W=!1}}break e}finally{x=null,S=q,M=!1}W=void 0}}finally{W?fe():G=!1}}}var fe;if(typeof P=="function")fe=function(){P(F)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ue=ce.port2;ce.port1.onmessage=F,fe=function(){ue.postMessage(null)}}else fe=function(){_(F,0)};function me(U,W){I=_(function(){U(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(U){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var q=S;S=W;try{return U()}finally{S=q}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var q=S;S=U;try{return W()}finally{S=q}},o.unstable_scheduleCallback=function(U,W,q){var oe=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,U){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=q+de,U={id:y++,callback:W,priorityLevel:U,startTime:q,expirationTime:de,sortIndex:-1},q>oe?(U.sortIndex=q,t(p,U),i(m)===null&&U===i(p)&&(C?(k(I),I=-1):C=!0,me(j,q-oe))):(U.sortIndex=de,t(m,U),R||M||(R=!0,G||(G=!0,fe()))),U},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(U){var W=S;return function(){var q=S;S=W;try{return U.apply(this,arguments)}finally{S=q}}}})(nd)),nd}var bv;function wy(){return bv||(bv=1,td.exports=Ry()),td.exports}var id={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function Cy(){if(Ev)return An;Ev=1;var o=Eh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:y}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,y)},An.flushSync=function(m){var p=d.T,y=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=y,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,x=h(y,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:M}):y==="script"&&r.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,x=h(y,p.crossOrigin);r.d.L(m,y,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,y){return d.H.useFormState(m,p,y)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.7",An}var Tv;function Dy(){if(Tv)return id.exports;Tv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),id.exports=Cy(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function Uy(){if(Av)return Ao;Av=1;var o=wy(),t=Eh(),i=Dy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,s=f;break}if(T===s){v=!0,s=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=c;break}if(T===s){v=!0,s=f,a=c;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),P=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function fe(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case _:return"Profiler";case b:return"StrictMode";case j:return"Suspense";case G:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case P:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}var me=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},oe=[],de=-1;function N(e){return{current:e}}function ee(e){0>de||(e.current=oe[de],oe[de]=null,de--)}function be(e,n){de++,oe[de]=e.current,e.current=n}var Ae=N(null),Q=N(null),xe=N(null),_e=N(null);function ke(e,n){switch(be(xe,n),be(Q,e),be(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?kg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=kg(n),e=Gg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ee(Ae),be(Ae,e)}function Oe(){ee(Ae),ee(Q),ee(xe)}function Je(e){e.memoizedState!==null&&be(_e,e);var n=Ae.current,a=Gg(n,e.type);n!==a&&(be(Q,e),be(Ae,a))}function Dt(e){Q.current===e&&(ee(Ae),ee(Q)),_e.current===e&&(ee(_e),So._currentValue=q)}var lt,H;function ut(e){if(lt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);lt=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lt+e+H}var B=!1;function Le(e,n){if(!e||B)return"";B=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(le){var ae=le}Reflect.construct(e,[],ye)}else{try{ye.call()}catch(le){ae=le}e.call(ye.prototype)}}else{try{throw Error()}catch(le){ae=le}(ye=e())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var z=v.split(`
`),ne=T.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<ne.length&&!ne[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===ne.length)for(s=z.length-1,c=ne.length-1;1<=s&&0<=c&&z[s]!==ne[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==ne[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==ne[c]){var pe=`
`+z[s].replace(" at new "," at ");return e.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",e.displayName)),pe}while(1<=s&&0<=c);break}}}finally{B=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ut(a):""}function Ne(e,n){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return ut("Activity");default:return""}}function mt(e){try{var n="",a=null;do n+=Ne(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ie=Object.prototype.hasOwnProperty,at=o.unstable_scheduleCallback,Wt=o.unstable_cancelCallback,qt=o.unstable_shouldYield,O=o.unstable_requestPaint,E=o.unstable_now,ie=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,Ee=o.unstable_UserBlockingPriority,he=o.unstable_NormalPriority,Ke=o.unstable_LowPriority,Ce=o.unstable_IdlePriority,Ye=o.log,Ze=o.unstable_setDisableYieldValue,Re=null,De=null;function Qe(e){if(typeof Ye=="function"&&Ze(e),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Re,e)}catch{}}var He=Math.clz32?Math.clz32:X,Pe=Math.log,ot=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Pe(e)/ot|0)|0}var we=256,Ue=262144,Ge=4194304;function Te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Se(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Te(s):(v&=T,v!==0?c=Te(v):a||(a=T&~e,a!==0&&(c=Te(a))))):(T=s&~f,T!==0?c=Te(T):v!==0?c=Te(v):a||(a=s&~e,a!==0&&(c=Te(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ve(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function rt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $n(e,n,a,s,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,z=e.expirationTimes,ne=e.hiddenUpdates;for(a=v&~a;0<a;){var pe=31-He(a),ye=1<<pe;T[pe]=0,z[pe]=-1;var ae=ne[pe];if(ae!==null)for(ne[pe]=null,pe=0;pe<ae.length;pe++){var le=ae[pe];le!==null&&(le.lane&=-536870913)}a&=~ye}s!==0&&Os(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Os(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-He(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function xi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-He(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Tr(e,n){var a=n&-n;return a=(a&42)!==0?1:Ar(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ar(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wa(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:fv(e.type))}function Ps(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var Gn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Gn,xn="__reactProps$"+Gn,la="__reactContainer$"+Gn,zs="__reactEvents$"+Gn,Xc="__reactListeners$"+Gn,Wc="__reactHandles$"+Gn,Yo="__reactResources$"+Gn,qa="__reactMarker$"+Gn;function w(e){delete e[rn],delete e[xn],delete e[zs],delete e[Xc],delete e[Wc]}function Y(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[la]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Zg(e);e!==null;){if(a=e[rn])return a;e=Zg(e)}return n}e=a,a=e.parentNode}return null}function re(e){if(e=e[rn]||e[la]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function se(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Z(e){var n=e[Yo];return n||(n=e[Yo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Me(e){e[qa]=!0}var ze=new Set,Xe={};function Fe(e,n){$e(e,n),$e(e+"Capture",n)}function $e(e,n){for(Xe[e]=n,e=0;e<n.length;e++)ze.add(n[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},pt={};function Nt(e){return Ie.call(pt,e)?!0:Ie.call(et,e)?!1:it.test(e)?pt[e]=!0:(et[e]=!0,!1)}function Vt(e,n,a){if(Nt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ot(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function gt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function We(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yn(e){if(!e._valueTracker){var n=Xt(e)?"checked":"value";e._valueTracker=Tt(e,n,""+e[n])}}function Ui(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Xt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ya=/[\n"\\]/g;function xt(e){return e.replace(Ya,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,s,c,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+We(n)):e.value!==""+We(n)&&(e.value=""+We(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?fn(e,v,We(n)):a!=null?fn(e,v,We(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+We(T):e.removeAttribute("name")}function Dn(e,n,a,s,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){yn(e);return}a=a!=null?""+We(a):"",n=n!=null?""+We(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),yn(e)}function fn(e,n,a){n==="number"&&mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+We(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function wr(e,n,a){if(n!=null&&(n=""+We(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+We(a):""}function yi(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(me(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=We(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),yn(e)}function Cr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var _0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||_0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ih(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Fh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Fh(e,f,n[f])}function qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),y0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(e){return y0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Li(){}var Yc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,Ur=null;function Hh(e){var n=re(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[xn]||null;if(!c)throw Error(r(90));Tn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ui(s)}break e;case"textarea":wr(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var Kc=!1;function kh(e,n,a){if(Kc)return e(n,a);Kc=!0;try{var s=e(n);return s}finally{if(Kc=!1,(Dr!==null||Ur!==null)&&(zl(),Dr&&(n=Dr,e=Ur,Ur=Dr=null,Hh(n),e)))for(n=0;n<e.length;n++)Hh(e[n])}}function Bs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Ni)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{Qc=!1}var ca=null,Jc=null,Ko=null;function Gh(){if(Ko)return Ko;var e,n=Jc,a=n.length,s,c="value"in ca?ca.value:ca.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(s=1;s<=v&&n[a-s]===c[f-s];s++);return Ko=c.slice(e,1<s?1-s:void 0)}function Qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function Vh(){return!1}function On(e){function n(a,s,c,f,v){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jo:Vh,this.isPropagationStopped=Vh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=On(Za),Is=x({},Za,{view:0,detail:0}),S0=On(Is),$c,eu,Hs,el=x({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hs&&(Hs&&e.type==="mousemove"?($c=e.screenX-Hs.screenX,eu=e.screenY-Hs.screenY):eu=$c=0,Hs=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:eu}}),jh=On(el),M0=x({},el,{dataTransfer:0}),b0=On(M0),E0=x({},Is,{relatedTarget:0}),tu=On(E0),T0=x({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),A0=On(T0),R0=x({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w0=On(R0),C0=x({},Za,{data:0}),Xh=On(C0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=L0[e])?!!n[e]:!1}function nu(){return N0}var O0=x({},Is,{key:function(e){if(e.key){var n=D0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P0=On(O0),z0=x({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=On(z0),B0=x({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),F0=On(B0),I0=x({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),H0=On(I0),k0=x({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=On(k0),V0=x({},Za,{newState:0,oldState:0}),j0=On(V0),X0=[9,13,27,32],iu=Ni&&"CompositionEvent"in window,ks=null;Ni&&"documentMode"in document&&(ks=document.documentMode);var W0=Ni&&"TextEvent"in window&&!ks,qh=Ni&&(!iu||ks&&8<ks&&11>=ks),Yh=" ",Zh=!1;function Kh(e,n){switch(e){case"keyup":return X0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function q0(e,n){switch(e){case"compositionend":return Qh(n);case"keypress":return n.which!==32?null:(Zh=!0,Yh);case"textInput":return e=n.data,e===Yh&&Zh?null:e;default:return null}}function Y0(e,n){if(Lr)return e==="compositionend"||!iu&&Kh(e,n)?(e=Gh(),Ko=Jc=ca=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qh&&n.locale!=="ko"?null:n.data;default:return null}}var Z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Z0[e.type]:n==="textarea"}function $h(e,n,a,s){Dr?Ur?Ur.push(s):Ur=[s]:Dr=s,n=Vl(n,"onChange"),0<n.length&&(a=new $o("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Gs=null,Vs=null;function K0(e){Pg(e,0)}function tl(e){var n=se(e);if(Ui(n))return e}function ep(e,n){if(e==="change")return n}var tp=!1;if(Ni){var au;if(Ni){var ru="oninput"in document;if(!ru){var np=document.createElement("div");np.setAttribute("oninput","return;"),ru=typeof np.oninput=="function"}au=ru}else au=!1;tp=au&&(!document.documentMode||9<document.documentMode)}function ip(){Gs&&(Gs.detachEvent("onpropertychange",ap),Vs=Gs=null)}function ap(e){if(e.propertyName==="value"&&tl(Vs)){var n=[];$h(n,Vs,e,Zc(e)),kh(K0,n)}}function Q0(e,n,a){e==="focusin"?(ip(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",ap)):e==="focusout"&&ip()}function J0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Vs)}function $0(e,n){if(e==="click")return tl(n)}function ex(e,n){if(e==="input"||e==="change")return tl(n)}function tx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vn=typeof Object.is=="function"?Object.is:tx;function js(e,n){if(Vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ie.call(n,c)||!Vn(e[c],n[c]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sp(e,n){var a=rp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rp(a)}}function op(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?op(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mn(e.document)}return n}function su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var nx=Ni&&"documentMode"in document&&11>=document.documentMode,Nr=null,ou=null,Xs=null,lu=!1;function cp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||Nr==null||Nr!==mn(s)||(s=Nr,"selectionStart"in s&&su(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xs&&js(Xs,s)||(Xs=s,s=Vl(ou,"onSelect"),0<s.length&&(n=new $o("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Nr)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Or={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},cu={},up={};Ni&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Qa(e){if(cu[e])return cu[e];if(!Or[e])return e;var n=Or[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in up)return cu[e]=n[a];return e}var fp=Qa("animationend"),dp=Qa("animationiteration"),hp=Qa("animationstart"),ix=Qa("transitionrun"),ax=Qa("transitionstart"),rx=Qa("transitioncancel"),pp=Qa("transitionend"),mp=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function ui(e,n){mp.set(e,n),Fe(n,[e])}var nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ei=[],Pr=0,fu=0;function il(){for(var e=Pr,n=fu=Pr=0;n<e;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}f!==0&&gp(a,c,f)}}function al(e,n,a,s){ei[Pr++]=e,ei[Pr++]=n,ei[Pr++]=a,ei[Pr++]=s,fu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function du(e,n,a,s){return al(e,n,a,s),rl(e)}function Ja(e,n){return al(e,null,null,n),rl(e)}function gp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-He(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<po)throw po=0,Mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function sx(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,s){return new sx(e,n,a,s)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function sl(e,n,a,s,c,f){var v=0;if(s=e,typeof e=="function")hu(e)&&(v=1);else if(typeof e=="string")v=fy(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case A:return e=jn(31,a,n,c),e.elementType=A,e.lanes=f,e;case C:return $a(a.children,c,f,n);case b:v=8,c|=24;break;case _:return e=jn(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case j:return e=jn(13,a,n,c),e.elementType=j,e.lanes=f,e;case G:return e=jn(19,a,n,c),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:v=10;break e;case k:v=9;break e;case L:v=11;break e;case I:v=14;break e;case J:v=16,s=null;break e}v=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=jn(v,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function $a(e,n,a,s){return e=jn(7,e,s,n),e.lanes=a,e}function pu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function _p(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function mu(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var xp=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=xp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:mt(n)},xp.set(e,n),n)}return{value:e,source:n,stack:mt(n)}}var Br=[],Fr=0,ol=null,Ws=0,ni=[],ii=0,ua=null,Si=1,Mi="";function Pi(e,n){Br[Fr++]=Ws,Br[Fr++]=ol,ol=e,Ws=n}function yp(e,n,a){ni[ii++]=Si,ni[ii++]=Mi,ni[ii++]=ua,ua=e;var s=Si;e=Mi;var c=32-He(s)-1;s&=~(1<<c),a+=1;var f=32-He(n)+c;if(30<f){var v=c-c%5;f=(s&(1<<v)-1).toString(32),s>>=v,c-=v,Si=1<<32-He(n)+c|a<<c|s,Mi=f+e}else Si=1<<f|a<<c|s,Mi=e}function gu(e){e.return!==null&&(Pi(e,1),yp(e,1,0))}function vu(e){for(;e===ol;)ol=Br[--Fr],Br[Fr]=null,Ws=Br[--Fr],Br[Fr]=null;for(;e===ua;)ua=ni[--ii],ni[ii]=null,Mi=ni[--ii],ni[ii]=null,Si=ni[--ii],ni[ii]=null}function Sp(e,n){ni[ii++]=Si,ni[ii++]=Mi,ni[ii++]=ua,Si=n.id,Mi=n.overflow,ua=e}var Sn=null,Yt=null,bt=!1,fa=null,ai=!1,_u=Error(r(519));function da(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qs(ti(n,e)),_u}function Mp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[rn]=e,n[xn]=s,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)_t(go[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Dn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),yi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ig(n.textContent,a)?(s.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),s.onScroll!=null&&_t("scroll",n),s.onScrollEnd!=null&&_t("scrollend",n),s.onClick!=null&&(n.onclick=Li),n=!0):n=!1,n||da(e,!0)}function bp(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:Sn=Sn.return}}function Ir(e){if(e!==Sn)return!1;if(!bt)return bp(e),bt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bf(e.type,e.memoizedProps)),a=!a),a&&Yt&&da(e),bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Yt=Yg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Yt=Yg(e)}else n===27?(n=Yt,Aa(e.type)?(e=Gf,Gf=null,Yt=e):Yt=n):Yt=Sn?si(e.stateNode.nextSibling):null;return!0}function er(){Yt=Sn=null,bt=!1}function xu(){var e=fa;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),fa=null),e}function qs(e){fa===null?fa=[e]:fa.push(e)}var yu=N(null),tr=null,zi=null;function ha(e,n,a){be(yu,n._currentValue),n._currentValue=a}function Bi(e){e._currentValue=yu.current,ee(yu)}function Su(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Mu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var z=0;z<n.length;z++)if(T.context===n[z]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Su(f.return,a,e),s||(v=null);break e}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Su(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Hr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=c.type;Vn(c.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(c===_e.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}c=c.return}e!==null&&Mu(n,e,a,s),n.flags|=262144}function ll(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){tr=e,zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return Ep(tr,e)}function cl(e,n){return tr===null&&nr(e),Ep(e,n)}function Ep(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(e===null)throw Error(r(308));zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else zi=zi.next=n;return a}var ox=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},lx=o.unstable_scheduleCallback,cx=o.unstable_NormalPriority,sn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new ox,data:new Map,refCount:0}}function Ys(e){e.refCount--,e.refCount===0&&lx(cx,function(){e.controller.abort()})}var Zs=null,Eu=0,kr=0,Gr=null;function ux(e,n){if(Zs===null){var a=Zs=[];Eu=0,kr=wf(),Gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Eu++,n.then(Tp,Tp),n}function Tp(){if(--Eu===0&&Zs!==null){Gr!==null&&(Gr.status="fulfilled");var e=Zs;Zs=null,kr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function fx(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Ap=U.S;U.S=function(e,n){cg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ux(e,n),Ap!==null&&Ap(e,n)};var ir=N(null);function Tu(){var e=ir.current;return e!==null?e:jt.pooledCache}function ul(e,n){n===null?be(ir,ir.current):be(ir,n.pool)}function Rp(){var e=Tu();return e===null?null:{parent:sn._currentValue,pool:e}}var Vr=Error(r(460)),Au=Error(r(474)),fl=Error(r(542)),dl={then:function(){}};function wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Li,Li),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Up(e),e;default:if(typeof n.status=="string")n.then(Li,Li);else{if(e=jt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Up(e),e}throw rr=n,Vr}}function ar(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rr=a,Vr):a}}var rr=null;function Dp(){if(rr===null)throw Error(r(459));var e=rr;return rr=null,e}function Up(e){if(e===Vr||e===fl)throw Error(r(483))}var jr=null,Ks=0;function hl(e){var n=Ks;return Ks+=1,jr===null&&(jr=[]),Cp(jr,e,n)}function Qs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pl(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lp(e){function n(K,V){if(e){var te=K.deletions;te===null?(K.deletions=[V],K.flags|=16):te.push(V)}}function a(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function s(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function c(K,V){return K=Oi(K,V),K.index=0,K.sibling=null,K}function f(K,V,te){return K.index=te,e?(te=K.alternate,te!==null?(te=te.index,te<V?(K.flags|=67108866,V):te):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function v(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function T(K,V,te,ve){return V===null||V.tag!==6?(V=pu(te,K.mode,ve),V.return=K,V):(V=c(V,te),V.return=K,V)}function z(K,V,te,ve){var tt=te.type;return tt===C?pe(K,V,te.props.children,ve,te.key):V!==null&&(V.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===J&&ar(tt)===V.type)?(V=c(V,te.props),Qs(V,te),V.return=K,V):(V=sl(te.type,te.key,te.props,null,K.mode,ve),Qs(V,te),V.return=K,V)}function ne(K,V,te,ve){return V===null||V.tag!==4||V.stateNode.containerInfo!==te.containerInfo||V.stateNode.implementation!==te.implementation?(V=mu(te,K.mode,ve),V.return=K,V):(V=c(V,te.children||[]),V.return=K,V)}function pe(K,V,te,ve,tt){return V===null||V.tag!==7?(V=$a(te,K.mode,ve,tt),V.return=K,V):(V=c(V,te),V.return=K,V)}function ye(K,V,te){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=pu(""+V,K.mode,te),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return te=sl(V.type,V.key,V.props,null,K.mode,te),Qs(te,V),te.return=K,te;case R:return V=mu(V,K.mode,te),V.return=K,V;case J:return V=ar(V),ye(K,V,te)}if(me(V)||fe(V))return V=$a(V,K.mode,te,null),V.return=K,V;if(typeof V.then=="function")return ye(K,hl(V),te);if(V.$$typeof===P)return ye(K,cl(K,V),te);pl(K,V)}return null}function ae(K,V,te,ve){var tt=V!==null?V.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return tt!==null?null:T(K,V,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case M:return te.key===tt?z(K,V,te,ve):null;case R:return te.key===tt?ne(K,V,te,ve):null;case J:return te=ar(te),ae(K,V,te,ve)}if(me(te)||fe(te))return tt!==null?null:pe(K,V,te,ve,null);if(typeof te.then=="function")return ae(K,V,hl(te),ve);if(te.$$typeof===P)return ae(K,V,cl(K,te),ve);pl(K,te)}return null}function le(K,V,te,ve,tt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return K=K.get(te)||null,T(V,K,""+ve,tt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return K=K.get(ve.key===null?te:ve.key)||null,z(V,K,ve,tt);case R:return K=K.get(ve.key===null?te:ve.key)||null,ne(V,K,ve,tt);case J:return ve=ar(ve),le(K,V,te,ve,tt)}if(me(ve)||fe(ve))return K=K.get(te)||null,pe(V,K,ve,tt,null);if(typeof ve.then=="function")return le(K,V,te,hl(ve),tt);if(ve.$$typeof===P)return le(K,V,te,cl(V,ve),tt);pl(V,ve)}return null}function je(K,V,te,ve){for(var tt=null,At=null,qe=V,ft=V=0,St=null;qe!==null&&ft<te.length;ft++){qe.index>ft?(St=qe,qe=null):St=qe.sibling;var Rt=ae(K,qe,te[ft],ve);if(Rt===null){qe===null&&(qe=St);break}e&&qe&&Rt.alternate===null&&n(K,qe),V=f(Rt,V,ft),At===null?tt=Rt:At.sibling=Rt,At=Rt,qe=St}if(ft===te.length)return a(K,qe),bt&&Pi(K,ft),tt;if(qe===null){for(;ft<te.length;ft++)qe=ye(K,te[ft],ve),qe!==null&&(V=f(qe,V,ft),At===null?tt=qe:At.sibling=qe,At=qe);return bt&&Pi(K,ft),tt}for(qe=s(qe);ft<te.length;ft++)St=le(qe,K,ft,te[ft],ve),St!==null&&(e&&St.alternate!==null&&qe.delete(St.key===null?ft:St.key),V=f(St,V,ft),At===null?tt=St:At.sibling=St,At=St);return e&&qe.forEach(function(Ua){return n(K,Ua)}),bt&&Pi(K,ft),tt}function nt(K,V,te,ve){if(te==null)throw Error(r(151));for(var tt=null,At=null,qe=V,ft=V=0,St=null,Rt=te.next();qe!==null&&!Rt.done;ft++,Rt=te.next()){qe.index>ft?(St=qe,qe=null):St=qe.sibling;var Ua=ae(K,qe,Rt.value,ve);if(Ua===null){qe===null&&(qe=St);break}e&&qe&&Ua.alternate===null&&n(K,qe),V=f(Ua,V,ft),At===null?tt=Ua:At.sibling=Ua,At=Ua,qe=St}if(Rt.done)return a(K,qe),bt&&Pi(K,ft),tt;if(qe===null){for(;!Rt.done;ft++,Rt=te.next())Rt=ye(K,Rt.value,ve),Rt!==null&&(V=f(Rt,V,ft),At===null?tt=Rt:At.sibling=Rt,At=Rt);return bt&&Pi(K,ft),tt}for(qe=s(qe);!Rt.done;ft++,Rt=te.next())Rt=le(qe,K,ft,Rt.value,ve),Rt!==null&&(e&&Rt.alternate!==null&&qe.delete(Rt.key===null?ft:Rt.key),V=f(Rt,V,ft),At===null?tt=Rt:At.sibling=Rt,At=Rt);return e&&qe.forEach(function(My){return n(K,My)}),bt&&Pi(K,ft),tt}function Ht(K,V,te,ve){if(typeof te=="object"&&te!==null&&te.type===C&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case M:e:{for(var tt=te.key;V!==null;){if(V.key===tt){if(tt=te.type,tt===C){if(V.tag===7){a(K,V.sibling),ve=c(V,te.props.children),ve.return=K,K=ve;break e}}else if(V.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===J&&ar(tt)===V.type){a(K,V.sibling),ve=c(V,te.props),Qs(ve,te),ve.return=K,K=ve;break e}a(K,V);break}else n(K,V);V=V.sibling}te.type===C?(ve=$a(te.props.children,K.mode,ve,te.key),ve.return=K,K=ve):(ve=sl(te.type,te.key,te.props,null,K.mode,ve),Qs(ve,te),ve.return=K,K=ve)}return v(K);case R:e:{for(tt=te.key;V!==null;){if(V.key===tt)if(V.tag===4&&V.stateNode.containerInfo===te.containerInfo&&V.stateNode.implementation===te.implementation){a(K,V.sibling),ve=c(V,te.children||[]),ve.return=K,K=ve;break e}else{a(K,V);break}else n(K,V);V=V.sibling}ve=mu(te,K.mode,ve),ve.return=K,K=ve}return v(K);case J:return te=ar(te),Ht(K,V,te,ve)}if(me(te))return je(K,V,te,ve);if(fe(te)){if(tt=fe(te),typeof tt!="function")throw Error(r(150));return te=tt.call(te),nt(K,V,te,ve)}if(typeof te.then=="function")return Ht(K,V,hl(te),ve);if(te.$$typeof===P)return Ht(K,V,cl(K,te),ve);pl(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,V!==null&&V.tag===6?(a(K,V.sibling),ve=c(V,te),ve.return=K,K=ve):(a(K,V),ve=pu(te,K.mode,ve),ve.return=K,K=ve),v(K)):a(K,V)}return function(K,V,te,ve){try{Ks=0;var tt=Ht(K,V,te,ve);return jr=null,tt}catch(qe){if(qe===Vr||qe===fl)throw qe;var At=jn(29,qe,null,K.mode);return At.lanes=ve,At.return=K,At}finally{}}}var sr=Lp(!0),Np=Lp(!1),pa=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ut&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=rl(e),gp(e,null,a),n}return al(e,s,n,a),rl(e)}function Js(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,xi(e,a)}}function Cu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Du=!1;function $s(){if(Du){var e=Gr;if(e!==null)throw e}}function eo(e,n,a,s){Du=!1;var c=e.updateQueue;pa=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var z=T,ne=z.next;z.next=null,v===null?f=ne:v.next=ne,v=z;var pe=e.alternate;pe!==null&&(pe=pe.updateQueue,T=pe.lastBaseUpdate,T!==v&&(T===null?pe.firstBaseUpdate=ne:T.next=ne,pe.lastBaseUpdate=z))}if(f!==null){var ye=c.baseState;v=0,pe=ne=z=null,T=f;do{var ae=T.lane&-536870913,le=ae!==T.lane;if(le?(yt&ae)===ae:(s&ae)===ae){ae!==0&&ae===kr&&(Du=!0),pe!==null&&(pe=pe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var je=e,nt=T;ae=n;var Ht=a;switch(nt.tag){case 1:if(je=nt.payload,typeof je=="function"){ye=je.call(Ht,ye,ae);break e}ye=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=nt.payload,ae=typeof je=="function"?je.call(Ht,ye,ae):je,ae==null)break e;ye=x({},ye,ae);break e;case 2:pa=!0}}ae=T.callback,ae!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pe===null?(ne=pe=le,z=ye):pe=pe.next=le,v|=ae;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;le=T,T=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);pe===null&&(z=ye),c.baseState=z,c.firstBaseUpdate=ne,c.lastBaseUpdate=pe,f===null&&(c.shared.lanes=0),Sa|=v,e.lanes=v,e.memoizedState=ye}}function Op(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Op(a[e],n)}var Xr=N(null),ml=N(0);function zp(e,n){e=Wi,be(ml,e),be(Xr,n),Wi=e|n.baseLanes}function Uu(){be(ml,Wi),be(Xr,Xr.current)}function Lu(){Wi=ml.current,ee(Xr),ee(ml)}var Xn=N(null),ri=null;function va(e){var n=e.alternate;be(nn,nn.current&1),be(Xn,e),ri===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(ri=e)}function Nu(e){be(nn,nn.current),be(Xn,e),ri===null&&(ri=e)}function Bp(e){e.tag===22?(be(nn,nn.current),be(Xn,e),ri===null&&(ri=e)):_a()}function _a(){be(nn,nn.current),be(Xn,Xn.current)}function Wn(e){ee(Xn),ri===e&&(ri=null),ee(nn)}var nn=N(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Hf(a)||kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=0,ct=null,Ft=null,on=null,vl=!1,Wr=!1,or=!1,_l=0,to=0,qr=null,dx=0;function $t(){throw Error(r(321))}function Ou(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Vn(e[a],n[a]))return!1;return!0}function Pu(e,n,a,s,c,f){return Fi=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?ym:Ku,or=!1,f=a(s,c),or=!1,Wr&&(f=Ip(n,a,s,c)),Fp(e),f}function Fp(e){U.H=ao;var n=Ft!==null&&Ft.next!==null;if(Fi=0,on=Ft=ct=null,vl=!1,to=0,qr=null,n)throw Error(r(300));e===null||ln||(e=e.dependencies,e!==null&&ll(e)&&(ln=!0))}function Ip(e,n,a,s){ct=e;var c=0;do{if(Wr&&(qr=null),to=0,Wr=!1,25<=c)throw Error(r(301));if(c+=1,on=Ft=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=Sm,f=n(a,s)}while(Wr);return f}function hx(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?no(n):n,e=e.useState()[0],(Ft!==null?Ft.memoizedState:null)!==e&&(ct.flags|=1024),n}function zu(){var e=_l!==0;return _l=0,e}function Bu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fu(e){if(vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vl=!1}Fi=0,on=Ft=ct=null,Wr=!1,to=_l=0,qr=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ct.memoizedState=on=e:on=on.next=e,on}function an(){if(Ft===null){var e=ct.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var n=on===null?ct.memoizedState:on.next;if(n!==null)on=n,Ft=e;else{if(e===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},on===null?ct.memoizedState=on=e:on=on.next=e}return on}function xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(e){var n=to;return to+=1,qr===null&&(qr=[]),e=Cp(qr,e,n),n=ct,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?ym:Ku),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return no(e);if(e.$$typeof===P)return Mn(e)}throw Error(r(438,String(e)))}function Iu(e){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ct.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=D;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=an();return Hu(n,Ft,e)}function Hu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=v=null,z=null,ne=n,pe=!1;do{var ye=ne.lane&-536870913;if(ye!==ne.lane?(yt&ye)===ye:(Fi&ye)===ye){var ae=ne.revertLane;if(ae===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ye===kr&&(pe=!0);else if((Fi&ae)===ae){ne=ne.next,ae===kr&&(pe=!0);continue}else ye={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(T=z=ye,v=f):z=z.next=ye,ct.lanes|=ae,Sa|=ae;ye=ne.action,or&&a(f,ye),f=ne.hasEagerState?ne.eagerState:a(f,ye)}else ae={lane:ye,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},z===null?(T=z=ae,v=f):z=z.next=ae,ct.lanes|=ye,Sa|=ye;ne=ne.next}while(ne!==null&&ne!==n);if(z===null?v=f:z.next=T,!Vn(f,e.memoizedState)&&(ln=!0,pe&&(a=Gr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function ku(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);Vn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Hp(e,n,a){var s=ct,c=an(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Vn((Ft||c).memoizedState,a);if(v&&(c.memoizedState=a,ln=!0),c=c.queue,ju(Vp.bind(null,s,c,e),[e]),c.getSnapshot!==n||v||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Yr(9,{destroy:void 0},Gp.bind(null,s,c,a,n),null),jt===null)throw Error(r(349));f||(Fi&127)!==0||kp(s,n,a)}return a}function kp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=xl(),ct.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Gp(e,n,a,s){n.value=a,n.getSnapshot=s,jp(n)&&Xp(e)}function Vp(e,n,a){return a(function(){jp(n)&&Xp(e)})}function jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Vn(e,a)}catch{return!0}}function Xp(e){var n=Ja(e,2);n!==null&&In(n,e,2)}function Gu(e){var n=Un();if(typeof e=="function"){var a=e;if(e=a(),or){Qe(!0);try{a()}finally{Qe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function Wp(e,n,a,s){return e.baseState=a,Hu(e,Ft,typeof s=="function"?s:Ii)}function px(e,n,a,s,c){if(El(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};U.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function qp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=U.T,v={};U.T=v;try{var T=a(c,s),z=U.S;z!==null&&z(v,T),Yp(e,n,T)}catch(ne){Vu(e,n,ne)}finally{f!==null&&v.types!==null&&(f.types=v.types),U.T=f}}else try{f=a(c,s),Yp(e,n,f)}catch(ne){Vu(e,n,ne)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Zp(e,n,s)},function(s){return Vu(e,n,s)}):Zp(e,n,a)}function Zp(e,n,a){n.status="fulfilled",n.value=a,Kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,qp(e,a)))}function Vu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==s)}e.action=null}function Kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qp(e,n){return n}function Jp(e,n){if(bt){var a=jt.formState;if(a!==null){e:{var s=ct;if(bt){if(Yt){t:{for(var c=Yt,f=ai;c.nodeType!==8;){if(!f){c=null;break t}if(c=si(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Yt=si(c.nextSibling),s=c.data==="F!";break e}}da(s)}s=!1}s&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=s,a=vm.bind(null,ct,s),s.dispatch=a,s=Gu(!1),f=Zu.bind(null,ct,!1,s.queue),s=Un(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=px.bind(null,ct,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function $p(e){var n=an();return em(n,Ft,e)}function em(e,n,a){if(n=Hu(e,n,Qp)[0],e=Sl(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=no(n)}catch(v){throw v===Vr?fl:v}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,Yr(9,{destroy:void 0},mx.bind(null,c,a),null)),[s,f,e]}function mx(e,n){e.action=n}function tm(e){var n=an(),a=Ft;if(a!==null)return em(n,a,e);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Yr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ct.updateQueue,n===null&&(n=xl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function nm(){return an().memoizedState}function Ml(e,n,a,s){var c=Un();ct.flags|=e,c.memoizedState=Yr(1|n,{destroy:void 0},a,s===void 0?null:s)}function bl(e,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;Ft!==null&&s!==null&&Ou(s,Ft.memoizedState.deps)?c.memoizedState=Yr(n,f,a,s):(ct.flags|=e,c.memoizedState=Yr(1|n,f,a,s))}function im(e,n){Ml(8390656,8,e,n)}function ju(e,n){bl(2048,8,e,n)}function gx(e){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=xl(),ct.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function am(e){var n=an().memoizedState;return gx({ref:n,nextImpl:e}),function(){if((Ut&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function rm(e,n){return bl(4,2,e,n)}function sm(e,n){return bl(4,4,e,n)}function om(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lm(e,n,a){a=a!=null?a.concat([e]):null,bl(4,4,om.bind(null,n,e),a)}function Xu(){}function cm(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Ou(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function um(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Ou(n,s[1]))return s[0];if(s=e(),or){Qe(!0);try{e()}finally{Qe(!1)}}return a.memoizedState=[s,n],s}function Wu(e,n,a){return a===void 0||(Fi&1073741824)!==0&&(yt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=fg(),ct.lanes|=e,Sa|=e,a)}function fm(e,n,a,s){return Vn(a,n)?a:Xr.current!==null?(e=Wu(e,a,s),Vn(e,n)||(ln=!0),e):(Fi&42)===0||(Fi&1073741824)!==0&&(yt&261930)===0?(ln=!0,e.memoizedState=a):(e=fg(),ct.lanes|=e,Sa|=e,n)}function dm(e,n,a,s,c){var f=W.p;W.p=f!==0&&8>f?f:8;var v=U.T,T={};U.T=T,Zu(e,!1,n,a);try{var z=c(),ne=U.S;if(ne!==null&&ne(T,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var pe=fx(z,s);io(e,n,pe,Zn(e))}else io(e,n,s,Zn(e))}catch(ye){io(e,n,{then:function(){},status:"rejected",reason:ye},Zn())}finally{W.p=f,v!==null&&T.types!==null&&(v.types=T.types),U.T=v}}function vx(){}function qu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=hm(e).queue;dm(e,c,n,q,a===null?vx:function(){return pm(e),a(s)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function pm(e){var n=hm(e);n.next===null&&(n=e.alternate.memoizedState),io(e,n.next.queue,{},Zn())}function Yu(){return Mn(So)}function mm(){return an().memoizedState}function gm(){return an().memoizedState}function _x(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=ma(a);var s=ga(n,e,a);s!==null&&(In(s,n,a),Js(s,n,a)),n={cache:bu()},e.payload=n;return}n=n.return}}function xx(e,n,a){var s=Zn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},El(e)?_m(n,a):(a=du(e,n,a,s),a!==null&&(In(a,e,s),xm(a,n,s)))}function vm(e,n,a){var s=Zn();io(e,n,a,s)}function io(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(e))_m(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,Vn(T,v))return al(e,n,c,0),jt===null&&il(),!1}catch{}finally{}if(a=du(e,n,c,s),a!==null)return In(a,e,s),xm(a,n,s),!0}return!1}function Zu(e,n,a,s){if(s={lane:2,revertLane:wf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},El(e)){if(n)throw Error(r(479))}else n=du(e,a,s,2),n!==null&&In(n,e,2)}function El(e){var n=e.alternate;return e===ct||n!==null&&n===ct}function _m(e,n){Wr=vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function xm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,xi(e,a)}}var ao={readContext:Mn,use:yl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};ao.useEffectEvent=$t;var ym={readContext:Mn,use:yl,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,om.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=Un();n=n===void 0?null:n;var s=e();if(or){Qe(!0);try{e()}finally{Qe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Un();if(a!==void 0){var c=a(n);if(or){Qe(!0);try{a(n)}finally{Qe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=xx.bind(null,ct,e),[s.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=vm.bind(null,ct,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(e,n){var a=Un();return Wu(a,e,n)},useTransition:function(){var e=Gu(!1);return e=dm.bind(null,ct,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ct,c=Un();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),jt===null)throw Error(r(349));(yt&127)!==0||kp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,im(Vp.bind(null,s,f,e),[e]),s.flags|=2048,Yr(9,{destroy:void 0},Gp.bind(null,s,f,a,n),null),a},useId:function(){var e=Un(),n=jt.identifierPrefix;if(bt){var a=Mi,s=Si;a=(s&~(1<<32-He(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=_l++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var n=Un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zu.bind(null,ct,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return Un().memoizedState=_x.bind(null,ct)},useEffectEvent:function(e){var n=Un(),a={impl:e};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ku={readContext:Mn,use:yl,useCallback:cm,useContext:Mn,useEffect:ju,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:Sl,useRef:nm,useState:function(){return Sl(Ii)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=an();return fm(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Sl(Ii)[0],n=an().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Yu,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=an();return Wp(a,Ft,e,n)},useMemoCache:Iu,useCacheRefresh:gm};Ku.useEffectEvent=am;var Sm={readContext:Mn,use:yl,useCallback:cm,useContext:Mn,useEffect:ju,useImperativeHandle:lm,useInsertionEffect:rm,useLayoutEffect:sm,useMemo:um,useReducer:ku,useRef:nm,useState:function(){return ku(Ii)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=an();return Ft===null?Wu(a,e,n):fm(a,Ft.memoizedState,e,n)},useTransition:function(){var e=ku(Ii)[0],n=an().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Hp,useId:mm,useHostTransitionStatus:Yu,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=an();return Ft!==null?Wp(a,Ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:gm};Sm.useEffectEvent=am;function Qu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=ma(s);c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,s),n!==null&&(In(n,e,s),Js(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=ma(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,s),n!==null&&(In(n,e,s),Js(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),s=ma(a);s.tag=2,n!=null&&(s.callback=n),n=ga(e,s,a),n!==null&&(In(n,e,a),Js(n,e,a))}};function Mm(e,n,a,s,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!js(a,s)||!js(c,f):!0}function bm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function lr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Em(e){nl(e)}function Tm(e){console.error(e)}function Am(e){nl(e)}function Tl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Rm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $u(e,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Tl(e,n)},a}function wm(e){return e=ma(e),e.tag=3,e}function Cm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Rm(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Rm(n,a,s),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function yx(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Hr(n,a,c,!0),a=Xn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?Bl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Tf(e,s,c)),!1;case 22:return a.flags|=65536,s===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Tf(e,s,c)),!1}throw Error(r(435,a.tag))}return Tf(e,s,c),Bl(),!1}if(bt)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==_u&&(e=Error(r(422),{cause:s}),qs(ti(e,a)))):(s!==_u&&(n=Error(r(423),{cause:s}),qs(ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ti(s,a),c=$u(e.stateNode,s,c),Cu(e,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ti(f,a),ho===null?ho=[f]:ho.push(f),en!==4&&(en=2),n===null)return!0;s=ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=$u(a.stateNode,s,e),Cu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=wm(c),Cm(c,e,a,s),Cu(a,c),!1}a=a.return}while(a!==null);return!1}var ef=Error(r(461)),ln=!1;function bn(e,n,a,s){n.child=e===null?Np(n,null,a,s):sr(n,e.child,a,s)}function Dm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return nr(n),s=Pu(e,n,a,v,f,c),T=zu(),e!==null&&!ln?(Bu(e,n,c),Hi(e,n,c)):(bt&&T&&gu(n),n.flags|=1,bn(e,n,s,c),n.child)}function Um(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Lm(e,n,f,s,c)):(e=sl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!cf(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:js,a(v,s)&&e.ref===n.ref)return Hi(e,n,c)}return n.flags|=1,e=Oi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Lm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(js(f,s)&&e.ref===n.ref)if(ln=!1,n.pendingProps=s=f,cf(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Hi(e,n,c)}return tf(e,n,a,s,c)}function Nm(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Om(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Uu(),Bp(n);else return s=n.lanes=536870912,Om(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(ul(n,f.cachePool),zp(n,f),_a(),n.memoizedState=null):(e!==null&&ul(n,null),Uu(),_a());return bn(e,n,c,a),n.child}function ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Om(e,n,a,s,c){var f=Tu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ul(n,null),Uu(),Bp(n),e!==null&&Hr(e,n,s,!0),n.childLanes=c,null}function Al(e,n){return n=wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Pm(e,n,a){return sr(n,e.child,null,a),e=Al(n,n.pendingProps),e.flags|=2,Wn(n),n.memoizedState=null,e}function Sx(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(bt){if(s.mode==="hidden")return e=Al(n,s),n.lanes=536870912,ro(null,e);if(Nu(n),(e=Yt)?(e=qg(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=_p(e),a.return=n,n.child=a,Sn=n,Yt=null)):e=null,e===null)throw da(n);return n.lanes=536870912,null}return Al(n,s)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Nu(n),c)if(n.flags&256)n.flags&=-257,n=Pm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Hr(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(s=jt,s!==null&&(v=Tr(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ja(e,v),In(s,e,v),ef;Bl(),n=Pm(e,n,a)}else e=f.treeContext,Yt=si(v.nextSibling),Sn=n,bt=!0,fa=null,ai=!1,e!==null&&Sp(n,e),n=Al(n,s),n.flags|=4096;return n}return e=Oi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Rl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,s,c){return nr(n),a=Pu(e,n,a,s,void 0,c),s=zu(),e!==null&&!ln?(Bu(e,n,c),Hi(e,n,c)):(bt&&s&&gu(n),n.flags|=1,bn(e,n,a,c),n.child)}function zm(e,n,a,s,c,f){return nr(n),n.updateQueue=null,a=Ip(n,s,a,c),Fp(e),s=zu(),e!==null&&!ln?(Bu(e,n,f),Hi(e,n,f)):(bt&&s&&gu(n),n.flags|=1,bn(e,n,a,f),n.child)}function Bm(e,n,a,s,c){if(nr(n),n.stateNode===null){var f=zr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Mn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Ru(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Mn(v):zr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Qu(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Ju.enqueueReplaceState(f,f.state,null),eo(n,s,f,c),$s(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,z=lr(a,T);f.props=z;var ne=f.context,pe=a.contextType;v=zr,typeof pe=="object"&&pe!==null&&(v=Mn(pe));var ye=a.getDerivedStateFromProps;pe=typeof ye=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||ne!==v)&&bm(n,f,s,v),pa=!1;var ae=n.memoizedState;f.state=ae,eo(n,s,f,c),$s(),ne=n.memoizedState,T||ae!==ne||pa?(typeof ye=="function"&&(Qu(n,a,ye,s),ne=n.memoizedState),(z=pa||Mm(n,a,z,s,ae,ne,v))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ne),f.props=s,f.state=ne,f.context=v,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,wu(e,n),v=n.memoizedProps,pe=lr(a,v),f.props=pe,ye=n.pendingProps,ae=f.context,ne=a.contextType,z=zr,typeof ne=="object"&&ne!==null&&(z=Mn(ne)),T=a.getDerivedStateFromProps,(ne=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ye||ae!==z)&&bm(n,f,s,z),pa=!1,ae=n.memoizedState,f.state=ae,eo(n,s,f,c),$s();var le=n.memoizedState;v!==ye||ae!==le||pa||e!==null&&e.dependencies!==null&&ll(e.dependencies)?(typeof T=="function"&&(Qu(n,a,T,s),le=n.memoizedState),(pe=pa||Mm(n,a,pe,s,ae,le,z)||e!==null&&e.dependencies!==null&&ll(e.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,le,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,le,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),f.props=s,f.state=le,f.context=z,s=pe):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Rl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=sr(n,e.child,null,c),n.child=sr(n,null,a,c)):bn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Hi(e,n,c),e}function Fm(e,n,a,s){return er(),n.flags|=256,bn(e,n,a,s),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(e){return{baseLanes:e,cachePool:Rp()}}function rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Yn),e}function Im(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(bt){if(c?va(n):_a(),(e=Yt)?(e=qg(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=_p(e),a.return=n,n.child=a,Sn=n,Yt=null)):e=null,e===null)throw da(n);return kf(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(_a(),c=n.mode,T=wl({mode:"hidden",children:T},c),s=$a(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=af(a),s.childLanes=rf(e,v,a),n.memoizedState=nf,ro(null,s)):(va(n),sf(n,T))}var z=e.memoizedState;if(z!==null&&(T=z.dehydrated,T!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=of(e,n,a)):n.memoizedState!==null?(_a(),n.child=e.child,n.flags|=128,n=null):(_a(),T=s.fallback,c=n.mode,s=wl({mode:"visible",children:s.children},c),T=$a(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,sr(n,e.child,null,a),s=n.child,s.memoizedState=af(a),s.childLanes=rf(e,v,a),n.memoizedState=nf,n=ro(null,s));else if(va(n),kf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var ne=v.dgst;v=ne,s=Error(r(419)),s.stack="",s.digest=v,qs({value:s,source:null,stack:null}),n=of(e,n,a)}else if(ln||Hr(e,n,a,!1),v=(a&e.childLanes)!==0,ln||v){if(v=jt,v!==null&&(s=Tr(v,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,Ja(e,s),In(v,e,s),ef;Hf(T)||Bl(),n=of(e,n,a)}else Hf(T)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Yt=si(T.nextSibling),Sn=n,bt=!0,fa=null,ai=!1,e!==null&&Sp(n,e),n=sf(n,s.children),n.flags|=4096);return n}return c?(_a(),T=s.fallback,c=n.mode,z=e.child,ne=z.sibling,s=Oi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,ne!==null?T=Oi(ne,T):(T=$a(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,ro(null,s),s=n.child,T=e.child.memoizedState,T===null?T=af(a):(c=T.cachePool,c!==null?(z=sn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=Rp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=rf(e,v,a),n.memoizedState=nf,ro(e.child,s)):(va(n),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function sf(e,n){return n=wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function of(e,n,a){return sr(n,e.child,null,a),e=sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Hm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Su(e.return,n,a)}function lf(e,n,a,s,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function km(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var v=nn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,be(nn,v),bn(e,n,s,a),s=bt?Ws:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hm(e,a,n);else if(e.tag===19)Hm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),lf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&gl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}lf(n,!0,a,null,f,s);break;case"together":lf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Hi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Hr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Oi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ll(e)))}function Mx(e,n,a){switch(n.tag){case 3:ke(n,n.stateNode.containerInfo),ha(n,sn,e.memoizedState.cache),er();break;case 27:case 5:Je(n);break;case 4:ke(n,n.stateNode.containerInfo);break;case 10:ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Im(e,n,a):(va(n),e=Hi(e,n,a),e!==null?e.sibling:null);va(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Hr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return km(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),be(nn,nn.current),s)break;return null;case 22:return n.lanes=0,Nm(e,n,a,n.pendingProps);case 24:ha(n,sn,e.memoizedState.cache)}return Hi(e,n,a)}function Gm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!cf(e,a)&&(n.flags&128)===0)return ln=!1,Mx(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,bt&&(n.flags&1048576)!==0&&yp(n,Ws,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=ar(n.elementType),n.type=e,typeof e=="function")hu(e)?(s=lr(e,s),n.tag=1,n=Bm(null,n,e,s,a)):(n.tag=0,n=tf(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===L){n.tag=11,n=Dm(null,n,e,s,a);break e}else if(c===I){n.tag=14,n=Um(null,n,e,s,a);break e}}throw n=ue(e)||e,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=lr(s,n.pendingProps),Bm(e,n,s,c,a);case 3:e:{if(ke(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,wu(e,n),eo(n,s,null,a);var v=n.memoizedState;if(s=v.cache,ha(n,sn,s),s!==f.cache&&Mu(n,[sn],a,!0),$s(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Fm(e,n,s,a);break e}else if(s!==c){c=ti(Error(r(424)),n),qs(c),n=Fm(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Yt=si(e.firstChild),Sn=n,bt=!0,fa=null,ai=!0,a=Np(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(er(),s===c){n=Hi(e,n,a);break e}bn(e,n,s,a)}n=n.child}return n;case 26:return Rl(e,n),e===null?(a=$g(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,e=n.pendingProps,s=jl(xe.current).createElement(a),s[rn]=n,s[xn]=e,En(s,a,e),Me(s),n.stateNode=s):n.memoizedState=$g(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Je(n),e===null&&bt&&(s=n.stateNode=Kg(n.type,n.pendingProps,xe.current),Sn=n,ai=!0,c=Yt,Aa(n.type)?(Gf=c,Yt=si(s.firstChild)):Yt=c),bn(e,n,n.pendingProps.children,a),Rl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&bt&&((c=s=Yt)&&(s=Jx(s,n.type,n.pendingProps,ai),s!==null?(n.stateNode=s,Sn=n,Yt=si(s.firstChild),ai=!1,c=!0):c=!1),c||da(n)),Je(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,s=f.children,Bf(c,f)?s=null:v!==null&&Bf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Pu(e,n,hx,null,null,a),So._currentValue=c),Rl(e,n),bn(e,n,s,a),n.child;case 6:return e===null&&bt&&((e=a=Yt)&&(a=$x(a,n.pendingProps,ai),a!==null?(n.stateNode=a,Sn=n,Yt=null,e=!0):e=!1),e||da(n)),null;case 13:return Im(e,n,a);case 4:return ke(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=sr(n,null,s,a):bn(e,n,s,a),n.child;case 11:return Dm(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ha(n,n.type,s.value),bn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,nr(n),c=Mn(c),s=s(c),n.flags|=1,bn(e,n,s,a),n.child;case 14:return Um(e,n,n.type,n.pendingProps,a);case 15:return Lm(e,n,n.type,n.pendingProps,a);case 19:return km(e,n,a);case 31:return Sx(e,n,a);case 22:return Nm(e,n,a,n.pendingProps);case 24:return nr(n),s=Mn(sn),e===null?(c=Tu(),c===null&&(c=jt,f=bu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Ru(n),ha(n,sn,c)):((e.lanes&a)!==0&&(wu(e,n),eo(n,null,null,a),$s()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ha(n,sn,s)):(s=f.cache,ha(n,sn,s),s!==c.cache&&Mu(n,[sn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ki(e){e.flags|=4}function uf(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(mg())e.flags|=8192;else throw rr=dl,Au}else e.flags&=-16777217}function Vm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!av(n))if(mg())e.flags|=8192;else throw rr=dl,Au}function Cl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,Jr|=n)}function so(e,n){if(!bt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Zt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function bx(e,n,a){var s=n.pendingProps;switch(vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(sn),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xu())),Zt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(ki(n),f!==null?(Zt(n),Vm(n,f)):(Zt(n),uf(n,c,null,s,a))):f?f!==e.memoizedState?(ki(n),Zt(n),Vm(n,f)):(Zt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&ki(n),Zt(n),uf(n,c,e,s,a)),null;case 27:if(Dt(n),a=xe.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}e=Ae.current,Ir(n)?Mp(n):(e=Kg(c,s,a),n.stateNode=e,ki(n))}return Zt(n),null;case 5:if(Dt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}if(f=Ae.current,Ir(n))Mp(n);else{var v=jl(xe.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(c,{is:s.is}):v.createElement(c)}}f[rn]=n,f[xn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(En(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ki(n)}}return Zt(n),uf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=xe.current,Ir(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ig(e.nodeValue,a)),e||da(n,!0)}else e=jl(e).createTextNode(s),e[rn]=n,n.stateNode=e}return Zt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Ir(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),e=!1}else a=xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Zt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ir(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),c=!1}else c=xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Cl(n,n.updateQueue),Zt(n),null);case 4:return Oe(),e===null&&Lf(n.stateNode.containerInfo),Zt(n),null;case 10:return Bi(n.type),Zt(n),null;case 19:if(ee(nn),s=n.memoizedState,s===null)return Zt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)so(s,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=gl(e),f!==null){for(n.flags|=128,so(s,!1),e=f.updateQueue,n.updateQueue=e,Cl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)vp(a,e),a=a.sibling;return be(nn,nn.current&1|2),bt&&Pi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&E()>Ol&&(n.flags|=128,c=!0,so(s,!1),n.lanes=4194304)}else{if(!c)if(e=gl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Cl(n,e),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!bt)return Zt(n),null}else 2*E()-s.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,c=!0,so(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=E(),e.sibling=null,a=nn.current,be(nn,c?a&1|2:a&1),bt&&Pi(n,s.treeForkCount),e):(Zt(n),null);case 22:case 23:return Wn(n),Lu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Cl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ee(ir),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(sn),Zt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ex(e,n){switch(vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bi(sn),Oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Dt(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Wn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ee(nn),null;case 4:return Oe(),null;case 10:return Bi(n.type),null;case 22:case 23:return Wn(n),Lu(),e!==null&&ee(ir),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Bi(sn),null;case 25:return null;default:return null}}function jm(e,n){switch(vu(n),n.tag){case 3:Bi(sn),Oe();break;case 26:case 27:case 5:Dt(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:ee(nn);break;case 10:Bi(n.type);break;case 22:case 23:Wn(n),Lu(),e!==null&&ee(ir);break;case 24:Bi(sn)}}function oo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==c)}}catch(T){Bt(n,n.return,T)}}function xa(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var z=a,ne=T;try{ne()}catch(pe){Bt(c,z,pe)}}}s=s.next}while(s!==f)}}catch(pe){Bt(n,n.return,pe)}}function Xm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pp(n,a)}catch(s){Bt(e,e.return,s)}}}function Wm(e,n,a){a.props=lr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Bt(e,n,s)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Bt(e,n,c)}}function bi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Bt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Bt(e,n,c)}else a.current=null}function qm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Bt(e,e.return,c)}}function ff(e,n,a){try{var s=e.stateNode;Wx(s,e.type,a,n),s[xn]=n}catch(c){Bt(e,e.return,c)}}function Ym(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function df(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Li));else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(hf(e,n,a),e=e.sibling;e!==null;)hf(e,n,a),e=e.sibling}function Dl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Dl(e,n,a),e=e.sibling;e!==null;)Dl(e,n,a),e=e.sibling}function Zm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,s,a),n[rn]=e,n[xn]=a}catch(f){Bt(e,e.return,f)}}var Gi=!1,cn=!1,pf=!1,Km=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Tx(e,n){if(e=e.containerInfo,Pf=Ql,e=lp(e),su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,z=-1,ne=0,pe=0,ye=e,ae=null;t:for(;;){for(var le;ye!==a||c!==0&&ye.nodeType!==3||(T=v+c),ye!==f||s!==0&&ye.nodeType!==3||(z=v+s),ye.nodeType===3&&(v+=ye.nodeValue.length),(le=ye.firstChild)!==null;)ae=ye,ye=le;for(;;){if(ye===e)break t;if(ae===a&&++ne===c&&(T=v),ae===f&&++pe===s&&(z=v),(le=ye.nextSibling)!==null)break;ye=ae,ae=ye.parentNode}ye=le}a=T===-1||z===-1?null:{start:T,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:e,selectionRange:a},Ql=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var je=lr(a.type,c);e=s.getSnapshotBeforeUpdate(je,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(nt){Bt(a,a.return,nt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function Qm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),s&4&&oo(5,a);break;case 1:if(ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Bt(a,a.return,v)}else{var c=lr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Bt(a,a.return,v)}}s&64&&Xm(a),s&512&&lo(a,a.return);break;case 3:if(ji(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(e,n)}catch(v){Bt(a,a.return,v)}}break;case 27:n===null&&s&4&&Zm(a);case 26:case 5:ji(e,a),n===null&&s&4&&qm(a),s&512&&lo(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),s&4&&eg(e,a);break;case 13:ji(e,a),s&4&&tg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ox.bind(null,a),ey(e,a))));break;case 22:if(s=a.memoizedState!==null||Gi,!s){n=n!==null&&n.memoizedState!==null||cn,c=Gi;var f=cn;Gi=s,(cn=n)&&!f?Xi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),Gi=c,cn=f}break;case 30:break;default:ji(e,a)}}function Jm(e){var n=e.alternate;n!==null&&(e.alternate=null,Jm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&w(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,Pn=!1;function Vi(e,n,a){for(a=a.child;a!==null;)$m(e,n,a),a=a.sibling}function $m(e,n,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:cn||bi(a,n),Vi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||bi(a,n);var s=Qt,c=Pn;Aa(a.type)&&(Qt=a.stateNode,Pn=!1),Vi(e,n,a),_o(a.stateNode),Qt=s,Pn=c;break;case 5:cn||bi(a,n);case 6:if(s=Qt,c=Pn,Qt=null,Vi(e,n,a),Qt=s,Pn=c,Qt!==null)if(Pn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Qt!==null&&(Pn?(e=Qt,Xg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ss(e)):Xg(Qt,a.stateNode));break;case 4:s=Qt,c=Pn,Qt=a.stateNode.containerInfo,Pn=!0,Vi(e,n,a),Qt=s,Pn=c;break;case 0:case 11:case 14:case 15:xa(2,a,n),cn||xa(4,a,n),Vi(e,n,a);break;case 1:cn||(bi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Wm(a,n,s)),Vi(e,n,a);break;case 21:Vi(e,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Vi(e,n,a),cn=s;break;default:Vi(e,n,a)}}function eg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ss(e)}catch(a){Bt(n,n.return,a)}}}function tg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ss(e)}catch(a){Bt(n,n.return,a)}}function Ax(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Km),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Km),n;default:throw Error(r(435,e.tag))}}function Ul(e,n){var a=Ax(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Px.bind(null,e,s);s.then(c,c)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Aa(T.type)){Qt=T.stateNode,Pn=!1;break e}break;case 5:Qt=T.stateNode,Pn=!1;break e;case 3:case 4:Qt=T.stateNode.containerInfo,Pn=!0;break e}T=T.return}if(Qt===null)throw Error(r(160));$m(f,v,c),Qt=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ng(n,e),n=n.sibling}var fi=null;function ng(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),Bn(e),s&4&&(xa(3,e,e.return),oo(3,e),xa(5,e,e.return));break;case 1:zn(n,e),Bn(e),s&512&&(cn||a===null||bi(a,a.return)),s&64&&Gi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=fi;if(zn(n,e),Bn(e),s&512&&(cn||a===null||bi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[qa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,s,a),f[rn]=e,Me(f),s=f;break e;case"link":var v=nv("link","href",c).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;case"meta":if(v=nv("meta","content",c).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=c.createElement(s),En(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=e,Me(f),s=f}e.stateNode=s}else iv(c,e.type,e.stateNode);else e.stateNode=tv(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?iv(c,e.type,e.stateNode):tv(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&ff(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),Bn(e),s&512&&(cn||a===null||bi(a,a.return)),a!==null&&s&4&&ff(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),Bn(e),s&512&&(cn||a===null||bi(a,a.return)),e.flags&32){c=e.stateNode;try{Cr(c,"")}catch(je){Bt(e,e.return,je)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,ff(e,c,a!==null?a.memoizedProps:c)),s&1024&&(pf=!0);break;case 6:if(zn(n,e),Bn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(je){Bt(e,e.return,je)}}break;case 3:if(ql=null,c=fi,fi=Xl(n.containerInfo),zn(n,e),fi=c,Bn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ss(n.containerInfo)}catch(je){Bt(e,e.return,je)}pf&&(pf=!1,ig(e));break;case 4:s=fi,fi=Xl(e.stateNode.containerInfo),zn(n,e),Bn(e),fi=s;break;case 12:zn(n,e),Bn(e);break;case 31:zn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 13:zn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nl=E()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,ne=Gi,pe=cn;if(Gi=ne||c,cn=pe||z,zn(n,e),cn=pe,Gi=ne,Bn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Gi||cn||cr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=z.stateNode;var ye=z.memoizedProps.style,ae=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;T.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(je){Bt(z,z.return,je)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(je){Bt(z,z.return,je)}}}else if(n.tag===18){if(a===null){z=n;try{var le=z.stateNode;c?Wg(le,!0):Wg(z.stateNode,!1)}catch(je){Bt(z,z.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ul(e,a))));break;case 19:zn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ul(e,s)));break;case 30:break;case 21:break;default:zn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Ym(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=df(e);Dl(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(Cr(v,""),a.flags&=-33);var T=df(e);Dl(e,T,v);break;case 3:case 4:var z=a.stateNode.containerInfo,ne=df(e);hf(e,ne,z);break;default:throw Error(r(161))}}catch(pe){Bt(e,e.return,pe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ig(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qm(e,n.alternate,n),n=n.sibling}function cr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),cr(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Wm(n,n.return,a),cr(n);break;case 27:_o(n.stateNode);case 26:case 5:bi(n,n.return),cr(n);break;case 22:n.memoizedState===null&&cr(n);break;case 30:cr(n);break;default:cr(n)}e=e.sibling}}function Xi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(c,f,a),oo(4,f);break;case 1:if(Xi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ne){Bt(s,s.return,ne)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Op(z[c],T)}catch(ne){Bt(s,s.return,ne)}}a&&v&64&&Xm(f),lo(f,f.return);break;case 27:Zm(f);case 26:case 5:Xi(c,f,a),a&&s===null&&v&4&&qm(f),lo(f,f.return);break;case 12:Xi(c,f,a);break;case 31:Xi(c,f,a),a&&v&4&&eg(c,f);break;case 13:Xi(c,f,a),a&&v&4&&tg(c,f);break;case 22:f.memoizedState===null&&Xi(c,f,a),lo(f,f.return);break;case 30:break;default:Xi(c,f,a)}n=n.sibling}}function mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ys(a))}function gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ys(e))}function di(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ag(e,n,a,s),n=n.sibling}function ag(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:di(e,n,a,s),c&2048&&oo(9,n);break;case 1:di(e,n,a,s);break;case 3:di(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ys(e)));break;case 12:if(c&2048){di(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Bt(n,n.return,z)}}else di(e,n,a,s);break;case 31:di(e,n,a,s);break;case 13:di(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?di(e,n,a,s):co(e,n):f._visibility&2?di(e,n,a,s):(f._visibility|=2,Zr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&mf(v,n);break;case 24:di(e,n,a,s),c&2048&&gf(n.alternate,n);break;default:di(e,n,a,s)}}function Zr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,z=s,ne=v.flags;switch(v.tag){case 0:case 11:case 15:Zr(f,v,T,z,c),oo(8,v);break;case 23:break;case 22:var pe=v.stateNode;v.memoizedState!==null?pe._visibility&2?Zr(f,v,T,z,c):co(f,v):(pe._visibility|=2,Zr(f,v,T,z,c)),c&&ne&2048&&mf(v.alternate,v);break;case 24:Zr(f,v,T,z,c),c&&ne&2048&&gf(v.alternate,v);break;default:Zr(f,v,T,z,c)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:co(a,s),c&2048&&mf(s.alternate,s);break;case 24:co(a,s),c&2048&&gf(s.alternate,s);break;default:co(a,s)}n=n.sibling}}var uo=8192;function Kr(e,n,a){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)rg(e,n,a),e=e.sibling}function rg(e,n,a){switch(e.tag){case 26:Kr(e,n,a),e.flags&uo&&e.memoizedState!==null&&dy(a,fi,e.memoizedState,e.memoizedProps);break;case 5:Kr(e,n,a);break;case 3:case 4:var s=fi;fi=Xl(e.stateNode.containerInfo),Kr(e,n,a),fi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=uo,uo=16777216,Kr(e,n,a),uo=s):Kr(e,n,a));break;default:Kr(e,n,a)}}function sg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,lg(s,e)}sg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)og(e),e=e.sibling}function og(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&xa(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ll(e)):fo(e);break;default:fo(e)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,lg(s,e)}sg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}e=e.sibling}}function lg(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ys(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else e:for(a=e;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(Jm(s),s===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var Rx={getCacheForType:function(e){var n=Mn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},wx=typeof WeakMap=="function"?WeakMap:Map,Ut=0,jt=null,vt=null,yt=0,zt=0,qn=null,ya=!1,Qr=!1,vf=!1,Wi=0,en=0,Sa=0,ur=0,_f=0,Yn=0,Jr=0,ho=null,Fn=null,xf=!1,Nl=0,cg=0,Ol=1/0,Pl=null,Ma=null,dn=0,ba=null,$r=null,qi=0,yf=0,Sf=null,ug=null,po=0,Mf=null;function Zn(){return(Ut&2)!==0&&yt!==0?yt&-yt:U.T!==null?wf():Wa()}function fg(){if(Yn===0)if((yt&536870912)===0||bt){var e=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),Yn=e}else Yn=536870912;return e=Xn.current,e!==null&&(e.flags|=32),Yn}function In(e,n,a){(e===jt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(es(e,0),Ea(e,yt,Yn,!1)),Cn(e,a),((Ut&2)===0||e!==jt)&&(e===jt&&((Ut&2)===0&&(ur|=a),en===4&&Ea(e,yt,Yn,!1)),Ei(e))}function dg(e,n,a){if((Ut&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ve(e,n),c=s?Ux(e,n):Ef(e,n,!0),f=s;do{if(c===0){Qr&&!s&&Ea(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Cx(a)){c=Ef(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=e;c=ho;var z=T.current.memoizedState.isDehydrated;if(z&&(es(T,v).flags|=256),v=Ef(T,v,!1),v!==2){if(vf&&!z){T.errorRecoveryDisabledLanes|=f,ur|=f,c=4;break e}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){es(e,0),Ea(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ea(s,n,Yn,!ya);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Nl+300-E(),10<c)){if(Ea(s,n,Yn,!ya),Se(s,0,!0)!==0)break e;qi=n,s.timeoutHandle=Vg(hg.bind(null,s,a,Fn,Pl,xf,n,Yn,ur,Jr,ya,f,"Throttled",-0,0),c);break e}hg(s,a,Fn,Pl,xf,n,Yn,ur,Jr,ya,f,null,-0,0)}}break}while(!0);Ei(e)}function hg(e,n,a,s,c,f,v,T,z,ne,pe,ye,ae,le){if(e.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},rg(n,f,ye);var je=(f&62914560)===f?Nl-E():(f&4194048)===f?cg-E():0;if(je=hy(ye,je),je!==null){qi=f,e.cancelPendingCommit=je(Sg.bind(null,e,n,f,a,s,c,v,T,z,pe,ye,null,ae,le)),Ea(e,f,v,!ne);return}}Sg(e,n,f,a,s,c,v,T,z)}function Cx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ea(e,n,a,s){n&=~_f,n&=~ur,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-He(c),v=1<<f;s[f]=-1,c&=~v}a!==0&&Os(e,a,n)}function zl(){return(Ut&6)===0?(mo(0),!1):!0}function bf(){if(vt!==null){if(zt===0)var e=vt.return;else e=vt,zi=tr=null,Fu(e),jr=null,Ks=0,e=vt;for(;e!==null;)jm(e.alternate,e),e=e.return;vt=null}}function es(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Zx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),qi=0,bf(),jt=e,vt=a=Oi(e.current,null),yt=n,zt=0,qn=null,ya=!1,Qr=Ve(e,n),vf=!1,Jr=Yn=_f=ur=Sa=en=0,Fn=ho=null,xf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-He(s),f=1<<c;n|=e[c],s&=~f}return Wi=n,il(),a}function pg(e,n){ct=null,U.H=ao,n===Vr||n===fl?(n=Dp(),zt=3):n===Au?(n=Dp(),zt=4):zt=n===ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,vt===null&&(en=1,Tl(e,ti(n,e.current)))}function mg(){var e=Xn.current;return e===null?!0:(yt&4194048)===yt?ri===null:(yt&62914560)===yt||(yt&536870912)!==0?e===ri:!1}function gg(){var e=U.H;return U.H=ao,e===null?ao:e}function vg(){var e=U.A;return U.A=Rx,e}function Bl(){en=4,ya||(yt&4194048)!==yt&&Xn.current!==null||(Qr=!0),(Sa&134217727)===0&&(ur&134217727)===0||jt===null||Ea(jt,yt,Yn,!1)}function Ef(e,n,a){var s=Ut;Ut|=2;var c=gg(),f=vg();(jt!==e||yt!==n)&&(Pl=null,es(e,n)),n=!1;var v=en;e:do try{if(zt!==0&&vt!==null){var T=vt,z=qn;switch(zt){case 8:bf(),v=6;break e;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var ne=zt;if(zt=0,qn=null,ts(e,T,z,ne),a&&Qr){v=0;break e}break;default:ne=zt,zt=0,qn=null,ts(e,T,z,ne)}}Dx(),v=en;break}catch(pe){pg(e,pe)}while(!0);return n&&e.shellSuspendCounter++,zi=tr=null,Ut=s,U.H=c,U.A=f,vt===null&&(jt=null,yt=0,il()),v}function Dx(){for(;vt!==null;)_g(vt)}function Ux(e,n){var a=Ut;Ut|=2;var s=gg(),c=vg();jt!==e||yt!==n?(Pl=null,Ol=E()+500,es(e,n)):Qr=Ve(e,n);e:do try{if(zt!==0&&vt!==null){n=vt;var f=qn;t:switch(zt){case 1:zt=0,qn=null,ts(e,n,f,1);break;case 2:case 9:if(wp(f)){zt=0,qn=null,xg(n);break}n=function(){zt!==2&&zt!==9||jt!==e||(zt=7),Ei(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:wp(f)?(zt=0,qn=null,xg(n)):(zt=0,qn=null,ts(e,n,f,7));break;case 5:var v=null;switch(vt.tag){case 26:v=vt.memoizedState;case 5:case 27:var T=vt;if(v?av(v):T.stateNode.complete){zt=0,qn=null;var z=T.sibling;if(z!==null)vt=z;else{var ne=T.return;ne!==null?(vt=ne,Fl(ne)):vt=null}break t}}zt=0,qn=null,ts(e,n,f,5);break;case 6:zt=0,qn=null,ts(e,n,f,6);break;case 8:bf(),en=6;break e;default:throw Error(r(462))}}Lx();break}catch(pe){pg(e,pe)}while(!0);return zi=tr=null,U.H=s,U.A=c,Ut=a,vt!==null?0:(jt=null,yt=0,il(),en)}function Lx(){for(;vt!==null&&!qt();)_g(vt)}function _g(e){var n=Gm(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Fl(e):vt=n}function xg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=zm(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=zm(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Fu(n);default:jm(a,n),n=vt=vp(n,Wi),n=Gm(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Fl(e):vt=n}function ts(e,n,a,s){zi=tr=null,Fu(n),jr=null,Ks=0;var c=n.return;try{if(yx(e,c,n,a,yt)){en=1,Tl(e,ti(a,e.current)),vt=null;return}}catch(f){if(c!==null)throw vt=c,f;en=1,Tl(e,ti(a,e.current)),vt=null;return}n.flags&32768?(bt||s===1?e=!0:Qr||(yt&536870912)!==0?e=!1:(ya=e=!0,(s===2||s===9||s===3||s===6)&&(s=Xn.current,s!==null&&s.tag===13&&(s.flags|=16384))),yg(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){yg(n,ya);return}e=n.return;var a=bx(n.alternate,n,Wi);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=e}while(n!==null);en===0&&(en=5)}function yg(e,n){do{var a=Ex(e.alternate,e);if(a!==null){a.flags&=32767,vt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){vt=e;return}vt=e=a}while(e!==null);en=6,vt=null}function Sg(e,n,a,s,c,f,v,T,z){e.cancelPendingCommit=null;do Il();while(dn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=fu,$n(e,a,f,v,T,z),e===jt&&(vt=jt=null,yt=0),$r=n,ba=e,qi=a,yf=f,Sf=c,ug=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zx(he,function(){return Ag(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,c=W.p,W.p=2,v=Ut,Ut|=4;try{Tx(e,n,a)}finally{Ut=v,W.p=c,U.T=s}}dn=1,Mg(),bg(),Eg()}}function Mg(){if(dn===1){dn=0;var e=ba,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var s=W.p;W.p=2;var c=Ut;Ut|=4;try{ng(n,e);var f=zf,v=lp(e.containerInfo),T=f.focusedElem,z=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&op(T.ownerDocument.documentElement,T)){if(z!==null&&su(T)){var ne=z.start,pe=z.end;if(pe===void 0&&(pe=ne),"selectionStart"in T)T.selectionStart=ne,T.selectionEnd=Math.min(pe,T.value.length);else{var ye=T.ownerDocument||document,ae=ye&&ye.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),je=T.textContent.length,nt=Math.min(z.start,je),Ht=z.end===void 0?nt:Math.min(z.end,je);!le.extend&&nt>Ht&&(v=Ht,Ht=nt,nt=v);var K=sp(T,nt),V=sp(T,Ht);if(K&&V&&(le.rangeCount!==1||le.anchorNode!==K.node||le.anchorOffset!==K.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var te=ye.createRange();te.setStart(K.node,K.offset),le.removeAllRanges(),nt>Ht?(le.addRange(te),le.extend(V.node,V.offset)):(te.setEnd(V.node,V.offset),le.addRange(te))}}}}for(ye=[],le=T;le=le.parentNode;)le.nodeType===1&&ye.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ye.length;T++){var ve=ye[T];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Ql=!!Pf,zf=Pf=null}finally{Ut=c,W.p=s,U.T=a}}e.current=n,dn=2}}function bg(){if(dn===2){dn=0;var e=ba,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var s=W.p;W.p=2;var c=Ut;Ut|=4;try{Qm(e,n.alternate,n)}finally{Ut=c,W.p=s,U.T=a}}dn=3}}function Eg(){if(dn===4||dn===3){dn=0,O();var e=ba,n=$r,a=qi,s=ug;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,$r=ba=null,Tg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ma=null),Rr(a),n=n.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Re,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=U.T,c=W.p,W.p=2,U.T=null;try{for(var f=e.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{U.T=n,W.p=c}}(qi&3)!==0&&Il(),Ei(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Mf?po++:(po=0,Mf=e):po=0,mo(0)}}function Tg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ys(n)))}function Il(){return Mg(),bg(),Eg(),Ag()}function Ag(){if(dn!==5)return!1;var e=ba,n=yf;yf=0;var a=Rr(qi),s=U.T,c=W.p;try{W.p=32>a?32:a,U.T=null,a=Sf,Sf=null;var f=ba,v=qi;if(dn=0,$r=ba=null,qi=0,(Ut&6)!==0)throw Error(r(331));var T=Ut;if(Ut|=4,og(f.current),ag(f,f.current,v,a),Ut=T,mo(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Re,f)}catch{}return!0}finally{W.p=c,U.T=s,Tg(e,n)}}function Rg(e,n,a){n=ti(a,n),n=$u(e.stateNode,n,2),e=ga(e,n,2),e!==null&&(Cn(e,2),Ei(e))}function Bt(e,n,a){if(e.tag===3)Rg(e,e,a);else for(;n!==null;){if(n.tag===3){Rg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){e=ti(a,e),a=wm(2),s=ga(n,a,2),s!==null&&(Cm(a,s,n,e),Cn(s,2),Ei(s));break}}n=n.return}}function Tf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new wx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(vf=!0,c.add(a),e=Nx.bind(null,e,n,a),n.then(e,e))}function Nx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,jt===e&&(yt&a)===a&&(en===4||en===3&&(yt&62914560)===yt&&300>E()-Nl?(Ut&2)===0&&es(e,0):_f|=a,Jr===yt&&(Jr=0)),Ei(e)}function wg(e,n){n===0&&(n=Pt()),e=Ja(e,n),e!==null&&(Cn(e,n),Ei(e))}function Ox(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wg(e,a)}function Px(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),wg(e,a)}function zx(e,n){return at(e,n)}var Hl=null,ns=null,Af=!1,kl=!1,Rf=!1,Ta=0;function Ei(e){e!==ns&&e.next===null&&(ns===null?Hl=ns=e:ns=ns.next=e),kl=!0,Af||(Af=!0,Fx())}function mo(e,n){if(!Rf&&kl){Rf=!0;do for(var a=!1,s=Hl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-He(42|e)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Lg(s,f))}else f=yt,f=Se(s,s===jt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ve(s,f)||(a=!0,Lg(s,f));s=s.next}while(a);Rf=!1}}function Bx(){Cg()}function Cg(){kl=Af=!1;var e=0;Ta!==0&&Yx()&&(e=Ta);for(var n=E(),a=null,s=Hl;s!==null;){var c=s.next,f=Dg(s,n);f===0?(s.next=null,a===null?Hl=c:a.next=c,c===null&&(ns=a)):(a=s,(e!==0||(f&3)!==0)&&(kl=!0)),s=c}dn!==0&&dn!==5||mo(e),Ta!==0&&(Ta=0)}function Dg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-He(f),T=1<<v,z=c[v];z===-1?((T&a)===0||(T&s)!==0)&&(c[v]=rt(T,n)):z<=n&&(e.expiredLanes|=T),f&=~T}if(n=jt,a=yt,a=Se(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Wt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ve(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Wt(s),Rr(a)){case 2:case 8:a=Ee;break;case 32:a=he;break;case 268435456:a=Ce;break;default:a=he}return s=Ug.bind(null,e),a=at(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Wt(s),e.callbackPriority=2,e.callbackNode=null,2}function Ug(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Il()&&e.callbackNode!==a)return null;var s=yt;return s=Se(e,e===jt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(dg(e,s,n),Dg(e,E()),e.callbackNode!=null&&e.callbackNode===a?Ug.bind(null,e):null)}function Lg(e,n){if(Il())return null;dg(e,n,!0)}function Fx(){Kx(function(){(Ut&6)!==0?at(ge,Bx):Cg()})}function wf(){if(Ta===0){var e=kr;e===0&&(e=we,we<<=1,(we&261888)===0&&(we=256)),Ta=e}return Ta}function Ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zo(""+e)}function Og(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ix(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ng((c[xn]||null).action),v=s.submitter;v&&(n=(n=v[xn]||null)?Ng(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new $o("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ta!==0){var z=v?Og(c,v):new FormData(c);qu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(T.preventDefault(),z=v?Og(c,v):new FormData(c),qu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var Cf=0;Cf<uu.length;Cf++){var Df=uu[Cf],Hx=Df.toLowerCase(),kx=Df[0].toUpperCase()+Df.slice(1);ui(Hx,"on"+kx)}ui(fp,"onAnimationEnd"),ui(dp,"onAnimationIteration"),ui(hp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(ix,"onTransitionRun"),ui(ax,"onTransitionStart"),ui(rx,"onTransitionCancel"),ui(pp,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function Pg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],z=T.instance,ne=T.currentTarget;if(T=T.listener,z!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=ne;try{f(c)}catch(pe){nl(pe)}c.currentTarget=null,f=z}else for(v=0;v<s.length;v++){if(T=s[v],z=T.instance,ne=T.currentTarget,T=T.listener,z!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=ne;try{f(c)}catch(pe){nl(pe)}c.currentTarget=null,f=z}}}}function _t(e,n){var a=n[zs];a===void 0&&(a=n[zs]=new Set);var s=e+"__bubble";a.has(s)||(zg(n,e,2,!1),a.add(s))}function Uf(e,n,a){var s=0;n&&(s|=4),zg(a,e,s,n)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[Gl]){e[Gl]=!0,ze.forEach(function(a){a!=="selectionchange"&&(Gx.has(a)||Uf(a,!1,e),Uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gl]||(n[Gl]=!0,Uf("selectionchange",!1,n))}}function zg(e,n,a,s){switch(fv(n)){case 2:var c=gy;break;case 8:c=vy;break;default:c=qf}a=c.bind(null,n,a,e),c=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Nf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=s.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=Y(T),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){s=f=v;continue e}T=T.parentNode}}s=s.return}kh(function(){var ne=f,pe=Zc(a),ye=[];e:{var ae=mp.get(e);if(ae!==void 0){var le=$o,je=e;switch(e){case"keypress":if(Qo(a)===0)break e;case"keydown":case"keyup":le=P0;break;case"focusin":je="focus",le=tu;break;case"focusout":je="blur",le=tu;break;case"beforeblur":case"afterblur":le=tu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=F0;break;case fp:case dp:case hp:le=A0;break;case pp:le=H0;break;case"scroll":case"scrollend":le=S0;break;case"wheel":le=G0;break;case"copy":case"cut":case"paste":le=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Wh;break;case"toggle":case"beforetoggle":le=j0}var nt=(n&4)!==0,Ht=!nt&&(e==="scroll"||e==="scrollend"),K=nt?ae!==null?ae+"Capture":null:ae;nt=[];for(var V=ne,te;V!==null;){var ve=V;if(te=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||te===null||K===null||(ve=Bs(V,K),ve!=null&&nt.push(vo(V,ve,te))),Ht)break;V=V.return}0<nt.length&&(ae=new le(ae,je,null,a,pe),ye.push({event:ae,listeners:nt}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ae&&a!==Yc&&(je=a.relatedTarget||a.fromElement)&&(Y(je)||je[la]))break e;if((le||ae)&&(ae=pe.window===pe?pe:(ae=pe.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(je=a.relatedTarget||a.toElement,le=ne,je=je?Y(je):null,je!==null&&(Ht=u(je),nt=je.tag,je!==Ht||nt!==5&&nt!==27&&nt!==6)&&(je=null)):(le=null,je=ne),le!==je)){if(nt=jh,ve="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(nt=Wh,ve="onPointerLeave",K="onPointerEnter",V="pointer"),Ht=le==null?ae:se(le),te=je==null?ae:se(je),ae=new nt(ve,V+"leave",le,a,pe),ae.target=Ht,ae.relatedTarget=te,ve=null,Y(pe)===ne&&(nt=new nt(K,V+"enter",je,a,pe),nt.target=te,nt.relatedTarget=Ht,ve=nt),Ht=ve,le&&je)t:{for(nt=Vx,K=le,V=je,te=0,ve=K;ve;ve=nt(ve))te++;ve=0;for(var tt=V;tt;tt=nt(tt))ve++;for(;0<te-ve;)K=nt(K),te--;for(;0<ve-te;)V=nt(V),ve--;for(;te--;){if(K===V||V!==null&&K===V.alternate){nt=K;break t}K=nt(K),V=nt(V)}nt=null}else nt=null;le!==null&&Bg(ye,ae,le,nt,!1),je!==null&&Ht!==null&&Bg(ye,Ht,je,nt,!0)}}e:{if(ae=ne?se(ne):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var At=ep;else if(Jh(ae))if(tp)At=ex;else{At=J0;var qe=Q0}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ne&&qc(ne.elementType)&&(At=ep):At=$0;if(At&&(At=At(e,ne))){$h(ye,At,a,pe);break e}qe&&qe(e,ae,ne),e==="focusout"&&ne&&ae.type==="number"&&ne.memoizedProps.value!=null&&fn(ae,"number",ae.value)}switch(qe=ne?se(ne):window,e){case"focusin":(Jh(qe)||qe.contentEditable==="true")&&(Nr=qe,ou=ne,Xs=null);break;case"focusout":Xs=ou=Nr=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,cp(ye,a,pe);break;case"selectionchange":if(nx)break;case"keydown":case"keyup":cp(ye,a,pe)}var ft;if(iu)e:{switch(e){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Lr?Kh(e,a)&&(St="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(qh&&a.locale!=="ko"&&(Lr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Lr&&(ft=Gh()):(ca=pe,Jc="value"in ca?ca.value:ca.textContent,Lr=!0)),qe=Vl(ne,St),0<qe.length&&(St=new Xh(St,e,null,a,pe),ye.push({event:St,listeners:qe}),ft?St.data=ft:(ft=Qh(a),ft!==null&&(St.data=ft)))),(ft=W0?q0(e,a):Y0(e,a))&&(St=Vl(ne,"onBeforeInput"),0<St.length&&(qe=new Xh("onBeforeInput","beforeinput",null,a,pe),ye.push({event:qe,listeners:St}),qe.data=ft)),Ix(ye,e,ne,a,pe)}Pg(ye,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Vl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Bs(e,a),c!=null&&s.unshift(vo(e,c,f)),c=Bs(e,n),c!=null&&s.push(vo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Vx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bg(e,n,a,s,c){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,z=T.alternate,ne=T.stateNode;if(T=T.tag,z!==null&&z===s)break;T!==5&&T!==26&&T!==27||ne===null||(z=ne,c?(ne=Bs(a,f),ne!=null&&v.unshift(vo(a,ne,z))):c||(ne=Bs(a,f),ne!=null&&v.push(vo(a,ne,z)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var jx=/\r\n?/g,Xx=/\u0000|\uFFFD/g;function Fg(e){return(typeof e=="string"?e:""+e).replace(jx,`
`).replace(Xx,"")}function Ig(e,n){return n=Fg(n),Fg(e)===n}function It(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Cr(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Cr(e,""+s);break;case"className":Ot(e,"class",s);break;case"tabIndex":Ot(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ot(e,a,s);break;case"style":Ih(e,s,f);break;case"data":if(n!=="object"){Ot(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Zo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(e,n,"name",c.name,c,null),It(e,n,"formEncType",c.formEncType,c,null),It(e,n,"formMethod",c.formMethod,c,null),It(e,n,"formTarget",c.formTarget,c,null)):(It(e,n,"encType",c.encType,c,null),It(e,n,"method",c.method,c,null),It(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Zo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Li);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Zo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":_t("beforetoggle",e),_t("toggle",e),Vt(e,"popover",s);break;case"xlinkActuate":gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":gt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":gt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":gt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":gt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Vt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=x0.get(a)||a,Vt(e,a,s))}}function Of(e,n,a,s,c,f){switch(a){case"style":Ih(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Cr(e,s):(typeof s=="number"||typeof s=="bigint")&&Cr(e,""+s);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Vt(e,a,s)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,f,v,a,null)}}c&&It(e,n,"srcSet",a.srcSet,a,null),s&&It(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var T=f=v=c=null,z=null,ne=null;for(s in a)if(a.hasOwnProperty(s)){var pe=a[s];if(pe!=null)switch(s){case"name":c=pe;break;case"type":v=pe;break;case"checked":z=pe;break;case"defaultChecked":ne=pe;break;case"value":f=pe;break;case"defaultValue":T=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:It(e,n,s,pe,a,null)}}Dn(e,f,T,z,ne,v,c,!1);return;case"select":_t("invalid",e),s=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:It(e,n,c,T,a,null)}n=f,a=v,e.multiple=!!s,n!=null?tn(e,!!s,n,!1):a!=null&&tn(e,!!s,a,!0);return;case"textarea":_t("invalid",e),f=c=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:It(e,n,v,T,a,null)}yi(e,s,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:It(e,n,z,s,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(s=0;s<go.length;s++)_t(go[s],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(s=a[ne],s!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,ne,s,a,null)}return;default:if(qc(n)){for(pe in a)a.hasOwnProperty(pe)&&(s=a[pe],s!==void 0&&Of(e,n,pe,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&It(e,n,T,s,a,null))}function Wx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,z=null,ne=null,pe=null;for(le in a){var ye=a[le];if(a.hasOwnProperty(le)&&ye!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":z=ye;default:s.hasOwnProperty(le)||It(e,n,le,null,s,ye)}}for(var ae in s){var le=s[ae];if(ye=a[ae],s.hasOwnProperty(ae)&&(le!=null||ye!=null))switch(ae){case"type":f=le;break;case"name":c=le;break;case"checked":ne=le;break;case"defaultChecked":pe=le;break;case"value":v=le;break;case"defaultValue":T=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==ye&&It(e,n,ae,le,s,ye)}}Tn(e,v,T,z,ne,pe,f,c);return;case"select":le=v=T=ae=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":le=z;default:s.hasOwnProperty(f)||It(e,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":ae=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==z&&It(e,n,c,f,s,z)}n=T,a=v,s=le,ae!=null?tn(e,!!a,ae,!1):!!s!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":le=ae=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:It(e,n,T,null,s,c)}for(v in s)if(c=s[v],f=a[v],s.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":ae=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&It(e,n,v,c,s,f)}wr(e,ae,le);return;case"option":for(var je in a)if(ae=a[je],a.hasOwnProperty(je)&&ae!=null&&!s.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:It(e,n,je,null,s,ae)}for(z in s)if(ae=s[z],le=a[z],s.hasOwnProperty(z)&&ae!==le&&(ae!=null||le!=null))switch(z){case"selected":e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:It(e,n,z,ae,s,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ae=a[nt],a.hasOwnProperty(nt)&&ae!=null&&!s.hasOwnProperty(nt)&&It(e,n,nt,null,s,ae);for(ne in s)if(ae=s[ne],le=a[ne],s.hasOwnProperty(ne)&&ae!==le&&(ae!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:It(e,n,ne,ae,s,le)}return;default:if(qc(n)){for(var Ht in a)ae=a[Ht],a.hasOwnProperty(Ht)&&ae!==void 0&&!s.hasOwnProperty(Ht)&&Of(e,n,Ht,void 0,s,ae);for(pe in s)ae=s[pe],le=a[pe],!s.hasOwnProperty(pe)||ae===le||ae===void 0&&le===void 0||Of(e,n,pe,ae,s,le);return}}for(var K in a)ae=a[K],a.hasOwnProperty(K)&&ae!=null&&!s.hasOwnProperty(K)&&It(e,n,K,null,s,ae);for(ye in s)ae=s[ye],le=a[ye],!s.hasOwnProperty(ye)||ae===le||ae==null&&le==null||It(e,n,ye,ae,s,le)}function Hg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&Hg(v)){for(v=0,T=c.responseEnd,s+=1;s<a.length;s++){var z=a[s],ne=z.startTime;if(ne>T)break;var pe=z.transferSize,ye=z.initiatorType;pe&&Hg(ye)&&(z=z.responseEnd,v+=pe*(z<T?1:(T-ne)/(z-ne)))}if(--s,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pf=null,zf=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Yx(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(e){return jg.resolve(null).then(e).catch(Qx)}:Vg;function Qx(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Xg(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),ss(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")_o(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,_o(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[qa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&_o(e.ownerDocument.body);a=c}while(a);ss(n)}function Wg(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),w(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[qa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=si(e.nextSibling),e===null)break}return null}function $x(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=si(e.nextSibling),e===null))return null;return e}function qg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=si(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$?"||e.data==="$~"}function kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ey(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Gf=null;function Yg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Zg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Kg(e,n,a){switch(n=jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function _o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);w(e)}var oi=new Map,Qg=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=W.d;W.d={f:ty,r:ny,D:iy,C:ay,L:ry,m:sy,X:ly,S:oy,M:cy};function ty(){var e=Yi.f(),n=zl();return e||n}function ny(e){var n=re(e);n!==null&&n.tag===5&&n.type==="form"?pm(n):Yi.r(e)}var is=typeof document>"u"?null:document;function Jg(e,n,a){var s=is;if(s&&typeof n=="string"&&n){var c=xt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Qg.has(c)||(Qg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),En(n,"link",e),Me(n),s.head.appendChild(n)))}}function iy(e){Yi.D(e),Jg("dns-prefetch",e,null)}function ay(e,n){Yi.C(e,n),Jg("preconnect",e,n)}function ry(e,n,a){Yi.L(e,n,a);var s=is;if(s&&e&&n){var c='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+xt(a.imageSizes)+'"]')):c+='[href="'+xt(e)+'"]';var f=c;switch(n){case"style":f=as(e);break;case"script":f=rs(e)}oi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(xo(f))||n==="script"&&s.querySelector(yo(f))||(n=s.createElement("link"),En(n,"link",e),Me(n),s.head.appendChild(n)))}}function sy(e,n){Yi.m(e,n);var a=is;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xt(s)+'"][href="'+xt(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rs(e)}if(!oi.has(f)&&(e=x({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}s=a.createElement("link"),En(s,"link",e),Me(s),a.head.appendChild(s)}}}function oy(e,n,a){Yi.S(e,n,a);var s=is;if(s&&e){var c=Z(s).hoistableStyles,f=as(e);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(xo(f)))T.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&Vf(e,a);var z=v=s.createElement("link");Me(z),En(z,"link",e),z._p=new Promise(function(ne,pe){z.onload=ne,z.onerror=pe}),z.addEventListener("load",function(){T.loading|=1}),z.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Wl(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function ly(e,n){Yi.X(e,n);var a=is;if(a&&e){var s=Z(a).hoistableScripts,c=rs(e),f=s.get(c);f||(f=a.querySelector(yo(c)),f||(e=x({src:e,async:!0},n),(n=oi.get(c))&&jf(e,n),f=a.createElement("script"),Me(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function cy(e,n){Yi.M(e,n);var a=is;if(a&&e){var s=Z(a).hoistableScripts,c=rs(e),f=s.get(c);f||(f=a.querySelector(yo(c)),f||(e=x({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&jf(e,n),f=a.createElement("script"),Me(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function $g(e,n,a,s){var c=(c=xe.current)?Xl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=Z(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=as(a.href);var f=Z(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(xo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||uy(c,e,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=Z(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function as(e){return'href="'+xt(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function ev(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function uy(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),Me(n),e.head.appendChild(n))}function rs(e){return'[src="'+xt(e)+'"]'}function yo(e){return"script[async]"+e}function tv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(s)return n.instance=s,Me(s),s;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Me(s),En(s,"style",c),Wl(s,a.precedence,e),n.instance=s;case"stylesheet":c=as(a.href);var f=e.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,Me(f),f;s=ev(a),(c=oi.get(c))&&Vf(s,c),f=(e.ownerDocument||e).createElement("link"),Me(f);var v=f;return v._p=new Promise(function(T,z){v.onload=T,v.onerror=z}),En(f,"link",s),n.state.loading|=4,Wl(f,a.precedence,e),n.instance=f;case"script":return f=rs(a.src),(c=e.querySelector(yo(f)))?(n.instance=c,Me(c),c):(s=a,(c=oi.get(f))&&(s=x({},a),jf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Me(c),En(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Wl(s,a.precedence,e));return n.instance}function Wl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ql=null;function nv(e,n,a){if(ql===null){var s=new Map,c=ql=new Map;c.set(a,s)}else c=ql,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[qa]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function iv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function av(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dy(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=as(s.href),f=n.querySelector(xo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Yl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Me(f);return}f=n.ownerDocument||n,s=ev(s),(c=oi.get(c))&&Vf(s,c),f=f.createElement("link"),Me(f);var v=f;v._p=new Promise(function(T,z){v.onload=T,v.onerror=z}),En(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function hy(e,n){return e.stylesheets&&e.count===0&&Kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Xf===0&&(Xf=62500*qx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Xf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Yl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(py,e),Zl=null,Yl.call(e))}function py(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var s=a.get(null);else{a=new Map,Zl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,c),a.set(v,c),this.count++,s=Yl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var So={$$typeof:P,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function my(e,n,a,s,c,f,v,T,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function rv(e,n,a,s,c,f,v,T,z,ne,pe,ye){return e=new my(e,n,a,v,z,ne,pe,ye,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=bu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Ru(f),e}function sv(e){return e?(e=zr,e):zr}function ov(e,n,a,s,c,f){c=sv(c),s.context===null?s.context=c:s.pendingContext=c,s=ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ga(e,s,n),a!==null&&(In(a,e,n),Js(a,e,n))}function lv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){lv(e,n),(e=e.alternate)&&lv(e,n)}function cv(e){if(e.tag===13||e.tag===31){var n=Ja(e,67108864);n!==null&&In(n,e,67108864),Wf(e,67108864)}}function uv(e){if(e.tag===13||e.tag===31){var n=Zn();n=Ar(n);var a=Ja(e,n);a!==null&&In(a,e,n),Wf(e,n)}}var Ql=!0;function gy(e,n,a,s){var c=U.T;U.T=null;var f=W.p;try{W.p=2,qf(e,n,a,s)}finally{W.p=f,U.T=c}}function vy(e,n,a,s){var c=U.T;U.T=null;var f=W.p;try{W.p=8,qf(e,n,a,s)}finally{W.p=f,U.T=c}}function qf(e,n,a,s){if(Ql){var c=Yf(s);if(c===null)Nf(e,n,s,Jl,a),dv(e,s);else if(xy(c,e,n,a,s))s.stopPropagation();else if(dv(e,s),n&4&&-1<_y.indexOf(e)){for(;c!==null;){var f=re(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Te(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var z=1<<31-He(v);T.entanglements[1]|=z,v&=~z}Ei(f),(Ut&6)===0&&(Ol=E()+500,mo(0))}}break;case 31:case 13:T=Ja(f,2),T!==null&&In(T,f,2),zl(),Wf(f,2)}if(f=Yf(s),f===null&&Nf(e,n,s,Jl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Nf(e,n,s,null,a)}}function Yf(e){return e=Zc(e),Zf(e)}var Jl=null;function Zf(e){if(Jl=null,e=Y(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function fv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case ge:return 2;case Ee:return 8;case he:case Ke:return 32;case Ce:return 268435456;default:return 32}default:return 32}}var Kf=!1,Ra=null,wa=null,Ca=null,Mo=new Map,bo=new Map,Da=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dv(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Eo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=re(n),n!==null&&cv(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function xy(e,n,a,s,c){switch(n){case"focusin":return Ra=Eo(Ra,e,n,a,s,c),!0;case"dragenter":return wa=Eo(wa,e,n,a,s,c),!0;case"mouseover":return Ca=Eo(Ca,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,Eo(Mo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,Eo(bo.get(f)||null,e,n,a,s,c)),!0}return!1}function hv(e){var n=Y(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ps(e.priority,function(){uv(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ps(e.priority,function(){uv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Yc=s,a.target.dispatchEvent(s),Yc=null}else return n=re(a),n!==null&&cv(n),e.blockedOn=a,!1;n.shift()}return!0}function pv(e,n,a){$l(e)&&a.delete(n)}function yy(){Kf=!1,Ra!==null&&$l(Ra)&&(Ra=null),wa!==null&&$l(wa)&&(wa=null),Ca!==null&&$l(Ca)&&(Ca=null),Mo.forEach(pv),bo.forEach(pv)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yy)))}var tc=null;function mv(e){tc!==e&&(tc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){tc===e&&(tc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Zf(s||a)===null)continue;break}var f=re(a);f!==null&&(e.splice(n,3),n-=3,qu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ss(e){function n(z){return ec(z,e)}Ra!==null&&ec(Ra,e),wa!==null&&ec(wa,e),Ca!==null&&ec(Ca,e),Mo.forEach(n),bo.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)hv(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],v=c[xn]||null;if(typeof f=="function")v||mv(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[xn]||null)T=v.formAction;else if(Zf(c)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),mv(a)}}}function gv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Qf(e){this._internalRoot=e}nc.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();ov(a,s,e,n,null,null)},nc.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ov(e.current,2,null,e,null,null),zl(),n[la]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Wa();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&hv(e)}};var vv=t.version;if(vv!=="19.2.7")throw Error(r(527,vv,"19.2.7"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Sy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Re=ic.inject(Sy),De=ic}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Em,f=Tm,v=Am;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=rv(e,1,!1,null,null,a,s,null,c,f,v,gv),e[la]=n.current,Lf(e),new Qf(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Em,v=Tm,T=Am,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=rv(e,1,!0,n,a??null,s,c,z,f,v,T,gv),n.context=sv(null),a=n.current,s=Zn(),s=Ar(s),c=ma(s),c.callback=null,ga(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Ei(n),e[la]=n.current,Lf(e),new nc(n)},Ao.version="19.2.7",Ao}var Rv;function Ly(){if(Rv)return ed.exports;Rv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ed.exports=Uy(),ed.exports}var Ny=Ly();const Oy=P_(Ny);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Th="179",Py=0,wv=1,zy=2,z_=1,B_=2,ta=3,ja=0,Hn=1,na=2,ka=0,bs=1,Cv=2,Dv=3,Uv=4,By=5,xr=100,Fy=101,Iy=102,Hy=103,ky=104,Gy=200,Vy=201,jy=202,Xy=203,zd=204,Bd=205,Wy=206,qy=207,Yy=208,Zy=209,Ky=210,Qy=211,Jy=212,$y=213,eS=214,Fd=0,Id=1,Hd=2,As=3,kd=4,Gd=5,Vd=6,jd=7,F_=0,tS=1,nS=2,Ga=0,iS=1,aS=2,rS=3,sS=4,oS=5,lS=6,cS=7,I_=300,Rs=301,ws=302,Xd=303,Wd=304,kc=306,qd=1e3,Sr=1001,Yd=1002,_i=1003,uS=1004,ac=1005,Ri=1006,ad=1007,Mr=1008,Di=1009,H_=1010,k_=1011,Fo=1012,Ah=1013,br=1014,ia=1015,Vo=1016,Rh=1017,wh=1018,Io=1020,G_=35902,V_=1021,j_=1022,vi=1023,Ho=1026,ko=1027,X_=1028,Ch=1029,W_=1030,Dh=1031,Uh=1033,Cc=33776,Dc=33777,Uc=33778,Lc=33779,Zd=35840,Kd=35841,Qd=35842,Jd=35843,$d=36196,eh=37492,th=37496,nh=37808,ih=37809,ah=37810,rh=37811,sh=37812,oh=37813,lh=37814,ch=37815,uh=37816,fh=37817,dh=37818,hh=37819,ph=37820,mh=37821,Nc=36492,gh=36494,vh=36495,q_=36283,_h=36284,xh=36285,yh=36286,fS=3200,dS=3201,hS=0,pS=1,Ha="",ci="srgb",Cs="srgb-linear",zc="linear",kt="srgb",os=7680,Lv=519,mS=512,gS=513,vS=514,Y_=515,_S=516,xS=517,yS=518,SS=519,Nv=35044,Ov="300 es",wi=2e3,Bc=2001;class Us{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pv=1234567;const Po=Math.PI/180,Go=180/Math.PI;function Ls(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Mt(o,t,i){return Math.max(t,Math.min(i,o))}function Lh(o,t){return(o%t+t)%t}function MS(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function bS(o,t,i){return o!==t?(i-o)/(t-o):0}function zo(o,t,i){return(1-i)*o+i*t}function ES(o,t,i,r){return zo(o,t,1-Math.exp(-i*r))}function TS(o,t=1){return t-Math.abs(Lh(o,t*2)-t)}function AS(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function RS(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function wS(o,t){return o+Math.floor(Math.random()*(t-o+1))}function CS(o,t){return o+Math.random()*(t-o)}function DS(o){return o*(.5-Math.random())}function US(o){o!==void 0&&(Pv=o);let t=Pv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function LS(o){return o*Po}function NS(o){return o*Go}function OS(o){return(o&o-1)===0&&o!==0}function PS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function zS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function BS(o,t,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),m=d(i/2),p=u((t+r)/2),y=d((t+r)/2),x=u((t-r)/2),S=d((t-r)/2),M=u((r-t)/2),R=d((r-t)/2);switch(l){case"XYX":o.set(h*y,m*x,m*S,h*p);break;case"YZY":o.set(m*S,h*y,m*x,h*p);break;case"ZXZ":o.set(m*x,m*S,h*y,h*p);break;case"XZX":o.set(h*y,m*R,m*M,h*p);break;case"YXY":o.set(m*M,h*y,m*R,h*p);break;case"ZYZ":o.set(m*R,m*M,h*y,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ss(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ln(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const rc={DEG2RAD:Po,RAD2DEG:Go,generateUUID:Ls,clamp:Mt,euclideanModulo:Lh,mapLinear:MS,inverseLerp:bS,lerp:zo,damp:ES,pingpong:TS,smoothstep:AS,smootherstep:RS,randInt:wS,randFloat:CS,randFloatSpread:DS,seededRandom:US,degToRad:LS,radToDeg:NS,isPowerOfTwo:OS,ceilPowerOfTwo:PS,floorPowerOfTwo:zS,setQuaternionFromProperEuler:BS,normalize:Ln,denormalize:Ss};class Lt{constructor(t=0,i=0){Lt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],y=r[l+2],x=r[l+3];const S=u[d+0],M=u[d+1],R=u[d+2],C=u[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=y,t[i+3]=x;return}if(h===1){t[i+0]=S,t[i+1]=M,t[i+2]=R,t[i+3]=C;return}if(x!==C||m!==S||p!==M||y!==R){let b=1-h;const _=m*S+p*M+y*R+x*C,k=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const j=Math.sqrt(P),G=Math.atan2(j,_*k);b=Math.sin(b*G)/j,h=Math.sin(h*G)/j}const L=h*k;if(m=m*b+S*L,p=p*b+M*L,y=y*b+R*L,x=x*b+C*L,b===1-h){const j=1/Math.sqrt(m*m+p*p+y*y+x*x);m*=j,p*=j,y*=j,x*=j}}t[i]=m,t[i+1]=p,t[i+2]=y,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],y=r[l+3],x=u[d],S=u[d+1],M=u[d+2],R=u[d+3];return t[i]=h*R+y*x+m*M-p*S,t[i+1]=m*R+y*S+p*x-h*M,t[i+2]=p*R+y*M+h*S-m*x,t[i+3]=y*R-h*x-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),y=h(l/2),x=h(u/2),S=m(r/2),M=m(l/2),R=m(u/2);switch(d){case"XYZ":this._x=S*y*x+p*M*R,this._y=p*M*x-S*y*R,this._z=p*y*R+S*M*x,this._w=p*y*x-S*M*R;break;case"YXZ":this._x=S*y*x+p*M*R,this._y=p*M*x-S*y*R,this._z=p*y*R-S*M*x,this._w=p*y*x+S*M*R;break;case"ZXY":this._x=S*y*x-p*M*R,this._y=p*M*x+S*y*R,this._z=p*y*R+S*M*x,this._w=p*y*x-S*M*R;break;case"ZYX":this._x=S*y*x-p*M*R,this._y=p*M*x+S*y*R,this._z=p*y*R-S*M*x,this._w=p*y*x+S*M*R;break;case"YZX":this._x=S*y*x+p*M*R,this._y=p*M*x+S*y*R,this._z=p*y*R-S*M*x,this._w=p*y*x-S*M*R;break;case"XZY":this._x=S*y*x-p*M*R,this._y=p*M*x-S*y*R,this._z=p*y*R+S*M*x,this._w=p*y*x+S*M*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],y=i[6],x=i[10],S=r+h+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(y-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>x){const M=2*Math.sqrt(1+r-h-x);this._w=(y-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-r-x);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+y)/M}else{const M=2*Math.sqrt(1+x-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,y=i._w;return this._x=r*y+d*h+l*p-u*m,this._y=l*y+d*m+u*h-r*p,this._z=u*y+d*p+r*m-l*h,this._w=d*y-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),y=Math.atan2(p,h),x=Math.sin((1-i)*y)/p,S=Math.sin(i*y)/p;return this._w=d*x+this._w*S,this._x=r*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,r=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(zv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(zv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),y=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+m*p+d*x-h*y,this.y=r+m*y+h*p-u*x,this.z=l+m*x+u*y-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return rd.copy(this).projectOnVector(t),this.sub(rd)}reflect(t){return this.sub(rd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new $,zv=new jo;class dt{constructor(t,i,r,l,u,d,h,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const y=this.elements;return y[0]=t,y[1]=l,y[2]=h,y[3]=i,y[4]=u,y[5]=m,y[6]=r,y[7]=d,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],y=r[4],x=r[7],S=r[2],M=r[5],R=r[8],C=l[0],b=l[3],_=l[6],k=l[1],P=l[4],L=l[7],j=l[2],G=l[5],I=l[8];return u[0]=d*C+h*k+m*j,u[3]=d*b+h*P+m*G,u[6]=d*_+h*L+m*I,u[1]=p*C+y*k+x*j,u[4]=p*b+y*P+x*G,u[7]=p*_+y*L+x*I,u[2]=S*C+M*k+R*j,u[5]=S*b+M*P+R*G,u[8]=S*_+M*L+R*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],y=t[8];return i*d*y-i*h*p-r*u*y+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],y=t[8],x=y*d-h*p,S=h*m-y*u,M=p*u-d*m,R=i*x+r*S+l*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=x*C,t[1]=(l*p-y*r)*C,t[2]=(h*r-l*d)*C,t[3]=S*C,t[4]=(y*i-l*m)*C,t[5]=(l*u-h*i)*C,t[6]=M*C,t[7]=(r*m-p*i)*C,t[8]=(d*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(sd.makeScale(t,i)),this}rotate(t){return this.premultiply(sd.makeRotation(-t)),this}translate(t,i){return this.premultiply(sd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new dt;function Z_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Fc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function FS(){const o=Fc("canvas");return o.style.display="block",o}const Bv={};function Es(o){o in Bv||(Bv[o]=!0,console.warn(o))}function IS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const Fv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iv=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HS(){const o={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===kt&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=Ts(l.r),l.g=Ts(l.g),l.b=Ts(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?zc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Cs]:{primaries:t,whitePoint:r,transfer:zc,toXYZ:Fv,fromXYZ:Iv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:kt,toXYZ:Fv,fromXYZ:Iv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const wt=HS();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ts(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ls;class kS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ls===void 0&&(ls=Fc("canvas")),ls.width=t.width,ls.height=t.height;const l=ls.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ls}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ra(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let GS=0;class Nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(od(l[d].image)):u.push(od(l[d]))}else u=od(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function od(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?kS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VS=0;const ld=new $;class kn extends Us{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Sr,l=Sr,u=Ri,d=Mr,h=vi,m=Di,p=kn.DEFAULT_ANISOTROPY,y=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ls(),this.name="",this.source=new Nh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==I_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qd:t.x=t.x-Math.floor(t.x);break;case Sr:t.x=t.x<0?0:1;break;case Yd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qd:t.y=t.y-Math.floor(t.y);break;case Sr:t.y=t.y<0?0:1;break;case Yd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=I_;kn.DEFAULT_ANISOTROPY=1;class Gt{constructor(t=0,i=0,r=0,l=1){Gt.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],y=m[4],x=m[8],S=m[1],M=m[5],R=m[9],C=m[2],b=m[6],_=m[10];if(Math.abs(y-S)<.01&&Math.abs(x-C)<.01&&Math.abs(R-b)<.01){if(Math.abs(y+S)<.1&&Math.abs(x+C)<.1&&Math.abs(R+b)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,L=(M+1)/2,j=(_+1)/2,G=(y+S)/4,I=(x+C)/4,J=(R+b)/4;return P>L&&P>j?P<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(P),l=G/r,u=I/r):L>j?L<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),r=G/l,u=J/l):j<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(j),r=I/u,l=J/u),this.set(r,l,u,i),this}let k=Math.sqrt((b-R)*(b-R)+(x-C)*(x-C)+(S-y)*(S-y));return Math.abs(k)<.001&&(k=1),this.x=(b-R)/k,this.y=(x-C)/k,this.z=(S-y)/k,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this.w=Mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this.w=Mt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jS extends Us{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Gt(0,0,t,i),this.scissorTest=!1,this.viewport=new Gt(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new kn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Nh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends jS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class K_ extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class XS extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,hi):hi.fromBufferAttribute(u,d),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sc.copy(r.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),oc.subVectors(this.max,Ro),cs.subVectors(t.a,Ro),us.subVectors(t.b,Ro),fs.subVectors(t.c,Ro),La.subVectors(us,cs),Na.subVectors(fs,us),fr.subVectors(cs,fs);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-fr.z,fr.y,La.z,0,-La.x,Na.z,0,-Na.x,fr.z,0,-fr.x,-La.y,La.x,0,-Na.y,Na.x,0,-fr.y,fr.x,0];return!cd(i,cs,us,fs,oc)||(i=[1,0,0,0,1,0,0,0,1],!cd(i,cs,us,fs,oc))?!1:(lc.crossVectors(La,Na),i=[lc.x,lc.y,lc.z],cd(i,cs,us,fs,oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new $,new $,new $,new $,new $,new $,new $,new $],hi=new $,sc=new Xo,cs=new $,us=new $,fs=new $,La=new $,Na=new $,fr=new $,Ro=new $,oc=new $,lc=new $,dr=new $;function cd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){dr.fromArray(o,u);const h=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),m=t.dot(dr),p=i.dot(dr),y=r.dot(dr);if(Math.max(-Math.max(m,p,y),Math.min(m,p,y))>h)return!1}return!0}const WS=new Xo,wo=new $,ud=new $;class Gc{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):WS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ud.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(ud)),this.expandByPoint(wo.copy(t.center).sub(ud))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ki=new $,fd=new $,cc=new $,Oa=new $,dd=new $,uc=new $,hd=new $;class Q_{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){fd.copy(t).add(i).multiplyScalar(.5),cc.copy(i).sub(t).normalize(),Oa.copy(this.origin).sub(fd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(cc),h=Oa.dot(this.direction),m=-Oa.dot(cc),p=Oa.lengthSq(),y=Math.abs(1-d*d);let x,S,M,R;if(y>0)if(x=d*m-h,S=d*h-m,R=u*y,x>=0)if(S>=-R)if(S<=R){const C=1/y;x*=C,S*=C,M=x*(x+d*S+2*h)+S*(d*x+S+2*m)+p}else S=u,x=Math.max(0,-(d*S+h)),M=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(d*S+h)),M=-x*x+S*(S+2*m)+p;else S<=-R?(x=Math.max(0,-(-d*u+h)),S=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p):S<=R?(x=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(x=Math.max(0,-(d*u+h)),S=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p);else S=d>0?-u:u,x=Math.max(0,-(d*S+h)),M=-x*x+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(fd).addScaledVector(cc,S),M}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,y=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),y>=0?(u=(t.min.y-S.y)*y,d=(t.max.y-S.y)*y):(u=(t.max.y-S.y)*y,d=(t.min.y-S.y)*y),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-S.z)*x,m=(t.max.z-S.z)*x):(h=(t.max.z-S.z)*x,m=(t.min.z-S.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,r,l,u){dd.subVectors(i,t),uc.subVectors(r,t),hd.crossVectors(dd,uc);let d=this.direction.dot(hd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Oa.subVectors(this.origin,t);const m=h*this.direction.dot(uc.crossVectors(Oa,uc));if(m<0)return null;const p=h*this.direction.dot(dd.cross(Oa));if(p<0||m+p>d)return null;const y=-h*Oa.dot(hd);return y<0?null:this.at(y/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,i,r,l,u,d,h,m,p,y,x,S,M,R,C,b){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,y,x,S,M,R,C,b)}set(t,i,r,l,u,d,h,m,p,y,x,S,M,R,C,b){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=y,_[10]=x,_[14]=S,_[3]=M,_[7]=R,_[11]=C,_[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ds.setFromMatrixColumn(t,0).length(),u=1/ds.setFromMatrixColumn(t,1).length(),d=1/ds.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),y=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const S=d*y,M=d*x,R=h*y,C=h*x;i[0]=m*y,i[4]=-m*x,i[8]=p,i[1]=M+R*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=R+M*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*y,M=m*x,R=p*y,C=p*x;i[0]=S+C*h,i[4]=R*h-M,i[8]=d*p,i[1]=d*x,i[5]=d*y,i[9]=-h,i[2]=M*h-R,i[6]=C+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*y,M=m*x,R=p*y,C=p*x;i[0]=S-C*h,i[4]=-d*x,i[8]=R+M*h,i[1]=M+R*h,i[5]=d*y,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*y,M=d*x,R=h*y,C=h*x;i[0]=m*y,i[4]=R*p-M,i[8]=S*p+C,i[1]=m*x,i[5]=C*p+S,i[9]=M*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,M=d*p,R=h*m,C=h*p;i[0]=m*y,i[4]=C-S*x,i[8]=R*x+M,i[1]=x,i[5]=d*y,i[9]=-h*y,i[2]=-p*y,i[6]=M*x+R,i[10]=S-C*x}else if(t.order==="XZY"){const S=d*m,M=d*p,R=h*m,C=h*p;i[0]=m*y,i[4]=-x,i[8]=p*y,i[1]=S*x+C,i[5]=d*y,i[9]=M*x-R,i[2]=R*x-M,i[6]=h*y,i[10]=C*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qS,t,YS)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Pa.crossVectors(r,Kn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Pa.crossVectors(r,Kn)),Pa.normalize(),fc.crossVectors(Kn,Pa),l[0]=Pa.x,l[4]=fc.x,l[8]=Kn.x,l[1]=Pa.y,l[5]=fc.y,l[9]=Kn.y,l[2]=Pa.z,l[6]=fc.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],y=r[1],x=r[5],S=r[9],M=r[13],R=r[2],C=r[6],b=r[10],_=r[14],k=r[3],P=r[7],L=r[11],j=r[15],G=l[0],I=l[4],J=l[8],A=l[12],D=l[1],F=l[5],fe=l[9],ce=l[13],ue=l[2],me=l[6],U=l[10],W=l[14],q=l[3],oe=l[7],de=l[11],N=l[15];return u[0]=d*G+h*D+m*ue+p*q,u[4]=d*I+h*F+m*me+p*oe,u[8]=d*J+h*fe+m*U+p*de,u[12]=d*A+h*ce+m*W+p*N,u[1]=y*G+x*D+S*ue+M*q,u[5]=y*I+x*F+S*me+M*oe,u[9]=y*J+x*fe+S*U+M*de,u[13]=y*A+x*ce+S*W+M*N,u[2]=R*G+C*D+b*ue+_*q,u[6]=R*I+C*F+b*me+_*oe,u[10]=R*J+C*fe+b*U+_*de,u[14]=R*A+C*ce+b*W+_*N,u[3]=k*G+P*D+L*ue+j*q,u[7]=k*I+P*F+L*me+j*oe,u[11]=k*J+P*fe+L*U+j*de,u[15]=k*A+P*ce+L*W+j*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],y=t[2],x=t[6],S=t[10],M=t[14],R=t[3],C=t[7],b=t[11],_=t[15];return R*(+u*m*x-l*p*x-u*h*S+r*p*S+l*h*M-r*m*M)+C*(+i*m*M-i*p*S+u*d*S-l*d*M+l*p*y-u*m*y)+b*(+i*p*x-i*h*M-u*d*x+r*d*M+u*h*y-r*p*y)+_*(-l*h*y-i*m*x+i*h*S+l*d*x-r*d*S+r*m*y)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],y=t[8],x=t[9],S=t[10],M=t[11],R=t[12],C=t[13],b=t[14],_=t[15],k=x*b*p-C*S*p+C*m*M-h*b*M-x*m*_+h*S*_,P=R*S*p-y*b*p-R*m*M+d*b*M+y*m*_-d*S*_,L=y*C*p-R*x*p+R*h*M-d*C*M-y*h*_+d*x*_,j=R*x*m-y*C*m-R*h*S+d*C*S+y*h*b-d*x*b,G=i*k+r*P+l*L+u*j;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return t[0]=k*I,t[1]=(C*S*u-x*b*u-C*l*M+r*b*M+x*l*_-r*S*_)*I,t[2]=(h*b*u-C*m*u+C*l*p-r*b*p-h*l*_+r*m*_)*I,t[3]=(x*m*u-h*S*u-x*l*p+r*S*p+h*l*M-r*m*M)*I,t[4]=P*I,t[5]=(y*b*u-R*S*u+R*l*M-i*b*M-y*l*_+i*S*_)*I,t[6]=(R*m*u-d*b*u-R*l*p+i*b*p+d*l*_-i*m*_)*I,t[7]=(d*S*u-y*m*u+y*l*p-i*S*p-d*l*M+i*m*M)*I,t[8]=L*I,t[9]=(R*x*u-y*C*u-R*r*M+i*C*M+y*r*_-i*x*_)*I,t[10]=(d*C*u-R*h*u+R*r*p-i*C*p-d*r*_+i*h*_)*I,t[11]=(y*h*u-d*x*u-y*r*p+i*x*p+d*r*M-i*h*M)*I,t[12]=j*I,t[13]=(y*C*l-R*x*l+R*r*S-i*C*S-y*r*b+i*x*b)*I,t[14]=(R*h*l-d*C*l-R*r*m+i*C*m+d*r*b-i*h*b)*I,t[15]=(d*x*l-y*h*l+y*r*m-i*x*m-d*r*S+i*h*S)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,y=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,y*h+r,y*m-l*d,0,p*m-l*h,y*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,y=d+d,x=h+h,S=u*p,M=u*y,R=u*x,C=d*y,b=d*x,_=h*x,k=m*p,P=m*y,L=m*x,j=r.x,G=r.y,I=r.z;return l[0]=(1-(C+_))*j,l[1]=(M+L)*j,l[2]=(R-P)*j,l[3]=0,l[4]=(M-L)*G,l[5]=(1-(S+_))*G,l[6]=(b+k)*G,l[7]=0,l[8]=(R+P)*I,l[9]=(b-k)*I,l[10]=(1-(S+C))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=ds.set(l[0],l[1],l[2]).length();const d=ds.set(l[4],l[5],l[6]).length(),h=ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/u,y=1/d,x=1/h;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=y,pi.elements[5]*=y,pi.elements[6]*=y,pi.elements[8]*=x,pi.elements[9]*=x,pi.elements[10]*=x,i.setFromRotationMatrix(pi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=wi,m=!1){const p=this.elements,y=2*u/(i-t),x=2*u/(r-l),S=(i+t)/(i-t),M=(r+l)/(r-l);let R,C;if(m)R=u/(d-u),C=d*u/(d-u);else if(h===wi)R=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Bc)R=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=y,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=wi,m=!1){const p=this.elements,y=2/(i-t),x=2/(r-l),S=-(i+t)/(i-t),M=-(r+l)/(r-l);let R,C;if(m)R=1/(d-u),C=d/(d-u);else if(h===wi)R=-2/(d-u),C=-(d+u)/(d-u);else if(h===Bc)R=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=y,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ds=new $,pi=new Jt,qS=new $(0,0,0),YS=new $(1,1,1),Pa=new $,fc=new $,Kn=new $,Hv=new Jt,kv=new jo;class sa{constructor(t=0,i=0,r=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],y=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-y,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Hv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return kv.setFromEuler(this),this.setFromQuaternion(kv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class J_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ZS=0;const Gv=new $,hs=new jo,Qi=new Jt,dc=new $,Co=new $,KS=new $,QS=new jo,Vv=new $(1,0,0),jv=new $(0,1,0),Xv=new $(0,0,1),Wv={type:"added"},JS={type:"removed"},ps={type:"childadded",child:null},pd={type:"childremoved",child:null};class _n extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new $,i=new sa,r=new jo,l=new $(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Jt},normalMatrix:{value:new dt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Vv,t)}rotateY(t){return this.rotateOnAxis(jv,t)}rotateZ(t){return this.rotateOnAxis(Xv,t)}translateOnAxis(t,i){return Gv.copy(t).applyQuaternion(this.quaternion),this.position.add(Gv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Vv,t)}translateY(t){return this.translateOnAxis(jv,t)}translateZ(t){return this.translateOnAxis(Xv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?dc.copy(t):dc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Co,dc,this.up):Qi.lookAt(dc,Co,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(Qi),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wv),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(JS),pd.child=t,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wv),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,KS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,QS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,y=m.length;p<y;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),y=d(t.images),x=d(t.shapes),S=d(t.skeletons),M=d(t.animations),R=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),y.length>0&&(r.images=y),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const m=[];for(const p in h){const y=h[p];delete y.metadata,m.push(y)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}_n.DEFAULT_UP=new $(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new $,Ji=new $,md=new $,$i=new $,ms=new $,gs=new $,qv=new $,gd=new $,vd=new $,_d=new $,xd=new Gt,yd=new Gt,Sd=new Gt;class gi{constructor(t=new $,i=new $,r=new $){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){mi.subVectors(l,i),Ji.subVectors(r,i),md.subVectors(t,i);const d=mi.dot(mi),h=mi.dot(Ji),m=mi.dot(md),p=Ji.dot(Ji),y=Ji.dot(md),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(p*m-h*y)*S,R=(d*y-h*m)*S;return u.set(1-M-R,R,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(d,$i.y),m.addScaledVector(h,$i.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return xd.setScalar(0),yd.setScalar(0),Sd.setScalar(0),xd.fromBufferAttribute(t,i),yd.fromBufferAttribute(t,r),Sd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(xd,u.x),d.addScaledVector(yd,u.y),d.addScaledVector(Sd,u.z),d}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),Ji.subVectors(t,i),mi.cross(Ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),mi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ms.subVectors(l,r),gs.subVectors(u,r),gd.subVectors(t,r);const m=ms.dot(gd),p=gs.dot(gd);if(m<=0&&p<=0)return i.copy(r);vd.subVectors(t,l);const y=ms.dot(vd),x=gs.dot(vd);if(y>=0&&x<=y)return i.copy(l);const S=m*x-y*p;if(S<=0&&m>=0&&y<=0)return d=m/(m-y),i.copy(r).addScaledVector(ms,d);_d.subVectors(t,u);const M=ms.dot(_d),R=gs.dot(_d);if(R>=0&&M<=R)return i.copy(u);const C=M*p-m*R;if(C<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(r).addScaledVector(gs,h);const b=y*R-M*x;if(b<=0&&x-y>=0&&M-R>=0)return qv.subVectors(u,l),h=(x-y)/(x-y+(M-R)),i.copy(l).addScaledVector(qv,h);const _=1/(b+C+S);return d=C*_,h=S*_,i.copy(r).addScaledVector(ms,d).addScaledVector(gs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},hc={h:0,s:0,l:0};function Md(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ct{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=wt.workingColorSpace){return this.r=t,this.g=i,this.b=r,wt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=wt.workingColorSpace){if(t=Lh(t,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Md(d,u,t+1/3),this.g=Md(d,u,t),this.b=Md(d,u,t-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const r=$_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return wt.workingToColorSpace(wn.copy(this),t),Math.round(Mt(wn.r*255,0,255))*65536+Math.round(Mt(wn.g*255,0,255))*256+Math.round(Mt(wn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=wt.workingColorSpace){wt.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const y=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=y<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=y,t}getRGB(t,i=wt.workingColorSpace){return wt.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=ci){wt.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(za),this.setHSL(za.h+t,za.s+i,za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(za),t.getHSL(hc);const r=zo(za.h,hc.h,i),l=zo(za.s,hc.s,i),u=zo(za.l,hc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ct;Ct.NAMES=$_;let $S=0;class Wo extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=bs,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Bd,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zd&&(r.blendSrc=this.blendSrc),this.blendDst!==Bd&&(r.blendDst=this.blendDst),this.blendEquation!==xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class e0 extends Wo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=F_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new $,pc=new Lt;let eM=0;class Ci{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Nv,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(t),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ss(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ln(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ss(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ss(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ss(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ss(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array),u=Ln(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nv&&(t.usage=this.usage),t}}class t0 extends Ci{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class n0 extends Ci{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Va extends Ci{constructor(t,i,r){super(new Float32Array(t),i,r)}}let tM=0;const li=new Jt,bd=new _n,vs=new $,Qn=new Xo,Do=new Xo,vn=new $;class oa extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Z_(t)?n0:t0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new dt().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,r){return li.makeTranslation(t,i,r),this.applyMatrix4(li),this}scale(t,i,r){return li.makeScale(t,i,r),this.applyMatrix4(li),this}lookAt(t){return bd.lookAt(t),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Va(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(Qn.min,Do.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,Do.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(Do.min),Qn.expandByPoint(Do.max))}Qn.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,y=h.count;p<y;p++)vn.fromBufferAttribute(h,p),m&&(vs.fromBufferAttribute(t,p),vn.add(vs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let J=0;J<r.count;J++)h[J]=new $,m[J]=new $;const p=new $,y=new $,x=new $,S=new Lt,M=new Lt,R=new Lt,C=new $,b=new $;function _(J,A,D){p.fromBufferAttribute(r,J),y.fromBufferAttribute(r,A),x.fromBufferAttribute(r,D),S.fromBufferAttribute(u,J),M.fromBufferAttribute(u,A),R.fromBufferAttribute(u,D),y.sub(p),x.sub(p),M.sub(S),R.sub(S);const F=1/(M.x*R.y-R.x*M.y);isFinite(F)&&(C.copy(y).multiplyScalar(R.y).addScaledVector(x,-M.y).multiplyScalar(F),b.copy(x).multiplyScalar(M.x).addScaledVector(y,-R.x).multiplyScalar(F),h[J].add(C),h[A].add(C),h[D].add(C),m[J].add(b),m[A].add(b),m[D].add(b))}let k=this.groups;k.length===0&&(k=[{start:0,count:t.count}]);for(let J=0,A=k.length;J<A;++J){const D=k[J],F=D.start,fe=D.count;for(let ce=F,ue=F+fe;ce<ue;ce+=3)_(t.getX(ce+0),t.getX(ce+1),t.getX(ce+2))}const P=new $,L=new $,j=new $,G=new $;function I(J){j.fromBufferAttribute(l,J),G.copy(j);const A=h[J];P.copy(A),P.sub(j.multiplyScalar(j.dot(A))).normalize(),L.crossVectors(G,A);const F=L.dot(m[J])<0?-1:1;d.setXYZW(J,P.x,P.y,P.z,F)}for(let J=0,A=k.length;J<A;++J){const D=k[J],F=D.start,fe=D.count;for(let ce=F,ue=F+fe;ce<ue;ce+=3)I(t.getX(ce+0)),I(t.getX(ce+1)),I(t.getX(ce+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new $,u=new $,d=new $,h=new $,m=new $,p=new $,y=new $,x=new $;if(t)for(let S=0,M=t.count;S<M;S+=3){const R=t.getX(S+0),C=t.getX(S+1),b=t.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),y.subVectors(d,u),x.subVectors(l,u),y.cross(x),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,b),h.add(y),m.add(y),p.add(y),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),y.subVectors(d,u),x.subVectors(l,u),y.cross(x),r.setXYZ(S+0,y.x,y.y,y.z),r.setXYZ(S+1,y.x,y.y,y.z),r.setXYZ(S+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,y=h.itemSize,x=h.normalized,S=new p.constructor(m.length*y);let M=0,R=0;for(let C=0,b=m.length;C<b;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*y;for(let _=0;_<y;_++)S[R++]=p[M++]}return new Ci(S,y,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oa,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let y=0,x=p.length;y<x;y++){const S=p[y],M=t(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],y=[];for(let x=0,S=p.length;x<S;x++){const M=p[x];y.push(M.toJSON(t.data))}y.length>0&&(l[m]=y,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const y=l[p];this.setAttribute(p,y.clone(i))}const u=t.morphAttributes;for(const p in u){const y=[],x=u[p];for(let S=0,M=x.length;S<M;S++)y.push(x[S].clone(i));this.morphAttributes[p]=y}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,y=d.length;p<y;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yv=new Jt,hr=new Q_,mc=new Gc,Zv=new $,gc=new $,vc=new $,_c=new $,Ed=new $,xc=new $,Kv=new $,yc=new $;class aa extends _n{constructor(t=new oa,i=new e0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){xc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const y=h[m],x=u[m];y!==0&&(Ed.fromBufferAttribute(x,t),d?xc.addScaledVector(Ed,y):xc.addScaledVector(Ed.sub(i),y))}i.add(xc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(u),hr.copy(t.ray).recast(t.near),!(mc.containsPoint(hr.origin)===!1&&(hr.intersectSphere(mc,Zv)===null||hr.origin.distanceToSquared(Zv)>(t.far-t.near)**2))&&(Yv.copy(u).invert(),hr.copy(t.ray).applyMatrix4(Yv),!(r.boundingBox!==null&&hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,hr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,y=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,C=S.length;R<C;R++){const b=S[R],_=d[b.materialIndex],k=Math.max(b.start,M.start),P=Math.min(h.count,Math.min(b.start+b.count,M.start+M.count));for(let L=k,j=P;L<j;L+=3){const G=h.getX(L),I=h.getX(L+1),J=h.getX(L+2);l=Sc(this,_,t,r,p,y,x,G,I,J),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let b=R,_=C;b<_;b+=3){const k=h.getX(b),P=h.getX(b+1),L=h.getX(b+2);l=Sc(this,d,t,r,p,y,x,k,P,L),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,C=S.length;R<C;R++){const b=S[R],_=d[b.materialIndex],k=Math.max(b.start,M.start),P=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let L=k,j=P;L<j;L+=3){const G=L,I=L+1,J=L+2;l=Sc(this,_,t,r,p,y,x,G,I,J),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let b=R,_=C;b<_;b+=3){const k=b,P=b+1,L=b+2;l=Sc(this,d,t,r,p,y,x,k,P,L),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function nM(o,t,i,r,l,u,d,h){let m;if(t.side===Hn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ja,h),m===null)return null;yc.copy(h),yc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(yc);return p<i.near||p>i.far?null:{distance:p,point:yc.clone(),object:o}}function Sc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,gc),o.getVertexPosition(m,vc),o.getVertexPosition(p,_c);const y=nM(o,t,i,r,gc,vc,_c,Kv);if(y){const x=new $;gi.getBarycoord(Kv,gc,vc,_c,x),l&&(y.uv=gi.getInterpolatedAttribute(l,h,m,p,x,new Lt)),u&&(y.uv1=gi.getInterpolatedAttribute(u,h,m,p,x,new Lt)),d&&(y.normal=gi.getInterpolatedAttribute(d,h,m,p,x,new $),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new $,materialIndex:0};gi.getNormal(gc,vc,_c,S.normal),y.face=S,y.barycoord=x}return y}class qo extends oa{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],y=[],x=[];let S=0,M=0;R("z","y","x",-1,-1,r,i,t,d,u,0),R("z","y","x",1,-1,r,i,-t,d,u,1),R("x","z","y",1,1,t,r,i,l,d,2),R("x","z","y",1,-1,t,r,-i,l,d,3),R("x","y","z",1,-1,t,i,r,l,u,4),R("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Va(p,3)),this.setAttribute("normal",new Va(y,3)),this.setAttribute("uv",new Va(x,2));function R(C,b,_,k,P,L,j,G,I,J,A){const D=L/I,F=j/J,fe=L/2,ce=j/2,ue=G/2,me=I+1,U=J+1;let W=0,q=0;const oe=new $;for(let de=0;de<U;de++){const N=de*F-ce;for(let ee=0;ee<me;ee++){const be=ee*D-fe;oe[C]=be*k,oe[b]=N*P,oe[_]=ue,p.push(oe.x,oe.y,oe.z),oe[C]=0,oe[b]=0,oe[_]=G>0?1:-1,y.push(oe.x,oe.y,oe.z),x.push(ee/I),x.push(1-de/J),W+=1}}for(let de=0;de<J;de++)for(let N=0;N<I;N++){const ee=S+N+me*de,be=S+N+me*(de+1),Ae=S+(N+1)+me*(de+1),Q=S+(N+1)+me*de;m.push(ee,be,Q),m.push(be,Ae,Q),q+=6}h.addGroup(M,q,A),M+=q,S+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=Ds(o[i]);for(const l in r)t[l]=r[l]}return t}function iM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function i0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:wt.workingColorSpace}const aM={clone:Ds,merge:Nn};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends Wo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=iM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class a0 extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new $,Qv=new Lt,Jv=new Lt;class Jn extends a0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Go*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,Qv,Jv),i.subVectors(Jv,Qv)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Po*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,xs=1;class oM extends _n{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(_s,xs,t,i);l.layers=this.layers,this.add(l);const u=new Jn(_s,xs,t,i);u.layers=this.layers,this.add(u);const d=new Jn(_s,xs,t,i);d.layers=this.layers,this.add(d);const h=new Jn(_s,xs,t,i);h.layers=this.layers,this.add(h);const m=new Jn(_s,xs,t,i);m.layers=this.layers,this.add(m);const p=new Jn(_s,xs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Bc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,y]=this.children,x=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,y),t.setRenderTarget(x,S,M),t.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class r0 extends kn{constructor(t=[],i=Rs,r,l,u,d,h,m,p,y){super(t,i,r,l,u,d,h,m,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lM extends Er{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new r0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qo(5,5,5),u=new Xa({name:"CubemapFromEquirect",uniforms:Ds(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:ka});u.uniforms.tEquirect.value=i;const d=new aa(l,u),h=i.minFilter;return i.minFilter===Mr&&(i.minFilter=Ri),new oM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class Mc extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cM={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const b=i.getJointPose(C,r),_=this._getHandJoint(p,C);b!==null&&(_.matrix.fromArray(b.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=b.radius),_.visible=b!==null}const y=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=y.position.distanceTo(x.position),M=.02,R=.005;p.inputState.pinching&&S>M+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(cM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Mc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Oh{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=i,this.far=r}clone(){return new Oh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uM extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ad=new $,fM=new $,dM=new dt;class vr{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ad.subVectors(r,i).cross(fM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ad),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||dM.getNormalMatrix(t),l=this.coplanarPoint(Ad).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Gc,hM=new Lt(.5,.5),bc=new $;class Ph{constructor(t=new vr,i=new vr,r=new vr,l=new vr,u=new vr,d=new vr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=wi,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],y=u[4],x=u[5],S=u[6],M=u[7],R=u[8],C=u[9],b=u[10],_=u[11],k=u[12],P=u[13],L=u[14],j=u[15];if(l[0].setComponents(p-d,M-y,_-R,j-k).normalize(),l[1].setComponents(p+d,M+y,_+R,j+k).normalize(),l[2].setComponents(p+h,M+x,_+C,j+P).normalize(),l[3].setComponents(p-h,M-x,_-C,j-P).normalize(),r)l[4].setComponents(m,S,b,L).normalize(),l[5].setComponents(p-m,M-S,_-b,j-L).normalize();else if(l[4].setComponents(p-m,M-S,_-b,j-L).normalize(),i===wi)l[5].setComponents(p+m,M+S,_+b,j+L).normalize();else if(i===Bc)l[5].setComponents(m,S,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){pr.center.set(0,0,0);const i=hM.distanceTo(t.center);return pr.radius=.7071067811865476+i,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(bc.x=l.normal.x>0?t.max.x:t.min.x,bc.y=l.normal.y>0?t.max.y:t.min.y,bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class s0 extends Wo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ic=new $,Hc=new $,$v=new Jt,Uo=new Q_,Ec=new Gc,Rd=new $,e_=new $;class pM extends _n{constructor(t=new oa,i=new s0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Ic.fromBufferAttribute(i,l-1),Hc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Ic.distanceTo(Hc);t.setAttribute("lineDistance",new Va(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(l),Ec.radius+=u,t.ray.intersectsSphere(Ec)===!1)return;$v.copy(l).invert(),Uo.copy(t.ray).applyMatrix4($v);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,y=r.index,S=r.attributes.position;if(y!==null){const M=Math.max(0,d.start),R=Math.min(y.count,d.start+d.count);for(let C=M,b=R-1;C<b;C+=p){const _=y.getX(C),k=y.getX(C+1),P=Tc(this,t,Uo,m,_,k,C);P&&i.push(P)}if(this.isLineLoop){const C=y.getX(R-1),b=y.getX(M),_=Tc(this,t,Uo,m,C,b,R-1);_&&i.push(_)}}else{const M=Math.max(0,d.start),R=Math.min(S.count,d.start+d.count);for(let C=M,b=R-1;C<b;C+=p){const _=Tc(this,t,Uo,m,C,C+1,C);_&&i.push(_)}if(this.isLineLoop){const C=Tc(this,t,Uo,m,R-1,M,R-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Tc(o,t,i,r,l,u,d){const h=o.geometry.attributes.position;if(Ic.fromBufferAttribute(h,l),Hc.fromBufferAttribute(h,u),i.distanceSqToSegment(Ic,Hc,Rd,e_)>r)return;Rd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Rd);if(!(p<t.near||p>t.far))return{distance:p,point:e_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class o0 extends kn{constructor(t,i,r=br,l,u,d,h=_i,m=_i,p,y=Ho,x=1){if(y!==Ho&&y!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:x};super(S,l,u,d,h,m,y,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Vc extends oa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,y=m+1,x=t/h,S=i/m,M=[],R=[],C=[],b=[];for(let _=0;_<y;_++){const k=_*S-d;for(let P=0;P<p;P++){const L=P*x-u;R.push(L,-k,0),C.push(0,0,1),b.push(P/h),b.push(1-_/m)}}for(let _=0;_<m;_++)for(let k=0;k<h;k++){const P=k+p*_,L=k+p*(_+1),j=k+1+p*(_+1),G=k+1+p*_;M.push(P,L,G),M.push(L,j,G)}this.setIndex(M),this.setAttribute("position",new Va(R,3)),this.setAttribute("normal",new Va(C,3)),this.setAttribute("uv",new Va(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.width,t.height,t.widthSegments,t.heightSegments)}}class mM extends Wo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gM extends Wo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zh extends _n{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class vM extends zh{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const wd=new Jt,t_=new $,n_=new $;class l0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;t_.setFromMatrixPosition(t.matrixWorld),i.position.copy(t_),n_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(n_),i.updateMatrixWorld(),wd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(wd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const i_=new Jt,Lo=new $,Cd=new $;class _M extends l0{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Lo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Lo),Cd.copy(r.position),Cd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Cd),r.updateMatrixWorld(),l.makeTranslation(-Lo.x,-Lo.y,-Lo.z),i_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i_,r.coordinateSystem,r.reversedDepth)}}class xM extends zh{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new _M}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class c0 extends a0{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=y*this.view.offsetY,m=h-y*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yM extends l0{constructor(){super(new c0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SM extends zh{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new yM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class MM extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function a_(o,t,i,r){const l=bM(r);switch(i){case V_:return o*t;case X_:return o*t/l.components*l.byteLength;case Ch:return o*t/l.components*l.byteLength;case W_:return o*t*2/l.components*l.byteLength;case Dh:return o*t*2/l.components*l.byteLength;case j_:return o*t*3/l.components*l.byteLength;case vi:return o*t*4/l.components*l.byteLength;case Uh:return o*t*4/l.components*l.byteLength;case Cc:case Dc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kd:case Jd:return Math.max(o,16)*Math.max(t,8)/4;case Zd:case Qd:return Math.max(o,8)*Math.max(t,8)/2;case $d:case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case th:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case ah:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case rh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case sh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case oh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case ch:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case uh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case ph:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case mh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Nc:case gh:case vh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case q_:case _h:return Math.ceil(o/4)*Math.ceil(t/4)*8;case xh:case yh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bM(o){switch(o){case Di:case H_:return{byteLength:1,components:1};case Fo:case k_:case Vo:return{byteLength:2,components:1};case Rh:case wh:return{byteLength:2,components:4};case br:case Ah:case ia:return{byteLength:4,components:1};case G_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function u0(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function EM(o){const t=new WeakMap;function i(h,m){const p=h.array,y=h.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,y),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const y=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,y);else{x.sort((M,R)=>M.start-R.start);let S=0;for(let M=1;M<x.length;M++){const R=x[S],C=x[M];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++S,x[S]=C)}x.length=S+1;for(let M=0,R=x.length;M<R;M++){const C=x[M];o.bufferSubData(p,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const y=t.get(h);(!y||y.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var TM=`#ifdef USE_ALPHAHASH
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
}`,ht={alphahash_fragment:TM,alphahash_pars_fragment:AM,alphamap_fragment:RM,alphamap_pars_fragment:wM,alphatest_fragment:CM,alphatest_pars_fragment:DM,aomap_fragment:UM,aomap_pars_fragment:LM,batching_pars_vertex:NM,batching_vertex:OM,begin_vertex:PM,beginnormal_vertex:zM,bsdfs:BM,iridescence_fragment:FM,bumpmap_pars_fragment:IM,clipping_planes_fragment:HM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:VM,color_fragment:jM,color_pars_fragment:XM,color_pars_vertex:WM,color_vertex:qM,common:YM,cube_uv_reflection_fragment:ZM,defaultnormal_vertex:KM,displacementmap_pars_vertex:QM,displacementmap_vertex:JM,emissivemap_fragment:$M,emissivemap_pars_fragment:eb,colorspace_fragment:tb,colorspace_pars_fragment:nb,envmap_fragment:ib,envmap_common_pars_fragment:ab,envmap_pars_fragment:rb,envmap_pars_vertex:sb,envmap_physical_pars_fragment:vb,envmap_vertex:ob,fog_vertex:lb,fog_pars_vertex:cb,fog_fragment:ub,fog_pars_fragment:fb,gradientmap_pars_fragment:db,lightmap_pars_fragment:hb,lights_lambert_fragment:pb,lights_lambert_pars_fragment:mb,lights_pars_begin:gb,lights_toon_fragment:_b,lights_toon_pars_fragment:xb,lights_phong_fragment:yb,lights_phong_pars_fragment:Sb,lights_physical_fragment:Mb,lights_physical_pars_fragment:bb,lights_fragment_begin:Eb,lights_fragment_maps:Tb,lights_fragment_end:Ab,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Cb,logdepthbuf_vertex:Db,map_fragment:Ub,map_pars_fragment:Lb,map_particle_fragment:Nb,map_particle_pars_fragment:Ob,metalnessmap_fragment:Pb,metalnessmap_pars_fragment:zb,morphinstance_vertex:Bb,morphcolor_vertex:Fb,morphnormal_vertex:Ib,morphtarget_pars_vertex:Hb,morphtarget_vertex:kb,normal_fragment_begin:Gb,normal_fragment_maps:Vb,normal_pars_fragment:jb,normal_pars_vertex:Xb,normal_vertex:Wb,normalmap_pars_fragment:qb,clearcoat_normal_fragment_begin:Yb,clearcoat_normal_fragment_maps:Zb,clearcoat_pars_fragment:Kb,iridescence_pars_fragment:Qb,opaque_fragment:Jb,packing:$b,premultiplied_alpha_fragment:eE,project_vertex:tE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:fE,skinning_vertex:dE,skinnormal_vertex:hE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:gE,tonemapping_pars_fragment:vE,transmission_fragment:_E,transmission_pars_fragment:xE,uv_pars_fragment:yE,uv_pars_vertex:SE,uv_vertex:ME,worldpos_vertex:bE,background_vert:EE,background_frag:TE,backgroundCube_vert:AE,backgroundCube_frag:RE,cube_vert:wE,cube_frag:CE,depth_vert:DE,depth_frag:UE,distanceRGBA_vert:LE,distanceRGBA_frag:NE,equirect_vert:OE,equirect_frag:PE,linedashed_vert:zE,linedashed_frag:BE,meshbasic_vert:FE,meshbasic_frag:IE,meshlambert_vert:HE,meshlambert_frag:kE,meshmatcap_vert:GE,meshmatcap_frag:VE,meshnormal_vert:jE,meshnormal_frag:XE,meshphong_vert:WE,meshphong_frag:qE,meshphysical_vert:YE,meshphysical_frag:ZE,meshtoon_vert:KE,meshtoon_frag:QE,points_vert:JE,points_frag:$E,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},Be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ai={basic:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Nn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Nn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Nn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Nn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Nn([Be.points,Be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Nn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Nn([Be.common,Be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Nn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Nn([Be.sprite,Be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Nn([Be.common,Be.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Nn([Be.lights,Be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ai.physical={uniforms:Nn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Ac={r:0,b:0,g:0},mr=new sa,aT=new Jt;function rT(o,t,i,r,l,u,d){const h=new Ct(0);let m=u===!0?0:1,p,y,x=null,S=0,M=null;function R(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?i:t).get(L)),L}function C(P){let L=!1;const j=R(P);j===null?_(h,m):j&&j.isColor&&(_(j,1),L=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,d):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(P,L){const j=R(L);j&&(j.isCubeTexture||j.mapping===kc)?(y===void 0&&(y=new aa(new qo(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Ds(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(G,I,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(y)),mr.copy(L.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),y.material.uniforms.envMap.value=j,y.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(mr)),y.material.toneMapped=wt.getTransfer(j.colorSpace)!==kt,(x!==j||S!==j.version||M!==o.toneMapping)&&(y.material.needsUpdate=!0,x=j,S=j.version,M=o.toneMapping),y.layers.enableAll(),P.unshift(y,y.geometry,y.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new aa(new Vc(2,2),new Xa({name:"BackgroundMaterial",uniforms:Ds(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=wt.getTransfer(j.colorSpace)!==kt,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(x!==j||S!==j.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=j,S=j.version,M=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,L){P.getRGB(Ac,i0(o)),r.buffers.color.setClear(Ac.r,Ac.g,Ac.b,L,d)}function k(){y!==void 0&&(y.geometry.dispose(),y.material.dispose(),y=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,L=1){h.set(P),m=L,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,_(h,m)},render:C,addToRenderList:b,dispose:k}}function sT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(D,F,fe,ce,ue){let me=!1;const U=x(ce,fe,F);u!==U&&(u=U,p(u.object)),me=M(D,ce,fe,ue),me&&R(D,ce,fe,ue),ue!==null&&t.update(ue,o.ELEMENT_ARRAY_BUFFER),(me||d)&&(d=!1,L(D,F,fe,ce),ue!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ue).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function y(D){return o.deleteVertexArray(D)}function x(D,F,fe){const ce=fe.wireframe===!0;let ue=r[D.id];ue===void 0&&(ue={},r[D.id]=ue);let me=ue[F.id];me===void 0&&(me={},ue[F.id]=me);let U=me[ce];return U===void 0&&(U=S(m()),me[ce]=U),U}function S(D){const F=[],fe=[],ce=[];for(let ue=0;ue<i;ue++)F[ue]=0,fe[ue]=0,ce[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:fe,attributeDivisors:ce,object:D,attributes:{},index:null}}function M(D,F,fe,ce){const ue=u.attributes,me=F.attributes;let U=0;const W=fe.getAttributes();for(const q in W)if(W[q].location>=0){const de=ue[q];let N=me[q];if(N===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),de===void 0||de.attribute!==N||N&&de.data!==N.data)return!0;U++}return u.attributesNum!==U||u.index!==ce}function R(D,F,fe,ce){const ue={},me=F.attributes;let U=0;const W=fe.getAttributes();for(const q in W)if(W[q].location>=0){let de=me[q];de===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(de=D.instanceColor));const N={};N.attribute=de,de&&de.data&&(N.data=de.data),ue[q]=N,U++}u.attributes=ue,u.attributesNum=U,u.index=ce}function C(){const D=u.newAttributes;for(let F=0,fe=D.length;F<fe;F++)D[F]=0}function b(D){_(D,0)}function _(D,F){const fe=u.newAttributes,ce=u.enabledAttributes,ue=u.attributeDivisors;fe[D]=1,ce[D]===0&&(o.enableVertexAttribArray(D),ce[D]=1),ue[D]!==F&&(o.vertexAttribDivisor(D,F),ue[D]=F)}function k(){const D=u.newAttributes,F=u.enabledAttributes;for(let fe=0,ce=F.length;fe<ce;fe++)F[fe]!==D[fe]&&(o.disableVertexAttribArray(fe),F[fe]=0)}function P(D,F,fe,ce,ue,me,U){U===!0?o.vertexAttribIPointer(D,F,fe,ue,me):o.vertexAttribPointer(D,F,fe,ce,ue,me)}function L(D,F,fe,ce){C();const ue=ce.attributes,me=fe.getAttributes(),U=F.defaultAttributeValues;for(const W in me){const q=me[W];if(q.location>=0){let oe=ue[W];if(oe===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){const de=oe.normalized,N=oe.itemSize,ee=t.get(oe);if(ee===void 0)continue;const be=ee.buffer,Ae=ee.type,Q=ee.bytesPerElement,xe=Ae===o.INT||Ae===o.UNSIGNED_INT||oe.gpuType===Ah;if(oe.isInterleavedBufferAttribute){const _e=oe.data,ke=_e.stride,Oe=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let Je=0;Je<q.locationSize;Je++)_(q.location+Je,_e.meshPerAttribute);D.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Je=0;Je<q.locationSize;Je++)b(q.location+Je);o.bindBuffer(o.ARRAY_BUFFER,be);for(let Je=0;Je<q.locationSize;Je++)P(q.location+Je,N/q.locationSize,Ae,de,ke*Q,(Oe+N/q.locationSize*Je)*Q,xe)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<q.locationSize;_e++)_(q.location+_e,oe.meshPerAttribute);D.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<q.locationSize;_e++)b(q.location+_e);o.bindBuffer(o.ARRAY_BUFFER,be);for(let _e=0;_e<q.locationSize;_e++)P(q.location+_e,N/q.locationSize,Ae,de,N*Q,N/q.locationSize*_e*Q,xe)}}else if(U!==void 0){const de=U[W];if(de!==void 0)switch(de.length){case 2:o.vertexAttrib2fv(q.location,de);break;case 3:o.vertexAttrib3fv(q.location,de);break;case 4:o.vertexAttrib4fv(q.location,de);break;default:o.vertexAttrib1fv(q.location,de)}}}}k()}function j(){J();for(const D in r){const F=r[D];for(const fe in F){const ce=F[fe];for(const ue in ce)y(ce[ue].object),delete ce[ue];delete F[fe]}delete r[D]}}function G(D){if(r[D.id]===void 0)return;const F=r[D.id];for(const fe in F){const ce=F[fe];for(const ue in ce)y(ce[ue].object),delete ce[ue];delete F[fe]}delete r[D.id]}function I(D){for(const F in r){const fe=r[F];if(fe[D.id]===void 0)continue;const ce=fe[D.id];for(const ue in ce)y(ce[ue].object),delete ce[ue];delete fe[D.id]}}function J(){A(),d=!0,u!==l&&(u=l,p(u.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:A,dispose:j,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:b,disableUnusedAttributes:k}}function oT(o,t,i){let r;function l(p){r=p}function u(p,y){o.drawArrays(r,p,y),i.update(y,r,1)}function d(p,y,x){x!==0&&(o.drawArraysInstanced(r,p,y,x),i.update(y,r,x))}function h(p,y,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,y,0,x);let M=0;for(let R=0;R<x;R++)M+=y[R];i.update(M,r,1)}function m(p,y,x,S){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let R=0;R<p.length;R++)d(p[R],y[R],S[R]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,y,0,S,0,x);let R=0;for(let C=0;C<x;C++)R+=y[C]*S[C];i.update(R,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function lT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==vi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const J=I===Vo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Di&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ia&&!J)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const y=m(p);y!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const x=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),k=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),j=R>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:b,maxAttributes:_,maxVertexUniforms:k,maxVaryings:P,maxFragmentUniforms:L,vertexTextures:j,maxSamples:G}}function cT(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new vr,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||r!==0||l;return l=S,r=x.length,M},this.beginShadows=function(){u=!0,y(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=y(x,S,0)},this.setState=function(x,S,M){const R=x.clippingPlanes,C=x.clipIntersection,b=x.clipShadows,_=o.get(x);if(!l||R===null||R.length===0||u&&!b)u?y(null):p();else{const k=u?0:r,P=k*4;let L=_.clippingState||null;m.value=L,L=y(R,S,P,M);for(let j=0;j!==P;++j)L[j]=i[j];_.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=k}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function y(x,S,M,R){const C=x!==null?x.length:0;let b=null;if(C!==0){if(b=m.value,R!==!0||b===null){const _=M+C*4,k=S.matrixWorldInverse;h.getNormalMatrix(k),(b===null||b.length<_)&&(b=new Float32Array(_));for(let P=0,L=M;P!==C;++P,L+=4)d.copy(x[P]).applyMatrix4(k,h),d.normal.toArray(b,L),b[L+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,b}}function uT(o){let t=new WeakMap;function i(d,h){return h===Xd?d.mapping=Rs:h===Wd&&(d.mapping=ws),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Xd||h===Wd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new lM(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ms=4,r_=[.125,.215,.35,.446,.526,.582],yr=20,Dd=new c0,s_=new Ct;let Ud=null,Ld=0,Nd=0,Od=!1;const _r=(1+Math.sqrt(5))/2,ys=1/_r,o_=[new $(-_r,ys,0),new $(_r,ys,0),new $(-ys,0,_r),new $(ys,0,_r),new $(0,_r,-ys),new $(0,_r,ys),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],fT=new $;class l_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=fT}=u;Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ud,Ld,Nd),this._renderer.xr.enabled=Od,t.scissorTest=!1,Rc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Vo,format:vi,colorSpace:Cs,depthBuffer:!1},l=c_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dT(u)),this._blurMaterial=hT(u,t,i)}return l}_compileMaterial(t){const i=new aa(this._lodPlanes[0],t);this._renderer.compile(i,Dd)}_sceneToCubeUV(t,i,r,l,u){const m=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],x=this._renderer,S=x.autoClear,M=x.toneMapping;x.getClearColor(s_),x.toneMapping=Ga,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null));const C=new e0({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),b=new aa(new qo,C);let _=!1;const k=t.background;k?k.isColor&&(C.color.copy(k),t.background=null,_=!0):(C.color.copy(s_),_=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+y[P],u.y,u.z)):L===1?(m.up.set(0,0,p[P]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+y[P],u.z)):(m.up.set(0,p[P],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+y[P]));const j=this._cubeSize;Rc(l,L*j,P>2?j:0,j,j),x.setRenderTarget(l),_&&x.render(b,m),x.render(t,m)}b.geometry.dispose(),b.material.dispose(),x.toneMapping=M,x.autoClear=S,t.background=k}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Rs||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=f_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new aa(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Rc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Dd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=o_[(l-u-1)%o_.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,x=new aa(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*yr-1),C=u/R,b=isFinite(u)?1+Math.floor(y*C):yr;b>yr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${yr}`);const _=[];let k=0;for(let I=0;I<yr;++I){const J=I/C,A=Math.exp(-J*J/2);_.push(A),I===0?k+=A:I<b&&(k+=2*A)}for(let I=0;I<_.length;I++)_[I]=_[I]/k;S.envMap.value=t.texture,S.samples.value=b,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:P}=this;S.dTheta.value=R,S.mipInt.value=P-r;const L=this._sizeLods[l],j=3*L*(l>P-Ms?l-P+Ms:0),G=4*(this._cubeSize-L);Rc(i,j,G,3*L,2*L),m.setRenderTarget(i),m.render(x,Dd)}}function dT(o){const t=[],i=[],r=[];let l=o;const u=o-Ms+1+r_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-Ms?m=r_[d-o+Ms-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),y=-p,x=1+p,S=[y,y,x,y,x,x,y,y,x,x,y,x],M=6,R=6,C=3,b=2,_=1,k=new Float32Array(C*R*M),P=new Float32Array(b*R*M),L=new Float32Array(_*R*M);for(let G=0;G<M;G++){const I=G%3*2/3-1,J=G>2?0:-1,A=[I,J,0,I+2/3,J,0,I+2/3,J+1,0,I,J,0,I+2/3,J+1,0,I,J+1,0];k.set(A,C*R*G),P.set(S,b*R*G);const D=[G,G,G,G,G,G];L.set(D,_*R*G)}const j=new oa;j.setAttribute("position",new Ci(k,C)),j.setAttribute("uv",new Ci(P,b)),j.setAttribute("faceIndex",new Ci(L,_)),t.push(j),l>Ms&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function c_(o,t,i){const r=new Er(o,t,i);return r.texture.mapping=kc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function hT(o,t,i){const r=new Float32Array(yr),l=new $(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function u_(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function f_(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Bh(){return`

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
	`}function pT(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Xd||m===Wd,y=m===Rs||m===ws;if(p||y){let x=t.get(h);const S=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new l_(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return p&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new l_(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let y=0;y<p;y++)h[y]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function mT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Es("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function gT(o,t,i,r){const l={},u=new WeakMap;function d(x){const S=x.target;S.index!==null&&t.remove(S.index);for(const R in S.attributes)t.remove(S.attributes[R]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(x,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(x){const S=[],M=x.index,R=x.attributes.position;let C=0;if(M!==null){const k=M.array;C=M.version;for(let P=0,L=k.length;P<L;P+=3){const j=k[P+0],G=k[P+1],I=k[P+2];S.push(j,G,G,I,I,j)}}else if(R!==void 0){const k=R.array;C=R.version;for(let P=0,L=k.length/3-1;P<L;P+=3){const j=P+0,G=P+1,I=P+2;S.push(j,G,G,I,I,j)}}else return;const b=new(Z_(S)?n0:t0)(S,1);b.version=C;const _=u.get(x);_&&t.remove(_),u.set(x,b)}function y(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:y}}function vT(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*d),i.update(M,r,1)}function p(S,M,R){R!==0&&(o.drawElementsInstanced(r,M,u,S*d,R),i.update(M,r,R))}function y(S,M,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,R);let b=0;for(let _=0;_<R;_++)b+=M[_];i.update(b,r,1)}function x(S,M,R,C){if(R===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let _=0;_<S.length;_++)p(S[_]/d,M[_],C[_]);else{b.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,C,0,R);let _=0;for(let k=0;k<R;k++)_+=M[k]*C[k];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=y,this.renderMultiDrawInstances=x}function _T(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function xT(o,t,i){const r=new WeakMap,l=new Gt;function u(d,h,m){const p=d.morphTargetInfluences,y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=y!==void 0?y.length:0;let S=r.get(h);if(S===void 0||S.count!==x){let A=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",A)};S!==void 0&&S.texture.dispose();const M=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let P=0;M===!0&&(P=1),R===!0&&(P=2),C===!0&&(P=3);let L=h.attributes.position.count*P,j=1;L>t.maxTextureSize&&(j=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const G=new Float32Array(L*j*4*x),I=new K_(G,L,j,x);I.type=ia,I.needsUpdate=!0;const J=P*4;for(let D=0;D<x;D++){const F=b[D],fe=_[D],ce=k[D],ue=L*j*4*D;for(let me=0;me<F.count;me++){const U=me*J;M===!0&&(l.fromBufferAttribute(F,me),G[ue+U+0]=l.x,G[ue+U+1]=l.y,G[ue+U+2]=l.z,G[ue+U+3]=0),R===!0&&(l.fromBufferAttribute(fe,me),G[ue+U+4]=l.x,G[ue+U+5]=l.y,G[ue+U+6]=l.z,G[ue+U+7]=0),C===!0&&(l.fromBufferAttribute(ce,me),G[ue+U+8]=l.x,G[ue+U+9]=l.y,G[ue+U+10]=l.z,G[ue+U+11]=ce.itemSize===4?l.w:1)}}S={count:x,texture:I,size:new Lt(L,j)},r.set(h,S),h.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let M=0;for(let C=0;C<p.length;C++)M+=p[C];const R=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function yT(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,y=m.geometry,x=t.get(m,y);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const f0=new kn,d_=new o0(1,1),d0=new K_,h0=new XS,p0=new r0,h_=[],p_=[],m_=new Float32Array(16),g_=new Float32Array(9),v_=new Float32Array(4);function Ns(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=h_[l];if(u===void 0&&(u=new Float32Array(l),h_[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function jc(o,t){let i=p_[t];i===void 0&&(i=new Int32Array(t),p_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function ST(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function MT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function bT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function TT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;v_.set(r),o.uniformMatrix2fv(this.addr,!1,v_),pn(i,r)}}function AT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;g_.set(r),o.uniformMatrix3fv(this.addr,!1,g_),pn(i,r)}}function RT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;m_.set(r),o.uniformMatrix4fv(this.addr,!1,m_),pn(i,r)}}function wT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function UT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function LT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function NT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function PT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function zT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(d_.compareFunction=Y_,u=d_):u=f0,i.setTexture2D(t||u,l)}function BT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||h0,l)}function FT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||p0,l)}function IT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||d0,l)}function HT(o){switch(o){case 5126:return ST;case 35664:return MT;case 35665:return bT;case 35666:return ET;case 35674:return TT;case 35675:return AT;case 35676:return RT;case 5124:case 35670:return wT;case 35667:case 35671:return CT;case 35668:case 35672:return DT;case 35669:case 35673:return UT;case 5125:return LT;case 36294:return NT;case 36295:return OT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return IT}}function kT(o,t){o.uniform1fv(this.addr,t)}function GT(o,t){const i=Ns(t,this.size,2);o.uniform2fv(this.addr,i)}function VT(o,t){const i=Ns(t,this.size,3);o.uniform3fv(this.addr,i)}function jT(o,t){const i=Ns(t,this.size,4);o.uniform4fv(this.addr,i)}function XT(o,t){const i=Ns(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function WT(o,t){const i=Ns(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function qT(o,t){const i=Ns(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function YT(o,t){o.uniform1iv(this.addr,t)}function ZT(o,t){o.uniform2iv(this.addr,t)}function KT(o,t){o.uniform3iv(this.addr,t)}function QT(o,t){o.uniform4iv(this.addr,t)}function JT(o,t){o.uniform1uiv(this.addr,t)}function $T(o,t){o.uniform2uiv(this.addr,t)}function eA(o,t){o.uniform3uiv(this.addr,t)}function tA(o,t){o.uniform4uiv(this.addr,t)}function nA(o,t,i){const r=this.cache,l=t.length,u=jc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f0,u[d])}function iA(o,t,i){const r=this.cache,l=t.length,u=jc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||h0,u[d])}function aA(o,t,i){const r=this.cache,l=t.length,u=jc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||p0,u[d])}function rA(o,t,i){const r=this.cache,l=t.length,u=jc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||d0,u[d])}function sA(o){switch(o){case 5126:return kT;case 35664:return GT;case 35665:return VT;case 35666:return jT;case 35674:return XT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return $T;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return rA}}class oA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=HT(i.type)}}class lA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sA(i.type)}}class cA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function __(o,t){o.seq.push(t),o.map[t.id]=t}function uA(o,t,i){const r=o.name,l=r.length;for(Pd.lastIndex=0;;){const u=Pd.exec(r),d=Pd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){__(i,p===void 0?new oA(h,o,t):new lA(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new cA(h),__(i,x)),i=x}}}class Oc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);uA(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function x_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const fA=37297;let dA=0;function hA(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const y_=new dt;function pA(o){wt._getMatrix(y_,wt.workingColorSpace,o);const t=`mat3( ${y_.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(o)){case zc:return[t,"LinearTransferOETF"];case kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function S_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+hA(o.getShaderSource(t),h)}else return u}function mA(o,t){const i=pA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function gA(o,t){let i;switch(t){case iS:i="Linear";break;case aS:i="Reinhard";break;case rS:i="Cineon";break;case sS:i="ACESFilmic";break;case lS:i="AgX";break;case cS:i="Neutral";break;case oS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wc=new $;function vA(){wt.getLuminanceCoefficients(wc);const o=wc.x.toFixed(4),t=wc.y.toFixed(4),i=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _A(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function xA(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function yA(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Oo(o){return o!==""}function M_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function b_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(o){return o.replace(SA,bA)}const MA=new Map;function bA(o,t){let i=ht[t];if(i===void 0){const r=MA.get(t);if(r!==void 0)i=ht[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Sh(i)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E_(o){return o.replace(EA,TA)}function TA(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function T_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function AA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===z_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===B_?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function RA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Rs:case ws:t="ENVMAP_TYPE_CUBE";break;case kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function CA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case F_:t="ENVMAP_BLENDING_MULTIPLY";break;case tS:t="ENVMAP_BLENDING_MIX";break;case nS:t="ENVMAP_BLENDING_ADD";break}return t}function DA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function UA(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=AA(i),p=RA(i),y=wA(i),x=CA(i),S=DA(i),M=_A(i),R=xA(u),C=l.createProgram();let b,_,k=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Oo).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Oo).join(`
`),_.length>0&&(_+=`
`)):(b=[T_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),_=[T_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+y:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ht.tonemapping_pars_fragment:"",i.toneMapping!==Ga?gA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,mA("linearToOutputTexel",i.outputColorSpace),vA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),d=Sh(d),d=M_(d,i),d=b_(d,i),h=Sh(h),h=M_(h,i),h=b_(h,i),d=E_(d),h=E_(h),i.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,b=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",i.glslVersion===Ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=k+b+d,L=k+_+h,j=x_(l,l.VERTEX_SHADER,P),G=x_(l,l.FRAGMENT_SHADER,L);l.attachShader(C,j),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(F){if(o.debug.checkShaderErrors){const fe=l.getProgramInfoLog(C)||"",ce=l.getShaderInfoLog(j)||"",ue=l.getShaderInfoLog(G)||"",me=fe.trim(),U=ce.trim(),W=ue.trim();let q=!0,oe=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,j,G);else{const de=S_(l,j,"vertex"),N=S_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+me+`
`+de+`
`+N)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(U===""||W==="")&&(oe=!1);oe&&(F.diagnostics={runnable:q,programLog:me,vertexShader:{log:U,prefix:b},fragmentShader:{log:W,prefix:_}})}l.deleteShader(j),l.deleteShader(G),J=new Oc(l,C),A=yA(l,C)}let J;this.getUniforms=function(){return J===void 0&&I(this),J};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,fA)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=j,this.fragmentShader=G,this}let LA=0;class NA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new OA(t),i.set(t,r)),r}}class OA{constructor(t){this.id=LA++,this.code=t,this.usedTimes=0}}function PA(o,t,i,r,l,u,d){const h=new J_,m=new NA,p=new Set,y=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return p.add(A),A===0?"uv":`uv${A}`}function b(A,D,F,fe,ce){const ue=fe.fog,me=ce.geometry,U=A.isMeshStandardMaterial?fe.environment:null,W=(A.isMeshStandardMaterial?i:t).get(A.envMap||U),q=W&&W.mapping===kc?W.image.height:null,oe=R[A.type];A.precision!==null&&(M=l.getMaxPrecision(A.precision),M!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const de=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,N=de!==void 0?de.length:0;let ee=0;me.morphAttributes.position!==void 0&&(ee=1),me.morphAttributes.normal!==void 0&&(ee=2),me.morphAttributes.color!==void 0&&(ee=3);let be,Ae,Q,xe;if(oe){const Et=Ai[oe];be=Et.vertexShader,Ae=Et.fragmentShader}else be=A.vertexShader,Ae=A.fragmentShader,m.update(A),Q=m.getVertexShaderID(A),xe=m.getFragmentShaderID(A);const _e=o.getRenderTarget(),ke=o.state.buffers.depth.getReversed(),Oe=ce.isInstancedMesh===!0,Je=ce.isBatchedMesh===!0,Dt=!!A.map,lt=!!A.matcap,H=!!W,ut=!!A.aoMap,B=!!A.lightMap,Le=!!A.bumpMap,Ne=!!A.normalMap,mt=!!A.displacementMap,Ie=!!A.emissiveMap,at=!!A.metalnessMap,Wt=!!A.roughnessMap,qt=A.anisotropy>0,O=A.clearcoat>0,E=A.dispersion>0,ie=A.iridescence>0,ge=A.sheen>0,Ee=A.transmission>0,he=qt&&!!A.anisotropyMap,Ke=O&&!!A.clearcoatMap,Ce=O&&!!A.clearcoatNormalMap,Ye=O&&!!A.clearcoatRoughnessMap,Ze=ie&&!!A.iridescenceMap,Re=ie&&!!A.iridescenceThicknessMap,De=ge&&!!A.sheenColorMap,Qe=ge&&!!A.sheenRoughnessMap,He=!!A.specularMap,Pe=!!A.specularColorMap,ot=!!A.specularIntensityMap,X=Ee&&!!A.transmissionMap,we=Ee&&!!A.thicknessMap,Ue=!!A.gradientMap,Ge=!!A.alphaMap,Te=A.alphaTest>0,Se=!!A.alphaHash,Ve=!!A.extensions;let rt=Ga;A.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(rt=o.toneMapping);const Pt={shaderID:oe,shaderType:A.type,shaderName:A.name,vertexShader:be,fragmentShader:Ae,defines:A.defines,customVertexShaderID:Q,customFragmentShaderID:xe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,batching:Je,batchingColor:Je&&ce._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&ce.instanceColor!==null,instancingMorph:Oe&&ce.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:_e===null?o.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Cs,alphaToCoverage:!!A.alphaToCoverage,map:Dt,matcap:lt,envMap:H,envMapMode:H&&W.mapping,envMapCubeUVHeight:q,aoMap:ut,lightMap:B,bumpMap:Le,normalMap:Ne,displacementMap:S&&mt,emissiveMap:Ie,normalMapObjectSpace:Ne&&A.normalMapType===pS,normalMapTangentSpace:Ne&&A.normalMapType===hS,metalnessMap:at,roughnessMap:Wt,anisotropy:qt,anisotropyMap:he,clearcoat:O,clearcoatMap:Ke,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,dispersion:E,iridescence:ie,iridescenceMap:Ze,iridescenceThicknessMap:Re,sheen:ge,sheenColorMap:De,sheenRoughnessMap:Qe,specularMap:He,specularColorMap:Pe,specularIntensityMap:ot,transmission:Ee,transmissionMap:X,thicknessMap:we,gradientMap:Ue,opaque:A.transparent===!1&&A.blending===bs&&A.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Te,alphaHash:Se,combine:A.combine,mapUv:Dt&&C(A.map.channel),aoMapUv:ut&&C(A.aoMap.channel),lightMapUv:B&&C(A.lightMap.channel),bumpMapUv:Le&&C(A.bumpMap.channel),normalMapUv:Ne&&C(A.normalMap.channel),displacementMapUv:mt&&C(A.displacementMap.channel),emissiveMapUv:Ie&&C(A.emissiveMap.channel),metalnessMapUv:at&&C(A.metalnessMap.channel),roughnessMapUv:Wt&&C(A.roughnessMap.channel),anisotropyMapUv:he&&C(A.anisotropyMap.channel),clearcoatMapUv:Ke&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:De&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&C(A.sheenRoughnessMap.channel),specularMapUv:He&&C(A.specularMap.channel),specularColorMapUv:Pe&&C(A.specularColorMap.channel),specularIntensityMapUv:ot&&C(A.specularIntensityMap.channel),transmissionMapUv:X&&C(A.transmissionMap.channel),thicknessMapUv:we&&C(A.thicknessMap.channel),alphaMapUv:Ge&&C(A.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(Ne||qt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!me.attributes.uv&&(Dt||Ge),fog:!!ue,useFog:A.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ke,skinning:ce.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ee,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:rt,decodeVideoTexture:Dt&&A.map.isVideoTexture===!0&&wt.getTransfer(A.map.colorSpace)===kt,decodeVideoTextureEmissive:Ie&&A.emissiveMap.isVideoTexture===!0&&wt.getTransfer(A.emissiveMap.colorSpace)===kt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===na,flipSided:A.side===Hn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ve&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&A.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function _(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const F in A.defines)D.push(F),D.push(A.defines[F]);return A.isRawShaderMaterial===!1&&(k(D,A),P(D,A),D.push(o.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function k(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function P(A,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),A.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),A.push(h.mask)}function L(A){const D=R[A.type];let F;if(D){const fe=Ai[D];F=aM.clone(fe.uniforms)}else F=A.uniforms;return F}function j(A,D){let F;for(let fe=0,ce=y.length;fe<ce;fe++){const ue=y[fe];if(ue.cacheKey===D){F=ue,++F.usedTimes;break}}return F===void 0&&(F=new UA(o,D,A,u),y.push(F)),F}function G(A){if(--A.usedTimes===0){const D=y.indexOf(A);y[D]=y[y.length-1],y.pop(),A.destroy()}}function I(A){m.remove(A)}function J(){m.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:L,acquireProgram:j,releaseProgram:G,releaseShaderCache:I,programs:y,dispose:J}}function zA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function BA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function A_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function R_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(x,S,M,R,C,b){let _=o[t];return _===void 0?(_={id:x.id,object:x,geometry:S,material:M,groupOrder:R,renderOrder:x.renderOrder,z:C,group:b},o[t]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=M,_.groupOrder=R,_.renderOrder=x.renderOrder,_.z=C,_.group=b),t++,_}function h(x,S,M,R,C,b){const _=d(x,S,M,R,C,b);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,S,M,R,C,b){const _=d(x,S,M,R,C,b);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,S){i.length>1&&i.sort(x||BA),r.length>1&&r.sort(S||A_),l.length>1&&l.sort(S||A_)}function y(){for(let x=t,S=o.length;x<S;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:y,sort:p}}function FA(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new R_,o.set(r,[d])):l>=u.length?(d=new R_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function IA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new Ct};break;case"SpotLight":i={position:new $,direction:new $,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=i,i}}}function HA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let kA=0;function GA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function VA(o){const t=new IA,i=HA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,u=new Jt,d=new Jt;function h(p){let y=0,x=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let M=0,R=0,C=0,b=0,_=0,k=0,P=0,L=0,j=0,G=0,I=0;p.sort(GA);for(let A=0,D=p.length;A<D;A++){const F=p[A],fe=F.color,ce=F.intensity,ue=F.distance,me=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)y+=fe.r*ce,x+=fe.g*ce,S+=fe.b*ce;else if(F.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(F.sh.coefficients[U],ce);I++}else if(F.isDirectionalLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const W=F.shadow,q=i.get(F);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=me,r.directionalShadowMatrix[M]=F.shadow.matrix,k++}r.directional[M]=U,M++}else if(F.isSpotLight){const U=t.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(fe).multiplyScalar(ce),U.distance=ue,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,r.spot[C]=U;const W=F.shadow;if(F.map&&(r.spotLightMap[j]=F.map,j++,W.updateMatrices(F),F.castShadow&&G++),r.spotLightMatrix[C]=W.matrix,F.castShadow){const q=i.get(F);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=me,L++}C++}else if(F.isRectAreaLight){const U=t.get(F);U.color.copy(fe).multiplyScalar(ce),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),r.rectArea[b]=U,b++}else if(F.isPointLight){const U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),U.distance=F.distance,U.decay=F.decay,F.castShadow){const W=F.shadow,q=i.get(F);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,q.shadowCameraNear=W.camera.near,q.shadowCameraFar=W.camera.far,r.pointShadow[R]=q,r.pointShadowMap[R]=me,r.pointShadowMatrix[R]=F.shadow.matrix,P++}r.point[R]=U,R++}else if(F.isHemisphereLight){const U=t.get(F);U.skyColor.copy(F.color).multiplyScalar(ce),U.groundColor.copy(F.groundColor).multiplyScalar(ce),r.hemi[_]=U,_++}}b>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=x,r.ambient[2]=S;const J=r.hash;(J.directionalLength!==M||J.pointLength!==R||J.spotLength!==C||J.rectAreaLength!==b||J.hemiLength!==_||J.numDirectionalShadows!==k||J.numPointShadows!==P||J.numSpotShadows!==L||J.numSpotMaps!==j||J.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=b,r.point.length=R,r.hemi.length=_,r.directionalShadow.length=k,r.directionalShadowMap.length=k,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=k,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=L+j-G,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=I,J.directionalLength=M,J.pointLength=R,J.spotLength=C,J.rectAreaLength=b,J.hemiLength=_,J.numDirectionalShadows=k,J.numPointShadows=P,J.numSpotShadows=L,J.numSpotMaps=j,J.numLightProbes=I,r.version=kA++)}function m(p,y){let x=0,S=0,M=0,R=0,C=0;const b=y.matrixWorldInverse;for(let _=0,k=p.length;_<k;_++){const P=p[_];if(P.isDirectionalLight){const L=r.directional[x];L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(b),x++}else if(P.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(b),L.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(b),M++}else if(P.isRectAreaLight){const L=r.rectArea[R];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(b),d.identity(),u.copy(P.matrixWorld),u.premultiply(b),d.extractRotation(u),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),R++}else if(P.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(b),S++}else if(P.isHemisphereLight){const L=r.hemi[C];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(b),C++}}}return{setup:h,setupView:m,state:r}}function w_(o){const t=new VA(o),i=[],r=[];function l(y){p.camera=y,i.length=0,r.length=0}function u(y){i.push(y)}function d(y){r.push(y)}function h(){t.setup(i)}function m(y){t.setupView(i,y)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function jA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new w_(o),t.set(l,[h])):u>=d.length?(h=new w_(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const XA=`void main() {
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
}`;function qA(o,t,i){let r=new Ph;const l=new Lt,u=new Lt,d=new Gt,h=new mM({depthPacking:dS}),m=new gM,p={},y=i.maxTextureSize,x={[ja]:Hn,[Hn]:ja,[na]:na},S=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:XA,fragmentShader:WA}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const R=new oa;R.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new aa(R,S),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z_;let _=this.type;this.render=function(G,I,J){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||G.length===0)return;const A=o.getRenderTarget(),D=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),fe=o.state;fe.setBlending(ka),fe.buffers.depth.getReversed()?fe.buffers.color.setClear(0,0,0,0):fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const ce=_!==ta&&this.type===ta,ue=_===ta&&this.type!==ta;for(let me=0,U=G.length;me<U;me++){const W=G[me],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const oe=q.getFrameExtents();if(l.multiply(oe),u.copy(q.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(u.x=Math.floor(y/oe.x),l.x=u.x*oe.x,q.mapSize.x=u.x),l.y>y&&(u.y=Math.floor(y/oe.y),l.y=u.y*oe.y,q.mapSize.y=u.y)),q.map===null||ce===!0||ue===!0){const N=this.type!==ta?{minFilter:_i,magFilter:_i}:{};q.map!==null&&q.map.dispose(),q.map=new Er(l.x,l.y,N),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const de=q.getViewportCount();for(let N=0;N<de;N++){const ee=q.getViewport(N);d.set(u.x*ee.x,u.y*ee.y,u.x*ee.z,u.y*ee.w),fe.viewport(d),q.updateMatrices(W,N),r=q.getFrustum(),L(I,J,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===ta&&k(q,J),q.needsUpdate=!1}_=this.type,b.needsUpdate=!1,o.setRenderTarget(A,D,F)};function k(G,I){const J=t.update(C);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Er(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(I,null,J,S,C,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(I,null,J,M,C,null)}function P(G,I,J,A){let D=null;const F=J.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(F!==void 0)D=F;else if(D=J.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const fe=D.uuid,ce=I.uuid;let ue=p[fe];ue===void 0&&(ue={},p[fe]=ue);let me=ue[ce];me===void 0&&(me=D.clone(),ue[ce]=me,I.addEventListener("dispose",j)),D=me}if(D.visible=I.visible,D.wireframe=I.wireframe,A===ta?D.side=I.shadowSide!==null?I.shadowSide:I.side:D.side=I.shadowSide!==null?I.shadowSide:x[I.side],D.alphaMap=I.alphaMap,D.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,D.map=I.map,D.clipShadows=I.clipShadows,D.clippingPlanes=I.clippingPlanes,D.clipIntersection=I.clipIntersection,D.displacementMap=I.displacementMap,D.displacementScale=I.displacementScale,D.displacementBias=I.displacementBias,D.wireframeLinewidth=I.wireframeLinewidth,D.linewidth=I.linewidth,J.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const fe=o.properties.get(D);fe.light=J}return D}function L(G,I,J,A,D){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&D===ta)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,G.matrixWorld);const ce=t.update(G),ue=G.material;if(Array.isArray(ue)){const me=ce.groups;for(let U=0,W=me.length;U<W;U++){const q=me[U],oe=ue[q.materialIndex];if(oe&&oe.visible){const de=P(G,oe,A,D);G.onBeforeShadow(o,G,I,J,ce,de,q),o.renderBufferDirect(J,null,ce,de,G,q),G.onAfterShadow(o,G,I,J,ce,de,q)}}}else if(ue.visible){const me=P(G,ue,A,D);G.onBeforeShadow(o,G,I,J,ce,me,null),o.renderBufferDirect(J,null,ce,me,G,null),G.onAfterShadow(o,G,I,J,ce,me,null)}}const fe=G.children;for(let ce=0,ue=fe.length;ce<ue;ce++)L(fe[ce],I,J,A,D)}function j(G){G.target.removeEventListener("dispose",j);for(const J in p){const A=p[J],D=G.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}const YA={[Fd]:Id,[Hd]:Vd,[kd]:jd,[As]:Gd,[Id]:Fd,[Vd]:Hd,[jd]:kd,[Gd]:As};function ZA(o,t){function i(){let X=!1;const we=new Gt;let Ue=null;const Ge=new Gt(0,0,0,0);return{setMask:function(Te){Ue!==Te&&!X&&(o.colorMask(Te,Te,Te,Te),Ue=Te)},setLocked:function(Te){X=Te},setClear:function(Te,Se,Ve,rt,Pt){Pt===!0&&(Te*=rt,Se*=rt,Ve*=rt),we.set(Te,Se,Ve,rt),Ge.equals(we)===!1&&(o.clearColor(Te,Se,Ve,rt),Ge.copy(we))},reset:function(){X=!1,Ue=null,Ge.set(-1,0,0,0)}}}function r(){let X=!1,we=!1,Ue=null,Ge=null,Te=null;return{setReversed:function(Se){if(we!==Se){const Ve=t.get("EXT_clip_control");Se?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),we=Se;const rt=Te;Te=null,this.setClear(rt)}},getReversed:function(){return we},setTest:function(Se){Se?_e(o.DEPTH_TEST):ke(o.DEPTH_TEST)},setMask:function(Se){Ue!==Se&&!X&&(o.depthMask(Se),Ue=Se)},setFunc:function(Se){if(we&&(Se=YA[Se]),Ge!==Se){switch(Se){case Fd:o.depthFunc(o.NEVER);break;case Id:o.depthFunc(o.ALWAYS);break;case Hd:o.depthFunc(o.LESS);break;case As:o.depthFunc(o.LEQUAL);break;case kd:o.depthFunc(o.EQUAL);break;case Gd:o.depthFunc(o.GEQUAL);break;case Vd:o.depthFunc(o.GREATER);break;case jd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ge=Se}},setLocked:function(Se){X=Se},setClear:function(Se){Te!==Se&&(we&&(Se=1-Se),o.clearDepth(Se),Te=Se)},reset:function(){X=!1,Ue=null,Ge=null,Te=null,we=!1}}}function l(){let X=!1,we=null,Ue=null,Ge=null,Te=null,Se=null,Ve=null,rt=null,Pt=null;return{setTest:function(Et){X||(Et?_e(o.STENCIL_TEST):ke(o.STENCIL_TEST))},setMask:function(Et){we!==Et&&!X&&(o.stencilMask(Et),we=Et)},setFunc:function(Et,Cn,$n){(Ue!==Et||Ge!==Cn||Te!==$n)&&(o.stencilFunc(Et,Cn,$n),Ue=Et,Ge=Cn,Te=$n)},setOp:function(Et,Cn,$n){(Se!==Et||Ve!==Cn||rt!==$n)&&(o.stencilOp(Et,Cn,$n),Se=Et,Ve=Cn,rt=$n)},setLocked:function(Et){X=Et},setClear:function(Et){Pt!==Et&&(o.clearStencil(Et),Pt=Et)},reset:function(){X=!1,we=null,Ue=null,Ge=null,Te=null,Se=null,Ve=null,rt=null,Pt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let y={},x={},S=new WeakMap,M=[],R=null,C=!1,b=null,_=null,k=null,P=null,L=null,j=null,G=null,I=new Ct(0,0,0),J=0,A=!1,D=null,F=null,fe=null,ce=null,ue=null;const me=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,W=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),U=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),U=W>=2);let oe=null,de={};const N=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),be=new Gt().fromArray(N),Ae=new Gt().fromArray(ee);function Q(X,we,Ue,Ge){const Te=new Uint8Array(4),Se=o.createTexture();o.bindTexture(X,Se),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ve=0;Ve<Ue;Ve++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,Ge,0,o.RGBA,o.UNSIGNED_BYTE,Te):o.texImage2D(we+Ve,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Te);return Se}const xe={};xe[o.TEXTURE_2D]=Q(o.TEXTURE_2D,o.TEXTURE_2D,1),xe[o.TEXTURE_CUBE_MAP]=Q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[o.TEXTURE_2D_ARRAY]=Q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xe[o.TEXTURE_3D]=Q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),_e(o.DEPTH_TEST),d.setFunc(As),Le(!1),Ne(wv),_e(o.CULL_FACE),ut(ka);function _e(X){y[X]!==!0&&(o.enable(X),y[X]=!0)}function ke(X){y[X]!==!1&&(o.disable(X),y[X]=!1)}function Oe(X,we){return x[X]!==we?(o.bindFramebuffer(X,we),x[X]=we,X===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=we),X===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=we),!0):!1}function Je(X,we){let Ue=M,Ge=!1;if(X){Ue=S.get(we),Ue===void 0&&(Ue=[],S.set(we,Ue));const Te=X.textures;if(Ue.length!==Te.length||Ue[0]!==o.COLOR_ATTACHMENT0){for(let Se=0,Ve=Te.length;Se<Ve;Se++)Ue[Se]=o.COLOR_ATTACHMENT0+Se;Ue.length=Te.length,Ge=!0}}else Ue[0]!==o.BACK&&(Ue[0]=o.BACK,Ge=!0);Ge&&o.drawBuffers(Ue)}function Dt(X){return R!==X?(o.useProgram(X),R=X,!0):!1}const lt={[xr]:o.FUNC_ADD,[Fy]:o.FUNC_SUBTRACT,[Iy]:o.FUNC_REVERSE_SUBTRACT};lt[Hy]=o.MIN,lt[ky]=o.MAX;const H={[Gy]:o.ZERO,[Vy]:o.ONE,[jy]:o.SRC_COLOR,[zd]:o.SRC_ALPHA,[Ky]:o.SRC_ALPHA_SATURATE,[Yy]:o.DST_COLOR,[Wy]:o.DST_ALPHA,[Xy]:o.ONE_MINUS_SRC_COLOR,[Bd]:o.ONE_MINUS_SRC_ALPHA,[Zy]:o.ONE_MINUS_DST_COLOR,[qy]:o.ONE_MINUS_DST_ALPHA,[Qy]:o.CONSTANT_COLOR,[Jy]:o.ONE_MINUS_CONSTANT_COLOR,[$y]:o.CONSTANT_ALPHA,[eS]:o.ONE_MINUS_CONSTANT_ALPHA};function ut(X,we,Ue,Ge,Te,Se,Ve,rt,Pt,Et){if(X===ka){C===!0&&(ke(o.BLEND),C=!1);return}if(C===!1&&(_e(o.BLEND),C=!0),X!==By){if(X!==b||Et!==A){if((_!==xr||L!==xr)&&(o.blendEquation(o.FUNC_ADD),_=xr,L=xr),Et)switch(X){case bs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cv:o.blendFunc(o.ONE,o.ONE);break;case Dv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Uv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case bs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Dv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}k=null,P=null,j=null,G=null,I.set(0,0,0),J=0,b=X,A=Et}return}Te=Te||we,Se=Se||Ue,Ve=Ve||Ge,(we!==_||Te!==L)&&(o.blendEquationSeparate(lt[we],lt[Te]),_=we,L=Te),(Ue!==k||Ge!==P||Se!==j||Ve!==G)&&(o.blendFuncSeparate(H[Ue],H[Ge],H[Se],H[Ve]),k=Ue,P=Ge,j=Se,G=Ve),(rt.equals(I)===!1||Pt!==J)&&(o.blendColor(rt.r,rt.g,rt.b,Pt),I.copy(rt),J=Pt),b=X,A=!1}function B(X,we){X.side===na?ke(o.CULL_FACE):_e(o.CULL_FACE);let Ue=X.side===Hn;we&&(Ue=!Ue),Le(Ue),X.blending===bs&&X.transparent===!1?ut(ka):ut(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const Ge=X.stencilWrite;h.setTest(Ge),Ge&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ie(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_e(o.SAMPLE_ALPHA_TO_COVERAGE):ke(o.SAMPLE_ALPHA_TO_COVERAGE)}function Le(X){D!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),D=X)}function Ne(X){X!==Py?(_e(o.CULL_FACE),X!==F&&(X===wv?o.cullFace(o.BACK):X===zy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ke(o.CULL_FACE),F=X}function mt(X){X!==fe&&(U&&o.lineWidth(X),fe=X)}function Ie(X,we,Ue){X?(_e(o.POLYGON_OFFSET_FILL),(ce!==we||ue!==Ue)&&(o.polygonOffset(we,Ue),ce=we,ue=Ue)):ke(o.POLYGON_OFFSET_FILL)}function at(X){X?_e(o.SCISSOR_TEST):ke(o.SCISSOR_TEST)}function Wt(X){X===void 0&&(X=o.TEXTURE0+me-1),oe!==X&&(o.activeTexture(X),oe=X)}function qt(X,we,Ue){Ue===void 0&&(oe===null?Ue=o.TEXTURE0+me-1:Ue=oe);let Ge=de[Ue];Ge===void 0&&(Ge={type:void 0,texture:void 0},de[Ue]=Ge),(Ge.type!==X||Ge.texture!==we)&&(oe!==Ue&&(o.activeTexture(Ue),oe=Ue),o.bindTexture(X,we||xe[X]),Ge.type=X,Ge.texture=we)}function O(){const X=de[oe];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ie(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ye(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ze(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(X){be.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),be.copy(X))}function Qe(X){Ae.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Ae.copy(X))}function He(X,we){let Ue=p.get(we);Ue===void 0&&(Ue=new WeakMap,p.set(we,Ue));let Ge=Ue.get(X);Ge===void 0&&(Ge=o.getUniformBlockIndex(we,X.name),Ue.set(X,Ge))}function Pe(X,we){const Ge=p.get(we).get(X);m.get(we)!==Ge&&(o.uniformBlockBinding(we,Ge,X.__bindingPointIndex),m.set(we,Ge))}function ot(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},oe=null,de={},x={},S=new WeakMap,M=[],R=null,C=!1,b=null,_=null,k=null,P=null,L=null,j=null,G=null,I=new Ct(0,0,0),J=0,A=!1,D=null,F=null,fe=null,ce=null,ue=null,be.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:_e,disable:ke,bindFramebuffer:Oe,drawBuffers:Je,useProgram:Dt,setBlending:ut,setMaterial:B,setFlipSided:Le,setCullFace:Ne,setLineWidth:mt,setPolygonOffset:Ie,setScissorTest:at,activeTexture:Wt,bindTexture:qt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:ie,texImage2D:Ze,texImage3D:Re,updateUBOMapping:He,uniformBlockBinding:Pe,texStorage2D:Ce,texStorage3D:Ye,texSubImage2D:ge,texSubImage3D:Ee,compressedTexSubImage2D:he,compressedTexSubImage3D:Ke,scissor:De,viewport:Qe,reset:ot}}function KA(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,y=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(O,E){return M?new OffscreenCanvas(O,E):Fc("canvas")}function C(O,E,ie){let ge=1;const Ee=qt(O);if((Ee.width>ie||Ee.height>ie)&&(ge=ie/Math.max(Ee.width,Ee.height)),ge<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(ge*Ee.width),Ke=Math.floor(ge*Ee.height);x===void 0&&(x=R(he,Ke));const Ce=E?R(he,Ke):x;return Ce.width=he,Ce.height=Ke,Ce.getContext("2d").drawImage(O,0,0,he,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+he+"x"+Ke+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),O;return O}function b(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function k(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(O,E,ie,ge,Ee=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=E;if(E===o.RED&&(ie===o.FLOAT&&(he=o.R32F),ie===o.HALF_FLOAT&&(he=o.R16F),ie===o.UNSIGNED_BYTE&&(he=o.R8)),E===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(he=o.R8UI),ie===o.UNSIGNED_SHORT&&(he=o.R16UI),ie===o.UNSIGNED_INT&&(he=o.R32UI),ie===o.BYTE&&(he=o.R8I),ie===o.SHORT&&(he=o.R16I),ie===o.INT&&(he=o.R32I)),E===o.RG&&(ie===o.FLOAT&&(he=o.RG32F),ie===o.HALF_FLOAT&&(he=o.RG16F),ie===o.UNSIGNED_BYTE&&(he=o.RG8)),E===o.RG_INTEGER&&(ie===o.UNSIGNED_BYTE&&(he=o.RG8UI),ie===o.UNSIGNED_SHORT&&(he=o.RG16UI),ie===o.UNSIGNED_INT&&(he=o.RG32UI),ie===o.BYTE&&(he=o.RG8I),ie===o.SHORT&&(he=o.RG16I),ie===o.INT&&(he=o.RG32I)),E===o.RGB_INTEGER&&(ie===o.UNSIGNED_BYTE&&(he=o.RGB8UI),ie===o.UNSIGNED_SHORT&&(he=o.RGB16UI),ie===o.UNSIGNED_INT&&(he=o.RGB32UI),ie===o.BYTE&&(he=o.RGB8I),ie===o.SHORT&&(he=o.RGB16I),ie===o.INT&&(he=o.RGB32I)),E===o.RGBA_INTEGER&&(ie===o.UNSIGNED_BYTE&&(he=o.RGBA8UI),ie===o.UNSIGNED_SHORT&&(he=o.RGBA16UI),ie===o.UNSIGNED_INT&&(he=o.RGBA32UI),ie===o.BYTE&&(he=o.RGBA8I),ie===o.SHORT&&(he=o.RGBA16I),ie===o.INT&&(he=o.RGBA32I)),E===o.RGB&&ie===o.UNSIGNED_INT_5_9_9_9_REV&&(he=o.RGB9_E5),E===o.RGBA){const Ke=Ee?zc:wt.getTransfer(ge);ie===o.FLOAT&&(he=o.RGBA32F),ie===o.HALF_FLOAT&&(he=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(he=Ke===kt?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT_4_4_4_4&&(he=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(he=o.RGB5_A1)}return(he===o.R16F||he===o.R32F||he===o.RG16F||he===o.RG32F||he===o.RGBA16F||he===o.RGBA32F)&&t.get("EXT_color_buffer_float"),he}function L(O,E){let ie;return O?E===null||E===br||E===Io?ie=o.DEPTH24_STENCIL8:E===ia?ie=o.DEPTH32F_STENCIL8:E===Fo&&(ie=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===br||E===Io?ie=o.DEPTH_COMPONENT24:E===ia?ie=o.DEPTH_COMPONENT32F:E===Fo&&(ie=o.DEPTH_COMPONENT16),ie}function j(O,E){return b(O)===!0||O.isFramebufferTexture&&O.minFilter!==_i&&O.minFilter!==Ri?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function G(O){const E=O.target;E.removeEventListener("dispose",G),J(E),E.isVideoTexture&&y.delete(E)}function I(O){const E=O.target;E.removeEventListener("dispose",I),D(E)}function J(O){const E=r.get(O);if(E.__webglInit===void 0)return;const ie=O.source,ge=S.get(ie);if(ge){const Ee=ge[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&A(O),Object.keys(ge).length===0&&S.delete(ie)}r.remove(O)}function A(O){const E=r.get(O);o.deleteTexture(E.__webglTexture);const ie=O.source,ge=S.get(ie);delete ge[E.__cacheKey],d.memory.textures--}function D(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(E.__webglFramebuffer[ge]))for(let Ee=0;Ee<E.__webglFramebuffer[ge].length;Ee++)o.deleteFramebuffer(E.__webglFramebuffer[ge][Ee]);else o.deleteFramebuffer(E.__webglFramebuffer[ge]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ge])}else{if(Array.isArray(E.__webglFramebuffer))for(let ge=0;ge<E.__webglFramebuffer.length;ge++)o.deleteFramebuffer(E.__webglFramebuffer[ge]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ge=0;ge<E.__webglColorRenderbuffer.length;ge++)E.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ge]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ie=O.textures;for(let ge=0,Ee=ie.length;ge<Ee;ge++){const he=r.get(ie[ge]);he.__webglTexture&&(o.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove(ie[ge])}r.remove(O)}let F=0;function fe(){F=0}function ce(){const O=F;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),F+=1,O}function ue(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function me(O,E){const ie=r.get(O);if(O.isVideoTexture&&at(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ie.__version!==O.version){const ge=O.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(ie,O,E);return}}else O.isExternalTexture&&(ie.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+E)}function U(O,E){const ie=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){xe(ie,O,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+E)}function W(O,E){const ie=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){xe(ie,O,E);return}i.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+E)}function q(O,E){const ie=r.get(O);if(O.version>0&&ie.__version!==O.version){_e(ie,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+E)}const oe={[qd]:o.REPEAT,[Sr]:o.CLAMP_TO_EDGE,[Yd]:o.MIRRORED_REPEAT},de={[_i]:o.NEAREST,[uS]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[ad]:o.LINEAR_MIPMAP_NEAREST,[Mr]:o.LINEAR_MIPMAP_LINEAR},N={[mS]:o.NEVER,[SS]:o.ALWAYS,[gS]:o.LESS,[Y_]:o.LEQUAL,[vS]:o.EQUAL,[yS]:o.GEQUAL,[_S]:o.GREATER,[xS]:o.NOTEQUAL};function ee(O,E){if(E.type===ia&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ri||E.magFilter===ad||E.magFilter===ac||E.magFilter===Mr||E.minFilter===Ri||E.minFilter===ad||E.minFilter===ac||E.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,oe[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,oe[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,oe[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,de[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,de[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_i||E.minFilter!==ac&&E.minFilter!==Mr||E.type===ia&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ie=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function be(O,E){let ie=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",G));const ge=E.source;let Ee=S.get(ge);Ee===void 0&&(Ee={},S.set(ge,Ee));const he=ue(E);if(he!==O.__cacheKey){Ee[he]===void 0&&(Ee[he]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),Ee[he].usedTimes++;const Ke=Ee[O.__cacheKey];Ke!==void 0&&(Ee[O.__cacheKey].usedTimes--,Ke.usedTimes===0&&A(E)),O.__cacheKey=he,O.__webglTexture=Ee[he].texture}return ie}function Ae(O,E,ie){return Math.floor(Math.floor(O/ie)/E)}function Q(O,E,ie,ge){const he=O.updateRanges;if(he.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,ie,ge,E.data);else{he.sort((Re,De)=>Re.start-De.start);let Ke=0;for(let Re=1;Re<he.length;Re++){const De=he[Ke],Qe=he[Re],He=De.start+De.count,Pe=Ae(Qe.start,E.width,4),ot=Ae(De.start,E.width,4);Qe.start<=He+1&&Pe===ot&&Ae(Qe.start+Qe.count-1,E.width,4)===Pe?De.count=Math.max(De.count,Qe.start+Qe.count-De.start):(++Ke,he[Ke]=Qe)}he.length=Ke+1;const Ce=o.getParameter(o.UNPACK_ROW_LENGTH),Ye=o.getParameter(o.UNPACK_SKIP_PIXELS),Ze=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Re=0,De=he.length;Re<De;Re++){const Qe=he[Re],He=Math.floor(Qe.start/4),Pe=Math.ceil(Qe.count/4),ot=He%E.width,X=Math.floor(He/E.width),we=Pe,Ue=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ot),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ot,X,we,Ue,ie,ge,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ce),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ye),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ze)}}function xe(O,E,ie){let ge=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=o.TEXTURE_3D);const Ee=be(O,E),he=E.source;i.bindTexture(ge,O.__webglTexture,o.TEXTURE0+ie);const Ke=r.get(he);if(he.version!==Ke.__version||Ee===!0){i.activeTexture(o.TEXTURE0+ie);const Ce=wt.getPrimaries(wt.workingColorSpace),Ye=E.colorSpace===Ha?null:wt.getPrimaries(E.colorSpace),Ze=E.colorSpace===Ha||Ce===Ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Re=C(E.image,!1,l.maxTextureSize);Re=Wt(E,Re);const De=u.convert(E.format,E.colorSpace),Qe=u.convert(E.type);let He=P(E.internalFormat,De,Qe,E.colorSpace,E.isVideoTexture);ee(ge,E);let Pe;const ot=E.mipmaps,X=E.isVideoTexture!==!0,we=Ke.__version===void 0||Ee===!0,Ue=he.dataReady,Ge=j(E,Re);if(E.isDepthTexture)He=L(E.format===ko,E.type),we&&(X?i.texStorage2D(o.TEXTURE_2D,1,He,Re.width,Re.height):i.texImage2D(o.TEXTURE_2D,0,He,Re.width,Re.height,0,De,Qe,null));else if(E.isDataTexture)if(ot.length>0){X&&we&&i.texStorage2D(o.TEXTURE_2D,Ge,He,ot[0].width,ot[0].height);for(let Te=0,Se=ot.length;Te<Se;Te++)Pe=ot[Te],X?Ue&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,De,Qe,Pe.data):i.texImage2D(o.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,De,Qe,Pe.data);E.generateMipmaps=!1}else X?(we&&i.texStorage2D(o.TEXTURE_2D,Ge,He,Re.width,Re.height),Ue&&Q(E,Re,De,Qe)):i.texImage2D(o.TEXTURE_2D,0,He,Re.width,Re.height,0,De,Qe,Re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ge,He,ot[0].width,ot[0].height,Re.depth);for(let Te=0,Se=ot.length;Te<Se;Te++)if(Pe=ot[Te],E.format!==vi)if(De!==null)if(X){if(Ue)if(E.layerUpdates.size>0){const Ve=a_(Pe.width,Pe.height,E.format,E.type);for(const rt of E.layerUpdates){const Pt=Pe.data.subarray(rt*Ve/Pe.data.BYTES_PER_ELEMENT,(rt+1)*Ve/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,rt,Pe.width,Pe.height,1,De,Pt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Re.depth,De,Pe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Re.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ue&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Pe.width,Pe.height,Re.depth,De,Qe,Pe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Te,He,Pe.width,Pe.height,Re.depth,0,De,Qe,Pe.data)}else{X&&we&&i.texStorage2D(o.TEXTURE_2D,Ge,He,ot[0].width,ot[0].height);for(let Te=0,Se=ot.length;Te<Se;Te++)Pe=ot[Te],E.format!==vi?De!==null?X?Ue&&i.compressedTexSubImage2D(o.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,De,Pe.data):i.compressedTexImage2D(o.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ue&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Pe.width,Pe.height,De,Qe,Pe.data):i.texImage2D(o.TEXTURE_2D,Te,He,Pe.width,Pe.height,0,De,Qe,Pe.data)}else if(E.isDataArrayTexture)if(X){if(we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ge,He,Re.width,Re.height,Re.depth),Ue)if(E.layerUpdates.size>0){const Te=a_(Re.width,Re.height,E.format,E.type);for(const Se of E.layerUpdates){const Ve=Re.data.subarray(Se*Te/Re.data.BYTES_PER_ELEMENT,(Se+1)*Te/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Se,Re.width,Re.height,1,De,Qe,Ve)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,De,Qe,Re.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,He,Re.width,Re.height,Re.depth,0,De,Qe,Re.data);else if(E.isData3DTexture)X?(we&&i.texStorage3D(o.TEXTURE_3D,Ge,He,Re.width,Re.height,Re.depth),Ue&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,De,Qe,Re.data)):i.texImage3D(o.TEXTURE_3D,0,He,Re.width,Re.height,Re.depth,0,De,Qe,Re.data);else if(E.isFramebufferTexture){if(we)if(X)i.texStorage2D(o.TEXTURE_2D,Ge,He,Re.width,Re.height);else{let Te=Re.width,Se=Re.height;for(let Ve=0;Ve<Ge;Ve++)i.texImage2D(o.TEXTURE_2D,Ve,He,Te,Se,0,De,Qe,null),Te>>=1,Se>>=1}}else if(ot.length>0){if(X&&we){const Te=qt(ot[0]);i.texStorage2D(o.TEXTURE_2D,Ge,He,Te.width,Te.height)}for(let Te=0,Se=ot.length;Te<Se;Te++)Pe=ot[Te],X?Ue&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,De,Qe,Pe):i.texImage2D(o.TEXTURE_2D,Te,He,De,Qe,Pe);E.generateMipmaps=!1}else if(X){if(we){const Te=qt(Re);i.texStorage2D(o.TEXTURE_2D,Ge,He,Te.width,Te.height)}Ue&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,De,Qe,Re)}else i.texImage2D(o.TEXTURE_2D,0,He,De,Qe,Re);b(E)&&_(ge),Ke.__version=he.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function _e(O,E,ie){if(E.image.length!==6)return;const ge=be(O,E),Ee=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+ie);const he=r.get(Ee);if(Ee.version!==he.__version||ge===!0){i.activeTexture(o.TEXTURE0+ie);const Ke=wt.getPrimaries(wt.workingColorSpace),Ce=E.colorSpace===Ha?null:wt.getPrimaries(E.colorSpace),Ye=E.colorSpace===Ha||Ke===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const Ze=E.isCompressedTexture||E.image[0].isCompressedTexture,Re=E.image[0]&&E.image[0].isDataTexture,De=[];for(let Se=0;Se<6;Se++)!Ze&&!Re?De[Se]=C(E.image[Se],!0,l.maxCubemapSize):De[Se]=Re?E.image[Se].image:E.image[Se],De[Se]=Wt(E,De[Se]);const Qe=De[0],He=u.convert(E.format,E.colorSpace),Pe=u.convert(E.type),ot=P(E.internalFormat,He,Pe,E.colorSpace),X=E.isVideoTexture!==!0,we=he.__version===void 0||ge===!0,Ue=Ee.dataReady;let Ge=j(E,Qe);ee(o.TEXTURE_CUBE_MAP,E);let Te;if(Ze){X&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ge,ot,Qe.width,Qe.height);for(let Se=0;Se<6;Se++){Te=De[Se].mipmaps;for(let Ve=0;Ve<Te.length;Ve++){const rt=Te[Ve];E.format!==vi?He!==null?X?Ue&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,0,0,rt.width,rt.height,He,rt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,ot,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,0,0,rt.width,rt.height,He,Pe,rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,ot,rt.width,rt.height,0,He,Pe,rt.data)}}}else{if(Te=E.mipmaps,X&&we){Te.length>0&&Ge++;const Se=qt(De[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ge,ot,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Re){X?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,De[Se].width,De[Se].height,He,Pe,De[Se].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ot,De[Se].width,De[Se].height,0,He,Pe,De[Se].data);for(let Ve=0;Ve<Te.length;Ve++){const Pt=Te[Ve].image[Se].image;X?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,0,0,Pt.width,Pt.height,He,Pe,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,ot,Pt.width,Pt.height,0,He,Pe,Pt.data)}}else{X?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,He,Pe,De[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ot,He,Pe,De[Se]);for(let Ve=0;Ve<Te.length;Ve++){const rt=Te[Ve];X?Ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,0,0,He,Pe,rt.image[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,ot,He,Pe,rt.image[Se])}}}b(E)&&_(o.TEXTURE_CUBE_MAP),he.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function ke(O,E,ie,ge,Ee,he){const Ke=u.convert(ie.format,ie.colorSpace),Ce=u.convert(ie.type),Ye=P(ie.internalFormat,Ke,Ce,ie.colorSpace),Ze=r.get(E),Re=r.get(ie);if(Re.__renderTarget=E,!Ze.__hasExternalTextures){const De=Math.max(1,E.width>>he),Qe=Math.max(1,E.height>>he);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?i.texImage3D(Ee,he,Ye,De,Qe,E.depth,0,Ke,Ce,null):i.texImage2D(Ee,he,Ye,De,Qe,0,Ke,Ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Ie(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,Ee,Re.__webglTexture,0,mt(E)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ge,Ee,Re.__webglTexture,he),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Oe(O,E,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const ge=E.depthTexture,Ee=ge&&ge.isDepthTexture?ge.type:null,he=L(E.stencilBuffer,Ee),Ke=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=mt(E);Ie(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ce,he,E.width,E.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ce,he,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,he,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ke,o.RENDERBUFFER,O)}else{const ge=E.textures;for(let Ee=0;Ee<ge.length;Ee++){const he=ge[Ee],Ke=u.convert(he.format,he.colorSpace),Ce=u.convert(he.type),Ye=P(he.internalFormat,Ke,Ce,he.colorSpace),Ze=mt(E);ie&&Ie(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ze,Ye,E.width,E.height):Ie(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ze,Ye,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ye,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Je(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),me(E.depthTexture,0);const Ee=ge.__webglTexture,he=mt(E);if(E.depthTexture.format===Ho)Ie(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0);else if(E.depthTexture.format===ko)Ie(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Dt(O){const E=r.get(O),ie=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ge=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",Ee)};ge.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=ge}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const ge=O.texture.mipmaps;ge&&ge.length>0?Je(E.__webglFramebuffer[0],O):Je(E.__webglFramebuffer,O)}else if(ie){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=o.createRenderbuffer(),Oe(E.__webglDepthbuffer[ge],O,!1);else{const Ee=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[ge];o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,he)}}else{const ge=O.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Oe(E.__webglDepthbuffer,O,!1);else{const Ee=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,he)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function lt(O,E,ie){const ge=r.get(O);E!==void 0&&ke(ge.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&Dt(O)}function H(O){const E=O.texture,ie=r.get(O),ge=r.get(E);O.addEventListener("dispose",I);const Ee=O.textures,he=O.isWebGLCubeRenderTarget===!0,Ke=Ee.length>1;if(Ke||(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=E.version,d.memory.textures++),he){ie.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){ie.__webglFramebuffer[Ce]=[];for(let Ye=0;Ye<E.mipmaps.length;Ye++)ie.__webglFramebuffer[Ce][Ye]=o.createFramebuffer()}else ie.__webglFramebuffer[Ce]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)ie.__webglFramebuffer[Ce]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(Ke)for(let Ce=0,Ye=Ee.length;Ce<Ye;Ce++){const Ze=r.get(Ee[Ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&Ie(O)===!1){ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ce=0;Ce<Ee.length;Ce++){const Ye=Ee[Ce];ie.__webglColorRenderbuffer[Ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce]);const Ze=u.convert(Ye.format,Ye.colorSpace),Re=u.convert(Ye.type),De=P(Ye.internalFormat,Ze,Re,Ye.colorSpace,O.isXRRenderTarget===!0),Qe=mt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qe,De,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),Oe(ie.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(he){i.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),ee(o.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)ke(ie.__webglFramebuffer[Ce][Ye],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ye);else ke(ie.__webglFramebuffer[Ce],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);b(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let Ce=0,Ye=Ee.length;Ce<Ye;Ce++){const Ze=Ee[Ce],Re=r.get(Ze);let De=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,Re.__webglTexture),ee(De,Ze),ke(ie.__webglFramebuffer,O,Ze,o.COLOR_ATTACHMENT0+Ce,De,0),b(Ze)&&_(De)}i.unbindTexture()}else{let Ce=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,ge.__webglTexture),ee(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)ke(ie.__webglFramebuffer[Ye],O,E,o.COLOR_ATTACHMENT0,Ce,Ye);else ke(ie.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,Ce,0);b(E)&&_(Ce),i.unbindTexture()}O.depthBuffer&&Dt(O)}function ut(O){const E=O.textures;for(let ie=0,ge=E.length;ie<ge;ie++){const Ee=E[ie];if(b(Ee)){const he=k(O),Ke=r.get(Ee).__webglTexture;i.bindTexture(he,Ke),_(he),i.unbindTexture()}}}const B=[],Le=[];function Ne(O){if(O.samples>0){if(Ie(O)===!1){const E=O.textures,ie=O.width,ge=O.height;let Ee=o.COLOR_BUFFER_BIT;const he=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ke=r.get(O),Ce=E.length>1;if(Ce)for(let Ze=0;Ze<E.length;Ze++)i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ze,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ze,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Ye=O.texture.mipmaps;Ye&&Ye.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ze=0;Ze<E.length;Ze++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),Ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const Re=r.get(E[Ze]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Re,0)}o.blitFramebuffer(0,0,ie,ge,0,0,ie,ge,Ee,o.NEAREST),m===!0&&(B.length=0,Le.length=0,B.push(o.COLOR_ATTACHMENT0+Ze),O.depthBuffer&&O.resolveDepthBuffer===!1&&(B.push(he),Le.push(he),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Le)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,B))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ce)for(let Ze=0;Ze<E.length;Ze++){i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ze,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ze]);const Re=r.get(E[Ze]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ze,o.TEXTURE_2D,Re,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function mt(O){return Math.min(l.maxSamples,O.samples)}function Ie(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function at(O){const E=d.render.frame;y.get(O)!==E&&(y.set(O,E),O.update())}function Wt(O,E){const ie=O.colorSpace,ge=O.format,Ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ie!==Cs&&ie!==Ha&&(wt.getTransfer(ie)===kt?(ge!==vi||Ee!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),E}function qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=fe,this.setTexture2D=me,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=lt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Ie}function QA(o,t){function i(r,l=Ha){let u;const d=wt.getTransfer(l);if(r===Di)return o.UNSIGNED_BYTE;if(r===Rh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===wh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===G_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===H_)return o.BYTE;if(r===k_)return o.SHORT;if(r===Fo)return o.UNSIGNED_SHORT;if(r===Ah)return o.INT;if(r===br)return o.UNSIGNED_INT;if(r===ia)return o.FLOAT;if(r===Vo)return o.HALF_FLOAT;if(r===V_)return o.ALPHA;if(r===j_)return o.RGB;if(r===vi)return o.RGBA;if(r===Ho)return o.DEPTH_COMPONENT;if(r===ko)return o.DEPTH_STENCIL;if(r===X_)return o.RED;if(r===Ch)return o.RED_INTEGER;if(r===W_)return o.RG;if(r===Dh)return o.RG_INTEGER;if(r===Uh)return o.RGBA_INTEGER;if(r===Cc||r===Dc||r===Uc||r===Lc)if(d===kt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Cc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Cc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zd||r===Kd||r===Qd||r===Jd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Zd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$d||r===eh||r===th)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===$d||r===eh)return d===kt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===th)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===nh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ih)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ah)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===oh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ch)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ph)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mh)return d===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nc||r===gh||r===vh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Nc)return d===kt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===q_||r===_h||r===xh||r===yh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Nc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===_h)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Io?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class m0 extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const JA=`
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

}`;class e1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new m0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Xa({vertexShader:JA,fragmentShader:$A,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new aa(new Vc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t1 extends Us{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,y=null,x=null,S=null,M=null,R=null;const C=new e1,b={},_=i.getContextAttributes();let k=null,P=null;const L=[],j=[],G=new Lt;let I=null;const J=new Jn;J.viewport=new Gt;const A=new Jn;A.viewport=new Gt;const D=[J,A],F=new MM;let fe=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let xe=L[Q];return xe===void 0&&(xe=new Td,L[Q]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(Q){let xe=L[Q];return xe===void 0&&(xe=new Td,L[Q]=xe),xe.getGripSpace()},this.getHand=function(Q){let xe=L[Q];return xe===void 0&&(xe=new Td,L[Q]=xe),xe.getHandSpace()};function ue(Q){const xe=j.indexOf(Q.inputSource);if(xe===-1)return;const _e=L[xe];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,p||d),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function me(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",me),l.removeEventListener("inputsourceschange",U);for(let Q=0;Q<L.length;Q++){const xe=j[Q];xe!==null&&(j[Q]=null,L[Q].disconnect(xe))}fe=null,ce=null,C.reset();for(const Q in b)delete b[Q];t.setRenderTarget(k),M=null,S=null,x=null,l=null,P=null,Ae.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(k=t.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",me),l.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&(x=new XRWebGLBinding(l,i)),x!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ke=null,Oe=null;_.depth&&(Oe=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_e=_.stencil?ko:Ho,ke=_.stencil?Io:br);const Je={colorFormat:i.RGBA8,depthFormat:Oe,scaleFactor:u};S=x.createProjectionLayer(Je),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),P=new Er(S.textureWidth,S.textureHeight,{format:vi,type:Di,depthTexture:new o0(S.textureWidth,S.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const _e={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,_e),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Er(M.framebufferWidth,M.framebufferHeight,{format:vi,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ae.setContext(l),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function U(Q){for(let xe=0;xe<Q.removed.length;xe++){const _e=Q.removed[xe],ke=j.indexOf(_e);ke>=0&&(j[ke]=null,L[ke].disconnect(_e))}for(let xe=0;xe<Q.added.length;xe++){const _e=Q.added[xe];let ke=j.indexOf(_e);if(ke===-1){for(let Je=0;Je<L.length;Je++)if(Je>=j.length){j.push(_e),ke=Je;break}else if(j[Je]===null){j[Je]=_e,ke=Je;break}if(ke===-1)break}const Oe=L[ke];Oe&&Oe.connect(_e)}}const W=new $,q=new $;function oe(Q,xe,_e){W.setFromMatrixPosition(xe.matrixWorld),q.setFromMatrixPosition(_e.matrixWorld);const ke=W.distanceTo(q),Oe=xe.projectionMatrix.elements,Je=_e.projectionMatrix.elements,Dt=Oe[14]/(Oe[10]-1),lt=Oe[14]/(Oe[10]+1),H=(Oe[9]+1)/Oe[5],ut=(Oe[9]-1)/Oe[5],B=(Oe[8]-1)/Oe[0],Le=(Je[8]+1)/Je[0],Ne=Dt*B,mt=Dt*Le,Ie=ke/(-B+Le),at=Ie*-B;if(xe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(at),Q.translateZ(Ie),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Oe[10]===-1)Q.projectionMatrix.copy(xe.projectionMatrix),Q.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Wt=Dt+Ie,qt=lt+Ie,O=Ne-at,E=mt+(ke-at),ie=H*lt/qt*Wt,ge=ut*lt/qt*Wt;Q.projectionMatrix.makePerspective(O,E,ie,ge,Wt,qt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function de(Q,xe){xe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(xe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let xe=Q.near,_e=Q.far;C.texture!==null&&(C.depthNear>0&&(xe=C.depthNear),C.depthFar>0&&(_e=C.depthFar)),F.near=A.near=J.near=xe,F.far=A.far=J.far=_e,(fe!==F.near||ce!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),fe=F.near,ce=F.far),F.layers.mask=Q.layers.mask|6,J.layers.mask=F.layers.mask&3,A.layers.mask=F.layers.mask&5;const ke=Q.parent,Oe=F.cameras;de(F,ke);for(let Je=0;Je<Oe.length;Je++)de(Oe[Je],ke);Oe.length===2?oe(F,J,A):F.projectionMatrix.copy(J.projectionMatrix),N(Q,F,ke)};function N(Q,xe,_e){_e===null?Q.matrix.copy(xe.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(xe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(xe.projectionMatrix),Q.projectionMatrixInverse.copy(xe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Go*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Q){m=Q,S!==null&&(S.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(F)},this.getCameraTexture=function(Q){return b[Q]};let ee=null;function be(Q,xe){if(y=xe.getViewerPose(p||d),R=xe,y!==null){const _e=y.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let ke=!1;_e.length!==F.cameras.length&&(F.cameras.length=0,ke=!0);for(let lt=0;lt<_e.length;lt++){const H=_e[lt];let ut=null;if(M!==null)ut=M.getViewport(H);else{const Le=x.getViewSubImage(S,H);ut=Le.viewport,lt===0&&(t.setRenderTargetTextures(P,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(P))}let B=D[lt];B===void 0&&(B=new Jn,B.layers.enable(lt),B.viewport=new Gt,D[lt]=B),B.matrix.fromArray(H.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(H.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(ut.x,ut.y,ut.width,ut.height),lt===0&&(F.matrix.copy(B.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ke===!0&&F.cameras.push(B)}const Oe=l.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const lt=x.getDepthInformation(_e[0]);lt&&lt.isValid&&lt.texture&&C.init(lt,l.renderState)}if(Oe&&Oe.includes("camera-access")&&(t.state.unbindTexture(),x))for(let lt=0;lt<_e.length;lt++){const H=_e[lt].camera;if(H){let ut=b[H];ut||(ut=new m0,b[H]=ut);const B=x.getCameraImage(H);ut.sourceTexture=B}}}for(let _e=0;_e<L.length;_e++){const ke=j[_e],Oe=L[_e];ke!==null&&Oe!==void 0&&Oe.update(ke,xe,p||d)}ee&&ee(Q,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),R=null}const Ae=new u0;Ae.setAnimationLoop(be),this.setAnimationLoop=function(Q){ee=Q},this.dispose=function(){}}}const gr=new sa,n1=new Jt;function i1(o,t){function i(b,_){b.matrixAutoUpdate===!0&&b.updateMatrix(),_.value.copy(b.matrix)}function r(b,_){_.color.getRGB(b.fogColor.value,i0(o)),_.isFog?(b.fogNear.value=_.near,b.fogFar.value=_.far):_.isFogExp2&&(b.fogDensity.value=_.density)}function l(b,_,k,P,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(b,_):_.isMeshToonMaterial?(u(b,_),x(b,_)):_.isMeshPhongMaterial?(u(b,_),y(b,_)):_.isMeshStandardMaterial?(u(b,_),S(b,_),_.isMeshPhysicalMaterial&&M(b,_,L)):_.isMeshMatcapMaterial?(u(b,_),R(b,_)):_.isMeshDepthMaterial?u(b,_):_.isMeshDistanceMaterial?(u(b,_),C(b,_)):_.isMeshNormalMaterial?u(b,_):_.isLineBasicMaterial?(d(b,_),_.isLineDashedMaterial&&h(b,_)):_.isPointsMaterial?m(b,_,k,P):_.isSpriteMaterial?p(b,_):_.isShadowMaterial?(b.color.value.copy(_.color),b.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(b,_){b.opacity.value=_.opacity,_.color&&b.diffuse.value.copy(_.color),_.emissive&&b.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.bumpMap&&(b.bumpMap.value=_.bumpMap,i(_.bumpMap,b.bumpMapTransform),b.bumpScale.value=_.bumpScale,_.side===Hn&&(b.bumpScale.value*=-1)),_.normalMap&&(b.normalMap.value=_.normalMap,i(_.normalMap,b.normalMapTransform),b.normalScale.value.copy(_.normalScale),_.side===Hn&&b.normalScale.value.negate()),_.displacementMap&&(b.displacementMap.value=_.displacementMap,i(_.displacementMap,b.displacementMapTransform),b.displacementScale.value=_.displacementScale,b.displacementBias.value=_.displacementBias),_.emissiveMap&&(b.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,b.emissiveMapTransform)),_.specularMap&&(b.specularMap.value=_.specularMap,i(_.specularMap,b.specularMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest);const k=t.get(_),P=k.envMap,L=k.envMapRotation;P&&(b.envMap.value=P,gr.copy(L),gr.x*=-1,gr.y*=-1,gr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),b.envMapRotation.value.setFromMatrix4(n1.makeRotationFromEuler(gr)),b.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=_.reflectivity,b.ior.value=_.ior,b.refractionRatio.value=_.refractionRatio),_.lightMap&&(b.lightMap.value=_.lightMap,b.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,b.lightMapTransform)),_.aoMap&&(b.aoMap.value=_.aoMap,b.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,b.aoMapTransform))}function d(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform))}function h(b,_){b.dashSize.value=_.dashSize,b.totalSize.value=_.dashSize+_.gapSize,b.scale.value=_.scale}function m(b,_,k,P){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.size.value=_.size*k,b.scale.value=P*.5,_.map&&(b.map.value=_.map,i(_.map,b.uvTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function p(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.rotation.value=_.rotation,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function y(b,_){b.specular.value.copy(_.specular),b.shininess.value=Math.max(_.shininess,1e-4)}function x(b,_){_.gradientMap&&(b.gradientMap.value=_.gradientMap)}function S(b,_){b.metalness.value=_.metalness,_.metalnessMap&&(b.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,b.metalnessMapTransform)),b.roughness.value=_.roughness,_.roughnessMap&&(b.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,b.roughnessMapTransform)),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)}function M(b,_,k){b.ior.value=_.ior,_.sheen>0&&(b.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),b.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(b.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,b.sheenColorMapTransform)),_.sheenRoughnessMap&&(b.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,b.sheenRoughnessMapTransform))),_.clearcoat>0&&(b.clearcoat.value=_.clearcoat,b.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(b.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,b.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(b.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&b.clearcoatNormalScale.value.negate())),_.dispersion>0&&(b.dispersion.value=_.dispersion),_.iridescence>0&&(b.iridescence.value=_.iridescence,b.iridescenceIOR.value=_.iridescenceIOR,b.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(b.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,b.iridescenceMapTransform)),_.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),_.transmission>0&&(b.transmission.value=_.transmission,b.transmissionSamplerMap.value=k.texture,b.transmissionSamplerSize.value.set(k.width,k.height),_.transmissionMap&&(b.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,b.transmissionMapTransform)),b.thickness.value=_.thickness,_.thicknessMap&&(b.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=_.attenuationDistance,b.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(b.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(b.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=_.specularIntensity,b.specularColor.value.copy(_.specularColor),_.specularColorMap&&(b.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,b.specularColorMapTransform)),_.specularIntensityMap&&(b.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,b.specularIntensityMapTransform))}function R(b,_){_.matcap&&(b.matcap.value=_.matcap)}function C(b,_){const k=t.get(_).light;b.referencePosition.value.setFromMatrixPosition(k.matrixWorld),b.nearDistance.value=k.shadow.camera.near,b.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function a1(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(k,P){const L=P.program;r.uniformBlockBinding(k,L)}function p(k,P){let L=l[k.id];L===void 0&&(R(k),L=y(k),l[k.id]=L,k.addEventListener("dispose",b));const j=P.program;r.updateUBOMapping(k,j);const G=t.render.frame;u[k.id]!==G&&(S(k),u[k.id]=G)}function y(k){const P=x();k.__bindingPointIndex=P;const L=o.createBuffer(),j=k.__size,G=k.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,j,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,L),L}function x(){for(let k=0;k<h;k++)if(d.indexOf(k)===-1)return d.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(k){const P=l[k.id],L=k.uniforms,j=k.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let G=0,I=L.length;G<I;G++){const J=Array.isArray(L[G])?L[G]:[L[G]];for(let A=0,D=J.length;A<D;A++){const F=J[A];if(M(F,G,A,j)===!0){const fe=F.__offset,ce=Array.isArray(F.value)?F.value:[F.value];let ue=0;for(let me=0;me<ce.length;me++){const U=ce[me],W=C(U);typeof U=="number"||typeof U=="boolean"?(F.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,fe+ue,F.__data)):U.isMatrix3?(F.__data[0]=U.elements[0],F.__data[1]=U.elements[1],F.__data[2]=U.elements[2],F.__data[3]=0,F.__data[4]=U.elements[3],F.__data[5]=U.elements[4],F.__data[6]=U.elements[5],F.__data[7]=0,F.__data[8]=U.elements[6],F.__data[9]=U.elements[7],F.__data[10]=U.elements[8],F.__data[11]=0):(U.toArray(F.__data,ue),ue+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,fe,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(k,P,L,j){const G=k.value,I=P+"_"+L;if(j[I]===void 0)return typeof G=="number"||typeof G=="boolean"?j[I]=G:j[I]=G.clone(),!0;{const J=j[I];if(typeof G=="number"||typeof G=="boolean"){if(J!==G)return j[I]=G,!0}else if(J.equals(G)===!1)return J.copy(G),!0}return!1}function R(k){const P=k.uniforms;let L=0;const j=16;for(let I=0,J=P.length;I<J;I++){const A=Array.isArray(P[I])?P[I]:[P[I]];for(let D=0,F=A.length;D<F;D++){const fe=A[D],ce=Array.isArray(fe.value)?fe.value:[fe.value];for(let ue=0,me=ce.length;ue<me;ue++){const U=ce[ue],W=C(U),q=L%j,oe=q%W.boundary,de=q+oe;L+=oe,de!==0&&j-de<W.storage&&(L+=j-de),fe.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=L,L+=W.storage}}}const G=L%j;return G>0&&(L+=j-G),k.__size=L,k.__cache={},this}function C(k){const P={boundary:0,storage:0};return typeof k=="number"||typeof k=="boolean"?(P.boundary=4,P.storage=4):k.isVector2?(P.boundary=8,P.storage=8):k.isVector3||k.isColor?(P.boundary=16,P.storage=12):k.isVector4?(P.boundary=16,P.storage=16):k.isMatrix3?(P.boundary=48,P.storage=48):k.isMatrix4?(P.boundary=64,P.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),P}function b(k){const P=k.target;P.removeEventListener("dispose",b);const L=d.indexOf(P.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function _(){for(const k in l)o.deleteBuffer(l[k]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class r1{constructor(t={}){const{canvas:i=FS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const R=new Uint32Array(4),C=new Int32Array(4);let b=null,_=null;const k=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let j=!1;this._outputColorSpace=ci;let G=0,I=0,J=null,A=-1,D=null;const F=new Gt,fe=new Gt;let ce=null;const ue=new Ct(0);let me=0,U=i.width,W=i.height,q=1,oe=null,de=null;const N=new Gt(0,0,U,W),ee=new Gt(0,0,U,W);let be=!1;const Ae=new Ph;let Q=!1,xe=!1;const _e=new Jt,ke=new $,Oe=new Gt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function lt(){return J===null?q:1}let H=r;function ut(w,Y){return i.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Th}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",Ge,!1),i.addEventListener("webglcontextcreationerror",Te,!1),H===null){const Y="webgl2";if(H=ut(Y,w),H===null)throw ut(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let B,Le,Ne,mt,Ie,at,Wt,qt,O,E,ie,ge,Ee,he,Ke,Ce,Ye,Ze,Re,De,Qe,He,Pe,ot;function X(){B=new mT(H),B.init(),He=new QA(H,B),Le=new lT(H,B,t,He),Ne=new ZA(H,B),Le.reversedDepthBuffer&&S&&Ne.buffers.depth.setReversed(!0),mt=new _T(H),Ie=new zA,at=new KA(H,B,Ne,Ie,Le,He,mt),Wt=new uT(L),qt=new pT(L),O=new EM(H),Pe=new sT(H,O),E=new gT(H,O,mt,Pe),ie=new yT(H,E,O,mt),Re=new xT(H,Le,at),Ce=new cT(Ie),ge=new PA(L,Wt,qt,B,Le,Pe,Ce),Ee=new i1(L,Ie),he=new FA,Ke=new jA(B),Ze=new rT(L,Wt,qt,Ne,ie,M,m),Ye=new qA(L,ie,Le),ot=new a1(H,mt,Le,Ne),De=new oT(H,B,mt),Qe=new vT(H,B,mt),mt.programs=ge.programs,L.capabilities=Le,L.extensions=B,L.properties=Ie,L.renderLists=he,L.shadowMap=Ye,L.state=Ne,L.info=mt}X();const we=new t1(L,H);this.xr=we,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=B.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=B.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(U,W,!1))},this.getSize=function(w){return w.set(U,W)},this.setSize=function(w,Y,re=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,W=Y,i.width=Math.floor(w*q),i.height=Math.floor(Y*q),re===!0&&(i.style.width=w+"px",i.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(U*q,W*q).floor()},this.setDrawingBufferSize=function(w,Y,re){U=w,W=Y,q=re,i.width=Math.floor(w*re),i.height=Math.floor(Y*re),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,Y,re,se){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,Y,re,se),Ne.viewport(F.copy(N).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,Y,re,se){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,Y,re,se),Ne.scissor(fe.copy(ee).multiplyScalar(q).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(w){Ne.setScissorTest(be=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){de=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,re=!0){let se=0;if(w){let Z=!1;if(J!==null){const Me=J.texture.format;Z=Me===Uh||Me===Dh||Me===Ch}if(Z){const Me=J.texture.type,ze=Me===Di||Me===br||Me===Fo||Me===Io||Me===Rh||Me===wh,Xe=Ze.getClearColor(),Fe=Ze.getClearAlpha(),$e=Xe.r,it=Xe.g,et=Xe.b;ze?(R[0]=$e,R[1]=it,R[2]=et,R[3]=Fe,H.clearBufferuiv(H.COLOR,0,R)):(C[0]=$e,C[1]=it,C[2]=et,C[3]=Fe,H.clearBufferiv(H.COLOR,0,C))}else se|=H.COLOR_BUFFER_BIT}Y&&(se|=H.DEPTH_BUFFER_BIT),re&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",Ge,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Ze.dispose(),he.dispose(),Ke.dispose(),Ie.dispose(),Wt.dispose(),qt.dispose(),ie.dispose(),Pe.dispose(),ot.dispose(),ge.dispose(),we.dispose(),we.removeEventListener("sessionstart",$n),we.removeEventListener("sessionend",Os),xi.stop()};function Ue(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const w=mt.autoReset,Y=Ye.enabled,re=Ye.autoUpdate,se=Ye.needsUpdate,Z=Ye.type;X(),mt.autoReset=w,Ye.enabled=Y,Ye.autoUpdate=re,Ye.needsUpdate=se,Ye.type=Z}function Te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Se(w){const Y=w.target;Y.removeEventListener("dispose",Se),Ve(Y)}function Ve(w){rt(w),Ie.remove(w)}function rt(w){const Y=Ie.get(w).programs;Y!==void 0&&(Y.forEach(function(re){ge.releaseProgram(re)}),w.isShaderMaterial&&ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,re,se,Z,Me){Y===null&&(Y=Je);const ze=Z.isMesh&&Z.matrixWorld.determinant()<0,Xe=la(w,Y,re,se,Z);Ne.setMaterial(se,ze);let Fe=re.index,$e=1;if(se.wireframe===!0){if(Fe=E.getWireframeAttribute(re),Fe===void 0)return;$e=2}const it=re.drawRange,et=re.attributes.position;let pt=it.start*$e,Nt=(it.start+it.count)*$e;Me!==null&&(pt=Math.max(pt,Me.start*$e),Nt=Math.min(Nt,(Me.start+Me.count)*$e)),Fe!==null?(pt=Math.max(pt,0),Nt=Math.min(Nt,Fe.count)):et!=null&&(pt=Math.max(pt,0),Nt=Math.min(Nt,et.count));const Vt=Nt-pt;if(Vt<0||Vt===1/0)return;Pe.setup(Z,se,Xe,re,Fe);let Ot,gt=De;if(Fe!==null&&(Ot=O.get(Fe),gt=Qe,gt.setIndex(Ot)),Z.isMesh)se.wireframe===!0?(Ne.setLineWidth(se.wireframeLinewidth*lt()),gt.setMode(H.LINES)):gt.setMode(H.TRIANGLES);else if(Z.isLine){let We=se.linewidth;We===void 0&&(We=1),Ne.setLineWidth(We*lt()),Z.isLineSegments?gt.setMode(H.LINES):Z.isLineLoop?gt.setMode(H.LINE_LOOP):gt.setMode(H.LINE_STRIP)}else Z.isPoints?gt.setMode(H.POINTS):Z.isSprite&&gt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))gt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const We=Z._multiDrawStarts,Xt=Z._multiDrawCounts,Tt=Z._multiDrawCount,yn=Fe?O.get(Fe).bytesPerElement:1,Ui=Ie.get(se).currentProgram.getUniforms();for(let mn=0;mn<Tt;mn++)Ui.setValue(H,"_gl_DrawID",mn),gt.render(We[mn]/yn,Xt[mn])}else if(Z.isInstancedMesh)gt.renderInstances(pt,Vt,Z.count);else if(re.isInstancedBufferGeometry){const We=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xt=Math.min(re.instanceCount,We);gt.renderInstances(pt,Vt,Xt)}else gt.render(pt,Vt)};function Pt(w,Y,re){w.transparent===!0&&w.side===na&&w.forceSinglePass===!1?(w.side=Hn,w.needsUpdate=!0,Gn(w,Y,re),w.side=ja,w.needsUpdate=!0,Gn(w,Y,re),w.side=na):Gn(w,Y,re)}this.compile=function(w,Y,re=null){re===null&&(re=w),_=Ke.get(re),_.init(Y),P.push(_),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),w!==re&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const se=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Me=Z.material;if(Me)if(Array.isArray(Me))for(let ze=0;ze<Me.length;ze++){const Xe=Me[ze];Pt(Xe,re,Z),se.add(Xe)}else Pt(Me,re,Z),se.add(Me)}),_=P.pop(),se},this.compileAsync=function(w,Y,re=null){const se=this.compile(w,Y,re);return new Promise(Z=>{function Me(){if(se.forEach(function(ze){Ie.get(ze).currentProgram.isReady()&&se.delete(ze)}),se.size===0){Z(w);return}setTimeout(Me,10)}B.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Et=null;function Cn(w){Et&&Et(w)}function $n(){xi.stop()}function Os(){xi.start()}const xi=new u0;xi.setAnimationLoop(Cn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(w){Et=w,we.setAnimationLoop(w),w===null?xi.stop():xi.start()},we.addEventListener("sessionstart",$n),we.addEventListener("sessionend",Os),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Y),Y=we.getCamera()),w.isScene===!0&&w.onBeforeRender(L,w,Y,J),_=Ke.get(w,P.length),_.init(Y),P.push(_),_e.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ae.setFromProjectionMatrix(_e,wi,Y.reversedDepth),xe=this.localClippingEnabled,Q=Ce.init(this.clippingPlanes,xe),b=he.get(w,k.length),b.init(),k.push(b),we.enabled===!0&&we.isPresenting===!0){const Me=L.xr.getDepthSensingMesh();Me!==null&&Tr(Me,Y,-1/0,L.sortObjects)}Tr(w,Y,0,L.sortObjects),b.finish(),L.sortObjects===!0&&b.sort(oe,de),Dt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Dt&&Ze.addToRenderList(b,w),this.info.render.frame++,Q===!0&&Ce.beginShadows();const re=_.state.shadowsArray;Ye.render(re,w,Y),Q===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=b.opaque,Z=b.transmissive;if(_.setupLights(),Y.isArrayCamera){const Me=Y.cameras;if(Z.length>0)for(let ze=0,Xe=Me.length;ze<Xe;ze++){const Fe=Me[ze];Rr(se,Z,w,Fe)}Dt&&Ze.render(w);for(let ze=0,Xe=Me.length;ze<Xe;ze++){const Fe=Me[ze];Ar(b,w,Fe,Fe.viewport)}}else Z.length>0&&Rr(se,Z,w,Y),Dt&&Ze.render(w),Ar(b,w,Y);J!==null&&I===0&&(at.updateMultisampleRenderTarget(J),at.updateRenderTargetMipmap(J)),w.isScene===!0&&w.onAfterRender(L,w,Y),Pe.resetDefaultState(),A=-1,D=null,P.pop(),P.length>0?(_=P[P.length-1],Q===!0&&Ce.setGlobalState(L.clippingPlanes,_.state.camera)):_=null,k.pop(),k.length>0?b=k[k.length-1]:b=null};function Tr(w,Y,re,se){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)re=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ae.intersectsSprite(w)){se&&Oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);const ze=ie.update(w),Xe=w.material;Xe.visible&&b.push(w,ze,Xe,re,Oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ae.intersectsObject(w))){const ze=ie.update(w),Xe=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Oe.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Oe.copy(ze.boundingSphere.center)),Oe.applyMatrix4(w.matrixWorld).applyMatrix4(_e)),Array.isArray(Xe)){const Fe=ze.groups;for(let $e=0,it=Fe.length;$e<it;$e++){const et=Fe[$e],pt=Xe[et.materialIndex];pt&&pt.visible&&b.push(w,ze,pt,re,Oe.z,et)}}else Xe.visible&&b.push(w,ze,Xe,re,Oe.z,null)}}const Me=w.children;for(let ze=0,Xe=Me.length;ze<Xe;ze++)Tr(Me[ze],Y,re,se)}function Ar(w,Y,re,se){const Z=w.opaque,Me=w.transmissive,ze=w.transparent;_.setupLightsView(re),Q===!0&&Ce.setGlobalState(L.clippingPlanes,re),se&&Ne.viewport(F.copy(se)),Z.length>0&&Wa(Z,Y,re),Me.length>0&&Wa(Me,Y,re),ze.length>0&&Wa(ze,Y,re),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Rr(w,Y,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new Er(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Vo:Di,minFilter:Mr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Me=_.state.transmissionRenderTarget[se.id],ze=se.viewport||F;Me.setSize(ze.z*L.transmissionResolutionScale,ze.w*L.transmissionResolutionScale);const Xe=L.getRenderTarget(),Fe=L.getActiveCubeFace(),$e=L.getActiveMipmapLevel();L.setRenderTarget(Me),L.getClearColor(ue),me=L.getClearAlpha(),me<1&&L.setClearColor(16777215,.5),L.clear(),Dt&&Ze.render(re);const it=L.toneMapping;L.toneMapping=Ga;const et=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),Q===!0&&Ce.setGlobalState(L.clippingPlanes,se),Wa(w,re,se),at.updateMultisampleRenderTarget(Me),at.updateRenderTargetMipmap(Me),B.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Nt=0,Vt=Y.length;Nt<Vt;Nt++){const Ot=Y[Nt],gt=Ot.object,We=Ot.geometry,Xt=Ot.material,Tt=Ot.group;if(Xt.side===na&&gt.layers.test(se.layers)){const yn=Xt.side;Xt.side=Hn,Xt.needsUpdate=!0,Ps(gt,re,se,We,Xt,Tt),Xt.side=yn,Xt.needsUpdate=!0,pt=!0}}pt===!0&&(at.updateMultisampleRenderTarget(Me),at.updateRenderTargetMipmap(Me))}L.setRenderTarget(Xe,Fe,$e),L.setClearColor(ue,me),et!==void 0&&(se.viewport=et),L.toneMapping=it}function Wa(w,Y,re){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Me=w.length;Z<Me;Z++){const ze=w[Z],Xe=ze.object,Fe=ze.geometry,$e=ze.group;let it=ze.material;it.allowOverride===!0&&se!==null&&(it=se),Xe.layers.test(re.layers)&&Ps(Xe,Y,re,Fe,it,$e)}}function Ps(w,Y,re,se,Z,Me){w.onBeforeRender(L,Y,re,se,Z,Me),w.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(L,Y,re,se,w,Me),Z.transparent===!0&&Z.side===na&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,L.renderBufferDirect(re,Y,se,Z,w,Me),Z.side=ja,Z.needsUpdate=!0,L.renderBufferDirect(re,Y,se,Z,w,Me),Z.side=na):L.renderBufferDirect(re,Y,se,Z,w,Me),w.onAfterRender(L,Y,re,se,Z,Me)}function Gn(w,Y,re){Y.isScene!==!0&&(Y=Je);const se=Ie.get(w),Z=_.state.lights,Me=_.state.shadowsArray,ze=Z.state.version,Xe=ge.getParameters(w,Z.state,Me,Y,re),Fe=ge.getProgramCacheKey(Xe);let $e=se.programs;se.environment=w.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(w.isMeshStandardMaterial?qt:Wt).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",Se),$e=new Map,se.programs=$e);let it=$e.get(Fe);if(it!==void 0){if(se.currentProgram===it&&se.lightsStateVersion===ze)return xn(w,Xe),it}else Xe.uniforms=ge.getUniforms(w),w.onBeforeCompile(Xe,L),it=ge.acquireProgram(Xe,Fe),$e.set(Fe,it),se.uniforms=Xe.uniforms;const et=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(et.clippingPlanes=Ce.uniform),xn(w,Xe),se.needsLights=Xc(w),se.lightsStateVersion=ze,se.needsLights&&(et.ambientLightColor.value=Z.state.ambient,et.lightProbe.value=Z.state.probe,et.directionalLights.value=Z.state.directional,et.directionalLightShadows.value=Z.state.directionalShadow,et.spotLights.value=Z.state.spot,et.spotLightShadows.value=Z.state.spotShadow,et.rectAreaLights.value=Z.state.rectArea,et.ltc_1.value=Z.state.rectAreaLTC1,et.ltc_2.value=Z.state.rectAreaLTC2,et.pointLights.value=Z.state.point,et.pointLightShadows.value=Z.state.pointShadow,et.hemisphereLights.value=Z.state.hemi,et.directionalShadowMap.value=Z.state.directionalShadowMap,et.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,et.spotShadowMap.value=Z.state.spotShadowMap,et.spotLightMatrix.value=Z.state.spotLightMatrix,et.spotLightMap.value=Z.state.spotLightMap,et.pointShadowMap.value=Z.state.pointShadowMap,et.pointShadowMatrix.value=Z.state.pointShadowMatrix),se.currentProgram=it,se.uniformsList=null,it}function rn(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Oc.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function xn(w,Y){const re=Ie.get(w);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function la(w,Y,re,se,Z){Y.isScene!==!0&&(Y=Je),at.resetTextureUnits();const Me=Y.fog,ze=se.isMeshStandardMaterial?Y.environment:null,Xe=J===null?L.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Cs,Fe=(se.isMeshStandardMaterial?qt:Wt).get(se.envMap||ze),$e=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,it=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),et=!!re.morphAttributes.position,pt=!!re.morphAttributes.normal,Nt=!!re.morphAttributes.color;let Vt=Ga;se.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Vt=L.toneMapping);const Ot=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,gt=Ot!==void 0?Ot.length:0,We=Ie.get(se),Xt=_.state.lights;if(Q===!0&&(xe===!0||w!==D)){const fn=w===D&&se.id===A;Ce.setState(se,w,fn)}let Tt=!1;se.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Xt.state.version||We.outputColorSpace!==Xe||Z.isBatchedMesh&&We.batching===!1||!Z.isBatchedMesh&&We.batching===!0||Z.isBatchedMesh&&We.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&We.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&We.instancing===!1||!Z.isInstancedMesh&&We.instancing===!0||Z.isSkinnedMesh&&We.skinning===!1||!Z.isSkinnedMesh&&We.skinning===!0||Z.isInstancedMesh&&We.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&We.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&We.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&We.instancingMorph===!1&&Z.morphTexture!==null||We.envMap!==Fe||se.fog===!0&&We.fog!==Me||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ce.numPlanes||We.numIntersection!==Ce.numIntersection)||We.vertexAlphas!==$e||We.vertexTangents!==it||We.morphTargets!==et||We.morphNormals!==pt||We.morphColors!==Nt||We.toneMapping!==Vt||We.morphTargetsCount!==gt)&&(Tt=!0):(Tt=!0,We.__version=se.version);let yn=We.currentProgram;Tt===!0&&(yn=Gn(se,Y,Z));let Ui=!1,mn=!1,Ya=!1;const xt=yn.getUniforms(),Tn=We.uniforms;if(Ne.useProgram(yn.program)&&(Ui=!0,mn=!0,Ya=!0),se.id!==A&&(A=se.id,mn=!0),Ui||D!==w){Ne.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xt.setValue(H,"projectionMatrix",w.projectionMatrix),xt.setValue(H,"viewMatrix",w.matrixWorldInverse);const tn=xt.map.cameraPosition;tn!==void 0&&tn.setValue(H,ke.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&xt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&xt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,mn=!0,Ya=!0)}if(Z.isSkinnedMesh){xt.setOptional(H,Z,"bindMatrix"),xt.setOptional(H,Z,"bindMatrixInverse");const fn=Z.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),xt.setValue(H,"boneTexture",fn.boneTexture,at))}Z.isBatchedMesh&&(xt.setOptional(H,Z,"batchingTexture"),xt.setValue(H,"batchingTexture",Z._matricesTexture,at),xt.setOptional(H,Z,"batchingIdTexture"),xt.setValue(H,"batchingIdTexture",Z._indirectTexture,at),xt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&xt.setValue(H,"batchingColorTexture",Z._colorsTexture,at));const Dn=re.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Re.update(Z,re,yn),(mn||We.receiveShadow!==Z.receiveShadow)&&(We.receiveShadow=Z.receiveShadow,xt.setValue(H,"receiveShadow",Z.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Tn.envMap.value=Fe,Tn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),mn&&(xt.setValue(H,"toneMappingExposure",L.toneMappingExposure),We.needsLights&&zs(Tn,Ya),Me&&se.fog===!0&&Ee.refreshFogUniforms(Tn,Me),Ee.refreshMaterialUniforms(Tn,se,q,W,_.state.transmissionRenderTarget[w.id]),Oc.upload(H,rn(We),Tn,at)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Oc.upload(H,rn(We),Tn,at),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&xt.setValue(H,"center",Z.center),xt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),xt.setValue(H,"normalMatrix",Z.normalMatrix),xt.setValue(H,"modelMatrix",Z.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const fn=se.uniformsGroups;for(let tn=0,wr=fn.length;tn<wr;tn++){const yi=fn[tn];ot.update(yi,yn),ot.bind(yi,yn)}}return yn}function zs(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function Xc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,Y,re){const se=Ie.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ie.get(w.texture).__webglTexture=Y,Ie.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const re=Ie.get(w);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0};const Wc=H.createFramebuffer();this.setRenderTarget=function(w,Y=0,re=0){J=w,G=Y,I=re;let se=!0,Z=null,Me=!1,ze=!1;if(w){const Fe=Ie.get(w);if(Fe.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(Fe.__webglFramebuffer===void 0)at.setupRenderTarget(w);else if(Fe.__hasExternalTextures)at.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const et=w.depthTexture;if(Fe.__boundDepthTexture!==et){if(et!==null&&Ie.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ze=!0);const it=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?Z=it[Y][re]:Z=it[Y],Me=!0):w.samples>0&&at.useMultisampledRTT(w)===!1?Z=Ie.get(w).__webglMultisampledFramebuffer:Array.isArray(it)?Z=it[re]:Z=it,F.copy(w.viewport),fe.copy(w.scissor),ce=w.scissorTest}else F.copy(N).multiplyScalar(q).floor(),fe.copy(ee).multiplyScalar(q).floor(),ce=be;if(re!==0&&(Z=Wc),Ne.bindFramebuffer(H.FRAMEBUFFER,Z)&&se&&Ne.drawBuffers(w,Z),Ne.viewport(F),Ne.scissor(fe),Ne.setScissorTest(ce),Me){const Fe=Ie.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,re)}else if(ze){const Fe=Y;for(let $e=0;$e<w.textures.length;$e++){const it=Ie.get(w.textures[$e]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$e,it.__webglTexture,re,Fe)}}else if(w!==null&&re!==0){const Fe=Ie.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fe.__webglTexture,re)}A=-1},this.readRenderTargetPixels=function(w,Y,re,se,Z,Me,ze,Xe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Fe=Fe[ze]),Fe){Ne.bindFramebuffer(H.FRAMEBUFFER,Fe);try{const $e=w.textures[Xe],it=$e.format,et=$e.type;if(!Le.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-se&&re>=0&&re<=w.height-Z&&(w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Xe),H.readPixels(Y,re,se,Z,He.convert(it),He.convert(et),Me))}finally{const $e=J!==null?Ie.get(J).__webglFramebuffer:null;Ne.bindFramebuffer(H.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(w,Y,re,se,Z,Me,ze,Xe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Fe=Fe[ze]),Fe)if(Y>=0&&Y<=w.width-se&&re>=0&&re<=w.height-Z){Ne.bindFramebuffer(H.FRAMEBUFFER,Fe);const $e=w.textures[Xe],it=$e.format,et=$e.type;if(!Le.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Xe),H.readPixels(Y,re,se,Z,He.convert(it),He.convert(et),0);const Nt=J!==null?Ie.get(J).__webglFramebuffer:null;Ne.bindFramebuffer(H.FRAMEBUFFER,Nt);const Vt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await IS(H,Vt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.deleteBuffer(pt),H.deleteSync(Vt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,re=0){const se=Math.pow(2,-re),Z=Math.floor(w.image.width*se),Me=Math.floor(w.image.height*se),ze=Y!==null?Y.x:0,Xe=Y!==null?Y.y:0;at.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,ze,Xe,Z,Me),Ne.unbindTexture()};const Yo=H.createFramebuffer(),qa=H.createFramebuffer();this.copyTextureToTexture=function(w,Y,re=null,se=null,Z=0,Me=null){Me===null&&(Z!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=Z,Z=0):Me=0);let ze,Xe,Fe,$e,it,et,pt,Nt,Vt;const Ot=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(re!==null)ze=re.max.x-re.min.x,Xe=re.max.y-re.min.y,Fe=re.isBox3?re.max.z-re.min.z:1,$e=re.min.x,it=re.min.y,et=re.isBox3?re.min.z:0;else{const Dn=Math.pow(2,-Z);ze=Math.floor(Ot.width*Dn),Xe=Math.floor(Ot.height*Dn),w.isDataArrayTexture?Fe=Ot.depth:w.isData3DTexture?Fe=Math.floor(Ot.depth*Dn):Fe=1,$e=0,it=0,et=0}se!==null?(pt=se.x,Nt=se.y,Vt=se.z):(pt=0,Nt=0,Vt=0);const gt=He.convert(Y.format),We=He.convert(Y.type);let Xt;Y.isData3DTexture?(at.setTexture3D(Y,0),Xt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(at.setTexture2DArray(Y,0),Xt=H.TEXTURE_2D_ARRAY):(at.setTexture2D(Y,0),Xt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Tt=H.getParameter(H.UNPACK_ROW_LENGTH),yn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ui=H.getParameter(H.UNPACK_SKIP_PIXELS),mn=H.getParameter(H.UNPACK_SKIP_ROWS),Ya=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ot.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ot.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,et);const xt=w.isDataArrayTexture||w.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const Dn=Ie.get(w),fn=Ie.get(Y),tn=Ie.get(Dn.__renderTarget),wr=Ie.get(fn.__renderTarget);Ne.bindFramebuffer(H.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ne.bindFramebuffer(H.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let yi=0;yi<Fe;yi++)xt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ie.get(w).__webglTexture,Z,et+yi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ie.get(Y).__webglTexture,Me,Vt+yi)),H.blitFramebuffer($e,it,ze,Xe,pt,Nt,ze,Xe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ne.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||Ie.has(w)){const Dn=Ie.get(w),fn=Ie.get(Y);Ne.bindFramebuffer(H.READ_FRAMEBUFFER,Yo),Ne.bindFramebuffer(H.DRAW_FRAMEBUFFER,qa);for(let tn=0;tn<Fe;tn++)xt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dn.__webglTexture,Z,et+tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dn.__webglTexture,Z),Tn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fn.__webglTexture,Me,Vt+tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fn.__webglTexture,Me),Z!==0?H.blitFramebuffer($e,it,ze,Xe,pt,Nt,ze,Xe,H.COLOR_BUFFER_BIT,H.NEAREST):Tn?H.copyTexSubImage3D(Xt,Me,pt,Nt,Vt+tn,$e,it,ze,Xe):H.copyTexSubImage2D(Xt,Me,pt,Nt,$e,it,ze,Xe);Ne.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tn?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Xt,Me,pt,Nt,Vt,ze,Xe,Fe,gt,We,Ot.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Xt,Me,pt,Nt,Vt,ze,Xe,Fe,gt,Ot.data):H.texSubImage3D(Xt,Me,pt,Nt,Vt,ze,Xe,Fe,gt,We,Ot):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,pt,Nt,ze,Xe,gt,We,Ot.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,pt,Nt,Ot.width,Ot.height,gt,Ot.data):H.texSubImage2D(H.TEXTURE_2D,Me,pt,Nt,ze,Xe,gt,We,Ot);H.pixelStorei(H.UNPACK_ROW_LENGTH,Tt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ui),H.pixelStorei(H.UNPACK_SKIP_ROWS,mn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ya),Me===0&&Y.generateMipmaps&&H.generateMipmap(Xt),Ne.unbindTexture()},this.copyTextureToTexture3D=function(w,Y,re=null,se=null,Z=0){return Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,Y,re,se,Z)},this.initRenderTarget=function(w){Ie.get(w).__webglFramebuffer===void 0&&at.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?at.setTextureCube(w,0):w.isData3DTexture?at.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?at.setTexture2DArray(w,0):at.setTexture2D(w,0),Ne.unbindTexture()},this.resetState=function(){G=0,I=0,J=null,Ne.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(t),i.unpackColorSpace=wt._getUnpackColorSpace()}}const Bo=""+new URL("combat-vehicle-hangar-B8cOoZvu.png",import.meta.url).href,s1=["WASD move","Mouse drag look","Shift sprint","Space jump","Ctrl crouch","F fire"],C_=[{x:43,y:-1,z:45},{x:57,y:-1,z:44},{x:31,y:2,z:42},{x:69,y:2,z:41}];function o1({codename:o,operatorName:t,role:i,weapons:r,characterArt:l,squad:u}){var S;const d=Kt.useRef(null),h=Kt.useRef({x:-2.75,z:-2.72,y:0,velocityY:0,yaw:Math.PI,crouched:!1,grounded:!0}),m=Kt.useRef({}),p=Kt.useRef({dragging:!1,lastX:0}),[y,x]=Kt.useState({speed:"0.0",stance:"Standing",weapon:((S=r[0])==null?void 0:S[0])??"Primary",event:"Simulation ready"});return Kt.useEffect(()=>{if(!d.current)return;const M=d.current,R=new uM;R.background=null,R.fog=new Oh(725265,12,32);const C=new Jn(58,1,.1,80),b=new r1({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});b.setClearColor(0,0),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.shadowMap.enabled=!0,b.shadowMap.type=B_,M.appendChild(b.domElement);const _=new vM(10479836,1511954,1.8);R.add(_);const k=new SM(16777215,2.5);k.position.set(5,10,3),k.castShadow=!0,k.shadow.mapSize.set(2048,2048),R.add(k);const P=new xM(8315084,55,10);P.position.set(-4,3.5,2),R.add(P);let L=0,j=performance.now(),G=0;function I(){const U=M.getBoundingClientRect();b.setSize(U.width,U.height,!1),C.aspect=U.width/Math.max(U.height,1),C.updateProjectionMatrix()}function J(){const U=h.current,W=new $(U.x,U.y+1.45,U.z),q=new $(Math.sin(U.yaw),-.04,Math.cos(U.yaw)).normalize(),oe=W.clone().add(q.multiplyScalar(12)),de=new pM(new oa().setFromPoints([W,oe]),new s0({color:8315084}));R.add(de),window.setTimeout(()=>R.remove(de),95),x(N=>{var ee;return{...N,weapon:((ee=r[0])==null?void 0:ee[0])??N.weapon,event:"Rounds downrange"}})}function A(U){m.current[U.key.toLowerCase()]=!0,U.code==="Space"&&h.current.grounded&&(h.current.velocityY=5.2,h.current.grounded=!1),U.key.toLowerCase()==="f"&&J(),[" ","w","a","s","d"].includes(U.key.toLowerCase())&&U.preventDefault()}function D(U){m.current[U.key.toLowerCase()]=!1}function F(U){p.current={dragging:!0,lastX:U.clientX},M.setPointerCapture(U.pointerId)}function fe(U){if(!p.current.dragging)return;const W=U.clientX-p.current.lastX;p.current.lastX=U.clientX,h.current.yaw-=W*.008}function ce(U){p.current.dragging=!1,M.releasePointerCapture(U.pointerId)}function ue(U,W){var Dt,lt,H,ut;const q=m.current,oe=h.current,de=navigator.getGamepads?navigator.getGamepads()[0]:null,N=(q.w?1:0)-(q.s?1:0)-((de==null?void 0:de.axes[1])??0),ee=(q.d?1:0)-(q.a?1:0)+((de==null?void 0:de.axes[0])??0),be=q.shift||((Dt=de==null?void 0:de.buttons[10])==null?void 0:Dt.pressed);oe.crouched=q.control||q.c||!!((lt=de==null?void 0:de.buttons[1])!=null&&lt.pressed),de&&Math.abs(de.axes[2]??0)>.08&&(oe.yaw-=(de.axes[2]??0)*U*2.6),(H=de==null?void 0:de.buttons[7])!=null&&H.pressed&&J();const Ae=Math.min(Math.hypot(N,ee),1),Q=oe.crouched?2.2:be?6.2:3.7;if(Ae>.02){const B=Math.sin(oe.yaw),Le=Math.cos(oe.yaw);oe.x+=(B*N+Le*ee)*Q*U,oe.z+=(Le*N-B*ee)*Q*U}oe.x=rc.clamp(oe.x,-8.8,8.8),oe.z=rc.clamp(oe.z,-8.2,7.2);const xe=Math.sin(oe.yaw)*34,_e=rc.clamp(-oe.x*18+xe,-150,150),ke=rc.clamp(oe.z*7-oe.y*16,-72,72),Oe=1.12+Math.min(Math.abs(oe.z+2.72)*.012,.06);M.style.setProperty("--scene-pan-x",`${_e.toFixed(1)}px`),M.style.setProperty("--scene-pan-y",`${ke.toFixed(1)}px`),M.style.setProperty("--scene-scale",Oe.toFixed(3)),oe.velocityY-=13.5*U,oe.y=Math.max(0,oe.y+oe.velocityY*U),oe.y===0&&(oe.velocityY=0,oe.grounded=!0);const Je=new $(-Math.sin(oe.yaw)*5.2,3.1,-Math.cos(oe.yaw)*5.2);C.position.lerp(new $(oe.x,oe.y+1.2,oe.z).add(Je),.12),C.lookAt(oe.x,oe.y+1.25,oe.z),W-G>180&&(G=W,x({speed:(Ae*Q).toFixed(1),stance:oe.crouched?"Crouched":be&&Ae>.1?"Sprinting":"Standing",weapon:((ut=r[0])==null?void 0:ut[0])??"Primary",event:Ae>.1?"Movement input active":"Holding position"}))}function me(U){const W=Math.min((U-j)/1e3,.033);j=U,ue(W,U),b.render(R,C),L=requestAnimationFrame(me)}return I(),L=requestAnimationFrame(me),window.addEventListener("resize",I),window.addEventListener("keydown",A),window.addEventListener("keyup",D),M.addEventListener("pointerdown",F),M.addEventListener("pointermove",fe),M.addEventListener("pointerup",ce),()=>{cancelAnimationFrame(L),window.removeEventListener("resize",I),window.removeEventListener("keydown",A),window.removeEventListener("keyup",D),M.removeEventListener("pointerdown",F),M.removeEventListener("pointermove",fe),M.removeEventListener("pointerup",ce),b.dispose(),M.removeChild(b.domElement)}},[o,l.front,r]),g.jsxs("section",{className:"section-block simulation-section",id:"simulation",children:[g.jsxs("div",{className:"section-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Playable combat simulation"}),g.jsxs("h2",{children:[o," live movement arena"]})]}),g.jsx("p",{className:"section-note",children:"Move the selected operator beside the mounted-gun combat vehicle inside the realistic hangar scene."})]}),g.jsxs("div",{className:"simulation-shell",children:[g.jsx("div",{className:"simulation-canvas",ref:d,"aria-label":`${t} combat environment`,style:{"--sim-character-art":`url(${l.front})`,"--sim-bg-art":`url(${Bo})`,"--scene-pan-x":"0px","--scene-pan-y":"-19px","--scene-scale":"1.12"},children:g.jsx("div",{className:"simulation-squad-layer","aria-label":"Full roster staged in the hangar",children:u.map((M,R)=>{const C=C_[R%C_.length],b=M.codename===o;return g.jsxs("figure",{className:b?"simulation-squad-member selected":"simulation-squad-member",style:{"--squad-x":`${C.x}%`,"--squad-bottom":`${C.y}%`,"--squad-z":C.z},children:[g.jsx("span",{className:"simulation-character-shadow","aria-hidden":"true"}),g.jsx("img",{src:M.art.front,alt:`${M.name} positioned in the hangar scenery`})]},`sim-squad-${M.codename}`)})})}),g.jsxs("aside",{className:"simulation-hud",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Operator"}),g.jsx("h3",{children:t}),g.jsx("span",{children:i})]}),g.jsxs("div",{className:"sim-stat-grid",children:[g.jsxs("span",{children:[g.jsx("small",{children:"Speed"}),g.jsx("strong",{children:y.speed})]}),g.jsxs("span",{children:[g.jsx("small",{children:"Stance"}),g.jsx("strong",{children:y.stance})]}),g.jsxs("span",{children:[g.jsx("small",{children:"Weapon"}),g.jsx("strong",{children:y.weapon})]}),g.jsxs("span",{children:[g.jsx("small",{children:"Event"}),g.jsx("strong",{children:y.event})]})]}),g.jsx("div",{className:"sim-control-list",children:s1.map(M=>g.jsx("span",{children:M},M))})]})]})]})}const Pc=""+new URL("aion-prime-home-C4HNHDJK.png",import.meta.url).href,l1=""+new URL("aegis-orb-hires-xVlC5fAS.jpg",import.meta.url).href,c1=""+new URL("bastion-gunner-hires-CVTUK6-W.jpg",import.meta.url).href,u1=""+new URL("dominion-rifleman-hires-BYP7g31p.jpg",import.meta.url).href,f1=""+new URL("hex-sniper-hires-CCGIFgjc.jpg",import.meta.url).href,d1=""+new URL("iron-apostle-hires-TJYtnEFW.jpg",import.meta.url).href,h1=""+new URL("needle-scout-hires-fzvRVVF6.jpg",import.meta.url).href,p1=""+new URL("praetorian-nine-hires-4okPHZi8.jpg",import.meta.url).href,m1=""+new URL("reaper-carrier-hires-2DkUUZq2.jpg",import.meta.url).href,g1=""+new URL("seraph-prime-hires-0ospeCB1.jpg",import.meta.url).href,v1=""+new URL("shade-stalker-hires-DksbQ67S.jpg",import.meta.url).href,_1=""+new URL("signal-warden-hires-CyHMg49M.jpg",import.meta.url).href,x1=""+new URL("vulture-striker-hires-DdBPjLGU.jpg",import.meta.url).href,Mh=""+new URL("raptor-lrv2-CBwrI-W1.jpg",import.meta.url).href,g0=""+new URL("rhino-mgv4-Chpebvii.jpg",import.meta.url).href,v0=""+new URL("valkyrie-vt9-CmKiJ9iv.jpg",import.meta.url).href,bh=""+new URL("wraith-str6-B7PtUNKj.jpg",import.meta.url).href,y1=""+new URL("mara-voss-back-cutout-B60mCn99.png",import.meta.url).href,S1=""+new URL("mara-voss-front-cutout-_HJJOHln.png",import.meta.url).href,M1=""+new URL("mara-voss-side-cutout-Bvswx1rg.png",import.meta.url).href,b1=""+new URL("amani-mwangi-back-Dzy---MM.png",import.meta.url).href,E1=""+new URL("amani-mwangi-side-DPt4hc26.png",import.meta.url).href,T1=""+new URL("amani-mwangi-BJtJhSwL.png",import.meta.url).href,A1=""+new URL("amara-okonkwo-back-yf8yjfo5.png",import.meta.url).href,R1=""+new URL("amara-okonkwo-side-nnKOteR9.png",import.meta.url).href,w1=""+new URL("amara-okonkwo-FY_bPxDg.png",import.meta.url).href,C1=""+new URL("diego-rojas-back-B8mK-HUU.png",import.meta.url).href,D1=""+new URL("diego-rojas-side-Bd2jQ2WC.png",import.meta.url).href,U1=""+new URL("diego-rojas-DzEK7ZPh.png",import.meta.url).href,L1=""+new URL("ingrid-solberg-back-D0_9GQrv.png",import.meta.url).href,N1=""+new URL("ingrid-solberg-side-Cc5SK0Uo.png",import.meta.url).href,O1=""+new URL("ingrid-solberg-BRLrXACg.png",import.meta.url).href,P1=""+new URL("jean-paul-desrosiers-back-DJJNf4Z1.png",import.meta.url).href,z1=""+new URL("jean-paul-desrosiers-side-DKEEiZRE.png",import.meta.url).href,B1=""+new URL("jean-paul-desrosiers-x4hMl4pb.png",import.meta.url).href,F1=""+new URL("leila-haddad-back-D5_7-NXM.png",import.meta.url).href,I1=""+new URL("leila-haddad-side-8MRI1PHH.png",import.meta.url).href,H1=""+new URL("leila-haddad-Dxh5h0Ph.png",import.meta.url).href,k1=""+new URL("luca-romano-back-BNFsE0Sx.png",import.meta.url).href,G1=""+new URL("luca-romano-side-Bv7KWuGU.png",import.meta.url).href,V1=""+new URL("luca-romano-BLde7TVd.png",import.meta.url).href,j1=""+new URL("marcus-reed-back-DgwYj6Jw.png",import.meta.url).href,X1=""+new URL("marcus-reed-side-cla8xhVV.png",import.meta.url).href,W1=""+new URL("marcus-reed-r3xB289m.png",import.meta.url).href,q1=""+new URL("mateo-silva-back-DxTsLMOq.png",import.meta.url).href,Y1=""+new URL("mateo-silva-side-DJc6NE5x.png",import.meta.url).href,Z1=""+new URL("mateo-silva-5HZKvz0P.png",import.meta.url).href,K1=""+new URL("mathieu-toussaint-back-qyV5eh2-.png",import.meta.url).href,Q1=""+new URL("mathieu-toussaint-side-CH6g55hc.png",import.meta.url).href,J1=""+new URL("mathieu-toussaint-DDmKt_8S.png",import.meta.url).href,$1=""+new URL("mireya-baptiste-back-B2zAE_tM.png",import.meta.url).href,eR=""+new URL("mireya-baptiste-side-_hx8wxE3.png",import.meta.url).href,tR=""+new URL("mireya-baptiste-UtQZLkcJ.png",import.meta.url).href,nR=""+new URL("nadine-jean-baptiste-back-DjCdWuTk.png",import.meta.url).href,iR=""+new URL("nadine-jean-baptiste-side-DRE5o003.png",import.meta.url).href,aR=""+new URL("nadine-jean-baptiste-U6aEeAW3.png",import.meta.url).href,rR=""+new URL("omar-el-sayed-back-DvZ0YzV3.png",import.meta.url).href,sR=""+new URL("omar-el-sayed-side-GbsxNpnm.png",import.meta.url).href,oR=""+new URL("omar-el-sayed-BMPnC4NG.png",import.meta.url).href,lR=""+new URL("park-tae-min-back-D1wDi4ib.png",import.meta.url).href,cR=""+new URL("park-tae-min-side-BZejPE1D.png",import.meta.url).href,uR=""+new URL("park-tae-min-BTjYZmcm.png",import.meta.url).href,fR=""+new URL("priya-nair-back-Dx5txwin.png",import.meta.url).href,dR=""+new URL("priya-nair-side-CRHTHMmA.png",import.meta.url).href,hR=""+new URL("priya-nair-DFXsfudy.png",import.meta.url).href,pR=""+new URL("samir-khan-back-D1HMM4ex.png",import.meta.url).href,mR=""+new URL("samir-khan-side-lnwg1j9U.png",import.meta.url).href,gR=""+new URL("samir-khan-afwMkOKc.png",import.meta.url).href,vR=""+new URL("sofia-alvarez-back-BmPLZWff.png",import.meta.url).href,_R=""+new URL("sofia-alvarez-side-Dz9NXRSQ.png",import.meta.url).href,xR=""+new URL("sofia-alvarez-Cjr7OGqX.png",import.meta.url).href,yR=""+new URL("tomas-novak-back-LWo0EKI-.png",import.meta.url).href,SR=""+new URL("tomas-novak-side-y2dMENIS.png",import.meta.url).href,MR=""+new URL("tomas-novak-ao_fJqd-.png",import.meta.url).href,bR=""+new URL("yuki-tanaka-back-KAS85P0S.png",import.meta.url).href,ER=""+new URL("yuki-tanaka-side-BApmwsfq.png",import.meta.url).href,TR=""+new URL("yuki-tanaka-Njn3uOWV.png",import.meta.url).href,AR=""+new URL("zoe-mensah-back-D4NVfIWL.png",import.meta.url).href,RR=""+new URL("zoe-mensah-side-C2ywuUPz.png",import.meta.url).href,wR=""+new URL("zoe-mensah-lg5b-19l.png",import.meta.url).href,D_=[{name:"Kinetic Breach",type:"Active",cooldown:"18s",keyboard:"Z",controller:"LB",purpose:"Client-predicted directional burst for entry, chase, and escape chains.",counterplay:"Linear path, brief recovery on miss, blocked by heavy shields and stasis traps.",vfx:"Compressed air ribbon, suit sparks, and a hard-edged impact flash.",audio:"Pressure crack, servo snap, and close-range concussion tail.",network:"Predicted movement on owner, server-authoritative hit cone and final capsule location."},{name:"Echo Spike",type:"Active",cooldown:"24s",keyboard:"X",controller:"RB",purpose:"Throwable movement sensor that rewards timing before a coordinated push.",counterplay:"Device is visible, destructible, and only pings moving targets inside radius.",vfx:"Low-profile floor spike with pulsing scan rings and clean team-only silhouettes.",audio:"Soft sonar ticks that accelerate when recent motion is detected.",network:"Server-owned detection volume replicates compressed ping events to allied clients."},{name:"Snap Guard",type:"Active",cooldown:"28s",keyboard:"G",controller:"D-Pad Up",purpose:"1.25s frontal damage reduction for surviving a committed breach without tanking.",counterplay:"Flanks, explosives, melee, and delayed fire bypass the short protection window.",vfx:"Angular translucent forearm shield with directional impact ripples.",audio:"Rising charge tone, glassy block clicks, and a clean shutdown snap.",network:"Server validates guard angle, active tag, and damage modifier against attacker vector."},{name:"Overclock Vector",type:"Ultimate",cooldown:"Charge",keyboard:"T",controller:"LB + RB",purpose:"10s tempo spike: faster reloads, extended slides, and reduced movement cooldown recovery.",counterplay:"Range denial, suppression zones, burst focus, and trap layering.",vfx:"Subtle suit line glow, footstep light trails, and intensified breach distortion.",audio:"Heartbeat layer, exposed servo whine, and sharper movement transients.",network:"Replicated gameplay effect with scoped stat modifiers and montage-safe cancellation tags."}],CR=[["Move","W A S D","Left Stick","Analog movement with acceleration, strafing, and server-authoritative velocity caps."],["Look / Aim","Mouse","Right Stick","Raw mouse input, tuned stick response curve, ADS sensitivity scalar."],["Fire","Left Mouse","Right Trigger","Client-side muzzle feedback, server-authoritative trace and damage."],["Aim Down Sights","Right Mouse","Left Trigger","Hold-to-ADS with camera FOV blend and weapon sway reduction."],["Jump / Mantle","Space","A / Cross","Jump instantly; mantle triggers when ledge traces validate in front arc."],["Sprint","Left Shift","Left Stick Click","Hold sprint, cancellable into slide, jump, mantle, reload, or ability windup."],["Tactical Sprint","Double-tap Shift","Double-click Left Stick","Short burst with weapon lowered and stronger audio signature."],["Crouch / Slide","Left Ctrl","B / Circle","Tap crouch; hold or press while sprinting to enter slide."],["Lean Left","Q","D-Pad Left while ADS","ADS-only shoulder lean with exposed capsule and weapon obstruction checks."],["Lean Right","E","D-Pad Right while ADS","Mirrors left lean for corner play without changing ability bindings."],["Reload / Interact","R / F","X / Square","Context priority favors reload unless interact target is centered and valid."],["Swap Weapon","1 / 2 / Wheel","Y / Triangle","Fast swap queue respects reload cancel and equip animation windows."],["Melee","V / Mouse 4","Right Stick Click","Short lunge, server-confirmed hit frame, combo-safe recovery."],["Ping","Middle Mouse","D-Pad Down","Team ping raycast with cooldown throttling and replicated marker events."]],DR=[["Walk","420 uu/s","High-fidelity strafe control for ADS peeking and micro-correction."],["Sprint","650 uu/s","Fast baseline traversal with cancellable jump, crouch, and slide entry."],["Tac Sprint","780 uu/s","Short stamina burst that cannot fire but can cancel into mantle or breach."],["Slide","850 -> 420 uu/s","0.75s decay curve, hip-fire penalty, and melee-lunge combo window."],["Air Control","0.42 scalar","Midair correction supports skill expression without arena-shooter drift."],["Mantle","0.38-0.72s","Predictive traces, motion warping, and camera-stable climb starts."]],Ti=[{id:"dominion-rifleman",name:"Dominion Rifleman",designation:"H-01 Line Infantry",enemyClass:"Henchman",threat:"Standard",role:"Mobile suppression",description:"Disciplined corporate infantry deployed in linked fireteams to hold lanes and force operators out of cover.",armament:"VX pulse carbine, fragmentation charge, tactical smoke",behavior:"Advances by bounds, shares target pings, and suppresses the last known operator position.",weakness:"Break the fireteam link with flanks, vertical attacks, or signal disruption.",image:u1,imagePosition:"center"},{id:"bastion-gunner",name:"Bastion Gunner",designation:"H-07 Heavy Enforcer",enemyClass:"Henchman",threat:"Elevated",role:"Area denial",description:"Armored heavy who anchors enemy formations with sustained fire and a directional kinetic shield.",armament:"Helix rotary cannon, forearm shield, proximity mine",behavior:"Claims a firing lane, braces behind cover, and rotates slowly while the shield is active.",weakness:"Attack from separated angles or overload the shield before the weapon reaches full spin.",image:c1,imagePosition:"center"},{id:"shade-stalker",name:"Shade Stalker",designation:"H-12 Infiltrator",enemyClass:"Henchman",threat:"Severe",role:"Assassination",description:"Silent flanker equipped with refractive camouflage and a jammer that isolates operators from squad telemetry.",armament:"Suppressed flechette SMG, mono-edge blade, signal jammer",behavior:"Avoids direct sightlines, marks isolated targets, then attacks during reload or ability recovery.",weakness:"Motion sensors, area damage, and close squad spacing expose the camouflage approach.",image:v1,imagePosition:"center"},{id:"signal-warden",name:"Signal Warden",designation:"H-18 Command Support",enemyClass:"Henchman",threat:"Elevated",role:"Squad coordination",description:"Battlefield coordinator who improves nearby hostile accuracy, armor recovery, and response to operator pings.",armament:"Arc burst rifle, command beacon, repair injector",behavior:"Stays behind the line, relocates when exposed, and revives one disabled henchman per encounter.",weakness:"Destroy the command beacon or eliminate the Warden before engaging reinforced units.",image:_1,imagePosition:"center"},{id:"needle-scout",name:"Needle Scout",designation:"D-03 Recon Drone",enemyClass:"Drone",threat:"Standard",role:"Detection",description:"Fast aerial observer that paints operators for every connected enemy and tracks movement through light cover.",armament:"Optical marker, micro-dart burst, wideband scanner",behavior:"Circles above the squad, breaks line of sight after marking, and returns on a new approach vector.",weakness:"Low armor and a bright scan lens make it vulnerable to focused fire and EMP effects.",image:h1,imagePosition:"center"},{id:"vulture-striker",name:"Vulture Striker",designation:"D-11 Assault Drone",enemyClass:"Drone",threat:"Elevated",role:"Aerial pressure",description:"Attack drone that dives through open lanes, fires a kinetic burst, and climbs before operators can return fire.",armament:"Twin coil repeaters, dive rockets, evasive flare",behavior:"Alternates high cover with rapid attack runs and prioritizes stationary or wounded targets.",weakness:"Predict the climb path, use hard overhead cover, or interrupt the dive with shock damage.",image:x1,imagePosition:"center"},{id:"aegis-orb",name:"Aegis Orb",designation:"D-16 Defense Drone",enemyClass:"Drone",threat:"Elevated",role:"Protection",description:"Mobile shield projector that follows high-value units and redirects its barrier toward incoming damage.",armament:"Directional barrier, pulse repeater, repair tether",behavior:"Maintains distance from its protected unit and shifts the shield toward the highest damage source.",weakness:"Crossfire overwhelms its facing logic; the exposed rear capacitor takes amplified damage.",image:l1,imagePosition:"center"},{id:"reaper-carrier",name:"Reaper Carrier",designation:"D-24 Swarm Platform",enemyClass:"Drone",threat:"Severe",role:"Swarm deployment",description:"Armored carrier that seeds combat spaces with disposable hunter drones and remote explosive charges.",armament:"Hunter swarm bay, cluster charge, defensive laser",behavior:"Keeps long sightlines, deploys cover-seeking drones, and retreats while its swarm surrounds the squad.",weakness:"Damage the open launch bay during deployment to destroy the stored swarm and stagger the carrier.",image:m1,imagePosition:"center"},{id:"praetorian-nine",name:"Praetorian-9",designation:"C-09 Shock Cyborg",enemyClass:"Cyborg",threat:"Severe",role:"Close assault",description:"Reinforced breach unit that converts incoming damage into short bursts of speed and melee force.",armament:"Arc cleaver, shoulder scattergun, reactive plating",behavior:"Absorbs initial fire, closes rapidly, and chains cleaver strikes against grouped operators.",weakness:"Stagger effects interrupt the charge; leg servos remain vulnerable after a missed heavy strike.",image:p1,imagePosition:"center"},{id:"hex-sniper",name:"HEX Sniper",designation:"C-14 Neural Marksman",enemyClass:"Cyborg",threat:"Severe",role:"Long-range execution",description:"Precision cyborg that predicts repeated movement patterns and adjusts its lead calculation after every shot.",armament:"Mag-rail rifle, decoy projector, target prediction core",behavior:"Changes nests after two shots and punishes operators who repeat the same peek timing.",weakness:"Irregular movement, smoke, and decoy targets corrupt its prediction stack.",image:f1,imagePosition:"center"},{id:"iron-apostle",name:"Iron Apostle",designation:"C-22 Siege Cyborg",enemyClass:"Cyborg",threat:"Severe",role:"Objective breach",description:"Massive biomechanical siege unit built to destroy fortified positions and deny extraction zones.",armament:"Thermal lance, seismic fist, back-mounted mortar",behavior:"Bombards cover, advances through the impact zone, then uses the lance to split the squad.",weakness:"Cooling vents open after mortar volleys and expose the power spine to critical damage.",image:d1,imagePosition:"center"},{id:"seraph-prime",name:"Seraph Prime",designation:"C-Ω Command Avatar",enemyClass:"Cyborg",threat:"Apex",role:"Boss command unit",description:"AION Prime’s embodied battlefield intelligence, capable of rewriting encounter rules and directing every connected machine.",armament:"Gravitic field, neural beam, drone fabrication lattice",behavior:"Cycles between command, assault, and recovery phases while changing arena hazards and unit priorities.",weakness:"Sever three network anchors to interrupt phase transitions and expose the central cognition core.",image:g1,imagePosition:"center"}],Fa=[{id:"valkyrie-vt9",name:"Valkyrie VT-9",designation:"A-01 Aerial Insertion Craft",transportClass:"Aerial",role:"Fast squad insertion and extraction",capacity:"8 operators + pilot pair",speed:"310 km/h cruise / 0-90m vertical insert",terrain:"Rooftops, carrier decks, offshore rigs, contested hangars",deployment:"Dual ducted rotors hold a stable hover while the rear ramp and side rappel points deploy two fireteams.",protection:"Composite armor, IR baffling, active flare pods, and underside blast plating for hot-zone pickup.",operatorUse:"Best for opening cinematic drops, rapid objective swaps, and emergency extraction when ground routes are blocked.",image:v0},{id:"rhino-mgv4",name:"Rhino MGV-4",designation:"G-11 Heavy Ground Carrier",transportClass:"Ground",role:"Armored breach transport",capacity:"10 operators + gunner",speed:"92 km/h road / 54 km/h broken terrain",terrain:"Urban streets, checkpoint lanes, industrial yards, fortified gates",deployment:"Side troop doors let operators dismount under cover while the roof weapon suppresses hard angles.",protection:"Active armor tiles, run-flat wheels, smoke launchers, and a remote heavy machine gun mount.",operatorUse:"Best for convoy pushes, objective breach waves, and escort missions where durability matters more than stealth.",image:g0},{id:"raptor-lrv2",name:"Raptor LRV-2",designation:"G-04 Light Recon Vehicle",transportClass:"Ground",role:"High-speed flank and scout transport",capacity:"4 operators",speed:"148 km/h road / 88 km/h rough terrain",terrain:"Desert flats, service tunnels, perimeter roads, open refinery lanes",deployment:"Low chassis, exposed suspension, and a compact remote weapon station support fast hit-and-run rotations.",protection:"Light composite plating, counter-drone jammer, roll cage, and short-duration kinetic windshield shield.",operatorUse:"Best for recon teams, fast rotations, chase sequences, and flanking routes that reward driving skill.",image:Mh},{id:"wraith-str6",name:"Wraith STR-6",designation:"G-19 Stealth Track Carrier",transportClass:"Ground",role:"Silent infiltration transport",capacity:"6 operators",speed:"76 km/h silent mode / 104 km/h overdrive",terrain:"Night raids, tunnel networks, rain-slick streets, sensor-heavy facilities",deployment:"Rubberized dual tracks and dampened bay doors let operators exit with minimal acoustic signature.",protection:"Radar-absorbent panels, thermal masking, low-noise drive train, and directional EMP hardening.",operatorUse:"Best for stealth openings, sabotage objectives, ambush setups, and missions where detection changes the encounter.",image:bh}],Ia=[{id:"urban-breach-zone",code:"M-01",name:"Urban Breach Zone",biome:"Dense city combat",priority:"Playable Slice",mode:"6v6 control / PvE breach variant",scale:"220m x 180m, three-lane city block",traversal:"Rooftops, window vaults, alley slides, stairwell flanks",vehicles:"Rhino breach carrier as moving cover and extraction blocker",aiForces:"Dominion riflemen, Needle scouts, one Bastion gunner event",objective:"Operators push through a barricaded district to sever AION street relays.",ue5Prep:"Build with modular storefronts, Nanite rubble kits, destructible cover sockets, and replicated objective volumes.",streaming:"One persistent street grid with rooftop and interior sublevels loaded by World Partition cells.",perfBudget:"120 FPS target, 8ms game thread, 6ms render thread, 4 active VFX combat clusters.",artDirection:"Wet asphalt, tactical floodlights, burnt signage, teal AION surveillance lines.",image:Bo,accent:"#f26655"},{id:"iron-meridian-hangar",code:"M-02",name:"Iron Meridian Hangar",biome:"Industrial vehicle bay",priority:"Playable Slice",mode:"Payload escort / training simulation",scale:"180m x 140m, layered hangar floor",traversal:"Catwalk mantles, cargo vaults, crane-route verticality, vehicle cover",vehicles:"Rhino carrier, Raptor recon vehicle, mounted gun prop lanes",aiForces:"Bastion gunner, Reaper carrier drones, Iron Apostle boss lane",objective:"Capture the hangar control spine and launch a captured operator transport.",ue5Prep:"Use Chaos-enabled cargo props, spline doors, cover tagging, and animatable vehicle bay set pieces.",streaming:"Interior sublevels split into bay floor, catwalk ring, maintenance tunnel, and exterior apron.",perfBudget:"120 FPS target, baked reflection captures plus selective Lumen hardware ray tracing.",artDirection:"Black steel, amber safety lights, rain spill from open bay doors, heavy machine silhouettes.",image:Bo,accent:"#f6c36c"},{id:"aion-core-vault",code:"M-03",name:"AION Core Vault",biome:"AI megastructure interior",priority:"Playable Slice",mode:"Boss arena / sabotage",scale:"160m circular arena plus three server wings",traversal:"Rotating bridges, shielded data lanes, low-gravity jump pads",vehicles:"No driveable vehicle; Valkyrie appears as extraction sequence",aiForces:"Aegis orbs, Seraph Prime, Shade stalkers, Signal wardens",objective:"Destroy three cognition anchors before Seraph Prime completes neural sync.",ue5Prep:"Prepare phase-state data assets, replicated encounter directors, Niagara data-stream hazards, and boss nav islands.",streaming:"Core arena persistent; server wings stream during phase transitions to hide loading.",perfBudget:"90 FPS boss target, strict Niagara budget, pooled projectile trails, 24 active AI max.",artDirection:"Cold blue cognition rings, mirrored black floors, enormous AI face holography.",image:Pc,accent:"#7ee0cc"},{id:"dustline-convoy",code:"M-04",name:"Dustline Convoy Route",biome:"Desert highway ambush",priority:"Playable Slice",mode:"Convoy assault / extraction chase",scale:"480m spline route with two combat stops",traversal:"Dune climbs, ravine drops, vehicle leap-outs, pipeline cover",vehicles:"Raptor recon vehicles and Rhino convoy hauler",aiForces:"Vulture strikers, Dominion riflemen, Hex sniper overwatch",objective:"Intercept an AION supply convoy and extract the encrypted drive before drone reinforcements arrive.",ue5Prep:"Use spline-driven vehicle rails, Chaos dust volumes, replicated seat states, and long-range HLOD clusters.",streaming:"World Partition route cells with preloaded combat stop arenas and distant impostor terrain.",perfBudget:"100 FPS target, aggressive HLOD, 3 vehicle physics actors, dust VFX capped per client.",artDirection:"Sun-blasted road, black convoy armor, copper dust clouds, blue drone search beams.",image:Mh,accent:"#d89a54"},{id:"blackwater-port",code:"M-05",name:"Blackwater Port",biome:"Rainy container terminal",priority:"Launch Core",mode:"Hardpoint / stealth raid",scale:"260m x 210m, container maze plus ship deck",traversal:"Container mantles, crane catwalks, ship ramps, drainage tunnels",vehicles:"Wraith stealth carrier for silent insertion and extraction",aiForces:"Shade stalkers, Needle scouts, Reaper carrier patrols",objective:"Plant signal scramblers across the port before AION ships leave the harbor.",ue5Prep:"Author modular container stacks, wet-material instances, reflection volumes, and audio occlusion zones.",streaming:"Port yard persistent with ship deck, warehouse, and crane sublevels streaming by distance.",perfBudget:"120 FPS target, screen-space rain reflections tuned for mid-range GPUs.",artDirection:"Rain streaks, sodium work lights, steel cranes, black water with teal signal reflections.",image:bh,accent:"#4aa7ba"},{id:"skybridge-helix",code:"M-06",name:"Skybridge Helix",biome:"Aerial platform",priority:"Launch Core",mode:"King of the hill / aerial insertion",scale:"190m vertical platform with exposed bridges",traversal:"Jump gaps, wind tunnels, rappel lines, vertical lift shafts",vehicles:"Valkyrie hover insertion and emergency pickup routes",aiForces:"Vulture strikers, Aegis orbs, Signal wardens",objective:"Hold the platform transmitter while aerial drones attempt to cut the bridge network.",ue5Prep:"Create wind volumes, fall-recovery rules, moving platform replication, and vertical nav links.",streaming:"Central tower persistent; bridge arms stream independently with distance HLOD.",perfBudget:"120 FPS target, cloud cards baked, vertical visibility controlled by fog layers.",artDirection:"Storm clouds, white platform plating, blue orbital glow, aircraft silhouettes.",image:v0,accent:"#9edfff"},{id:"subzero-relay",code:"M-07",name:"Subzero Relay Complex",biome:"Arctic communications base",priority:"Launch Core",mode:"Uplink sabotage / survival",scale:"240m x 170m, exterior base plus antenna interior",traversal:"Ice slides, ladder shafts, snowdrift cover, antenna catwalks",vehicles:"Wraith track carrier in snow camouflage",aiForces:"Hex snipers, Signal wardens, Aegis orbs",objective:"Disable the polar relay before AION geolocates the operator network.",ue5Prep:"Prepare snow deformation masks, low-visibility volumes, thermal readability materials, and cold audio filters.",streaming:"Exterior bowl persistent with antenna, bunker, and tunnel cells.",perfBudget:"110 FPS target, fog sheets and snow particles capped by camera altitude.",artDirection:"Blue-white ice, red warning strobes, frosted antennas, aurora interference lines.",image:Pc,accent:"#bcecff"},{id:"jungle-signal-ruins",code:"M-08",name:"Jungle Signal Ruins",biome:"Overgrown tech ruin",priority:"Launch Core",mode:"Recon hunt / artifact recovery",scale:"260m x 220m, temple bowl with buried server rooms",traversal:"Root vaults, canopy routes, broken-stone climbs, underwater flank",vehicles:"Raptor recon vehicle on perimeter loop",aiForces:"Needle scouts, Shade stalkers, Dominion riflemen",objective:"Recover a Prime-era relay core before AION converts the ruin into a drone nest.",ue5Prep:"Use foliage actors with gameplay collision rules, Nanite rock kits, and navmesh cost volumes for dense vegetation.",streaming:"Canopy, temple, and underground cells stream around a central ruin objective.",perfBudget:"100 FPS target, foliage culling zones and fixed shadow cascades.",artDirection:"Wet leaves, old stone, glowing buried circuitry, shafts of green light.",image:Mh,accent:"#70c879"},{id:"flooded-metro-grid",code:"M-09",name:"Flooded Metro Grid",biome:"Underground transit network",priority:"Expansion Ready",mode:"Search and destroy / tunnel chase",scale:"300m tunnel loop with two station arenas",traversal:"Train car vaults, water-slow lanes, maintenance shafts, platform drops",vehicles:"No vehicle driving; damaged metro train as moving hazard",aiForces:"Needle scouts, Aegis orbs, Reaper carrier drones",objective:"Move a signal package through flooded stations while AION tracks acoustic signatures.",ue5Prep:"Build water volumes, reflection captures, audio propagation zones, and moving train encounter splines.",streaming:"Tunnel cells stream around the player squad with station hubs kept persistent during objectives.",perfBudget:"110 FPS target, water material LODs and pooled splash VFX.",artDirection:"Dark tile, emergency red lights, knee-high water, flickering digital adverts.",image:Bo,accent:"#5dc8d5"},{id:"orbital-debris-yard",code:"M-10",name:"Orbital Debris Yard",biome:"Space elevator wreckage",priority:"Expansion Ready",mode:"Low-gravity control / extraction",scale:"210m platform cluster with exterior void lanes",traversal:"Mag-boots, low-gravity jump arcs, airlock tunnels, rotating debris cover",vehicles:"Valkyrie docked as extraction craft",aiForces:"Aegis orbs, Vulture strikers, Seraph remote echoes",objective:"Extract a black-box AI shard from a broken orbital cargo ring.",ue5Prep:"Prototype gravity volumes, custom movement mode, tethered fall recovery, and replicated rotating debris.",streaming:"Clustered platform cells with background debris as HLOD impostors.",perfBudget:"90 FPS target, low-gravity physics capped to authored hero objects.",artDirection:"Stars, Earth glow, broken black plating, blue electrical arcs.",image:Pc,accent:"#8da7ff"},{id:"mountain-battery",code:"M-11",name:"Mountain Battery Outpost",biome:"Alpine artillery base",priority:"Expansion Ready",mode:"Siege disable / long-range duel",scale:"360m ridge map with bunker interiors",traversal:"Cliff mantles, cable bridge crossings, bunker stairs, snow trench lanes",vehicles:"Rhino carrier used as shielded artillery approach",aiForces:"Hex snipers, Bastion gunners, Iron Apostle event",objective:"Disable AION rail cannons before they fire on allied transport routes.",ue5Prep:"Prepare long-sightline occlusion, HLOD mountain terrain, artillery telegraph VFX, and cover markers.",streaming:"Ridge lanes, bunker cells, and lower valley HLOD loaded by camera-facing distance.",perfBudget:"100 FPS target, distant terrain Nanite budget and scoped optic render limits.",artDirection:"Cold rock, artillery muzzle flash, steel bunkers, drifting snow.",image:g0,accent:"#c8d4dd"},{id:"hydro-dam-breach",code:"M-12",name:"Hydro Dam Breach",biome:"Megadam power facility",priority:"Expansion Ready",mode:"Multi-stage assault / power shutdown",scale:"340m dam face, turbine hall, control room",traversal:"Turbine catwalks, service elevators, spillway edges, maintenance ducts",vehicles:"Raptor approach route and Valkyrie final extraction",aiForces:"Dominion riflemen, Signal wardens, Reaper carriers",objective:"Shut down the dam’s AION power spine while floodgates change playable lanes.",ue5Prep:"Create replicated floodgate states, water hazard volumes, turbine audio zones, and encounter stage data assets.",streaming:"Exterior dam, turbine hall, and command room stream as stage-specific sublevels.",perfBudget:"100 FPS target, water VFX capped by phase and pooled debris simulation.",artDirection:"Concrete scale, roaring water, orange maintenance lights, teal power conduits.",image:bh,accent:"#5fc4e8"}],U_={Vector:[["Slide chain","+18% exit speed","Keeps momentum after a clean slide kill or breach dash, rewarding aggressive entries."],["Mantle recovery","-90ms weapon raise","Returns to fire-ready faster after vaults so vertical flanks feel sharp."],["Risk hook","Louder sprint tail","High speed creates readable audio pressure for defenders."]],Bulwark:[["Braced advance","-12% sprint speed","Moves slower but keeps weapon stability while crossing open lanes."],["Knockback resist","45% reduction","Heavy stance resists explosions, melee bumps, and shield impacts."],["Risk hook","Slow turn while braced","Commitment is punishable by flanks and quick angle swaps."]],Kitsune:[["Quiet route","-35% footstep radius","Crouch-walk and short sprint bursts produce softer positional reads."],["Mantle decoy","1 false step ping","A brief decoy footstep plays after ledge traversal to sell misdirection."],["Risk hook","Lower stumble resist","Taking damage during stealth routes slows recovery more than average."]],Mirage:[["Signal drift","+12% strafe blend","Strafes feel slippery during ability windows to support doorway misdirection."],["Ghost vault","0.18s shimmer","Vaulting through masked zones leaves a readable afterimage trail."],["Risk hook","No sprint bonus","Relies on deception rather than raw speed."]],Cinder:[["Heat stride","+10% through burn lanes","Moves faster across owned thermite lanes to reposition around denial zones."],["Ash slide","+0.2s slide sustain","Slides carry slightly longer when entering from sprint near active area denial."],["Risk hook","Bright movement VFX","Enhanced lane movement is easy to visually track."]],Lumine:[["Triage sprint","+14% toward allies","Gains speed when sprinting toward downed or low-health teammates."],["Revive crouch","+20% crouch speed","Can reposition while staying low during revive setup."],["Risk hook","Combat speed neutral","No duel mobility bonus when away from team play."]],Siren:[["Masked steps","2.5s audio dampen","Can briefly suppress team footstep spikes before a coordinated push."],["Pulse brake","Fast stop control","Decelerates quickly after sprint to bait audio reads and corner swings."],["Risk hook","Visible waveform","Audio masking creates subtle readable suit pulses."]],Monsoon:[["Smoke slip","+16% inside cover","Accelerates slightly while moving through owned smoke or dampening fields."],["Flow strafe","+10% direction swap","Changes lateral direction faster for controller-style lane shaping."],["Risk hook","Field dependent","Mobility identity weakens when abilities are on cooldown."]],Frostline:[["Anchor step","+18% ADS walk","Keeps tighter marksman movement while holding long angles."],["Cold retreat","+12% backpedal after hit","Can disengage from punished peeks without becoming a speed duelist."],["Risk hook","Slow mantle","+110ms ledge recovery keeps high-ground rotations committal."]],Relay:[["Link hop","Short ally tether","Gets a short reposition burst after linking with a nearby teammate."],["Squad tempo","+8% team sprint aura","Small movement benefit for allies rotating through her link radius."],["Risk hook","Requires proximity","Solo routes lose most mobility value."]],Citadel:[["Shoulder breach","Door shove impulse","Can push through light barricade contact without full stop."],["Armor gait","-8% sprint accel","Heavy gear starts slower but maintains steady push speed under fire."],["Risk hook","Large audio profile","Movement is intentionally easy to identify."]],Vanguard:[["Hard push","+18% tac sprint duration","Longer tactical sprint supports first-contact entries."],["Flash footing","No stumble on blind","Maintains basic movement control during flash resistance windows."],["Risk hook","Wide turn radius","Hard pushes need commitment and path planning."]],Condor:[["Climb burst","+24% climb speed","Fast ledge and rooftop traversal defines the vertical assault role."],["Aerial control","+0.14 air scalar","Better midair correction after grapple or high-ground drops."],["Risk hook","Landing noise spike","Aggressive vertical routes announce arrival."]],Scarab:[["Trap crawl","+18% crouch near devices","Moves faster while maintaining low profile around deployed traps."],["Lockdown pivot","+12% turn accel","Can rotate around objective traps without becoming a runner."],["Risk hook","Low chase speed","Weak at pursuing enemies outside prepared routes."]],Hammer:[["Heavy carry","-10% sprint speed","Big weapon kit moves slower but keeps suppression stable."],["Impact lunge","+18% melee reach","Short, heavy shove gives close-range space without dash mobility."],["Risk hook","Slow recovery","Missed lunges and slides take longer to recover."]],Circuit:[["Overclock step","+12% after hack","Brief speed bump after a successful drone or HUD interference action."],["Signal sidestep","+10% ADS strafe","Keeps small lateral corrections while using tech tools."],["Risk hook","Cooldown tied","Mobility spike depends on successful system interaction."]],Veloce:[["Burst strafe","+22% first step","Explosive first lateral step supports quick peeks and duel resets."],["Reset sprint","0.35s faster re-entry","Returns to sprint faster after weapon swap or slide cancel."],["Risk hook","Low sustain","Short bursts fade quickly in long chases."]],Lockjaw:[["Snare stance","+16% ADS hold speed","Can hold angles around traps while keeping steady micro-movement."],["Chase cut","+10% toward snared targets","Small chase bonus only when anti-mobility tools connect."],["Risk hook","No free escape","Defensive kit lacks raw disengage movement."]],Rift:[["Terrain read","+20% mantle after scan","Route scans unlock faster mantle and climb timing on marked paths."],["Pathfinder vault","Longer vault reach","Can clear slightly wider cover gaps with readable animation."],["Risk hook","Needs route setup","Unscanned terrain uses standard movement only."]],Null:[["Blackout drift","No radar sprint ping","Sprint pings are suppressed during blackout windows."],["Decoy brake","Instant stop fake","Can create a false movement stop to disrupt sensor reads."],["Risk hook","Lower acceleration","Baseline sprint starts slightly slower to offset stealth value."]],Forge:[["Workbench walk","Deploy while moving","Can place light hardpoints while walking instead of fully stopping."],["Repair shuffle","+16% strafe during repair","Keeps small movement while maintaining engineer interactions."],["Risk hook","No chase perk","Mobility supports setup, not pursuit."]]},UR=["Enhanced Input contexts for movement, combat, ability targeting, and controller aim tuning.","Gameplay Ability System tags drive cooldowns, lockouts, ultimate modifiers, and interrupt rules.","Owner-only cosmetic prediction fires instantly, then reconciles against server-confirmed ability state.","Animation layers split lower-body locomotion, upper-body weapon handling, additive recoil, and ability overlays.","Network relevancy, pooled VFX, compact tag replication, and event-based traces keep matches scalable."],LR=["Idle","Walk","Sprint","Tac Sprint","Slide","Mantle","ADS","Fire","Reload","Ability","Hit React","Recovery","Death"],NR={name:"Mara Voss",codename:"Vector",gender:"Female",country:"Germany / Brazil",flag:"🇩🇪 🇧🇷",heritage:"German-Brazilian",role:"Mobile assault",specialization:"Momentum entries, vertical flanks, and pressure conversion."},ea=[NR,{name:"Amara Okonkwo",codename:"Bulwark",gender:"Female",country:"Nigeria",flag:"🇳🇬",heritage:"Igbo Nigerian",role:"Anchor defender",specialization:"Deployable cover, lane control, and anti-breach denial."},{name:"Yuki Tanaka",codename:"Kitsune",gender:"Female",country:"Japan",flag:"🇯🇵",heritage:"Japanese",role:"Recon infiltrator",specialization:"Silent routing, decoy pings, and precision flank timing."},{name:"Leila Haddad",codename:"Mirage",gender:"Female",country:"Lebanon",flag:"🇱🇧",heritage:"Lebanese Arab",role:"Disruption support",specialization:"Visual clutter, signal masking, and doorway misdirection."},{name:"Sofia Alvarez",codename:"Cinder",gender:"Female",country:"Mexico",flag:"🇲🇽",heritage:"Mexican",role:"Area denial",specialization:"Thermite lanes, reload pressure, and objective burn control."},{name:"Nadine Jean-Baptiste",codename:"Lumine",gender:"Female",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Combat medic",specialization:"Fast revives, temporary armor boosts, and triage routing."},{name:"Mireya Baptiste",codename:"Siren",gender:"Female",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Audio warfare",specialization:"Footstep masking, sonic reveals, and anti-rush disruption."},{name:"Priya Nair",codename:"Monsoon",gender:"Female",country:"India",flag:"🇮🇳",heritage:"Malayali Indian",role:"Tactical controller",specialization:"Smoke shaping, sightline breaks, and sensor dampening."},{name:"Ingrid Solberg",codename:"Frostline",gender:"Female",country:"Norway",flag:"🇳🇴",heritage:"Norwegian",role:"Marksman control",specialization:"Long-angle overwatch, slow fields, and retreat punishment."},{name:"Zoe Mensah",codename:"Relay",gender:"Female",country:"Ghana",flag:"🇬🇭",heritage:"Ghanaian",role:"Team mobility",specialization:"Short-range reposition links, squad tempo, and flank rescue."},{name:"Jean-Paul Desrosiers",codename:"Citadel",gender:"Male",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Shield breaker",specialization:"Armor cracking, barricade pressure, and breach follow-through."},{name:"Mathieu Toussaint",codename:"Vanguard",gender:"Male",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Point man",specialization:"First-contact survivability, flash resistance, and hard pushes."},{name:"Diego Rojas",codename:"Condor",gender:"Male",country:"Colombia",flag:"🇨🇴",heritage:"Colombian",role:"Vertical assault",specialization:"Grapple entries, rooftop angles, and high-ground duels."},{name:"Omar El-Sayed",codename:"Scarab",gender:"Male",country:"Egypt",flag:"🇪🇬",heritage:"Egyptian Arab",role:"Trap engineer",specialization:"Pressure mines, route prediction, and objective lockdown."},{name:"Marcus Reed",codename:"Hammer",gender:"Male",country:"United States",flag:"🇺🇸",heritage:"African American",role:"Heavy gunner",specialization:"Suppressive fire, cover shredding, and squad advance windows."},{name:"Park Tae-min",codename:"Circuit",gender:"Male",country:"South Korea",flag:"🇰🇷",heritage:"Korean",role:"Systems hacker",specialization:"Drone hijacks, HUD noise, and cooldown interference."},{name:"Luca Romano",codename:"Veloce",gender:"Male",country:"Italy",flag:"🇮🇹",heritage:"Italian",role:"Skirmisher",specialization:"Quick peeks, burst strafes, and duel reset timing."},{name:"Tomas Novak",codename:"Lockjaw",gender:"Male",country:"Czech Republic",flag:"🇨🇿",heritage:"Czech",role:"Anti-mobility",specialization:"Snare traps, dash denial, and chase interruption."},{name:"Amani Mwangi",codename:"Rift",gender:"Male",country:"Kenya",flag:"🇰🇪",heritage:"Kikuyu Kenyan",role:"Pathfinder",specialization:"Route scans, mantle boosts, and terrain-aware rotations."},{name:"Samir Khan",codename:"Null",gender:"Male",country:"Pakistan",flag:"🇵🇰",heritage:"Pakistani",role:"Counter-intel",specialization:"Recon denial, decoy signatures, and sensor blackout."},{name:"Mateo Silva",codename:"Forge",gender:"Male",country:"Brazil",flag:"🇧🇷",heritage:"Afro-Brazilian",role:"Combat engineer",specialization:"Portable hardpoints, ammo stations, and repair denial."}],L_={Vector:{front:S1,side:M1,back:y1},Bulwark:{front:w1,side:R1,back:A1},Kitsune:{front:TR,side:ER,back:bR},Mirage:{front:H1,side:I1,back:F1},Cinder:{front:xR,side:_R,back:vR},Lumine:{front:aR,side:iR,back:nR},Siren:{front:tR,side:eR,back:$1},Monsoon:{front:hR,side:dR,back:fR},Frostline:{front:O1,side:N1,back:L1},Relay:{front:wR,side:RR,back:AR},Citadel:{front:B1,side:z1,back:P1},Vanguard:{front:J1,side:Q1,back:K1},Condor:{front:U1,side:D1,back:C1},Scarab:{front:oR,side:sR,back:rR},Hammer:{front:W1,side:X1,back:j1},Circuit:{front:uR,side:cR,back:lR},Veloce:{front:V1,side:G1,back:k1},Lockjaw:{front:MR,side:SR,back:yR},Rift:{front:T1,side:E1,back:b1},Null:{front:gR,side:mR,back:pR},Forge:{front:Z1,side:Y1,back:q1}},N_={Vector:[["KX-9 Shardline","Primary carbine","27 body / 40 head","720 RPM","10-38m","30 rounds"],["P-17 Latch","Machine pistol","18 body / 27 head","950 RPM","0-15m","20 rounds"],["Shock Baton","Melee","50 quick / 90 heavy","0.32s hit frame","2.2m lunge","Combo reset"]],Bulwark:[["Aegis-12 Bastion","Primary shotgun","96 body / 124 head","92 RPM","0-12m","8 shells"],["R-40 Anchor","Heavy revolver","48 body / 72 head","180 RPM","0-24m","6 rounds"],["Tower Maul","Melee","65 quick / 115 heavy","0.42s hit frame","2.0m lunge","Armor stagger"]],Kitsune:[["S-19 Whisper","Suppressed SMG","22 body / 33 head","860 RPM","0-26m","34 rounds"],["Tanto-9 Ghost","Suppressed pistol","31 body / 46 head","360 RPM","0-18m","13 rounds"],["Ceramic Tanto","Melee","45 quick / 85 heavy","0.26s hit frame","2.4m lunge","Backstab bonus"]],Mirage:[["M7 Prism","Burst rifle","26 body / 39 head","690 RPM","12-42m","27 rounds"],["Fennec Pulse","Compact sidearm","24 body / 36 head","520 RPM","0-16m","16 rounds"],["Signal Knife","Melee","45 quick / 90 heavy","0.30s hit frame","2.2m lunge","Sensor tag"]],Cinder:[["HX-44 Ember","Thermite LMG","25 body / 36 head","650 RPM","10-34m","55 rounds"],["Flare-6 Compact","Flare pistol","38 body / 55 head","150 RPM","0-20m","1 round"],["Heat Axe","Melee","60 quick / 110 heavy","0.38s hit frame","2.1m lunge","Burn tick"]],Lumine:[["MediCore V9","Support SMG","21 body / 32 head","820 RPM","0-24m","32 rounds"],["Suture-15","Burst pistol","28 body / 42 head","480 RPM","0-18m","15 rounds"],["Rescue Baton","Melee","42 quick / 80 heavy","0.28s hit frame","2.1m lunge","Revive cancel safe"]],Siren:[["Wail-3 Resonator","Sonic rifle","24 body / 35 head","700 RPM","8-32m","30 rounds"],["Mute-11 Sidearm","Damped pistol","30 body / 45 head","390 RPM","0-18m","14 rounds"],["Tuning Blade","Melee","46 quick / 88 heavy","0.31s hit frame","2.2m lunge","Audio reveal"]],Monsoon:[["R-7 Cloudburst","Tactical AR","26 body / 38 head","680 RPM","10-40m","30 rounds"],["Mist-18","Utility pistol","25 body / 38 head","430 RPM","0-17m","18 rounds"],["Katar Relay","Melee","48 quick / 92 heavy","0.29s hit frame","2.2m lunge","Smoke exit"]],Frostline:[["N-88 Glacier","Marksman rifle","62 body / 96 head","170 RPM","24-70m","12 rounds"],["Fjord-9","Precision pistol","34 body / 51 head","330 RPM","0-22m","10 rounds"],["Ice Pick","Melee","52 quick / 96 heavy","0.33s hit frame","2.0m lunge","Slow tag"]],Relay:[["Link-45 Vector","Compact AR","24 body / 36 head","760 RPM","8-32m","30 rounds"],["Hopline PDW","Machine pistol","17 body / 26 head","980 RPM","0-14m","22 rounds"],["Relay Tonfa","Melee","46 quick / 86 heavy","0.28s hit frame","2.3m lunge","Swap cancel"]],Citadel:[["Breach-10 Mason","Slug shotgun","82 body / 120 head","105 RPM","0-20m","7 shells"],["Rampart .50","Hand cannon","55 body / 82 head","155 RPM","0-28m","5 rounds"],["Breaker Hammer","Melee","70 quick / 125 heavy","0.45s hit frame","1.9m lunge","Shield crack"]],Vanguard:[["V-30 Pointman","Assault rifle","28 body / 41 head","640 RPM","10-38m","32 rounds"],["Guard-12","Tactical sidearm","32 body / 48 head","360 RPM","0-20m","12 rounds"],["Combat Kukri","Melee","52 quick / 98 heavy","0.32s hit frame","2.2m lunge","Flash resist"]],Condor:[["Talon-5 Carbine","Light carbine","25 body / 37 head","780 RPM","8-34m","28 rounds"],["Aerie-2","Climb pistol","27 body / 41 head","450 RPM","0-16m","15 rounds"],["Grapple Hook Blade","Melee","48 quick / 90 heavy","0.30s hit frame","2.5m lunge","Air cancel"]],Scarab:[["Khepri-4 AR","Trap rifle","27 body / 40 head","620 RPM","12-44m","30 rounds"],["Scarab Stinger","Dart pistol","22 body / 34 head","500 RPM","0-18m","12 darts"],["Hooked Khopesh","Melee","55 quick / 100 heavy","0.35s hit frame","2.0m lunge","Trap trigger"]],Hammer:[["M60 Atlas","Heavy LMG","31 body / 43 head","560 RPM","14-50m","75 rounds"],["Breaker-8","Sawed sidearm","70 body / 98 head","115 RPM","0-8m","2 shells"],["Breach Sledge","Melee","75 quick / 135 heavy","0.48s hit frame","1.8m lunge","Cover shred"]],Circuit:[["Arc-22 Carbine","Smart carbine","24 body / 36 head","740 RPM","8-36m","30 rounds"],["ShortBus EMP","EMP pistol","18 body / 27 head","600 RPM","0-15m","18 rounds"],["Livewire Baton","Melee","45 quick / 85 heavy","0.30s hit frame","2.1m lunge","Cooldown zap"]],Veloce:[["VX-11 Sprint","Duel SMG","20 body / 30 head","920 RPM","0-24m","36 rounds"],["Stiletto-7","Fast pistol","26 body / 39 head","540 RPM","0-16m","17 rounds"],["Carbon Stiletto","Melee","44 quick / 82 heavy","0.24s hit frame","2.6m lunge","Duel reset"]],Lockjaw:[["Clamp-40 DMR","Anti-mobility DMR","48 body / 72 head","260 RPM","18-56m","16 rounds"],["Snare-9","Tether pistol","24 body / 36 head","460 RPM","0-18m","15 rounds"],["Jaw Trap Blade","Melee","54 quick / 100 heavy","0.34s hit frame","2.0m lunge","Dash snare"]],Rift:[["Trail-6 Scout","Scout rifle","42 body / 63 head","300 RPM","18-58m","18 rounds"],["Path-12 Compact","Trail pistol","29 body / 44 head","410 RPM","0-20m","14 rounds"],["Rift Machete","Melee","55 quick / 102 heavy","0.33s hit frame","2.3m lunge","Mantle boost"]],Null:[["Blackout-13","Suppressed DMR","45 body / 68 head","280 RPM","16-54m","15 rounds"],["Void-5","Jammer pistol","21 body / 32 head","620 RPM","0-14m","20 rounds"],["Null Spike","Melee","47 quick / 90 heavy","0.30s hit frame","2.2m lunge","Sensor blank"]],Forge:[["Anvil-27 AR","Engineer rifle","27 body / 40 head","650 RPM","10-40m","34 rounds"],["Rivet-3","Nail sidearm","35 body / 52 head","300 RPM","0-20m","9 rounds"],["Forge Wrench","Melee","58 quick / 108 heavy","0.36s hit frame","2.0m lunge","Repair denial"]]};function OR(o,t,i,r){const l=o*(1-r)+40*r,d=(Math.ceil(i/l)-1)*60/t;return Math.max(d,.08).toFixed(2)}function No(o,t,i=88){const r=Math.abs((o-t+540)%360-180);return Math.max(0,1-r/i)}function O_(o){const t=o.replace("#","");return t==="operators"||t==="enemies"||t==="transport"||t==="scenes"||t==="simulation"||t==="systems"||t==="combat"?t:"home"}function PR(o){const t=o.role.split(" ")[0]??"Adaptive",i=o.heritage.split(/[\s-]/)[0]??"Global",r=o.specialization.split(",")[0].replace(".","");return[t,i,r,o.gender==="Female"?"Precision-led":"Pressure-ready"]}function zR(){const[o,t]=Kt.useState(()=>O_(window.location.hash)),[i,r]=Kt.useState(D_[0]),[l,u]=Kt.useState(50),[d,h]=Kt.useState(35),[m,p]=Kt.useState(0),[y,x]=Kt.useState("All"),[S,M]=Kt.useState(Ti[0].id),[R,C]=Kt.useState(Fa[0].id),[b,_]=Kt.useState(Ia[0].id),k=Kt.useRef(null),P=Kt.useRef(null),[L,j]=Kt.useState({angle:0,glareX:50,glareY:35,rotateX:0}),G=Kt.useRef(0),I=Kt.useMemo(()=>OR(27,720,100+l,d/100),[l,d]),J=100+l,A=ea[m],D=L_[A.codename],F=["Vector","Bulwark","Kitsune","Siren"],fe=[A,...ea.filter(B=>B.codename!==A.codename&&F.includes(B.codename))].slice(0,4).map(B=>({art:L_[B.codename],codename:B.codename,name:B.name})),ce=N_[A.codename]??N_.Vector,ue=U_[A.codename]??U_.Vector,me=Ti.find(B=>B.id===S)??Ti[0],U=Fa.find(B=>B.id===R)??Fa[0],W=Ia.find(B=>B.id===b)??Ia[0],q=y==="All"?Ti:Ti.filter(B=>B.enemyClass===y),oe=Kt.useMemo(()=>D_.map(B=>({...B,name:B.type==="Ultimate"?`Overclock ${A.codename}`:B.name,purpose:B.type==="Ultimate"?`10s ${A.role.toLowerCase()} tempo spike tuned for ${A.specialization.toLowerCase()}`:B.purpose.replace("entry, chase, and escape chains",`${A.role.toLowerCase()} execution windows`),vfx:B.type==="Ultimate"?`${A.codename} suit lines intensify with role-colored movement trails and a clean activation pulse.`:B.vfx})),[A]),de=oe.find(B=>B.keyboard===i.keyboard&&B.controller===i.controller)??oe[0],N=(L.angle%360+360)%360,ee=Math.max(No(N,90),No(N,270)),be=N>180?-1:1,Ae={"--back-opacity":`${No(N,180)}`,"--front-opacity":`${Math.max(No(N,0),No(N,360))}`,"--glare-x":`${L.glareX}%`,"--glare-y":`${L.glareY}%`,"--side-opacity":`${ee}`,"--side-scale":`${be}`,"--turn-angle":`${L.angle}deg`,"--rotate-x":`${L.rotateX}deg`};function Q(B){t(B),window.history.replaceState(null,"",`#${B}`),window.scrollTo({top:0,behavior:"smooth"})}function xe(B){if(x(B),B!=="All"&&me.enemyClass!==B){const Le=Ti.find(Ne=>Ne.enemyClass===B);Le&&M(Le.id)}}function _e(B){C(B),window.requestAnimationFrame(()=>{var Le,Ne;(Le=k.current)==null||Le.focus({preventScroll:!0}),(Ne=k.current)==null||Ne.scrollIntoView({behavior:"smooth",block:"start"})})}function ke(B){_(B),window.requestAnimationFrame(()=>{var Le,Ne;(Le=P.current)==null||Le.focus({preventScroll:!0}),(Ne=P.current)==null||Ne.scrollIntoView({behavior:"smooth",block:"start"})})}function Oe(B){const Le=(B+ea.length)%ea.length;p(Le),j({angle:0,glareX:50,glareY:35,rotateX:0})}function Je(B){p(Le=>(Le+B+ea.length)%ea.length),j({angle:0,glareX:50,glareY:35,rotateX:0})}Kt.useEffect(()=>{function B(Le){(Le.key==="ArrowRight"||Le.key==="ArrowDown")&&(Le.preventDefault(),Je(1)),(Le.key==="ArrowLeft"||Le.key==="ArrowUp")&&(Le.preventDefault(),Je(-1)),Le.key==="Home"&&(Le.preventDefault(),Oe(0))}return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[]),Kt.useEffect(()=>{function B(){t(O_(window.location.hash)),window.scrollTo({top:0,behavior:"smooth"})}return window.addEventListener("hashchange",B),()=>window.removeEventListener("hashchange",B)},[]),Kt.useEffect(()=>{let B=0;function Le(){var Ie,at;const[Ne]=navigator.getGamepads?navigator.getGamepads():[],mt=performance.now();if(Ne&&mt-G.current>260){const Wt=Ne.axes[0]??0,qt=((Ie=Ne.buttons[14])==null?void 0:Ie.pressed)||Wt<-.65;((at=Ne.buttons[15])==null?void 0:at.pressed)||Wt>.65?(Je(1),G.current=mt):qt&&(Je(-1),G.current=mt)}B=requestAnimationFrame(Le)}return B=requestAnimationFrame(Le),()=>cancelAnimationFrame(B)},[]);function Dt(B){const Le=B.currentTarget.getBoundingClientRect(),Ne=(B.clientX-Le.left)/Le.width,mt=(B.clientY-Le.top)/Le.height,Ie=mt-.5;j({angle:Math.round(Ne*360),glareX:Math.round(Ne*100),glareY:Math.round(mt*100),rotateX:Number((-Ie*10).toFixed(2))})}function lt(){j(B=>({...B,glareX:50,glareY:35,rotateX:0}))}function H(B){j({angle:B,glareX:Math.round(B/360*100),glareY:35,rotateX:0})}const ut=g.jsxs("nav",{className:"operator-rail",id:o==="operators"?"operators":`${o}-operators`,"aria-label":"Quick operator selection",children:[g.jsxs("div",{className:"operator-rail-header",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Operator select"}),g.jsxs("strong",{children:[ea.length," playable characters"]})]}),g.jsx("span",{children:"Click, arrows, or controller"})]}),g.jsx("div",{className:"operator-rail-list",children:ea.map((B,Le)=>g.jsxs("button",{"aria-current":Le===m?"true":void 0,className:Le===m?"operator-pill active":"operator-pill",onClick:()=>Oe(Le),type:"button",children:[g.jsx("span",{className:"operator-pill-flag",children:B.flag}),g.jsxs("span",{className:"operator-pill-copy",children:[g.jsx("strong",{children:B.codename}),g.jsx("small",{children:B.name})]})]},`rail-${B.codename}-${B.name}`))})]});return g.jsxs("main",{className:"app-shell",children:[g.jsxs("header",{className:"game-topbar","aria-label":"AION Prime navigation",children:[g.jsxs("button",{className:"game-brand",onClick:()=>Q("home"),type:"button","aria-label":"AION Prime home",children:[g.jsx("span",{children:"AION"}),g.jsx("strong",{children:"Prime"})]}),g.jsxs("nav",{className:"game-nav","aria-label":"Page sections",children:[g.jsx("button",{"aria-current":o==="home"?"page":void 0,onClick:()=>Q("home"),type:"button",children:"Home"}),g.jsx("button",{"aria-current":o==="operators"?"page":void 0,onClick:()=>Q("operators"),type:"button",children:"Operators"}),g.jsx("button",{"aria-current":o==="enemies"?"page":void 0,onClick:()=>Q("enemies"),type:"button",children:"Enemy Forces"}),g.jsx("button",{"aria-current":o==="transport"?"page":void 0,onClick:()=>Q("transport"),type:"button",children:"Transport"}),g.jsx("button",{"aria-current":o==="scenes"?"page":void 0,onClick:()=>Q("scenes"),type:"button",children:"Combat Scenes"}),g.jsx("button",{"aria-current":o==="simulation"?"page":void 0,onClick:()=>Q("simulation"),type:"button",children:"Simulation"}),g.jsx("button",{"aria-current":o==="systems"?"page":void 0,onClick:()=>Q("systems"),type:"button",children:"Systems"}),g.jsx("button",{"aria-current":o==="combat"?"page":void 0,onClick:()=>Q("combat"),type:"button",children:"Combat Systems"})]})]}),o==="home"&&g.jsxs("section",{className:"game-home",id:"home",style:{"--home-bg":`url(${Pc})`},children:[g.jsxs("div",{className:"game-home-copy",children:[g.jsx("p",{className:"eyebrow",children:"AAA tactical AI FPS"}),g.jsx("h1",{children:"AION Prime"}),g.jsx("p",{className:"game-home-subtitle",children:"Lead a global roster of Prime operators into adaptive combat zones where vehicle cover, squad timing, battlefield AI, and high-skill movement decide every fight."}),g.jsxs("div",{className:"hero-cta-row","aria-label":"AION Prime home actions",children:[g.jsx("button",{className:"primary-cta enter-game-cta",onClick:()=>Q("operators"),type:"button",children:"Enter game"}),g.jsx("button",{className:"secondary-cta",onClick:()=>Q("simulation"),type:"button",children:"Preview combat scene"})]}),g.jsxs("div",{className:"home-feature-grid","aria-label":"AION Prime feature pillars",children:[g.jsxs("article",{children:[g.jsx("span",{children:"01"}),g.jsx("strong",{children:"Prime roster"}),g.jsx("p",{children:"21 global operators with role-specific weapons, flags, and readable combat identities."})]}),g.jsxs("article",{children:[g.jsx("span",{children:"02"}),g.jsx("strong",{children:"Vehicle warfare"}),g.jsx("p",{children:"Mounted-gun combat vehicles shape lanes, cover choices, and tactical pressure."})]}),g.jsxs("article",{children:[g.jsx("span",{children:"03"}),g.jsx("strong",{children:"Engineer ready"}),g.jsx("p",{children:"Movement, abilities, networking, animation, and balancing details built for review."})]})]})]}),g.jsxs("div",{className:"game-home-panel","aria-label":"AION Prime launch telemetry",children:[g.jsx("span",{children:"Current operation"}),g.jsx("strong",{children:"Hangar breach"}),g.jsx("p",{children:"Enter the operator page, select a Prime unit, inspect the 360 kit, then move into the live scene."}),g.jsxs("dl",{children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Operators"}),g.jsx("dd",{children:ea.length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Scene"}),g.jsx("dd",{children:"Live"})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Build"}),g.jsx("dd",{children:"UE5-ready"})]})]})]})]}),o==="operators"&&g.jsxs(g.Fragment,{children:[ut,g.jsxs("section",{className:"hero",style:{"--hero-bg":`url(${Bo})`},children:[g.jsxs("div",{className:"hero-copy",children:[g.jsx("p",{className:"eyebrow",children:"Character overview"}),g.jsxs("div",{className:"hero-title-row",children:[g.jsx("h1",{children:A.name}),g.jsx("span",{children:A.codename})]}),g.jsxs("p",{className:"subtitle",children:[A.flag," ",A.country," origin / ",A.heritage," /"," ",A.role]}),g.jsxs("p",{className:"hero-overview",children:[A.specialization," Built for a modern Unreal Engine 5 multiplayer shooter with readable silhouette, fast combat decisions, and responsive 360 inspection."]}),g.jsxs("div",{className:"featured-prime-card","aria-label":"Selected operator overview",children:[g.jsxs("span",{children:[A.flag," ",A.country]}),g.jsxs("strong",{children:[A.name," / ",A.codename]}),g.jsxs("p",{children:[A.heritage," / ",A.role," / ",A.specialization]})]})]}),g.jsxs("div",{className:"operator-visual","aria-label":`Interactive 3D ${A.codename} character visualization`,onPointerLeave:lt,onPointerMove:Dt,style:Ae,children:[g.jsxs("div",{className:"turntable-hud",children:[g.jsx("span",{children:"360 turntable"}),g.jsxs("strong",{children:[L.angle," deg"]})]}),g.jsx("div",{className:"weapon-stack","aria-label":`${A.codename} weapon loadout`,children:ce.map(([B,Le,Ne,mt])=>g.jsxs("article",{className:"weapon-stack-item",children:[g.jsx("div",{className:"weapon-silhouette","aria-hidden":"true",children:g.jsx("span",{})}),g.jsxs("div",{children:[g.jsx("small",{children:Le}),g.jsx("strong",{children:B}),g.jsxs("p",{children:[Ne," / ",mt]})]})]},`visual-${B}`))}),g.jsx("div",{className:"soldier-stage",children:g.jsxs("div",{className:"real-character-turntable","aria-label":`Realistic ${A.name} character viewer`,children:[g.jsx("img",{className:"character-view front-view",src:D.front,alt:`${A.name} front view`}),g.jsx("img",{className:"character-view side-view",src:D.side,alt:`${A.name} side view`}),g.jsx("img",{className:"character-view back-view",src:D.back,alt:`${A.name} back view`}),g.jsx("div",{className:"turntable-floor"}),g.jsx("div",{className:"view-marker front-marker",children:"Front"}),g.jsx("div",{className:"view-marker side-marker",children:"Side"}),g.jsx("div",{className:"view-marker back-marker",children:"Back"})]})}),g.jsx("div",{className:"turntable-track","aria-hidden":"true",children:g.jsx("span",{})}),g.jsxs("label",{className:"turntable-control",children:["Rotate ",A.codename,g.jsx("input",{type:"range",min:"0",max:"360",value:L.angle,onChange:B=>H(Number(B.target.value)),onInput:B=>H(Number(B.currentTarget.value))})]})]})]}),g.jsxs("section",{className:"metrics-strip","aria-label":"Core balancing metrics",children:[g.jsxs("div",{children:[g.jsx("span",{children:"Health"}),g.jsx("strong",{children:"100"})]}),g.jsxs("div",{children:[g.jsx("span",{children:"Armor"}),g.jsx("strong",{children:l})]}),g.jsxs("div",{children:[g.jsx("span",{children:"Effective HP"}),g.jsx("strong",{children:J})]}),g.jsxs("div",{children:[g.jsx("span",{children:"Avg TTK"}),g.jsxs("strong",{children:[I,"s"]})]})]})]}),o==="enemies"&&g.jsxs(g.Fragment,{children:[g.jsxs("section",{className:"enemy-command-header",id:"enemies",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"AION hostile index"}),g.jsx("h1",{children:"Enemy Forces"})]}),g.jsxs("dl",{className:"enemy-command-stats","aria-label":"Enemy force counts",children:[g.jsxs("div",{children:[g.jsx("dt",{children:"All"}),g.jsx("dd",{children:Ti.length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Henchmen"}),g.jsx("dd",{children:Ti.filter(B=>B.enemyClass==="Henchman").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Drones"}),g.jsx("dd",{children:Ti.filter(B=>B.enemyClass==="Drone").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Cyborgs"}),g.jsx("dd",{children:Ti.filter(B=>B.enemyClass==="Cyborg").length})]})]})]}),g.jsxs("section",{className:"enemy-browser","aria-label":"AION Prime enemy force browser",children:[g.jsxs("aside",{className:"enemy-selector",children:[g.jsxs("div",{className:"enemy-selector-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Threat roster"}),g.jsx("h2",{children:"Combat units"})]}),g.jsx("strong",{children:q.length})]}),g.jsx("div",{className:"enemy-filter","aria-label":"Filter enemy units",children:["All","Henchman","Drone","Cyborg"].map(B=>g.jsx("button",{"aria-pressed":y===B,onClick:()=>xe(B),type:"button",children:B==="All"?"All units":`${B}s`},B))}),g.jsx("div",{className:"enemy-force-list",children:q.map(B=>g.jsxs("button",{"aria-pressed":me.id===B.id,className:"enemy-force-option",onClick:()=>M(B.id),type:"button",children:[g.jsx("span",{className:"enemy-force-thumb",children:g.jsx("img",{alt:"",src:B.image})}),g.jsxs("span",{className:"enemy-force-option-copy",children:[g.jsx("small",{children:B.designation}),g.jsx("strong",{children:B.name}),g.jsxs("span",{children:[B.enemyClass," / ",B.role]})]}),g.jsx("i",{className:`enemy-level threat-${B.threat.toLowerCase()}`,"aria-label":`${B.threat} threat`})]},B.id))})]}),g.jsxs("article",{className:"enemy-force-viewer","aria-live":"polite",children:[g.jsxs("div",{className:"enemy-force-visual",children:[g.jsx("img",{alt:`${me.name} combat unit`,src:me.image}),g.jsxs("div",{className:"enemy-force-overlay",children:[g.jsx("span",{className:"enemy-class",children:me.enemyClass}),g.jsxs("span",{className:`enemy-threat threat-${me.threat.toLowerCase()}`,children:[me.threat," threat"]})]}),g.jsxs("div",{className:"enemy-force-identity",children:[g.jsx("small",{children:me.designation}),g.jsx("h2",{children:me.name}),g.jsx("strong",{children:me.role})]})]}),g.jsxs("div",{className:"enemy-force-details",children:[g.jsx("p",{children:me.description}),g.jsxs("dl",{children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Armament"}),g.jsx("dd",{children:me.armament})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Behavior"}),g.jsx("dd",{children:me.behavior})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Counterplay"}),g.jsx("dd",{children:me.weakness})]})]})]})]})]})]}),o==="transport"&&g.jsxs(g.Fragment,{children:[g.jsxs("section",{className:"transport-command-header",id:"transport",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Operator mobility fleet"}),g.jsx("h1",{children:"Transport"})]}),g.jsxs("dl",{className:"transport-command-stats","aria-label":"Transport fleet counts",children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Total"}),g.jsx("dd",{children:Fa.length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Aerial"}),g.jsx("dd",{children:Fa.filter(B=>B.transportClass==="Aerial").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Ground"}),g.jsx("dd",{children:Fa.filter(B=>B.transportClass==="Ground").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Selected"}),g.jsx("dd",{children:U.transportClass})]})]})]}),g.jsxs("section",{className:"transport-browser","aria-label":"AION Prime operator transport browser",children:[g.jsxs("aside",{className:"transport-selector",children:[g.jsxs("div",{className:"transport-selector-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Fleet roster"}),g.jsx("h2",{children:"Transport platforms"})]}),g.jsx("strong",{children:Fa.length})]}),g.jsx("div",{className:"transport-force-list",children:Fa.map(B=>g.jsxs("button",{"aria-pressed":U.id===B.id,"aria-controls":"transport-viewer",className:"transport-force-option",onClick:()=>_e(B.id),type:"button",children:[g.jsx("span",{className:"transport-force-thumb",children:g.jsx("img",{alt:"",src:B.image})}),g.jsxs("span",{className:"transport-force-option-copy",children:[g.jsx("small",{children:B.designation}),g.jsx("strong",{children:B.name}),g.jsxs("span",{children:[B.transportClass," / ",B.role]})]}),g.jsx("span",{className:"transport-force-action",children:"View"})]},B.id))})]}),g.jsxs("article",{className:"transport-force-viewer",id:"transport-viewer",ref:k,tabIndex:-1,"aria-live":"polite",children:[g.jsxs("div",{className:"transport-force-visual",children:[g.jsx("img",{alt:`${U.name} operator transport`,src:U.image}),g.jsxs("div",{className:"transport-force-overlay",children:[g.jsx("span",{className:"transport-class",children:U.transportClass}),g.jsx("span",{children:U.capacity})]}),g.jsxs("div",{className:"transport-force-identity",children:[g.jsx("small",{children:U.designation}),g.jsx("h2",{children:U.name}),g.jsx("strong",{children:U.role})]})]}),g.jsxs("div",{className:"transport-force-details",children:[g.jsx("p",{children:U.operatorUse}),g.jsxs("dl",{children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Speed"}),g.jsx("dd",{children:U.speed})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Terrain"}),g.jsx("dd",{children:U.terrain})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Deployment"}),g.jsx("dd",{children:U.deployment})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Protection"}),g.jsx("dd",{children:U.protection})]})]})]})]})]})]}),o==="scenes"&&g.jsxs(g.Fragment,{children:[g.jsxs("section",{className:"scene-command-header",id:"scenes",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"UE5 map production plan"}),g.jsx("h1",{children:"Combat Scenes"}),g.jsx("p",{children:"Realistic target: 12 combat scenes total, with 4 built first as the playable UE5 vertical slice."})]}),g.jsxs("dl",{className:"scene-command-stats","aria-label":"Combat scene production counts",children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Total maps"}),g.jsx("dd",{children:Ia.length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"First playable"}),g.jsx("dd",{children:Ia.filter(B=>B.priority==="Playable Slice").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Launch core"}),g.jsx("dd",{children:Ia.filter(B=>B.priority==="Launch Core").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Expansion"}),g.jsx("dd",{children:Ia.filter(B=>B.priority==="Expansion Ready").length})]})]})]}),g.jsxs("section",{className:"scene-browser","aria-label":"AION Prime combat scene browser",children:[g.jsxs("aside",{className:"scene-selector",children:[g.jsxs("div",{className:"scene-selector-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Scene roster"}),g.jsx("h2",{children:"12 UE5-ready maps"})]}),g.jsx("strong",{children:"12"})]}),g.jsxs("div",{className:"scene-production-note",children:[g.jsx("strong",{children:"Build order"}),g.jsx("p",{children:"Block out the 4 playable-slice maps first, then reuse their modular kits, AI rules, and streaming budgets across the remaining 8."})]}),g.jsx("div",{className:"scene-list",children:Ia.map(B=>g.jsxs("button",{"aria-controls":"scene-viewer","aria-pressed":W.id===B.id,className:"scene-option",onClick:()=>ke(B.id),style:{"--scene-accent":B.accent},type:"button",children:[g.jsx("span",{className:"scene-code",children:B.code}),g.jsxs("span",{className:"scene-option-copy",children:[g.jsx("small",{children:B.priority}),g.jsx("strong",{children:B.name}),g.jsxs("span",{children:[B.biome," / ",B.mode]})]}),g.jsx("span",{className:"scene-option-action",children:"View"})]},B.id))})]}),g.jsxs("article",{className:"scene-viewer",id:"scene-viewer",ref:P,style:{"--scene-bg":`url(${W.image})`,"--scene-accent":W.accent},tabIndex:-1,"aria-live":"polite",children:[g.jsxs("div",{className:"scene-visual",children:[g.jsx("img",{alt:`${W.name} production reference`,src:W.image}),g.jsxs("div",{className:"scene-visual-overlay",children:[g.jsx("span",{children:W.code}),g.jsx("span",{children:W.priority})]}),g.jsxs("div",{className:"scene-identity",children:[g.jsx("small",{children:W.biome}),g.jsx("h2",{children:W.name}),g.jsx("strong",{children:W.mode})]})]}),g.jsxs("div",{className:"scene-details",children:[g.jsx("p",{children:W.objective}),g.jsxs("div",{className:"scene-detail-grid",children:[g.jsxs("article",{children:[g.jsx("span",{children:"Scale"}),g.jsx("strong",{children:W.scale})]}),g.jsxs("article",{children:[g.jsx("span",{children:"Traversal"}),g.jsx("strong",{children:W.traversal})]}),g.jsxs("article",{children:[g.jsx("span",{children:"Vehicles"}),g.jsx("strong",{children:W.vehicles})]}),g.jsxs("article",{children:[g.jsx("span",{children:"AI Forces"}),g.jsx("strong",{children:W.aiForces})]})]}),g.jsxs("div",{className:"scene-ue5-grid","aria-label":`${W.name} UE5 preparation`,children:[g.jsxs("article",{children:[g.jsx("span",{children:"UE5 Setup"}),g.jsx("p",{children:W.ue5Prep})]}),g.jsxs("article",{children:[g.jsx("span",{children:"Streaming"}),g.jsx("p",{children:W.streaming})]}),g.jsxs("article",{children:[g.jsx("span",{children:"Performance"}),g.jsx("p",{children:W.perfBudget})]}),g.jsxs("article",{children:[g.jsx("span",{children:"Art Direction"}),g.jsx("p",{children:W.artDirection})]})]})]})]})]})]}),o==="simulation"&&g.jsx(o1,{codename:A.codename,operatorName:A.name,role:A.role,weapons:ce,characterArt:D,squad:fe}),o==="systems"&&g.jsxs(g.Fragment,{children:[ut,g.jsxs("section",{className:"two-column",children:[g.jsxs("article",{className:"panel overview-panel",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Character overview"}),g.jsxs("h2",{children:[A.flag," ",A.name,", codename ",A.codename]})]}),g.jsxs("p",{children:[A.name," is a ",A.heritage," ",A.role.toLowerCase()," operator from ",A.flag," ",A.country,". ",A.specialization," The systems profile below updates this operator's movement expectations, bindings, abilities, weapons, and engineering review surface."]}),g.jsx("div",{className:"trait-grid",children:PR(A).map(B=>g.jsx("span",{children:B},B))})]}),g.jsxs("article",{className:"panel tuning-panel",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Live balance sandbox"}),g.jsx("h2",{children:"TTK tuning assumptions"})]}),g.jsxs("label",{children:["Armor value",g.jsx("input",{type:"range",min:"0",max:"100",step:"5",value:l,onChange:B=>u(Number(B.target.value))})]}),g.jsxs("label",{children:["Headshot accuracy",g.jsx("input",{type:"range",min:"0",max:"75",step:"5",value:d,onChange:B=>h(Number(B.target.value))})]}),g.jsxs("p",{children:[ce[0][0]," weighted TTK against ",J," HP at ",d,"% headshot rate:"," ",g.jsxs("strong",{children:[I,"s"]})]})]})]}),g.jsxs("section",{className:"section-block",id:"systems",children:[g.jsxs("div",{className:"section-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Core movement systems"}),g.jsx("h2",{children:"Responsiveness first, animation clean second, never animation last"})]}),g.jsxs("p",{className:"section-note",children:["These are shared FPS rules. ",A.codename,"'s unique movement layer is tuned below."]})]}),g.jsx("div",{className:"movement-grid",children:DR.map(([B,Le,Ne])=>g.jsxs("article",{className:"system-card",children:[g.jsx("span",{children:Le}),g.jsx("h3",{children:B}),g.jsx("p",{children:Ne})]},B))})]}),g.jsxs("section",{className:"section-block mobility-signature-section",children:[g.jsxs("div",{className:"section-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Character mobility signature"}),g.jsxs("h2",{children:[A.codename," moves differently from the shared baseline"]})]}),g.jsx("p",{className:"section-note",children:"Per-operator tuning adds mastery without breaking the universal controller feel."})]}),g.jsx("div",{className:"mobility-signature-grid",children:ue.map(([B,Le,Ne])=>g.jsxs("article",{className:"mobility-signature-card",children:[g.jsx("span",{children:Le}),g.jsx("h3",{children:B}),g.jsx("p",{children:Ne})]},`${A.codename}-${B}`))})]}),g.jsxs("section",{className:"section-block input-section",children:[g.jsxs("div",{className:"section-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Input and abilities"}),g.jsxs("h2",{children:["Explicit action bindings for ",A.codename]})]}),g.jsx("p",{className:"section-note",children:"Shared movement inputs stay universal; abilities change behavior per operator while keeping the same tactical button layout."})]}),g.jsxs("div",{className:"input-layout",children:[g.jsxs("article",{className:"panel ability-bindings-panel",children:[g.jsxs("div",{className:"ability-title",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Selected loadout"}),g.jsx("h3",{children:A.name})]}),g.jsx("strong",{children:A.codename})]}),g.jsx("div",{className:"ability-binding-grid","aria-label":`${A.codename} ability bindings`,children:oe.map(B=>g.jsxs("article",{className:"ability-binding-card",children:[g.jsxs("div",{children:[g.jsx("span",{children:B.type}),g.jsx("h3",{children:B.name}),g.jsx("p",{children:B.purpose})]}),g.jsxs("div",{className:"binding-chips","aria-label":`${B.name} controls`,children:[g.jsxs("span",{children:[g.jsx("small",{children:"Keyboard"}),g.jsx("strong",{children:B.keyboard})]}),g.jsxs("span",{children:[g.jsx("small",{children:"Controller"}),g.jsx("strong",{children:B.controller})]}),g.jsxs("span",{children:[g.jsx("small",{children:"Cooldown"}),g.jsx("strong",{children:B.cooldown})]})]})]},`binding-${B.name}`))})]}),g.jsxs("article",{className:"input-map-panel",children:[g.jsxs("div",{className:"input-map-row input-map-header",role:"row",children:[g.jsx("span",{children:"Action"}),g.jsx("span",{children:"Keyboard"}),g.jsx("span",{children:"Controller"}),g.jsx("span",{children:"Engineering behavior"})]}),CR.map(([B,Le,Ne,mt])=>g.jsxs("div",{className:"input-map-row",role:"row",children:[g.jsx("span",{children:B}),g.jsx("kbd",{children:Le}),g.jsx("kbd",{children:Ne}),g.jsx("p",{children:mt})]},B))]})]})]})]}),o==="combat"&&g.jsxs(g.Fragment,{children:[ut,g.jsx("section",{className:"section-block combat-page-header",id:"combat",children:g.jsxs("div",{className:"section-heading",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Combat Systems"}),g.jsxs("h2",{children:[A.flag," ",A.codename," combat package"]})]}),g.jsx("p",{className:"section-note",children:"Weapons, active abilities, animation surfaces, feedback rules, networking notes, and team-play balance update from the selected operator."})]})}),g.jsxs("section",{className:"section-block",children:[g.jsxs("div",{className:"section-heading",children:[g.jsx("p",{className:"eyebrow",children:"Combat systems"}),g.jsxs("h2",{children:[A.codename," weapons tuned for ",A.role.toLowerCase()]})]}),g.jsxs("div",{className:"weapon-table",role:"table","aria-label":"Weapon specifications",children:[g.jsxs("div",{className:"weapon-row weapon-header",role:"row",children:[g.jsx("span",{children:"Name"}),g.jsx("span",{children:"Role"}),g.jsx("span",{children:"Damage"}),g.jsx("span",{children:"Fire rate"}),g.jsx("span",{children:"Range"}),g.jsx("span",{children:"Handling"})]}),ce.map(B=>g.jsx("div",{className:"weapon-row",role:"row",children:B.map(Le=>g.jsx("span",{children:Le},Le))},B[0]))]})]}),g.jsxs("section",{className:"section-block",children:[g.jsxs("div",{className:"section-heading",children:[g.jsx("p",{className:"eyebrow",children:"Special abilities"}),g.jsxs("h2",{children:[A.codename," ability implementation cards"]})]}),g.jsxs("div",{className:"ability-layout",children:[g.jsx("div",{className:"ability-list",role:"tablist","aria-label":`${A.codename} abilities`,children:oe.map(B=>g.jsxs("button",{className:B.name===de.name?"ability-tab active":"ability-tab",type:"button",onClick:()=>r(B),children:[g.jsx("span",{children:B.type}),B.name]},B.name))}),g.jsxs("article",{className:"panel ability-detail",children:[g.jsxs("div",{className:"ability-title",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:de.type}),g.jsx("h3",{children:de.name})]}),g.jsx("strong",{children:de.cooldown})]}),g.jsxs("dl",{children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Input binding"}),g.jsxs("dd",{children:["Keyboard ",de.keyboard," / Controller ",de.controller]})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Gameplay purpose"}),g.jsx("dd",{children:de.purpose})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Counterplay"}),g.jsx("dd",{children:de.counterplay})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Visual effects"}),g.jsx("dd",{children:de.vfx})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Audio feedback"}),g.jsx("dd",{children:de.audio})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Networking"}),g.jsx("dd",{children:de.network})]})]})]})]})]}),g.jsxs("section",{className:"two-column",children:[g.jsxs("article",{className:"panel",children:[g.jsx("p",{className:"eyebrow",children:"Animation requirements"}),g.jsx("h2",{children:"State machine surface"}),g.jsx("div",{className:"state-machine",children:LR.map(B=>g.jsx("span",{children:B},B))}),g.jsx("p",{children:"Transition logic prioritizes input response with short blend windows, motion warping for traversal, montage sections for recovery, and additive recoil aligned to weapon camera feedback."})]}),g.jsxs("article",{className:"panel",children:[g.jsx("p",{className:"eyebrow",children:"Combat feel requirements"}),g.jsx("h2",{children:"Feedback stack"}),g.jsxs("ul",{className:"check-list",children:[g.jsx("li",{children:"Distinct armor break, headshot, elimination, and ability-hit confirmations."}),g.jsx("li",{children:"Impulse camera shake capped for target readability and accessibility settings."}),g.jsx("li",{children:"Controller-only rotational aim assist with conservative slowdown windows."}),g.jsx("li",{children:"Layered recoil: camera pitch, weapon bone animation, muzzle climb, and recovery spring."}),g.jsx("li",{children:"Vibration envelopes for auto fire, blocked damage, melee impact, and ultimate activation."})]})]})]}),g.jsxs("section",{className:"section-block engineering-section",children:[g.jsxs("div",{className:"section-heading",children:[g.jsx("p",{className:"eyebrow",children:"Technical gameplay implementation"}),g.jsx("h2",{children:"Lead Gameplay Engineer review"})]}),g.jsx("div",{className:"engineering-grid",children:UR.map(B=>g.jsxs("article",{className:"engineering-card",children:[g.jsx("span",{}),g.jsx("p",{children:B})]},B))})]}),g.jsxs("section",{className:"team-band",children:[g.jsxs("div",{children:[g.jsx("p",{className:"eyebrow",children:"Team play design"}),g.jsx("h2",{children:"Strong pressure, meaningful weaknesses"})]}),g.jsxs("div",{className:"team-grid",children:[g.jsxs("article",{children:[g.jsx("h3",{children:"Strengths"}),g.jsx("p",{children:"Fast entries, aggressive flanks, duel initiation, repositioning, and fight conversion."})]}),g.jsxs("article",{children:[g.jsx("h3",{children:"Weaknesses"}),g.jsx("p",{children:"Limited sustain, exposed recovery after missed breach, weaker at long range, trap-vulnerable."})]}),g.jsxs("article",{children:[g.jsx("h3",{children:"Synergies"}),g.jsx("p",{children:"Pairs with recon, smoke, shield break, suppression, and area-denial teammates."})]}),g.jsxs("article",{children:[g.jsx("h3",{children:"Counter picks"}),g.jsx("p",{children:"Trap specialists, marksmen, anti-mobility kits, stasis fields, and coordinated focus fire."})]})]})]})]})]})}Oy.createRoot(document.getElementById("root")).render(g.jsx(Ay.StrictMode,{children:g.jsx(zR,{})}));
