(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ip(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sp={exports:{}},Bo={},op={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es=Symbol.for("react.element"),M_=Symbol.for("react.portal"),L_=Symbol.for("react.fragment"),F_=Symbol.for("react.strict_mode"),j_=Symbol.for("react.profiler"),z_=Symbol.for("react.provider"),U_=Symbol.for("react.context"),W_=Symbol.for("react.forward_ref"),B_=Symbol.for("react.suspense"),H_=Symbol.for("react.memo"),$_=Symbol.for("react.lazy"),Pf=Symbol.iterator;function V_(t){return t===null||typeof t!="object"?null:(t=Pf&&t[Pf]||t["@@iterator"],typeof t=="function"?t:null)}var lp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ap=Object.assign,up={};function Lr(t,e,n){this.props=t,this.context=e,this.refs=up,this.updater=n||lp}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Lr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cp(){}cp.prototype=Lr.prototype;function zu(t,e,n){this.props=t,this.context=e,this.refs=up,this.updater=n||lp}var Uu=zu.prototype=new cp;Uu.constructor=zu;ap(Uu,Lr.prototype);Uu.isPureReactComponent=!0;var Rf=Array.isArray,fp=Object.prototype.hasOwnProperty,Wu={current:null},dp={key:!0,ref:!0,__self:!0,__source:!0};function hp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fp.call(e,r)&&!dp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:es,type:t,key:s,ref:o,props:i,_owner:Wu.current}}function G_(t,e){return{$$typeof:es,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bu(t){return typeof t=="object"&&t!==null&&t.$$typeof===es}function Y_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Af=/\/+/g;function El(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Y_(""+t.key):e.toString(36)}function Ls(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case es:case M_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+El(o,0):r,Rf(i)?(n="",t!=null&&(n=t.replace(Af,"$&/")+"/"),Ls(i,e,n,"",function(u){return u})):i!=null&&(Bu(i)&&(i=G_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Af,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Rf(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+El(s,l);o+=Ls(s,e,n,a,i)}else if(a=V_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+El(s,l++),o+=Ls(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gs(t,e,n){if(t==null)return t;var r=[],i=0;return Ls(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Q_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},Fs={transition:null},K_={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Fs,ReactCurrentOwner:Wu};function pp(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:gs,forEach:function(t,e,n){gs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gs(t,function(){e++}),e},toArray:function(t){return gs(t,function(e){return e})||[]},only:function(t){if(!Bu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=Lr;j.Fragment=L_;j.Profiler=j_;j.PureComponent=zu;j.StrictMode=F_;j.Suspense=B_;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K_;j.act=pp;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ap({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)fp.call(e,a)&&!dp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:es,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:U_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:z_,_context:t},t.Consumer=t};j.createElement=hp;j.createFactory=function(t){var e=hp.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:W_,render:t}};j.isValidElement=Bu;j.lazy=function(t){return{$$typeof:$_,_payload:{_status:-1,_result:t},_init:Q_}};j.memo=function(t,e){return{$$typeof:H_,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=Fs.transition;Fs.transition={};try{t()}finally{Fs.transition=e}};j.unstable_act=pp;j.useCallback=function(t,e){return Pe.current.useCallback(t,e)};j.useContext=function(t){return Pe.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};j.useEffect=function(t,e){return Pe.current.useEffect(t,e)};j.useId=function(){return Pe.current.useId()};j.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return Pe.current.useMemo(t,e)};j.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};j.useRef=function(t){return Pe.current.useRef(t)};j.useState=function(t){return Pe.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return Pe.current.useTransition()};j.version="18.3.1";op.exports=j;var B=op.exports;const mp=ip(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_=B,X_=Symbol.for("react.element"),J_=Symbol.for("react.fragment"),Z_=Object.prototype.hasOwnProperty,ev=q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tv={key:!0,ref:!0,__self:!0,__source:!0};function gp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Z_.call(e,r)&&!tv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:X_,type:t,key:s,ref:o,props:i,_owner:ev.current}}Bo.Fragment=J_;Bo.jsx=gp;Bo.jsxs=gp;sp.exports=Bo;var _=sp.exports,yp={exports:{}},Ge={},_p={exports:{}},vp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,b){var O=k.length;k.push(b);e:for(;0<O;){var oe=O-1>>>1,de=k[oe];if(0<i(de,b))k[oe]=b,k[O]=de,O=oe;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var b=k[0],O=k.pop();if(O!==b){k[0]=O;e:for(var oe=0,de=k.length,ps=de>>>1;oe<ps;){var vn=2*(oe+1)-1,wl=k[vn],wn=vn+1,ms=k[wn];if(0>i(wl,O))wn<de&&0>i(ms,wl)?(k[oe]=ms,k[wn]=O,oe=wn):(k[oe]=wl,k[vn]=O,oe=vn);else if(wn<de&&0>i(ms,O))k[oe]=ms,k[wn]=O,oe=wn;else break e}}return b}function i(k,b){var O=k.sortIndex-b.sortIndex;return O!==0?O:k.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,c=null,d=3,g=!1,y=!1,v=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=k)r(u),b.sortIndex=b.expirationTime,e(a,b);else break;b=n(u)}}function w(k){if(v=!1,m(k),!y)if(n(a)!==null)y=!0,_l(S);else{var b=n(u);b!==null&&vl(w,b.startTime-k)}}function S(k,b){y=!1,v&&(v=!1,p(R),R=-1),g=!0;var O=d;try{for(m(b),c=n(a);c!==null&&(!(c.expirationTime>b)||k&&!tt());){var oe=c.callback;if(typeof oe=="function"){c.callback=null,d=c.priorityLevel;var de=oe(c.expirationTime<=b);b=t.unstable_now(),typeof de=="function"?c.callback=de:c===n(a)&&r(a),m(b)}else r(a);c=n(a)}if(c!==null)var ps=!0;else{var vn=n(u);vn!==null&&vl(w,vn.startTime-b),ps=!1}return ps}finally{c=null,d=O,g=!1}}var P=!1,T=null,R=-1,se=5,z=-1;function tt(){return!(t.unstable_now()-z<se)}function $r(){if(T!==null){var k=t.unstable_now();z=k;var b=!0;try{b=T(!0,k)}finally{b?Vr():(P=!1,T=null)}}else P=!1}var Vr;if(typeof h=="function")Vr=function(){h($r)};else if(typeof MessageChannel<"u"){var Tf=new MessageChannel,D_=Tf.port2;Tf.port1.onmessage=$r,Vr=function(){D_.postMessage(null)}}else Vr=function(){N($r,0)};function _l(k){T=k,P||(P=!0,Vr())}function vl(k,b){R=N(function(){k(t.unstable_now())},b)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,_l(S))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var b=3;break;default:b=d}var O=d;d=b;try{return k()}finally{d=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,b){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var O=d;d=k;try{return b()}finally{d=O}},t.unstable_scheduleCallback=function(k,b,O){var oe=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?oe+O:oe):O=oe,k){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=O+de,k={id:f++,callback:b,priorityLevel:k,startTime:O,expirationTime:de,sortIndex:-1},O>oe?(k.sortIndex=O,e(u,k),n(a)===null&&k===n(u)&&(v?(p(R),R=-1):v=!0,vl(w,O-oe))):(k.sortIndex=de,e(a,k),y||g||(y=!0,_l(S))),k},t.unstable_shouldYield=tt,t.unstable_wrapCallback=function(k){var b=d;return function(){var O=d;d=b;try{return k.apply(this,arguments)}finally{d=O}}}})(vp);_p.exports=vp;var nv=_p.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=B,Ve=nv;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wp=new Set,Ni={};function Gn(t,e){Sr(t,e),Sr(t+"Capture",e)}function Sr(t,e){for(Ni[t]=e,t=0;t<e.length;t++)wp.add(e[t])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ca=Object.prototype.hasOwnProperty,iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bf={},Of={};function sv(t){return ca.call(Of,t)?!0:ca.call(bf,t)?!1:iv.test(t)?Of[t]=!0:(bf[t]=!0,!1)}function ov(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lv(t,e,n,r){if(e===null||typeof e>"u"||ov(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Re(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new Re(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new Re(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new Re(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new Re(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new Re(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new Re(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new Re(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new Re(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new Re(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hu=/[\-:]([a-z])/g;function $u(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hu,$u);Ee[e]=new Re(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hu,$u);Ee[e]=new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hu,$u);Ee[e]=new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new Re(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new Re(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vu(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lv(e,n,i,r)&&(n=null),r||i===null?sv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jt=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ys=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),fa=Symbol.for("react.profiler"),Ep=Symbol.for("react.provider"),Cp=Symbol.for("react.context"),Yu=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),Qu=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),Sp=Symbol.for("react.offscreen"),Df=Symbol.iterator;function Gr(t){return t===null||typeof t!="object"?null:(t=Df&&t[Df]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,Cl;function ii(t){if(Cl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cl=e&&e[1]||""}return`
`+Cl+t}var Sl=!1;function xl(t,e){if(!t||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ii(t):""}function av(t){switch(t.tag){case 5:return ii(t.type);case 16:return ii("Lazy");case 13:return ii("Suspense");case 19:return ii("SuspenseList");case 0:case 2:case 15:return t=xl(t.type,!1),t;case 11:return t=xl(t.type.render,!1),t;case 1:return t=xl(t.type,!0),t;default:return""}}function pa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jn:return"Fragment";case Xn:return"Portal";case fa:return"Profiler";case Gu:return"StrictMode";case da:return"Suspense";case ha:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cp:return(t.displayName||"Context")+".Consumer";case Ep:return(t._context.displayName||"Context")+".Provider";case Yu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qu:return e=t.displayName||null,e!==null?e:pa(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return pa(t(e))}catch{}}return null}function uv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pa(e);case 8:return e===Gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function an(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cv(t){var e=xp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _s(t){t._valueTracker||(t._valueTracker=cv(t))}function kp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ma(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=an(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Np(t,e){e=e.checked,e!=null&&Vu(t,"checked",e,!1)}function ga(t,e){Np(t,e);var n=an(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ya(t,e.type,n):e.hasOwnProperty("defaultValue")&&ya(t,e.type,an(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ya(t,e,n){(e!=="number"||Xs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var si=Array.isArray;function dr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+an(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _a(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ff(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(si(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:an(n)}}function Ip(t,e){var n=an(e.value),r=an(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function va(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vs,Pp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vs=vs||document.createElement("div"),vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ii(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fv=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(t){fv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ci[e]=ci[t]})});function Rp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ci.hasOwnProperty(t)&&ci[t]?(""+e).trim():e+"px"}function Ap(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dv=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(t,e){if(e){if(dv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Ea(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ca=null;function Ku(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sa=null,hr=null,pr=null;function zf(t){if(t=rs(t)){if(typeof Sa!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Yo(e),Sa(t.stateNode,t.type,e))}}function bp(t){hr?pr?pr.push(t):pr=[t]:hr=t}function Op(){if(hr){var t=hr,e=pr;if(pr=hr=null,zf(t),e)for(t=0;t<e.length;t++)zf(e[t])}}function Dp(t,e){return t(e)}function Mp(){}var kl=!1;function Lp(t,e,n){if(kl)return t(e,n);kl=!0;try{return Dp(t,e,n)}finally{kl=!1,(hr!==null||pr!==null)&&(Mp(),Op())}}function Ti(t,e){var n=t.stateNode;if(n===null)return null;var r=Yo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var xa=!1;if(Pt)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){xa=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{xa=!1}function hv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var fi=!1,Js=null,Zs=!1,ka=null,pv={onError:function(t){fi=!0,Js=t}};function mv(t,e,n,r,i,s,o,l,a){fi=!1,Js=null,hv.apply(pv,arguments)}function gv(t,e,n,r,i,s,o,l,a){if(mv.apply(this,arguments),fi){if(fi){var u=Js;fi=!1,Js=null}else throw Error(E(198));Zs||(Zs=!0,ka=u)}}function Yn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uf(t){if(Yn(t)!==t)throw Error(E(188))}function yv(t){var e=t.alternate;if(!e){if(e=Yn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Uf(i),t;if(s===r)return Uf(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function jp(t){return t=yv(t),t!==null?zp(t):null}function zp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zp(t);if(e!==null)return e;t=t.sibling}return null}var Up=Ve.unstable_scheduleCallback,Wf=Ve.unstable_cancelCallback,_v=Ve.unstable_shouldYield,vv=Ve.unstable_requestPaint,le=Ve.unstable_now,wv=Ve.unstable_getCurrentPriorityLevel,qu=Ve.unstable_ImmediatePriority,Wp=Ve.unstable_UserBlockingPriority,eo=Ve.unstable_NormalPriority,Ev=Ve.unstable_LowPriority,Bp=Ve.unstable_IdlePriority,Ho=null,vt=null;function Cv(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Ho,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:kv,Sv=Math.log,xv=Math.LN2;function kv(t){return t>>>=0,t===0?32:31-(Sv(t)/xv|0)|0}var ws=64,Es=4194304;function oi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function to(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=oi(l):(s&=o,s!==0&&(r=oi(s)))}else o=n&~i,o!==0?r=oi(o):s!==0&&(r=oi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ut(e),i=1<<n,r|=t[n],e&=~i;return r}function Nv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ut(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Nv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hp(){var t=ws;return ws<<=1,!(ws&4194240)&&(ws=64),t}function Nl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ts(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ut(e),t[e]=n}function Tv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var H=0;function $p(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vp,Ju,Gp,Yp,Qp,Ia=!1,Cs=[],qt=null,Xt=null,Jt=null,Pi=new Map,Ri=new Map,Vt=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bf(t,e){switch(t){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Pi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(e.pointerId)}}function Qr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rs(e),e!==null&&Ju(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Rv(t,e,n,r,i){switch(e){case"focusin":return qt=Qr(qt,t,e,n,r,i),!0;case"dragenter":return Xt=Qr(Xt,t,e,n,r,i),!0;case"mouseover":return Jt=Qr(Jt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pi.set(s,Qr(Pi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ri.set(s,Qr(Ri.get(s)||null,t,e,n,r,i)),!0}return!1}function Kp(t){var e=Nn(t.target);if(e!==null){var n=Yn(e);if(n!==null){if(e=n.tag,e===13){if(e=Fp(n),e!==null){t.blockedOn=e,Qp(t.priority,function(){Gp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function js(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ta(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ca=r,n.target.dispatchEvent(r),Ca=null}else return e=rs(n),e!==null&&Ju(e),t.blockedOn=n,!1;e.shift()}return!0}function Hf(t,e,n){js(t)&&n.delete(e)}function Av(){Ia=!1,qt!==null&&js(qt)&&(qt=null),Xt!==null&&js(Xt)&&(Xt=null),Jt!==null&&js(Jt)&&(Jt=null),Pi.forEach(Hf),Ri.forEach(Hf)}function Kr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ia||(Ia=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Av)))}function Ai(t){function e(i){return Kr(i,t)}if(0<Cs.length){Kr(Cs[0],t);for(var n=1;n<Cs.length;n++){var r=Cs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qt!==null&&Kr(qt,t),Xt!==null&&Kr(Xt,t),Jt!==null&&Kr(Jt,t),Pi.forEach(e),Ri.forEach(e),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)Kp(n),n.blockedOn===null&&Vt.shift()}var mr=jt.ReactCurrentBatchConfig,no=!0;function bv(t,e,n,r){var i=H,s=mr.transition;mr.transition=null;try{H=1,Zu(t,e,n,r)}finally{H=i,mr.transition=s}}function Ov(t,e,n,r){var i=H,s=mr.transition;mr.transition=null;try{H=4,Zu(t,e,n,r)}finally{H=i,mr.transition=s}}function Zu(t,e,n,r){if(no){var i=Ta(t,e,n,r);if(i===null)Ll(t,e,r,ro,n),Bf(t,r);else if(Rv(i,t,e,n,r))r.stopPropagation();else if(Bf(t,r),e&4&&-1<Pv.indexOf(t)){for(;i!==null;){var s=rs(i);if(s!==null&&Vp(s),s=Ta(t,e,n,r),s===null&&Ll(t,e,r,ro,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ll(t,e,r,null,n)}}var ro=null;function Ta(t,e,n,r){if(ro=null,t=Ku(r),t=Nn(t),t!==null)if(e=Yn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ro=t,null}function qp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wv()){case qu:return 1;case Wp:return 4;case eo:case Ev:return 16;case Bp:return 536870912;default:return 16}default:return 16}}var Yt=null,ec=null,zs=null;function Xp(){if(zs)return zs;var t,e=ec,n=e.length,r,i="value"in Yt?Yt.value:Yt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zs=i.slice(t,1<r?1-r:void 0)}function Us(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ss(){return!0}function $f(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ss:$f,this.isPropagationStopped=$f,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),e}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=Ye(Fr),ns=ne({},Fr,{view:0,detail:0}),Dv=Ye(ns),Il,Tl,qr,$o=ne({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qr&&(qr&&t.type==="mousemove"?(Il=t.screenX-qr.screenX,Tl=t.screenY-qr.screenY):Tl=Il=0,qr=t),Il)},movementY:function(t){return"movementY"in t?t.movementY:Tl}}),Vf=Ye($o),Mv=ne({},$o,{dataTransfer:0}),Lv=Ye(Mv),Fv=ne({},ns,{relatedTarget:0}),Pl=Ye(Fv),jv=ne({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=Ye(jv),Uv=ne({},Fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wv=Ye(Uv),Bv=ne({},Fr,{data:0}),Gf=Ye(Bv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vv[t])?!!e[t]:!1}function nc(){return Gv}var Yv=ne({},ns,{key:function(t){if(t.key){var e=Hv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Us(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$v[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?Us(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Us(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qv=Ye(Yv),Kv=ne({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=Ye(Kv),qv=ne({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),Xv=Ye(qv),Jv=ne({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=Ye(Jv),e0=ne({},$o,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=Ye(e0),n0=[9,13,27,32],rc=Pt&&"CompositionEvent"in window,di=null;Pt&&"documentMode"in document&&(di=document.documentMode);var r0=Pt&&"TextEvent"in window&&!di,Jp=Pt&&(!rc||di&&8<di&&11>=di),Qf=" ",Kf=!1;function Zp(t,e){switch(t){case"keyup":return n0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zn=!1;function i0(t,e){switch(t){case"compositionend":return em(e);case"keypress":return e.which!==32?null:(Kf=!0,Qf);case"textInput":return t=e.data,t===Qf&&Kf?null:t;default:return null}}function s0(t,e){if(Zn)return t==="compositionend"||!rc&&Zp(t,e)?(t=Xp(),zs=ec=Yt=null,Zn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jp&&e.locale!=="ko"?null:e.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!o0[t.type]:e==="textarea"}function tm(t,e,n,r){bp(r),e=io(e,"onChange"),0<e.length&&(n=new tc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var hi=null,bi=null;function l0(t){dm(t,0)}function Vo(t){var e=nr(t);if(kp(e))return t}function a0(t,e){if(t==="change")return e}var nm=!1;if(Pt){var Rl;if(Pt){var Al="oninput"in document;if(!Al){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),Al=typeof Xf.oninput=="function"}Rl=Al}else Rl=!1;nm=Rl&&(!document.documentMode||9<document.documentMode)}function Jf(){hi&&(hi.detachEvent("onpropertychange",rm),bi=hi=null)}function rm(t){if(t.propertyName==="value"&&Vo(bi)){var e=[];tm(e,bi,t,Ku(t)),Lp(l0,e)}}function u0(t,e,n){t==="focusin"?(Jf(),hi=e,bi=n,hi.attachEvent("onpropertychange",rm)):t==="focusout"&&Jf()}function c0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vo(bi)}function f0(t,e){if(t==="click")return Vo(e)}function d0(t,e){if(t==="input"||t==="change")return Vo(e)}function h0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dt=typeof Object.is=="function"?Object.is:h0;function Oi(t,e){if(dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ca.call(e,i)||!dt(t[i],e[i]))return!1}return!0}function Zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ed(t,e){var n=Zf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zf(n)}}function im(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?im(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sm(){for(var t=window,e=Xs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xs(t.document)}return e}function ic(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function p0(t){var e=sm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&im(n.ownerDocument.documentElement,n)){if(r!==null&&ic(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ed(n,s);var o=ed(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var m0=Pt&&"documentMode"in document&&11>=document.documentMode,er=null,Pa=null,pi=null,Ra=!1;function td(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ra||er==null||er!==Xs(r)||(r=er,"selectionStart"in r&&ic(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&Oi(pi,r)||(pi=r,r=io(Pa,"onSelect"),0<r.length&&(e=new tc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=er)))}function xs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var tr={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},bl={},om={};Pt&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Go(t){if(bl[t])return bl[t];if(!tr[t])return t;var e=tr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in om)return bl[t]=e[n];return t}var lm=Go("animationend"),am=Go("animationiteration"),um=Go("animationstart"),cm=Go("transitionend"),fm=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(t,e){fm.set(t,e),Gn(e,[t])}for(var Ol=0;Ol<nd.length;Ol++){var Dl=nd[Ol],g0=Dl.toLowerCase(),y0=Dl[0].toUpperCase()+Dl.slice(1);mn(g0,"on"+y0)}mn(lm,"onAnimationEnd");mn(am,"onAnimationIteration");mn(um,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(cm,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_0=new Set("cancel close invalid load scroll toggle".split(" ").concat(li));function rd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gv(r,e,void 0,t),t.currentTarget=null}function dm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;rd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;rd(i,l,u),s=a}}}if(Zs)throw t=ka,Zs=!1,ka=null,t}function Q(t,e){var n=e[Ma];n===void 0&&(n=e[Ma]=new Set);var r=t+"__bubble";n.has(r)||(hm(e,t,2,!1),n.add(r))}function Ml(t,e,n){var r=0;e&&(r|=4),hm(n,t,r,e)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Di(t){if(!t[ks]){t[ks]=!0,wp.forEach(function(n){n!=="selectionchange"&&(_0.has(n)||Ml(n,!1,t),Ml(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ks]||(e[ks]=!0,Ml("selectionchange",!1,e))}}function hm(t,e,n,r){switch(qp(e)){case 1:var i=bv;break;case 4:i=Ov;break;default:i=Zu}n=i.bind(null,e,n,t),i=void 0,!xa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ll(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Nn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Lp(function(){var u=s,f=Ku(n),c=[];e:{var d=fm.get(t);if(d!==void 0){var g=tc,y=t;switch(t){case"keypress":if(Us(n)===0)break e;case"keydown":case"keyup":g=Qv;break;case"focusin":y="focus",g=Pl;break;case"focusout":y="blur",g=Pl;break;case"beforeblur":case"afterblur":g=Pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Xv;break;case lm:case am:case um:g=zv;break;case cm:g=Zv;break;case"scroll":g=Dv;break;case"wheel":g=t0;break;case"copy":case"cut":case"paste":g=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yf}var v=(e&4)!==0,N=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Ti(h,p),w!=null&&v.push(Mi(h,w,m)))),N)break;h=h.return}0<v.length&&(d=new g(d,y,null,n,f),c.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Ca&&(y=n.relatedTarget||n.fromElement)&&(Nn(y)||y[Rt]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Nn(y):null,y!==null&&(N=Yn(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Vf,w="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=Yf,w="onPointerLeave",p="onPointerEnter",h="pointer"),N=g==null?d:nr(g),m=y==null?d:nr(y),d=new v(w,h+"leave",g,n,f),d.target=N,d.relatedTarget=m,w=null,Nn(f)===u&&(v=new v(p,h+"enter",y,n,f),v.target=m,v.relatedTarget=N,w=v),N=w,g&&y)t:{for(v=g,p=y,h=0,m=v;m;m=Kn(m))h++;for(m=0,w=p;w;w=Kn(w))m++;for(;0<h-m;)v=Kn(v),h--;for(;0<m-h;)p=Kn(p),m--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=Kn(v),p=Kn(p)}v=null}else v=null;g!==null&&id(c,d,g,v,!1),y!==null&&N!==null&&id(c,N,y,v,!0)}}e:{if(d=u?nr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var S=a0;else if(qf(d))if(nm)S=d0;else{S=c0;var P=u0}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=f0);if(S&&(S=S(t,u))){tm(c,S,n,f);break e}P&&P(t,d,u),t==="focusout"&&(P=d._wrapperState)&&P.controlled&&d.type==="number"&&ya(d,"number",d.value)}switch(P=u?nr(u):window,t){case"focusin":(qf(P)||P.contentEditable==="true")&&(er=P,Pa=u,pi=null);break;case"focusout":pi=Pa=er=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,td(c,n,f);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":td(c,n,f)}var T;if(rc)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Zn?Zp(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Jp&&n.locale!=="ko"&&(Zn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Zn&&(T=Xp()):(Yt=f,ec="value"in Yt?Yt.value:Yt.textContent,Zn=!0)),P=io(u,R),0<P.length&&(R=new Gf(R,t,null,n,f),c.push({event:R,listeners:P}),T?R.data=T:(T=em(n),T!==null&&(R.data=T)))),(T=r0?i0(t,n):s0(t,n))&&(u=io(u,"onBeforeInput"),0<u.length&&(f=new Gf("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=T))}dm(c,e)})}function Mi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function io(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ti(t,n),s!=null&&r.unshift(Mi(t,s,i)),s=Ti(t,e),s!=null&&r.push(Mi(t,s,i))),t=t.return}return r}function Kn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function id(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ti(n,s),a!=null&&o.unshift(Mi(n,a,l))):i||(a=Ti(n,s),a!=null&&o.push(Mi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var v0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function sd(t){return(typeof t=="string"?t:""+t).replace(v0,`
`).replace(w0,"")}function Ns(t,e,n){if(e=sd(e),sd(t)!==e&&n)throw Error(E(425))}function so(){}var Aa=null,ba=null;function Oa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Da=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,C0=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(t){return od.resolve(null).then(t).catch(S0)}:Da;function S0(t){setTimeout(function(){throw t})}function Fl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ai(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ai(e)}function Zt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ld(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var jr=Math.random().toString(36).slice(2),gt="__reactFiber$"+jr,Li="__reactProps$"+jr,Rt="__reactContainer$"+jr,Ma="__reactEvents$"+jr,x0="__reactListeners$"+jr,k0="__reactHandles$"+jr;function Nn(t){var e=t[gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rt]||n[gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ld(t);t!==null;){if(n=t[gt])return n;t=ld(t)}return e}t=n,n=t.parentNode}return null}function rs(t){return t=t[gt]||t[Rt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function nr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Yo(t){return t[Li]||null}var La=[],rr=-1;function gn(t){return{current:t}}function q(t){0>rr||(t.current=La[rr],La[rr]=null,rr--)}function Y(t,e){rr++,La[rr]=t.current,t.current=e}var un={},Ne=gn(un),Me=gn(!1),Mn=un;function xr(t,e){var n=t.type.contextTypes;if(!n)return un;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Le(t){return t=t.childContextTypes,t!=null}function oo(){q(Me),q(Ne)}function ad(t,e,n){if(Ne.current!==un)throw Error(E(168));Y(Ne,e),Y(Me,n)}function pm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,uv(t)||"Unknown",i));return ne({},n,r)}function lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||un,Mn=Ne.current,Y(Ne,t),Y(Me,Me.current),!0}function ud(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=pm(t,e,Mn),r.__reactInternalMemoizedMergedChildContext=t,q(Me),q(Ne),Y(Ne,t)):q(Me),Y(Me,n)}var St=null,Qo=!1,jl=!1;function mm(t){St===null?St=[t]:St.push(t)}function N0(t){Qo=!0,mm(t)}function yn(){if(!jl&&St!==null){jl=!0;var t=0,e=H;try{var n=St;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}St=null,Qo=!1}catch(i){throw St!==null&&(St=St.slice(t+1)),Up(qu,yn),i}finally{H=e,jl=!1}}return null}var ir=[],sr=0,ao=null,uo=0,Ke=[],qe=0,Ln=null,xt=1,kt="";function En(t,e){ir[sr++]=uo,ir[sr++]=ao,ao=t,uo=e}function gm(t,e,n){Ke[qe++]=xt,Ke[qe++]=kt,Ke[qe++]=Ln,Ln=t;var r=xt;t=kt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var s=32-ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xt=1<<32-ut(e)+i|n<<i|r,kt=s+t}else xt=1<<s|n<<i|r,kt=t}function sc(t){t.return!==null&&(En(t,1),gm(t,1,0))}function oc(t){for(;t===ao;)ao=ir[--sr],ir[sr]=null,uo=ir[--sr],ir[sr]=null;for(;t===Ln;)Ln=Ke[--qe],Ke[qe]=null,kt=Ke[--qe],Ke[qe]=null,xt=Ke[--qe],Ke[qe]=null}var Be=null,We=null,J=!1,st=null;function ym(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,We=Zt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ln!==null?{id:xt,overflow:kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,We=null,!0):!1;default:return!1}}function Fa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ja(t){if(J){var e=We;if(e){var n=e;if(!cd(t,e)){if(Fa(t))throw Error(E(418));e=Zt(n.nextSibling);var r=Be;e&&cd(t,e)?ym(r,n):(t.flags=t.flags&-4097|2,J=!1,Be=t)}}else{if(Fa(t))throw Error(E(418));t.flags=t.flags&-4097|2,J=!1,Be=t}}}function fd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function Is(t){if(t!==Be)return!1;if(!J)return fd(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Oa(t.type,t.memoizedProps)),e&&(e=We)){if(Fa(t))throw _m(),Error(E(418));for(;e;)ym(t,e),e=Zt(e.nextSibling)}if(fd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=Zt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=Be?Zt(t.stateNode.nextSibling):null;return!0}function _m(){for(var t=We;t;)t=Zt(t.nextSibling)}function kr(){We=Be=null,J=!1}function lc(t){st===null?st=[t]:st.push(t)}var I0=jt.ReactCurrentBatchConfig;function Xr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Ts(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dd(t){var e=t._init;return e(t._payload)}function vm(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=rn(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,h,m,w){return h===null||h.tag!==6?(h=Vl(m,p.mode,w),h.return=p,h):(h=i(h,m),h.return=p,h)}function a(p,h,m,w){var S=m.type;return S===Jn?f(p,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ht&&dd(S)===h.type)?(w=i(h,m.props),w.ref=Xr(p,h,m),w.return=p,w):(w=Ys(m.type,m.key,m.props,null,p.mode,w),w.ref=Xr(p,h,m),w.return=p,w)}function u(p,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Gl(m,p.mode,w),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function f(p,h,m,w,S){return h===null||h.tag!==7?(h=bn(m,p.mode,w,S),h.return=p,h):(h=i(h,m),h.return=p,h)}function c(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Vl(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ys:return m=Ys(h.type,h.key,h.props,null,p.mode,m),m.ref=Xr(p,null,h),m.return=p,m;case Xn:return h=Gl(h,p.mode,m),h.return=p,h;case Ht:var w=h._init;return c(p,w(h._payload),m)}if(si(h)||Gr(h))return h=bn(h,p.mode,m,null),h.return=p,h;Ts(p,h)}return null}function d(p,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ys:return m.key===S?a(p,h,m,w):null;case Xn:return m.key===S?u(p,h,m,w):null;case Ht:return S=m._init,d(p,h,S(m._payload),w)}if(si(m)||Gr(m))return S!==null?null:f(p,h,m,w,null);Ts(p,m)}return null}function g(p,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,l(h,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ys:return p=p.get(w.key===null?m:w.key)||null,a(h,p,w,S);case Xn:return p=p.get(w.key===null?m:w.key)||null,u(h,p,w,S);case Ht:var P=w._init;return g(p,h,m,P(w._payload),S)}if(si(w)||Gr(w))return p=p.get(m)||null,f(h,p,w,S,null);Ts(h,w)}return null}function y(p,h,m,w){for(var S=null,P=null,T=h,R=h=0,se=null;T!==null&&R<m.length;R++){T.index>R?(se=T,T=null):se=T.sibling;var z=d(p,T,m[R],w);if(z===null){T===null&&(T=se);break}t&&T&&z.alternate===null&&e(p,T),h=s(z,h,R),P===null?S=z:P.sibling=z,P=z,T=se}if(R===m.length)return n(p,T),J&&En(p,R),S;if(T===null){for(;R<m.length;R++)T=c(p,m[R],w),T!==null&&(h=s(T,h,R),P===null?S=T:P.sibling=T,P=T);return J&&En(p,R),S}for(T=r(p,T);R<m.length;R++)se=g(T,p,R,m[R],w),se!==null&&(t&&se.alternate!==null&&T.delete(se.key===null?R:se.key),h=s(se,h,R),P===null?S=se:P.sibling=se,P=se);return t&&T.forEach(function(tt){return e(p,tt)}),J&&En(p,R),S}function v(p,h,m,w){var S=Gr(m);if(typeof S!="function")throw Error(E(150));if(m=S.call(m),m==null)throw Error(E(151));for(var P=S=null,T=h,R=h=0,se=null,z=m.next();T!==null&&!z.done;R++,z=m.next()){T.index>R?(se=T,T=null):se=T.sibling;var tt=d(p,T,z.value,w);if(tt===null){T===null&&(T=se);break}t&&T&&tt.alternate===null&&e(p,T),h=s(tt,h,R),P===null?S=tt:P.sibling=tt,P=tt,T=se}if(z.done)return n(p,T),J&&En(p,R),S;if(T===null){for(;!z.done;R++,z=m.next())z=c(p,z.value,w),z!==null&&(h=s(z,h,R),P===null?S=z:P.sibling=z,P=z);return J&&En(p,R),S}for(T=r(p,T);!z.done;R++,z=m.next())z=g(T,p,R,z.value,w),z!==null&&(t&&z.alternate!==null&&T.delete(z.key===null?R:z.key),h=s(z,h,R),P===null?S=z:P.sibling=z,P=z);return t&&T.forEach(function($r){return e(p,$r)}),J&&En(p,R),S}function N(p,h,m,w){if(typeof m=="object"&&m!==null&&m.type===Jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ys:e:{for(var S=m.key,P=h;P!==null;){if(P.key===S){if(S=m.type,S===Jn){if(P.tag===7){n(p,P.sibling),h=i(P,m.props.children),h.return=p,p=h;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ht&&dd(S)===P.type){n(p,P.sibling),h=i(P,m.props),h.ref=Xr(p,P,m),h.return=p,p=h;break e}n(p,P);break}else e(p,P);P=P.sibling}m.type===Jn?(h=bn(m.props.children,p.mode,w,m.key),h.return=p,p=h):(w=Ys(m.type,m.key,m.props,null,p.mode,w),w.ref=Xr(p,h,m),w.return=p,p=w)}return o(p);case Xn:e:{for(P=m.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Gl(m,p.mode,w),h.return=p,p=h}return o(p);case Ht:return P=m._init,N(p,h,P(m._payload),w)}if(si(m))return y(p,h,m,w);if(Gr(m))return v(p,h,m,w);Ts(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Vl(m,p.mode,w),h.return=p,p=h),o(p)):n(p,h)}return N}var Nr=vm(!0),wm=vm(!1),co=gn(null),fo=null,or=null,ac=null;function uc(){ac=or=fo=null}function cc(t){var e=co.current;q(co),t._currentValue=e}function za(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gr(t,e){fo=t,ac=or=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(be=!0),t.firstContext=null)}function Ze(t){var e=t._currentValue;if(ac!==t)if(t={context:t,memoizedValue:e,next:null},or===null){if(fo===null)throw Error(E(308));or=t,fo.dependencies={lanes:0,firstContext:t}}else or=or.next=t;return e}var In=null;function fc(t){In===null?In=[t]:In.push(t)}function Em(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fc(e)):(n.next=i.next,i.next=n),e.interleaved=n,At(t,r)}function At(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $t=!1;function dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function It(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function en(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,At(t,n)}return i=r.interleaved,i===null?(e.next=e,fc(r)):(e.next=i.next,i.next=e),r.interleaved=e,At(t,n)}function Ws(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xu(t,n)}}function hd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ho(t,e,n,r){var i=t.updateQueue;$t=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,f=u=a=null,l=s;do{var d=l.lane,g=l.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,v=l;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){c=y.call(g,c,d);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,c,d):y,d==null)break e;c=ne({},c,d);break e;case 2:$t=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else g={eventTime:g,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=g,a=c):f=f.next=g,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jn|=o,t.lanes=o,t.memoizedState=c}}function pd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var is={},wt=gn(is),Fi=gn(is),ji=gn(is);function Tn(t){if(t===is)throw Error(E(174));return t}function hc(t,e){switch(Y(ji,e),Y(Fi,t),Y(wt,is),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:va(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=va(e,t)}q(wt),Y(wt,e)}function Ir(){q(wt),q(Fi),q(ji)}function Sm(t){Tn(ji.current);var e=Tn(wt.current),n=va(e,t.type);e!==n&&(Y(Fi,t),Y(wt,n))}function pc(t){Fi.current===t&&(q(wt),q(Fi))}var ee=gn(0);function po(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zl=[];function mc(){for(var t=0;t<zl.length;t++)zl[t]._workInProgressVersionPrimary=null;zl.length=0}var Bs=jt.ReactCurrentDispatcher,Ul=jt.ReactCurrentBatchConfig,Fn=0,te=null,ue=null,pe=null,mo=!1,mi=!1,zi=0,T0=0;function Ce(){throw Error(E(321))}function gc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dt(t[n],e[n]))return!1;return!0}function yc(t,e,n,r,i,s){if(Fn=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bs.current=t===null||t.memoizedState===null?b0:O0,t=n(r,i),mi){s=0;do{if(mi=!1,zi=0,25<=s)throw Error(E(301));s+=1,pe=ue=null,e.updateQueue=null,Bs.current=D0,t=n(r,i)}while(mi)}if(Bs.current=go,e=ue!==null&&ue.next!==null,Fn=0,pe=ue=te=null,mo=!1,e)throw Error(E(300));return t}function _c(){var t=zi!==0;return zi=0,t}function pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?te.memoizedState=pe=t:pe=pe.next=t,pe}function et(){if(ue===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=ue.next;var e=pe===null?te.memoizedState:pe.next;if(e!==null)pe=e,ue=t;else{if(t===null)throw Error(E(310));ue=t,t={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?te.memoizedState=pe=t:pe=pe.next=t}return pe}function Ui(t,e){return typeof e=="function"?e(t):e}function Wl(t){var e=et(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var f=u.lane;if((Fn&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,te.lanes|=f,jn|=f}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,dt(r,e.memoizedState)||(be=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,jn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bl(t){var e=et(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dt(s,e.memoizedState)||(be=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function xm(){}function km(t,e){var n=te,r=et(),i=e(),s=!dt(r.memoizedState,i);if(s&&(r.memoizedState=i,be=!0),r=r.queue,vc(Tm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Wi(9,Im.bind(null,n,r,i,e),void 0,null),ye===null)throw Error(E(349));Fn&30||Nm(n,e,i)}return i}function Nm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Im(t,e,n,r){e.value=n,e.getSnapshot=r,Pm(e)&&Rm(t)}function Tm(t,e,n){return n(function(){Pm(e)&&Rm(t)})}function Pm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dt(t,n)}catch{return!0}}function Rm(t){var e=At(t,1);e!==null&&ct(e,t,1,-1)}function md(t){var e=pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:t},e.queue=t,t=t.dispatch=A0.bind(null,te,t),[e.memoizedState,t]}function Wi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Am(){return et().memoizedState}function Hs(t,e,n,r){var i=pt();te.flags|=t,i.memoizedState=Wi(1|e,n,void 0,r===void 0?null:r)}function Ko(t,e,n,r){var i=et();r=r===void 0?null:r;var s=void 0;if(ue!==null){var o=ue.memoizedState;if(s=o.destroy,r!==null&&gc(r,o.deps)){i.memoizedState=Wi(e,n,s,r);return}}te.flags|=t,i.memoizedState=Wi(1|e,n,s,r)}function gd(t,e){return Hs(8390656,8,t,e)}function vc(t,e){return Ko(2048,8,t,e)}function bm(t,e){return Ko(4,2,t,e)}function Om(t,e){return Ko(4,4,t,e)}function Dm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mm(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4,4,Dm.bind(null,e,t),n)}function wc(){}function Lm(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fm(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jm(t,e,n){return Fn&21?(dt(n,e)||(n=Hp(),te.lanes|=n,jn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,be=!0),t.memoizedState=n)}function P0(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=Ul.transition;Ul.transition={};try{t(!1),e()}finally{H=n,Ul.transition=r}}function zm(){return et().memoizedState}function R0(t,e,n){var r=nn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Um(t))Wm(e,n);else if(n=Em(t,e,n,r),n!==null){var i=Te();ct(n,t,r,i),Bm(n,e,r)}}function A0(t,e,n){var r=nn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Um(t))Wm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dt(l,o)){var a=e.interleaved;a===null?(i.next=i,fc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Em(t,e,i,r),n!==null&&(i=Te(),ct(n,t,r,i),Bm(n,e,r))}}function Um(t){var e=t.alternate;return t===te||e!==null&&e===te}function Wm(t,e){mi=mo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Bm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xu(t,n)}}var go={readContext:Ze,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},b0={readContext:Ze,useCallback:function(t,e){return pt().memoizedState=[t,e===void 0?null:e],t},useContext:Ze,useEffect:gd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hs(4194308,4,Dm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hs(4,2,t,e)},useMemo:function(t,e){var n=pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=R0.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=pt();return t={current:t},e.memoizedState=t},useState:md,useDebugValue:wc,useDeferredValue:function(t){return pt().memoizedState=t},useTransition:function(){var t=md(!1),e=t[0];return t=P0.bind(null,t[1]),pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=pt();if(J){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ye===null)throw Error(E(349));Fn&30||Nm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,gd(Tm.bind(null,r,s,t),[t]),r.flags|=2048,Wi(9,Im.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pt(),e=ye.identifierPrefix;if(J){var n=kt,r=xt;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=T0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},O0={readContext:Ze,useCallback:Lm,useContext:Ze,useEffect:vc,useImperativeHandle:Mm,useInsertionEffect:bm,useLayoutEffect:Om,useMemo:Fm,useReducer:Wl,useRef:Am,useState:function(){return Wl(Ui)},useDebugValue:wc,useDeferredValue:function(t){var e=et();return jm(e,ue.memoizedState,t)},useTransition:function(){var t=Wl(Ui)[0],e=et().memoizedState;return[t,e]},useMutableSource:xm,useSyncExternalStore:km,useId:zm,unstable_isNewReconciler:!1},D0={readContext:Ze,useCallback:Lm,useContext:Ze,useEffect:vc,useImperativeHandle:Mm,useInsertionEffect:bm,useLayoutEffect:Om,useMemo:Fm,useReducer:Bl,useRef:Am,useState:function(){return Bl(Ui)},useDebugValue:wc,useDeferredValue:function(t){var e=et();return ue===null?e.memoizedState=t:jm(e,ue.memoizedState,t)},useTransition:function(){var t=Bl(Ui)[0],e=et().memoizedState;return[t,e]},useMutableSource:xm,useSyncExternalStore:km,useId:zm,unstable_isNewReconciler:!1};function rt(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ua(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qo={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Te(),i=nn(t),s=It(r,i);s.payload=e,n!=null&&(s.callback=n),e=en(t,s,i),e!==null&&(ct(e,t,i,r),Ws(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Te(),i=nn(t),s=It(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=en(t,s,i),e!==null&&(ct(e,t,i,r),Ws(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Te(),r=nn(t),i=It(n,r);i.tag=2,e!=null&&(i.callback=e),e=en(t,i,r),e!==null&&(ct(e,t,r,n),Ws(e,t,r))}};function yd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,s):!0}function Hm(t,e,n){var r=!1,i=un,s=e.contextType;return typeof s=="object"&&s!==null?s=Ze(s):(i=Le(e)?Mn:Ne.current,r=e.contextTypes,s=(r=r!=null)?xr(t,i):un),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _d(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qo.enqueueReplaceState(e,e.state,null)}function Wa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},dc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ze(s):(s=Le(e)?Mn:Ne.current,i.context=xr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ua(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&qo.enqueueReplaceState(i,i.state,null),ho(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Tr(t,e){try{var n="",r=e;do n+=av(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ba(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var M0=typeof WeakMap=="function"?WeakMap:Map;function $m(t,e,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_o||(_o=!0,Ja=r),Ba(t,e)},n}function Vm(t,e,n){n=It(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ba(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ba(t,e),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new M0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=K0.bind(null,t,e,n),e.then(t,t))}function wd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ed(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=It(-1,1),e.tag=2,en(n,e,1))),n.lanes|=1),t)}var L0=jt.ReactCurrentOwner,be=!1;function Ie(t,e,n,r){e.child=t===null?wm(e,null,n,r):Nr(e,t.child,n,r)}function Cd(t,e,n,r,i){n=n.render;var s=e.ref;return gr(e,i),r=yc(t,e,n,r,s,i),n=_c(),t!==null&&!be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(J&&n&&sc(e),e.flags|=1,Ie(t,e,r,i),e.child)}function Sd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Tc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gm(t,e,s,r,i)):(t=Ys(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(o,r)&&t.ref===e.ref)return bt(t,e,i)}return e.flags|=1,t=rn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Gm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oi(s,r)&&t.ref===e.ref)if(be=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(be=!0);else return e.lanes=t.lanes,bt(t,e,i)}return Ha(t,e,n,r,i)}function Ym(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(ar,Ue),Ue|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(ar,Ue),Ue|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(ar,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(ar,Ue),Ue|=r;return Ie(t,e,i,n),e.child}function Qm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ha(t,e,n,r,i){var s=Le(n)?Mn:Ne.current;return s=xr(e,s),gr(e,i),n=yc(t,e,n,r,s,i),r=_c(),t!==null&&!be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(J&&r&&sc(e),e.flags|=1,Ie(t,e,n,i),e.child)}function xd(t,e,n,r,i){if(Le(n)){var s=!0;lo(e)}else s=!1;if(gr(e,i),e.stateNode===null)$s(t,e),Hm(e,n,r),Wa(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Le(n)?Mn:Ne.current,u=xr(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&_d(e,o,r,u),$t=!1;var d=e.memoizedState;o.state=d,ho(e,r,o,i),a=e.memoizedState,l!==r||d!==a||Me.current||$t?(typeof f=="function"&&(Ua(e,n,f,r),a=e.memoizedState),(l=$t||yd(e,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Cm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:rt(e.type,l),o.props=u,c=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ze(a):(a=Le(n)?Mn:Ne.current,a=xr(e,a));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&_d(e,o,r,a),$t=!1,d=e.memoizedState,o.state=d,ho(e,r,o,i);var y=e.memoizedState;l!==c||d!==y||Me.current||$t?(typeof g=="function"&&(Ua(e,n,g,r),y=e.memoizedState),(u=$t||yd(e,n,u,r,d,y,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return $a(t,e,n,r,s,i)}function $a(t,e,n,r,i,s){Qm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ud(e,n,!1),bt(t,e,s);r=e.stateNode,L0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Nr(e,t.child,null,s),e.child=Nr(e,null,l,s)):Ie(t,e,l,s),e.memoizedState=r.state,i&&ud(e,n,!0),e.child}function Km(t){var e=t.stateNode;e.pendingContext?ad(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ad(t,e.context,!1),hc(t,e.containerInfo)}function kd(t,e,n,r,i){return kr(),lc(i),e.flags|=256,Ie(t,e,n,r),e.child}var Va={dehydrated:null,treeContext:null,retryLane:0};function Ga(t){return{baseLanes:t,cachePool:null,transitions:null}}function qm(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(ee,i&1),t===null)return ja(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zo(o,r,0,null),t=bn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ga(n),e.memoizedState=Va,t):Ec(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return F0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=rn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=rn(l,s):(s=bn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ga(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Va,r}return s=t.child,t=s.sibling,r=rn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ec(t,e){return e=Zo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ps(t,e,n,r){return r!==null&&lc(r),Nr(e,t.child,null,n),t=Ec(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function F0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hl(Error(E(422))),Ps(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zo({mode:"visible",children:r.children},i,0,null),s=bn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Nr(e,t.child,null,o),e.child.memoizedState=Ga(o),e.memoizedState=Va,s);if(!(e.mode&1))return Ps(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Hl(s,r,void 0),Ps(t,e,o,r)}if(l=(o&t.childLanes)!==0,be||l){if(r=ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,At(t,i),ct(r,t,i,-1))}return Ic(),r=Hl(Error(E(421))),Ps(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=q0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=Zt(i.nextSibling),Be=e,J=!0,st=null,t!==null&&(Ke[qe++]=xt,Ke[qe++]=kt,Ke[qe++]=Ln,xt=t.id,kt=t.overflow,Ln=e),e=Ec(e,r.children),e.flags|=4096,e)}function Nd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),za(t.return,e,n)}function $l(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Xm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ie(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nd(t,n,e);else if(t.tag===19)Nd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&po(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$l(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&po(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$l(e,!0,n,null,s);break;case"together":$l(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $s(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function j0(t,e,n){switch(e.tag){case 3:Km(e),kr();break;case 5:Sm(e);break;case 1:Le(e.type)&&lo(e);break;case 4:hc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(co,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?qm(t,e,n):(Y(ee,ee.current&1),t=bt(t,e,n),t!==null?t.sibling:null);Y(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Xm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,Ym(t,e,n)}return bt(t,e,n)}var Jm,Ya,Zm,eg;Jm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};Zm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tn(wt.current);var s=null;switch(n){case"input":i=ma(t,i),r=ma(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=_a(t,i),r=_a(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=so)}wa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ni.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ni.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};eg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Jr(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Se(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function z0(t,e,n){var r=e.pendingProps;switch(oc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(e),null;case 1:return Le(e.type)&&oo(),Se(e),null;case 3:return r=e.stateNode,Ir(),q(Me),q(Ne),mc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Is(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,st!==null&&(tu(st),st=null))),Ya(t,e),Se(e),null;case 5:pc(e);var i=Tn(ji.current);if(n=e.type,t!==null&&e.stateNode!=null)Zm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Se(e),null}if(t=Tn(wt.current),Is(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gt]=e,r[Li]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<li.length;i++)Q(li[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Mf(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":Ff(r,s),Q("invalid",r)}wa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ns(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ns(r.textContent,l,t),i=["children",""+l]):Ni.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":_s(r),Lf(r,s,!0);break;case"textarea":_s(r),jf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=so)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gt]=e,t[Li]=r,Jm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ea(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<li.length;i++)Q(li[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":Mf(t,r),i=ma(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Q("invalid",t);break;case"textarea":Ff(t,r),i=_a(t,r),Q("invalid",t);break;default:i=r}wa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Ap(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Pp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ii(t,a):typeof a=="number"&&Ii(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ni.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&Vu(t,s,a,o))}switch(n){case"input":_s(t),Lf(t,r,!1);break;case"textarea":_s(t),jf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+an(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?dr(t,!!r.multiple,s,!1):r.defaultValue!=null&&dr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=so)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Se(e),null;case 6:if(t&&e.stateNode!=null)eg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Tn(ji.current),Tn(wt.current),Is(e)){if(r=e.stateNode,n=e.memoizedProps,r[gt]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:Ns(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ns(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=e,e.stateNode=r}return Se(e),null;case 13:if(q(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&We!==null&&e.mode&1&&!(e.flags&128))_m(),kr(),e.flags|=98560,s=!1;else if(s=Is(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[gt]=e}else kr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Se(e),s=!1}else st!==null&&(tu(st),st=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?fe===0&&(fe=3):Ic())),e.updateQueue!==null&&(e.flags|=4),Se(e),null);case 4:return Ir(),Ya(t,e),t===null&&Di(e.stateNode.containerInfo),Se(e),null;case 10:return cc(e.type._context),Se(e),null;case 17:return Le(e.type)&&oo(),Se(e),null;case 19:if(q(ee),s=e.memoizedState,s===null)return Se(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Jr(s,!1);else{if(fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=po(t),o!==null){for(e.flags|=128,Jr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&le()>Pr&&(e.flags|=128,r=!0,Jr(s,!1),e.lanes=4194304)}else{if(!r)if(t=po(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Se(e),null}else 2*le()-s.renderingStartTime>Pr&&n!==1073741824&&(e.flags|=128,r=!0,Jr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=le(),e.sibling=null,n=ee.current,Y(ee,r?n&1|2:n&1),e):(Se(e),null);case 22:case 23:return Nc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ue&1073741824&&(Se(e),e.subtreeFlags&6&&(e.flags|=8192)):Se(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function U0(t,e){switch(oc(e),e.tag){case 1:return Le(e.type)&&oo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ir(),q(Me),q(Ne),mc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pc(e),null;case 13:if(q(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));kr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return q(ee),null;case 4:return Ir(),null;case 10:return cc(e.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var Rs=!1,xe=!1,W0=typeof WeakSet=="function"?WeakSet:Set,x=null;function lr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function Qa(t,e,n){try{n()}catch(r){re(t,e,r)}}var Id=!1;function B0(t,e){if(Aa=no,t=sm(),ic(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,c=t,d=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)d=c,c=g;for(;;){if(c===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++f===r&&(a=o),(g=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ba={focusedElem:t,selectionRange:n},no=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,N=y.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:rt(e.type,v),N);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){re(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return y=Id,Id=!1,y}function gi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qa(e,n,s)}i=i.next}while(i!==r)}}function Xo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ka(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tg(t){var e=t.alternate;e!==null&&(t.alternate=null,tg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gt],delete e[Li],delete e[Ma],delete e[x0],delete e[k0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ng(t){return t.tag===5||t.tag===3||t.tag===4}function Td(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=so));else if(r!==4&&(t=t.child,t!==null))for(qa(t,e,n),t=t.sibling;t!==null;)qa(t,e,n),t=t.sibling}function Xa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xa(t,e,n),t=t.sibling;t!==null;)Xa(t,e,n),t=t.sibling}var _e=null,it=!1;function Wt(t,e,n){for(n=n.child;n!==null;)rg(t,e,n),n=n.sibling}function rg(t,e,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:xe||lr(n,e);case 6:var r=_e,i=it;_e=null,Wt(t,e,n),_e=r,it=i,_e!==null&&(it?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(it?(t=_e,n=n.stateNode,t.nodeType===8?Fl(t.parentNode,n):t.nodeType===1&&Fl(t,n),Ai(t)):Fl(_e,n.stateNode));break;case 4:r=_e,i=it,_e=n.stateNode.containerInfo,it=!0,Wt(t,e,n),_e=r,it=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qa(n,e,o),i=i.next}while(i!==r)}Wt(t,e,n);break;case 1:if(!xe&&(lr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,e,l)}Wt(t,e,n);break;case 21:Wt(t,e,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Wt(t,e,n),xe=r):Wt(t,e,n);break;default:Wt(t,e,n)}}function Pd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new W0),e.forEach(function(r){var i=X0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,it=!1;break e;case 3:_e=l.stateNode.containerInfo,it=!0;break e;case 4:_e=l.stateNode.containerInfo,it=!0;break e}l=l.return}if(_e===null)throw Error(E(160));rg(s,o,i),_e=null,it=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ig(e,t),e=e.sibling}function ig(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(nt(e,t),ht(t),r&4){try{gi(3,t,t.return),Xo(3,t)}catch(v){re(t,t.return,v)}try{gi(5,t,t.return)}catch(v){re(t,t.return,v)}}break;case 1:nt(e,t),ht(t),r&512&&n!==null&&lr(n,n.return);break;case 5:if(nt(e,t),ht(t),r&512&&n!==null&&lr(n,n.return),t.flags&32){var i=t.stateNode;try{Ii(i,"")}catch(v){re(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Np(i,s),Ea(l,o);var u=Ea(l,s);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?Ap(i,c):f==="dangerouslySetInnerHTML"?Pp(i,c):f==="children"?Ii(i,c):Vu(i,f,c,u)}switch(l){case"input":ga(i,s);break;case"textarea":Ip(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?dr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?dr(i,!!s.multiple,s.defaultValue,!0):dr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Li]=s}catch(v){re(t,t.return,v)}}break;case 6:if(nt(e,t),ht(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){re(t,t.return,v)}}break;case 3:if(nt(e,t),ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ai(e.containerInfo)}catch(v){re(t,t.return,v)}break;case 4:nt(e,t),ht(t);break;case 13:nt(e,t),ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xc=le())),r&4&&Pd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(xe=(u=xe)||f,nt(e,t),xe=u):nt(e,t),ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(x=t,f=t.child;f!==null;){for(c=x=f;x!==null;){switch(d=x,g=d.child,d.tag){case 0:case 11:case 14:case 15:gi(4,d,d.return);break;case 1:lr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){re(r,n,v)}}break;case 5:lr(d,d.return);break;case 22:if(d.memoizedState!==null){Ad(c);continue}}g!==null?(g.return=d,x=g):Ad(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Rp("display",o))}catch(v){re(t,t.return,v)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){re(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:nt(e,t),ht(t),r&4&&Pd(t);break;case 21:break;default:nt(e,t),ht(t)}}function ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ng(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ii(i,""),r.flags&=-33);var s=Td(t);Xa(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Td(t);qa(t,l,o);break;default:throw Error(E(161))}}catch(a){re(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function H0(t,e,n){x=t,sg(t)}function sg(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Rs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||xe;l=Rs;var u=xe;if(Rs=o,(xe=a)&&!u)for(x=i;x!==null;)o=x,a=o.child,o.tag===22&&o.memoizedState!==null?bd(i):a!==null?(a.return=o,x=a):bd(i);for(;s!==null;)x=s,sg(s),s=s.sibling;x=i,Rs=l,xe=u}Rd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):Rd(t)}}function Rd(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xe||Xo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Ai(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}xe||e.flags&512&&Ka(e)}catch(d){re(e,e.return,d)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function Ad(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function bd(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xo(4,e)}catch(a){re(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){re(e,i,a)}}var s=e.return;try{Ka(e)}catch(a){re(e,s,a)}break;case 5:var o=e.return;try{Ka(e)}catch(a){re(e,o,a)}}}catch(a){re(e,e.return,a)}if(e===t){x=null;break}var l=e.sibling;if(l!==null){l.return=e.return,x=l;break}x=e.return}}var $0=Math.ceil,yo=jt.ReactCurrentDispatcher,Cc=jt.ReactCurrentOwner,Je=jt.ReactCurrentBatchConfig,U=0,ye=null,ae=null,we=0,Ue=0,ar=gn(0),fe=0,Bi=null,jn=0,Jo=0,Sc=0,yi=null,Ae=null,xc=0,Pr=1/0,Ct=null,_o=!1,Ja=null,tn=null,As=!1,Qt=null,vo=0,_i=0,Za=null,Vs=-1,Gs=0;function Te(){return U&6?le():Vs!==-1?Vs:Vs=le()}function nn(t){return t.mode&1?U&2&&we!==0?we&-we:I0.transition!==null?(Gs===0&&(Gs=Hp()),Gs):(t=H,t!==0||(t=window.event,t=t===void 0?16:qp(t.type)),t):1}function ct(t,e,n,r){if(50<_i)throw _i=0,Za=null,Error(E(185));ts(t,n,r),(!(U&2)||t!==ye)&&(t===ye&&(!(U&2)&&(Jo|=n),fe===4&&Gt(t,we)),Fe(t,r),n===1&&U===0&&!(e.mode&1)&&(Pr=le()+500,Qo&&yn()))}function Fe(t,e){var n=t.callbackNode;Iv(t,e);var r=to(t,t===ye?we:0);if(r===0)n!==null&&Wf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wf(n),e===1)t.tag===0?N0(Od.bind(null,t)):mm(Od.bind(null,t)),C0(function(){!(U&6)&&yn()}),n=null;else{switch($p(r)){case 1:n=qu;break;case 4:n=Wp;break;case 16:n=eo;break;case 536870912:n=Bp;break;default:n=eo}n=hg(n,og.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function og(t,e){if(Vs=-1,Gs=0,U&6)throw Error(E(327));var n=t.callbackNode;if(yr()&&t.callbackNode!==n)return null;var r=to(t,t===ye?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wo(t,r);else{e=r;var i=U;U|=2;var s=ag();(ye!==t||we!==e)&&(Ct=null,Pr=le()+500,An(t,e));do try{Y0();break}catch(l){lg(t,l)}while(!0);uc(),yo.current=s,U=i,ae!==null?e=0:(ye=null,we=0,e=fe)}if(e!==0){if(e===2&&(i=Na(t),i!==0&&(r=i,e=eu(t,i))),e===1)throw n=Bi,An(t,0),Gt(t,r),Fe(t,le()),n;if(e===6)Gt(t,r);else{if(i=t.current.alternate,!(r&30)&&!V0(i)&&(e=wo(t,r),e===2&&(s=Na(t),s!==0&&(r=s,e=eu(t,s))),e===1))throw n=Bi,An(t,0),Gt(t,r),Fe(t,le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Cn(t,Ae,Ct);break;case 3:if(Gt(t,r),(r&130023424)===r&&(e=xc+500-le(),10<e)){if(to(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Te(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Da(Cn.bind(null,t,Ae,Ct),e);break}Cn(t,Ae,Ct);break;case 4:if(Gt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$0(r/1960))-r,10<r){t.timeoutHandle=Da(Cn.bind(null,t,Ae,Ct),r);break}Cn(t,Ae,Ct);break;case 5:Cn(t,Ae,Ct);break;default:throw Error(E(329))}}}return Fe(t,le()),t.callbackNode===n?og.bind(null,t):null}function eu(t,e){var n=yi;return t.current.memoizedState.isDehydrated&&(An(t,e).flags|=256),t=wo(t,e),t!==2&&(e=Ae,Ae=n,e!==null&&tu(e)),t}function tu(t){Ae===null?Ae=t:Ae.push.apply(Ae,t)}function V0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gt(t,e){for(e&=~Sc,e&=~Jo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ut(e),r=1<<n;t[n]=-1,e&=~r}}function Od(t){if(U&6)throw Error(E(327));yr();var e=to(t,0);if(!(e&1))return Fe(t,le()),null;var n=wo(t,e);if(t.tag!==0&&n===2){var r=Na(t);r!==0&&(e=r,n=eu(t,r))}if(n===1)throw n=Bi,An(t,0),Gt(t,e),Fe(t,le()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cn(t,Ae,Ct),Fe(t,le()),null}function kc(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Pr=le()+500,Qo&&yn())}}function zn(t){Qt!==null&&Qt.tag===0&&!(U&6)&&yr();var e=U;U|=1;var n=Je.transition,r=H;try{if(Je.transition=null,H=1,t)return t()}finally{H=r,Je.transition=n,U=e,!(U&6)&&yn()}}function Nc(){Ue=ar.current,q(ar)}function An(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E0(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(oc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oo();break;case 3:Ir(),q(Me),q(Ne),mc();break;case 5:pc(r);break;case 4:Ir();break;case 13:q(ee);break;case 19:q(ee);break;case 10:cc(r.type._context);break;case 22:case 23:Nc()}n=n.return}if(ye=t,ae=t=rn(t.current,null),we=Ue=e,fe=0,Bi=null,Sc=Jo=jn=0,Ae=yi=null,In!==null){for(e=0;e<In.length;e++)if(n=In[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}In=null}return t}function lg(t,e){do{var n=ae;try{if(uc(),Bs.current=go,mo){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mo=!1}if(Fn=0,pe=ue=te=null,mi=!1,zi=0,Cc.current=null,n===null||n.return===null){fe=1,Bi=e,ae=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=wd(o);if(g!==null){g.flags&=-257,Ed(g,o,l,s,e),g.mode&1&&vd(s,u,e),e=g,a=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(a),e.updateQueue=v}else y.add(a);break e}else{if(!(e&1)){vd(s,u,e),Ic();break e}a=Error(E(426))}}else if(J&&l.mode&1){var N=wd(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ed(N,o,l,s,e),lc(Tr(a,l));break e}}s=a=Tr(a,l),fe!==4&&(fe=2),yi===null?yi=[s]:yi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=$m(s,a,e);hd(s,p);break e;case 1:l=a;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(tn===null||!tn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Vm(s,l,e);hd(s,w);break e}}s=s.return}while(s!==null)}cg(n)}catch(S){e=S,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function ag(){var t=yo.current;return yo.current=go,t===null?go:t}function Ic(){(fe===0||fe===3||fe===2)&&(fe=4),ye===null||!(jn&268435455)&&!(Jo&268435455)||Gt(ye,we)}function wo(t,e){var n=U;U|=2;var r=ag();(ye!==t||we!==e)&&(Ct=null,An(t,e));do try{G0();break}catch(i){lg(t,i)}while(!0);if(uc(),U=n,yo.current=r,ae!==null)throw Error(E(261));return ye=null,we=0,fe}function G0(){for(;ae!==null;)ug(ae)}function Y0(){for(;ae!==null&&!_v();)ug(ae)}function ug(t){var e=dg(t.alternate,t,Ue);t.memoizedProps=t.pendingProps,e===null?cg(t):ae=e,Cc.current=null}function cg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=U0(n,e),n!==null){n.flags&=32767,ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{fe=6,ae=null;return}}else if(n=z0(n,e,Ue),n!==null){ae=n;return}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);fe===0&&(fe=5)}function Cn(t,e,n){var r=H,i=Je.transition;try{Je.transition=null,H=1,Q0(t,e,n,r)}finally{Je.transition=i,H=r}return null}function Q0(t,e,n,r){do yr();while(Qt!==null);if(U&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Tv(t,s),t===ye&&(ae=ye=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||As||(As=!0,hg(eo,function(){return yr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Je.transition,Je.transition=null;var o=H;H=1;var l=U;U|=4,Cc.current=null,B0(t,n),ig(n,t),p0(ba),no=!!Aa,ba=Aa=null,t.current=n,H0(n),vv(),U=l,H=o,Je.transition=s}else t.current=n;if(As&&(As=!1,Qt=t,vo=i),s=t.pendingLanes,s===0&&(tn=null),Cv(n.stateNode),Fe(t,le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,t=Ja,Ja=null,t;return vo&1&&t.tag!==0&&yr(),s=t.pendingLanes,s&1?t===Za?_i++:(_i=0,Za=t):_i=0,yn(),null}function yr(){if(Qt!==null){var t=$p(vo),e=Je.transition,n=H;try{if(Je.transition=null,H=16>t?16:t,Qt===null)var r=!1;else{if(t=Qt,Qt=null,vo=0,U&6)throw Error(E(331));var i=U;for(U|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(x=u;x!==null;){var f=x;switch(f.tag){case 0:case 11:case 15:gi(8,f,s)}var c=f.child;if(c!==null)c.return=f,x=c;else for(;x!==null;){f=x;var d=f.sibling,g=f.return;if(tg(f),f===u){x=null;break}if(d!==null){d.return=g,x=d;break}x=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var N=v.sibling;v.sibling=null,v=N}while(v!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,x=p;break e}x=s.return}}var h=t.current;for(x=h;x!==null;){o=x;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,x=m;else e:for(o=h;x!==null;){if(l=x,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xo(9,l)}}catch(S){re(l,l.return,S)}if(l===o){x=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,x=w;break e}x=l.return}}if(U=i,yn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Ho,t)}catch{}r=!0}return r}finally{H=n,Je.transition=e}}return!1}function Dd(t,e,n){e=Tr(n,e),e=$m(t,e,1),t=en(t,e,1),e=Te(),t!==null&&(ts(t,1,e),Fe(t,e))}function re(t,e,n){if(t.tag===3)Dd(t,t,n);else for(;e!==null;){if(e.tag===3){Dd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){t=Tr(n,t),t=Vm(e,t,1),e=en(e,t,1),t=Te(),e!==null&&(ts(e,1,t),Fe(e,t));break}}e=e.return}}function K0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Te(),t.pingedLanes|=t.suspendedLanes&n,ye===t&&(we&n)===n&&(fe===4||fe===3&&(we&130023424)===we&&500>le()-xc?An(t,0):Sc|=n),Fe(t,e)}function fg(t,e){e===0&&(t.mode&1?(e=Es,Es<<=1,!(Es&130023424)&&(Es=4194304)):e=1);var n=Te();t=At(t,e),t!==null&&(ts(t,e,n),Fe(t,n))}function q0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fg(t,n)}function X0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),fg(t,n)}var dg;dg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)be=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return be=!1,j0(t,e,n);be=!!(t.flags&131072)}else be=!1,J&&e.flags&1048576&&gm(e,uo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$s(t,e),t=e.pendingProps;var i=xr(e,Ne.current);gr(e,n),i=yc(null,e,r,t,i,n);var s=_c();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Le(r)?(s=!0,lo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dc(e),i.updater=qo,e.stateNode=i,i._reactInternals=e,Wa(e,r,t,n),e=$a(null,e,r,!0,s,n)):(e.tag=0,J&&s&&sc(e),Ie(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($s(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Z0(r),t=rt(r,t),i){case 0:e=Ha(null,e,r,t,n);break e;case 1:e=xd(null,e,r,t,n);break e;case 11:e=Cd(null,e,r,t,n);break e;case 14:e=Sd(null,e,r,rt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),Ha(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),xd(t,e,r,i,n);case 3:e:{if(Km(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Cm(t,e),ho(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Tr(Error(E(423)),e),e=kd(t,e,r,n,i);break e}else if(r!==i){i=Tr(Error(E(424)),e),e=kd(t,e,r,n,i);break e}else for(We=Zt(e.stateNode.containerInfo.firstChild),Be=e,J=!0,st=null,n=wm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===i){e=bt(t,e,n);break e}Ie(t,e,r,n)}e=e.child}return e;case 5:return Sm(e),t===null&&ja(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Oa(r,i)?o=null:s!==null&&Oa(r,s)&&(e.flags|=32),Qm(t,e),Ie(t,e,o,n),e.child;case 6:return t===null&&ja(e),null;case 13:return qm(t,e,n);case 4:return hc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Nr(e,null,r,n):Ie(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),Cd(t,e,r,i,n);case 7:return Ie(t,e,e.pendingProps,n),e.child;case 8:return Ie(t,e,e.pendingProps.children,n),e.child;case 12:return Ie(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(co,r._currentValue),r._currentValue=o,s!==null)if(dt(s.value,o)){if(s.children===i.children&&!Me.current){e=bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=It(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),za(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),za(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ie(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gr(e,n),i=Ze(i),r=r(i),e.flags|=1,Ie(t,e,r,n),e.child;case 14:return r=e.type,i=rt(r,e.pendingProps),i=rt(r.type,i),Sd(t,e,r,i,n);case 15:return Gm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:rt(r,i),$s(t,e),e.tag=1,Le(r)?(t=!0,lo(e)):t=!1,gr(e,n),Hm(e,r,i),Wa(e,r,i,n),$a(null,e,r,!0,t,n);case 19:return Xm(t,e,n);case 22:return Ym(t,e,n)}throw Error(E(156,e.tag))};function hg(t,e){return Up(t,e)}function J0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,r){return new J0(t,e,n,r)}function Tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Z0(t){if(typeof t=="function")return Tc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yu)return 11;if(t===Qu)return 14}return 2}function rn(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ys(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Tc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jn:return bn(n.children,i,s,e);case Gu:o=8,i|=8;break;case fa:return t=Xe(12,n,e,i|2),t.elementType=fa,t.lanes=s,t;case da:return t=Xe(13,n,e,i),t.elementType=da,t.lanes=s,t;case ha:return t=Xe(19,n,e,i),t.elementType=ha,t.lanes=s,t;case Sp:return Zo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ep:o=10;break e;case Cp:o=9;break e;case Yu:o=11;break e;case Qu:o=14;break e;case Ht:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Xe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function bn(t,e,n,r){return t=Xe(7,t,r,e),t.lanes=n,t}function Zo(t,e,n,r){return t=Xe(22,t,r,e),t.elementType=Sp,t.lanes=n,t.stateNode={isHidden:!1},t}function Vl(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Gl(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function e1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pc(t,e,n,r,i,s,o,l,a){return t=new e1(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dc(s),t}function t1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function pg(t){if(!t)return un;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Le(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Le(n))return pm(t,n,e)}return e}function mg(t,e,n,r,i,s,o,l,a){return t=Pc(n,r,!0,t,i,s,o,l,a),t.context=pg(null),n=t.current,r=Te(),i=nn(n),s=It(r,i),s.callback=e??null,en(n,s,i),t.current.lanes=i,ts(t,i,r),Fe(t,r),t}function el(t,e,n,r){var i=e.current,s=Te(),o=nn(i);return n=pg(n),e.context===null?e.context=n:e.pendingContext=n,e=It(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=en(i,e,o),t!==null&&(ct(t,i,o,s),Ws(t,i,o)),o}function Eo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Md(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rc(t,e){Md(t,e),(t=t.alternate)&&Md(t,e)}function n1(){return null}var gg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ac(t){this._internalRoot=t}tl.prototype.render=Ac.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));el(t,e,null,null)};tl.prototype.unmount=Ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zn(function(){el(null,t,null,null)}),e[Rt]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vt.length&&e!==0&&e<Vt[n].priority;n++);Vt.splice(n,0,t),n===0&&Kp(t)}};function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ld(){}function r1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Eo(o);s.call(u)}}var o=mg(e,r,t,0,null,!1,!1,"",Ld);return t._reactRootContainer=o,t[Rt]=o.current,Di(t.nodeType===8?t.parentNode:t),zn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Eo(a);l.call(u)}}var a=Pc(t,0,!1,null,null,!1,!1,"",Ld);return t._reactRootContainer=a,t[Rt]=a.current,Di(t.nodeType===8?t.parentNode:t),zn(function(){el(e,a,n,r)}),a}function rl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Eo(o);l.call(a)}}el(e,o,t,i)}else o=r1(n,e,t,i,r);return Eo(o)}Vp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oi(e.pendingLanes);n!==0&&(Xu(e,n|1),Fe(e,le()),!(U&6)&&(Pr=le()+500,yn()))}break;case 13:zn(function(){var r=At(t,1);if(r!==null){var i=Te();ct(r,t,1,i)}}),Rc(t,1)}};Ju=function(t){if(t.tag===13){var e=At(t,134217728);if(e!==null){var n=Te();ct(e,t,134217728,n)}Rc(t,134217728)}};Gp=function(t){if(t.tag===13){var e=nn(t),n=At(t,e);if(n!==null){var r=Te();ct(n,t,e,r)}Rc(t,e)}};Yp=function(){return H};Qp=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};Sa=function(t,e,n){switch(e){case"input":if(ga(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yo(r);if(!i)throw Error(E(90));kp(r),ga(r,i)}}}break;case"textarea":Ip(t,n);break;case"select":e=n.value,e!=null&&dr(t,!!n.multiple,e,!1)}};Dp=kc;Mp=zn;var i1={usingClientEntryPoint:!1,Events:[rs,nr,Yo,bp,Op,kc]},Zr={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s1={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jp(t),t===null?null:t.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||n1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{Ho=bs.inject(s1),vt=bs}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i1;Ge.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(e))throw Error(E(200));return t1(t,e,null,n)};Ge.createRoot=function(t,e){if(!bc(t))throw Error(E(299));var n=!1,r="",i=gg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pc(t,1,!1,null,null,n,!1,r,i),t[Rt]=e.current,Di(t.nodeType===8?t.parentNode:t),new Ac(e)};Ge.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=jp(e),t=t===null?null:t.stateNode,t};Ge.flushSync=function(t){return zn(t)};Ge.hydrate=function(t,e,n){if(!nl(e))throw Error(E(200));return rl(null,t,e,!0,n)};Ge.hydrateRoot=function(t,e,n){if(!bc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mg(e,null,t,1,n??null,i,!1,s,o),t[Rt]=e.current,Di(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tl(e)};Ge.render=function(t,e,n){if(!nl(e))throw Error(E(200));return rl(null,t,e,!1,n)};Ge.unmountComponentAtNode=function(t){if(!nl(t))throw Error(E(40));return t._reactRootContainer?(zn(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Rt]=null})}),!0):!1};Ge.unstable_batchedUpdates=kc;Ge.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return rl(t,e,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function yg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yg)}catch(t){console.error(t)}}yg(),yp.exports=Ge;var o1=yp.exports,_g,Fd=o1;_g=Fd.createRoot,Fd.hydrateRoot;const l1={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]},jd=()=>{};let Oc={},vg={},wg=null,Eg={mark:jd,measure:jd};try{typeof window<"u"&&(Oc=window),typeof document<"u"&&(vg=document),typeof MutationObserver<"u"&&(wg=MutationObserver),typeof performance<"u"&&(Eg=performance)}catch{}const{userAgent:zd=""}=Oc.navigator||{},cn=Oc,X=vg,Ud=wg,Os=Eg;cn.document;const zt=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Cg=~zd.indexOf("MSIE")||~zd.indexOf("Trident/");var Z="classic",Sg="duotone",He="sharp",$e="sharp-duotone",a1=[Z,Sg,He,$e],u1={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Wd={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},c1=["kit"],f1=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,d1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,h1={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},p1={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},m1={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},g1={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},y1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},_1={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},xg={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},v1=["solid","regular","light","thin","duotone","brands"],kg=[1,2,3,4,5,6,7,8,9,10],w1=kg.concat([11,12,13,14,15,16,17,18,19,20]),ai={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},E1=[...Object.keys(g1),...v1,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ai.GROUP,ai.SWAP_OPACITY,ai.PRIMARY,ai.SECONDARY].concat(kg.map(t=>"".concat(t,"x"))).concat(w1.map(t=>"w-".concat(t))),C1={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},S1={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},x1={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Bd={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Ot="___FONT_AWESOME___",nu=16,Ng="fa",Ig="svg-inline--fa",Un="data-fa-i2svg",ru="data-fa-pseudo-element",k1="data-fa-pseudo-element-pending",Dc="data-prefix",Mc="data-icon",Hd="fontawesome-i2svg",N1="async",I1=["HTML","HEAD","STYLE","SCRIPT"],Tg=(()=>{try{return!0}catch{return!1}})(),Pg=[Z,He,$e];function ss(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Z]}})}const Rg={...xg};Rg[Z]={...xg[Z],...Wd.kit,...Wd["kit-duotone"]};const On=ss(Rg),iu={..._1};iu[Z]={...iu[Z],...Bd.kit,...Bd["kit-duotone"]};const Hi=ss(iu),su={...y1};su[Z]={...su[Z],...x1.kit};const Dn=ss(su),ou={...m1};ou[Z]={...ou[Z],...S1.kit};const T1=ss(ou),P1=f1,Ag="fa-layers-text",R1=d1,A1={...u1};ss(A1);const b1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yl=ai,Rr=new Set;Object.keys(Hi[Z]).map(Rr.add.bind(Rr));Object.keys(Hi[He]).map(Rr.add.bind(Rr));Object.keys(Hi[$e]).map(Rr.add.bind(Rr));const O1=[...c1,...E1],vi=cn.FontAwesomeConfig||{};function D1(t){var e=X.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function M1(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}X&&typeof X.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=M1(D1(n));i!=null&&(vi[r]=i)});const bg={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ng,replacementClass:Ig,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vi.familyPrefix&&(vi.cssPrefix=vi.familyPrefix);const Ar={...bg,...vi};Ar.autoReplaceSvg||(Ar.observeMutations=!1);const I={};Object.keys(bg).forEach(t=>{Object.defineProperty(I,t,{enumerable:!0,set:function(e){Ar[t]=e,wi.forEach(n=>n(I))},get:function(){return Ar[t]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Ar.cssPrefix=t,wi.forEach(e=>e(I))},get:function(){return Ar.cssPrefix}});cn.FontAwesomeConfig=I;const wi=[];function L1(t){return wi.push(t),()=>{wi.splice(wi.indexOf(t),1)}}const Bt=nu,yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function F1(t){if(!t||!zt)return;const e=X.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=X.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return X.head.insertBefore(e,r),t}const j1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $i(){let t=12,e="";for(;t-- >0;)e+=j1[Math.random()*62|0];return e}function zr(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Lc(t){return t.classList?zr(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Og(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function z1(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Og(t[n]),'" '),"").trim()}function il(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Fc(t){return t.size!==yt.size||t.x!==yt.x||t.y!==yt.y||t.rotate!==yt.rotate||t.flipX||t.flipY}function U1(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),a={transform:"".concat(s," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:a,path:u}}function W1(t){let{transform:e,width:n=nu,height:r=nu,startCentered:i=!1}=t,s="";return i&&Cg?s+="translate(".concat(e.x/Bt-n/2,"em, ").concat(e.y/Bt-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/Bt,"em), calc(-50% + ").concat(e.y/Bt,"em)) "):s+="translate(".concat(e.x/Bt,"em, ").concat(e.y/Bt,"em) "),s+="scale(".concat(e.size/Bt*(e.flipX?-1:1),", ").concat(e.size/Bt*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var B1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Dg(){const t=Ng,e=Ig,n=I.cssPrefix,r=I.replacementClass;let i=B1;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let $d=!1;function Ql(){I.autoAddCss&&!$d&&(F1(Dg()),$d=!0)}var H1={mixout(){return{dom:{css:Dg,insertCss:Ql}}},hooks(){return{beforeDOMElementCreation(){Ql()},beforeI2svg(){Ql()}}}};const Dt=cn||{};Dt[Ot]||(Dt[Ot]={});Dt[Ot].styles||(Dt[Ot].styles={});Dt[Ot].hooks||(Dt[Ot].hooks={});Dt[Ot].shims||(Dt[Ot].shims=[]);var _t=Dt[Ot];const Mg=[],Lg=function(){X.removeEventListener("DOMContentLoaded",Lg),Co=1,Mg.map(t=>t())};let Co=!1;zt&&(Co=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Co||X.addEventListener("DOMContentLoaded",Lg));function $1(t){zt&&(Co?setTimeout(t,0):Mg.push(t))}function os(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Og(t):"<".concat(e," ").concat(z1(n),">").concat(r.map(os).join(""),"</").concat(e,">")}function Vd(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Kl=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,a,u,f;for(r===void 0?(a=1,f=e[s[0]]):(a=0,f=r);a<o;a++)u=s[a],f=l(f,e[u],u,e);return f};function V1(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function lu(t){const e=V1(t);return e.length===1?e[0].toString(16):null}function G1(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Gd(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function au(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Gd(e);typeof _t.hooks.addPack=="function"&&!r?_t.hooks.addPack(t,Gd(e)):_t.styles[t]={..._t.styles[t]||{},...i},t==="fas"&&au("fa",e)}const{styles:kn,shims:Y1}=_t,Q1={[Z]:Object.values(Dn[Z]),[He]:Object.values(Dn[He]),[$e]:Object.values(Dn[$e])};let jc=null,Fg={},jg={},zg={},Ug={},Wg={};const K1={[Z]:Object.keys(On[Z]),[He]:Object.keys(On[He]),[$e]:Object.keys(On[$e])};function q1(t){return~O1.indexOf(t)}function X1(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!q1(i)?i:null}const Bg=()=>{const t=r=>Kl(kn,(i,s,o)=>(i[o]=Kl(s,r,{}),i),{});Fg=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),jg=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),Wg=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in kn||I.autoFetchSvg,n=Kl(Y1,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});zg=n.names,Ug=n.unicodes,jc=sl(I.styleDefault,{family:I.familyDefault})};L1(t=>{jc=sl(t.styleDefault,{family:I.familyDefault})});Bg();function zc(t,e){return(Fg[t]||{})[e]}function J1(t,e){return(jg[t]||{})[e]}function Kt(t,e){return(Wg[t]||{})[e]}function Hg(t){return zg[t]||{prefix:null,iconName:null}}function Z1(t){const e=Ug[t],n=zc("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function fn(){return jc}const Uc=()=>({prefix:null,iconName:null,rest:[]});function sl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Z}=e,r=On[n][t],i=Hi[n][t]||Hi[n][r],s=t in _t.styles?t:null;return i||s||null}const ew={[Z]:Object.keys(Dn[Z]),[He]:Object.keys(Dn[He]),[$e]:Object.keys(Dn[$e])};function ol(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Z]:"".concat(I.cssPrefix,"-").concat(Z),[He]:"".concat(I.cssPrefix,"-").concat(He),[$e]:"".concat(I.cssPrefix,"-").concat($e)};let i=null,s=Z;const o=a1.filter(a=>a!==Sg);o.forEach(a=>{(t.includes(r[a])||t.some(u=>ew[a].includes(u)))&&(s=a)});const l=t.reduce((a,u)=>{const f=X1(I.cssPrefix,u);if(kn[u]?(u=Q1[s].includes(u)?T1[s][u]:u,i=u,a.prefix=u):K1[s].indexOf(u)>-1?(i=u,a.prefix=sl(u,{family:s})):f?a.iconName=f:u!==I.replacementClass&&!o.some(c=>u===r[c])&&a.rest.push(u),!n&&a.prefix&&a.iconName){const c=i==="fa"?Hg(a.iconName):{},d=Kt(a.prefix,a.iconName);c.prefix&&(i=null),a.iconName=c.iconName||d||a.iconName,a.prefix=c.prefix||a.prefix,a.prefix==="far"&&!kn.far&&kn.fas&&!I.autoFetchSvg&&(a.prefix="fas")}return a},Uc());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===He&&(kn.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=Kt(l.prefix,l.iconName)||l.iconName),!l.prefix&&s===$e&&(kn.fasds||I.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Kt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=fn()||"fas"),l}class tw{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},au(s,i[s]);const o=Dn[Z][s];o&&au(o,i[s]),Bg()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],a=l[2];e[s]||(e[s]={}),a.length>0&&a.forEach(u=>{typeof u=="string"&&(e[s][u]=l)}),e[s][o]=l}),e}}let Yd=[],ur={};const _r={},nw=Object.keys(_r);function rw(t,e){let{mixoutsTo:n}=e;return Yd=t,ur={},Object.keys(_r).forEach(r=>{nw.indexOf(r)===-1&&delete _r[r]}),Yd.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{ur[o]||(ur[o]=[]),ur[o].push(s[o])})}r.provides&&r.provides(_r)}),n}function uu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(ur[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Wn(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ur[t]||[]).forEach(s=>{s.apply(null,n)})}function dn(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return _r[t]?_r[t].apply(null,e):void 0}function cu(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||fn();if(e)return e=Kt(n,e)||e,Vd($g.definitions,n,e)||Vd(_t.styles,n,e)}const $g=new tw,iw=()=>{I.autoReplaceSvg=!1,I.observeMutations=!1,Wn("noAuto")},sw={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zt?(Wn("beforeI2svg",t),dn("pseudoElements2svg",t),dn("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,$1(()=>{lw({autoReplaceSvgRoot:e}),Wn("watch",t)})}},ow={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=sl(t[0]);return{prefix:n,iconName:Kt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(P1))){const e=ol(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||fn(),iconName:Kt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=fn();return{prefix:e,iconName:Kt(e,t)||t}}}},Qe={noAuto:iw,config:I,dom:sw,parse:ow,library:$g,findIconDefinition:cu,toHtml:os},lw=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=X}=t;(Object.keys(_t.styles).length>0||I.autoFetchSvg)&&zt&&I.autoReplaceSvg&&Qe.dom.i2svg({node:e})};function ll(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>os(n))}}),Object.defineProperty(t,"node",{get:function(){if(!zt)return;const n=X.createElement("div");return n.innerHTML=t.html,n.children}}),t}function aw(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(Fc(o)&&n.found&&!r.found){const{width:l,height:a}=n,u={x:l/a/2,y:.5};i.style=il({...s,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function uw(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(I.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function Wc(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:a,titleId:u,extra:f,watchable:c=!1}=t,{width:d,height:g}=n.found?n:e,y=r==="fak",v=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(S=>f.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(f.classes).join(" ");let N={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":i,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(g)}};const p=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(d/g*16*.0625,"em")}:{};c&&(N.attributes[Un]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||$i())},children:[l]}),delete N.attributes.title);const h={...N,prefix:r,iconName:i,main:e,mask:n,maskId:a,transform:s,symbol:o,styles:{...p,...f.styles}},{children:m,attributes:w}=n.found&&e.found?dn("generateAbstractMask",h)||{children:[],attributes:{}}:dn("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=m,h.attributes=w,o?uw(h):aw(h)}function Qd(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,a={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};l&&(a[Un]="");const u={...o.styles};Fc(i)&&(u.transform=W1({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const f=il(u);f.length>0&&(a.style=f);const c=[];return c.push({tag:"span",attributes:a,children:[e]}),s&&c.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),c}function cw(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=il(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ql}=_t;function fu(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(Yl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(Yl.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(Yl.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const fw={found:!1,width:512,height:512};function dw(t,e){!Tg&&!I.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function du(t,e){let n=e;return e==="fa"&&I.styleDefault!==null&&(e=fn()),new Promise((r,i)=>{if(n==="fa"){const s=Hg(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ql[e]&&ql[e][t]){const s=ql[e][t];return r(fu(s))}dw(t,e),r({...fw,icon:I.showMissingIcons&&t?dn("missingIconAbstract")||{}:{}})})}const Kd=()=>{},hu=I.measurePerformance&&Os&&Os.mark&&Os.measure?Os:{mark:Kd,measure:Kd},ui='FA "6.6.0"',hw=t=>(hu.mark("".concat(ui," ").concat(t," begins")),()=>Vg(t)),Vg=t=>{hu.mark("".concat(ui," ").concat(t," ends")),hu.measure("".concat(ui," ").concat(t),"".concat(ui," ").concat(t," begins"),"".concat(ui," ").concat(t," ends"))};var Bc={begin:hw,end:Vg};const Qs=()=>{};function qd(t){return typeof(t.getAttribute?t.getAttribute(Un):null)=="string"}function pw(t){const e=t.getAttribute?t.getAttribute(Dc):null,n=t.getAttribute?t.getAttribute(Mc):null;return e&&n}function mw(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(I.replacementClass)}function gw(){return I.autoReplaceSvg===!0?Ks.replace:Ks[I.autoReplaceSvg]||Ks.replace}function yw(t){return X.createElementNS("http://www.w3.org/2000/svg",t)}function _w(t){return X.createElement(t)}function Gg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?yw:_w}=e;if(typeof t=="string")return X.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(Gg(s,{ceFn:n}))}),r}function vw(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ks={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Gg(n),e)}),e.getAttribute(Un)===null&&I.keepOriginalSource){let n=X.createComment(vw(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Lc(e).indexOf(I.replacementClass))return Ks.replace(t);const r=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===I.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>os(s)).join(`
`);e.setAttribute(Un,""),e.innerHTML=i}};function Xd(t){t()}function Yg(t,e){const n=typeof e=="function"?e:Qs;if(t.length===0)n();else{let r=Xd;I.mutateApproach===N1&&(r=cn.requestAnimationFrame||Xd),r(()=>{const i=gw(),s=Bc.begin("mutate");t.map(i),s(),n()})}}let Hc=!1;function Qg(){Hc=!0}function pu(){Hc=!1}let So=null;function Jd(t){if(!Ud||!I.observeMutations)return;const{treeCallback:e=Qs,nodeCallback:n=Qs,pseudoElementsCallback:r=Qs,observeMutationsRoot:i=X}=t;So=new Ud(s=>{if(Hc)return;const o=fn();zr(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!qd(l.addedNodes[0])&&(I.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&I.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&qd(l.target)&&~b1.indexOf(l.attributeName))if(l.attributeName==="class"&&pw(l.target)){const{prefix:a,iconName:u}=ol(Lc(l.target));l.target.setAttribute(Dc,a||o),u&&l.target.setAttribute(Mc,u)}else mw(l.target)&&n(l.target)})}),zt&&So.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ww(){So&&So.disconnect()}function Ew(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Cw(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=ol(Lc(t));return i.prefix||(i.prefix=fn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=J1(i.prefix,t.innerText)||zc(i.prefix,lu(t.innerText))),!i.iconName&&I.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Sw(t){const e=zr(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return I.autoA11y&&(n?e["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||$i()):(e["aria-hidden"]="true",e.focusable="false")),e}function xw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Cw(t),s=Sw(t),o=uu("parseNodeAttributes",{},t);let l=e.styleParser?Ew(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:yt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s},...o}}const{styles:kw}=_t;function Kg(t){const e=I.autoReplaceSvg==="nest"?Zd(t,{styleParser:!1}):Zd(t);return~e.extra.classes.indexOf(Ag)?dn("generateLayersText",t,e):dn("generateSvgReplacementMutation",t,e)}let Et=new Set;Pg.map(t=>{Et.add("fa-".concat(t))});Object.keys(On[Z]).map(Et.add.bind(Et));Object.keys(On[He]).map(Et.add.bind(Et));Object.keys(On[$e]).map(Et.add.bind(Et));Et=[...Et];function eh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zt)return Promise.resolve();const n=X.documentElement.classList,r=f=>n.add("".concat(Hd,"-").concat(f)),i=f=>n.remove("".concat(Hd,"-").concat(f)),s=I.autoFetchSvg?Et:Pg.map(f=>"fa-".concat(f)).concat(Object.keys(kw));s.includes("fa")||s.push("fa");const o=[".".concat(Ag,":not([").concat(Un,"])")].concat(s.map(f=>".".concat(f,":not([").concat(Un,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=zr(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const a=Bc.begin("onTree"),u=l.reduce((f,c)=>{try{const d=Kg(c);d&&f.push(d)}catch(d){Tg||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise((f,c)=>{Promise.all(u).then(d=>{Yg(d,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),a(),f()})}).catch(d=>{a(),c(d)})})}function Nw(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kg(t).then(n=>{n&&Yg([n],e)})}function Iw(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:cu(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:cu(i||{})),t(r,{...n,mask:i})}}const Tw=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=yt,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:a=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:c,iconName:d,icon:g}=t;return ll({type:"icon",...t},()=>(Wn("beforeDOMElementCreation",{iconDefinition:t,params:e}),I.autoA11y&&(o?u["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(l||$i()):(u["aria-hidden"]="true",u.focusable="false")),Wc({icons:{main:fu(g),mask:i?fu(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:c,iconName:d,transform:{...yt,...n},symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:u,styles:f,classes:a}})))};var Pw={mixout(){return{icon:Iw(Tw)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=eh,t.nodeCallback=Nw,t}}},provides(t){t.i2svg=function(e){const{node:n=X,callback:r=()=>{}}=e;return eh(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:a,mask:u,maskId:f,extra:c}=n;return new Promise((d,g)=>{Promise.all([du(r,o),u.iconName?du(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[v,N]=y;d([e,Wc({icons:{main:v,mask:N},prefix:o,iconName:r,transform:l,symbol:a,maskId:f,title:i,titleId:s,extra:c,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=il(o);l.length>0&&(r.style=l);let a;return Fc(s)&&(a=dn("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(a||i.icon),{children:n,attributes:r}}}},Rw={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ll({type:"layer"},()=>{Wn("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Aw={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return ll({type:"counter",content:t},()=>(Wn("beforeDOMElementCreation",{content:t,params:e}),cw({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(I.cssPrefix,"-layers-counter"),...r]}})))}}}},bw={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=yt,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return ll({type:"text",content:t},()=>(Wn("beforeDOMElementCreation",{content:t,params:e}),Qd({content:t,transform:{...yt,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(I.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(Cg){const a=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/a,l=u.height/a}return I.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Qd({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const Ow=new RegExp('"',"ug"),th=[1105920,1112319],nh={FontAwesome:{normal:"fas",400:"fas"},...p1,...h1,...C1},mu=Object.keys(nh).reduce((t,e)=>(t[e.toLowerCase()]=nh[e],t),{}),Dw=Object.keys(mu).reduce((t,e)=>{const n=mu[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Mw(t){const e=t.replace(Ow,""),n=G1(e,0),r=n>=th[0]&&n<=th[1],i=e.length===2?e[0]===e[1]:!1;return{value:lu(i?e[0]:e),isSecondary:r||i}}function Lw(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(mu[n]||{})[i]||Dw[n]}function rh(t,e){const n="".concat(k1).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=zr(t.children).filter(d=>d.getAttribute(ru)===e)[0],l=cn.getComputedStyle(t,e),a=l.getPropertyValue("font-family"),u=a.match(R1),f=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&c!=="none"&&c!==""){const d=l.getPropertyValue("content");let g=Lw(a,f);const{value:y,isSecondary:v}=Mw(d),N=u[0].startsWith("FontAwesome");let p=zc(g,y),h=p;if(N){const m=Z1(y);m.iconName&&m.prefix&&(p=m.iconName,g=m.prefix)}if(p&&!v&&(!o||o.getAttribute(Dc)!==g||o.getAttribute(Mc)!==h)){t.setAttribute(n,h),o&&t.removeChild(o);const m=xw(),{extra:w}=m;w.attributes[ru]=e,du(p,g).then(S=>{const P=Wc({...m,icons:{main:S,mask:Uc()},prefix:g,iconName:h,extra:w,watchable:!0}),T=X.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=P.map(R=>os(R)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Fw(t){return Promise.all([rh(t,"::before"),rh(t,"::after")])}function jw(t){return t.parentNode!==document.head&&!~I1.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ru)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ih(t){if(zt)return new Promise((e,n)=>{const r=zr(t.querySelectorAll("*")).filter(jw).map(Fw),i=Bc.begin("searchPseudoElements");Qg(),Promise.all(r).then(()=>{i(),pu(),e()}).catch(()=>{i(),pu(),n()})})}var zw={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ih,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=X}=e;I.searchPseudoElements&&ih(n)}}};let sh=!1;var Uw={mixout(){return{dom:{unwatch(){Qg(),sh=!0}}}},hooks(){return{bootstrap(){Jd(uu("mutationObserverCallbacks",{}))},noAuto(){ww()},watch(t){const{observeMutationsRoot:e}=t;sh?pu():Jd(uu("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const oh=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Ww={mixout(){return{parse:{transform:t=>oh(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=oh(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),a="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(a," ").concat(u)},c={transform:"translate(".concat(s/2*-1," -256)")},d={outer:o,inner:f,path:c};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Xl={x:0,y:0,width:"100%",height:"100%"};function lh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Bw(t){return t.tag==="g"?t.children:[t]}var Hw={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ol(n.split(" ").map(i=>i.trim())):Uc();return r.prefix||(r.prefix=fn()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:a,icon:u}=i,{width:f,icon:c}=s,d=U1({transform:l,containerWidth:f,iconWidth:a}),g={tag:"rect",attributes:{...Xl,fill:"white"}},y=u.children?{children:u.children.map(lh)}:{},v={tag:"g",attributes:{...d.inner},children:[lh({tag:u.tag,attributes:{...u.attributes,...d.path},...y})]},N={tag:"g",attributes:{...d.outer},children:[v]},p="mask-".concat(o||$i()),h="clip-".concat(o||$i()),m={tag:"mask",attributes:{...Xl,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,N]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Bw(c)},m]};return n.push(w,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")"),...Xl}}),{children:n,attributes:r}}}},$w={provides(t){let e=!1;cn.matchMedia&&(e=cn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Vw={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Gw=[H1,Pw,Rw,Aw,bw,zw,Uw,Ww,Hw,$w,Vw];rw(Gw,{mixoutsTo:Qe});Qe.noAuto;Qe.config;Qe.library;Qe.dom;const gu=Qe.parse;Qe.findIconDefinition;Qe.toHtml;const Yw=Qe.icon;Qe.layer;Qe.text;Qe.counter;var qg={exports:{}},Qw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Kw=Qw,qw=Kw;function Xg(){}function Jg(){}Jg.resetWarningCache=Xg;var Xw=function(){function t(r,i,s,o,l,a){if(a!==qw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Jg,resetWarningCache:Xg};return n.PropTypes=n,n};qg.exports=Xw();var Jw=qg.exports;const L=ip(Jw);function ah(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function mt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ah(Object(n),!0).forEach(function(r){cr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ah(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function xo(t){"@babel/helpers - typeof";return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xo(t)}function cr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eE(t,e){if(t==null)return{};var n=Zw(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function yu(t){return tE(t)||nE(t)||rE(t)||iE()}function tE(t){if(Array.isArray(t))return _u(t)}function nE(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rE(t,e){if(t){if(typeof t=="string")return _u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _u(t,e)}}function _u(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function iE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sE(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,a=t.spin,u=t.spinPulse,f=t.spinReverse,c=t.pulse,d=t.fixedWidth,g=t.inverse,y=t.border,v=t.listItem,N=t.flip,p=t.size,h=t.rotation,m=t.pull,w=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":a,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":c,"fa-fw":d,"fa-inverse":g,"fa-border":y,"fa-li":v,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},cr(e,"fa-".concat(p),typeof p<"u"&&p!==null),cr(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),cr(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),cr(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function oE(t){return t=t-0,t===t}function Zg(t){return oE(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var lE=["style"];function aE(t){return t.charAt(0).toUpperCase()+t.slice(1)}function uE(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Zg(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[aE(i)]=s:e[i]=s,e},{})}function ey(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(a){return ey(t,a)}),i=Object.keys(e.attributes||{}).reduce(function(a,u){var f=e.attributes[u];switch(u){case"class":a.attrs.className=f,delete e.attributes.class;break;case"style":a.attrs.style=uE(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?a.attrs[u.toLowerCase()]=f:a.attrs[Zg(u)]=f}return a},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=eE(n,lE);return i.attrs.style=mt(mt({},i.attrs.style),o),t.apply(void 0,[e.tag,mt(mt({},i.attrs),l)].concat(yu(r)))}var ty=!1;try{ty=!0}catch{}function cE(){if(!ty&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function uh(t){if(t&&xo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(gu.icon)return gu.icon(t);if(t===null)return null;if(t&&xo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Jl(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?cr({},t,e):{}}var ch={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},$c=mp.forwardRef(function(t,e){var n=mt(mt({},ch),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,a=n.titleId,u=n.maskId,f=uh(r),c=Jl("classes",[].concat(yu(sE(n)),yu((o||"").split(" ")))),d=Jl("transform",typeof n.transform=="string"?gu.transform(n.transform):n.transform),g=Jl("mask",uh(i)),y=Yw(f,mt(mt(mt(mt({},c),d),g),{},{symbol:s,title:l,titleId:a,maskId:u}));if(!y)return cE("Could not find icon",f),null;var v=y.abstract,N={ref:e};return Object.keys(n).forEach(function(p){ch.hasOwnProperty(p)||(N[p]=n[p])}),fE(v[0],N)});$c.displayName="FontAwesomeIcon";$c.propTypes={beat:L.bool,border:L.bool,beatFade:L.bool,bounce:L.bool,className:L.string,fade:L.bool,flash:L.bool,mask:L.oneOfType([L.object,L.array,L.string]),maskId:L.string,fixedWidth:L.bool,inverse:L.bool,flip:L.oneOf([!0,!1,"horizontal","vertical","both"]),icon:L.oneOfType([L.object,L.array,L.string]),listItem:L.bool,pull:L.oneOf(["right","left"]),pulse:L.bool,rotation:L.oneOf([0,90,180,270]),shake:L.bool,size:L.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.bool,spinPulse:L.bool,spinReverse:L.bool,symbol:L.oneOfType([L.bool,L.string]),title:L.string,titleId:L.string,transform:L.oneOfType([L.string,L.object]),swapOpacity:L.bool};var fE=ey.bind(null,mp.createElement);const dE=({targetDate:t})=>{const e=()=>{const i=new Date(t)-new Date;let s={};return i>0&&(s={days:Math.floor(i/864e5),hours:Math.floor(i%864e5/36e5),minutes:Math.floor(i%36e5/6e4),seconds:Math.floor(i%6e4/1e3)}),s},[n,r]=B.useState(e());return B.useEffect(()=>{const i=setInterval(()=>{r(e())},1e3);return()=>clearInterval(i)},[]),_.jsx("div",{className:"bg-white/50 rounded-lg shadow-lg p-1 text-center w-[200px]",style:{fontFamily:"Merienda"},children:n.days!==void 0?_.jsxs("div",{className:"flex justify-center space-x-4",children:[_.jsxs("div",{className:"flex flex-col items-center",children:[_.jsxs("span",{className:"text-[25px] font-bold text-blue-600",children:[n.days,":"]}),_.jsx("span",{className:"text-[8px] text-gray-500",children:"Ngày"})]}),_.jsxs("div",{className:"flex flex-col items-center",children:[_.jsxs("span",{className:"text-[25px] font-bold text-blue-600",children:[n.hours,":"]}),_.jsx("span",{className:"text-[8px] text-gray-500",children:"Giờ"})]}),_.jsxs("div",{className:"flex flex-col items-center",children:[_.jsxs("span",{className:"text-[25px] font-bold text-blue-600",children:[n.minutes,":"]}),_.jsx("span",{className:"text-[8px] text-gray-500",children:"Phút"})]}),_.jsxs("div",{className:"flex flex-col items-center",children:[_.jsx("span",{className:"text-[25px] font-bold text-blue-600",children:n.seconds}),_.jsx("span",{className:"text-[8px] text-gray-500",children:"Giây"})]})]}):_.jsx("span",{className:"text-2xl text-red-600",children:"Đã Tốt Nghiệp !!!"})})},hE=()=>{const t=["./h1.jpg","./h2.jpg","./h3.jpg","./h4.jpg"],[e,n]=B.useState(0);return B.useEffect(()=>{const r=setInterval(()=>{n(i=>(i+1)%t.length)},2e3);return()=>clearInterval(r)},[t.length]),_.jsx("div",{children:_.jsx("div",{className:"rounded-lg h-full",children:_.jsx("img",{src:t[e],alt:`Slide ${e}`,className:"rounded-lg w-full "})})})},ny=B.createContext(),pE=({children:t})=>{const[e,n]=B.useState(!1),[r,i]=B.useState();return B.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="scroll"},[e]),_.jsxs(ny.Provider,{value:{setisShow:n,setContent:i},children:[t,e&&_.jsx("div",{className:"fixed inset-0 z-10",children:_.jsx("div",{className:"absolute bg-slate-600/60 inset-0 flex items-center justify-center",onClick:()=>n(!1),children:_.jsx("div",{className:"z-20",onClick:s=>s.stopPropagation(),children:r})})})]})};var fh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw Ur(e)},Ur=function(t){return new Error("Firebase Database ("+ry.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,f=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(d=64)),r.push(n[f],n[c],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new gE;const d=s<<2|l>>4;if(r.push(d),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const y=u<<6&192|c;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sy=function(t){const e=iy(t);return Vc.encodeByteArray(e,!0)},ko=function(t){return sy(t).replace(/\./g,"")},vu=function(t){try{return Vc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t){return oy(void 0,t)}function oy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_E(n)||(t[n]=oy(t[n],e[n]));return t}function _E(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=()=>vE().__FIREBASE_DEFAULTS__,EE=()=>{if(typeof process>"u"||typeof fh>"u")return;const t=fh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vu(t[1]);return e&&JSON.parse(e)},ly=()=>{try{return wE()||EE()||CE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},SE=t=>{var e,n;return(n=(e=ly())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xE=t=>{const e=SE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ay=()=>{var t;return(t=ly())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(NE())}function IE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cy(){return ry.NODE_ADMIN===!0}function TE(){try{return typeof indexedDB=="object"}catch{return!1}}function PE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="FirebaseError";class ls extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RE,Object.setPrototypeOf(this,ls.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fy.prototype.create)}}class fy{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ls(i,l,r)}}function AE(t,e){return t.replace(bE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Vi(vu(s[0])||""),n=Vi(vu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},OE=function(t){const e=dy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},DE=function(t){const e=dy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function br(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function dh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function wu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(hh(s)&&hh(o)){if(!wu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,f;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):c<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const d=(i<<5|i>>>27)+u+a+f+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Gc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ul=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return t&&t._delegate?t._delegate:t}class Gi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new al;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UE(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zE(t){return t===Sn?void 0:t}function UE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const BE={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},HE=V.INFO,$E={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},VE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$E[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hy{constructor(e){this.name=e,this._logLevel=HE,this._logHandler=VE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const GE=(t,e)=>e.some(n=>t instanceof n);let ph,mh;function YE(){return ph||(ph=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QE(){return mh||(mh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const py=new WeakMap,Eu=new WeakMap,my=new WeakMap,Zl=new WeakMap,Yc=new WeakMap;function KE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&py.set(n,t)}).catch(()=>{}),Yc.set(e,t),e}function qE(t){if(Eu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Eu.set(t,e)}let Cu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||my.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XE(t){Cu=t(Cu)}function JE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ea(this),e,...n);return my.set(r,e.sort?e.sort():[e]),sn(r)}:QE().includes(t)?function(...e){return t.apply(ea(this),e),sn(py.get(this))}:function(...e){return sn(t.apply(ea(this),e))}}function ZE(t){return typeof t=="function"?JE(t):(t instanceof IDBTransaction&&qE(t),GE(t,YE())?new Proxy(t,Cu):t)}function sn(t){if(t instanceof IDBRequest)return KE(t);if(Zl.has(t))return Zl.get(t);const e=ZE(t);return e!==t&&(Zl.set(t,e),Yc.set(e,t)),e}const ea=t=>Yc.get(t);function eC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=sn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(sn(o.result),a.oldVersion,a.newVersion,sn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const tC=["get","getKey","getAll","getAllKeys","count"],nC=["put","add","delete","clear"],ta=new Map;function gh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ta.get(e))return ta.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=nC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ta.set(e,s),s}XE(t=>({...t,get:(e,n,r)=>gh(e,n)||t.get(e,n,r),has:(e,n)=>!!gh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Su="@firebase/app",yh="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new hy("@firebase/app"),sC="@firebase/app-compat",oC="@firebase/analytics-compat",lC="@firebase/analytics",aC="@firebase/app-check-compat",uC="@firebase/app-check",cC="@firebase/auth",fC="@firebase/auth-compat",dC="@firebase/database",hC="@firebase/data-connect",pC="@firebase/database-compat",mC="@firebase/functions",gC="@firebase/functions-compat",yC="@firebase/installations",_C="@firebase/installations-compat",vC="@firebase/messaging",wC="@firebase/messaging-compat",EC="@firebase/performance",CC="@firebase/performance-compat",SC="@firebase/remote-config",xC="@firebase/remote-config-compat",kC="@firebase/storage",NC="@firebase/storage-compat",IC="@firebase/firestore",TC="@firebase/vertexai-preview",PC="@firebase/firestore-compat",RC="firebase",AC="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="[DEFAULT]",bC={[Su]:"fire-core",[sC]:"fire-core-compat",[lC]:"fire-analytics",[oC]:"fire-analytics-compat",[uC]:"fire-app-check",[aC]:"fire-app-check-compat",[cC]:"fire-auth",[fC]:"fire-auth-compat",[dC]:"fire-rtdb",[hC]:"fire-data-connect",[pC]:"fire-rtdb-compat",[mC]:"fire-fn",[gC]:"fire-fn-compat",[yC]:"fire-iid",[_C]:"fire-iid-compat",[vC]:"fire-fcm",[wC]:"fire-fcm-compat",[EC]:"fire-perf",[CC]:"fire-perf-compat",[SC]:"fire-rc",[xC]:"fire-rc-compat",[kC]:"fire-gcs",[NC]:"fire-gcs-compat",[IC]:"fire-fst",[PC]:"fire-fst-compat",[TC]:"fire-vertex","fire-js":"fire-js",[RC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map,OC=new Map,ku=new Map;function _h(t,e){try{t.container.addComponent(e)}catch(n){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function To(t){const e=t.name;if(ku.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;ku.set(e,t);for(const n of Io.values())_h(n,t);for(const n of OC.values())_h(n,t);return!0}function DC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new fy("app","Firebase",MC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=AC;function gy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw on.create("bad-app-name",{appName:String(i)});if(n||(n=ay()),!n)throw on.create("no-options");const s=Io.get(i);if(s){if(wu(n,s.options)&&wu(r,s.config))return s;throw on.create("duplicate-app",{appName:i})}const o=new WE(i);for(const a of ku.values())o.addComponent(a);const l=new LC(n,r,o);return Io.set(i,l),l}function jC(t=xu){const e=Io.get(t);if(!e&&t===xu&&ay())return gy();if(!e)throw on.create("no-app",{appName:t});return e}function vr(t,e,n){var r;let i=(r=bC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(l.join(" "));return}To(new Gi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="firebase-heartbeat-database",UC=1,Yi="firebase-heartbeat-store";let na=null;function yy(){return na||(na=eC(zC,UC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw on.create("idb-open",{originalErrorMessage:t.message})})),na}async function WC(t){try{const n=(await yy()).transaction(Yi),r=await n.objectStore(Yi).get(_y(t));return await n.done,r}catch(e){if(e instanceof ls)Mt.warn(e.message);else{const n=on.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(n.message)}}}async function vh(t,e){try{const r=(await yy()).transaction(Yi,"readwrite");await r.objectStore(Yi).put(e,_y(t)),await r.done}catch(n){if(n instanceof ls)Mt.warn(n.message);else{const r=on.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mt.warn(r.message)}}}function _y(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=1024,HC=30*24*60*60*1e3;class $C{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=HC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wh(),{heartbeatsToSend:r,unsentEntries:i}=VC(this._heartbeatsCache.heartbeats),s=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mt.warn(n),""}}}function wh(){return new Date().toISOString().substring(0,10)}function VC(t,e=BC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Eh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Eh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TE()?PE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Eh(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){To(new Gi("platform-logger",e=>new rC(e),"PRIVATE")),To(new Gi("heartbeat",e=>new $C(e),"PRIVATE")),vr(Su,yh,t),vr(Su,yh,"esm2017"),vr("fire-js","")}YC("");var QC="firebase",KC="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr(QC,KC,"app");var Ch={};const Sh="@firebase/database",xh="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vy="";function qC(t){vy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Vi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new XC(e)}}catch{}return new JC},Pn=wy("localStorage"),ZC=wy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new hy("@firebase/database"),eS=function(){let t=1;return function(){return t++}}(),Ey=function(t){const e=FE(t),n=new LE;n.update(e);const r=n.digest();return Vc.encodeByteArray(r)},us=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=us.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let Ei=null,kh=!0;const tS=function(t,e){C(!e,"Can't turn on custom loggers persistently."),wr.logLevel=V.VERBOSE,Ei=wr.log.bind(wr)},ke=function(...t){if(kh===!0&&(kh=!1,Ei===null&&ZC.get("logging_enabled")===!0&&tS()),Ei){const e=us.apply(null,t);Ei(e)}},cs=function(t){return function(...e){ke(t,...e)}},Nu=function(...t){const e="FIREBASE INTERNAL ERROR: "+us(...t);wr.error(e)},Lt=function(...t){const e=`FIREBASE FATAL ERROR: ${us(...t)}`;throw wr.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+us(...t);wr.warn(e)},nS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Or="[MIN_NAME]",Bn="[MAX_NAME]",Wr=function(t,e){if(t===e)return 0;if(t===Or||e===Bn)return-1;if(e===Or||t===Bn)return 1;{const n=Nh(t),r=Nh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},iS=function(t,e){return t===e?0:t<e?-1:1},ei=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},Qc=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=Qc(t[e[r]]);return n+="}",n},Sy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xy=function(t){C(!Cy(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(f.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},sS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},oS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const aS=new RegExp("^-?(0*)\\d{1,10}$"),uS=-2147483648,cS=2147483647,Nh=function(t){if(aS.test(t)){const e=Number(t);if(e>=uS&&e<=cS)return e}return null},Br=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},fS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ci=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class qs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="5",ky="v",Ny="s",Iy="r",Ty="f",Py=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ry="ls",Ay="p",Iu="ac",by="websocket",Oy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function My(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===by)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Oy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pS(t)&&(n.ns=t.namespace);const i=[];return ze(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(){this.counters_={}}incrementCounter(e,n=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return yE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra={},ia={};function qc(t){const e=t.toString();return ra[e]||(ra[e]=new mS),ra[e]}function gS(t,e){const n=t.toString();return ia[n]||(ia[n]=e()),ia[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Br(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="start",_S="close",vS="pLPCommand",wS="pRTLPCB",Ly="id",Fy="pw",jy="ser",ES="cb",CS="seg",SS="ts",xS="d",kS="dframe",zy=1870,Uy=30,NS=zy-Uy,IS=25e3,TS=3e4;class fr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=cs(e),this.stats_=qc(n),this.urlFn=a=>(this.appCheckToken&&(a[Iu]=this.appCheckToken),My(n,Oy,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TS)),rS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xc((...s)=>{const[o,l,a,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ih)this.id=l,this.password=a;else if(o===_S)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ih]="t",r[jy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ES]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ky]=Kc,this.transportSessionId&&(r[Ny]=this.transportSessionId),this.lastSessionId&&(r[Ry]=this.lastSessionId),this.applicationId&&(r[Ay]=this.applicationId),this.appCheckToken&&(r[Iu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Py.test(location.hostname)&&(r[Iy]=Ty);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fr.forceAllow_=!0}static forceDisallow(){fr.forceDisallow_=!0}static isAvailable(){return fr.forceAllow_?!0:!fr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sS()&&!oS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sy(n),i=Sy(r,NS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[kS]="t",r[Ly]=e,r[Fy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=eS(),window[vS+this.uniqueCallbackIdentifier]=e,window[wS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ke("frame writing exception"),l.stack&&ke(l.stack),ke(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ly]=this.myID,e[Fy]=this.myPW,e[jy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Uy+r.length<=zy;){const o=this.pendingSegs.shift();r=r+"&"+CS+i+"="+o.seg+"&"+SS+i+"="+o.ts+"&"+xS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(IS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=16384,RS=45e3;let Po=null;typeof MozWebSocket<"u"?Po=MozWebSocket:typeof WebSocket<"u"&&(Po=WebSocket);class ot{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=cs(this.connId),this.stats_=qc(n),this.connURL=ot.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[ky]=Kc,typeof location<"u"&&location.hostname&&Py.test(location.hostname)&&(o[Iy]=Ty),n&&(o[Ny]=n),r&&(o[Ry]=r),i&&(o[Iu]=i),s&&(o[Ay]=s),My(e,by,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pn.set("previous_websocket_failure",!0);try{let r;cy(),this.mySock=new Po(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Po!==null&&!ot.forceDisallow_}static previouslyFailed(){return Pn.isInMemoryStorage||Pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Vi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Sy(n,PS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fr,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let r=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ot];else{const i=this.transports_=[];for(const s of Qi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=6e4,bS=5e3,OS=10*1024,DS=100*1024,sa="t",Th="d",MS="s",Ph="r",LS="e",Rh="o",Ah="a",bh="n",Oh="p",FS="h";class jS{constructor(e,n,r,i,s,o,l,a,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=cs("c:"+this.id+":"),this.transportManager_=new Qi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ci(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>DS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>OS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sa in e){const n=e[sa];n===Ah?this.upgradeIfSecondaryHealthy_():n===Ph?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ei("t",e),r=ei("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Oh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ah,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ei("t",e),r=ei("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ei(sa,e);if(Th in e){const r=e[Th];if(n===FS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===bh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===MS?this.onConnectionShutdown_(r):n===Ph?this.onReset_(r):n===LS?Nu("Server Error: "+r):n===Rh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kc!==r&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ci(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ci(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Oh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends By{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!uy()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ro}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=32,Mh=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new $("")}function D(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function Hy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $y(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=D(t),r=D(e);if(n===null)return e;if(n===r)return Oe(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Jc(t,e){if(hn(t)!==hn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(hn(t)>hn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class US{constructor(e,n){this.errorPrefix_=n,this.parts_=$y(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ul(this.parts_[r]);Gy(this)}}function WS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ul(e),Gy(t)}function BS(t){const e=t.parts_.pop();t.byteLength_-=ul(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gy(t){if(t.byteLength_>Mh)throw new Error(t.errorPrefix_+"has a key path longer than "+Mh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Dh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dh+") or object contains a cycle "+xn(t))}function xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends By{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Zc}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=1e3,HS=60*5*1e3,Lh=30*1e3,$S=1.3,VS=3e4,GS="server_kill",Fh=3;class Tt extends Wy{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Tt.nextPersistentConnectionId_++,this.log_=cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ti,this.maxReconnectDelay_=HS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!cy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ro.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new al,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Tt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ut(e,"w")){const r=br(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||DE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=OE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nu("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ti,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ti,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>VS&&(this.reconnectDelay_=ti),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$S)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new jS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{je(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(GS)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&je(c),a())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dh(this.interruptReasons_)&&(this.reconnectDelay_=ti,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Qc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fh&&(this.reconnectDelay_=Lh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vy.replace(/\./g,"-")]=1,uy()?e["framework.cordova"]=1:IE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ro.getInstance().currentlyOnline();return dh(this.interruptReasons_)&&e}}Tt.nextPersistentConnectionId_=0;Tt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new M(Or,e),i=new M(Or,n);return this.compare(r,i)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds;class Yy extends cl{static get __EMPTY_NODE(){return Ds}static set __EMPTY_NODE(e){Ds=e}compare(e,n){return Wr(e.name,n.name)}isDefinedOn(e){throw Ur("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M(Bn,Ds)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Ds)}toString(){return".key"}}const Er=new Yy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??me.RED,this.left=i??De.EMPTY_NODE,this.right=s??De.EMPTY_NODE}copy(e,n,r,i,s){return new me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class YS{copy(e,n,r,i,s){return this}insert(e,n,r){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ms(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new YS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e){return Wr(t.name,e.name)}function ef(t,e){return Wr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu;function KS(t){Tu=t}const Qy=function(t){return typeof t=="number"?"number:"+xy(t):"string:"+t},Ky=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else C(t===Tu||t.isEmpty(),"priority of unexpected type.");C(t===Tu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh;class he{constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ky(this.priorityNode_)}static set __childrenNodeConstructor(e){jh=e}static get __childrenNodeConstructor(){return jh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:D(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=D(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xy(this.value_):e+=this.value_,this.lazyHash_=Ey(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),s=he.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qy,Xy;function qS(t){qy=t}function XS(t){Xy=t}class JS extends cl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Wr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Bn,new he("[PRIORITY-POST]",Xy))}makePost(e,n){const r=qy(e);return new M(n,new he("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new JS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=Math.log(2);class ex{constructor(e){const n=s=>parseInt(Math.log(s)/ZS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ao=function(t,e,n,r){t.sort(e);const i=function(a,u){const f=u-a;let c,d;if(f===0)return null;if(f===1)return c=t[a],d=n?n(c):c,new me(d,c.node,me.BLACK,null,null);{const g=parseInt(f/2,10)+a,y=i(a,g),v=i(g+1,u);return c=t[g],d=n?n(c):c,new me(d,c.node,me.BLACK,y,v)}},s=function(a){let u=null,f=null,c=t.length;const d=function(y,v){const N=c-y,p=c;c-=y;const h=i(N+1,p),m=t[N],w=n?n(m):m;g(new me(w,m.node,v,null,h))},g=function(y){u?(u.left=y,u=y):(f=y,u=y)};for(let y=0;y<a.count;++y){const v=a.nextBitIsOne(),N=Math.pow(2,a.count-(y+1));v?d(N,me.BLACK):(d(N,me.BLACK),d(N,me.RED))}return f},o=new ex(t.length),l=s(o);return new De(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;const qn={};class Nt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(qn&&ie,"ChildrenNode.ts has not been loaded"),oa=oa||new Nt({".priority":qn},{".priority":ie}),oa}get(e){const n=br(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Er,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(M.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Ao(r,e.getCompare()):l=qn;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const f=Object.assign({},this.indexes_);return f[a]=l,new Nt(f,u)}addToIndexes(e,n){const r=No(this.indexes_,(i,s)=>{const o=br(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===qn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(M.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Ao(l,o.getCompare())}else return qn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new M(e.name,l))),a.insert(e,e.node)}});return new Nt(r,this.indexSet_)}removeFromIndexes(e,n){const r=No(this.indexes_,i=>{if(i===qn)return i;{const s=n.get(e.name);return s?i.remove(new M(e.name,s)):i}});return new Nt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ky(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ni||(ni=new A(new De(ef),null,Nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ni}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ni:n}}getChild(e){const n=D(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new M(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ni:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=D(e);if(r===null)return n;{C(D(e)!==".priority"||hn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qy(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ey(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new M(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fs?-1:0}withIndex(e){if(e===Er||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Er||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Er?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tx extends A{constructor(){super(new De(ef),A.EMPTY_NODE,Nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const fs=new tx;Object.defineProperties(M,{MIN:{value:new M(Or,A.EMPTY_NODE)},MAX:{value:new M(Bn,fs)}});Yy.__EMPTY_NODE=A.EMPTY_NODE;he.__childrenNodeConstructor=A;KS(fs);XS(fs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=!0;function ve(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,ve(e))}if(!(t instanceof Array)&&nx){const n=[];let r=!1;if(ze(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new M(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=Ao(n,QS,o=>o.name,ef);if(r){const o=Ao(n,ie.getCompare());return new A(s,ve(e),new Nt({".priority":o},{".priority":ie}))}else return new A(s,ve(e),Nt.Default)}else{let n=A.EMPTY_NODE;return ze(t,(r,i)=>{if(Ut(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}qS(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx extends cl{constructor(e){super(),this.indexPath_=e,C(!F(e)&&D(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Wr(e.name,n.name):s}makePost(e,n){const r=ve(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new M(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,fs);return new M(Bn,e)}toString(){return $y(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix extends cl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Wr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const r=ve(e);return new M(n,r)}toString(){return".value"}}const sx=new ix;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t){return{type:"value",snapshotNode:t}}function Dr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ki(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ox(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ki(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Dr(n,r)):o.trackChildChange(qi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ki(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(qi(i,s,o))}else r.trackChildChange(Dr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.indexedFilter_=new tf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xi.getStartPost_(e),this.endPost_=Xi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new M(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,l)=>{s.matches(new M(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Xi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new M(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,g)=>c(g,d)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new M(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(f&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(qi(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ki(n,c));const v=l.updateImmediateChild(n,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Dr(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:f&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ki(u.name,u.node)),s.trackChildChange(Dr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Or}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new nf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ax(t){return t.loadsAllData()?new tf(t.getIndex()):t.hasLimit()?new lx(t):new Xi(t)}function zh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===sx?n="$value":t.index_===Er?n="$key":(C(t.index_ instanceof rx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Uh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Wy{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=cs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=bo.getListenId_(e,r),l={};this.listens_[o]=l;const a=zh(e._queryParams);this.restRequest_(s+".json",a,(u,f)=>{let c=f;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),br(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=bo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=zh(e._queryParams),r=e._path.toString(),i=new al;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ME(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Vi(l.responseText)}catch{je("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(){return{value:null,children:new Map}}function Zy(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=D(e);t.children.has(r)||t.children.set(r,Oo());const i=t.children.get(r);e=G(e),Zy(i,e,n)}}function Pu(t,e,n){t.value!==null?n(e,t.value):cx(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Pu(i,s,n)})}function cx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ze(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=10*1e3,dx=30*1e3,hx=5*60*1e3;class px{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fx(e);const r=Wh+(dx-Wh)*Math.random();Ci(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ze(e,(i,s)=>{s>0&&Ut(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ci(this.reportStats_.bind(this),Math.floor(Math.random()*2*hx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function e_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=at.ACK_USER_WRITE,this.source=e_()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new Do(W(),n,this.revert)}}else return C(D(this.path)===e,"operationForChild called for unrelated child."),new Do(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.source=e,this.path=n,this.type=at.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new Ji(this.source,W()):new Ji(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=at.OVERWRITE}operationForChild(e){return F(this.path)?new Hn(this.source,W(),this.snap.getImmediateChild(e)):new Hn(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=at.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Hn(this.source,W(),n.value):new Zi(this.source,W(),n)}else return C(D(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zi(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=D(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ox(o.childName,o.snapshotNode))}),ri(t,i,"child_removed",e,r,n),ri(t,i,"child_added",e,r,n),ri(t,i,"child_moved",s,r,n),ri(t,i,"child_changed",e,r,n),ri(t,i,"value",e,r,n),i}function ri(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>_x(t,l,a)),o.forEach(l=>{const a=yx(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function yx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function _x(t,e,n){if(e.childName==null||n.childName==null)throw Ur("Should only compare child_ events.");const r=new M(e.childName,e.snapshotNode),i=new M(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t,e){return{eventCache:t,serverCache:e}}function Si(t,e,n,r){return fl(new $n(e,n,r),t.serverCache)}function t_(t,e,n,r){return fl(t.eventCache,new $n(e,n,r))}function Ru(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Vn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la;const vx=()=>(la||(la=new De(iS)),la);class K{constructor(e,n=vx()){this.value=e,this.children=n}static fromObject(e){let n=new K(null);return ze(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(F(e))return null;{const r=D(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:ce(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=D(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new K(null)}}set(e,n){if(F(e))return new K(n,this.children);{const r=D(e),s=(this.children.get(r)||new K(null)).set(G(e),n),o=this.children.insert(r,s);return new K(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const n=D(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new K(null):new K(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=D(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(F(e))return n;{const r=D(e),s=(this.children.get(r)||new K(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new K(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=D(e),o=this.children.get(s);return o?o.findOnPath_(G(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=D(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),ce(n,i),r):new K(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new K(null))}}function xi(t,e,n){if(F(e))return new ft(new K(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Oe(i,e);return s=s.updateChild(o,n),new ft(t.writeTree_.set(i,s))}else{const i=new K(n),s=t.writeTree_.setTree(e,i);return new ft(s)}}}function Bh(t,e,n){let r=t;return ze(n,(i,s)=>{r=xi(r,ce(e,i),s)}),r}function Hh(t,e){if(F(e))return ft.empty();{const n=t.writeTree_.setTree(e,new K(null));return new ft(n)}}function Au(t,e){return Qn(t,e)!=null}function Qn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function $h(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new M(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new M(r,i.value))}),e}function ln(t,e){if(F(e))return t;{const n=Qn(t,e);return n!=null?new ft(new K(n)):new ft(t.writeTree_.subtree(e))}}function bu(t){return t.writeTree_.isEmpty()}function Mr(t,e){return n_(W(),t.writeTree_,e)}function n_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=n_(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e){return o_(e,t)}function wx(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=xi(t.visibleWrites,e,n)),t.lastWriteId=r}function Ex(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Cx(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Sx(l,r.path)?i=!1:lt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return xx(t),!0;if(r.snap)t.visibleWrites=Hh(t.visibleWrites,r.path);else{const l=r.children;ze(l,a=>{t.visibleWrites=Hh(t.visibleWrites,ce(r.path,a))})}return!0}else return!1}function Sx(t,e){if(t.snap)return lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lt(ce(t.path,n),e))return!0;return!1}function xx(t){t.visibleWrites=r_(t.allWrites,kx,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function kx(t){return t.visible}function r_(t,e,n){let r=ft.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)lt(n,o)?(l=Oe(n,o),r=xi(r,l,s.snap)):lt(o,n)&&(l=Oe(o,n),r=xi(r,W(),s.snap.getChild(l)));else if(s.children){if(lt(n,o))l=Oe(n,o),r=Bh(r,l,s.children);else if(lt(o,n))if(l=Oe(o,n),F(l))r=Bh(r,W(),s.children);else{const a=br(s.children,D(l));if(a){const u=a.getChild(G(l));r=xi(r,W(),u)}}}else throw Ur("WriteRecord should have .snap or .children")}}return r}function i_(t,e,n,r,i){if(!r&&!i){const s=Qn(t.visibleWrites,e);if(s!=null)return s;{const o=ln(t.visibleWrites,e);if(bu(o))return n;if(n==null&&!Au(o,W()))return null;{const l=n||A.EMPTY_NODE;return Mr(o,l)}}}else{const s=ln(t.visibleWrites,e);if(!i&&bu(s))return n;if(!i&&n==null&&!Au(s,W()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(lt(u.path,e)||lt(e,u.path))},l=r_(t.allWrites,o,e),a=n||A.EMPTY_NODE;return Mr(l,a)}}}function Nx(t,e,n){let r=A.EMPTY_NODE;const i=Qn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ln(t.visibleWrites,e);return n.forEachChild(ie,(o,l)=>{const a=Mr(ln(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),$h(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ln(t.visibleWrites,e);return $h(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Ix(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(Au(t.visibleWrites,s))return null;{const o=ln(t.visibleWrites,s);return bu(o)?i.getChild(n):Mr(o,i.getChild(n))}}function Tx(t,e,n,r){const i=ce(e,n),s=Qn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ln(t.visibleWrites,i);return Mr(o,r.getNode().getImmediateChild(n))}else return null}function Px(t,e){return Qn(t.visibleWrites,e)}function Rx(t,e,n,r,i,s,o){let l;const a=ln(t.visibleWrites,e),u=Qn(a,W());if(u!=null)l=u;else if(n!=null)l=Mr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=d.getNext();for(;g&&f.length<i;)c(g,r)!==0&&f.push(g),g=d.getNext();return f}else return[]}function Ax(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function Mo(t,e,n,r){return i_(t.writeTree,t.treePath,e,n,r)}function lf(t,e){return Nx(t.writeTree,t.treePath,e)}function Vh(t,e,n,r){return Ix(t.writeTree,t.treePath,e,n,r)}function Lo(t,e){return Px(t.writeTree,ce(t.treePath,e))}function bx(t,e,n,r,i,s){return Rx(t.writeTree,t.treePath,e,n,r,i,s)}function af(t,e,n){return Tx(t.writeTree,t.treePath,e,n)}function s_(t,e){return o_(ce(t.treePath,e),t.writeTree)}function o_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,qi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ki(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Dr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,qi(r,e.snapshotNode,i.oldSnap));else throw Ur("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const l_=new Dx;class uf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return af(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vn(this.viewCache_),s=bx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t){return{filter:t}}function Lx(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fx(t,e,n,r,i){const s=new Ox;let o,l;if(n.type===at.OVERWRITE){const u=n;u.source.fromUser?o=Ou(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=Fo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===at.MERGE){const u=n;u.source.fromUser?o=zx(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Du(t,e,u.path,u.children,r,i,l,s))}else if(n.type===at.ACK_USER_WRITE){const u=n;u.revert?o=Bx(t,e,u.path,r,i,s):o=Ux(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===at.LISTEN_COMPLETE)o=Wx(t,e,n.path,r,s);else throw Ur("Unknown operation type: "+n.type);const a=s.getChanges();return jx(e,o,a),{viewCache:o,changes:a}}function jx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ru(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Jy(Ru(e)))}}function a_(t,e,n,r,i,s){const o=e.eventCache;if(Lo(r,n)!=null)return e;{let l,a;if(F(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Vn(e),f=u instanceof A?u:A.EMPTY_NODE,c=lf(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Mo(r,Vn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=D(n);if(u===".priority"){C(hn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const c=Vh(r,n,f,a);c!=null?l=t.filter.updatePriority(f,c):l=o.getNode()}else{const f=G(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=Vh(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(f,d):c=o.getNode().getImmediateChild(u)}else c=af(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,f,i,s):l=o.getNode()}}return Si(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function Fo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=f.updateFullNode(a.getNode(),g,null)}else{const g=D(n);if(!a.isCompleteForPath(n)&&hn(n)>1)return e;const y=G(n),N=a.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?u=f.updatePriority(a.getNode(),N):u=f.updateChild(a.getNode(),g,N,y,l_,null)}const c=t_(e,u,a.isFullyInitialized()||F(n),f.filtersNodes()),d=new uf(i,c,s);return a_(t,c,n,i,d,l)}function Ou(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const f=new uf(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Si(e,u,!0,t.filter.filtersNodes());else{const c=D(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Si(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=G(n),g=l.getNode().getImmediateChild(c);let y;if(F(d))y=r;else{const v=f.getCompleteChild(c);v!=null?Hy(d)===".priority"&&v.getChild(Vy(d)).isEmpty()?y=v:y=v.updateChild(d,r):y=A.EMPTY_NODE}if(g.equals(y))a=e;else{const v=t.filter.updateChild(l.getNode(),c,y,d,f,o);a=Si(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Gh(t,e){return t.eventCache.isCompleteForChild(e)}function zx(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const f=ce(n,a);Gh(e,D(f))&&(l=Ou(t,l,f,u,i,s,o))}),r.foreach((a,u)=>{const f=ce(n,a);Gh(e,D(f))||(l=Ou(t,l,f,u,i,s,o))}),l}function Yh(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Du(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;F(n)?u=r:u=new K(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(f.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),y=Yh(t,g,d);a=Fo(t,a,new $(c),y,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const g=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!f.hasChild(c)&&!g){const y=e.serverCache.getNode().getImmediateChild(c),v=Yh(t,y,d);a=Fo(t,a,new $(c),v,i,s,o,l)}}),a}function Ux(t,e,n,r,i,s,o){if(Lo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Fo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(F(n)){let u=new K(null);return a.getNode().forEachChild(Er,(f,c)=>{u=u.set(new $(f),c)}),Du(t,e,n,u,i,s,l,o)}else return e}else{let u=new K(null);return r.foreach((f,c)=>{const d=ce(n,f);a.isCompleteForPath(d)&&(u=u.set(f,a.getNode().getChild(d)))}),Du(t,e,n,u,i,s,l,o)}}function Wx(t,e,n,r,i){const s=e.serverCache,o=t_(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return a_(t,o,n,r,l_,i)}function Bx(t,e,n,r,i,s){let o;if(Lo(r,n)!=null)return e;{const l=new uf(r,e,i),a=e.eventCache.getNode();let u;if(F(n)||D(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Mo(r,Vn(e));else{const c=e.serverCache.getNode();C(c instanceof A,"serverChildren would be complete if leaf node"),f=lf(r,c)}f=f,u=t.filter.updateFullNode(a,f,s)}else{const f=D(n);let c=af(r,f,e.serverCache);c==null&&e.serverCache.isCompleteForChild(f)&&(c=a.getImmediateChild(f)),c!=null?u=t.filter.updateChild(a,f,c,G(n),l,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(a,f,A.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mo(r,Vn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Lo(r,W())!=null,Si(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new tf(r.getIndex()),s=ax(r);this.processor_=Mx(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),f=new $n(a,o.isFullyInitialized(),i.filtersNodes()),c=new $n(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=fl(c,f),this.eventGenerator_=new mx(this.query_)}get query(){return this.query_}}function $x(t){return t.viewCache_.serverCache.getNode()}function Vx(t,e){const n=Vn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(D(e)).isEmpty())?n.getChild(e):null}function Qh(t){return t.eventRegistrations_.length===0}function Gx(t,e){t.eventRegistrations_.push(e)}function Kh(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function qh(t,e,n,r){e.type===at.MERGE&&e.source.queryId!==null&&(C(Vn(t.viewCache_),"We should always have a full cache before handling merges"),C(Ru(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Fx(t.processor_,i,e,n,r);return Lx(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,u_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Yx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(Dr(s,o))}),n.isFullyInitialized()&&r.push(Jy(n.getNode())),u_(t,r,n.getNode(),e)}function u_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return gx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;class Qx{constructor(){this.views=new Map}}function Kx(t){C(!jo,"__referenceConstructor has already been defined"),jo=t}function qx(){return C(jo,"Reference.ts has not been loaded"),jo}function Xx(t){return t.views.size===0}function cf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),qh(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qh(o,e,n,r));return s}}function Jx(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Mo(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=lf(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=fl(new $n(l,a,!1),new $n(r,i,!1));return new Hx(e,u)}return o}function Zx(t,e,n,r,i,s){const o=Jx(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Gx(o,n),Yx(o,n)}function ek(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=pn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Kh(u,n,r)),Qh(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Kh(a,n,r)),Qh(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!pn(t)&&s.push(new(qx())(e._repo,e._path)),{removed:s,events:o}}function c_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cr(t,e){let n=null;for(const r of t.views.values())n=n||Vx(r,e);return n}function f_(t,e){if(e._queryParams.loadsAllData())return dl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function d_(t,e){return f_(t,e)!=null}function pn(t){return dl(t)!=null}function dl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo;function tk(t){C(!zo,"__referenceConstructor has already been defined"),zo=t}function nk(){return C(zo,"Reference.ts has not been loaded"),zo}let rk=1;class Xh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=Ax(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function h_(t,e,n,r,i){return wx(t.pendingWriteTree_,e,n,r,i),i?ds(t,new Hn(e_(),e,n)):[]}function Rn(t,e,n=!1){const r=Ex(t.pendingWriteTree_,e);if(Cx(t.pendingWriteTree_,e)){let s=new K(null);return r.snap!=null?s=s.set(W(),!0):ze(r.children,o=>{s=s.set(new $(o),!0)}),ds(t,new Do(r.path,s,n))}else return[]}function hl(t,e,n){return ds(t,new Hn(rf(),e,n))}function ik(t,e,n){const r=K.fromObject(n);return ds(t,new Zi(rf(),e,r))}function sk(t,e){return ds(t,new Ji(rf(),e))}function ok(t,e,n){const r=df(t,n);if(r){const i=hf(r),s=i.path,o=i.queryId,l=Oe(s,e),a=new Ji(sf(o),l);return pf(t,s,a)}else return[]}function Mu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||d_(o,e))){const a=ek(o,e,n,r);Xx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,g)=>pn(g));if(f&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const g=uk(d);for(let y=0;y<g.length;++y){const v=g[y],N=v.query,p=g_(t,v);t.listenProvider_.startListening(ki(N),Uo(t,N),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(ki(e),null):u.forEach(d=>{const g=t.queryToTagMap.get(pl(d));t.listenProvider_.stopListening(ki(d),g)}))}ck(t,u)}return l}function lk(t,e,n,r){const i=df(t,r);if(i!=null){const s=hf(i),o=s.path,l=s.queryId,a=Oe(o,e),u=new Hn(sf(l),a,n);return pf(t,o,u)}else return[]}function ak(t,e,n,r){const i=df(t,r);if(i){const s=hf(i),o=s.path,l=s.queryId,a=Oe(o,e),u=K.fromObject(n),f=new Zi(sf(l),a,u);return pf(t,o,f)}else return[]}function Jh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const y=Oe(d,i);s=s||Cr(g,y),o=o||pn(g)});let l=t.syncPointTree_.get(i);l?(o=o||pn(l),s=s||Cr(l,W())):(l=new Qx,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,y)=>{const v=Cr(y,W());v&&(s=s.updateImmediateChild(g,v))}));const u=d_(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=pl(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=fk();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const f=of(t.pendingWriteTree_,i);let c=Zx(l,e,n,f,s,a);if(!u&&!o&&!r){const d=f_(l,e);c=c.concat(dk(t,e,d))}return c}function ff(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Oe(o,e),u=Cr(l,a);if(u)return u});return i_(i,e,s,n,!0)}function ds(t,e){return p_(e,t.syncPointTree_,null,of(t.pendingWriteTree_,W()))}function p_(t,e,n,r){if(F(t.path))return m_(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=Cr(i,W()));let s=[];const o=D(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,f=s_(r,o);s=s.concat(p_(l,a,u,f))}return i&&(s=s.concat(cf(i,t,r,n))),s}}function m_(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=Cr(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=s_(r,o),f=t.operationForChild(o);f&&(s=s.concat(m_(f,l,a,u)))}),i&&(s=s.concat(cf(i,t,r,n))),s}function g_(t,e){const n=e.query,r=Uo(t,n);return{hashFn:()=>($x(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ok(t,n._path,r):sk(t,n._path);{const s=lS(i,n);return Mu(t,n,null,s)}}}}function Uo(t,e){const n=pl(e);return t.queryToTagMap.get(n)}function pl(t){return t._path.toString()+"$"+t._queryIdentifier}function df(t,e){return t.tagToQueryMap.get(e)}function hf(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function pf(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=of(t.pendingWriteTree_,e);return cf(r,n,i,null)}function uk(t){return t.fold((e,n,r)=>{if(n&&pn(n))return[dl(n)];{let i=[];return n&&(i=c_(n)),ze(r,(s,o)=>{i=i.concat(o)}),i}})}function ki(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nk())(t._repo,t._path):t}function ck(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=pl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function fk(){return rk++}function dk(t,e,n){const r=e._path,i=Uo(t,e),s=g_(t,n),o=t.listenProvider_.startListening(ki(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!pn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,f,c)=>{if(!F(u)&&f&&pn(f))return[dl(f).query];{let d=[];return f&&(d=d.concat(c_(f).map(g=>g.query))),ze(c,(g,y)=>{d=d.concat(y)}),d}});for(let u=0;u<a.length;++u){const f=a[u];t.listenProvider_.stopListening(ki(f),Uo(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new mf(n)}node(){return this.node_}}class gf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new gf(this.syncTree_,n)}node(){return ff(this.syncTree_,this.path_)}}const hk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Zh=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mk(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},mk=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},gk=function(t,e,n,r){return yf(e,new gf(n,t),r)},y_=function(t,e,n){return yf(t,new mf(e),n)};function yf(t,e,n){const r=t.getPriority().val(),i=Zh(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Zh(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new he(i))),o.forEachChild(ie,(l,a)=>{const u=yf(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function vf(t,e){let n=e instanceof $?e:new $(e),r=t,i=D(n);for(;i!==null;){const s=br(r.node.children,i)||{children:{},childCount:0};r=new _f(i,r,s),n=G(n),i=D(n)}return r}function Hr(t){return t.node.value}function __(t,e){t.node.value=e,Lu(t)}function v_(t){return t.node.childCount>0}function yk(t){return Hr(t)===void 0&&!v_(t)}function ml(t,e){ze(t.node.children,(n,r)=>{e(new _f(n,t,r))})}function w_(t,e,n,r){n&&!r&&e(t),ml(t,i=>{w_(i,e,!0,r)}),n&&r&&e(t)}function _k(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function hs(t){return new $(t.parent===null?t.name:hs(t.parent)+"/"+t.name)}function Lu(t){t.parent!==null&&vk(t.parent,t.name,t)}function vk(t,e,n){const r=yk(n),i=Ut(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Lu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Lu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=/[\[\].#$\/\u0000-\u001F\u007F]/,Ek=/[\[\].#$\u0000-\u001F\u007F]/,aa=10*1024*1024,E_=function(t){return typeof t=="string"&&t.length!==0&&!wk.test(t)},C_=function(t){return typeof t=="string"&&t.length!==0&&!Ek.test(t)},Ck=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),C_(t)},Sk=function(t,e,n,r){wf(Gc(t,"value"),e,n)},wf=function(t,e,n){const r=n instanceof $?new US(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xn(r));if(typeof e=="function")throw new Error(t+"contains a function "+xn(r)+" with contents = "+e.toString());if(Cy(e))throw new Error(t+"contains "+e.toString()+" "+xn(r));if(typeof e=="string"&&e.length>aa/3&&ul(e)>aa)throw new Error(t+"contains a string greater than "+aa+" utf8 bytes "+xn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ze(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!E_(o)))throw new Error(t+" contains an invalid key ("+o+") "+xn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WS(r,o),wf(t,l,r),BS(r)}),i&&s)throw new Error(t+' contains ".value" child '+xn(r)+" in addition to actual children.")}},S_=function(t,e,n,r){if(!C_(n))throw new Error(Gc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),S_(t,e,n)},kk=function(t,e){if(D(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Nk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!E_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ck(n))throw new Error(Gc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ef(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Jc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function x_(t,e,n){Ef(t,n),k_(t,r=>Jc(r,e))}function Ft(t,e,n){Ef(t,n),k_(t,r=>lt(r,e)||lt(e,r))}function k_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Tk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Tk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ei&&ke("event: "+n.toString()),Br(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="repo_interrupt",Rk=25;class Ak{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ik,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oo(),this.transactionQueueTree_=new _f,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bk(t,e,n){if(t.stats_=qc(t.repoInfo_),t.forceRestClient_||fS())t.server_=new bo(t.repoInfo_,(r,i,s,o)=>{ep(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>tp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Tt(t.repoInfo_,e,(r,i,s,o)=>{ep(t,r,i,s,o)},r=>{tp(t,r)},r=>{Dk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=gS(t.repoInfo_,()=>new px(t.stats_,t.server_)),t.infoData_=new ux,t.infoSyncTree_=new Xh({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=hl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Sf(t,"connected",!1),t.serverSyncTree_=new Xh({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ft(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Ok(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Cf(t){return hk({timestamp:Ok(t)})}function ep(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=No(n,u=>ve(u));o=ak(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=lk(t.serverSyncTree_,s,a,i)}else if(r){const a=No(n,u=>ve(u));o=ik(t.serverSyncTree_,s,a)}else{const a=ve(n);o=hl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=gl(t,s)),Ft(t.eventQueue_,l,o)}function tp(t,e){Sf(t,"connected",e),e===!1&&Lk(t)}function Dk(t,e){ze(e,(n,r)=>{Sf(t,n,r)})}function Sf(t,e,n){const r=new $("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=hl(t.infoSyncTree_,r,i);Ft(t.eventQueue_,r,s)}function N_(t){return t.nextWriteId_++}function Mk(t,e,n,r,i){xf(t,"set",{path:e.toString(),value:n,priority:r});const s=Cf(t),o=ve(n,r),l=ff(t.serverSyncTree_,e),a=y_(o,l,s),u=N_(t),f=h_(t.serverSyncTree_,e,a,u,!0);Ef(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const y=d==="ok";y||je("set at "+e+" failed: "+d);const v=Rn(t.serverSyncTree_,u,!y);Ft(t.eventQueue_,e,v),zk(t,i,d,g)});const c=A_(t,e);gl(t,c),Ft(t.eventQueue_,c,[])}function Lk(t){xf(t,"onDisconnectEvents");const e=Cf(t),n=Oo();Pu(t.onDisconnect_,W(),(i,s)=>{const o=gk(i,s,t.serverSyncTree_,e);Zy(n,i,o)});let r=[];Pu(n,W(),(i,s)=>{r=r.concat(hl(t.serverSyncTree_,i,s));const o=A_(t,i);gl(t,o)}),t.onDisconnect_=Oo(),Ft(t.eventQueue_,W(),r)}function Fk(t,e,n){let r;D(e._path)===".info"?r=Jh(t.infoSyncTree_,e,n):r=Jh(t.serverSyncTree_,e,n),x_(t.eventQueue_,e._path,r)}function np(t,e,n){let r;D(e._path)===".info"?r=Mu(t.infoSyncTree_,e,n):r=Mu(t.serverSyncTree_,e,n),x_(t.eventQueue_,e._path,r)}function jk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Pk)}function xf(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function zk(t,e,n,r){e&&Br(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function I_(t,e,n){return ff(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function kf(t,e=t.transactionQueueTree_){if(e||yl(t,e),Hr(e)){const n=P_(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Uk(t,hs(e),n)}else v_(e)&&ml(e,n=>{kf(t,n)})}function Uk(t,e,n){const r=n.map(u=>u.currentWriteId),i=I_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];C(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const c=Oe(e,f.path);s=s.updateChild(c,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{xf(t,"transaction put response",{path:a.toString(),status:u});let f=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(Rn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();yl(t,vf(t.transactionQueueTree_,e)),kf(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,f);for(let d=0;d<c.length;d++)Br(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{je("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}gl(t,e)}},o)}function gl(t,e){const n=T_(t,e),r=hs(n),i=P_(t,n);return Wk(t,i,r),r}function Wk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Oe(n,a.path);let f=!1,c;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,c=a.abortReason,i=i.concat(Rn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Rk)f=!0,c="maxretry",i=i.concat(Rn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=I_(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){wf("transaction failed: Data returned ",g,a.path);let y=ve(g);typeof g=="object"&&g!=null&&Ut(g,".priority")||(y=y.updatePriority(d.getPriority()));const N=a.currentWriteId,p=Cf(t),h=y_(y,d,p);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=h,a.currentWriteId=N_(t),o.splice(o.indexOf(N),1),i=i.concat(h_(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(Rn(t.serverSyncTree_,N,!0))}else f=!0,c="nodata",i=i.concat(Rn(t.serverSyncTree_,a.currentWriteId,!0))}Ft(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}yl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Br(r[l]);kf(t,t.transactionQueueTree_)}function T_(t,e){let n,r=t.transactionQueueTree_;for(n=D(e);n!==null&&Hr(r)===void 0;)r=vf(r,n),e=G(e),n=D(e);return r}function P_(t,e){const n=[];return R_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function R_(t,e,n){const r=Hr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ml(e,i=>{R_(t,i,n)})}function yl(t,e){const n=Hr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,__(e,n.length>0?n:void 0)}ml(e,r=>{yl(t,r)})}function A_(t,e){const n=hs(T_(t,e)),r=vf(t.transactionQueueTree_,e);return _k(r,i=>{ua(t,i)}),ua(t,r),w_(r,i=>{ua(t,i)}),n}function ua(t,e){const n=Hr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Rn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?__(e,void 0):n.length=s+1,Ft(t.eventQueue_,hs(e),i);for(let o=0;o<r.length;o++)Br(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Hk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const rp=function(t,e){const n=$k(t),r=n.namespace;n.domain==="firebase.com"&&Lt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Dy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},$k=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(f,c)),f<c&&(i=Bk(t.substring(f,c)));const d=Hk(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class Gk{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:Hy(this._path)}get ref(){return new _n(this._repo,this._path)}get _queryIdentifier(){const e=Uh(this._queryParams),n=Qc(e);return n==="{}"?"default":n}get _queryObject(){return Uh(this._queryParams)}isEqual(e){if(e=as(e),!(e instanceof Nf))return!1;const n=this._repo===e._repo,r=Jc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zS(this._path)}}class _n extends Nf{constructor(e,n){super(e,n,new nf,!1)}get parent(){const e=Vy(this._path);return e===null?null:new _n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=Fu(this.ref,e);return new Wo(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Wo(i,Fu(this.ref,r),ie)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function b_(t,e){return t=as(t),t._checkNotDeleted("ref"),e!==void 0?Fu(t._root,e):t._root}function Fu(t,e){return t=as(t),D(t._path)===null?xk("child","path",e):S_("child","path",e),new _n(t._repo,ce(t._path,e))}function Qk(t,e){t=as(t),kk("set",t._path),Sk("set",e,t._path);const n=new al;return Mk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class If{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Vk("value",this,new Wo(e.snapshotNode,new _n(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Gk(this,e,n):null}matches(e){return e instanceof If?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Kk(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(f,c)=>{np(t._repo,t,l),a(f,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Yk(n,s||void 0),l=new If(o);return Fk(t._repo,t,l),()=>np(t._repo,t,l)}function qk(t,e,n,r){return Kk(t,"value",e,n,r)}Kx(_n);tk(_n);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk="FIREBASE_DATABASE_EMULATOR_HOST",ju={};let Jk=!1;function Zk(t,e,n,r){t.repoInfo_=new Dy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function eN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=rp(s,i),l=o.repoInfo,a;typeof process<"u"&&Ch&&(a=Ch[Xk]),a?(s=`http://${a}?ns=${l.namespace}`,o=rp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new hS(t.name,t.options,e);Nk("Invalid Firebase Database URL",o),F(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=nN(l,t,u,new dS(t.name,n));return new rN(f,t)}function tN(t,e){const n=ju[e];(!n||n[t.key]!==t)&&Lt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jk(t),delete n[t.key]}function nN(t,e,n,r){let i=ju[e.name];i||(i={},ju[e.name]=i);let s=i[t.toURLString()];return s&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Ak(t,Jk,n,r),i[t.toURLString()]=s,s}class rN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _n(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lt("Cannot call "+e+" on a deleted database.")}}function iN(t=jC(),e){const n=DC(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=xE("database");r&&sN(n,...r)}return n}function sN(t,e,n,r={}){t=as(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new qs(qs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:kE(r.mockUserToken,t.app.options.projectId);s=new qs(o)}Zk(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){qC(FC),To(new Gi("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return eN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),vr(Sh,xh,t),vr(Sh,xh,"esm2017")}Tt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};oN();const lN={apiKey:"AIzaSyBP66a5g6ywAUONW6W7x5OC30cUw5aADac",authDomain:"chat-app-2c528.firebaseapp.com",databaseURL:"https://chat-app-2c528-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"chat-app-2c528",storageBucket:"chat-app-2c528.appspot.com",messagingSenderId:"358116475674",appId:"1:358116475674:web:1ebdd3b08c4c16fe32e2a3",measurementId:"G-69YX5FEB96"},aN=gy(lN),O_=iN(aN),uN=()=>{const[t,e]=B.useState(""),[n,r]=B.useState(""),[i,s]=B.useState(""),[o,l]=B.useState(""),[a,u]=B.useState(!1),f=async c=>{if(c.preventDefault(),!t){s("Vui lòng nhập tên."),l("");return}if(!n){s("Vui lòng nhập bình luận."),l("");return}try{await Qk(b_(O_,"messages/"+Date.now()),{name:t,comment:n,createdAt:new Date().toISOString()}),l("Gửi thành công!"),e(""),r(""),s("")}catch{s("Đã xảy ra lỗi khi lưu dữ liệu."),l("")}};return _.jsxs("div",{className:"w-full mx-auto p-5 bg-white shadow-md rounded-lg",style:{fontFamily:"Coiny"},children:[_.jsx("h2",{className:"text-xl font-bold mb-4",children:"Gửi Lời Chúc Tới Thanh"}),i&&_.jsx("p",{className:"text-red-500 mb-4",children:i}),o&&_.jsx("p",{className:"text-green-500 mb-4",children:o}),_.jsxs("form",{onSubmit:f,children:[!a&&_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",style:{fontFamily:"Coiny"},htmlFor:"name",children:"Tên của bạn:"}),_.jsx("input",{type:"text",id:"name",value:t,onChange:c=>e(c.target.value),className:"mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"})]}),_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",style:{fontFamily:"Coiny"},htmlFor:"comment",children:"Lời chúc:"}),_.jsx("textarea",{id:"comment",value:n,onChange:c=>r(c.target.value),className:"mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-cyan-500",rows:"4"})]}),_.jsx("div",{children:_.jsx("p",{className:"text-[10px] mb-2 text-lg",onClick:()=>{u(!a),e("AnDanh")},children:"Lời chúc ẩn danh"})}),_.jsx("button",{type:"submit",style:{fontFamily:"Coiny"},className:"w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600",children:"Gửi"})]})]})},cN=()=>_.jsx("div",{className:"items-center w-full justify-center flex h-[100vh] bg-gray-200",children:_.jsx("div",{className:"w-8 h-8 border-4 border-black rounded-full border-t-white animate-spin mt-[-177px]"})}),fN=()=>{const[t,e]=B.useState([]),[n,r]=B.useState(""),[i,s]=B.useState(!1);return B.useEffect(()=>{s(!0);const o=b_(O_,"messages/"),l=qk(o,a=>{const u=a.val();if(u){const f=Object.entries(u).map(([c,d])=>({id:c,...d}));e(f.reverse())}else e([]);s(!1)},a=>{r("Error fetching data: "+a.message),s(!1)});return()=>l()},[]),_.jsxs("div",{className:"w-[400px] h-96 mx-auto p-5 bg-white shadow-md rounded-lg overflow-y-auto font-thin",children:[i&&_.jsx(cN,{}),_.jsx("h2",{className:"text-xl font-bold mb-4 ",children:"Danh sách Lời Chúc"}),n&&_.jsx("p",{className:"text-red-500",children:n}),_.jsx("ul",{style:{fontFamily:"Merienda"},children:t.map(o=>_.jsxs("li",{className:"mb-2 p-2 border border-gray-300 rounded-md",children:[_.jsxs("p",{children:[_.jsx("strong",{className:"font-bold text-red-600",children:"Tên:"})," ",o.name]}),_.jsxs("p",{children:[_.jsx("strong",{className:"font-bold text-red-600",children:"Bình luận:"})," ",o.comment]}),_.jsxs("p",{children:[_.jsx("strong",{className:"font-bold text-red-600",children:"Thời gian:"})," ",new Date(o.createdAt).toLocaleString()]})]},o.id))})]})},dN=()=>{const[t,e]=B.useState({username:"",password:""}),[n,r]=B.useState(""),[i,s]=B.useState(""),[o,l]=B.useState(!1),[a,u]=B.useState(!1),f=d=>{const{name:g,value:y}=d.target;e(v=>({...v,[g]:y}))},c=B.useCallback(d=>{d.preventDefault(),u(!0);const{username:g,password:y}=t;g==="thanhthanh"&&y==="123"?(s("Đăng nhập thành công!"),l(!0),r("")):(r("Tên đăng nhập hoặc mật khẩu không đúng."),s("")),e({username:"",password:""}),u(!1)},[t]);return _.jsxs(_.Fragment,{children:[!o&&_.jsx("div",{className:"flex items-center justify-center bg-gray-100 rounded-lg border border-gray-400 shadow-2xl",children:_.jsxs("div",{className:"w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md",children:[_.jsx("h2",{className:"text-2xl font-bold text-center",children:"Đăng Nhập"}),n&&_.jsx("p",{className:"text-red-500 text-center",children:n}),i&&_.jsx("p",{className:"text-green-500 text-center",children:i}),_.jsxs("form",{onSubmit:c,children:[_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",htmlFor:"username",children:"Tên đăng nhập"}),_.jsx("input",{type:"text",id:"username",name:"username",value:t.username,onChange:f,className:"mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"})]}),_.jsxs("div",{className:"mb-4",children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",htmlFor:"password",children:"Mật khẩu"}),_.jsx("input",{type:"password",id:"password",name:"password",value:t.password,onChange:f,className:"mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"})]}),_.jsx("button",{type:"submit",className:"w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600",disabled:a,children:"Đăng Nhập"})]})]})}),o&&_.jsx(fN,{})]})},hN=()=>{const{setisShow:t,setContent:e}=B.useContext(ny);return B.useEffect(()=>{window.scrollTo({top:window.scrollY+200,behavior:"smooth"})},[]),_.jsx(_.Fragment,{children:_.jsx("div",{className:"w-full sm:w-1/3 relative flex justify-center items-center bg-slate-300/50 m-auto px-2 pb-10 ",children:_.jsxs("div",{children:[_.jsx("p",{className:"text-[29px]  ",style:{fontFamily:"Merienda"},children:"Xin chào mọi người..."}),_.jsxs("div",{className:"border border-gray-300 rounded-lg",style:{fontFamily:"Merienda"},children:[_.jsxs("p",{className:"px-2",style:{textIndent:"20px"},children:["Hôm nay là một ngày thực sự đặc biệt bởi vì cuộc đời Thanh lại tiếp tục lật sang trang mới. Đây không phải trang đầu tiên được mở ra nhưng lại là trang ý nghĩa nhất. 6 năm một hành trình dài đến đây là kết thúc, tuy rằng con đường học tập của Thanh vẫn còn đó nhưng chặng đường mang tên sinh viên đã dừng lại. Và sau hôm nay, Thanh chính thức trở thành một bác sĩ",_.jsx("br",{})]}),_.jsx("p",{className:"px-2",style:{textIndent:"20px"},children:"Thanh hứa sẽ nỗ lực hết mình để mang lại nụ cười và sức khỏe cho mọi bệnh nhân, và không ngừng học hỏi để trở thành một bác sĩ giỏi trong tương lai. Xin cảm ơn tất cả mọi người đã đồng hành cùng Thanh trong hành trình này!!!"})]}),_.jsx("div",{className:"flex justify-center mt-5",children:_.jsx("button",{className:"bg-cyan-400/50 w-[220px] h-[35px] rounded-full hover:animate-bounce",style:{fontFamily:"Coiny"},onClick:()=>{t(!0),e(_.jsx(uN,{}))},children:"Gửi Lời Chúc Tới Thanh"})}),_.jsx("div",{className:"mt-3 float-right",onClick:()=>{t(!0),e(_.jsx(dN,{}))},children:_.jsx("p",{className:"font-thin hover:text-red-500",style:{fontFamily:"Coiny"},children:"Xem lời chúc"})})]})})})};function pN(){const t="2024-10-09T00:00:00",[e,n]=B.useState(!1);return _.jsxs(_.Fragment,{children:[_.jsx("div",{className:"w-full flex justify-center items-center  bg-slate-300/50",children:_.jsxs("div",{className:"w-full sm:w-[75%] lg:w-1/3 relative flex justify-center items-center h-[100vh]",children:[_.jsxs("div",{className:"absolute top-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center ",children:[_.jsx($c,{className:"w-20 h-20",icon:l1}),_.jsx("p",{className:"font-bold mt-[-11px] text-[18px]",style:{fontFamily:"Ballet",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},children:"Ceremony"})]}),_.jsx("div",{className:"absolute top-[15%] left-1/2 transform -translate-x-1/2 flex flex-col items-center",children:_.jsxs("p",{className:"font-bold text-[60px] animate-pulse ",style:{fontFamily:"Merienda",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5) "},children:["Graduation"," "]})}),_.jsx("div",{className:"absolute top-[28.5%] left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full",children:_.jsx("p",{className:"font-extrabold text-[21px]",style:{fontFamily:"Ballet"},children:"Bác sĩ: Phương Thanh"})}),_.jsx("div",{className:"absolute top-[35%] left-1/2 transform -translate-x-1/2 flex flex-col items-center",children:_.jsx(dE,{targetDate:t})}),_.jsxs("div",{className:"absolute bottom-[14%] flex  w-full h-[40%] ",children:[_.jsxs("div",{className:"w-[55%] sm:w-[45%] h-full p-2 text-[15px] ",children:[_.jsxs("p",{className:"font-bold text-center text-[17px] text-blue-800  mb-4",style:{fontFamily:"Coiny"},children:["Hãy Cùng Đếm Ngược Ngày Mình Tốt Nghiệp Nhé!!!"," "]}),_.jsx("div",{className:"bg-yellow-200/50 h-16 sm:h-10 hover:bg-yellow-200 rounded-2xl flex justify-center items-center text-[12px] border border-yellow-400 animate-bounce ",children:_.jsxs("div",{className:"text-center  ",style:{fontFamily:"Merienda"},children:[_.jsx("p",{className:"font-bold",children:"11:30-12:30 Ngày 9/10/2024"}),_.jsx("p",{className:"font-bold ",children:"Đại Học Y Dược TP.HCM"})]})}),_.jsxs("div",{className:"mt-0 text-center",children:[_.jsx("p",{className:"font-bold",style:{fontFamily:"Coiny"},children:"Liên hệ với mình:"}),_.jsxs("div",{className:"flex justify-center gap-4 mt-1",children:[_.jsx("a",{href:"https://www.facebook.com/profile.php?id=100027324814902",children:_.jsx("img",{src:"./facebook.png",className:"w-7 h-7 sm:w-5 sm:h-5 hover:brightness-50"})}),_.jsx("a",{href:"tel:07071401706",children:_.jsx("img",{src:"./smartphone.png",className:"w-7 h-7 sm:w-5 sm:h-5 hover:brightness-50"})}),_.jsx("a",{href:"https://maps.app.goo.gl/EE5gxC3eybLZzu1D8",children:_.jsx("img",{src:"./map.png",className:"w-7 h-7 sm:w-5 sm:h-5 hover:brightness-50"})})]}),_.jsx("p",{className:"font-bold mt-2 sm:mt-10 hidden sm:block",style:{fontFamily:"Coiny"},children:"Rất mong nhận được sự chung vui của mọi người ❤️❤️❤️"})]})]}),_.jsx("div",{className:" w-[45%] sm:w-[55%] h-full relative",children:_.jsx("div",{className:"w-[90%] sm:w-[80%] absolute right-2 sm:right-10 shadow-2xl rounded-[11px] mt-4  border-[3px] border-gray-400 ",children:_.jsx(hE,{})})})]}),_.jsx("div",{className:"absolute bottom-[12%] w-[70%] block sm:hidden",children:_.jsx("p",{className:"font-bold mt-2 sm:mt-10 text-center",style:{fontFamily:"Coiny"},children:"Rất mong nhận được sự chung vui của mọi người ❤️❤️❤️"})}),_.jsx("div",{className:"absolute bottom-[2.5%]",children:_.jsx("button",{className:"bg-cyan-400/50 w-[120px] h-[35px] rounded-full hover:animate-bounce",style:{fontFamily:"Coiny"},onClick:()=>n(!e),children:e?"Show Less":" Show More"})})]})}),e&&_.jsx(hN,{})]})}_g(document.getElementById("root")).render(_.jsx(pE,{children:_.jsx(pN,{})}));
