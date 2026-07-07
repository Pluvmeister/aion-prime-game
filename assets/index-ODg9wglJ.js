(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function C_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Yf={exports:{}},Eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function gy(){if(dv)return Eo;dv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Eo.Fragment=t,Eo.jsx=i,Eo.jsxs=i,Eo}var hv;function vy(){return hv||(hv=1,Yf.exports=gy()),Yf.exports}var E=vy(),Zf={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function _y(){if(pv)return at;pv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function v(P,$,Me){this.props=P,this.context=$,this.refs=M,this.updater=Me||A}v.prototype.isReactComponent={},v.prototype.setState=function(P,$){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,$,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function G(){}G.prototype=v.prototype;function C(P,$,Me){this.props=P,this.context=$,this.refs=M,this.updater=Me||A}var N=C.prototype=new G;N.constructor=C,w(N,v.prototype),N.isPureReactComponent=!0;var X=Array.isArray;function V(){}var I={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function D(P,$,Me){var Ee=Me.ref;return{$$typeof:o,type:P,key:$,ref:Ee!==void 0?Ee:null,props:Me}}function L(P,$){return D(P.type,$,P.props)}function F(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function ce(P){var $={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Me){return $[Me]})}var ue=/\/+/g;function fe(P,$){return typeof P=="object"&&P!==null&&P.key!=null?ce(""+P.key):$.toString(36)}function ye(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(V,V):(P.status="pending",P.then(function($){P.status==="pending"&&(P.status="fulfilled",P.value=$)},function($){P.status==="pending"&&(P.status="rejected",P.reason=$)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,$,Me,Ee,U){var ie=typeof P;(ie==="undefined"||ie==="boolean")&&(P=null);var de=!1;if(P===null)de=!0;else switch(ie){case"bigint":case"string":case"number":de=!0;break;case"object":switch(P.$$typeof){case o:case t:de=!0;break;case x:return de=P._init,O(de(P._payload),$,Me,Ee,U)}}if(de)return U=U(P),de=Ee===""?"."+fe(P,0):Ee,X(U)?(Me="",de!=null&&(Me=de.replace(ue,"$&/")+"/"),O(U,$,Me,"",function(et){return et})):U!=null&&(F(U)&&(U=L(U,Me+(U.key==null||P&&P.key===U.key?"":(""+U.key).replace(ue,"$&/")+"/")+de)),$.push(U)),1;de=0;var Ue=Ee===""?".":Ee+":";if(X(P))for(var Le=0;Le<P.length;Le++)Ee=P[Le],ie=Ue+fe(Ee,Le),de+=O(Ee,$,Me,ie,U);else if(Le=S(P),typeof Le=="function")for(P=Le.call(P),Le=0;!(Ee=P.next()).done;)Ee=Ee.value,ie=Ue+fe(Ee,Le++),de+=O(Ee,$,Me,ie,U);else if(ie==="object"){if(typeof P.then=="function")return O(ye(P),$,Me,Ee,U);throw $=String(P),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return de}function Y(P,$,Me){if(P==null)return P;var Ee=[],U=0;return O(P,Ee,"","",function(ie){return $.call(Me,ie,U++)}),Ee}function q(P){if(P._status===-1){var $=P._result;$=$(),$.then(function(Me){(P._status===0||P._status===-1)&&(P._status=1,P._result=Me)},function(Me){(P._status===0||P._status===-1)&&(P._status=2,P._result=Me)}),P._status===-1&&(P._status=0,P._result=$)}if(P._status===1)return P._result.default;throw P._result}var oe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},me={map:Y,forEach:function(P,$,Me){Y(P,function(){$.apply(this,arguments)},Me)},count:function(P){var $=0;return Y(P,function(){$++}),$},toArray:function(P){return Y(P,function($){return $})||[]},only:function(P){if(!F(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return at.Activity=_,at.Children=me,at.Component=v,at.Fragment=i,at.Profiler=l,at.PureComponent=C,at.StrictMode=r,at.Suspense=m,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,at.__COMPILER_RUNTIME={__proto__:null,c:function(P){return I.H.useMemoCache(P)}},at.cache=function(P){return function(){return P.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(P,$,Me){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ee=w({},P.props),U=P.key;if($!=null)for(ie in $.key!==void 0&&(U=""+$.key),$)!Q.call($,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&$.ref===void 0||(Ee[ie]=$[ie]);var ie=arguments.length-2;if(ie===1)Ee.children=Me;else if(1<ie){for(var de=Array(ie),Ue=0;Ue<ie;Ue++)de[Ue]=arguments[Ue+2];Ee.children=de}return D(P.type,U,Ee)},at.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},at.createElement=function(P,$,Me){var Ee,U={},ie=null;if($!=null)for(Ee in $.key!==void 0&&(ie=""+$.key),$)Q.call($,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(U[Ee]=$[Ee]);var de=arguments.length-2;if(de===1)U.children=Me;else if(1<de){for(var Ue=Array(de),Le=0;Le<de;Le++)Ue[Le]=arguments[Le+2];U.children=Ue}if(P&&P.defaultProps)for(Ee in de=P.defaultProps,de)U[Ee]===void 0&&(U[Ee]=de[Ee]);return D(P,ie,U)},at.createRef=function(){return{current:null}},at.forwardRef=function(P){return{$$typeof:h,render:P}},at.isValidElement=F,at.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:q}},at.memo=function(P,$){return{$$typeof:p,type:P,compare:$===void 0?null:$}},at.startTransition=function(P){var $=I.T,Me={};I.T=Me;try{var Ee=P(),U=I.S;U!==null&&U(Me,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(V,oe)}catch(ie){oe(ie)}finally{$!==null&&Me.types!==null&&($.types=Me.types),I.T=$}},at.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},at.use=function(P){return I.H.use(P)},at.useActionState=function(P,$,Me){return I.H.useActionState(P,$,Me)},at.useCallback=function(P,$){return I.H.useCallback(P,$)},at.useContext=function(P){return I.H.useContext(P)},at.useDebugValue=function(){},at.useDeferredValue=function(P,$){return I.H.useDeferredValue(P,$)},at.useEffect=function(P,$){return I.H.useEffect(P,$)},at.useEffectEvent=function(P){return I.H.useEffectEvent(P)},at.useId=function(){return I.H.useId()},at.useImperativeHandle=function(P,$,Me){return I.H.useImperativeHandle(P,$,Me)},at.useInsertionEffect=function(P,$){return I.H.useInsertionEffect(P,$)},at.useLayoutEffect=function(P,$){return I.H.useLayoutEffect(P,$)},at.useMemo=function(P,$){return I.H.useMemo(P,$)},at.useOptimistic=function(P,$){return I.H.useOptimistic(P,$)},at.useReducer=function(P,$,Me){return I.H.useReducer(P,$,Me)},at.useRef=function(P){return I.H.useRef(P)},at.useState=function(P){return I.H.useState(P)},at.useSyncExternalStore=function(P,$,Me){return I.H.useSyncExternalStore(P,$,Me)},at.useTransition=function(){return I.H.useTransition()},at.version="19.2.7",at}var mv;function _h(){return mv||(mv=1,Zf.exports=_y()),Zf.exports}var an=_h();const xy=C_(an);var Kf={exports:{}},bo={},Qf={exports:{}},Jf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function yy(){return gv||(gv=1,(function(o){function t(O,Y){var q=O.length;O.push(Y);e:for(;0<q;){var oe=q-1>>>1,me=O[oe];if(0<l(me,Y))O[oe]=Y,O[q]=me,q=oe;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Y=O[0],q=O.pop();if(q!==Y){O[0]=q;e:for(var oe=0,me=O.length,P=me>>>1;oe<P;){var $=2*(oe+1)-1,Me=O[$],Ee=$+1,U=O[Ee];if(0>l(Me,q))Ee<me&&0>l(U,Me)?(O[oe]=U,O[Ee]=q,oe=Ee):(O[oe]=Me,O[$]=q,oe=$);else if(Ee<me&&0>l(U,q))O[oe]=U,O[Ee]=q,oe=Ee;else break e}}return Y}function l(O,Y){var q=O.sortIndex-Y.sortIndex;return q!==0?q:O.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,_=null,y=3,S=!1,A=!1,w=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var Y=i(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=O)r(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function X(O){if(w=!1,N(O),!A)if(i(m)!==null)A=!0,V||(V=!0,ce());else{var Y=i(p);Y!==null&&ye(X,Y.startTime-O)}}var V=!1,I=-1,Q=5,D=-1;function L(){return M?!0:!(o.unstable_now()-D<Q)}function F(){if(M=!1,V){var O=o.unstable_now();D=O;var Y=!0;try{e:{A=!1,w&&(w=!1,G(I),I=-1),S=!0;var q=y;try{t:{for(N(O),_=i(m);_!==null&&!(_.expirationTime>O&&L());){var oe=_.callback;if(typeof oe=="function"){_.callback=null,y=_.priorityLevel;var me=oe(_.expirationTime<=O);if(O=o.unstable_now(),typeof me=="function"){_.callback=me,N(O),Y=!0;break t}_===i(m)&&r(m),N(O)}else r(m);_=i(m)}if(_!==null)Y=!0;else{var P=i(p);P!==null&&ye(X,P.startTime-O),Y=!1}}break e}finally{_=null,y=q,S=!1}Y=void 0}}finally{Y?ce():V=!1}}}var ce;if(typeof C=="function")ce=function(){C(F)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,fe=ue.port2;ue.port1.onmessage=F,ce=function(){fe.postMessage(null)}}else ce=function(){v(F,0)};function ye(O,Y){I=v(function(){O(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(O){switch(y){case 1:case 2:case 3:var Y=3;break;default:Y=y}var q=y;y=Y;try{return O()}finally{y=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=y;y=O;try{return Y()}finally{y=q}},o.unstable_scheduleCallback=function(O,Y,q){var oe=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,O){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=q+me,O={id:x++,callback:Y,priorityLevel:O,startTime:q,expirationTime:me,sortIndex:-1},q>oe?(O.sortIndex=q,t(p,O),i(m)===null&&O===i(p)&&(w?(G(I),I=-1):w=!0,ye(X,q-oe))):(O.sortIndex=me,t(m,O),A||S||(A=!0,V||(V=!0,ce()))),O},o.unstable_shouldYield=L,o.unstable_wrapCallback=function(O){var Y=y;return function(){var q=y;y=Y;try{return O.apply(this,arguments)}finally{y=q}}}})(Jf)),Jf}var vv;function Sy(){return vv||(vv=1,Qf.exports=yy()),Qf.exports}var $f={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function My(){if(_v)return An;_v=1;var o=_h();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,x)},An.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:S}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.7",An}var xv;function Ey(){if(xv)return $f.exports;xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),$f.exports=My(),$f.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function by(){if(yv)return bo;yv=1;var o=Sy(),t=_h(),i=Ey();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,s=f;break}if(T===s){g=!0,s=c,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=c;break}if(T===s){g=!0,s=f,a=c;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),C=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function fe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case V:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case C:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:fe(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return fe(e(n))}catch{}}return null}var ye=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},oe=[],me=-1;function P(e){return{current:e}}function $(e){0>me||(e.current=oe[me],oe[me]=null,me--)}function Me(e,n){me++,oe[me]=e.current,e.current=n}var Ee=P(null),U=P(null),ie=P(null),de=P(null);function Ue(e,n){switch(Me(ie,n),Me(U,e),Me(Ee,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Pg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Pg(n),e=zg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(Ee),Me(Ee,e)}function Le(){$(Ee),$(U),$(ie)}function et(e){e.memoizedState!==null&&Me(de,e);var n=Ee.current,a=zg(n,e.type);n!==a&&(Me(U,e),Me(Ee,a))}function Tt(e){U.current===e&&($(Ee),$(U)),de.current===e&&($(de),xo._currentValue=q)}var ot,H;function pt(e){if(ot===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ot=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ot+e+H}var We=!1;function ht(e,n){if(!e||We)return"";We=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var ae=le}Reflect.construct(e,[],_e)}else{try{_e.call()}catch(le){ae=le}e.call(_e.prototype)}}else{try{throw Error()}catch(le){ae=le}(_e=e())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var B=g.split(`
`),te=T.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<te.length&&!te[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===te.length)for(s=B.length-1,c=te.length-1;1<=s&&0<=c&&B[s]!==te[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==te[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==te[c]){var pe=`
`+B[s].replace(" at new "," at ");return e.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",e.displayName)),pe}while(1<=s&&0<=c);break}}}finally{We=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pt(a):""}function Ke(e,n){switch(e.tag){case 26:case 27:case 5:return pt(e.type);case 16:return pt("Lazy");case 13:return e.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return pt("Activity");default:return""}}function Vt(e){try{var n="",a=null;do n+=Ke(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ie=Object.prototype.hasOwnProperty,rt=o.unstable_scheduleCallback,Qt=o.unstable_cancelCallback,Zt=o.unstable_shouldYield,z=o.unstable_requestPaint,b=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,be=o.unstable_UserBlockingPriority,he=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,we=o.unstable_IdlePriority,Xe=o.log,qe=o.unstable_setDisableYieldValue,Ae=null,Ce=null;function Ze(e){if(typeof Xe=="function"&&qe(e),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Ae,e)}catch{}}var Be=Math.clz32?Math.clz32:j,Ne=Math.log,st=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(Ne(e)/st|0)|0}var Re=256,De=262144,Fe=4194304;function Te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Te(s):(g&=T,g!==0?c=Te(g):a||(a=T&~e,a!==0&&(c=Te(a))))):(T=s&~f,T!==0?c=Te(T):g!==0?c=Te(g):a||(a=s&~e,a!==0&&(c=Te(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function He(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $n(e,n,a,s,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,te=e.hiddenUpdates;for(a=g&~a;0<a;){var pe=31-Be(a),_e=1<<pe;T[pe]=0,B[pe]=-1;var ae=te[pe];if(ae!==null)for(te[pe]=null,pe=0;pe<ae.length;pe++){var le=ae[pe];le!==null&&(le.lane&=-536870913)}a&=~_e}s!==0&&Ls(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function Ls(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Be(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function xi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Be(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Er(e,n){var a=n&-n;return a=(a&42)!==0?1:br(a),(a&(e.suspendedLanes|n))!==0?0:a}function br(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ja(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:rv(e.type))}function Ns(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var Vn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Vn,xn="__reactProps$"+Vn,la="__reactContainer$"+Vn,Os="__reactEvents$"+Vn,Gc="__reactListeners$"+Vn,Vc="__reactHandles$"+Vn,Xo="__reactResources$"+Vn,Xa="__reactMarker$"+Vn;function R(e){delete e[rn],delete e[xn],delete e[Os],delete e[Gc],delete e[Vc]}function W(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[la]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=kg(e);e!==null;){if(a=e[rn])return a;e=kg(e)}return n}e=a,a=e.parentNode}return null}function re(e){if(e=e[rn]||e[la]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function se(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Z(e){var n=e[Xo];return n||(n=e[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Se(e){e[Xa]=!0}var Oe=new Set,Ve={};function ze(e,n){Qe(e,n),Qe(e+"Capture",n)}function Qe(e,n){for(Ve[e]=n,e=0;e<n.length;e++)Oe.add(n[e])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},dt={};function Lt(e){return Ie.call(dt,e)?!0:Ie.call(Je,e)?!1:nt.test(e)?dt[e]=!0:(Je[e]=!0,!1)}function kt(e,n,a){if(Lt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Nt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function mt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ke(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function bt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yn(e){if(!e._valueTracker){var n=Xt(e)?"checked":"value";e._valueTracker=bt(e,n,""+e[n])}}function Ui(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Xt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qa=/[\n"\\]/g;function _t(e){return e.replace(qa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,s,c,f,g,T){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ke(n)):e.value!==""+ke(n)&&(e.value=""+ke(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?fn(e,g,ke(n)):a!=null?fn(e,g,ke(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ke(T):e.removeAttribute("name")}function Dn(e,n,a,s,c,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){yn(e);return}a=a!=null?""+ke(a):"",n=n!=null?""+ke(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),yn(e)}function fn(e,n,a){n==="number"&&mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ke(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Ar(e,n,a){if(n!=null&&(n=""+ke(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ke(a):""}function yi(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ye(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ke(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),yn(e)}function Rr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var f0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||f0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Nh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Lh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Lh(e,f,n[f])}function kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var d0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),h0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(e){return h0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Li(){}var jc=null;function Xc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Cr=null;function Oh(e){var n=re(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[xn]||null;if(!c)throw Error(r(90));Tn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ui(s)}break e;case"textarea":Ar(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&en(e,!!a.multiple,n,!1)}}}var qc=!1;function Ph(e,n,a){if(qc)return e(n,a);qc=!0;try{var s=e(n);return s}finally{if(qc=!1,(wr!==null||Cr!==null)&&(Nl(),wr&&(n=wr,e=Cr,Cr=wr=null,Oh(n),e)))for(n=0;n<e.length;n++)Oh(e[n])}}function Ps(e,n){var a=e.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(Ni)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Wc=!1}var ca=null,Yc=null,Wo=null;function zh(){if(Wo)return Wo;var e,n=Yc,a=n.length,s,c="value"in ca?ca.value:ca.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Wo=c.slice(e,1<s?1-s:void 0)}function Yo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function Bh(){return!1}function On(e){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zo:Bh,this.isPropagationStopped=Bh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=On(Wa),Bs=_({},Wa,{view:0,detail:0}),p0=On(Bs),Zc,Kc,Fs,Qo=_({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fs&&(Fs&&e.type==="mousemove"?(Zc=e.screenX-Fs.screenX,Kc=e.screenY-Fs.screenY):Kc=Zc=0,Fs=e),Zc)},movementY:function(e){return"movementY"in e?e.movementY:Kc}}),Fh=On(Qo),m0=_({},Qo,{dataTransfer:0}),g0=On(m0),v0=_({},Bs,{relatedTarget:0}),Qc=On(v0),_0=_({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),x0=On(_0),y0=_({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S0=On(y0),M0=_({},Wa,{data:0}),Ih=On(M0),E0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=T0[e])?!!n[e]:!1}function Jc(){return A0}var R0=_({},Bs,{key:function(e){if(e.key){var n=E0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?b0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w0=On(R0),C0=_({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=On(C0),D0=_({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),U0=On(D0),L0=_({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=On(L0),O0=_({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),P0=On(O0),z0=_({},Wa,{newState:0,oldState:0}),B0=On(z0),F0=[9,13,27,32],$c=Ni&&"CompositionEvent"in window,Is=null;Ni&&"documentMode"in document&&(Is=document.documentMode);var I0=Ni&&"TextEvent"in window&&!Is,Gh=Ni&&(!$c||Is&&8<Is&&11>=Is),Vh=" ",kh=!1;function jh(e,n){switch(e){case"keyup":return F0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function H0(e,n){switch(e){case"compositionend":return Xh(n);case"keypress":return n.which!==32?null:(kh=!0,Vh);case"textInput":return e=n.data,e===Vh&&kh?null:e;default:return null}}function G0(e,n){if(Dr)return e==="compositionend"||!$c&&jh(e,n)?(e=zh(),Wo=Yc=ca=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gh&&n.locale!=="ko"?null:n.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!V0[e.type]:n==="textarea"}function Wh(e,n,a,s){wr?Cr?Cr.push(s):Cr=[s]:wr=s,n=Hl(n,"onChange"),0<n.length&&(a=new Ko("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Hs=null,Gs=null;function k0(e){Cg(e,0)}function Jo(e){var n=se(e);if(Ui(n))return e}function Yh(e,n){if(e==="change")return n}var Zh=!1;if(Ni){var eu;if(Ni){var tu="oninput"in document;if(!tu){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),tu=typeof Kh.oninput=="function"}eu=tu}else eu=!1;Zh=eu&&(!document.documentMode||9<document.documentMode)}function Qh(){Hs&&(Hs.detachEvent("onpropertychange",Jh),Gs=Hs=null)}function Jh(e){if(e.propertyName==="value"&&Jo(Gs)){var n=[];Wh(n,Gs,e,Xc(e)),Ph(k0,n)}}function j0(e,n,a){e==="focusin"?(Qh(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",Jh)):e==="focusout"&&Qh()}function X0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(Gs)}function q0(e,n){if(e==="click")return Jo(n)}function W0(e,n){if(e==="input"||e==="change")return Jo(n)}function Y0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:Y0;function Vs(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ie.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function $h(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ep(e,n){var a=$h(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$h(a)}}function tp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function np(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mn(e.document)}return n}function nu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Z0=Ni&&"documentMode"in document&&11>=document.documentMode,Ur=null,iu=null,ks=null,au=!1;function ip(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||Ur==null||Ur!==mn(s)||(s=Ur,"selectionStart"in s&&nu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Hl(iu,"onSelect"),0<s.length&&(n=new Ko("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ur)))}function Ya(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Lr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},ru={},ap={};Ni&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Za(e){if(ru[e])return ru[e];if(!Lr[e])return e;var n=Lr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ap)return ru[e]=n[a];return e}var rp=Za("animationend"),sp=Za("animationiteration"),op=Za("animationstart"),K0=Za("transitionrun"),Q0=Za("transitionstart"),J0=Za("transitioncancel"),lp=Za("transitionend"),cp=new Map,su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");su.push("scrollEnd");function ui(e,n){cp.set(e,n),ze(n,[e])}var $o=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ei=[],Nr=0,ou=0;function el(){for(var e=Nr,n=ou=Nr=0;n<e;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&up(a,c,f)}}function tl(e,n,a,s){ei[Nr++]=e,ei[Nr++]=n,ei[Nr++]=a,ei[Nr++]=s,ou|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function lu(e,n,a,s){return tl(e,n,a,s),nl(e)}function Ka(e,n){return tl(e,null,null,n),nl(e)}function up(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Be(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function nl(e){if(50<fo)throw fo=0,_f=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Or={};function $0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,s){return new $0(e,n,a,s)}function cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function il(e,n,a,s,c,f){var g=0;if(s=e,typeof e=="function")cu(e)&&(g=1);else if(typeof e=="string")g=ay(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=jn(31,a,n,c),e.elementType=D,e.lanes=f,e;case w:return Qa(a.children,c,f,n);case M:g=8,c|=24;break;case v:return e=jn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case X:return e=jn(13,a,n,c),e.elementType=X,e.lanes=f,e;case V:return e=jn(19,a,n,c),e.elementType=V,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:g=10;break e;case G:g=9;break e;case N:g=11;break e;case I:g=14;break e;case Q:g=16,s=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=jn(g,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Qa(e,n,a,s){return e=jn(7,e,s,n),e.lanes=a,e}function uu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function dp(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function fu(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var hp=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=hp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Vt(n)},hp.set(e,n),n)}return{value:e,source:n,stack:Vt(n)}}var Pr=[],zr=0,al=null,js=0,ni=[],ii=0,ua=null,Si=1,Mi="";function Pi(e,n){Pr[zr++]=js,Pr[zr++]=al,al=e,js=n}function pp(e,n,a){ni[ii++]=Si,ni[ii++]=Mi,ni[ii++]=ua,ua=e;var s=Si;e=Mi;var c=32-Be(s)-1;s&=~(1<<c),a+=1;var f=32-Be(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Si=1<<32-Be(n)+c|a<<c|s,Mi=f+e}else Si=1<<f|a<<c|s,Mi=e}function du(e){e.return!==null&&(Pi(e,1),pp(e,1,0))}function hu(e){for(;e===al;)al=Pr[--zr],Pr[zr]=null,js=Pr[--zr],Pr[zr]=null;for(;e===ua;)ua=ni[--ii],ni[ii]=null,Mi=ni[--ii],ni[ii]=null,Si=ni[--ii],ni[ii]=null}function mp(e,n){ni[ii++]=Si,ni[ii++]=Mi,ni[ii++]=ua,Si=n.id,Mi=n.overflow,ua=e}var Sn=null,qt=null,Mt=!1,fa=null,ai=!1,pu=Error(r(519));function da(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xs(ti(n,e)),pu}function gp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[rn]=e,n[xn]=s,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)vt(po[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Dn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),yi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Ng(n.textContent,a)?(s.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),s.onScroll!=null&&vt("scroll",n),s.onScrollEnd!=null&&vt("scrollend",n),s.onClick!=null&&(n.onclick=Li),n=!0):n=!1,n||da(e,!0)}function vp(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:Sn=Sn.return}}function Br(e){if(e!==Sn)return!1;if(!Mt)return vp(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Nf(e.type,e.memoizedProps)),a=!a),a&&qt&&da(e),vp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qt=Vg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qt=Vg(e)}else n===27?(n=qt,Aa(e.type)?(e=Ff,Ff=null,qt=e):qt=n):qt=Sn?si(e.stateNode.nextSibling):null;return!0}function Ja(){qt=Sn=null,Mt=!1}function mu(){var e=fa;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),fa=null),e}function Xs(e){fa===null?fa=[e]:fa.push(e)}var gu=P(null),$a=null,zi=null;function ha(e,n,a){Me(gu,n._currentValue),n._currentValue=a}function Bi(e){e._currentValue=gu.current,$(gu)}function vu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function _u(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),vu(f.return,a,e),s||(g=null);break e}f=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),vu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Fr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=c.type;kn(c.pendingProps.value,g.value)||(e!==null?e.push(T):e=[T])}}else if(c===de.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}c=c.return}e!==null&&_u(n,e,a,s),n.flags|=262144}function rl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function er(e){$a=e,zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return _p($a,e)}function sl(e,n){return $a===null&&er(e),_p(e,n)}function _p(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(e===null)throw Error(r(308));zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else zi=zi.next=n;return a}var ex=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},tx=o.unstable_scheduleCallback,nx=o.unstable_NormalPriority,sn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new ex,data:new Map,refCount:0}}function qs(e){e.refCount--,e.refCount===0&&tx(nx,function(){e.controller.abort()})}var Ws=null,yu=0,Ir=0,Hr=null;function ix(e,n){if(Ws===null){var a=Ws=[];yu=0,Ir=bf(),Hr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return yu++,n.then(xp,xp),n}function xp(){if(--yu===0&&Ws!==null){Hr!==null&&(Hr.status="fulfilled");var e=Ws;Ws=null,Ir=0,Hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ax(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var yp=O.S;O.S=function(e,n){ig=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ix(e,n),yp!==null&&yp(e,n)};var tr=P(null);function Su(){var e=tr.current;return e!==null?e:jt.pooledCache}function ol(e,n){n===null?Me(tr,tr.current):Me(tr,n.pool)}function Sp(){var e=Su();return e===null?null:{parent:sn._currentValue,pool:e}}var Gr=Error(r(460)),Mu=Error(r(474)),ll=Error(r(542)),cl={then:function(){}};function Mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ep(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Li,Li),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tp(e),e;default:if(typeof n.status=="string")n.then(Li,Li);else{if(e=jt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tp(e),e}throw ir=n,Gr}}function nr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ir=a,Gr):a}}var ir=null;function bp(){if(ir===null)throw Error(r(459));var e=ir;return ir=null,e}function Tp(e){if(e===Gr||e===ll)throw Error(r(483))}var Vr=null,Ys=0;function ul(e){var n=Ys;return Ys+=1,Vr===null&&(Vr=[]),Ep(Vr,e,n)}function Zs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function fl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ap(e){function n(K,k){if(e){var ee=K.deletions;ee===null?(K.deletions=[k],K.flags|=16):ee.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function s(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function c(K,k){return K=Oi(K,k),K.index=0,K.sibling=null,K}function f(K,k,ee){return K.index=ee,e?(ee=K.alternate,ee!==null?(ee=ee.index,ee<k?(K.flags|=67108866,k):ee):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function g(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function T(K,k,ee,ve){return k===null||k.tag!==6?(k=uu(ee,K.mode,ve),k.return=K,k):(k=c(k,ee),k.return=K,k)}function B(K,k,ee,ve){var $e=ee.type;return $e===w?pe(K,k,ee.props.children,ve,ee.key):k!==null&&(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Q&&nr($e)===k.type)?(k=c(k,ee.props),Zs(k,ee),k.return=K,k):(k=il(ee.type,ee.key,ee.props,null,K.mode,ve),Zs(k,ee),k.return=K,k)}function te(K,k,ee,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==ee.containerInfo||k.stateNode.implementation!==ee.implementation?(k=fu(ee,K.mode,ve),k.return=K,k):(k=c(k,ee.children||[]),k.return=K,k)}function pe(K,k,ee,ve,$e){return k===null||k.tag!==7?(k=Qa(ee,K.mode,ve,$e),k.return=K,k):(k=c(k,ee),k.return=K,k)}function _e(K,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=uu(""+k,K.mode,ee),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return ee=il(k.type,k.key,k.props,null,K.mode,ee),Zs(ee,k),ee.return=K,ee;case A:return k=fu(k,K.mode,ee),k.return=K,k;case Q:return k=nr(k),_e(K,k,ee)}if(ye(k)||ce(k))return k=Qa(k,K.mode,ee,null),k.return=K,k;if(typeof k.then=="function")return _e(K,ul(k),ee);if(k.$$typeof===C)return _e(K,sl(K,k),ee);fl(K,k)}return null}function ae(K,k,ee,ve){var $e=k!==null?k.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return $e!==null?null:T(K,k,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:return ee.key===$e?B(K,k,ee,ve):null;case A:return ee.key===$e?te(K,k,ee,ve):null;case Q:return ee=nr(ee),ae(K,k,ee,ve)}if(ye(ee)||ce(ee))return $e!==null?null:pe(K,k,ee,ve,null);if(typeof ee.then=="function")return ae(K,k,ul(ee),ve);if(ee.$$typeof===C)return ae(K,k,sl(K,ee),ve);fl(K,ee)}return null}function le(K,k,ee,ve,$e){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return K=K.get(ee)||null,T(k,K,""+ve,$e);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case S:return K=K.get(ve.key===null?ee:ve.key)||null,B(k,K,ve,$e);case A:return K=K.get(ve.key===null?ee:ve.key)||null,te(k,K,ve,$e);case Q:return ve=nr(ve),le(K,k,ee,ve,$e)}if(ye(ve)||ce(ve))return K=K.get(ee)||null,pe(k,K,ve,$e,null);if(typeof ve.then=="function")return le(K,k,ee,ul(ve),$e);if(ve.$$typeof===C)return le(K,k,ee,sl(k,ve),$e);fl(k,ve)}return null}function Ge(K,k,ee,ve){for(var $e=null,At=null,je=k,ct=k=0,yt=null;je!==null&&ct<ee.length;ct++){je.index>ct?(yt=je,je=null):yt=je.sibling;var Rt=ae(K,je,ee[ct],ve);if(Rt===null){je===null&&(je=yt);break}e&&je&&Rt.alternate===null&&n(K,je),k=f(Rt,k,ct),At===null?$e=Rt:At.sibling=Rt,At=Rt,je=yt}if(ct===ee.length)return a(K,je),Mt&&Pi(K,ct),$e;if(je===null){for(;ct<ee.length;ct++)je=_e(K,ee[ct],ve),je!==null&&(k=f(je,k,ct),At===null?$e=je:At.sibling=je,At=je);return Mt&&Pi(K,ct),$e}for(je=s(je);ct<ee.length;ct++)yt=le(je,K,ct,ee[ct],ve),yt!==null&&(e&&yt.alternate!==null&&je.delete(yt.key===null?ct:yt.key),k=f(yt,k,ct),At===null?$e=yt:At.sibling=yt,At=yt);return e&&je.forEach(function(Ua){return n(K,Ua)}),Mt&&Pi(K,ct),$e}function tt(K,k,ee,ve){if(ee==null)throw Error(r(151));for(var $e=null,At=null,je=k,ct=k=0,yt=null,Rt=ee.next();je!==null&&!Rt.done;ct++,Rt=ee.next()){je.index>ct?(yt=je,je=null):yt=je.sibling;var Ua=ae(K,je,Rt.value,ve);if(Ua===null){je===null&&(je=yt);break}e&&je&&Ua.alternate===null&&n(K,je),k=f(Ua,k,ct),At===null?$e=Ua:At.sibling=Ua,At=Ua,je=yt}if(Rt.done)return a(K,je),Mt&&Pi(K,ct),$e;if(je===null){for(;!Rt.done;ct++,Rt=ee.next())Rt=_e(K,Rt.value,ve),Rt!==null&&(k=f(Rt,k,ct),At===null?$e=Rt:At.sibling=Rt,At=Rt);return Mt&&Pi(K,ct),$e}for(je=s(je);!Rt.done;ct++,Rt=ee.next())Rt=le(je,K,ct,Rt.value,ve),Rt!==null&&(e&&Rt.alternate!==null&&je.delete(Rt.key===null?ct:Rt.key),k=f(Rt,k,ct),At===null?$e=Rt:At.sibling=Rt,At=Rt);return e&&je.forEach(function(my){return n(K,my)}),Mt&&Pi(K,ct),$e}function It(K,k,ee,ve){if(typeof ee=="object"&&ee!==null&&ee.type===w&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:e:{for(var $e=ee.key;k!==null;){if(k.key===$e){if($e=ee.type,$e===w){if(k.tag===7){a(K,k.sibling),ve=c(k,ee.props.children),ve.return=K,K=ve;break e}}else if(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Q&&nr($e)===k.type){a(K,k.sibling),ve=c(k,ee.props),Zs(ve,ee),ve.return=K,K=ve;break e}a(K,k);break}else n(K,k);k=k.sibling}ee.type===w?(ve=Qa(ee.props.children,K.mode,ve,ee.key),ve.return=K,K=ve):(ve=il(ee.type,ee.key,ee.props,null,K.mode,ve),Zs(ve,ee),ve.return=K,K=ve)}return g(K);case A:e:{for($e=ee.key;k!==null;){if(k.key===$e)if(k.tag===4&&k.stateNode.containerInfo===ee.containerInfo&&k.stateNode.implementation===ee.implementation){a(K,k.sibling),ve=c(k,ee.children||[]),ve.return=K,K=ve;break e}else{a(K,k);break}else n(K,k);k=k.sibling}ve=fu(ee,K.mode,ve),ve.return=K,K=ve}return g(K);case Q:return ee=nr(ee),It(K,k,ee,ve)}if(ye(ee))return Ge(K,k,ee,ve);if(ce(ee)){if($e=ce(ee),typeof $e!="function")throw Error(r(150));return ee=$e.call(ee),tt(K,k,ee,ve)}if(typeof ee.then=="function")return It(K,k,ul(ee),ve);if(ee.$$typeof===C)return It(K,k,sl(K,ee),ve);fl(K,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,k!==null&&k.tag===6?(a(K,k.sibling),ve=c(k,ee),ve.return=K,K=ve):(a(K,k),ve=uu(ee,K.mode,ve),ve.return=K,K=ve),g(K)):a(K,k)}return function(K,k,ee,ve){try{Ys=0;var $e=It(K,k,ee,ve);return Vr=null,$e}catch(je){if(je===Gr||je===ll)throw je;var At=jn(29,je,null,K.mode);return At.lanes=ve,At.return=K,At}finally{}}}var ar=Ap(!0),Rp=Ap(!1),pa=!1;function Eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Dt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=nl(e),up(e,null,a),n}return tl(e,s,n,a),nl(e)}function Ks(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,xi(e,a)}}function Tu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Au=!1;function Qs(){if(Au){var e=Hr;if(e!==null)throw e}}function Js(e,n,a,s){Au=!1;var c=e.updateQueue;pa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,te=B.next;B.next=null,g===null?f=te:g.next=te,g=B;var pe=e.alternate;pe!==null&&(pe=pe.updateQueue,T=pe.lastBaseUpdate,T!==g&&(T===null?pe.firstBaseUpdate=te:T.next=te,pe.lastBaseUpdate=B))}if(f!==null){var _e=c.baseState;g=0,pe=te=B=null,T=f;do{var ae=T.lane&-536870913,le=ae!==T.lane;if(le?(xt&ae)===ae:(s&ae)===ae){ae!==0&&ae===Ir&&(Au=!0),pe!==null&&(pe=pe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ge=e,tt=T;ae=n;var It=a;switch(tt.tag){case 1:if(Ge=tt.payload,typeof Ge=="function"){_e=Ge.call(It,_e,ae);break e}_e=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=tt.payload,ae=typeof Ge=="function"?Ge.call(It,_e,ae):Ge,ae==null)break e;_e=_({},_e,ae);break e;case 2:pa=!0}}ae=T.callback,ae!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pe===null?(te=pe=le,B=_e):pe=pe.next=le,g|=ae;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;le=T,T=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);pe===null&&(B=_e),c.baseState=B,c.firstBaseUpdate=te,c.lastBaseUpdate=pe,f===null&&(c.shared.lanes=0),Sa|=g,e.lanes=g,e.memoizedState=_e}}function wp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Cp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)wp(a[e],n)}var kr=P(null),dl=P(0);function Dp(e,n){e=qi,Me(dl,e),Me(kr,n),qi=e|n.baseLanes}function Ru(){Me(dl,qi),Me(kr,kr.current)}function wu(){qi=dl.current,$(kr),$(dl)}var Xn=P(null),ri=null;function va(e){var n=e.alternate;Me(tn,tn.current&1),Me(Xn,e),ri===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(ri=e)}function Cu(e){Me(tn,tn.current),Me(Xn,e),ri===null&&(ri=e)}function Up(e){e.tag===22?(Me(tn,tn.current),Me(Xn,e),ri===null&&(ri=e)):_a()}function _a(){Me(tn,tn.current),Me(Xn,Xn.current)}function qn(e){$(Xn),ri===e&&(ri=null),$(tn)}var tn=P(0);function hl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||zf(a)||Bf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=0,lt=null,Bt=null,on=null,pl=!1,jr=!1,rr=!1,ml=0,$s=0,Xr=null,rx=0;function Jt(){throw Error(r(321))}function Du(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Uu(e,n,a,s,c,f){return Fi=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?pm:qu,rr=!1,f=a(s,c),rr=!1,jr&&(f=Np(n,a,s,c)),Lp(e),f}function Lp(e){O.H=no;var n=Bt!==null&&Bt.next!==null;if(Fi=0,on=Bt=lt=null,pl=!1,$s=0,Xr=null,n)throw Error(r(300));e===null||ln||(e=e.dependencies,e!==null&&rl(e)&&(ln=!0))}function Np(e,n,a,s){lt=e;var c=0;do{if(jr&&(Xr=null),$s=0,jr=!1,25<=c)throw Error(r(301));if(c+=1,on=Bt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=mm,f=n(a,s)}while(jr);return f}function sx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?eo(n):n,e=e.useState()[0],(Bt!==null?Bt.memoizedState:null)!==e&&(lt.flags|=1024),n}function Lu(){var e=ml!==0;return ml=0,e}function Nu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ou(e){if(pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}pl=!1}Fi=0,on=Bt=lt=null,jr=!1,$s=ml=0,Xr=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?lt.memoizedState=on=e:on=on.next=e,on}function nn(){if(Bt===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var n=on===null?lt.memoizedState:on.next;if(n!==null)on=n,Bt=e;else{if(e===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},on===null?lt.memoizedState=on=e:on=on.next=e}return on}function gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(e){var n=$s;return $s+=1,Xr===null&&(Xr=[]),e=Ep(Xr,e,n),n=lt,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?pm:qu),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return eo(e);if(e.$$typeof===C)return Mn(e)}throw Error(r(438,String(e)))}function Pu(e){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=lt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=gl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=L;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function _l(e){var n=nn();return zu(n,Bt,e)}function zu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=g=null,B=null,te=n,pe=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(xt&_e)===_e:(Fi&_e)===_e){var ae=te.revertLane;if(ae===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===Ir&&(pe=!0);else if((Fi&ae)===ae){te=te.next,ae===Ir&&(pe=!0);continue}else _e={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(T=B=_e,g=f):B=B.next=_e,lt.lanes|=ae,Sa|=ae;_e=te.action,rr&&a(f,_e),f=te.hasEagerState?te.eagerState:a(f,_e)}else ae={lane:_e,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(T=B=ae,g=f):B=B.next=ae,lt.lanes|=_e,Sa|=_e;te=te.next}while(te!==null&&te!==n);if(B===null?g=f:B.next=T,!kn(f,e.memoizedState)&&(ln=!0,pe&&(a=Hr,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Bu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);kn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Op(e,n,a){var s=lt,c=nn(),f=Mt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!kn((Bt||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Hu(Bp.bind(null,s,c,e),[e]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,qr(9,{destroy:void 0},zp.bind(null,s,c,a,n),null),jt===null)throw Error(r(349));f||(Fi&127)!==0||Pp(s,n,a)}return a}function Pp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=gl(),lt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function zp(e,n,a,s){n.value=a,n.getSnapshot=s,Fp(n)&&Ip(e)}function Bp(e,n,a){return a(function(){Fp(n)&&Ip(e)})}function Fp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Ip(e){var n=Ka(e,2);n!==null&&In(n,e,2)}function Fu(e){var n=Un();if(typeof e=="function"){var a=e;if(e=a(),rr){Ze(!0);try{a()}finally{Ze(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function Hp(e,n,a,s){return e.baseState=a,zu(e,Bt,typeof s=="function"?s:Ii)}function ox(e,n,a,s,c){if(Sl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Gp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Gp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var T=a(c,s),B=O.S;B!==null&&B(g,T),Vp(e,n,T)}catch(te){Iu(e,n,te)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,s),Vp(e,n,f)}catch(te){Iu(e,n,te)}}function Vp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){kp(e,n,s)},function(s){return Iu(e,n,s)}):kp(e,n,a)}function kp(e,n,a){n.status="fulfilled",n.value=a,jp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Gp(e,a)))}function Iu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,jp(n),n=n.next;while(n!==s)}e.action=null}function jp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Xp(e,n){return n}function qp(e,n){if(Mt){var a=jt.formState;if(a!==null){e:{var s=lt;if(Mt){if(qt){t:{for(var c=qt,f=ai;c.nodeType!==8;){if(!f){c=null;break t}if(c=si(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qt=si(c.nextSibling),s=c.data==="F!";break e}}da(s)}s=!1}s&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xp,lastRenderedState:n},a.queue=s,a=fm.bind(null,lt,s),s.dispatch=a,s=Fu(!1),f=Xu.bind(null,lt,!1,s.queue),s=Un(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=ox.bind(null,lt,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Wp(e){var n=nn();return Yp(n,Bt,e)}function Yp(e,n,a){if(n=zu(e,n,Xp)[0],e=_l(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=eo(n)}catch(g){throw g===Gr?ll:g}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,qr(9,{destroy:void 0},lx.bind(null,c,a),null)),[s,f,e]}function lx(e,n){e.action=n}function Zp(e){var n=nn(),a=Bt;if(a!==null)return Yp(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function qr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=lt.updateQueue,n===null&&(n=gl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Kp(){return nn().memoizedState}function xl(e,n,a,s){var c=Un();lt.flags|=e,c.memoizedState=qr(1|n,{destroy:void 0},a,s===void 0?null:s)}function yl(e,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Bt!==null&&s!==null&&Du(s,Bt.memoizedState.deps)?c.memoizedState=qr(n,f,a,s):(lt.flags|=e,c.memoizedState=qr(1|n,f,a,s))}function Qp(e,n){xl(8390656,8,e,n)}function Hu(e,n){yl(2048,8,e,n)}function cx(e){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=gl(),lt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Jp(e){var n=nn().memoizedState;return cx({ref:n,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function $p(e,n){return yl(4,2,e,n)}function em(e,n){return yl(4,4,e,n)}function tm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function nm(e,n,a){a=a!=null?a.concat([e]):null,yl(4,4,tm.bind(null,n,e),a)}function Gu(){}function im(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Du(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function am(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Du(n,s[1]))return s[0];if(s=e(),rr){Ze(!0);try{e()}finally{Ze(!1)}}return a.memoizedState=[s,n],s}function Vu(e,n,a){return a===void 0||(Fi&1073741824)!==0&&(xt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=rg(),lt.lanes|=e,Sa|=e,a)}function rm(e,n,a,s){return kn(a,n)?a:kr.current!==null?(e=Vu(e,a,s),kn(e,n)||(ln=!0),e):(Fi&42)===0||(Fi&1073741824)!==0&&(xt&261930)===0?(ln=!0,e.memoizedState=a):(e=rg(),lt.lanes|=e,Sa|=e,n)}function sm(e,n,a,s,c){var f=Y.p;Y.p=f!==0&&8>f?f:8;var g=O.T,T={};O.T=T,Xu(e,!1,n,a);try{var B=c(),te=O.S;if(te!==null&&te(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pe=ax(B,s);to(e,n,pe,Zn(e))}else to(e,n,s,Zn(e))}catch(_e){to(e,n,{then:function(){},status:"rejected",reason:_e},Zn())}finally{Y.p=f,g!==null&&T.types!==null&&(g.types=T.types),O.T=g}}function ux(){}function ku(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=om(e).queue;sm(e,c,n,q,a===null?ux:function(){return lm(e),a(s)})}function om(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function lm(e){var n=om(e);n.next===null&&(n=e.alternate.memoizedState),to(e,n.next.queue,{},Zn())}function ju(){return Mn(xo)}function cm(){return nn().memoizedState}function um(){return nn().memoizedState}function fx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=ma(a);var s=ga(n,e,a);s!==null&&(In(s,n,a),Ks(s,n,a)),n={cache:xu()},e.payload=n;return}n=n.return}}function dx(e,n,a){var s=Zn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sl(e)?dm(n,a):(a=lu(e,n,a,s),a!==null&&(In(a,e,s),hm(a,n,s)))}function fm(e,n,a){var s=Zn();to(e,n,a,s)}function to(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sl(e))dm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,g))return tl(e,n,c,0),jt===null&&el(),!1}catch{}finally{}if(a=lu(e,n,c,s),a!==null)return In(a,e,s),hm(a,n,s),!0}return!1}function Xu(e,n,a,s){if(s={lane:2,revertLane:bf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Sl(e)){if(n)throw Error(r(479))}else n=lu(e,a,s,2),n!==null&&In(n,e,2)}function Sl(e){var n=e.alternate;return e===lt||n!==null&&n===lt}function dm(e,n){jr=pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function hm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,xi(e,a)}}var no={readContext:Mn,use:vl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};no.useEffectEvent=Jt;var pm={readContext:Mn,use:vl,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Qp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,xl(4194308,4,tm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return xl(4194308,4,e,n)},useInsertionEffect:function(e,n){xl(4,2,e,n)},useMemo:function(e,n){var a=Un();n=n===void 0?null:n;var s=e();if(rr){Ze(!0);try{e()}finally{Ze(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Un();if(a!==void 0){var c=a(n);if(rr){Ze(!0);try{a(n)}finally{Ze(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=dx.bind(null,lt,e),[s.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:function(e){e=Fu(e);var n=e.queue,a=fm.bind(null,lt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Gu,useDeferredValue:function(e,n){var a=Un();return Vu(a,e,n)},useTransition:function(){var e=Fu(!1);return e=sm.bind(null,lt,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=lt,c=Un();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),jt===null)throw Error(r(349));(xt&127)!==0||Pp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Qp(Bp.bind(null,s,f,e),[e]),s.flags|=2048,qr(9,{destroy:void 0},zp.bind(null,s,f,a,n),null),a},useId:function(){var e=Un(),n=jt.identifierPrefix;if(Mt){var a=Mi,s=Si;a=(s&~(1<<32-Be(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ju,useFormState:qp,useActionState:qp,useOptimistic:function(e){var n=Un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Xu.bind(null,lt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Pu,useCacheRefresh:function(){return Un().memoizedState=fx.bind(null,lt)},useEffectEvent:function(e){var n=Un(),a={impl:e};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},qu={readContext:Mn,use:vl,useCallback:im,useContext:Mn,useEffect:Hu,useImperativeHandle:nm,useInsertionEffect:$p,useLayoutEffect:em,useMemo:am,useReducer:_l,useRef:Kp,useState:function(){return _l(Ii)},useDebugValue:Gu,useDeferredValue:function(e,n){var a=nn();return rm(a,Bt.memoizedState,e,n)},useTransition:function(){var e=_l(Ii)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Op,useId:cm,useHostTransitionStatus:ju,useFormState:Wp,useActionState:Wp,useOptimistic:function(e,n){var a=nn();return Hp(a,Bt,e,n)},useMemoCache:Pu,useCacheRefresh:um};qu.useEffectEvent=Jp;var mm={readContext:Mn,use:vl,useCallback:im,useContext:Mn,useEffect:Hu,useImperativeHandle:nm,useInsertionEffect:$p,useLayoutEffect:em,useMemo:am,useReducer:Bu,useRef:Kp,useState:function(){return Bu(Ii)},useDebugValue:Gu,useDeferredValue:function(e,n){var a=nn();return Bt===null?Vu(a,e,n):rm(a,Bt.memoizedState,e,n)},useTransition:function(){var e=Bu(Ii)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Op,useId:cm,useHostTransitionStatus:ju,useFormState:Zp,useActionState:Zp,useOptimistic:function(e,n){var a=nn();return Bt!==null?Hp(a,Bt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:um};mm.useEffectEvent=Jp;function Wu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=ma(s);c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,s),n!==null&&(In(n,e,s),Ks(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=ma(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(e,c,s),n!==null&&(In(n,e,s),Ks(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),s=ma(a);s.tag=2,n!=null&&(s.callback=n),n=ga(e,s,a),n!==null&&(In(n,e,a),Ks(n,e,a))}};function gm(e,n,a,s,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function vm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Yu.enqueueReplaceState(n,n.state,null)}function sr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function _m(e){$o(e)}function xm(e){console.error(e)}function ym(e){$o(e)}function Ml(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Sm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Zu(e,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Ml(e,n)},a}function Mm(e){return e=ma(e),e.tag=3,e}function Em(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Sm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Sm(n,a,s),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function hx(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Fr(n,a,c,!0),a=Xn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?Ol():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Sf(e,s,c)),!1;case 22:return a.flags|=65536,s===cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Sf(e,s,c)),!1}throw Error(r(435,a.tag))}return Sf(e,s,c),Ol(),!1}if(Mt)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==pu&&(e=Error(r(422),{cause:s}),Xs(ti(e,a)))):(s!==pu&&(n=Error(r(423),{cause:s}),Xs(ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ti(s,a),c=Zu(e.stateNode,s,c),Tu(e,c),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:s});if(f=ti(f,a),uo===null?uo=[f]:uo.push(f),$t!==4&&($t=2),n===null)return!0;s=ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Zu(a.stateNode,s,e),Tu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Mm(c),Em(c,e,a,s),Tu(a,c),!1}a=a.return}while(a!==null);return!1}var Ku=Error(r(461)),ln=!1;function En(e,n,a,s){n.child=e===null?Rp(n,null,a,s):ar(n,e.child,a,s)}function bm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return er(n),s=Uu(e,n,a,g,f,c),T=Lu(),e!==null&&!ln?(Nu(e,n,c),Hi(e,n,c)):(Mt&&T&&du(n),n.flags|=1,En(e,n,s,c),n.child)}function Tm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Am(e,n,f,s,c)):(e=il(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!rf(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(g,s)&&e.ref===n.ref)return Hi(e,n,c)}return n.flags|=1,e=Oi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Am(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Vs(f,s)&&e.ref===n.ref)if(ln=!1,n.pendingProps=s=f,rf(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Hi(e,n,c)}return Qu(e,n,a,s,c)}function Rm(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return wm(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ol(n,f!==null?f.cachePool:null),f!==null?Dp(n,f):Ru(),Up(n);else return s=n.lanes=536870912,wm(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(ol(n,f.cachePool),Dp(n,f),_a(),n.memoizedState=null):(e!==null&&ol(n,null),Ru(),_a());return En(e,n,c,a),n.child}function io(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function wm(e,n,a,s,c){var f=Su();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ol(n,null),Ru(),Up(n),e!==null&&Fr(e,n,s,!0),n.childLanes=c,null}function El(e,n){return n=Tl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Cm(e,n,a){return ar(n,e.child,null,a),e=El(n,n.pendingProps),e.flags|=2,qn(n),n.memoizedState=null,e}function px(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(s.mode==="hidden")return e=El(n,s),n.lanes=536870912,io(null,e);if(Cu(n),(e=qt)?(e=Gg(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=dp(e),a.return=n,n.child=a,Sn=n,qt=null)):e=null,e===null)throw da(n);return n.lanes=536870912,null}return El(n,s)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Cu(n),c)if(n.flags&256)n.flags&=-257,n=Cm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Fr(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(s=jt,s!==null&&(g=Er(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Ka(e,g),In(s,e,g),Ku;Ol(),n=Cm(e,n,a)}else e=f.treeContext,qt=si(g.nextSibling),Sn=n,Mt=!0,fa=null,ai=!1,e!==null&&mp(n,e),n=El(n,s),n.flags|=4096;return n}return e=Oi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Qu(e,n,a,s,c){return er(n),a=Uu(e,n,a,s,void 0,c),s=Lu(),e!==null&&!ln?(Nu(e,n,c),Hi(e,n,c)):(Mt&&s&&du(n),n.flags|=1,En(e,n,a,c),n.child)}function Dm(e,n,a,s,c,f){return er(n),n.updateQueue=null,a=Np(n,s,a,c),Lp(e),s=Lu(),e!==null&&!ln?(Nu(e,n,f),Hi(e,n,f)):(Mt&&s&&du(n),n.flags|=1,En(e,n,a,f),n.child)}function Um(e,n,a,s,c){if(er(n),n.stateNode===null){var f=Or,g=a.contextType;typeof g=="object"&&g!==null&&(f=Mn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Yu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Eu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Mn(g):Or,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Wu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Yu.enqueueReplaceState(f,f.state,null),Js(n,s,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=sr(a,T);f.props=B;var te=f.context,pe=a.contextType;g=Or,typeof pe=="object"&&pe!==null&&(g=Mn(pe));var _e=a.getDerivedStateFromProps;pe=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||te!==g)&&vm(n,f,s,g),pa=!1;var ae=n.memoizedState;f.state=ae,Js(n,s,f,c),Qs(),te=n.memoizedState,T||ae!==te||pa?(typeof _e=="function"&&(Wu(n,a,_e,s),te=n.memoizedState),(B=pa||gm(n,a,B,s,ae,te,g))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=te),f.props=s,f.state=te,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,bu(e,n),g=n.memoizedProps,pe=sr(a,g),f.props=pe,_e=n.pendingProps,ae=f.context,te=a.contextType,B=Or,typeof te=="object"&&te!==null&&(B=Mn(te)),T=a.getDerivedStateFromProps,(te=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==_e||ae!==B)&&vm(n,f,s,B),pa=!1,ae=n.memoizedState,f.state=ae,Js(n,s,f,c),Qs();var le=n.memoizedState;g!==_e||ae!==le||pa||e!==null&&e.dependencies!==null&&rl(e.dependencies)?(typeof T=="function"&&(Wu(n,a,T,s),le=n.memoizedState),(pe=pa||gm(n,a,pe,s,ae,le,B)||e!==null&&e.dependencies!==null&&rl(e.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,le,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,le,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),f.props=s,f.state=le,f.context=B,s=pe):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,bl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=ar(n,e.child,null,c),n.child=ar(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Hi(e,n,c),e}function Lm(e,n,a,s){return Ja(),n.flags|=256,En(e,n,a,s),n.child}var Ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $u(e){return{baseLanes:e,cachePool:Sp()}}function ef(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Yn),e}function Nm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(c?va(n):_a(),(e=qt)?(e=Gg(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ua!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=dp(e),a.return=n,n.child=a,Sn=n,qt=null)):e=null,e===null)throw da(n);return Bf(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(_a(),c=n.mode,T=Tl({mode:"hidden",children:T},c),s=Qa(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=$u(a),s.childLanes=ef(e,g,a),n.memoizedState=Ju,io(null,s)):(va(n),tf(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=nf(e,n,a)):n.memoizedState!==null?(_a(),n.child=e.child,n.flags|=128,n=null):(_a(),T=s.fallback,c=n.mode,s=Tl({mode:"visible",children:s.children},c),T=Qa(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,ar(n,e.child,null,a),s=n.child,s.memoizedState=$u(a),s.childLanes=ef(e,g,a),n.memoizedState=Ju,n=io(null,s));else if(va(n),Bf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var te=g.dgst;g=te,s=Error(r(419)),s.stack="",s.digest=g,Xs({value:s,source:null,stack:null}),n=nf(e,n,a)}else if(ln||Fr(e,n,a,!1),g=(a&e.childLanes)!==0,ln||g){if(g=jt,g!==null&&(s=Er(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Ka(e,s),In(g,e,s),Ku;zf(T)||Ol(),n=nf(e,n,a)}else zf(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,qt=si(T.nextSibling),Sn=n,Mt=!0,fa=null,ai=!1,e!==null&&mp(n,e),n=tf(n,s.children),n.flags|=4096);return n}return c?(_a(),T=s.fallback,c=n.mode,B=e.child,te=B.sibling,s=Oi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,te!==null?T=Oi(te,T):(T=Qa(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,io(null,s),s=n.child,T=e.child.memoizedState,T===null?T=$u(a):(c=T.cachePool,c!==null?(B=sn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Sp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=ef(e,g,a),n.memoizedState=Ju,io(e.child,s)):(va(n),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function tf(e,n){return n=Tl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Tl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function nf(e,n,a){return ar(n,e.child,null,a),e=tf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Om(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),vu(e.return,n,a)}function af(e,n,a,s,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Pm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,Me(tn,g),En(e,n,s,a),s=Mt?js:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Om(e,a,n);else if(e.tag===19)Om(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&hl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),af(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&hl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}af(n,!0,a,null,f,s);break;case"together":af(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Hi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Fr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Oi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function rf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&rl(e)))}function mx(e,n,a){switch(n.tag){case 3:Ue(n,n.stateNode.containerInfo),ha(n,sn,e.memoizedState.cache),Ja();break;case 27:case 5:et(n);break;case 4:Ue(n,n.stateNode.containerInfo);break;case 10:ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Nm(e,n,a):(va(n),e=Hi(e,n,a),e!==null?e.sibling:null);va(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Fr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Pm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Me(tn,tn.current),s)break;return null;case 22:return n.lanes=0,Rm(e,n,a,n.pendingProps);case 24:ha(n,sn,e.memoizedState.cache)}return Hi(e,n,a)}function zm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!rf(e,a)&&(n.flags&128)===0)return ln=!1,mx(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,Mt&&(n.flags&1048576)!==0&&pp(n,js,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=nr(n.elementType),n.type=e,typeof e=="function")cu(e)?(s=sr(e,s),n.tag=1,n=Um(null,n,e,s,a)):(n.tag=0,n=Qu(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===N){n.tag=11,n=bm(null,n,e,s,a);break e}else if(c===I){n.tag=14,n=Tm(null,n,e,s,a);break e}}throw n=fe(e)||e,Error(r(306,n,""))}}return n;case 0:return Qu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=sr(s,n.pendingProps),Um(e,n,s,c,a);case 3:e:{if(Ue(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,bu(e,n),Js(n,s,null,a);var g=n.memoizedState;if(s=g.cache,ha(n,sn,s),s!==f.cache&&_u(n,[sn],a,!0),Qs(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Lm(e,n,s,a);break e}else if(s!==c){c=ti(Error(r(424)),n),Xs(c),n=Lm(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qt=si(e.firstChild),Sn=n,Mt=!0,fa=null,ai=!0,a=Rp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ja(),s===c){n=Hi(e,n,a);break e}En(e,n,s,a)}n=n.child}return n;case 26:return bl(e,n),e===null?(a=Wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,s=Gl(ie.current).createElement(a),s[rn]=n,s[xn]=e,bn(s,a,e),Se(s),n.stateNode=s):n.memoizedState=Wg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return et(n),e===null&&Mt&&(s=n.stateNode=jg(n.type,n.pendingProps,ie.current),Sn=n,ai=!0,c=qt,Aa(n.type)?(Ff=c,qt=si(s.firstChild)):qt=c),En(e,n,n.pendingProps.children,a),bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((c=s=qt)&&(s=Xx(s,n.type,n.pendingProps,ai),s!==null?(n.stateNode=s,Sn=n,qt=si(s.firstChild),ai=!1,c=!0):c=!1),c||da(n)),et(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,s=f.children,Nf(c,f)?s=null:g!==null&&Nf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Uu(e,n,sx,null,null,a),xo._currentValue=c),bl(e,n),En(e,n,s,a),n.child;case 6:return e===null&&Mt&&((e=a=qt)&&(a=qx(a,n.pendingProps,ai),a!==null?(n.stateNode=a,Sn=n,qt=null,e=!0):e=!1),e||da(n)),null;case 13:return Nm(e,n,a);case 4:return Ue(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ar(n,null,s,a):En(e,n,s,a),n.child;case 11:return bm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ha(n,n.type,s.value),En(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,er(n),c=Mn(c),s=s(c),n.flags|=1,En(e,n,s,a),n.child;case 14:return Tm(e,n,n.type,n.pendingProps,a);case 15:return Am(e,n,n.type,n.pendingProps,a);case 19:return Pm(e,n,a);case 31:return px(e,n,a);case 22:return Rm(e,n,a,n.pendingProps);case 24:return er(n),s=Mn(sn),e===null?(c=Su(),c===null&&(c=jt,f=xu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Eu(n),ha(n,sn,c)):((e.lanes&a)!==0&&(bu(e,n),Js(n,null,null,a),Qs()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ha(n,sn,s)):(s=f.cache,ha(n,sn,s),s!==c.cache&&_u(n,[sn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Gi(e){e.flags|=4}function sf(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(cg())e.flags|=8192;else throw ir=cl,Mu}else e.flags&=-16777217}function Bm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jg(n))if(cg())e.flags|=8192;else throw ir=cl,Mu}function Al(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ot():536870912,e.lanes|=n,Kr|=n)}function ao(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Wt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function gx(e,n,a){var s=n.pendingProps;switch(hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(sn),Le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Br(n)?Gi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mu())),Wt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Gi(n),f!==null?(Wt(n),Bm(n,f)):(Wt(n),sf(n,c,null,s,a))):f?f!==e.memoizedState?(Gi(n),Wt(n),Bm(n,f)):(Wt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Gi(n),Wt(n),sf(n,c,e,s,a)),null;case 27:if(Tt(n),a=ie.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}e=Ee.current,Br(n)?gp(n):(e=jg(c,s,a),n.stateNode=e,Gi(n))}return Wt(n),null;case 5:if(Tt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Wt(n),null}if(f=Ee.current,Br(n))gp(n);else{var g=Gl(ie.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[rn]=n,f[xn]=s;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(bn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Gi(n)}}return Wt(n),sf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ie.current,Br(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Ng(e.nodeValue,a)),e||da(n,!0)}else e=Gl(e).createTextNode(s),e[rn]=n,n.stateNode=e}return Wt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Br(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),e=!1}else a=mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Wt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Br(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),c=!1}else c=mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Al(n,n.updateQueue),Wt(n),null);case 4:return Le(),e===null&&wf(n.stateNode.containerInfo),Wt(n),null;case 10:return Bi(n.type),Wt(n),null;case 19:if($(tn),s=n.memoizedState,s===null)return Wt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ao(s,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=hl(e),f!==null){for(n.flags|=128,ao(s,!1),e=f.updateQueue,n.updateQueue=e,Al(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)fp(a,e),a=a.sibling;return Me(tn,tn.current&1|2),Mt&&Pi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&b()>Ul&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304)}else{if(!c)if(e=hl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Al(n,e),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Mt)return Wt(n),null}else 2*b()-s.renderingStartTime>Ul&&a!==536870912&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=b(),e.sibling=null,a=tn.current,Me(tn,c?a&1|2:a&1),Mt&&Pi(n,s.treeForkCount),e):(Wt(n),null);case 22:case 23:return qn(n),wu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&Al(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&$(tr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(sn),Wt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function vx(e,n){switch(hu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bi(sn),Le(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Tt(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(r(340));Ja()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ja()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(tn),null;case 4:return Le(),null;case 10:return Bi(n.type),null;case 22:case 23:return qn(n),wu(),e!==null&&$(tr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Bi(sn),null;case 25:return null;default:return null}}function Fm(e,n){switch(hu(n),n.tag){case 3:Bi(sn),Le();break;case 26:case 27:case 5:Tt(n);break;case 4:Le();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:$(tn);break;case 10:Bi(n.type);break;case 22:case 23:qn(n),wu(),e!==null&&$(tr);break;case 24:Bi(sn)}}function ro(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(T){zt(n,n.return,T)}}function xa(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var B=a,te=T;try{te()}catch(pe){zt(c,B,pe)}}}s=s.next}while(s!==f)}}catch(pe){zt(n,n.return,pe)}}function Im(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Cp(n,a)}catch(s){zt(e,e.return,s)}}}function Hm(e,n,a){a.props=sr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){zt(e,n,s)}}function so(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){zt(e,n,c)}}function Ei(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(e,n,c)}else a.current=null}function Gm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){zt(e,e.return,c)}}function of(e,n,a){try{var s=e.stateNode;Ix(s,e.type,a,n),s[xn]=n}catch(c){zt(e,e.return,c)}}function Vm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function lf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Li));else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(cf(e,n,a),e=e.sibling;e!==null;)cf(e,n,a),e=e.sibling}function Rl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Rl(e,n,a),e=e.sibling;e!==null;)Rl(e,n,a),e=e.sibling}function km(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,s,a),n[rn]=e,n[xn]=a}catch(f){zt(e,e.return,f)}}var Vi=!1,cn=!1,uf=!1,jm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function _x(e,n){if(e=e.containerInfo,Uf=Yl,e=np(e),nu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,T=-1,B=-1,te=0,pe=0,_e=e,ae=null;t:for(;;){for(var le;_e!==a||c!==0&&_e.nodeType!==3||(T=g+c),_e!==f||s!==0&&_e.nodeType!==3||(B=g+s),_e.nodeType===3&&(g+=_e.nodeValue.length),(le=_e.firstChild)!==null;)ae=_e,_e=le;for(;;){if(_e===e)break t;if(ae===a&&++te===c&&(T=g),ae===f&&++pe===s&&(B=g),(le=_e.nextSibling)!==null)break;_e=ae,ae=_e.parentNode}_e=le}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lf={focusedElem:e,selectionRange:a},Yl=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ge=sr(a.type,c);e=s.getSnapshotBeforeUpdate(Ge,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(tt){zt(a,a.return,tt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Pf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function Xm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),s&4&&ro(5,a);break;case 1:if(ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){zt(a,a.return,g)}else{var c=sr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){zt(a,a.return,g)}}s&64&&Im(a),s&512&&so(a,a.return);break;case 3:if(ji(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cp(e,n)}catch(g){zt(a,a.return,g)}}break;case 27:n===null&&s&4&&km(a);case 26:case 5:ji(e,a),n===null&&s&4&&Gm(a),s&512&&so(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),s&4&&Ym(e,a);break;case 13:ji(e,a),s&4&&Zm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Rx.bind(null,a),Wx(e,a))));break;case 22:if(s=a.memoizedState!==null||Vi,!s){n=n!==null&&n.memoizedState!==null||cn,c=Vi;var f=cn;Vi=s,(cn=n)&&!f?Xi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),Vi=c,cn=f}break;case 30:break;default:ji(e,a)}}function qm(e){var n=e.alternate;n!==null&&(e.alternate=null,qm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Yt=null,Pn=!1;function ki(e,n,a){for(a=a.child;a!==null;)Wm(e,n,a),a=a.sibling}function Wm(e,n,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:cn||Ei(a,n),ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ei(a,n);var s=Yt,c=Pn;Aa(a.type)&&(Yt=a.stateNode,Pn=!1),ki(e,n,a),go(a.stateNode),Yt=s,Pn=c;break;case 5:cn||Ei(a,n);case 6:if(s=Yt,c=Pn,Yt=null,ki(e,n,a),Yt=s,Pn=c,Yt!==null)if(Pn)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Yt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Yt!==null&&(Pn?(e=Yt,Ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),as(e)):Ig(Yt,a.stateNode));break;case 4:s=Yt,c=Pn,Yt=a.stateNode.containerInfo,Pn=!0,ki(e,n,a),Yt=s,Pn=c;break;case 0:case 11:case 14:case 15:xa(2,a,n),cn||xa(4,a,n),ki(e,n,a);break;case 1:cn||(Ei(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Hm(a,n,s)),ki(e,n,a);break;case 21:ki(e,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,ki(e,n,a),cn=s;break;default:ki(e,n,a)}}function Ym(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{as(e)}catch(a){zt(n,n.return,a)}}}function Zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{as(e)}catch(a){zt(n,n.return,a)}}function xx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new jm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new jm),n;default:throw Error(r(435,e.tag))}}function wl(e,n){var a=xx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=wx.bind(null,e,s);s.then(c,c)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,g=n,T=g;e:for(;T!==null;){switch(T.tag){case 27:if(Aa(T.type)){Yt=T.stateNode,Pn=!1;break e}break;case 5:Yt=T.stateNode,Pn=!1;break e;case 3:case 4:Yt=T.stateNode.containerInfo,Pn=!0;break e}T=T.return}if(Yt===null)throw Error(r(160));Wm(f,g,c),Yt=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Km(n,e),n=n.sibling}var fi=null;function Km(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),Bn(e),s&4&&(xa(3,e,e.return),ro(3,e),xa(5,e,e.return));break;case 1:zn(n,e),Bn(e),s&512&&(cn||a===null||Ei(a,a.return)),s&64&&Vi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=fi;if(zn(n,e),Bn(e),s&512&&(cn||a===null||Ei(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Xa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,s,a),f[rn]=e,Se(f),s=f;break e;case"link":var g=Kg("link","href",c).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break t}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=Kg("meta","content",c).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break t}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=e,Se(f),s=f}e.stateNode=s}else Qg(c,e.type,e.stateNode);else e.stateNode=Zg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Qg(c,e.type,e.stateNode):Zg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&of(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),Bn(e),s&512&&(cn||a===null||Ei(a,a.return)),a!==null&&s&4&&of(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),Bn(e),s&512&&(cn||a===null||Ei(a,a.return)),e.flags&32){c=e.stateNode;try{Rr(c,"")}catch(Ge){zt(e,e.return,Ge)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,of(e,c,a!==null?a.memoizedProps:c)),s&1024&&(uf=!0);break;case 6:if(zn(n,e),Bn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Ge){zt(e,e.return,Ge)}}break;case 3:if(jl=null,c=fi,fi=Vl(n.containerInfo),zn(n,e),fi=c,Bn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{as(n.containerInfo)}catch(Ge){zt(e,e.return,Ge)}uf&&(uf=!1,Qm(e));break;case 4:s=fi,fi=Vl(e.stateNode.containerInfo),zn(n,e),Bn(e),fi=s;break;case 12:zn(n,e),Bn(e);break;case 31:zn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,wl(e,s)));break;case 13:zn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dl=b()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,wl(e,s)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,te=Vi,pe=cn;if(Vi=te||c,cn=pe||B,zn(n,e),cn=pe,Vi=te,Bn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Vi||cn||or(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=B.stateNode;var _e=B.memoizedProps.style,ae=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(Ge){zt(B,B.return,Ge)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ge){zt(B,B.return,Ge)}}}else if(n.tag===18){if(a===null){B=n;try{var le=B.stateNode;c?Hg(le,!0):Hg(B.stateNode,!1)}catch(Ge){zt(B,B.return,Ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,wl(e,a))));break;case 19:zn(n,e),Bn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,wl(e,s)));break;case 30:break;case 21:break;default:zn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Vm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=lf(e);Rl(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Rr(g,""),a.flags&=-33);var T=lf(e);Rl(e,T,g);break;case 3:case 4:var B=a.stateNode.containerInfo,te=lf(e);cf(e,te,B);break;default:throw Error(r(161))}}catch(pe){zt(e,e.return,pe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Qm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Qm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xm(e,n.alternate,n),n=n.sibling}function or(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),or(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Hm(n,n.return,a),or(n);break;case 27:go(n.stateNode);case 26:case 5:Ei(n,n.return),or(n);break;case 22:n.memoizedState===null&&or(n);break;case 30:or(n);break;default:or(n)}e=e.sibling}}function Xi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(c,f,a),ro(4,f);break;case 1:if(Xi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(te){zt(s,s.return,te)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)wp(B[c],T)}catch(te){zt(s,s.return,te)}}a&&g&64&&Im(f),so(f,f.return);break;case 27:km(f);case 26:case 5:Xi(c,f,a),a&&s===null&&g&4&&Gm(f),so(f,f.return);break;case 12:Xi(c,f,a);break;case 31:Xi(c,f,a),a&&g&4&&Ym(c,f);break;case 13:Xi(c,f,a),a&&g&4&&Zm(c,f);break;case 22:f.memoizedState===null&&Xi(c,f,a),so(f,f.return);break;case 30:break;default:Xi(c,f,a)}n=n.sibling}}function ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qs(a))}function df(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e))}function di(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Jm(e,n,a,s),n=n.sibling}function Jm(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:di(e,n,a,s),c&2048&&ro(9,n);break;case 1:di(e,n,a,s);break;case 3:di(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e)));break;case 12:if(c&2048){di(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){zt(n,n.return,B)}}else di(e,n,a,s);break;case 31:di(e,n,a,s);break;case 13:di(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?di(e,n,a,s):oo(e,n):f._visibility&2?di(e,n,a,s):(f._visibility|=2,Wr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ff(g,n);break;case 24:di(e,n,a,s),c&2048&&df(n.alternate,n);break;default:di(e,n,a,s)}}function Wr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,T=a,B=s,te=g.flags;switch(g.tag){case 0:case 11:case 15:Wr(f,g,T,B,c),ro(8,g);break;case 23:break;case 22:var pe=g.stateNode;g.memoizedState!==null?pe._visibility&2?Wr(f,g,T,B,c):oo(f,g):(pe._visibility|=2,Wr(f,g,T,B,c)),c&&te&2048&&ff(g.alternate,g);break;case 24:Wr(f,g,T,B,c),c&&te&2048&&df(g.alternate,g);break;default:Wr(f,g,T,B,c)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:oo(a,s),c&2048&&ff(s.alternate,s);break;case 24:oo(a,s),c&2048&&df(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Yr(e,n,a){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)$m(e,n,a),e=e.sibling}function $m(e,n,a){switch(e.tag){case 26:Yr(e,n,a),e.flags&lo&&e.memoizedState!==null&&ry(a,fi,e.memoizedState,e.memoizedProps);break;case 5:Yr(e,n,a);break;case 3:case 4:var s=fi;fi=Vl(e.stateNode.containerInfo),Yr(e,n,a),fi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,Yr(e,n,a),lo=s):Yr(e,n,a));break;default:Yr(e,n,a)}}function eg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,ng(s,e)}eg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tg(e),e=e.sibling}function tg(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&xa(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cl(e)):co(e);break;default:co(e)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,ng(s,e)}eg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:xa(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}e=e.sibling}}function ng(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else e:for(a=e;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(qm(s),s===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var yx={getCacheForType:function(e){var n=Mn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},Sx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,jt=null,gt=null,xt=0,Pt=0,Wn=null,ya=!1,Zr=!1,hf=!1,qi=0,$t=0,Sa=0,lr=0,pf=0,Yn=0,Kr=0,uo=null,Fn=null,mf=!1,Dl=0,ig=0,Ul=1/0,Ll=null,Ma=null,dn=0,Ea=null,Qr=null,Wi=0,gf=0,vf=null,ag=null,fo=0,_f=null;function Zn(){return(Dt&2)!==0&&xt!==0?xt&-xt:O.T!==null?bf():ja()}function rg(){if(Yn===0)if((xt&536870912)===0||Mt){var e=De;De<<=1,(De&3932160)===0&&(De=262144),Yn=e}else Yn=536870912;return e=Xn.current,e!==null&&(e.flags|=32),Yn}function In(e,n,a){(e===jt&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),ba(e,xt,Yn,!1)),Cn(e,a),((Dt&2)===0||e!==jt)&&(e===jt&&((Dt&2)===0&&(lr|=a),$t===4&&ba(e,xt,Yn,!1)),bi(e))}function sg(e,n,a){if((Dt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||He(e,n),c=s?bx(e,n):yf(e,n,!0),f=s;do{if(c===0){Zr&&!s&&ba(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Mx(a)){c=yf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var T=e;c=uo;var B=T.current.memoizedState.isDehydrated;if(B&&(Jr(T,g).flags|=256),g=yf(T,g,!1),g!==2){if(hf&&!B){T.errorRecoveryDisabledLanes|=f,lr|=f,c=4;break e}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Jr(e,0),ba(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ba(s,n,Yn,!ya);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Dl+300-b(),10<c)){if(ba(s,n,Yn,!ya),xe(s,0,!0)!==0)break e;Wi=n,s.timeoutHandle=Bg(og.bind(null,s,a,Fn,Ll,mf,n,Yn,lr,Kr,ya,f,"Throttled",-0,0),c);break e}og(s,a,Fn,Ll,mf,n,Yn,lr,Kr,ya,f,null,-0,0)}}break}while(!0);bi(e)}function og(e,n,a,s,c,f,g,T,B,te,pe,_e,ae,le){if(e.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},$m(n,f,_e);var Ge=(f&62914560)===f?Dl-b():(f&4194048)===f?ig-b():0;if(Ge=sy(_e,Ge),Ge!==null){Wi=f,e.cancelPendingCommit=Ge(mg.bind(null,e,n,f,a,s,c,g,T,B,pe,_e,null,ae,le)),ba(e,f,g,!te);return}}mg(e,n,f,a,s,c,g,T,B)}function Mx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(e,n,a,s){n&=~pf,n&=~lr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Be(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Ls(e,a,n)}function Nl(){return(Dt&6)===0?(ho(0),!1):!0}function xf(){if(gt!==null){if(Pt===0)var e=gt.return;else e=gt,zi=$a=null,Ou(e),Vr=null,Ys=0,e=gt;for(;e!==null;)Fm(e.alternate,e),e=e.return;gt=null}}function Jr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wi=0,xf(),jt=e,gt=a=Oi(e.current,null),xt=n,Pt=0,Wn=null,ya=!1,Zr=He(e,n),hf=!1,Kr=Yn=pf=lr=Sa=$t=0,Fn=uo=null,mf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Be(s),f=1<<c;n|=e[c],s&=~f}return qi=n,el(),a}function lg(e,n){lt=null,O.H=no,n===Gr||n===ll?(n=bp(),Pt=3):n===Mu?(n=bp(),Pt=4):Pt=n===Ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,gt===null&&($t=1,Ml(e,ti(n,e.current)))}function cg(){var e=Xn.current;return e===null?!0:(xt&4194048)===xt?ri===null:(xt&62914560)===xt||(xt&536870912)!==0?e===ri:!1}function ug(){var e=O.H;return O.H=no,e===null?no:e}function fg(){var e=O.A;return O.A=yx,e}function Ol(){$t=4,ya||(xt&4194048)!==xt&&Xn.current!==null||(Zr=!0),(Sa&134217727)===0&&(lr&134217727)===0||jt===null||ba(jt,xt,Yn,!1)}function yf(e,n,a){var s=Dt;Dt|=2;var c=ug(),f=fg();(jt!==e||xt!==n)&&(Ll=null,Jr(e,n)),n=!1;var g=$t;e:do try{if(Pt!==0&&gt!==null){var T=gt,B=Wn;switch(Pt){case 8:xf(),g=6;break e;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var te=Pt;if(Pt=0,Wn=null,$r(e,T,B,te),a&&Zr){g=0;break e}break;default:te=Pt,Pt=0,Wn=null,$r(e,T,B,te)}}Ex(),g=$t;break}catch(pe){lg(e,pe)}while(!0);return n&&e.shellSuspendCounter++,zi=$a=null,Dt=s,O.H=c,O.A=f,gt===null&&(jt=null,xt=0,el()),g}function Ex(){for(;gt!==null;)dg(gt)}function bx(e,n){var a=Dt;Dt|=2;var s=ug(),c=fg();jt!==e||xt!==n?(Ll=null,Ul=b()+500,Jr(e,n)):Zr=He(e,n);e:do try{if(Pt!==0&&gt!==null){n=gt;var f=Wn;t:switch(Pt){case 1:Pt=0,Wn=null,$r(e,n,f,1);break;case 2:case 9:if(Mp(f)){Pt=0,Wn=null,hg(n);break}n=function(){Pt!==2&&Pt!==9||jt!==e||(Pt=7),bi(e)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:Mp(f)?(Pt=0,Wn=null,hg(n)):(Pt=0,Wn=null,$r(e,n,f,7));break;case 5:var g=null;switch(gt.tag){case 26:g=gt.memoizedState;case 5:case 27:var T=gt;if(g?Jg(g):T.stateNode.complete){Pt=0,Wn=null;var B=T.sibling;if(B!==null)gt=B;else{var te=T.return;te!==null?(gt=te,Pl(te)):gt=null}break t}}Pt=0,Wn=null,$r(e,n,f,5);break;case 6:Pt=0,Wn=null,$r(e,n,f,6);break;case 8:xf(),$t=6;break e;default:throw Error(r(462))}}Tx();break}catch(pe){lg(e,pe)}while(!0);return zi=$a=null,O.H=s,O.A=c,Dt=a,gt!==null?0:(jt=null,xt=0,el(),$t)}function Tx(){for(;gt!==null&&!Zt();)dg(gt)}function dg(e){var n=zm(e.alternate,e,qi);e.memoizedProps=e.pendingProps,n===null?Pl(e):gt=n}function hg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Dm(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=Dm(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Ou(n);default:Fm(a,n),n=gt=fp(n,qi),n=zm(a,n,qi)}e.memoizedProps=e.pendingProps,n===null?Pl(e):gt=n}function $r(e,n,a,s){zi=$a=null,Ou(n),Vr=null,Ys=0;var c=n.return;try{if(hx(e,c,n,a,xt)){$t=1,Ml(e,ti(a,e.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;$t=1,Ml(e,ti(a,e.current)),gt=null;return}n.flags&32768?(Mt||s===1?e=!0:Zr||(xt&536870912)!==0?e=!1:(ya=e=!0,(s===2||s===9||s===3||s===6)&&(s=Xn.current,s!==null&&s.tag===13&&(s.flags|=16384))),pg(n,e)):Pl(n)}function Pl(e){var n=e;do{if((n.flags&32768)!==0){pg(n,ya);return}e=n.return;var a=gx(n.alternate,n,qi);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);$t===0&&($t=5)}function pg(e,n){do{var a=vx(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);$t=6,gt=null}function mg(e,n,a,s,c,f,g,T,B){e.cancelPendingCommit=null;do zl();while(dn!==0);if((Dt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ou,$n(e,a,f,g,T,B),e===jt&&(gt=jt=null,xt=0),Qr=n,Ea=e,Wi=a,gf=f,vf=c,ag=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cx(he,function(){return yg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=Y.p,Y.p=2,g=Dt,Dt|=4;try{_x(e,n,a)}finally{Dt=g,Y.p=c,O.T=s}}dn=1,gg(),vg(),_g()}}function gg(){if(dn===1){dn=0;var e=Ea,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=Y.p;Y.p=2;var c=Dt;Dt|=4;try{Km(n,e);var f=Lf,g=np(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&tp(T.ownerDocument.documentElement,T)){if(B!==null&&nu(T)){var te=B.start,pe=B.end;if(pe===void 0&&(pe=te),"selectionStart"in T)T.selectionStart=te,T.selectionEnd=Math.min(pe,T.value.length);else{var _e=T.ownerDocument||document,ae=_e&&_e.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),Ge=T.textContent.length,tt=Math.min(B.start,Ge),It=B.end===void 0?tt:Math.min(B.end,Ge);!le.extend&&tt>It&&(g=It,It=tt,tt=g);var K=ep(T,tt),k=ep(T,It);if(K&&k&&(le.rangeCount!==1||le.anchorNode!==K.node||le.anchorOffset!==K.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var ee=_e.createRange();ee.setStart(K.node,K.offset),le.removeAllRanges(),tt>It?(le.addRange(ee),le.extend(k.node,k.offset)):(ee.setEnd(k.node,k.offset),le.addRange(ee))}}}}for(_e=[],le=T;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var ve=_e[T];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Yl=!!Uf,Lf=Uf=null}finally{Dt=c,Y.p=s,O.T=a}}e.current=n,dn=2}}function vg(){if(dn===2){dn=0;var e=Ea,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=Y.p;Y.p=2;var c=Dt;Dt|=4;try{Xm(e,n.alternate,n)}finally{Dt=c,Y.p=s,O.T=a}}dn=3}}function _g(){if(dn===4||dn===3){dn=0,z();var e=Ea,n=Qr,a=Wi,s=ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,Qr=Ea=null,xg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ma=null),Tr(a),n=n.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=Y.p,Y.p=2,O.T=null;try{for(var f=e.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{O.T=n,Y.p=c}}(Wi&3)!==0&&zl(),bi(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===_f?fo++:(fo=0,_f=e):fo=0,ho(0)}}function xg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qs(n)))}function zl(){return gg(),vg(),_g(),yg()}function yg(){if(dn!==5)return!1;var e=Ea,n=gf;gf=0;var a=Tr(Wi),s=O.T,c=Y.p;try{Y.p=32>a?32:a,O.T=null,a=vf,vf=null;var f=Ea,g=Wi;if(dn=0,Qr=Ea=null,Wi=0,(Dt&6)!==0)throw Error(r(331));var T=Dt;if(Dt|=4,tg(f.current),Jm(f,f.current,g,a),Dt=T,ho(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Ae,f)}catch{}return!0}finally{Y.p=c,O.T=s,xg(e,n)}}function Sg(e,n,a){n=ti(a,n),n=Zu(e.stateNode,n,2),e=ga(e,n,2),e!==null&&(Cn(e,2),bi(e))}function zt(e,n,a){if(e.tag===3)Sg(e,e,a);else for(;n!==null;){if(n.tag===3){Sg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){e=ti(a,e),a=Mm(2),s=ga(n,a,2),s!==null&&(Em(a,s,n,e),Cn(s,2),bi(s));break}}n=n.return}}function Sf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Sx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(hf=!0,c.add(a),e=Ax.bind(null,e,n,a),n.then(e,e))}function Ax(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,jt===e&&(xt&a)===a&&($t===4||$t===3&&(xt&62914560)===xt&&300>b()-Dl?(Dt&2)===0&&Jr(e,0):pf|=a,Kr===xt&&(Kr=0)),bi(e)}function Mg(e,n){n===0&&(n=Ot()),e=Ka(e,n),e!==null&&(Cn(e,n),bi(e))}function Rx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Mg(e,a)}function wx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Mg(e,a)}function Cx(e,n){return rt(e,n)}var Bl=null,es=null,Mf=!1,Fl=!1,Ef=!1,Ta=0;function bi(e){e!==es&&e.next===null&&(es===null?Bl=es=e:es=es.next=e),Fl=!0,Mf||(Mf=!0,Ux())}function ho(e,n){if(!Ef&&Fl){Ef=!0;do for(var a=!1,s=Bl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Be(42|e)+1)-1,f&=c&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ag(s,f))}else f=xt,f=xe(s,s===jt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||He(s,f)||(a=!0,Ag(s,f));s=s.next}while(a);Ef=!1}}function Dx(){Eg()}function Eg(){Fl=Mf=!1;var e=0;Ta!==0&&Gx()&&(e=Ta);for(var n=b(),a=null,s=Bl;s!==null;){var c=s.next,f=bg(s,n);f===0?(s.next=null,a===null?Bl=c:a.next=c,c===null&&(es=a)):(a=s,(e!==0||(f&3)!==0)&&(Fl=!0)),s=c}dn!==0&&dn!==5||ho(e),Ta!==0&&(Ta=0)}function bg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Be(f),T=1<<g,B=c[g];B===-1?((T&a)===0||(T&s)!==0)&&(c[g]=it(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=jt,a=xt,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Qt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||He(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Qt(s),Tr(a)){case 2:case 8:a=be;break;case 32:a=he;break;case 268435456:a=we;break;default:a=he}return s=Tg.bind(null,e),a=rt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Qt(s),e.callbackPriority=2,e.callbackNode=null,2}function Tg(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zl()&&e.callbackNode!==a)return null;var s=xt;return s=xe(e,e===jt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(sg(e,s,n),bg(e,b()),e.callbackNode!=null&&e.callbackNode===a?Tg.bind(null,e):null)}function Ag(e,n){if(zl())return null;sg(e,n,!0)}function Ux(){kx(function(){(Dt&6)!==0?rt(ge,Dx):Eg()})}function bf(){if(Ta===0){var e=Ir;e===0&&(e=Re,Re<<=1,(Re&261888)===0&&(Re=256)),Ta=e}return Ta}function Rg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qo(""+e)}function wg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Lx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Rg((c[xn]||null).action),g=s.submitter;g&&(n=(n=g[xn]||null)?Rg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new Ko("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ta!==0){var B=g?wg(c,g):new FormData(c);ku(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=g?wg(c,g):new FormData(c),ku(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Tf=0;Tf<su.length;Tf++){var Af=su[Tf],Nx=Af.toLowerCase(),Ox=Af[0].toUpperCase()+Af.slice(1);ui(Nx,"on"+Ox)}ui(rp,"onAnimationEnd"),ui(sp,"onAnimationIteration"),ui(op,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(K0,"onTransitionRun"),ui(Q0,"onTransitionStart"),ui(J0,"onTransitionCancel"),ui(lp,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Cg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],B=T.instance,te=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=te;try{f(c)}catch(pe){$o(pe)}c.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(T=s[g],B=T.instance,te=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=te;try{f(c)}catch(pe){$o(pe)}c.currentTarget=null,f=B}}}}function vt(e,n){var a=n[Os];a===void 0&&(a=n[Os]=new Set);var s=e+"__bubble";a.has(s)||(Dg(n,e,2,!1),a.add(s))}function Rf(e,n,a){var s=0;n&&(s|=4),Dg(a,e,s,n)}var Il="_reactListening"+Math.random().toString(36).slice(2);function wf(e){if(!e[Il]){e[Il]=!0,Oe.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||Rf(a,!1,e),Rf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Il]||(n[Il]=!0,Rf("selectionchange",!1,n))}}function Dg(e,n,a,s){switch(rv(n)){case 2:var c=cy;break;case 8:c=uy;break;default:c=kf}a=c.bind(null,n,a,e),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Cf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=W(T),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue e}T=T.parentNode}}s=s.return}Ph(function(){var te=f,pe=Xc(a),_e=[];e:{var ae=cp.get(e);if(ae!==void 0){var le=Ko,Ge=e;switch(e){case"keypress":if(Yo(a)===0)break e;case"keydown":case"keyup":le=w0;break;case"focusin":Ge="focus",le=Qc;break;case"focusout":Ge="blur",le=Qc;break;case"beforeblur":case"afterblur":le=Qc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=g0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=U0;break;case rp:case sp:case op:le=x0;break;case lp:le=N0;break;case"scroll":case"scrollend":le=p0;break;case"wheel":le=P0;break;case"copy":case"cut":case"paste":le=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Hh;break;case"toggle":case"beforetoggle":le=B0}var tt=(n&4)!==0,It=!tt&&(e==="scroll"||e==="scrollend"),K=tt?ae!==null?ae+"Capture":null:ae;tt=[];for(var k=te,ee;k!==null;){var ve=k;if(ee=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ee===null||K===null||(ve=Ps(k,K),ve!=null&&tt.push(mo(k,ve,ee))),It)break;k=k.return}0<tt.length&&(ae=new le(ae,Ge,null,a,pe),_e.push({event:ae,listeners:tt}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ae&&a!==jc&&(Ge=a.relatedTarget||a.fromElement)&&(W(Ge)||Ge[la]))break e;if((le||ae)&&(ae=pe.window===pe?pe:(ae=pe.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(Ge=a.relatedTarget||a.toElement,le=te,Ge=Ge?W(Ge):null,Ge!==null&&(It=u(Ge),tt=Ge.tag,Ge!==It||tt!==5&&tt!==27&&tt!==6)&&(Ge=null)):(le=null,Ge=te),le!==Ge)){if(tt=Fh,ve="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(tt=Hh,ve="onPointerLeave",K="onPointerEnter",k="pointer"),It=le==null?ae:se(le),ee=Ge==null?ae:se(Ge),ae=new tt(ve,k+"leave",le,a,pe),ae.target=It,ae.relatedTarget=ee,ve=null,W(pe)===te&&(tt=new tt(K,k+"enter",Ge,a,pe),tt.target=ee,tt.relatedTarget=It,ve=tt),It=ve,le&&Ge)t:{for(tt=zx,K=le,k=Ge,ee=0,ve=K;ve;ve=tt(ve))ee++;ve=0;for(var $e=k;$e;$e=tt($e))ve++;for(;0<ee-ve;)K=tt(K),ee--;for(;0<ve-ee;)k=tt(k),ve--;for(;ee--;){if(K===k||k!==null&&K===k.alternate){tt=K;break t}K=tt(K),k=tt(k)}tt=null}else tt=null;le!==null&&Ug(_e,ae,le,tt,!1),Ge!==null&&It!==null&&Ug(_e,It,Ge,tt,!0)}}e:{if(ae=te?se(te):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var At=Yh;else if(qh(ae))if(Zh)At=W0;else{At=X0;var je=j0}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&kc(te.elementType)&&(At=Yh):At=q0;if(At&&(At=At(e,te))){Wh(_e,At,a,pe);break e}je&&je(e,ae,te),e==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&fn(ae,"number",ae.value)}switch(je=te?se(te):window,e){case"focusin":(qh(je)||je.contentEditable==="true")&&(Ur=je,iu=te,ks=null);break;case"focusout":ks=iu=Ur=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,ip(_e,a,pe);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":ip(_e,a,pe)}var ct;if($c)e:{switch(e){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Dr?jh(e,a)&&(yt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Gh&&a.locale!=="ko"&&(Dr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Dr&&(ct=zh()):(ca=pe,Yc="value"in ca?ca.value:ca.textContent,Dr=!0)),je=Hl(te,yt),0<je.length&&(yt=new Ih(yt,e,null,a,pe),_e.push({event:yt,listeners:je}),ct?yt.data=ct:(ct=Xh(a),ct!==null&&(yt.data=ct)))),(ct=I0?H0(e,a):G0(e,a))&&(yt=Hl(te,"onBeforeInput"),0<yt.length&&(je=new Ih("onBeforeInput","beforeinput",null,a,pe),_e.push({event:je,listeners:yt}),je.data=ct)),Lx(_e,e,te,a,pe)}Cg(_e,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Hl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ps(e,a),c!=null&&s.unshift(mo(e,c,f)),c=Ps(e,n),c!=null&&s.push(mo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function zx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ug(e,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,B=T.alternate,te=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||te===null||(B=te,c?(te=Ps(a,f),te!=null&&g.unshift(mo(a,te,B))):c||(te=Ps(a,f),te!=null&&g.push(mo(a,te,B)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Bx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function Lg(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(Fx,"")}function Ng(e,n){return n=Lg(n),Lg(e)===n}function Ft(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Rr(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Rr(e,""+s);break;case"className":Nt(e,"class",s);break;case"tabIndex":Nt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(e,a,s);break;case"style":Nh(e,s,f);break;case"data":if(n!=="object"){Nt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=qo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ft(e,n,"name",c.name,c,null),Ft(e,n,"formEncType",c.formEncType,c,null),Ft(e,n,"formMethod",c.formMethod,c,null),Ft(e,n,"formTarget",c.formTarget,c,null)):(Ft(e,n,"encType",c.encType,c,null),Ft(e,n,"method",c.method,c,null),Ft(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=qo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Li);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=qo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":vt("beforetoggle",e),vt("toggle",e),kt(e,"popover",s);break;case"xlinkActuate":mt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":mt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":mt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":mt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":mt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":mt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":mt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":mt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":mt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":kt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=d0.get(a)||a,kt(e,a,s))}}function Df(e,n,a,s,c,f){switch(a){case"style":Nh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Rr(e,s):(typeof s=="number"||typeof s=="bigint")&&Rr(e,""+s);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ve.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):kt(e,a,s)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",e),vt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ft(e,n,f,g,a,null)}}c&&Ft(e,n,"srcSet",a.srcSet,a,null),s&&Ft(e,n,"src",a.src,a,null);return;case"input":vt("invalid",e);var T=f=g=c=null,B=null,te=null;for(s in a)if(a.hasOwnProperty(s)){var pe=a[s];if(pe!=null)switch(s){case"name":c=pe;break;case"type":g=pe;break;case"checked":B=pe;break;case"defaultChecked":te=pe;break;case"value":f=pe;break;case"defaultValue":T=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Ft(e,n,s,pe,a,null)}}Dn(e,f,T,B,te,g,c,!1);return;case"select":vt("invalid",e),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:Ft(e,n,c,T,a,null)}n=f,a=g,e.multiple=!!s,n!=null?en(e,!!s,n,!1):a!=null&&en(e,!!s,a,!0);return;case"textarea":vt("invalid",e),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ft(e,n,g,T,a,null)}yi(e,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ft(e,n,B,s,a,null)}return;case"dialog":vt("beforetoggle",e),vt("toggle",e),vt("cancel",e),vt("close",e);break;case"iframe":case"object":vt("load",e);break;case"video":case"audio":for(s=0;s<po.length;s++)vt(po[s],e);break;case"image":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"embed":case"source":case"link":vt("error",e),vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(s=a[te],s!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ft(e,n,te,s,a,null)}return;default:if(kc(n)){for(pe in a)a.hasOwnProperty(pe)&&(s=a[pe],s!==void 0&&Df(e,n,pe,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ft(e,n,T,s,a,null))}function Ix(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,T=null,B=null,te=null,pe=null;for(le in a){var _e=a[le];if(a.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=_e;default:s.hasOwnProperty(le)||Ft(e,n,le,null,s,_e)}}for(var ae in s){var le=s[ae];if(_e=a[ae],s.hasOwnProperty(ae)&&(le!=null||_e!=null))switch(ae){case"type":f=le;break;case"name":c=le;break;case"checked":te=le;break;case"defaultChecked":pe=le;break;case"value":g=le;break;case"defaultValue":T=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==_e&&Ft(e,n,ae,le,s,_e)}}Tn(e,g,T,B,te,pe,f,c);return;case"select":le=g=T=ae=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":le=B;default:s.hasOwnProperty(f)||Ft(e,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":ae=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==B&&Ft(e,n,c,f,s,B)}n=T,a=g,s=le,ae!=null?en(e,!!a,ae,!1):!!s!=!!a&&(n!=null?en(e,!!a,n,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":le=ae=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ft(e,n,T,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":ae=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ft(e,n,g,c,s,f)}Ar(e,ae,le);return;case"option":for(var Ge in a)if(ae=a[Ge],a.hasOwnProperty(Ge)&&ae!=null&&!s.hasOwnProperty(Ge))switch(Ge){case"selected":e.selected=!1;break;default:Ft(e,n,Ge,null,s,ae)}for(B in s)if(ae=s[B],le=a[B],s.hasOwnProperty(B)&&ae!==le&&(ae!=null||le!=null))switch(B){case"selected":e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Ft(e,n,B,ae,s,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ae=a[tt],a.hasOwnProperty(tt)&&ae!=null&&!s.hasOwnProperty(tt)&&Ft(e,n,tt,null,s,ae);for(te in s)if(ae=s[te],le=a[te],s.hasOwnProperty(te)&&ae!==le&&(ae!=null||le!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:Ft(e,n,te,ae,s,le)}return;default:if(kc(n)){for(var It in a)ae=a[It],a.hasOwnProperty(It)&&ae!==void 0&&!s.hasOwnProperty(It)&&Df(e,n,It,void 0,s,ae);for(pe in s)ae=s[pe],le=a[pe],!s.hasOwnProperty(pe)||ae===le||ae===void 0&&le===void 0||Df(e,n,pe,ae,s,le);return}}for(var K in a)ae=a[K],a.hasOwnProperty(K)&&ae!=null&&!s.hasOwnProperty(K)&&Ft(e,n,K,null,s,ae);for(_e in s)ae=s[_e],le=a[_e],!s.hasOwnProperty(_e)||ae===le||ae==null&&le==null||Ft(e,n,_e,ae,s,le)}function Og(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,T=c.duration;if(f&&T&&Og(g)){for(g=0,T=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],te=B.startTime;if(te>T)break;var pe=B.transferSize,_e=B.initiatorType;pe&&Og(_e)&&(B=B.responseEnd,g+=pe*(B<T?1:(T-te)/(B-te)))}if(--s,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uf=null,Lf=null;function Gl(e){return e.nodeType===9?e:e.ownerDocument}function Pg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Nf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Of=null;function Gx(){var e=window.event;return e&&e.type==="popstate"?e===Of?!1:(Of=e,!0):(Of=null,!1)}var Bg=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(e){return Fg.resolve(null).then(e).catch(jx)}:Bg;function jx(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Ig(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),as(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[Xa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&go(e.ownerDocument.body);a=c}while(a);as(n)}function Hg(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Pf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Xa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=si(e.nextSibling),e===null)break}return null}function qx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=si(e.nextSibling),e===null))return null;return e}function Gg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=si(e.nextSibling),e===null))return null;return e}function zf(e){return e.data==="$?"||e.data==="$~"}function Bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ff=null;function Vg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function kg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function jg(e,n,a){switch(n=Gl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var oi=new Map,Xg=new Set;function Vl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=Y.d;Y.d={f:Yx,r:Zx,D:Kx,C:Qx,L:Jx,m:$x,X:ty,S:ey,M:ny};function Yx(){var e=Yi.f(),n=Nl();return e||n}function Zx(e){var n=re(e);n!==null&&n.tag===5&&n.type==="form"?lm(n):Yi.r(e)}var ts=typeof document>"u"?null:document;function qg(e,n,a){var s=ts;if(s&&typeof n=="string"&&n){var c=_t(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Xg.has(c)||(Xg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),bn(n,"link",e),Se(n),s.head.appendChild(n)))}}function Kx(e){Yi.D(e),qg("dns-prefetch",e,null)}function Qx(e,n){Yi.C(e,n),qg("preconnect",e,n)}function Jx(e,n,a){Yi.L(e,n,a);var s=ts;if(s&&e&&n){var c='link[rel="preload"][as="'+_t(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+_t(a.imageSizes)+'"]')):c+='[href="'+_t(e)+'"]';var f=c;switch(n){case"style":f=ns(e);break;case"script":f=is(e)}oi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),oi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(vo(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),bn(n,"link",e),Se(n),s.head.appendChild(n)))}}function $x(e,n){Yi.m(e,n);var a=ts;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_t(s)+'"][href="'+_t(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(e)}if(!oi.has(f)&&(e=_({rel:"modulepreload",href:e},n),oi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),bn(s,"link",e),Se(s),a.head.appendChild(s)}}}function ey(e,n,a){Yi.S(e,n,a);var s=ts;if(s&&e){var c=Z(s).hoistableStyles,f=ns(e);n=n||"default";var g=c.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(vo(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=oi.get(f))&&If(e,a);var B=g=s.createElement("link");Se(B),bn(B,"link",e),B._p=new Promise(function(te,pe){B.onload=te,B.onerror=pe}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,kl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(f,g)}}}function ty(e,n){Yi.X(e,n);var a=ts;if(a&&e){var s=Z(a).hoistableScripts,c=is(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=_({src:e,async:!0},n),(n=oi.get(c))&&Hf(e,n),f=a.createElement("script"),Se(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function ny(e,n){Yi.M(e,n);var a=ts;if(a&&e){var s=Z(a).hoistableScripts,c=is(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&Hf(e,n),f=a.createElement("script"),Se(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Wg(e,n,a,s){var c=(c=ie.current)?Vl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=Z(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ns(a.href);var f=Z(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(vo(e)))&&!f._p&&(g.instance=f,g.state.loading=5),oi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(e,a),f||iy(c,e,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=Z(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ns(e){return'href="'+_t(e)+'"'}function vo(e){return'link[rel="stylesheet"]['+e+"]"}function Yg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function iy(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),Se(n),e.head.appendChild(n))}function is(e){return'[src="'+_t(e)+'"]'}function _o(e){return"script[async]"+e}function Zg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+_t(a.href)+'"]');if(s)return n.instance=s,Se(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Se(s),bn(s,"style",c),kl(s,a.precedence,e),n.instance=s;case"stylesheet":c=ns(a.href);var f=e.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,Se(f),f;s=Yg(a),(c=oi.get(c))&&If(s,c),f=(e.ownerDocument||e).createElement("link"),Se(f);var g=f;return g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),bn(f,"link",s),n.state.loading|=4,kl(f,a.precedence,e),n.instance=f;case"script":return f=is(a.src),(c=e.querySelector(_o(f)))?(n.instance=c,Se(c),c):(s=a,(c=oi.get(f))&&(s=_({},a),Hf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Se(c),bn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,kl(s,a.precedence,e));return n.instance}function kl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function If(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jl=null;function Kg(e,n,a){if(jl===null){var s=new Map,c=jl=new Map;c.set(a,s)}else c=jl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Xa]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function Qg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ay(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ry(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ns(s.href),f=n.querySelector(vo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Xl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Se(f);return}f=n.ownerDocument||n,s=Yg(s),(c=oi.get(c))&&If(s,c),f=f.createElement("link"),Se(f);var g=f;g._p=new Promise(function(T,B){g.onload=T,g.onerror=B}),bn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Gf=0;function sy(e,n){return e.stylesheets&&e.count===0&&Wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Gf===0&&(Gf=62500*Hx());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Gf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ql=null;function Wl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ql=new Map,n.forEach(oy,e),ql=null,Xl.call(e))}function oy(e,n){if(!(n.state.loading&4)){var a=ql.get(e);if(a)var s=a.get(null);else{a=new Map,ql.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Xl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:C,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function ly(e,n,a,s,c,f,g,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function $g(e,n,a,s,c,f,g,T,B,te,pe,_e){return e=new ly(e,n,a,g,B,te,pe,_e,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=xu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Eu(f),e}function ev(e){return e?(e=Or,e):Or}function tv(e,n,a,s,c,f){c=ev(c),s.context===null?s.context=c:s.pendingContext=c,s=ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ga(e,s,n),a!==null&&(In(a,e,n),Ks(a,e,n))}function nv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Vf(e,n){nv(e,n),(e=e.alternate)&&nv(e,n)}function iv(e){if(e.tag===13||e.tag===31){var n=Ka(e,67108864);n!==null&&In(n,e,67108864),Vf(e,67108864)}}function av(e){if(e.tag===13||e.tag===31){var n=Zn();n=br(n);var a=Ka(e,n);a!==null&&In(a,e,n),Vf(e,n)}}var Yl=!0;function cy(e,n,a,s){var c=O.T;O.T=null;var f=Y.p;try{Y.p=2,kf(e,n,a,s)}finally{Y.p=f,O.T=c}}function uy(e,n,a,s){var c=O.T;O.T=null;var f=Y.p;try{Y.p=8,kf(e,n,a,s)}finally{Y.p=f,O.T=c}}function kf(e,n,a,s){if(Yl){var c=jf(s);if(c===null)Cf(e,n,s,Zl,a),sv(e,s);else if(dy(c,e,n,a,s))s.stopPropagation();else if(sv(e,s),n&4&&-1<fy.indexOf(e)){for(;c!==null;){var f=re(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Te(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var B=1<<31-Be(g);T.entanglements[1]|=B,g&=~B}bi(f),(Dt&6)===0&&(Ul=b()+500,ho(0))}}break;case 31:case 13:T=Ka(f,2),T!==null&&In(T,f,2),Nl(),Vf(f,2)}if(f=jf(s),f===null&&Cf(e,n,s,Zl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Cf(e,n,s,null,a)}}function jf(e){return e=Xc(e),Xf(e)}var Zl=null;function Xf(e){if(Zl=null,e=W(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Zl=e,null}function rv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case ge:return 2;case be:return 8;case he:case Ye:return 32;case we:return 268435456;default:return 32}default:return 32}}var qf=!1,Ra=null,wa=null,Ca=null,yo=new Map,So=new Map,Da=[],fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sv(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function Mo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=re(n),n!==null&&iv(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function dy(e,n,a,s,c){switch(n){case"focusin":return Ra=Mo(Ra,e,n,a,s,c),!0;case"dragenter":return wa=Mo(wa,e,n,a,s,c),!0;case"mouseover":return Ca=Mo(Ca,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,Mo(yo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,So.set(f,Mo(So.get(f)||null,e,n,a,s,c)),!0}return!1}function ov(e){var n=W(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ns(e.priority,function(){av(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ns(e.priority,function(){av(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=jf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);jc=s,a.target.dispatchEvent(s),jc=null}else return n=re(a),n!==null&&iv(n),e.blockedOn=a,!1;n.shift()}return!0}function lv(e,n,a){Kl(e)&&a.delete(n)}function hy(){qf=!1,Ra!==null&&Kl(Ra)&&(Ra=null),wa!==null&&Kl(wa)&&(wa=null),Ca!==null&&Kl(Ca)&&(Ca=null),yo.forEach(lv),So.forEach(lv)}function Ql(e,n){e.blockedOn===n&&(e.blockedOn=null,qf||(qf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,hy)))}var Jl=null;function cv(e){Jl!==e&&(Jl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Jl===e&&(Jl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Xf(s||a)===null)continue;break}var f=re(a);f!==null&&(e.splice(n,3),n-=3,ku(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function as(e){function n(B){return Ql(B,e)}Ra!==null&&Ql(Ra,e),wa!==null&&Ql(wa,e),Ca!==null&&Ql(Ca,e),yo.forEach(n),So.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)ov(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[xn]||null;if(typeof f=="function")g||cv(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[xn]||null)T=g.formAction;else if(Xf(c)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),cv(a)}}}function uv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wf(e){this._internalRoot=e}$l.prototype.render=Wf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();tv(a,s,e,n,null,null)},$l.prototype.unmount=Wf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;tv(e.current,2,null,e,null,null),Nl(),n[la]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var n=ja();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&ov(e)}};var fv=t.version;if(fv!=="19.2.7")throw Error(r(527,fv,"19.2.7"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var py={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Ae=ec.inject(py),Ce=ec}catch{}}return bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=_m,f=xm,g=ym;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=$g(e,1,!1,null,null,a,s,null,c,f,g,uv),e[la]=n.current,wf(e),new Wf(n)},bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=_m,g=xm,T=ym,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=$g(e,1,!0,n,a??null,s,c,B,f,g,T,uv),n.context=ev(null),a=n.current,s=Zn(),s=br(s),c=ma(s),c.callback=null,ga(a,c,s),a=s,n.current.lanes=a,Cn(n,a),bi(n),e[la]=n.current,wf(e),new $l(n)},bo.version="19.2.7",bo}var Sv;function Ty(){if(Sv)return Kf.exports;Sv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Kf.exports=by(),Kf.exports}var Ay=Ty();const Ry=C_(Ay);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xh="179",wy=0,Mv=1,Cy=2,D_=1,U_=2,ta=3,Va=0,Hn=1,na=2,Ia=0,Ss=1,Ev=2,bv=3,Tv=4,Dy=5,vr=100,Uy=101,Ly=102,Ny=103,Oy=104,Py=200,zy=201,By=202,Fy=203,Ld=204,Nd=205,Iy=206,Hy=207,Gy=208,Vy=209,ky=210,jy=211,Xy=212,qy=213,Wy=214,Od=0,Pd=1,zd=2,bs=3,Bd=4,Fd=5,Id=6,Hd=7,L_=0,Yy=1,Zy=2,Ha=0,Ky=1,Qy=2,Jy=3,$y=4,eS=5,tS=6,nS=7,N_=300,Ts=301,As=302,Gd=303,Vd=304,Bc=306,kd=1e3,xr=1001,jd=1002,_i=1003,iS=1004,tc=1005,Ri=1006,ed=1007,yr=1008,Di=1009,O_=1010,P_=1011,Po=1012,yh=1013,Sr=1014,ia=1015,Ho=1016,Sh=1017,Mh=1018,zo=1020,z_=35902,B_=1021,F_=1022,vi=1023,Bo=1026,Fo=1027,I_=1028,Eh=1029,H_=1030,bh=1031,Th=1033,Ac=33776,Rc=33777,wc=33778,Cc=33779,Xd=35840,qd=35841,Wd=35842,Yd=35843,Zd=36196,Kd=37492,Qd=37496,Jd=37808,$d=37809,eh=37810,th=37811,nh=37812,ih=37813,ah=37814,rh=37815,sh=37816,oh=37817,lh=37818,ch=37819,uh=37820,fh=37821,Dc=36492,dh=36494,hh=36495,G_=36283,ph=36284,mh=36285,gh=36286,aS=3200,rS=3201,sS=0,oS=1,Fa="",ci="srgb",Rs="srgb-linear",Lc="linear",Ht="srgb",rs=7680,Av=519,lS=512,cS=513,uS=514,V_=515,fS=516,dS=517,hS=518,pS=519,Rv=35044,wv="300 es",wi=2e3,Nc=2001;class Cs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cv=1234567;const No=Math.PI/180,Io=180/Math.PI;function Ds(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function St(o,t,i){return Math.max(t,Math.min(i,o))}function Ah(o,t){return(o%t+t)%t}function mS(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function gS(o,t,i){return o!==t?(i-o)/(t-o):0}function Oo(o,t,i){return(1-i)*o+i*t}function vS(o,t,i,r){return Oo(o,t,1-Math.exp(-i*r))}function _S(o,t=1){return t-Math.abs(Ah(o,t*2)-t)}function xS(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function yS(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function SS(o,t){return o+Math.floor(Math.random()*(t-o+1))}function MS(o,t){return o+Math.random()*(t-o)}function ES(o){return o*(.5-Math.random())}function bS(o){o!==void 0&&(Cv=o);let t=Cv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function TS(o){return o*No}function AS(o){return o*Io}function RS(o){return(o&o-1)===0&&o!==0}function wS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function CS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function DS(o,t,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),m=d(i/2),p=u((t+r)/2),x=d((t+r)/2),_=u((t-r)/2),y=d((t-r)/2),S=u((r-t)/2),A=d((r-t)/2);switch(l){case"XYX":o.set(h*x,m*_,m*y,h*p);break;case"YZY":o.set(m*y,h*x,m*_,h*p);break;case"ZXZ":o.set(m*_,m*y,h*x,h*p);break;case"XZX":o.set(h*x,m*A,m*S,h*p);break;case"YXY":o.set(m*S,h*x,m*A,h*p);break;case"ZYZ":o.set(m*A,m*S,h*x,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function xs(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ln(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const nc={DEG2RAD:No,RAD2DEG:Io,generateUUID:Ds,clamp:St,euclideanModulo:Ah,mapLinear:mS,inverseLerp:gS,lerp:Oo,damp:vS,pingpong:_S,smoothstep:xS,smootherstep:yS,randInt:SS,randFloat:MS,randFloatSpread:ES,seededRandom:bS,degToRad:TS,radToDeg:AS,isPowerOfTwo:RS,ceilPowerOfTwo:wS,floorPowerOfTwo:CS,setQuaternionFromProperEuler:DS,normalize:Ln,denormalize:xs};class Ut{constructor(t=0,i=0){Ut.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Go{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],_=r[l+3];const y=u[d+0],S=u[d+1],A=u[d+2],w=u[d+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_;return}if(h===1){t[i+0]=y,t[i+1]=S,t[i+2]=A,t[i+3]=w;return}if(_!==w||m!==y||p!==S||x!==A){let M=1-h;const v=m*y+p*S+x*A+_*w,G=v>=0?1:-1,C=1-v*v;if(C>Number.EPSILON){const X=Math.sqrt(C),V=Math.atan2(X,v*G);M=Math.sin(M*V)/X,h=Math.sin(h*V)/X}const N=h*G;if(m=m*M+y*N,p=p*M+S*N,x=x*M+A*N,_=_*M+w*N,M===1-h){const X=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=X,p*=X,x*=X,_*=X}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],_=u[d],y=u[d+1],S=u[d+2],A=u[d+3];return t[i]=h*A+x*_+m*S-p*y,t[i+1]=m*A+x*y+p*_-h*S,t[i+2]=p*A+x*S+h*y-m*_,t[i+3]=x*A-h*_-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),_=h(u/2),y=m(r/2),S=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=y*x*_+p*S*A,this._y=p*S*_-y*x*A,this._z=p*x*A+y*S*_,this._w=p*x*_-y*S*A;break;case"YXZ":this._x=y*x*_+p*S*A,this._y=p*S*_-y*x*A,this._z=p*x*A-y*S*_,this._w=p*x*_+y*S*A;break;case"ZXY":this._x=y*x*_-p*S*A,this._y=p*S*_+y*x*A,this._z=p*x*A+y*S*_,this._w=p*x*_-y*S*A;break;case"ZYX":this._x=y*x*_-p*S*A,this._y=p*S*_+y*x*A,this._z=p*x*A-y*S*_,this._w=p*x*_+y*S*A;break;case"YZX":this._x=y*x*_+p*S*A,this._y=p*S*_+y*x*A,this._z=p*x*A-y*S*_,this._w=p*x*_-y*S*A;break;case"XZY":this._x=y*x*_-p*S*A,this._y=p*S*_-y*x*A,this._z=p*x*A+y*S*_,this._w=p*x*_+y*S*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],_=i[10],y=r+h+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-m)*S,this._y=(u-p)*S,this._z=(d-l)*S}else if(r>h&&r>_){const S=2*Math.sqrt(1+r-h-_);this._w=(x-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(u+p)/S}else if(h>_){const S=2*Math.sqrt(1+h-r-_);this._w=(u-p)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+x)/S}else{const S=2*Math.sqrt(1+_-r-h);this._w=(d-l)/S,this._x=(u+p)/S,this._y=(m+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(St(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-r*p,this._z=u*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*t._w+r*t._x+l*t._y+u*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const S=1-i;return this._w=S*d+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,h),_=Math.sin((1-i)*x)/p,y=Math.sin(i*x)/p;return this._w=d*_+this._w*y,this._x=r*_+this._x*y,this._y=l*_+this._y*y,this._z=u*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,r=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Dv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Dv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),x=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+m*p+d*_-h*x,this.y=r+m*x+h*p-u*_,this.z=l+m*_+u*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return td.copy(this).projectOnVector(t),this.sub(td)}reflect(t){return this.sub(td.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new J,Dv=new Go;class ut{constructor(t,i,r,l,u,d,h,m,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],_=r[7],y=r[2],S=r[5],A=r[8],w=l[0],M=l[3],v=l[6],G=l[1],C=l[4],N=l[7],X=l[2],V=l[5],I=l[8];return u[0]=d*w+h*G+m*X,u[3]=d*M+h*C+m*V,u[6]=d*v+h*N+m*I,u[1]=p*w+x*G+_*X,u[4]=p*M+x*C+_*V,u[7]=p*v+x*N+_*I,u[2]=y*w+S*G+A*X,u[5]=y*M+S*C+A*V,u[8]=y*v+S*N+A*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-r*u*x+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],_=x*d-h*p,y=h*m-x*u,S=p*u-d*m,A=i*_+r*y+l*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=_*w,t[1]=(l*p-x*r)*w,t[2]=(h*r-l*d)*w,t[3]=y*w,t[4]=(x*i-l*m)*w,t[5]=(l*u-h*i)*w,t[6]=S*w,t[7]=(r*m-p*i)*w,t[8]=(d*i-r*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(nd.makeScale(t,i)),this}rotate(t){return this.premultiply(nd.makeRotation(-t)),this}translate(t,i){return this.premultiply(nd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new ut;function k_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Oc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function US(){const o=Oc("canvas");return o.style.display="block",o}const Uv={};function Ms(o){o in Uv||(Uv[o]=!0,console.warn(o))}function LS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const Lv=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nv=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NS(){const o={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ht&&(l.r=ra(l.r),l.g=ra(l.g),l.b=ra(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ht&&(l.r=Es(l.r),l.g=Es(l.g),l.b=Es(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fa?Lc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Rs]:{primaries:t,whitePoint:r,transfer:Lc,toXYZ:Lv,fromXYZ:Nv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:r,transfer:Ht,toXYZ:Lv,fromXYZ:Nv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const wt=NS();function ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Es(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ss;class OS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ss===void 0&&(ss=Oc("canvas")),ss.width=t.width,ss.height=t.height;const l=ss.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Oc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ra(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ra(i[r]/255)*255):i[r]=ra(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let PS=0;class Rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(id(l[d].image)):u.push(id(l[d]))}else u=id(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function id(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?OS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zS=0;const ad=new J;class Gn extends Cs{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=xr,l=xr,u=Ri,d=yr,h=vi,m=Di,p=Gn.DEFAULT_ANISOTROPY,x=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Ds(),this.name="",this.source=new Rh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==N_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kd:t.x=t.x-Math.floor(t.x);break;case xr:t.x=t.x<0?0:1;break;case jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kd:t.y=t.y-Math.floor(t.y);break;case xr:t.y=t.y<0?0:1;break;case jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=N_;Gn.DEFAULT_ANISOTROPY=1;class Gt{constructor(t=0,i=0,r=0,l=1){Gt.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],x=m[4],_=m[8],y=m[1],S=m[5],A=m[9],w=m[2],M=m[6],v=m[10];if(Math.abs(x-y)<.01&&Math.abs(_-w)<.01&&Math.abs(A-M)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+w)<.1&&Math.abs(A+M)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,N=(S+1)/2,X=(v+1)/2,V=(x+y)/4,I=(_+w)/4,Q=(A+M)/4;return C>N&&C>X?C<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(C),l=V/r,u=I/r):N>X?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=V/l,u=Q/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=I/u,l=Q/u),this.set(r,l,u,i),this}let G=Math.sqrt((M-A)*(M-A)+(_-w)*(_-w)+(y-x)*(y-x));return Math.abs(G)<.001&&(G=1),this.x=(M-A)/G,this.y=(_-w)/G,this.z=(y-x)/G,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this.w=St(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this.w=St(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BS extends Cs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Gt(0,0,t,i),this.scissorTest=!1,this.viewport=new Gt(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Gn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Rh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends BS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class j_ extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,hi):hi.fromBufferAttribute(u,d),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ic.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ic.copy(r.boundingBox)),ic.applyMatrix4(t.matrixWorld),this.union(ic)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),ac.subVectors(this.max,To),os.subVectors(t.a,To),ls.subVectors(t.b,To),cs.subVectors(t.c,To),La.subVectors(ls,os),Na.subVectors(cs,ls),cr.subVectors(os,cs);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-cr.z,cr.y,La.z,0,-La.x,Na.z,0,-Na.x,cr.z,0,-cr.x,-La.y,La.x,0,-Na.y,Na.x,0,-cr.y,cr.x,0];return!rd(i,os,ls,cs,ac)||(i=[1,0,0,0,1,0,0,0,1],!rd(i,os,ls,cs,ac))?!1:(rc.crossVectors(La,Na),i=[rc.x,rc.y,rc.z],rd(i,os,ls,cs,ac))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new J,new J,new J,new J,new J,new J,new J,new J],hi=new J,ic=new Vo,os=new J,ls=new J,cs=new J,La=new J,Na=new J,cr=new J,To=new J,ac=new J,rc=new J,ur=new J;function rd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ur.fromArray(o,u);const h=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),m=t.dot(ur),p=i.dot(ur),x=r.dot(ur);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const IS=new Vo,Ao=new J,sd=new J;class Fc{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):IS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ao,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(sd)),this.expandByPoint(Ao.copy(t.center).sub(sd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ki=new J,od=new J,sc=new J,Oa=new J,ld=new J,oc=new J,cd=new J;class X_{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){od.copy(t).add(i).multiplyScalar(.5),sc.copy(i).sub(t).normalize(),Oa.copy(this.origin).sub(od);const u=t.distanceTo(i)*.5,d=-this.direction.dot(sc),h=Oa.dot(this.direction),m=-Oa.dot(sc),p=Oa.lengthSq(),x=Math.abs(1-d*d);let _,y,S,A;if(x>0)if(_=d*m-h,y=d*h-m,A=u*x,_>=0)if(y>=-A)if(y<=A){const w=1/x;_*=w,y*=w,S=_*(_+d*y+2*h)+y*(d*_+y+2*m)+p}else y=u,_=Math.max(0,-(d*y+h)),S=-_*_+y*(y+2*m)+p;else y=-u,_=Math.max(0,-(d*y+h)),S=-_*_+y*(y+2*m)+p;else y<=-A?(_=Math.max(0,-(-d*u+h)),y=_>0?-u:Math.min(Math.max(-u,-m),u),S=-_*_+y*(y+2*m)+p):y<=A?(_=0,y=Math.min(Math.max(-u,-m),u),S=y*(y+2*m)+p):(_=Math.max(0,-(d*u+h)),y=_>0?u:Math.min(Math.max(-u,-m),u),S=-_*_+y*(y+2*m)+p);else y=d>0?-u:u,_=Math.max(0,-(d*y+h)),S=-_*_+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(od).addScaledVector(sc,y),S}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),x>=0?(u=(t.min.y-y.y)*x,d=(t.max.y-y.y)*x):(u=(t.max.y-y.y)*x,d=(t.min.y-y.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(h=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,r,l,u){ld.subVectors(i,t),oc.subVectors(r,t),cd.crossVectors(ld,oc);let d=this.direction.dot(cd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Oa.subVectors(this.origin,t);const m=h*this.direction.dot(oc.crossVectors(Oa,oc));if(m<0)return null;const p=h*this.direction.dot(ld.cross(Oa));if(p<0||m+p>d)return null;const x=-h*Oa.dot(cd);return x<0?null:this.at(x/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,i,r,l,u,d,h,m,p,x,_,y,S,A,w,M){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,x,_,y,S,A,w,M)}set(t,i,r,l,u,d,h,m,p,x,_,y,S,A,w,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=_,v[14]=y,v[3]=S,v[7]=A,v[11]=w,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/us.setFromMatrixColumn(t,0).length(),u=1/us.setFromMatrixColumn(t,1).length(),d=1/us.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const y=d*x,S=d*_,A=h*x,w=h*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=S+A*p,i[5]=y-w*p,i[9]=-h*m,i[2]=w-y*p,i[6]=A+S*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*x,S=m*_,A=p*x,w=p*_;i[0]=y+w*h,i[4]=A*h-S,i[8]=d*p,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=S*h-A,i[6]=w+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*x,S=m*_,A=p*x,w=p*_;i[0]=y-w*h,i[4]=-d*_,i[8]=A+S*h,i[1]=S+A*h,i[5]=d*x,i[9]=w-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*x,S=d*_,A=h*x,w=h*_;i[0]=m*x,i[4]=A*p-S,i[8]=y*p+w,i[1]=m*_,i[5]=w*p+y,i[9]=S*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,S=d*p,A=h*m,w=h*p;i[0]=m*x,i[4]=w-y*_,i[8]=A*_+S,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=S*_+A,i[10]=y-w*_}else if(t.order==="XZY"){const y=d*m,S=d*p,A=h*m,w=h*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=y*_+w,i[5]=d*x,i[9]=S*_-A,i[2]=A*_-S,i[6]=h*x,i[10]=w*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(HS,t,GS)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Pa.crossVectors(r,Kn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Pa.crossVectors(r,Kn)),Pa.normalize(),lc.crossVectors(Kn,Pa),l[0]=Pa.x,l[4]=lc.x,l[8]=Kn.x,l[1]=Pa.y,l[5]=lc.y,l[9]=Kn.y,l[2]=Pa.z,l[6]=lc.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],_=r[5],y=r[9],S=r[13],A=r[2],w=r[6],M=r[10],v=r[14],G=r[3],C=r[7],N=r[11],X=r[15],V=l[0],I=l[4],Q=l[8],D=l[12],L=l[1],F=l[5],ce=l[9],ue=l[13],fe=l[2],ye=l[6],O=l[10],Y=l[14],q=l[3],oe=l[7],me=l[11],P=l[15];return u[0]=d*V+h*L+m*fe+p*q,u[4]=d*I+h*F+m*ye+p*oe,u[8]=d*Q+h*ce+m*O+p*me,u[12]=d*D+h*ue+m*Y+p*P,u[1]=x*V+_*L+y*fe+S*q,u[5]=x*I+_*F+y*ye+S*oe,u[9]=x*Q+_*ce+y*O+S*me,u[13]=x*D+_*ue+y*Y+S*P,u[2]=A*V+w*L+M*fe+v*q,u[6]=A*I+w*F+M*ye+v*oe,u[10]=A*Q+w*ce+M*O+v*me,u[14]=A*D+w*ue+M*Y+v*P,u[3]=G*V+C*L+N*fe+X*q,u[7]=G*I+C*F+N*ye+X*oe,u[11]=G*Q+C*ce+N*O+X*me,u[15]=G*D+C*ue+N*Y+X*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],_=t[6],y=t[10],S=t[14],A=t[3],w=t[7],M=t[11],v=t[15];return A*(+u*m*_-l*p*_-u*h*y+r*p*y+l*h*S-r*m*S)+w*(+i*m*S-i*p*y+u*d*y-l*d*S+l*p*x-u*m*x)+M*(+i*p*_-i*h*S-u*d*_+r*d*S+u*h*x-r*p*x)+v*(-l*h*x-i*m*_+i*h*y+l*d*_-r*d*y+r*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],_=t[9],y=t[10],S=t[11],A=t[12],w=t[13],M=t[14],v=t[15],G=_*M*p-w*y*p+w*m*S-h*M*S-_*m*v+h*y*v,C=A*y*p-x*M*p-A*m*S+d*M*S+x*m*v-d*y*v,N=x*w*p-A*_*p+A*h*S-d*w*S-x*h*v+d*_*v,X=A*_*m-x*w*m-A*h*y+d*w*y+x*h*M-d*_*M,V=i*G+r*C+l*N+u*X;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/V;return t[0]=G*I,t[1]=(w*y*u-_*M*u-w*l*S+r*M*S+_*l*v-r*y*v)*I,t[2]=(h*M*u-w*m*u+w*l*p-r*M*p-h*l*v+r*m*v)*I,t[3]=(_*m*u-h*y*u-_*l*p+r*y*p+h*l*S-r*m*S)*I,t[4]=C*I,t[5]=(x*M*u-A*y*u+A*l*S-i*M*S-x*l*v+i*y*v)*I,t[6]=(A*m*u-d*M*u-A*l*p+i*M*p+d*l*v-i*m*v)*I,t[7]=(d*y*u-x*m*u+x*l*p-i*y*p-d*l*S+i*m*S)*I,t[8]=N*I,t[9]=(A*_*u-x*w*u-A*r*S+i*w*S+x*r*v-i*_*v)*I,t[10]=(d*w*u-A*h*u+A*r*p-i*w*p-d*r*v+i*h*v)*I,t[11]=(x*h*u-d*_*u-x*r*p+i*_*p+d*r*S-i*h*S)*I,t[12]=X*I,t[13]=(x*w*l-A*_*l+A*r*y-i*w*y-x*r*M+i*_*M)*I,t[14]=(A*h*l-d*w*l-A*r*m+i*w*m+d*r*M-i*h*M)*I,t[15]=(d*_*l-x*h*l+x*r*m-i*_*m-d*r*y+i*h*y)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,x=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,_=h+h,y=u*p,S=u*x,A=u*_,w=d*x,M=d*_,v=h*_,G=m*p,C=m*x,N=m*_,X=r.x,V=r.y,I=r.z;return l[0]=(1-(w+v))*X,l[1]=(S+N)*X,l[2]=(A-C)*X,l[3]=0,l[4]=(S-N)*V,l[5]=(1-(y+v))*V,l[6]=(M+G)*V,l[7]=0,l[8]=(A+C)*I,l[9]=(M-G)*I,l[10]=(1-(y+w))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const d=us.set(l[4],l[5],l[6]).length(),h=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/u,x=1/d,_=1/h;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=x,pi.elements[5]*=x,pi.elements[6]*=x,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,i.setFromRotationMatrix(pi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=wi,m=!1){const p=this.elements,x=2*u/(i-t),_=2*u/(r-l),y=(i+t)/(i-t),S=(r+l)/(r-l);let A,w;if(m)A=u/(d-u),w=d*u/(d-u);else if(h===wi)A=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(h===Nc)A=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=wi,m=!1){const p=this.elements,x=2/(i-t),_=2/(r-l),y=-(i+t)/(i-t),S=-(r+l)/(r-l);let A,w;if(m)A=1/(d-u),w=d/(d-u);else if(h===wi)A=-2/(d-u),w=-(d+u)/(d-u);else if(h===Nc)A=-1/(d-u),w=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=A,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const us=new J,pi=new Kt,HS=new J(0,0,0),GS=new J(1,1,1),Pa=new J,lc=new J,Kn=new J,Ov=new Kt,Pv=new Go;class sa{constructor(t=0,i=0,r=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],_=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(St(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Ov.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ov,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Pv.setFromEuler(this),this.setFromQuaternion(Pv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let VS=0;const zv=new J,fs=new Go,Qi=new Kt,cc=new J,Ro=new J,kS=new J,jS=new Go,Bv=new J(1,0,0),Fv=new J(0,1,0),Iv=new J(0,0,1),Hv={type:"added"},XS={type:"removed"},ds={type:"childadded",child:null},ud={type:"childremoved",child:null};class _n extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const t=new J,i=new sa,r=new Go,l=new J(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ut}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Bv,t)}rotateY(t){return this.rotateOnAxis(Fv,t)}rotateZ(t){return this.rotateOnAxis(Iv,t)}translateOnAxis(t,i){return zv.copy(t).applyQuaternion(this.quaternion),this.position.add(zv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Bv,t)}translateY(t){return this.translateOnAxis(Fv,t)}translateZ(t){return this.translateOnAxis(Iv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?cc.copy(t):cc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ro,cc,this.up):Qi.lookAt(cc,Ro,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(Qi),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hv),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(XS),ud.child=t,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hv),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,kS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,jS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),_=d(t.shapes),y=d(t.skeletons),S=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}_n.DEFAULT_UP=new J(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new J,Ji=new J,fd=new J,$i=new J,hs=new J,ps=new J,Gv=new J,dd=new J,hd=new J,pd=new J,md=new Gt,gd=new Gt,vd=new Gt;class gi{constructor(t=new J,i=new J,r=new J){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){mi.subVectors(l,i),Ji.subVectors(r,i),fd.subVectors(t,i);const d=mi.dot(mi),h=mi.dot(Ji),m=mi.dot(fd),p=Ji.dot(Ji),x=Ji.dot(fd),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const y=1/_,S=(p*m-h*x)*y,A=(d*x-h*m)*y;return u.set(1-S-A,A,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(d,$i.y),m.addScaledVector(h,$i.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return md.setScalar(0),gd.setScalar(0),vd.setScalar(0),md.fromBufferAttribute(t,i),gd.fromBufferAttribute(t,r),vd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(md,u.x),d.addScaledVector(gd,u.y),d.addScaledVector(vd,u.z),d}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),Ji.subVectors(t,i),mi.cross(Ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),mi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;hs.subVectors(l,r),ps.subVectors(u,r),dd.subVectors(t,r);const m=hs.dot(dd),p=ps.dot(dd);if(m<=0&&p<=0)return i.copy(r);hd.subVectors(t,l);const x=hs.dot(hd),_=ps.dot(hd);if(x>=0&&_<=x)return i.copy(l);const y=m*_-x*p;if(y<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(hs,d);pd.subVectors(t,u);const S=hs.dot(pd),A=ps.dot(pd);if(A>=0&&S<=A)return i.copy(u);const w=S*p-m*A;if(w<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(ps,h);const M=x*A-S*_;if(M<=0&&_-x>=0&&S-A>=0)return Gv.subVectors(u,l),h=(_-x)/(_-x+(S-A)),i.copy(l).addScaledVector(Gv,h);const v=1/(M+w+y);return d=w*v,h=y*v,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},uc={h:0,s:0,l:0};function _d(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ct{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=wt.workingColorSpace){return this.r=t,this.g=i,this.b=r,wt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=wt.workingColorSpace){if(t=Ah(t,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=_d(d,u,t+1/3),this.g=_d(d,u,t),this.b=_d(d,u,t-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(t,i=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ci){const r=W_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return wt.workingToColorSpace(wn.copy(this),t),Math.round(St(wn.r*255,0,255))*65536+Math.round(St(wn.g*255,0,255))*256+Math.round(St(wn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=wt.workingColorSpace){wt.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=x<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=wt.workingColorSpace){return wt.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=ci){wt.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==ci?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(za),this.setHSL(za.h+t,za.s+i,za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(za),t.getHSL(uc);const r=Oo(za.h,uc.h,i),l=Oo(za.s,uc.s,i),u=Oo(za.l,uc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ct;Ct.NAMES=W_;let qS=0;class ko extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Ss,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Nd,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ld&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Av&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Y_ extends ko{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new J,fc=new Ut;let WS=0;class Ci{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Rv,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(t),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=xs(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ln(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xs(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xs(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xs(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xs(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Ln(i,this.array),r=Ln(r,this.array),l=Ln(l,this.array),u=Ln(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rv&&(t.usage=this.usage),t}}class Z_ extends Ci{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class K_ extends Ci{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ga extends Ci{constructor(t,i,r){super(new Float32Array(t),i,r)}}let YS=0;const li=new Kt,xd=new _n,ms=new J,Qn=new Vo,wo=new Vo,vn=new J;class oa extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(k_(t)?K_:Z_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,r){return li.makeTranslation(t,i,r),this.applyMatrix4(li),this}scale(t,i,r){return li.makeScale(t,i,r),this.applyMatrix4(li),this}lookAt(t){return xd.lookAt(t),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ga(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(Qn.min,wo.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,wo.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(wo.min),Qn.expandByPoint(wo.max))}Qn.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)vn.fromBufferAttribute(h,p),m&&(ms.fromBufferAttribute(t,p),vn.add(ms)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let Q=0;Q<r.count;Q++)h[Q]=new J,m[Q]=new J;const p=new J,x=new J,_=new J,y=new Ut,S=new Ut,A=new Ut,w=new J,M=new J;function v(Q,D,L){p.fromBufferAttribute(r,Q),x.fromBufferAttribute(r,D),_.fromBufferAttribute(r,L),y.fromBufferAttribute(u,Q),S.fromBufferAttribute(u,D),A.fromBufferAttribute(u,L),x.sub(p),_.sub(p),S.sub(y),A.sub(y);const F=1/(S.x*A.y-A.x*S.y);isFinite(F)&&(w.copy(x).multiplyScalar(A.y).addScaledVector(_,-S.y).multiplyScalar(F),M.copy(_).multiplyScalar(S.x).addScaledVector(x,-A.x).multiplyScalar(F),h[Q].add(w),h[D].add(w),h[L].add(w),m[Q].add(M),m[D].add(M),m[L].add(M))}let G=this.groups;G.length===0&&(G=[{start:0,count:t.count}]);for(let Q=0,D=G.length;Q<D;++Q){const L=G[Q],F=L.start,ce=L.count;for(let ue=F,fe=F+ce;ue<fe;ue+=3)v(t.getX(ue+0),t.getX(ue+1),t.getX(ue+2))}const C=new J,N=new J,X=new J,V=new J;function I(Q){X.fromBufferAttribute(l,Q),V.copy(X);const D=h[Q];C.copy(D),C.sub(X.multiplyScalar(X.dot(D))).normalize(),N.crossVectors(V,D);const F=N.dot(m[Q])<0?-1:1;d.setXYZW(Q,C.x,C.y,C.z,F)}for(let Q=0,D=G.length;Q<D;++Q){const L=G[Q],F=L.start,ce=L.count;for(let ue=F,fe=F+ce;ue<fe;ue+=3)I(t.getX(ue+0)),I(t.getX(ue+1)),I(t.getX(ue+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new J,u=new J,d=new J,h=new J,m=new J,p=new J,x=new J,_=new J;if(t)for(let y=0,S=t.count;y<S;y+=3){const A=t.getX(y+0),w=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),h.add(x),m.add(x),p.add(x),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,_=h.normalized,y=new p.constructor(m.length*x);let S=0,A=0;for(let w=0,M=m.length;w<M;w++){h.isInterleavedBufferAttribute?S=m[w]*h.data.stride+h.offset:S=m[w]*x;for(let v=0;v<x;v++)y[A++]=p[S++]}return new Ci(y,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oa,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,_=p.length;x<_;x++){const y=p[x],S=t(y,r);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,y=p.length;_<y;_++){const S=p[_];x.push(S.toJSON(t.data))}x.length>0&&(l[m]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=t.morphAttributes;for(const p in u){const x=[],_=u[p];for(let y=0,S=_.length;y<S;y++)x.push(_[y].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vv=new Kt,fr=new X_,dc=new Fc,kv=new J,hc=new J,pc=new J,mc=new J,yd=new J,gc=new J,jv=new J,vc=new J;class aa extends _n{constructor(t=new oa,i=new Y_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){gc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],_=u[m];x!==0&&(yd.fromBufferAttribute(_,t),d?gc.addScaledVector(yd,x):gc.addScaledVector(yd.sub(i),x))}i.add(gc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dc.copy(r.boundingSphere),dc.applyMatrix4(u),fr.copy(t.ray).recast(t.near),!(dc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(dc,kv)===null||fr.origin.distanceToSquared(kv)>(t.far-t.near)**2))&&(Vv.copy(u).invert(),fr.copy(t.ray).applyMatrix4(Vv),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,fr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,_=u.attributes.normal,y=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,w=y.length;A<w;A++){const M=y[A],v=d[M.materialIndex],G=Math.max(M.start,S.start),C=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let N=G,X=C;N<X;N+=3){const V=h.getX(N),I=h.getX(N+1),Q=h.getX(N+2);l=_c(this,v,t,r,p,x,_,V,I,Q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let M=A,v=w;M<v;M+=3){const G=h.getX(M),C=h.getX(M+1),N=h.getX(M+2);l=_c(this,d,t,r,p,x,_,G,C,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,w=y.length;A<w;A++){const M=y[A],v=d[M.materialIndex],G=Math.max(M.start,S.start),C=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let N=G,X=C;N<X;N+=3){const V=N,I=N+1,Q=N+2;l=_c(this,v,t,r,p,x,_,V,I,Q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=A,v=w;M<v;M+=3){const G=M,C=M+1,N=M+2;l=_c(this,d,t,r,p,x,_,G,C,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function ZS(o,t,i,r,l,u,d,h){let m;if(t.side===Hn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===Va,h),m===null)return null;vc.copy(h),vc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(vc);return p<i.near||p>i.far?null:{distance:p,point:vc.clone(),object:o}}function _c(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,hc),o.getVertexPosition(m,pc),o.getVertexPosition(p,mc);const x=ZS(o,t,i,r,hc,pc,mc,jv);if(x){const _=new J;gi.getBarycoord(jv,hc,pc,mc,_),l&&(x.uv=gi.getInterpolatedAttribute(l,h,m,p,_,new Ut)),u&&(x.uv1=gi.getInterpolatedAttribute(u,h,m,p,_,new Ut)),d&&(x.normal=gi.getInterpolatedAttribute(d,h,m,p,_,new J),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new J,materialIndex:0};gi.getNormal(hc,pc,mc,y.normal),x.face=y,x.barycoord=_}return x}class jo extends oa{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],_=[];let y=0,S=0;A("z","y","x",-1,-1,r,i,t,d,u,0),A("z","y","x",1,-1,r,i,-t,d,u,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,u,4),A("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ga(p,3)),this.setAttribute("normal",new Ga(x,3)),this.setAttribute("uv",new Ga(_,2));function A(w,M,v,G,C,N,X,V,I,Q,D){const L=N/I,F=X/Q,ce=N/2,ue=X/2,fe=V/2,ye=I+1,O=Q+1;let Y=0,q=0;const oe=new J;for(let me=0;me<O;me++){const P=me*F-ue;for(let $=0;$<ye;$++){const Me=$*L-ce;oe[w]=Me*G,oe[M]=P*C,oe[v]=fe,p.push(oe.x,oe.y,oe.z),oe[w]=0,oe[M]=0,oe[v]=V>0?1:-1,x.push(oe.x,oe.y,oe.z),_.push($/I),_.push(1-me/Q),Y+=1}}for(let me=0;me<Q;me++)for(let P=0;P<I;P++){const $=y+P+ye*me,Me=y+P+ye*(me+1),Ee=y+(P+1)+ye*(me+1),U=y+(P+1)+ye*me;m.push($,Me,U),m.push(Me,Ee,U),q+=6}h.addGroup(S,q,D),S+=q,y+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=ws(o[i]);for(const l in r)t[l]=r[l]}return t}function KS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Q_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:wt.workingColorSpace}const QS={clone:ws,merge:Nn};var JS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends ko{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JS,this.fragmentShader=$S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=KS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class J_ extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new J,Xv=new Ut,qv=new Ut;class Jn extends J_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Io*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,Xv,qv),i.subVectors(qv,Xv)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(No*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,vs=1;class eM extends _n{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(gs,vs,t,i);l.layers=this.layers,this.add(l);const u=new Jn(gs,vs,t,i);u.layers=this.layers,this.add(u);const d=new Jn(gs,vs,t,i);d.layers=this.layers,this.add(d);const h=new Jn(gs,vs,t,i);h.layers=this.layers,this.add(h);const m=new Jn(gs,vs,t,i);m.layers=this.layers,this.add(m);const p=new Jn(gs,vs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Nc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(_,y,S),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class $_ extends Gn{constructor(t=[],i=Ts,r,l,u,d,h,m,p,x){super(t,i,r,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tM extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new $_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new jo(5,5,5),u=new ka({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ia});u.uniforms.tEquirect.value=i;const d=new aa(l,u),h=i.minFilter;return i.minFilter===yr&&(i.minFilter=Ri),new eM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class xc extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nM={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,r),v=this._getHandJoint(p,w);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=x.position.distanceTo(_.position),S=.02,A=.005;p.inputState.pinching&&y>S+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(nM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new xc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class wh{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=i,this.far=r}clone(){return new wh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class iM extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Md=new J,aM=new J,rM=new ut;class mr{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Md.subVectors(r,i).cross(aM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Md),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||rM.getNormalMatrix(t),l=this.coplanarPoint(Md).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Fc,sM=new Ut(.5,.5),yc=new J;class Ch{constructor(t=new mr,i=new mr,r=new mr,l=new mr,u=new mr,d=new mr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=wi,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],x=u[4],_=u[5],y=u[6],S=u[7],A=u[8],w=u[9],M=u[10],v=u[11],G=u[12],C=u[13],N=u[14],X=u[15];if(l[0].setComponents(p-d,S-x,v-A,X-G).normalize(),l[1].setComponents(p+d,S+x,v+A,X+G).normalize(),l[2].setComponents(p+h,S+_,v+w,X+C).normalize(),l[3].setComponents(p-h,S-_,v-w,X-C).normalize(),r)l[4].setComponents(m,y,M,N).normalize(),l[5].setComponents(p-m,S-y,v-M,X-N).normalize();else if(l[4].setComponents(p-m,S-y,v-M,X-N).normalize(),i===wi)l[5].setComponents(p+m,S+y,v+M,X+N).normalize();else if(i===Nc)l[5].setComponents(m,y,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){dr.center.set(0,0,0);const i=sM.distanceTo(t.center);return dr.radius=.7071067811865476+i,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(yc.x=l.normal.x>0?t.max.x:t.min.x,yc.y=l.normal.y>0?t.max.y:t.min.y,yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class e0 extends ko{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pc=new J,zc=new J,Wv=new Kt,Co=new X_,Sc=new Fc,Ed=new J,Yv=new J;class oM extends _n{constructor(t=new oa,i=new e0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Pc.fromBufferAttribute(i,l-1),zc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Pc.distanceTo(zc);t.setAttribute("lineDistance",new Ga(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(l),Sc.radius+=u,t.ray.intersectsSphere(Sc)===!1)return;Wv.copy(l).invert(),Co.copy(t.ray).applyMatrix4(Wv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=r.index,y=r.attributes.position;if(x!==null){const S=Math.max(0,d.start),A=Math.min(x.count,d.start+d.count);for(let w=S,M=A-1;w<M;w+=p){const v=x.getX(w),G=x.getX(w+1),C=Mc(this,t,Co,m,v,G,w);C&&i.push(C)}if(this.isLineLoop){const w=x.getX(A-1),M=x.getX(S),v=Mc(this,t,Co,m,w,M,A-1);v&&i.push(v)}}else{const S=Math.max(0,d.start),A=Math.min(y.count,d.start+d.count);for(let w=S,M=A-1;w<M;w+=p){const v=Mc(this,t,Co,m,w,w+1,w);v&&i.push(v)}if(this.isLineLoop){const w=Mc(this,t,Co,m,A-1,S,A-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Mc(o,t,i,r,l,u,d){const h=o.geometry.attributes.position;if(Pc.fromBufferAttribute(h,l),zc.fromBufferAttribute(h,u),i.distanceSqToSegment(Pc,zc,Ed,Yv)>r)return;Ed.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Ed);if(!(p<t.near||p>t.far))return{distance:p,point:Yv.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class t0 extends Gn{constructor(t,i,r=Sr,l,u,d,h=_i,m=_i,p,x=Bo,_=1){if(x!==Bo&&x!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:_};super(y,l,u,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ic extends oa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,_=t/h,y=i/m,S=[],A=[],w=[],M=[];for(let v=0;v<x;v++){const G=v*y-d;for(let C=0;C<p;C++){const N=C*_-u;A.push(N,-G,0),w.push(0,0,1),M.push(C/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let G=0;G<h;G++){const C=G+p*v,N=G+p*(v+1),X=G+1+p*(v+1),V=G+1+p*v;S.push(C,N,V),S.push(N,X,V)}this.setIndex(S),this.setAttribute("position",new Ga(A,3)),this.setAttribute("normal",new Ga(w,3)),this.setAttribute("uv",new Ga(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ic(t.width,t.height,t.widthSegments,t.heightSegments)}}class lM extends ko{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cM extends ko{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Dh extends _n{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class uM extends Dh{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const bd=new Kt,Zv=new J,Kv=new J;class n0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Zv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Zv),Kv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Kv),i.updateMatrixWorld(),bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(bd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qv=new Kt,Do=new J,Td=new J;class fM extends n0{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Do.setFromMatrixPosition(t.matrixWorld),r.position.copy(Do),Td.copy(r.position),Td.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Td),r.updateMatrixWorld(),l.makeTranslation(-Do.x,-Do.y,-Do.z),Qv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qv,r.coordinateSystem,r.reversedDepth)}}class dM extends Dh{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new fM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class i0 extends J_{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class hM extends n0{constructor(){super(new i0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pM extends Dh{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new hM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class mM extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Jv(o,t,i,r){const l=gM(r);switch(i){case B_:return o*t;case I_:return o*t/l.components*l.byteLength;case Eh:return o*t/l.components*l.byteLength;case H_:return o*t*2/l.components*l.byteLength;case bh:return o*t*2/l.components*l.byteLength;case F_:return o*t*3/l.components*l.byteLength;case vi:return o*t*4/l.components*l.byteLength;case Th:return o*t*4/l.components*l.byteLength;case Ac:case Rc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case wc:case Cc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qd:case Yd:return Math.max(o,16)*Math.max(t,8)/4;case Xd:case Wd:return Math.max(o,8)*Math.max(t,8)/2;case Zd:case Kd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Qd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Jd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $d:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case eh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case th:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case nh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ih:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ah:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case rh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case sh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ch:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case uh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case fh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Dc:case dh:case hh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case G_:case ph:return Math.ceil(o/4)*Math.ceil(t/4)*8;case mh:case gh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gM(o){switch(o){case Di:case O_:return{byteLength:1,components:1};case Po:case P_:case Ho:return{byteLength:2,components:1};case Sh:case Mh:return{byteLength:2,components:4};case Sr:case yh:case ia:return{byteLength:4,components:1};case z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function a0(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function vM(o){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,_=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,x),h.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const x=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,x);else{_.sort((S,A)=>S.start-A.start);let y=0;for(let S=1;S<_.length;S++){const A=_[y],w=_[S];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++y,_[y]=w)}_.length=y+1;for(let S=0,A=_.length;S<A;S++){const w=_[S];o.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var _M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xM=`#ifdef USE_ALPHAHASH
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
#endif`,yM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bM=`#ifdef USE_AOMAP
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
#endif`,TM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AM=`#ifdef USE_BATCHING
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
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UM=`#ifdef USE_IRIDESCENCE
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
#endif`,LM=`#ifdef USE_BUMPMAP
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
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GM=`#define PI 3.141592653589793
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
} // validated`,VM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kM=`vec3 transformedNormal = objectNormal;
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
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YM="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rE=`#ifdef USE_GRADIENTMAP
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
}`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cE=`uniform bool receiveShadow;
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
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mE=`PhysicalMaterial material;
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
#endif`,gE=`struct PhysicalMaterial {
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
}`,vE=`
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
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RE=`#if defined( USE_POINTS_UV )
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
#endif`,wE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NE=`#ifdef USE_MORPHTARGETS
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
#endif`,OE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HE=`#ifdef USE_NORMALMAP
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
#endif`,GE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jE=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nb=`float getShadowMask() {
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
}`,ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ab=`#ifdef USE_SKINNING
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
#endif`,rb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sb=`#ifdef USE_SKINNING
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
#endif`,ob=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ub=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fb=`#ifdef USE_TRANSMISSION
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
#endif`,db=`#ifdef USE_TRANSMISSION
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
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vb=`varying vec2 vUv;
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
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`#include <common>
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
}`,bb=`#if DEPTH_PACKING == 3200
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
}`,Tb=`#define DISTANCE
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
}`,Ab=`#define DISTANCE
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`uniform float scale;
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
}`,Db=`uniform vec3 diffuse;
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
}`,Ub=`#include <common>
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Nb=`#define LAMBERT
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
}`,Ob=`#define LAMBERT
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
}`,Pb=`#define MATCAP
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
}`,zb=`#define MATCAP
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
}`,Bb=`#define NORMAL
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
}`,Fb=`#define NORMAL
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
}`,Ib=`#define PHONG
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
}`,Hb=`#define PHONG
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
}`,Gb=`#define STANDARD
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
}`,Vb=`#define STANDARD
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
}`,kb=`#define TOON
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
}`,jb=`#define TOON
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
}`,qb=`uniform vec3 diffuse;
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
}`,Yb=`uniform vec3 color;
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
}`,Zb=`uniform float rotation;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:_M,alphahash_pars_fragment:xM,alphamap_fragment:yM,alphamap_pars_fragment:SM,alphatest_fragment:MM,alphatest_pars_fragment:EM,aomap_fragment:bM,aomap_pars_fragment:TM,batching_pars_vertex:AM,batching_vertex:RM,begin_vertex:wM,beginnormal_vertex:CM,bsdfs:DM,iridescence_fragment:UM,bumpmap_pars_fragment:LM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:zM,color_fragment:BM,color_pars_fragment:FM,color_pars_vertex:IM,color_vertex:HM,common:GM,cube_uv_reflection_fragment:VM,defaultnormal_vertex:kM,displacementmap_pars_vertex:jM,displacementmap_vertex:XM,emissivemap_fragment:qM,emissivemap_pars_fragment:WM,colorspace_fragment:YM,colorspace_pars_fragment:ZM,envmap_fragment:KM,envmap_common_pars_fragment:QM,envmap_pars_fragment:JM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:uE,envmap_vertex:eE,fog_vertex:tE,fog_pars_vertex:nE,fog_fragment:iE,fog_pars_fragment:aE,gradientmap_pars_fragment:rE,lightmap_pars_fragment:sE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:lE,lights_pars_begin:cE,lights_toon_fragment:fE,lights_toon_pars_fragment:dE,lights_phong_fragment:hE,lights_phong_pars_fragment:pE,lights_physical_fragment:mE,lights_physical_pars_fragment:gE,lights_fragment_begin:vE,lights_fragment_maps:_E,lights_fragment_end:xE,logdepthbuf_fragment:yE,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:ME,logdepthbuf_vertex:EE,map_fragment:bE,map_pars_fragment:TE,map_particle_fragment:AE,map_particle_pars_fragment:RE,metalnessmap_fragment:wE,metalnessmap_pars_fragment:CE,morphinstance_vertex:DE,morphcolor_vertex:UE,morphnormal_vertex:LE,morphtarget_pars_vertex:NE,morphtarget_vertex:OE,normal_fragment_begin:PE,normal_fragment_maps:zE,normal_pars_fragment:BE,normal_pars_vertex:FE,normal_vertex:IE,normalmap_pars_fragment:HE,clearcoat_normal_fragment_begin:GE,clearcoat_normal_fragment_maps:VE,clearcoat_pars_fragment:kE,iridescence_pars_fragment:jE,opaque_fragment:XE,packing:qE,premultiplied_alpha_fragment:WE,project_vertex:YE,dithering_fragment:ZE,dithering_pars_fragment:KE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:JE,shadowmap_pars_fragment:$E,shadowmap_pars_vertex:eb,shadowmap_vertex:tb,shadowmask_pars_fragment:nb,skinbase_vertex:ib,skinning_pars_vertex:ab,skinning_vertex:rb,skinnormal_vertex:sb,specularmap_fragment:ob,specularmap_pars_fragment:lb,tonemapping_fragment:cb,tonemapping_pars_fragment:ub,transmission_fragment:fb,transmission_pars_fragment:db,uv_pars_fragment:hb,uv_pars_vertex:pb,uv_vertex:mb,worldpos_vertex:gb,background_vert:vb,background_frag:_b,backgroundCube_vert:xb,backgroundCube_frag:yb,cube_vert:Sb,cube_frag:Mb,depth_vert:Eb,depth_frag:bb,distanceRGBA_vert:Tb,distanceRGBA_frag:Ab,equirect_vert:Rb,equirect_frag:wb,linedashed_vert:Cb,linedashed_frag:Db,meshbasic_vert:Ub,meshbasic_frag:Lb,meshlambert_vert:Nb,meshlambert_frag:Ob,meshmatcap_vert:Pb,meshmatcap_frag:zb,meshnormal_vert:Bb,meshnormal_frag:Fb,meshphong_vert:Ib,meshphong_frag:Hb,meshphysical_vert:Gb,meshphysical_frag:Vb,meshtoon_vert:kb,meshtoon_frag:jb,points_vert:Xb,points_frag:qb,shadow_vert:Wb,shadow_frag:Yb,sprite_vert:Zb,sprite_frag:Kb},Pe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ai={basic:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Nn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Nn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Nn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Nn([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Nn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Nn([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Nn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Nn([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Nn([Pe.common,Pe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Nn([Pe.lights,Pe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ai.physical={uniforms:Nn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ec={r:0,b:0,g:0},hr=new sa,Qb=new Kt;function Jb(o,t,i,r,l,u,d){const h=new Ct(0);let m=u===!0?0:1,p,x,_=null,y=0,S=null;function A(C){let N=C.isScene===!0?C.background:null;return N&&N.isTexture&&(N=(C.backgroundBlurriness>0?i:t).get(N)),N}function w(C){let N=!1;const X=A(C);X===null?v(h,m):X&&X.isColor&&(v(X,1),N=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,d):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(C,N){const X=A(N);X&&(X.isCubeTexture||X.mapping===Bc)?(x===void 0&&(x=new aa(new jo(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:ws(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(V,I,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),hr.copy(N.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),x.material.uniforms.envMap.value=X,x.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(hr)),x.material.toneMapped=wt.getTransfer(X.colorSpace)!==Ht,(_!==X||y!==X.version||S!==o.toneMapping)&&(x.material.needsUpdate=!0,_=X,y=X.version,S=o.toneMapping),x.layers.enableAll(),C.unshift(x,x.geometry,x.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new aa(new Ic(2,2),new ka({name:"BackgroundMaterial",uniforms:ws(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=wt.getTransfer(X.colorSpace)!==Ht,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(_!==X||y!==X.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,_=X,y=X.version,S=o.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function v(C,N){C.getRGB(Ec,Q_(o)),r.buffers.color.setClear(Ec.r,Ec.g,Ec.b,N,d)}function G(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,N=1){h.set(C),m=N,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,v(h,m)},render:w,addToRenderList:M,dispose:G}}function $b(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,d=!1;function h(L,F,ce,ue,fe){let ye=!1;const O=_(ue,ce,F);u!==O&&(u=O,p(u.object)),ye=S(L,ue,ce,fe),ye&&A(L,ue,ce,fe),fe!==null&&t.update(fe,o.ELEMENT_ARRAY_BUFFER),(ye||d)&&(d=!1,N(L,F,ce,ue),fe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(fe).buffer))}function m(){return o.createVertexArray()}function p(L){return o.bindVertexArray(L)}function x(L){return o.deleteVertexArray(L)}function _(L,F,ce){const ue=ce.wireframe===!0;let fe=r[L.id];fe===void 0&&(fe={},r[L.id]=fe);let ye=fe[F.id];ye===void 0&&(ye={},fe[F.id]=ye);let O=ye[ue];return O===void 0&&(O=y(m()),ye[ue]=O),O}function y(L){const F=[],ce=[],ue=[];for(let fe=0;fe<i;fe++)F[fe]=0,ce[fe]=0,ue[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ce,attributeDivisors:ue,object:L,attributes:{},index:null}}function S(L,F,ce,ue){const fe=u.attributes,ye=F.attributes;let O=0;const Y=ce.getAttributes();for(const q in Y)if(Y[q].location>=0){const me=fe[q];let P=ye[q];if(P===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),me===void 0||me.attribute!==P||P&&me.data!==P.data)return!0;O++}return u.attributesNum!==O||u.index!==ue}function A(L,F,ce,ue){const fe={},ye=F.attributes;let O=0;const Y=ce.getAttributes();for(const q in Y)if(Y[q].location>=0){let me=ye[q];me===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(me=L.instanceColor));const P={};P.attribute=me,me&&me.data&&(P.data=me.data),fe[q]=P,O++}u.attributes=fe,u.attributesNum=O,u.index=ue}function w(){const L=u.newAttributes;for(let F=0,ce=L.length;F<ce;F++)L[F]=0}function M(L){v(L,0)}function v(L,F){const ce=u.newAttributes,ue=u.enabledAttributes,fe=u.attributeDivisors;ce[L]=1,ue[L]===0&&(o.enableVertexAttribArray(L),ue[L]=1),fe[L]!==F&&(o.vertexAttribDivisor(L,F),fe[L]=F)}function G(){const L=u.newAttributes,F=u.enabledAttributes;for(let ce=0,ue=F.length;ce<ue;ce++)F[ce]!==L[ce]&&(o.disableVertexAttribArray(ce),F[ce]=0)}function C(L,F,ce,ue,fe,ye,O){O===!0?o.vertexAttribIPointer(L,F,ce,fe,ye):o.vertexAttribPointer(L,F,ce,ue,fe,ye)}function N(L,F,ce,ue){w();const fe=ue.attributes,ye=ce.getAttributes(),O=F.defaultAttributeValues;for(const Y in ye){const q=ye[Y];if(q.location>=0){let oe=fe[Y];if(oe===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),oe!==void 0){const me=oe.normalized,P=oe.itemSize,$=t.get(oe);if($===void 0)continue;const Me=$.buffer,Ee=$.type,U=$.bytesPerElement,ie=Ee===o.INT||Ee===o.UNSIGNED_INT||oe.gpuType===yh;if(oe.isInterleavedBufferAttribute){const de=oe.data,Ue=de.stride,Le=oe.offset;if(de.isInstancedInterleavedBuffer){for(let et=0;et<q.locationSize;et++)v(q.location+et,de.meshPerAttribute);L.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let et=0;et<q.locationSize;et++)M(q.location+et);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let et=0;et<q.locationSize;et++)C(q.location+et,P/q.locationSize,Ee,me,Ue*U,(Le+P/q.locationSize*et)*U,ie)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)v(q.location+de,oe.meshPerAttribute);L.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<q.locationSize;de++)M(q.location+de);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let de=0;de<q.locationSize;de++)C(q.location+de,P/q.locationSize,Ee,me,P*U,P/q.locationSize*de*U,ie)}}else if(O!==void 0){const me=O[Y];if(me!==void 0)switch(me.length){case 2:o.vertexAttrib2fv(q.location,me);break;case 3:o.vertexAttrib3fv(q.location,me);break;case 4:o.vertexAttrib4fv(q.location,me);break;default:o.vertexAttrib1fv(q.location,me)}}}}G()}function X(){Q();for(const L in r){const F=r[L];for(const ce in F){const ue=F[ce];for(const fe in ue)x(ue[fe].object),delete ue[fe];delete F[ce]}delete r[L]}}function V(L){if(r[L.id]===void 0)return;const F=r[L.id];for(const ce in F){const ue=F[ce];for(const fe in ue)x(ue[fe].object),delete ue[fe];delete F[ce]}delete r[L.id]}function I(L){for(const F in r){const ce=r[F];if(ce[L.id]===void 0)continue;const ue=ce[L.id];for(const fe in ue)x(ue[fe].object),delete ue[fe];delete ce[L.id]}}function Q(){D(),d=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:V,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:M,disableUnusedAttributes:G}}function eT(o,t,i){let r;function l(p){r=p}function u(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,_){_!==0&&(o.drawArraysInstanced(r,p,x,_),i.update(x,r,_))}function h(p,x,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let S=0;for(let A=0;A<_;A++)S+=x[A];i.update(S,r,1)}function m(p,x,_,y){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let A=0;A<p.length;A++)d(p[A],x[A],y[A]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,x,0,y,0,_);let A=0;for(let w=0;w<_;w++)A+=x[w]*y[w];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function tT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==vi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const Q=I===Ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Di&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ia&&!Q)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),G=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=A>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:G,maxVaryings:C,maxFragmentUniforms:N,vertexTextures:X,maxSamples:V}}function nT(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new mr,h=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||r!==0||l;return l=y,r=_.length,S},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,y){i=x(_,y,0)},this.setState=function(_,y,S){const A=_.clippingPlanes,w=_.clipIntersection,M=_.clipShadows,v=o.get(_);if(!l||A===null||A.length===0||u&&!M)u?x(null):p();else{const G=u?0:r,C=G*4;let N=v.clippingState||null;m.value=N,N=x(A,y,C,S);for(let X=0;X!==C;++X)N[X]=i[X];v.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=G}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(_,y,S,A){const w=_!==null?_.length:0;let M=null;if(w!==0){if(M=m.value,A!==!0||M===null){const v=S+w*4,G=y.matrixWorldInverse;h.getNormalMatrix(G),(M===null||M.length<v)&&(M=new Float32Array(v));for(let C=0,N=S;C!==w;++C,N+=4)d.copy(_[C]).applyMatrix4(G,h),d.normal.toArray(M,N),M[N+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}function iT(o){let t=new WeakMap;function i(d,h){return h===Gd?d.mapping=Ts:h===Vd&&(d.mapping=As),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Gd||h===Vd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new tM(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const ys=4,$v=[.125,.215,.35,.446,.526,.582],_r=20,Ad=new i0,e_=new Ct;let Rd=null,wd=0,Cd=0,Dd=!1;const gr=(1+Math.sqrt(5))/2,_s=1/gr,t_=[new J(-gr,_s,0),new J(gr,_s,0),new J(-_s,0,gr),new J(_s,0,gr),new J(0,gr,-_s),new J(0,gr,_s),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],aT=new J;class n_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=aT}=u;Rd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rd,wd,Cd),this._renderer.xr.enabled=Dd,t.scissorTest=!1,bc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Ho,format:vi,colorSpace:Rs,depthBuffer:!1},l=i_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rT(u)),this._blurMaterial=sT(u,t,i)}return l}_compileMaterial(t){const i=new aa(this._lodPlanes[0],t);this._renderer.compile(i,Ad)}_sceneToCubeUV(t,i,r,l,u){const m=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,S=_.toneMapping;_.getClearColor(e_),_.toneMapping=Ha,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const w=new Y_({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),M=new aa(new jo,w);let v=!1;const G=t.background;G?G.isColor&&(w.color.copy(G),t.background=null,v=!0):(w.color.copy(e_),v=!0);for(let C=0;C<6;C++){const N=C%3;N===0?(m.up.set(0,p[C],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[C],u.y,u.z)):N===1?(m.up.set(0,0,p[C]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[C],u.z)):(m.up.set(0,p[C],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[C]));const X=this._cubeSize;bc(l,N*X,C>2?X:0,X,X),_.setRenderTarget(l),v&&_.render(M,m),_.render(t,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=S,_.autoClear=y,t.background=G}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ts||t.mapping===As;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=r_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new aa(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;bc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Ad)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=t_[(l-u-1)%t_.length];this._blur(t,u-1,u,d,h)}i.autoClear=r}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new aa(this._lodPlanes[l],p),y=p.uniforms,S=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*_r-1),w=u/A,M=isFinite(u)?1+Math.floor(x*w):_r;M>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${_r}`);const v=[];let G=0;for(let I=0;I<_r;++I){const Q=I/w,D=Math.exp(-Q*Q/2);v.push(D),I===0?G+=D:I<M&&(G+=2*D)}for(let I=0;I<v.length;I++)v[I]=v[I]/G;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:C}=this;y.dTheta.value=A,y.mipInt.value=C-r;const N=this._sizeLods[l],X=3*N*(l>C-ys?l-C+ys:0),V=4*(this._cubeSize-N);bc(i,X,V,3*N,2*N),m.setRenderTarget(i),m.render(_,Ad)}}function rT(o){const t=[],i=[],r=[];let l=o;const u=o-ys+1+$v.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-ys?m=$v[d-o+ys-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),x=-p,_=1+p,y=[x,x,_,x,_,_,x,x,_,_,x,_],S=6,A=6,w=3,M=2,v=1,G=new Float32Array(w*A*S),C=new Float32Array(M*A*S),N=new Float32Array(v*A*S);for(let V=0;V<S;V++){const I=V%3*2/3-1,Q=V>2?0:-1,D=[I,Q,0,I+2/3,Q,0,I+2/3,Q+1,0,I,Q,0,I+2/3,Q+1,0,I,Q+1,0];G.set(D,w*A*V),C.set(y,M*A*V);const L=[V,V,V,V,V,V];N.set(L,v*A*V)}const X=new oa;X.setAttribute("position",new Ci(G,w)),X.setAttribute("uv",new Ci(C,M)),X.setAttribute("faceIndex",new Ci(N,v)),t.push(X),l>ys&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function i_(o,t,i){const r=new Mr(o,t,i);return r.texture.mapping=Bc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function sT(o,t,i){const r=new Float32Array(_r),l=new J(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function a_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function r_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Uh(){return`

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
	`}function oT(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Gd||m===Vd,x=m===Ts||m===As;if(p||x){let _=t.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new n_(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return p&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new n_(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function lT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ms("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function cT(o,t,i,r){const l={},u=new WeakMap;function d(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const A in y.attributes)t.remove(y.attributes[A]);y.removeEventListener("dispose",d),delete l[y.id];const S=u.get(y);S&&(t.remove(S),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(_,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const S in y)t.update(y[S],o.ARRAY_BUFFER)}function p(_){const y=[],S=_.index,A=_.attributes.position;let w=0;if(S!==null){const G=S.array;w=S.version;for(let C=0,N=G.length;C<N;C+=3){const X=G[C+0],V=G[C+1],I=G[C+2];y.push(X,V,V,I,I,X)}}else if(A!==void 0){const G=A.array;w=A.version;for(let C=0,N=G.length/3-1;C<N;C+=3){const X=C+0,V=C+1,I=C+2;y.push(X,V,V,I,I,X)}}else return;const M=new(k_(y)?K_:Z_)(y,1);M.version=w;const v=u.get(_);v&&t.remove(v),u.set(_,M)}function x(_){const y=u.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:x}}function uT(o,t,i){let r;function l(y){r=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function m(y,S){o.drawElements(r,S,u,y*d),i.update(S,r,1)}function p(y,S,A){A!==0&&(o.drawElementsInstanced(r,S,u,y*d,A),i.update(S,r,A))}function x(y,S,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,y,0,A);let M=0;for(let v=0;v<A;v++)M+=S[v];i.update(M,r,1)}function _(y,S,A,w){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)p(y[v]/d,S[v],w[v]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,u,y,0,w,0,A);let v=0;for(let G=0;G<A;G++)v+=S[G]*w[G];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function fT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function dT(o,t,i){const r=new WeakMap,l=new Gt;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(h);if(y===void 0||y.count!==_){let D=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",D)};y!==void 0&&y.texture.dispose();const S=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let C=0;S===!0&&(C=1),A===!0&&(C=2),w===!0&&(C=3);let N=h.attributes.position.count*C,X=1;N>t.maxTextureSize&&(X=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const V=new Float32Array(N*X*4*_),I=new j_(V,N,X,_);I.type=ia,I.needsUpdate=!0;const Q=C*4;for(let L=0;L<_;L++){const F=M[L],ce=v[L],ue=G[L],fe=N*X*4*L;for(let ye=0;ye<F.count;ye++){const O=ye*Q;S===!0&&(l.fromBufferAttribute(F,ye),V[fe+O+0]=l.x,V[fe+O+1]=l.y,V[fe+O+2]=l.z,V[fe+O+3]=0),A===!0&&(l.fromBufferAttribute(ce,ye),V[fe+O+4]=l.x,V[fe+O+5]=l.y,V[fe+O+6]=l.z,V[fe+O+7]=0),w===!0&&(l.fromBufferAttribute(ue,ye),V[fe+O+8]=l.x,V[fe+O+9]=l.y,V[fe+O+10]=l.z,V[fe+O+11]=ue.itemSize===4?l.w:1)}}y={count:_,texture:I,size:new Ut(N,X)},r.set(h,y),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let S=0;for(let w=0;w<p.length;w++)S+=p[w];const A=h.morphTargetsRelative?1:1-S;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function hT(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,x=m.geometry,_=t.get(m,x);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const r0=new Gn,s_=new t0(1,1),s0=new j_,o0=new FS,l0=new $_,o_=[],l_=[],c_=new Float32Array(16),u_=new Float32Array(9),f_=new Float32Array(4);function Us(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=o_[l];if(u===void 0&&(u=new Float32Array(l),o_[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Hc(o,t){let i=l_[t];i===void 0&&(i=new Int32Array(t),l_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function pT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function mT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function vT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function _T(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;f_.set(r),o.uniformMatrix2fv(this.addr,!1,f_),pn(i,r)}}function xT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;u_.set(r),o.uniformMatrix3fv(this.addr,!1,u_),pn(i,r)}}function yT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(hn(i,r))return;c_.set(r),o.uniformMatrix4fv(this.addr,!1,c_),pn(i,r)}}function ST(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function MT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function bT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function TT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function AT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function RT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function CT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(s_.compareFunction=V_,u=s_):u=r0,i.setTexture2D(t||u,l)}function DT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||o0,l)}function UT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||l0,l)}function LT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||s0,l)}function NT(o){switch(o){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return vT;case 35674:return _T;case 35675:return xT;case 35676:return yT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return ET;case 35669:case 35673:return bT;case 5125:return TT;case 36294:return AT;case 36295:return RT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return LT}}function OT(o,t){o.uniform1fv(this.addr,t)}function PT(o,t){const i=Us(t,this.size,2);o.uniform2fv(this.addr,i)}function zT(o,t){const i=Us(t,this.size,3);o.uniform3fv(this.addr,i)}function BT(o,t){const i=Us(t,this.size,4);o.uniform4fv(this.addr,i)}function FT(o,t){const i=Us(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function IT(o,t){const i=Us(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function HT(o,t){const i=Us(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function GT(o,t){o.uniform1iv(this.addr,t)}function VT(o,t){o.uniform2iv(this.addr,t)}function kT(o,t){o.uniform3iv(this.addr,t)}function jT(o,t){o.uniform4iv(this.addr,t)}function XT(o,t){o.uniform1uiv(this.addr,t)}function qT(o,t){o.uniform2uiv(this.addr,t)}function WT(o,t){o.uniform3uiv(this.addr,t)}function YT(o,t){o.uniform4uiv(this.addr,t)}function ZT(o,t,i){const r=this.cache,l=t.length,u=Hc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||r0,u[d])}function KT(o,t,i){const r=this.cache,l=t.length,u=Hc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||o0,u[d])}function QT(o,t,i){const r=this.cache,l=t.length,u=Hc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||l0,u[d])}function JT(o,t,i){const r=this.cache,l=t.length,u=Hc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||s0,u[d])}function $T(o){switch(o){case 5126:return OT;case 35664:return PT;case 35665:return zT;case 35666:return BT;case 35674:return FT;case 35675:return IT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return kT;case 35669:case 35673:return jT;case 5125:return XT;case 36294:return qT;case 36295:return WT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}class eA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=NT(i.type)}}class tA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$T(i.type)}}class nA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function d_(o,t){o.seq.push(t),o.map[t.id]=t}function iA(o,t,i){const r=o.name,l=r.length;for(Ud.lastIndex=0;;){const u=Ud.exec(r),d=Ud.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){d_(i,p===void 0?new eA(h,o,t):new tA(h,o,t));break}else{let _=i.map[h];_===void 0&&(_=new nA(h),d_(i,_)),i=_}}}class Uc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);iA(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function h_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const aA=37297;let rA=0;function sA(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const p_=new ut;function oA(o){wt._getMatrix(p_,wt.workingColorSpace,o);const t=`mat3( ${p_.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(o)){case Lc:return[t,"LinearTransferOETF"];case Ht:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function m_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+sA(o.getShaderSource(t),h)}else return u}function lA(o,t){const i=oA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function cA(o,t){let i;switch(t){case Ky:i="Linear";break;case Qy:i="Reinhard";break;case Jy:i="Cineon";break;case $y:i="ACESFilmic";break;case tS:i="AgX";break;case nS:i="Neutral";break;case eS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tc=new J;function uA(){wt.getLuminanceCoefficients(Tc);const o=Tc.x.toFixed(4),t=Tc.y.toFixed(4),i=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function dA(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function hA(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Lo(o){return o!==""}function g_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function v_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(o){return o.replace(pA,gA)}const mA=new Map;function gA(o,t){let i=ft[t];if(i===void 0){const r=mA.get(t);if(r!==void 0)i=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return vh(i)}const vA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function __(o){return o.replace(vA,_A)}function _A(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function x_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function xA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===D_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===U_?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function yA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case Bc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function SA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function MA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case L_:t="ENVMAP_BLENDING_MULTIPLY";break;case Yy:t="ENVMAP_BLENDING_MIX";break;case Zy:t="ENVMAP_BLENDING_ADD";break}return t}function EA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function bA(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=xA(i),p=yA(i),x=SA(i),_=MA(i),y=EA(i),S=fA(i),A=dA(u),w=l.createProgram();let M,v,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),v.length>0&&(v+=`
`)):(M=[x_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),v=[x_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ft.tonemapping_pars_fragment:"",i.toneMapping!==Ha?cA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,lA("linearToOutputTexel",i.outputColorSpace),uA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),d=vh(d),d=g_(d,i),d=v_(d,i),h=vh(h),h=g_(h,i),h=v_(h,i),d=__(d),h=__(h),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=G+M+d,N=G+v+h,X=h_(l,l.VERTEX_SHADER,C),V=h_(l,l.FRAGMENT_SHADER,N);l.attachShader(w,X),l.attachShader(w,V),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(F){if(o.debug.checkShaderErrors){const ce=l.getProgramInfoLog(w)||"",ue=l.getShaderInfoLog(X)||"",fe=l.getShaderInfoLog(V)||"",ye=ce.trim(),O=ue.trim(),Y=fe.trim();let q=!0,oe=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,X,V);else{const me=m_(l,X,"vertex"),P=m_(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ye+`
`+me+`
`+P)}else ye!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ye):(O===""||Y==="")&&(oe=!1);oe&&(F.diagnostics={runnable:q,programLog:ye,vertexShader:{log:O,prefix:M},fragmentShader:{log:Y,prefix:v}})}l.deleteShader(X),l.deleteShader(V),Q=new Uc(l,w),D=hA(l,w)}let Q;this.getUniforms=function(){return Q===void 0&&I(this),Q};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(w,aA)),L},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=rA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=V,this}let TA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new RA(t),i.set(t,r)),r}}class RA{constructor(t){this.id=TA++,this.code=t,this.usedTimes=0}}function wA(o,t,i,r,l,u,d){const h=new q_,m=new AA,p=new Set,x=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,L,F,ce,ue){const fe=ce.fog,ye=ue.geometry,O=D.isMeshStandardMaterial?ce.environment:null,Y=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),q=Y&&Y.mapping===Bc?Y.image.height:null,oe=A[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const me=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,P=me!==void 0?me.length:0;let $=0;ye.morphAttributes.position!==void 0&&($=1),ye.morphAttributes.normal!==void 0&&($=2),ye.morphAttributes.color!==void 0&&($=3);let Me,Ee,U,ie;if(oe){const Et=Ai[oe];Me=Et.vertexShader,Ee=Et.fragmentShader}else Me=D.vertexShader,Ee=D.fragmentShader,m.update(D),U=m.getVertexShaderID(D),ie=m.getFragmentShaderID(D);const de=o.getRenderTarget(),Ue=o.state.buffers.depth.getReversed(),Le=ue.isInstancedMesh===!0,et=ue.isBatchedMesh===!0,Tt=!!D.map,ot=!!D.matcap,H=!!Y,pt=!!D.aoMap,We=!!D.lightMap,ht=!!D.bumpMap,Ke=!!D.normalMap,Vt=!!D.displacementMap,Ie=!!D.emissiveMap,rt=!!D.metalnessMap,Qt=!!D.roughnessMap,Zt=D.anisotropy>0,z=D.clearcoat>0,b=D.dispersion>0,ne=D.iridescence>0,ge=D.sheen>0,be=D.transmission>0,he=Zt&&!!D.anisotropyMap,Ye=z&&!!D.clearcoatMap,we=z&&!!D.clearcoatNormalMap,Xe=z&&!!D.clearcoatRoughnessMap,qe=ne&&!!D.iridescenceMap,Ae=ne&&!!D.iridescenceThicknessMap,Ce=ge&&!!D.sheenColorMap,Ze=ge&&!!D.sheenRoughnessMap,Be=!!D.specularMap,Ne=!!D.specularColorMap,st=!!D.specularIntensityMap,j=be&&!!D.transmissionMap,Re=be&&!!D.thicknessMap,De=!!D.gradientMap,Fe=!!D.alphaMap,Te=D.alphaTest>0,xe=!!D.alphaHash,He=!!D.extensions;let it=Ha;D.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(it=o.toneMapping);const Ot={shaderID:oe,shaderType:D.type,shaderName:D.name,vertexShader:Me,fragmentShader:Ee,defines:D.defines,customVertexShaderID:U,customFragmentShaderID:ie,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:et,batchingColor:et&&ue._colorsTexture!==null,instancing:Le,instancingColor:Le&&ue.instanceColor!==null,instancingMorph:Le&&ue.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Rs,alphaToCoverage:!!D.alphaToCoverage,map:Tt,matcap:ot,envMap:H,envMapMode:H&&Y.mapping,envMapCubeUVHeight:q,aoMap:pt,lightMap:We,bumpMap:ht,normalMap:Ke,displacementMap:y&&Vt,emissiveMap:Ie,normalMapObjectSpace:Ke&&D.normalMapType===oS,normalMapTangentSpace:Ke&&D.normalMapType===sS,metalnessMap:rt,roughnessMap:Qt,anisotropy:Zt,anisotropyMap:he,clearcoat:z,clearcoatMap:Ye,clearcoatNormalMap:we,clearcoatRoughnessMap:Xe,dispersion:b,iridescence:ne,iridescenceMap:qe,iridescenceThicknessMap:Ae,sheen:ge,sheenColorMap:Ce,sheenRoughnessMap:Ze,specularMap:Be,specularColorMap:Ne,specularIntensityMap:st,transmission:be,transmissionMap:j,thicknessMap:Re,gradientMap:De,opaque:D.transparent===!1&&D.blending===Ss&&D.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Te,alphaHash:xe,combine:D.combine,mapUv:Tt&&w(D.map.channel),aoMapUv:pt&&w(D.aoMap.channel),lightMapUv:We&&w(D.lightMap.channel),bumpMapUv:ht&&w(D.bumpMap.channel),normalMapUv:Ke&&w(D.normalMap.channel),displacementMapUv:Vt&&w(D.displacementMap.channel),emissiveMapUv:Ie&&w(D.emissiveMap.channel),metalnessMapUv:rt&&w(D.metalnessMap.channel),roughnessMapUv:Qt&&w(D.roughnessMap.channel),anisotropyMapUv:he&&w(D.anisotropyMap.channel),clearcoatMapUv:Ye&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:we&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&w(D.sheenRoughnessMap.channel),specularMapUv:Be&&w(D.specularMap.channel),specularColorMapUv:Ne&&w(D.specularColorMap.channel),specularIntensityMapUv:st&&w(D.specularIntensityMap.channel),transmissionMapUv:j&&w(D.transmissionMap.channel),thicknessMapUv:Re&&w(D.thicknessMap.channel),alphaMapUv:Fe&&w(D.alphaMap.channel),vertexTangents:!!ye.attributes.tangent&&(Ke||Zt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!ye.attributes.uv&&(Tt||Fe),fog:!!fe,useFog:D.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ue,skinning:ue.isSkinnedMesh===!0,morphTargets:ye.morphAttributes.position!==void 0,morphNormals:ye.morphAttributes.normal!==void 0,morphColors:ye.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:$,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:Tt&&D.map.isVideoTexture===!0&&wt.getTransfer(D.map.colorSpace)===Ht,decodeVideoTextureEmissive:Ie&&D.emissiveMap.isVideoTexture===!0&&wt.getTransfer(D.emissiveMap.colorSpace)===Ht,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===na,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:He&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&D.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function v(D){const L=[];if(D.shaderID?L.push(D.shaderID):(L.push(D.customVertexShaderID),L.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)L.push(F),L.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(G(L,D),C(L,D),L.push(o.outputColorSpace)),L.push(D.customProgramCacheKey),L.join()}function G(D,L){D.push(L.precision),D.push(L.outputColorSpace),D.push(L.envMapMode),D.push(L.envMapCubeUVHeight),D.push(L.mapUv),D.push(L.alphaMapUv),D.push(L.lightMapUv),D.push(L.aoMapUv),D.push(L.bumpMapUv),D.push(L.normalMapUv),D.push(L.displacementMapUv),D.push(L.emissiveMapUv),D.push(L.metalnessMapUv),D.push(L.roughnessMapUv),D.push(L.anisotropyMapUv),D.push(L.clearcoatMapUv),D.push(L.clearcoatNormalMapUv),D.push(L.clearcoatRoughnessMapUv),D.push(L.iridescenceMapUv),D.push(L.iridescenceThicknessMapUv),D.push(L.sheenColorMapUv),D.push(L.sheenRoughnessMapUv),D.push(L.specularMapUv),D.push(L.specularColorMapUv),D.push(L.specularIntensityMapUv),D.push(L.transmissionMapUv),D.push(L.thicknessMapUv),D.push(L.combine),D.push(L.fogExp2),D.push(L.sizeAttenuation),D.push(L.morphTargetsCount),D.push(L.morphAttributeCount),D.push(L.numDirLights),D.push(L.numPointLights),D.push(L.numSpotLights),D.push(L.numSpotLightMaps),D.push(L.numHemiLights),D.push(L.numRectAreaLights),D.push(L.numDirLightShadows),D.push(L.numPointLightShadows),D.push(L.numSpotLightShadows),D.push(L.numSpotLightShadowsWithMaps),D.push(L.numLightProbes),D.push(L.shadowMapType),D.push(L.toneMapping),D.push(L.numClippingPlanes),D.push(L.numClipIntersection),D.push(L.depthPacking)}function C(D,L){h.disableAll(),L.supportsVertexTextures&&h.enable(0),L.instancing&&h.enable(1),L.instancingColor&&h.enable(2),L.instancingMorph&&h.enable(3),L.matcap&&h.enable(4),L.envMap&&h.enable(5),L.normalMapObjectSpace&&h.enable(6),L.normalMapTangentSpace&&h.enable(7),L.clearcoat&&h.enable(8),L.iridescence&&h.enable(9),L.alphaTest&&h.enable(10),L.vertexColors&&h.enable(11),L.vertexAlphas&&h.enable(12),L.vertexUv1s&&h.enable(13),L.vertexUv2s&&h.enable(14),L.vertexUv3s&&h.enable(15),L.vertexTangents&&h.enable(16),L.anisotropy&&h.enable(17),L.alphaHash&&h.enable(18),L.batching&&h.enable(19),L.dispersion&&h.enable(20),L.batchingColor&&h.enable(21),L.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),D.push(h.mask)}function N(D){const L=A[D.type];let F;if(L){const ce=Ai[L];F=QS.clone(ce.uniforms)}else F=D.uniforms;return F}function X(D,L){let F;for(let ce=0,ue=x.length;ce<ue;ce++){const fe=x[ce];if(fe.cacheKey===L){F=fe,++F.usedTimes;break}}return F===void 0&&(F=new bA(o,L,D,u),x.push(F)),F}function V(D){if(--D.usedTimes===0){const L=x.indexOf(D);x[L]=x[x.length-1],x.pop(),D.destroy()}}function I(D){m.remove(D)}function Q(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:N,acquireProgram:X,releaseProgram:V,releaseShaderCache:I,programs:x,dispose:Q}}function CA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function DA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function y_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function S_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(_,y,S,A,w,M){let v=o[t];return v===void 0?(v={id:_.id,object:_,geometry:y,material:S,groupOrder:A,renderOrder:_.renderOrder,z:w,group:M},o[t]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=S,v.groupOrder=A,v.renderOrder=_.renderOrder,v.z=w,v.group=M),t++,v}function h(_,y,S,A,w,M){const v=d(_,y,S,A,w,M);S.transmission>0?r.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(_,y,S,A,w,M){const v=d(_,y,S,A,w,M);S.transmission>0?r.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,y){i.length>1&&i.sort(_||DA),r.length>1&&r.sort(y||y_),l.length>1&&l.sort(y||y_)}function x(){for(let _=t,y=o.length;_<y;_++){const S=o[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:x,sort:p}}function UA(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new S_,o.set(r,[d])):l>=u.length?(d=new S_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function LA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new Ct};break;case"SpotLight":i={position:new J,direction:new J,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new J,halfWidth:new J,halfHeight:new J};break}return o[t.id]=i,i}}}function NA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let OA=0;function PA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function zA(o){const t=new LA,i=NA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new J);const l=new J,u=new Kt,d=new Kt;function h(p){let x=0,_=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,A=0,w=0,M=0,v=0,G=0,C=0,N=0,X=0,V=0,I=0;p.sort(PA);for(let D=0,L=p.length;D<L;D++){const F=p[D],ce=F.color,ue=F.intensity,fe=F.distance,ye=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)x+=ce.r*ue,_+=ce.g*ue,y+=ce.b*ue;else if(F.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(F.sh.coefficients[O],ue);I++}else if(F.isDirectionalLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Y=F.shadow,q=i.get(F);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=ye,r.directionalShadowMatrix[S]=F.shadow.matrix,G++}r.directional[S]=O,S++}else if(F.isSpotLight){const O=t.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(ce).multiplyScalar(ue),O.distance=fe,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,r.spot[w]=O;const Y=F.shadow;if(F.map&&(r.spotLightMap[X]=F.map,X++,Y.updateMatrices(F),F.castShadow&&V++),r.spotLightMatrix[w]=Y.matrix,F.castShadow){const q=i.get(F);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,r.spotShadow[w]=q,r.spotShadowMap[w]=ye,N++}w++}else if(F.isRectAreaLight){const O=t.get(F);O.color.copy(ce).multiplyScalar(ue),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),r.rectArea[M]=O,M++}else if(F.isPointLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const Y=F.shadow,q=i.get(F);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,r.pointShadow[A]=q,r.pointShadowMap[A]=ye,r.pointShadowMatrix[A]=F.shadow.matrix,C++}r.point[A]=O,A++}else if(F.isHemisphereLight){const O=t.get(F);O.skyColor.copy(F.color).multiplyScalar(ue),O.groundColor.copy(F.groundColor).multiplyScalar(ue),r.hemi[v]=O,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const Q=r.hash;(Q.directionalLength!==S||Q.pointLength!==A||Q.spotLength!==w||Q.rectAreaLength!==M||Q.hemiLength!==v||Q.numDirectionalShadows!==G||Q.numPointShadows!==C||Q.numSpotShadows!==N||Q.numSpotMaps!==X||Q.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=M,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=G,r.directionalShadowMap.length=G,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=G,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=N+X-V,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=I,Q.directionalLength=S,Q.pointLength=A,Q.spotLength=w,Q.rectAreaLength=M,Q.hemiLength=v,Q.numDirectionalShadows=G,Q.numPointShadows=C,Q.numSpotShadows=N,Q.numSpotMaps=X,Q.numLightProbes=I,r.version=OA++)}function m(p,x){let _=0,y=0,S=0,A=0,w=0;const M=x.matrixWorldInverse;for(let v=0,G=p.length;v<G;v++){const C=p[v];if(C.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),_++}else if(C.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),S++}else if(C.isRectAreaLight){const N=r.rectArea[A];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(M),d.identity(),u.copy(C.matrixWorld),u.premultiply(M),d.extractRotation(u),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),A++}else if(C.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(M),y++}else if(C.isHemisphereLight){const N=r.hemi[w];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(M),w++}}}return{setup:h,setupView:m,state:r}}function M_(o){const t=new zA(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function d(x){r.push(x)}function h(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function BA(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new M_(o),t.set(l,[h])):u>=d.length?(h=new M_(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const FA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
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
}`;function HA(o,t,i){let r=new Ch;const l=new Ut,u=new Ut,d=new Gt,h=new lM({depthPacking:rS}),m=new cM,p={},x=i.maxTextureSize,_={[Va]:Hn,[Hn]:Va,[na]:na},y=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:FA,fragmentShader:IA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const A=new oa;A.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new aa(A,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D_;let v=this.type;this.render=function(V,I,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||V.length===0)return;const D=o.getRenderTarget(),L=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ce=o.state;ce.setBlending(Ia),ce.buffers.depth.getReversed()?ce.buffers.color.setClear(0,0,0,0):ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ue=v!==ta&&this.type===ta,fe=v===ta&&this.type!==ta;for(let ye=0,O=V.length;ye<O;ye++){const Y=V[ye],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const oe=q.getFrameExtents();if(l.multiply(oe),u.copy(q.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/oe.x),l.x=u.x*oe.x,q.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/oe.y),l.y=u.y*oe.y,q.mapSize.y=u.y)),q.map===null||ue===!0||fe===!0){const P=this.type!==ta?{minFilter:_i,magFilter:_i}:{};q.map!==null&&q.map.dispose(),q.map=new Mr(l.x,l.y,P),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const me=q.getViewportCount();for(let P=0;P<me;P++){const $=q.getViewport(P);d.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),ce.viewport(d),q.updateMatrices(Y,P),r=q.getFrustum(),N(I,Q,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===ta&&G(q,Q),q.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(D,L,F)};function G(V,I){const Q=t.update(w);y.defines.VSM_SAMPLES!==V.blurSamples&&(y.defines.VSM_SAMPLES=V.blurSamples,S.defines.VSM_SAMPLES=V.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Mr(l.x,l.y)),y.uniforms.shadow_pass.value=V.map.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(I,null,Q,y,w,null),S.uniforms.shadow_pass.value=V.mapPass.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(I,null,Q,S,w,null)}function C(V,I,Q,D){let L=null;const F=Q.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(F!==void 0)L=F;else if(L=Q.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const ce=L.uuid,ue=I.uuid;let fe=p[ce];fe===void 0&&(fe={},p[ce]=fe);let ye=fe[ue];ye===void 0&&(ye=L.clone(),fe[ue]=ye,I.addEventListener("dispose",X)),L=ye}if(L.visible=I.visible,L.wireframe=I.wireframe,D===ta?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:_[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,Q.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ce=o.properties.get(L);ce.light=Q}return L}function N(V,I,Q,D,L){if(V.visible===!1)return;if(V.layers.test(I.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&L===ta)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,V.matrixWorld);const ue=t.update(V),fe=V.material;if(Array.isArray(fe)){const ye=ue.groups;for(let O=0,Y=ye.length;O<Y;O++){const q=ye[O],oe=fe[q.materialIndex];if(oe&&oe.visible){const me=C(V,oe,D,L);V.onBeforeShadow(o,V,I,Q,ue,me,q),o.renderBufferDirect(Q,null,ue,me,V,q),V.onAfterShadow(o,V,I,Q,ue,me,q)}}}else if(fe.visible){const ye=C(V,fe,D,L);V.onBeforeShadow(o,V,I,Q,ue,ye,null),o.renderBufferDirect(Q,null,ue,ye,V,null),V.onAfterShadow(o,V,I,Q,ue,ye,null)}}const ce=V.children;for(let ue=0,fe=ce.length;ue<fe;ue++)N(ce[ue],I,Q,D,L)}function X(V){V.target.removeEventListener("dispose",X);for(const Q in p){const D=p[Q],L=V.target.uuid;L in D&&(D[L].dispose(),delete D[L])}}}const GA={[Od]:Pd,[zd]:Id,[Bd]:Hd,[bs]:Fd,[Pd]:Od,[Id]:zd,[Hd]:Bd,[Fd]:bs};function VA(o,t){function i(){let j=!1;const Re=new Gt;let De=null;const Fe=new Gt(0,0,0,0);return{setMask:function(Te){De!==Te&&!j&&(o.colorMask(Te,Te,Te,Te),De=Te)},setLocked:function(Te){j=Te},setClear:function(Te,xe,He,it,Ot){Ot===!0&&(Te*=it,xe*=it,He*=it),Re.set(Te,xe,He,it),Fe.equals(Re)===!1&&(o.clearColor(Te,xe,He,it),Fe.copy(Re))},reset:function(){j=!1,De=null,Fe.set(-1,0,0,0)}}}function r(){let j=!1,Re=!1,De=null,Fe=null,Te=null;return{setReversed:function(xe){if(Re!==xe){const He=t.get("EXT_clip_control");xe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Re=xe;const it=Te;Te=null,this.setClear(it)}},getReversed:function(){return Re},setTest:function(xe){xe?de(o.DEPTH_TEST):Ue(o.DEPTH_TEST)},setMask:function(xe){De!==xe&&!j&&(o.depthMask(xe),De=xe)},setFunc:function(xe){if(Re&&(xe=GA[xe]),Fe!==xe){switch(xe){case Od:o.depthFunc(o.NEVER);break;case Pd:o.depthFunc(o.ALWAYS);break;case zd:o.depthFunc(o.LESS);break;case bs:o.depthFunc(o.LEQUAL);break;case Bd:o.depthFunc(o.EQUAL);break;case Fd:o.depthFunc(o.GEQUAL);break;case Id:o.depthFunc(o.GREATER);break;case Hd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Fe=xe}},setLocked:function(xe){j=xe},setClear:function(xe){Te!==xe&&(Re&&(xe=1-xe),o.clearDepth(xe),Te=xe)},reset:function(){j=!1,De=null,Fe=null,Te=null,Re=!1}}}function l(){let j=!1,Re=null,De=null,Fe=null,Te=null,xe=null,He=null,it=null,Ot=null;return{setTest:function(Et){j||(Et?de(o.STENCIL_TEST):Ue(o.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!j&&(o.stencilMask(Et),Re=Et)},setFunc:function(Et,Cn,$n){(De!==Et||Fe!==Cn||Te!==$n)&&(o.stencilFunc(Et,Cn,$n),De=Et,Fe=Cn,Te=$n)},setOp:function(Et,Cn,$n){(xe!==Et||He!==Cn||it!==$n)&&(o.stencilOp(Et,Cn,$n),xe=Et,He=Cn,it=$n)},setLocked:function(Et){j=Et},setClear:function(Et){Ot!==Et&&(o.clearStencil(Et),Ot=Et)},reset:function(){j=!1,Re=null,De=null,Fe=null,Te=null,xe=null,He=null,it=null,Ot=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},_={},y=new WeakMap,S=[],A=null,w=!1,M=null,v=null,G=null,C=null,N=null,X=null,V=null,I=new Ct(0,0,0),Q=0,D=!1,L=null,F=null,ce=null,ue=null,fe=null;const ye=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=Y>=2);let oe=null,me={};const P=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),Me=new Gt().fromArray(P),Ee=new Gt().fromArray($);function U(j,Re,De,Fe){const Te=new Uint8Array(4),xe=o.createTexture();o.bindTexture(j,xe),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let He=0;He<De;He++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,Fe,0,o.RGBA,o.UNSIGNED_BYTE,Te):o.texImage2D(Re+He,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Te);return xe}const ie={};ie[o.TEXTURE_2D]=U(o.TEXTURE_2D,o.TEXTURE_2D,1),ie[o.TEXTURE_CUBE_MAP]=U(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[o.TEXTURE_2D_ARRAY]=U(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ie[o.TEXTURE_3D]=U(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),de(o.DEPTH_TEST),d.setFunc(bs),ht(!1),Ke(Mv),de(o.CULL_FACE),pt(Ia);function de(j){x[j]!==!0&&(o.enable(j),x[j]=!0)}function Ue(j){x[j]!==!1&&(o.disable(j),x[j]=!1)}function Le(j,Re){return _[j]!==Re?(o.bindFramebuffer(j,Re),_[j]=Re,j===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Re),j===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function et(j,Re){let De=S,Fe=!1;if(j){De=y.get(Re),De===void 0&&(De=[],y.set(Re,De));const Te=j.textures;if(De.length!==Te.length||De[0]!==o.COLOR_ATTACHMENT0){for(let xe=0,He=Te.length;xe<He;xe++)De[xe]=o.COLOR_ATTACHMENT0+xe;De.length=Te.length,Fe=!0}}else De[0]!==o.BACK&&(De[0]=o.BACK,Fe=!0);Fe&&o.drawBuffers(De)}function Tt(j){return A!==j?(o.useProgram(j),A=j,!0):!1}const ot={[vr]:o.FUNC_ADD,[Uy]:o.FUNC_SUBTRACT,[Ly]:o.FUNC_REVERSE_SUBTRACT};ot[Ny]=o.MIN,ot[Oy]=o.MAX;const H={[Py]:o.ZERO,[zy]:o.ONE,[By]:o.SRC_COLOR,[Ld]:o.SRC_ALPHA,[ky]:o.SRC_ALPHA_SATURATE,[Gy]:o.DST_COLOR,[Iy]:o.DST_ALPHA,[Fy]:o.ONE_MINUS_SRC_COLOR,[Nd]:o.ONE_MINUS_SRC_ALPHA,[Vy]:o.ONE_MINUS_DST_COLOR,[Hy]:o.ONE_MINUS_DST_ALPHA,[jy]:o.CONSTANT_COLOR,[Xy]:o.ONE_MINUS_CONSTANT_COLOR,[qy]:o.CONSTANT_ALPHA,[Wy]:o.ONE_MINUS_CONSTANT_ALPHA};function pt(j,Re,De,Fe,Te,xe,He,it,Ot,Et){if(j===Ia){w===!0&&(Ue(o.BLEND),w=!1);return}if(w===!1&&(de(o.BLEND),w=!0),j!==Dy){if(j!==M||Et!==D){if((v!==vr||N!==vr)&&(o.blendEquation(o.FUNC_ADD),v=vr,N=vr),Et)switch(j){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ev:o.blendFunc(o.ONE,o.ONE);break;case bv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ev:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case bv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}G=null,C=null,X=null,V=null,I.set(0,0,0),Q=0,M=j,D=Et}return}Te=Te||Re,xe=xe||De,He=He||Fe,(Re!==v||Te!==N)&&(o.blendEquationSeparate(ot[Re],ot[Te]),v=Re,N=Te),(De!==G||Fe!==C||xe!==X||He!==V)&&(o.blendFuncSeparate(H[De],H[Fe],H[xe],H[He]),G=De,C=Fe,X=xe,V=He),(it.equals(I)===!1||Ot!==Q)&&(o.blendColor(it.r,it.g,it.b,Ot),I.copy(it),Q=Ot),M=j,D=!1}function We(j,Re){j.side===na?Ue(o.CULL_FACE):de(o.CULL_FACE);let De=j.side===Hn;Re&&(De=!De),ht(De),j.blending===Ss&&j.transparent===!1?pt(Ia):pt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),u.setMask(j.colorWrite);const Fe=j.stencilWrite;h.setTest(Fe),Fe&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ie(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):Ue(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(j){L!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),L=j)}function Ke(j){j!==wy?(de(o.CULL_FACE),j!==F&&(j===Mv?o.cullFace(o.BACK):j===Cy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ue(o.CULL_FACE),F=j}function Vt(j){j!==ce&&(O&&o.lineWidth(j),ce=j)}function Ie(j,Re,De){j?(de(o.POLYGON_OFFSET_FILL),(ue!==Re||fe!==De)&&(o.polygonOffset(Re,De),ue=Re,fe=De)):Ue(o.POLYGON_OFFSET_FILL)}function rt(j){j?de(o.SCISSOR_TEST):Ue(o.SCISSOR_TEST)}function Qt(j){j===void 0&&(j=o.TEXTURE0+ye-1),oe!==j&&(o.activeTexture(j),oe=j)}function Zt(j,Re,De){De===void 0&&(oe===null?De=o.TEXTURE0+ye-1:De=oe);let Fe=me[De];Fe===void 0&&(Fe={type:void 0,texture:void 0},me[De]=Fe),(Fe.type!==j||Fe.texture!==Re)&&(oe!==De&&(o.activeTexture(De),oe=De),o.bindTexture(j,Re||ie[j]),Fe.type=j,Fe.texture=Re)}function z(){const j=me[oe];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ne(){try{o.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{o.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function be(){try{o.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{o.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{o.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{o.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xe(){try{o.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qe(){try{o.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{o.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(j){Me.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),Me.copy(j))}function Ze(j){Ee.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),Ee.copy(j))}function Be(j,Re){let De=p.get(Re);De===void 0&&(De=new WeakMap,p.set(Re,De));let Fe=De.get(j);Fe===void 0&&(Fe=o.getUniformBlockIndex(Re,j.name),De.set(j,Fe))}function Ne(j,Re){const Fe=p.get(Re).get(j);m.get(Re)!==Fe&&(o.uniformBlockBinding(Re,Fe,j.__bindingPointIndex),m.set(Re,Fe))}function st(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},oe=null,me={},_={},y=new WeakMap,S=[],A=null,w=!1,M=null,v=null,G=null,C=null,N=null,X=null,V=null,I=new Ct(0,0,0),Q=0,D=!1,L=null,F=null,ce=null,ue=null,fe=null,Me.set(0,0,o.canvas.width,o.canvas.height),Ee.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:de,disable:Ue,bindFramebuffer:Le,drawBuffers:et,useProgram:Tt,setBlending:pt,setMaterial:We,setFlipSided:ht,setCullFace:Ke,setLineWidth:Vt,setPolygonOffset:Ie,setScissorTest:rt,activeTexture:Qt,bindTexture:Zt,unbindTexture:z,compressedTexImage2D:b,compressedTexImage3D:ne,texImage2D:qe,texImage3D:Ae,updateUBOMapping:Be,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:Xe,texSubImage2D:ge,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:Ye,scissor:Ce,viewport:Ze,reset:st}}function kA(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,x=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(z,b){return S?new OffscreenCanvas(z,b):Oc("canvas")}function w(z,b,ne){let ge=1;const be=Zt(z);if((be.width>ne||be.height>ne)&&(ge=ne/Math.max(be.width,be.height)),ge<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const he=Math.floor(ge*be.width),Ye=Math.floor(ge*be.height);_===void 0&&(_=A(he,Ye));const we=b?A(he,Ye):_;return we.width=he,we.height=Ye,we.getContext("2d").drawImage(z,0,0,he,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+he+"x"+Ye+")."),we}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),z;return z}function M(z){return z.generateMipmaps}function v(z){o.generateMipmap(z)}function G(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(z,b,ne,ge,be=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let he=b;if(b===o.RED&&(ne===o.FLOAT&&(he=o.R32F),ne===o.HALF_FLOAT&&(he=o.R16F),ne===o.UNSIGNED_BYTE&&(he=o.R8)),b===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.R8UI),ne===o.UNSIGNED_SHORT&&(he=o.R16UI),ne===o.UNSIGNED_INT&&(he=o.R32UI),ne===o.BYTE&&(he=o.R8I),ne===o.SHORT&&(he=o.R16I),ne===o.INT&&(he=o.R32I)),b===o.RG&&(ne===o.FLOAT&&(he=o.RG32F),ne===o.HALF_FLOAT&&(he=o.RG16F),ne===o.UNSIGNED_BYTE&&(he=o.RG8)),b===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.RG8UI),ne===o.UNSIGNED_SHORT&&(he=o.RG16UI),ne===o.UNSIGNED_INT&&(he=o.RG32UI),ne===o.BYTE&&(he=o.RG8I),ne===o.SHORT&&(he=o.RG16I),ne===o.INT&&(he=o.RG32I)),b===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(he=o.RGB16UI),ne===o.UNSIGNED_INT&&(he=o.RGB32UI),ne===o.BYTE&&(he=o.RGB8I),ne===o.SHORT&&(he=o.RGB16I),ne===o.INT&&(he=o.RGB32I)),b===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(he=o.RGBA16UI),ne===o.UNSIGNED_INT&&(he=o.RGBA32UI),ne===o.BYTE&&(he=o.RGBA8I),ne===o.SHORT&&(he=o.RGBA16I),ne===o.INT&&(he=o.RGBA32I)),b===o.RGB&&ne===o.UNSIGNED_INT_5_9_9_9_REV&&(he=o.RGB9_E5),b===o.RGBA){const Ye=be?Lc:wt.getTransfer(ge);ne===o.FLOAT&&(he=o.RGBA32F),ne===o.HALF_FLOAT&&(he=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(he=Ye===Ht?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT_4_4_4_4&&(he=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(he=o.RGB5_A1)}return(he===o.R16F||he===o.R32F||he===o.RG16F||he===o.RG32F||he===o.RGBA16F||he===o.RGBA32F)&&t.get("EXT_color_buffer_float"),he}function N(z,b){let ne;return z?b===null||b===Sr||b===zo?ne=o.DEPTH24_STENCIL8:b===ia?ne=o.DEPTH32F_STENCIL8:b===Po&&(ne=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Sr||b===zo?ne=o.DEPTH_COMPONENT24:b===ia?ne=o.DEPTH_COMPONENT32F:b===Po&&(ne=o.DEPTH_COMPONENT16),ne}function X(z,b){return M(z)===!0||z.isFramebufferTexture&&z.minFilter!==_i&&z.minFilter!==Ri?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function V(z){const b=z.target;b.removeEventListener("dispose",V),Q(b),b.isVideoTexture&&x.delete(b)}function I(z){const b=z.target;b.removeEventListener("dispose",I),L(b)}function Q(z){const b=r.get(z);if(b.__webglInit===void 0)return;const ne=z.source,ge=y.get(ne);if(ge){const be=ge[b.__cacheKey];be.usedTimes--,be.usedTimes===0&&D(z),Object.keys(ge).length===0&&y.delete(ne)}r.remove(z)}function D(z){const b=r.get(z);o.deleteTexture(b.__webglTexture);const ne=z.source,ge=y.get(ne);delete ge[b.__cacheKey],d.memory.textures--}function L(z){const b=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(b.__webglFramebuffer[ge]))for(let be=0;be<b.__webglFramebuffer[ge].length;be++)o.deleteFramebuffer(b.__webglFramebuffer[ge][be]);else o.deleteFramebuffer(b.__webglFramebuffer[ge]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ge])}else{if(Array.isArray(b.__webglFramebuffer))for(let ge=0;ge<b.__webglFramebuffer.length;ge++)o.deleteFramebuffer(b.__webglFramebuffer[ge]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ge=0;ge<b.__webglColorRenderbuffer.length;ge++)b.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ge]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ne=z.textures;for(let ge=0,be=ne.length;ge<be;ge++){const he=r.get(ne[ge]);he.__webglTexture&&(o.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove(ne[ge])}r.remove(z)}let F=0;function ce(){F=0}function ue(){const z=F;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),F+=1,z}function fe(z){const b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function ye(z,b){const ne=r.get(z);if(z.isVideoTexture&&rt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ne.__version!==z.version){const ge=z.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(ne,z,b);return}}else z.isExternalTexture&&(ne.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+b)}function O(z,b){const ne=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){ie(ne,z,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+b)}function Y(z,b){const ne=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){ie(ne,z,b);return}i.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+b)}function q(z,b){const ne=r.get(z);if(z.version>0&&ne.__version!==z.version){de(ne,z,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+b)}const oe={[kd]:o.REPEAT,[xr]:o.CLAMP_TO_EDGE,[jd]:o.MIRRORED_REPEAT},me={[_i]:o.NEAREST,[iS]:o.NEAREST_MIPMAP_NEAREST,[tc]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[ed]:o.LINEAR_MIPMAP_NEAREST,[yr]:o.LINEAR_MIPMAP_LINEAR},P={[lS]:o.NEVER,[pS]:o.ALWAYS,[cS]:o.LESS,[V_]:o.LEQUAL,[uS]:o.EQUAL,[hS]:o.GEQUAL,[fS]:o.GREATER,[dS]:o.NOTEQUAL};function $(z,b){if(b.type===ia&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ri||b.magFilter===ed||b.magFilter===tc||b.magFilter===yr||b.minFilter===Ri||b.minFilter===ed||b.minFilter===tc||b.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,oe[b.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,oe[b.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,oe[b.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,me[b.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,P[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===_i||b.minFilter!==tc&&b.minFilter!==yr||b.type===ia&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ne=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Me(z,b){let ne=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",V));const ge=b.source;let be=y.get(ge);be===void 0&&(be={},y.set(ge,be));const he=fe(b);if(he!==z.__cacheKey){be[he]===void 0&&(be[he]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ne=!0),be[he].usedTimes++;const Ye=be[z.__cacheKey];Ye!==void 0&&(be[z.__cacheKey].usedTimes--,Ye.usedTimes===0&&D(b)),z.__cacheKey=he,z.__webglTexture=be[he].texture}return ne}function Ee(z,b,ne){return Math.floor(Math.floor(z/ne)/b)}function U(z,b,ne,ge){const he=z.updateRanges;if(he.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,ne,ge,b.data);else{he.sort((Ae,Ce)=>Ae.start-Ce.start);let Ye=0;for(let Ae=1;Ae<he.length;Ae++){const Ce=he[Ye],Ze=he[Ae],Be=Ce.start+Ce.count,Ne=Ee(Ze.start,b.width,4),st=Ee(Ce.start,b.width,4);Ze.start<=Be+1&&Ne===st&&Ee(Ze.start+Ze.count-1,b.width,4)===Ne?Ce.count=Math.max(Ce.count,Ze.start+Ze.count-Ce.start):(++Ye,he[Ye]=Ze)}he.length=Ye+1;const we=o.getParameter(o.UNPACK_ROW_LENGTH),Xe=o.getParameter(o.UNPACK_SKIP_PIXELS),qe=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Ae=0,Ce=he.length;Ae<Ce;Ae++){const Ze=he[Ae],Be=Math.floor(Ze.start/4),Ne=Math.ceil(Ze.count/4),st=Be%b.width,j=Math.floor(Be/b.width),Re=Ne,De=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,st),o.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,st,j,Re,De,ne,ge,b.data)}z.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,we),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xe),o.pixelStorei(o.UNPACK_SKIP_ROWS,qe)}}function ie(z,b,ne){let ge=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ge=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ge=o.TEXTURE_3D);const be=Me(z,b),he=b.source;i.bindTexture(ge,z.__webglTexture,o.TEXTURE0+ne);const Ye=r.get(he);if(he.version!==Ye.__version||be===!0){i.activeTexture(o.TEXTURE0+ne);const we=wt.getPrimaries(wt.workingColorSpace),Xe=b.colorSpace===Fa?null:wt.getPrimaries(b.colorSpace),qe=b.colorSpace===Fa||we===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ae=w(b.image,!1,l.maxTextureSize);Ae=Qt(b,Ae);const Ce=u.convert(b.format,b.colorSpace),Ze=u.convert(b.type);let Be=C(b.internalFormat,Ce,Ze,b.colorSpace,b.isVideoTexture);$(ge,b);let Ne;const st=b.mipmaps,j=b.isVideoTexture!==!0,Re=Ye.__version===void 0||be===!0,De=he.dataReady,Fe=X(b,Ae);if(b.isDepthTexture)Be=N(b.format===Fo,b.type),Re&&(j?i.texStorage2D(o.TEXTURE_2D,1,Be,Ae.width,Ae.height):i.texImage2D(o.TEXTURE_2D,0,Be,Ae.width,Ae.height,0,Ce,Ze,null));else if(b.isDataTexture)if(st.length>0){j&&Re&&i.texStorage2D(o.TEXTURE_2D,Fe,Be,st[0].width,st[0].height);for(let Te=0,xe=st.length;Te<xe;Te++)Ne=st[Te],j?De&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Ce,Ze,Ne.data):i.texImage2D(o.TEXTURE_2D,Te,Be,Ne.width,Ne.height,0,Ce,Ze,Ne.data);b.generateMipmaps=!1}else j?(Re&&i.texStorage2D(o.TEXTURE_2D,Fe,Be,Ae.width,Ae.height),De&&U(b,Ae,Ce,Ze)):i.texImage2D(o.TEXTURE_2D,0,Be,Ae.width,Ae.height,0,Ce,Ze,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&Re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Fe,Be,st[0].width,st[0].height,Ae.depth);for(let Te=0,xe=st.length;Te<xe;Te++)if(Ne=st[Te],b.format!==vi)if(Ce!==null)if(j){if(De)if(b.layerUpdates.size>0){const He=Jv(Ne.width,Ne.height,b.format,b.type);for(const it of b.layerUpdates){const Ot=Ne.data.subarray(it*He/Ne.data.BYTES_PER_ELEMENT,(it+1)*He/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,it,Ne.width,Ne.height,1,Ce,Ot)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,Ae.depth,Ce,Ne.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Te,Be,Ne.width,Ne.height,Ae.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?De&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ne.width,Ne.height,Ae.depth,Ce,Ze,Ne.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Te,Be,Ne.width,Ne.height,Ae.depth,0,Ce,Ze,Ne.data)}else{j&&Re&&i.texStorage2D(o.TEXTURE_2D,Fe,Be,st[0].width,st[0].height);for(let Te=0,xe=st.length;Te<xe;Te++)Ne=st[Te],b.format!==vi?Ce!==null?j?De&&i.compressedTexSubImage2D(o.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Ce,Ne.data):i.compressedTexImage2D(o.TEXTURE_2D,Te,Be,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?De&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ne.width,Ne.height,Ce,Ze,Ne.data):i.texImage2D(o.TEXTURE_2D,Te,Be,Ne.width,Ne.height,0,Ce,Ze,Ne.data)}else if(b.isDataArrayTexture)if(j){if(Re&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Fe,Be,Ae.width,Ae.height,Ae.depth),De)if(b.layerUpdates.size>0){const Te=Jv(Ae.width,Ae.height,b.format,b.type);for(const xe of b.layerUpdates){const He=Ae.data.subarray(xe*Te/Ae.data.BYTES_PER_ELEMENT,(xe+1)*Te/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xe,Ae.width,Ae.height,1,Ce,Ze,He)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,Ze,Ae.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Be,Ae.width,Ae.height,Ae.depth,0,Ce,Ze,Ae.data);else if(b.isData3DTexture)j?(Re&&i.texStorage3D(o.TEXTURE_3D,Fe,Be,Ae.width,Ae.height,Ae.depth),De&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,Ze,Ae.data)):i.texImage3D(o.TEXTURE_3D,0,Be,Ae.width,Ae.height,Ae.depth,0,Ce,Ze,Ae.data);else if(b.isFramebufferTexture){if(Re)if(j)i.texStorage2D(o.TEXTURE_2D,Fe,Be,Ae.width,Ae.height);else{let Te=Ae.width,xe=Ae.height;for(let He=0;He<Fe;He++)i.texImage2D(o.TEXTURE_2D,He,Be,Te,xe,0,Ce,Ze,null),Te>>=1,xe>>=1}}else if(st.length>0){if(j&&Re){const Te=Zt(st[0]);i.texStorage2D(o.TEXTURE_2D,Fe,Be,Te.width,Te.height)}for(let Te=0,xe=st.length;Te<xe;Te++)Ne=st[Te],j?De&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ce,Ze,Ne):i.texImage2D(o.TEXTURE_2D,Te,Be,Ce,Ze,Ne);b.generateMipmaps=!1}else if(j){if(Re){const Te=Zt(Ae);i.texStorage2D(o.TEXTURE_2D,Fe,Be,Te.width,Te.height)}De&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ce,Ze,Ae)}else i.texImage2D(o.TEXTURE_2D,0,Be,Ce,Ze,Ae);M(b)&&v(ge),Ye.__version=he.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function de(z,b,ne){if(b.image.length!==6)return;const ge=Me(z,b),be=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+ne);const he=r.get(be);if(be.version!==he.__version||ge===!0){i.activeTexture(o.TEXTURE0+ne);const Ye=wt.getPrimaries(wt.workingColorSpace),we=b.colorSpace===Fa?null:wt.getPrimaries(b.colorSpace),Xe=b.colorSpace===Fa||Ye===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const qe=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,Ce=[];for(let xe=0;xe<6;xe++)!qe&&!Ae?Ce[xe]=w(b.image[xe],!0,l.maxCubemapSize):Ce[xe]=Ae?b.image[xe].image:b.image[xe],Ce[xe]=Qt(b,Ce[xe]);const Ze=Ce[0],Be=u.convert(b.format,b.colorSpace),Ne=u.convert(b.type),st=C(b.internalFormat,Be,Ne,b.colorSpace),j=b.isVideoTexture!==!0,Re=he.__version===void 0||ge===!0,De=be.dataReady;let Fe=X(b,Ze);$(o.TEXTURE_CUBE_MAP,b);let Te;if(qe){j&&Re&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Fe,st,Ze.width,Ze.height);for(let xe=0;xe<6;xe++){Te=Ce[xe].mipmaps;for(let He=0;He<Te.length;He++){const it=Te[He];b.format!==vi?Be!==null?j?De&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,it.width,it.height,Be,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,st,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,it.width,it.height,Be,Ne,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,st,it.width,it.height,0,Be,Ne,it.data)}}}else{if(Te=b.mipmaps,j&&Re){Te.length>0&&Fe++;const xe=Zt(Ce[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Fe,st,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ae){j?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ce[xe].width,Ce[xe].height,Be,Ne,Ce[xe].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,Ce[xe].width,Ce[xe].height,0,Be,Ne,Ce[xe].data);for(let He=0;He<Te.length;He++){const Ot=Te[He].image[xe].image;j?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,Ot.width,Ot.height,Be,Ne,Ot.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,st,Ot.width,Ot.height,0,Be,Ne,Ot.data)}}else{j?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Be,Ne,Ce[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,Be,Ne,Ce[xe]);for(let He=0;He<Te.length;He++){const it=Te[He];j?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,Be,Ne,it.image[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,st,Be,Ne,it.image[xe])}}}M(b)&&v(o.TEXTURE_CUBE_MAP),he.__version=be.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function Ue(z,b,ne,ge,be,he){const Ye=u.convert(ne.format,ne.colorSpace),we=u.convert(ne.type),Xe=C(ne.internalFormat,Ye,we,ne.colorSpace),qe=r.get(b),Ae=r.get(ne);if(Ae.__renderTarget=b,!qe.__hasExternalTextures){const Ce=Math.max(1,b.width>>he),Ze=Math.max(1,b.height>>he);be===o.TEXTURE_3D||be===o.TEXTURE_2D_ARRAY?i.texImage3D(be,he,Xe,Ce,Ze,b.depth,0,Ye,we,null):i.texImage2D(be,he,Xe,Ce,Ze,0,Ye,we,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),Ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,be,Ae.__webglTexture,0,Vt(b)):(be===o.TEXTURE_2D||be>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ge,be,Ae.__webglTexture,he),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(z,b,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,z),b.depthBuffer){const ge=b.depthTexture,be=ge&&ge.isDepthTexture?ge.type:null,he=N(b.stencilBuffer,be),Ye=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=Vt(b);Ie(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,we,he,b.width,b.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,we,he,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,he,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ye,o.RENDERBUFFER,z)}else{const ge=b.textures;for(let be=0;be<ge.length;be++){const he=ge[be],Ye=u.convert(he.format,he.colorSpace),we=u.convert(he.type),Xe=C(he.internalFormat,Ye,we,he.colorSpace),qe=Vt(b);ne&&Ie(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Xe,b.width,b.height):Ie(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qe,Xe,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Xe,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function et(z,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(b.depthTexture);ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ye(b.depthTexture,0);const be=ge.__webglTexture,he=Vt(b);if(b.depthTexture.format===Bo)Ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,be,0);else if(b.depthTexture.format===Fo)Ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function Tt(z){const b=r.get(z),ne=z.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==z.depthTexture){const ge=z.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ge){const be=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ge.removeEventListener("dispose",be)};ge.addEventListener("dispose",be),b.__depthDisposeCallback=be}b.__boundDepthTexture=ge}if(z.depthTexture&&!b.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const ge=z.texture.mipmaps;ge&&ge.length>0?et(b.__webglFramebuffer[0],z):et(b.__webglFramebuffer,z)}else if(ne){b.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ge]),b.__webglDepthbuffer[ge]===void 0)b.__webglDepthbuffer[ge]=o.createRenderbuffer(),Le(b.__webglDepthbuffer[ge],z,!1);else{const be=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer[ge];o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,he)}}else{const ge=z.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Le(b.__webglDepthbuffer,z,!1);else{const be=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,he)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ot(z,b,ne){const ge=r.get(z);b!==void 0&&Ue(ge.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&Tt(z)}function H(z){const b=z.texture,ne=r.get(z),ge=r.get(b);z.addEventListener("dispose",I);const be=z.textures,he=z.isWebGLCubeRenderTarget===!0,Ye=be.length>1;if(Ye||(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=b.version,d.memory.textures++),he){ne.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer[we]=[];for(let Xe=0;Xe<b.mipmaps.length;Xe++)ne.__webglFramebuffer[we][Xe]=o.createFramebuffer()}else ne.__webglFramebuffer[we]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)ne.__webglFramebuffer[we]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(Ye)for(let we=0,Xe=be.length;we<Xe;we++){const qe=r.get(be[we]);qe.__webglTexture===void 0&&(qe.__webglTexture=o.createTexture(),d.memory.textures++)}if(z.samples>0&&Ie(z)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let we=0;we<be.length;we++){const Xe=be[we];ne.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[we]);const qe=u.convert(Xe.format,Xe.colorSpace),Ae=u.convert(Xe.type),Ce=C(Xe.internalFormat,qe,Ae,Xe.colorSpace,z.isXRRenderTarget===!0),Ze=Vt(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ze,Ce,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,ne.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),Le(ne.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(he){i.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),$(o.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)Ue(ne.__webglFramebuffer[we][Xe],z,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe);else Ue(ne.__webglFramebuffer[we],z,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(b)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ye){for(let we=0,Xe=be.length;we<Xe;we++){const qe=be[we],Ae=r.get(qe);let Ce=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ce=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,Ae.__webglTexture),$(Ce,qe),Ue(ne.__webglFramebuffer,z,qe,o.COLOR_ATTACHMENT0+we,Ce,0),M(qe)&&v(Ce)}i.unbindTexture()}else{let we=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(we=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(we,ge.__webglTexture),$(we,b),b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)Ue(ne.__webglFramebuffer[Xe],z,b,o.COLOR_ATTACHMENT0,we,Xe);else Ue(ne.__webglFramebuffer,z,b,o.COLOR_ATTACHMENT0,we,0);M(b)&&v(we),i.unbindTexture()}z.depthBuffer&&Tt(z)}function pt(z){const b=z.textures;for(let ne=0,ge=b.length;ne<ge;ne++){const be=b[ne];if(M(be)){const he=G(z),Ye=r.get(be).__webglTexture;i.bindTexture(he,Ye),v(he),i.unbindTexture()}}}const We=[],ht=[];function Ke(z){if(z.samples>0){if(Ie(z)===!1){const b=z.textures,ne=z.width,ge=z.height;let be=o.COLOR_BUFFER_BIT;const he=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ye=r.get(z),we=b.length>1;if(we)for(let qe=0;qe<b.length;qe++)i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const Xe=z.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let qe=0;qe<b.length;qe++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(be|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(be|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const Ae=r.get(b[qe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ae,0)}o.blitFramebuffer(0,0,ne,ge,0,0,ne,ge,be,o.NEAREST),m===!0&&(We.length=0,ht.length=0,We.push(o.COLOR_ATTACHMENT0+qe),z.depthBuffer&&z.resolveDepthBuffer===!1&&(We.push(he),ht.push(he),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,We))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let qe=0;qe<b.length;qe++){i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const Ae=r.get(b[qe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qe,o.TEXTURE_2D,Ae,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const b=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Vt(z){return Math.min(l.maxSamples,z.samples)}function Ie(z){const b=r.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function rt(z){const b=d.render.frame;x.get(z)!==b&&(x.set(z,b),z.update())}function Qt(z,b){const ne=z.colorSpace,ge=z.format,be=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ne!==Rs&&ne!==Fa&&(wt.getTransfer(ne)===Ht?(ge!==vi||be!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),b}function Zt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=ue,this.resetTextureUnits=ce,this.setTexture2D=ye,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=ot,this.setupRenderTarget=H,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ie}function jA(o,t){function i(r,l=Fa){let u;const d=wt.getTransfer(l);if(r===Di)return o.UNSIGNED_BYTE;if(r===Sh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Mh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===z_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===O_)return o.BYTE;if(r===P_)return o.SHORT;if(r===Po)return o.UNSIGNED_SHORT;if(r===yh)return o.INT;if(r===Sr)return o.UNSIGNED_INT;if(r===ia)return o.FLOAT;if(r===Ho)return o.HALF_FLOAT;if(r===B_)return o.ALPHA;if(r===F_)return o.RGB;if(r===vi)return o.RGBA;if(r===Bo)return o.DEPTH_COMPONENT;if(r===Fo)return o.DEPTH_STENCIL;if(r===I_)return o.RED;if(r===Eh)return o.RED_INTEGER;if(r===H_)return o.RG;if(r===bh)return o.RG_INTEGER;if(r===Th)return o.RGBA_INTEGER;if(r===Ac||r===Rc||r===wc||r===Cc)if(d===Ht)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ac)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ac)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xd||r===qd||r===Wd||r===Yd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Xd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zd||r===Kd||r===Qd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Zd||r===Kd)return d===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Qd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jd||r===$d||r===eh||r===th||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Jd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$d)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===th)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ih)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ah)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ch)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dc||r===dh||r===hh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Dc)return d===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===G_||r===ph||r===mh||r===gh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Dc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ph)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class c0 extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const XA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
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

}`;class WA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new c0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ka({vertexShader:XA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new aa(new Ic(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YA extends Cs{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,_=null,y=null,S=null,A=null;const w=new WA,M={},v=i.getContextAttributes();let G=null,C=null;const N=[],X=[],V=new Ut;let I=null;const Q=new Jn;Q.viewport=new Gt;const D=new Jn;D.viewport=new Gt;const L=[Q,D],F=new mM;let ce=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let ie=N[U];return ie===void 0&&(ie=new Sd,N[U]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(U){let ie=N[U];return ie===void 0&&(ie=new Sd,N[U]=ie),ie.getGripSpace()},this.getHand=function(U){let ie=N[U];return ie===void 0&&(ie=new Sd,N[U]=ie),ie.getHandSpace()};function fe(U){const ie=X.indexOf(U.inputSource);if(ie===-1)return;const de=N[ie];de!==void 0&&(de.update(U.inputSource,U.frame,p||d),de.dispatchEvent({type:U.type,data:U.inputSource}))}function ye(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",ye),l.removeEventListener("inputsourceschange",O);for(let U=0;U<N.length;U++){const ie=X[U];ie!==null&&(X[U]=null,N[U].disconnect(ie))}ce=null,ue=null,w.reset();for(const U in M)delete M[U];t.setRenderTarget(G),S=null,y=null,_=null,l=null,C=null,Ee.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){u=U,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){h=U,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(U){p=U},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(U){if(l=U,l!==null){if(G=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",ye),l.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ue=null,Le=null;v.depth&&(Le=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,de=v.stencil?Fo:Bo,Ue=v.stencil?zo:Sr);const et={colorFormat:i.RGBA8,depthFormat:Le,scaleFactor:u};y=_.createProjectionLayer(et),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),C=new Mr(y.textureWidth,y.textureHeight,{format:vi,type:Di,depthTexture:new t0(y.textureWidth,y.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,de),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Mr(S.framebufferWidth,S.framebufferHeight,{format:vi,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ee.setContext(l),Ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function O(U){for(let ie=0;ie<U.removed.length;ie++){const de=U.removed[ie],Ue=X.indexOf(de);Ue>=0&&(X[Ue]=null,N[Ue].disconnect(de))}for(let ie=0;ie<U.added.length;ie++){const de=U.added[ie];let Ue=X.indexOf(de);if(Ue===-1){for(let et=0;et<N.length;et++)if(et>=X.length){X.push(de),Ue=et;break}else if(X[et]===null){X[et]=de,Ue=et;break}if(Ue===-1)break}const Le=N[Ue];Le&&Le.connect(de)}}const Y=new J,q=new J;function oe(U,ie,de){Y.setFromMatrixPosition(ie.matrixWorld),q.setFromMatrixPosition(de.matrixWorld);const Ue=Y.distanceTo(q),Le=ie.projectionMatrix.elements,et=de.projectionMatrix.elements,Tt=Le[14]/(Le[10]-1),ot=Le[14]/(Le[10]+1),H=(Le[9]+1)/Le[5],pt=(Le[9]-1)/Le[5],We=(Le[8]-1)/Le[0],ht=(et[8]+1)/et[0],Ke=Tt*We,Vt=Tt*ht,Ie=Ue/(-We+ht),rt=Ie*-We;if(ie.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(rt),U.translateZ(Ie),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),Le[10]===-1)U.projectionMatrix.copy(ie.projectionMatrix),U.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Qt=Tt+Ie,Zt=ot+Ie,z=Ke-rt,b=Vt+(Ue-rt),ne=H*ot/Zt*Qt,ge=pt*ot/Zt*Qt;U.projectionMatrix.makePerspective(z,b,ne,ge,Qt,Zt),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function me(U,ie){ie===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(ie.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(l===null)return;let ie=U.near,de=U.far;w.texture!==null&&(w.depthNear>0&&(ie=w.depthNear),w.depthFar>0&&(de=w.depthFar)),F.near=D.near=Q.near=ie,F.far=D.far=Q.far=de,(ce!==F.near||ue!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),ce=F.near,ue=F.far),F.layers.mask=U.layers.mask|6,Q.layers.mask=F.layers.mask&3,D.layers.mask=F.layers.mask&5;const Ue=U.parent,Le=F.cameras;me(F,Ue);for(let et=0;et<Le.length;et++)me(Le[et],Ue);Le.length===2?oe(F,Q,D):F.projectionMatrix.copy(Q.projectionMatrix),P(U,F,Ue)};function P(U,ie,de){de===null?U.matrix.copy(ie.matrixWorld):(U.matrix.copy(de.matrixWorld),U.matrix.invert(),U.matrix.multiply(ie.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(ie.projectionMatrix),U.projectionMatrixInverse.copy(ie.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Io*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(U){m=U,y!==null&&(y.fixedFoveation=U),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=U)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(F)},this.getCameraTexture=function(U){return M[U]};let $=null;function Me(U,ie){if(x=ie.getViewerPose(p||d),A=ie,x!==null){const de=x.views;S!==null&&(t.setRenderTargetFramebuffer(C,S.framebuffer),t.setRenderTarget(C));let Ue=!1;de.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let ot=0;ot<de.length;ot++){const H=de[ot];let pt=null;if(S!==null)pt=S.getViewport(H);else{const ht=_.getViewSubImage(y,H);pt=ht.viewport,ot===0&&(t.setRenderTargetTextures(C,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(C))}let We=L[ot];We===void 0&&(We=new Jn,We.layers.enable(ot),We.viewport=new Gt,L[ot]=We),We.matrix.fromArray(H.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(H.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(pt.x,pt.y,pt.width,pt.height),ot===0&&(F.matrix.copy(We.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(We)}const Le=l.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const ot=_.getDepthInformation(de[0]);ot&&ot.isValid&&ot.texture&&w.init(ot,l.renderState)}if(Le&&Le.includes("camera-access")&&(t.state.unbindTexture(),_))for(let ot=0;ot<de.length;ot++){const H=de[ot].camera;if(H){let pt=M[H];pt||(pt=new c0,M[H]=pt);const We=_.getCameraImage(H);pt.sourceTexture=We}}}for(let de=0;de<N.length;de++){const Ue=X[de],Le=N[de];Ue!==null&&Le!==void 0&&Le.update(Ue,ie,p||d)}$&&$(U,ie),ie.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ie}),A=null}const Ee=new a0;Ee.setAnimationLoop(Me),this.setAnimationLoop=function(U){$=U},this.dispose=function(){}}}const pr=new sa,ZA=new Kt;function KA(o,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,Q_(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,G,C,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(M,v):v.isMeshToonMaterial?(u(M,v),_(M,v)):v.isMeshPhongMaterial?(u(M,v),x(M,v)):v.isMeshStandardMaterial?(u(M,v),y(M,v),v.isMeshPhysicalMaterial&&S(M,v,N)):v.isMeshMatcapMaterial?(u(M,v),A(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),w(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,G,C):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Hn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Hn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const G=t.get(v),C=G.envMap,N=G.envMapRotation;C&&(M.envMap.value=C,pr.copy(N),pr.x*=-1,pr.y*=-1,pr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),M.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(pr)),M.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,G,C){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*G,M.scale.value=C*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function x(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,G){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=G.texture,M.transmissionSamplerSize.value.set(G.width,G.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,v){v.matcap&&(M.matcap.value=v.matcap)}function w(M,v){const G=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(G.matrixWorld),M.nearDistance.value=G.shadow.camera.near,M.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function QA(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(G,C){const N=C.program;r.uniformBlockBinding(G,N)}function p(G,C){let N=l[G.id];N===void 0&&(A(G),N=x(G),l[G.id]=N,G.addEventListener("dispose",M));const X=C.program;r.updateUBOMapping(G,X);const V=t.render.frame;u[G.id]!==V&&(y(G),u[G.id]=V)}function x(G){const C=_();G.__bindingPointIndex=C;const N=o.createBuffer(),X=G.__size,V=G.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,X,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,N),N}function _(){for(let G=0;G<h;G++)if(d.indexOf(G)===-1)return d.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(G){const C=l[G.id],N=G.uniforms,X=G.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let V=0,I=N.length;V<I;V++){const Q=Array.isArray(N[V])?N[V]:[N[V]];for(let D=0,L=Q.length;D<L;D++){const F=Q[D];if(S(F,V,D,X)===!0){const ce=F.__offset,ue=Array.isArray(F.value)?F.value:[F.value];let fe=0;for(let ye=0;ye<ue.length;ye++){const O=ue[ye],Y=w(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,ce+fe,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,fe),fe+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ce,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(G,C,N,X){const V=G.value,I=C+"_"+N;if(X[I]===void 0)return typeof V=="number"||typeof V=="boolean"?X[I]=V:X[I]=V.clone(),!0;{const Q=X[I];if(typeof V=="number"||typeof V=="boolean"){if(Q!==V)return X[I]=V,!0}else if(Q.equals(V)===!1)return Q.copy(V),!0}return!1}function A(G){const C=G.uniforms;let N=0;const X=16;for(let I=0,Q=C.length;I<Q;I++){const D=Array.isArray(C[I])?C[I]:[C[I]];for(let L=0,F=D.length;L<F;L++){const ce=D[L],ue=Array.isArray(ce.value)?ce.value:[ce.value];for(let fe=0,ye=ue.length;fe<ye;fe++){const O=ue[fe],Y=w(O),q=N%X,oe=q%Y.boundary,me=q+oe;N+=oe,me!==0&&X-me<Y.storage&&(N+=X-me),ce.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=N,N+=Y.storage}}}const V=N%X;return V>0&&(N+=X-V),G.__size=N,G.__cache={},this}function w(G){const C={boundary:0,storage:0};return typeof G=="number"||typeof G=="boolean"?(C.boundary=4,C.storage=4):G.isVector2?(C.boundary=8,C.storage=8):G.isVector3||G.isColor?(C.boundary=16,C.storage=12):G.isVector4?(C.boundary=16,C.storage=16):G.isMatrix3?(C.boundary=48,C.storage=48):G.isMatrix4?(C.boundary=64,C.storage=64):G.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G),C}function M(G){const C=G.target;C.removeEventListener("dispose",M);const N=d.indexOf(C.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function v(){for(const G in l)o.deleteBuffer(l[G]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}class JA{constructor(t={}){const{canvas:i=US(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const A=new Uint32Array(4),w=new Int32Array(4);let M=null,v=null;const G=[],C=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let X=!1;this._outputColorSpace=ci;let V=0,I=0,Q=null,D=-1,L=null;const F=new Gt,ce=new Gt;let ue=null;const fe=new Ct(0);let ye=0,O=i.width,Y=i.height,q=1,oe=null,me=null;const P=new Gt(0,0,O,Y),$=new Gt(0,0,O,Y);let Me=!1;const Ee=new Ch;let U=!1,ie=!1;const de=new Kt,Ue=new J,Le=new Gt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function ot(){return Q===null?q:1}let H=r;function pt(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xh}`),i.addEventListener("webglcontextlost",De,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",Te,!1),H===null){const W="webgl2";if(H=pt(W,R),H===null)throw pt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let We,ht,Ke,Vt,Ie,rt,Qt,Zt,z,b,ne,ge,be,he,Ye,we,Xe,qe,Ae,Ce,Ze,Be,Ne,st;function j(){We=new lT(H),We.init(),Be=new jA(H,We),ht=new tT(H,We,t,Be),Ke=new VA(H,We),ht.reversedDepthBuffer&&y&&Ke.buffers.depth.setReversed(!0),Vt=new fT(H),Ie=new CA,rt=new kA(H,We,Ke,Ie,ht,Be,Vt),Qt=new iT(N),Zt=new oT(N),z=new vM(H),Ne=new $b(H,z),b=new cT(H,z,Vt,Ne),ne=new hT(H,b,z,Vt),Ae=new dT(H,ht,rt),we=new nT(Ie),ge=new wA(N,Qt,Zt,We,ht,Ne,we),be=new KA(N,Ie),he=new UA,Ye=new BA(We),qe=new Jb(N,Qt,Zt,Ke,ne,S,m),Xe=new HA(N,ne,ht),st=new QA(H,Vt,ht,Ke),Ce=new eT(H,We,Vt),Ze=new uT(H,We,Vt),Vt.programs=ge.programs,N.capabilities=ht,N.extensions=We,N.properties=Ie,N.renderLists=he,N.shadowMap=Xe,N.state=Ke,N.info=Vt}j();const Re=new YA(N,H);this.xr=Re,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=We.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=We.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(O,Y,!1))},this.getSize=function(R){return R.set(O,Y)},this.setSize=function(R,W,re=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Y=W,i.width=Math.floor(R*q),i.height=Math.floor(W*q),re===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(O*q,Y*q).floor()},this.setDrawingBufferSize=function(R,W,re){O=R,Y=W,q=re,i.width=Math.floor(R*re),i.height=Math.floor(W*re),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,W,re,se){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,W,re,se),Ke.viewport(F.copy(P).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,W,re,se){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,W,re,se),Ke.scissor(ce.copy($).multiplyScalar(q).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){Ke.setScissorTest(Me=R)},this.setOpaqueSort=function(R){oe=R},this.setTransparentSort=function(R){me=R},this.getClearColor=function(R){return R.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,re=!0){let se=0;if(R){let Z=!1;if(Q!==null){const Se=Q.texture.format;Z=Se===Th||Se===bh||Se===Eh}if(Z){const Se=Q.texture.type,Oe=Se===Di||Se===Sr||Se===Po||Se===zo||Se===Sh||Se===Mh,Ve=qe.getClearColor(),ze=qe.getClearAlpha(),Qe=Ve.r,nt=Ve.g,Je=Ve.b;Oe?(A[0]=Qe,A[1]=nt,A[2]=Je,A[3]=ze,H.clearBufferuiv(H.COLOR,0,A)):(w[0]=Qe,w[1]=nt,w[2]=Je,w[3]=ze,H.clearBufferiv(H.COLOR,0,w))}else se|=H.COLOR_BUFFER_BIT}W&&(se|=H.DEPTH_BUFFER_BIT),re&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),qe.dispose(),he.dispose(),Ye.dispose(),Ie.dispose(),Qt.dispose(),Zt.dispose(),ne.dispose(),Ne.dispose(),st.dispose(),ge.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",$n),Re.removeEventListener("sessionend",Ls),xi.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const R=Vt.autoReset,W=Xe.enabled,re=Xe.autoUpdate,se=Xe.needsUpdate,Z=Xe.type;j(),Vt.autoReset=R,Xe.enabled=W,Xe.autoUpdate=re,Xe.needsUpdate=se,Xe.type=Z}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){const W=R.target;W.removeEventListener("dispose",xe),He(W)}function He(R){it(R),Ie.remove(R)}function it(R){const W=Ie.get(R).programs;W!==void 0&&(W.forEach(function(re){ge.releaseProgram(re)}),R.isShaderMaterial&&ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,re,se,Z,Se){W===null&&(W=et);const Oe=Z.isMesh&&Z.matrixWorld.determinant()<0,Ve=la(R,W,re,se,Z);Ke.setMaterial(se,Oe);let ze=re.index,Qe=1;if(se.wireframe===!0){if(ze=b.getWireframeAttribute(re),ze===void 0)return;Qe=2}const nt=re.drawRange,Je=re.attributes.position;let dt=nt.start*Qe,Lt=(nt.start+nt.count)*Qe;Se!==null&&(dt=Math.max(dt,Se.start*Qe),Lt=Math.min(Lt,(Se.start+Se.count)*Qe)),ze!==null?(dt=Math.max(dt,0),Lt=Math.min(Lt,ze.count)):Je!=null&&(dt=Math.max(dt,0),Lt=Math.min(Lt,Je.count));const kt=Lt-dt;if(kt<0||kt===1/0)return;Ne.setup(Z,se,Ve,re,ze);let Nt,mt=Ce;if(ze!==null&&(Nt=z.get(ze),mt=Ze,mt.setIndex(Nt)),Z.isMesh)se.wireframe===!0?(Ke.setLineWidth(se.wireframeLinewidth*ot()),mt.setMode(H.LINES)):mt.setMode(H.TRIANGLES);else if(Z.isLine){let ke=se.linewidth;ke===void 0&&(ke=1),Ke.setLineWidth(ke*ot()),Z.isLineSegments?mt.setMode(H.LINES):Z.isLineLoop?mt.setMode(H.LINE_LOOP):mt.setMode(H.LINE_STRIP)}else Z.isPoints?mt.setMode(H.POINTS):Z.isSprite&&mt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))mt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ke=Z._multiDrawStarts,Xt=Z._multiDrawCounts,bt=Z._multiDrawCount,yn=ze?z.get(ze).bytesPerElement:1,Ui=Ie.get(se).currentProgram.getUniforms();for(let mn=0;mn<bt;mn++)Ui.setValue(H,"_gl_DrawID",mn),mt.render(ke[mn]/yn,Xt[mn])}else if(Z.isInstancedMesh)mt.renderInstances(dt,kt,Z.count);else if(re.isInstancedBufferGeometry){const ke=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xt=Math.min(re.instanceCount,ke);mt.renderInstances(dt,kt,Xt)}else mt.render(dt,kt)};function Ot(R,W,re){R.transparent===!0&&R.side===na&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,Vn(R,W,re),R.side=Va,R.needsUpdate=!0,Vn(R,W,re),R.side=na):Vn(R,W,re)}this.compile=function(R,W,re=null){re===null&&(re=R),v=Ye.get(re),v.init(W),C.push(v),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==re&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const se=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Se=Z.material;if(Se)if(Array.isArray(Se))for(let Oe=0;Oe<Se.length;Oe++){const Ve=Se[Oe];Ot(Ve,re,Z),se.add(Ve)}else Ot(Se,re,Z),se.add(Se)}),v=C.pop(),se},this.compileAsync=function(R,W,re=null){const se=this.compile(R,W,re);return new Promise(Z=>{function Se(){if(se.forEach(function(Oe){Ie.get(Oe).currentProgram.isReady()&&se.delete(Oe)}),se.size===0){Z(R);return}setTimeout(Se,10)}We.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Et=null;function Cn(R){Et&&Et(R)}function $n(){xi.stop()}function Ls(){xi.start()}const xi=new a0;xi.setAnimationLoop(Cn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(R){Et=R,Re.setAnimationLoop(R),R===null?xi.stop():xi.start()},Re.addEventListener("sessionstart",$n),Re.addEventListener("sessionend",Ls),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,W,Q),v=Ye.get(R,C.length),v.init(W),C.push(v),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ee.setFromProjectionMatrix(de,wi,W.reversedDepth),ie=this.localClippingEnabled,U=we.init(this.clippingPlanes,ie),M=he.get(R,G.length),M.init(),G.push(M),Re.enabled===!0&&Re.isPresenting===!0){const Se=N.xr.getDepthSensingMesh();Se!==null&&Er(Se,W,-1/0,N.sortObjects)}Er(R,W,0,N.sortObjects),M.finish(),N.sortObjects===!0&&M.sort(oe,me),Tt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Tt&&qe.addToRenderList(M,R),this.info.render.frame++,U===!0&&we.beginShadows();const re=v.state.shadowsArray;Xe.render(re,R,W),U===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=M.opaque,Z=M.transmissive;if(v.setupLights(),W.isArrayCamera){const Se=W.cameras;if(Z.length>0)for(let Oe=0,Ve=Se.length;Oe<Ve;Oe++){const ze=Se[Oe];Tr(se,Z,R,ze)}Tt&&qe.render(R);for(let Oe=0,Ve=Se.length;Oe<Ve;Oe++){const ze=Se[Oe];br(M,R,ze,ze.viewport)}}else Z.length>0&&Tr(se,Z,R,W),Tt&&qe.render(R),br(M,R,W);Q!==null&&I===0&&(rt.updateMultisampleRenderTarget(Q),rt.updateRenderTargetMipmap(Q)),R.isScene===!0&&R.onAfterRender(N,R,W),Ne.resetDefaultState(),D=-1,L=null,C.pop(),C.length>0?(v=C[C.length-1],U===!0&&we.setGlobalState(N.clippingPlanes,v.state.camera)):v=null,G.pop(),G.length>0?M=G[G.length-1]:M=null};function Er(R,W,re,se){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ee.intersectsSprite(R)){se&&Le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(de);const Oe=ne.update(R),Ve=R.material;Ve.visible&&M.push(R,Oe,Ve,re,Le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ee.intersectsObject(R))){const Oe=ne.update(R),Ve=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Le.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Le.copy(Oe.boundingSphere.center)),Le.applyMatrix4(R.matrixWorld).applyMatrix4(de)),Array.isArray(Ve)){const ze=Oe.groups;for(let Qe=0,nt=ze.length;Qe<nt;Qe++){const Je=ze[Qe],dt=Ve[Je.materialIndex];dt&&dt.visible&&M.push(R,Oe,dt,re,Le.z,Je)}}else Ve.visible&&M.push(R,Oe,Ve,re,Le.z,null)}}const Se=R.children;for(let Oe=0,Ve=Se.length;Oe<Ve;Oe++)Er(Se[Oe],W,re,se)}function br(R,W,re,se){const Z=R.opaque,Se=R.transmissive,Oe=R.transparent;v.setupLightsView(re),U===!0&&we.setGlobalState(N.clippingPlanes,re),se&&Ke.viewport(F.copy(se)),Z.length>0&&ja(Z,W,re),Se.length>0&&ja(Se,W,re),Oe.length>0&&ja(Oe,W,re),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Tr(R,W,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[se.id]===void 0&&(v.state.transmissionRenderTarget[se.id]=new Mr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Ho:Di,minFilter:yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Se=v.state.transmissionRenderTarget[se.id],Oe=se.viewport||F;Se.setSize(Oe.z*N.transmissionResolutionScale,Oe.w*N.transmissionResolutionScale);const Ve=N.getRenderTarget(),ze=N.getActiveCubeFace(),Qe=N.getActiveMipmapLevel();N.setRenderTarget(Se),N.getClearColor(fe),ye=N.getClearAlpha(),ye<1&&N.setClearColor(16777215,.5),N.clear(),Tt&&qe.render(re);const nt=N.toneMapping;N.toneMapping=Ha;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),v.setupLightsView(se),U===!0&&we.setGlobalState(N.clippingPlanes,se),ja(R,re,se),rt.updateMultisampleRenderTarget(Se),rt.updateRenderTargetMipmap(Se),We.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Lt=0,kt=W.length;Lt<kt;Lt++){const Nt=W[Lt],mt=Nt.object,ke=Nt.geometry,Xt=Nt.material,bt=Nt.group;if(Xt.side===na&&mt.layers.test(se.layers)){const yn=Xt.side;Xt.side=Hn,Xt.needsUpdate=!0,Ns(mt,re,se,ke,Xt,bt),Xt.side=yn,Xt.needsUpdate=!0,dt=!0}}dt===!0&&(rt.updateMultisampleRenderTarget(Se),rt.updateRenderTargetMipmap(Se))}N.setRenderTarget(Ve,ze,Qe),N.setClearColor(fe,ye),Je!==void 0&&(se.viewport=Je),N.toneMapping=nt}function ja(R,W,re){const se=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Se=R.length;Z<Se;Z++){const Oe=R[Z],Ve=Oe.object,ze=Oe.geometry,Qe=Oe.group;let nt=Oe.material;nt.allowOverride===!0&&se!==null&&(nt=se),Ve.layers.test(re.layers)&&Ns(Ve,W,re,ze,nt,Qe)}}function Ns(R,W,re,se,Z,Se){R.onBeforeRender(N,W,re,se,Z,Se),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(N,W,re,se,R,Se),Z.transparent===!0&&Z.side===na&&Z.forceSinglePass===!1?(Z.side=Hn,Z.needsUpdate=!0,N.renderBufferDirect(re,W,se,Z,R,Se),Z.side=Va,Z.needsUpdate=!0,N.renderBufferDirect(re,W,se,Z,R,Se),Z.side=na):N.renderBufferDirect(re,W,se,Z,R,Se),R.onAfterRender(N,W,re,se,Z,Se)}function Vn(R,W,re){W.isScene!==!0&&(W=et);const se=Ie.get(R),Z=v.state.lights,Se=v.state.shadowsArray,Oe=Z.state.version,Ve=ge.getParameters(R,Z.state,Se,W,re),ze=ge.getProgramCacheKey(Ve);let Qe=se.programs;se.environment=R.isMeshStandardMaterial?W.environment:null,se.fog=W.fog,se.envMap=(R.isMeshStandardMaterial?Zt:Qt).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Qe===void 0&&(R.addEventListener("dispose",xe),Qe=new Map,se.programs=Qe);let nt=Qe.get(ze);if(nt!==void 0){if(se.currentProgram===nt&&se.lightsStateVersion===Oe)return xn(R,Ve),nt}else Ve.uniforms=ge.getUniforms(R),R.onBeforeCompile(Ve,N),nt=ge.acquireProgram(Ve,ze),Qe.set(ze,nt),se.uniforms=Ve.uniforms;const Je=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=we.uniform),xn(R,Ve),se.needsLights=Gc(R),se.lightsStateVersion=Oe,se.needsLights&&(Je.ambientLightColor.value=Z.state.ambient,Je.lightProbe.value=Z.state.probe,Je.directionalLights.value=Z.state.directional,Je.directionalLightShadows.value=Z.state.directionalShadow,Je.spotLights.value=Z.state.spot,Je.spotLightShadows.value=Z.state.spotShadow,Je.rectAreaLights.value=Z.state.rectArea,Je.ltc_1.value=Z.state.rectAreaLTC1,Je.ltc_2.value=Z.state.rectAreaLTC2,Je.pointLights.value=Z.state.point,Je.pointLightShadows.value=Z.state.pointShadow,Je.hemisphereLights.value=Z.state.hemi,Je.directionalShadowMap.value=Z.state.directionalShadowMap,Je.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Je.spotShadowMap.value=Z.state.spotShadowMap,Je.spotLightMatrix.value=Z.state.spotLightMatrix,Je.spotLightMap.value=Z.state.spotLightMap,Je.pointShadowMap.value=Z.state.pointShadowMap,Je.pointShadowMatrix.value=Z.state.pointShadowMatrix),se.currentProgram=nt,se.uniformsList=null,nt}function rn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Uc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function xn(R,W){const re=Ie.get(R);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function la(R,W,re,se,Z){W.isScene!==!0&&(W=et),rt.resetTextureUnits();const Se=W.fog,Oe=se.isMeshStandardMaterial?W.environment:null,Ve=Q===null?N.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Rs,ze=(se.isMeshStandardMaterial?Zt:Qt).get(se.envMap||Oe),Qe=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Je=!!re.morphAttributes.position,dt=!!re.morphAttributes.normal,Lt=!!re.morphAttributes.color;let kt=Ha;se.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(kt=N.toneMapping);const Nt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,mt=Nt!==void 0?Nt.length:0,ke=Ie.get(se),Xt=v.state.lights;if(U===!0&&(ie===!0||R!==L)){const fn=R===L&&se.id===D;we.setState(se,R,fn)}let bt=!1;se.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Xt.state.version||ke.outputColorSpace!==Ve||Z.isBatchedMesh&&ke.batching===!1||!Z.isBatchedMesh&&ke.batching===!0||Z.isBatchedMesh&&ke.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ke.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||Z.isInstancedMesh&&ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ke.instancingMorph===!1&&Z.morphTexture!==null||ke.envMap!==ze||se.fog===!0&&ke.fog!==Se||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==we.numPlanes||ke.numIntersection!==we.numIntersection)||ke.vertexAlphas!==Qe||ke.vertexTangents!==nt||ke.morphTargets!==Je||ke.morphNormals!==dt||ke.morphColors!==Lt||ke.toneMapping!==kt||ke.morphTargetsCount!==mt)&&(bt=!0):(bt=!0,ke.__version=se.version);let yn=ke.currentProgram;bt===!0&&(yn=Vn(se,W,Z));let Ui=!1,mn=!1,qa=!1;const _t=yn.getUniforms(),Tn=ke.uniforms;if(Ke.useProgram(yn.program)&&(Ui=!0,mn=!0,qa=!0),se.id!==D&&(D=se.id,mn=!0),Ui||L!==R){Ke.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),_t.setValue(H,"projectionMatrix",R.projectionMatrix),_t.setValue(H,"viewMatrix",R.matrixWorldInverse);const en=_t.map.cameraPosition;en!==void 0&&en.setValue(H,Ue.setFromMatrixPosition(R.matrixWorld)),ht.logarithmicDepthBuffer&&_t.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&_t.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),L!==R&&(L=R,mn=!0,qa=!0)}if(Z.isSkinnedMesh){_t.setOptional(H,Z,"bindMatrix"),_t.setOptional(H,Z,"bindMatrixInverse");const fn=Z.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),_t.setValue(H,"boneTexture",fn.boneTexture,rt))}Z.isBatchedMesh&&(_t.setOptional(H,Z,"batchingTexture"),_t.setValue(H,"batchingTexture",Z._matricesTexture,rt),_t.setOptional(H,Z,"batchingIdTexture"),_t.setValue(H,"batchingIdTexture",Z._indirectTexture,rt),_t.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&_t.setValue(H,"batchingColorTexture",Z._colorsTexture,rt));const Dn=re.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Ae.update(Z,re,yn),(mn||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,_t.setValue(H,"receiveShadow",Z.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Tn.envMap.value=ze,Tn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&W.environment!==null&&(Tn.envMapIntensity.value=W.environmentIntensity),mn&&(_t.setValue(H,"toneMappingExposure",N.toneMappingExposure),ke.needsLights&&Os(Tn,qa),Se&&se.fog===!0&&be.refreshFogUniforms(Tn,Se),be.refreshMaterialUniforms(Tn,se,q,Y,v.state.transmissionRenderTarget[R.id]),Uc.upload(H,rn(ke),Tn,rt)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Uc.upload(H,rn(ke),Tn,rt),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&_t.setValue(H,"center",Z.center),_t.setValue(H,"modelViewMatrix",Z.modelViewMatrix),_t.setValue(H,"normalMatrix",Z.normalMatrix),_t.setValue(H,"modelMatrix",Z.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const fn=se.uniformsGroups;for(let en=0,Ar=fn.length;en<Ar;en++){const yi=fn[en];st.update(yi,yn),st.bind(yi,yn)}}return yn}function Os(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Gc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,W,re){const se=Ie.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ie.get(R.texture).__webglTexture=W,Ie.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const re=Ie.get(R);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0};const Vc=H.createFramebuffer();this.setRenderTarget=function(R,W=0,re=0){Q=R,V=W,I=re;let se=!0,Z=null,Se=!1,Oe=!1;if(R){const ze=Ie.get(R);if(ze.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(H.FRAMEBUFFER,null),se=!1;else if(ze.__webglFramebuffer===void 0)rt.setupRenderTarget(R);else if(ze.__hasExternalTextures)rt.rebindTextures(R,Ie.get(R.texture).__webglTexture,Ie.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(ze.__boundDepthTexture!==Je){if(Je!==null&&Ie.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(R)}}const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Oe=!0);const nt=Ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[W])?Z=nt[W][re]:Z=nt[W],Se=!0):R.samples>0&&rt.useMultisampledRTT(R)===!1?Z=Ie.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?Z=nt[re]:Z=nt,F.copy(R.viewport),ce.copy(R.scissor),ue=R.scissorTest}else F.copy(P).multiplyScalar(q).floor(),ce.copy($).multiplyScalar(q).floor(),ue=Me;if(re!==0&&(Z=Vc),Ke.bindFramebuffer(H.FRAMEBUFFER,Z)&&se&&Ke.drawBuffers(R,Z),Ke.viewport(F),Ke.scissor(ce),Ke.setScissorTest(ue),Se){const ze=Ie.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,re)}else if(Oe){const ze=W;for(let Qe=0;Qe<R.textures.length;Qe++){const nt=Ie.get(R.textures[Qe]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Qe,nt.__webglTexture,re,ze)}}else if(R!==null&&re!==0){const ze=Ie.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ze.__webglTexture,re)}D=-1},this.readRenderTargetPixels=function(R,W,re,se,Z,Se,Oe,Ve=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){Ke.bindFramebuffer(H.FRAMEBUFFER,ze);try{const Qe=R.textures[Ve],nt=Qe.format,Je=Qe.type;if(!ht.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-se&&re>=0&&re<=R.height-Z&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ve),H.readPixels(W,re,se,Z,Be.convert(nt),Be.convert(Je),Se))}finally{const Qe=Q!==null?Ie.get(Q).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(R,W,re,se,Z,Se,Oe,Ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(W>=0&&W<=R.width-se&&re>=0&&re<=R.height-Z){Ke.bindFramebuffer(H.FRAMEBUFFER,ze);const Qe=R.textures[Ve],nt=Qe.format,Je=Qe.type;if(!ht.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.bufferData(H.PIXEL_PACK_BUFFER,Se.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ve),H.readPixels(W,re,se,Z,Be.convert(nt),Be.convert(Je),0);const Lt=Q!==null?Ie.get(Q).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,Lt);const kt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await LS(H,kt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Se),H.deleteBuffer(dt),H.deleteSync(kt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,re=0){const se=Math.pow(2,-re),Z=Math.floor(R.image.width*se),Se=Math.floor(R.image.height*se),Oe=W!==null?W.x:0,Ve=W!==null?W.y:0;rt.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,Oe,Ve,Z,Se),Ke.unbindTexture()};const Xo=H.createFramebuffer(),Xa=H.createFramebuffer();this.copyTextureToTexture=function(R,W,re=null,se=null,Z=0,Se=null){Se===null&&(Z!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Z,Z=0):Se=0);let Oe,Ve,ze,Qe,nt,Je,dt,Lt,kt;const Nt=R.isCompressedTexture?R.mipmaps[Se]:R.image;if(re!==null)Oe=re.max.x-re.min.x,Ve=re.max.y-re.min.y,ze=re.isBox3?re.max.z-re.min.z:1,Qe=re.min.x,nt=re.min.y,Je=re.isBox3?re.min.z:0;else{const Dn=Math.pow(2,-Z);Oe=Math.floor(Nt.width*Dn),Ve=Math.floor(Nt.height*Dn),R.isDataArrayTexture?ze=Nt.depth:R.isData3DTexture?ze=Math.floor(Nt.depth*Dn):ze=1,Qe=0,nt=0,Je=0}se!==null?(dt=se.x,Lt=se.y,kt=se.z):(dt=0,Lt=0,kt=0);const mt=Be.convert(W.format),ke=Be.convert(W.type);let Xt;W.isData3DTexture?(rt.setTexture3D(W,0),Xt=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(rt.setTexture2DArray(W,0),Xt=H.TEXTURE_2D_ARRAY):(rt.setTexture2D(W,0),Xt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const bt=H.getParameter(H.UNPACK_ROW_LENGTH),yn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ui=H.getParameter(H.UNPACK_SKIP_PIXELS),mn=H.getParameter(H.UNPACK_SKIP_ROWS),qa=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Nt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Nt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qe),H.pixelStorei(H.UNPACK_SKIP_ROWS,nt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Je);const _t=R.isDataArrayTexture||R.isData3DTexture,Tn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Dn=Ie.get(R),fn=Ie.get(W),en=Ie.get(Dn.__renderTarget),Ar=Ie.get(fn.__renderTarget);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,en.__webglFramebuffer),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let yi=0;yi<ze;yi++)_t&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ie.get(R).__webglTexture,Z,Je+yi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ie.get(W).__webglTexture,Se,kt+yi)),H.blitFramebuffer(Qe,nt,Oe,Ve,dt,Lt,Oe,Ve,H.DEPTH_BUFFER_BIT,H.NEAREST);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ie.has(R)){const Dn=Ie.get(R),fn=Ie.get(W);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,Xo),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xa);for(let en=0;en<ze;en++)_t?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dn.__webglTexture,Z,Je+en):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dn.__webglTexture,Z),Tn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fn.__webglTexture,Se,kt+en):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fn.__webglTexture,Se),Z!==0?H.blitFramebuffer(Qe,nt,Oe,Ve,dt,Lt,Oe,Ve,H.COLOR_BUFFER_BIT,H.NEAREST):Tn?H.copyTexSubImage3D(Xt,Se,dt,Lt,kt+en,Qe,nt,Oe,Ve):H.copyTexSubImage2D(Xt,Se,dt,Lt,Qe,nt,Oe,Ve);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Xt,Se,dt,Lt,kt,Oe,Ve,ze,mt,ke,Nt.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Xt,Se,dt,Lt,kt,Oe,Ve,ze,mt,Nt.data):H.texSubImage3D(Xt,Se,dt,Lt,kt,Oe,Ve,ze,mt,ke,Nt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Se,dt,Lt,Oe,Ve,mt,ke,Nt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Se,dt,Lt,Nt.width,Nt.height,mt,Nt.data):H.texSubImage2D(H.TEXTURE_2D,Se,dt,Lt,Oe,Ve,mt,ke,Nt);H.pixelStorei(H.UNPACK_ROW_LENGTH,bt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ui),H.pixelStorei(H.UNPACK_SKIP_ROWS,mn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qa),Se===0&&W.generateMipmaps&&H.generateMipmap(Xt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(R,W,re=null,se=null,Z=0){return Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,re,se,Z)},this.initRenderTarget=function(R){Ie.get(R).__webglFramebuffer===void 0&&rt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?rt.setTextureCube(R,0):R.isData3DTexture?rt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?rt.setTexture2DArray(R,0):rt.setTexture2D(R,0),Ke.unbindTexture()},this.resetState=function(){V=0,I=0,Q=null,Ke.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(t),i.unpackColorSpace=wt._getUnpackColorSpace()}}const u0=""+new URL("combat-vehicle-hangar-B8cOoZvu.png",import.meta.url).href,$A=["WASD move","Mouse drag look","Shift sprint","Space jump","Ctrl crouch","F fire"],E_=[{x:43,y:-1,z:45},{x:57,y:-1,z:44},{x:31,y:2,z:42},{x:69,y:2,z:41}];function e1({codename:o,operatorName:t,role:i,weapons:r,characterArt:l,squad:u}){var y;const d=an.useRef(null),h=an.useRef({x:-2.75,z:-2.72,y:0,velocityY:0,yaw:Math.PI,crouched:!1,grounded:!0}),m=an.useRef({}),p=an.useRef({dragging:!1,lastX:0}),[x,_]=an.useState({speed:"0.0",stance:"Standing",weapon:((y=r[0])==null?void 0:y[0])??"Primary",event:"Simulation ready"});return an.useEffect(()=>{if(!d.current)return;const S=d.current,A=new iM;A.background=null,A.fog=new wh(725265,12,32);const w=new Jn(58,1,.1,80),M=new JA({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});M.setClearColor(0,0),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.shadowMap.enabled=!0,M.shadowMap.type=U_,S.appendChild(M.domElement);const v=new uM(10479836,1511954,1.8);A.add(v);const G=new pM(16777215,2.5);G.position.set(5,10,3),G.castShadow=!0,G.shadow.mapSize.set(2048,2048),A.add(G);const C=new dM(8315084,55,10);C.position.set(-4,3.5,2),A.add(C);let N=0,X=performance.now(),V=0;function I(){const O=S.getBoundingClientRect();M.setSize(O.width,O.height,!1),w.aspect=O.width/Math.max(O.height,1),w.updateProjectionMatrix()}function Q(){const O=h.current,Y=new J(O.x,O.y+1.45,O.z),q=new J(Math.sin(O.yaw),-.04,Math.cos(O.yaw)).normalize(),oe=Y.clone().add(q.multiplyScalar(12)),me=new oM(new oa().setFromPoints([Y,oe]),new e0({color:8315084}));A.add(me),window.setTimeout(()=>A.remove(me),95),_(P=>{var $;return{...P,weapon:(($=r[0])==null?void 0:$[0])??P.weapon,event:"Rounds downrange"}})}function D(O){m.current[O.key.toLowerCase()]=!0,O.code==="Space"&&h.current.grounded&&(h.current.velocityY=5.2,h.current.grounded=!1),O.key.toLowerCase()==="f"&&Q(),[" ","w","a","s","d"].includes(O.key.toLowerCase())&&O.preventDefault()}function L(O){m.current[O.key.toLowerCase()]=!1}function F(O){p.current={dragging:!0,lastX:O.clientX},S.setPointerCapture(O.pointerId)}function ce(O){if(!p.current.dragging)return;const Y=O.clientX-p.current.lastX;p.current.lastX=O.clientX,h.current.yaw-=Y*.008}function ue(O){p.current.dragging=!1,S.releasePointerCapture(O.pointerId)}function fe(O,Y){var Tt,ot,H,pt;const q=m.current,oe=h.current,me=navigator.getGamepads?navigator.getGamepads()[0]:null,P=(q.w?1:0)-(q.s?1:0)-((me==null?void 0:me.axes[1])??0),$=(q.d?1:0)-(q.a?1:0)+((me==null?void 0:me.axes[0])??0),Me=q.shift||((Tt=me==null?void 0:me.buttons[10])==null?void 0:Tt.pressed);oe.crouched=q.control||q.c||!!((ot=me==null?void 0:me.buttons[1])!=null&&ot.pressed),me&&Math.abs(me.axes[2]??0)>.08&&(oe.yaw-=(me.axes[2]??0)*O*2.6),(H=me==null?void 0:me.buttons[7])!=null&&H.pressed&&Q();const Ee=Math.min(Math.hypot(P,$),1),U=oe.crouched?2.2:Me?6.2:3.7;if(Ee>.02){const We=Math.sin(oe.yaw),ht=Math.cos(oe.yaw);oe.x+=(We*P+ht*$)*U*O,oe.z+=(ht*P-We*$)*U*O}oe.x=nc.clamp(oe.x,-8.8,8.8),oe.z=nc.clamp(oe.z,-8.2,7.2);const ie=Math.sin(oe.yaw)*34,de=nc.clamp(-oe.x*18+ie,-150,150),Ue=nc.clamp(oe.z*7-oe.y*16,-72,72),Le=1.12+Math.min(Math.abs(oe.z+2.72)*.012,.06);S.style.setProperty("--scene-pan-x",`${de.toFixed(1)}px`),S.style.setProperty("--scene-pan-y",`${Ue.toFixed(1)}px`),S.style.setProperty("--scene-scale",Le.toFixed(3)),oe.velocityY-=13.5*O,oe.y=Math.max(0,oe.y+oe.velocityY*O),oe.y===0&&(oe.velocityY=0,oe.grounded=!0);const et=new J(-Math.sin(oe.yaw)*5.2,3.1,-Math.cos(oe.yaw)*5.2);w.position.lerp(new J(oe.x,oe.y+1.2,oe.z).add(et),.12),w.lookAt(oe.x,oe.y+1.25,oe.z),Y-V>180&&(V=Y,_({speed:(Ee*U).toFixed(1),stance:oe.crouched?"Crouched":Me&&Ee>.1?"Sprinting":"Standing",weapon:((pt=r[0])==null?void 0:pt[0])??"Primary",event:Ee>.1?"Movement input active":"Holding position"}))}function ye(O){const Y=Math.min((O-X)/1e3,.033);X=O,fe(Y,O),M.render(A,w),N=requestAnimationFrame(ye)}return I(),N=requestAnimationFrame(ye),window.addEventListener("resize",I),window.addEventListener("keydown",D),window.addEventListener("keyup",L),S.addEventListener("pointerdown",F),S.addEventListener("pointermove",ce),S.addEventListener("pointerup",ue),()=>{cancelAnimationFrame(N),window.removeEventListener("resize",I),window.removeEventListener("keydown",D),window.removeEventListener("keyup",L),S.removeEventListener("pointerdown",F),S.removeEventListener("pointermove",ce),S.removeEventListener("pointerup",ue),M.dispose(),S.removeChild(M.domElement)}},[o,l.front,r]),E.jsxs("section",{className:"section-block simulation-section",id:"simulation",children:[E.jsxs("div",{className:"section-heading",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Playable combat simulation"}),E.jsxs("h2",{children:[o," live movement arena"]})]}),E.jsx("p",{className:"section-note",children:"Move the selected operator beside the mounted-gun combat vehicle inside the realistic hangar scene."})]}),E.jsxs("div",{className:"simulation-shell",children:[E.jsx("div",{className:"simulation-canvas",ref:d,"aria-label":`${t} combat environment`,style:{"--sim-character-art":`url(${l.front})`,"--sim-bg-art":`url(${u0})`,"--scene-pan-x":"0px","--scene-pan-y":"-19px","--scene-scale":"1.12"},children:E.jsx("div",{className:"simulation-squad-layer","aria-label":"Full roster staged in the hangar",children:u.map((S,A)=>{const w=E_[A%E_.length],M=S.codename===o;return E.jsxs("figure",{className:M?"simulation-squad-member selected":"simulation-squad-member",style:{"--squad-x":`${w.x}%`,"--squad-bottom":`${w.y}%`,"--squad-z":w.z},children:[E.jsx("span",{className:"simulation-character-shadow","aria-hidden":"true"}),E.jsx("img",{src:S.art.front,alt:`${S.name} positioned in the hangar scenery`})]},`sim-squad-${S.codename}`)})})}),E.jsxs("aside",{className:"simulation-hud",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Operator"}),E.jsx("h3",{children:t}),E.jsx("span",{children:i})]}),E.jsxs("div",{className:"sim-stat-grid",children:[E.jsxs("span",{children:[E.jsx("small",{children:"Speed"}),E.jsx("strong",{children:x.speed})]}),E.jsxs("span",{children:[E.jsx("small",{children:"Stance"}),E.jsx("strong",{children:x.stance})]}),E.jsxs("span",{children:[E.jsx("small",{children:"Weapon"}),E.jsx("strong",{children:x.weapon})]}),E.jsxs("span",{children:[E.jsx("small",{children:"Event"}),E.jsx("strong",{children:x.event})]})]}),E.jsx("div",{className:"sim-control-list",children:$A.map(S=>E.jsx("span",{children:S},S))})]})]})]})}const t1=""+new URL("aion-prime-home-C4HNHDJK.png",import.meta.url).href,n1=""+new URL("aegis-orb-DXYv0DlF.webp",import.meta.url).href,i1=""+new URL("bastion-gunner-BQU4bRTG.webp",import.meta.url).href,a1=""+new URL("dominion-rifleman-Cwh5zc47.webp",import.meta.url).href,r1=""+new URL("hex-sniper-DBanyc3c.webp",import.meta.url).href,s1=""+new URL("iron-apostle-tkCRQDWq.webp",import.meta.url).href,o1=""+new URL("needle-scout-DLTin3nt.webp",import.meta.url).href,l1=""+new URL("praetorian-nine-CkL7t5GF.webp",import.meta.url).href,c1=""+new URL("reaper-carrier-BuwoUJMW.webp",import.meta.url).href,u1=""+new URL("seraph-prime-C1PTC_k1.webp",import.meta.url).href,f1=""+new URL("shade-stalker-B4qARH2q.webp",import.meta.url).href,d1=""+new URL("signal-warden-EluDmCdA.webp",import.meta.url).href,h1=""+new URL("vulture-striker-ByRVlwfD.webp",import.meta.url).href,p1=""+new URL("mara-voss-back-cutout-B60mCn99.png",import.meta.url).href,m1=""+new URL("mara-voss-front-cutout-_HJJOHln.png",import.meta.url).href,g1=""+new URL("mara-voss-side-cutout-Bvswx1rg.png",import.meta.url).href,v1=""+new URL("amani-mwangi-back-Dzy---MM.png",import.meta.url).href,_1=""+new URL("amani-mwangi-side-DPt4hc26.png",import.meta.url).href,x1=""+new URL("amani-mwangi-BJtJhSwL.png",import.meta.url).href,y1=""+new URL("amara-okonkwo-back-yf8yjfo5.png",import.meta.url).href,S1=""+new URL("amara-okonkwo-side-nnKOteR9.png",import.meta.url).href,M1=""+new URL("amara-okonkwo-FY_bPxDg.png",import.meta.url).href,E1=""+new URL("diego-rojas-back-B8mK-HUU.png",import.meta.url).href,b1=""+new URL("diego-rojas-side-Bd2jQ2WC.png",import.meta.url).href,T1=""+new URL("diego-rojas-DzEK7ZPh.png",import.meta.url).href,A1=""+new URL("ingrid-solberg-back-D0_9GQrv.png",import.meta.url).href,R1=""+new URL("ingrid-solberg-side-Cc5SK0Uo.png",import.meta.url).href,w1=""+new URL("ingrid-solberg-BRLrXACg.png",import.meta.url).href,C1=""+new URL("jean-paul-desrosiers-back-DJJNf4Z1.png",import.meta.url).href,D1=""+new URL("jean-paul-desrosiers-side-DKEEiZRE.png",import.meta.url).href,U1=""+new URL("jean-paul-desrosiers-x4hMl4pb.png",import.meta.url).href,L1=""+new URL("leila-haddad-back-D5_7-NXM.png",import.meta.url).href,N1=""+new URL("leila-haddad-side-8MRI1PHH.png",import.meta.url).href,O1=""+new URL("leila-haddad-Dxh5h0Ph.png",import.meta.url).href,P1=""+new URL("luca-romano-back-BNFsE0Sx.png",import.meta.url).href,z1=""+new URL("luca-romano-side-Bv7KWuGU.png",import.meta.url).href,B1=""+new URL("luca-romano-BLde7TVd.png",import.meta.url).href,F1=""+new URL("marcus-reed-back-DgwYj6Jw.png",import.meta.url).href,I1=""+new URL("marcus-reed-side-cla8xhVV.png",import.meta.url).href,H1=""+new URL("marcus-reed-r3xB289m.png",import.meta.url).href,G1=""+new URL("mateo-silva-back-DxTsLMOq.png",import.meta.url).href,V1=""+new URL("mateo-silva-side-DJc6NE5x.png",import.meta.url).href,k1=""+new URL("mateo-silva-5HZKvz0P.png",import.meta.url).href,j1=""+new URL("mathieu-toussaint-back-qyV5eh2-.png",import.meta.url).href,X1=""+new URL("mathieu-toussaint-side-CH6g55hc.png",import.meta.url).href,q1=""+new URL("mathieu-toussaint-DDmKt_8S.png",import.meta.url).href,W1=""+new URL("mireya-baptiste-back-B2zAE_tM.png",import.meta.url).href,Y1=""+new URL("mireya-baptiste-side-_hx8wxE3.png",import.meta.url).href,Z1=""+new URL("mireya-baptiste-UtQZLkcJ.png",import.meta.url).href,K1=""+new URL("nadine-jean-baptiste-back-DjCdWuTk.png",import.meta.url).href,Q1=""+new URL("nadine-jean-baptiste-side-DRE5o003.png",import.meta.url).href,J1=""+new URL("nadine-jean-baptiste-U6aEeAW3.png",import.meta.url).href,$1=""+new URL("omar-el-sayed-back-DvZ0YzV3.png",import.meta.url).href,eR=""+new URL("omar-el-sayed-side-GbsxNpnm.png",import.meta.url).href,tR=""+new URL("omar-el-sayed-BMPnC4NG.png",import.meta.url).href,nR=""+new URL("park-tae-min-back-D1wDi4ib.png",import.meta.url).href,iR=""+new URL("park-tae-min-side-BZejPE1D.png",import.meta.url).href,aR=""+new URL("park-tae-min-BTjYZmcm.png",import.meta.url).href,rR=""+new URL("priya-nair-back-Dx5txwin.png",import.meta.url).href,sR=""+new URL("priya-nair-side-CRHTHMmA.png",import.meta.url).href,oR=""+new URL("priya-nair-DFXsfudy.png",import.meta.url).href,lR=""+new URL("samir-khan-back-D1HMM4ex.png",import.meta.url).href,cR=""+new URL("samir-khan-side-lnwg1j9U.png",import.meta.url).href,uR=""+new URL("samir-khan-afwMkOKc.png",import.meta.url).href,fR=""+new URL("sofia-alvarez-back-BmPLZWff.png",import.meta.url).href,dR=""+new URL("sofia-alvarez-side-Dz9NXRSQ.png",import.meta.url).href,hR=""+new URL("sofia-alvarez-Cjr7OGqX.png",import.meta.url).href,pR=""+new URL("tomas-novak-back-LWo0EKI-.png",import.meta.url).href,mR=""+new URL("tomas-novak-side-y2dMENIS.png",import.meta.url).href,gR=""+new URL("tomas-novak-ao_fJqd-.png",import.meta.url).href,vR=""+new URL("yuki-tanaka-back-KAS85P0S.png",import.meta.url).href,_R=""+new URL("yuki-tanaka-side-BApmwsfq.png",import.meta.url).href,xR=""+new URL("yuki-tanaka-Njn3uOWV.png",import.meta.url).href,yR=""+new URL("zoe-mensah-back-D4NVfIWL.png",import.meta.url).href,SR=""+new URL("zoe-mensah-side-C2ywuUPz.png",import.meta.url).href,MR=""+new URL("zoe-mensah-lg5b-19l.png",import.meta.url).href,b_=[{name:"Kinetic Breach",type:"Active",cooldown:"18s",keyboard:"Z",controller:"LB",purpose:"Client-predicted directional burst for entry, chase, and escape chains.",counterplay:"Linear path, brief recovery on miss, blocked by heavy shields and stasis traps.",vfx:"Compressed air ribbon, suit sparks, and a hard-edged impact flash.",audio:"Pressure crack, servo snap, and close-range concussion tail.",network:"Predicted movement on owner, server-authoritative hit cone and final capsule location."},{name:"Echo Spike",type:"Active",cooldown:"24s",keyboard:"X",controller:"RB",purpose:"Throwable movement sensor that rewards timing before a coordinated push.",counterplay:"Device is visible, destructible, and only pings moving targets inside radius.",vfx:"Low-profile floor spike with pulsing scan rings and clean team-only silhouettes.",audio:"Soft sonar ticks that accelerate when recent motion is detected.",network:"Server-owned detection volume replicates compressed ping events to allied clients."},{name:"Snap Guard",type:"Active",cooldown:"28s",keyboard:"G",controller:"D-Pad Up",purpose:"1.25s frontal damage reduction for surviving a committed breach without tanking.",counterplay:"Flanks, explosives, melee, and delayed fire bypass the short protection window.",vfx:"Angular translucent forearm shield with directional impact ripples.",audio:"Rising charge tone, glassy block clicks, and a clean shutdown snap.",network:"Server validates guard angle, active tag, and damage modifier against attacker vector."},{name:"Overclock Vector",type:"Ultimate",cooldown:"Charge",keyboard:"T",controller:"LB + RB",purpose:"10s tempo spike: faster reloads, extended slides, and reduced movement cooldown recovery.",counterplay:"Range denial, suppression zones, burst focus, and trap layering.",vfx:"Subtle suit line glow, footstep light trails, and intensified breach distortion.",audio:"Heartbeat layer, exposed servo whine, and sharper movement transients.",network:"Replicated gameplay effect with scoped stat modifiers and montage-safe cancellation tags."}],ER=[["Move","W A S D","Left Stick","Analog movement with acceleration, strafing, and server-authoritative velocity caps."],["Look / Aim","Mouse","Right Stick","Raw mouse input, tuned stick response curve, ADS sensitivity scalar."],["Fire","Left Mouse","Right Trigger","Client-side muzzle feedback, server-authoritative trace and damage."],["Aim Down Sights","Right Mouse","Left Trigger","Hold-to-ADS with camera FOV blend and weapon sway reduction."],["Jump / Mantle","Space","A / Cross","Jump instantly; mantle triggers when ledge traces validate in front arc."],["Sprint","Left Shift","Left Stick Click","Hold sprint, cancellable into slide, jump, mantle, reload, or ability windup."],["Tactical Sprint","Double-tap Shift","Double-click Left Stick","Short burst with weapon lowered and stronger audio signature."],["Crouch / Slide","Left Ctrl","B / Circle","Tap crouch; hold or press while sprinting to enter slide."],["Lean Left","Q","D-Pad Left while ADS","ADS-only shoulder lean with exposed capsule and weapon obstruction checks."],["Lean Right","E","D-Pad Right while ADS","Mirrors left lean for corner play without changing ability bindings."],["Reload / Interact","R / F","X / Square","Context priority favors reload unless interact target is centered and valid."],["Swap Weapon","1 / 2 / Wheel","Y / Triangle","Fast swap queue respects reload cancel and equip animation windows."],["Melee","V / Mouse 4","Right Stick Click","Short lunge, server-confirmed hit frame, combo-safe recovery."],["Ping","Middle Mouse","D-Pad Down","Team ping raycast with cooldown throttling and replicated marker events."]],bR=[["Walk","420 uu/s","High-fidelity strafe control for ADS peeking and micro-correction."],["Sprint","650 uu/s","Fast baseline traversal with cancellable jump, crouch, and slide entry."],["Tac Sprint","780 uu/s","Short stamina burst that cannot fire but can cancel into mantle or breach."],["Slide","850 -> 420 uu/s","0.75s decay curve, hip-fire penalty, and melee-lunge combo window."],["Air Control","0.42 scalar","Midair correction supports skill expression without arena-shooter drift."],["Mantle","0.38-0.72s","Predictive traces, motion warping, and camera-stable climb starts."]],Ti=[{id:"dominion-rifleman",name:"Dominion Rifleman",designation:"H-01 Line Infantry",enemyClass:"Henchman",threat:"Standard",role:"Mobile suppression",description:"Disciplined corporate infantry deployed in linked fireteams to hold lanes and force operators out of cover.",armament:"VX pulse carbine, fragmentation charge, tactical smoke",behavior:"Advances by bounds, shares target pings, and suppresses the last known operator position.",weakness:"Break the fireteam link with flanks, vertical attacks, or signal disruption.",image:a1,imagePosition:"center"},{id:"bastion-gunner",name:"Bastion Gunner",designation:"H-07 Heavy Enforcer",enemyClass:"Henchman",threat:"Elevated",role:"Area denial",description:"Armored heavy who anchors enemy formations with sustained fire and a directional kinetic shield.",armament:"Helix rotary cannon, forearm shield, proximity mine",behavior:"Claims a firing lane, braces behind cover, and rotates slowly while the shield is active.",weakness:"Attack from separated angles or overload the shield before the weapon reaches full spin.",image:i1,imagePosition:"center"},{id:"shade-stalker",name:"Shade Stalker",designation:"H-12 Infiltrator",enemyClass:"Henchman",threat:"Severe",role:"Assassination",description:"Silent flanker equipped with refractive camouflage and a jammer that isolates operators from squad telemetry.",armament:"Suppressed flechette SMG, mono-edge blade, signal jammer",behavior:"Avoids direct sightlines, marks isolated targets, then attacks during reload or ability recovery.",weakness:"Motion sensors, area damage, and close squad spacing expose the camouflage approach.",image:f1,imagePosition:"center"},{id:"signal-warden",name:"Signal Warden",designation:"H-18 Command Support",enemyClass:"Henchman",threat:"Elevated",role:"Squad coordination",description:"Battlefield coordinator who improves nearby hostile accuracy, armor recovery, and response to operator pings.",armament:"Arc burst rifle, command beacon, repair injector",behavior:"Stays behind the line, relocates when exposed, and revives one disabled henchman per encounter.",weakness:"Destroy the command beacon or eliminate the Warden before engaging reinforced units.",image:d1,imagePosition:"center"},{id:"needle-scout",name:"Needle Scout",designation:"D-03 Recon Drone",enemyClass:"Drone",threat:"Standard",role:"Detection",description:"Fast aerial observer that paints operators for every connected enemy and tracks movement through light cover.",armament:"Optical marker, micro-dart burst, wideband scanner",behavior:"Circles above the squad, breaks line of sight after marking, and returns on a new approach vector.",weakness:"Low armor and a bright scan lens make it vulnerable to focused fire and EMP effects.",image:o1,imagePosition:"center"},{id:"vulture-striker",name:"Vulture Striker",designation:"D-11 Assault Drone",enemyClass:"Drone",threat:"Elevated",role:"Aerial pressure",description:"Attack drone that dives through open lanes, fires a kinetic burst, and climbs before operators can return fire.",armament:"Twin coil repeaters, dive rockets, evasive flare",behavior:"Alternates high cover with rapid attack runs and prioritizes stationary or wounded targets.",weakness:"Predict the climb path, use hard overhead cover, or interrupt the dive with shock damage.",image:h1,imagePosition:"center"},{id:"aegis-orb",name:"Aegis Orb",designation:"D-16 Defense Drone",enemyClass:"Drone",threat:"Elevated",role:"Protection",description:"Mobile shield projector that follows high-value units and redirects its barrier toward incoming damage.",armament:"Directional barrier, pulse repeater, repair tether",behavior:"Maintains distance from its protected unit and shifts the shield toward the highest damage source.",weakness:"Crossfire overwhelms its facing logic; the exposed rear capacitor takes amplified damage.",image:n1,imagePosition:"center"},{id:"reaper-carrier",name:"Reaper Carrier",designation:"D-24 Swarm Platform",enemyClass:"Drone",threat:"Severe",role:"Swarm deployment",description:"Armored carrier that seeds combat spaces with disposable hunter drones and remote explosive charges.",armament:"Hunter swarm bay, cluster charge, defensive laser",behavior:"Keeps long sightlines, deploys cover-seeking drones, and retreats while its swarm surrounds the squad.",weakness:"Damage the open launch bay during deployment to destroy the stored swarm and stagger the carrier.",image:c1,imagePosition:"center"},{id:"praetorian-nine",name:"Praetorian-9",designation:"C-09 Shock Cyborg",enemyClass:"Cyborg",threat:"Severe",role:"Close assault",description:"Reinforced breach unit that converts incoming damage into short bursts of speed and melee force.",armament:"Arc cleaver, shoulder scattergun, reactive plating",behavior:"Absorbs initial fire, closes rapidly, and chains cleaver strikes against grouped operators.",weakness:"Stagger effects interrupt the charge; leg servos remain vulnerable after a missed heavy strike.",image:l1,imagePosition:"center"},{id:"hex-sniper",name:"HEX Sniper",designation:"C-14 Neural Marksman",enemyClass:"Cyborg",threat:"Severe",role:"Long-range execution",description:"Precision cyborg that predicts repeated movement patterns and adjusts its lead calculation after every shot.",armament:"Mag-rail rifle, decoy projector, target prediction core",behavior:"Changes nests after two shots and punishes operators who repeat the same peek timing.",weakness:"Irregular movement, smoke, and decoy targets corrupt its prediction stack.",image:r1,imagePosition:"center"},{id:"iron-apostle",name:"Iron Apostle",designation:"C-22 Siege Cyborg",enemyClass:"Cyborg",threat:"Severe",role:"Objective breach",description:"Massive biomechanical siege unit built to destroy fortified positions and deny extraction zones.",armament:"Thermal lance, seismic fist, back-mounted mortar",behavior:"Bombards cover, advances through the impact zone, then uses the lance to split the squad.",weakness:"Cooling vents open after mortar volleys and expose the power spine to critical damage.",image:s1,imagePosition:"center"},{id:"seraph-prime",name:"Seraph Prime",designation:"C-Ω Command Avatar",enemyClass:"Cyborg",threat:"Apex",role:"Boss command unit",description:"AION Prime’s embodied battlefield intelligence, capable of rewriting encounter rules and directing every connected machine.",armament:"Gravitic field, neural beam, drone fabrication lattice",behavior:"Cycles between command, assault, and recovery phases while changing arena hazards and unit priorities.",weakness:"Sever three network anchors to interrupt phase transitions and expose the central cognition core.",image:u1,imagePosition:"center"}],T_={Vector:[["Slide chain","+18% exit speed","Keeps momentum after a clean slide kill or breach dash, rewarding aggressive entries."],["Mantle recovery","-90ms weapon raise","Returns to fire-ready faster after vaults so vertical flanks feel sharp."],["Risk hook","Louder sprint tail","High speed creates readable audio pressure for defenders."]],Bulwark:[["Braced advance","-12% sprint speed","Moves slower but keeps weapon stability while crossing open lanes."],["Knockback resist","45% reduction","Heavy stance resists explosions, melee bumps, and shield impacts."],["Risk hook","Slow turn while braced","Commitment is punishable by flanks and quick angle swaps."]],Kitsune:[["Quiet route","-35% footstep radius","Crouch-walk and short sprint bursts produce softer positional reads."],["Mantle decoy","1 false step ping","A brief decoy footstep plays after ledge traversal to sell misdirection."],["Risk hook","Lower stumble resist","Taking damage during stealth routes slows recovery more than average."]],Mirage:[["Signal drift","+12% strafe blend","Strafes feel slippery during ability windows to support doorway misdirection."],["Ghost vault","0.18s shimmer","Vaulting through masked zones leaves a readable afterimage trail."],["Risk hook","No sprint bonus","Relies on deception rather than raw speed."]],Cinder:[["Heat stride","+10% through burn lanes","Moves faster across owned thermite lanes to reposition around denial zones."],["Ash slide","+0.2s slide sustain","Slides carry slightly longer when entering from sprint near active area denial."],["Risk hook","Bright movement VFX","Enhanced lane movement is easy to visually track."]],Lumine:[["Triage sprint","+14% toward allies","Gains speed when sprinting toward downed or low-health teammates."],["Revive crouch","+20% crouch speed","Can reposition while staying low during revive setup."],["Risk hook","Combat speed neutral","No duel mobility bonus when away from team play."]],Siren:[["Masked steps","2.5s audio dampen","Can briefly suppress team footstep spikes before a coordinated push."],["Pulse brake","Fast stop control","Decelerates quickly after sprint to bait audio reads and corner swings."],["Risk hook","Visible waveform","Audio masking creates subtle readable suit pulses."]],Monsoon:[["Smoke slip","+16% inside cover","Accelerates slightly while moving through owned smoke or dampening fields."],["Flow strafe","+10% direction swap","Changes lateral direction faster for controller-style lane shaping."],["Risk hook","Field dependent","Mobility identity weakens when abilities are on cooldown."]],Frostline:[["Anchor step","+18% ADS walk","Keeps tighter marksman movement while holding long angles."],["Cold retreat","+12% backpedal after hit","Can disengage from punished peeks without becoming a speed duelist."],["Risk hook","Slow mantle","+110ms ledge recovery keeps high-ground rotations committal."]],Relay:[["Link hop","Short ally tether","Gets a short reposition burst after linking with a nearby teammate."],["Squad tempo","+8% team sprint aura","Small movement benefit for allies rotating through her link radius."],["Risk hook","Requires proximity","Solo routes lose most mobility value."]],Citadel:[["Shoulder breach","Door shove impulse","Can push through light barricade contact without full stop."],["Armor gait","-8% sprint accel","Heavy gear starts slower but maintains steady push speed under fire."],["Risk hook","Large audio profile","Movement is intentionally easy to identify."]],Vanguard:[["Hard push","+18% tac sprint duration","Longer tactical sprint supports first-contact entries."],["Flash footing","No stumble on blind","Maintains basic movement control during flash resistance windows."],["Risk hook","Wide turn radius","Hard pushes need commitment and path planning."]],Condor:[["Climb burst","+24% climb speed","Fast ledge and rooftop traversal defines the vertical assault role."],["Aerial control","+0.14 air scalar","Better midair correction after grapple or high-ground drops."],["Risk hook","Landing noise spike","Aggressive vertical routes announce arrival."]],Scarab:[["Trap crawl","+18% crouch near devices","Moves faster while maintaining low profile around deployed traps."],["Lockdown pivot","+12% turn accel","Can rotate around objective traps without becoming a runner."],["Risk hook","Low chase speed","Weak at pursuing enemies outside prepared routes."]],Hammer:[["Heavy carry","-10% sprint speed","Big weapon kit moves slower but keeps suppression stable."],["Impact lunge","+18% melee reach","Short, heavy shove gives close-range space without dash mobility."],["Risk hook","Slow recovery","Missed lunges and slides take longer to recover."]],Circuit:[["Overclock step","+12% after hack","Brief speed bump after a successful drone or HUD interference action."],["Signal sidestep","+10% ADS strafe","Keeps small lateral corrections while using tech tools."],["Risk hook","Cooldown tied","Mobility spike depends on successful system interaction."]],Veloce:[["Burst strafe","+22% first step","Explosive first lateral step supports quick peeks and duel resets."],["Reset sprint","0.35s faster re-entry","Returns to sprint faster after weapon swap or slide cancel."],["Risk hook","Low sustain","Short bursts fade quickly in long chases."]],Lockjaw:[["Snare stance","+16% ADS hold speed","Can hold angles around traps while keeping steady micro-movement."],["Chase cut","+10% toward snared targets","Small chase bonus only when anti-mobility tools connect."],["Risk hook","No free escape","Defensive kit lacks raw disengage movement."]],Rift:[["Terrain read","+20% mantle after scan","Route scans unlock faster mantle and climb timing on marked paths."],["Pathfinder vault","Longer vault reach","Can clear slightly wider cover gaps with readable animation."],["Risk hook","Needs route setup","Unscanned terrain uses standard movement only."]],Null:[["Blackout drift","No radar sprint ping","Sprint pings are suppressed during blackout windows."],["Decoy brake","Instant stop fake","Can create a false movement stop to disrupt sensor reads."],["Risk hook","Lower acceleration","Baseline sprint starts slightly slower to offset stealth value."]],Forge:[["Workbench walk","Deploy while moving","Can place light hardpoints while walking instead of fully stopping."],["Repair shuffle","+16% strafe during repair","Keeps small movement while maintaining engineer interactions."],["Risk hook","No chase perk","Mobility supports setup, not pursuit."]]},TR=["Enhanced Input contexts for movement, combat, ability targeting, and controller aim tuning.","Gameplay Ability System tags drive cooldowns, lockouts, ultimate modifiers, and interrupt rules.","Owner-only cosmetic prediction fires instantly, then reconciles against server-confirmed ability state.","Animation layers split lower-body locomotion, upper-body weapon handling, additive recoil, and ability overlays.","Network relevancy, pooled VFX, compact tag replication, and event-based traces keep matches scalable."],AR=["Idle","Walk","Sprint","Tac Sprint","Slide","Mantle","ADS","Fire","Reload","Ability","Hit React","Recovery","Death"],RR={name:"Mara Voss",codename:"Vector",gender:"Female",country:"Germany / Brazil",flag:"🇩🇪 🇧🇷",heritage:"German-Brazilian",role:"Mobile assault",specialization:"Momentum entries, vertical flanks, and pressure conversion."},ea=[RR,{name:"Amara Okonkwo",codename:"Bulwark",gender:"Female",country:"Nigeria",flag:"🇳🇬",heritage:"Igbo Nigerian",role:"Anchor defender",specialization:"Deployable cover, lane control, and anti-breach denial."},{name:"Yuki Tanaka",codename:"Kitsune",gender:"Female",country:"Japan",flag:"🇯🇵",heritage:"Japanese",role:"Recon infiltrator",specialization:"Silent routing, decoy pings, and precision flank timing."},{name:"Leila Haddad",codename:"Mirage",gender:"Female",country:"Lebanon",flag:"🇱🇧",heritage:"Lebanese Arab",role:"Disruption support",specialization:"Visual clutter, signal masking, and doorway misdirection."},{name:"Sofia Alvarez",codename:"Cinder",gender:"Female",country:"Mexico",flag:"🇲🇽",heritage:"Mexican",role:"Area denial",specialization:"Thermite lanes, reload pressure, and objective burn control."},{name:"Nadine Jean-Baptiste",codename:"Lumine",gender:"Female",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Combat medic",specialization:"Fast revives, temporary armor boosts, and triage routing."},{name:"Mireya Baptiste",codename:"Siren",gender:"Female",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Audio warfare",specialization:"Footstep masking, sonic reveals, and anti-rush disruption."},{name:"Priya Nair",codename:"Monsoon",gender:"Female",country:"India",flag:"🇮🇳",heritage:"Malayali Indian",role:"Tactical controller",specialization:"Smoke shaping, sightline breaks, and sensor dampening."},{name:"Ingrid Solberg",codename:"Frostline",gender:"Female",country:"Norway",flag:"🇳🇴",heritage:"Norwegian",role:"Marksman control",specialization:"Long-angle overwatch, slow fields, and retreat punishment."},{name:"Zoe Mensah",codename:"Relay",gender:"Female",country:"Ghana",flag:"🇬🇭",heritage:"Ghanaian",role:"Team mobility",specialization:"Short-range reposition links, squad tempo, and flank rescue."},{name:"Jean-Paul Desrosiers",codename:"Citadel",gender:"Male",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Shield breaker",specialization:"Armor cracking, barricade pressure, and breach follow-through."},{name:"Mathieu Toussaint",codename:"Vanguard",gender:"Male",country:"Haiti",flag:"🇭🇹",heritage:"Haitian",role:"Point man",specialization:"First-contact survivability, flash resistance, and hard pushes."},{name:"Diego Rojas",codename:"Condor",gender:"Male",country:"Colombia",flag:"🇨🇴",heritage:"Colombian",role:"Vertical assault",specialization:"Grapple entries, rooftop angles, and high-ground duels."},{name:"Omar El-Sayed",codename:"Scarab",gender:"Male",country:"Egypt",flag:"🇪🇬",heritage:"Egyptian Arab",role:"Trap engineer",specialization:"Pressure mines, route prediction, and objective lockdown."},{name:"Marcus Reed",codename:"Hammer",gender:"Male",country:"United States",flag:"🇺🇸",heritage:"African American",role:"Heavy gunner",specialization:"Suppressive fire, cover shredding, and squad advance windows."},{name:"Park Tae-min",codename:"Circuit",gender:"Male",country:"South Korea",flag:"🇰🇷",heritage:"Korean",role:"Systems hacker",specialization:"Drone hijacks, HUD noise, and cooldown interference."},{name:"Luca Romano",codename:"Veloce",gender:"Male",country:"Italy",flag:"🇮🇹",heritage:"Italian",role:"Skirmisher",specialization:"Quick peeks, burst strafes, and duel reset timing."},{name:"Tomas Novak",codename:"Lockjaw",gender:"Male",country:"Czech Republic",flag:"🇨🇿",heritage:"Czech",role:"Anti-mobility",specialization:"Snare traps, dash denial, and chase interruption."},{name:"Amani Mwangi",codename:"Rift",gender:"Male",country:"Kenya",flag:"🇰🇪",heritage:"Kikuyu Kenyan",role:"Pathfinder",specialization:"Route scans, mantle boosts, and terrain-aware rotations."},{name:"Samir Khan",codename:"Null",gender:"Male",country:"Pakistan",flag:"🇵🇰",heritage:"Pakistani",role:"Counter-intel",specialization:"Recon denial, decoy signatures, and sensor blackout."},{name:"Mateo Silva",codename:"Forge",gender:"Male",country:"Brazil",flag:"🇧🇷",heritage:"Afro-Brazilian",role:"Combat engineer",specialization:"Portable hardpoints, ammo stations, and repair denial."}],A_={Vector:{front:m1,side:g1,back:p1},Bulwark:{front:M1,side:S1,back:y1},Kitsune:{front:xR,side:_R,back:vR},Mirage:{front:O1,side:N1,back:L1},Cinder:{front:hR,side:dR,back:fR},Lumine:{front:J1,side:Q1,back:K1},Siren:{front:Z1,side:Y1,back:W1},Monsoon:{front:oR,side:sR,back:rR},Frostline:{front:w1,side:R1,back:A1},Relay:{front:MR,side:SR,back:yR},Citadel:{front:U1,side:D1,back:C1},Vanguard:{front:q1,side:X1,back:j1},Condor:{front:T1,side:b1,back:E1},Scarab:{front:tR,side:eR,back:$1},Hammer:{front:H1,side:I1,back:F1},Circuit:{front:aR,side:iR,back:nR},Veloce:{front:B1,side:z1,back:P1},Lockjaw:{front:gR,side:mR,back:pR},Rift:{front:x1,side:_1,back:v1},Null:{front:uR,side:cR,back:lR},Forge:{front:k1,side:V1,back:G1}},R_={Vector:[["KX-9 Shardline","Primary carbine","27 body / 40 head","720 RPM","10-38m","30 rounds"],["P-17 Latch","Machine pistol","18 body / 27 head","950 RPM","0-15m","20 rounds"],["Shock Baton","Melee","50 quick / 90 heavy","0.32s hit frame","2.2m lunge","Combo reset"]],Bulwark:[["Aegis-12 Bastion","Primary shotgun","96 body / 124 head","92 RPM","0-12m","8 shells"],["R-40 Anchor","Heavy revolver","48 body / 72 head","180 RPM","0-24m","6 rounds"],["Tower Maul","Melee","65 quick / 115 heavy","0.42s hit frame","2.0m lunge","Armor stagger"]],Kitsune:[["S-19 Whisper","Suppressed SMG","22 body / 33 head","860 RPM","0-26m","34 rounds"],["Tanto-9 Ghost","Suppressed pistol","31 body / 46 head","360 RPM","0-18m","13 rounds"],["Ceramic Tanto","Melee","45 quick / 85 heavy","0.26s hit frame","2.4m lunge","Backstab bonus"]],Mirage:[["M7 Prism","Burst rifle","26 body / 39 head","690 RPM","12-42m","27 rounds"],["Fennec Pulse","Compact sidearm","24 body / 36 head","520 RPM","0-16m","16 rounds"],["Signal Knife","Melee","45 quick / 90 heavy","0.30s hit frame","2.2m lunge","Sensor tag"]],Cinder:[["HX-44 Ember","Thermite LMG","25 body / 36 head","650 RPM","10-34m","55 rounds"],["Flare-6 Compact","Flare pistol","38 body / 55 head","150 RPM","0-20m","1 round"],["Heat Axe","Melee","60 quick / 110 heavy","0.38s hit frame","2.1m lunge","Burn tick"]],Lumine:[["MediCore V9","Support SMG","21 body / 32 head","820 RPM","0-24m","32 rounds"],["Suture-15","Burst pistol","28 body / 42 head","480 RPM","0-18m","15 rounds"],["Rescue Baton","Melee","42 quick / 80 heavy","0.28s hit frame","2.1m lunge","Revive cancel safe"]],Siren:[["Wail-3 Resonator","Sonic rifle","24 body / 35 head","700 RPM","8-32m","30 rounds"],["Mute-11 Sidearm","Damped pistol","30 body / 45 head","390 RPM","0-18m","14 rounds"],["Tuning Blade","Melee","46 quick / 88 heavy","0.31s hit frame","2.2m lunge","Audio reveal"]],Monsoon:[["R-7 Cloudburst","Tactical AR","26 body / 38 head","680 RPM","10-40m","30 rounds"],["Mist-18","Utility pistol","25 body / 38 head","430 RPM","0-17m","18 rounds"],["Katar Relay","Melee","48 quick / 92 heavy","0.29s hit frame","2.2m lunge","Smoke exit"]],Frostline:[["N-88 Glacier","Marksman rifle","62 body / 96 head","170 RPM","24-70m","12 rounds"],["Fjord-9","Precision pistol","34 body / 51 head","330 RPM","0-22m","10 rounds"],["Ice Pick","Melee","52 quick / 96 heavy","0.33s hit frame","2.0m lunge","Slow tag"]],Relay:[["Link-45 Vector","Compact AR","24 body / 36 head","760 RPM","8-32m","30 rounds"],["Hopline PDW","Machine pistol","17 body / 26 head","980 RPM","0-14m","22 rounds"],["Relay Tonfa","Melee","46 quick / 86 heavy","0.28s hit frame","2.3m lunge","Swap cancel"]],Citadel:[["Breach-10 Mason","Slug shotgun","82 body / 120 head","105 RPM","0-20m","7 shells"],["Rampart .50","Hand cannon","55 body / 82 head","155 RPM","0-28m","5 rounds"],["Breaker Hammer","Melee","70 quick / 125 heavy","0.45s hit frame","1.9m lunge","Shield crack"]],Vanguard:[["V-30 Pointman","Assault rifle","28 body / 41 head","640 RPM","10-38m","32 rounds"],["Guard-12","Tactical sidearm","32 body / 48 head","360 RPM","0-20m","12 rounds"],["Combat Kukri","Melee","52 quick / 98 heavy","0.32s hit frame","2.2m lunge","Flash resist"]],Condor:[["Talon-5 Carbine","Light carbine","25 body / 37 head","780 RPM","8-34m","28 rounds"],["Aerie-2","Climb pistol","27 body / 41 head","450 RPM","0-16m","15 rounds"],["Grapple Hook Blade","Melee","48 quick / 90 heavy","0.30s hit frame","2.5m lunge","Air cancel"]],Scarab:[["Khepri-4 AR","Trap rifle","27 body / 40 head","620 RPM","12-44m","30 rounds"],["Scarab Stinger","Dart pistol","22 body / 34 head","500 RPM","0-18m","12 darts"],["Hooked Khopesh","Melee","55 quick / 100 heavy","0.35s hit frame","2.0m lunge","Trap trigger"]],Hammer:[["M60 Atlas","Heavy LMG","31 body / 43 head","560 RPM","14-50m","75 rounds"],["Breaker-8","Sawed sidearm","70 body / 98 head","115 RPM","0-8m","2 shells"],["Breach Sledge","Melee","75 quick / 135 heavy","0.48s hit frame","1.8m lunge","Cover shred"]],Circuit:[["Arc-22 Carbine","Smart carbine","24 body / 36 head","740 RPM","8-36m","30 rounds"],["ShortBus EMP","EMP pistol","18 body / 27 head","600 RPM","0-15m","18 rounds"],["Livewire Baton","Melee","45 quick / 85 heavy","0.30s hit frame","2.1m lunge","Cooldown zap"]],Veloce:[["VX-11 Sprint","Duel SMG","20 body / 30 head","920 RPM","0-24m","36 rounds"],["Stiletto-7","Fast pistol","26 body / 39 head","540 RPM","0-16m","17 rounds"],["Carbon Stiletto","Melee","44 quick / 82 heavy","0.24s hit frame","2.6m lunge","Duel reset"]],Lockjaw:[["Clamp-40 DMR","Anti-mobility DMR","48 body / 72 head","260 RPM","18-56m","16 rounds"],["Snare-9","Tether pistol","24 body / 36 head","460 RPM","0-18m","15 rounds"],["Jaw Trap Blade","Melee","54 quick / 100 heavy","0.34s hit frame","2.0m lunge","Dash snare"]],Rift:[["Trail-6 Scout","Scout rifle","42 body / 63 head","300 RPM","18-58m","18 rounds"],["Path-12 Compact","Trail pistol","29 body / 44 head","410 RPM","0-20m","14 rounds"],["Rift Machete","Melee","55 quick / 102 heavy","0.33s hit frame","2.3m lunge","Mantle boost"]],Null:[["Blackout-13","Suppressed DMR","45 body / 68 head","280 RPM","16-54m","15 rounds"],["Void-5","Jammer pistol","21 body / 32 head","620 RPM","0-14m","20 rounds"],["Null Spike","Melee","47 quick / 90 heavy","0.30s hit frame","2.2m lunge","Sensor blank"]],Forge:[["Anvil-27 AR","Engineer rifle","27 body / 40 head","650 RPM","10-40m","34 rounds"],["Rivet-3","Nail sidearm","35 body / 52 head","300 RPM","0-20m","9 rounds"],["Forge Wrench","Melee","58 quick / 108 heavy","0.36s hit frame","2.0m lunge","Repair denial"]]};function wR(o,t,i,r){const l=o*(1-r)+40*r,d=(Math.ceil(i/l)-1)*60/t;return Math.max(d,.08).toFixed(2)}function Uo(o,t,i=88){const r=Math.abs((o-t+540)%360-180);return Math.max(0,1-r/i)}function w_(o){const t=o.replace("#","");return t==="operators"||t==="enemies"||t==="simulation"||t==="systems"||t==="combat"?t:"home"}function CR(o){const t=o.role.split(" ")[0]??"Adaptive",i=o.heritage.split(/[\s-]/)[0]??"Global",r=o.specialization.split(",")[0].replace(".","");return[t,i,r,o.gender==="Female"?"Precision-led":"Pressure-ready"]}function DR(){const[o,t]=an.useState(()=>w_(window.location.hash)),[i,r]=an.useState(b_[0]),[l,u]=an.useState(50),[d,h]=an.useState(35),[m,p]=an.useState(0),[x,_]=an.useState("All"),[y,S]=an.useState(Ti[0].id),[A,w]=an.useState({angle:0,glareX:50,glareY:35,rotateX:0}),M=an.useRef(0),v=an.useMemo(()=>wR(27,720,100+l,d/100),[l,d]),G=100+l,C=ea[m],N=A_[C.codename],X=["Vector","Bulwark","Kitsune","Siren"],V=[C,...ea.filter(U=>U.codename!==C.codename&&X.includes(U.codename))].slice(0,4).map(U=>({art:A_[U.codename],codename:U.codename,name:U.name})),I=R_[C.codename]??R_.Vector,Q=T_[C.codename]??T_.Vector,D=Ti.find(U=>U.id===y)??Ti[0],L=x==="All"?Ti:Ti.filter(U=>U.enemyClass===x),F=an.useMemo(()=>b_.map(U=>({...U,name:U.type==="Ultimate"?`Overclock ${C.codename}`:U.name,purpose:U.type==="Ultimate"?`10s ${C.role.toLowerCase()} tempo spike tuned for ${C.specialization.toLowerCase()}`:U.purpose.replace("entry, chase, and escape chains",`${C.role.toLowerCase()} execution windows`),vfx:U.type==="Ultimate"?`${C.codename} suit lines intensify with role-colored movement trails and a clean activation pulse.`:U.vfx})),[C]),ce=F.find(U=>U.keyboard===i.keyboard&&U.controller===i.controller)??F[0],ue=(A.angle%360+360)%360,fe=Math.max(Uo(ue,90),Uo(ue,270)),ye=ue>180?-1:1,O={"--back-opacity":`${Uo(ue,180)}`,"--front-opacity":`${Math.max(Uo(ue,0),Uo(ue,360))}`,"--glare-x":`${A.glareX}%`,"--glare-y":`${A.glareY}%`,"--side-opacity":`${fe}`,"--side-scale":`${ye}`,"--turn-angle":`${A.angle}deg`,"--rotate-x":`${A.rotateX}deg`};function Y(U){t(U),window.history.replaceState(null,"",`#${U}`),window.scrollTo({top:0,behavior:"smooth"})}function q(U){if(_(U),U!=="All"&&D.enemyClass!==U){const ie=Ti.find(de=>de.enemyClass===U);ie&&S(ie.id)}}function oe(U){const ie=(U+ea.length)%ea.length;p(ie),w({angle:0,glareX:50,glareY:35,rotateX:0})}function me(U){p(ie=>(ie+U+ea.length)%ea.length),w({angle:0,glareX:50,glareY:35,rotateX:0})}an.useEffect(()=>{function U(ie){(ie.key==="ArrowRight"||ie.key==="ArrowDown")&&(ie.preventDefault(),me(1)),(ie.key==="ArrowLeft"||ie.key==="ArrowUp")&&(ie.preventDefault(),me(-1)),ie.key==="Home"&&(ie.preventDefault(),oe(0))}return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[]),an.useEffect(()=>{function U(){t(w_(window.location.hash)),window.scrollTo({top:0,behavior:"smooth"})}return window.addEventListener("hashchange",U),()=>window.removeEventListener("hashchange",U)},[]),an.useEffect(()=>{let U=0;function ie(){var Le,et;const[de]=navigator.getGamepads?navigator.getGamepads():[],Ue=performance.now();if(de&&Ue-M.current>260){const Tt=de.axes[0]??0,ot=((Le=de.buttons[14])==null?void 0:Le.pressed)||Tt<-.65;((et=de.buttons[15])==null?void 0:et.pressed)||Tt>.65?(me(1),M.current=Ue):ot&&(me(-1),M.current=Ue)}U=requestAnimationFrame(ie)}return U=requestAnimationFrame(ie),()=>cancelAnimationFrame(U)},[]);function P(U){const ie=U.currentTarget.getBoundingClientRect(),de=(U.clientX-ie.left)/ie.width,Ue=(U.clientY-ie.top)/ie.height,Le=Ue-.5;w({angle:Math.round(de*360),glareX:Math.round(de*100),glareY:Math.round(Ue*100),rotateX:Number((-Le*10).toFixed(2))})}function $(){w(U=>({...U,glareX:50,glareY:35,rotateX:0}))}function Me(U){w({angle:U,glareX:Math.round(U/360*100),glareY:35,rotateX:0})}const Ee=E.jsxs("nav",{className:"operator-rail",id:o==="operators"?"operators":`${o}-operators`,"aria-label":"Quick operator selection",children:[E.jsxs("div",{className:"operator-rail-header",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Operator select"}),E.jsxs("strong",{children:[ea.length," playable characters"]})]}),E.jsx("span",{children:"Click, arrows, or controller"})]}),E.jsx("div",{className:"operator-rail-list",children:ea.map((U,ie)=>E.jsxs("button",{"aria-current":ie===m?"true":void 0,className:ie===m?"operator-pill active":"operator-pill",onClick:()=>oe(ie),type:"button",children:[E.jsx("span",{className:"operator-pill-flag",children:U.flag}),E.jsxs("span",{className:"operator-pill-copy",children:[E.jsx("strong",{children:U.codename}),E.jsx("small",{children:U.name})]})]},`rail-${U.codename}-${U.name}`))})]});return E.jsxs("main",{className:"app-shell",children:[E.jsxs("header",{className:"game-topbar","aria-label":"AION Prime navigation",children:[E.jsxs("button",{className:"game-brand",onClick:()=>Y("home"),type:"button","aria-label":"AION Prime home",children:[E.jsx("span",{children:"AION"}),E.jsx("strong",{children:"Prime"})]}),E.jsxs("nav",{className:"game-nav","aria-label":"Page sections",children:[E.jsx("button",{"aria-current":o==="home"?"page":void 0,onClick:()=>Y("home"),type:"button",children:"Home"}),E.jsx("button",{"aria-current":o==="operators"?"page":void 0,onClick:()=>Y("operators"),type:"button",children:"Operators"}),E.jsx("button",{"aria-current":o==="enemies"?"page":void 0,onClick:()=>Y("enemies"),type:"button",children:"Enemy Forces"}),E.jsx("button",{"aria-current":o==="simulation"?"page":void 0,onClick:()=>Y("simulation"),type:"button",children:"Simulation"}),E.jsx("button",{"aria-current":o==="systems"?"page":void 0,onClick:()=>Y("systems"),type:"button",children:"Systems"}),E.jsx("button",{"aria-current":o==="combat"?"page":void 0,onClick:()=>Y("combat"),type:"button",children:"Combat Systems"})]})]}),o==="home"&&E.jsxs("section",{className:"game-home",id:"home",style:{"--home-bg":`url(${t1})`},children:[E.jsxs("div",{className:"game-home-copy",children:[E.jsx("p",{className:"eyebrow",children:"AAA tactical AI FPS"}),E.jsx("h1",{children:"AION Prime"}),E.jsx("p",{className:"game-home-subtitle",children:"Lead a global roster of Prime operators into adaptive combat zones where vehicle cover, squad timing, battlefield AI, and high-skill movement decide every fight."}),E.jsxs("div",{className:"hero-cta-row","aria-label":"AION Prime home actions",children:[E.jsx("button",{className:"primary-cta enter-game-cta",onClick:()=>Y("operators"),type:"button",children:"Enter game"}),E.jsx("button",{className:"secondary-cta",onClick:()=>Y("simulation"),type:"button",children:"Preview combat scene"})]}),E.jsxs("div",{className:"home-feature-grid","aria-label":"AION Prime feature pillars",children:[E.jsxs("article",{children:[E.jsx("span",{children:"01"}),E.jsx("strong",{children:"Prime roster"}),E.jsx("p",{children:"21 global operators with role-specific weapons, flags, and readable combat identities."})]}),E.jsxs("article",{children:[E.jsx("span",{children:"02"}),E.jsx("strong",{children:"Vehicle warfare"}),E.jsx("p",{children:"Mounted-gun combat vehicles shape lanes, cover choices, and tactical pressure."})]}),E.jsxs("article",{children:[E.jsx("span",{children:"03"}),E.jsx("strong",{children:"Engineer ready"}),E.jsx("p",{children:"Movement, abilities, networking, animation, and balancing details built for review."})]})]})]}),E.jsxs("div",{className:"game-home-panel","aria-label":"AION Prime launch telemetry",children:[E.jsx("span",{children:"Current operation"}),E.jsx("strong",{children:"Hangar breach"}),E.jsx("p",{children:"Enter the operator page, select a Prime unit, inspect the 360 kit, then move into the live scene."}),E.jsxs("dl",{children:[E.jsxs("div",{children:[E.jsx("dt",{children:"Operators"}),E.jsx("dd",{children:ea.length})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Scene"}),E.jsx("dd",{children:"Live"})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Build"}),E.jsx("dd",{children:"UE5-ready"})]})]})]})]}),o==="operators"&&E.jsxs(E.Fragment,{children:[Ee,E.jsxs("section",{className:"hero",style:{"--hero-bg":`url(${u0})`},children:[E.jsxs("div",{className:"hero-copy",children:[E.jsx("p",{className:"eyebrow",children:"Character overview"}),E.jsxs("div",{className:"hero-title-row",children:[E.jsx("h1",{children:C.name}),E.jsx("span",{children:C.codename})]}),E.jsxs("p",{className:"subtitle",children:[C.flag," ",C.country," origin / ",C.heritage," /"," ",C.role]}),E.jsxs("p",{className:"hero-overview",children:[C.specialization," Built for a modern Unreal Engine 5 multiplayer shooter with readable silhouette, fast combat decisions, and responsive 360 inspection."]}),E.jsxs("div",{className:"featured-prime-card","aria-label":"Selected operator overview",children:[E.jsxs("span",{children:[C.flag," ",C.country]}),E.jsxs("strong",{children:[C.name," / ",C.codename]}),E.jsxs("p",{children:[C.heritage," / ",C.role," / ",C.specialization]})]})]}),E.jsxs("div",{className:"operator-visual","aria-label":`Interactive 3D ${C.codename} character visualization`,onPointerLeave:$,onPointerMove:P,style:O,children:[E.jsxs("div",{className:"turntable-hud",children:[E.jsx("span",{children:"360 turntable"}),E.jsxs("strong",{children:[A.angle," deg"]})]}),E.jsx("div",{className:"weapon-stack","aria-label":`${C.codename} weapon loadout`,children:I.map(([U,ie,de,Ue])=>E.jsxs("article",{className:"weapon-stack-item",children:[E.jsx("div",{className:"weapon-silhouette","aria-hidden":"true",children:E.jsx("span",{})}),E.jsxs("div",{children:[E.jsx("small",{children:ie}),E.jsx("strong",{children:U}),E.jsxs("p",{children:[de," / ",Ue]})]})]},`visual-${U}`))}),E.jsx("div",{className:"soldier-stage",children:E.jsxs("div",{className:"real-character-turntable","aria-label":`Realistic ${C.name} character viewer`,children:[E.jsx("img",{className:"character-view front-view",src:N.front,alt:`${C.name} front view`}),E.jsx("img",{className:"character-view side-view",src:N.side,alt:`${C.name} side view`}),E.jsx("img",{className:"character-view back-view",src:N.back,alt:`${C.name} back view`}),E.jsx("div",{className:"turntable-floor"}),E.jsx("div",{className:"view-marker front-marker",children:"Front"}),E.jsx("div",{className:"view-marker side-marker",children:"Side"}),E.jsx("div",{className:"view-marker back-marker",children:"Back"})]})}),E.jsx("div",{className:"turntable-track","aria-hidden":"true",children:E.jsx("span",{})}),E.jsxs("label",{className:"turntable-control",children:["Rotate ",C.codename,E.jsx("input",{type:"range",min:"0",max:"360",value:A.angle,onChange:U=>Me(Number(U.target.value)),onInput:U=>Me(Number(U.currentTarget.value))})]})]})]}),E.jsxs("section",{className:"metrics-strip","aria-label":"Core balancing metrics",children:[E.jsxs("div",{children:[E.jsx("span",{children:"Health"}),E.jsx("strong",{children:"100"})]}),E.jsxs("div",{children:[E.jsx("span",{children:"Armor"}),E.jsx("strong",{children:l})]}),E.jsxs("div",{children:[E.jsx("span",{children:"Effective HP"}),E.jsx("strong",{children:G})]}),E.jsxs("div",{children:[E.jsx("span",{children:"Avg TTK"}),E.jsxs("strong",{children:[v,"s"]})]})]})]}),o==="enemies"&&E.jsxs(E.Fragment,{children:[E.jsxs("section",{className:"enemy-command-header",id:"enemies",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"AION hostile index"}),E.jsx("h1",{children:"Enemy Forces"})]}),E.jsxs("dl",{className:"enemy-command-stats","aria-label":"Enemy force counts",children:[E.jsxs("div",{children:[E.jsx("dt",{children:"All"}),E.jsx("dd",{children:Ti.length})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Henchmen"}),E.jsx("dd",{children:Ti.filter(U=>U.enemyClass==="Henchman").length})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Drones"}),E.jsx("dd",{children:Ti.filter(U=>U.enemyClass==="Drone").length})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Cyborgs"}),E.jsx("dd",{children:Ti.filter(U=>U.enemyClass==="Cyborg").length})]})]})]}),E.jsxs("section",{className:"enemy-browser","aria-label":"AION Prime enemy force browser",children:[E.jsxs("aside",{className:"enemy-selector",children:[E.jsxs("div",{className:"enemy-selector-heading",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Threat roster"}),E.jsx("h2",{children:"Combat units"})]}),E.jsx("strong",{children:L.length})]}),E.jsx("div",{className:"enemy-filter","aria-label":"Filter enemy units",children:["All","Henchman","Drone","Cyborg"].map(U=>E.jsx("button",{"aria-pressed":x===U,onClick:()=>q(U),type:"button",children:U==="All"?"All units":`${U}s`},U))}),E.jsx("div",{className:"enemy-force-list",children:L.map(U=>E.jsxs("button",{"aria-pressed":D.id===U.id,className:"enemy-force-option",onClick:()=>S(U.id),type:"button",children:[E.jsx("span",{className:"enemy-force-thumb",children:E.jsx("img",{alt:"",src:U.image})}),E.jsxs("span",{className:"enemy-force-option-copy",children:[E.jsx("small",{children:U.designation}),E.jsx("strong",{children:U.name}),E.jsxs("span",{children:[U.enemyClass," / ",U.role]})]}),E.jsx("i",{className:`enemy-level threat-${U.threat.toLowerCase()}`,"aria-label":`${U.threat} threat`})]},U.id))})]}),E.jsxs("article",{className:"enemy-force-viewer","aria-live":"polite",children:[E.jsxs("div",{className:"enemy-force-visual",children:[E.jsx("img",{alt:`${D.name} combat unit`,src:D.image}),E.jsxs("div",{className:"enemy-force-overlay",children:[E.jsx("span",{className:"enemy-class",children:D.enemyClass}),E.jsxs("span",{className:`enemy-threat threat-${D.threat.toLowerCase()}`,children:[D.threat," threat"]})]}),E.jsxs("div",{className:"enemy-force-identity",children:[E.jsx("small",{children:D.designation}),E.jsx("h2",{children:D.name}),E.jsx("strong",{children:D.role})]})]}),E.jsxs("div",{className:"enemy-force-details",children:[E.jsx("p",{children:D.description}),E.jsxs("dl",{children:[E.jsxs("div",{children:[E.jsx("dt",{children:"Armament"}),E.jsx("dd",{children:D.armament})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Behavior"}),E.jsx("dd",{children:D.behavior})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Counterplay"}),E.jsx("dd",{children:D.weakness})]})]})]})]})]})]}),o==="simulation"&&E.jsx(e1,{codename:C.codename,operatorName:C.name,role:C.role,weapons:I,characterArt:N,squad:V}),o==="systems"&&E.jsxs(E.Fragment,{children:[Ee,E.jsxs("section",{className:"two-column",children:[E.jsxs("article",{className:"panel overview-panel",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Character overview"}),E.jsxs("h2",{children:[C.flag," ",C.name,", codename ",C.codename]})]}),E.jsxs("p",{children:[C.name," is a ",C.heritage," ",C.role.toLowerCase()," operator from ",C.flag," ",C.country,". ",C.specialization," The systems profile below updates this operator's movement expectations, bindings, abilities, weapons, and engineering review surface."]}),E.jsx("div",{className:"trait-grid",children:CR(C).map(U=>E.jsx("span",{children:U},U))})]}),E.jsxs("article",{className:"panel tuning-panel",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Live balance sandbox"}),E.jsx("h2",{children:"TTK tuning assumptions"})]}),E.jsxs("label",{children:["Armor value",E.jsx("input",{type:"range",min:"0",max:"100",step:"5",value:l,onChange:U=>u(Number(U.target.value))})]}),E.jsxs("label",{children:["Headshot accuracy",E.jsx("input",{type:"range",min:"0",max:"75",step:"5",value:d,onChange:U=>h(Number(U.target.value))})]}),E.jsxs("p",{children:[I[0][0]," weighted TTK against ",G," HP at ",d,"% headshot rate:"," ",E.jsxs("strong",{children:[v,"s"]})]})]})]}),E.jsxs("section",{className:"section-block",id:"systems",children:[E.jsxs("div",{className:"section-heading",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Core movement systems"}),E.jsx("h2",{children:"Responsiveness first, animation clean second, never animation last"})]}),E.jsxs("p",{className:"section-note",children:["These are shared FPS rules. ",C.codename,"'s unique movement layer is tuned below."]})]}),E.jsx("div",{className:"movement-grid",children:bR.map(([U,ie,de])=>E.jsxs("article",{className:"system-card",children:[E.jsx("span",{children:ie}),E.jsx("h3",{children:U}),E.jsx("p",{children:de})]},U))})]}),E.jsxs("section",{className:"section-block mobility-signature-section",children:[E.jsxs("div",{className:"section-heading",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Character mobility signature"}),E.jsxs("h2",{children:[C.codename," moves differently from the shared baseline"]})]}),E.jsx("p",{className:"section-note",children:"Per-operator tuning adds mastery without breaking the universal controller feel."})]}),E.jsx("div",{className:"mobility-signature-grid",children:Q.map(([U,ie,de])=>E.jsxs("article",{className:"mobility-signature-card",children:[E.jsx("span",{children:ie}),E.jsx("h3",{children:U}),E.jsx("p",{children:de})]},`${C.codename}-${U}`))})]}),E.jsxs("section",{className:"section-block input-section",children:[E.jsxs("div",{className:"section-heading",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Input and abilities"}),E.jsxs("h2",{children:["Explicit action bindings for ",C.codename]})]}),E.jsx("p",{className:"section-note",children:"Shared movement inputs stay universal; abilities change behavior per operator while keeping the same tactical button layout."})]}),E.jsxs("div",{className:"input-layout",children:[E.jsxs("article",{className:"panel ability-bindings-panel",children:[E.jsxs("div",{className:"ability-title",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Selected loadout"}),E.jsx("h3",{children:C.name})]}),E.jsx("strong",{children:C.codename})]}),E.jsx("div",{className:"ability-binding-grid","aria-label":`${C.codename} ability bindings`,children:F.map(U=>E.jsxs("article",{className:"ability-binding-card",children:[E.jsxs("div",{children:[E.jsx("span",{children:U.type}),E.jsx("h3",{children:U.name}),E.jsx("p",{children:U.purpose})]}),E.jsxs("div",{className:"binding-chips","aria-label":`${U.name} controls`,children:[E.jsxs("span",{children:[E.jsx("small",{children:"Keyboard"}),E.jsx("strong",{children:U.keyboard})]}),E.jsxs("span",{children:[E.jsx("small",{children:"Controller"}),E.jsx("strong",{children:U.controller})]}),E.jsxs("span",{children:[E.jsx("small",{children:"Cooldown"}),E.jsx("strong",{children:U.cooldown})]})]})]},`binding-${U.name}`))})]}),E.jsxs("article",{className:"input-map-panel",children:[E.jsxs("div",{className:"input-map-row input-map-header",role:"row",children:[E.jsx("span",{children:"Action"}),E.jsx("span",{children:"Keyboard"}),E.jsx("span",{children:"Controller"}),E.jsx("span",{children:"Engineering behavior"})]}),ER.map(([U,ie,de,Ue])=>E.jsxs("div",{className:"input-map-row",role:"row",children:[E.jsx("span",{children:U}),E.jsx("kbd",{children:ie}),E.jsx("kbd",{children:de}),E.jsx("p",{children:Ue})]},U))]})]})]})]}),o==="combat"&&E.jsxs(E.Fragment,{children:[Ee,E.jsx("section",{className:"section-block combat-page-header",id:"combat",children:E.jsxs("div",{className:"section-heading",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Combat Systems"}),E.jsxs("h2",{children:[C.flag," ",C.codename," combat package"]})]}),E.jsx("p",{className:"section-note",children:"Weapons, active abilities, animation surfaces, feedback rules, networking notes, and team-play balance update from the selected operator."})]})}),E.jsxs("section",{className:"section-block",children:[E.jsxs("div",{className:"section-heading",children:[E.jsx("p",{className:"eyebrow",children:"Combat systems"}),E.jsxs("h2",{children:[C.codename," weapons tuned for ",C.role.toLowerCase()]})]}),E.jsxs("div",{className:"weapon-table",role:"table","aria-label":"Weapon specifications",children:[E.jsxs("div",{className:"weapon-row weapon-header",role:"row",children:[E.jsx("span",{children:"Name"}),E.jsx("span",{children:"Role"}),E.jsx("span",{children:"Damage"}),E.jsx("span",{children:"Fire rate"}),E.jsx("span",{children:"Range"}),E.jsx("span",{children:"Handling"})]}),I.map(U=>E.jsx("div",{className:"weapon-row",role:"row",children:U.map(ie=>E.jsx("span",{children:ie},ie))},U[0]))]})]}),E.jsxs("section",{className:"section-block",children:[E.jsxs("div",{className:"section-heading",children:[E.jsx("p",{className:"eyebrow",children:"Special abilities"}),E.jsxs("h2",{children:[C.codename," ability implementation cards"]})]}),E.jsxs("div",{className:"ability-layout",children:[E.jsx("div",{className:"ability-list",role:"tablist","aria-label":`${C.codename} abilities`,children:F.map(U=>E.jsxs("button",{className:U.name===ce.name?"ability-tab active":"ability-tab",type:"button",onClick:()=>r(U),children:[E.jsx("span",{children:U.type}),U.name]},U.name))}),E.jsxs("article",{className:"panel ability-detail",children:[E.jsxs("div",{className:"ability-title",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:ce.type}),E.jsx("h3",{children:ce.name})]}),E.jsx("strong",{children:ce.cooldown})]}),E.jsxs("dl",{children:[E.jsxs("div",{children:[E.jsx("dt",{children:"Input binding"}),E.jsxs("dd",{children:["Keyboard ",ce.keyboard," / Controller ",ce.controller]})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Gameplay purpose"}),E.jsx("dd",{children:ce.purpose})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Counterplay"}),E.jsx("dd",{children:ce.counterplay})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Visual effects"}),E.jsx("dd",{children:ce.vfx})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Audio feedback"}),E.jsx("dd",{children:ce.audio})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Networking"}),E.jsx("dd",{children:ce.network})]})]})]})]})]}),E.jsxs("section",{className:"two-column",children:[E.jsxs("article",{className:"panel",children:[E.jsx("p",{className:"eyebrow",children:"Animation requirements"}),E.jsx("h2",{children:"State machine surface"}),E.jsx("div",{className:"state-machine",children:AR.map(U=>E.jsx("span",{children:U},U))}),E.jsx("p",{children:"Transition logic prioritizes input response with short blend windows, motion warping for traversal, montage sections for recovery, and additive recoil aligned to weapon camera feedback."})]}),E.jsxs("article",{className:"panel",children:[E.jsx("p",{className:"eyebrow",children:"Combat feel requirements"}),E.jsx("h2",{children:"Feedback stack"}),E.jsxs("ul",{className:"check-list",children:[E.jsx("li",{children:"Distinct armor break, headshot, elimination, and ability-hit confirmations."}),E.jsx("li",{children:"Impulse camera shake capped for target readability and accessibility settings."}),E.jsx("li",{children:"Controller-only rotational aim assist with conservative slowdown windows."}),E.jsx("li",{children:"Layered recoil: camera pitch, weapon bone animation, muzzle climb, and recovery spring."}),E.jsx("li",{children:"Vibration envelopes for auto fire, blocked damage, melee impact, and ultimate activation."})]})]})]}),E.jsxs("section",{className:"section-block engineering-section",children:[E.jsxs("div",{className:"section-heading",children:[E.jsx("p",{className:"eyebrow",children:"Technical gameplay implementation"}),E.jsx("h2",{children:"Lead Gameplay Engineer review"})]}),E.jsx("div",{className:"engineering-grid",children:TR.map(U=>E.jsxs("article",{className:"engineering-card",children:[E.jsx("span",{}),E.jsx("p",{children:U})]},U))})]}),E.jsxs("section",{className:"team-band",children:[E.jsxs("div",{children:[E.jsx("p",{className:"eyebrow",children:"Team play design"}),E.jsx("h2",{children:"Strong pressure, meaningful weaknesses"})]}),E.jsxs("div",{className:"team-grid",children:[E.jsxs("article",{children:[E.jsx("h3",{children:"Strengths"}),E.jsx("p",{children:"Fast entries, aggressive flanks, duel initiation, repositioning, and fight conversion."})]}),E.jsxs("article",{children:[E.jsx("h3",{children:"Weaknesses"}),E.jsx("p",{children:"Limited sustain, exposed recovery after missed breach, weaker at long range, trap-vulnerable."})]}),E.jsxs("article",{children:[E.jsx("h3",{children:"Synergies"}),E.jsx("p",{children:"Pairs with recon, smoke, shield break, suppression, and area-denial teammates."})]}),E.jsxs("article",{children:[E.jsx("h3",{children:"Counter picks"}),E.jsx("p",{children:"Trap specialists, marksmen, anti-mobility kits, stasis fields, and coordinated focus fire."})]})]})]})]})]})}Ry.createRoot(document.getElementById("root")).render(E.jsx(xy.StrictMode,{children:E.jsx(DR,{})}));
