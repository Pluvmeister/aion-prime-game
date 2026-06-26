(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function wv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var qf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function mS(){if(f_)return Mo;f_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=t,Mo.jsx=i,Mo.jsxs=i,Mo}var d_;function gS(){return d_||(d_=1,qf.exports=mS()),qf.exports}var w=gS(),Yf={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function _S(){if(h_)return at;h_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function _(O,$,Me){this.props=O,this.context=$,this.refs=M,this.updater=Me||A}_.prototype.isReactComponent={},_.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function V(){}V.prototype=_.prototype;function z(O,$,Me){this.props=O,this.context=$,this.refs=M,this.updater=Me||A}var N=z.prototype=new V;N.constructor=z,E(N,_.prototype),N.isPureReactComponent=!0;var X=Array.isArray;function G(){}var I={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function D(O,$,Me){var Te=Me.ref;return{$$typeof:o,type:O,key:$,ref:Te!==void 0?Te:null,props:Me}}function C(O,$){return D(O.type,$,O.props)}function B(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function fe(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Me){return $[Me]})}var le=/\/+/g;function ce(O,$){return typeof O=="object"&&O!==null&&O.key!=null?fe(""+O.key):$.toString(36)}function Se(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(G,G):(O.status="pending",O.then(function($){O.status==="pending"&&(O.status="fulfilled",O.value=$)},function($){O.status==="pending"&&(O.status="rejected",O.reason=$)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,$,Me,Te,J){var _e=typeof O;(_e==="undefined"||_e==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(_e){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case o:case t:ve=!0;break;case x:return ve=O._init,L(ve(O._payload),$,Me,Te,J)}}if(ve)return J=J(O),ve=Te===""?"."+ce(O,0):Te,X(J)?(Me="",ve!=null&&(Me=ve.replace(le,"$&/")+"/"),L(J,$,Me,"",function(et){return et})):J!=null&&(B(J)&&(J=C(J,Me+(J.key==null||O&&O.key===J.key?"":(""+J.key).replace(le,"$&/")+"/")+ve)),$.push(J)),1;ve=0;var Fe=Te===""?".":Te+":";if(X(O))for(var Oe=0;Oe<O.length;Oe++)Te=O[Oe],_e=Fe+ce(Te,Oe),ve+=L(Te,$,Me,_e,J);else if(Oe=y(O),typeof Oe=="function")for(O=Oe.call(O),Oe=0;!(Te=O.next()).done;)Te=Te.value,_e=Fe+ce(Te,Oe++),ve+=L(Te,$,Me,_e,J);else if(_e==="object"){if(typeof O.then=="function")return L(Se(O),$,Me,Te,J);throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Q(O,$,Me){if(O==null)return O;var Te=[],J=0;return L(O,Te,"","",function(_e){return $.call(Me,_e,J++)}),Te}function U(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(Me){(O._status===0||O._status===-1)&&(O._status=1,O._result=Me)},function(Me){(O._status===0||O._status===-1)&&(O._status=2,O._result=Me)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var Z=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ue={map:Q,forEach:function(O,$,Me){Q(O,function(){$.apply(this,arguments)},Me)},count:function(O){var $=0;return Q(O,function(){$++}),$},toArray:function(O){return Q(O,function($){return $})||[]},only:function(O){if(!B(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return at.Activity=v,at.Children=ue,at.Component=_,at.Fragment=i,at.Profiler=l,at.PureComponent=z,at.StrictMode=r,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,at.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},at.cache=function(O){return function(){return O.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(O,$,Me){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Te=E({},O.props),J=O.key;if($!=null)for(_e in $.key!==void 0&&(J=""+$.key),$)!K.call($,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&$.ref===void 0||(Te[_e]=$[_e]);var _e=arguments.length-2;if(_e===1)Te.children=Me;else if(1<_e){for(var ve=Array(_e),Fe=0;Fe<_e;Fe++)ve[Fe]=arguments[Fe+2];Te.children=ve}return D(O.type,J,Te)},at.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},at.createElement=function(O,$,Me){var Te,J={},_e=null;if($!=null)for(Te in $.key!==void 0&&(_e=""+$.key),$)K.call($,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(J[Te]=$[Te]);var ve=arguments.length-2;if(ve===1)J.children=Me;else if(1<ve){for(var Fe=Array(ve),Oe=0;Oe<ve;Oe++)Fe[Oe]=arguments[Oe+2];J.children=Fe}if(O&&O.defaultProps)for(Te in ve=O.defaultProps,ve)J[Te]===void 0&&(J[Te]=ve[Te]);return D(O,_e,J)},at.createRef=function(){return{current:null}},at.forwardRef=function(O){return{$$typeof:h,render:O}},at.isValidElement=B,at.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:U}},at.memo=function(O,$){return{$$typeof:p,type:O,compare:$===void 0?null:$}},at.startTransition=function(O){var $=I.T,Me={};I.T=Me;try{var Te=O(),J=I.S;J!==null&&J(Me,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(G,Z)}catch(_e){Z(_e)}finally{$!==null&&Me.types!==null&&($.types=Me.types),I.T=$}},at.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},at.use=function(O){return I.H.use(O)},at.useActionState=function(O,$,Me){return I.H.useActionState(O,$,Me)},at.useCallback=function(O,$){return I.H.useCallback(O,$)},at.useContext=function(O){return I.H.useContext(O)},at.useDebugValue=function(){},at.useDeferredValue=function(O,$){return I.H.useDeferredValue(O,$)},at.useEffect=function(O,$){return I.H.useEffect(O,$)},at.useEffectEvent=function(O){return I.H.useEffectEvent(O)},at.useId=function(){return I.H.useId()},at.useImperativeHandle=function(O,$,Me){return I.H.useImperativeHandle(O,$,Me)},at.useInsertionEffect=function(O,$){return I.H.useInsertionEffect(O,$)},at.useLayoutEffect=function(O,$){return I.H.useLayoutEffect(O,$)},at.useMemo=function(O,$){return I.H.useMemo(O,$)},at.useOptimistic=function(O,$){return I.H.useOptimistic(O,$)},at.useReducer=function(O,$,Me){return I.H.useReducer(O,$,Me)},at.useRef=function(O){return I.H.useRef(O)},at.useState=function(O){return I.H.useState(O)},at.useSyncExternalStore=function(O,$,Me){return I.H.useSyncExternalStore(O,$,Me)},at.useTransition=function(){return I.H.useTransition()},at.version="19.2.7",at}var p_;function _h(){return p_||(p_=1,Yf.exports=_S()),Yf.exports}var dn=_h();const vS=wv(dn);var Zf={exports:{}},Eo={},Kf={exports:{}},Qf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function xS(){return m_||(m_=1,(function(o){function t(L,Q){var U=L.length;L.push(Q);e:for(;0<U;){var Z=U-1>>>1,ue=L[Z];if(0<l(ue,Q))L[Z]=Q,L[U]=ue,U=Z;else break e}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var Q=L[0],U=L.pop();if(U!==Q){L[0]=U;e:for(var Z=0,ue=L.length,O=ue>>>1;Z<O;){var $=2*(Z+1)-1,Me=L[$],Te=$+1,J=L[Te];if(0>l(Me,U))Te<ue&&0>l(J,Me)?(L[Z]=J,L[Te]=U,Z=Te):(L[Z]=Me,L[$]=U,Z=$);else if(Te<ue&&0>l(J,U))L[Z]=J,L[Te]=U,Z=Te;else break e}}return Q}function l(L,Q){var U=L.sortIndex-Q.sortIndex;return U!==0?U:L.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,v=null,S=3,y=!1,A=!1,E=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var Q=i(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=L)r(p),Q.sortIndex=Q.expirationTime,t(m,Q);else break;Q=i(p)}}function X(L){if(E=!1,N(L),!A)if(i(m)!==null)A=!0,G||(G=!0,fe());else{var Q=i(p);Q!==null&&Se(X,Q.startTime-L)}}var G=!1,I=-1,K=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<K)}function B(){if(M=!1,G){var L=o.unstable_now();D=L;var Q=!0;try{e:{A=!1,E&&(E=!1,V(I),I=-1),y=!0;var U=S;try{t:{for(N(L),v=i(m);v!==null&&!(v.expirationTime>L&&C());){var Z=v.callback;if(typeof Z=="function"){v.callback=null,S=v.priorityLevel;var ue=Z(v.expirationTime<=L);if(L=o.unstable_now(),typeof ue=="function"){v.callback=ue,N(L),Q=!0;break t}v===i(m)&&r(m),N(L)}else r(m);v=i(m)}if(v!==null)Q=!0;else{var O=i(p);O!==null&&Se(X,O.startTime-L),Q=!1}}break e}finally{v=null,S=U,y=!1}Q=void 0}}finally{Q?fe():G=!1}}}var fe;if(typeof z=="function")fe=function(){z(B)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ce=le.port2;le.port1.onmessage=B,fe=function(){ce.postMessage(null)}}else fe=function(){_(B,0)};function Se(L,Q){I=_(function(){L(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(L){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var U=S;S=Q;try{return L()}finally{S=U}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,Q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=S;S=L;try{return Q()}finally{S=U}},o.unstable_scheduleCallback=function(L,Q,U){var Z=o.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Z+U:Z):U=Z,L){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=U+ue,L={id:x++,callback:Q,priorityLevel:L,startTime:U,expirationTime:ue,sortIndex:-1},U>Z?(L.sortIndex=U,t(p,L),i(m)===null&&L===i(p)&&(E?(V(I),I=-1):E=!0,Se(X,U-Z))):(L.sortIndex=ue,t(m,L),A||y||(A=!0,G||(G=!0,fe()))),L},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(L){var Q=S;return function(){var U=S;S=Q;try{return L.apply(this,arguments)}finally{S=U}}}})(Qf)),Qf}var g_;function SS(){return g_||(g_=1,Kf.exports=xS()),Kf.exports}var Jf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function yS(){if(__)return An;__=1;var o=_h();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,x)},An.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):x==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,v=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.7",An}var v_;function MS(){if(v_)return Jf.exports;v_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Jf.exports=yS(),Jf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function ES(){if(x_)return Eo;x_=1;var o=SS(),t=_h(),i=MS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,s=f;break}if(T===s){g=!0,s=c,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=c;break}if(T===s){g=!0,s=f,a=c;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),z=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function fe(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case z:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ce(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return ce(e(n))}catch{}}return null}var Se=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},Z=[],ue=-1;function O(e){return{current:e}}function $(e){0>ue||(e.current=Z[ue],Z[ue]=null,ue--)}function Me(e,n){ue++,Z[ue]=e.current,e.current=n}var Te=O(null),J=O(null),_e=O(null),ve=O(null);function Fe(e,n){switch(Me(_e,n),Me(J,e),Me(Te,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Og(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Og(n),e=Pg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(Te),Me(Te,e)}function Oe(){$(Te),$(J),$(_e)}function et(e){e.memoizedState!==null&&Me(ve,e);var n=Te.current,a=Pg(n,e.type);n!==a&&(Me(J,e),Me(Te,a))}function Nt(e){J.current===e&&($(Te),$(J)),ve.current===e&&($(ve),vo._currentValue=U)}var ut,H;function pt(e){if(ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ut=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ut+e+H}var qe=!1;function ht(e,n){if(!e||qe)return"";qe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(oe){var ae=oe}Reflect.construct(e,[],ge)}else{try{ge.call()}catch(oe){ae=oe}e.call(ge.prototype)}}else{try{throw Error()}catch(oe){ae=oe}(ge=e())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(oe){if(oe&&ae&&typeof oe.stack=="string")return[oe.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var F=g.split(`
`),ne=T.split(`
`);for(c=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;c<ne.length&&!ne[c].includes("DetermineComponentFrameRoot");)c++;if(s===F.length||c===ne.length)for(s=F.length-1,c=ne.length-1;1<=s&&0<=c&&F[s]!==ne[c];)c--;for(;1<=s&&0<=c;s--,c--)if(F[s]!==ne[c]){if(s!==1||c!==1)do if(s--,c--,0>c||F[s]!==ne[c]){var he=`
`+F[s].replace(" at new "," at ");return e.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",e.displayName)),he}while(1<=s&&0<=c);break}}}finally{qe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pt(a):""}function Ke(e,n){switch(e.tag){case 26:case 27:case 5:return pt(e.type);case 16:return pt("Lazy");case 13:return e.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return pt("Activity");default:return""}}function Vt(e){try{var n="",a=null;do n+=Ke(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ie=Object.prototype.hasOwnProperty,rt=o.unstable_scheduleCallback,Qt=o.unstable_cancelCallback,Zt=o.unstable_shouldYield,P=o.unstable_requestPaint,b=o.unstable_now,ie=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,Ee=o.unstable_UserBlockingPriority,de=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,we=o.unstable_IdlePriority,je=o.log,We=o.unstable_setDisableYieldValue,Ae=null,Ce=null;function Ze(e){if(typeof je=="function"&&We(e),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Ae,e)}catch{}}var ze=Math.clz32?Math.clz32:j,Ue=Math.log,st=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(Ue(e)/st|0)|0}var Re=256,De=262144,Be=4194304;function be(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=be(s):(g&=T,g!==0?c=be(g):a||(a=T&~e,a!==0&&(c=be(a))))):(T=s&~f,T!==0?c=be(T):g!==0?c=be(g):a||(a=s&~e,a!==0&&(c=be(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function He(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $n(e,n,a,s,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,F=e.expirationTimes,ne=e.hiddenUpdates;for(a=g&~a;0<a;){var he=31-ze(a),ge=1<<he;T[he]=0,F[he]=-1;var ae=ne[he];if(ae!==null)for(ne[he]=null,he=0;he<ae.length;he++){var oe=ae[he];oe!==null&&(oe.lane&=-536870913)}a&=~ge}s!==0&&Us(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function Us(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-ze(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function xi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-ze(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Mr(e,n){var a=n&-n;return a=(a&42)!==0?1:Er(a),(a&(e.suspendedLanes|n))!==0?0:a}function Er(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function br(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ka(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:a_(e.type))}function Ls(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var Vn=Math.random().toString(36).slice(2),an="__reactFiber$"+Vn,xn="__reactProps$"+Vn,oa="__reactContainer$"+Vn,Ns="__reactEvents$"+Vn,Hc="__reactListeners$"+Vn,Gc="__reactHandles$"+Vn,Xo="__reactResources$"+Vn,Xa="__reactMarker$"+Vn;function R(e){delete e[an],delete e[xn],delete e[Ns],delete e[Hc],delete e[Gc]}function W(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[oa]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Vg(e);e!==null;){if(a=e[an])return a;e=Vg(e)}return n}e=a,a=e.parentNode}return null}function re(e){if(e=e[an]||e[oa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function se(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function q(e){var n=e[Xo];return n||(n=e[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ye(e){e[Xa]=!0}var Le=new Set,Ve={};function Pe(e,n){Qe(e,n),Qe(e+"Capture",n)}function Qe(e,n){for(Ve[e]=n,e=0;e<n.length;e++)Le.add(n[e])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},dt={};function Ut(e){return Ie.call(dt,e)?!0:Ie.call(Je,e)?!1:nt.test(e)?dt[e]=!0:(Je[e]=!0,!1)}function kt(e,n,a){if(Ut(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Lt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function mt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ke(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function bt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Sn(e){if(!e._valueTracker){var n=jt(e)?"checked":"value";e._valueTracker=bt(e,n,""+e[n])}}function Di(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=jt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ja=/[\n"\\]/g;function vt(e){return e.replace(ja,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,s,c,f,g,T){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ke(n)):e.value!==""+ke(n)&&(e.value=""+ke(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?un(e,g,ke(n)):a!=null?un(e,g,ke(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ke(T):e.removeAttribute("name")}function Dn(e,n,a,s,c,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Sn(e);return}a=a!=null?""+ke(a):"",n=n!=null?""+ke(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Sn(e)}function un(e,n,a){n==="number"&&mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ke(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Tr(e,n,a){if(n!=null&&(n=""+ke(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ke(a):""}function Si(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Se(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ke(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Sn(e)}function Ar(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var u0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||u0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Lh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Uh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Uh(e,f,n[f])}function Vc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var f0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),d0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(e){return d0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ui(){}var kc=null;function Xc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rr=null,wr=null;function Nh(e){var n=re(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[xn]||null;if(!c)throw Error(r(90));Tn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Di(s)}break e;case"textarea":Tr(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&en(e,!!a.multiple,n,!1)}}}var jc=!1;function Oh(e,n,a){if(jc)return e(n,a);jc=!0;try{var s=e(n);return s}finally{if(jc=!1,(Rr!==null||wr!==null)&&(Ll(),Rr&&(n=Rr,e=wr,wr=Rr=null,Nh(n),e)))for(n=0;n<e.length;n++)Nh(e[n])}}function Os(e,n){var a=e.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(Li)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Wc=!1}var la=null,qc=null,Wo=null;function Ph(){if(Wo)return Wo;var e,n=qc,a=n.length,s,c="value"in la?la.value:la.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Wo=c.slice(e,1<s?1-s:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function zh(){return!1}function On(e){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:zh,this.isPropagationStopped=zh,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=On(Wa),zs=v({},Wa,{view:0,detail:0}),h0=On(zs),Yc,Zc,Bs,Ko=v({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bs&&(Bs&&e.type==="mousemove"?(Yc=e.screenX-Bs.screenX,Zc=e.screenY-Bs.screenY):Zc=Yc=0,Bs=e),Yc)},movementY:function(e){return"movementY"in e?e.movementY:Zc}}),Bh=On(Ko),p0=v({},Ko,{dataTransfer:0}),m0=On(p0),g0=v({},zs,{relatedTarget:0}),Kc=On(g0),_0=v({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=On(_0),x0=v({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S0=On(x0),y0=v({},Wa,{data:0}),Fh=On(y0),M0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=b0[e])?!!n[e]:!1}function Qc(){return T0}var A0=v({},zs,{key:function(e){if(e.key){var n=M0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?E0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R0=On(A0),w0=v({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ih=On(w0),C0=v({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),D0=On(C0),U0=v({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=On(U0),N0=v({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O0=On(N0),P0=v({},Wa,{newState:0,oldState:0}),z0=On(P0),B0=[9,13,27,32],Jc=Li&&"CompositionEvent"in window,Fs=null;Li&&"documentMode"in document&&(Fs=document.documentMode);var F0=Li&&"TextEvent"in window&&!Fs,Hh=Li&&(!Jc||Fs&&8<Fs&&11>=Fs),Gh=" ",Vh=!1;function kh(e,n){switch(e){case"keyup":return B0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function I0(e,n){switch(e){case"compositionend":return Xh(n);case"keypress":return n.which!==32?null:(Vh=!0,Gh);case"textInput":return e=n.data,e===Gh&&Vh?null:e;default:return null}}function H0(e,n){if(Cr)return e==="compositionend"||!Jc&&kh(e,n)?(e=Ph(),Wo=qc=la=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hh&&n.locale!=="ko"?null:n.data;default:return null}}var G0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!G0[e.type]:n==="textarea"}function Wh(e,n,a,s){Rr?wr?wr.push(s):wr=[s]:Rr=s,n=Il(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Is=null,Hs=null;function V0(e){wg(e,0)}function Qo(e){var n=se(e);if(Di(n))return e}function qh(e,n){if(e==="change")return n}var Yh=!1;if(Li){var $c;if(Li){var eu="oninput"in document;if(!eu){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),eu=typeof Zh.oninput=="function"}$c=eu}else $c=!1;Yh=$c&&(!document.documentMode||9<document.documentMode)}function Kh(){Is&&(Is.detachEvent("onpropertychange",Qh),Hs=Is=null)}function Qh(e){if(e.propertyName==="value"&&Qo(Hs)){var n=[];Wh(n,Hs,e,Xc(e)),Oh(V0,n)}}function k0(e,n,a){e==="focusin"?(Kh(),Is=n,Hs=a,Is.attachEvent("onpropertychange",Qh)):e==="focusout"&&Kh()}function X0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Hs)}function j0(e,n){if(e==="click")return Qo(n)}function W0(e,n){if(e==="input"||e==="change")return Qo(n)}function q0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:q0;function Gs(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ie.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function Jh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $h(e,n){var a=Jh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jh(a)}}function ep(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?ep(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function tp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mn(e.document)}return n}function tu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Y0=Li&&"documentMode"in document&&11>=document.documentMode,Dr=null,nu=null,Vs=null,iu=!1;function np(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;iu||Dr==null||Dr!==mn(s)||(s=Dr,"selectionStart"in s&&tu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Vs&&Gs(Vs,s)||(Vs=s,s=Il(nu,"onSelect"),0<s.length&&(n=new Zo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Dr)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ur={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},au={},ip={};Li&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Ya(e){if(au[e])return au[e];if(!Ur[e])return e;var n=Ur[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ip)return au[e]=n[a];return e}var ap=Ya("animationend"),rp=Ya("animationiteration"),sp=Ya("animationstart"),Z0=Ya("transitionrun"),K0=Ya("transitionstart"),Q0=Ya("transitioncancel"),op=Ya("transitionend"),lp=new Map,ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ru.push("scrollEnd");function ui(e,n){lp.set(e,n),Pe(n,[e])}var Jo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ei=[],Lr=0,su=0;function $o(){for(var e=Lr,n=su=Lr=0;n<e;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&cp(a,c,f)}}function el(e,n,a,s){ei[Lr++]=e,ei[Lr++]=n,ei[Lr++]=a,ei[Lr++]=s,su|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function ou(e,n,a,s){return el(e,n,a,s),tl(e)}function Za(e,n){return el(e,null,null,n),tl(e)}function cp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ze(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function tl(e){if(50<uo)throw uo=0,_f=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Nr={};function J0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,s){return new J0(e,n,a,s)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function up(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nl(e,n,a,s,c,f){var g=0;if(s=e,typeof e=="function")lu(e)&&(g=1);else if(typeof e=="string")g=iS(e,a,Te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Xn(31,a,n,c),e.elementType=D,e.lanes=f,e;case E:return Ka(a.children,c,f,n);case M:g=8,c|=24;break;case _:return e=Xn(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case X:return e=Xn(13,a,n,c),e.elementType=X,e.lanes=f,e;case G:return e=Xn(19,a,n,c),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:g=10;break e;case V:g=9;break e;case N:g=11;break e;case I:g=14;break e;case K:g=16,s=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Xn(g,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Ka(e,n,a,s){return e=Xn(7,e,s,n),e.lanes=a,e}function cu(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function fp(e){var n=Xn(18,null,null,0);return n.stateNode=e,n}function uu(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var dp=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=dp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Vt(n)},dp.set(e,n),n)}return{value:e,source:n,stack:Vt(n)}}var Or=[],Pr=0,il=null,ks=0,ni=[],ii=0,ca=null,yi=1,Mi="";function Oi(e,n){Or[Pr++]=ks,Or[Pr++]=il,il=e,ks=n}function hp(e,n,a){ni[ii++]=yi,ni[ii++]=Mi,ni[ii++]=ca,ca=e;var s=yi;e=Mi;var c=32-ze(s)-1;s&=~(1<<c),a+=1;var f=32-ze(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,yi=1<<32-ze(n)+c|a<<c|s,Mi=f+e}else yi=1<<f|a<<c|s,Mi=e}function fu(e){e.return!==null&&(Oi(e,1),hp(e,1,0))}function du(e){for(;e===il;)il=Or[--Pr],Or[Pr]=null,ks=Or[--Pr],Or[Pr]=null;for(;e===ca;)ca=ni[--ii],ni[ii]=null,Mi=ni[--ii],ni[ii]=null,yi=ni[--ii],ni[ii]=null}function pp(e,n){ni[ii++]=yi,ni[ii++]=Mi,ni[ii++]=ca,yi=n.id,Mi=n.overflow,ca=e}var yn=null,Wt=null,Mt=!1,ua=null,ai=!1,hu=Error(r(519));function fa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xs(ti(n,e)),hu}function mp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[an]=e,n[xn]=s,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)_t(ho[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Dn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Si(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Lg(n.textContent,a)?(s.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),s.onScroll!=null&&_t("scroll",n),s.onScrollEnd!=null&&_t("scrollend",n),s.onClick!=null&&(n.onclick=Ui),n=!0):n=!1,n||fa(e,!0)}function gp(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:yn=yn.return}}function zr(e){if(e!==yn)return!1;if(!Mt)return gp(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Lf(e.type,e.memoizedProps)),a=!a),a&&Wt&&fa(e),gp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=Gg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Wt=Gg(e)}else n===27?(n=Wt,Ta(e.type)?(e=Bf,Bf=null,Wt=e):Wt=n):Wt=yn?si(e.stateNode.nextSibling):null;return!0}function Qa(){Wt=yn=null,Mt=!1}function pu(){var e=ua;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),ua=null),e}function Xs(e){ua===null?ua=[e]:ua.push(e)}var mu=O(null),Ja=null,Pi=null;function da(e,n,a){Me(mu,n._currentValue),n._currentValue=a}function zi(e){e._currentValue=mu.current,$(mu)}function gu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function _u(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var F=0;F<n.length;F++)if(T.context===n[F]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),gu(f.return,a,e),s||(g=null);break e}f=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),gu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Br(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=c.type;kn(c.pendingProps.value,g.value)||(e!==null?e.push(T):e=[T])}}else if(c===ve.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(vo):e=[vo])}c=c.return}e!==null&&_u(n,e,a,s),n.flags|=262144}function al(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){Ja=e,Pi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return _p(Ja,e)}function rl(e,n){return Ja===null&&$a(e),_p(e,n)}function _p(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(e===null)throw Error(r(308));Pi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Pi=Pi.next=n;return a}var $0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ex=o.unstable_scheduleCallback,tx=o.unstable_NormalPriority,rn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vu(){return{controller:new $0,data:new Map,refCount:0}}function js(e){e.refCount--,e.refCount===0&&ex(tx,function(){e.controller.abort()})}var Ws=null,xu=0,Fr=0,Ir=null;function nx(e,n){if(Ws===null){var a=Ws=[];xu=0,Fr=Ef(),Ir={status:"pending",value:void 0,then:function(s){a.push(s)}}}return xu++,n.then(vp,vp),n}function vp(){if(--xu===0&&Ws!==null){Ir!==null&&(Ir.status="fulfilled");var e=Ws;Ws=null,Fr=0,Ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ix(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var xp=L.S;L.S=function(e,n){ng=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&nx(e,n),xp!==null&&xp(e,n)};var er=O(null);function Su(){var e=er.current;return e!==null?e:Xt.pooledCache}function sl(e,n){n===null?Me(er,er.current):Me(er,n.pool)}function Sp(){var e=Su();return e===null?null:{parent:rn._currentValue,pool:e}}var Hr=Error(r(460)),yu=Error(r(474)),ol=Error(r(542)),ll={then:function(){}};function yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ui,Ui),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bp(e),e;default:if(typeof n.status=="string")n.then(Ui,Ui);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,bp(e),e}throw nr=n,Hr}}function tr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(nr=a,Hr):a}}var nr=null;function Ep(){if(nr===null)throw Error(r(459));var e=nr;return nr=null,e}function bp(e){if(e===Hr||e===ol)throw Error(r(483))}var Gr=null,qs=0;function cl(e){var n=qs;return qs+=1,Gr===null&&(Gr=[]),Mp(Gr,e,n)}function Ys(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ul(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Tp(e){function n(Y,k){if(e){var te=Y.deletions;te===null?(Y.deletions=[k],Y.flags|=16):te.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function s(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function c(Y,k){return Y=Ni(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,te){return Y.index=te,e?(te=Y.alternate,te!==null?(te=te.index,te<k?(Y.flags|=67108866,k):te):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function g(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,k,te,me){return k===null||k.tag!==6?(k=cu(te,Y.mode,me),k.return=Y,k):(k=c(k,te),k.return=Y,k)}function F(Y,k,te,me){var $e=te.type;return $e===E?he(Y,k,te.props.children,me,te.key):k!==null&&(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&tr($e)===k.type)?(k=c(k,te.props),Ys(k,te),k.return=Y,k):(k=nl(te.type,te.key,te.props,null,Y.mode,me),Ys(k,te),k.return=Y,k)}function ne(Y,k,te,me){return k===null||k.tag!==4||k.stateNode.containerInfo!==te.containerInfo||k.stateNode.implementation!==te.implementation?(k=uu(te,Y.mode,me),k.return=Y,k):(k=c(k,te.children||[]),k.return=Y,k)}function he(Y,k,te,me,$e){return k===null||k.tag!==7?(k=Ka(te,Y.mode,me,$e),k.return=Y,k):(k=c(k,te),k.return=Y,k)}function ge(Y,k,te){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=cu(""+k,Y.mode,te),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return te=nl(k.type,k.key,k.props,null,Y.mode,te),Ys(te,k),te.return=Y,te;case A:return k=uu(k,Y.mode,te),k.return=Y,k;case K:return k=tr(k),ge(Y,k,te)}if(Se(k)||fe(k))return k=Ka(k,Y.mode,te,null),k.return=Y,k;if(typeof k.then=="function")return ge(Y,cl(k),te);if(k.$$typeof===z)return ge(Y,rl(Y,k),te);ul(Y,k)}return null}function ae(Y,k,te,me){var $e=k!==null?k.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return $e!==null?null:T(Y,k,""+te,me);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case y:return te.key===$e?F(Y,k,te,me):null;case A:return te.key===$e?ne(Y,k,te,me):null;case K:return te=tr(te),ae(Y,k,te,me)}if(Se(te)||fe(te))return $e!==null?null:he(Y,k,te,me,null);if(typeof te.then=="function")return ae(Y,k,cl(te),me);if(te.$$typeof===z)return ae(Y,k,rl(Y,te),me);ul(Y,te)}return null}function oe(Y,k,te,me,$e){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Y=Y.get(te)||null,T(k,Y,""+me,$e);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case y:return Y=Y.get(me.key===null?te:me.key)||null,F(k,Y,me,$e);case A:return Y=Y.get(me.key===null?te:me.key)||null,ne(k,Y,me,$e);case K:return me=tr(me),oe(Y,k,te,me,$e)}if(Se(me)||fe(me))return Y=Y.get(te)||null,he(k,Y,me,$e,null);if(typeof me.then=="function")return oe(Y,k,te,cl(me),$e);if(me.$$typeof===z)return oe(Y,k,te,rl(k,me),$e);ul(k,me)}return null}function Ge(Y,k,te,me){for(var $e=null,Tt=null,Xe=k,lt=k=0,St=null;Xe!==null&&lt<te.length;lt++){Xe.index>lt?(St=Xe,Xe=null):St=Xe.sibling;var At=ae(Y,Xe,te[lt],me);if(At===null){Xe===null&&(Xe=St);break}e&&Xe&&At.alternate===null&&n(Y,Xe),k=f(At,k,lt),Tt===null?$e=At:Tt.sibling=At,Tt=At,Xe=St}if(lt===te.length)return a(Y,Xe),Mt&&Oi(Y,lt),$e;if(Xe===null){for(;lt<te.length;lt++)Xe=ge(Y,te[lt],me),Xe!==null&&(k=f(Xe,k,lt),Tt===null?$e=Xe:Tt.sibling=Xe,Tt=Xe);return Mt&&Oi(Y,lt),$e}for(Xe=s(Xe);lt<te.length;lt++)St=oe(Xe,Y,lt,te[lt],me),St!==null&&(e&&St.alternate!==null&&Xe.delete(St.key===null?lt:St.key),k=f(St,k,lt),Tt===null?$e=St:Tt.sibling=St,Tt=St);return e&&Xe.forEach(function(Da){return n(Y,Da)}),Mt&&Oi(Y,lt),$e}function tt(Y,k,te,me){if(te==null)throw Error(r(151));for(var $e=null,Tt=null,Xe=k,lt=k=0,St=null,At=te.next();Xe!==null&&!At.done;lt++,At=te.next()){Xe.index>lt?(St=Xe,Xe=null):St=Xe.sibling;var Da=ae(Y,Xe,At.value,me);if(Da===null){Xe===null&&(Xe=St);break}e&&Xe&&Da.alternate===null&&n(Y,Xe),k=f(Da,k,lt),Tt===null?$e=Da:Tt.sibling=Da,Tt=Da,Xe=St}if(At.done)return a(Y,Xe),Mt&&Oi(Y,lt),$e;if(Xe===null){for(;!At.done;lt++,At=te.next())At=ge(Y,At.value,me),At!==null&&(k=f(At,k,lt),Tt===null?$e=At:Tt.sibling=At,Tt=At);return Mt&&Oi(Y,lt),$e}for(Xe=s(Xe);!At.done;lt++,At=te.next())At=oe(Xe,Y,lt,At.value,me),At!==null&&(e&&At.alternate!==null&&Xe.delete(At.key===null?lt:At.key),k=f(At,k,lt),Tt===null?$e=At:Tt.sibling=At,Tt=At);return e&&Xe.forEach(function(pS){return n(Y,pS)}),Mt&&Oi(Y,lt),$e}function It(Y,k,te,me){if(typeof te=="object"&&te!==null&&te.type===E&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case y:e:{for(var $e=te.key;k!==null;){if(k.key===$e){if($e=te.type,$e===E){if(k.tag===7){a(Y,k.sibling),me=c(k,te.props.children),me.return=Y,Y=me;break e}}else if(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&tr($e)===k.type){a(Y,k.sibling),me=c(k,te.props),Ys(me,te),me.return=Y,Y=me;break e}a(Y,k);break}else n(Y,k);k=k.sibling}te.type===E?(me=Ka(te.props.children,Y.mode,me,te.key),me.return=Y,Y=me):(me=nl(te.type,te.key,te.props,null,Y.mode,me),Ys(me,te),me.return=Y,Y=me)}return g(Y);case A:e:{for($e=te.key;k!==null;){if(k.key===$e)if(k.tag===4&&k.stateNode.containerInfo===te.containerInfo&&k.stateNode.implementation===te.implementation){a(Y,k.sibling),me=c(k,te.children||[]),me.return=Y,Y=me;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}me=uu(te,Y.mode,me),me.return=Y,Y=me}return g(Y);case K:return te=tr(te),It(Y,k,te,me)}if(Se(te))return Ge(Y,k,te,me);if(fe(te)){if($e=fe(te),typeof $e!="function")throw Error(r(150));return te=$e.call(te),tt(Y,k,te,me)}if(typeof te.then=="function")return It(Y,k,cl(te),me);if(te.$$typeof===z)return It(Y,k,rl(Y,te),me);ul(Y,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,k!==null&&k.tag===6?(a(Y,k.sibling),me=c(k,te),me.return=Y,Y=me):(a(Y,k),me=cu(te,Y.mode,me),me.return=Y,Y=me),g(Y)):a(Y,k)}return function(Y,k,te,me){try{qs=0;var $e=It(Y,k,te,me);return Gr=null,$e}catch(Xe){if(Xe===Hr||Xe===ol)throw Xe;var Tt=Xn(29,Xe,null,Y.mode);return Tt.lanes=me,Tt.return=Y,Tt}finally{}}}var ir=Tp(!0),Ap=Tp(!1),ha=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ma(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ct&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=tl(e),cp(e,null,a),n}return el(e,s,n,a),tl(e)}function Zs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,xi(e,a)}}function bu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Tu=!1;function Ks(){if(Tu){var e=Ir;if(e!==null)throw e}}function Qs(e,n,a,s){Tu=!1;var c=e.updateQueue;ha=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var F=T,ne=F.next;F.next=null,g===null?f=ne:g.next=ne,g=F;var he=e.alternate;he!==null&&(he=he.updateQueue,T=he.lastBaseUpdate,T!==g&&(T===null?he.firstBaseUpdate=ne:T.next=ne,he.lastBaseUpdate=F))}if(f!==null){var ge=c.baseState;g=0,he=ne=F=null,T=f;do{var ae=T.lane&-536870913,oe=ae!==T.lane;if(oe?(xt&ae)===ae:(s&ae)===ae){ae!==0&&ae===Fr&&(Tu=!0),he!==null&&(he=he.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ge=e,tt=T;ae=n;var It=a;switch(tt.tag){case 1:if(Ge=tt.payload,typeof Ge=="function"){ge=Ge.call(It,ge,ae);break e}ge=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=tt.payload,ae=typeof Ge=="function"?Ge.call(It,ge,ae):Ge,ae==null)break e;ge=v({},ge,ae);break e;case 2:ha=!0}}ae=T.callback,ae!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=c.callbacks,oe===null?c.callbacks=[ae]:oe.push(ae))}else oe={lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},he===null?(ne=he=oe,F=ge):he=he.next=oe,g|=ae;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;oe=T,T=oe.next,oe.next=null,c.lastBaseUpdate=oe,c.shared.pending=null}}while(!0);he===null&&(F=ge),c.baseState=F,c.firstBaseUpdate=ne,c.lastBaseUpdate=he,f===null&&(c.shared.lanes=0),Sa|=g,e.lanes=g,e.memoizedState=ge}}function Rp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function wp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Rp(a[e],n)}var Vr=O(null),fl=O(0);function Cp(e,n){e=ji,Me(fl,e),Me(Vr,n),ji=e|n.baseLanes}function Au(){Me(fl,ji),Me(Vr,Vr.current)}function Ru(){ji=fl.current,$(Vr),$(fl)}var jn=O(null),ri=null;function ga(e){var n=e.alternate;Me(tn,tn.current&1),Me(jn,e),ri===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(ri=e)}function wu(e){Me(tn,tn.current),Me(jn,e),ri===null&&(ri=e)}function Dp(e){e.tag===22?(Me(tn,tn.current),Me(jn,e),ri===null&&(ri=e)):_a()}function _a(){Me(tn,tn.current),Me(jn,jn.current)}function Wn(e){$(jn),ri===e&&(ri=null),$(tn)}var tn=O(0);function dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pf(a)||zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bi=0,ot=null,Bt=null,sn=null,hl=!1,kr=!1,ar=!1,pl=0,Js=0,Xr=null,ax=0;function Jt(){throw Error(r(321))}function Cu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Du(e,n,a,s,c,f){return Bi=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?hm:ju,ar=!1,f=a(s,c),ar=!1,kr&&(f=Lp(n,a,s,c)),Up(e),f}function Up(e){L.H=to;var n=Bt!==null&&Bt.next!==null;if(Bi=0,sn=Bt=ot=null,hl=!1,Js=0,Xr=null,n)throw Error(r(300));e===null||on||(e=e.dependencies,e!==null&&al(e)&&(on=!0))}function Lp(e,n,a,s){ot=e;var c=0;do{if(kr&&(Xr=null),Js=0,kr=!1,25<=c)throw Error(r(301));if(c+=1,sn=Bt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=pm,f=n(a,s)}while(kr);return f}function rx(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?$s(n):n,e=e.useState()[0],(Bt!==null?Bt.memoizedState:null)!==e&&(ot.flags|=1024),n}function Uu(){var e=pl!==0;return pl=0,e}function Lu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Nu(e){if(hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hl=!1}Bi=0,sn=Bt=ot=null,kr=!1,Js=pl=0,Xr=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?ot.memoizedState=sn=e:sn=sn.next=e,sn}function nn(){if(Bt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var n=sn===null?ot.memoizedState:sn.next;if(n!==null)sn=n,Bt=e;else{if(e===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},sn===null?ot.memoizedState=sn=e:sn=sn.next=e}return sn}function ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(e){var n=Js;return Js+=1,Xr===null&&(Xr=[]),e=Mp(Xr,e,n),n=ot,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?hm:ju),e}function gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $s(e);if(e.$$typeof===z)return Mn(e)}throw Error(r(438,String(e)))}function Ou(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ot.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ml(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function Fi(e,n){return typeof n=="function"?n(e):n}function _l(e){var n=nn();return Pu(n,Bt,e)}function Pu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=g=null,F=null,ne=n,he=!1;do{var ge=ne.lane&-536870913;if(ge!==ne.lane?(xt&ge)===ge:(Bi&ge)===ge){var ae=ne.revertLane;if(ae===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ge===Fr&&(he=!0);else if((Bi&ae)===ae){ne=ne.next,ae===Fr&&(he=!0);continue}else ge={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(T=F=ge,g=f):F=F.next=ge,ot.lanes|=ae,Sa|=ae;ge=ne.action,ar&&a(f,ge),f=ne.hasEagerState?ne.eagerState:a(f,ge)}else ae={lane:ge,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(T=F=ae,g=f):F=F.next=ae,ot.lanes|=ge,Sa|=ge;ne=ne.next}while(ne!==null&&ne!==n);if(F===null?g=f:F.next=T,!kn(f,e.memoizedState)&&(on=!0,he&&(a=Ir,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=F,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function zu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);kn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Np(e,n,a){var s=ot,c=nn(),f=Mt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!kn((Bt||c).memoizedState,a);if(g&&(c.memoizedState=a,on=!0),c=c.queue,Iu(zp.bind(null,s,c,e),[e]),c.getSnapshot!==n||g||sn!==null&&sn.memoizedState.tag&1){if(s.flags|=2048,jr(9,{destroy:void 0},Pp.bind(null,s,c,a,n),null),Xt===null)throw Error(r(349));f||(Bi&127)!==0||Op(s,n,a)}return a}function Op(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=ml(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Pp(e,n,a,s){n.value=a,n.getSnapshot=s,Bp(n)&&Fp(e)}function zp(e,n,a){return a(function(){Bp(n)&&Fp(e)})}function Bp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Fp(e){var n=Za(e,2);n!==null&&In(n,e,2)}function Bu(e){var n=Un();if(typeof e=="function"){var a=e;if(e=a(),ar){Ze(!0);try{a()}finally{Ze(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},n}function Ip(e,n,a,s){return e.baseState=a,Pu(e,Bt,typeof s=="function"?s:Fi)}function sx(e,n,a,s,c){if(Sl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Hp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Hp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=L.T,g={};L.T=g;try{var T=a(c,s),F=L.S;F!==null&&F(g,T),Gp(e,n,T)}catch(ne){Fu(e,n,ne)}finally{f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}else try{f=a(c,s),Gp(e,n,f)}catch(ne){Fu(e,n,ne)}}function Gp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Vp(e,n,s)},function(s){return Fu(e,n,s)}):Vp(e,n,a)}function Vp(e,n,a){n.status="fulfilled",n.value=a,kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Hp(e,a)))}function Fu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,kp(n),n=n.next;while(n!==s)}e.action=null}function kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Xp(e,n){return n}function jp(e,n){if(Mt){var a=Xt.formState;if(a!==null){e:{var s=ot;if(Mt){if(Wt){t:{for(var c=Wt,f=ai;c.nodeType!==8;){if(!f){c=null;break t}if(c=si(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Wt=si(c.nextSibling),s=c.data==="F!";break e}}fa(s)}s=!1}s&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xp,lastRenderedState:n},a.queue=s,a=um.bind(null,ot,s),s.dispatch=a,s=Bu(!1),f=Xu.bind(null,ot,!1,s.queue),s=Un(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=sx.bind(null,ot,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Wp(e){var n=nn();return qp(n,Bt,e)}function qp(e,n,a){if(n=Pu(e,n,Xp)[0],e=_l(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$s(n)}catch(g){throw g===Hr?ol:g}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,jr(9,{destroy:void 0},ox.bind(null,c,a),null)),[s,f,e]}function ox(e,n){e.action=n}function Yp(e){var n=nn(),a=Bt;if(a!==null)return qp(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function jr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ot.updateQueue,n===null&&(n=ml(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Zp(){return nn().memoizedState}function vl(e,n,a,s){var c=Un();ot.flags|=e,c.memoizedState=jr(1|n,{destroy:void 0},a,s===void 0?null:s)}function xl(e,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Bt!==null&&s!==null&&Cu(s,Bt.memoizedState.deps)?c.memoizedState=jr(n,f,a,s):(ot.flags|=e,c.memoizedState=jr(1|n,f,a,s))}function Kp(e,n){vl(8390656,8,e,n)}function Iu(e,n){xl(2048,8,e,n)}function lx(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=ml(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Qp(e){var n=nn().memoizedState;return lx({ref:n,nextImpl:e}),function(){if((Ct&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Jp(e,n){return xl(4,2,e,n)}function $p(e,n){return xl(4,4,e,n)}function em(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function tm(e,n,a){a=a!=null?a.concat([e]):null,xl(4,4,em.bind(null,n,e),a)}function Hu(){}function nm(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Cu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function im(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Cu(n,s[1]))return s[0];if(s=e(),ar){Ze(!0);try{e()}finally{Ze(!1)}}return a.memoizedState=[s,n],s}function Gu(e,n,a){return a===void 0||(Bi&1073741824)!==0&&(xt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=ag(),ot.lanes|=e,Sa|=e,a)}function am(e,n,a,s){return kn(a,n)?a:Vr.current!==null?(e=Gu(e,a,s),kn(e,n)||(on=!0),e):(Bi&42)===0||(Bi&1073741824)!==0&&(xt&261930)===0?(on=!0,e.memoizedState=a):(e=ag(),ot.lanes|=e,Sa|=e,n)}function rm(e,n,a,s,c){var f=Q.p;Q.p=f!==0&&8>f?f:8;var g=L.T,T={};L.T=T,Xu(e,!1,n,a);try{var F=c(),ne=L.S;if(ne!==null&&ne(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var he=ix(F,s);eo(e,n,he,Zn(e))}else eo(e,n,s,Zn(e))}catch(ge){eo(e,n,{then:function(){},status:"rejected",reason:ge},Zn())}finally{Q.p=f,g!==null&&T.types!==null&&(g.types=T.types),L.T=g}}function cx(){}function Vu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=sm(e).queue;rm(e,c,n,U,a===null?cx:function(){return om(e),a(s)})}function sm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:U},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function om(e){var n=sm(e);n.next===null&&(n=e.alternate.memoizedState),eo(e,n.next.queue,{},Zn())}function ku(){return Mn(vo)}function lm(){return nn().memoizedState}function cm(){return nn().memoizedState}function ux(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=pa(a);var s=ma(n,e,a);s!==null&&(In(s,n,a),Zs(s,n,a)),n={cache:vu()},e.payload=n;return}n=n.return}}function fx(e,n,a){var s=Zn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sl(e)?fm(n,a):(a=ou(e,n,a,s),a!==null&&(In(a,e,s),dm(a,n,s)))}function um(e,n,a){var s=Zn();eo(e,n,a,s)}function eo(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sl(e))fm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,g))return el(e,n,c,0),Xt===null&&$o(),!1}catch{}finally{}if(a=ou(e,n,c,s),a!==null)return In(a,e,s),dm(a,n,s),!0}return!1}function Xu(e,n,a,s){if(s={lane:2,revertLane:Ef(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Sl(e)){if(n)throw Error(r(479))}else n=ou(e,a,s,2),n!==null&&In(n,e,2)}function Sl(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function fm(e,n){kr=hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function dm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,xi(e,a)}}var to={readContext:Mn,use:gl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};to.useEffectEvent=Jt;var hm={readContext:Mn,use:gl,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Kp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,vl(4194308,4,em.bind(null,n,e),a)},useLayoutEffect:function(e,n){return vl(4194308,4,e,n)},useInsertionEffect:function(e,n){vl(4,2,e,n)},useMemo:function(e,n){var a=Un();n=n===void 0?null:n;var s=e();if(ar){Ze(!0);try{e()}finally{Ze(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Un();if(a!==void 0){var c=a(n);if(ar){Ze(!0);try{a(n)}finally{Ze(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=fx.bind(null,ot,e),[s.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:function(e){e=Bu(e);var n=e.queue,a=um.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Hu,useDeferredValue:function(e,n){var a=Un();return Gu(a,e,n)},useTransition:function(){var e=Bu(!1);return e=rm.bind(null,ot,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ot,c=Un();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(xt&127)!==0||Op(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Kp(zp.bind(null,s,f,e),[e]),s.flags|=2048,jr(9,{destroy:void 0},Pp.bind(null,s,f,a,n),null),a},useId:function(){var e=Un(),n=Xt.identifierPrefix;if(Mt){var a=Mi,s=yi;a=(s&~(1<<32-ze(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ax++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ku,useFormState:jp,useActionState:jp,useOptimistic:function(e){var n=Un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Xu.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ou,useCacheRefresh:function(){return Un().memoizedState=ux.bind(null,ot)},useEffectEvent:function(e){var n=Un(),a={impl:e};return n.memoizedState=a,function(){if((Ct&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:Mn,use:gl,useCallback:nm,useContext:Mn,useEffect:Iu,useImperativeHandle:tm,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:_l,useRef:Zp,useState:function(){return _l(Fi)},useDebugValue:Hu,useDeferredValue:function(e,n){var a=nn();return am(a,Bt.memoizedState,e,n)},useTransition:function(){var e=_l(Fi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:$s(e),n]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:ku,useFormState:Wp,useActionState:Wp,useOptimistic:function(e,n){var a=nn();return Ip(a,Bt,e,n)},useMemoCache:Ou,useCacheRefresh:cm};ju.useEffectEvent=Qp;var pm={readContext:Mn,use:gl,useCallback:nm,useContext:Mn,useEffect:Iu,useImperativeHandle:tm,useInsertionEffect:Jp,useLayoutEffect:$p,useMemo:im,useReducer:zu,useRef:Zp,useState:function(){return zu(Fi)},useDebugValue:Hu,useDeferredValue:function(e,n){var a=nn();return Bt===null?Gu(a,e,n):am(a,Bt.memoizedState,e,n)},useTransition:function(){var e=zu(Fi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:$s(e),n]},useSyncExternalStore:Np,useId:lm,useHostTransitionStatus:ku,useFormState:Yp,useActionState:Yp,useOptimistic:function(e,n){var a=nn();return Bt!==null?Ip(a,Bt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ou,useCacheRefresh:cm};pm.useEffectEvent=Qp;function Wu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=pa(s);c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,s),n!==null&&(In(n,e,s),Zs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=pa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ma(e,c,s),n!==null&&(In(n,e,s),Zs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),s=pa(a);s.tag=2,n!=null&&(s.callback=n),n=ma(e,s,a),n!==null&&(In(n,e,a),Zs(n,e,a))}};function mm(e,n,a,s,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,s)||!Gs(c,f):!0}function gm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&qu.enqueueReplaceState(n,n.state,null)}function rr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function _m(e){Jo(e)}function vm(e){console.error(e)}function xm(e){Jo(e)}function yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Sm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Yu(e,n,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(e,n)},a}function ym(e){return e=pa(e),e.tag=3,e}function Mm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Sm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Sm(n,a,s),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function dx(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Br(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?Nl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Sf(e,s,c)),!1;case 22:return a.flags|=65536,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Sf(e,s,c)),!1}throw Error(r(435,a.tag))}return Sf(e,s,c),Nl(),!1}if(Mt)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==hu&&(e=Error(r(422),{cause:s}),Xs(ti(e,a)))):(s!==hu&&(n=Error(r(423),{cause:s}),Xs(ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ti(s,a),c=Yu(e.stateNode,s,c),bu(e,c),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:s});if(f=ti(f,a),co===null?co=[f]:co.push(f),$t!==4&&($t=2),n===null)return!0;s=ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Yu(a.stateNode,s,e),bu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=ym(c),Mm(c,e,a,s),bu(a,c),!1}a=a.return}while(a!==null);return!1}var Zu=Error(r(461)),on=!1;function En(e,n,a,s){n.child=e===null?Ap(n,null,a,s):ir(n,e.child,a,s)}function Em(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return $a(n),s=Du(e,n,a,g,f,c),T=Uu(),e!==null&&!on?(Lu(e,n,c),Ii(e,n,c)):(Mt&&T&&fu(n),n.flags|=1,En(e,n,s,c),n.child)}function bm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!lu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Tm(e,n,f,s,c)):(e=nl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!af(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(g,s)&&e.ref===n.ref)return Ii(e,n,c)}return n.flags|=1,e=Ni(f,s),e.ref=n.ref,e.return=n,n.child=e}function Tm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Gs(f,s)&&e.ref===n.ref)if(on=!1,n.pendingProps=s=f,af(e,c))(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,Ii(e,n,c)}return Ku(e,n,a,s,c)}function Am(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Rm(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,f!==null?f.cachePool:null),f!==null?Cp(n,f):Au(),Dp(n);else return s=n.lanes=536870912,Rm(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(sl(n,f.cachePool),Cp(n,f),_a(),n.memoizedState=null):(e!==null&&sl(n,null),Au(),_a());return En(e,n,c,a),n.child}function no(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Rm(e,n,a,s,c){var f=Su();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&sl(n,null),Au(),Dp(n),e!==null&&Br(e,n,s,!0),n.childLanes=c,null}function Ml(e,n){return n=bl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function wm(e,n,a){return ir(n,e.child,null,a),e=Ml(n,n.pendingProps),e.flags|=2,Wn(n),n.memoizedState=null,e}function hx(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(s.mode==="hidden")return e=Ml(n,s),n.lanes=536870912,no(null,e);if(wu(n),(e=Wt)?(e=Hg(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ca!==null?{id:yi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=fp(e),a.return=n,n.child=a,yn=n,Wt=null)):e=null,e===null)throw fa(n);return n.lanes=536870912,null}return Ml(n,s)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(wu(n),c)if(n.flags&256)n.flags&=-257,n=wm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(on||Br(e,n,a,!1),c=(a&e.childLanes)!==0,on||c){if(s=Xt,s!==null&&(g=Mr(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Za(e,g),In(s,e,g),Zu;Nl(),n=wm(e,n,a)}else e=f.treeContext,Wt=si(g.nextSibling),yn=n,Mt=!0,ua=null,ai=!1,e!==null&&pp(n,e),n=Ml(n,s),n.flags|=4096;return n}return e=Ni(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function El(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ku(e,n,a,s,c){return $a(n),a=Du(e,n,a,s,void 0,c),s=Uu(),e!==null&&!on?(Lu(e,n,c),Ii(e,n,c)):(Mt&&s&&fu(n),n.flags|=1,En(e,n,a,c),n.child)}function Cm(e,n,a,s,c,f){return $a(n),n.updateQueue=null,a=Lp(n,s,a,c),Up(e),s=Uu(),e!==null&&!on?(Lu(e,n,f),Ii(e,n,f)):(Mt&&s&&fu(n),n.flags|=1,En(e,n,a,f),n.child)}function Dm(e,n,a,s,c){if($a(n),n.stateNode===null){var f=Nr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Mn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Mu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Mn(g):Nr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Wu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&qu.enqueueReplaceState(f,f.state,null),Qs(n,s,f,c),Ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,F=rr(a,T);f.props=F;var ne=f.context,he=a.contextType;g=Nr,typeof he=="object"&&he!==null&&(g=Mn(he));var ge=a.getDerivedStateFromProps;he=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||ne!==g)&&gm(n,f,s,g),ha=!1;var ae=n.memoizedState;f.state=ae,Qs(n,s,f,c),Ks(),ne=n.memoizedState,T||ae!==ne||ha?(typeof ge=="function"&&(Wu(n,a,ge,s),ne=n.memoizedState),(F=ha||mm(n,a,F,s,ae,ne,g))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=ne),f.props=s,f.state=ne,f.context=g,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Eu(e,n),g=n.memoizedProps,he=rr(a,g),f.props=he,ge=n.pendingProps,ae=f.context,ne=a.contextType,F=Nr,typeof ne=="object"&&ne!==null&&(F=Mn(ne)),T=a.getDerivedStateFromProps,(ne=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==ge||ae!==F)&&gm(n,f,s,F),ha=!1,ae=n.memoizedState,f.state=ae,Qs(n,s,f,c),Ks();var oe=n.memoizedState;g!==ge||ae!==oe||ha||e!==null&&e.dependencies!==null&&al(e.dependencies)?(typeof T=="function"&&(Wu(n,a,T,s),oe=n.memoizedState),(he=ha||mm(n,a,he,s,ae,oe,F)||e!==null&&e.dependencies!==null&&al(e.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,oe,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,oe,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=oe),f.props=s,f.state=oe,f.context=F,s=he):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,El(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=ir(n,e.child,null,c),n.child=ir(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ii(e,n,c),e}function Um(e,n,a,s){return Qa(),n.flags|=256,En(e,n,a,s),n.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ju(e){return{baseLanes:e,cachePool:Sp()}}function $u(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Yn),e}function Lm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(c?ga(n):_a(),(e=Wt)?(e=Hg(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ca!==null?{id:yi,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=fp(e),a.return=n,n.child=a,yn=n,Wt=null)):e=null,e===null)throw fa(n);return zf(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(_a(),c=n.mode,T=bl({mode:"hidden",children:T},c),s=Ka(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=Ju(a),s.childLanes=$u(e,g,a),n.memoizedState=Qu,no(null,s)):(ga(n),ef(n,T))}var F=e.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=tf(e,n,a)):n.memoizedState!==null?(_a(),n.child=e.child,n.flags|=128,n=null):(_a(),T=s.fallback,c=n.mode,s=bl({mode:"visible",children:s.children},c),T=Ka(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,ir(n,e.child,null,a),s=n.child,s.memoizedState=Ju(a),s.childLanes=$u(e,g,a),n.memoizedState=Qu,n=no(null,s));else if(ga(n),zf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var ne=g.dgst;g=ne,s=Error(r(419)),s.stack="",s.digest=g,Xs({value:s,source:null,stack:null}),n=tf(e,n,a)}else if(on||Br(e,n,a,!1),g=(a&e.childLanes)!==0,on||g){if(g=Xt,g!==null&&(s=Mr(g,a),s!==0&&s!==F.retryLane))throw F.retryLane=s,Za(e,s),In(g,e,s),Zu;Pf(T)||Nl(),n=tf(e,n,a)}else Pf(T)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Wt=si(T.nextSibling),yn=n,Mt=!0,ua=null,ai=!1,e!==null&&pp(n,e),n=ef(n,s.children),n.flags|=4096);return n}return c?(_a(),T=s.fallback,c=n.mode,F=e.child,ne=F.sibling,s=Ni(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,ne!==null?T=Ni(ne,T):(T=Ka(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,no(null,s),s=n.child,T=e.child.memoizedState,T===null?T=Ju(a):(c=T.cachePool,c!==null?(F=rn._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Sp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=$u(e,g,a),n.memoizedState=Qu,no(e.child,s)):(ga(n),a=e.child,e=a.sibling,a=Ni(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function ef(e,n){return n=bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function bl(e,n){return e=Xn(22,e,null,n),e.lanes=0,e}function tf(e,n,a){return ir(n,e.child,null,a),e=ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Nm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),gu(e.return,n,a)}function nf(e,n,a,s,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Om(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,Me(tn,g),En(e,n,s,a),s=Mt?ks:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nm(e,a,n);else if(e.tag===19)Nm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&dl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),nf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&dl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}nf(n,!0,a,null,f,s);break;case"together":nf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ii(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Br(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ni(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ni(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&al(e)))}function px(e,n,a){switch(n.tag){case 3:Fe(n,n.stateNode.containerInfo),da(n,rn,e.memoizedState.cache),Qa();break;case 27:case 5:et(n);break;case 4:Fe(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,wu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Lm(e,n,a):(ga(n),e=Ii(e,n,a),e!==null?e.sibling:null);ga(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Br(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Om(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Me(tn,tn.current),s)break;return null;case 22:return n.lanes=0,Am(e,n,a,n.pendingProps);case 24:da(n,rn,e.memoizedState.cache)}return Ii(e,n,a)}function Pm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)on=!0;else{if(!af(e,a)&&(n.flags&128)===0)return on=!1,px(e,n,a);on=(e.flags&131072)!==0}else on=!1,Mt&&(n.flags&1048576)!==0&&hp(n,ks,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=tr(n.elementType),n.type=e,typeof e=="function")lu(e)?(s=rr(e,s),n.tag=1,n=Dm(null,n,e,s,a)):(n.tag=0,n=Ku(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===N){n.tag=11,n=Em(null,n,e,s,a);break e}else if(c===I){n.tag=14,n=bm(null,n,e,s,a);break e}}throw n=ce(e)||e,Error(r(306,n,""))}}return n;case 0:return Ku(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=rr(s,n.pendingProps),Dm(e,n,s,c,a);case 3:e:{if(Fe(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Eu(e,n),Qs(n,s,null,a);var g=n.memoizedState;if(s=g.cache,da(n,rn,s),s!==f.cache&&_u(n,[rn],a,!0),Ks(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Um(e,n,s,a);break e}else if(s!==c){c=ti(Error(r(424)),n),Xs(c),n=Um(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Wt=si(e.firstChild),yn=n,Mt=!0,ua=null,ai=!0,a=Ap(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qa(),s===c){n=Ii(e,n,a);break e}En(e,n,s,a)}n=n.child}return n;case 26:return El(e,n),e===null?(a=Wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,s=Hl(_e.current).createElement(a),s[an]=n,s[xn]=e,bn(s,a,e),ye(s),n.stateNode=s):n.memoizedState=Wg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return et(n),e===null&&Mt&&(s=n.stateNode=kg(n.type,n.pendingProps,_e.current),yn=n,ai=!0,c=Wt,Ta(n.type)?(Bf=c,Wt=si(s.firstChild)):Wt=c),En(e,n,n.pendingProps.children,a),El(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((c=s=Wt)&&(s=Xx(s,n.type,n.pendingProps,ai),s!==null?(n.stateNode=s,yn=n,Wt=si(s.firstChild),ai=!1,c=!0):c=!1),c||fa(n)),et(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,s=f.children,Lf(c,f)?s=null:g!==null&&Lf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Du(e,n,rx,null,null,a),vo._currentValue=c),El(e,n),En(e,n,s,a),n.child;case 6:return e===null&&Mt&&((e=a=Wt)&&(a=jx(a,n.pendingProps,ai),a!==null?(n.stateNode=a,yn=n,Wt=null,e=!0):e=!1),e||fa(n)),null;case 13:return Lm(e,n,a);case 4:return Fe(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ir(n,null,s,a):En(e,n,s,a),n.child;case 11:return Em(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,da(n,n.type,s.value),En(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,$a(n),c=Mn(c),s=s(c),n.flags|=1,En(e,n,s,a),n.child;case 14:return bm(e,n,n.type,n.pendingProps,a);case 15:return Tm(e,n,n.type,n.pendingProps,a);case 19:return Om(e,n,a);case 31:return hx(e,n,a);case 22:return Am(e,n,a,n.pendingProps);case 24:return $a(n),s=Mn(rn),e===null?(c=Su(),c===null&&(c=Xt,f=vu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Mu(n),da(n,rn,c)):((e.lanes&a)!==0&&(Eu(e,n),Qs(n,null,null,a),Ks()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),da(n,rn,s)):(s=f.cache,da(n,rn,s),s!==c.cache&&_u(n,[rn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Hi(e){e.flags|=4}function rf(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(lg())e.flags|=8192;else throw nr=ll,yu}else e.flags&=-16777217}function zm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qg(n))if(lg())e.flags|=8192;else throw nr=ll,yu}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ot():536870912,e.lanes|=n,Zr|=n)}function io(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function mx(e,n,a){var s=n.pendingProps;switch(du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),zi(rn),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zr(n)?Hi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pu())),qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Hi(n),f!==null?(qt(n),zm(n,f)):(qt(n),rf(n,c,null,s,a))):f?f!==e.memoizedState?(Hi(n),qt(n),zm(n,f)):(qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Hi(n),qt(n),rf(n,c,e,s,a)),null;case 27:if(Nt(n),a=_e.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}e=Te.current,zr(n)?mp(n):(e=kg(c,s,a),n.stateNode=e,Hi(n))}return qt(n),null;case 5:if(Nt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Hi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(f=Te.current,zr(n))mp(n);else{var g=Hl(_e.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[an]=n,f[xn]=s;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(bn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Hi(n)}}return qt(n),rf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Hi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=_e.current,zr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=yn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Lg(e.nodeValue,a)),e||fa(n,!0)}else e=Hl(e).createTextNode(s),e[an]=n,n.stateNode=e}return qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=zr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[an]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),e=!1}else a=pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=zr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[an]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),qt(n),null);case 4:return Oe(),e===null&&Rf(n.stateNode.containerInfo),qt(n),null;case 10:return zi(n.type),qt(n),null;case 19:if($(tn),s=n.memoizedState,s===null)return qt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)io(s,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=dl(e),f!==null){for(n.flags|=128,io(s,!1),e=f.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)up(a,e),a=a.sibling;return Me(tn,tn.current&1|2),Mt&&Oi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&b()>Dl&&(n.flags|=128,c=!0,io(s,!1),n.lanes=4194304)}else{if(!c)if(e=dl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Mt)return qt(n),null}else 2*b()-s.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,c=!0,io(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=b(),e.sibling=null,a=tn.current,Me(tn,c?a&1|2:a&1),Mt&&Oi(n,s.treeForkCount),e):(qt(n),null);case 22:case 23:return Wn(n),Ru(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&$(er),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zi(rn),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function gx(e,n){switch(du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zi(rn),Oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Nt(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(r(340));Qa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Wn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Qa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(tn),null;case 4:return Oe(),null;case 10:return zi(n.type),null;case 22:case 23:return Wn(n),Ru(),e!==null&&$(er),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return zi(rn),null;case 25:return null;default:return null}}function Bm(e,n){switch(du(n),n.tag){case 3:zi(rn),Oe();break;case 26:case 27:case 5:Nt(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:$(tn);break;case 10:zi(n.type);break;case 22:case 23:Wn(n),Ru(),e!==null&&$(er);break;case 24:zi(rn)}}function ao(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(T){zt(n,n.return,T)}}function va(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var F=a,ne=T;try{ne()}catch(he){zt(c,F,he)}}}s=s.next}while(s!==f)}}catch(he){zt(n,n.return,he)}}function Fm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{wp(n,a)}catch(s){zt(e,e.return,s)}}}function Im(e,n,a){a.props=rr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){zt(e,n,s)}}function ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){zt(e,n,c)}}function Ei(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(e,n,c)}else a.current=null}function Hm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){zt(e,e.return,c)}}function sf(e,n,a){try{var s=e.stateNode;Fx(s,e.type,a,n),s[xn]=n}catch(c){zt(e,e.return,c)}}function Gm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function of(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ui));else if(s!==4&&(s===27&&Ta(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(lf(e,n,a),e=e.sibling;e!==null;)lf(e,n,a),e=e.sibling}function Al(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Al(e,n,a),e=e.sibling;e!==null;)Al(e,n,a),e=e.sibling}function Vm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,s,a),n[an]=e,n[xn]=a}catch(f){zt(e,e.return,f)}}var Gi=!1,ln=!1,cf=!1,km=typeof WeakSet=="function"?WeakSet:Set,gn=null;function _x(e,n){if(e=e.containerInfo,Df=ql,e=tp(e),tu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,T=-1,F=-1,ne=0,he=0,ge=e,ae=null;t:for(;;){for(var oe;ge!==a||c!==0&&ge.nodeType!==3||(T=g+c),ge!==f||s!==0&&ge.nodeType!==3||(F=g+s),ge.nodeType===3&&(g+=ge.nodeValue.length),(oe=ge.firstChild)!==null;)ae=ge,ge=oe;for(;;){if(ge===e)break t;if(ae===a&&++ne===c&&(T=g),ae===f&&++he===s&&(F=g),(oe=ge.nextSibling)!==null)break;ge=ae,ae=ge.parentNode}ge=oe}a=T===-1||F===-1?null:{start:T,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uf={focusedElem:e,selectionRange:a},ql=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ge=rr(a.type,c);e=s.getSnapshotBeforeUpdate(Ge,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(tt){zt(a,a.return,tt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Of(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Of(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function Xm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ki(e,a),s&4&&ao(5,a);break;case 1:if(ki(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){zt(a,a.return,g)}else{var c=rr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){zt(a,a.return,g)}}s&64&&Fm(a),s&512&&ro(a,a.return);break;case 3:if(ki(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{wp(e,n)}catch(g){zt(a,a.return,g)}}break;case 27:n===null&&s&4&&Vm(a);case 26:case 5:ki(e,a),n===null&&s&4&&Hm(a),s&512&&ro(a,a.return);break;case 12:ki(e,a);break;case 31:ki(e,a),s&4&&qm(e,a);break;case 13:ki(e,a),s&4&&Ym(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ax.bind(null,a),Wx(e,a))));break;case 22:if(s=a.memoizedState!==null||Gi,!s){n=n!==null&&n.memoizedState!==null||ln,c=Gi;var f=ln;Gi=s,(ln=n)&&!f?Xi(e,a,(a.subtreeFlags&8772)!==0):ki(e,a),Gi=c,ln=f}break;case 30:break;default:ki(e,a)}}function jm(e){var n=e.alternate;n!==null&&(e.alternate=null,jm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Yt=null,Pn=!1;function Vi(e,n,a){for(a=a.child;a!==null;)Wm(e,n,a),a=a.sibling}function Wm(e,n,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:ln||Ei(a,n),Vi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Ei(a,n);var s=Yt,c=Pn;Ta(a.type)&&(Yt=a.stateNode,Pn=!1),Vi(e,n,a),mo(a.stateNode),Yt=s,Pn=c;break;case 5:ln||Ei(a,n);case 6:if(s=Yt,c=Pn,Yt=null,Vi(e,n,a),Yt=s,Pn=c,Yt!==null)if(Pn)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Yt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Yt!==null&&(Pn?(e=Yt,Fg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),is(e)):Fg(Yt,a.stateNode));break;case 4:s=Yt,c=Pn,Yt=a.stateNode.containerInfo,Pn=!0,Vi(e,n,a),Yt=s,Pn=c;break;case 0:case 11:case 14:case 15:va(2,a,n),ln||va(4,a,n),Vi(e,n,a);break;case 1:ln||(Ei(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Im(a,n,s)),Vi(e,n,a);break;case 21:Vi(e,n,a);break;case 22:ln=(s=ln)||a.memoizedState!==null,Vi(e,n,a),ln=s;break;default:Vi(e,n,a)}}function qm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{is(e)}catch(a){zt(n,n.return,a)}}}function Ym(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{is(e)}catch(a){zt(n,n.return,a)}}function vx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new km),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new km),n;default:throw Error(r(435,e.tag))}}function Rl(e,n){var a=vx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Rx.bind(null,e,s);s.then(c,c)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,g=n,T=g;e:for(;T!==null;){switch(T.tag){case 27:if(Ta(T.type)){Yt=T.stateNode,Pn=!1;break e}break;case 5:Yt=T.stateNode,Pn=!1;break e;case 3:case 4:Yt=T.stateNode.containerInfo,Pn=!0;break e}T=T.return}if(Yt===null)throw Error(r(160));Wm(f,g,c),Yt=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zm(n,e),n=n.sibling}var fi=null;function Zm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),Bn(e),s&4&&(va(3,e,e.return),ao(3,e),va(5,e,e.return));break;case 1:zn(n,e),Bn(e),s&512&&(ln||a===null||Ei(a,a.return)),s&64&&Gi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=fi;if(zn(n,e),Bn(e),s&512&&(ln||a===null||Ei(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Xa]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,s,a),f[an]=e,ye(f),s=f;break e;case"link":var g=Zg("link","href",c).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break t}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=Zg("meta","content",c).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break t}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=e,ye(f),s=f}e.stateNode=s}else Kg(c,e.type,e.stateNode);else e.stateNode=Yg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Kg(c,e.type,e.stateNode):Yg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&sf(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),Bn(e),s&512&&(ln||a===null||Ei(a,a.return)),a!==null&&s&4&&sf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),Bn(e),s&512&&(ln||a===null||Ei(a,a.return)),e.flags&32){c=e.stateNode;try{Ar(c,"")}catch(Ge){zt(e,e.return,Ge)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,sf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(cf=!0);break;case 6:if(zn(n,e),Bn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Ge){zt(e,e.return,Ge)}}break;case 3:if(kl=null,c=fi,fi=Gl(n.containerInfo),zn(n,e),fi=c,Bn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{is(n.containerInfo)}catch(Ge){zt(e,e.return,Ge)}cf&&(cf=!1,Km(e));break;case 4:s=fi,fi=Gl(e.stateNode.containerInfo),zn(n,e),Bn(e),fi=s;break;case 12:zn(n,e),Bn(e);break;case 31:zn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 13:zn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=b()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 22:c=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,ne=Gi,he=ln;if(Gi=ne||c,ln=he||F,zn(n,e),ln=he,Gi=ne,Bn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||Gi||ln||sr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=F.stateNode;var ge=F.memoizedProps.style,ae=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;T.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(Ge){zt(F,F.return,Ge)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(Ge){zt(F,F.return,Ge)}}}else if(n.tag===18){if(a===null){F=n;try{var oe=F.stateNode;c?Ig(oe,!0):Ig(F.stateNode,!1)}catch(Ge){zt(F,F.return,Ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Rl(e,a))));break;case 19:zn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 30:break;case 21:break;default:zn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Gm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=of(e);Al(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Ar(g,""),a.flags&=-33);var T=of(e);Al(e,T,g);break;case 3:case 4:var F=a.stateNode.containerInfo,ne=of(e);lf(e,ne,F);break;default:throw Error(r(161))}}catch(he){zt(e,e.return,he)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Km(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Km(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ki(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xm(e,n.alternate,n),n=n.sibling}function sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),sr(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Im(n,n.return,a),sr(n);break;case 27:mo(n.stateNode);case 26:case 5:Ei(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}e=e.sibling}}function Xi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(c,f,a),ao(4,f);break;case 1:if(Xi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ne){zt(s,s.return,ne)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Rp(F[c],T)}catch(ne){zt(s,s.return,ne)}}a&&g&64&&Fm(f),ro(f,f.return);break;case 27:Vm(f);case 26:case 5:Xi(c,f,a),a&&s===null&&g&4&&Hm(f),ro(f,f.return);break;case 12:Xi(c,f,a);break;case 31:Xi(c,f,a),a&&g&4&&qm(c,f);break;case 13:Xi(c,f,a),a&&g&4&&Ym(c,f);break;case 22:f.memoizedState===null&&Xi(c,f,a),ro(f,f.return);break;case 30:break;default:Xi(c,f,a)}n=n.sibling}}function uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&js(a))}function ff(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&js(e))}function di(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Qm(e,n,a,s),n=n.sibling}function Qm(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:di(e,n,a,s),c&2048&&ao(9,n);break;case 1:di(e,n,a,s);break;case 3:di(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&js(e)));break;case 12:if(c&2048){di(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){zt(n,n.return,F)}}else di(e,n,a,s);break;case 31:di(e,n,a,s);break;case 13:di(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?di(e,n,a,s):so(e,n):f._visibility&2?di(e,n,a,s):(f._visibility|=2,Wr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&uf(g,n);break;case 24:di(e,n,a,s),c&2048&&ff(n.alternate,n);break;default:di(e,n,a,s)}}function Wr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,T=a,F=s,ne=g.flags;switch(g.tag){case 0:case 11:case 15:Wr(f,g,T,F,c),ao(8,g);break;case 23:break;case 22:var he=g.stateNode;g.memoizedState!==null?he._visibility&2?Wr(f,g,T,F,c):so(f,g):(he._visibility|=2,Wr(f,g,T,F,c)),c&&ne&2048&&uf(g.alternate,g);break;case 24:Wr(f,g,T,F,c),c&&ne&2048&&ff(g.alternate,g);break;default:Wr(f,g,T,F,c)}n=n.sibling}}function so(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:so(a,s),c&2048&&uf(s.alternate,s);break;case 24:so(a,s),c&2048&&ff(s.alternate,s);break;default:so(a,s)}n=n.sibling}}var oo=8192;function qr(e,n,a){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)Jm(e,n,a),e=e.sibling}function Jm(e,n,a){switch(e.tag){case 26:qr(e,n,a),e.flags&oo&&e.memoizedState!==null&&aS(a,fi,e.memoizedState,e.memoizedProps);break;case 5:qr(e,n,a);break;case 3:case 4:var s=fi;fi=Gl(e.stateNode.containerInfo),qr(e,n,a),fi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=oo,oo=16777216,qr(e,n,a),oo=s):qr(e,n,a));break;default:qr(e,n,a)}}function $m(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,tg(s,e)}$m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)eg(e),e=e.sibling}function eg(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&va(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,wl(e)):lo(e);break;default:lo(e)}}function wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,tg(s,e)}$m(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,wl(n));break;default:wl(n)}e=e.sibling}}function tg(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else e:for(a=e;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(jm(s),s===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var xx={getCacheForType:function(e){var n=Mn(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(rn).controller.signal}},Sx=typeof WeakMap=="function"?WeakMap:Map,Ct=0,Xt=null,gt=null,xt=0,Pt=0,qn=null,xa=!1,Yr=!1,df=!1,ji=0,$t=0,Sa=0,or=0,hf=0,Yn=0,Zr=0,co=null,Fn=null,pf=!1,Cl=0,ng=0,Dl=1/0,Ul=null,ya=null,fn=0,Ma=null,Kr=null,Wi=0,mf=0,gf=null,ig=null,uo=0,_f=null;function Zn(){return(Ct&2)!==0&&xt!==0?xt&-xt:L.T!==null?Ef():ka()}function ag(){if(Yn===0)if((xt&536870912)===0||Mt){var e=De;De<<=1,(De&3932160)===0&&(De=262144),Yn=e}else Yn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Yn}function In(e,n,a){(e===Xt&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),Ea(e,xt,Yn,!1)),Cn(e,a),((Ct&2)===0||e!==Xt)&&(e===Xt&&((Ct&2)===0&&(or|=a),$t===4&&Ea(e,xt,Yn,!1)),bi(e))}function rg(e,n,a){if((Ct&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||He(e,n),c=s?Ex(e,n):xf(e,n,!0),f=s;do{if(c===0){Yr&&!s&&Ea(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!yx(a)){c=xf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var T=e;c=co;var F=T.current.memoizedState.isDehydrated;if(F&&(Qr(T,g).flags|=256),g=xf(T,g,!1),g!==2){if(df&&!F){T.errorRecoveryDisabledLanes|=f,or|=f,c=4;break e}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Qr(e,0),Ea(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ea(s,n,Yn,!xa);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Cl+300-b(),10<c)){if(Ea(s,n,Yn,!xa),xe(s,0,!0)!==0)break e;Wi=n,s.timeoutHandle=zg(sg.bind(null,s,a,Fn,Ul,pf,n,Yn,or,Zr,xa,f,"Throttled",-0,0),c);break e}sg(s,a,Fn,Ul,pf,n,Yn,or,Zr,xa,f,null,-0,0)}}break}while(!0);bi(e)}function sg(e,n,a,s,c,f,g,T,F,ne,he,ge,ae,oe){if(e.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ui},Jm(n,f,ge);var Ge=(f&62914560)===f?Cl-b():(f&4194048)===f?ng-b():0;if(Ge=rS(ge,Ge),Ge!==null){Wi=f,e.cancelPendingCommit=Ge(pg.bind(null,e,n,f,a,s,c,g,T,F,he,ge,null,ae,oe)),Ea(e,f,g,!ne);return}}pg(e,n,f,a,s,c,g,T,F)}function yx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ea(e,n,a,s){n&=~hf,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-ze(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Us(e,a,n)}function Ll(){return(Ct&6)===0?(fo(0),!1):!0}function vf(){if(gt!==null){if(Pt===0)var e=gt.return;else e=gt,Pi=Ja=null,Nu(e),Gr=null,qs=0,e=gt;for(;e!==null;)Bm(e.alternate,e),e=e.return;gt=null}}function Qr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Gx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wi=0,vf(),Xt=e,gt=a=Ni(e.current,null),xt=n,Pt=0,qn=null,xa=!1,Yr=He(e,n),df=!1,Zr=Yn=hf=or=Sa=$t=0,Fn=co=null,pf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-ze(s),f=1<<c;n|=e[c],s&=~f}return ji=n,$o(),a}function og(e,n){ot=null,L.H=to,n===Hr||n===ol?(n=Ep(),Pt=3):n===yu?(n=Ep(),Pt=4):Pt=n===Zu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,gt===null&&($t=1,yl(e,ti(n,e.current)))}function lg(){var e=jn.current;return e===null?!0:(xt&4194048)===xt?ri===null:(xt&62914560)===xt||(xt&536870912)!==0?e===ri:!1}function cg(){var e=L.H;return L.H=to,e===null?to:e}function ug(){var e=L.A;return L.A=xx,e}function Nl(){$t=4,xa||(xt&4194048)!==xt&&jn.current!==null||(Yr=!0),(Sa&134217727)===0&&(or&134217727)===0||Xt===null||Ea(Xt,xt,Yn,!1)}function xf(e,n,a){var s=Ct;Ct|=2;var c=cg(),f=ug();(Xt!==e||xt!==n)&&(Ul=null,Qr(e,n)),n=!1;var g=$t;e:do try{if(Pt!==0&&gt!==null){var T=gt,F=qn;switch(Pt){case 8:vf(),g=6;break e;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var ne=Pt;if(Pt=0,qn=null,Jr(e,T,F,ne),a&&Yr){g=0;break e}break;default:ne=Pt,Pt=0,qn=null,Jr(e,T,F,ne)}}Mx(),g=$t;break}catch(he){og(e,he)}while(!0);return n&&e.shellSuspendCounter++,Pi=Ja=null,Ct=s,L.H=c,L.A=f,gt===null&&(Xt=null,xt=0,$o()),g}function Mx(){for(;gt!==null;)fg(gt)}function Ex(e,n){var a=Ct;Ct|=2;var s=cg(),c=ug();Xt!==e||xt!==n?(Ul=null,Dl=b()+500,Qr(e,n)):Yr=He(e,n);e:do try{if(Pt!==0&&gt!==null){n=gt;var f=qn;t:switch(Pt){case 1:Pt=0,qn=null,Jr(e,n,f,1);break;case 2:case 9:if(yp(f)){Pt=0,qn=null,dg(n);break}n=function(){Pt!==2&&Pt!==9||Xt!==e||(Pt=7),bi(e)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:yp(f)?(Pt=0,qn=null,dg(n)):(Pt=0,qn=null,Jr(e,n,f,7));break;case 5:var g=null;switch(gt.tag){case 26:g=gt.memoizedState;case 5:case 27:var T=gt;if(g?Qg(g):T.stateNode.complete){Pt=0,qn=null;var F=T.sibling;if(F!==null)gt=F;else{var ne=T.return;ne!==null?(gt=ne,Ol(ne)):gt=null}break t}}Pt=0,qn=null,Jr(e,n,f,5);break;case 6:Pt=0,qn=null,Jr(e,n,f,6);break;case 8:vf(),$t=6;break e;default:throw Error(r(462))}}bx();break}catch(he){og(e,he)}while(!0);return Pi=Ja=null,L.H=s,L.A=c,Ct=a,gt!==null?0:(Xt=null,xt=0,$o(),$t)}function bx(){for(;gt!==null&&!Zt();)fg(gt)}function fg(e){var n=Pm(e.alternate,e,ji);e.memoizedProps=e.pendingProps,n===null?Ol(e):gt=n}function dg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Cm(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=Cm(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Nu(n);default:Bm(a,n),n=gt=up(n,ji),n=Pm(a,n,ji)}e.memoizedProps=e.pendingProps,n===null?Ol(e):gt=n}function Jr(e,n,a,s){Pi=Ja=null,Nu(n),Gr=null,qs=0;var c=n.return;try{if(dx(e,c,n,a,xt)){$t=1,yl(e,ti(a,e.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;$t=1,yl(e,ti(a,e.current)),gt=null;return}n.flags&32768?(Mt||s===1?e=!0:Yr||(xt&536870912)!==0?e=!1:(xa=e=!0,(s===2||s===9||s===3||s===6)&&(s=jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),hg(n,e)):Ol(n)}function Ol(e){var n=e;do{if((n.flags&32768)!==0){hg(n,xa);return}e=n.return;var a=mx(n.alternate,n,ji);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);$t===0&&($t=5)}function hg(e,n){do{var a=gx(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);$t=6,gt=null}function pg(e,n,a,s,c,f,g,T,F){e.cancelPendingCommit=null;do Pl();while(fn!==0);if((Ct&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=su,$n(e,a,f,g,T,F),e===Xt&&(gt=Xt=null,xt=0),Kr=n,Ma=e,Wi=a,mf=f,gf=c,ig=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wx(de,function(){return xg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,c=Q.p,Q.p=2,g=Ct,Ct|=4;try{_x(e,n,a)}finally{Ct=g,Q.p=c,L.T=s}}fn=1,mg(),gg(),_g()}}function mg(){if(fn===1){fn=0;var e=Ma,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=Q.p;Q.p=2;var c=Ct;Ct|=4;try{Zm(n,e);var f=Uf,g=tp(e.containerInfo),T=f.focusedElem,F=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&ep(T.ownerDocument.documentElement,T)){if(F!==null&&tu(T)){var ne=F.start,he=F.end;if(he===void 0&&(he=ne),"selectionStart"in T)T.selectionStart=ne,T.selectionEnd=Math.min(he,T.value.length);else{var ge=T.ownerDocument||document,ae=ge&&ge.defaultView||window;if(ae.getSelection){var oe=ae.getSelection(),Ge=T.textContent.length,tt=Math.min(F.start,Ge),It=F.end===void 0?tt:Math.min(F.end,Ge);!oe.extend&&tt>It&&(g=It,It=tt,tt=g);var Y=$h(T,tt),k=$h(T,It);if(Y&&k&&(oe.rangeCount!==1||oe.anchorNode!==Y.node||oe.anchorOffset!==Y.offset||oe.focusNode!==k.node||oe.focusOffset!==k.offset)){var te=ge.createRange();te.setStart(Y.node,Y.offset),oe.removeAllRanges(),tt>It?(oe.addRange(te),oe.extend(k.node,k.offset)):(te.setEnd(k.node,k.offset),oe.addRange(te))}}}}for(ge=[],oe=T;oe=oe.parentNode;)oe.nodeType===1&&ge.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ge.length;T++){var me=ge[T];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}ql=!!Df,Uf=Df=null}finally{Ct=c,Q.p=s,L.T=a}}e.current=n,fn=2}}function gg(){if(fn===2){fn=0;var e=Ma,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=Q.p;Q.p=2;var c=Ct;Ct|=4;try{Xm(e,n.alternate,n)}finally{Ct=c,Q.p=s,L.T=a}}fn=3}}function _g(){if(fn===4||fn===3){fn=0,P();var e=Ma,n=Kr,a=Wi,s=ig;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,Kr=Ma=null,vg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ya=null),br(a),n=n.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,c=Q.p,Q.p=2,L.T=null;try{for(var f=e.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{L.T=n,Q.p=c}}(Wi&3)!==0&&Pl(),bi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===_f?uo++:(uo=0,_f=e):uo=0,fo(0)}}function vg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,js(n)))}function Pl(){return mg(),gg(),_g(),xg()}function xg(){if(fn!==5)return!1;var e=Ma,n=mf;mf=0;var a=br(Wi),s=L.T,c=Q.p;try{Q.p=32>a?32:a,L.T=null,a=gf,gf=null;var f=Ma,g=Wi;if(fn=0,Kr=Ma=null,Wi=0,(Ct&6)!==0)throw Error(r(331));var T=Ct;if(Ct|=4,eg(f.current),Qm(f,f.current,g,a),Ct=T,fo(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Ae,f)}catch{}return!0}finally{Q.p=c,L.T=s,vg(e,n)}}function Sg(e,n,a){n=ti(a,n),n=Yu(e.stateNode,n,2),e=ma(e,n,2),e!==null&&(Cn(e,2),bi(e))}function zt(e,n,a){if(e.tag===3)Sg(e,e,a);else for(;n!==null;){if(n.tag===3){Sg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ya===null||!ya.has(s))){e=ti(a,e),a=ym(2),s=ma(n,a,2),s!==null&&(Mm(a,s,n,e),Cn(s,2),bi(s));break}}n=n.return}}function Sf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Sx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(df=!0,c.add(a),e=Tx.bind(null,e,n,a),n.then(e,e))}function Tx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(xt&a)===a&&($t===4||$t===3&&(xt&62914560)===xt&&300>b()-Cl?(Ct&2)===0&&Qr(e,0):hf|=a,Zr===xt&&(Zr=0)),bi(e)}function yg(e,n){n===0&&(n=Ot()),e=Za(e,n),e!==null&&(Cn(e,n),bi(e))}function Ax(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),yg(e,a)}function Rx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),yg(e,a)}function wx(e,n){return rt(e,n)}var zl=null,$r=null,yf=!1,Bl=!1,Mf=!1,ba=0;function bi(e){e!==$r&&e.next===null&&($r===null?zl=$r=e:$r=$r.next=e),Bl=!0,yf||(yf=!0,Dx())}function fo(e,n){if(!Mf&&Bl){Mf=!0;do for(var a=!1,s=zl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-ze(42|e)+1)-1,f&=c&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Tg(s,f))}else f=xt,f=xe(s,s===Xt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||He(s,f)||(a=!0,Tg(s,f));s=s.next}while(a);Mf=!1}}function Cx(){Mg()}function Mg(){Bl=yf=!1;var e=0;ba!==0&&Hx()&&(e=ba);for(var n=b(),a=null,s=zl;s!==null;){var c=s.next,f=Eg(s,n);f===0?(s.next=null,a===null?zl=c:a.next=c,c===null&&($r=a)):(a=s,(e!==0||(f&3)!==0)&&(Bl=!0)),s=c}fn!==0&&fn!==5||fo(e),ba!==0&&(ba=0)}function Eg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-ze(f),T=1<<g,F=c[g];F===-1?((T&a)===0||(T&s)!==0)&&(c[g]=it(T,n)):F<=n&&(e.expiredLanes|=T),f&=~T}if(n=Xt,a=xt,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Qt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||He(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Qt(s),br(a)){case 2:case 8:a=Ee;break;case 32:a=de;break;case 268435456:a=we;break;default:a=de}return s=bg.bind(null,e),a=rt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Qt(s),e.callbackPriority=2,e.callbackNode=null,2}function bg(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pl()&&e.callbackNode!==a)return null;var s=xt;return s=xe(e,e===Xt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(rg(e,s,n),Eg(e,b()),e.callbackNode!=null&&e.callbackNode===a?bg.bind(null,e):null)}function Tg(e,n){if(Pl())return null;rg(e,n,!0)}function Dx(){Vx(function(){(Ct&6)!==0?rt(pe,Cx):Mg()})}function Ef(){if(ba===0){var e=Fr;e===0&&(e=Re,Re<<=1,(Re&261888)===0&&(Re=256)),ba=e}return ba}function Ag(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jo(""+e)}function Rg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ux(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ag((c[xn]||null).action),g=s.submitter;g&&(n=(n=g[xn]||null)?Ag(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new Zo("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ba!==0){var F=g?Rg(c,g):new FormData(c);Vu(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(T.preventDefault(),F=g?Rg(c,g):new FormData(c),Vu(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var bf=0;bf<ru.length;bf++){var Tf=ru[bf],Lx=Tf.toLowerCase(),Nx=Tf[0].toUpperCase()+Tf.slice(1);ui(Lx,"on"+Nx)}ui(ap,"onAnimationEnd"),ui(rp,"onAnimationIteration"),ui(sp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(Z0,"onTransitionRun"),ui(K0,"onTransitionStart"),ui(Q0,"onTransitionCancel"),ui(op,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),Pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function wg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],F=T.instance,ne=T.currentTarget;if(T=T.listener,F!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=ne;try{f(c)}catch(he){Jo(he)}c.currentTarget=null,f=F}else for(g=0;g<s.length;g++){if(T=s[g],F=T.instance,ne=T.currentTarget,T=T.listener,F!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=ne;try{f(c)}catch(he){Jo(he)}c.currentTarget=null,f=F}}}}function _t(e,n){var a=n[Ns];a===void 0&&(a=n[Ns]=new Set);var s=e+"__bubble";a.has(s)||(Cg(n,e,2,!1),a.add(s))}function Af(e,n,a){var s=0;n&&(s|=4),Cg(a,e,s,n)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function Rf(e){if(!e[Fl]){e[Fl]=!0,Le.forEach(function(a){a!=="selectionchange"&&(Ox.has(a)||Af(a,!1,e),Af(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fl]||(n[Fl]=!0,Af("selectionchange",!1,n))}}function Cg(e,n,a,s){switch(a_(n)){case 2:var c=lS;break;case 8:c=cS;break;default:c=Vf}a=c.bind(null,n,a,e),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function wf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=s.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=W(T),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){s=f=g;continue e}T=T.parentNode}}s=s.return}Oh(function(){var ne=f,he=Xc(a),ge=[];e:{var ae=lp.get(e);if(ae!==void 0){var oe=Zo,Ge=e;switch(e){case"keypress":if(qo(a)===0)break e;case"keydown":case"keyup":oe=R0;break;case"focusin":Ge="focus",oe=Kc;break;case"focusout":Ge="blur",oe=Kc;break;case"beforeblur":case"afterblur":oe=Kc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=D0;break;case ap:case rp:case sp:oe=v0;break;case op:oe=L0;break;case"scroll":case"scrollend":oe=h0;break;case"wheel":oe=O0;break;case"copy":case"cut":case"paste":oe=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Ih;break;case"toggle":case"beforetoggle":oe=z0}var tt=(n&4)!==0,It=!tt&&(e==="scroll"||e==="scrollend"),Y=tt?ae!==null?ae+"Capture":null:ae;tt=[];for(var k=ne,te;k!==null;){var me=k;if(te=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||te===null||Y===null||(me=Os(k,Y),me!=null&&tt.push(po(k,me,te))),It)break;k=k.return}0<tt.length&&(ae=new oe(ae,Ge,null,a,he),ge.push({event:ae,listeners:tt}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",ae&&a!==kc&&(Ge=a.relatedTarget||a.fromElement)&&(W(Ge)||Ge[oa]))break e;if((oe||ae)&&(ae=he.window===he?he:(ae=he.ownerDocument)?ae.defaultView||ae.parentWindow:window,oe?(Ge=a.relatedTarget||a.toElement,oe=ne,Ge=Ge?W(Ge):null,Ge!==null&&(It=u(Ge),tt=Ge.tag,Ge!==It||tt!==5&&tt!==27&&tt!==6)&&(Ge=null)):(oe=null,Ge=ne),oe!==Ge)){if(tt=Bh,me="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(tt=Ih,me="onPointerLeave",Y="onPointerEnter",k="pointer"),It=oe==null?ae:se(oe),te=Ge==null?ae:se(Ge),ae=new tt(me,k+"leave",oe,a,he),ae.target=It,ae.relatedTarget=te,me=null,W(he)===ne&&(tt=new tt(Y,k+"enter",Ge,a,he),tt.target=te,tt.relatedTarget=It,me=tt),It=me,oe&&Ge)t:{for(tt=Px,Y=oe,k=Ge,te=0,me=Y;me;me=tt(me))te++;me=0;for(var $e=k;$e;$e=tt($e))me++;for(;0<te-me;)Y=tt(Y),te--;for(;0<me-te;)k=tt(k),me--;for(;te--;){if(Y===k||k!==null&&Y===k.alternate){tt=Y;break t}Y=tt(Y),k=tt(k)}tt=null}else tt=null;oe!==null&&Dg(ge,ae,oe,tt,!1),Ge!==null&&It!==null&&Dg(ge,It,Ge,tt,!0)}}e:{if(ae=ne?se(ne):window,oe=ae.nodeName&&ae.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ae.type==="file")var Tt=qh;else if(jh(ae))if(Yh)Tt=W0;else{Tt=X0;var Xe=k0}else oe=ae.nodeName,!oe||oe.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ne&&Vc(ne.elementType)&&(Tt=qh):Tt=j0;if(Tt&&(Tt=Tt(e,ne))){Wh(ge,Tt,a,he);break e}Xe&&Xe(e,ae,ne),e==="focusout"&&ne&&ae.type==="number"&&ne.memoizedProps.value!=null&&un(ae,"number",ae.value)}switch(Xe=ne?se(ne):window,e){case"focusin":(jh(Xe)||Xe.contentEditable==="true")&&(Dr=Xe,nu=ne,Vs=null);break;case"focusout":Vs=nu=Dr=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,np(ge,a,he);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":np(ge,a,he)}var lt;if(Jc)e:{switch(e){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Cr?kh(e,a)&&(St="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Hh&&a.locale!=="ko"&&(Cr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Cr&&(lt=Ph()):(la=he,qc="value"in la?la.value:la.textContent,Cr=!0)),Xe=Il(ne,St),0<Xe.length&&(St=new Fh(St,e,null,a,he),ge.push({event:St,listeners:Xe}),lt?St.data=lt:(lt=Xh(a),lt!==null&&(St.data=lt)))),(lt=F0?I0(e,a):H0(e,a))&&(St=Il(ne,"onBeforeInput"),0<St.length&&(Xe=new Fh("onBeforeInput","beforeinput",null,a,he),ge.push({event:Xe,listeners:St}),Xe.data=lt)),Ux(ge,e,ne,a,he)}wg(ge,n)})}function po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Il(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Os(e,a),c!=null&&s.unshift(po(e,c,f)),c=Os(e,n),c!=null&&s.push(po(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Px(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dg(e,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,F=T.alternate,ne=T.stateNode;if(T=T.tag,F!==null&&F===s)break;T!==5&&T!==26&&T!==27||ne===null||(F=ne,c?(ne=Os(a,f),ne!=null&&g.unshift(po(a,ne,F))):c||(ne=Os(a,f),ne!=null&&g.push(po(a,ne,F)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var zx=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function Ug(e){return(typeof e=="string"?e:""+e).replace(zx,`
`).replace(Bx,"")}function Lg(e,n){return n=Ug(n),Ug(e)===n}function Ft(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ar(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ar(e,""+s);break;case"className":Lt(e,"class",s);break;case"tabIndex":Lt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Lt(e,a,s);break;case"style":Lh(e,s,f);break;case"data":if(n!=="object"){Lt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=jo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ft(e,n,"name",c.name,c,null),Ft(e,n,"formEncType",c.formEncType,c,null),Ft(e,n,"formMethod",c.formMethod,c,null),Ft(e,n,"formTarget",c.formTarget,c,null)):(Ft(e,n,"encType",c.encType,c,null),Ft(e,n,"method",c.method,c,null),Ft(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=jo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ui);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=jo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":_t("beforetoggle",e),_t("toggle",e),kt(e,"popover",s);break;case"xlinkActuate":mt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":mt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":mt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":mt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":mt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":mt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":mt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":mt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":mt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":kt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=f0.get(a)||a,kt(e,a,s))}}function Cf(e,n,a,s,c,f){switch(a){case"style":Lh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Ar(e,s):(typeof s=="number"||typeof s=="bigint")&&Ar(e,""+s);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ui);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ve.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):kt(e,a,s)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ft(e,n,f,g,a,null)}}c&&Ft(e,n,"srcSet",a.srcSet,a,null),s&&Ft(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var T=f=g=c=null,F=null,ne=null;for(s in a)if(a.hasOwnProperty(s)){var he=a[s];if(he!=null)switch(s){case"name":c=he;break;case"type":g=he;break;case"checked":F=he;break;case"defaultChecked":ne=he;break;case"value":f=he;break;case"defaultValue":T=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:Ft(e,n,s,he,a,null)}}Dn(e,f,T,F,ne,g,c,!1);return;case"select":_t("invalid",e),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:Ft(e,n,c,T,a,null)}n=f,a=g,e.multiple=!!s,n!=null?en(e,!!s,n,!1):a!=null&&en(e,!!s,a,!0);return;case"textarea":_t("invalid",e),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ft(e,n,g,T,a,null)}Si(e,s,c,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ft(e,n,F,s,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(s=0;s<ho.length;s++)_t(ho[s],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(s=a[ne],s!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ft(e,n,ne,s,a,null)}return;default:if(Vc(n)){for(he in a)a.hasOwnProperty(he)&&(s=a[he],s!==void 0&&Cf(e,n,he,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ft(e,n,T,s,a,null))}function Fx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,T=null,F=null,ne=null,he=null;for(oe in a){var ge=a[oe];if(a.hasOwnProperty(oe)&&ge!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":F=ge;default:s.hasOwnProperty(oe)||Ft(e,n,oe,null,s,ge)}}for(var ae in s){var oe=s[ae];if(ge=a[ae],s.hasOwnProperty(ae)&&(oe!=null||ge!=null))switch(ae){case"type":f=oe;break;case"name":c=oe;break;case"checked":ne=oe;break;case"defaultChecked":he=oe;break;case"value":g=oe;break;case"defaultValue":T=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==ge&&Ft(e,n,ae,oe,s,ge)}}Tn(e,g,T,F,ne,he,f,c);return;case"select":oe=g=T=ae=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":oe=F;default:s.hasOwnProperty(f)||Ft(e,n,f,null,s,F)}for(c in s)if(f=s[c],F=a[c],s.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":ae=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==F&&Ft(e,n,c,f,s,F)}n=T,a=g,s=oe,ae!=null?en(e,!!a,ae,!1):!!s!=!!a&&(n!=null?en(e,!!a,n,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":oe=ae=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ft(e,n,T,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":ae=c;break;case"defaultValue":oe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ft(e,n,g,c,s,f)}Tr(e,ae,oe);return;case"option":for(var Ge in a)if(ae=a[Ge],a.hasOwnProperty(Ge)&&ae!=null&&!s.hasOwnProperty(Ge))switch(Ge){case"selected":e.selected=!1;break;default:Ft(e,n,Ge,null,s,ae)}for(F in s)if(ae=s[F],oe=a[F],s.hasOwnProperty(F)&&ae!==oe&&(ae!=null||oe!=null))switch(F){case"selected":e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Ft(e,n,F,ae,s,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ae=a[tt],a.hasOwnProperty(tt)&&ae!=null&&!s.hasOwnProperty(tt)&&Ft(e,n,tt,null,s,ae);for(ne in s)if(ae=s[ne],oe=a[ne],s.hasOwnProperty(ne)&&ae!==oe&&(ae!=null||oe!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:Ft(e,n,ne,ae,s,oe)}return;default:if(Vc(n)){for(var It in a)ae=a[It],a.hasOwnProperty(It)&&ae!==void 0&&!s.hasOwnProperty(It)&&Cf(e,n,It,void 0,s,ae);for(he in s)ae=s[he],oe=a[he],!s.hasOwnProperty(he)||ae===oe||ae===void 0&&oe===void 0||Cf(e,n,he,ae,s,oe);return}}for(var Y in a)ae=a[Y],a.hasOwnProperty(Y)&&ae!=null&&!s.hasOwnProperty(Y)&&Ft(e,n,Y,null,s,ae);for(ge in s)ae=s[ge],oe=a[ge],!s.hasOwnProperty(ge)||ae===oe||ae==null&&oe==null||Ft(e,n,ge,ae,s,oe)}function Ng(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ix(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,T=c.duration;if(f&&T&&Ng(g)){for(g=0,T=c.responseEnd,s+=1;s<a.length;s++){var F=a[s],ne=F.startTime;if(ne>T)break;var he=F.transferSize,ge=F.initiatorType;he&&Ng(ge)&&(F=F.responseEnd,g+=he*(F<T?1:(T-ne)/(F-ne)))}if(--s,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Df=null,Uf=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function Og(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Lf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nf=null;function Hx(){var e=window.event;return e&&e.type==="popstate"?e===Nf?!1:(Nf=e,!0):(Nf=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,Vx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(e){return Bg.resolve(null).then(e).catch(kx)}:zg;function kx(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Fg(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),is(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[Xa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&mo(e.ownerDocument.body);a=c}while(a);is(n)}function Ig(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Of(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Of(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Xa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=si(e.nextSibling),e===null)break}return null}function jx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=si(e.nextSibling),e===null))return null;return e}function Hg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=si(e.nextSibling),e===null))return null;return e}function Pf(e){return e.data==="$?"||e.data==="$~"}function zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Bf=null;function Gg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Vg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function kg(e,n,a){switch(n=Hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var oi=new Map,Xg=new Set;function Gl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=Q.d;Q.d={f:qx,r:Yx,D:Zx,C:Kx,L:Qx,m:Jx,X:eS,S:$x,M:tS};function qx(){var e=qi.f(),n=Ll();return e||n}function Yx(e){var n=re(e);n!==null&&n.tag===5&&n.type==="form"?om(n):qi.r(e)}var es=typeof document>"u"?null:document;function jg(e,n,a){var s=es;if(s&&typeof n=="string"&&n){var c=vt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Xg.has(c)||(Xg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),bn(n,"link",e),ye(n),s.head.appendChild(n)))}}function Zx(e){qi.D(e),jg("dns-prefetch",e,null)}function Kx(e,n){qi.C(e,n),jg("preconnect",e,n)}function Qx(e,n,a){qi.L(e,n,a);var s=es;if(s&&e&&n){var c='link[rel="preload"][as="'+vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+vt(a.imageSizes)+'"]')):c+='[href="'+vt(e)+'"]';var f=c;switch(n){case"style":f=ts(e);break;case"script":f=ns(e)}oi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(go(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),bn(n,"link",e),ye(n),s.head.appendChild(n)))}}function Jx(e,n){qi.m(e,n);var a=es;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+vt(s)+'"][href="'+vt(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ns(e)}if(!oi.has(f)&&(e=v({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),bn(s,"link",e),ye(s),a.head.appendChild(s)}}}function $x(e,n,a){qi.S(e,n,a);var s=es;if(s&&e){var c=q(s).hoistableStyles,f=ts(e);n=n||"default";var g=c.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(go(f)))T.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&Ff(e,a);var F=g=s.createElement("link");ye(F),bn(F,"link",e),F._p=new Promise(function(ne,he){F.onload=ne,F.onerror=he}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Vl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(f,g)}}}function eS(e,n){qi.X(e,n);var a=es;if(a&&e){var s=q(a).hoistableScripts,c=ns(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=v({src:e,async:!0},n),(n=oi.get(c))&&If(e,n),f=a.createElement("script"),ye(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function tS(e,n){qi.M(e,n);var a=es;if(a&&e){var s=q(a).hoistableScripts,c=ns(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&If(e,n),f=a.createElement("script"),ye(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Wg(e,n,a,s){var c=(c=_e.current)?Gl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ts(a.href),a=q(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ts(a.href);var f=q(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(go(e)))&&!f._p&&(g.instance=f,g.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||nS(c,e,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ns(a),a=q(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ts(e){return'href="'+vt(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function qg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function nS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),ye(n),e.head.appendChild(n))}function ns(e){return'[src="'+vt(e)+'"]'}function _o(e){return"script[async]"+e}function Yg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+vt(a.href)+'"]');if(s)return n.instance=s,ye(s),s;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ye(s),bn(s,"style",c),Vl(s,a.precedence,e),n.instance=s;case"stylesheet":c=ts(a.href);var f=e.querySelector(go(c));if(f)return n.state.loading|=4,n.instance=f,ye(f),f;s=qg(a),(c=oi.get(c))&&Ff(s,c),f=(e.ownerDocument||e).createElement("link"),ye(f);var g=f;return g._p=new Promise(function(T,F){g.onload=T,g.onerror=F}),bn(f,"link",s),n.state.loading|=4,Vl(f,a.precedence,e),n.instance=f;case"script":return f=ns(a.src),(c=e.querySelector(_o(f)))?(n.instance=c,ye(c),c):(s=a,(c=oi.get(f))&&(s=v({},a),If(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),ye(c),bn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Vl(s,a.precedence,e));return n.instance}function Vl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function If(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var kl=null;function Zg(e,n,a){if(kl===null){var s=new Map,c=kl=new Map;c.set(a,s)}else c=kl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Xa]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function Kg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function iS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function aS(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ts(s.href),f=n.querySelector(go(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Xl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,ye(f);return}f=n.ownerDocument||n,s=qg(s),(c=oi.get(c))&&Ff(s,c),f=f.createElement("link"),ye(f);var g=f;g._p=new Promise(function(T,F){g.onload=T,g.onerror=F}),bn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hf=0;function rS(e,n){return e.stylesheets&&e.count===0&&Wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Hf===0&&(Hf=62500*Ix());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Hf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jl=null;function Wl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jl=new Map,n.forEach(sS,e),jl=null,Xl.call(e))}function sS(e,n){if(!(n.state.loading&4)){var a=jl.get(e);if(a)var s=a.get(null);else{a=new Map,jl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Xl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var vo={$$typeof:z,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function oS(e,n,a,s,c,f,g,T,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Jg(e,n,a,s,c,f,g,T,F,ne,he,ge){return e=new oS(e,n,a,g,F,ne,he,ge,T),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),e.current=f,f.stateNode=e,n=vu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Mu(f),e}function $g(e){return e?(e=Nr,e):Nr}function e_(e,n,a,s,c,f){c=$g(c),s.context===null?s.context=c:s.pendingContext=c,s=pa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ma(e,s,n),a!==null&&(In(a,e,n),Zs(a,e,n))}function t_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Gf(e,n){t_(e,n),(e=e.alternate)&&t_(e,n)}function n_(e){if(e.tag===13||e.tag===31){var n=Za(e,67108864);n!==null&&In(n,e,67108864),Gf(e,67108864)}}function i_(e){if(e.tag===13||e.tag===31){var n=Zn();n=Er(n);var a=Za(e,n);a!==null&&In(a,e,n),Gf(e,n)}}var ql=!0;function lS(e,n,a,s){var c=L.T;L.T=null;var f=Q.p;try{Q.p=2,Vf(e,n,a,s)}finally{Q.p=f,L.T=c}}function cS(e,n,a,s){var c=L.T;L.T=null;var f=Q.p;try{Q.p=8,Vf(e,n,a,s)}finally{Q.p=f,L.T=c}}function Vf(e,n,a,s){if(ql){var c=kf(s);if(c===null)wf(e,n,s,Yl,a),r_(e,s);else if(fS(c,e,n,a,s))s.stopPropagation();else if(r_(e,s),n&4&&-1<uS.indexOf(e)){for(;c!==null;){var f=re(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=be(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var F=1<<31-ze(g);T.entanglements[1]|=F,g&=~F}bi(f),(Ct&6)===0&&(Dl=b()+500,fo(0))}}break;case 31:case 13:T=Za(f,2),T!==null&&In(T,f,2),Ll(),Gf(f,2)}if(f=kf(s),f===null&&wf(e,n,s,Yl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else wf(e,n,s,null,a)}}function kf(e){return e=Xc(e),Xf(e)}var Yl=null;function Xf(e){if(Yl=null,e=W(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yl=e,null}function a_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case pe:return 2;case Ee:return 8;case de:case Ye:return 32;case we:return 268435456;default:return 32}default:return 32}}var jf=!1,Aa=null,Ra=null,wa=null,xo=new Map,So=new Map,Ca=[],uS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r_(e,n){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function yo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=re(n),n!==null&&n_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function fS(e,n,a,s,c){switch(n){case"focusin":return Aa=yo(Aa,e,n,a,s,c),!0;case"dragenter":return Ra=yo(Ra,e,n,a,s,c),!0;case"mouseover":return wa=yo(wa,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return xo.set(f,yo(xo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,So.set(f,yo(So.get(f)||null,e,n,a,s,c)),!0}return!1}function s_(e){var n=W(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ls(e.priority,function(){i_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ls(e.priority,function(){i_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=kf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);kc=s,a.target.dispatchEvent(s),kc=null}else return n=re(a),n!==null&&n_(n),e.blockedOn=a,!1;n.shift()}return!0}function o_(e,n,a){Zl(e)&&a.delete(n)}function dS(){jf=!1,Aa!==null&&Zl(Aa)&&(Aa=null),Ra!==null&&Zl(Ra)&&(Ra=null),wa!==null&&Zl(wa)&&(wa=null),xo.forEach(o_),So.forEach(o_)}function Kl(e,n){e.blockedOn===n&&(e.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dS)))}var Ql=null;function l_(e){Ql!==e&&(Ql=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Xf(s||a)===null)continue;break}var f=re(a);f!==null&&(e.splice(n,3),n-=3,Vu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function is(e){function n(F){return Kl(F,e)}Aa!==null&&Kl(Aa,e),Ra!==null&&Kl(Ra,e),wa!==null&&Kl(wa,e),xo.forEach(n),So.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)s_(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[xn]||null;if(typeof f=="function")g||l_(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[xn]||null)T=g.formAction;else if(Xf(c)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),l_(a)}}}function c_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wf(e){this._internalRoot=e}Jl.prototype.render=Wf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();e_(a,s,e,n,null,null)},Jl.prototype.unmount=Wf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e_(e.current,2,null,e,null,null),Ll(),n[oa]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=ka();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&s_(e)}};var u_=t.version;if(u_!=="19.2.7")throw Error(r(527,u_,"19.2.7"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var hS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Ae=$l.inject(hS),Ce=$l}catch{}}return Eo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=_m,f=vm,g=xm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Jg(e,1,!1,null,null,a,s,null,c,f,g,c_),e[oa]=n.current,Rf(e),new Wf(n)},Eo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=_m,g=vm,T=xm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=Jg(e,1,!0,n,a??null,s,c,F,f,g,T,c_),n.context=$g(null),a=n.current,s=Zn(),s=Er(s),c=pa(s),c.callback=null,ma(a,c,s),a=s,n.current.lanes=a,Cn(n,a),bi(n),e[oa]=n.current,Rf(e),new Jl(n)},Eo.version="19.2.7",Eo}var S_;function bS(){if(S_)return Zf.exports;S_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Zf.exports=ES(),Zf.exports}var TS=bS();const AS=wv(TS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vh="179",RS=0,y_=1,wS=2,Cv=1,Dv=2,ea=3,Ga=0,Hn=1,ta=2,Fa=0,Ss=1,M_=2,E_=3,b_=4,CS=5,gr=100,DS=101,US=102,LS=103,NS=104,OS=200,PS=201,zS=202,BS=203,Ud=204,Ld=205,FS=206,IS=207,HS=208,GS=209,VS=210,kS=211,XS=212,jS=213,WS=214,Nd=0,Od=1,Pd=2,Es=3,zd=4,Bd=5,Fd=6,Id=7,Uv=0,qS=1,YS=2,Ia=0,ZS=1,KS=2,QS=3,JS=4,$S=5,ey=6,ty=7,Lv=300,bs=301,Ts=302,Hd=303,Gd=304,zc=306,Vd=1e3,vr=1001,kd=1002,vi=1003,ny=1004,ec=1005,Ai=1006,$f=1007,xr=1008,Ci=1009,Nv=1010,Ov=1011,Oo=1012,xh=1013,Sr=1014,na=1015,Io=1016,Sh=1017,yh=1018,Po=1020,Pv=35902,zv=1021,Bv=1022,_i=1023,zo=1026,Bo=1027,Fv=1028,Mh=1029,Iv=1030,Eh=1031,bh=1033,Tc=33776,Ac=33777,Rc=33778,wc=33779,Xd=35840,jd=35841,Wd=35842,qd=35843,Yd=36196,Zd=37492,Kd=37496,Qd=37808,Jd=37809,$d=37810,eh=37811,th=37812,nh=37813,ih=37814,ah=37815,rh=37816,sh=37817,oh=37818,lh=37819,ch=37820,uh=37821,Cc=36492,fh=36494,dh=36495,Hv=36283,hh=36284,ph=36285,mh=36286,iy=3200,ay=3201,ry=0,sy=1,Ba="",ci="srgb",As="srgb-linear",Uc="linear",Ht="srgb",as=7680,T_=519,oy=512,ly=513,cy=514,Gv=515,uy=516,fy=517,dy=518,hy=519,A_=35044,R_="300 es",Ri=2e3,Lc=2001;class ws{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let w_=1234567;const Lo=Math.PI/180,Fo=180/Math.PI;function Cs(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function yt(o,t,i){return Math.max(t,Math.min(i,o))}function Th(o,t){return(o%t+t)%t}function py(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function my(o,t,i){return o!==t?(i-o)/(t-o):0}function No(o,t,i){return(1-i)*o+i*t}function gy(o,t,i,r){return No(o,t,1-Math.exp(-i*r))}function _y(o,t=1){return t-Math.abs(Th(o,t*2)-t)}function vy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function xy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function Sy(o,t){return o+Math.floor(Math.random()*(t-o+1))}function yy(o,t){return o+Math.random()*(t-o)}function My(o){return o*(.5-Math.random())}function Ey(o){o!==void 0&&(w_=o);let t=w_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function by(o){return o*Lo}function Ty(o){return o*Fo}function Ay(o){return(o&o-1)===0&&o!==0}function Ry(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function wy(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Cy(o,t,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),m=d(i/2),p=u((t+r)/2),x=d((t+r)/2),v=u((t-r)/2),S=d((t-r)/2),y=u((r-t)/2),A=d((r-t)/2);switch(l){case"XYX":o.set(h*x,m*v,m*S,h*p);break;case"YZY":o.set(m*S,h*x,m*v,h*p);break;case"ZXZ":o.set(m*v,m*S,h*x,h*p);break;case"XZX":o.set(h*x,m*A,m*y,h*p);break;case"YXY":o.set(m*y,h*x,m*A,h*p);break;case"ZYZ":o.set(m*A,m*y,h*x,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function vs(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ln(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const tc={DEG2RAD:Lo,RAD2DEG:Fo,generateUUID:Cs,clamp:yt,euclideanModulo:Th,mapLinear:py,inverseLerp:my,lerp:No,damp:gy,pingpong:_y,smoothstep:vy,smootherstep:xy,randInt:Sy,randFloat:yy,randFloatSpread:My,seededRandom:Ey,degToRad:by,radToDeg:Ty,isPowerOfTwo:Ay,ceilPowerOfTwo:Ry,floorPowerOfTwo:wy,setQuaternionFromProperEuler:Cy,normalize:Ln,denormalize:vs};class Dt{constructor(t=0,i=0){Dt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(yt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ho{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],v=r[l+3];const S=u[d+0],y=u[d+1],A=u[d+2],E=u[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=v;return}if(h===1){t[i+0]=S,t[i+1]=y,t[i+2]=A,t[i+3]=E;return}if(v!==E||m!==S||p!==y||x!==A){let M=1-h;const _=m*S+p*y+x*A+v*E,V=_>=0?1:-1,z=1-_*_;if(z>Number.EPSILON){const X=Math.sqrt(z),G=Math.atan2(X,_*V);M=Math.sin(M*G)/X,h=Math.sin(h*G)/X}const N=h*V;if(m=m*M+S*N,p=p*M+y*N,x=x*M+A*N,v=v*M+E*N,M===1-h){const X=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=X,p*=X,x*=X,v*=X}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],v=u[d],S=u[d+1],y=u[d+2],A=u[d+3];return t[i]=h*A+x*v+m*y-p*S,t[i+1]=m*A+x*S+p*v-h*y,t[i+2]=p*A+x*y+h*S-m*v,t[i+3]=x*A-h*v-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),v=h(u/2),S=m(r/2),y=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*x*v+p*y*A,this._y=p*y*v-S*x*A,this._z=p*x*A+S*y*v,this._w=p*x*v-S*y*A;break;case"YXZ":this._x=S*x*v+p*y*A,this._y=p*y*v-S*x*A,this._z=p*x*A-S*y*v,this._w=p*x*v+S*y*A;break;case"ZXY":this._x=S*x*v-p*y*A,this._y=p*y*v+S*x*A,this._z=p*x*A+S*y*v,this._w=p*x*v-S*y*A;break;case"ZYX":this._x=S*x*v-p*y*A,this._y=p*y*v+S*x*A,this._z=p*x*A-S*y*v,this._w=p*x*v+S*y*A;break;case"YZX":this._x=S*x*v+p*y*A,this._y=p*y*v+S*x*A,this._z=p*x*A-S*y*v,this._w=p*x*v-S*y*A;break;case"XZY":this._x=S*x*v-p*y*A,this._y=p*y*v-S*x*A,this._z=p*x*A+S*y*v,this._w=p*x*v+S*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],v=i[10],S=r+h+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(x-m)*y,this._y=(u-p)*y,this._z=(d-l)*y}else if(r>h&&r>v){const y=2*Math.sqrt(1+r-h-v);this._w=(x-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-r-v);this._w=(u-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+v-r-h);this._w=(d-l)/y,this._x=(u+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-r*p,this._z=u*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-i;return this._w=y*d+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,h),v=Math.sin((1-i)*x)/p,S=Math.sin(i*x)/p;return this._w=d*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(t=0,i=0,r=0){ee.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(C_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(C_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),x=2*(h*i-u*l),v=2*(u*r-d*i);return this.x=i+m*p+d*v-h*x,this.y=r+m*x+h*p-u*v,this.z=l+m*v+u*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ed.copy(this).projectOnVector(t),this.sub(ed)}reflect(t){return this.sub(ed.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(yt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new ee,C_=new Ho;class ct{constructor(t,i,r,l,u,d,h,m,p){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],v=r[7],S=r[2],y=r[5],A=r[8],E=l[0],M=l[3],_=l[6],V=l[1],z=l[4],N=l[7],X=l[2],G=l[5],I=l[8];return u[0]=d*E+h*V+m*X,u[3]=d*M+h*z+m*G,u[6]=d*_+h*N+m*I,u[1]=p*E+x*V+v*X,u[4]=p*M+x*z+v*G,u[7]=p*_+x*N+v*I,u[2]=S*E+y*V+A*X,u[5]=S*M+y*z+A*G,u[8]=S*_+y*N+A*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-r*u*x+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],v=x*d-h*p,S=h*m-x*u,y=p*u-d*m,A=i*v+r*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=v*E,t[1]=(l*p-x*r)*E,t[2]=(h*r-l*d)*E,t[3]=S*E,t[4]=(x*i-l*m)*E,t[5]=(l*u-h*i)*E,t[6]=y*E,t[7]=(r*m-p*i)*E,t[8]=(d*i-r*u)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(td.makeScale(t,i)),this}rotate(t){return this.premultiply(td.makeRotation(-t)),this}translate(t,i){return this.premultiply(td.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const td=new ct;function Vv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Nc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Dy(){const o=Nc("canvas");return o.style.display="block",o}const D_={};function ys(o){o in D_||(D_[o]=!0,console.warn(o))}function Uy(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const U_=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ly(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ht&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ht&&(l.r=Ms(l.r),l.g=Ms(l.g),l.b=Ms(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ba?Uc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:t,whitePoint:r,transfer:Uc,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:Ht,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const Rt=Ly();function aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rs;class Ny{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{rs===void 0&&(rs=Nc("canvas")),rs.width=t.width,rs.height=t.height;const l=rs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=rs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Nc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=aa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Oy=0;class Ah{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(nd(l[d].image)):u.push(nd(l[d]))}else u=nd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function nd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ny.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Py=0;const id=new ee;class Gn extends ws{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=vr,l=vr,u=Ai,d=xr,h=_i,m=Ci,p=Gn.DEFAULT_ANISOTROPY,x=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Cs(),this.name="",this.source=new Ah(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(id).x}get height(){return this.source.getSize(id).y}get depth(){return this.source.getSize(id).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vd:t.x=t.x-Math.floor(t.x);break;case vr:t.x=t.x<0?0:1;break;case kd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vd:t.y=t.y-Math.floor(t.y);break;case vr:t.y=t.y<0?0:1;break;case kd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Lv;Gn.DEFAULT_ANISOTROPY=1;class Gt{constructor(t=0,i=0,r=0,l=1){Gt.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],x=m[4],v=m[8],S=m[1],y=m[5],A=m[9],E=m[2],M=m[6],_=m[10];if(Math.abs(x-S)<.01&&Math.abs(v-E)<.01&&Math.abs(A-M)<.01){if(Math.abs(x+S)<.1&&Math.abs(v+E)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,N=(y+1)/2,X=(_+1)/2,G=(x+S)/4,I=(v+E)/4,K=(A+M)/4;return z>N&&z>X?z<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(z),l=G/r,u=I/r):N>X?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=G/l,u=K/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=I/u,l=K/u),this.set(r,l,u,i),this}let V=Math.sqrt((M-A)*(M-A)+(v-E)*(v-E)+(S-x)*(S-x));return Math.abs(V)<.001&&(V=1),this.x=(M-A)/V,this.y=(v-E)/V,this.z=(S-x)/V,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this.w=yt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this.w=yt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zy extends ws{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Gt(0,0,t,i),this.scissorTest=!1,this.viewport=new Gt(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Gn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ah(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends zy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class kv extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class By extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(t=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,hi):hi.fromBufferAttribute(u,d),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nc.copy(r.boundingBox)),nc.applyMatrix4(t.matrixWorld),this.union(nc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bo),ic.subVectors(this.max,bo),ss.subVectors(t.a,bo),os.subVectors(t.b,bo),ls.subVectors(t.c,bo),Ua.subVectors(os,ss),La.subVectors(ls,os),lr.subVectors(ss,ls);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-lr.z,lr.y,Ua.z,0,-Ua.x,La.z,0,-La.x,lr.z,0,-lr.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-lr.y,lr.x,0];return!ad(i,ss,os,ls,ic)||(i=[1,0,0,0,1,0,0,0,1],!ad(i,ss,os,ls,ic))?!1:(ac.crossVectors(Ua,La),i=[ac.x,ac.y,ac.z],ad(i,ss,os,ls,ic))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Yi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],hi=new ee,nc=new Go,ss=new ee,os=new ee,ls=new ee,Ua=new ee,La=new ee,lr=new ee,bo=new ee,ic=new ee,ac=new ee,cr=new ee;function ad(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){cr.fromArray(o,u);const h=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=t.dot(cr),p=i.dot(cr),x=r.dot(cr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const Fy=new Go,To=new ee,rd=new ee;class Bc{constructor(t=new ee,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Fy.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;To.subVectors(t,this.center);const i=To.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(To,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(To.copy(t.center).add(rd)),this.expandByPoint(To.copy(t.center).sub(rd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Zi=new ee,sd=new ee,rc=new ee,Na=new ee,od=new ee,sc=new ee,ld=new ee;class Xv{constructor(t=new ee,i=new ee(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){sd.copy(t).add(i).multiplyScalar(.5),rc.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(sd);const u=t.distanceTo(i)*.5,d=-this.direction.dot(rc),h=Na.dot(this.direction),m=-Na.dot(rc),p=Na.lengthSq(),x=Math.abs(1-d*d);let v,S,y,A;if(x>0)if(v=d*m-h,S=d*h-m,A=u*x,v>=0)if(S>=-A)if(S<=A){const E=1/x;v*=E,S*=E,y=v*(v+d*S+2*h)+S*(d*v+S+2*m)+p}else S=u,v=Math.max(0,-(d*S+h)),y=-v*v+S*(S+2*m)+p;else S=-u,v=Math.max(0,-(d*S+h)),y=-v*v+S*(S+2*m)+p;else S<=-A?(v=Math.max(0,-(-d*u+h)),S=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+S*(S+2*m)+p):S<=A?(v=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(v=Math.max(0,-(d*u+h)),S=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+S*(S+2*m)+p);else S=d>0?-u:u,v=Math.max(0,-(d*S+h)),y=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(sd).addScaledVector(rc,S),y}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),x>=0?(u=(t.min.y-S.y)*x,d=(t.max.y-S.y)*x):(u=(t.max.y-S.y)*x,d=(t.min.y-S.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-S.z)*v,m=(t.max.z-S.z)*v):(h=(t.max.z-S.z)*v,m=(t.min.z-S.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,r,l,u){od.subVectors(i,t),sc.subVectors(r,t),ld.crossVectors(od,sc);let d=this.direction.dot(ld),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Na.subVectors(this.origin,t);const m=h*this.direction.dot(sc.crossVectors(Na,sc));if(m<0)return null;const p=h*this.direction.dot(od.cross(Na));if(p<0||m+p>d)return null;const x=-h*Na.dot(ld);return x<0?null:this.at(x/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,i,r,l,u,d,h,m,p,x,v,S,y,A,E,M){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,x,v,S,y,A,E,M)}set(t,i,r,l,u,d,h,m,p,x,v,S,y,A,E,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=x,_[10]=v,_[14]=S,_[3]=y,_[7]=A,_[11]=E,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/cs.setFromMatrixColumn(t,0).length(),u=1/cs.setFromMatrixColumn(t,1).length(),d=1/cs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const S=d*x,y=d*v,A=h*x,E=h*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=y+A*p,i[5]=S-E*p,i[9]=-h*m,i[2]=E-S*p,i[6]=A+y*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*x,y=m*v,A=p*x,E=p*v;i[0]=S+E*h,i[4]=A*h-y,i[8]=d*p,i[1]=d*v,i[5]=d*x,i[9]=-h,i[2]=y*h-A,i[6]=E+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*x,y=m*v,A=p*x,E=p*v;i[0]=S-E*h,i[4]=-d*v,i[8]=A+y*h,i[1]=y+A*h,i[5]=d*x,i[9]=E-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*x,y=d*v,A=h*x,E=h*v;i[0]=m*x,i[4]=A*p-y,i[8]=S*p+E,i[1]=m*v,i[5]=E*p+S,i[9]=y*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,y=d*p,A=h*m,E=h*p;i[0]=m*x,i[4]=E-S*v,i[8]=A*v+y,i[1]=v,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=y*v+A,i[10]=S-E*v}else if(t.order==="XZY"){const S=d*m,y=d*p,A=h*m,E=h*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=S*v+E,i[5]=d*x,i[9]=y*v-A,i[2]=A*v-y,i[6]=h*x,i[10]=E*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Iy,t,Hy)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Oa.crossVectors(r,Kn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Oa.crossVectors(r,Kn)),Oa.normalize(),oc.crossVectors(Kn,Oa),l[0]=Oa.x,l[4]=oc.x,l[8]=Kn.x,l[1]=Oa.y,l[5]=oc.y,l[9]=Kn.y,l[2]=Oa.z,l[6]=oc.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],v=r[5],S=r[9],y=r[13],A=r[2],E=r[6],M=r[10],_=r[14],V=r[3],z=r[7],N=r[11],X=r[15],G=l[0],I=l[4],K=l[8],D=l[12],C=l[1],B=l[5],fe=l[9],le=l[13],ce=l[2],Se=l[6],L=l[10],Q=l[14],U=l[3],Z=l[7],ue=l[11],O=l[15];return u[0]=d*G+h*C+m*ce+p*U,u[4]=d*I+h*B+m*Se+p*Z,u[8]=d*K+h*fe+m*L+p*ue,u[12]=d*D+h*le+m*Q+p*O,u[1]=x*G+v*C+S*ce+y*U,u[5]=x*I+v*B+S*Se+y*Z,u[9]=x*K+v*fe+S*L+y*ue,u[13]=x*D+v*le+S*Q+y*O,u[2]=A*G+E*C+M*ce+_*U,u[6]=A*I+E*B+M*Se+_*Z,u[10]=A*K+E*fe+M*L+_*ue,u[14]=A*D+E*le+M*Q+_*O,u[3]=V*G+z*C+N*ce+X*U,u[7]=V*I+z*B+N*Se+X*Z,u[11]=V*K+z*fe+N*L+X*ue,u[15]=V*D+z*le+N*Q+X*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],v=t[6],S=t[10],y=t[14],A=t[3],E=t[7],M=t[11],_=t[15];return A*(+u*m*v-l*p*v-u*h*S+r*p*S+l*h*y-r*m*y)+E*(+i*m*y-i*p*S+u*d*S-l*d*y+l*p*x-u*m*x)+M*(+i*p*v-i*h*y-u*d*v+r*d*y+u*h*x-r*p*x)+_*(-l*h*x-i*m*v+i*h*S+l*d*v-r*d*S+r*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],v=t[9],S=t[10],y=t[11],A=t[12],E=t[13],M=t[14],_=t[15],V=v*M*p-E*S*p+E*m*y-h*M*y-v*m*_+h*S*_,z=A*S*p-x*M*p-A*m*y+d*M*y+x*m*_-d*S*_,N=x*E*p-A*v*p+A*h*y-d*E*y-x*h*_+d*v*_,X=A*v*m-x*E*m-A*h*S+d*E*S+x*h*M-d*v*M,G=i*V+r*z+l*N+u*X;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return t[0]=V*I,t[1]=(E*S*u-v*M*u-E*l*y+r*M*y+v*l*_-r*S*_)*I,t[2]=(h*M*u-E*m*u+E*l*p-r*M*p-h*l*_+r*m*_)*I,t[3]=(v*m*u-h*S*u-v*l*p+r*S*p+h*l*y-r*m*y)*I,t[4]=z*I,t[5]=(x*M*u-A*S*u+A*l*y-i*M*y-x*l*_+i*S*_)*I,t[6]=(A*m*u-d*M*u-A*l*p+i*M*p+d*l*_-i*m*_)*I,t[7]=(d*S*u-x*m*u+x*l*p-i*S*p-d*l*y+i*m*y)*I,t[8]=N*I,t[9]=(A*v*u-x*E*u-A*r*y+i*E*y+x*r*_-i*v*_)*I,t[10]=(d*E*u-A*h*u+A*r*p-i*E*p-d*r*_+i*h*_)*I,t[11]=(x*h*u-d*v*u-x*r*p+i*v*p+d*r*y-i*h*y)*I,t[12]=X*I,t[13]=(x*E*l-A*v*l+A*r*S-i*E*S-x*r*M+i*v*M)*I,t[14]=(A*h*l-d*E*l-A*r*m+i*E*m+d*r*M-i*h*M)*I,t[15]=(d*v*l-x*h*l+x*r*m-i*v*m-d*r*S+i*h*S)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,x=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,v=h+h,S=u*p,y=u*x,A=u*v,E=d*x,M=d*v,_=h*v,V=m*p,z=m*x,N=m*v,X=r.x,G=r.y,I=r.z;return l[0]=(1-(E+_))*X,l[1]=(y+N)*X,l[2]=(A-z)*X,l[3]=0,l[4]=(y-N)*G,l[5]=(1-(S+_))*G,l[6]=(M+V)*G,l[7]=0,l[8]=(A+z)*I,l[9]=(M-V)*I,l[10]=(1-(S+E))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=cs.set(l[0],l[1],l[2]).length();const d=cs.set(l[4],l[5],l[6]).length(),h=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/u,x=1/d,v=1/h;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=x,pi.elements[5]*=x,pi.elements[6]*=x,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Ri,m=!1){const p=this.elements,x=2*u/(i-t),v=2*u/(r-l),S=(i+t)/(i-t),y=(r+l)/(r-l);let A,E;if(m)A=u/(d-u),E=d*u/(d-u);else if(h===Ri)A=-(d+u)/(d-u),E=-2*d*u/(d-u);else if(h===Lc)A=-d/(d-u),E=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Ri,m=!1){const p=this.elements,x=2/(i-t),v=2/(r-l),S=-(i+t)/(i-t),y=-(r+l)/(r-l);let A,E;if(m)A=1/(d-u),E=d/(d-u);else if(h===Ri)A=-2/(d-u),E=-(d+u)/(d-u);else if(h===Lc)A=-1/(d-u),E=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const cs=new ee,pi=new Kt,Iy=new ee(0,0,0),Hy=new ee(1,1,1),Oa=new ee,oc=new ee,Kn=new ee,N_=new Kt,O_=new Ho;class ra{constructor(t=0,i=0,r=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return N_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(N_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return O_.setFromEuler(this),this.setFromQuaternion(O_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class jv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gy=0;const P_=new ee,us=new Ho,Ki=new Kt,lc=new ee,Ao=new ee,Vy=new ee,ky=new Ho,z_=new ee(1,0,0),B_=new ee(0,1,0),F_=new ee(0,0,1),I_={type:"added"},Xy={type:"removed"},fs={type:"childadded",child:null},cd={type:"childremoved",child:null};class vn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new ee,i=new ra,r=new Ho,l=new ee(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ct}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return us.setFromAxisAngle(t,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,i){return us.setFromAxisAngle(t,i),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(z_,t)}rotateY(t){return this.rotateOnAxis(B_,t)}rotateZ(t){return this.rotateOnAxis(F_,t)}translateOnAxis(t,i){return P_.copy(t).applyQuaternion(this.quaternion),this.position.add(P_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(z_,t)}translateY(t){return this.translateOnAxis(B_,t)}translateZ(t){return this.translateOnAxis(F_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?lc.copy(t):lc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ao,lc,this.up):Ki.lookAt(lc,Ao,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),us.setFromRotationMatrix(Ki),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(I_),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Xy),cd.child=t,this.dispatchEvent(cd),cd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(I_),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,Vy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,ky,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),v=d(t.shapes),S=d(t.skeletons),y=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}vn.DEFAULT_UP=new ee(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new ee,Qi=new ee,ud=new ee,Ji=new ee,ds=new ee,hs=new ee,H_=new ee,fd=new ee,dd=new ee,hd=new ee,pd=new Gt,md=new Gt,gd=new Gt;class gi{constructor(t=new ee,i=new ee,r=new ee){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){mi.subVectors(l,i),Qi.subVectors(r,i),ud.subVectors(t,i);const d=mi.dot(mi),h=mi.dot(Qi),m=mi.dot(ud),p=Qi.dot(Qi),x=Qi.dot(ud),v=d*p-h*h;if(v===0)return u.set(0,0,0),null;const S=1/v,y=(p*m-h*x)*S,A=(d*x-h*m)*S;return u.set(1-y-A,A,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(d,Ji.y),m.addScaledVector(h,Ji.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(t,i),md.fromBufferAttribute(t,r),gd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(pd,u.x),d.addScaledVector(md,u.y),d.addScaledVector(gd,u.z),d}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),Qi.subVectors(t,i),mi.cross(Qi).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),mi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ds.subVectors(l,r),hs.subVectors(u,r),fd.subVectors(t,r);const m=ds.dot(fd),p=hs.dot(fd);if(m<=0&&p<=0)return i.copy(r);dd.subVectors(t,l);const x=ds.dot(dd),v=hs.dot(dd);if(x>=0&&v<=x)return i.copy(l);const S=m*v-x*p;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(ds,d);hd.subVectors(t,u);const y=ds.dot(hd),A=hs.dot(hd);if(A>=0&&y<=A)return i.copy(u);const E=y*p-m*A;if(E<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(hs,h);const M=x*A-y*v;if(M<=0&&v-x>=0&&y-A>=0)return H_.subVectors(u,l),h=(v-x)/(v-x+(y-A)),i.copy(l).addScaledVector(H_,h);const _=1/(M+E+S);return d=E*_,h=S*_,i.copy(r).addScaledVector(ds,d).addScaledVector(hs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},cc={h:0,s:0,l:0};function _d(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class wt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Rt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Rt.workingColorSpace){if(t=Th(t,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=_d(d,u,t+1/3),this.g=_d(d,u,t),this.b=_d(d,u,t-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const r=Wv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return Rt.workingToColorSpace(wn.copy(this),t),Math.round(yt(wn.r*255,0,255))*65536+Math.round(yt(wn.g*255,0,255))*256+Math.round(yt(wn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Rt.workingColorSpace){Rt.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=x<=.5?v/(d+h):v/(2-d-h),d){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Rt.workingColorSpace){return Rt.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=ci){Rt.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+t,Pa.s+i,Pa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Pa),t.getHSL(cc);const r=No(Pa.h,cc.h,i),l=No(Pa.s,cc.s,i),u=No(Pa.l,cc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new wt;wt.NAMES=Wv;let jy=0;class Vo extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=Ss,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Ld,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Ga&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ud&&(r.blendSrc=this.blendSrc),this.blendDst!==Ld&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qv extends Vo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=Uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new ee,uc=new Dt;let Wy=0;class wi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=A_,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)uc.fromBufferAttribute(this,i),uc.applyMatrix3(t),this.setXY(i,uc.x,uc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=vs(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ln(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=vs(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=vs(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=vs(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=vs(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array),u=Ln(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==A_&&(t.usage=this.usage),t}}class Yv extends wi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Zv extends wi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ha extends wi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let qy=0;const li=new Kt,vd=new vn,ps=new ee,Qn=new Go,Ro=new Go,_n=new ee;class sa extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vv(t)?Zv:Yv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ct().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,r){return li.makeTranslation(t,i,r),this.applyMatrix4(li),this}scale(t,i,r){return li.makeScale(t,i,r),this.applyMatrix4(li),this}lookAt(t){return vd.lookAt(t),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ha(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Ro.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors(Qn.min,Ro.min),Qn.expandByPoint(_n),_n.addVectors(Qn.max,Ro.max),Qn.expandByPoint(_n)):(Qn.expandByPoint(Ro.min),Qn.expandByPoint(Ro.max))}Qn.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)_n.fromBufferAttribute(h,p),m&&(ps.fromBufferAttribute(t,p),_n.add(ps)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<r.count;K++)h[K]=new ee,m[K]=new ee;const p=new ee,x=new ee,v=new ee,S=new Dt,y=new Dt,A=new Dt,E=new ee,M=new ee;function _(K,D,C){p.fromBufferAttribute(r,K),x.fromBufferAttribute(r,D),v.fromBufferAttribute(r,C),S.fromBufferAttribute(u,K),y.fromBufferAttribute(u,D),A.fromBufferAttribute(u,C),x.sub(p),v.sub(p),y.sub(S),A.sub(S);const B=1/(y.x*A.y-A.x*y.y);isFinite(B)&&(E.copy(x).multiplyScalar(A.y).addScaledVector(v,-y.y).multiplyScalar(B),M.copy(v).multiplyScalar(y.x).addScaledVector(x,-A.x).multiplyScalar(B),h[K].add(E),h[D].add(E),h[C].add(E),m[K].add(M),m[D].add(M),m[C].add(M))}let V=this.groups;V.length===0&&(V=[{start:0,count:t.count}]);for(let K=0,D=V.length;K<D;++K){const C=V[K],B=C.start,fe=C.count;for(let le=B,ce=B+fe;le<ce;le+=3)_(t.getX(le+0),t.getX(le+1),t.getX(le+2))}const z=new ee,N=new ee,X=new ee,G=new ee;function I(K){X.fromBufferAttribute(l,K),G.copy(X);const D=h[K];z.copy(D),z.sub(X.multiplyScalar(X.dot(D))).normalize(),N.crossVectors(G,D);const B=N.dot(m[K])<0?-1:1;d.setXYZW(K,z.x,z.y,z.z,B)}for(let K=0,D=V.length;K<D;++K){const C=V[K],B=C.start,fe=C.count;for(let le=B,ce=B+fe;le<ce;le+=3)I(t.getX(le+0)),I(t.getX(le+1)),I(t.getX(le+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new ee,u=new ee,d=new ee,h=new ee,m=new ee,p=new ee,x=new ee,v=new ee;if(t)for(let S=0,y=t.count;S<y;S+=3){const A=t.getX(S+0),E=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,E),p.fromBufferAttribute(r,M),h.add(x),m.add(x),p.add(x),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(E,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,v=h.normalized,S=new p.constructor(m.length*x);let y=0,A=0;for(let E=0,M=m.length;E<M;E++){h.isInterleavedBufferAttribute?y=m[E]*h.data.stride+h.offset:y=m[E]*x;for(let _=0;_<x;_++)S[A++]=p[y++]}return new wi(S,x,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new sa,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,v=p.length;x<v;x++){const S=p[x],y=t(S,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,S=p.length;v<S;v++){const y=p[v];x.push(y.toJSON(t.data))}x.length>0&&(l[m]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=t.morphAttributes;for(const p in u){const x=[],v=u[p];for(let S=0,y=v.length;S<y;S++)x.push(v[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const G_=new Kt,ur=new Xv,fc=new Bc,V_=new ee,dc=new ee,hc=new ee,pc=new ee,xd=new ee,mc=new ee,k_=new ee,gc=new ee;class ia extends vn{constructor(t=new sa,i=new qv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){mc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],v=u[m];x!==0&&(xd.fromBufferAttribute(v,t),d?mc.addScaledVector(xd,x):mc.addScaledVector(xd.sub(i),x))}i.add(mc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(u),ur.copy(t.ray).recast(t.near),!(fc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(fc,V_)===null||ur.origin.distanceToSquared(V_)>(t.far-t.near)**2))&&(G_.copy(u).invert(),ur.copy(t.ray).applyMatrix4(G_),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,v=u.attributes.normal,S=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,E=S.length;A<E;A++){const M=S[A],_=d[M.materialIndex],V=Math.max(M.start,y.start),z=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let N=V,X=z;N<X;N+=3){const G=h.getX(N),I=h.getX(N+1),K=h.getX(N+2);l=_c(this,_,t,r,p,x,v,G,I,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),E=Math.min(h.count,y.start+y.count);for(let M=A,_=E;M<_;M+=3){const V=h.getX(M),z=h.getX(M+1),N=h.getX(M+2);l=_c(this,d,t,r,p,x,v,V,z,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,E=S.length;A<E;A++){const M=S[A],_=d[M.materialIndex],V=Math.max(M.start,y.start),z=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=V,X=z;N<X;N+=3){const G=N,I=N+1,K=N+2;l=_c(this,_,t,r,p,x,v,G,I,K),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),E=Math.min(m.count,y.start+y.count);for(let M=A,_=E;M<_;M+=3){const V=M,z=M+1,N=M+2;l=_c(this,d,t,r,p,x,v,V,z,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Yy(o,t,i,r,l,u,d,h){let m;if(t.side===Hn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===Ga,h),m===null)return null;gc.copy(h),gc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(gc);return p<i.near||p>i.far?null:{distance:p,point:gc.clone(),object:o}}function _c(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,dc),o.getVertexPosition(m,hc),o.getVertexPosition(p,pc);const x=Yy(o,t,i,r,dc,hc,pc,k_);if(x){const v=new ee;gi.getBarycoord(k_,dc,hc,pc,v),l&&(x.uv=gi.getInterpolatedAttribute(l,h,m,p,v,new Dt)),u&&(x.uv1=gi.getInterpolatedAttribute(u,h,m,p,v,new Dt)),d&&(x.normal=gi.getInterpolatedAttribute(d,h,m,p,v,new ee),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ee,materialIndex:0};gi.getNormal(dc,hc,pc,S.normal),x.face=S,x.barycoord=v}return x}class ko extends sa{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],v=[];let S=0,y=0;A("z","y","x",-1,-1,r,i,t,d,u,0),A("z","y","x",1,-1,r,i,-t,d,u,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,u,4),A("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ha(p,3)),this.setAttribute("normal",new Ha(x,3)),this.setAttribute("uv",new Ha(v,2));function A(E,M,_,V,z,N,X,G,I,K,D){const C=N/I,B=X/K,fe=N/2,le=X/2,ce=G/2,Se=I+1,L=K+1;let Q=0,U=0;const Z=new ee;for(let ue=0;ue<L;ue++){const O=ue*B-le;for(let $=0;$<Se;$++){const Me=$*C-fe;Z[E]=Me*V,Z[M]=O*z,Z[_]=ce,p.push(Z.x,Z.y,Z.z),Z[E]=0,Z[M]=0,Z[_]=G>0?1:-1,x.push(Z.x,Z.y,Z.z),v.push($/I),v.push(1-ue/K),Q+=1}}for(let ue=0;ue<K;ue++)for(let O=0;O<I;O++){const $=S+O+Se*ue,Me=S+O+Se*(ue+1),Te=S+(O+1)+Se*(ue+1),J=S+(O+1)+Se*ue;m.push($,Me,J),m.push(Me,Te,J),U+=6}h.addGroup(y,U,D),y+=U,S+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)t[l]=r[l]}return t}function Zy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Kv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Rt.workingColorSpace}const Ky={clone:Rs,merge:Nn};var Qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Va extends Vo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qy,this.fragmentShader=Jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Zy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Qv extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new ee,X_=new Dt,j_=new Dt;class Jn extends Qv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Fo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,X_,j_),i.subVectors(j_,X_)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Lo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,gs=1;class $y extends vn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(ms,gs,t,i);l.layers=this.layers,this.add(l);const u=new Jn(ms,gs,t,i);u.layers=this.layers,this.add(u);const d=new Jn(ms,gs,t,i);d.layers=this.layers,this.add(d);const h=new Jn(ms,gs,t,i);h.layers=this.layers,this.add(h);const m=new Jn(ms,gs,t,i);m.layers=this.layers,this.add(m);const p=new Jn(ms,gs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=E,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(v,S,y),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Jv extends Gn{constructor(t=[],i=bs,r,l,u,d,h,m,p,x){super(t,i,r,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class eM extends yr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Jv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ko(5,5,5),u=new Va({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Fa});u.uniforms.tEquirect.value=i;const d=new ia(l,u),h=i.minFilter;return i.minFilter===xr&&(i.minFilter=Ai),new $y(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class vc extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tM={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const E of t.hand.values()){const M=i.getJointPose(E,r),_=this._getHandJoint(p,E);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=x.position.distanceTo(v.position),y=.02,A=.005;p.inputState.pinching&&S>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(tM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new vc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Rh{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=i,this.far=r}clone(){return new Rh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nM extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const yd=new ee,iM=new ee,aM=new ct;class pr{constructor(t=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=yd.subVectors(r,i).cross(iM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(yd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||aM.getNormalMatrix(t),l=this.coplanarPoint(yd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Bc,rM=new Dt(.5,.5),xc=new ee;class wh{constructor(t=new pr,i=new pr,r=new pr,l=new pr,u=new pr,d=new pr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ri,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],x=u[4],v=u[5],S=u[6],y=u[7],A=u[8],E=u[9],M=u[10],_=u[11],V=u[12],z=u[13],N=u[14],X=u[15];if(l[0].setComponents(p-d,y-x,_-A,X-V).normalize(),l[1].setComponents(p+d,y+x,_+A,X+V).normalize(),l[2].setComponents(p+h,y+v,_+E,X+z).normalize(),l[3].setComponents(p-h,y-v,_-E,X-z).normalize(),r)l[4].setComponents(m,S,M,N).normalize(),l[5].setComponents(p-m,y-S,_-M,X-N).normalize();else if(l[4].setComponents(p-m,y-S,_-M,X-N).normalize(),i===Ri)l[5].setComponents(p+m,y+S,_+M,X+N).normalize();else if(i===Lc)l[5].setComponents(m,S,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);const i=rM.distanceTo(t.center);return fr.radius=.7071067811865476+i,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(xc.x=l.normal.x>0?t.max.x:t.min.x,xc.y=l.normal.y>0?t.max.y:t.min.y,xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $v extends Vo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oc=new ee,Pc=new ee,W_=new Kt,wo=new Xv,Sc=new Bc,Md=new ee,q_=new ee;class sM extends vn{constructor(t=new sa,i=new $v){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Oc.fromBufferAttribute(i,l-1),Pc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Oc.distanceTo(Pc);t.setAttribute("lineDistance",new Ha(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(l),Sc.radius+=u,t.ray.intersectsSphere(Sc)===!1)return;W_.copy(l).invert(),wo.copy(t.ray).applyMatrix4(W_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=r.index,S=r.attributes.position;if(x!==null){const y=Math.max(0,d.start),A=Math.min(x.count,d.start+d.count);for(let E=y,M=A-1;E<M;E+=p){const _=x.getX(E),V=x.getX(E+1),z=yc(this,t,wo,m,_,V,E);z&&i.push(z)}if(this.isLineLoop){const E=x.getX(A-1),M=x.getX(y),_=yc(this,t,wo,m,E,M,A-1);_&&i.push(_)}}else{const y=Math.max(0,d.start),A=Math.min(S.count,d.start+d.count);for(let E=y,M=A-1;E<M;E+=p){const _=yc(this,t,wo,m,E,E+1,E);_&&i.push(_)}if(this.isLineLoop){const E=yc(this,t,wo,m,A-1,y,A-1);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function yc(o,t,i,r,l,u,d){const h=o.geometry.attributes.position;if(Oc.fromBufferAttribute(h,l),Pc.fromBufferAttribute(h,u),i.distanceSqToSegment(Oc,Pc,Md,q_)>r)return;Md.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Md);if(!(p<t.near||p>t.far))return{distance:p,point:q_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class e0 extends Gn{constructor(t,i,r=Sr,l,u,d,h=vi,m=vi,p,x=zo,v=1){if(x!==zo&&x!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:v};super(S,l,u,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ah(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Fc extends sa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,v=t/h,S=i/m,y=[],A=[],E=[],M=[];for(let _=0;_<x;_++){const V=_*S-d;for(let z=0;z<p;z++){const N=z*v-u;A.push(N,-V,0),E.push(0,0,1),M.push(z/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let V=0;V<h;V++){const z=V+p*_,N=V+p*(_+1),X=V+1+p*(_+1),G=V+1+p*_;y.push(z,N,G),y.push(N,X,G)}this.setIndex(y),this.setAttribute("position",new Ha(A,3)),this.setAttribute("normal",new Ha(E,3)),this.setAttribute("uv",new Ha(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.width,t.height,t.widthSegments,t.heightSegments)}}class oM extends Vo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lM extends Vo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ch extends vn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class cM extends Ch{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Ed=new Kt,Y_=new ee,Z_=new ee;class t0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Y_.setFromMatrixPosition(t.matrixWorld),i.position.copy(Y_),Z_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Z_),i.updateMatrixWorld(),Ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ed,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ed)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const K_=new Kt,Co=new ee,bd=new ee;class uM extends t0{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new ee(1,0,0),new ee(-1,0,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,1,0),new ee(0,-1,0)],this._cubeUps=[new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,1,0),new ee(0,0,1),new ee(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Co.setFromMatrixPosition(t.matrixWorld),r.position.copy(Co),bd.copy(r.position),bd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(bd),r.updateMatrixWorld(),l.makeTranslation(-Co.x,-Co.y,-Co.z),K_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(K_,r.coordinateSystem,r.reversedDepth)}}class fM extends Ch{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new uM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class n0 extends Qv{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class dM extends t0{constructor(){super(new n0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hM extends Ch{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new dM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pM extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Q_(o,t,i,r){const l=mM(r);switch(i){case zv:return o*t;case Fv:return o*t/l.components*l.byteLength;case Mh:return o*t/l.components*l.byteLength;case Iv:return o*t*2/l.components*l.byteLength;case Eh:return o*t*2/l.components*l.byteLength;case Bv:return o*t*3/l.components*l.byteLength;case _i:return o*t*4/l.components*l.byteLength;case bh:return o*t*4/l.components*l.byteLength;case Tc:case Ac:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Rc:case wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case jd:case qd:return Math.max(o,16)*Math.max(t,8)/4;case Xd:case Wd:return Math.max(o,8)*Math.max(t,8)/2;case Yd:case Zd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Kd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case $d:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case eh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case th:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case nh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ih:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case ah:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case rh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case sh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case oh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case lh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case ch:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case uh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Cc:case fh:case dh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Hv:case hh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ph:case mh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mM(o){switch(o){case Ci:case Nv:return{byteLength:1,components:1};case Oo:case Ov:case Io:return{byteLength:2,components:1};case Sh:case yh:return{byteLength:2,components:4};case Sr:case xh:case na:return{byteLength:4,components:1};case Pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function i0(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function gM(o){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,x);else{v.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<v.length;y++){const A=v[S],E=v[y];E.start<=A.start+A.count+1?A.count=Math.max(A.count,E.start+E.count-A.start):(++S,v[S]=E)}v.length=S+1;for(let y=0,A=v.length;y<A;y++){const E=v[y];o.bufferSubData(p,E.start*x.BYTES_PER_ELEMENT,x,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var _M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
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
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EM=`#ifdef USE_AOMAP
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
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TM=`#ifdef USE_BATCHING
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
#endif`,AM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DM=`#ifdef USE_IRIDESCENCE
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
#endif`,UM=`#ifdef USE_BUMPMAP
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
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,HM=`#define PI 3.141592653589793
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
} // validated`,GM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VM=`vec3 transformedNormal = objectNormal;
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
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qM="gl_FragColor = linearToOutputTexel( gl_FragColor );",YM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,eE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aE=`#ifdef USE_GRADIENTMAP
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
}`,rE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
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
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
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
#endif`,mE=`struct PhysicalMaterial {
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
}`,gE=`
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
#endif`,_E=`#if defined( RE_IndirectDiffuse )
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AE=`#if defined( USE_POINTS_UV )
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
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
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
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IE=`#ifdef USE_NORMALMAP
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
#endif`,HE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tb=`float getShadowMask() {
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
}`,nb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ib=`#ifdef USE_SKINNING
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
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rb=`#ifdef USE_SKINNING
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
#endif`,sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ub=`#ifdef USE_TRANSMISSION
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
#endif`,fb=`#ifdef USE_TRANSMISSION
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
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_b=`uniform sampler2D t2D;
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`#include <common>
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
}`,Eb=`#if DEPTH_PACKING == 3200
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
}`,bb=`#define DISTANCE
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
}`,Tb=`#define DISTANCE
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
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`uniform float scale;
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
}`,Cb=`uniform vec3 diffuse;
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
}`,Db=`#include <common>
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
}`,Ub=`uniform vec3 diffuse;
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
}`,Lb=`#define LAMBERT
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
}`,Nb=`#define LAMBERT
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
}`,Ob=`#define MATCAP
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
}`,Pb=`#define MATCAP
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
}`,zb=`#define NORMAL
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
}`,Bb=`#define NORMAL
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
}`,Fb=`#define PHONG
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
}`,Ib=`#define PHONG
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
}`,Hb=`#define STANDARD
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
}`,Gb=`#define STANDARD
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
}`,Vb=`#define TOON
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
}`,kb=`#define TOON
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
}`,Xb=`uniform float size;
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
}`,jb=`uniform vec3 diffuse;
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
}`,Wb=`#include <common>
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
}`,qb=`uniform vec3 color;
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
}`,Yb=`uniform float rotation;
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
}`,Zb=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:_M,alphahash_pars_fragment:vM,alphamap_fragment:xM,alphamap_pars_fragment:SM,alphatest_fragment:yM,alphatest_pars_fragment:MM,aomap_fragment:EM,aomap_pars_fragment:bM,batching_pars_vertex:TM,batching_vertex:AM,begin_vertex:RM,beginnormal_vertex:wM,bsdfs:CM,iridescence_fragment:DM,bumpmap_pars_fragment:UM,clipping_planes_fragment:LM,clipping_planes_pars_fragment:NM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:PM,color_fragment:zM,color_pars_fragment:BM,color_pars_vertex:FM,color_vertex:IM,common:HM,cube_uv_reflection_fragment:GM,defaultnormal_vertex:VM,displacementmap_pars_vertex:kM,displacementmap_vertex:XM,emissivemap_fragment:jM,emissivemap_pars_fragment:WM,colorspace_fragment:qM,colorspace_pars_fragment:YM,envmap_fragment:ZM,envmap_common_pars_fragment:KM,envmap_pars_fragment:QM,envmap_pars_vertex:JM,envmap_physical_pars_fragment:cE,envmap_vertex:$M,fog_vertex:eE,fog_pars_vertex:tE,fog_fragment:nE,fog_pars_fragment:iE,gradientmap_pars_fragment:aE,lightmap_pars_fragment:rE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:oE,lights_pars_begin:lE,lights_toon_fragment:uE,lights_toon_pars_fragment:fE,lights_phong_fragment:dE,lights_phong_pars_fragment:hE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:gE,lights_fragment_maps:_E,lights_fragment_end:vE,logdepthbuf_fragment:xE,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:yE,logdepthbuf_vertex:ME,map_fragment:EE,map_pars_fragment:bE,map_particle_fragment:TE,map_particle_pars_fragment:AE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:wE,morphinstance_vertex:CE,morphcolor_vertex:DE,morphnormal_vertex:UE,morphtarget_pars_vertex:LE,morphtarget_vertex:NE,normal_fragment_begin:OE,normal_fragment_maps:PE,normal_pars_fragment:zE,normal_pars_vertex:BE,normal_vertex:FE,normalmap_pars_fragment:IE,clearcoat_normal_fragment_begin:HE,clearcoat_normal_fragment_maps:GE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:kE,opaque_fragment:XE,packing:jE,premultiplied_alpha_fragment:WE,project_vertex:qE,dithering_fragment:YE,dithering_pars_fragment:ZE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:QE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:$E,shadowmap_vertex:eb,shadowmask_pars_fragment:tb,skinbase_vertex:nb,skinning_pars_vertex:ib,skinning_vertex:ab,skinnormal_vertex:rb,specularmap_fragment:sb,specularmap_pars_fragment:ob,tonemapping_fragment:lb,tonemapping_pars_fragment:cb,transmission_fragment:ub,transmission_pars_fragment:fb,uv_pars_fragment:db,uv_pars_vertex:hb,uv_vertex:pb,worldpos_vertex:mb,background_vert:gb,background_frag:_b,backgroundCube_vert:vb,backgroundCube_frag:xb,cube_vert:Sb,cube_frag:yb,depth_vert:Mb,depth_frag:Eb,distanceRGBA_vert:bb,distanceRGBA_frag:Tb,equirect_vert:Ab,equirect_frag:Rb,linedashed_vert:wb,linedashed_frag:Cb,meshbasic_vert:Db,meshbasic_frag:Ub,meshlambert_vert:Lb,meshlambert_frag:Nb,meshmatcap_vert:Ob,meshmatcap_frag:Pb,meshnormal_vert:zb,meshnormal_frag:Bb,meshphong_vert:Fb,meshphong_frag:Ib,meshphysical_vert:Hb,meshphysical_frag:Gb,meshtoon_vert:Vb,meshtoon_frag:kb,points_vert:Xb,points_frag:jb,shadow_vert:Wb,shadow_frag:qb,sprite_vert:Yb,sprite_frag:Zb},Ne={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ti={basic:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Nn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Nn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Nn([Ne.points,Ne.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Nn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Nn([Ne.common,Ne.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Nn([Ne.sprite,Ne.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Nn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Nn([Ne.lights,Ne.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ti.physical={uniforms:Nn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Mc={r:0,b:0,g:0},dr=new ra,Kb=new Kt;function Qb(o,t,i,r,l,u,d){const h=new wt(0);let m=u===!0?0:1,p,x,v=null,S=0,y=null;function A(z){let N=z.isScene===!0?z.background:null;return N&&N.isTexture&&(N=(z.backgroundBlurriness>0?i:t).get(N)),N}function E(z){let N=!1;const X=A(z);X===null?_(h,m):X&&X.isColor&&(_(X,1),N=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,d):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(z,N){const X=A(N);X&&(X.isCubeTexture||X.mapping===zc)?(x===void 0&&(x=new ia(new ko(1,1,1),new Va({name:"BackgroundCubeMaterial",uniforms:Rs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(G,I,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),dr.copy(N.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),x.material.uniforms.envMap.value=X,x.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(dr)),x.material.toneMapped=Rt.getTransfer(X.colorSpace)!==Ht,(v!==X||S!==X.version||y!==o.toneMapping)&&(x.material.needsUpdate=!0,v=X,S=X.version,y=o.toneMapping),x.layers.enableAll(),z.unshift(x,x.geometry,x.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new ia(new Fc(2,2),new Va({name:"BackgroundMaterial",uniforms:Rs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(X.colorSpace)!==Ht,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||S!==X.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=X,S=X.version,y=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function _(z,N){z.getRGB(Mc,Kv(o)),r.buffers.color.setClear(Mc.r,Mc.g,Mc.b,N,d)}function V(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(z,N=1){h.set(z),m=N,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,_(h,m)},render:E,addToRenderList:M,dispose:V}}function Jb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(C,B,fe,le,ce){let Se=!1;const L=v(le,fe,B);u!==L&&(u=L,p(u.object)),Se=y(C,le,fe,ce),Se&&A(C,le,fe,ce),ce!==null&&t.update(ce,o.ELEMENT_ARRAY_BUFFER),(Se||d)&&(d=!1,N(C,B,fe,le),ce!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function v(C,B,fe){const le=fe.wireframe===!0;let ce=r[C.id];ce===void 0&&(ce={},r[C.id]=ce);let Se=ce[B.id];Se===void 0&&(Se={},ce[B.id]=Se);let L=Se[le];return L===void 0&&(L=S(m()),Se[le]=L),L}function S(C){const B=[],fe=[],le=[];for(let ce=0;ce<i;ce++)B[ce]=0,fe[ce]=0,le[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:fe,attributeDivisors:le,object:C,attributes:{},index:null}}function y(C,B,fe,le){const ce=u.attributes,Se=B.attributes;let L=0;const Q=fe.getAttributes();for(const U in Q)if(Q[U].location>=0){const ue=ce[U];let O=Se[U];if(O===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),ue===void 0||ue.attribute!==O||O&&ue.data!==O.data)return!0;L++}return u.attributesNum!==L||u.index!==le}function A(C,B,fe,le){const ce={},Se=B.attributes;let L=0;const Q=fe.getAttributes();for(const U in Q)if(Q[U].location>=0){let ue=Se[U];ue===void 0&&(U==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),U==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor));const O={};O.attribute=ue,ue&&ue.data&&(O.data=ue.data),ce[U]=O,L++}u.attributes=ce,u.attributesNum=L,u.index=le}function E(){const C=u.newAttributes;for(let B=0,fe=C.length;B<fe;B++)C[B]=0}function M(C){_(C,0)}function _(C,B){const fe=u.newAttributes,le=u.enabledAttributes,ce=u.attributeDivisors;fe[C]=1,le[C]===0&&(o.enableVertexAttribArray(C),le[C]=1),ce[C]!==B&&(o.vertexAttribDivisor(C,B),ce[C]=B)}function V(){const C=u.newAttributes,B=u.enabledAttributes;for(let fe=0,le=B.length;fe<le;fe++)B[fe]!==C[fe]&&(o.disableVertexAttribArray(fe),B[fe]=0)}function z(C,B,fe,le,ce,Se,L){L===!0?o.vertexAttribIPointer(C,B,fe,ce,Se):o.vertexAttribPointer(C,B,fe,le,ce,Se)}function N(C,B,fe,le){E();const ce=le.attributes,Se=fe.getAttributes(),L=B.defaultAttributeValues;for(const Q in Se){const U=Se[Q];if(U.location>=0){let Z=ce[Q];if(Z===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor)),Z!==void 0){const ue=Z.normalized,O=Z.itemSize,$=t.get(Z);if($===void 0)continue;const Me=$.buffer,Te=$.type,J=$.bytesPerElement,_e=Te===o.INT||Te===o.UNSIGNED_INT||Z.gpuType===xh;if(Z.isInterleavedBufferAttribute){const ve=Z.data,Fe=ve.stride,Oe=Z.offset;if(ve.isInstancedInterleavedBuffer){for(let et=0;et<U.locationSize;et++)_(U.location+et,ve.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let et=0;et<U.locationSize;et++)M(U.location+et);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let et=0;et<U.locationSize;et++)z(U.location+et,O/U.locationSize,Te,ue,Fe*J,(Oe+O/U.locationSize*et)*J,_e)}else{if(Z.isInstancedBufferAttribute){for(let ve=0;ve<U.locationSize;ve++)_(U.location+ve,Z.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ve=0;ve<U.locationSize;ve++)M(U.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let ve=0;ve<U.locationSize;ve++)z(U.location+ve,O/U.locationSize,Te,ue,O*J,O/U.locationSize*ve*J,_e)}}else if(L!==void 0){const ue=L[Q];if(ue!==void 0)switch(ue.length){case 2:o.vertexAttrib2fv(U.location,ue);break;case 3:o.vertexAttrib3fv(U.location,ue);break;case 4:o.vertexAttrib4fv(U.location,ue);break;default:o.vertexAttrib1fv(U.location,ue)}}}}V()}function X(){K();for(const C in r){const B=r[C];for(const fe in B){const le=B[fe];for(const ce in le)x(le[ce].object),delete le[ce];delete B[fe]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const fe in B){const le=B[fe];for(const ce in le)x(le[ce].object),delete le[ce];delete B[fe]}delete r[C.id]}function I(C){for(const B in r){const fe=r[B];if(fe[C.id]===void 0)continue;const le=fe[C.id];for(const ce in le)x(le[ce].object),delete le[ce];delete fe[C.id]}}function K(){D(),d=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:M,disableUnusedAttributes:V}}function $b(o,t,i){let r;function l(p){r=p}function u(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,v){v!==0&&(o.drawArraysInstanced(r,p,x,v),i.update(x,r,v))}function h(p,x,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,v);let y=0;for(let A=0;A<v;A++)y+=x[A];i.update(y,r,1)}function m(p,x,v,S){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)d(p[A],x[A],S[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,v);let A=0;for(let E=0;E<v;E++)A+=x[E]*S[E];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function eT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==_i&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const K=I===Io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Ci&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==na&&!K)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),V=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=A>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:A,maxTextureSize:E,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:V,maxVaryings:z,maxFragmentUniforms:N,vertexTextures:X,maxSamples:G}}function tT(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new pr,h=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||l;return l=S,r=v.length,y},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=x(v,S,0)},this.setState=function(v,S,y){const A=v.clippingPlanes,E=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||u&&!M)u?x(null):p();else{const V=u?0:r,z=V*4;let N=_.clippingState||null;m.value=N,N=x(A,S,z,y);for(let X=0;X!==z;++X)N[X]=i[X];_.clippingState=N,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=V}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(v,S,y,A){const E=v!==null?v.length:0;let M=null;if(E!==0){if(M=m.value,A!==!0||M===null){const _=y+E*4,V=S.matrixWorldInverse;h.getNormalMatrix(V),(M===null||M.length<_)&&(M=new Float32Array(_));for(let z=0,N=y;z!==E;++z,N+=4)d.copy(v[z]).applyMatrix4(V,h),d.normal.toArray(M,N),M[N+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,M}}function nT(o){let t=new WeakMap;function i(d,h){return h===Hd?d.mapping=bs:h===Gd&&(d.mapping=Ts),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Hd||h===Gd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new eM(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const xs=4,J_=[.125,.215,.35,.446,.526,.582],_r=20,Td=new n0,$_=new wt;let Ad=null,Rd=0,wd=0,Cd=!1;const mr=(1+Math.sqrt(5))/2,_s=1/mr,ev=[new ee(-mr,_s,0),new ee(mr,_s,0),new ee(-_s,0,mr),new ee(_s,0,mr),new ee(0,mr,-_s),new ee(0,mr,_s),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)],iT=new ee;class tv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=iT}=u;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ad,Rd,wd),this._renderer.xr.enabled=Cd,t.scissorTest=!1,Ec(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===bs||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Io,format:_i,colorSpace:As,depthBuffer:!1},l=nv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aT(u)),this._blurMaterial=rT(u,t,i)}return l}_compileMaterial(t){const i=new ia(this._lodPlanes[0],t);this._renderer.compile(i,Td)}_sceneToCubeUV(t,i,r,l,u){const m=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor($_),v.toneMapping=Ia,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const E=new qv({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),M=new ia(new ko,E);let _=!1;const V=t.background;V?V.isColor&&(E.color.copy(V),t.background=null,_=!0):(E.color.copy($_),_=!0);for(let z=0;z<6;z++){const N=z%3;N===0?(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[z],u.y,u.z)):N===1?(m.up.set(0,0,p[z]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[z],u.z)):(m.up.set(0,p[z],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[z]));const X=this._cubeSize;Ec(l,N*X,z>2?X:0,X,X),v.setRenderTarget(l),_&&v.render(M,m),v.render(t,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=S,t.background=V}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===bs||t.mapping===Ts;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new ia(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Ec(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Td)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=ev[(l-u-1)%ev.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,v=new ia(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*_r-1),E=u/A,M=isFinite(u)?1+Math.floor(x*E):_r;M>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${_r}`);const _=[];let V=0;for(let I=0;I<_r;++I){const K=I/E,D=Math.exp(-K*K/2);_.push(D),I===0?V+=D:I<M&&(V+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/V;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:z}=this;S.dTheta.value=A,S.mipInt.value=z-r;const N=this._sizeLods[l],X=3*N*(l>z-xs?l-z+xs:0),G=4*(this._cubeSize-N);Ec(i,X,G,3*N,2*N),m.setRenderTarget(i),m.render(v,Td)}}function aT(o){const t=[],i=[],r=[];let l=o;const u=o-xs+1+J_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-xs?m=J_[d-o+xs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),x=-p,v=1+p,S=[x,x,v,x,v,v,x,x,v,v,x,v],y=6,A=6,E=3,M=2,_=1,V=new Float32Array(E*A*y),z=new Float32Array(M*A*y),N=new Float32Array(_*A*y);for(let G=0;G<y;G++){const I=G%3*2/3-1,K=G>2?0:-1,D=[I,K,0,I+2/3,K,0,I+2/3,K+1,0,I,K,0,I+2/3,K+1,0,I,K+1,0];V.set(D,E*A*G),z.set(S,M*A*G);const C=[G,G,G,G,G,G];N.set(C,_*A*G)}const X=new sa;X.setAttribute("position",new wi(V,E)),X.setAttribute("uv",new wi(z,M)),X.setAttribute("faceIndex",new wi(N,_)),t.push(X),l>xs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function nv(o,t,i){const r=new yr(o,t,i);return r.texture.mapping=zc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ec(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function rT(o,t,i){const r=new Float32Array(_r),l=new ee(0,1,0);return new Va({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function iv(){return new Va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function av(){return new Va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Dh(){return`

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
	`}function sT(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Hd||m===Gd,x=m===bs||m===Ts;if(p||x){let v=t.get(h);const S=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new tv(o)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new tv(o)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function oT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ys("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function lT(o,t,i,r){const l={},u=new WeakMap;function d(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const y=u.get(S);y&&(t.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(v,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function p(v){const S=[],y=v.index,A=v.attributes.position;let E=0;if(y!==null){const V=y.array;E=y.version;for(let z=0,N=V.length;z<N;z+=3){const X=V[z+0],G=V[z+1],I=V[z+2];S.push(X,G,G,I,I,X)}}else if(A!==void 0){const V=A.array;E=A.version;for(let z=0,N=V.length/3-1;z<N;z+=3){const X=z+0,G=z+1,I=z+2;S.push(X,G,G,I,I,X)}}else return;const M=new(Vv(S)?Zv:Yv)(S,1);M.version=E;const _=u.get(v);_&&t.remove(_),u.set(v,M)}function x(v){const S=u.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:x}}function cT(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,y){o.drawElements(r,y,u,S*d),i.update(y,r,1)}function p(S,y,A){A!==0&&(o.drawElementsInstanced(r,y,u,S*d,A),i.update(y,r,A))}function x(S,y,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,A);let M=0;for(let _=0;_<A;_++)M+=y[_];i.update(M,r,1)}function v(S,y,A,E){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/d,y[_],E[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,E,0,A);let _=0;for(let V=0;V<A;V++)_+=y[V]*E[V];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function uT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function fT(o,t,i){const r=new WeakMap,l=new Gt;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let S=r.get(h);if(S===void 0||S.count!==v){let D=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",D)};S!==void 0&&S.texture.dispose();const y=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let z=0;y===!0&&(z=1),A===!0&&(z=2),E===!0&&(z=3);let N=h.attributes.position.count*z,X=1;N>t.maxTextureSize&&(X=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const G=new Float32Array(N*X*4*v),I=new kv(G,N,X,v);I.type=na,I.needsUpdate=!0;const K=z*4;for(let C=0;C<v;C++){const B=M[C],fe=_[C],le=V[C],ce=N*X*4*C;for(let Se=0;Se<B.count;Se++){const L=Se*K;y===!0&&(l.fromBufferAttribute(B,Se),G[ce+L+0]=l.x,G[ce+L+1]=l.y,G[ce+L+2]=l.z,G[ce+L+3]=0),A===!0&&(l.fromBufferAttribute(fe,Se),G[ce+L+4]=l.x,G[ce+L+5]=l.y,G[ce+L+6]=l.z,G[ce+L+7]=0),E===!0&&(l.fromBufferAttribute(le,Se),G[ce+L+8]=l.x,G[ce+L+9]=l.y,G[ce+L+10]=l.z,G[ce+L+11]=le.itemSize===4?l.w:1)}}S={count:v,texture:I,size:new Dt(N,X)},r.set(h,S),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let y=0;for(let E=0;E<p.length;E++)y+=p[E];const A=h.morphTargetsRelative?1:1-y;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function dT(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,x=m.geometry,v=t.get(m,x);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const a0=new Gn,rv=new e0(1,1),r0=new kv,s0=new By,o0=new Jv,sv=[],ov=[],lv=new Float32Array(16),cv=new Float32Array(9),uv=new Float32Array(4);function Ds(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=sv[l];if(u===void 0&&(u=new Float32Array(l),sv[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Ic(o,t){let i=ov[t];i===void 0&&(i=new Int32Array(t),ov[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function hT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function pT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function mT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function _T(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;uv.set(r),o.uniformMatrix2fv(this.addr,!1,uv),pn(i,r)}}function vT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;cv.set(r),o.uniformMatrix3fv(this.addr,!1,cv),pn(i,r)}}function xT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;lv.set(r),o.uniformMatrix4fv(this.addr,!1,lv),pn(i,r)}}function ST(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function MT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function bT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function TT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function AT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function RT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function wT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(rv.compareFunction=Gv,u=rv):u=a0,i.setTexture2D(t||u,l)}function CT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||s0,l)}function DT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||o0,l)}function UT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||r0,l)}function LT(o){switch(o){case 5126:return hT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return ST;case 35667:case 35671:return yT;case 35668:case 35672:return MT;case 35669:case 35673:return ET;case 5125:return bT;case 36294:return TT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}function NT(o,t){o.uniform1fv(this.addr,t)}function OT(o,t){const i=Ds(t,this.size,2);o.uniform2fv(this.addr,i)}function PT(o,t){const i=Ds(t,this.size,3);o.uniform3fv(this.addr,i)}function zT(o,t){const i=Ds(t,this.size,4);o.uniform4fv(this.addr,i)}function BT(o,t){const i=Ds(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function FT(o,t){const i=Ds(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function IT(o,t){const i=Ds(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function HT(o,t){o.uniform1iv(this.addr,t)}function GT(o,t){o.uniform2iv(this.addr,t)}function VT(o,t){o.uniform3iv(this.addr,t)}function kT(o,t){o.uniform4iv(this.addr,t)}function XT(o,t){o.uniform1uiv(this.addr,t)}function jT(o,t){o.uniform2uiv(this.addr,t)}function WT(o,t){o.uniform3uiv(this.addr,t)}function qT(o,t){o.uniform4uiv(this.addr,t)}function YT(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||a0,u[d])}function ZT(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||s0,u[d])}function KT(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||o0,u[d])}function QT(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||r0,u[d])}function JT(o){switch(o){case 5126:return NT;case 35664:return OT;case 35665:return PT;case 35666:return zT;case 35674:return BT;case 35675:return FT;case 35676:return IT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return kT;case 5125:return XT;case 36294:return jT;case 36295:return WT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}class $T{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=LT(i.type)}}class eA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=JT(i.type)}}class tA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function fv(o,t){o.seq.push(t),o.map[t.id]=t}function nA(o,t,i){const r=o.name,l=r.length;for(Dd.lastIndex=0;;){const u=Dd.exec(r),d=Dd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){fv(i,p===void 0?new $T(h,o,t):new eA(h,o,t));break}else{let v=i.map[h];v===void 0&&(v=new tA(h),fv(i,v)),i=v}}}class Dc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);nA(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function dv(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const iA=37297;let aA=0;function rA(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const hv=new ct;function sA(o){Rt._getMatrix(hv,Rt.workingColorSpace,o);const t=`mat3( ${hv.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(o)){case Uc:return[t,"LinearTransferOETF"];case Ht:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function pv(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+rA(o.getShaderSource(t),h)}else return u}function oA(o,t){const i=sA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function lA(o,t){let i;switch(t){case ZS:i="Linear";break;case KS:i="Reinhard";break;case QS:i="Cineon";break;case JS:i="ACESFilmic";break;case ey:i="AgX";break;case ty:i="Neutral";break;case $S:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new ee;function cA(){Rt.getLuminanceCoefficients(bc);const o=bc.x.toFixed(4),t=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function fA(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function dA(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Uo(o){return o!==""}function mv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(o){return o.replace(hA,mA)}const pA=new Map;function mA(o,t){let i=ft[t];if(i===void 0){const r=pA.get(t);if(r!==void 0)i=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return gh(i)}const gA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(o){return o.replace(gA,_A)}function _A(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function vv(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function vA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Cv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Dv?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ea&&(t="SHADOWMAP_TYPE_VSM"),t}function xA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case bs:case Ts:t="ENVMAP_TYPE_CUBE";break;case zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function SA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function yA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Uv:t="ENVMAP_BLENDING_MULTIPLY";break;case qS:t="ENVMAP_BLENDING_MIX";break;case YS:t="ENVMAP_BLENDING_ADD";break}return t}function MA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function EA(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=vA(i),p=xA(i),x=SA(i),v=yA(i),S=MA(i),y=uA(i),A=fA(u),E=l.createProgram();let M,_,V=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),_.length>0&&(_+=`
`)):(M=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),_=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?ft.tonemapping_pars_fragment:"",i.toneMapping!==Ia?lA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,oA("linearToOutputTexel",i.outputColorSpace),cA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),d=gh(d),d=mv(d,i),d=gv(d,i),h=gh(h),h=mv(h,i),h=gv(h,i),d=_v(d),h=_v(h),i.isRawShaderMaterial!==!0&&(V=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const z=V+M+d,N=V+_+h,X=dv(l,l.VERTEX_SHADER,z),G=dv(l,l.FRAGMENT_SHADER,N);l.attachShader(E,X),l.attachShader(E,G),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function I(B){if(o.debug.checkShaderErrors){const fe=l.getProgramInfoLog(E)||"",le=l.getShaderInfoLog(X)||"",ce=l.getShaderInfoLog(G)||"",Se=fe.trim(),L=le.trim(),Q=ce.trim();let U=!0,Z=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(U=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,E,X,G);else{const ue=pv(l,X,"vertex"),O=pv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Se+`
`+ue+`
`+O)}else Se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Se):(L===""||Q==="")&&(Z=!1);Z&&(B.diagnostics={runnable:U,programLog:Se,vertexShader:{log:L,prefix:M},fragmentShader:{log:Q,prefix:_}})}l.deleteShader(X),l.deleteShader(G),K=new Dc(l,E),D=dA(l,E)}let K;this.getUniforms=function(){return K===void 0&&I(this),K};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(E,iA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aA++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=X,this.fragmentShader=G,this}let bA=0;class TA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new AA(t),i.set(t,r)),r}}class AA{constructor(t){this.id=bA++,this.code=t,this.usedTimes=0}}function RA(o,t,i,r,l,u,d){const h=new jv,m=new TA,p=new Set,x=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,C,B,fe,le){const ce=fe.fog,Se=le.geometry,L=D.isMeshStandardMaterial?fe.environment:null,Q=(D.isMeshStandardMaterial?i:t).get(D.envMap||L),U=Q&&Q.mapping===zc?Q.image.height:null,Z=A[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const ue=Se.morphAttributes.position||Se.morphAttributes.normal||Se.morphAttributes.color,O=ue!==void 0?ue.length:0;let $=0;Se.morphAttributes.position!==void 0&&($=1),Se.morphAttributes.normal!==void 0&&($=2),Se.morphAttributes.color!==void 0&&($=3);let Me,Te,J,_e;if(Z){const Et=Ti[Z];Me=Et.vertexShader,Te=Et.fragmentShader}else Me=D.vertexShader,Te=D.fragmentShader,m.update(D),J=m.getVertexShaderID(D),_e=m.getFragmentShaderID(D);const ve=o.getRenderTarget(),Fe=o.state.buffers.depth.getReversed(),Oe=le.isInstancedMesh===!0,et=le.isBatchedMesh===!0,Nt=!!D.map,ut=!!D.matcap,H=!!Q,pt=!!D.aoMap,qe=!!D.lightMap,ht=!!D.bumpMap,Ke=!!D.normalMap,Vt=!!D.displacementMap,Ie=!!D.emissiveMap,rt=!!D.metalnessMap,Qt=!!D.roughnessMap,Zt=D.anisotropy>0,P=D.clearcoat>0,b=D.dispersion>0,ie=D.iridescence>0,pe=D.sheen>0,Ee=D.transmission>0,de=Zt&&!!D.anisotropyMap,Ye=P&&!!D.clearcoatMap,we=P&&!!D.clearcoatNormalMap,je=P&&!!D.clearcoatRoughnessMap,We=ie&&!!D.iridescenceMap,Ae=ie&&!!D.iridescenceThicknessMap,Ce=pe&&!!D.sheenColorMap,Ze=pe&&!!D.sheenRoughnessMap,ze=!!D.specularMap,Ue=!!D.specularColorMap,st=!!D.specularIntensityMap,j=Ee&&!!D.transmissionMap,Re=Ee&&!!D.thicknessMap,De=!!D.gradientMap,Be=!!D.alphaMap,be=D.alphaTest>0,xe=!!D.alphaHash,He=!!D.extensions;let it=Ia;D.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(it=o.toneMapping);const Ot={shaderID:Z,shaderType:D.type,shaderName:D.name,vertexShader:Me,fragmentShader:Te,defines:D.defines,customVertexShaderID:J,customFragmentShaderID:_e,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:et,batchingColor:et&&le._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&le.instanceColor!==null,instancingMorph:Oe&&le.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:As,alphaToCoverage:!!D.alphaToCoverage,map:Nt,matcap:ut,envMap:H,envMapMode:H&&Q.mapping,envMapCubeUVHeight:U,aoMap:pt,lightMap:qe,bumpMap:ht,normalMap:Ke,displacementMap:S&&Vt,emissiveMap:Ie,normalMapObjectSpace:Ke&&D.normalMapType===sy,normalMapTangentSpace:Ke&&D.normalMapType===ry,metalnessMap:rt,roughnessMap:Qt,anisotropy:Zt,anisotropyMap:de,clearcoat:P,clearcoatMap:Ye,clearcoatNormalMap:we,clearcoatRoughnessMap:je,dispersion:b,iridescence:ie,iridescenceMap:We,iridescenceThicknessMap:Ae,sheen:pe,sheenColorMap:Ce,sheenRoughnessMap:Ze,specularMap:ze,specularColorMap:Ue,specularIntensityMap:st,transmission:Ee,transmissionMap:j,thicknessMap:Re,gradientMap:De,opaque:D.transparent===!1&&D.blending===Ss&&D.alphaToCoverage===!1,alphaMap:Be,alphaTest:be,alphaHash:xe,combine:D.combine,mapUv:Nt&&E(D.map.channel),aoMapUv:pt&&E(D.aoMap.channel),lightMapUv:qe&&E(D.lightMap.channel),bumpMapUv:ht&&E(D.bumpMap.channel),normalMapUv:Ke&&E(D.normalMap.channel),displacementMapUv:Vt&&E(D.displacementMap.channel),emissiveMapUv:Ie&&E(D.emissiveMap.channel),metalnessMapUv:rt&&E(D.metalnessMap.channel),roughnessMapUv:Qt&&E(D.roughnessMap.channel),anisotropyMapUv:de&&E(D.anisotropyMap.channel),clearcoatMapUv:Ye&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&E(D.sheenRoughnessMap.channel),specularMapUv:ze&&E(D.specularMap.channel),specularColorMapUv:Ue&&E(D.specularColorMap.channel),specularIntensityMapUv:st&&E(D.specularIntensityMap.channel),transmissionMapUv:j&&E(D.transmissionMap.channel),thicknessMapUv:Re&&E(D.thicknessMap.channel),alphaMapUv:Be&&E(D.alphaMap.channel),vertexTangents:!!Se.attributes.tangent&&(Ke||Zt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!Se.attributes.color&&Se.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!Se.attributes.uv&&(Nt||Be),fog:!!ce,useFog:D.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Fe,skinning:le.isSkinnedMesh===!0,morphTargets:Se.morphAttributes.position!==void 0,morphNormals:Se.morphAttributes.normal!==void 0,morphColors:Se.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:Nt&&D.map.isVideoTexture===!0&&Rt.getTransfer(D.map.colorSpace)===Ht,decodeVideoTextureEmissive:Ie&&D.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(D.emissiveMap.colorSpace)===Ht,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ta,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:He&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&D.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)C.push(B),C.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(V(C,D),z(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function V(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function z(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function N(D){const C=A[D.type];let B;if(C){const fe=Ti[C];B=Ky.clone(fe.uniforms)}else B=D.uniforms;return B}function X(D,C){let B;for(let fe=0,le=x.length;fe<le;fe++){const ce=x[fe];if(ce.cacheKey===C){B=ce,++B.usedTimes;break}}return B===void 0&&(B=new EA(o,C,D,u),x.push(B)),B}function G(D){if(--D.usedTimes===0){const C=x.indexOf(D);x[C]=x[x.length-1],x.pop(),D.destroy()}}function I(D){m.remove(D)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:N,acquireProgram:X,releaseProgram:G,releaseShaderCache:I,programs:x,dispose:K}}function wA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function CA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function xv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Sv(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(v,S,y,A,E,M){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:S,material:y,groupOrder:A,renderOrder:v.renderOrder,z:E,group:M},o[t]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=y,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=E,_.group=M),t++,_}function h(v,S,y,A,E,M){const _=d(v,S,y,A,E,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,S,y,A,E,M){const _=d(v,S,y,A,E,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||CA),r.length>1&&r.sort(S||xv),l.length>1&&l.sort(S||xv)}function x(){for(let v=t,S=o.length;v<S;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:x,sort:p}}function DA(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new Sv,o.set(r,[d])):l>=u.length?(d=new Sv,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function UA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ee,color:new wt};break;case"SpotLight":i={position:new ee,direction:new ee,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return o[t.id]=i,i}}}function LA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let NA=0;function OA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function PA(o){const t=new UA,i=LA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ee);const l=new ee,u=new Kt,d=new Kt;function h(p){let x=0,v=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,A=0,E=0,M=0,_=0,V=0,z=0,N=0,X=0,G=0,I=0;p.sort(OA);for(let D=0,C=p.length;D<C;D++){const B=p[D],fe=B.color,le=B.intensity,ce=B.distance,Se=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)x+=fe.r*le,v+=fe.g*le,S+=fe.b*le;else if(B.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(B.sh.coefficients[L],le);I++}else if(B.isDirectionalLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,U=i.get(B);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,r.directionalShadow[y]=U,r.directionalShadowMap[y]=Se,r.directionalShadowMatrix[y]=B.shadow.matrix,V++}r.directional[y]=L,y++}else if(B.isSpotLight){const L=t.get(B);L.position.setFromMatrixPosition(B.matrixWorld),L.color.copy(fe).multiplyScalar(le),L.distance=ce,L.coneCos=Math.cos(B.angle),L.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),L.decay=B.decay,r.spot[E]=L;const Q=B.shadow;if(B.map&&(r.spotLightMap[X]=B.map,X++,Q.updateMatrices(B),B.castShadow&&G++),r.spotLightMatrix[E]=Q.matrix,B.castShadow){const U=i.get(B);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,r.spotShadow[E]=U,r.spotShadowMap[E]=Se,N++}E++}else if(B.isRectAreaLight){const L=t.get(B);L.color.copy(fe).multiplyScalar(le),L.halfWidth.set(B.width*.5,0,0),L.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=L,M++}else if(B.isPointLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),L.distance=B.distance,L.decay=B.decay,B.castShadow){const Q=B.shadow,U=i.get(B);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,U.shadowCameraNear=Q.camera.near,U.shadowCameraFar=Q.camera.far,r.pointShadow[A]=U,r.pointShadowMap[A]=Se,r.pointShadowMatrix[A]=B.shadow.matrix,z++}r.point[A]=L,A++}else if(B.isHemisphereLight){const L=t.get(B);L.skyColor.copy(B.color).multiplyScalar(le),L.groundColor.copy(B.groundColor).multiplyScalar(le),r.hemi[_]=L,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==y||K.pointLength!==A||K.spotLength!==E||K.rectAreaLength!==M||K.hemiLength!==_||K.numDirectionalShadows!==V||K.numPointShadows!==z||K.numSpotShadows!==N||K.numSpotMaps!==X||K.numLightProbes!==I)&&(r.directional.length=y,r.spot.length=E,r.rectArea.length=M,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=V,r.directionalShadowMap.length=V,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=V,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=N+X-G,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=I,K.directionalLength=y,K.pointLength=A,K.spotLength=E,K.rectAreaLength=M,K.hemiLength=_,K.numDirectionalShadows=V,K.numPointShadows=z,K.numSpotShadows=N,K.numSpotMaps=X,K.numLightProbes=I,r.version=NA++)}function m(p,x){let v=0,S=0,y=0,A=0,E=0;const M=x.matrixWorldInverse;for(let _=0,V=p.length;_<V;_++){const z=p[_];if(z.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),v++}else if(z.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(z.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(M),d.identity(),u.copy(z.matrixWorld),u.premultiply(M),d.extractRotation(u),N.halfWidth.set(z.width*.5,0,0),N.halfHeight.set(0,z.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),A++}else if(z.isPointLight){const N=r.point[S];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(M),S++}else if(z.isHemisphereLight){const N=r.hemi[E];N.direction.setFromMatrixPosition(z.matrixWorld),N.direction.transformDirection(M),E++}}}return{setup:h,setupView:m,state:r}}function yv(o){const t=new PA(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function d(x){r.push(x)}function h(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function zA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new yv(o),t.set(l,[h])):u>=d.length?(h=new yv(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const BA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FA=`uniform sampler2D shadow_pass;
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
}`;function IA(o,t,i){let r=new wh;const l=new Dt,u=new Dt,d=new Gt,h=new oM({depthPacking:ay}),m=new lM,p={},x=i.maxTextureSize,v={[Ga]:Hn,[Hn]:Ga,[ta]:ta},S=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:BA,fragmentShader:FA}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new sa;A.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ia(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cv;let _=this.type;this.render=function(G,I,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),fe=o.state;fe.setBlending(Fa),fe.buffers.depth.getReversed()?fe.buffers.color.setClear(0,0,0,0):fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const le=_!==ea&&this.type===ea,ce=_===ea&&this.type!==ea;for(let Se=0,L=G.length;Se<L;Se++){const Q=G[Se],U=Q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;l.copy(U.mapSize);const Z=U.getFrameExtents();if(l.multiply(Z),u.copy(U.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/Z.x),l.x=u.x*Z.x,U.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/Z.y),l.y=u.y*Z.y,U.mapSize.y=u.y)),U.map===null||le===!0||ce===!0){const O=this.type!==ea?{minFilter:vi,magFilter:vi}:{};U.map!==null&&U.map.dispose(),U.map=new yr(l.x,l.y,O),U.map.texture.name=Q.name+".shadowMap",U.camera.updateProjectionMatrix()}o.setRenderTarget(U.map),o.clear();const ue=U.getViewportCount();for(let O=0;O<ue;O++){const $=U.getViewport(O);d.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),fe.viewport(d),U.updateMatrices(Q,O),r=U.getFrustum(),N(I,K,U.camera,Q,this.type)}U.isPointLightShadow!==!0&&this.type===ea&&V(U,K),U.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,B)};function V(G,I){const K=t.update(E);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new yr(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(I,null,K,S,E,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(I,null,K,y,E,null)}function z(G,I,K,D){let C=null;const B=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(B!==void 0)C=B;else if(C=K.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const fe=C.uuid,le=I.uuid;let ce=p[fe];ce===void 0&&(ce={},p[fe]=ce);let Se=ce[le];Se===void 0&&(Se=C.clone(),ce[le]=Se,I.addEventListener("dispose",X)),C=Se}if(C.visible=I.visible,C.wireframe=I.wireframe,D===ea?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:v[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,K.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const fe=o.properties.get(C);fe.light=K}return C}function N(G,I,K,D,C){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===ea)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const le=t.update(G),ce=G.material;if(Array.isArray(ce)){const Se=le.groups;for(let L=0,Q=Se.length;L<Q;L++){const U=Se[L],Z=ce[U.materialIndex];if(Z&&Z.visible){const ue=z(G,Z,D,C);G.onBeforeShadow(o,G,I,K,le,ue,U),o.renderBufferDirect(K,null,le,ue,G,U),G.onAfterShadow(o,G,I,K,le,ue,U)}}}else if(ce.visible){const Se=z(G,ce,D,C);G.onBeforeShadow(o,G,I,K,le,Se,null),o.renderBufferDirect(K,null,le,Se,G,null),G.onAfterShadow(o,G,I,K,le,Se,null)}}const fe=G.children;for(let le=0,ce=fe.length;le<ce;le++)N(fe[le],I,K,D,C)}function X(G){G.target.removeEventListener("dispose",X);for(const K in p){const D=p[K],C=G.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const HA={[Nd]:Od,[Pd]:Fd,[zd]:Id,[Es]:Bd,[Od]:Nd,[Fd]:Pd,[Id]:zd,[Bd]:Es};function GA(o,t){function i(){let j=!1;const Re=new Gt;let De=null;const Be=new Gt(0,0,0,0);return{setMask:function(be){De!==be&&!j&&(o.colorMask(be,be,be,be),De=be)},setLocked:function(be){j=be},setClear:function(be,xe,He,it,Ot){Ot===!0&&(be*=it,xe*=it,He*=it),Re.set(be,xe,He,it),Be.equals(Re)===!1&&(o.clearColor(be,xe,He,it),Be.copy(Re))},reset:function(){j=!1,De=null,Be.set(-1,0,0,0)}}}function r(){let j=!1,Re=!1,De=null,Be=null,be=null;return{setReversed:function(xe){if(Re!==xe){const He=t.get("EXT_clip_control");xe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Re=xe;const it=be;be=null,this.setClear(it)}},getReversed:function(){return Re},setTest:function(xe){xe?ve(o.DEPTH_TEST):Fe(o.DEPTH_TEST)},setMask:function(xe){De!==xe&&!j&&(o.depthMask(xe),De=xe)},setFunc:function(xe){if(Re&&(xe=HA[xe]),Be!==xe){switch(xe){case Nd:o.depthFunc(o.NEVER);break;case Od:o.depthFunc(o.ALWAYS);break;case Pd:o.depthFunc(o.LESS);break;case Es:o.depthFunc(o.LEQUAL);break;case zd:o.depthFunc(o.EQUAL);break;case Bd:o.depthFunc(o.GEQUAL);break;case Fd:o.depthFunc(o.GREATER);break;case Id:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Be=xe}},setLocked:function(xe){j=xe},setClear:function(xe){be!==xe&&(Re&&(xe=1-xe),o.clearDepth(xe),be=xe)},reset:function(){j=!1,De=null,Be=null,be=null,Re=!1}}}function l(){let j=!1,Re=null,De=null,Be=null,be=null,xe=null,He=null,it=null,Ot=null;return{setTest:function(Et){j||(Et?ve(o.STENCIL_TEST):Fe(o.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!j&&(o.stencilMask(Et),Re=Et)},setFunc:function(Et,Cn,$n){(De!==Et||Be!==Cn||be!==$n)&&(o.stencilFunc(Et,Cn,$n),De=Et,Be=Cn,be=$n)},setOp:function(Et,Cn,$n){(xe!==Et||He!==Cn||it!==$n)&&(o.stencilOp(Et,Cn,$n),xe=Et,He=Cn,it=$n)},setLocked:function(Et){j=Et},setClear:function(Et){Ot!==Et&&(o.clearStencil(Et),Ot=Et)},reset:function(){j=!1,Re=null,De=null,Be=null,be=null,xe=null,He=null,it=null,Ot=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},v={},S=new WeakMap,y=[],A=null,E=!1,M=null,_=null,V=null,z=null,N=null,X=null,G=null,I=new wt(0,0,0),K=0,D=!1,C=null,B=null,fe=null,le=null,ce=null;const Se=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,Q=0;const U=o.getParameter(o.VERSION);U.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(U)[1]),L=Q>=1):U.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),L=Q>=2);let Z=null,ue={};const O=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),Me=new Gt().fromArray(O),Te=new Gt().fromArray($);function J(j,Re,De,Be){const be=new Uint8Array(4),xe=o.createTexture();o.bindTexture(j,xe),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let He=0;He<De;He++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,Be,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(Re+He,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return xe}const _e={};_e[o.TEXTURE_2D]=J(o.TEXTURE_2D,o.TEXTURE_2D,1),_e[o.TEXTURE_CUBE_MAP]=J(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[o.TEXTURE_2D_ARRAY]=J(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),_e[o.TEXTURE_3D]=J(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ve(o.DEPTH_TEST),d.setFunc(Es),ht(!1),Ke(y_),ve(o.CULL_FACE),pt(Fa);function ve(j){x[j]!==!0&&(o.enable(j),x[j]=!0)}function Fe(j){x[j]!==!1&&(o.disable(j),x[j]=!1)}function Oe(j,Re){return v[j]!==Re?(o.bindFramebuffer(j,Re),v[j]=Re,j===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Re),j===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function et(j,Re){let De=y,Be=!1;if(j){De=S.get(Re),De===void 0&&(De=[],S.set(Re,De));const be=j.textures;if(De.length!==be.length||De[0]!==o.COLOR_ATTACHMENT0){for(let xe=0,He=be.length;xe<He;xe++)De[xe]=o.COLOR_ATTACHMENT0+xe;De.length=be.length,Be=!0}}else De[0]!==o.BACK&&(De[0]=o.BACK,Be=!0);Be&&o.drawBuffers(De)}function Nt(j){return A!==j?(o.useProgram(j),A=j,!0):!1}const ut={[gr]:o.FUNC_ADD,[DS]:o.FUNC_SUBTRACT,[US]:o.FUNC_REVERSE_SUBTRACT};ut[LS]=o.MIN,ut[NS]=o.MAX;const H={[OS]:o.ZERO,[PS]:o.ONE,[zS]:o.SRC_COLOR,[Ud]:o.SRC_ALPHA,[VS]:o.SRC_ALPHA_SATURATE,[HS]:o.DST_COLOR,[FS]:o.DST_ALPHA,[BS]:o.ONE_MINUS_SRC_COLOR,[Ld]:o.ONE_MINUS_SRC_ALPHA,[GS]:o.ONE_MINUS_DST_COLOR,[IS]:o.ONE_MINUS_DST_ALPHA,[kS]:o.CONSTANT_COLOR,[XS]:o.ONE_MINUS_CONSTANT_COLOR,[jS]:o.CONSTANT_ALPHA,[WS]:o.ONE_MINUS_CONSTANT_ALPHA};function pt(j,Re,De,Be,be,xe,He,it,Ot,Et){if(j===Fa){E===!0&&(Fe(o.BLEND),E=!1);return}if(E===!1&&(ve(o.BLEND),E=!0),j!==CS){if(j!==M||Et!==D){if((_!==gr||N!==gr)&&(o.blendEquation(o.FUNC_ADD),_=gr,N=gr),Et)switch(j){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case M_:o.blendFunc(o.ONE,o.ONE);break;case E_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case b_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case M_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case E_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}V=null,z=null,X=null,G=null,I.set(0,0,0),K=0,M=j,D=Et}return}be=be||Re,xe=xe||De,He=He||Be,(Re!==_||be!==N)&&(o.blendEquationSeparate(ut[Re],ut[be]),_=Re,N=be),(De!==V||Be!==z||xe!==X||He!==G)&&(o.blendFuncSeparate(H[De],H[Be],H[xe],H[He]),V=De,z=Be,X=xe,G=He),(it.equals(I)===!1||Ot!==K)&&(o.blendColor(it.r,it.g,it.b,Ot),I.copy(it),K=Ot),M=j,D=!1}function qe(j,Re){j.side===ta?Fe(o.CULL_FACE):ve(o.CULL_FACE);let De=j.side===Hn;Re&&(De=!De),ht(De),j.blending===Ss&&j.transparent===!1?pt(Fa):pt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),u.setMask(j.colorWrite);const Be=j.stencilWrite;h.setTest(Be),Be&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ie(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Fe(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(j){C!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),C=j)}function Ke(j){j!==RS?(ve(o.CULL_FACE),j!==B&&(j===y_?o.cullFace(o.BACK):j===wS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Fe(o.CULL_FACE),B=j}function Vt(j){j!==fe&&(L&&o.lineWidth(j),fe=j)}function Ie(j,Re,De){j?(ve(o.POLYGON_OFFSET_FILL),(le!==Re||ce!==De)&&(o.polygonOffset(Re,De),le=Re,ce=De)):Fe(o.POLYGON_OFFSET_FILL)}function rt(j){j?ve(o.SCISSOR_TEST):Fe(o.SCISSOR_TEST)}function Qt(j){j===void 0&&(j=o.TEXTURE0+Se-1),Z!==j&&(o.activeTexture(j),Z=j)}function Zt(j,Re,De){De===void 0&&(Z===null?De=o.TEXTURE0+Se-1:De=Z);let Be=ue[De];Be===void 0&&(Be={type:void 0,texture:void 0},ue[De]=Be),(Be.type!==j||Be.texture!==Re)&&(Z!==De&&(o.activeTexture(De),Z=De),o.bindTexture(j,Re||_e[j]),Be.type=j,Be.texture=Re)}function P(){const j=ue[Z];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ie(){try{o.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pe(){try{o.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{o.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{o.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{o.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{o.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function je(){try{o.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function We(){try{o.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{o.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(j){Me.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),Me.copy(j))}function Ze(j){Te.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),Te.copy(j))}function ze(j,Re){let De=p.get(Re);De===void 0&&(De=new WeakMap,p.set(Re,De));let Be=De.get(j);Be===void 0&&(Be=o.getUniformBlockIndex(Re,j.name),De.set(j,Be))}function Ue(j,Re){const Be=p.get(Re).get(j);m.get(Re)!==Be&&(o.uniformBlockBinding(Re,Be,j.__bindingPointIndex),m.set(Re,Be))}function st(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Z=null,ue={},v={},S=new WeakMap,y=[],A=null,E=!1,M=null,_=null,V=null,z=null,N=null,X=null,G=null,I=new wt(0,0,0),K=0,D=!1,C=null,B=null,fe=null,le=null,ce=null,Me.set(0,0,o.canvas.width,o.canvas.height),Te.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ve,disable:Fe,bindFramebuffer:Oe,drawBuffers:et,useProgram:Nt,setBlending:pt,setMaterial:qe,setFlipSided:ht,setCullFace:Ke,setLineWidth:Vt,setPolygonOffset:Ie,setScissorTest:rt,activeTexture:Qt,bindTexture:Zt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:ie,texImage2D:We,texImage3D:Ae,updateUBOMapping:ze,uniformBlockBinding:Ue,texStorage2D:we,texStorage3D:je,texSubImage2D:pe,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:Ye,scissor:Ce,viewport:Ze,reset:st}}function VA(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,x=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,b){return y?new OffscreenCanvas(P,b):Nc("canvas")}function E(P,b,ie){let pe=1;const Ee=Zt(P);if((Ee.width>ie||Ee.height>ie)&&(pe=ie/Math.max(Ee.width,Ee.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(pe*Ee.width),Ye=Math.floor(pe*Ee.height);v===void 0&&(v=A(de,Ye));const we=b?A(de,Ye):v;return we.width=de,we.height=Ye,we.getContext("2d").drawImage(P,0,0,de,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+de+"x"+Ye+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),P;return P}function M(P){return P.generateMipmaps}function _(P){o.generateMipmap(P)}function V(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(P,b,ie,pe,Ee=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=b;if(b===o.RED&&(ie===o.FLOAT&&(de=o.R32F),ie===o.HALF_FLOAT&&(de=o.R16F),ie===o.UNSIGNED_BYTE&&(de=o.R8)),b===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(de=o.R8UI),ie===o.UNSIGNED_SHORT&&(de=o.R16UI),ie===o.UNSIGNED_INT&&(de=o.R32UI),ie===o.BYTE&&(de=o.R8I),ie===o.SHORT&&(de=o.R16I),ie===o.INT&&(de=o.R32I)),b===o.RG&&(ie===o.FLOAT&&(de=o.RG32F),ie===o.HALF_FLOAT&&(de=o.RG16F),ie===o.UNSIGNED_BYTE&&(de=o.RG8)),b===o.RG_INTEGER&&(ie===o.UNSIGNED_BYTE&&(de=o.RG8UI),ie===o.UNSIGNED_SHORT&&(de=o.RG16UI),ie===o.UNSIGNED_INT&&(de=o.RG32UI),ie===o.BYTE&&(de=o.RG8I),ie===o.SHORT&&(de=o.RG16I),ie===o.INT&&(de=o.RG32I)),b===o.RGB_INTEGER&&(ie===o.UNSIGNED_BYTE&&(de=o.RGB8UI),ie===o.UNSIGNED_SHORT&&(de=o.RGB16UI),ie===o.UNSIGNED_INT&&(de=o.RGB32UI),ie===o.BYTE&&(de=o.RGB8I),ie===o.SHORT&&(de=o.RGB16I),ie===o.INT&&(de=o.RGB32I)),b===o.RGBA_INTEGER&&(ie===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),ie===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),ie===o.UNSIGNED_INT&&(de=o.RGBA32UI),ie===o.BYTE&&(de=o.RGBA8I),ie===o.SHORT&&(de=o.RGBA16I),ie===o.INT&&(de=o.RGBA32I)),b===o.RGB&&ie===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),b===o.RGBA){const Ye=Ee?Uc:Rt.getTransfer(pe);ie===o.FLOAT&&(de=o.RGBA32F),ie===o.HALF_FLOAT&&(de=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(de=Ye===Ht?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&t.get("EXT_color_buffer_float"),de}function N(P,b){let ie;return P?b===null||b===Sr||b===Po?ie=o.DEPTH24_STENCIL8:b===na?ie=o.DEPTH32F_STENCIL8:b===Oo&&(ie=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Sr||b===Po?ie=o.DEPTH_COMPONENT24:b===na?ie=o.DEPTH_COMPONENT32F:b===Oo&&(ie=o.DEPTH_COMPONENT16),ie}function X(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==vi&&P.minFilter!==Ai?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function G(P){const b=P.target;b.removeEventListener("dispose",G),K(b),b.isVideoTexture&&x.delete(b)}function I(P){const b=P.target;b.removeEventListener("dispose",I),C(b)}function K(P){const b=r.get(P);if(b.__webglInit===void 0)return;const ie=P.source,pe=S.get(ie);if(pe){const Ee=pe[b.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&D(P),Object.keys(pe).length===0&&S.delete(ie)}r.remove(P)}function D(P){const b=r.get(P);o.deleteTexture(b.__webglTexture);const ie=P.source,pe=S.get(ie);delete pe[b.__cacheKey],d.memory.textures--}function C(P){const b=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let Ee=0;Ee<b.__webglFramebuffer[pe].length;Ee++)o.deleteFramebuffer(b.__webglFramebuffer[pe][Ee]);else o.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)o.deleteFramebuffer(b.__webglFramebuffer[pe]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ie=P.textures;for(let pe=0,Ee=ie.length;pe<Ee;pe++){const de=r.get(ie[pe]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),d.memory.textures--),r.remove(ie[pe])}r.remove(P)}let B=0;function fe(){B=0}function le(){const P=B;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),B+=1,P}function ce(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Se(P,b){const ie=r.get(P);if(P.isVideoTexture&&rt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ie.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(ie,P,b);return}}else P.isExternalTexture&&(ie.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+b)}function L(P,b){const ie=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ie.__version!==P.version){_e(ie,P,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+b)}function Q(P,b){const ie=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ie.__version!==P.version){_e(ie,P,b);return}i.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+b)}function U(P,b){const ie=r.get(P);if(P.version>0&&ie.__version!==P.version){ve(ie,P,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+b)}const Z={[Vd]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[kd]:o.MIRRORED_REPEAT},ue={[vi]:o.NEAREST,[ny]:o.NEAREST_MIPMAP_NEAREST,[ec]:o.NEAREST_MIPMAP_LINEAR,[Ai]:o.LINEAR,[$f]:o.LINEAR_MIPMAP_NEAREST,[xr]:o.LINEAR_MIPMAP_LINEAR},O={[oy]:o.NEVER,[hy]:o.ALWAYS,[ly]:o.LESS,[Gv]:o.LEQUAL,[cy]:o.EQUAL,[dy]:o.GEQUAL,[uy]:o.GREATER,[fy]:o.NOTEQUAL};function $(P,b){if(b.type===na&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ai||b.magFilter===$f||b.magFilter===ec||b.magFilter===xr||b.minFilter===Ai||b.minFilter===$f||b.minFilter===ec||b.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Z[b.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Z[b.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Z[b.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,ue[b.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vi||b.minFilter!==ec&&b.minFilter!==xr||b.type===na&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ie=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Me(P,b){let ie=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",G));const pe=b.source;let Ee=S.get(pe);Ee===void 0&&(Ee={},S.set(pe,Ee));const de=ce(b);if(de!==P.__cacheKey){Ee[de]===void 0&&(Ee[de]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),Ee[de].usedTimes++;const Ye=Ee[P.__cacheKey];Ye!==void 0&&(Ee[P.__cacheKey].usedTimes--,Ye.usedTimes===0&&D(b)),P.__cacheKey=de,P.__webglTexture=Ee[de].texture}return ie}function Te(P,b,ie){return Math.floor(Math.floor(P/ie)/b)}function J(P,b,ie,pe){const de=P.updateRanges;if(de.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,ie,pe,b.data);else{de.sort((Ae,Ce)=>Ae.start-Ce.start);let Ye=0;for(let Ae=1;Ae<de.length;Ae++){const Ce=de[Ye],Ze=de[Ae],ze=Ce.start+Ce.count,Ue=Te(Ze.start,b.width,4),st=Te(Ce.start,b.width,4);Ze.start<=ze+1&&Ue===st&&Te(Ze.start+Ze.count-1,b.width,4)===Ue?Ce.count=Math.max(Ce.count,Ze.start+Ze.count-Ce.start):(++Ye,de[Ye]=Ze)}de.length=Ye+1;const we=o.getParameter(o.UNPACK_ROW_LENGTH),je=o.getParameter(o.UNPACK_SKIP_PIXELS),We=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Ae=0,Ce=de.length;Ae<Ce;Ae++){const Ze=de[Ae],ze=Math.floor(Ze.start/4),Ue=Math.ceil(Ze.count/4),st=ze%b.width,j=Math.floor(ze/b.width),Re=Ue,De=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,st),o.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,st,j,Re,De,ie,pe,b.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,we),o.pixelStorei(o.UNPACK_SKIP_PIXELS,je),o.pixelStorei(o.UNPACK_SKIP_ROWS,We)}}function _e(P,b,ie){let pe=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=o.TEXTURE_3D);const Ee=Me(P,b),de=b.source;i.bindTexture(pe,P.__webglTexture,o.TEXTURE0+ie);const Ye=r.get(de);if(de.version!==Ye.__version||Ee===!0){i.activeTexture(o.TEXTURE0+ie);const we=Rt.getPrimaries(Rt.workingColorSpace),je=b.colorSpace===Ba?null:Rt.getPrimaries(b.colorSpace),We=b.colorSpace===Ba||we===je?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Ae=E(b.image,!1,l.maxTextureSize);Ae=Qt(b,Ae);const Ce=u.convert(b.format,b.colorSpace),Ze=u.convert(b.type);let ze=z(b.internalFormat,Ce,Ze,b.colorSpace,b.isVideoTexture);$(pe,b);let Ue;const st=b.mipmaps,j=b.isVideoTexture!==!0,Re=Ye.__version===void 0||Ee===!0,De=de.dataReady,Be=X(b,Ae);if(b.isDepthTexture)ze=N(b.format===Bo,b.type),Re&&(j?i.texStorage2D(o.TEXTURE_2D,1,ze,Ae.width,Ae.height):i.texImage2D(o.TEXTURE_2D,0,ze,Ae.width,Ae.height,0,Ce,Ze,null));else if(b.isDataTexture)if(st.length>0){j&&Re&&i.texStorage2D(o.TEXTURE_2D,Be,ze,st[0].width,st[0].height);for(let be=0,xe=st.length;be<xe;be++)Ue=st[be],j?De&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,Ue.width,Ue.height,Ce,Ze,Ue.data):i.texImage2D(o.TEXTURE_2D,be,ze,Ue.width,Ue.height,0,Ce,Ze,Ue.data);b.generateMipmaps=!1}else j?(Re&&i.texStorage2D(o.TEXTURE_2D,Be,ze,Ae.width,Ae.height),De&&J(b,Ae,Ce,Ze)):i.texImage2D(o.TEXTURE_2D,0,ze,Ae.width,Ae.height,0,Ce,Ze,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&Re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,ze,st[0].width,st[0].height,Ae.depth);for(let be=0,xe=st.length;be<xe;be++)if(Ue=st[be],b.format!==_i)if(Ce!==null)if(j){if(De)if(b.layerUpdates.size>0){const He=Q_(Ue.width,Ue.height,b.format,b.type);for(const it of b.layerUpdates){const Ot=Ue.data.subarray(it*He/Ue.data.BYTES_PER_ELEMENT,(it+1)*He/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,it,Ue.width,Ue.height,1,Ce,Ot)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Ue.width,Ue.height,Ae.depth,Ce,Ue.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,be,ze,Ue.width,Ue.height,Ae.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?De&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Ue.width,Ue.height,Ae.depth,Ce,Ze,Ue.data):i.texImage3D(o.TEXTURE_2D_ARRAY,be,ze,Ue.width,Ue.height,Ae.depth,0,Ce,Ze,Ue.data)}else{j&&Re&&i.texStorage2D(o.TEXTURE_2D,Be,ze,st[0].width,st[0].height);for(let be=0,xe=st.length;be<xe;be++)Ue=st[be],b.format!==_i?Ce!==null?j?De&&i.compressedTexSubImage2D(o.TEXTURE_2D,be,0,0,Ue.width,Ue.height,Ce,Ue.data):i.compressedTexImage2D(o.TEXTURE_2D,be,ze,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?De&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,Ue.width,Ue.height,Ce,Ze,Ue.data):i.texImage2D(o.TEXTURE_2D,be,ze,Ue.width,Ue.height,0,Ce,Ze,Ue.data)}else if(b.isDataArrayTexture)if(j){if(Re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,ze,Ae.width,Ae.height,Ae.depth),De)if(b.layerUpdates.size>0){const be=Q_(Ae.width,Ae.height,b.format,b.type);for(const xe of b.layerUpdates){const He=Ae.data.subarray(xe*be/Ae.data.BYTES_PER_ELEMENT,(xe+1)*be/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xe,Ae.width,Ae.height,1,Ce,Ze,He)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,Ze,Ae.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,Ae.width,Ae.height,Ae.depth,0,Ce,Ze,Ae.data);else if(b.isData3DTexture)j?(Re&&i.texStorage3D(o.TEXTURE_3D,Be,ze,Ae.width,Ae.height,Ae.depth),De&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,Ze,Ae.data)):i.texImage3D(o.TEXTURE_3D,0,ze,Ae.width,Ae.height,Ae.depth,0,Ce,Ze,Ae.data);else if(b.isFramebufferTexture){if(Re)if(j)i.texStorage2D(o.TEXTURE_2D,Be,ze,Ae.width,Ae.height);else{let be=Ae.width,xe=Ae.height;for(let He=0;He<Be;He++)i.texImage2D(o.TEXTURE_2D,He,ze,be,xe,0,Ce,Ze,null),be>>=1,xe>>=1}}else if(st.length>0){if(j&&Re){const be=Zt(st[0]);i.texStorage2D(o.TEXTURE_2D,Be,ze,be.width,be.height)}for(let be=0,xe=st.length;be<xe;be++)Ue=st[be],j?De&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,Ce,Ze,Ue):i.texImage2D(o.TEXTURE_2D,be,ze,Ce,Ze,Ue);b.generateMipmaps=!1}else if(j){if(Re){const be=Zt(Ae);i.texStorage2D(o.TEXTURE_2D,Be,ze,be.width,be.height)}De&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ce,Ze,Ae)}else i.texImage2D(o.TEXTURE_2D,0,ze,Ce,Ze,Ae);M(b)&&_(pe),Ye.__version=de.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ve(P,b,ie){if(b.image.length!==6)return;const pe=Me(P,b),Ee=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+ie);const de=r.get(Ee);if(Ee.version!==de.__version||pe===!0){i.activeTexture(o.TEXTURE0+ie);const Ye=Rt.getPrimaries(Rt.workingColorSpace),we=b.colorSpace===Ba?null:Rt.getPrimaries(b.colorSpace),je=b.colorSpace===Ba||Ye===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const We=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,Ce=[];for(let xe=0;xe<6;xe++)!We&&!Ae?Ce[xe]=E(b.image[xe],!0,l.maxCubemapSize):Ce[xe]=Ae?b.image[xe].image:b.image[xe],Ce[xe]=Qt(b,Ce[xe]);const Ze=Ce[0],ze=u.convert(b.format,b.colorSpace),Ue=u.convert(b.type),st=z(b.internalFormat,ze,Ue,b.colorSpace),j=b.isVideoTexture!==!0,Re=de.__version===void 0||pe===!0,De=Ee.dataReady;let Be=X(b,Ze);$(o.TEXTURE_CUBE_MAP,b);let be;if(We){j&&Re&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,st,Ze.width,Ze.height);for(let xe=0;xe<6;xe++){be=Ce[xe].mipmaps;for(let He=0;He<be.length;He++){const it=be[He];b.format!==_i?ze!==null?j?De&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,it.width,it.height,ze,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,st,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,it.width,it.height,ze,Ue,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,st,it.width,it.height,0,ze,Ue,it.data)}}}else{if(be=b.mipmaps,j&&Re){be.length>0&&Be++;const xe=Zt(Ce[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,st,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ae){j?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ce[xe].width,Ce[xe].height,ze,Ue,Ce[xe].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,Ce[xe].width,Ce[xe].height,0,ze,Ue,Ce[xe].data);for(let He=0;He<be.length;He++){const Ot=be[He].image[xe].image;j?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,Ot.width,Ot.height,ze,Ue,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,st,Ot.width,Ot.height,0,ze,Ue,Ot.data)}}else{j?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ze,Ue,Ce[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,ze,Ue,Ce[xe]);for(let He=0;He<be.length;He++){const it=be[He];j?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,ze,Ue,it.image[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,st,ze,Ue,it.image[xe])}}}M(b)&&_(o.TEXTURE_CUBE_MAP),de.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Fe(P,b,ie,pe,Ee,de){const Ye=u.convert(ie.format,ie.colorSpace),we=u.convert(ie.type),je=z(ie.internalFormat,Ye,we,ie.colorSpace),We=r.get(b),Ae=r.get(ie);if(Ae.__renderTarget=b,!We.__hasExternalTextures){const Ce=Math.max(1,b.width>>de),Ze=Math.max(1,b.height>>de);Ee===o.TEXTURE_3D||Ee===o.TEXTURE_2D_ARRAY?i.texImage3D(Ee,de,je,Ce,Ze,b.depth,0,Ye,we,null):i.texImage2D(Ee,de,je,Ce,Ze,0,Ye,we,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),Ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,Ee,Ae.__webglTexture,0,Vt(b)):(Ee===o.TEXTURE_2D||Ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,Ee,Ae.__webglTexture,de),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Oe(P,b,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,P),b.depthBuffer){const pe=b.depthTexture,Ee=pe&&pe.isDepthTexture?pe.type:null,de=N(b.stencilBuffer,Ee),Ye=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=Vt(b);Ie(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,de,b.width,b.height):ie?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,de,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,de,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ye,o.RENDERBUFFER,P)}else{const pe=b.textures;for(let Ee=0;Ee<pe.length;Ee++){const de=pe[Ee],Ye=u.convert(de.format,de.colorSpace),we=u.convert(de.type),je=z(de.internalFormat,Ye,we,de.colorSpace),We=Vt(b);ie&&Ie(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,We,je,b.width,b.height):Ie(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,We,je,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,je,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function et(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(b.depthTexture);pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Se(b.depthTexture,0);const Ee=pe.__webglTexture,de=Vt(b);if(b.depthTexture.format===zo)Ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ee,0);else if(b.depthTexture.format===Bo)Ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Nt(P){const b=r.get(P),ie=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const Ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",Ee)};pe.addEventListener("dispose",Ee),b.__depthDisposeCallback=Ee}b.__boundDepthTexture=pe}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const pe=P.texture.mipmaps;pe&&pe.length>0?et(b.__webglFramebuffer[0],P):et(b.__webglFramebuffer,P)}else if(ie){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=o.createRenderbuffer(),Oe(b.__webglDepthbuffer[pe],P,!1);else{const Ee=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,de)}}else{const pe=P.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Oe(b.__webglDepthbuffer,P,!1);else{const Ee=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,de)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(P,b,ie){const pe=r.get(P);b!==void 0&&Fe(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&Nt(P)}function H(P){const b=P.texture,ie=r.get(P),pe=r.get(b);P.addEventListener("dispose",I);const Ee=P.textures,de=P.isWebGLCubeRenderTarget===!0,Ye=Ee.length>1;if(Ye||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=b.version,d.memory.textures++),de){ie.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer[we]=[];for(let je=0;je<b.mipmaps.length;je++)ie.__webglFramebuffer[we][je]=o.createFramebuffer()}else ie.__webglFramebuffer[we]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)ie.__webglFramebuffer[we]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(Ye)for(let we=0,je=Ee.length;we<je;we++){const We=r.get(Ee[we]);We.__webglTexture===void 0&&(We.__webglTexture=o.createTexture(),d.memory.textures++)}if(P.samples>0&&Ie(P)===!1){ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let we=0;we<Ee.length;we++){const je=Ee[we];ie.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[we]);const We=u.convert(je.format,je.colorSpace),Ae=u.convert(je.type),Ce=z(je.internalFormat,We,Ae,je.colorSpace,P.isXRRenderTarget===!0),Ze=Vt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ze,Ce,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,ie.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),Oe(ie.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),$(o.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let je=0;je<b.mipmaps.length;je++)Fe(ie.__webglFramebuffer[we][je],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,je);else Fe(ie.__webglFramebuffer[we],P,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(b)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ye){for(let we=0,je=Ee.length;we<je;we++){const We=Ee[we],Ae=r.get(We);let Ce=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,Ae.__webglTexture),$(Ce,We),Fe(ie.__webglFramebuffer,P,We,o.COLOR_ATTACHMENT0+we,Ce,0),M(We)&&_(Ce)}i.unbindTexture()}else{let we=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(we,pe.__webglTexture),$(we,b),b.mipmaps&&b.mipmaps.length>0)for(let je=0;je<b.mipmaps.length;je++)Fe(ie.__webglFramebuffer[je],P,b,o.COLOR_ATTACHMENT0,we,je);else Fe(ie.__webglFramebuffer,P,b,o.COLOR_ATTACHMENT0,we,0);M(b)&&_(we),i.unbindTexture()}P.depthBuffer&&Nt(P)}function pt(P){const b=P.textures;for(let ie=0,pe=b.length;ie<pe;ie++){const Ee=b[ie];if(M(Ee)){const de=V(P),Ye=r.get(Ee).__webglTexture;i.bindTexture(de,Ye),_(de),i.unbindTexture()}}}const qe=[],ht=[];function Ke(P){if(P.samples>0){if(Ie(P)===!1){const b=P.textures,ie=P.width,pe=P.height;let Ee=o.COLOR_BUFFER_BIT;const de=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ye=r.get(P),we=b.length>1;if(we)for(let We=0;We<b.length;We++)i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const je=P.texture.mipmaps;je&&je.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let We=0;We<b.length;We++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Ee|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Ee|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[We]);const Ae=r.get(b[We]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ae,0)}o.blitFramebuffer(0,0,ie,pe,0,0,ie,pe,Ee,o.NEAREST),m===!0&&(qe.length=0,ht.length=0,qe.push(o.COLOR_ATTACHMENT0+We),P.depthBuffer&&P.resolveDepthBuffer===!1&&(qe.push(de),ht.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,qe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let We=0;We<b.length;We++){i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[We]);const Ae=r.get(b[We]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,Ae,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const b=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Vt(P){return Math.min(l.maxSamples,P.samples)}function Ie(P){const b=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function rt(P){const b=d.render.frame;x.get(P)!==b&&(x.set(P,b),P.update())}function Qt(P,b){const ie=P.colorSpace,pe=P.format,Ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ie!==As&&ie!==Ba&&(Rt.getTransfer(ie)===Ht?(pe!==_i||Ee!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),b}function Zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=fe,this.setTexture2D=Se,this.setTexture2DArray=L,this.setTexture3D=Q,this.setTextureCube=U,this.rebindTextures=ut,this.setupRenderTarget=H,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Ie}function kA(o,t){function i(r,l=Ba){let u;const d=Rt.getTransfer(l);if(r===Ci)return o.UNSIGNED_BYTE;if(r===Sh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===yh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Pv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Nv)return o.BYTE;if(r===Ov)return o.SHORT;if(r===Oo)return o.UNSIGNED_SHORT;if(r===xh)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===na)return o.FLOAT;if(r===Io)return o.HALF_FLOAT;if(r===zv)return o.ALPHA;if(r===Bv)return o.RGB;if(r===_i)return o.RGBA;if(r===zo)return o.DEPTH_COMPONENT;if(r===Bo)return o.DEPTH_STENCIL;if(r===Fv)return o.RED;if(r===Mh)return o.RED_INTEGER;if(r===Iv)return o.RG;if(r===Eh)return o.RG_INTEGER;if(r===bh)return o.RGBA_INTEGER;if(r===Tc||r===Ac||r===Rc||r===wc)if(d===Ht)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Tc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Tc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ac)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xd||r===jd||r===Wd||r===qd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Xd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yd||r===Zd||r===Kd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Yd||r===Zd)return d===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Kd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qd||r===Jd||r===$d||r===eh||r===th||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Qd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$d)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===eh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===th)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ih)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ah)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===oh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ch)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cc||r===fh||r===dh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Cc)return d===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hv||r===hh||r===ph||r===mh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Cc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===hh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ph)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Po?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class l0 extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const XA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jA=`
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

}`;class WA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new l0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Va({vertexShader:XA,fragmentShader:jA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ia(new Fc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qA extends ws{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,v=null,S=null,y=null,A=null;const E=new WA,M={},_=i.getContextAttributes();let V=null,z=null;const N=[],X=[],G=new Dt;let I=null;const K=new Jn;K.viewport=new Gt;const D=new Jn;D.viewport=new Gt;const C=[K,D],B=new pM;let fe=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=N[J];return _e===void 0&&(_e=new Sd,N[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=N[J];return _e===void 0&&(_e=new Sd,N[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=N[J];return _e===void 0&&(_e=new Sd,N[J]=_e),_e.getHandSpace()};function ce(J){const _e=X.indexOf(J.inputSource);if(_e===-1)return;const ve=N[_e];ve!==void 0&&(ve.update(J.inputSource,J.frame,p||d),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function Se(){l.removeEventListener("select",ce),l.removeEventListener("selectstart",ce),l.removeEventListener("selectend",ce),l.removeEventListener("squeeze",ce),l.removeEventListener("squeezestart",ce),l.removeEventListener("squeezeend",ce),l.removeEventListener("end",Se),l.removeEventListener("inputsourceschange",L);for(let J=0;J<N.length;J++){const _e=X[J];_e!==null&&(X[J]=null,N[J].disconnect(_e))}fe=null,le=null,E.reset();for(const J in M)delete M[J];t.setRenderTarget(V),y=null,S=null,v=null,l=null,z=null,Te.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(V=t.getRenderTarget(),l.addEventListener("select",ce),l.addEventListener("selectstart",ce),l.addEventListener("selectend",ce),l.addEventListener("squeeze",ce),l.addEventListener("squeezestart",ce),l.addEventListener("squeezeend",ce),l.addEventListener("end",Se),l.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&(v=new XRWebGLBinding(l,i)),v!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Fe=null,Oe=null;_.depth&&(Oe=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ve=_.stencil?Bo:zo,Fe=_.stencil?Po:Sr);const et={colorFormat:i.RGBA8,depthFormat:Oe,scaleFactor:u};S=v.createProjectionLayer(et),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),z=new yr(S.textureWidth,S.textureHeight,{format:_i,type:Ci,depthTexture:new e0(S.textureWidth,S.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const ve={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,ve),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),z=new yr(y.framebufferWidth,y.framebufferHeight,{format:_i,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Te.setContext(l),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function L(J){for(let _e=0;_e<J.removed.length;_e++){const ve=J.removed[_e],Fe=X.indexOf(ve);Fe>=0&&(X[Fe]=null,N[Fe].disconnect(ve))}for(let _e=0;_e<J.added.length;_e++){const ve=J.added[_e];let Fe=X.indexOf(ve);if(Fe===-1){for(let et=0;et<N.length;et++)if(et>=X.length){X.push(ve),Fe=et;break}else if(X[et]===null){X[et]=ve,Fe=et;break}if(Fe===-1)break}const Oe=N[Fe];Oe&&Oe.connect(ve)}}const Q=new ee,U=new ee;function Z(J,_e,ve){Q.setFromMatrixPosition(_e.matrixWorld),U.setFromMatrixPosition(ve.matrixWorld);const Fe=Q.distanceTo(U),Oe=_e.projectionMatrix.elements,et=ve.projectionMatrix.elements,Nt=Oe[14]/(Oe[10]-1),ut=Oe[14]/(Oe[10]+1),H=(Oe[9]+1)/Oe[5],pt=(Oe[9]-1)/Oe[5],qe=(Oe[8]-1)/Oe[0],ht=(et[8]+1)/et[0],Ke=Nt*qe,Vt=Nt*ht,Ie=Fe/(-qe+ht),rt=Ie*-qe;if(_e.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(rt),J.translateZ(Ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Oe[10]===-1)J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Qt=Nt+Ie,Zt=ut+Ie,P=Ke-rt,b=Vt+(Fe-rt),ie=H*ut/Zt*Qt,pe=pt*ut/Zt*Qt;J.projectionMatrix.makePerspective(P,b,ie,pe,Qt,Zt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let _e=J.near,ve=J.far;E.texture!==null&&(E.depthNear>0&&(_e=E.depthNear),E.depthFar>0&&(ve=E.depthFar)),B.near=D.near=K.near=_e,B.far=D.far=K.far=ve,(fe!==B.near||le!==B.far)&&(l.updateRenderState({depthNear:B.near,depthFar:B.far}),fe=B.near,le=B.far),B.layers.mask=J.layers.mask|6,K.layers.mask=B.layers.mask&3,D.layers.mask=B.layers.mask&5;const Fe=J.parent,Oe=B.cameras;ue(B,Fe);for(let et=0;et<Oe.length;et++)ue(Oe[et],Fe);Oe.length===2?Z(B,K,D):B.projectionMatrix.copy(K.projectionMatrix),O(J,B,Fe)};function O(J,_e,ve){ve===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Fo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(J){m=J,S!==null&&(S.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(B)},this.getCameraTexture=function(J){return M[J]};let $=null;function Me(J,_e){if(x=_e.getViewerPose(p||d),A=_e,x!==null){const ve=x.views;y!==null&&(t.setRenderTargetFramebuffer(z,y.framebuffer),t.setRenderTarget(z));let Fe=!1;ve.length!==B.cameras.length&&(B.cameras.length=0,Fe=!0);for(let ut=0;ut<ve.length;ut++){const H=ve[ut];let pt=null;if(y!==null)pt=y.getViewport(H);else{const ht=v.getViewSubImage(S,H);pt=ht.viewport,ut===0&&(t.setRenderTargetTextures(z,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(z))}let qe=C[ut];qe===void 0&&(qe=new Jn,qe.layers.enable(ut),qe.viewport=new Gt,C[ut]=qe),qe.matrix.fromArray(H.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(H.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(pt.x,pt.y,pt.width,pt.height),ut===0&&(B.matrix.copy(qe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Fe===!0&&B.cameras.push(qe)}const Oe=l.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const ut=v.getDepthInformation(ve[0]);ut&&ut.isValid&&ut.texture&&E.init(ut,l.renderState)}if(Oe&&Oe.includes("camera-access")&&(t.state.unbindTexture(),v))for(let ut=0;ut<ve.length;ut++){const H=ve[ut].camera;if(H){let pt=M[H];pt||(pt=new l0,M[H]=pt);const qe=v.getCameraImage(H);pt.sourceTexture=qe}}}for(let ve=0;ve<N.length;ve++){const Fe=X[ve],Oe=N[ve];Fe!==null&&Oe!==void 0&&Oe.update(Fe,_e,p||d)}$&&$(J,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),A=null}const Te=new i0;Te.setAnimationLoop(Me),this.setAnimationLoop=function(J){$=J},this.dispose=function(){}}}const hr=new ra,YA=new Kt;function ZA(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Kv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,V,z,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),x(M,_)):_.isMeshStandardMaterial?(u(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,N)):_.isMeshMatcapMaterial?(u(M,_),A(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),E(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,V,z):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Hn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Hn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const V=t.get(_),z=V.envMap,N=V.envMapRotation;z&&(M.envMap.value=z,hr.copy(N),hr.x*=-1,hr.y*=-1,hr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),M.envMapRotation.value.setFromMatrix4(YA.makeRotationFromEuler(hr)),M.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,V,z){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*V,M.scale.value=z*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,V){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=V.texture,M.transmissionSamplerSize.value.set(V.width,V.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function E(M,_){const V=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(V.matrixWorld),M.nearDistance.value=V.shadow.camera.near,M.farDistance.value=V.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function KA(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(V,z){const N=z.program;r.uniformBlockBinding(V,N)}function p(V,z){let N=l[V.id];N===void 0&&(A(V),N=x(V),l[V.id]=N,V.addEventListener("dispose",M));const X=z.program;r.updateUBOMapping(V,X);const G=t.render.frame;u[V.id]!==G&&(S(V),u[V.id]=G)}function x(V){const z=v();V.__bindingPointIndex=z;const N=o.createBuffer(),X=V.__size,G=V.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,X,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,N),N}function v(){for(let V=0;V<h;V++)if(d.indexOf(V)===-1)return d.push(V),V;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(V){const z=l[V.id],N=V.uniforms,X=V.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let G=0,I=N.length;G<I;G++){const K=Array.isArray(N[G])?N[G]:[N[G]];for(let D=0,C=K.length;D<C;D++){const B=K[D];if(y(B,G,D,X)===!0){const fe=B.__offset,le=Array.isArray(B.value)?B.value:[B.value];let ce=0;for(let Se=0;Se<le.length;Se++){const L=le[Se],Q=E(L);typeof L=="number"||typeof L=="boolean"?(B.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,fe+ce,B.__data)):L.isMatrix3?(B.__data[0]=L.elements[0],B.__data[1]=L.elements[1],B.__data[2]=L.elements[2],B.__data[3]=0,B.__data[4]=L.elements[3],B.__data[5]=L.elements[4],B.__data[6]=L.elements[5],B.__data[7]=0,B.__data[8]=L.elements[6],B.__data[9]=L.elements[7],B.__data[10]=L.elements[8],B.__data[11]=0):(L.toArray(B.__data,ce),ce+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,fe,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(V,z,N,X){const G=V.value,I=z+"_"+N;if(X[I]===void 0)return typeof G=="number"||typeof G=="boolean"?X[I]=G:X[I]=G.clone(),!0;{const K=X[I];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return X[I]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function A(V){const z=V.uniforms;let N=0;const X=16;for(let I=0,K=z.length;I<K;I++){const D=Array.isArray(z[I])?z[I]:[z[I]];for(let C=0,B=D.length;C<B;C++){const fe=D[C],le=Array.isArray(fe.value)?fe.value:[fe.value];for(let ce=0,Se=le.length;ce<Se;ce++){const L=le[ce],Q=E(L),U=N%X,Z=U%Q.boundary,ue=U+Z;N+=Z,ue!==0&&X-ue<Q.storage&&(N+=X-ue),fe.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=N,N+=Q.storage}}}const G=N%X;return G>0&&(N+=X-G),V.__size=N,V.__cache={},this}function E(V){const z={boundary:0,storage:0};return typeof V=="number"||typeof V=="boolean"?(z.boundary=4,z.storage=4):V.isVector2?(z.boundary=8,z.storage=8):V.isVector3||V.isColor?(z.boundary=16,z.storage=12):V.isVector4?(z.boundary=16,z.storage=16):V.isMatrix3?(z.boundary=48,z.storage=48):V.isMatrix4?(z.boundary=64,z.storage=64):V.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",V),z}function M(V){const z=V.target;z.removeEventListener("dispose",M);const N=d.indexOf(z.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete u[z.id]}function _(){for(const V in l)o.deleteBuffer(l[V]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class QA{constructor(t={}){const{canvas:i=Dy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const A=new Uint32Array(4),E=new Int32Array(4);let M=null,_=null;const V=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let X=!1;this._outputColorSpace=ci;let G=0,I=0,K=null,D=-1,C=null;const B=new Gt,fe=new Gt;let le=null;const ce=new wt(0);let Se=0,L=i.width,Q=i.height,U=1,Z=null,ue=null;const O=new Gt(0,0,L,Q),$=new Gt(0,0,L,Q);let Me=!1;const Te=new wh;let J=!1,_e=!1;const ve=new Kt,Fe=new ee,Oe=new Gt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function ut(){return K===null?U:1}let H=r;function pt(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${vh}`),i.addEventListener("webglcontextlost",De,!1),i.addEventListener("webglcontextrestored",Be,!1),i.addEventListener("webglcontextcreationerror",be,!1),H===null){const W="webgl2";if(H=pt(W,R),H===null)throw pt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let qe,ht,Ke,Vt,Ie,rt,Qt,Zt,P,b,ie,pe,Ee,de,Ye,we,je,We,Ae,Ce,Ze,ze,Ue,st;function j(){qe=new oT(H),qe.init(),ze=new kA(H,qe),ht=new eT(H,qe,t,ze),Ke=new GA(H,qe),ht.reversedDepthBuffer&&S&&Ke.buffers.depth.setReversed(!0),Vt=new uT(H),Ie=new wA,rt=new VA(H,qe,Ke,Ie,ht,ze,Vt),Qt=new nT(N),Zt=new sT(N),P=new gM(H),Ue=new Jb(H,P),b=new lT(H,P,Vt,Ue),ie=new dT(H,b,P,Vt),Ae=new fT(H,ht,rt),we=new tT(Ie),pe=new RA(N,Qt,Zt,qe,ht,Ue,we),Ee=new ZA(N,Ie),de=new DA,Ye=new zA(qe),We=new Qb(N,Qt,Zt,Ke,ie,y,m),je=new IA(N,ie,ht),st=new KA(H,Vt,ht,Ke),Ce=new $b(H,qe,Vt),Ze=new cT(H,qe,Vt),Vt.programs=pe.programs,N.capabilities=ht,N.extensions=qe,N.properties=Ie,N.renderLists=de,N.shadowMap=je,N.state=Ke,N.info=Vt}j();const Re=new qA(N,H);this.xr=Re,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=qe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=qe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(R){R!==void 0&&(U=R,this.setSize(L,Q,!1))},this.getSize=function(R){return R.set(L,Q)},this.setSize=function(R,W,re=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,Q=W,i.width=Math.floor(R*U),i.height=Math.floor(W*U),re===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(L*U,Q*U).floor()},this.setDrawingBufferSize=function(R,W,re){L=R,Q=W,U=re,i.width=Math.floor(R*re),i.height=Math.floor(W*re),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,W,re,se){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,W,re,se),Ke.viewport(B.copy(O).multiplyScalar(U).round())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,W,re,se){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,W,re,se),Ke.scissor(fe.copy($).multiplyScalar(U).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){Ke.setScissorTest(Me=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){ue=R},this.getClearColor=function(R){return R.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,re=!0){let se=0;if(R){let q=!1;if(K!==null){const ye=K.texture.format;q=ye===bh||ye===Eh||ye===Mh}if(q){const ye=K.texture.type,Le=ye===Ci||ye===Sr||ye===Oo||ye===Po||ye===Sh||ye===yh,Ve=We.getClearColor(),Pe=We.getClearAlpha(),Qe=Ve.r,nt=Ve.g,Je=Ve.b;Le?(A[0]=Qe,A[1]=nt,A[2]=Je,A[3]=Pe,H.clearBufferuiv(H.COLOR,0,A)):(E[0]=Qe,E[1]=nt,E[2]=Je,E[3]=Pe,H.clearBufferiv(H.COLOR,0,E))}else se|=H.COLOR_BUFFER_BIT}W&&(se|=H.DEPTH_BUFFER_BIT),re&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",Be,!1),i.removeEventListener("webglcontextcreationerror",be,!1),We.dispose(),de.dispose(),Ye.dispose(),Ie.dispose(),Qt.dispose(),Zt.dispose(),ie.dispose(),Ue.dispose(),st.dispose(),pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",$n),Re.removeEventListener("sessionend",Us),xi.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const R=Vt.autoReset,W=je.enabled,re=je.autoUpdate,se=je.needsUpdate,q=je.type;j(),Vt.autoReset=R,je.enabled=W,je.autoUpdate=re,je.needsUpdate=se,je.type=q}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){const W=R.target;W.removeEventListener("dispose",xe),He(W)}function He(R){it(R),Ie.remove(R)}function it(R){const W=Ie.get(R).programs;W!==void 0&&(W.forEach(function(re){pe.releaseProgram(re)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,re,se,q,ye){W===null&&(W=et);const Le=q.isMesh&&q.matrixWorld.determinant()<0,Ve=oa(R,W,re,se,q);Ke.setMaterial(se,Le);let Pe=re.index,Qe=1;if(se.wireframe===!0){if(Pe=b.getWireframeAttribute(re),Pe===void 0)return;Qe=2}const nt=re.drawRange,Je=re.attributes.position;let dt=nt.start*Qe,Ut=(nt.start+nt.count)*Qe;ye!==null&&(dt=Math.max(dt,ye.start*Qe),Ut=Math.min(Ut,(ye.start+ye.count)*Qe)),Pe!==null?(dt=Math.max(dt,0),Ut=Math.min(Ut,Pe.count)):Je!=null&&(dt=Math.max(dt,0),Ut=Math.min(Ut,Je.count));const kt=Ut-dt;if(kt<0||kt===1/0)return;Ue.setup(q,se,Ve,re,Pe);let Lt,mt=Ce;if(Pe!==null&&(Lt=P.get(Pe),mt=Ze,mt.setIndex(Lt)),q.isMesh)se.wireframe===!0?(Ke.setLineWidth(se.wireframeLinewidth*ut()),mt.setMode(H.LINES)):mt.setMode(H.TRIANGLES);else if(q.isLine){let ke=se.linewidth;ke===void 0&&(ke=1),Ke.setLineWidth(ke*ut()),q.isLineSegments?mt.setMode(H.LINES):q.isLineLoop?mt.setMode(H.LINE_LOOP):mt.setMode(H.LINE_STRIP)}else q.isPoints?mt.setMode(H.POINTS):q.isSprite&&mt.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const ke=q._multiDrawStarts,jt=q._multiDrawCounts,bt=q._multiDrawCount,Sn=Pe?P.get(Pe).bytesPerElement:1,Di=Ie.get(se).currentProgram.getUniforms();for(let mn=0;mn<bt;mn++)Di.setValue(H,"_gl_DrawID",mn),mt.render(ke[mn]/Sn,jt[mn])}else if(q.isInstancedMesh)mt.renderInstances(dt,kt,q.count);else if(re.isInstancedBufferGeometry){const ke=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,jt=Math.min(re.instanceCount,ke);mt.renderInstances(dt,kt,jt)}else mt.render(dt,kt)};function Ot(R,W,re){R.transparent===!0&&R.side===ta&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,Vn(R,W,re),R.side=Ga,R.needsUpdate=!0,Vn(R,W,re),R.side=ta):Vn(R,W,re)}this.compile=function(R,W,re=null){re===null&&(re=R),_=Ye.get(re),_.init(W),z.push(_),re.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),R!==re&&R.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const se=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ye=q.material;if(ye)if(Array.isArray(ye))for(let Le=0;Le<ye.length;Le++){const Ve=ye[Le];Ot(Ve,re,q),se.add(Ve)}else Ot(ye,re,q),se.add(ye)}),_=z.pop(),se},this.compileAsync=function(R,W,re=null){const se=this.compile(R,W,re);return new Promise(q=>{function ye(){if(se.forEach(function(Le){Ie.get(Le).currentProgram.isReady()&&se.delete(Le)}),se.size===0){q(R);return}setTimeout(ye,10)}qe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Et=null;function Cn(R){Et&&Et(R)}function $n(){xi.stop()}function Us(){xi.start()}const xi=new i0;xi.setAnimationLoop(Cn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(R){Et=R,Re.setAnimationLoop(R),R===null?xi.stop():xi.start()},Re.addEventListener("sessionstart",$n),Re.addEventListener("sessionend",Us),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,W,K),_=Ye.get(R,z.length),_.init(W),z.push(_),ve.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Te.setFromProjectionMatrix(ve,Ri,W.reversedDepth),_e=this.localClippingEnabled,J=we.init(this.clippingPlanes,_e),M=de.get(R,V.length),M.init(),V.push(M),Re.enabled===!0&&Re.isPresenting===!0){const ye=N.xr.getDepthSensingMesh();ye!==null&&Mr(ye,W,-1/0,N.sortObjects)}Mr(R,W,0,N.sortObjects),M.finish(),N.sortObjects===!0&&M.sort(Z,ue),Nt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Nt&&We.addToRenderList(M,R),this.info.render.frame++,J===!0&&we.beginShadows();const re=_.state.shadowsArray;je.render(re,R,W),J===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=M.opaque,q=M.transmissive;if(_.setupLights(),W.isArrayCamera){const ye=W.cameras;if(q.length>0)for(let Le=0,Ve=ye.length;Le<Ve;Le++){const Pe=ye[Le];br(se,q,R,Pe)}Nt&&We.render(R);for(let Le=0,Ve=ye.length;Le<Ve;Le++){const Pe=ye[Le];Er(M,R,Pe,Pe.viewport)}}else q.length>0&&br(se,q,R,W),Nt&&We.render(R),Er(M,R,W);K!==null&&I===0&&(rt.updateMultisampleRenderTarget(K),rt.updateRenderTargetMipmap(K)),R.isScene===!0&&R.onAfterRender(N,R,W),Ue.resetDefaultState(),D=-1,C=null,z.pop(),z.length>0?(_=z[z.length-1],J===!0&&we.setGlobalState(N.clippingPlanes,_.state.camera)):_=null,V.pop(),V.length>0?M=V[V.length-1]:M=null};function Mr(R,W,re,se){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Te.intersectsSprite(R)){se&&Oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const Le=ie.update(R),Ve=R.material;Ve.visible&&M.push(R,Le,Ve,re,Oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Te.intersectsObject(R))){const Le=ie.update(R),Ve=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Oe.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Oe.copy(Le.boundingSphere.center)),Oe.applyMatrix4(R.matrixWorld).applyMatrix4(ve)),Array.isArray(Ve)){const Pe=Le.groups;for(let Qe=0,nt=Pe.length;Qe<nt;Qe++){const Je=Pe[Qe],dt=Ve[Je.materialIndex];dt&&dt.visible&&M.push(R,Le,dt,re,Oe.z,Je)}}else Ve.visible&&M.push(R,Le,Ve,re,Oe.z,null)}}const ye=R.children;for(let Le=0,Ve=ye.length;Le<Ve;Le++)Mr(ye[Le],W,re,se)}function Er(R,W,re,se){const q=R.opaque,ye=R.transmissive,Le=R.transparent;_.setupLightsView(re),J===!0&&we.setGlobalState(N.clippingPlanes,re),se&&Ke.viewport(B.copy(se)),q.length>0&&ka(q,W,re),ye.length>0&&ka(ye,W,re),Le.length>0&&ka(Le,W,re),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function br(R,W,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new yr(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Io:Ci,minFilter:xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const ye=_.state.transmissionRenderTarget[se.id],Le=se.viewport||B;ye.setSize(Le.z*N.transmissionResolutionScale,Le.w*N.transmissionResolutionScale);const Ve=N.getRenderTarget(),Pe=N.getActiveCubeFace(),Qe=N.getActiveMipmapLevel();N.setRenderTarget(ye),N.getClearColor(ce),Se=N.getClearAlpha(),Se<1&&N.setClearColor(16777215,.5),N.clear(),Nt&&We.render(re);const nt=N.toneMapping;N.toneMapping=Ia;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),J===!0&&we.setGlobalState(N.clippingPlanes,se),ka(R,re,se),rt.updateMultisampleRenderTarget(ye),rt.updateRenderTargetMipmap(ye),qe.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Ut=0,kt=W.length;Ut<kt;Ut++){const Lt=W[Ut],mt=Lt.object,ke=Lt.geometry,jt=Lt.material,bt=Lt.group;if(jt.side===ta&&mt.layers.test(se.layers)){const Sn=jt.side;jt.side=Hn,jt.needsUpdate=!0,Ls(mt,re,se,ke,jt,bt),jt.side=Sn,jt.needsUpdate=!0,dt=!0}}dt===!0&&(rt.updateMultisampleRenderTarget(ye),rt.updateRenderTargetMipmap(ye))}N.setRenderTarget(Ve,Pe,Qe),N.setClearColor(ce,Se),Je!==void 0&&(se.viewport=Je),N.toneMapping=nt}function ka(R,W,re){const se=W.isScene===!0?W.overrideMaterial:null;for(let q=0,ye=R.length;q<ye;q++){const Le=R[q],Ve=Le.object,Pe=Le.geometry,Qe=Le.group;let nt=Le.material;nt.allowOverride===!0&&se!==null&&(nt=se),Ve.layers.test(re.layers)&&Ls(Ve,W,re,Pe,nt,Qe)}}function Ls(R,W,re,se,q,ye){R.onBeforeRender(N,W,re,se,q,ye),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(N,W,re,se,R,ye),q.transparent===!0&&q.side===ta&&q.forceSinglePass===!1?(q.side=Hn,q.needsUpdate=!0,N.renderBufferDirect(re,W,se,q,R,ye),q.side=Ga,q.needsUpdate=!0,N.renderBufferDirect(re,W,se,q,R,ye),q.side=ta):N.renderBufferDirect(re,W,se,q,R,ye),R.onAfterRender(N,W,re,se,q,ye)}function Vn(R,W,re){W.isScene!==!0&&(W=et);const se=Ie.get(R),q=_.state.lights,ye=_.state.shadowsArray,Le=q.state.version,Ve=pe.getParameters(R,q.state,ye,W,re),Pe=pe.getProgramCacheKey(Ve);let Qe=se.programs;se.environment=R.isMeshStandardMaterial?W.environment:null,se.fog=W.fog,se.envMap=(R.isMeshStandardMaterial?Zt:Qt).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Qe===void 0&&(R.addEventListener("dispose",xe),Qe=new Map,se.programs=Qe);let nt=Qe.get(Pe);if(nt!==void 0){if(se.currentProgram===nt&&se.lightsStateVersion===Le)return xn(R,Ve),nt}else Ve.uniforms=pe.getUniforms(R),R.onBeforeCompile(Ve,N),nt=pe.acquireProgram(Ve,Pe),Qe.set(Pe,nt),se.uniforms=Ve.uniforms;const Je=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=we.uniform),xn(R,Ve),se.needsLights=Hc(R),se.lightsStateVersion=Le,se.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),se.currentProgram=nt,se.uniformsList=null,nt}function an(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Dc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function xn(R,W){const re=Ie.get(R);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function oa(R,W,re,se,q){W.isScene!==!0&&(W=et),rt.resetTextureUnits();const ye=W.fog,Le=se.isMeshStandardMaterial?W.environment:null,Ve=K===null?N.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:As,Pe=(se.isMeshStandardMaterial?Zt:Qt).get(se.envMap||Le),Qe=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Je=!!re.morphAttributes.position,dt=!!re.morphAttributes.normal,Ut=!!re.morphAttributes.color;let kt=Ia;se.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(kt=N.toneMapping);const Lt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,mt=Lt!==void 0?Lt.length:0,ke=Ie.get(se),jt=_.state.lights;if(J===!0&&(_e===!0||R!==C)){const un=R===C&&se.id===D;we.setState(se,R,un)}let bt=!1;se.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==jt.state.version||ke.outputColorSpace!==Ve||q.isBatchedMesh&&ke.batching===!1||!q.isBatchedMesh&&ke.batching===!0||q.isBatchedMesh&&ke.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ke.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||q.isInstancedMesh&&ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ke.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ke.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ke.instancingMorph===!1&&q.morphTexture!==null||ke.envMap!==Pe||se.fog===!0&&ke.fog!==ye||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==we.numPlanes||ke.numIntersection!==we.numIntersection)||ke.vertexAlphas!==Qe||ke.vertexTangents!==nt||ke.morphTargets!==Je||ke.morphNormals!==dt||ke.morphColors!==Ut||ke.toneMapping!==kt||ke.morphTargetsCount!==mt)&&(bt=!0):(bt=!0,ke.__version=se.version);let Sn=ke.currentProgram;bt===!0&&(Sn=Vn(se,W,q));let Di=!1,mn=!1,ja=!1;const vt=Sn.getUniforms(),Tn=ke.uniforms;if(Ke.useProgram(Sn.program)&&(Di=!0,mn=!0,ja=!0),se.id!==D&&(D=se.id,mn=!0),Di||C!==R){Ke.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),vt.setValue(H,"projectionMatrix",R.projectionMatrix),vt.setValue(H,"viewMatrix",R.matrixWorldInverse);const en=vt.map.cameraPosition;en!==void 0&&en.setValue(H,Fe.setFromMatrixPosition(R.matrixWorld)),ht.logarithmicDepthBuffer&&vt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&vt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,mn=!0,ja=!0)}if(q.isSkinnedMesh){vt.setOptional(H,q,"bindMatrix"),vt.setOptional(H,q,"bindMatrixInverse");const un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),vt.setValue(H,"boneTexture",un.boneTexture,rt))}q.isBatchedMesh&&(vt.setOptional(H,q,"batchingTexture"),vt.setValue(H,"batchingTexture",q._matricesTexture,rt),vt.setOptional(H,q,"batchingIdTexture"),vt.setValue(H,"batchingIdTexture",q._indirectTexture,rt),vt.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&vt.setValue(H,"batchingColorTexture",q._colorsTexture,rt));const Dn=re.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Ae.update(q,re,Sn),(mn||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,vt.setValue(H,"receiveShadow",q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Tn.envMap.value=Pe,Tn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&W.environment!==null&&(Tn.envMapIntensity.value=W.environmentIntensity),mn&&(vt.setValue(H,"toneMappingExposure",N.toneMappingExposure),ke.needsLights&&Ns(Tn,ja),ye&&se.fog===!0&&Ee.refreshFogUniforms(Tn,ye),Ee.refreshMaterialUniforms(Tn,se,U,Q,_.state.transmissionRenderTarget[R.id]),Dc.upload(H,an(ke),Tn,rt)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Dc.upload(H,an(ke),Tn,rt),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&vt.setValue(H,"center",q.center),vt.setValue(H,"modelViewMatrix",q.modelViewMatrix),vt.setValue(H,"normalMatrix",q.normalMatrix),vt.setValue(H,"modelMatrix",q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const un=se.uniformsGroups;for(let en=0,Tr=un.length;en<Tr;en++){const Si=un[en];st.update(Si,Sn),st.bind(Si,Sn)}}return Sn}function Ns(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Hc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(R,W,re){const se=Ie.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ie.get(R.texture).__webglTexture=W,Ie.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const re=Ie.get(R);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0};const Gc=H.createFramebuffer();this.setRenderTarget=function(R,W=0,re=0){K=R,G=W,I=re;let se=!0,q=null,ye=!1,Le=!1;if(R){const Pe=Ie.get(R);if(Pe.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(Pe.__webglFramebuffer===void 0)rt.setupRenderTarget(R);else if(Pe.__hasExternalTextures)rt.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Pe.__boundDepthTexture!==Je){if(Je!==null&&Ie.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(R)}}const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Le=!0);const nt=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[W])?q=nt[W][re]:q=nt[W],ye=!0):R.samples>0&&rt.useMultisampledRTT(R)===!1?q=Ie.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?q=nt[re]:q=nt,B.copy(R.viewport),fe.copy(R.scissor),le=R.scissorTest}else B.copy(O).multiplyScalar(U).floor(),fe.copy($).multiplyScalar(U).floor(),le=Me;if(re!==0&&(q=Gc),Ke.bindFramebuffer(H.FRAMEBUFFER,q)&&se&&Ke.drawBuffers(R,q),Ke.viewport(B),Ke.scissor(fe),Ke.setScissorTest(le),ye){const Pe=Ie.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,re)}else if(Le){const Pe=W;for(let Qe=0;Qe<R.textures.length;Qe++){const nt=Ie.get(R.textures[Qe]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Qe,nt.__webglTexture,re,Pe)}}else if(R!==null&&re!==0){const Pe=Ie.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pe.__webglTexture,re)}D=-1},this.readRenderTargetPixels=function(R,W,re,se,q,ye,Le,Ve=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Pe=Pe[Le]),Pe){Ke.bindFramebuffer(H.FRAMEBUFFER,Pe);try{const Qe=R.textures[Ve],nt=Qe.format,Je=Qe.type;if(!ht.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-se&&re>=0&&re<=R.height-q&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ve),H.readPixels(W,re,se,q,ze.convert(nt),ze.convert(Je),ye))}finally{const Qe=K!==null?Ie.get(K).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(R,W,re,se,q,ye,Le,Ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Pe=Pe[Le]),Pe)if(W>=0&&W<=R.width-se&&re>=0&&re<=R.height-q){Ke.bindFramebuffer(H.FRAMEBUFFER,Pe);const Qe=R.textures[Ve],nt=Qe.format,Je=Qe.type;if(!ht.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.bufferData(H.PIXEL_PACK_BUFFER,ye.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ve),H.readPixels(W,re,se,q,ze.convert(nt),ze.convert(Je),0);const Ut=K!==null?Ie.get(K).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,Ut);const kt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Uy(H,kt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ye),H.deleteBuffer(dt),H.deleteSync(kt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,re=0){const se=Math.pow(2,-re),q=Math.floor(R.image.width*se),ye=Math.floor(R.image.height*se),Le=W!==null?W.x:0,Ve=W!==null?W.y:0;rt.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,Le,Ve,q,ye),Ke.unbindTexture()};const Xo=H.createFramebuffer(),Xa=H.createFramebuffer();this.copyTextureToTexture=function(R,W,re=null,se=null,q=0,ye=null){ye===null&&(q!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=q,q=0):ye=0);let Le,Ve,Pe,Qe,nt,Je,dt,Ut,kt;const Lt=R.isCompressedTexture?R.mipmaps[ye]:R.image;if(re!==null)Le=re.max.x-re.min.x,Ve=re.max.y-re.min.y,Pe=re.isBox3?re.max.z-re.min.z:1,Qe=re.min.x,nt=re.min.y,Je=re.isBox3?re.min.z:0;else{const Dn=Math.pow(2,-q);Le=Math.floor(Lt.width*Dn),Ve=Math.floor(Lt.height*Dn),R.isDataArrayTexture?Pe=Lt.depth:R.isData3DTexture?Pe=Math.floor(Lt.depth*Dn):Pe=1,Qe=0,nt=0,Je=0}se!==null?(dt=se.x,Ut=se.y,kt=se.z):(dt=0,Ut=0,kt=0);const mt=ze.convert(W.format),ke=ze.convert(W.type);let jt;W.isData3DTexture?(rt.setTexture3D(W,0),jt=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(rt.setTexture2DArray(W,0),jt=H.TEXTURE_2D_ARRAY):(rt.setTexture2D(W,0),jt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const bt=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Di=H.getParameter(H.UNPACK_SKIP_PIXELS),mn=H.getParameter(H.UNPACK_SKIP_ROWS),ja=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Lt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Lt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qe),H.pixelStorei(H.UNPACK_SKIP_ROWS,nt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Je);const vt=R.isDataArrayTexture||R.isData3DTexture,Tn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Dn=Ie.get(R),un=Ie.get(W),en=Ie.get(Dn.__renderTarget),Tr=Ie.get(un.__renderTarget);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,en.__webglFramebuffer),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let Si=0;Si<Pe;Si++)vt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ie.get(R).__webglTexture,q,Je+Si),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ie.get(W).__webglTexture,ye,kt+Si)),H.blitFramebuffer(Qe,nt,Le,Ve,dt,Ut,Le,Ve,H.DEPTH_BUFFER_BIT,H.NEAREST);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||Ie.has(R)){const Dn=Ie.get(R),un=Ie.get(W);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,Xo),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xa);for(let en=0;en<Pe;en++)vt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dn.__webglTexture,q,Je+en):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dn.__webglTexture,q),Tn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,un.__webglTexture,ye,kt+en):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,un.__webglTexture,ye),q!==0?H.blitFramebuffer(Qe,nt,Le,Ve,dt,Ut,Le,Ve,H.COLOR_BUFFER_BIT,H.NEAREST):Tn?H.copyTexSubImage3D(jt,ye,dt,Ut,kt+en,Qe,nt,Le,Ve):H.copyTexSubImage2D(jt,ye,dt,Ut,Qe,nt,Le,Ve);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(jt,ye,dt,Ut,kt,Le,Ve,Pe,mt,ke,Lt.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(jt,ye,dt,Ut,kt,Le,Ve,Pe,mt,Lt.data):H.texSubImage3D(jt,ye,dt,Ut,kt,Le,Ve,Pe,mt,ke,Lt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ye,dt,Ut,Le,Ve,mt,ke,Lt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ye,dt,Ut,Lt.width,Lt.height,mt,Lt.data):H.texSubImage2D(H.TEXTURE_2D,ye,dt,Ut,Le,Ve,mt,ke,Lt);H.pixelStorei(H.UNPACK_ROW_LENGTH,bt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Di),H.pixelStorei(H.UNPACK_SKIP_ROWS,mn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ja),ye===0&&W.generateMipmaps&&H.generateMipmap(jt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(R,W,re=null,se=null,q=0){return ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,re,se,q)},this.initRenderTarget=function(R){Ie.get(R).__webglFramebuffer===void 0&&rt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?rt.setTextureCube(R,0):R.isData3DTexture?rt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?rt.setTexture2DArray(R,0):rt.setTexture2D(R,0),Ke.unbindTexture()},this.resetState=function(){G=0,I=0,K=null,Ke.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const c0=""+new URL("combat-vehicle-hangar-B8cOoZvu.png",import.meta.url).href,JA=["WASD move","Mouse drag look","Shift sprint","Space jump","Ctrl crouch","F fire"],Mv=[{x:43,y:-1,z:45},{x:57,y:-1,z:44},{x:31,y:2,z:42},{x:69,y:2,z:41}];function $A({codename:o,operatorName:t,role:i,weapons:r,characterArt:l,squad:u}){var S;const d=dn.useRef(null),h=dn.useRef({x:-2.75,z:-2.72,y:0,velocityY:0,yaw:Math.PI,crouched:!1,grounded:!0}),m=dn.useRef({}),p=dn.useRef({dragging:!1,lastX:0}),[x,v]=dn.useState({speed:"0.0",stance:"Standing",weapon:((S=r[0])==null?void 0:S[0])??"Primary",event:"Simulation ready"});return dn.useEffect(()=>{if(!d.current)return;const y=d.current,A=new nM;A.background=null,A.fog=new Rh(725265,12,32);const E=new Jn(58,1,.1,80),M=new QA({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});M.setClearColor(0,0),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.shadowMap.enabled=!0,M.shadowMap.type=Dv,y.appendChild(M.domElement);const _=new cM(10479836,1511954,1.8);A.add(_);const V=new hM(16777215,2.5);V.position.set(5,10,3),V.castShadow=!0,V.shadow.mapSize.set(2048,2048),A.add(V);const z=new fM(8315084,55,10);z.position.set(-4,3.5,2),A.add(z);let N=0,X=performance.now(),G=0;function I(){const L=y.getBoundingClientRect();M.setSize(L.width,L.height,!1),E.aspect=L.width/Math.max(L.height,1),E.updateProjectionMatrix()}function K(){const L=h.current,Q=new ee(L.x,L.y+1.45,L.z),U=new ee(Math.sin(L.yaw),-.04,Math.cos(L.yaw)).normalize(),Z=Q.clone().add(U.multiplyScalar(12)),ue=new sM(new sa().setFromPoints([Q,Z]),new $v({color:8315084}));A.add(ue),window.setTimeout(()=>A.remove(ue),95),v(O=>{var $;return{...O,weapon:(($=r[0])==null?void 0:$[0])??O.weapon,event:"Rounds downrange"}})}function D(L){m.current[L.key.toLowerCase()]=!0,L.code==="Space"&&h.current.grounded&&(h.current.velocityY=5.2,h.current.grounded=!1),L.key.toLowerCase()==="f"&&K(),[" ","w","a","s","d"].includes(L.key.toLowerCase())&&L.preventDefault()}function C(L){m.current[L.key.toLowerCase()]=!1}function B(L){p.current={dragging:!0,lastX:L.clientX},y.setPointerCapture(L.pointerId)}function fe(L){if(!p.current.dragging)return;const Q=L.clientX-p.current.lastX;p.current.lastX=L.clientX,h.current.yaw-=Q*.008}function le(L){p.current.dragging=!1,y.releasePointerCapture(L.pointerId)}function ce(L,Q){var Nt,ut,H,pt;const U=m.current,Z=h.current,ue=navigator.getGamepads?navigator.getGamepads()[0]:null,O=(U.w?1:0)-(U.s?1:0)-((ue==null?void 0:ue.axes[1])??0),$=(U.d?1:0)-(U.a?1:0)+((ue==null?void 0:ue.axes[0])??0),Me=U.shift||((Nt=ue==null?void 0:ue.buttons[10])==null?void 0:Nt.pressed);Z.crouched=U.control||U.c||!!((ut=ue==null?void 0:ue.buttons[1])!=null&&ut.pressed),ue&&Math.abs(ue.axes[2]??0)>.08&&(Z.yaw-=(ue.axes[2]??0)*L*2.6),(H=ue==null?void 0:ue.buttons[7])!=null&&H.pressed&&K();const Te=Math.min(Math.hypot(O,$),1),J=Z.crouched?2.2:Me?6.2:3.7;if(Te>.02){const qe=Math.sin(Z.yaw),ht=Math.cos(Z.yaw);Z.x+=(qe*O+ht*$)*J*L,Z.z+=(ht*O-qe*$)*J*L}Z.x=tc.clamp(Z.x,-8.8,8.8),Z.z=tc.clamp(Z.z,-8.2,7.2);const _e=Math.sin(Z.yaw)*34,ve=tc.clamp(-Z.x*18+_e,-150,150),Fe=tc.clamp(Z.z*7-Z.y*16,-72,72),Oe=1.12+Math.min(Math.abs(Z.z+2.72)*.012,.06);y.style.setProperty("--scene-pan-x",`${ve.toFixed(1)}px`),y.style.setProperty("--scene-pan-y",`${Fe.toFixed(1)}px`),y.style.setProperty("--scene-scale",Oe.toFixed(3)),Z.velocityY-=13.5*L,Z.y=Math.max(0,Z.y+Z.velocityY*L),Z.y===0&&(Z.velocityY=0,Z.grounded=!0);const et=new ee(-Math.sin(Z.yaw)*5.2,3.1,-Math.cos(Z.yaw)*5.2);E.position.lerp(new ee(Z.x,Z.y+1.2,Z.z).add(et),.12),E.lookAt(Z.x,Z.y+1.25,Z.z),Q-G>180&&(G=Q,v({speed:(Te*J).toFixed(1),stance:Z.crouched?"Crouched":Me&&Te>.1?"Sprinting":"Standing",weapon:((pt=r[0])==null?void 0:pt[0])??"Primary",event:Te>.1?"Movement input active":"Holding position"}))}function Se(L){const Q=Math.min((L-X)/1e3,.033);X=L,ce(Q,L),M.render(A,E),N=requestAnimationFrame(Se)}return I(),N=requestAnimationFrame(Se),window.addEventListener("resize",I),window.addEventListener("keydown",D),window.addEventListener("keyup",C),y.addEventListener("pointerdown",B),y.addEventListener("pointermove",fe),y.addEventListener("pointerup",le),()=>{cancelAnimationFrame(N),window.removeEventListener("resize",I),window.removeEventListener("keydown",D),window.removeEventListener("keyup",C),y.removeEventListener("pointerdown",B),y.removeEventListener("pointermove",fe),y.removeEventListener("pointerup",le),M.dispose(),y.removeChild(M.domElement)}},[o,l.front,r]),w.jsxs("section",{className:"section-block simulation-section",id:"simulation",children:[w.jsxs("div",{className:"section-heading",children:[w.jsxs("div",{children:[w.jsx("p",{className:"eyebrow",children:"Playable combat simulation"}),w.jsxs("h2",{children:[o," live movement arena"]})]}),w.jsx("p",{className:"section-note",children:"Move the selected operator beside the mounted-gun combat vehicle inside the realistic hangar scene."})]}),w.jsxs("div",{className:"simulation-shell",children:[w.jsx("div",{className:"simulation-canvas",ref:d,"aria-label":`${t} combat environment`,style:{"--sim-character-art":`url(${l.front})`,"--sim-bg-art":`url(${c0})`,"--scene-pan-x":"0px","--scene-pan-y":"-19px","--scene-scale":"1.12"},children:w.jsx("div",{className:"simulation-squad-layer","aria-label":"Full roster staged in the hangar",children:u.map((y,A)=>{const E=Mv[A%Mv.length],M=y.codename===o;return w.jsxs("figure",{className:M?"simulation-squad-member selected":"simulation-squad-member",style:{"--squad-x":`${E.x}%`,"--squad-bottom":`${E.y}%`,"--squad-z":E.z},children:[w.jsx("span",{className:"simulation-character-shadow","aria-hidden":"true"}),w.jsx("img",{src:y.art.front,alt:`${y.name} positioned in the hangar scenery`})]},`sim-squad-${y.codename}`)})})}),w.jsxs("aside",{className:"simulation-hud",children:[w.jsxs("div",{children:[w.jsx("p",{className:"eyebrow",children:"Operator"}),w.jsx("h3",{children:t}),w.jsx("span",{children:i})]}),w.jsxs("div",{className:"sim-stat-grid",children:[w.jsxs("span",{children:[w.jsx("small",{children:"Speed"}),w.jsx("strong",{children:x.speed})]}),w.jsxs("span",{children:[w.jsx("small",{children:"Stance"}),w.jsx("strong",{children:x.stance})]}),w.jsxs("span",{children:[w.jsx("small",{children:"Weapon"}),w.jsx("strong",{children:x.weapon})]}),w.jsxs("span",{children:[w.jsx("small",{children:"Event"}),w.jsx("strong",{children:x.event})]})]}),w.jsx("div",{className:"sim-control-list",children:JA.map(y=>w.jsx("span",{children:y},y))})]})]})]})}const e1=""+new URL("aion-prime-home-C4HNHDJK.png",import.meta.url).href,t1=""+new URL("mara-voss-back-cutout-B60mCn99.png",import.meta.url).href,n1=""+new URL("mara-voss-front-cutout-_HJJOHln.png",import.meta.url).href,i1=""+new URL("mara-voss-side-cutout-Bvswx1rg.png",import.meta.url).href,a1=""+new URL("amani-mwangi-back-Dzy---MM.png",import.meta.url).href,r1=""+new URL("amani-mwangi-side-DPt4hc26.png",import.meta.url).href,s1=""+new URL("amani-mwangi-BJtJhSwL.png",import.meta.url).href,o1=""+new URL("amara-okonkwo-back-yf8yjfo5.png",import.meta.url).href,l1=""+new URL("amara-okonkwo-side-nnKOteR9.png",import.meta.url).href,c1=""+new URL("amara-okonkwo-FY_bPxDg.png",import.meta.url).href,u1=""+new URL("diego-rojas-back-B8mK-HUU.png",import.meta.url).href,f1=""+new URL("diego-rojas-side-Bd2jQ2WC.png",import.meta.url).href,d1=""+new URL("diego-rojas-DzEK7ZPh.png",import.meta.url).href,h1=""+new URL("ingrid-solberg-back-D0_9GQrv.png",import.meta.url).href,p1=""+new URL("ingrid-solberg-side-Cc5SK0Uo.png",import.meta.url).href,m1=""+new URL("ingrid-solberg-BRLrXACg.png",import.meta.url).href,g1=""+new URL("jean-paul-desrosiers-back-DJJNf4Z1.png",import.meta.url).href,_1=""+new URL("jean-paul-desrosiers-side-DKEEiZRE.png",import.meta.url).href,v1=""+new URL("jean-paul-desrosiers-x4hMl4pb.png",import.meta.url).href,x1=""+new URL("leila-haddad-back-D5_7-NXM.png",import.meta.url).href,S1=""+new URL("leila-haddad-side-8MRI1PHH.png",import.meta.url).href,y1=""+new URL("leila-haddad-Dxh5h0Ph.png",import.meta.url).href,M1=""+new URL("luca-romano-back-BNFsE0Sx.png",import.meta.url).href,E1=""+new URL("luca-romano-side-Bv7KWuGU.png",import.meta.url).href,b1=""+new URL("luca-romano-BLde7TVd.png",import.meta.url).href,T1=""+new URL("marcus-reed-back-DgwYj6Jw.png",import.meta.url).href,A1=""+new URL("marcus-reed-side-cla8xhVV.png",import.meta.url).href,R1=""+new URL("marcus-reed-r3xB289m.png",import.meta.url).href,w1=""+new URL("mateo-silva-back-DxTsLMOq.png",import.meta.url).href,C1=""+new URL("mateo-silva-side-DJc6NE5x.png",import.meta.url).href,D1=""+new URL("mateo-silva-5HZKvz0P.png",import.meta.url).href,U1=""+new URL("mathieu-toussaint-back-qyV5eh2-.png",import.meta.url).href,L1=""+new URL("mathieu-toussaint-side-CH6g55hc.png",import.meta.url).href,N1=""+new URL("mathieu-toussaint-DDmKt_8S.png",import.meta.url).href,O1=""+new URL("mireya-baptiste-back-B2zAE_tM.png",import.meta.url).href,P1=""+new URL("mireya-baptiste-side-_hx8wxE3.png",import.meta.url).href,z1=""+new URL("mireya-baptiste-UtQZLkcJ.png",import.meta.url).href,B1=""+new URL("nadine-jean-baptiste-back-DjCdWuTk.png",import.meta.url).href,F1=""+new URL("nadine-jean-baptiste-side-DRE5o003.png",import.meta.url).href,I1=""+new URL("nadine-jean-baptiste-U6aEeAW3.png",import.meta.url).href,H1=""+new URL("omar-el-sayed-back-DvZ0YzV3.png",import.meta.url).href,G1=""+new URL("omar-el-sayed-side-GbsxNpnm.png",import.meta.url).href,V1=""+new URL("omar-el-sayed-BMPnC4NG.png",import.meta.url).href,k1=""+new URL("park-tae-min-back-D1wDi4ib.png",import.meta.url).href,X1=""+new URL("park-tae-min-side-BZejPE1D.png",import.meta.url).href,j1=""+new URL("park-tae-min-BTjYZmcm.png",import.meta.url).href,W1=""+new URL("priya-nair-back-Dx5txwin.png",import.meta.url).href,q1=""+new URL("priya-nair-side-CRHTHMmA.png",import.meta.url).href,Y1=""+new URL("priya-nair-DFXsfudy.png",import.meta.url).href,Z1=""+new URL("samir-khan-back-D1HMM4ex.png",import.meta.url).href,K1=""+new URL("samir-khan-side-lnwg1j9U.png",import.meta.url).href,Q1=""+new URL("samir-khan-afwMkOKc.png",import.meta.url).href,J1=""+new URL("sofia-alvarez-back-BmPLZWff.png",import.meta.url).href,$1=""+new URL("sofia-alvarez-side-Dz9NXRSQ.png",import.meta.url).href,eR=""+new URL("sofia-alvarez-Cjr7OGqX.png",import.meta.url).href,tR=""+new URL("tomas-novak-back-LWo0EKI-.png",import.meta.url).href,nR=""+new URL("tomas-novak-side-y2dMENIS.png",import.meta.url).href,iR=""+new URL("tomas-novak-ao_fJqd-.png",import.meta.url).href,aR=""+new URL("yuki-tanaka-back-KAS85P0S.png",import.meta.url).href,rR=""+new URL("yuki-tanaka-side-BApmwsfq.png",import.meta.url).href,sR=""+new URL("yuki-tanaka-Njn3uOWV.png",import.meta.url).href,oR=""+new URL("zoe-mensah-back-D4NVfIWL.png",import.meta.url).href,lR=""+new URL("zoe-mensah-side-C2ywuUPz.png",import.meta.url).href,cR=""+new URL("zoe-mensah-lg5b-19l.png",import.meta.url).href,Ev=[{name:"Kinetic Breach",type:"Active",cooldown:"18s",keyboard:"Z",controller:"LB",purpose:"Client-predicted directional burst for entry, chase, and escape chains.",counterplay:"Linear path, brief recovery on miss, blocked by heavy shields and stasis traps.",vfx:"Compressed air ribbon, suit sparks, and a hard-edged impact flash.",audio:"Pressure crack, servo snap, and close-range concussion tail.",network:"Predicted movement on owner, server-authoritative hit cone and final capsule location."},{name:"Echo Spike",type:"Active",cooldown:"24s",keyboard:"X",controller:"RB",purpose:"Throwable movement sensor that rewards timing before a coordinated push.",counterplay:"Device is visible, destructible, and only pings moving targets inside radius.",vfx:"Low-profile floor spike with pulsing scan rings and clean team-only silhouettes.",audio:"Soft sonar ticks that accelerate when recent motion is detected.",network:"Server-owned detection volume replicates compressed ping events to allied clients."},{name:"Snap Guard",type:"Active",cooldown:"28s",keyboard:"G",controller:"D-Pad Up",purpose:"1.25s frontal damage reduction for surviving a committed breach without tanking.",counterplay:"Flanks, explosives, melee, and delayed fire bypass the short protection window.",vfx:"Angular translucent forearm shield with directional impact ripples.",audio:"Rising charge tone, glassy block clicks, and a clean shutdown snap.",network:"Server validates guard angle, active tag, and damage modifier against attacker vector."},{name:"Overclock Vector",type:"Ultimate",cooldown:"Charge",keyboard:"T",controller:"LB + RB",purpose:"10s tempo spike: faster reloads, extended slides, and reduced movement cooldown recovery.",counterplay:"Range denial, suppression zones, burst focus, and trap layering.",vfx:"Subtle suit line glow, footstep light trails, and intensified breach distortion.",audio:"Heartbeat layer, exposed servo whine, and sharper movement transients.",network:"Replicated gameplay effect with scoped stat modifiers and montage-safe cancellation tags."}],uR=[["Move","W A S D","Left Stick","Analog movement with acceleration, strafing, and server-authoritative velocity caps."],["Look / Aim","Mouse","Right Stick","Raw mouse input, tuned stick response curve, ADS sensitivity scalar."],["Fire","Left Mouse","Right Trigger","Client-side muzzle feedback, server-authoritative trace and damage."],["Aim Down Sights","Right Mouse","Left Trigger","Hold-to-ADS with camera FOV blend and weapon sway reduction."],["Jump / Mantle","Space","A / Cross","Jump instantly; mantle triggers when ledge traces validate in front arc."],["Sprint","Left Shift","Left Stick Click","Hold sprint, cancellable into slide, jump, mantle, reload, or ability windup."],["Tactical Sprint","Double-tap Shift","Double-click Left Stick","Short burst with weapon lowered and stronger audio signature."],["Crouch / Slide","Left Ctrl","B / Circle","Tap crouch; hold or press while sprinting to enter slide."],["Lean Left","Q","D-Pad Left while ADS","ADS-only shoulder lean with exposed capsule and weapon obstruction checks."],["Lean Right","E","D-Pad Right while ADS","Mirrors left lean for corner play without changing ability bindings."],["Reload / Interact","R / F","X / Square","Context priority favors reload unless interact target is centered and valid."],["Swap Weapon","1 / 2 / Wheel","Y / Triangle","Fast swap queue respects reload cancel and equip animation windows."],["Melee","V / Mouse 4","Right Stick Click","Short lunge, server-confirmed hit frame, combo-safe recovery."],["Ping","Middle Mouse","D-Pad Down","Team ping raycast with cooldown throttling and replicated marker events."]],fR=[["Walk","420 uu/s","High-fidelity strafe control for ADS peeking and micro-correction."],["Sprint","650 uu/s","Fast baseline traversal with cancellable jump, crouch, and slide entry."],["Tac Sprint","780 uu/s","Short stamina burst that cannot fire but can cancel into mantle or breach."],["Slide","850 -> 420 uu/s","0.75s decay curve, hip-fire penalty, and melee-lunge combo window."],["Air Control","0.42 scalar","Midair correction supports skill expression without arena-shooter drift."],["Mantle","0.38-0.72s","Predictive traces, motion warping, and camera-stable climb starts."]],bv={Vector:[["Slide chain","+18% exit speed","Keeps momentum after a clean slide kill or breach dash, rewarding aggressive entries."],["Mantle recovery","-90ms weapon raise","Returns to fire-ready faster after vaults so vertical flanks feel sharp."],["Risk hook","Louder sprint tail","High speed creates readable audio pressure for defenders."]],Bulwark:[["Braced advance","-12% sprint speed","Moves slower but keeps weapon stability while crossing open lanes."],["Knockback resist","45% reduction","Heavy stance resists explosions, melee bumps, and shield impacts."],["Risk hook","Slow turn while braced","Commitment is punishable by flanks and quick angle swaps."]],Kitsune:[["Quiet route","-35% footstep radius","Crouch-walk and short sprint bursts produce softer positional reads."],["Mantle decoy","1 false step ping","A brief decoy footstep plays after ledge traversal to sell misdirection."],["Risk hook","Lower stumble resist","Taking damage during stealth routes slows recovery more than average."]],Mirage:[["Signal drift","+12% strafe blend","Strafes feel slippery during ability windows to support doorway misdirection."],["Ghost vault","0.18s shimmer","Vaulting through masked zones leaves a readable afterimage trail."],["Risk hook","No sprint bonus","Relies on deception rather than raw speed."]],Cinder:[["Heat stride","+10% through burn lanes","Moves faster across owned thermite lanes to reposition around denial zones."],["Ash slide","+0.2s slide sustain","Slides carry slightly longer when entering from sprint near active area denial."],["Risk hook","Bright movement VFX","Enhanced lane movement is easy to visually track."]],Lumine:[["Triage sprint","+14% toward allies","Gains speed when sprinting toward downed or low-health teammates."],["Revive crouch","+20% crouch speed","Can reposition while staying low during revive setup."],["Risk hook","Combat speed neutral","No duel mobility bonus when away from team play."]],Siren:[["Masked steps","2.5s audio dampen","Can briefly suppress team footstep spikes before a coordinated push."],["Pulse brake","Fast stop control","Decelerates quickly after sprint to bait audio reads and corner swings."],["Risk hook","Visible waveform","Audio masking creates subtle readable suit pulses."]],Monsoon:[["Smoke slip","+16% inside cover","Accelerates slightly while moving through owned smoke or dampening fields."],["Flow strafe","+10% direction swap","Changes lateral direction faster for controller-style lane shaping."],["Risk hook","Field dependent","Mobility identity weakens when abilities are on cooldown."]],Frostline:[["Anchor step","+18% ADS walk","Keeps tighter marksman movement while holding long angles."],["Cold retreat","+12% backpedal after hit","Can disengage from punished peeks without becoming a speed duelist."],["Risk hook","Slow mantle","+110ms ledge recovery keeps high-ground rotations committal."]],Relay:[["Link hop","Short ally tether","Gets a short reposition burst after linking with a nearby teammate."],["Squad tempo","+8% team sprint aura","Small movement benefit for allies rotating through her link radius."],["Risk hook","Requires proximity","Solo routes lose most mobility value."]],Citadel:[["Shoulder breach","Door shove impulse","Can push through light barricade contact without full stop."],["Armor gait","-8% sprint accel","Heavy gear starts slower but maintains steady push speed under fire."],["Risk hook","Large audio profile","Movement is intentionally easy to identify."]],Vanguard:[["Hard push","+18% tac sprint duration","Longer tactical sprint supports first-contact entries."],["Flash footing","No stumble on blind","Maintains basic movement control during flash resistance windows."],["Risk hook","Wide turn radius","Hard pushes need commitment and path planning."]],Condor:[["Climb burst","+24% climb speed","Fast ledge and rooftop traversal defines the vertical assault role."],["Aerial control","+0.14 air scalar","Better midair correction after grapple or high-ground drops."],["Risk hook","Landing noise spike","Aggressive vertical routes announce arrival."]],Scarab:[["Trap crawl","+18% crouch near devices","Moves faster while maintaining low profile around deployed traps."],["Lockdown pivot","+12% turn accel","Can rotate around objective traps without becoming a runner."],["Risk hook","Low chase speed","Weak at pursuing enemies outside prepared routes."]],Hammer:[["Heavy carry","-10% sprint speed","Big weapon kit moves slower but keeps suppression stable."],["Impact lunge","+18% melee reach","Short, heavy shove gives close-range space without dash mobility."],["Risk hook","Slow recovery","Missed lunges and slides take longer to recover."]],Circuit:[["Overclock step","+12% after hack","Brief speed bump after a successful drone or HUD interference action."],["Signal sidestep","+10% ADS strafe","Keeps small lateral corrections while using tech tools."],["Risk hook","Cooldown tied","Mobility spike depends on successful system interaction."]],Veloce:[["Burst strafe","+22% first step","Explosive first lateral step supports quick peeks and duel resets."],["Reset sprint","0.35s faster re-entry","Returns to sprint faster after weapon swap or slide cancel."],["Risk hook","Low sustain","Short bursts fade quickly in long chases."]],Lockjaw:[["Snare stance","+16% ADS hold speed","Can hold angles around traps while keeping steady micro-movement."],["Chase cut","+10% toward snared targets","Small chase bonus only when anti-mobility tools connect."],["Risk hook","No free escape","Defensive kit lacks raw disengage movement."]],Rift:[["Terrain read","+20% mantle after scan","Route scans unlock faster mantle and climb timing on marked paths."],["Pathfinder vault","Longer vault reach","Can clear slightly wider cover gaps with readable animation."],["Risk hook","Needs route setup","Unscanned terrain uses standard movement only."]],Null:[["Blackout drift","No radar sprint ping","Sprint pings are suppressed during blackout windows."],["Decoy brake","Instant stop fake","Can create a false movement stop to disrupt sensor reads."],["Risk hook","Lower acceleration","Baseline sprint starts slightly slower to offset stealth value."]],Forge:[["Workbench walk","Deploy while moving","Can place light hardpoints while walking instead of fully stopping."],["Repair shuffle","+16% strafe during repair","Keeps small movement while maintaining engineer interactions."],["Risk hook","No chase perk","Mobility supports setup, not pursuit."]]},dR=["Enhanced Input contexts for movement, combat, ability targeting, and controller aim tuning.","Gameplay Ability System tags drive cooldowns, lockouts, ultimate modifiers, and interrupt rules.","Owner-only cosmetic prediction fires instantly, then reconciles against server-confirmed ability state.","Animation layers split lower-body locomotion, upper-body weapon handling, additive recoil, and ability overlays.","Network relevancy, pooled VFX, compact tag replication, and event-based traces keep matches scalable."],hR=["Idle","Walk","Sprint","Tac Sprint","Slide","Mantle","ADS","Fire","Reload","Ability","Hit React","Recovery","Death"],pR={name:"Mara Voss",codename:"Vector",gender:"Female",country:"Germany / Brazil",flag:"🇩🇪 🇧🇷",heritage:"German-Brazilian",role:"Mobile assault",specialization:"Momentum entries, vertical flanks, and pressure conversion."},$i=[pR,{name:"Amara Okonkwo",codename:"Bulwark",gender:"Female",country:"Nigeria",flag:"🇳🇬",heritage:"Igbo Nigerian",role:"Anchor defender",specialization:"Deployable cover, lane control, and anti-breach denial."},{name:"Yuki Tanaka",codename:"Kitsune",gender:"Female",country:"Japan",flag:"🇯🇵",heritage:"Japanese",role:"Recon infiltrator",specialization:"Silent routing, decoy pings, and precision flank timing."},{name:"Leila Haddad",codename:"Mirage",gender:"Female",country:"Lebanon",flag:"🇱🇧",heritage:"Lebanese Arab",role:"Disruption support",specialization:"Visual clutter, signal masking, and doorway misdirection."},{name:"Sofia Alvarez",codename:"Cinder",gender:"Female",country:"Mexico",flag:"🇲🇽",heritage:"Mexican",role:"Area denial",specialization:"Thermite lanes, reload pressure, and objective burn control."},{name:"Nadine Jean-Baptiste",codename:"Lumine",gender:"Female",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Combat medic",specialization:"Fast revives, temporary armor boosts, and triage routing."},{name:"Mireya Baptiste",codename:"Siren",gender:"Female",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Audio warfare",specialization:"Footstep masking, sonic reveals, and anti-rush disruption."},{name:"Priya Nair",codename:"Monsoon",gender:"Female",country:"India",flag:"🇮🇳",heritage:"Malayali Indian",role:"Tactical controller",specialization:"Smoke shaping, sightline breaks, and sensor dampening."},{name:"Ingrid Solberg",codename:"Frostline",gender:"Female",country:"Norway",flag:"🇳🇴",heritage:"Norwegian",role:"Marksman control",specialization:"Long-angle overwatch, slow fields, and retreat punishment."},{name:"Zoe Mensah",codename:"Relay",gender:"Female",country:"Ghana",flag:"🇬🇭",heritage:"Ghanaian",role:"Team mobility",specialization:"Short-range reposition links, squad tempo, and flank rescue."},{name:"Jean-Paul Desrosiers",codename:"Citadel",gender:"Male",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Shield breaker",specialization:"Armor cracking, barricade pressure, and breach follow-through."},{name:"Mathieu Toussaint",codename:"Vanguard",gender:"Male",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Point man",specialization:"First-contact survivability, flash resistance, and hard pushes."},{name:"Diego Rojas",codename:"Condor",gender:"Male",country:"Colombia",flag:"🇨🇴",heritage:"Colombian",role:"Vertical assault",specialization:"Grapple entries, rooftop angles, and high-ground duels."},{name:"Omar El-Sayed",codename:"Scarab",gender:"Male",country:"Egypt",flag:"🇪🇬",heritage:"Egyptian Arab",role:"Trap engineer",specialization:"Pressure mines, route prediction, and objective lockdown."},{name:"Marcus Reed",codename:"Hammer",gender:"Male",country:"United States",flag:"🇺🇸",heritage:"African American",role:"Heavy gunner",specialization:"Suppressive fire, cover shredding, and squad advance windows."},{name:"Park Tae-min",codename:"Circuit",gender:"Male",country:"South Korea",flag:"🇰🇷",heritage:"Korean",role:"Systems hacker",specialization:"Drone hijacks, HUD noise, and cooldown interference."},{name:"Luca Romano",codename:"Veloce",gender:"Male",country:"Italy",flag:"🇮🇹",heritage:"Italian",role:"Skirmisher",specialization:"Quick peeks, burst strafes, and duel reset timing."},{name:"Tomas Novak",codename:"Lockjaw",gender:"Male",country:"Czech Republic",flag:"🇨🇿",heritage:"Czech",role:"Anti-mobility",specialization:"Snare traps, dash denial, and chase interruption."},{name:"Amani Mwangi",codename:"Rift",gender:"Male",country:"Kenya",flag:"🇰🇪",heritage:"Kikuyu Kenyan",role:"Pathfinder",specialization:"Route scans, mantle boosts, and terrain-aware rotations."},{name:"Samir Khan",codename:"Null",gender:"Male",country:"Pakistan",flag:"🇵🇰",heritage:"Pakistani",role:"Counter-intel",specialization:"Recon denial, decoy signatures, and sensor blackout."},{name:"Mateo Silva",codename:"Forge",gender:"Male",country:"Brazil",flag:"🇧🇷",heritage:"Afro-Brazilian",role:"Combat engineer",specialization:"Portable hardpoints, ammo stations, and repair denial."}],Tv={Vector:{front:n1,side:i1,back:t1},Bulwark:{front:c1,side:l1,back:o1},Kitsune:{front:sR,side:rR,back:aR},Mirage:{front:y1,side:S1,back:x1},Cinder:{front:eR,side:$1,back:J1},Lumine:{front:I1,side:F1,back:B1},Siren:{front:z1,side:P1,back:O1},Monsoon:{front:Y1,side:q1,back:W1},Frostline:{front:m1,side:p1,back:h1},Relay:{front:cR,side:lR,back:oR},Citadel:{front:v1,side:_1,back:g1},Vanguard:{front:N1,side:L1,back:U1},Condor:{front:d1,side:f1,back:u1},Scarab:{front:V1,side:G1,back:H1},Hammer:{front:R1,side:A1,back:T1},Circuit:{front:j1,side:X1,back:k1},Veloce:{front:b1,side:E1,back:M1},Lockjaw:{front:iR,side:nR,back:tR},Rift:{front:s1,side:r1,back:a1},Null:{front:Q1,side:K1,back:Z1},Forge:{front:D1,side:C1,back:w1}},Av={Vector:[["KX-9 Shardline","Primary carbine","27 body / 40 head","720 RPM","10-38m","30 rounds"],["P-17 Latch","Machine pistol","18 body / 27 head","950 RPM","0-15m","20 rounds"],["Shock Baton","Melee","50 quick / 90 heavy","0.32s hit frame","2.2m lunge","Combo reset"]],Bulwark:[["Aegis-12 Bastion","Primary shotgun","96 body / 124 head","92 RPM","0-12m","8 shells"],["R-40 Anchor","Heavy revolver","48 body / 72 head","180 RPM","0-24m","6 rounds"],["Tower Maul","Melee","65 quick / 115 heavy","0.42s hit frame","2.0m lunge","Armor stagger"]],Kitsune:[["S-19 Whisper","Suppressed SMG","22 body / 33 head","860 RPM","0-26m","34 rounds"],["Tanto-9 Ghost","Suppressed pistol","31 body / 46 head","360 RPM","0-18m","13 rounds"],["Ceramic Tanto","Melee","45 quick / 85 heavy","0.26s hit frame","2.4m lunge","Backstab bonus"]],Mirage:[["M7 Prism","Burst rifle","26 body / 39 head","690 RPM","12-42m","27 rounds"],["Fennec Pulse","Compact sidearm","24 body / 36 head","520 RPM","0-16m","16 rounds"],["Signal Knife","Melee","45 quick / 90 heavy","0.30s hit frame","2.2m lunge","Sensor tag"]],Cinder:[["HX-44 Ember","Thermite LMG","25 body / 36 head","650 RPM","10-34m","55 rounds"],["Flare-6 Compact","Flare pistol","38 body / 55 head","150 RPM","0-20m","1 round"],["Heat Axe","Melee","60 quick / 110 heavy","0.38s hit frame","2.1m lunge","Burn tick"]],Lumine:[["MediCore V9","Support SMG","21 body / 32 head","820 RPM","0-24m","32 rounds"],["Suture-15","Burst pistol","28 body / 42 head","480 RPM","0-18m","15 rounds"],["Rescue Baton","Melee","42 quick / 80 heavy","0.28s hit frame","2.1m lunge","Revive cancel safe"]],Siren:[["Wail-3 Resonator","Sonic rifle","24 body / 35 head","700 RPM","8-32m","30 rounds"],["Mute-11 Sidearm","Damped pistol","30 body / 45 head","390 RPM","0-18m","14 rounds"],["Tuning Blade","Melee","46 quick / 88 heavy","0.31s hit frame","2.2m lunge","Audio reveal"]],Monsoon:[["R-7 Cloudburst","Tactical AR","26 body / 38 head","680 RPM","10-40m","30 rounds"],["Mist-18","Utility pistol","25 body / 38 head","430 RPM","0-17m","18 rounds"],["Katar Relay","Melee","48 quick / 92 heavy","0.29s hit frame","2.2m lunge","Smoke exit"]],Frostline:[["N-88 Glacier","Marksman rifle","62 body / 96 head","170 RPM","24-70m","12 rounds"],["Fjord-9","Precision pistol","34 body / 51 head","330 RPM","0-22m","10 rounds"],["Ice Pick","Melee","52 quick / 96 heavy","0.33s hit frame","2.0m lunge","Slow tag"]],Relay:[["Link-45 Vector","Compact AR","24 body / 36 head","760 RPM","8-32m","30 rounds"],["Hopline PDW","Machine pistol","17 body / 26 head","980 RPM","0-14m","22 rounds"],["Relay Tonfa","Melee","46 quick / 86 heavy","0.28s hit frame","2.3m lunge","Swap cancel"]],Citadel:[["Breach-10 Mason","Slug shotgun","82 body / 120 head","105 RPM","0-20m","7 shells"],["Rampart .50","Hand cannon","55 body / 82 head","155 RPM","0-28m","5 rounds"],["Breaker Hammer","Melee","70 quick / 125 heavy","0.45s hit frame","1.9m lunge","Shield crack"]],Vanguard:[["V-30 Pointman","Assault rifle","28 body / 41 head","640 RPM","10-38m","32 rounds"],["Guard-12","Tactical sidearm","32 body / 48 head","360 RPM","0-20m","12 rounds"],["Combat Kukri","Melee","52 quick / 98 heavy","0.32s hit frame","2.2m lunge","Flash resist"]],Condor:[["Talon-5 Carbine","Light carbine","25 body / 37 head","780 RPM","8-34m","28 rounds"],["Aerie-2","Climb pistol","27 body / 41 head","450 RPM","0-16m","15 rounds"],["Grapple Hook Blade","Melee","48 quick / 90 heavy","0.30s hit frame","2.5m lunge","Air cancel"]],Scarab:[["Khepri-4 AR","Trap rifle","27 body / 40 head","620 RPM","12-44m","30 rounds"],["Scarab Stinger","Dart pistol","22 body / 34 head","500 RPM","0-18m","12 darts"],["Hooked Khopesh","Melee","55 quick / 100 heavy","0.35s hit frame","2.0m lunge","Trap trigger"]],Hammer:[["M60 Atlas","Heavy LMG","31 body / 43 head","560 RPM","14-50m","75 rounds"],["Breaker-8","Sawed sidearm","70 body / 98 head","115 RPM","0-8m","2 shells"],["Breach Sledge","Melee","75 quick / 135 heavy","0.48s hit frame","1.8m lunge","Cover shred"]],Circuit:[["Arc-22 Carbine","Smart carbine","24 body / 36 head","740 RPM","8-36m","30 rounds"],["ShortBus EMP","EMP pistol","18 body / 27 head","600 RPM","0-15m","18 rounds"],["Livewire Baton","Melee","45 quick / 85 heavy","0.30s hit frame","2.1m lunge","Cooldown zap"]],Veloce:[["VX-11 Sprint","Duel SMG","20 body / 30 head","920 RPM","0-24m","36 rounds"],["Stiletto-7","Fast pistol","26 body / 39 head","540 RPM","0-16m","17 rounds"],["Carbon Stiletto","Melee","44 quick / 82 heavy","0.24s hit frame","2.6m lunge","Duel reset"]],Lockjaw:[["Clamp-40 DMR","Anti-mobility DMR","48 body / 72 head","260 RPM","18-56m","16 rounds"],["Snare-9","Tether pistol","24 body / 36 head","460 RPM","0-18m","15 rounds"],["Jaw Trap Blade","Melee","54 quick / 100 heavy","0.34s hit frame","2.0m lunge","Dash snare"]],Rift:[["Trail-6 Scout","Scout rifle","42 body / 63 head","300 RPM","18-58m","18 rounds"],["Path-12 Compact","Trail pistol","29 body / 44 head","410 RPM","0-20m","14 rounds"],["Rift Machete","Melee","55 quick / 102 heavy","0.33s hit frame","2.3m lunge","Mantle boost"]],Null:[["Blackout-13","Suppressed DMR","45 body / 68 head","280 RPM","16-54m","15 rounds"],["Void-5","Jammer pistol","21 body / 32 head","620 RPM","0-14m","20 rounds"],["Null Spike","Melee","47 quick / 90 heavy","0.30s hit frame","2.2m lunge","Sensor blank"]],Forge:[["Anvil-27 AR","Engineer rifle","27 body / 40 head","650 RPM","10-40m","34 rounds"],["Rivet-3","Nail sidearm","35 body / 52 head","300 RPM","0-20m","9 rounds"],["Forge Wrench","Melee","58 quick / 108 heavy","0.36s hit frame","2.0m lunge","Repair denial"]]};function mR(o,t,i,r){const l=o*(1-r)+40*r,d=(Math.ceil(i/l)-1)*60/t;return Math.max(d,.08).toFixed(2)}function Do(o,t,i=88){const r=Math.abs((o-t+540)%360-180);return Math.max(0,1-r/i)}function Rv(o){const t=o.replace("#","");return t==="operators"||t==="simulation"||t==="systems"?t:"home"}function gR(o){const t=o.role.split(" ")[0]??"Adaptive",i=o.heritage.split(/[\s-]/)[0]??"Global",r=o.specialization.split(",")[0].replace(".","");return[t,i,r,o.gender==="Female"?"Precision-led":"Pressure-ready"]}function _R(){const[o,t]=dn.useState(()=>Rv(window.location.hash)),[i,r]=dn.useState(Ev[0]),[l,u]=dn.useState(50),[d,h]=dn.useState(35),[m,p]=dn.useState(0),[x,v]=dn.useState({angle:0,glareX:50,glareY:35,rotateX:0}),S=dn.useRef(0),y=dn.useMemo(()=>mR(27,720,100+l,d/100),[l,d]),A=100+l,E=$i[m],M=Tv[E.codename],_=["Vector","Bulwark","Kitsune","Siren"],V=[E,...$i.filter(U=>U.codename!==E.codename&&_.includes(U.codename))].slice(0,4).map(U=>({art:Tv[U.codename],codename:U.codename,name:U.name})),z=Av[E.codename]??Av.Vector,N=bv[E.codename]??bv.Vector,X=dn.useMemo(()=>Ev.map(U=>({...U,name:U.type==="Ultimate"?`Overclock ${E.codename}`:U.name,purpose:U.type==="Ultimate"?`10s ${E.role.toLowerCase()} tempo spike tuned for ${E.specialization.toLowerCase()}`:U.purpose.replace("entry, chase, and escape chains",`${E.role.toLowerCase()} execution windows`),vfx:U.type==="Ultimate"?`${E.codename} suit lines intensify with role-colored movement trails and a clean activation pulse.`:U.vfx})),[E]),G=X.find(U=>U.keyboard===i.keyboard&&U.controller===i.controller)??X[0],I=(x.angle%360+360)%360,K=Math.max(Do(I,90),Do(I,270)),D=I>180?-1:1,C={"--back-opacity":`${Do(I,180)}`,"--front-opacity":`${Math.max(Do(I,0),Do(I,360))}`,"--glare-x":`${x.glareX}%`,"--glare-y":`${x.glareY}%`,"--side-opacity":`${K}`,"--side-scale":`${D}`,"--turn-angle":`${x.angle}deg`,"--rotate-x":`${x.rotateX}deg`};function B(U){t(U),window.history.replaceState(null,"",`#${U}`),window.scrollTo({top:0,behavior:"smooth"})}function fe(U){const Z=(U+$i.length)%$i.length;p(Z),v({angle:0,glareX:50,glareY:35,rotateX:0})}function le(U){p(Z=>(Z+U+$i.length)%$i.length),v({angle:0,glareX:50,glareY:35,rotateX:0})}dn.useEffect(()=>{function U(Z){(Z.key==="ArrowRight"||Z.key==="ArrowDown")&&(Z.preventDefault(),le(1)),(Z.key==="ArrowLeft"||Z.key==="ArrowUp")&&(Z.preventDefault(),le(-1)),Z.key==="Home"&&(Z.preventDefault(),fe(0))}return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[]),dn.useEffect(()=>{function U(){t(Rv(window.location.hash)),window.scrollTo({top:0,behavior:"smooth"})}return window.addEventListener("hashchange",U),()=>window.removeEventListener("hashchange",U)},[]),dn.useEffect(()=>{let U=0;function Z(){var $,Me;const[ue]=navigator.getGamepads?navigator.getGamepads():[],O=performance.now();if(ue&&O-S.current>260){const Te=ue.axes[0]??0,J=(($=ue.buttons[14])==null?void 0:$.pressed)||Te<-.65;((Me=ue.buttons[15])==null?void 0:Me.pressed)||Te>.65?(le(1),S.current=O):J&&(le(-1),S.current=O)}U=requestAnimationFrame(Z)}return U=requestAnimationFrame(Z),()=>cancelAnimationFrame(U)},[]);function ce(U){const Z=U.currentTarget.getBoundingClientRect(),ue=(U.clientX-Z.left)/Z.width,O=(U.clientY-Z.top)/Z.height,$=O-.5;v({angle:Math.round(ue*360),glareX:Math.round(ue*100),glareY:Math.round(O*100),rotateX:Number((-$*10).toFixed(2))})}function Se(){v(U=>({...U,glareX:50,glareY:35,rotateX:0}))}function L(U){v({angle:U,glareX:Math.round(U/360*100),glareY:35,rotateX:0})}const Q=w.jsxs("nav",{className:"operator-rail",id:o==="operators"?"operators":"systems-operators","aria-label":"Quick operator selection",children:[w.jsxs("div",{className:"operator-rail-header",children:[w.jsxs("div",{children:[w.jsx("p",{className:"eyebrow",children:"Operator select"}),w.jsxs("strong",{children:[$i.length," playable characters"]})]}),w.jsx("span",{children:"Click, arrows, or controller"})]}),w.jsx("div",{className:"operator-rail-list",children:$i.map((U,Z)=>w.jsxs("button",{"aria-current":Z===m?"true":void 0,className:Z===m?"operator-pill active":"operator-pill",onClick:()=>fe(Z),type:"button",children:[w.jsx("span",{className:"operator-pill-flag",children:U.flag}),w.jsxs("span",{className:"operator-pill-copy",children:[w.jsx("strong",{children:U.codename}),w.jsx("small",{children:U.name})]})]},`rail-${U.codename}-${U.name}`))})]});return w.jsxs("main",{className:"app-shell",children:[w.jsxs("header",{className:"game-topbar","aria-label":"AION Prime navigation",children:[w.jsxs("button",{className:"game-brand",onClick:()=>B("home"),type:"button","aria-label":"AION Prime home",children:[w.jsx("span",{children:"AION"}),w.jsx("strong",{children:"Prime"})]}),w.jsxs("nav",{className:"game-nav","aria-label":"Page sections",children:[w.jsx("button",{"aria-current":o==="home"?"page":void 0,onClick:()=>B("home"),type:"button",children:"Home"}),w.jsx("button",{"aria-current":o==="operators"?"page":void 0,onClick:()=>B("operators"),type:"button",children:"Operators"}),w.jsx("button",{"aria-current":o==="simulation"?"page":void 0,onClick:()=>B("simulation"),type:"button",children:"Simulation"}),w.jsx("button",{"aria-current":o==="systems"?"page":void 0,onClick:()=>B("systems"),type:"button",children:"Systems"})]})]}),o==="home"&&w.jsxs("section",{className:"game-home",id:"home",style:{"--home-bg":`url(${e1})`},children:[w.jsxs("div",{className:"game-home-copy",children:[w.jsx("p",{className:"eyebrow",children:"AAA tactical AI FPS"}),w.jsx("h1",{children:"AION Prime"}),w.jsx("p",{className:"game-home-subtitle",children:"Lead a global roster of Prime operators into adaptive combat zones where vehicle cover, squad timing, battlefield AI, and high-skill movement decide every fight."}),w.jsxs("div",{className:"hero-cta-row","aria-label":"AION Prime home actions",children:[w.jsx("button",{className:"primary-cta enter-game-cta",onClick:()=>B("operators"),type:"button",children:"Enter game"}),w.jsx("button",{className:"secondary-cta",onClick:()=>B("simulation"),type:"button",children:"Preview combat scene"})]}),w.jsxs("div",{className:"home-feature-grid","aria-label":"AION Prime feature pillars",children:[w.jsxs("article",{children:[w.jsx("span",{children:"01"}),w.jsx("strong",{children:"Prime roster"}),w.jsx("p",{children:"21 global operators with role-specific weapons, flags, and readable combat identities."})]}),w.jsxs("article",{children:[w.jsx("span",{children:"02"}),w.jsx("strong",{children:"Vehicle warfare"}),w.jsx("p",{children:"Mounted-gun combat vehicles shape lanes, cover choices, and tactical pressure."})]}),w.jsxs("article",{children:[w.jsx("span",{children:"03"}),w.jsx("strong",{children:"Engineer ready"}),w.jsx("p",{children:"Movement, abilities, networking, animation, and balancing details built for review."})]})]})]}),w.jsxs("div",{className:"game-home-panel","aria-label":"AION Prime launch telemetry",children:[w.jsx("span",{children:"Current operation"}),w.jsx("strong",{children:"Hangar breach"}),w.jsx("p",{children:"Enter the operator page, select a Prime unit, inspect the 360 kit, then move into the live scene."}),w.jsxs("dl",{children:[w.jsxs("div",{children:[w.jsx("dt",{children:"Operators"}),w.jsx("dd",{children:$i.length})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"Scene"}),w.jsx("dd",{children:"Live"})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"Build"}),w.jsx("dd",{children:"UE5-ready"})]})]})]})]}),o==="operators"&&w.jsxs(w.Fragment,{children:[Q,w.jsxs("section",{className:"hero",style:{"--hero-bg":`url(${c0})`},children:[w.jsxs("div",{className:"hero-copy",children:[w.jsx("p",{className:"eyebrow",children:"Character overview"}),w.jsxs("div",{className:"hero-title-row",children:[w.jsx("h1",{children:E.name}),w.jsx("span",{children:E.codename})]}),w.jsxs("p",{className:"subtitle",children:[E.flag," ",E.country," origin / ",E.heritage," /"," ",E.role]}),w.jsxs("p",{className:"hero-overview",children:[E.specialization," Built for a modern Unreal Engine 5 multiplayer shooter with readable silhouette, fast combat decisions, and responsive 360 inspection."]}),w.jsxs("div",{className:"featured-prime-card","aria-label":"Selected operator overview",children:[w.jsxs("span",{children:[E.flag," ",E.country]}),w.jsxs("strong",{children:[E.name," / ",E.codename]}),w.jsxs("p",{children:[E.heritage," / ",E.role," / ",E.specialization]})]})]}),w.jsxs("div",{className:"operator-visual","aria-label":`Interactive 3D ${E.codename} character visualization`,onPointerLeave:Se,onPointerMove:ce,style:C,children:[w.jsxs("div",{className:"turntable-hud",children:[w.jsx("span",{children:"360 turntable"}),w.jsxs("strong",{children:[x.angle," deg"]})]}),w.jsx("div",{className:"weapon-stack","aria-label":`${E.codename} weapon loadout`,children:z.map(([U,Z,ue,O])=>w.jsxs("article",{className:"weapon-stack-item",children:[w.jsx("div",{className:"weapon-silhouette","aria-hidden":"true",children:w.jsx("span",{})}),w.jsxs("div",{children:[w.jsx("small",{children:Z}),w.jsx("strong",{children:U}),w.jsxs("p",{children:[ue," / ",O]})]})]},`visual-${U}`))}),w.jsx("div",{className:"soldier-stage",children:w.jsxs("div",{className:"real-character-turntable","aria-label":`Realistic ${E.name} character viewer`,children:[w.jsx("img",{className:"character-view front-view",src:M.front,alt:`${E.name} front view`}),w.jsx("img",{className:"character-view side-view",src:M.side,alt:`${E.name} side view`}),w.jsx("img",{className:"character-view back-view",src:M.back,alt:`${E.name} back view`}),w.jsx("div",{className:"turntable-floor"}),w.jsx("div",{className:"view-marker front-marker",children:"Front"}),w.jsx("div",{className:"view-marker side-marker",children:"Side"}),w.jsx("div",{className:"view-marker back-marker",children:"Back"})]})}),w.jsx("div",{className:"turntable-track","aria-hidden":"true",children:w.jsx("span",{})}),w.jsxs("label",{className:"turntable-control",children:["Rotate ",E.codename,w.jsx("input",{type:"range",min:"0",max:"360",value:x.angle,onChange:U=>L(Number(U.target.value)),onInput:U=>L(Number(U.currentTarget.value))})]})]})]}),w.jsxs("section",{className:"metrics-strip","aria-label":"Core balancing metrics",children:[w.jsxs("div",{children:[w.jsx("span",{children:"Health"}),w.jsx("strong",{children:"100"})]}),w.jsxs("div",{children:[w.jsx("span",{children:"Armor"}),w.jsx("strong",{children:l})]}),w.jsxs("div",{children:[w.jsx("span",{children:"Effective HP"}),w.jsx("strong",{children:A})]}),w.jsxs("div",{children:[w.jsx("span",{children:"Avg TTK"}),w.jsxs("strong",{children:[y,"s"]})]})]})]}),o==="simulation"&&w.jsx($A,{codename:E.codename,operatorName:E.name,role:E.role,weapons:z,characterArt:M,squad:V}),o==="systems"&&w.jsxs(w.Fragment,{children:[Q,w.jsxs("section",{className:"two-column",children:[w.jsxs("article",{className:"panel overview-panel",children:[w.jsxs("div",{children:[w.jsx("p",{className:"eyebrow",children:"Character overview"}),w.jsxs("h2",{children:[E.flag," ",E.name,", codename ",E.codename]})]}),w.jsxs("p",{children:[E.name," is a ",E.heritage," ",E.role.toLowerCase()," operator from ",E.flag," ",E.country,". ",E.specialization," The systems profile below updates this operator's movement expectations, bindings, abilities, weapons, and engineering review surface."]}),w.jsx("div",{className:"trait-grid",children:gR(E).map(U=>w.jsx("span",{children:U},U))})]}),w.jsxs("article",{className:"panel tuning-panel",children:[w.jsxs("div",{children:[w.jsx("p",{className:"eyebrow",children:"Live balance sandbox"}),w.jsx("h2",{children:"TTK tuning assumptions"})]}),w.jsxs("label",{children:["Armor value",w.jsx("input",{type:"range",min:"0",max:"100",step:"5",value:l,onChange:U=>u(Number(U.target.value))})]}),w.jsxs("label",{children:["Headshot accuracy",w.jsx("input",{type:"range",min:"0",max:"75",step:"5",value:d,onChange:U=>h(Number(U.target.value))})]}),w.jsxs("p",{children:[z[0][0]," weighted TTK against ",A," HP at ",d,"% headshot rate:"," ",w.jsxs("strong",{children:[y,"s"]})]})]})]}),w.jsxs("section",{className:"section-block",id:"systems",children:[w.jsxs("div",{className:"section-heading",children:[w.jsxs("div",{children:[w.jsx("p",{className:"eyebrow",children:"Core movement systems"}),w.jsx("h2",{children:"Responsiveness first, animation clean second, never animation last"})]}),w.jsxs("p",{className:"section-note",children:["These are shared FPS rules. ",E.codename,"'s unique movement layer is tuned below."]})]}),w.jsx("div",{className:"movement-grid",children:fR.map(([U,Z,ue])=>w.jsxs("article",{className:"system-card",children:[w.jsx("span",{children:Z}),w.jsx("h3",{children:U}),w.jsx("p",{children:ue})]},U))})]}),w.jsxs("section",{className:"section-block mobility-signature-section",children:[w.jsxs("div",{className:"section-heading",children:[w.jsxs("div",{children:[w.jsx("p",{className:"eyebrow",children:"Character mobility signature"}),w.jsxs("h2",{children:[E.codename," moves differently from the shared baseline"]})]}),w.jsx("p",{className:"section-note",children:"Per-operator tuning adds mastery without breaking the universal controller feel."})]}),w.jsx("div",{className:"mobility-signature-grid",children:N.map(([U,Z,ue])=>w.jsxs("article",{className:"mobility-signature-card",children:[w.jsx("span",{children:Z}),w.jsx("h3",{children:U}),w.jsx("p",{children:ue})]},`${E.codename}-${U}`))})]}),w.jsxs("section",{className:"section-block input-section",children:[w.jsxs("div",{className:"section-heading",children:[w.jsxs("div",{children:[w.jsx("p",{className:"eyebrow",children:"Input and abilities"}),w.jsxs("h2",{children:["Explicit action bindings for ",E.codename]})]}),w.jsx("p",{className:"section-note",children:"Shared movement inputs stay universal; abilities change behavior per operator while keeping the same tactical button layout."})]}),w.jsxs("div",{className:"input-layout",children:[w.jsxs("article",{className:"panel ability-bindings-panel",children:[w.jsxs("div",{className:"ability-title",children:[w.jsxs("div",{children:[w.jsx("p",{className:"eyebrow",children:"Selected loadout"}),w.jsx("h3",{children:E.name})]}),w.jsx("strong",{children:E.codename})]}),w.jsx("div",{className:"ability-binding-grid","aria-label":`${E.codename} ability bindings`,children:X.map(U=>w.jsxs("article",{className:"ability-binding-card",children:[w.jsxs("div",{children:[w.jsx("span",{children:U.type}),w.jsx("h3",{children:U.name}),w.jsx("p",{children:U.purpose})]}),w.jsxs("div",{className:"binding-chips","aria-label":`${U.name} controls`,children:[w.jsxs("span",{children:[w.jsx("small",{children:"Keyboard"}),w.jsx("strong",{children:U.keyboard})]}),w.jsxs("span",{children:[w.jsx("small",{children:"Controller"}),w.jsx("strong",{children:U.controller})]}),w.jsxs("span",{children:[w.jsx("small",{children:"Cooldown"}),w.jsx("strong",{children:U.cooldown})]})]})]},`binding-${U.name}`))})]}),w.jsxs("article",{className:"input-map-panel",children:[w.jsxs("div",{className:"input-map-row input-map-header",role:"row",children:[w.jsx("span",{children:"Action"}),w.jsx("span",{children:"Keyboard"}),w.jsx("span",{children:"Controller"}),w.jsx("span",{children:"Engineering behavior"})]}),uR.map(([U,Z,ue,O])=>w.jsxs("div",{className:"input-map-row",role:"row",children:[w.jsx("span",{children:U}),w.jsx("kbd",{children:Z}),w.jsx("kbd",{children:ue}),w.jsx("p",{children:O})]},U))]})]})]}),w.jsxs("section",{className:"section-block",children:[w.jsxs("div",{className:"section-heading",children:[w.jsx("p",{className:"eyebrow",children:"Combat systems"}),w.jsxs("h2",{children:[E.codename," weapons tuned for ",E.role.toLowerCase()]})]}),w.jsxs("div",{className:"weapon-table",role:"table","aria-label":"Weapon specifications",children:[w.jsxs("div",{className:"weapon-row weapon-header",role:"row",children:[w.jsx("span",{children:"Name"}),w.jsx("span",{children:"Role"}),w.jsx("span",{children:"Damage"}),w.jsx("span",{children:"Fire rate"}),w.jsx("span",{children:"Range"}),w.jsx("span",{children:"Handling"})]}),z.map(U=>w.jsx("div",{className:"weapon-row",role:"row",children:U.map(Z=>w.jsx("span",{children:Z},Z))},U[0]))]})]}),w.jsxs("section",{className:"section-block",children:[w.jsxs("div",{className:"section-heading",children:[w.jsx("p",{className:"eyebrow",children:"Special abilities"}),w.jsxs("h2",{children:[E.codename," ability implementation cards"]})]}),w.jsxs("div",{className:"ability-layout",children:[w.jsx("div",{className:"ability-list",role:"tablist","aria-label":`${E.codename} abilities`,children:X.map(U=>w.jsxs("button",{className:U.name===G.name?"ability-tab active":"ability-tab",type:"button",onClick:()=>r(U),children:[w.jsx("span",{children:U.type}),U.name]},U.name))}),w.jsxs("article",{className:"panel ability-detail",children:[w.jsxs("div",{className:"ability-title",children:[w.jsxs("div",{children:[w.jsx("p",{className:"eyebrow",children:G.type}),w.jsx("h3",{children:G.name})]}),w.jsx("strong",{children:G.cooldown})]}),w.jsxs("dl",{children:[w.jsxs("div",{children:[w.jsx("dt",{children:"Input binding"}),w.jsxs("dd",{children:["Keyboard ",G.keyboard," / Controller ",G.controller]})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"Gameplay purpose"}),w.jsx("dd",{children:G.purpose})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"Counterplay"}),w.jsx("dd",{children:G.counterplay})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"Visual effects"}),w.jsx("dd",{children:G.vfx})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"Audio feedback"}),w.jsx("dd",{children:G.audio})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"Networking"}),w.jsx("dd",{children:G.network})]})]})]})]})]}),w.jsxs("section",{className:"two-column",children:[w.jsxs("article",{className:"panel",children:[w.jsx("p",{className:"eyebrow",children:"Animation requirements"}),w.jsx("h2",{children:"State machine surface"}),w.jsx("div",{className:"state-machine",children:hR.map(U=>w.jsx("span",{children:U},U))}),w.jsx("p",{children:"Transition logic prioritizes input response with short blend windows, motion warping for traversal, montage sections for recovery, and additive recoil aligned to weapon camera feedback."})]}),w.jsxs("article",{className:"panel",children:[w.jsx("p",{className:"eyebrow",children:"Combat feel requirements"}),w.jsx("h2",{children:"Feedback stack"}),w.jsxs("ul",{className:"check-list",children:[w.jsx("li",{children:"Distinct armor break, headshot, elimination, and ability-hit confirmations."}),w.jsx("li",{children:"Impulse camera shake capped for target readability and accessibility settings."}),w.jsx("li",{children:"Controller-only rotational aim assist with conservative slowdown windows."}),w.jsx("li",{children:"Layered recoil: camera pitch, weapon bone animation, muzzle climb, and recovery spring."}),w.jsx("li",{children:"Vibration envelopes for auto fire, blocked damage, melee impact, and ultimate activation."})]})]})]}),w.jsxs("section",{className:"section-block engineering-section",children:[w.jsxs("div",{className:"section-heading",children:[w.jsx("p",{className:"eyebrow",children:"Technical gameplay implementation"}),w.jsx("h2",{children:"Lead Gameplay Engineer review"})]}),w.jsx("div",{className:"engineering-grid",children:dR.map(U=>w.jsxs("article",{className:"engineering-card",children:[w.jsx("span",{}),w.jsx("p",{children:U})]},U))})]}),w.jsxs("section",{className:"team-band",children:[w.jsxs("div",{children:[w.jsx("p",{className:"eyebrow",children:"Team play design"}),w.jsx("h2",{children:"Strong pressure, meaningful weaknesses"})]}),w.jsxs("div",{className:"team-grid",children:[w.jsxs("article",{children:[w.jsx("h3",{children:"Strengths"}),w.jsx("p",{children:"Fast entries, aggressive flanks, duel initiation, repositioning, and fight conversion."})]}),w.jsxs("article",{children:[w.jsx("h3",{children:"Weaknesses"}),w.jsx("p",{children:"Limited sustain, exposed recovery after missed breach, weaker at long range, trap-vulnerable."})]}),w.jsxs("article",{children:[w.jsx("h3",{children:"Synergies"}),w.jsx("p",{children:"Pairs with recon, smoke, shield break, suppression, and area-denial teammates."})]}),w.jsxs("article",{children:[w.jsx("h3",{children:"Counter picks"}),w.jsx("p",{children:"Trap specialists, marksmen, anti-mobility kits, stasis fields, and coordinated focus fire."})]})]})]})]})]})}AS.createRoot(document.getElementById("root")).render(w.jsx(vS.StrictMode,{children:w.jsx(_R,{})}));
