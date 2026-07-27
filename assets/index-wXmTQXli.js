var Vv=Object.defineProperty;var Gv=(t,e,n)=>e in t?Vv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Tt=(t,e,n)=>Gv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Wv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Um={exports:{}},Zl={},Fm={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),Xv=Symbol.for("react.portal"),jv=Symbol.for("react.fragment"),Yv=Symbol.for("react.strict_mode"),qv=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),Kv=Symbol.for("react.context"),Zv=Symbol.for("react.forward_ref"),Qv=Symbol.for("react.suspense"),Jv=Symbol.for("react.memo"),e_=Symbol.for("react.lazy"),ch=Symbol.iterator;function t_(t){return t===null||typeof t!="object"?null:(t=ch&&t[ch]||t["@@iterator"],typeof t=="function"?t:null)}var Om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zm=Object.assign,km={};function $s(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Om}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bm(){}Bm.prototype=$s.prototype;function nd(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Om}var id=nd.prototype=new Bm;id.constructor=nd;zm(id,$s.prototype);id.isPureReactComponent=!0;var fh=Array.isArray,Hm=Object.prototype.hasOwnProperty,rd={current:null},Vm={key:!0,ref:!0,__self:!0,__source:!0};function Gm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hm.call(e,i)&&!Vm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Zo,type:t,key:s,ref:o,props:r,_owner:rd.current}}function n_(t,e){return{$$typeof:Zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zo}function i_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dh=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i_(""+t.key):e.toString(36)}function el(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zo:case Xv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+_u(o,0):i,fh(r)?(n="",t!=null&&(n=t.replace(dh,"$&/")+"/"),el(r,e,n,"",function(u){return u})):r!=null&&(sd(r)&&(r=n_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(dh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+_u(s,a);o+=el(s,e,n,l,r)}else if(l=t_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+_u(s,a++),o+=el(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(s){return e.call(n,s,r++)}),i}function r_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},tl={transition:null},s_={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:tl,ReactCurrentOwner:rd};function Wm(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:ua,forEach:function(t,e,n){ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ua(t,function(){e++}),e},toArray:function(t){return ua(t,function(e){return e})||[]},only:function(t){if(!sd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=$s;Ze.Fragment=jv;Ze.Profiler=qv;Ze.PureComponent=nd;Ze.StrictMode=Yv;Ze.Suspense=Qv;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s_;Ze.act=Wm;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=zm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hm.call(e,l)&&!Vm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Zo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ze.createContext=function(t){return t={$$typeof:Kv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$v,_context:t},t.Consumer=t};Ze.createElement=Gm;Ze.createFactory=function(t){var e=Gm.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:Zv,render:t}};Ze.isValidElement=sd;Ze.lazy=function(t){return{$$typeof:e_,_payload:{_status:-1,_result:t},_init:r_}};Ze.memo=function(t,e){return{$$typeof:Jv,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};Ze.unstable_act=Wm;Ze.useCallback=function(t,e){return cn.current.useCallback(t,e)};Ze.useContext=function(t){return cn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return cn.current.useEffect(t,e)};Ze.useId=function(){return cn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return cn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Ze.useRef=function(t){return cn.current.useRef(t)};Ze.useState=function(t){return cn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return cn.current.useTransition()};Ze.version="18.3.1";Fm.exports=Ze;var qe=Fm.exports;const Xm=Wv(qe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_=qe,a_=Symbol.for("react.element"),l_=Symbol.for("react.fragment"),u_=Object.prototype.hasOwnProperty,c_=o_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f_={key:!0,ref:!0,__self:!0,__source:!0};function jm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)u_.call(e,i)&&!f_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:a_,type:t,key:s,ref:o,props:r,_owner:c_.current}}Zl.Fragment=l_;Zl.jsx=jm;Zl.jsxs=jm;Um.exports=Zl;var pe=Um.exports,Ec={},Ym={exports:{}},Pn={},qm={exports:{}},$m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,$){var Q=I.length;I.push($);e:for(;0<Q;){var ie=Q-1>>>1,le=I[ie];if(0<r(le,$))I[ie]=$,I[Q]=le,Q=ie;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var $=I[0],Q=I.pop();if(Q!==$){I[0]=Q;e:for(var ie=0,le=I.length,Be=le>>>1;ie<Be;){var Y=2*(ie+1)-1,X=I[Y],te=Y+1,oe=I[te];if(0>r(X,Q))te<le&&0>r(oe,X)?(I[ie]=oe,I[te]=Q,ie=te):(I[ie]=X,I[Y]=Q,ie=Y);else if(te<le&&0>r(oe,Q))I[ie]=oe,I[te]=Q,ie=te;else break e}}return $}function r(I,$){var Q=I.sortIndex-$.sortIndex;return Q!==0?Q:I.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=I)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function E(I){if(x=!1,g(I),!_)if(n(l)!==null)_=!0,k(P);else{var $=n(u);$!==null&&ne(E,$.startTime-I)}}function P(I,$){_=!1,x&&(x=!1,c(D),D=-1),p=!0;var Q=h;try{for(g($),d=n(l);d!==null&&(!(d.expirationTime>$)||I&&!b());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var le=ie(d.expirationTime<=$);$=t.unstable_now(),typeof le=="function"?d.callback=le:d===n(l)&&i(l),g($)}else i(l);d=n(l)}if(d!==null)var Be=!0;else{var Y=n(u);Y!==null&&ne(E,Y.startTime-$),Be=!1}return Be}finally{d=null,h=Q,p=!1}}var w=!1,C=null,D=-1,T=5,S=-1;function b(){return!(t.unstable_now()-S<T)}function F(){if(C!==null){var I=t.unstable_now();S=I;var $=!0;try{$=C(!0,I)}finally{$?B():(w=!1,C=null)}}else w=!1}var B;if(typeof v=="function")B=function(){v(F)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Z=q.port2;q.port1.onmessage=F,B=function(){Z.postMessage(null)}}else B=function(){m(F,0)};function k(I){C=I,w||(w=!0,B())}function ne(I,$){D=m(function(){I(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,k(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var Q=h;h=$;try{return I()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,$){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=h;h=I;try{return $()}finally{h=Q}},t.unstable_scheduleCallback=function(I,$,Q){var ie=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ie+Q:ie):Q=ie,I){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Q+le,I={id:f++,callback:$,priorityLevel:I,startTime:Q,expirationTime:le,sortIndex:-1},Q>ie?(I.sortIndex=Q,e(u,I),n(l)===null&&I===n(u)&&(x?(c(D),D=-1):x=!0,ne(E,Q-ie))):(I.sortIndex=le,e(l,I),_||p||(_=!0,k(P))),I},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(I){var $=h;return function(){var Q=h;h=$;try{return I.apply(this,arguments)}finally{h=Q}}}})($m);qm.exports=$m;var d_=qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_=qe,Rn=d_;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Km=new Set,Lo={};function Xr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Lo[t]=e,t=0;t<e.length;t++)Km.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=Object.prototype.hasOwnProperty,p_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hh={},ph={};function m_(t){return Tc.call(ph,t)?!0:Tc.call(hh,t)?!1:p_.test(t)?ph[t]=!0:(hh[t]=!0,!1)}function g_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v_(t,e,n,i){if(e===null||typeof e>"u"||g_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(od,ad);qt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(od,ad);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(od,ad);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ld(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(v_(e,n,r,i)&&(n=null),i||r===null?m_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=h_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),Zm=Symbol.for("react.provider"),Qm=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),Ac=Symbol.for("react.suspense"),Cc=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),Jm=Symbol.for("react.offscreen"),mh=Symbol.iterator;function eo(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,xu;function mo(t){if(xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xu=e&&e[1]||""}return`
`+xu+t}var yu=!1;function Su(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function __(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=Su(t.type,!1),t;case 11:return t=Su(t.type.render,!1),t;case 1:return t=Su(t.type,!0),t;default:return""}}function Rc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case wc:return"Profiler";case ud:return"StrictMode";case Ac:return"Suspense";case Cc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qm:return(t.displayName||"Context")+".Consumer";case Zm:return(t._context.displayName||"Context")+".Provider";case cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fd:return e=t.displayName||null,e!==null?e:Rc(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return Rc(t(e))}catch{}}return null}function x_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rc(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function eg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y_(t){var e=eg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=y_(t))}function tg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=eg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pc(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ng(t,e){e=e.checked,e!=null&&ld(t,"checked",e,!1)}function bc(t,e){ng(t,e);var n=ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lc(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lc(t,e,n){(e!=="number"||xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Dc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _h(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(go(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function ig(t,e){var n=ur(e.value),i=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ic(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var da,sg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Do(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S_=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){S_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function og(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function ag(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=og(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var M_=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nc(t,e){if(e){if(M_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Uc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fc=null;function dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oc=null,Ps=null,bs=null;function yh(t){if(t=ea(t)){if(typeof Oc!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=nu(e),Oc(t.stateNode,t.type,e))}}function lg(t){Ps?bs?bs.push(t):bs=[t]:Ps=t}function ug(){if(Ps){var t=Ps,e=bs;if(bs=Ps=null,yh(t),e)for(t=0;t<e.length;t++)yh(e[t])}}function cg(t,e){return t(e)}function fg(){}var Mu=!1;function dg(t,e,n){if(Mu)return t(e,n);Mu=!0;try{return cg(t,e,n)}finally{Mu=!1,(Ps!==null||bs!==null)&&(fg(),ug())}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var i=nu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var zc=!1;if(bi)try{var to={};Object.defineProperty(to,"passive",{get:function(){zc=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{zc=!1}function E_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Eo=!1,yl=null,Sl=!1,kc=null,T_={onError:function(t){Eo=!0,yl=t}};function w_(t,e,n,i,r,s,o,a,l){Eo=!1,yl=null,E_.apply(T_,arguments)}function A_(t,e,n,i,r,s,o,a,l){if(w_.apply(this,arguments),Eo){if(Eo){var u=yl;Eo=!1,yl=null}else throw Error(ue(198));Sl||(Sl=!0,kc=u)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sh(t){if(jr(t)!==t)throw Error(ue(188))}function C_(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sh(r),t;if(s===i)return Sh(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function pg(t){return t=C_(t),t!==null?mg(t):null}function mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mg(t);if(e!==null)return e;t=t.sibling}return null}var gg=Rn.unstable_scheduleCallback,Mh=Rn.unstable_cancelCallback,R_=Rn.unstable_shouldYield,P_=Rn.unstable_requestPaint,bt=Rn.unstable_now,b_=Rn.unstable_getCurrentPriorityLevel,hd=Rn.unstable_ImmediatePriority,vg=Rn.unstable_UserBlockingPriority,Ml=Rn.unstable_NormalPriority,L_=Rn.unstable_LowPriority,_g=Rn.unstable_IdlePriority,Ql=null,ui=null;function D_(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:U_,I_=Math.log,N_=Math.LN2;function U_(t){return t>>>=0,t===0?32:31-(I_(t)/N_|0)|0}var ha=64,pa=4194304;function vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=vo(a):(s&=o,s!==0&&(i=vo(s)))}else o=n&~r,o!==0?i=vo(o):s!==0&&(i=vo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function F_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=F_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xg(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function Eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function z_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function yg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sg,md,Mg,Eg,Tg,Hc=!1,ma=[],Ji=null,er=null,tr=null,No=new Map,Uo=new Map,qi=[],k_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":No.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(e.pointerId)}}function no(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ea(e),e!==null&&md(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function B_(t,e,n,i,r){switch(e){case"focusin":return Ji=no(Ji,t,e,n,i,r),!0;case"dragenter":return er=no(er,t,e,n,i,r),!0;case"mouseover":return tr=no(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return No.set(s,no(No.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Uo.set(s,no(Uo.get(s)||null,t,e,n,i,r)),!0}return!1}function wg(t){var e=Rr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=hg(n),e!==null){t.blockedOn=e,Tg(t.priority,function(){Mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fc=i,n.target.dispatchEvent(i),Fc=null}else return e=ea(n),e!==null&&md(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){nl(t)&&n.delete(e)}function H_(){Hc=!1,Ji!==null&&nl(Ji)&&(Ji=null),er!==null&&nl(er)&&(er=null),tr!==null&&nl(tr)&&(tr=null),No.forEach(Th),Uo.forEach(Th)}function io(t,e){t.blockedOn===e&&(t.blockedOn=null,Hc||(Hc=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,H_)))}function Fo(t){function e(r){return io(r,t)}if(0<ma.length){io(ma[0],t);for(var n=1;n<ma.length;n++){var i=ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&io(Ji,t),er!==null&&io(er,t),tr!==null&&io(tr,t),No.forEach(e),Uo.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)wg(n),n.blockedOn===null&&qi.shift()}var Ls=Fi.ReactCurrentBatchConfig,Tl=!0;function V_(t,e,n,i){var r=ft,s=Ls.transition;Ls.transition=null;try{ft=1,gd(t,e,n,i)}finally{ft=r,Ls.transition=s}}function G_(t,e,n,i){var r=ft,s=Ls.transition;Ls.transition=null;try{ft=4,gd(t,e,n,i)}finally{ft=r,Ls.transition=s}}function gd(t,e,n,i){if(Tl){var r=Vc(t,e,n,i);if(r===null)Iu(t,e,i,wl,n),Eh(t,i);else if(B_(r,t,e,n,i))i.stopPropagation();else if(Eh(t,i),e&4&&-1<k_.indexOf(t)){for(;r!==null;){var s=ea(r);if(s!==null&&Sg(s),s=Vc(t,e,n,i),s===null&&Iu(t,e,i,wl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Iu(t,e,i,null,n)}}var wl=null;function Vc(t,e,n,i){if(wl=null,t=dd(i),t=Rr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wl=t,null}function Ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b_()){case hd:return 1;case vg:return 4;case Ml:case L_:return 16;case _g:return 536870912;default:return 16}default:return 16}}var Zi=null,vd=null,il=null;function Cg(){if(il)return il;var t,e=vd,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return il=r.slice(t,1<i?1-i:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function wh(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:wh,this.isPropagationStopped=wh,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=bn(Ks),Jo=Et({},Ks,{view:0,detail:0}),W_=bn(Jo),Tu,wu,ro,Jl=Et({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Tu=t.screenX-ro.screenX,wu=t.screenY-ro.screenY):wu=Tu=0,ro=t),Tu)},movementY:function(t){return"movementY"in t?t.movementY:wu}}),Ah=bn(Jl),X_=Et({},Jl,{dataTransfer:0}),j_=bn(X_),Y_=Et({},Jo,{relatedTarget:0}),Au=bn(Y_),q_=Et({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),$_=bn(q_),K_=Et({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z_=bn(K_),Q_=Et({},Ks,{data:0}),Ch=bn(Q_),J_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tx[t])?!!e[t]:!1}function xd(){return nx}var ix=Et({},Jo,{key:function(t){if(t.key){var e=J_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rx=bn(ix),sx=Et({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=bn(sx),ox=Et({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),ax=bn(ox),lx=Et({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),ux=bn(lx),cx=Et({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fx=bn(cx),dx=[9,13,27,32],yd=bi&&"CompositionEvent"in window,To=null;bi&&"documentMode"in document&&(To=document.documentMode);var hx=bi&&"TextEvent"in window&&!To,Rg=bi&&(!yd||To&&8<To&&11>=To),Ph=" ",bh=!1;function Pg(t,e){switch(t){case"keyup":return dx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function px(t,e){switch(t){case"compositionend":return bg(e);case"keypress":return e.which!==32?null:(bh=!0,Ph);case"textInput":return t=e.data,t===Ph&&bh?null:t;default:return null}}function mx(t,e){if(vs)return t==="compositionend"||!yd&&Pg(t,e)?(t=Cg(),il=vd=Zi=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rg&&e.locale!=="ko"?null:e.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gx[t.type]:e==="textarea"}function Lg(t,e,n,i){lg(i),e=Al(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var wo=null,Oo=null;function vx(t){Vg(t,0)}function eu(t){var e=ys(t);if(tg(e))return t}function _x(t,e){if(t==="change")return e}var Dg=!1;if(bi){var Cu;if(bi){var Ru="oninput"in document;if(!Ru){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),Ru=typeof Dh.oninput=="function"}Cu=Ru}else Cu=!1;Dg=Cu&&(!document.documentMode||9<document.documentMode)}function Ih(){wo&&(wo.detachEvent("onpropertychange",Ig),Oo=wo=null)}function Ig(t){if(t.propertyName==="value"&&eu(Oo)){var e=[];Lg(e,Oo,t,dd(t)),dg(vx,e)}}function xx(t,e,n){t==="focusin"?(Ih(),wo=e,Oo=n,wo.attachEvent("onpropertychange",Ig)):t==="focusout"&&Ih()}function yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(Oo)}function Sx(t,e){if(t==="click")return eu(e)}function Mx(t,e){if(t==="input"||t==="change")return eu(e)}function Ex(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:Ex;function zo(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Tc.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function Nh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var n=Nh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nh(n)}}function Ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ug(){for(var t=window,e=xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xl(t.document)}return e}function Sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tx(t){var e=Ug(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ng(n.ownerDocument.documentElement,n)){if(i!==null&&Sd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Uh(n,s);var o=Uh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wx=bi&&"documentMode"in document&&11>=document.documentMode,_s=null,Gc=null,Ao=null,Wc=!1;function Fh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wc||_s==null||_s!==xl(i)||(i=_s,"selectionStart"in i&&Sd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ao&&zo(Ao,i)||(Ao=i,i=Al(Gc,"onSelect"),0<i.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},Pu={},Fg={};bi&&(Fg=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function tu(t){if(Pu[t])return Pu[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fg)return Pu[t]=e[n];return t}var Og=tu("animationend"),zg=tu("animationiteration"),kg=tu("animationstart"),Bg=tu("transitionend"),Hg=new Map,Oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){Hg.set(t,e),Xr(e,[t])}for(var bu=0;bu<Oh.length;bu++){var Lu=Oh[bu],Ax=Lu.toLowerCase(),Cx=Lu[0].toUpperCase()+Lu.slice(1);dr(Ax,"on"+Cx)}dr(Og,"onAnimationEnd");dr(zg,"onAnimationIteration");dr(kg,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(Bg,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rx=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function zh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,A_(i,e,void 0,t),t.currentTarget=null}function Vg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;zh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;zh(r,a,u),s=l}}}if(Sl)throw t=kc,Sl=!1,kc=null,t}function gt(t,e){var n=e[$c];n===void 0&&(n=e[$c]=new Set);var i=t+"__bubble";n.has(i)||(Gg(e,t,2,!1),n.add(i))}function Du(t,e,n){var i=0;e&&(i|=4),Gg(n,t,i,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function ko(t){if(!t[_a]){t[_a]=!0,Km.forEach(function(n){n!=="selectionchange"&&(Rx.has(n)||Du(n,!1,t),Du(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_a]||(e[_a]=!0,Du("selectionchange",!1,e))}}function Gg(t,e,n,i){switch(Ag(e)){case 1:var r=V_;break;case 4:r=G_;break;default:r=gd}n=r.bind(null,e,n,t),r=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Iu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}dg(function(){var u=s,f=dd(n),d=[];e:{var h=Hg.get(t);if(h!==void 0){var p=_d,_=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":p=rx;break;case"focusin":_="focus",p=Au;break;case"focusout":_="blur",p=Au;break;case"beforeblur":case"afterblur":p=Au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=j_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ax;break;case Og:case zg:case kg:p=$_;break;case Bg:p=ux;break;case"scroll":p=W_;break;case"wheel":p=fx;break;case"copy":case"cut":case"paste":p=Z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rh}var x=(e&4)!==0,m=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var v=u,g;v!==null;){g=v;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,c!==null&&(E=Io(v,c),E!=null&&x.push(Bo(v,E,g)))),m)break;v=v.return}0<x.length&&(h=new p(h,_,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Fc&&(_=n.relatedTarget||n.fromElement)&&(Rr(_)||_[Li]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Rr(_):null,_!==null&&(m=jr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=Ah,E="onMouseLeave",c="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Rh,E="onPointerLeave",c="onPointerEnter",v="pointer"),m=p==null?h:ys(p),g=_==null?h:ys(_),h=new x(E,v+"leave",p,n,f),h.target=m,h.relatedTarget=g,E=null,Rr(f)===u&&(x=new x(c,v+"enter",_,n,f),x.target=g,x.relatedTarget=m,E=x),m=E,p&&_)t:{for(x=p,c=_,v=0,g=x;g;g=$r(g))v++;for(g=0,E=c;E;E=$r(E))g++;for(;0<v-g;)x=$r(x),v--;for(;0<g-v;)c=$r(c),g--;for(;v--;){if(x===c||c!==null&&x===c.alternate)break t;x=$r(x),c=$r(c)}x=null}else x=null;p!==null&&kh(d,h,p,x,!1),_!==null&&m!==null&&kh(d,m,_,x,!0)}}e:{if(h=u?ys(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=_x;else if(Lh(h))if(Dg)P=Mx;else{P=yx;var w=xx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Sx);if(P&&(P=P(t,u))){Lg(d,P,n,f);break e}w&&w(t,h,u),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Lc(h,"number",h.value)}switch(w=u?ys(u):window,t){case"focusin":(Lh(w)||w.contentEditable==="true")&&(_s=w,Gc=u,Ao=null);break;case"focusout":Ao=Gc=_s=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Fh(d,n,f);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":Fh(d,n,f)}var C;if(yd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else vs?Pg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Rg&&n.locale!=="ko"&&(vs||D!=="onCompositionStart"?D==="onCompositionEnd"&&vs&&(C=Cg()):(Zi=f,vd="value"in Zi?Zi.value:Zi.textContent,vs=!0)),w=Al(u,D),0<w.length&&(D=new Ch(D,t,null,n,f),d.push({event:D,listeners:w}),C?D.data=C:(C=bg(n),C!==null&&(D.data=C)))),(C=hx?px(t,n):mx(t,n))&&(u=Al(u,"onBeforeInput"),0<u.length&&(f=new Ch("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=C))}Vg(d,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Io(t,n),s!=null&&i.unshift(Bo(t,s,r)),s=Io(t,e),s!=null&&i.push(Bo(t,s,r))),t=t.return}return i}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Io(n,s),l!=null&&o.unshift(Bo(n,l,a))):r||(l=Io(n,s),l!=null&&o.push(Bo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Px=/\r\n?/g,bx=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace(Px,`
`).replace(bx,"")}function xa(t,e,n){if(e=Bh(e),Bh(t)!==e&&n)throw Error(ue(425))}function Cl(){}var Xc=null,jc=null;function Yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(t){return Hh.resolve(null).then(t).catch(Ix)}:qc;function Ix(t){setTimeout(function(){throw t})}function Nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Fo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Fo(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ai="__reactFiber$"+Zs,Ho="__reactProps$"+Zs,Li="__reactContainer$"+Zs,$c="__reactEvents$"+Zs,Nx="__reactListeners$"+Zs,Ux="__reactHandles$"+Zs;function Rr(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vh(t);t!==null;){if(n=t[ai])return n;t=Vh(t)}return e}t=n,n=t.parentNode}return null}function ea(t){return t=t[ai]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function nu(t){return t[Ho]||null}var Kc=[],Ss=-1;function hr(t){return{current:t}}function _t(t){0>Ss||(t.current=Kc[Ss],Kc[Ss]=null,Ss--)}function pt(t,e){Ss++,Kc[Ss]=t.current,t.current=e}var cr={},tn=hr(cr),vn=hr(!1),Or=cr;function zs(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function Rl(){_t(vn),_t(tn)}function Gh(t,e,n){if(tn.current!==cr)throw Error(ue(168));pt(tn,e),pt(vn,n)}function Wg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,x_(t)||"Unknown",r));return Et({},n,i)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Or=tn.current,pt(tn,t),pt(vn,vn.current),!0}function Wh(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=Wg(t,e,Or),i.__reactInternalMemoizedMergedChildContext=t,_t(vn),_t(tn),pt(tn,t)):_t(vn),pt(vn,n)}var Mi=null,iu=!1,Uu=!1;function Xg(t){Mi===null?Mi=[t]:Mi.push(t)}function Fx(t){iu=!0,Xg(t)}function pr(){if(!Uu&&Mi!==null){Uu=!0;var t=0,e=ft;try{var n=Mi;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,iu=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),gg(hd,pr),r}finally{ft=e,Uu=!1}}return null}var Ms=[],Es=0,bl=null,Ll=0,In=[],Nn=0,zr=null,Ti=1,wi="";function Er(t,e){Ms[Es++]=Ll,Ms[Es++]=bl,bl=t,Ll=e}function jg(t,e,n){In[Nn++]=Ti,In[Nn++]=wi,In[Nn++]=zr,zr=t;var i=Ti;t=wi;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ti=1<<32-Zn(e)+r|n<<r|i,wi=s+t}else Ti=1<<s|n<<r|i,wi=t}function Md(t){t.return!==null&&(Er(t,1),jg(t,1,0))}function Ed(t){for(;t===bl;)bl=Ms[--Es],Ms[Es]=null,Ll=Ms[--Es],Ms[Es]=null;for(;t===zr;)zr=In[--Nn],In[Nn]=null,wi=In[--Nn],In[Nn]=null,Ti=In[--Nn],In[Nn]=null}var An=null,wn=null,xt=!1,Yn=null;function Yg(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,wn=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:Ti,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,wn=null,!0):!1;default:return!1}}function Zc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qc(t){if(xt){var e=wn;if(e){var n=e;if(!Xh(t,e)){if(Zc(t))throw Error(ue(418));e=nr(n.nextSibling);var i=An;e&&Xh(t,e)?Yg(i,n):(t.flags=t.flags&-4097|2,xt=!1,An=t)}}else{if(Zc(t))throw Error(ue(418));t.flags=t.flags&-4097|2,xt=!1,An=t}}}function jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function ya(t){if(t!==An)return!1;if(!xt)return jh(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yc(t.type,t.memoizedProps)),e&&(e=wn)){if(Zc(t))throw qg(),Error(ue(418));for(;e;)Yg(t,e),e=nr(e.nextSibling)}if(jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=An?nr(t.stateNode.nextSibling):null;return!0}function qg(){for(var t=wn;t;)t=nr(t.nextSibling)}function ks(){wn=An=null,xt=!1}function Td(t){Yn===null?Yn=[t]:Yn.push(t)}var Ox=Fi.ReactCurrentBatchConfig;function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yh(t){var e=t._init;return e(t._payload)}function $g(t){function e(c,v){if(t){var g=c.deletions;g===null?(c.deletions=[v],c.flags|=16):g.push(v)}}function n(c,v){if(!t)return null;for(;v!==null;)e(c,v),v=v.sibling;return null}function i(c,v){for(c=new Map;v!==null;)v.key!==null?c.set(v.key,v):c.set(v.index,v),v=v.sibling;return c}function r(c,v){return c=or(c,v),c.index=0,c.sibling=null,c}function s(c,v,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<v?(c.flags|=2,v):g):(c.flags|=2,v)):(c.flags|=1048576,v)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,v,g,E){return v===null||v.tag!==6?(v=Vu(g,c.mode,E),v.return=c,v):(v=r(v,g),v.return=c,v)}function l(c,v,g,E){var P=g.type;return P===gs?f(c,v,g.props.children,E,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Xi&&Yh(P)===v.type)?(E=r(v,g.props),E.ref=so(c,v,g),E.return=c,E):(E=fl(g.type,g.key,g.props,null,c.mode,E),E.ref=so(c,v,g),E.return=c,E)}function u(c,v,g,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Gu(g,c.mode,E),v.return=c,v):(v=r(v,g.children||[]),v.return=c,v)}function f(c,v,g,E,P){return v===null||v.tag!==7?(v=Fr(g,c.mode,E,P),v.return=c,v):(v=r(v,g),v.return=c,v)}function d(c,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Vu(""+v,c.mode,g),v.return=c,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ca:return g=fl(v.type,v.key,v.props,null,c.mode,g),g.ref=so(c,null,v),g.return=c,g;case ms:return v=Gu(v,c.mode,g),v.return=c,v;case Xi:var E=v._init;return d(c,E(v._payload),g)}if(go(v)||eo(v))return v=Fr(v,c.mode,g,null),v.return=c,v;Sa(c,v)}return null}function h(c,v,g,E){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(c,v,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:return g.key===P?l(c,v,g,E):null;case ms:return g.key===P?u(c,v,g,E):null;case Xi:return P=g._init,h(c,v,P(g._payload),E)}if(go(g)||eo(g))return P!==null?null:f(c,v,g,E,null);Sa(c,g)}return null}function p(c,v,g,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return c=c.get(g)||null,a(v,c,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ca:return c=c.get(E.key===null?g:E.key)||null,l(v,c,E,P);case ms:return c=c.get(E.key===null?g:E.key)||null,u(v,c,E,P);case Xi:var w=E._init;return p(c,v,g,w(E._payload),P)}if(go(E)||eo(E))return c=c.get(g)||null,f(v,c,E,P,null);Sa(v,E)}return null}function _(c,v,g,E){for(var P=null,w=null,C=v,D=v=0,T=null;C!==null&&D<g.length;D++){C.index>D?(T=C,C=null):T=C.sibling;var S=h(c,C,g[D],E);if(S===null){C===null&&(C=T);break}t&&C&&S.alternate===null&&e(c,C),v=s(S,v,D),w===null?P=S:w.sibling=S,w=S,C=T}if(D===g.length)return n(c,C),xt&&Er(c,D),P;if(C===null){for(;D<g.length;D++)C=d(c,g[D],E),C!==null&&(v=s(C,v,D),w===null?P=C:w.sibling=C,w=C);return xt&&Er(c,D),P}for(C=i(c,C);D<g.length;D++)T=p(C,c,D,g[D],E),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?D:T.key),v=s(T,v,D),w===null?P=T:w.sibling=T,w=T);return t&&C.forEach(function(b){return e(c,b)}),xt&&Er(c,D),P}function x(c,v,g,E){var P=eo(g);if(typeof P!="function")throw Error(ue(150));if(g=P.call(g),g==null)throw Error(ue(151));for(var w=P=null,C=v,D=v=0,T=null,S=g.next();C!==null&&!S.done;D++,S=g.next()){C.index>D?(T=C,C=null):T=C.sibling;var b=h(c,C,S.value,E);if(b===null){C===null&&(C=T);break}t&&C&&b.alternate===null&&e(c,C),v=s(b,v,D),w===null?P=b:w.sibling=b,w=b,C=T}if(S.done)return n(c,C),xt&&Er(c,D),P;if(C===null){for(;!S.done;D++,S=g.next())S=d(c,S.value,E),S!==null&&(v=s(S,v,D),w===null?P=S:w.sibling=S,w=S);return xt&&Er(c,D),P}for(C=i(c,C);!S.done;D++,S=g.next())S=p(C,c,D,S.value,E),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?D:S.key),v=s(S,v,D),w===null?P=S:w.sibling=S,w=S);return t&&C.forEach(function(F){return e(c,F)}),xt&&Er(c,D),P}function m(c,v,g,E){if(typeof g=="object"&&g!==null&&g.type===gs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:e:{for(var P=g.key,w=v;w!==null;){if(w.key===P){if(P=g.type,P===gs){if(w.tag===7){n(c,w.sibling),v=r(w,g.props.children),v.return=c,c=v;break e}}else if(w.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Xi&&Yh(P)===w.type){n(c,w.sibling),v=r(w,g.props),v.ref=so(c,w,g),v.return=c,c=v;break e}n(c,w);break}else e(c,w);w=w.sibling}g.type===gs?(v=Fr(g.props.children,c.mode,E,g.key),v.return=c,c=v):(E=fl(g.type,g.key,g.props,null,c.mode,E),E.ref=so(c,v,g),E.return=c,c=E)}return o(c);case ms:e:{for(w=g.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(c,v.sibling),v=r(v,g.children||[]),v.return=c,c=v;break e}else{n(c,v);break}else e(c,v);v=v.sibling}v=Gu(g,c.mode,E),v.return=c,c=v}return o(c);case Xi:return w=g._init,m(c,v,w(g._payload),E)}if(go(g))return _(c,v,g,E);if(eo(g))return x(c,v,g,E);Sa(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(c,v.sibling),v=r(v,g),v.return=c,c=v):(n(c,v),v=Vu(g,c.mode,E),v.return=c,c=v),o(c)):n(c,v)}return m}var Bs=$g(!0),Kg=$g(!1),Dl=hr(null),Il=null,Ts=null,wd=null;function Ad(){wd=Ts=Il=null}function Cd(t){var e=Dl.current;_t(Dl),t._currentValue=e}function Jc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Il=t,wd=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(wd!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(Il===null)throw Error(ue(308));Ts=t,Il.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Pr=null;function Rd(t){Pr===null?Pr=[t]:Pr.push(t)}function Zg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,Rd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pd(t,n)}}function qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=Et({},d,h);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=d}}function $h(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var ta={},ci=hr(ta),Vo=hr(ta),Go=hr(ta);function br(t){if(t===ta)throw Error(ue(174));return t}function bd(t,e){switch(pt(Go,e),pt(Vo,t),pt(ci,ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ic(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ic(e,t)}_t(ci),pt(ci,e)}function Hs(){_t(ci),_t(Vo),_t(Go)}function Jg(t){br(Go.current);var e=br(ci.current),n=Ic(e,t.type);e!==n&&(pt(Vo,t),pt(ci,n))}function Ld(t){Vo.current===t&&(_t(ci),_t(Vo))}var St=hr(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function Dd(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var ol=Fi.ReactCurrentDispatcher,Ou=Fi.ReactCurrentBatchConfig,kr=0,Mt=null,It=null,Bt=null,Fl=!1,Co=!1,Wo=0,zx=0;function Kt(){throw Error(ue(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Nd(t,e,n,i,r,s){if(kr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?Vx:Gx,t=n(i,r),Co){s=0;do{if(Co=!1,Wo=0,25<=s)throw Error(ue(301));s+=1,Bt=It=null,e.updateQueue=null,ol.current=Wx,t=n(i,r)}while(Co)}if(ol.current=Ol,e=It!==null&&It.next!==null,kr=0,Bt=It=Mt=null,Fl=!1,e)throw Error(ue(300));return t}function Ud(){var t=Wo!==0;return Wo=0,t}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Mt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Bn(){if(It===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Bt===null?Mt.memoizedState:Bt.next;if(e!==null)Bt=e,It=t;else{if(t===null)throw Error(ue(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Bt===null?Mt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Xo(t,e){return typeof e=="function"?e(t):e}function zu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((kr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Mt.lanes|=f,Br|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ku(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function e0(){}function t0(t,e){var n=Mt,i=Bn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,Fd(r0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,jo(9,i0.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ue(349));kr&30||n0(n,e,r)}return r}function n0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i0(t,e,n,i){e.value=n,e.getSnapshot=i,s0(e)&&o0(t)}function r0(t,e,n){return n(function(){s0(e)&&o0(t)})}function s0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function o0(t){var e=Di(t,1);e!==null&&Qn(e,t,1,-1)}function Kh(t){var e=ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=Hx.bind(null,Mt,t),[e.memoizedState,t]}function jo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function a0(){return Bn().memoizedState}function al(t,e,n,i){var r=ri();Mt.flags|=t,r.memoizedState=jo(1|e,n,void 0,i===void 0?null:i)}function ru(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&Id(i,o.deps)){r.memoizedState=jo(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=jo(1|e,n,s,i)}function Zh(t,e){return al(8390656,8,t,e)}function Fd(t,e){return ru(2048,8,t,e)}function l0(t,e){return ru(4,2,t,e)}function u0(t,e){return ru(4,4,t,e)}function c0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f0(t,e,n){return n=n!=null?n.concat([t]):null,ru(4,4,c0.bind(null,e,t),n)}function Od(){}function d0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function h0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function p0(t,e,n){return kr&21?(Jn(n,e)||(n=xg(),Mt.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function kx(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=Ou.transition;Ou.transition={};try{t(!1),e()}finally{ft=n,Ou.transition=i}}function m0(){return Bn().memoizedState}function Bx(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},g0(t))v0(e,n);else if(n=Zg(t,e,n,i),n!==null){var r=an();Qn(n,t,i,r),_0(n,e,i)}}function Hx(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(g0(t))v0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Rd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Zg(t,e,r,i),n!==null&&(r=an(),Qn(n,t,i,r),_0(n,e,i))}}function g0(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function v0(t,e){Co=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pd(t,n)}}var Ol={readContext:kn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},Vx={readContext:kn,useCallback:function(t,e){return ri().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,c0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Bx.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ri();return t={current:t},e.memoizedState=t},useState:Kh,useDebugValue:Od,useDeferredValue:function(t){return ri().memoizedState=t},useTransition:function(){var t=Kh(!1),e=t[0];return t=kx.bind(null,t[1]),ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ri();if(xt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),Vt===null)throw Error(ue(349));kr&30||n0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Zh(r0.bind(null,i,s,t),[t]),i.flags|=2048,jo(9,i0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ri(),e=Vt.identifierPrefix;if(xt){var n=wi,i=Ti;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gx={readContext:kn,useCallback:d0,useContext:kn,useEffect:Fd,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:h0,useReducer:zu,useRef:a0,useState:function(){return zu(Xo)},useDebugValue:Od,useDeferredValue:function(t){var e=Bn();return p0(e,It.memoizedState,t)},useTransition:function(){var t=zu(Xo)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1},Wx={readContext:kn,useCallback:d0,useContext:kn,useEffect:Fd,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:h0,useReducer:ku,useRef:a0,useState:function(){return ku(Xo)},useDebugValue:Od,useDeferredValue:function(t){var e=Bn();return It===null?e.memoizedState=t:p0(e,It.memoizedState,t)},useTransition:function(){var t=ku(Xo)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ef(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var su={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=sr(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Qn(e,t,r,i),sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=sr(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Qn(e,t,r,i),sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=sr(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(Qn(e,t,i,n),sl(e,t,i))}};function Qh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!zo(n,i)||!zo(r,s):!0}function x0(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=_n(e)?Or:tn.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=su,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&su.enqueueReplaceState(e,e.state,null)}function tf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=_n(e)?Or:tn.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ef(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&su.enqueueReplaceState(r,r.state,null),Nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e){try{var n="",i=e;do n+=__(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Bu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Xx=typeof WeakMap=="function"?WeakMap:Map;function y0(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kl||(kl=!0,hf=i),nf(t,e)},n}function S0(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nf(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Xx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sy.bind(null,t,e,n),e.then(t,t))}function tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function np(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var jx=Fi.ReactCurrentOwner,gn=!1;function rn(t,e,n,i){e.child=t===null?Kg(e,null,n,i):Bs(e,t.child,n,i)}function ip(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=Nd(t,e,n,i,s,r),n=Ud(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(xt&&n&&Md(e),e.flags|=1,rn(t,e,i,r),e.child)}function rp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,M0(t,e,s,i,r)):(t=fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(o,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=or(s,i),t.ref=e.ref,t.return=e,e.child=t}function M0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(zo(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return rf(t,e,n,i,r)}function E0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(As,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(As,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(As,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(As,En),En|=i;return rn(t,e,r,n),e.child}function T0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rf(t,e,n,i,r){var s=_n(n)?Or:tn.current;return s=zs(e,s),Ds(e,r),n=Nd(t,e,n,i,s,r),i=Ud(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(xt&&i&&Md(e),e.flags|=1,rn(t,e,n,r),e.child)}function sp(t,e,n,i,r){if(_n(n)){var s=!0;Pl(e)}else s=!1;if(Ds(e,r),e.stateNode===null)ll(t,e),x0(e,n,i),tf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kn(u):(u=_n(n)?Or:tn.current,u=zs(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Jh(e,o,i,u),ji=!1;var h=e.memoizedState;o.state=h,Nl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||vn.current||ji?(typeof f=="function"&&(ef(e,n,f,i),l=e.memoizedState),(a=ji||Qh(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Qg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=_n(n)?Or:tn.current,l=zs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Jh(e,o,i,l),ji=!1,h=e.memoizedState,o.state=h,Nl(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||vn.current||ji?(typeof p=="function"&&(ef(e,n,p,i),_=e.memoizedState),(u=ji||Qh(e,n,u,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return sf(t,e,n,i,s,r)}function sf(t,e,n,i,r,s){T0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Wh(e,n,!1),Ii(t,e,s);i=e.stateNode,jx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,a,s)):rn(t,e,a,s),e.memoizedState=i.state,r&&Wh(e,n,!0),e.child}function w0(t){var e=t.stateNode;e.pendingContext?Gh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gh(t,e.context,!1),bd(t,e.containerInfo)}function op(t,e,n,i,r){return ks(),Td(r),e.flags|=256,rn(t,e,n,i),e.child}var of={dehydrated:null,treeContext:null,retryLane:0};function af(t){return{baseLanes:t,cachePool:null,transitions:null}}function A0(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(St,r&1),t===null)return Qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lu(o,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=af(n),e.memoizedState=of,t):zd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Yx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=or(a,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?af(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=of,i}return s=t.child,t=s.sibling,i=or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zd(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,i){return i!==null&&Td(i),Bs(e,t.child,null,n),t=zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Bu(Error(ue(422))),Ma(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lu({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=af(o),e.memoizedState=of,s);if(!(e.mode&1))return Ma(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=Bu(s,i,void 0),Ma(t,e,o,i)}if(a=(o&t.childLanes)!==0,gn||a){if(i=Vt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),Qn(i,t,r,-1))}return Wd(),i=Bu(Error(ue(421))),Ma(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=nr(r.nextSibling),An=e,xt=!0,Yn=null,t!==null&&(In[Nn++]=Ti,In[Nn++]=wi,In[Nn++]=zr,Ti=t.id,wi=t.overflow,zr=e),e=zd(e,i.children),e.flags|=4096,e)}function ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Jc(t.return,e,n)}function Hu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function C0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,n,e);else if(t.tag===19)ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hu(e,!0,n,null,s);break;case"together":Hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qx(t,e,n){switch(e.tag){case 3:w0(e),ks();break;case 5:Jg(e);break;case 1:_n(e.type)&&Pl(e);break;case 4:bd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?A0(t,e,n):(pt(St,St.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);pt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return C0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,E0(t,e,n)}return Ii(t,e,n)}var R0,lf,P0,b0;R0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lf=function(){};P0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,br(ci.current);var s=null;switch(n){case"input":r=Pc(t,r),i=Pc(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Dc(t,r),i=Dc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cl)}Nc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};b0=function(t,e,n,i){n!==i&&(e.flags|=4)};function oo(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $x(t,e,n){var i=e.pendingProps;switch(Ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return _n(e.type)&&Rl(),Zt(e),null;case 3:return i=e.stateNode,Hs(),_t(vn),_t(tn),Dd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(gf(Yn),Yn=null))),lf(t,e),Zt(e),null;case 5:Ld(e);var r=br(Go.current);if(n=e.type,t!==null&&e.stateNode!=null)P0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return Zt(e),null}if(t=br(ci.current),ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[Ho]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<_o.length;r++)gt(_o[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":gh(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":_h(i,s),gt("invalid",i)}Nc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",""+a]):Lo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":fa(i),vh(i,s,!0);break;case"textarea":fa(i),xh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ai]=e,t[Ho]=i,R0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uc(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<_o.length;r++)gt(_o[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":gh(t,i),r=Pc(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),gt("invalid",t);break;case"textarea":_h(t,i),r=Dc(t,i),gt("invalid",t);break;default:r=i}Nc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ag(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Do(t,l):typeof l=="number"&&Do(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&ld(t,s,l,o))}switch(n){case"input":fa(t),vh(t,i,!1);break;case"textarea":fa(t),xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)b0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=br(Go.current),br(ci.current),ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Zt(e),null;case 13:if(_t(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&wn!==null&&e.mode&1&&!(e.flags&128))qg(),ks(),e.flags|=98560,s=!1;else if(s=ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[ai]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else Yn!==null&&(gf(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ut===0&&(Ut=3):Wd())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Hs(),lf(t,e),t===null&&ko(e.stateNode.containerInfo),Zt(e),null;case 10:return Cd(e.type._context),Zt(e),null;case 17:return _n(e.type)&&Rl(),Zt(e),null;case 19:if(_t(St),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)oo(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ul(t),o!==null){for(e.flags|=128,oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Gs&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ul(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Zt(e),null}else 2*bt()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=St.current,pt(St,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Gd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Kx(t,e){switch(Ed(e),e.tag){case 1:return _n(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),_t(vn),_t(tn),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ld(e),null;case 13:if(_t(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(St),null;case 4:return Hs(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var Ea=!1,en=!1,Zx=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function uf(t,e,n){try{n()}catch(i){wt(t,e,i)}}var lp=!1;function Qx(t,e){if(Xc=Tl,t=Ug(),Sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jc={focusedElem:t,selectionRange:n},Tl=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,c=e.stateNode,v=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Xn(e.type,x),m);c.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(E){wt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return _=lp,lp=!1,_}function Ro(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&uf(e,n,s)}r=r.next}while(r!==i)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L0(t){var e=t.alternate;e!==null&&(t.alternate=null,L0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[Ho],delete e[$c],delete e[Nx],delete e[Ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function D0(t){return t.tag===5||t.tag===3||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||D0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(i!==4&&(t=t.child,t!==null))for(ff(t,e,n),t=t.sibling;t!==null;)ff(t,e,n),t=t.sibling}function df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}var jt=null,jn=!1;function zi(t,e,n){for(n=n.child;n!==null;)I0(t,e,n),n=n.sibling}function I0(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:en||ws(n,e);case 6:var i=jt,r=jn;jt=null,zi(t,e,n),jt=i,jn=r,jt!==null&&(jn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(jn?(t=jt,n=n.stateNode,t.nodeType===8?Nu(t.parentNode,n):t.nodeType===1&&Nu(t,n),Fo(t)):Nu(jt,n.stateNode));break;case 4:i=jt,r=jn,jt=n.stateNode.containerInfo,jn=!0,zi(t,e,n),jt=i,jn=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&uf(n,e,o),r=r.next}while(r!==i)}zi(t,e,n);break;case 1:if(!en&&(ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}zi(t,e,n);break;case 21:zi(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,zi(t,e,n),en=i):zi(t,e,n);break;default:zi(t,e,n)}}function cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zx),e.forEach(function(i){var r=ay.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,jn=!1;break e;case 3:jt=a.stateNode.containerInfo,jn=!0;break e;case 4:jt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(jt===null)throw Error(ue(160));I0(s,o,r),jt=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){wt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N0(e,t),e=e.sibling}function N0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ii(t),i&4){try{Ro(3,t,t.return),ou(3,t)}catch(x){wt(t,t.return,x)}try{Ro(5,t,t.return)}catch(x){wt(t,t.return,x)}}break;case 1:Hn(e,t),ii(t),i&512&&n!==null&&ws(n,n.return);break;case 5:if(Hn(e,t),ii(t),i&512&&n!==null&&ws(n,n.return),t.flags&32){var r=t.stateNode;try{Do(r,"")}catch(x){wt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ng(r,s),Uc(a,o);var u=Uc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?ag(r,d):f==="dangerouslySetInnerHTML"?sg(r,d):f==="children"?Do(r,d):ld(r,f,d,u)}switch(a){case"input":bc(r,s);break;case"textarea":ig(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Rs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ho]=s}catch(x){wt(t,t.return,x)}}break;case 6:if(Hn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){wt(t,t.return,x)}}break;case 3:if(Hn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(e.containerInfo)}catch(x){wt(t,t.return,x)}break;case 4:Hn(e,t),ii(t);break;case 13:Hn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hd=bt())),i&4&&cp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(en=(u=en)||f,Hn(e,t),en=u):Hn(e,t),ii(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Pe=t,f=t.child;f!==null;){for(d=Pe=f;Pe!==null;){switch(h=Pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ro(4,h,h.return);break;case 1:ws(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){wt(i,n,x)}}break;case 5:ws(h,h.return);break;case 22:if(h.memoizedState!==null){dp(d);continue}}p!==null?(p.return=h,Pe=p):dp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=og("display",o))}catch(x){wt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){wt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Hn(e,t),ii(t),i&4&&cp(t);break;case 21:break;default:Hn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(D0(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Do(r,""),i.flags&=-33);var s=up(t);df(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=up(t);ff(t,a,o);break;default:throw Error(ue(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jx(t,e,n){Pe=t,U0(t)}function U0(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=Ea;var u=en;if(Ea=o,(en=l)&&!u)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?hp(r):l!==null?(l.return=o,Pe=l):hp(r);for(;s!==null;)Pe=s,U0(s),s=s.sibling;Pe=r,Ea=a,en=u}fp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):fp(t)}}function fp(t){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$h(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$h(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Fo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}en||e.flags&512&&cf(e)}catch(h){wt(e,e.return,h)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function dp(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function hp(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{cf(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{cf(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var ey=Math.ceil,zl=Fi.ReactCurrentDispatcher,kd=Fi.ReactCurrentOwner,zn=Fi.ReactCurrentBatchConfig,at=0,Vt=null,Dt=null,Yt=0,En=0,As=hr(0),Ut=0,Yo=null,Br=0,au=0,Bd=0,Po=null,mn=null,Hd=0,Gs=1/0,Si=null,kl=!1,hf=null,rr=null,Ta=!1,Qi=null,Bl=0,bo=0,pf=null,ul=-1,cl=0;function an(){return at&6?bt():ul!==-1?ul:ul=bt()}function sr(t){return t.mode&1?at&2&&Yt!==0?Yt&-Yt:Ox.transition!==null?(cl===0&&(cl=xg()),cl):(t=ft,t!==0||(t=window.event,t=t===void 0?16:Ag(t.type)),t):1}function Qn(t,e,n,i){if(50<bo)throw bo=0,pf=null,Error(ue(185));Qo(t,n,i),(!(at&2)||t!==Vt)&&(t===Vt&&(!(at&2)&&(au|=n),Ut===4&&$i(t,Yt)),xn(t,i),n===1&&at===0&&!(e.mode&1)&&(Gs=bt()+500,iu&&pr()))}function xn(t,e){var n=t.callbackNode;O_(t,e);var i=El(t,t===Vt?Yt:0);if(i===0)n!==null&&Mh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Mh(n),e===1)t.tag===0?Fx(pp.bind(null,t)):Xg(pp.bind(null,t)),Dx(function(){!(at&6)&&pr()}),n=null;else{switch(yg(i)){case 1:n=hd;break;case 4:n=vg;break;case 16:n=Ml;break;case 536870912:n=_g;break;default:n=Ml}n=G0(n,F0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F0(t,e){if(ul=-1,cl=0,at&6)throw Error(ue(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=El(t,t===Vt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Hl(t,i);else{e=i;var r=at;at|=2;var s=z0();(Vt!==t||Yt!==e)&&(Si=null,Gs=bt()+500,Ur(t,e));do try{iy();break}catch(a){O0(t,a)}while(!0);Ad(),zl.current=s,at=r,Dt!==null?e=0:(Vt=null,Yt=0,e=Ut)}if(e!==0){if(e===2&&(r=Bc(t),r!==0&&(i=r,e=mf(t,r))),e===1)throw n=Yo,Ur(t,0),$i(t,i),xn(t,bt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!ty(r)&&(e=Hl(t,i),e===2&&(s=Bc(t),s!==0&&(i=s,e=mf(t,s))),e===1))throw n=Yo,Ur(t,0),$i(t,i),xn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Tr(t,mn,Si);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Hd+500-bt(),10<e)){if(El(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=qc(Tr.bind(null,t,mn,Si),e);break}Tr(t,mn,Si);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ey(i/1960))-i,10<i){t.timeoutHandle=qc(Tr.bind(null,t,mn,Si),i);break}Tr(t,mn,Si);break;case 5:Tr(t,mn,Si);break;default:throw Error(ue(329))}}}return xn(t,bt()),t.callbackNode===n?F0.bind(null,t):null}function mf(t,e){var n=Po;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Hl(t,e),t!==2&&(e=mn,mn=n,e!==null&&gf(e)),t}function gf(t){mn===null?mn=t:mn.push.apply(mn,t)}function ty(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Bd,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function pp(t){if(at&6)throw Error(ue(327));Is();var e=El(t,0);if(!(e&1))return xn(t,bt()),null;var n=Hl(t,e);if(t.tag!==0&&n===2){var i=Bc(t);i!==0&&(e=i,n=mf(t,i))}if(n===1)throw n=Yo,Ur(t,0),$i(t,e),xn(t,bt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,mn,Si),xn(t,bt()),null}function Vd(t,e){var n=at;at|=1;try{return t(e)}finally{at=n,at===0&&(Gs=bt()+500,iu&&pr())}}function Hr(t){Qi!==null&&Qi.tag===0&&!(at&6)&&Is();var e=at;at|=1;var n=zn.transition,i=ft;try{if(zn.transition=null,ft=1,t)return t()}finally{ft=i,zn.transition=n,at=e,!(at&6)&&pr()}}function Gd(){En=As.current,_t(As)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lx(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(Ed(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rl();break;case 3:Hs(),_t(vn),_t(tn),Dd();break;case 5:Ld(i);break;case 4:Hs();break;case 13:_t(St);break;case 19:_t(St);break;case 10:Cd(i.type._context);break;case 22:case 23:Gd()}n=n.return}if(Vt=t,Dt=t=or(t.current,null),Yt=En=e,Ut=0,Yo=null,Bd=au=Br=0,mn=Po=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Pr=null}return t}function O0(t,e){do{var n=Dt;try{if(Ad(),ol.current=Ol,Fl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fl=!1}if(kr=0,Bt=It=Mt=null,Co=!1,Wo=0,kd.current=null,n===null||n.return===null){Ut=1,Yo=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=tp(o);if(p!==null){p.flags&=-257,np(p,o,a,s,e),p.mode&1&&ep(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){ep(s,u,e),Wd();break e}l=Error(ue(426))}}else if(xt&&a.mode&1){var m=tp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),np(m,o,a,s,e),Td(Vs(l,a));break e}}s=l=Vs(l,a),Ut!==4&&(Ut=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=y0(s,l,e);qh(s,c);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(rr===null||!rr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=S0(s,a,e);qh(s,E);break e}}s=s.return}while(s!==null)}B0(n)}catch(P){e=P,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function z0(){var t=zl.current;return zl.current=Ol,t===null?Ol:t}function Wd(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(Br&268435455)&&!(au&268435455)||$i(Vt,Yt)}function Hl(t,e){var n=at;at|=2;var i=z0();(Vt!==t||Yt!==e)&&(Si=null,Ur(t,e));do try{ny();break}catch(r){O0(t,r)}while(!0);if(Ad(),at=n,zl.current=i,Dt!==null)throw Error(ue(261));return Vt=null,Yt=0,Ut}function ny(){for(;Dt!==null;)k0(Dt)}function iy(){for(;Dt!==null&&!R_();)k0(Dt)}function k0(t){var e=V0(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?B0(t):Dt=e,kd.current=null}function B0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kx(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Dt=null;return}}else if(n=$x(n,e,En),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Tr(t,e,n){var i=ft,r=zn.transition;try{zn.transition=null,ft=1,ry(t,e,n,i)}finally{zn.transition=r,ft=i}return null}function ry(t,e,n,i){do Is();while(Qi!==null);if(at&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(z_(t,s),t===Vt&&(Dt=Vt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ta||(Ta=!0,G0(Ml,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=ft;ft=1;var a=at;at|=4,kd.current=null,Qx(t,n),N0(n,t),Tx(jc),Tl=!!Xc,jc=Xc=null,t.current=n,Jx(n),P_(),at=a,ft=o,zn.transition=s}else t.current=n;if(Ta&&(Ta=!1,Qi=t,Bl=r),s=t.pendingLanes,s===0&&(rr=null),D_(n.stateNode),xn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kl)throw kl=!1,t=hf,hf=null,t;return Bl&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===pf?bo++:(bo=0,pf=t):bo=0,pr(),null}function Is(){if(Qi!==null){var t=yg(Bl),e=zn.transition,n=ft;try{if(zn.transition=null,ft=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,Bl=0,at&6)throw Error(ue(331));var r=at;for(at|=4,Pe=t.current;Pe!==null;){var s=Pe,o=s.child;if(Pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Pe=u;Pe!==null;){var f=Pe;switch(f.tag){case 0:case 11:case 15:Ro(8,f,s)}var d=f.child;if(d!==null)d.return=f,Pe=d;else for(;Pe!==null;){f=Pe;var h=f.sibling,p=f.return;if(L0(f),f===u){Pe=null;break}if(h!==null){h.return=p,Pe=h;break}Pe=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,Pe=c;break e}Pe=s.return}}var v=t.current;for(Pe=v;Pe!==null;){o=Pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,Pe=g;else e:for(o=v;Pe!==null;){if(a=Pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ou(9,a)}}catch(P){wt(a,a.return,P)}if(a===o){Pe=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Pe=E;break e}Pe=a.return}}if(at=r,pr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Ql,t)}catch{}i=!0}return i}finally{ft=n,zn.transition=e}}return!1}function mp(t,e,n){e=Vs(n,e),e=y0(t,e,1),t=ir(t,e,1),e=an(),t!==null&&(Qo(t,1,e),xn(t,e))}function wt(t,e,n){if(t.tag===3)mp(t,t,n);else for(;e!==null;){if(e.tag===3){mp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=Vs(n,t),t=S0(e,t,1),e=ir(e,t,1),t=an(),e!==null&&(Qo(e,1,t),xn(e,t));break}}e=e.return}}function sy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Yt&n)===n&&(Ut===4||Ut===3&&(Yt&130023424)===Yt&&500>bt()-Hd?Ur(t,0):Bd|=n),xn(t,e)}function H0(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=an();t=Di(t,e),t!==null&&(Qo(t,e,n),xn(t,n))}function oy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H0(t,n)}function ay(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),H0(t,n)}var V0;V0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,qx(t,e,n);gn=!!(t.flags&131072)}else gn=!1,xt&&e.flags&1048576&&jg(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(t,e),t=e.pendingProps;var r=zs(e,tn.current);Ds(e,n),r=Nd(null,e,i,t,r,n);var s=Ud();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,Pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pd(e),r.updater=su,e.stateNode=r,r._reactInternals=e,tf(e,i,t,n),e=sf(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&Md(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uy(i),t=Xn(i,t),r){case 0:e=rf(null,e,i,t,n);break e;case 1:e=sp(null,e,i,t,n);break e;case 11:e=ip(null,e,i,t,n);break e;case 14:e=rp(null,e,i,Xn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),rf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),sp(t,e,i,r,n);case 3:e:{if(w0(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Qg(t,e),Nl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vs(Error(ue(423)),e),e=op(t,e,i,n,r);break e}else if(i!==r){r=Vs(Error(ue(424)),e),e=op(t,e,i,n,r);break e}else for(wn=nr(e.stateNode.containerInfo.firstChild),An=e,xt=!0,Yn=null,n=Kg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Ii(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return Jg(e),t===null&&Qc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Yc(i,r)?o=null:s!==null&&Yc(i,s)&&(e.flags|=32),T0(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&Qc(e),null;case 13:return A0(t,e,n);case 4:return bd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bs(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),ip(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(Dl,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!vn.current){e=Ii(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Jc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=kn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),rp(t,e,i,r,n);case 15:return M0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),ll(t,e),e.tag=1,_n(i)?(t=!0,Pl(e)):t=!1,Ds(e,n),x0(e,i,r),tf(e,i,r,n),sf(null,e,i,!0,t,n);case 19:return C0(t,e,n);case 22:return E0(t,e,n)}throw Error(ue(156,e.tag))};function G0(t,e){return gg(t,e)}function ly(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new ly(t,e,n,i)}function Xd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uy(t){if(typeof t=="function")return Xd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cd)return 11;if(t===fd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return Fr(n.children,r,s,e);case ud:o=8,r|=8;break;case wc:return t=Fn(12,n,e,r|2),t.elementType=wc,t.lanes=s,t;case Ac:return t=Fn(13,n,e,r),t.elementType=Ac,t.lanes=s,t;case Cc:return t=Fn(19,n,e,r),t.elementType=Cc,t.lanes=s,t;case Jm:return lu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Zm:o=10;break e;case Qm:o=9;break e;case cd:o=11;break e;case fd:o=14;break e;case Xi:o=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function lu(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=Jm,t.lanes=n,t.stateNode={isHidden:!1},t}function Vu(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Gu(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eu(0),this.expirationTimes=Eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jd(t,e,n,i,r,s,o,a,l){return t=new cy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),t}function fy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function W0(t){if(!t)return cr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(_n(n))return Wg(t,n,e)}return e}function X0(t,e,n,i,r,s,o,a,l){return t=jd(n,i,!0,t,r,s,o,a,l),t.context=W0(null),n=t.current,i=an(),r=sr(n),s=Pi(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,Qo(t,r,i),xn(t,i),t}function uu(t,e,n,i){var r=e.current,s=an(),o=sr(r);return n=W0(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,o),t!==null&&(Qn(t,r,o,s),sl(t,r,o)),o}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yd(t,e){gp(t,e),(t=t.alternate)&&gp(t,e)}function dy(){return null}var j0=typeof reportError=="function"?reportError:function(t){console.error(t)};function qd(t){this._internalRoot=t}cu.prototype.render=qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));uu(t,e,null,null)};cu.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){uu(null,t,null,null)}),e[Li]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Eg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&wg(t)}};function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function hy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Vl(o);s.call(u)}}var o=X0(e,i,t,0,null,!1,!1,"",vp);return t._reactRootContainer=o,t[Li]=o.current,ko(t.nodeType===8?t.parentNode:t),Hr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Vl(l);a.call(u)}}var l=jd(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=l,t[Li]=l.current,ko(t.nodeType===8?t.parentNode:t),Hr(function(){uu(e,l,n,i)}),l}function du(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vl(o);a.call(l)}}uu(e,o,t,r)}else o=hy(n,e,t,r,i);return Vl(o)}Sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vo(e.pendingLanes);n!==0&&(pd(e,n|1),xn(e,bt()),!(at&6)&&(Gs=bt()+500,pr()))}break;case 13:Hr(function(){var i=Di(t,1);if(i!==null){var r=an();Qn(i,t,1,r)}}),Yd(t,1)}};md=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=an();Qn(e,t,134217728,n)}Yd(t,134217728)}};Mg=function(t){if(t.tag===13){var e=sr(t),n=Di(t,e);if(n!==null){var i=an();Qn(n,t,e,i)}Yd(t,e)}};Eg=function(){return ft};Tg=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};Oc=function(t,e,n){switch(e){case"input":if(bc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nu(i);if(!r)throw Error(ue(90));tg(i),bc(i,r)}}}break;case"textarea":ig(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};cg=Vd;fg=Hr;var py={usingClientEntryPoint:!1,Events:[ea,ys,nu,lg,ug,Vd]},ao={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},my={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pg(t),t===null?null:t.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{Ql=wa.inject(my),ui=wa}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(ue(200));return fy(t,e,null,n)};Pn.createRoot=function(t,e){if(!$d(t))throw Error(ue(299));var n=!1,i="",r=j0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jd(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,ko(t.nodeType===8?t.parentNode:t),new qd(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=pg(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return Hr(t)};Pn.hydrate=function(t,e,n){if(!fu(e))throw Error(ue(200));return du(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!$d(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=j0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=X0(e,null,t,1,n??null,r,!1,s,o),t[Li]=e.current,ko(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cu(e)};Pn.render=function(t,e,n){if(!fu(e))throw Error(ue(200));return du(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!fu(t))throw Error(ue(40));return t._reactRootContainer?(Hr(function(){du(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};Pn.unstable_batchedUpdates=Vd;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fu(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return du(t,e,n,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function Y0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y0)}catch(t){console.error(t)}}Y0(),Ym.exports=Pn;var gy=Ym.exports,_p=gy;Ec.createRoot=_p.createRoot,Ec.hydrateRoot=_p.hydrateRoot;const q0=[{id:"iss",label:"ISS & Space Stations",color:"#ff4444"},{id:"starlink",label:"Starlink",color:"#44ff44"},{id:"weather",label:"Weather Satellites",color:"#ffaa00"},{id:"science",label:"Science & Astronomy",color:"#4444ff"},{id:"other",label:"Other Objects",color:"#aaaaaa"}];function Wu(t){const e=t.split(/\r?\n/).map(r=>r.trim()).filter(r=>r.length>0),n=[],i=new Set;for(let r=0;r<e.length;r++){let s="",o="",a="";if(e[r].startsWith("1 ")&&r+1<e.length&&e[r+1].startsWith("2 "))s=`SAT-${e[r].substring(2,7).trim()}`,o=e[r],a=e[r+1],r+=1;else if(r+2<e.length&&e[r+1].startsWith("1 ")&&e[r+2].startsWith("2 "))s=e[r],o=e[r+1],a=e[r+2],r+=2;else continue;const l=o.substring(2,7).trim(),u=parseInt(l,10);if(isNaN(u)||i.has(u))continue;const f=parseInt(o.substring(18,20),10),d=parseFloat(o.substring(20,32)),h=f<57?2e3+f:1900+f,p=new Date(Date.UTC(h,0,1)+(d-1)*864e5),_=s.toUpperCase();let x="other";_.includes("ISS")||_.includes("ZARYA")||_.includes("CSS")?x="iss":_.includes("STARLINK")?x="starlink":_.includes("NOAA")||_.includes("GOES")||_.includes("METEOR")?x="weather":(_.includes("HST")||_.includes("CHANDRA")||_.includes("INTEGRAL"))&&(x="science"),i.add(u),n.push({norad:u,name:s,tle1:o,tle2:a,epoch:p,group:x})}return n}function Kd(t){return new Promise((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)})}function vy(t,e){let n;const i=()=>{if(n)return n;const r=indexedDB.open(t);return r.onupgradeneeded=()=>r.result.createObjectStore(e),n=Kd(r),n.then(s=>{s.onclose=()=>n=void 0},()=>{n=void 0}),n};return(r,s)=>i().then(o=>s(o.transaction(e,r).objectStore(e)))}let Xu;function $0(){return Xu||(Xu=vy("keyval-store","keyval")),Xu}function xp(t,e=$0()){return e("readonly",n=>Kd(n.get(t)))}function yp(t,e,n=$0()){return n("readwrite",i=>(i.put(e,t),Kd(i.transaction)))}const K0="tle-data",Z0="tle-time",_y=2*60*60*1e3;async function xy(){try{const t=await xp(K0),e=await xp(Z0);return!t||!e||Date.now()-e>_y?null:{text:t,timestamp:e}}catch{return null}}async function yy(t){try{await yp(K0,t),await yp(Z0,Date.now())}catch{}}function Sy(){const[t,e]=qe.useState({data:[],source:"SNAPSHOT"}),n=qe.useRef(0);return qe.useEffect(()=>{const i=++n.current;let r=!1;async function s(){let o=!1;try{const l=await fetch("/snapshot.tle",{signal:AbortSignal.timeout(2e3)});if(l.ok){const u=await l.text(),f=Wu(u);f.length>0&&!r&&n.current===i&&(e({data:f,source:"SNAPSHOT"}),o=!0)}}catch{}if(!o){const l=await xy();if(l&&!r&&n.current===i){const u=Wu(l.text);u.length>0&&e({data:u,source:"CACHED"})}}const a=[2e3,4e3,8e3];for(const l of a){if(r||n.current!==i)return;try{const u=await fetch("https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle");if(u.status===200){const f=await u.text();if(f.length>500){const d=Wu(f);if(d.length>100&&!r&&n.current===i){e({data:d,source:"LIVE"}),await yy(f);break}}}}catch{await new Promise(u=>setTimeout(u,l))}}}return s(),()=>{r=!0}},[]),t}function My(){const[t,e]=qe.useState(()=>Date.now()),[n,i]=qe.useState(!1),[r,s]=qe.useState(1),o=qe.useRef(Date.now()),a=qe.useRef(Date.now()),l=qe.useRef(1),u=qe.useRef(!1),f=qe.useRef(Date.now()),d=qe.useCallback((_,x)=>{const m=Date.now(),c=u.current?a.current:a.current+(m-o.current)*l.current;o.current=m,a.current=c,l.current=_,u.current=x},[]),h=qe.useCallback(()=>{i(_=>{const x=!_;return d(l.current,x),x})},[d]),p=qe.useCallback(_=>{s(_),d(_,u.current)},[d]);return qe.useEffect(()=>{let _;const x=()=>{if(!u.current){const m=Date.now(),c=a.current+(m-o.current)*l.current;Math.abs(c-f.current)>50&&(f.current=c,e(c))}_=requestAnimationFrame(x)};return _=requestAnimationFrame(x),()=>cancelAnimationFrame(_)},[]),{simTime:t,paused:n,speed:r,togglePause:h,setSpeed:p}}function Ey(t,e){const[n,i]=qe.useState([]),r=qe.useRef(null),s=qe.useRef(0);return qe.useEffect(()=>{if(t.length===0)return;r.current&&r.current.terminate();const o=new Worker(new URL("/starlink/assets/propagator.worker-D01MEj1n.js",import.meta.url),{type:"module"});r.current=o;const a=++s.current,l=t.map(u=>({tle1:u.tle1,tle2:u.tle2}));return o.postMessage({type:"INIT",tles:l,genId:a}),o.onmessage=u=>{const f=u.data;f.type==="POSITIONS"&&f.genId===s.current&&i(f.positions)},()=>{o.terminate()}},[t]),qe.useEffect(()=>{r.current&&t.length>0&&r.current.postMessage({type:"FRAME",simTime:e,genId:s.current})},[e,t.length]),n}function Ty(t){const[e,n]=qe.useState(()=>new URLSearchParams(window.location.search).get(t)),i=r=>{n(r);const s=new URLSearchParams(window.location.search);r?s.set(t,r):s.delete(t);const o=`${window.location.pathname}?${s.toString()}`;window.history.replaceState(null,"",o)};return qe.useEffect(()=>{const r=()=>{const s=new URLSearchParams(window.location.search);n(s.get(t))};return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[t]),[e,i]}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="166",Kr={ROTATE:0,DOLLY:1,PAN:2},Zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wy=0,Sp=1,Ay=2,Q0=1,Cy=2,yi=3,fr=0,ln=1,Ei=2,ar=0,Ns=1,vf=2,Mp=3,Ep=4,Ry=5,Ar=100,Py=101,by=102,Ly=103,Dy=104,Iy=200,Ny=201,Uy=202,Fy=203,_f=204,xf=205,Oy=206,zy=207,ky=208,By=209,Hy=210,Vy=211,Gy=212,Wy=213,Xy=214,jy=0,Yy=1,qy=2,Gl=3,$y=4,Ky=5,Zy=6,Qy=7,J0=0,Jy=1,eS=2,lr=0,tS=1,nS=2,iS=3,ev=4,rS=5,sS=6,oS=7,tv=300,Ws=301,Xs=302,yf=303,Sf=304,hu=306,Mf=1e3,Lr=1001,Ef=1002,On=1003,aS=1004,Aa=1005,qn=1006,ju=1007,Dr=1008,Ni=1009,nv=1010,iv=1011,qo=1012,Qd=1013,Vr=1014,Ai=1015,na=1016,Jd=1017,eh=1018,js=1020,rv=35902,sv=1021,ov=1022,$n=1023,av=1024,lv=1025,Us=1026,Ys=1027,uv=1028,th=1029,cv=1030,nh=1031,ih=1033,dl=33776,hl=33777,pl=33778,ml=33779,Tf=35840,wf=35841,Af=35842,Cf=35843,Rf=36196,Pf=37492,bf=37496,Lf=37808,Df=37809,If=37810,Nf=37811,Uf=37812,Ff=37813,Of=37814,zf=37815,kf=37816,Bf=37817,Hf=37818,Vf=37819,Gf=37820,Wf=37821,gl=36492,Xf=36494,jf=36495,fv=36283,Yf=36284,qf=36285,$f=36286,lS=3200,uS=3201,dv=0,cS=1,Ki="",si="srgb",mr="srgb-linear",rh="display-p3",pu="display-p3-linear",Wl="linear",vt="srgb",Xl="rec709",jl="p3",Qr=7680,Tp=519,fS=512,dS=513,hS=514,hv=515,pS=516,mS=517,gS=518,vS=519,wp=35044,Ap="300 es",Ci=2e3,Yl=2001;class Yr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vl=Math.PI/180,Kf=180/Math.PI;function ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function _S(t,e){return(t%e+e)%e}function Yu(t,e,n){return(1-n)*t+n*e}function lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const xS={DEG2RAD:vl};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,n,i,r,s,o,a,l,u){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],p=i[5],_=i[8],x=r[0],m=r[3],c=r[6],v=r[1],g=r[4],E=r[7],P=r[2],w=r[5],C=r[8];return s[0]=o*x+a*v+l*P,s[3]=o*m+a*g+l*w,s[6]=o*c+a*E+l*C,s[1]=u*x+f*v+d*P,s[4]=u*m+f*g+d*w,s[7]=u*c+f*E+d*C,s[2]=h*x+p*v+_*P,s[5]=h*m+p*g+_*w,s[8]=h*c+p*E+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,p=u*s-o*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qu.makeScale(e,n)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qu=new Ke;function pv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $o(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yS(){const t=$o("canvas");return t.style.display="block",t}const Cp={};function mv(t){t in Cp||(Cp[t]=!0,console.warn(t))}function SS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Rp=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pp=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ca={[mr]:{transfer:Wl,primaries:Xl,toReference:t=>t,fromReference:t=>t},[si]:{transfer:vt,primaries:Xl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[pu]:{transfer:Wl,primaries:jl,toReference:t=>t.applyMatrix3(Pp),fromReference:t=>t.applyMatrix3(Rp)},[rh]:{transfer:vt,primaries:jl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Pp),fromReference:t=>t.applyMatrix3(Rp).convertLinearToSRGB()}},MS=new Set([mr,pu]),ct={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!MS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ca[e].toReference,r=Ca[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ca[t].primaries},getTransfer:function(t){return t===Ki?Wl:Ca[t].transfer}};function Fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $u(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Jr;class ES{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=$o("canvas")),Jr.width=e.width,Jr.height=e.height;const i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$o("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Fs(n[i]/255)*255):n[i]=Fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TS=0;class gv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ku(r[o].image)):s.push(Ku(r[o]))}else s=Ku(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ES.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wS=0;class un extends Yr{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Lr,r=Lr,s=qn,o=Dr,a=$n,l=Ni,u=un.DEFAULT_ANISOTROPY,f=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ia(),this.name="",this.source=new gv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mf:e.x=e.x-Math.floor(e.x);break;case Lr:e.x=e.x<0?0:1;break;case Ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mf:e.y=e.y-Math.floor(e.y);break;case Lr:e.y=e.y<0?0:1;break;case Ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=tv;un.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,E=(p+1)/2,P=(c+1)/2,w=(f+h)/4,C=(d+x)/4,D=(_+m)/4;return g>E&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=C/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-x)/v,this.z=(h-f)/v,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AS extends Yr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new gv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends AS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vv extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CS extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||u!==p||f!==_){let m=1-a;const c=l*h+u*p+f*_+d*x,v=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const P=Math.sqrt(g),w=Math.atan2(P,c*v);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}const E=a*v;if(l=l*m+h*E,u=u*m+p*E,f=f*m+_*E,d=d*m+x*E,m===1-a){const P=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=P,u*=P,f*=P,d*=P}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*p-u*h,e[n+1]=l*_+f*h+u*d-a*p,e[n+2]=u*_+f*p+a*h-l*d,e[n+3]=f*_-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*p*_,this._y=u*p*d-h*f*_,this._z=u*f*_+h*p*d,this._w=u*f*d-h*p*_;break;case"YXZ":this._x=h*f*d+u*p*_,this._y=u*p*d-h*f*_,this._z=u*f*_-h*p*d,this._w=u*f*d+h*p*_;break;case"ZXY":this._x=h*f*d-u*p*_,this._y=u*p*d+h*f*_,this._z=u*f*_+h*p*d,this._w=u*f*d-h*p*_;break;case"ZYX":this._x=h*f*d-u*p*_,this._y=u*p*d+h*f*_,this._z=u*f*_-h*p*d,this._w=u*f*d+h*p*_;break;case"YZX":this._x=h*f*d+u*p*_,this._y=u*p*d+h*f*_,this._z=u*f*_-h*p*d,this._w=u*f*d-h*p*_;break;case"XZY":this._x=h*f*d-u*p*_,this._y=u*p*d-h*f*_,this._z=u*f*_+h*p*d,this._w=u*f*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zu=new V,bp=new Wr;class ra{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Pa.subVectors(this.max,uo),es.subVectors(e.a,uo),ts.subVectors(e.b,uo),ns.subVectors(e.c,uo),ki.subVectors(ts,es),Bi.subVectors(ns,ts),vr.subVectors(es,ns);let n=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-vr.z,vr.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,vr.z,0,-vr.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-vr.y,vr.x,0];return!Qu(n,es,ts,ns,Pa)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,es,ts,ns,Pa))?!1:(ba.crossVectors(ki,Bi),n=[ba.x,ba.y,ba.z],Qu(n,es,ts,ns,Pa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new V,new V,new V,new V,new V,new V,new V,new V],Vn=new V,Ra=new ra,es=new V,ts=new V,ns=new V,ki=new V,Bi=new V,vr=new V,uo=new V,Pa=new V,ba=new V,_r=new V;function Qu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){_r.fromArray(t,s);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),u=n.dot(_r),f=i.dot(_r);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const RS=new ra,co=new V,Ju=new V;class sa{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):RS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const n=co.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(Ju)),this.expandByPoint(co.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new V,ec=new V,La=new V,Hi=new V,tc=new V,Da=new V,nc=new V;class oa{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ec.copy(e).add(n).multiplyScalar(.5),La.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(ec);const s=e.distanceTo(n)*.5,o=-this.direction.dot(La),a=Hi.dot(this.direction),l=-Hi.dot(La),u=Hi.lengthSq(),f=Math.abs(1-o*o);let d,h,p,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const x=1/f;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ec).addScaledVector(La,h),p}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){tc.subVectors(n,e),Da.subVectors(i,e),nc.crossVectors(tc,Da);let o=this.direction.dot(nc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot(Da.crossVectors(Hi,Da));if(l<0)return null;const u=a*this.direction.dot(tc.cross(Hi));if(u<0||l+u>o)return null;const f=-a*Hi.dot(nc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,u,f,d,h,p,_,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,p,_,x,m)}set(e,n,i,r,s,o,a,l,u,f,d,h,p,_,x,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=p,c[7]=_,c[11]=x,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,_=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=p+_*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,_=u*f,x=u*d;n[0]=h+x*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,_=u*f,x=u*d;n[0]=h-x*a,n[4]=-o*d,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,_=a*f,x=a*d;n[0]=l*f,n[4]=_*u-p,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,x=a*u;n[0]=l*f,n[4]=x-h*d,n[8]=_*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,x=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+x,n[5]=o*f,n[9]=p*d-_,n[2]=_*d-p,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PS,e,bS)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Vi.crossVectors(i,Sn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Vi.crossVectors(i,Sn)),Vi.normalize(),Ia.crossVectors(Sn,Vi),r[0]=Vi.x,r[4]=Ia.x,r[8]=Sn.x,r[1]=Vi.y,r[5]=Ia.y,r[9]=Sn.y,r[2]=Vi.z,r[6]=Ia.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],c=i[14],v=i[3],g=i[7],E=i[11],P=i[15],w=r[0],C=r[4],D=r[8],T=r[12],S=r[1],b=r[5],F=r[9],B=r[13],q=r[2],Z=r[6],k=r[10],ne=r[14],I=r[3],$=r[7],Q=r[11],ie=r[15];return s[0]=o*w+a*S+l*q+u*I,s[4]=o*C+a*b+l*Z+u*$,s[8]=o*D+a*F+l*k+u*Q,s[12]=o*T+a*B+l*ne+u*ie,s[1]=f*w+d*S+h*q+p*I,s[5]=f*C+d*b+h*Z+p*$,s[9]=f*D+d*F+h*k+p*Q,s[13]=f*T+d*B+h*ne+p*ie,s[2]=_*w+x*S+m*q+c*I,s[6]=_*C+x*b+m*Z+c*$,s[10]=_*D+x*F+m*k+c*Q,s[14]=_*T+x*B+m*ne+c*ie,s[3]=v*w+g*S+E*q+P*I,s[7]=v*C+g*b+E*Z+P*$,s[11]=v*D+g*F+E*k+P*Q,s[15]=v*T+g*B+E*ne+P*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],c=e[15];return _*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*f-s*l*f)+m*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],c=e[15],v=d*m*u-x*h*u+x*l*p-a*m*p-d*l*c+a*h*c,g=_*h*u-f*m*u-_*l*p+o*m*p+f*l*c-o*h*c,E=f*x*u-_*d*u+_*a*p-o*x*p-f*a*c+o*d*c,P=_*d*l-f*x*l-_*a*h+o*x*h+f*a*m-o*d*m,w=n*v+i*g+r*E+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=v*C,e[1]=(x*h*s-d*m*s-x*r*p+i*m*p+d*r*c-i*h*c)*C,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*c+i*l*c)*C,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*C,e[4]=g*C,e[5]=(f*m*s-_*h*s+_*r*p-n*m*p-f*r*c+n*h*c)*C,e[6]=(_*l*s-o*m*s-_*r*u+n*m*u+o*r*c-n*l*c)*C,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*p+n*l*p)*C,e[8]=E*C,e[9]=(_*d*s-f*x*s-_*i*p+n*x*p+f*i*c-n*d*c)*C,e[10]=(o*x*s-_*a*s+_*i*u-n*x*u-o*i*c+n*a*c)*C,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*p-n*a*p)*C,e[12]=P*C,e[13]=(f*x*r-_*d*r+_*i*h-n*x*h-f*i*m+n*d*m)*C,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*m-n*a*m)*C,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,p=s*f,_=s*d,x=o*f,m=o*d,c=a*d,v=l*u,g=l*f,E=l*d,P=i.x,w=i.y,C=i.z;return r[0]=(1-(x+c))*P,r[1]=(p+E)*P,r[2]=(_-g)*P,r[3]=0,r[4]=(p-E)*w,r[5]=(1-(h+c))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+g)*C,r[9]=(m-v)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=is.set(r[0],r[1],r[2]).length();const o=is.set(r[4],r[5],r[6]).length(),a=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const u=1/s,f=1/o,d=1/a;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,n.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ci){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===Ci)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Yl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ci){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,p=(i+r)*f;let _,x;if(a===Ci)_=(o+s)*d,x=-2*d;else if(a===Yl)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const is=new V,Gn=new yt,PS=new V(0,0,0),bS=new V(1,1,1),Vi=new V,Ia=new V,Sn=new V,Lp=new yt,Dp=new Wr;class fi{constructor(e=0,n=0,i=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dp.setFromEuler(this),this.setFromQuaternion(Dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LS=0;const Ip=new V,rs=new Wr,vi=new yt,Na=new V,fo=new V,DS=new V,IS=new Wr,Np=new V(1,0,0),Up=new V(0,1,0),Fp=new V(0,0,1),Op={type:"added"},NS={type:"removed"},ss={type:"childadded",child:null},ic={type:"childremoved",child:null};class Gt extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new V,n=new fi,i=new Wr,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ke}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Np,e)}rotateY(e){return this.rotateOnAxis(Up,e)}rotateZ(e){return this.rotateOnAxis(Fp,e)}translateOnAxis(e,n){return Ip.copy(e).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Np,e)}translateY(e){return this.translateOnAxis(Up,e)}translateZ(e){return this.translateOnAxis(Fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Na.copy(e):Na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(fo,Na,this.up):vi.lookAt(Na,fo,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(vi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Op),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(NS),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Op),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,DS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,IS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new V(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new V,_i=new V,rc=new V,xi=new V,os=new V,as=new V,zp=new V,sc=new V,oc=new V,ac=new V;class li{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),_i.subVectors(i,n),rc.subVectors(e,n);const o=Wn.dot(Wn),a=Wn.dot(_i),l=Wn.dot(rc),u=_i.dot(_i),f=_i.dot(rc),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),_i.subVectors(e,n),Wn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return li.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),sc.subVectors(e,i);const l=os.dot(sc),u=as.dot(sc);if(l<=0&&u<=0)return n.copy(i);oc.subVectors(e,r);const f=os.dot(oc),d=as.dot(oc);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(os,o);ac.subVectors(e,s);const p=os.dot(ac),_=as.dot(ac);if(_>=0&&p<=_)return n.copy(s);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(as,a);const m=f*_-p*d;if(m<=0&&d-f>=0&&p-_>=0)return zp.subVectors(s,r),a=(d-f)/(d-f+(p-_)),n.copy(r).addScaledVector(zp,a);const c=1/(m+x+h);return o=x*c,a=h*c,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function lc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=_S(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=lc(o,s,e+1/3),this.g=lc(o,s,e),this.b=lc(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,n=si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=si){const i=_v[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=$u(e.r),this.g=$u(e.g),this.b=$u(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return ct.fromWorkingColorSpace(Jt.copy(this),e),Math.round(sn(Jt.r*255,0,255))*65536+Math.round(sn(Jt.g*255,0,255))*256+Math.round(sn(Jt.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=si){ct.fromWorkingColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==si?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+n,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gi),e.getHSL(Ua);const i=Yu(Gi.h,Ua.h,n),r=Yu(Gi.s,Ua.s,n),s=Yu(Gi.l,Ua.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new ot;ot.NAMES=_v;let US=0;class qr extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Ns,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_f,this.blendDst=xf,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_f&&(i.blendSrc=this.blendSrc),this.blendDst!==xf&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class xv extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=J0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new V,Fa=new Xe;class on{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fa.fromBufferAttribute(this,n),Fa.applyMatrix3(e),this.setXY(n,Fa.x,Fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wp&&(e.usage=this.usage),e}}class yv extends on{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sv extends on{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Cn extends on{constructor(e,n,i){super(new Float32Array(e),n,i)}}let FS=0;const Dn=new yt,uc=new Gt,ls=new V,Mn=new ra,ho=new ra,kt=new V;class Ht extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pv(e)?Sv:yv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Cn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(Mn.min,ho.min),Mn.expandByPoint(kt),kt.addVectors(Mn.max,ho.max),Mn.expandByPoint(kt)):(Mn.expandByPoint(ho.min),Mn.expandByPoint(ho.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)kt.fromBufferAttribute(a,u),l&&(ls.fromBufferAttribute(e,u),kt.add(ls)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new V,l[D]=new V;const u=new V,f=new V,d=new V,h=new Xe,p=new Xe,_=new Xe,x=new V,m=new V;function c(D,T,S){u.fromBufferAttribute(i,D),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,S),f.sub(u),d.sub(u),p.sub(h),_.sub(h);const b=1/(p.x*_.y-_.x*p.y);isFinite(b)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(b),a[D].add(x),a[T].add(x),a[S].add(x),l[D].add(m),l[T].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,T=v.length;D<T;++D){const S=v[D],b=S.start,F=S.count;for(let B=b,q=b+F;B<q;B+=3)c(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const g=new V,E=new V,P=new V,w=new V;function C(D){P.fromBufferAttribute(r,D),w.copy(P);const T=a[D];g.copy(T),g.sub(P.multiplyScalar(P.dot(T))).normalize(),E.crossVectors(w,T);const b=E.dot(l[D])<0?-1:1;o.setXYZW(D,g.x,g.y,g.z,b)}for(let D=0,T=v.length;D<T;++D){const S=v[D],b=S.start,F=S.count;for(let B=b,q=b+F;B<q;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,u=new V,f=new V,d=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let c=0;c<f;c++)h[_++]=u[p++]}return new on(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ht,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kp=new yt,xr=new oa,Oa=new sa,Bp=new V,us=new V,cs=new V,fs=new V,cc=new V,za=new V,ka=new Xe,Ba=new Xe,Ha=new Xe,Hp=new V,Vp=new V,Gp=new V,Va=new V,Ga=new V;class Kn extends Gt{constructor(e=new Ht,n=new xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){za.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(cc.fromBufferAttribute(d,e),o?za.addScaledVector(cc,f):za.addScaledVector(cc.sub(n),f))}n.add(za)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Oa.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Oa,Bp)===null||xr.origin.distanceToSquared(Bp)>(e.far-e.near)**2))&&(kp.copy(s).invert(),xr.copy(e.ray).applyMatrix4(kp),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],c=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,P=g;E<P;E+=3){const w=a.getX(E),C=a.getX(E+1),D=a.getX(E+2);r=Wa(this,c,e,i,u,f,d,w,C,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,c=x;m<c;m+=3){const v=a.getX(m),g=a.getX(m+1),E=a.getX(m+2);r=Wa(this,o,e,i,u,f,d,v,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],c=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,P=g;E<P;E+=3){const w=E,C=E+1,D=E+2;r=Wa(this,c,e,i,u,f,d,w,C,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,c=x;m<c;m+=3){const v=m,g=m+1,E=m+2;r=Wa(this,o,e,i,u,f,d,v,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function OS(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fr,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ga);return u<n.near||u>n.far?null:{distance:u,point:Ga.clone(),object:t}}function Wa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,us),t.getVertexPosition(l,cs),t.getVertexPosition(u,fs);const f=OS(t,e,n,i,us,cs,fs,Va);if(f){r&&(ka.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),Ha.fromBufferAttribute(r,u),f.uv=li.getInterpolation(Va,us,cs,fs,ka,Ba,Ha,new Xe)),s&&(ka.fromBufferAttribute(s,a),Ba.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,u),f.uv1=li.getInterpolation(Va,us,cs,fs,ka,Ba,Ha,new Xe)),o&&(Hp.fromBufferAttribute(o,a),Vp.fromBufferAttribute(o,l),Gp.fromBufferAttribute(o,u),f.normal=li.getInterpolation(Va,us,cs,fs,Hp,Vp,Gp,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new V,materialIndex:0};li.getNormal(us,cs,fs,d.normal),f.face=d}return f}class aa extends Ht{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Cn(u,3)),this.setAttribute("normal",new Cn(f,3)),this.setAttribute("uv",new Cn(d,2));function _(x,m,c,v,g,E,P,w,C,D,T){const S=E/C,b=P/D,F=E/2,B=P/2,q=w/2,Z=C+1,k=D+1;let ne=0,I=0;const $=new V;for(let Q=0;Q<k;Q++){const ie=Q*b-B;for(let le=0;le<Z;le++){const Be=le*S-F;$[x]=Be*v,$[m]=ie*g,$[c]=q,u.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[c]=w>0?1:-1,f.push($.x,$.y,$.z),d.push(le/C),d.push(1-Q/D),ne+=1}}for(let Q=0;Q<D;Q++)for(let ie=0;ie<C;ie++){const le=h+ie+Z*Q,Be=h+ie+Z*(Q+1),Y=h+(ie+1)+Z*(Q+1),X=h+(ie+1)+Z*Q;l.push(le,Be,X),l.push(Be,Y,X),I+=6}a.addGroup(p,I,T),p+=I,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function zS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const kS={clone:qs,merge:nn};var BS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BS,this.fragmentShader=HS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=zS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ev extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new V,Wp=new Xe,Xp=new Xe;class Un extends Ev{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Kf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kf*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,Wp,Xp),n.subVectors(Xp,Wp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ds=-90,hs=1;class VS extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(ds,hs,e,n);r.layers=this.layers,this.add(r);const s=new Un(ds,hs,e,n);s.layers=this.layers,this.add(s);const o=new Un(ds,hs,e,n);o.layers=this.layers,this.add(o);const a=new Un(ds,hs,e,n);a.layers=this.layers,this.add(a);const l=new Un(ds,hs,e,n);l.layers=this.layers,this.add(l);const u=new Un(ds,hs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Tv extends un{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GS extends Gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new aa(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ar});s.uniforms.tEquirect.value=n;const o=new Kn(r,s),a=n.minFilter;return n.minFilter===Dr&&(n.minFilter=qn),new VS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const fc=new V,WS=new V,XS=new Ke;class Yi{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fc.subVectors(i,n).cross(WS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||XS.getNormalMatrix(e),r=this.coplanarPoint(fc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new sa,Xa=new V;class oh{constructor(e=new Yi,n=new Yi,i=new Yi,r=new Yi,s=new Yi,o=new Yi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],p=r[8],_=r[9],x=r[10],m=r[11],c=r[12],v=r[13],g=r[14],E=r[15];if(i[0].setComponents(l-s,h-u,m-p,E-c).normalize(),i[1].setComponents(l+s,h+u,m+p,E+c).normalize(),i[2].setComponents(l+o,h+f,m+_,E+v).normalize(),i[3].setComponents(l-o,h-f,m-_,E-v).normalize(),i[4].setComponents(l-a,h-d,m-x,E-g).normalize(),n===Ci)i[5].setComponents(l+a,h+d,m+x,E+g).normalize();else if(n===Yl)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jS(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const f=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),d.count===-1&&h.length===0&&t.bufferSubData(u,0,f),h.length!==0){for(let p=0,_=h.length;p<_;p++){const x=h[p];t.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class mu extends Ht{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,p=[],_=[],x=[],m=[];for(let c=0;c<f;c++){const v=c*h-o;for(let g=0;g<u;g++){const E=g*d-s;_.push(E,-v,0),x.push(0,0,1),m.push(g/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){const g=v+u*c,E=v+u*(c+1),P=v+1+u*(c+1),w=v+1+u*c;p.push(g,E,w),p.push(E,P,w)}this.setIndex(p),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(x,3)),this.setAttribute("uv",new Cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}var YS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qS=`#ifdef USE_ALPHAHASH
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
#endif`,$S=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JS=`#ifdef USE_AOMAP
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
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tM=`#ifdef USE_BATCHING
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
#endif`,nM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oM=`#ifdef USE_IRIDESCENCE
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
#endif`,aM=`#ifdef USE_BUMPMAP
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
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gM=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_M=`vec3 transformedNormal = objectNormal;
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
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EM="gl_FragColor = linearToOutputTexel( gl_FragColor );",TM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
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
}`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zM=`uniform bool receiveShadow;
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
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,BM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
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
#endif`,XM=`struct PhysicalMaterial {
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
}`,jM=`
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
#endif`,YM=`#if defined( RE_IndirectDiffuse )
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
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nE=`#if defined( USE_POINTS_UV )
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
#endif`,iE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lE=`#ifdef USE_MORPHTARGETS
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
#endif`,uE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mE=`#ifdef USE_NORMALMAP
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
#endif`,gE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,ME=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
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
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LE=`float getShadowMask() {
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
}`,DE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IE=`#ifdef USE_SKINNING
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
#endif`,NE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UE=`#ifdef USE_SKINNING
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
#endif`,FE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kE=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BE=`#ifdef USE_TRANSMISSION
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
#endif`,HE=`#ifdef USE_TRANSMISSION
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
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YE=`uniform sampler2D t2D;
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
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`#include <common>
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
}`,JE=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,e1=`#define DISTANCE
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
}`,t1=`#define DISTANCE
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`uniform float scale;
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
}`,s1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,a1=`uniform vec3 diffuse;
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
}`,l1=`#define LAMBERT
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
}`,u1=`#define LAMBERT
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
}`,c1=`#define MATCAP
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
}`,f1=`#define MATCAP
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
}`,d1=`#define NORMAL
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
}`,h1=`#define NORMAL
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
}`,p1=`#define PHONG
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
}`,m1=`#define PHONG
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
}`,g1=`#define STANDARD
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
}`,v1=`#define STANDARD
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
}`,_1=`#define TOON
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
}`,x1=`#define TOON
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
}`,y1=`uniform float size;
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
}`,S1=`uniform vec3 diffuse;
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
}`,M1=`#include <common>
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
}`,E1=`uniform vec3 color;
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
}`,T1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,w1=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:YS,alphahash_pars_fragment:qS,alphamap_fragment:$S,alphamap_pars_fragment:KS,alphatest_fragment:ZS,alphatest_pars_fragment:QS,aomap_fragment:JS,aomap_pars_fragment:eM,batching_pars_vertex:tM,batching_vertex:nM,begin_vertex:iM,beginnormal_vertex:rM,bsdfs:sM,iridescence_fragment:oM,bumpmap_pars_fragment:aM,clipping_planes_fragment:lM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:cM,clipping_planes_vertex:fM,color_fragment:dM,color_pars_fragment:hM,color_pars_vertex:pM,color_vertex:mM,common:gM,cube_uv_reflection_fragment:vM,defaultnormal_vertex:_M,displacementmap_pars_vertex:xM,displacementmap_vertex:yM,emissivemap_fragment:SM,emissivemap_pars_fragment:MM,colorspace_fragment:EM,colorspace_pars_fragment:TM,envmap_fragment:wM,envmap_common_pars_fragment:AM,envmap_pars_fragment:CM,envmap_pars_vertex:RM,envmap_physical_pars_fragment:kM,envmap_vertex:PM,fog_vertex:bM,fog_pars_vertex:LM,fog_fragment:DM,fog_pars_fragment:IM,gradientmap_pars_fragment:NM,lightmap_pars_fragment:UM,lights_lambert_fragment:FM,lights_lambert_pars_fragment:OM,lights_pars_begin:zM,lights_toon_fragment:BM,lights_toon_pars_fragment:HM,lights_phong_fragment:VM,lights_phong_pars_fragment:GM,lights_physical_fragment:WM,lights_physical_pars_fragment:XM,lights_fragment_begin:jM,lights_fragment_maps:YM,lights_fragment_end:qM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:KM,logdepthbuf_pars_vertex:ZM,logdepthbuf_vertex:QM,map_fragment:JM,map_pars_fragment:eE,map_particle_fragment:tE,map_particle_pars_fragment:nE,metalnessmap_fragment:iE,metalnessmap_pars_fragment:rE,morphinstance_vertex:sE,morphcolor_vertex:oE,morphnormal_vertex:aE,morphtarget_pars_vertex:lE,morphtarget_vertex:uE,normal_fragment_begin:cE,normal_fragment_maps:fE,normal_pars_fragment:dE,normal_pars_vertex:hE,normal_vertex:pE,normalmap_pars_fragment:mE,clearcoat_normal_fragment_begin:gE,clearcoat_normal_fragment_maps:vE,clearcoat_pars_fragment:_E,iridescence_pars_fragment:xE,opaque_fragment:yE,packing:SE,premultiplied_alpha_fragment:ME,project_vertex:EE,dithering_fragment:TE,dithering_pars_fragment:wE,roughnessmap_fragment:AE,roughnessmap_pars_fragment:CE,shadowmap_pars_fragment:RE,shadowmap_pars_vertex:PE,shadowmap_vertex:bE,shadowmask_pars_fragment:LE,skinbase_vertex:DE,skinning_pars_vertex:IE,skinning_vertex:NE,skinnormal_vertex:UE,specularmap_fragment:FE,specularmap_pars_fragment:OE,tonemapping_fragment:zE,tonemapping_pars_fragment:kE,transmission_fragment:BE,transmission_pars_fragment:HE,uv_pars_fragment:VE,uv_pars_vertex:GE,uv_vertex:WE,worldpos_vertex:XE,background_vert:jE,background_frag:YE,backgroundCube_vert:qE,backgroundCube_frag:$E,cube_vert:KE,cube_frag:ZE,depth_vert:QE,depth_frag:JE,distanceRGBA_vert:e1,distanceRGBA_frag:t1,equirect_vert:n1,equirect_frag:i1,linedashed_vert:r1,linedashed_frag:s1,meshbasic_vert:o1,meshbasic_frag:a1,meshlambert_vert:l1,meshlambert_frag:u1,meshmatcap_vert:c1,meshmatcap_frag:f1,meshnormal_vert:d1,meshnormal_frag:h1,meshphong_vert:p1,meshphong_frag:m1,meshphysical_vert:g1,meshphysical_frag:v1,meshtoon_vert:_1,meshtoon_frag:x1,points_vert:y1,points_frag:S1,shadow_vert:M1,shadow_frag:E1,sprite_vert:T1,sprite_frag:w1},ye={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},oi={basic:{uniforms:nn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:nn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:nn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:nn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:nn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:nn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:nn([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:nn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:nn([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:nn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:nn([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:nn([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:nn([ye.lights,ye.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};oi.physical={uniforms:nn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ja={r:0,b:0,g:0},Sr=new fi,A1=new yt;function C1(t,e,n,i,r,s,o){const a=new ot(0);let l=s===!0?0:1,u,f,d=null,h=0,p=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function x(v){let g=!1;const E=_(v);E===null?c(a,l):E&&E.isColor&&(c(E,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,g){const E=_(g);E&&(E.isCubeTexture||E.mapping===hu)?(f===void 0&&(f=new Kn(new aa(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:qs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Sr.copy(g.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(A1.makeRotationFromEuler(Sr)),f.material.toneMapped=ct.getTransfer(E.colorSpace)!==vt,(d!==E||h!==E.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=E,h=E.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Kn(new mu(2,2),new di({name:"BackgroundMaterial",uniforms:qs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=ct.getTransfer(E.colorSpace)!==vt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function c(v,g){v.getRGB(ja,Mv(t)),i.buffers.color.setClear(ja.r,ja.g,ja.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),l=g,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,c(a,l)},render:x,addToRenderList:m}}function R1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,b,F,B,q){let Z=!1;const k=d(B,F,b);s!==k&&(s=k,u(s.object)),Z=p(S,B,F,q),Z&&_(S,B,F,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,E(S,b,F,B),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function d(S,b,F){const B=F.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let Z=q[b.id];Z===void 0&&(Z={},q[b.id]=Z);let k=Z[B];return k===void 0&&(k=h(l()),Z[B]=k),k}function h(S){const b=[],F=[],B=[];for(let q=0;q<n;q++)b[q]=0,F[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,b,F,B){const q=s.attributes,Z=b.attributes;let k=0;const ne=F.getAttributes();for(const I in ne)if(ne[I].location>=0){const Q=q[I];let ie=Z[I];if(ie===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),Q===void 0||Q.attribute!==ie||ie&&Q.data!==ie.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function _(S,b,F,B){const q={},Z=b.attributes;let k=0;const ne=F.getAttributes();for(const I in ne)if(ne[I].location>=0){let Q=Z[I];Q===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const ie={};ie.attribute=Q,Q&&Q.data&&(ie.data=Q.data),q[I]=ie,k++}s.attributes=q,s.attributesNum=k,s.index=B}function x(){const S=s.newAttributes;for(let b=0,F=S.length;b<F;b++)S[b]=0}function m(S){c(S,0)}function c(S,b){const F=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;F[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),q[S]!==b&&(t.vertexAttribDivisor(S,b),q[S]=b)}function v(){const S=s.newAttributes,b=s.enabledAttributes;for(let F=0,B=b.length;F<B;F++)b[F]!==S[F]&&(t.disableVertexAttribArray(F),b[F]=0)}function g(S,b,F,B,q,Z,k){k===!0?t.vertexAttribIPointer(S,b,F,q,Z):t.vertexAttribPointer(S,b,F,B,q,Z)}function E(S,b,F,B){x();const q=B.attributes,Z=F.getAttributes(),k=b.defaultAttributeValues;for(const ne in Z){const I=Z[ne];if(I.location>=0){let $=q[ne];if($===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const Q=$.normalized,ie=$.itemSize,le=e.get($);if(le===void 0)continue;const Be=le.buffer,Y=le.type,X=le.bytesPerElement,te=Y===t.INT||Y===t.UNSIGNED_INT||$.gpuType===Qd;if($.isInterleavedBufferAttribute){const oe=$.data,_e=oe.stride,Ce=$.offset;if(oe.isInstancedInterleavedBuffer){for(let we=0;we<I.locationSize;we++)c(I.location+we,oe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let we=0;we<I.locationSize;we++)m(I.location+we);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let we=0;we<I.locationSize;we++)g(I.location+we,ie/I.locationSize,Y,Q,_e*X,(Ce+ie/I.locationSize*we)*X,te)}else{if($.isInstancedBufferAttribute){for(let oe=0;oe<I.locationSize;oe++)c(I.location+oe,$.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<I.locationSize;oe++)m(I.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let oe=0;oe<I.locationSize;oe++)g(I.location+oe,ie/I.locationSize,Y,Q,ie*X,ie/I.locationSize*oe*X,te)}}else if(k!==void 0){const Q=k[ne];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(I.location,Q);break;case 3:t.vertexAttrib3fv(I.location,Q);break;case 4:t.vertexAttrib4fv(I.location,Q);break;default:t.vertexAttrib1fv(I.location,Q)}}}}v()}function P(){D();for(const S in i){const b=i[S];for(const F in b){const B=b[F];for(const q in B)f(B[q].object),delete B[q];delete b[F]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const F in b){const B=b[F];for(const q in B)f(B[q].object),delete B[q];delete b[F]}delete i[S.id]}function C(S){for(const b in i){const F=i[b];if(F[S.id]===void 0)continue;const B=F[S.id];for(const q in B)f(B[q].object),delete B[q];delete F[S.id]}}function D(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function P1(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,d){d!==0&&(t.drawArraysInstanced(i,u,f,d),n.update(f,i,d))}function a(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=f[_];n.update(p,i,1)}function l(u,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x];for(let x=0;x<h.length;x++)n.update(_,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function b1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==$n&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ni&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ai&&!C)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:c,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:E,maxSamples:P}}function L1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Yi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,c=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?f(null):u();else{const v=s?0:i,g=v*4;let E=c.clippingState||null;l.value=E,E=f(_,h,g,p);for(let P=0;P!==g;++P)E[P]=n[P];c.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const c=p+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,E=p;g!==x;++g,E+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function D1(t){let e=new WeakMap;function n(o,a){return a===yf?o.mapping=Ws:a===Sf&&(o.mapping=Xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===yf||a===Sf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new GS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Av extends Ev{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Cs=4,jp=[.125,.215,.35,.446,.526,.582],Cr=20,dc=new Av,Yp=new ot;let hc=null,pc=0,mc=0,gc=!1;const wr=(1+Math.sqrt(5))/2,ps=1/wr,qp=[new V(-wr,ps,0),new V(wr,ps,0),new V(-ps,0,wr),new V(ps,0,wr),new V(0,wr,-ps),new V(0,wr,ps),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class $p{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:na,format:$n,colorSpace:mr,depthBuffer:!1},r=Kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I1(s)),this._blurMaterial=N1(s,e,n)}return r}_compileMaterial(e){const n=new Kn(this._lodPlanes[0],e);this._renderer.compile(n,dc)}_sceneToCubeUV(e,n,i,r){const a=new Un(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Yp),f.toneMapping=lr,f.autoClear=!1;const p=new xv({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new Kn(new aa,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Yp),x=!0);for(let c=0;c<6;c++){const v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;Ya(r,v*g,c>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ws||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Kn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,dc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qp[(r-s-1)%qp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Kn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cr-1),x=s/_,m=isFinite(s)?1+Math.floor(f*x):Cr;m>Cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cr}`);const c=[];let v=0;for(let C=0;C<Cr;++C){const D=C/x,T=Math.exp(-D*D/2);c.push(T),C===0?v+=T:C<m&&(v+=2*T)}for(let C=0;C<c.length;C++)c[C]=c[C]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const E=this._sizeLods[r],P=3*E*(r>g-Cs?r-g+Cs:0),w=4*(this._cubeSize-E);Ya(n,P,w,3*E,2*E),l.setRenderTarget(n),l.render(d,dc)}}function I1(t){const e=[],n=[],i=[];let r=t;const s=t-Cs+1+jp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Cs?l=jp[o-t+Cs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,x=3,m=2,c=1,v=new Float32Array(x*_*p),g=new Float32Array(m*_*p),E=new Float32Array(c*_*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,D=w>2?0:-1,T=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];v.set(T,x*_*w),g.set(h,m*_*w);const S=[w,w,w,w,w,w];E.set(S,c*_*w)}const P=new Ht;P.setAttribute("position",new on(v,x)),P.setAttribute("uv",new on(g,m)),P.setAttribute("faceIndex",new on(E,c)),e.push(P),r>Cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kp(t,e,n){const i=new Gr(t,e,n);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function N1(t,e,n){const i=new Float32Array(Cr),r=new V(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ah(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Zp(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Qp(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}function U1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===yf||l===Sf,f=l===Ws||l===Xs;if(u||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new $p(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new $p(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function F1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&mv("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function O1(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let m=0,c=x.length;m<c;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,c=x.length;m<c;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let g=0,E=v.length;g<E;g+=3){const P=v[g+0],w=v[g+1],C=v[g+2];h.push(P,w,w,C,C,P)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,E=v.length/3-1;g<E;g+=3){const P=g+0,w=g+1,C=g+2;h.push(P,w,w,C,C,P)}}else return;const m=new(pv(h)?Sv:yv)(h,1);m.version=x;const c=s.get(d);c&&e.remove(c),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function z1(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let c=0;c<_;c++)m+=p[c];n.update(m,i,1)}function d(h,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<h.length;c++)u(h[c]/o,p[c],x[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,_);let c=0;for(let v=0;v<_;v++)c+=p[v];for(let v=0;v<x.length;v++)n.update(c,i,x[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function k1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function B1(t,e,n){const i=new WeakMap,r=new Nt;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let T=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],c=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let g=0;p===!0&&(g=1),_===!0&&(g=2),x===!0&&(g=3);let E=a.attributes.position.count*g,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*P*4*d),C=new vv(w,E,P,d);C.type=Ai,C.needsUpdate=!0;const D=g*4;for(let S=0;S<d;S++){const b=m[S],F=c[S],B=v[S],q=E*P*4*S;for(let Z=0;Z<b.count;Z++){const k=Z*D;p===!0&&(r.fromBufferAttribute(b,Z),w[q+k+0]=r.x,w[q+k+1]=r.y,w[q+k+2]=r.z,w[q+k+3]=0),_===!0&&(r.fromBufferAttribute(F,Z),w[q+k+4]=r.x,w[q+k+5]=r.y,w[q+k+6]=r.z,w[q+k+7]=0),x===!0&&(r.fromBufferAttribute(B,Z),w[q+k+8]=r.x,w[q+k+9]=r.y,w[q+k+10]=r.z,w[q+k+11]=B.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new Xe(E,P)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function H1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Cv extends un{constructor(e,n,i,r,s,o,a,l,u,f=Us){if(f!==Us&&f!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Us&&(i=Vr),i===void 0&&f===Ys&&(i=js),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Rv=new un,Jp=new Cv(1,1),Pv=new vv,bv=new CS,Lv=new Tv,em=[],tm=[],nm=new Float32Array(16),im=new Float32Array(9),rm=new Float32Array(4);function Qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=em[r];if(s===void 0&&(s=new Float32Array(r),em[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gu(t,e){let n=tm[e];n===void 0&&(n=new Int32Array(e),tm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function V1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function W1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function j1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;rm.set(i),t.uniformMatrix2fv(this.addr,!1,rm),Ot(n,i)}}function Y1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;im.set(i),t.uniformMatrix3fv(this.addr,!1,im),Ot(n,i)}}function q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;nm.set(i),t.uniformMatrix4fv(this.addr,!1,nm),Ot(n,i)}}function $1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function J1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function iT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jp.compareFunction=hv,s=Jp):s=Rv,n.setTexture2D(e||s,r)}function rT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||bv,r)}function sT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lv,r)}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Pv,r)}function aT(t){switch(t){case 5126:return V1;case 35664:return G1;case 35665:return W1;case 35666:return X1;case 35674:return j1;case 35675:return Y1;case 35676:return q1;case 5124:case 35670:return $1;case 35667:case 35671:return K1;case 35668:case 35672:return Z1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return eT;case 36295:return tT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return oT}}function lT(t,e){t.uniform1fv(this.addr,e)}function uT(t,e){const n=Qs(e,this.size,2);t.uniform2fv(this.addr,n)}function cT(t,e){const n=Qs(e,this.size,3);t.uniform3fv(this.addr,n)}function fT(t,e){const n=Qs(e,this.size,4);t.uniform4fv(this.addr,n)}function dT(t,e){const n=Qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hT(t,e){const n=Qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pT(t,e){const n=Qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mT(t,e){t.uniform1iv(this.addr,e)}function gT(t,e){t.uniform2iv(this.addr,e)}function vT(t,e){t.uniform3iv(this.addr,e)}function _T(t,e){t.uniform4iv(this.addr,e)}function xT(t,e){t.uniform1uiv(this.addr,e)}function yT(t,e){t.uniform2uiv(this.addr,e)}function ST(t,e){t.uniform3uiv(this.addr,e)}function MT(t,e){t.uniform4uiv(this.addr,e)}function ET(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Rv,s[o])}function TT(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||bv,s[o])}function wT(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Lv,s[o])}function AT(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Pv,s[o])}function CT(t){switch(t){case 5126:return lT;case 35664:return uT;case 35665:return cT;case 35666:return fT;case 35674:return dT;case 35675:return hT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return vT;case 35669:case 35673:return _T;case 5125:return xT;case 36294:return yT;case 36295:return ST;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return AT}}class RT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=aT(n.type)}}class PT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CT(n.type)}}class bT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function sm(t,e){t.seq.push(e),t.map[e.id]=e}function LT(t,e,n){const i=t.name,r=i.length;for(vc.lastIndex=0;;){const s=vc.exec(i),o=vc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){sm(n,u===void 0?new RT(a,t,e):new PT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new bT(a),sm(n,d)),n=d}}}class _l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);LT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function om(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const DT=37297;let IT=0;function NT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function UT(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===jl&&n===Xl?i="LinearDisplayP3ToLinearSRGB":e===Xl&&n===jl&&(i="LinearSRGBToLinearDisplayP3"),t){case mr:case pu:return[i,"LinearTransferOETF"];case si:case rh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function am(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+NT(t.getShaderSource(e),o)}else return r}function FT(t,e){const n=UT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function OT(t,e){let n;switch(e){case tS:n="Linear";break;case nS:n="Reinhard";break;case iS:n="OptimizedCineon";break;case ev:n="ACESFilmic";break;case sS:n="AgX";break;case oS:n="Neutral";break;case rS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function zT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function kT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function BT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function xo(t){return t!==""}function lm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function um(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(t){return t.replace(HT,GT)}const VT=new Map;function GT(t,e){let n=$e[e];if(n===void 0){const i=VT.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zf(n)}const WT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(t){return t.replace(WT,XT)}function XT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Q0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Cy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function YT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function $T(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case J0:e="ENVMAP_BLENDING_MULTIPLY";break;case Jy:e="ENVMAP_BLENDING_MIX";break;case eS:e="ENVMAP_BLENDING_ADD";break}return e}function KT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=jT(n),u=YT(n),f=qT(n),d=$T(n),h=KT(n),p=zT(n),_=kT(s),x=r.createProgram();let m,c,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(xo).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(xo).join(`
`),c.length>0&&(c+=`
`)):(m=[fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),c=[fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==lr?"#define TONE_MAPPING":"",n.toneMapping!==lr?$e.tonemapping_pars_fragment:"",n.toneMapping!==lr?OT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,FT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xo).join(`
`)),o=Zf(o),o=lm(o,n),o=um(o,n),a=Zf(a),a=lm(a,n),a=um(a,n),o=cm(o),a=cm(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=v+m+o,E=v+c+a,P=om(r,r.VERTEX_SHADER,g),w=om(r,r.FRAGMENT_SHADER,E);r.attachShader(x,P),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(b){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(P).trim(),q=r.getShaderInfoLog(w).trim();let Z=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,w);else{const ne=am(r,P,"vertex"),I=am(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+ne+`
`+I)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||q==="")&&(k=!1);k&&(b.diagnostics={runnable:Z,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:c}})}r.deleteShader(P),r.deleteShader(w),D=new _l(r,x),T=BT(r,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,DT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=w,this}let QT=0;class JT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ew(e),n.set(e,i)),i}}class ew{constructor(e){this.id=QT++,this.code=e,this.usedTimes=0}}function tw(t,e,n,i,r,s,o){const a=new sh,l=new JT,u=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,b,F,B){const q=F.fog,Z=B.geometry,k=T.isMeshStandardMaterial?F.environment:null,ne=(T.isMeshStandardMaterial?n:e).get(T.envMap||k),I=ne&&ne.mapping===hu?ne.image.height:null,$=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ie=Q!==void 0?Q.length:0;let le=0;Z.morphAttributes.position!==void 0&&(le=1),Z.morphAttributes.normal!==void 0&&(le=2),Z.morphAttributes.color!==void 0&&(le=3);let Be,Y,X,te;if($){const Ve=oi[$];Be=Ve.vertexShader,Y=Ve.fragmentShader}else Be=T.vertexShader,Y=T.fragmentShader,l.update(T),X=l.getVertexShaderID(T),te=l.getFragmentShaderID(T);const oe=t.getRenderTarget(),_e=B.isInstancedMesh===!0,Ce=B.isBatchedMesh===!0,we=!!T.map,je=!!T.matcap,L=!!ne,Ye=!!T.aoMap,Ae=!!T.lightMap,Le=!!T.bumpMap,me=!!T.normalMap,Oe=!!T.displacementMap,ve=!!T.emissiveMap,xe=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,z=T.clearcoat>0,ee=T.dispersion>0,J=T.iridescence>0,K=T.sheen>0,Se=T.transmission>0,ae=M&&!!T.anisotropyMap,fe=z&&!!T.clearcoatMap,Ie=z&&!!T.clearcoatNormalMap,se=z&&!!T.clearcoatRoughnessMap,de=J&&!!T.iridescenceMap,ze=J&&!!T.iridescenceThicknessMap,Te=K&&!!T.sheenColorMap,he=K&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,Me=!!T.specularColorMap,We=!!T.specularIntensityMap,y=Se&&!!T.transmissionMap,O=Se&&!!T.thicknessMap,H=!!T.gradientMap,j=!!T.alphaMap,re=T.alphaTest>0,Re=!!T.alphaHash,Ue=!!T.extensions;let et=lr;T.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(et=t.toneMapping);const tt={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:Be,fragmentShader:Y,defines:T.defines,customVertexShaderID:X,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&B._colorsTexture!==null,instancing:_e,instancingColor:_e&&B.instanceColor!==null,instancingMorph:_e&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:mr,alphaToCoverage:!!T.alphaToCoverage,map:we,matcap:je,envMap:L,envMapMode:L&&ne.mapping,envMapCubeUVHeight:I,aoMap:Ye,lightMap:Ae,bumpMap:Le,normalMap:me,displacementMap:h&&Oe,emissiveMap:ve,normalMapObjectSpace:me&&T.normalMapType===cS,normalMapTangentSpace:me&&T.normalMapType===dv,metalnessMap:xe,roughnessMap:R,anisotropy:M,anisotropyMap:ae,clearcoat:z,clearcoatMap:fe,clearcoatNormalMap:Ie,clearcoatRoughnessMap:se,dispersion:ee,iridescence:J,iridescenceMap:de,iridescenceThicknessMap:ze,sheen:K,sheenColorMap:Te,sheenRoughnessMap:he,specularMap:Ne,specularColorMap:Me,specularIntensityMap:We,transmission:Se,transmissionMap:y,thicknessMap:O,gradientMap:H,opaque:T.transparent===!1&&T.blending===Ns&&T.alphaToCoverage===!1,alphaMap:j,alphaTest:re,alphaHash:Re,combine:T.combine,mapUv:we&&x(T.map.channel),aoMapUv:Ye&&x(T.aoMap.channel),lightMapUv:Ae&&x(T.lightMap.channel),bumpMapUv:Le&&x(T.bumpMap.channel),normalMapUv:me&&x(T.normalMap.channel),displacementMapUv:Oe&&x(T.displacementMap.channel),emissiveMapUv:ve&&x(T.emissiveMap.channel),metalnessMapUv:xe&&x(T.metalnessMap.channel),roughnessMapUv:R&&x(T.roughnessMap.channel),anisotropyMapUv:ae&&x(T.anisotropyMap.channel),clearcoatMapUv:fe&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:he&&x(T.sheenRoughnessMap.channel),specularMapUv:Ne&&x(T.specularMap.channel),specularColorMapUv:Me&&x(T.specularColorMap.channel),specularIntensityMapUv:We&&x(T.specularIntensityMap.channel),transmissionMapUv:y&&x(T.transmissionMap.channel),thicknessMapUv:O&&x(T.thicknessMap.channel),alphaMapUv:j&&x(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(me||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(we||j),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,decodeVideoTexture:we&&T.map.isVideoTexture===!0&&ct.getTransfer(T.map.colorSpace)===vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ei,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return tt.vertexUv1s=u.has(1),tt.vertexUv2s=u.has(2),tt.vertexUv3s=u.has(3),u.clear(),tt}function c(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const b in T.defines)S.push(b),S.push(T.defines[b]);return T.isRawShaderMaterial===!1&&(v(S,T),g(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function g(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function E(T){const S=_[T.type];let b;if(S){const F=oi[S];b=kS.clone(F.uniforms)}else b=T.uniforms;return b}function P(T,S){let b;for(let F=0,B=f.length;F<B;F++){const q=f[F];if(q.cacheKey===S){b=q,++b.usedTimes;break}}return b===void 0&&(b=new ZT(t,S,T,s),f.push(b)),b}function w(T){if(--T.usedTimes===0){const S=f.indexOf(T);f[S]=f[f.length-1],f.pop(),T.destroy()}}function C(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:E,acquireProgram:P,releaseProgram:w,releaseShaderCache:C,programs:f,dispose:D}}function nw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function iw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function dm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function hm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,_,x,m){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=p,c.groupOrder=_,c.renderOrder=d.renderOrder,c.z=x,c.group=m),e++,c}function a(d,h,p,_,x,m){const c=o(d,h,p,_,x,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(d,h,p,_,x,m){const c=o(d,h,p,_,x,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||iw),i.length>1&&i.sort(h||dm),r.length>1&&r.sort(h||dm)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function rw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new hm,t.set(i,[o])):r>=s.length?(o=new hm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function sw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new ot};break;case"SpotLight":n={position:new V,direction:new V,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function ow(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aw=0;function lw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uw(t){const e=new sw,n=ow(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new yt,o=new yt;function a(u){let f=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,x=0,m=0,c=0,v=0,g=0,E=0,P=0,w=0,C=0;u.sort(lw);for(let T=0,S=u.length;T<S;T++){const b=u[T],F=b.color,B=b.intensity,q=b.distance,Z=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)f+=F.r*B,d+=F.g*B,h+=F.b*B;else if(b.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(b.sh.coefficients[k],B);C++}else if(b.isDirectionalLight){const k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const ne=b.shadow,I=n.get(b);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=b.shadow.matrix,v++}i.directional[p]=k,p++}else if(b.isSpotLight){const k=e.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(F).multiplyScalar(B),k.distance=q,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,i.spot[x]=k;const ne=b.shadow;if(b.map&&(i.spotLightMap[P]=b.map,P++,ne.updateMatrices(b),b.castShadow&&w++),i.spotLightMatrix[x]=ne.matrix,b.castShadow){const I=n.get(b);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=Z,E++}x++}else if(b.isRectAreaLight){const k=e.get(b);k.color.copy(F).multiplyScalar(B),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=k,m++}else if(b.isPointLight){const k=e.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){const ne=b.shadow,I=n.get(b);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,I.shadowCameraNear=ne.camera.near,I.shadowCameraFar=ne.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=b.shadow.matrix,g++}i.point[_]=k,_++}else if(b.isHemisphereLight){const k=e.get(b);k.skyColor.copy(b.color).multiplyScalar(B),k.groundColor.copy(b.groundColor).multiplyScalar(B),i.hemi[c]=k,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==c||D.numDirectionalShadows!==v||D.numPointShadows!==g||D.numSpotShadows!==E||D.numSpotMaps!==P||D.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=c,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=E+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,D.directionalLength=p,D.pointLength=_,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=c,D.numDirectionalShadows=v,D.numPointShadows=g,D.numSpotShadows=E,D.numSpotMaps=P,D.numLightProbes=C,i.version=aw++)}function l(u,f){let d=0,h=0,p=0,_=0,x=0;const m=f.matrixWorldInverse;for(let c=0,v=u.length;c<v;c++){const g=u[c];if(g.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(g.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(g.width*.5,0,0),E.halfHeight.set(0,g.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(g.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function pm(t){const e=new uw(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new pm(t),e.set(r,[a])):s>=o.length?(a=new pm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class fw extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dw extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pw=`uniform sampler2D shadow_pass;
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
}`;function mw(t,e,n){let i=new oh;const r=new Xe,s=new Xe,o=new Nt,a=new fw({depthPacking:uS}),l=new dw,u={},f=n.maxTextureSize,d={[fr]:ln,[ln]:fr,[Ei]:Ei},h=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:hw,fragmentShader:pw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ht;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Kn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q0;let c=this.type;this.render=function(w,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),F=t.state;F.setBlending(ar),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=c!==yi&&this.type===yi,q=c===yi&&this.type!==yi;for(let Z=0,k=w.length;Z<k;Z++){const ne=w[Z],I=ne.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const $=I.getFrameExtents();if(r.multiply($),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,I.mapSize.y=s.y)),I.map===null||B===!0||q===!0){const ie=this.type!==yi?{minFilter:On,magFilter:On}:{};I.map!==null&&I.map.dispose(),I.map=new Gr(r.x,r.y,ie),I.map.texture.name=ne.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Q=I.getViewportCount();for(let ie=0;ie<Q;ie++){const le=I.getViewport(ie);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),F.viewport(o),I.updateMatrices(ne,ie),i=I.getFrustum(),E(C,D,I.camera,ne,this.type)}I.isPointLightShadow!==!0&&this.type===yi&&v(I,D),I.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,b)};function v(w,C){const D=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,D,h,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,D,p,x,null)}function g(w,C,D,T){let S=null;const b=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)S=b;else if(S=D.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=S.uuid,B=C.uuid;let q=u[F];q===void 0&&(q={},u[F]=q);let Z=q[B];Z===void 0&&(Z=S.clone(),q[B]=Z,C.addEventListener("dispose",P)),S=Z}if(S.visible=C.visible,S.wireframe=C.wireframe,T===yi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=t.properties.get(S);F.light=D}return S}function E(w,C,D,T,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===yi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const B=e.update(w),q=w.material;if(Array.isArray(q)){const Z=B.groups;for(let k=0,ne=Z.length;k<ne;k++){const I=Z[k],$=q[I.materialIndex];if($&&$.visible){const Q=g(w,$,T,S);w.onBeforeShadow(t,w,C,D,B,Q,I),t.renderBufferDirect(D,null,B,Q,w,I),w.onAfterShadow(t,w,C,D,B,Q,I)}}}else if(q.visible){const Z=g(w,q,T,S);w.onBeforeShadow(t,w,C,D,B,Z,null),t.renderBufferDirect(D,null,B,Z,w,null),w.onAfterShadow(t,w,C,D,B,Z,null)}}const F=w.children;for(let B=0,q=F.length;B<q;B++)E(F[B],C,D,T,S)}function P(w){w.target.removeEventListener("dispose",P);for(const D in u){const T=u[D],S=w.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function gw(t){function e(){let y=!1;const O=new Nt;let H=null;const j=new Nt(0,0,0,0);return{setMask:function(re){H!==re&&!y&&(t.colorMask(re,re,re,re),H=re)},setLocked:function(re){y=re},setClear:function(re,Re,Ue,et,tt){tt===!0&&(re*=et,Re*=et,Ue*=et),O.set(re,Re,Ue,et),j.equals(O)===!1&&(t.clearColor(re,Re,Ue,et),j.copy(O))},reset:function(){y=!1,H=null,j.set(-1,0,0,0)}}}function n(){let y=!1,O=null,H=null,j=null;return{setTest:function(re){re?te(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(re){O!==re&&!y&&(t.depthMask(re),O=re)},setFunc:function(re){if(H!==re){switch(re){case jy:t.depthFunc(t.NEVER);break;case Yy:t.depthFunc(t.ALWAYS);break;case qy:t.depthFunc(t.LESS);break;case Gl:t.depthFunc(t.LEQUAL);break;case $y:t.depthFunc(t.EQUAL);break;case Ky:t.depthFunc(t.GEQUAL);break;case Zy:t.depthFunc(t.GREATER);break;case Qy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=re}},setLocked:function(re){y=re},setClear:function(re){j!==re&&(t.clearDepth(re),j=re)},reset:function(){y=!1,O=null,H=null,j=null}}}function i(){let y=!1,O=null,H=null,j=null,re=null,Re=null,Ue=null,et=null,tt=null;return{setTest:function(Ve){y||(Ve?te(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(Ve){O!==Ve&&!y&&(t.stencilMask(Ve),O=Ve)},setFunc:function(Ve,nt,lt){(H!==Ve||j!==nt||re!==lt)&&(t.stencilFunc(Ve,nt,lt),H=Ve,j=nt,re=lt)},setOp:function(Ve,nt,lt){(Re!==Ve||Ue!==nt||et!==lt)&&(t.stencilOp(Ve,nt,lt),Re=Ve,Ue=nt,et=lt)},setLocked:function(Ve){y=Ve},setClear:function(Ve){tt!==Ve&&(t.clearStencil(Ve),tt=Ve)},reset:function(){y=!1,O=null,H=null,j=null,re=null,Re=null,Ue=null,et=null,tt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],p=null,_=!1,x=null,m=null,c=null,v=null,g=null,E=null,P=null,w=new ot(0,0,0),C=0,D=!1,T=null,S=null,b=null,F=null,B=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,k=0;const ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Z=k>=1):ne.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Z=k>=2);let I=null,$={};const Q=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),le=new Nt().fromArray(Q),Be=new Nt().fromArray(ie);function Y(y,O,H,j){const re=new Uint8Array(4),Re=t.createTexture();t.bindTexture(y,Re),t.texParameteri(y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<H;Ue++)y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY?t.texImage3D(O,0,t.RGBA,1,1,j,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(O+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return Re}const X={};X[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),X[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),X[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(t.DEPTH_TEST),s.setFunc(Gl),Le(!1),me(Sp),te(t.CULL_FACE),Ye(ar);function te(y){u[y]!==!0&&(t.enable(y),u[y]=!0)}function oe(y){u[y]!==!1&&(t.disable(y),u[y]=!1)}function _e(y,O){return f[y]!==O?(t.bindFramebuffer(y,O),f[y]=O,y===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=O),y===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=O),!0):!1}function Ce(y,O){let H=h,j=!1;if(y){H=d.get(O),H===void 0&&(H=[],d.set(O,H));const re=y.textures;if(H.length!==re.length||H[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,Ue=re.length;Re<Ue;Re++)H[Re]=t.COLOR_ATTACHMENT0+Re;H.length=re.length,j=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,j=!0);j&&t.drawBuffers(H)}function we(y){return p!==y?(t.useProgram(y),p=y,!0):!1}const je={[Ar]:t.FUNC_ADD,[Py]:t.FUNC_SUBTRACT,[by]:t.FUNC_REVERSE_SUBTRACT};je[Ly]=t.MIN,je[Dy]=t.MAX;const L={[Iy]:t.ZERO,[Ny]:t.ONE,[Uy]:t.SRC_COLOR,[_f]:t.SRC_ALPHA,[Hy]:t.SRC_ALPHA_SATURATE,[ky]:t.DST_COLOR,[Oy]:t.DST_ALPHA,[Fy]:t.ONE_MINUS_SRC_COLOR,[xf]:t.ONE_MINUS_SRC_ALPHA,[By]:t.ONE_MINUS_DST_COLOR,[zy]:t.ONE_MINUS_DST_ALPHA,[Vy]:t.CONSTANT_COLOR,[Gy]:t.ONE_MINUS_CONSTANT_COLOR,[Wy]:t.CONSTANT_ALPHA,[Xy]:t.ONE_MINUS_CONSTANT_ALPHA};function Ye(y,O,H,j,re,Re,Ue,et,tt,Ve){if(y===ar){_===!0&&(oe(t.BLEND),_=!1);return}if(_===!1&&(te(t.BLEND),_=!0),y!==Ry){if(y!==x||Ve!==D){if((m!==Ar||g!==Ar)&&(t.blendEquation(t.FUNC_ADD),m=Ar,g=Ar),Ve)switch(y){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vf:t.blendFunc(t.ONE,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}c=null,v=null,E=null,P=null,w.set(0,0,0),C=0,x=y,D=Ve}return}re=re||O,Re=Re||H,Ue=Ue||j,(O!==m||re!==g)&&(t.blendEquationSeparate(je[O],je[re]),m=O,g=re),(H!==c||j!==v||Re!==E||Ue!==P)&&(t.blendFuncSeparate(L[H],L[j],L[Re],L[Ue]),c=H,v=j,E=Re,P=Ue),(et.equals(w)===!1||tt!==C)&&(t.blendColor(et.r,et.g,et.b,tt),w.copy(et),C=tt),x=y,D=!1}function Ae(y,O){y.side===Ei?oe(t.CULL_FACE):te(t.CULL_FACE);let H=y.side===ln;O&&(H=!H),Le(H),y.blending===Ns&&y.transparent===!1?Ye(ar):Ye(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),r.setMask(y.colorWrite);const j=y.stencilWrite;o.setTest(j),j&&(o.setMask(y.stencilWriteMask),o.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),o.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),ve(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Le(y){T!==y&&(y?t.frontFace(t.CW):t.frontFace(t.CCW),T=y)}function me(y){y!==wy?(te(t.CULL_FACE),y!==S&&(y===Sp?t.cullFace(t.BACK):y===Ay?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),S=y}function Oe(y){y!==b&&(Z&&t.lineWidth(y),b=y)}function ve(y,O,H){y?(te(t.POLYGON_OFFSET_FILL),(F!==O||B!==H)&&(t.polygonOffset(O,H),F=O,B=H)):oe(t.POLYGON_OFFSET_FILL)}function xe(y){y?te(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function R(y){y===void 0&&(y=t.TEXTURE0+q-1),I!==y&&(t.activeTexture(y),I=y)}function M(y,O,H){H===void 0&&(I===null?H=t.TEXTURE0+q-1:H=I);let j=$[H];j===void 0&&(j={type:void 0,texture:void 0},$[H]=j),(j.type!==y||j.texture!==O)&&(I!==H&&(t.activeTexture(H),I=H),t.bindTexture(y,O||X[y]),j.type=y,j.texture=O)}function z(){const y=$[I];y!==void 0&&y.type!==void 0&&(t.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function de(){try{t.texImage2D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Te(y){le.equals(y)===!1&&(t.scissor(y.x,y.y,y.z,y.w),le.copy(y))}function he(y){Be.equals(y)===!1&&(t.viewport(y.x,y.y,y.z,y.w),Be.copy(y))}function Ne(y,O){let H=l.get(O);H===void 0&&(H=new WeakMap,l.set(O,H));let j=H.get(y);j===void 0&&(j=t.getUniformBlockIndex(O,y.name),H.set(y,j))}function Me(y,O){const j=l.get(O).get(y);a.get(O)!==j&&(t.uniformBlockBinding(O,j,y.__bindingPointIndex),a.set(O,j))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},I=null,$={},f={},d=new WeakMap,h=[],p=null,_=!1,x=null,m=null,c=null,v=null,g=null,E=null,P=null,w=new ot(0,0,0),C=0,D=!1,T=null,S=null,b=null,F=null,B=null,le.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:te,disable:oe,bindFramebuffer:_e,drawBuffers:Ce,useProgram:we,setBlending:Ye,setMaterial:Ae,setFlipSided:Le,setCullFace:me,setLineWidth:Oe,setPolygonOffset:ve,setScissorTest:xe,activeTexture:R,bindTexture:M,unbindTexture:z,compressedTexImage2D:ee,compressedTexImage3D:J,texImage2D:de,texImage3D:ze,updateUBOMapping:Ne,uniformBlockBinding:Me,texStorage2D:Ie,texStorage3D:se,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Te,viewport:he,reset:We}}function mm(t,e,n,i){const r=vw(i);switch(n){case sv:return t*e;case av:return t*e;case lv:return t*e*2;case uv:return t*e/r.components*r.byteLength;case th:return t*e/r.components*r.byteLength;case cv:return t*e*2/r.components*r.byteLength;case nh:return t*e*2/r.components*r.byteLength;case ov:return t*e*3/r.components*r.byteLength;case $n:return t*e*4/r.components*r.byteLength;case ih:return t*e*4/r.components*r.byteLength;case dl:case hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pl:case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wf:case Cf:return Math.max(t,16)*Math.max(e,8)/4;case Tf:case Af:return Math.max(t,8)*Math.max(e,8)/2;case Rf:case Pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case zf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case gl:case Xf:case jf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case fv:case Yf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qf:case $f:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vw(t){switch(t){case Ni:case nv:return{byteLength:1,components:1};case qo:case iv:case na:return{byteLength:2,components:1};case Jd:case eh:return{byteLength:2,components:4};case Vr:case Qd:case Ai:return{byteLength:4,components:1};case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function _w(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xe,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):$o("canvas")}function x(R,M,z){let ee=1;const J=xe(R);if((J.width>z||J.height>z)&&(ee=z/Math.max(J.width,J.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(ee*J.width),Se=Math.floor(ee*J.height);d===void 0&&(d=_(K,Se));const ae=M?_(K,Se):d;return ae.width=K,ae.height=Se,ae.getContext("2d").drawImage(R,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+Se+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==On&&R.minFilter!==qn}function c(R){t.generateMipmap(R)}function v(R,M,z,ee,J=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===t.RED&&(z===t.FLOAT&&(K=t.R32F),z===t.HALF_FLOAT&&(K=t.R16F),z===t.UNSIGNED_BYTE&&(K=t.R8)),M===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(K=t.R8UI),z===t.UNSIGNED_SHORT&&(K=t.R16UI),z===t.UNSIGNED_INT&&(K=t.R32UI),z===t.BYTE&&(K=t.R8I),z===t.SHORT&&(K=t.R16I),z===t.INT&&(K=t.R32I)),M===t.RG&&(z===t.FLOAT&&(K=t.RG32F),z===t.HALF_FLOAT&&(K=t.RG16F),z===t.UNSIGNED_BYTE&&(K=t.RG8)),M===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(K=t.RG8UI),z===t.UNSIGNED_SHORT&&(K=t.RG16UI),z===t.UNSIGNED_INT&&(K=t.RG32UI),z===t.BYTE&&(K=t.RG8I),z===t.SHORT&&(K=t.RG16I),z===t.INT&&(K=t.RG32I)),M===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),M===t.RGBA){const Se=J?Wl:ct.getTransfer(ee);z===t.FLOAT&&(K=t.RGBA32F),z===t.HALF_FLOAT&&(K=t.RGBA16F),z===t.UNSIGNED_BYTE&&(K=Se===vt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function g(R,M){let z;return R?M===null||M===Vr||M===js?z=t.DEPTH24_STENCIL8:M===Ai?z=t.DEPTH32F_STENCIL8:M===qo&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Vr||M===js?z=t.DEPTH_COMPONENT24:M===Ai?z=t.DEPTH_COMPONENT32F:M===qo&&(z=t.DEPTH_COMPONENT16),z}function E(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==On&&R.minFilter!==qn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){const M=R.target;M.removeEventListener("dispose",P),C(M),M.isVideoTexture&&f.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),T(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const z=R.source,ee=h.get(z);if(ee){const J=ee[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(R),Object.keys(ee).length===0&&h.delete(z)}i.remove(R)}function D(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const z=R.source,ee=h.get(z);delete ee[M.__cacheKey],o.memory.textures--}function T(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let J=0;J<M.__webglFramebuffer[ee].length;J++)t.deleteFramebuffer(M.__webglFramebuffer[ee][J]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=R.textures;for(let ee=0,J=z.length;ee<J;ee++){const K=i.get(z[ee]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(z[ee])}i.remove(R)}let S=0;function b(){S=0}function F(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const z=i.get(R);if(R.isVideoTexture&&Oe(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(z,R,M);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+M)}function Z(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Be(z,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+M)}function k(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Be(z,R,M);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+M)}function ne(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Y(z,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+M)}const I={[Mf]:t.REPEAT,[Lr]:t.CLAMP_TO_EDGE,[Ef]:t.MIRRORED_REPEAT},$={[On]:t.NEAREST,[aS]:t.NEAREST_MIPMAP_NEAREST,[Aa]:t.NEAREST_MIPMAP_LINEAR,[qn]:t.LINEAR,[ju]:t.LINEAR_MIPMAP_NEAREST,[Dr]:t.LINEAR_MIPMAP_LINEAR},Q={[fS]:t.NEVER,[vS]:t.ALWAYS,[dS]:t.LESS,[hv]:t.LEQUAL,[hS]:t.EQUAL,[gS]:t.GEQUAL,[pS]:t.GREATER,[mS]:t.NOTEQUAL};function ie(R,M){if(M.type===Ai&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qn||M.magFilter===ju||M.magFilter===Aa||M.magFilter===Dr||M.minFilter===qn||M.minFilter===ju||M.minFilter===Aa||M.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,I[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==Aa&&M.minFilter!==Dr||M.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function le(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",P));const ee=M.source;let J=h.get(ee);J===void 0&&(J={},h.set(ee,J));const K=B(M);if(K!==R.__cacheKey){J[K]===void 0&&(J[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[K].usedTimes++;const Se=J[R.__cacheKey];Se!==void 0&&(J[R.__cacheKey].usedTimes--,Se.usedTimes===0&&D(M)),R.__cacheKey=K,R.__webglTexture=J[K].texture}return z}function Be(R,M,z){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const J=le(R,M),K=M.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+z);const Se=i.get(K);if(K.version!==Se.__version||J===!0){n.activeTexture(t.TEXTURE0+z);const ae=ct.getPrimaries(ct.workingColorSpace),fe=M.colorSpace===Ki?null:ct.getPrimaries(M.colorSpace),Ie=M.colorSpace===Ki||ae===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let se=x(M.image,!1,r.maxTextureSize);se=ve(M,se);const de=s.convert(M.format,M.colorSpace),ze=s.convert(M.type);let Te=v(M.internalFormat,de,ze,M.colorSpace,M.isVideoTexture);ie(ee,M);let he;const Ne=M.mipmaps,Me=M.isVideoTexture!==!0,We=Se.__version===void 0||J===!0,y=K.dataReady,O=E(M,se);if(M.isDepthTexture)Te=g(M.format===Ys,M.type),We&&(Me?n.texStorage2D(t.TEXTURE_2D,1,Te,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Te,se.width,se.height,0,de,ze,null));else if(M.isDataTexture)if(Ne.length>0){Me&&We&&n.texStorage2D(t.TEXTURE_2D,O,Te,Ne[0].width,Ne[0].height);for(let H=0,j=Ne.length;H<j;H++)he=Ne[H],Me?y&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,he.width,he.height,de,ze,he.data):n.texImage2D(t.TEXTURE_2D,H,Te,he.width,he.height,0,de,ze,he.data);M.generateMipmaps=!1}else Me?(We&&n.texStorage2D(t.TEXTURE_2D,O,Te,se.width,se.height),y&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,de,ze,se.data)):n.texImage2D(t.TEXTURE_2D,0,Te,se.width,se.height,0,de,ze,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Me&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,Te,Ne[0].width,Ne[0].height,se.depth);for(let H=0,j=Ne.length;H<j;H++)if(he=Ne[H],M.format!==$n)if(de!==null)if(Me){if(y)if(M.layerUpdates.size>0){const re=mm(he.width,he.height,M.format,M.type);for(const Re of M.layerUpdates){const Ue=he.data.subarray(Re*re/he.data.BYTES_PER_ELEMENT,(Re+1)*re/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,Re,he.width,he.height,1,de,Ue,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,he.width,he.height,se.depth,de,he.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,Te,he.width,he.height,se.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?y&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,he.width,he.height,se.depth,de,ze,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,Te,he.width,he.height,se.depth,0,de,ze,he.data)}else{Me&&We&&n.texStorage2D(t.TEXTURE_2D,O,Te,Ne[0].width,Ne[0].height);for(let H=0,j=Ne.length;H<j;H++)he=Ne[H],M.format!==$n?de!==null?Me?y&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,he.width,he.height,de,he.data):n.compressedTexImage2D(t.TEXTURE_2D,H,Te,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?y&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,he.width,he.height,de,ze,he.data):n.texImage2D(t.TEXTURE_2D,H,Te,he.width,he.height,0,de,ze,he.data)}else if(M.isDataArrayTexture)if(Me){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,O,Te,se.width,se.height,se.depth),y)if(M.layerUpdates.size>0){const H=mm(se.width,se.height,M.format,M.type);for(const j of M.layerUpdates){const re=se.data.subarray(j*H/se.data.BYTES_PER_ELEMENT,(j+1)*H/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,de,ze,re)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,ze,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,de,ze,se.data);else if(M.isData3DTexture)Me?(We&&n.texStorage3D(t.TEXTURE_3D,O,Te,se.width,se.height,se.depth),y&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,ze,se.data)):n.texImage3D(t.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,de,ze,se.data);else if(M.isFramebufferTexture){if(We)if(Me)n.texStorage2D(t.TEXTURE_2D,O,Te,se.width,se.height);else{let H=se.width,j=se.height;for(let re=0;re<O;re++)n.texImage2D(t.TEXTURE_2D,re,Te,H,j,0,de,ze,null),H>>=1,j>>=1}}else if(Ne.length>0){if(Me&&We){const H=xe(Ne[0]);n.texStorage2D(t.TEXTURE_2D,O,Te,H.width,H.height)}for(let H=0,j=Ne.length;H<j;H++)he=Ne[H],Me?y&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,de,ze,he):n.texImage2D(t.TEXTURE_2D,H,Te,de,ze,he);M.generateMipmaps=!1}else if(Me){if(We){const H=xe(se);n.texStorage2D(t.TEXTURE_2D,O,Te,H.width,H.height)}y&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,ze,se)}else n.texImage2D(t.TEXTURE_2D,0,Te,de,ze,se);m(M)&&c(ee),Se.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Y(R,M,z){if(M.image.length!==6)return;const ee=le(R,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const K=i.get(J);if(J.version!==K.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const Se=ct.getPrimaries(ct.workingColorSpace),ae=M.colorSpace===Ki?null:ct.getPrimaries(M.colorSpace),fe=M.colorSpace===Ki||Se===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,de=[];for(let j=0;j<6;j++)!Ie&&!se?de[j]=x(M.image[j],!0,r.maxCubemapSize):de[j]=se?M.image[j].image:M.image[j],de[j]=ve(M,de[j]);const ze=de[0],Te=s.convert(M.format,M.colorSpace),he=s.convert(M.type),Ne=v(M.internalFormat,Te,he,M.colorSpace),Me=M.isVideoTexture!==!0,We=K.__version===void 0||ee===!0,y=J.dataReady;let O=E(M,ze);ie(t.TEXTURE_CUBE_MAP,M);let H;if(Ie){Me&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,O,Ne,ze.width,ze.height);for(let j=0;j<6;j++){H=de[j].mipmaps;for(let re=0;re<H.length;re++){const Re=H[re];M.format!==$n?Te!==null?Me?y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,0,0,Re.width,Re.height,Te,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,Ne,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,0,0,Re.width,Re.height,Te,he,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,Ne,Re.width,Re.height,0,Te,he,Re.data)}}}else{if(H=M.mipmaps,Me&&We){H.length>0&&O++;const j=xe(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,O,Ne,j.width,j.height)}for(let j=0;j<6;j++)if(se){Me?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,de[j].width,de[j].height,Te,he,de[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ne,de[j].width,de[j].height,0,Te,he,de[j].data);for(let re=0;re<H.length;re++){const Ue=H[re].image[j].image;Me?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,0,0,Ue.width,Ue.height,Te,he,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,Ne,Ue.width,Ue.height,0,Te,he,Ue.data)}}else{Me?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te,he,de[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ne,Te,he,de[j]);for(let re=0;re<H.length;re++){const Re=H[re];Me?y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,0,0,Te,he,Re.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,Ne,Te,he,Re.image[j])}}}m(M)&&c(t.TEXTURE_CUBE_MAP),K.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function X(R,M,z,ee,J,K){const Se=s.convert(z.format,z.colorSpace),ae=s.convert(z.type),fe=v(z.internalFormat,Se,ae,z.colorSpace);if(!i.get(M).__hasExternalTextures){const se=Math.max(1,M.width>>K),de=Math.max(1,M.height>>K);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,K,fe,se,de,M.depth,0,Se,ae,null):n.texImage2D(J,K,fe,se,de,0,Se,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,J,i.get(z).__webglTexture,0,Le(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,J,i.get(z).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(R,M,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const ee=M.depthTexture,J=ee&&ee.isDepthTexture?ee.type:null,K=g(M.stencilBuffer,J),Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=Le(M);me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,K,M.width,M.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,K,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,K,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,R)}else{const ee=M.textures;for(let J=0;J<ee.length;J++){const K=ee[J],Se=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),fe=v(K.internalFormat,Se,ae,K.colorSpace),Ie=Le(M);z&&me(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,fe,M.width,M.height):me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,fe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,fe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,J=Le(M);if(M.depthTexture.format===Us)me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Ys)me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function _e(R){const M=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");oe(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=t.createRenderbuffer(),te(M.__webglDepthbuffer[ee],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),te(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(R,M,z){const ee=i.get(R);M!==void 0&&X(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&_e(R)}function we(R){const M=R.texture,z=i.get(R),ee=i.get(M);R.addEventListener("dispose",w);const J=R.textures,K=R.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let fe=0;fe<M.mipmaps.length;fe++)z.__webglFramebuffer[ae][fe]=t.createFramebuffer()}else z.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)z.__webglFramebuffer[ae]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ae=0,fe=J.length;ae<fe;ae++){const Ie=i.get(J[ae]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&me(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const fe=J[ae];z.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ae]);const Ie=s.convert(fe.format,fe.colorSpace),se=s.convert(fe.type),de=v(fe.internalFormat,Ie,se,fe.colorSpace,R.isXRRenderTarget===!0),ze=Le(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,de,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,z.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),te(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(t.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)X(z.__webglFramebuffer[ae][fe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else X(z.__webglFramebuffer[ae],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ae=0,fe=J.length;ae<fe;ae++){const Ie=J[ae],se=i.get(Ie);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ie(t.TEXTURE_2D,Ie),X(z.__webglFramebuffer,R,Ie,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m(Ie)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,ee.__webglTexture),ie(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)X(z.__webglFramebuffer[fe],R,M,t.COLOR_ATTACHMENT0,ae,fe);else X(z.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ae,0);m(M)&&c(ae),n.unbindTexture()}R.depthBuffer&&_e(R)}function je(R){const M=R.textures;for(let z=0,ee=M.length;z<ee;z++){const J=M[z];if(m(J)){const K=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(J).__webglTexture;n.bindTexture(K,Se),c(K),n.unbindTexture()}}}const L=[],Ye=[];function Ae(R){if(R.samples>0){if(me(R)===!1){const M=R.textures,z=R.width,ee=R.height;let J=t.COLOR_BUFFER_BIT;const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),ae=M.length>1;if(ae)for(let fe=0;fe<M.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);const Ie=i.get(M[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,z,ee,0,0,z,ee,J,t.NEAREST),l===!0&&(L.length=0,Ye.length=0,L.push(t.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(L.push(K),Ye.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ye)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let fe=0;fe<M.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);const Ie=i.get(M[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Le(R){return Math.min(r.maxSamples,R.samples)}function me(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Oe(R){const M=o.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function ve(R,M){const z=R.colorSpace,ee=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==mr&&z!==Ki&&(ct.getTransfer(z)===vt?(ee!==$n||J!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=b,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=k,this.setTextureCube=ne,this.rebindTextures=Ce,this.setupRenderTarget=we,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=X,this.useMultisampledRTT=me}function xw(t,e){function n(i,r=Ki){let s;const o=ct.getTransfer(r);if(i===Ni)return t.UNSIGNED_BYTE;if(i===Jd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===eh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nv)return t.BYTE;if(i===iv)return t.SHORT;if(i===qo)return t.UNSIGNED_SHORT;if(i===Qd)return t.INT;if(i===Vr)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===na)return t.HALF_FLOAT;if(i===sv)return t.ALPHA;if(i===ov)return t.RGB;if(i===$n)return t.RGBA;if(i===av)return t.LUMINANCE;if(i===lv)return t.LUMINANCE_ALPHA;if(i===Us)return t.DEPTH_COMPONENT;if(i===Ys)return t.DEPTH_STENCIL;if(i===uv)return t.RED;if(i===th)return t.RED_INTEGER;if(i===cv)return t.RG;if(i===nh)return t.RG_INTEGER;if(i===ih)return t.RGBA_INTEGER;if(i===dl||i===hl||i===pl||i===ml)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===dl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===dl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tf||i===wf||i===Af||i===Cf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Tf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Af)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rf||i===Pf||i===bf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rf||i===Pf)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lf||i===Df||i===If||i===Nf||i===Uf||i===Ff||i===Of||i===zf||i===kf||i===Bf||i===Hf||i===Vf||i===Gf||i===Wf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Df)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===If)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ff)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Of)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wf)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gl||i===Xf||i===jf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===gl)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fv||i===Yf||i===qf||i===$f)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$f)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class yw extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qa extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sw={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),c=this._getHandJoint(u,x);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ew=`
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

}`;class Tw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new di({vertexShader:Mw,fragmentShader:Ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kn(new mu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ww extends Yr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,p=null,_=null;const x=new Tw,m=n.getContextAttributes();let c=null,v=null;const g=[],E=[],P=new Xe;let w=null;const C=new Un;C.layers.enable(1),C.viewport=new Nt;const D=new Un;D.layers.enable(2),D.viewport=new Nt;const T=[C,D],S=new yw;S.layers.enable(1),S.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let X=g[Y];return X===void 0&&(X=new _c,g[Y]=X),X.getTargetRaySpace()},this.getControllerGrip=function(Y){let X=g[Y];return X===void 0&&(X=new _c,g[Y]=X),X.getGripSpace()},this.getHand=function(Y){let X=g[Y];return X===void 0&&(X=new _c,g[Y]=X),X.getHandSpace()};function B(Y){const X=E.indexOf(Y.inputSource);if(X===-1)return;const te=g[X];te!==void 0&&(te.update(Y.inputSource,Y.frame,u||o),te.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<g.length;Y++){const X=E[Y];X!==null&&(E[Y]=null,g[Y].disconnect(X))}b=null,F=null,x.reset(),e.setRenderTarget(c),p=null,h=null,d=null,r=null,v=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,X),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Gr(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,te=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,X=m.stencil?Ys:Us,te=m.stencil?js:Vr);const _e={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(_e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Gr(h.textureWidth,h.textureHeight,{format:$n,type:Ni,depthTexture:new Cv(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(Y){for(let X=0;X<Y.removed.length;X++){const te=Y.removed[X],oe=E.indexOf(te);oe>=0&&(E[oe]=null,g[oe].disconnect(te))}for(let X=0;X<Y.added.length;X++){const te=Y.added[X];let oe=E.indexOf(te);if(oe===-1){for(let Ce=0;Ce<g.length;Ce++)if(Ce>=E.length){E.push(te),oe=Ce;break}else if(E[Ce]===null){E[Ce]=te,oe=Ce;break}if(oe===-1)break}const _e=g[oe];_e&&_e.connect(te)}}const k=new V,ne=new V;function I(Y,X,te){k.setFromMatrixPosition(X.matrixWorld),ne.setFromMatrixPosition(te.matrixWorld);const oe=k.distanceTo(ne),_e=X.projectionMatrix.elements,Ce=te.projectionMatrix.elements,we=_e[14]/(_e[10]-1),je=_e[14]/(_e[10]+1),L=(_e[9]+1)/_e[5],Ye=(_e[9]-1)/_e[5],Ae=(_e[8]-1)/_e[0],Le=(Ce[8]+1)/Ce[0],me=we*Ae,Oe=we*Le,ve=oe/(-Ae+Le),xe=ve*-Ae;X.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xe),Y.translateZ(ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const R=we+ve,M=je+ve,z=me-xe,ee=Oe+(oe-xe),J=L*je/M*R,K=Ye*je/M*R;Y.projectionMatrix.makePerspective(z,ee,J,K,R,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function $(Y,X){X===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(X.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;x.texture!==null&&(Y.near=x.depthNear,Y.far=x.depthFar),S.near=D.near=C.near=Y.near,S.far=D.far=C.far=Y.far,(b!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,F=S.far,C.near=b,C.far=F,D.near=b,D.far=F,C.updateProjectionMatrix(),D.updateProjectionMatrix(),Y.updateProjectionMatrix());const X=Y.parent,te=S.cameras;$(S,X);for(let oe=0;oe<te.length;oe++)$(te[oe],X);te.length===2?I(S,C,D):S.projectionMatrix.copy(C.projectionMatrix),Q(Y,S,X)};function Q(Y,X,te){te===null?Y.matrix.copy(X.matrixWorld):(Y.matrix.copy(te.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(X.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(X.projectionMatrix),Y.projectionMatrixInverse.copy(X.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Kf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ie=null;function le(Y,X){if(f=X.getViewerPose(u||o),_=X,f!==null){const te=f.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let oe=!1;te.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Ce=0;Ce<te.length;Ce++){const we=te[Ce];let je=null;if(p!==null)je=p.getViewport(we);else{const Ye=d.getViewSubImage(h,we);je=Ye.viewport,Ce===0&&(e.setRenderTargetTextures(v,Ye.colorTexture,h.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(v))}let L=T[Ce];L===void 0&&(L=new Un,L.layers.enable(Ce),L.viewport=new Nt,T[Ce]=L),L.matrix.fromArray(we.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(we.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(je.x,je.y,je.width,je.height),Ce===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(L)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const Ce=d.getDepthInformation(te[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,r.renderState)}}for(let te=0;te<g.length;te++){const oe=E[te],_e=g[te];oe!==null&&_e!==void 0&&_e.update(oe,X,u||o)}ie&&ie(Y,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),_=null}const Be=new wv;Be.setAnimationLoop(le),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}}const Mr=new fi,Aw=new yt;function Cw(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,Mv(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,v,g,E){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),d(m,c)):c.isMeshPhongMaterial?(s(m,c),f(m,c)):c.isMeshStandardMaterial?(s(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,E)):c.isMeshMatcapMaterial?(s(m,c),_(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),x(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,v,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===ln&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===ln&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const v=e.get(c),g=v.envMap,E=v.envMapRotation;g&&(m.envMap.value=g,Mr.copy(E),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),m.envMapRotation.value.setFromMatrix4(Aw.makeRotationFromEuler(Mr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,v,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=g*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function d(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===ln&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,c){c.matcap&&(m.matcap.value=c.matcap)}function x(m,c){const v=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rw(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const E=g.program;i.uniformBlockBinding(v,E)}function u(v,g){let E=r[v.id];E===void 0&&(_(v),E=f(v),r[v.id]=E,v.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(v,P);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function f(v){const g=d();v.__bindingPointIndex=g;const E=t.createBuffer(),P=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],E=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let w=0,C=E.length;w<C;w++){const D=Array.isArray(E[w])?E[w]:[E[w]];for(let T=0,S=D.length;T<S;T++){const b=D[T];if(p(b,w,T,P)===!0){const F=b.__offset,B=Array.isArray(b.value)?b.value:[b.value];let q=0;for(let Z=0;Z<B.length;Z++){const k=B[Z],ne=x(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,F+q,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,q),q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,E,P){const w=v.value,C=g+"_"+E;if(P[C]===void 0)return typeof w=="number"||typeof w=="boolean"?P[C]=w:P[C]=w.clone(),!0;{const D=P[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return P[C]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function _(v){const g=v.uniforms;let E=0;const P=16;for(let C=0,D=g.length;C<D;C++){const T=Array.isArray(g[C])?g[C]:[g[C]];for(let S=0,b=T.length;S<b;S++){const F=T[S],B=Array.isArray(F.value)?F.value:[F.value];for(let q=0,Z=B.length;q<Z;q++){const k=B[q],ne=x(k),I=E%P;I!==0&&P-I<ne.boundary&&(E+=P-I),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=ne.storage}}}const w=E%P;return w>0&&(E+=P-w),v.__size=E,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const E=o.indexOf(g.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class Pw{constructor(e={}){const{canvas:n=yS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const c=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=lr,this.toneMappingExposure=1;const g=this;let E=!1,P=0,w=0,C=null,D=-1,T=null;const S=new Nt,b=new Nt;let F=null;const B=new ot(0);let q=0,Z=n.width,k=n.height,ne=1,I=null,$=null;const Q=new Nt(0,0,Z,k),ie=new Nt(0,0,Z,k);let le=!1;const Be=new oh;let Y=!1,X=!1;const te=new yt,oe=new V,_e=new Nt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function je(){return C===null?ne:1}let L=i;function Ye(A,U){return n.getContext(A,U)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zd}`),n.addEventListener("webglcontextlost",H,!1),n.addEventListener("webglcontextrestored",j,!1),n.addEventListener("webglcontextcreationerror",re,!1),L===null){const U="webgl2";if(L=Ye(U,A),L===null)throw Ye(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ae,Le,me,Oe,ve,xe,R,M,z,ee,J,K,Se,ae,fe,Ie,se,de,ze,Te,he,Ne,Me,We;function y(){Ae=new F1(L),Ae.init(),Ne=new xw(L,Ae),Le=new b1(L,Ae,e,Ne),me=new gw(L),Oe=new k1(L),ve=new nw,xe=new _w(L,Ae,me,ve,Le,Ne,Oe),R=new D1(g),M=new U1(g),z=new jS(L),Me=new R1(L,z),ee=new O1(L,z,Oe,Me),J=new H1(L,ee,z,Oe),ze=new B1(L,Le,xe),Ie=new L1(ve),K=new tw(g,R,M,Ae,Le,Me,Ie),Se=new Cw(g,ve),ae=new rw,fe=new cw(Ae),de=new C1(g,R,M,me,J,h,l),se=new mw(g,J,Le),We=new Rw(L,Oe,Le,me),Te=new P1(L,Ae,Oe),he=new z1(L,Ae,Oe),Oe.programs=K.programs,g.capabilities=Le,g.extensions=Ae,g.properties=ve,g.renderLists=ae,g.shadowMap=se,g.state=me,g.info=Oe}y();const O=new ww(g,L);this.xr=O,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(Z,k,!1))},this.getSize=function(A){return A.set(Z,k)},this.setSize=function(A,U,G=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,k=U,n.width=Math.floor(A*ne),n.height=Math.floor(U*ne),G===!0&&(n.style.width=A+"px",n.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(Z*ne,k*ne).floor()},this.setDrawingBufferSize=function(A,U,G){Z=A,k=U,ne=G,n.width=Math.floor(A*G),n.height=Math.floor(U*G),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,U,G,W){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,U,G,W),me.viewport(S.copy(Q).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,U,G,W){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,U,G,W),me.scissor(b.copy(ie).multiplyScalar(ne).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(A){me.setScissorTest(le=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(A=!0,U=!0,G=!0){let W=0;if(A){let N=!1;if(C!==null){const ce=C.texture.format;N=ce===ih||ce===nh||ce===th}if(N){const ce=C.texture.type,Ee=ce===Ni||ce===Vr||ce===qo||ce===js||ce===Jd||ce===eh,be=de.getClearColor(),De=de.getClearAlpha(),Ge=be.r,He=be.g,ke=be.b;Ee?(p[0]=Ge,p[1]=He,p[2]=ke,p[3]=De,L.clearBufferuiv(L.COLOR,0,p)):(_[0]=Ge,_[1]=He,_[2]=ke,_[3]=De,L.clearBufferiv(L.COLOR,0,_))}else W|=L.COLOR_BUFFER_BIT}U&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",H,!1),n.removeEventListener("webglcontextrestored",j,!1),n.removeEventListener("webglcontextcreationerror",re,!1),ae.dispose(),fe.dispose(),ve.dispose(),R.dispose(),M.dispose(),J.dispose(),Me.dispose(),We.dispose(),K.dispose(),O.dispose(),O.removeEventListener("sessionstart",lt),O.removeEventListener("sessionend",ge),Qe.stop()};function H(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Oe.autoReset,U=se.enabled,G=se.autoUpdate,W=se.needsUpdate,N=se.type;y(),Oe.autoReset=A,se.enabled=U,se.autoUpdate=G,se.needsUpdate=W,se.type=N}function re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Re(A){const U=A.target;U.removeEventListener("dispose",Re),Ue(U)}function Ue(A){et(A),ve.remove(A)}function et(A){const U=ve.get(A).programs;U!==void 0&&(U.forEach(function(G){K.releaseProgram(G)}),A.isShaderMaterial&&K.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,G,W,N,ce){U===null&&(U=Ce);const Ee=N.isMesh&&N.matrixWorld.determinant()<0,be=yn(A,U,G,W,N);me.setMaterial(W,Ee);let De=G.index,Ge=1;if(W.wireframe===!0){if(De=ee.getWireframeAttribute(G),De===void 0)return;Ge=2}const He=G.drawRange,ke=G.attributes.position;let it=He.start*Ge,ht=(He.start+He.count)*Ge;ce!==null&&(it=Math.max(it,ce.start*Ge),ht=Math.min(ht,(ce.start+ce.count)*Ge)),De!==null?(it=Math.max(it,0),ht=Math.min(ht,De.count)):ke!=null&&(it=Math.max(it,0),ht=Math.min(ht,ke.count));const ut=ht-it;if(ut<0||ut===1/0)return;Me.setup(N,W,be,G,De);let Rt,rt=Te;if(De!==null&&(Rt=z.get(De),rt=he,rt.setIndex(Rt)),N.isMesh)W.wireframe===!0?(me.setLineWidth(W.wireframeLinewidth*je()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(N.isLine){let Fe=W.linewidth;Fe===void 0&&(Fe=1),me.setLineWidth(Fe*je()),N.isLineSegments?rt.setMode(L.LINES):N.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else N.isPoints?rt.setMode(L.POINTS):N.isSprite&&rt.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)rt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Fe=N._multiDrawStarts,Pt=N._multiDrawCounts,st=N._multiDrawCount,zt=De?z.get(De).bytesPerElement:1,ni=ve.get(W).currentProgram.getUniforms();for(let Xt=0;Xt<st;Xt++)ni.setValue(L,"_gl_DrawID",Xt),rt.render(Fe[Xt]/zt,Pt[Xt])}else if(N.isInstancedMesh)rt.renderInstances(it,ut,N.count);else if(G.isInstancedBufferGeometry){const Fe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pt=Math.min(G.instanceCount,Fe);rt.renderInstances(it,ut,Pt)}else rt.render(it,ut)};function tt(A,U,G){A.transparent===!0&&A.side===Ei&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,ti(A,U,G),A.side=fr,A.needsUpdate=!0,ti(A,U,G),A.side=Ei):ti(A,U,G)}this.compile=function(A,U,G=null){G===null&&(G=A),m=fe.get(G),m.init(U),v.push(m),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),A!==G&&A.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const W=new Set;return A.traverse(function(N){const ce=N.material;if(ce)if(Array.isArray(ce))for(let Ee=0;Ee<ce.length;Ee++){const be=ce[Ee];tt(be,G,N),W.add(be)}else tt(ce,G,N),W.add(ce)}),v.pop(),m=null,W},this.compileAsync=function(A,U,G=null){const W=this.compile(A,U,G);return new Promise(N=>{function ce(){if(W.forEach(function(Ee){ve.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){N(A);return}setTimeout(ce,10)}Ae.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ve=null;function nt(A){Ve&&Ve(A)}function lt(){Qe.stop()}function ge(){Qe.start()}const Qe=new wv;Qe.setAnimationLoop(nt),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(A){Ve=A,O.setAnimationLoop(A),A===null?Qe.stop():Qe.start()},O.addEventListener("sessionstart",lt),O.addEventListener("sessionend",ge),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(U),U=O.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,U,C),m=fe.get(A,v.length),m.init(U),v.push(m),te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Be.setFromProjectionMatrix(te),X=this.localClippingEnabled,Y=Ie.init(this.clippingPlanes,X),x=ae.get(A,c.length),x.init(),c.push(x),O.enabled===!0&&O.isPresenting===!0){const ce=g.xr.getDepthSensingMesh();ce!==null&&dt(ce,U,-1/0,g.sortObjects)}dt(A,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(I,$),we=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,we&&de.addToRenderList(x,A),this.info.render.frame++,Y===!0&&Ie.beginShadows();const G=m.state.shadowsArray;se.render(G,A,U),Y===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,N=x.transmissive;if(m.setupLights(),U.isArrayCamera){const ce=U.cameras;if(N.length>0)for(let Ee=0,be=ce.length;Ee<be;Ee++){const De=ce[Ee];Je(W,N,A,De)}we&&de.render(A);for(let Ee=0,be=ce.length;Ee<be;Ee++){const De=ce[Ee];Wt(x,A,De,De.viewport)}}else N.length>0&&Je(W,N,A,U),we&&de.render(A),Wt(x,A,U);C!==null&&(xe.updateMultisampleRenderTarget(C),xe.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(g,A,U),Me.resetDefaultState(),D=-1,T=null,v.pop(),v.length>0?(m=v[v.length-1],Y===!0&&Ie.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function dt(A,U,G,W){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Be.intersectsSprite(A)){W&&_e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(te);const Ee=J.update(A),be=A.material;be.visible&&x.push(A,Ee,be,G,_e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Be.intersectsObject(A))){const Ee=J.update(A),be=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_e.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),_e.copy(Ee.boundingSphere.center)),_e.applyMatrix4(A.matrixWorld).applyMatrix4(te)),Array.isArray(be)){const De=Ee.groups;for(let Ge=0,He=De.length;Ge<He;Ge++){const ke=De[Ge],it=be[ke.materialIndex];it&&it.visible&&x.push(A,Ee,it,G,_e.z,ke)}}else be.visible&&x.push(A,Ee,be,G,_e.z,null)}}const ce=A.children;for(let Ee=0,be=ce.length;Ee<be;Ee++)dt(ce[Ee],U,G,W)}function Wt(A,U,G,W){const N=A.opaque,ce=A.transmissive,Ee=A.transparent;m.setupLightsView(G),Y===!0&&Ie.setGlobalState(g.clippingPlanes,G),W&&me.viewport(S.copy(W)),N.length>0&&ei(N,U,G),ce.length>0&&ei(ce,U,G),Ee.length>0&&ei(Ee,U,G),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Je(A,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Gr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?na:Ni,minFilter:Dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const ce=m.state.transmissionRenderTarget[W.id],Ee=W.viewport||S;ce.setSize(Ee.z,Ee.w);const be=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor(B),q=g.getClearAlpha(),q<1&&g.setClearColor(16777215,.5),we?de.render(G):g.clear();const De=g.toneMapping;g.toneMapping=lr;const Ge=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Y===!0&&Ie.setGlobalState(g.clippingPlanes,W),ei(A,G,W),xe.updateMultisampleRenderTarget(ce),xe.updateRenderTargetMipmap(ce),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ke=0,it=U.length;ke<it;ke++){const ht=U[ke],ut=ht.object,Rt=ht.geometry,rt=ht.material,Fe=ht.group;if(rt.side===Ei&&ut.layers.test(W.layers)){const Pt=rt.side;rt.side=ln,rt.needsUpdate=!0,hi(ut,G,W,Rt,rt,Fe),rt.side=Pt,rt.needsUpdate=!0,He=!0}}He===!0&&(xe.updateMultisampleRenderTarget(ce),xe.updateRenderTargetMipmap(ce))}g.setRenderTarget(be),g.setClearColor(B,q),Ge!==void 0&&(W.viewport=Ge),g.toneMapping=De}function ei(A,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ce=A.length;N<ce;N++){const Ee=A[N],be=Ee.object,De=Ee.geometry,Ge=W===null?Ee.material:W,He=Ee.group;be.layers.test(G.layers)&&hi(be,U,G,De,Ge,He)}}function hi(A,U,G,W,N,ce){A.onBeforeRender(g,U,G,W,N,ce),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),N.transparent===!0&&N.side===Ei&&N.forceSinglePass===!1?(N.side=ln,N.needsUpdate=!0,g.renderBufferDirect(G,U,W,N,A,ce),N.side=fr,N.needsUpdate=!0,g.renderBufferDirect(G,U,W,N,A,ce),N.side=Ei):g.renderBufferDirect(G,U,W,N,A,ce),A.onAfterRender(g,U,G,W,N,ce)}function ti(A,U,G){U.isScene!==!0&&(U=Ce);const W=ve.get(A),N=m.state.lights,ce=m.state.shadowsArray,Ee=N.state.version,be=K.getParameters(A,N.state,ce,U,G),De=K.getProgramCacheKey(be);let Ge=W.programs;W.environment=A.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(A.isMeshStandardMaterial?M:R).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",Re),Ge=new Map,W.programs=Ge);let He=Ge.get(De);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===Ee)return Ln(A,be),He}else be.uniforms=K.getUniforms(A),A.onBeforeCompile(be,g),He=K.acquireProgram(be,De),Ge.set(De,He),W.uniforms=be.uniforms;const ke=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=Ie.uniform),Ln(A,be),W.needsLights=dn(A),W.lightsStateVersion=Ee,W.needsLights&&(ke.ambientLightColor.value=N.state.ambient,ke.lightProbe.value=N.state.probe,ke.directionalLights.value=N.state.directional,ke.directionalLightShadows.value=N.state.directionalShadow,ke.spotLights.value=N.state.spot,ke.spotLightShadows.value=N.state.spotShadow,ke.rectAreaLights.value=N.state.rectArea,ke.ltc_1.value=N.state.rectAreaLTC1,ke.ltc_2.value=N.state.rectAreaLTC2,ke.pointLights.value=N.state.point,ke.pointLightShadows.value=N.state.pointShadow,ke.hemisphereLights.value=N.state.hemi,ke.directionalShadowMap.value=N.state.directionalShadowMap,ke.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ke.spotShadowMap.value=N.state.spotShadowMap,ke.spotLightMatrix.value=N.state.spotLightMatrix,ke.spotLightMap.value=N.state.spotLightMap,ke.pointShadowMap.value=N.state.pointShadowMap,ke.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function Oi(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=_l.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Ln(A,U){const G=ve.get(A);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function yn(A,U,G,W,N){U.isScene!==!0&&(U=Ce),xe.resetTextureUnits();const ce=U.fog,Ee=W.isMeshStandardMaterial?U.environment:null,be=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:mr,De=(W.isMeshStandardMaterial?M:R).get(W.envMap||Ee),Ge=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!G.morphAttributes.position,it=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let ut=lr;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ut=g.toneMapping);const Rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=Rt!==void 0?Rt.length:0,Fe=ve.get(W),Pt=m.state.lights;if(Y===!0&&(X===!0||A!==T)){const $t=A===T&&W.id===D;Ie.setState(W,A,$t)}let st=!1;W.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Pt.state.version||Fe.outputColorSpace!==be||N.isBatchedMesh&&Fe.batching===!1||!N.isBatchedMesh&&Fe.batching===!0||N.isBatchedMesh&&Fe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Fe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Fe.instancing===!1||!N.isInstancedMesh&&Fe.instancing===!0||N.isSkinnedMesh&&Fe.skinning===!1||!N.isSkinnedMesh&&Fe.skinning===!0||N.isInstancedMesh&&Fe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Fe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Fe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Fe.instancingMorph===!1&&N.morphTexture!==null||Fe.envMap!==De||W.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ie.numPlanes||Fe.numIntersection!==Ie.numIntersection)||Fe.vertexAlphas!==Ge||Fe.vertexTangents!==He||Fe.morphTargets!==ke||Fe.morphNormals!==it||Fe.morphColors!==ht||Fe.toneMapping!==ut||Fe.morphTargetsCount!==rt)&&(st=!0):(st=!0,Fe.__version=W.version);let zt=Fe.currentProgram;st===!0&&(zt=ti(W,U,N));let ni=!1,Xt=!1,pi=!1;const mt=zt.getUniforms(),hn=Fe.uniforms;if(me.useProgram(zt.program)&&(ni=!0,Xt=!0,pi=!0),W.id!==D&&(D=W.id,Xt=!0),ni||T!==A){mt.setValue(L,"projectionMatrix",A.projectionMatrix),mt.setValue(L,"viewMatrix",A.matrixWorldInverse);const $t=mt.map.cameraPosition;$t!==void 0&&$t.setValue(L,oe.setFromMatrixPosition(A.matrixWorld)),Le.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&mt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Xt=!0,pi=!0)}if(N.isSkinnedMesh){mt.setOptional(L,N,"bindMatrix"),mt.setOptional(L,N,"bindMatrixInverse");const $t=N.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),mt.setValue(L,"boneTexture",$t.boneTexture,xe))}N.isBatchedMesh&&(mt.setOptional(L,N,"batchingTexture"),mt.setValue(L,"batchingTexture",N._matricesTexture,xe),mt.setOptional(L,N,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",N._indirectTexture,xe),mt.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",N._colorsTexture,xe));const gr=G.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&ze.update(N,G,zt),(Xt||Fe.receiveShadow!==N.receiveShadow)&&(Fe.receiveShadow=N.receiveShadow,mt.setValue(L,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(hn.envMap.value=De,hn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),Xt&&(mt.setValue(L,"toneMappingExposure",g.toneMappingExposure),Fe.needsLights&&Ct(hn,pi),ce&&W.fog===!0&&Se.refreshFogUniforms(hn,ce),Se.refreshMaterialUniforms(hn,W,ne,k,m.state.transmissionRenderTarget[A.id]),_l.upload(L,Oi(Fe),hn,xe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(_l.upload(L,Oi(Fe),hn,xe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&mt.setValue(L,"center",N.center),mt.setValue(L,"modelViewMatrix",N.modelViewMatrix),mt.setValue(L,"normalMatrix",N.normalMatrix),mt.setValue(L,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const $t=W.uniformsGroups;for(let Js=0,vu=$t.length;Js<vu;Js++){const la=$t[Js];We.update(la,zt),We.bind(la,zt)}}return zt}function Ct(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function dn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,U,G){ve.get(A.texture).__webglTexture=U,ve.get(A.depthTexture).__webglTexture=G;const W=ve.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const G=ve.get(A);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,G=0){C=A,P=U,w=G;let W=!0,N=null,ce=!1,Ee=!1;if(A){const De=ve.get(A);De.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(L.FRAMEBUFFER,null),W=!1):De.__webglFramebuffer===void 0?xe.setupRenderTarget(A):De.__hasExternalTextures&&xe.rebindTextures(A,ve.get(A.texture).__webglTexture,ve.get(A.depthTexture).__webglTexture);const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);const He=ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[U])?N=He[U][G]:N=He[U],ce=!0):A.samples>0&&xe.useMultisampledRTT(A)===!1?N=ve.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?N=He[G]:N=He,S.copy(A.viewport),b.copy(A.scissor),F=A.scissorTest}else S.copy(Q).multiplyScalar(ne).floor(),b.copy(ie).multiplyScalar(ne).floor(),F=le;if(me.bindFramebuffer(L.FRAMEBUFFER,N)&&W&&me.drawBuffers(A,N),me.viewport(S),me.scissor(b),me.setScissorTest(F),ce){const De=ve.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,De.__webglTexture,G)}else if(Ee){const De=ve.get(A.texture),Ge=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,De.__webglTexture,G||0,Ge)}D=-1},this.readRenderTargetPixels=function(A,U,G,W,N,ce,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){me.bindFramebuffer(L.FRAMEBUFFER,be);try{const De=A.texture,Ge=De.format,He=De.type;if(!Le.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-W&&G>=0&&G<=A.height-N&&L.readPixels(U,G,W,N,Ne.convert(Ge),Ne.convert(He),ce)}finally{const De=C!==null?ve.get(C).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,U,G,W,N,ce,Ee){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){me.bindFramebuffer(L.FRAMEBUFFER,be);try{const De=A.texture,Ge=De.format,He=De.type;if(!Le.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-W&&G>=0&&G<=A.height-N){const ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,ce.byteLength,L.STREAM_READ),L.readPixels(U,G,W,N,Ne.convert(Ge),Ne.convert(He),0),L.flush();const it=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await SS(L,it,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ce)}finally{L.deleteBuffer(ke),L.deleteSync(it)}return ce}}finally{const De=C!==null?ve.get(C).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(A,U=null,G=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-G),N=Math.floor(A.image.width*W),ce=Math.floor(A.image.height*W),Ee=U!==null?U.x:0,be=U!==null?U.y:0;xe.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,Ee,be,N,ce),me.unbindTexture()},this.copyTextureToTexture=function(A,U,G=null,W=null,N=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let ce,Ee,be,De,Ge,He;G!==null?(ce=G.max.x-G.min.x,Ee=G.max.y-G.min.y,be=G.min.x,De=G.min.y):(ce=A.image.width,Ee=A.image.height,be=0,De=0),W!==null?(Ge=W.x,He=W.y):(Ge=0,He=0);const ke=Ne.convert(U.format),it=Ne.convert(U.type);xe.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ht=L.getParameter(L.UNPACK_ROW_LENGTH),ut=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Rt=L.getParameter(L.UNPACK_SKIP_PIXELS),rt=L.getParameter(L.UNPACK_SKIP_ROWS),Fe=L.getParameter(L.UNPACK_SKIP_IMAGES),Pt=A.isCompressedTexture?A.mipmaps[N]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Ge,He,ce,Ee,ke,it,Pt.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Ge,He,Pt.width,Pt.height,ke,Pt.data):L.texSubImage2D(L.TEXTURE_2D,N,Ge,He,ce,Ee,ke,it,Pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),L.pixelStorei(L.UNPACK_SKIP_ROWS,rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fe),N===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(A,U,G=null,W=null,N=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],U=arguments[3],N=arguments[4]||0);let ce,Ee,be,De,Ge,He,ke,it,ht;const ut=A.isCompressedTexture?A.mipmaps[N]:A.image;G!==null?(ce=G.max.x-G.min.x,Ee=G.max.y-G.min.y,be=G.max.z-G.min.z,De=G.min.x,Ge=G.min.y,He=G.min.z):(ce=ut.width,Ee=ut.height,be=ut.depth,De=0,Ge=0,He=0),W!==null?(ke=W.x,it=W.y,ht=W.z):(ke=0,it=0,ht=0);const Rt=Ne.convert(U.format),rt=Ne.convert(U.type);let Fe;if(U.isData3DTexture)xe.setTexture3D(U,0),Fe=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)xe.setTexture2DArray(U,0),Fe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Pt=L.getParameter(L.UNPACK_ROW_LENGTH),st=L.getParameter(L.UNPACK_IMAGE_HEIGHT),zt=L.getParameter(L.UNPACK_SKIP_PIXELS),ni=L.getParameter(L.UNPACK_SKIP_ROWS),Xt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,De),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,He),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Fe,N,ke,it,ht,ce,Ee,be,Rt,rt,ut.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Fe,N,ke,it,ht,ce,Ee,be,Rt,ut.data):L.texSubImage3D(Fe,N,ke,it,ht,ce,Ee,be,Rt,rt,ut),L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st),L.pixelStorei(L.UNPACK_SKIP_PIXELS,zt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ni),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xt),N===0&&U.generateMipmaps&&L.generateMipmap(Fe),me.unbindTexture()},this.initRenderTarget=function(A){ve.get(A).__webglFramebuffer===void 0&&xe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?xe.setTextureCube(A,0):A.isData3DTexture?xe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?xe.setTexture2DArray(A,0):xe.setTexture2D(A,0),me.unbindTexture()},this.resetState=function(){P=0,w=0,C=null,me.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===rh?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===pu?"display-p3":"srgb"}}class bw extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class yo extends qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ql=new V,$l=new V,gm=new yt,po=new oa,$a=new sa,xc=new V,vm=new V;class Qf extends Gt{constructor(e=new Ht,n=new yo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ql.fromBufferAttribute(n,r-1),$l.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ql.distanceTo($l);e.setAttribute("lineDistance",new Cn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(r),$a.radius+=s,e.ray.intersectsSphere($a)===!1)return;gm.copy(r).invert(),po.copy(e.ray).applyMatrix4(gm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=u){const c=f.getX(x),v=f.getX(x+1),g=Ka(this,e,po,l,c,v);g&&n.push(g)}if(this.isLineLoop){const x=f.getX(_-1),m=f.getX(p),c=Ka(this,e,po,l,x,m);c&&n.push(c)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=u){const c=Ka(this,e,po,l,x,x+1);c&&n.push(c)}if(this.isLineLoop){const x=Ka(this,e,po,l,_-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ka(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(ql.fromBufferAttribute(o,r),$l.fromBufferAttribute(o,s),n.distanceSqToSegment(ql,$l,xc,vm)>i)return;xc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(xc);if(!(l<e.near||l>e.far))return{distance:l,point:vm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}class _m extends Qf{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class Dv extends qr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xm=new yt,Jf=new oa,Za=new sa,Qa=new V;class ym extends Gt{constructor(e=new Ht,n=new Dv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(r),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;xm.copy(r).invert(),Jf.copy(e.ray).applyMatrix4(xm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,x=p;_<x;_++){const m=u.getX(_);Qa.fromBufferAttribute(d,m),Sm(Qa,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=h,x=p;_<x;_++)Qa.fromBufferAttribute(d,_),Sm(Qa,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sm(t,e,n,i,r,s,o){const a=Jf.distanceSqToPoint(t);if(a<n){const l=new V;Jf.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Kl extends Ht{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const f=[],d=new V,h=new V,p=[],_=[],x=[],m=[];for(let c=0;c<=i;c++){const v=[],g=c/i;let E=0;c===0&&o===0?E=.5/n:c===i&&l===Math.PI&&(E=-.5/n);for(let P=0;P<=n;P++){const w=P/n;d.x=-e*Math.cos(r+w*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+g*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(w+E,1-g),v.push(u++)}f.push(v)}for(let c=0;c<i;c++)for(let v=0;v<n;v++){const g=f[c][v+1],E=f[c][v],P=f[c+1][v],w=f[c+1][v+1];(c!==0||o>0)&&p.push(g,E,w),(c!==i-1||l<Math.PI)&&p.push(E,P,w)}this.setIndex(p),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(x,3)),this.setAttribute("uv",new Cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lw extends qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dv,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Mm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Dw{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=u.length;d<h;d+=2){const p=u[d],_=u[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return _}return null}}}const Iw=new Dw;class lh{constructor(e){this.manager=e!==void 0?e:Iw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lh.DEFAULT_MATERIAL_NAME="__DEFAULT";class Nw extends lh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Mm.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=$o("img");function l(){f(),Mm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){f(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Uw extends lh{constructor(e){super(e)}load(e,n,i,r){const s=new un,o=new Nw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Iv extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const yc=new yt,Em=new V,Tm=new V;class Fw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),n.position.copy(Em),Tm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tm),n.updateMatrixWorld(),yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ow extends Fw{constructor(){super(new Av(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wm extends Iv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Ow}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zw extends Iv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Am=new yt;class kw{constructor(e,n,i=0,r=1/0){this.ray=new oa(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Am.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Am),this}intersectObject(e,n=!0,i=[]){return ed(e,this,i,n),i.sort(Cm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ed(e[r],this,i,n);return i.sort(Cm),i}}function Cm(t,e){return t.distance-e.distance}function ed(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)ed(s[o],e,n,!0)}}class Rm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(sn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);const Pm={type:"change"},Sc={type:"start"},bm={type:"end"},Ja=new oa,Lm=new Yi,Bw=Math.cos(70*xS.DEG2RAD);class Hw extends Yr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kr.ROTATE,MIDDLE:Kr.DOLLY,RIGHT:Kr.PAN},this.touches={ONE:Zr.ROTATE,TWO:Zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",fe),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",fe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Pm),i.update(),s=r.NONE},this.update=function(){const y=new V,O=new Wr().setFromUnitVectors(e.up,new V(0,1,0)),H=O.clone().invert(),j=new V,re=new Wr,Re=new V,Ue=2*Math.PI;return function(tt=null){const Ve=i.object.position;y.copy(Ve).sub(i.target),y.applyQuaternion(O),a.setFromVector3(y),i.autoRotate&&s===r.NONE&&F(S(tt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let nt=i.minAzimuthAngle,lt=i.maxAzimuthAngle;isFinite(nt)&&isFinite(lt)&&(nt<-Math.PI?nt+=Ue:nt>Math.PI&&(nt-=Ue),lt<-Math.PI?lt+=Ue:lt>Math.PI&&(lt-=Ue),nt<=lt?a.theta=Math.max(nt,Math.min(lt,a.theta)):a.theta=a.theta>(nt+lt)/2?Math.max(nt,a.theta):Math.min(lt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let ge=!1;if(i.zoomToCursor&&w||i.object.isOrthographicCamera)a.radius=Q(a.radius);else{const Qe=a.radius;a.radius=Q(a.radius*u),ge=Qe!=a.radius}if(y.setFromSpherical(a),y.applyQuaternion(H),Ve.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&w){let Qe=null;if(i.object.isPerspectiveCamera){const dt=y.length();Qe=Q(dt*u);const Wt=dt-Qe;i.object.position.addScaledVector(E,Wt),i.object.updateMatrixWorld(),ge=!!Wt}else if(i.object.isOrthographicCamera){const dt=new V(P.x,P.y,0);dt.unproject(i.object);const Wt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),ge=Wt!==i.object.zoom;const Je=new V(P.x,P.y,0);Je.unproject(i.object),i.object.position.sub(Je).add(dt),i.object.updateMatrixWorld(),Qe=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Qe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Qe).add(i.object.position):(Ja.origin.copy(i.object.position),Ja.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ja.direction))<Bw?e.lookAt(i.target):(Lm.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ja.intersectPlane(Lm,i.target))))}else if(i.object.isOrthographicCamera){const Qe=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),Qe!==i.object.zoom&&(i.object.updateProjectionMatrix(),ge=!0)}return u=1,w=!1,ge||j.distanceToSquared(i.object.position)>o||8*(1-re.dot(i.object.quaternion))>o||Re.distanceToSquared(i.target)>o?(i.dispatchEvent(Pm),j.copy(i.object.position),re.copy(i.object.quaternion),Re.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",de),i.domElement.removeEventListener("pointerdown",xe),i.domElement.removeEventListener("pointercancel",M),i.domElement.removeEventListener("wheel",J),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",M),i.domElement.getRootNode().removeEventListener("keydown",Se,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",fe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Rm,l=new Rm;let u=1;const f=new V,d=new Xe,h=new Xe,p=new Xe,_=new Xe,x=new Xe,m=new Xe,c=new Xe,v=new Xe,g=new Xe,E=new V,P=new Xe;let w=!1;const C=[],D={};let T=!1;function S(y){return y!==null?2*Math.PI/60*i.autoRotateSpeed*y:2*Math.PI/60/60*i.autoRotateSpeed}function b(y){const O=Math.abs(y*.01);return Math.pow(.95,i.zoomSpeed*O)}function F(y){l.theta-=y}function B(y){l.phi-=y}const q=function(){const y=new V;return function(H,j){y.setFromMatrixColumn(j,0),y.multiplyScalar(-H),f.add(y)}}(),Z=function(){const y=new V;return function(H,j){i.screenSpacePanning===!0?y.setFromMatrixColumn(j,1):(y.setFromMatrixColumn(j,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(H),f.add(y)}}(),k=function(){const y=new V;return function(H,j){const re=i.domElement;if(i.object.isPerspectiveCamera){const Re=i.object.position;y.copy(Re).sub(i.target);let Ue=y.length();Ue*=Math.tan(i.object.fov/2*Math.PI/180),q(2*H*Ue/re.clientHeight,i.object.matrix),Z(2*j*Ue/re.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(q(H*(i.object.right-i.object.left)/i.object.zoom/re.clientWidth,i.object.matrix),Z(j*(i.object.top-i.object.bottom)/i.object.zoom/re.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(y){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(y,O){if(!i.zoomToCursor)return;w=!0;const H=i.domElement.getBoundingClientRect(),j=y-H.left,re=O-H.top,Re=H.width,Ue=H.height;P.x=j/Re*2-1,P.y=-(re/Ue)*2+1,E.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(y){return Math.max(i.minDistance,Math.min(i.maxDistance,y))}function ie(y){d.set(y.clientX,y.clientY)}function le(y){$(y.clientX,y.clientX),c.set(y.clientX,y.clientY)}function Be(y){_.set(y.clientX,y.clientY)}function Y(y){h.set(y.clientX,y.clientY),p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const O=i.domElement;F(2*Math.PI*p.x/O.clientHeight),B(2*Math.PI*p.y/O.clientHeight),d.copy(h),i.update()}function X(y){v.set(y.clientX,y.clientY),g.subVectors(v,c),g.y>0?ne(b(g.y)):g.y<0&&I(b(g.y)),c.copy(v),i.update()}function te(y){x.set(y.clientX,y.clientY),m.subVectors(x,_).multiplyScalar(i.panSpeed),k(m.x,m.y),_.copy(x),i.update()}function oe(y){$(y.clientX,y.clientY),y.deltaY<0?I(b(y.deltaY)):y.deltaY>0&&ne(b(y.deltaY)),i.update()}function _e(y){let O=!1;switch(y.code){case i.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),O=!0;break;case i.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),O=!0;break;case i.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),O=!0;break;case i.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),O=!0;break}O&&(y.preventDefault(),i.update())}function Ce(y){if(C.length===1)d.set(y.pageX,y.pageY);else{const O=Me(y),H=.5*(y.pageX+O.x),j=.5*(y.pageY+O.y);d.set(H,j)}}function we(y){if(C.length===1)_.set(y.pageX,y.pageY);else{const O=Me(y),H=.5*(y.pageX+O.x),j=.5*(y.pageY+O.y);_.set(H,j)}}function je(y){const O=Me(y),H=y.pageX-O.x,j=y.pageY-O.y,re=Math.sqrt(H*H+j*j);c.set(0,re)}function L(y){i.enableZoom&&je(y),i.enablePan&&we(y)}function Ye(y){i.enableZoom&&je(y),i.enableRotate&&Ce(y)}function Ae(y){if(C.length==1)h.set(y.pageX,y.pageY);else{const H=Me(y),j=.5*(y.pageX+H.x),re=.5*(y.pageY+H.y);h.set(j,re)}p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const O=i.domElement;F(2*Math.PI*p.x/O.clientHeight),B(2*Math.PI*p.y/O.clientHeight),d.copy(h)}function Le(y){if(C.length===1)x.set(y.pageX,y.pageY);else{const O=Me(y),H=.5*(y.pageX+O.x),j=.5*(y.pageY+O.y);x.set(H,j)}m.subVectors(x,_).multiplyScalar(i.panSpeed),k(m.x,m.y),_.copy(x)}function me(y){const O=Me(y),H=y.pageX-O.x,j=y.pageY-O.y,re=Math.sqrt(H*H+j*j);v.set(0,re),g.set(0,Math.pow(v.y/c.y,i.zoomSpeed)),ne(g.y),c.copy(v);const Re=(y.pageX+O.x)*.5,Ue=(y.pageY+O.y)*.5;$(Re,Ue)}function Oe(y){i.enableZoom&&me(y),i.enablePan&&Le(y)}function ve(y){i.enableZoom&&me(y),i.enableRotate&&Ae(y)}function xe(y){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",R),i.domElement.addEventListener("pointerup",M)),!he(y)&&(ze(y),y.pointerType==="touch"?Ie(y):z(y)))}function R(y){i.enabled!==!1&&(y.pointerType==="touch"?se(y):ee(y))}function M(y){switch(Te(y),C.length){case 0:i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",M),i.dispatchEvent(bm),s=r.NONE;break;case 1:const O=C[0],H=D[O];Ie({pointerId:O,pageX:H.x,pageY:H.y});break}}function z(y){let O;switch(y.button){case 0:O=i.mouseButtons.LEFT;break;case 1:O=i.mouseButtons.MIDDLE;break;case 2:O=i.mouseButtons.RIGHT;break;default:O=-1}switch(O){case Kr.DOLLY:if(i.enableZoom===!1)return;le(y),s=r.DOLLY;break;case Kr.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;Be(y),s=r.PAN}else{if(i.enableRotate===!1)return;ie(y),s=r.ROTATE}break;case Kr.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;ie(y),s=r.ROTATE}else{if(i.enablePan===!1)return;Be(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Sc)}function ee(y){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Y(y);break;case r.DOLLY:if(i.enableZoom===!1)return;X(y);break;case r.PAN:if(i.enablePan===!1)return;te(y);break}}function J(y){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(y.preventDefault(),i.dispatchEvent(Sc),oe(K(y)),i.dispatchEvent(bm))}function K(y){const O=y.deltaMode,H={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(O){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}return y.ctrlKey&&!T&&(H.deltaY*=10),H}function Se(y){y.key==="Control"&&(T=!0,i.domElement.getRootNode().addEventListener("keyup",ae,{passive:!0,capture:!0}))}function ae(y){y.key==="Control"&&(T=!1,i.domElement.getRootNode().removeEventListener("keyup",ae,{passive:!0,capture:!0}))}function fe(y){i.enabled===!1||i.enablePan===!1||_e(y)}function Ie(y){switch(Ne(y),C.length){case 1:switch(i.touches.ONE){case Zr.ROTATE:if(i.enableRotate===!1)return;Ce(y),s=r.TOUCH_ROTATE;break;case Zr.PAN:if(i.enablePan===!1)return;we(y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Zr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(y),s=r.TOUCH_DOLLY_PAN;break;case Zr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ye(y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Sc)}function se(y){switch(Ne(y),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ae(y),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Le(y),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Oe(y),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(y),i.update();break;default:s=r.NONE}}function de(y){i.enabled!==!1&&y.preventDefault()}function ze(y){C.push(y.pointerId)}function Te(y){delete D[y.pointerId];for(let O=0;O<C.length;O++)if(C[O]==y.pointerId){C.splice(O,1);return}}function he(y){for(let O=0;O<C.length;O++)if(C[O]==y.pointerId)return!0;return!1}function Ne(y){let O=D[y.pointerId];O===void 0&&(O=new Xe,D[y.pointerId]=O),O.set(y.pageX,y.pageY)}function Me(y){const O=y.pointerId===C[0]?C[1]:C[0];return D[O]}i.domElement.addEventListener("contextmenu",de),i.domElement.addEventListener("pointerdown",xe),i.domElement.addEventListener("pointercancel",M),i.domElement.addEventListener("wheel",J,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Se,{passive:!0,capture:!0}),this.update()}}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var Ui=Math.PI,At=Ui*2,So=Ui/180,Vw=1440,Gw=398600.8,Tn=6378.135,Ri=60/Math.sqrt(Tn*Tn*Tn/Gw),Mc=Tn*Ri/60,Ww=1/Ri,Ir=.001082616,Xw=-253881e-11,jw=-165597e-11,Nr=Xw/Ir,Ko=2/3;function Yw(t,e){for(var n=[31,t%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,s=0;i>s+n[r-1]&&r<12;)s+=n[r-1],r+=1;var o=r,a=i-s,l=(e-i)*24,u=Math.floor(l);l=(l-u)*60;var f=Math.floor(l),d=(l-f)*60;return{mon:o,day:a,hr:u,minute:f,sec:d}}function Dm(t,e,n,i,r,s){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*t-Math.floor(7*(t+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+n+17210135e-1+((o/6e4+s/60+r)/60+i)/24}function uh(t,e,n,i,r,s,o){if(t instanceof Date){var a=t;return Dm(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}return Dm(t,e,n,i,r,s,o)}function Nv(t,e){var n=t.e3,i=t.ee2,r=t.peo,s=t.pgho,o=t.pho,a=t.pinco,l=t.plo,u=t.se2,f=t.se3,d=t.sgh2,h=t.sgh3,p=t.sgh4,_=t.sh2,x=t.sh3,m=t.si2,c=t.si3,v=t.sl2,g=t.sl3,E=t.sl4,P=t.t,w=t.xgh2,C=t.xgh3,D=t.xgh4,T=t.xh2,S=t.xh3,b=t.xi2,F=t.xi3,B=t.xl2,q=t.xl3,Z=t.xl4,k=t.zmol,ne=t.zmos,I=e.init,$=e.opsmode,Q=e.ep,ie=e.inclp,le=e.nodep,Be=e.argpp,Y=e.mp,X,te,oe,_e,Ce,we,je,L,Ye,Ae,Le,me,Oe,ve,xe,R,M,z,ee,J,K,Se=119459e-10,ae=.01675,fe=.00015835218,Ie=.0549;K=ne+Se*P,I==="y"&&(K=ne),J=K+2*ae*Math.sin(K),M=Math.sin(J),Ae=.5*M*M-.25,Le=-.5*M*Math.cos(J);var se=u*Ae+f*Le,de=m*Ae+c*Le,ze=v*Ae+g*Le+E*M,Te=d*Ae+h*Le+p*M,he=_*Ae+x*Le;K=k+fe*P,I==="y"&&(K=k),J=K+2*Ie*Math.sin(K),M=Math.sin(J),Ae=.5*M*M-.25,Le=-.5*M*Math.cos(J);var Ne=i*Ae+n*Le,Me=b*Ae+F*Le,We=B*Ae+q*Le+Z*M,y=w*Ae+C*Le+D*M,O=T*Ae+S*Le;return me=se+Ne,xe=de+Me,R=ze+We,Oe=Te+y,ve=he+O,I==="n"&&(me-=r,xe-=a,R-=l,Oe-=s,ve-=o,ie+=xe,Q+=me,_e=Math.sin(ie),oe=Math.cos(ie),ie>=.2?(ve/=_e,Oe-=oe*ve,Be+=Oe,le+=ve,Y+=R):(we=Math.sin(le),Ce=Math.cos(le),X=_e*we,te=_e*Ce,je=ve*Ce+xe*oe*we,L=-ve*we+xe*oe*Ce,X+=je,te+=L,le%=At,le<0&&$==="a"&&(le+=At),z=Y+Be+oe*le,Ye=R+Oe-xe*le*_e,z+=Ye,ee=le,le=Math.atan2(X,te),le<0&&$==="a"&&(le+=At),Math.abs(ee-le)>Ui&&(le<ee?le+=At:le-=At),Y+=R,Be=z-Y-oe*le)),{ep:Q,inclp:ie,nodep:le,argpp:Be,mp:Y}}function qw(t){var e=t.epoch,n=t.ep,i=t.argpp,r=t.tc,s=t.inclp,o=t.nodep,a=t.np,l,u,f,d,h,p,_,x,m,c,v,g,E,P,w,C,D,T,S,b,F,B,q,Z,k,ne,I,$,Q,ie,le,Be,Y,X,te,oe,_e,Ce,we,je,L,Ye,Ae,Le,me,Oe,ve,xe,R,M,z,ee,J,K,Se,ae,fe,Ie,se,de,ze,Te,he,Ne=.01675,Me=.0549,We=29864797e-13,y=47968065e-14,O=.39785416,H=.91744867,j=.1945905,re=-.98088458,Re=a,Ue=n,et=Math.sin(o),tt=Math.cos(o),Ve=Math.sin(i),nt=Math.cos(i),lt=Math.sin(s),ge=Math.cos(s),Qe=Ue*Ue,dt=1-Qe,Wt=Math.sqrt(dt),Je=0,ei=0,hi=0,ti=0,Oi=0,Ln=e+18261.5+r/1440,yn=(4.523602-.00092422029*Ln)%At,Ct=Math.sin(yn),dn=Math.cos(yn),A=.91375164-.03568096*dn,U=Math.sqrt(1-A*A),G=.089683511*Ct/U,W=Math.sqrt(1-G*G),N=5.8351514+.001944368*Ln,ce=.39785416*Ct/U,Ee=W*dn+.91744867*G*Ct;ce=Math.atan2(ce,Ee),ce+=N-yn;var be=Math.cos(ce),De=Math.sin(ce);b=j,F=re,Z=H,k=O,B=tt,q=et,v=We;for(var Ge=1/Re,He=0;He<2;)He+=1,l=b*B+F*Z*q,f=-F*B+b*Z*q,_=-b*q+F*Z*B,x=F*k,m=F*q+b*Z*B,c=b*k,u=ge*_+lt*x,d=ge*m+lt*c,h=-lt*_+ge*x,p=-lt*m+ge*c,g=l*nt+u*Ve,E=f*nt+d*Ve,P=-l*Ve+u*nt,w=-f*Ve+d*nt,C=h*Ve,D=p*Ve,T=h*nt,S=p*nt,ze=12*g*g-3*P*P,Te=24*g*E-6*P*w,he=12*E*E-3*w*w,ee=3*(l*l+u*u)+ze*Qe,J=6*(l*f+u*d)+Te*Qe,K=3*(f*f+d*d)+he*Qe,Se=-6*l*h+Qe*(-24*g*T-6*P*C),ae=-6*(l*p+f*h)+Qe*(-24*(E*T+g*S)+-6*(P*D+w*C)),fe=-6*f*p+Qe*(-24*E*S-6*w*D),Ie=6*u*h+Qe*(24*g*C-6*P*T),se=6*(d*h+u*p)+Qe*(24*(E*C+g*D)-6*(w*T+P*S)),de=6*d*p+Qe*(24*E*D-6*w*S),ee=ee+ee+dt*ze,J=J+J+dt*Te,K=K+K+dt*he,ve=v*Ge,Oe=-.5*ve/Wt,xe=ve*Wt,me=-15*Ue*xe,R=g*P+E*w,M=E*P+g*w,z=E*w-g*P,He===1&&(ne=me,I=Oe,$=ve,Q=xe,ie=R,le=M,Be=z,Y=ee,X=J,te=K,oe=Se,_e=ae,Ce=fe,we=Ie,je=se,L=de,Ye=ze,Ae=Te,Le=he,b=be,F=De,Z=A,k=U,B=W*tt+G*et,q=et*W-tt*G,v=y);var ke=(4.7199672+(.2299715*Ln-N))%At,it=(6.2565837+.017201977*Ln)%At,ht=2*ne*le,ut=2*ne*Be,Rt=2*I*_e,rt=2*I*(Ce-oe),Fe=-2*$*X,Pt=-2*$*(te-Y),st=-2*$*(-21-9*Qe)*Ne,zt=2*Q*Ae,ni=2*Q*(Le-Ye),Xt=-18*Q*Ne,pi=-2*I*je,mt=-2*I*(L-we),hn=2*me*M,gr=2*me*z,$t=2*Oe*ae,Js=2*Oe*(fe-Se),vu=-2*ve*J,la=-2*ve*(K-ee),Fv=-2*ve*(-21-9*Qe)*Me,Ov=2*xe*Te,zv=2*xe*(he-ze),kv=-18*xe*Me,Bv=-2*Oe*se,Hv=-2*Oe*(de-Ie);return{snodm:et,cnodm:tt,sinim:lt,cosim:ge,sinomm:Ve,cosomm:nt,day:Ln,e3:gr,ee2:hn,em:Ue,emsq:Qe,gam:N,peo:Je,pgho:ti,pho:Oi,pinco:ei,plo:hi,rtemsq:Wt,se2:ht,se3:ut,sgh2:zt,sgh3:ni,sgh4:Xt,sh2:pi,sh3:mt,si2:Rt,si3:rt,sl2:Fe,sl3:Pt,sl4:st,s1:me,s2:Oe,s3:ve,s4:xe,s5:R,s6:M,s7:z,ss1:ne,ss2:I,ss3:$,ss4:Q,ss5:ie,ss6:le,ss7:Be,sz1:Y,sz2:X,sz3:te,sz11:oe,sz12:_e,sz13:Ce,sz21:we,sz22:je,sz23:L,sz31:Ye,sz32:Ae,sz33:Le,xgh2:Ov,xgh3:zv,xgh4:kv,xh2:Bv,xh3:Hv,xi2:$t,xi3:Js,xl2:vu,xl3:la,xl4:Fv,nm:Re,z1:ee,z2:J,z3:K,z11:Se,z12:ae,z13:fe,z21:Ie,z22:se,z23:de,z31:ze,z32:Te,z33:he,zmol:ke,zmos:it}}function $w(t){var e=t.cosim,n=t.argpo,i=t.s1,r=t.s2,s=t.s3,o=t.s4,a=t.s5,l=t.sinim,u=t.ss1,f=t.ss2,d=t.ss3,h=t.ss4,p=t.ss5,_=t.sz1,x=t.sz3,m=t.sz11,c=t.sz13,v=t.sz21,g=t.sz23,E=t.sz31,P=t.sz33,w=t.t,C=t.tc,D=t.gsto,T=t.mo,S=t.mdot,b=t.no,F=t.nodeo,B=t.nodedot,q=t.xpidot,Z=t.z1,k=t.z3,ne=t.z11,I=t.z13,$=t.z21,Q=t.z23,ie=t.z31,le=t.z33,Be=t.ecco,Y=t.eccsq,X=t.emsq,te=t.em,oe=t.argpm,_e=t.inclm,Ce=t.mm,we=t.nm,je=t.nodem,L=t.irez,Ye=t.atime,Ae=t.d2201,Le=t.d2211,me=t.d3210,Oe=t.d3222,ve=t.d4410,xe=t.d4422,R=t.d5220,M=t.d5232,z=t.d5421,ee=t.d5433,J=t.dedt,K=t.didt,Se=t.dmdt,ae=t.dnodt,fe=t.domdt,Ie=t.del1,se=t.del2,de=t.del3,ze=t.xfact,Te=t.xlamo,he=t.xli,Ne=t.xni,Me,We,y,O,H,j,re,Re,Ue,et,tt,Ve,nt,lt,ge,Qe,dt,Wt,Je,ei,hi,ti,Oi,Ln,yn,Ct,dn,A,U,G,W,N,ce=17891679e-13,Ee=21460748e-13,be=22123015e-14,De=17891679e-13,Ge=73636953e-16,He=21765803e-16,ke=.0043752690880113,it=37393792e-14,ht=11428639e-14,ut=.00015835218,Rt=119459e-10;L=0,we<.0052359877&&we>.0034906585&&(L=1),we>=.00826&&we<=.00924&&te>=.5&&(L=2);var rt=u*Rt*p,Fe=f*Rt*(m+c),Pt=-Rt*d*(_+x-14-6*X),st=h*Rt*(E+P-6),zt=-Rt*f*(v+g);(_e<.052359877||_e>Ui-.052359877)&&(zt=0),l!==0&&(zt/=l);var ni=st-e*zt;J=rt+i*ut*a,K=Fe+r*ut*(ne+I),Se=Pt-ut*s*(Z+k-14-6*X);var Xt=o*ut*(ie+le-6),pi=-ut*r*($+Q);(_e<.052359877||_e>Ui-.052359877)&&(pi=0),fe=ni+Xt,ae=zt,l!==0&&(fe-=e/l*pi,ae+=pi/l);var mt=0,hn=(D+C*ke)%At;if(te+=J*w,_e+=K*w,oe+=fe*w,je+=ae*w,Ce+=Se*w,L!==0){if(G=Math.pow(we/Ri,Ko),L===2){W=e*e;var gr=te;te=Be;var $t=X;X=Y,N=te*X,lt=-.306-(te-.64)*.44,te<=.65?(ge=3.616-13.247*te+16.29*X,dt=-19.302+117.39*te-228.419*X+156.591*N,Wt=-18.9068+109.7927*te-214.6334*X+146.5816*N,Je=-41.122+242.694*te-471.094*X+313.953*N,ei=-146.407+841.88*te-1629.014*X+1083.435*N,hi=-532.114+3017.977*te-5740.032*X+3708.276*N):(ge=-72.099+331.819*te-508.738*X+266.724*N,dt=-346.844+1582.851*te-2415.925*X+1246.113*N,Wt=-342.585+1554.908*te-2366.899*X+1215.972*N,Je=-1052.797+4758.686*te-7193.992*X+3651.957*N,ei=-3581.69+16178.11*te-24462.77*X+12422.52*N,te>.715?hi=-5149.66+29936.92*te-54087.36*X+31324.56*N:hi=1464.74-4664.75*te+3763.64*X),te<.7?(Ln=-919.2277+4988.61*te-9064.77*X+5542.21*N,ti=-822.71072+4568.6173*te-8491.4146*X+5337.524*N,Oi=-853.666+4690.25*te-8624.77*X+5341.4*N):(Ln=-37995.78+161616.52*te-229838.2*X+109377.94*N,ti=-51752.104+218913.95*te-309468.16*X+146349.42*N,Oi=-40023.88+170470.89*te-242699.48*X+115605.82*N),yn=l*l,Me=.75*(1+2*e+W),We=1.5*yn,O=1.875*l*(1-2*e-3*W),H=-1.875*l*(1+2*e-3*W),re=35*yn*Me,Re=39.375*yn*yn,Ue=9.84375*l*(yn*(1-2*e-5*W)+.33333333*(-2+4*e+6*W)),et=l*(4.92187512*yn*(-2-4*e+10*W)+6.56250012*(1+2*e-3*W)),tt=29.53125*l*(2-8*e+W*(-12+8*e+10*W)),Ve=29.53125*l*(-2-8*e+W*(12+8*e-10*W)),A=we*we,U=G*G,dn=3*A*U,Ct=dn*De,Ae=Ct*Me*lt,Le=Ct*We*ge,dn*=G,Ct=dn*it,me=Ct*O*dt,Oe=Ct*H*Wt,dn*=G,Ct=2*dn*Ge,ve=Ct*re*Je,xe=Ct*Re*ei,dn*=G,Ct=dn*ht,R=Ct*Ue*hi,M=Ct*et*Oi,Ct=2*dn*He,z=Ct*tt*ti,ee=Ct*Ve*Ln,Te=(T+F+F-(hn+hn))%At,ze=S+Se+2*(B+ae-ke)-b,te=gr,X=$t}L===1&&(nt=1+X*(-2.5+.8125*X),dt=1+2*X,Qe=1+X*(-6+6.60937*X),Me=.75*(1+e)*(1+e),y=.9375*l*l*(1+3*e)-.75*(1+e),j=1+e,j*=1.875*j*j,Ie=3*we*we*G*G,se=2*Ie*Me*nt*ce,de=3*Ie*j*Qe*be*G,Ie=Ie*y*dt*Ee*G,Te=(T+F+n-hn)%At,ze=S+q+Se+fe+ae-(b+ke)),he=Te,Ne=b,Ye=0,we=b+mt}return{em:te,argpm:oe,inclm:_e,mm:Ce,nm:we,nodem:je,irez:L,atime:Ye,d2201:Ae,d2211:Le,d3210:me,d3222:Oe,d4410:ve,d4422:xe,d5220:R,d5232:M,d5421:z,d5433:ee,dedt:J,didt:K,dmdt:Se,dndt:mt,dnodt:ae,domdt:fe,del1:Ie,del2:se,del3:de,xfact:ze,xlamo:Te,xli:he,xni:Ne}}function Im(t){var e=(t-2451545)/36525,n=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return n=n*So/240%At,n<0&&(n+=At),n}function Kw(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?Im(uh.apply(void 0,arguments)):Im.apply(void 0,arguments)}function Zw(t){var e=t.ecco,n=t.epoch,i=t.inclo,r=t.opsmode,s=t.no,o=e*e,a=1-o,l=Math.sqrt(a),u=Math.cos(i),f=u*u,d=Math.pow(Ri/s,Ko),h=.75*Ir*(3*f-1)/(l*a),p=h/(d*d),_=d*(1-p*p-p*(1/3+134*p*p/81));p=h/(_*_),s/=1+p;var x=Math.pow(Ri/s,Ko),m=Math.sin(i),c=x*a,v=1-5*f,g=-v-f-f,E=1/x,P=c*c,w=x*(1-e),C="n",D;if(r==="a"){var T=n-7305,S=Math.floor(T+1e-8),b=T-S,F=.017202791694070362,B=1.7321343856509375,q=5075514194322695e-30,Z=F+At;D=(B+F*S+Z*b+T*T*q)%At,D<0&&(D+=At)}else D=Kw(n+24332815e-1);return{no:s,method:C,ainv:E,ao:x,con41:g,con42:v,cosio:u,cosio2:f,eccsq:o,omeosq:a,posq:P,rp:w,rteosq:l,sinio:m,gsto:D}}function Qw(t){var e=t.irez,n=t.d2201,i=t.d2211,r=t.d3210,s=t.d3222,o=t.d4410,a=t.d4422,l=t.d5220,u=t.d5232,f=t.d5421,d=t.d5433,h=t.dedt,p=t.del1,_=t.del2,x=t.del3,m=t.didt,c=t.dmdt,v=t.dnodt,g=t.domdt,E=t.argpo,P=t.argpdot,w=t.t,C=t.tc,D=t.gsto,T=t.xfact,S=t.xlamo,b=t.no,F=t.atime,B=t.em,q=t.argpm,Z=t.inclm,k=t.xli,ne=t.mm,I=t.xni,$=t.nodem,Q=t.nm,ie=.13130908,le=2.8843198,Be=.37448087,Y=5.7686396,X=.95240898,te=1.8014998,oe=1.050833,_e=4.4108898,Ce=.0043752690880113,we=720,je=-720,L=259200,Ye,Ae,Le,me,Oe,ve,xe,R,M=0,z=0,ee=(D+C*Ce)%At;if(B+=h*w,Z+=m*w,q+=g*w,$+=v*w,ne+=c*w,e!==0){(F===0||w*F<=0||Math.abs(w)<Math.abs(F))&&(F=0,I=b,k=S),w>0?Ye=we:Ye=je;for(var J=381;J===381;)e!==2?(xe=p*Math.sin(k-ie)+_*Math.sin(2*(k-le))+x*Math.sin(3*(k-Be)),Oe=I+T,ve=p*Math.cos(k-ie)+2*_*Math.cos(2*(k-le))+3*x*Math.cos(3*(k-Be)),ve*=Oe):(R=E+P*F,Le=R+R,Ae=k+k,xe=n*Math.sin(Le+k-Y)+i*Math.sin(k-Y)+r*Math.sin(R+k-X)+s*Math.sin(-R+k-X)+o*Math.sin(Le+Ae-te)+a*Math.sin(Ae-te)+l*Math.sin(R+k-oe)+u*Math.sin(-R+k-oe)+f*Math.sin(R+Ae-_e)+d*Math.sin(-R+Ae-_e),Oe=I+T,ve=n*Math.cos(Le+k-Y)+i*Math.cos(k-Y)+r*Math.cos(R+k-X)+s*Math.cos(-R+k-X)+l*Math.cos(R+k-oe)+u*Math.cos(-R+k-oe)+2*(o*Math.cos(Le+Ae-te)+a*Math.cos(Ae-te)+f*Math.cos(R+Ae-_e)+d*Math.cos(-R+Ae-_e)),ve*=Oe),Math.abs(w-F)>=we?J=381:(z=w-F,J=0),J===381&&(k+=Oe*Ye+xe*L,I+=xe*Ye+ve*L,F+=Ye);Q=I+xe*z+ve*z*z*.5,me=k+Oe*z+xe*z*z*.5,e!==1?(ne=me-2*$+2*ee,M=Q-b):(ne=me-$-q+ee,M=Q-b),Q=b+M}return{atime:F,em:B,argpm:q,inclm:Z,xli:k,mm:ne,xni:I,nodem:$,dndt:M,nm:Q}}function Uv(t,e){var n,i,r,s,o,a,l,u,f,d,h,p,_,x,m,c,v,g,E,P,w,C,D,T,S,b,F,B=15e-13;t.t=e,t.error=0;var q=t.mo+t.mdot*t.t,Z=t.argpo+t.argpdot*t.t,k=t.nodeo+t.nodedot*t.t;f=Z,w=q;var ne=t.t*t.t;if(D=k+t.nodecf*ne,v=1-t.cc1*t.t,g=t.bstar*t.cc4*t.t,E=t.t2cof*ne,t.isimp!==1){l=t.omgcof*t.t;var I=1+t.eta*Math.cos(q);a=t.xmcof*(I*I*I-t.delmo),c=l+a,w=q+c,f=Z-c,p=ne*t.t,_=p*t.t,v=v-t.d2*ne-t.d3*p-t.d4*_,g+=t.bstar*t.cc5*(Math.sin(w)-t.sinmao),E=E+t.t3cof*p+_*(t.t4cof+t.t*t.t5cof)}C=t.no;var $=t.ecco;if(P=t.inclo,t.method==="d"){x=t.t;var Q={irez:t.irez,d2201:t.d2201,d2211:t.d2211,d3210:t.d3210,d3222:t.d3222,d4410:t.d4410,d4422:t.d4422,d5220:t.d5220,d5232:t.d5232,d5421:t.d5421,d5433:t.d5433,dedt:t.dedt,del1:t.del1,del2:t.del2,del3:t.del3,didt:t.didt,dmdt:t.dmdt,dnodt:t.dnodt,domdt:t.domdt,argpo:t.argpo,argpdot:t.argpdot,t:t.t,tc:x,gsto:t.gsto,xfact:t.xfact,xlamo:t.xlamo,no:t.no,atime:t.atime,em:$,argpm:f,inclm:P,xli:t.xli,mm:w,xni:t.xni,nodem:D,nm:C},ie=Qw(Q);$=ie.em,f=ie.argpm,P=ie.inclm,w=ie.mm,D=ie.nodem,C=ie.nm}if(C<=0)return t.error=2,[!1,!1];var le=Math.pow(Ri/C,Ko)*v*v;if(C=Ri/Math.pow(le,1.5),$-=g,$>=1||$<-.001)return t.error=1,[!1,!1];$<1e-6&&($=1e-6),w+=t.no*E,S=w+f+D,D%=At,f%=At,S%=At,w=(S-f-D)%At;var Be=Math.sin(P),Y=Math.cos(P),X=$;if(T=P,d=f,F=D,b=w,s=Be,r=Y,t.method==="d"){var te={inclo:t.inclo,init:"n",ep:X,inclp:T,nodep:F,argpp:d,mp:b,opsmode:t.operationmode},oe=Nv(t,te);if(X=oe.ep,F=oe.nodep,d=oe.argpp,b=oe.mp,T=oe.inclp,T<0&&(T=-T,F+=Ui,d-=Ui),X<0||X>1)return t.error=3,[!1,!1]}t.method==="d"&&(s=Math.sin(T),r=Math.cos(T),t.aycof=-.5*Nr*s,Math.abs(r+1)>15e-13?t.xlcof=-.25*Nr*s*(3+5*r)/(1+r):t.xlcof=-.25*Nr*s*(3+5*r)/B);var _e=X*Math.cos(d);c=1/(le*(1-X*X));var Ce=X*Math.sin(d)+c*t.aycof,we=b+d+F+c*t.xlcof*_e,je=(we-F)%At;u=je,m=9999.9;for(var L=1;Math.abs(m)>=1e-12&&L<=10;)i=Math.sin(u),n=Math.cos(u),m=1-n*_e-i*Ce,m=(je-Ce*n+_e*i-u)/m,Math.abs(m)>=.95&&(m>0?m=.95:m=-.95),u+=m,L+=1;var Ye=_e*n+Ce*i,Ae=_e*i-Ce*n,Le=_e*_e+Ce*Ce,me=le*(1-Le);if(me<0)return t.error=4,[!1,!1];var Oe=le*(1-Ye),ve=Math.sqrt(le)*Ae/Oe,xe=Math.sqrt(me)/Oe,R=Math.sqrt(1-Le);c=Ae/(1+R);var M=le/Oe*(i-Ce-_e*c),z=le/Oe*(n-_e+Ce*c);h=Math.atan2(M,z);var ee=(z+z)*M,J=1-2*M*M;c=1/me;var K=.5*Ir*c,Se=K*c;t.method==="d"&&(o=r*r,t.con41=3*o-1,t.x1mth2=1-o,t.x7thm1=7*o-1);var ae=Oe*(1-1.5*Se*R*t.con41)+.5*K*t.x1mth2*J;if(ae<1)return t.error=6,{position:!1,velocity:!1};h-=.25*Se*t.x7thm1*ee;var fe=F+1.5*Se*r*ee,Ie=T+1.5*Se*r*s*J,se=ve-C*K*t.x1mth2*ee/Ri,de=xe+C*K*(t.x1mth2*J+1.5*t.con41)/Ri,ze=Math.sin(h),Te=Math.cos(h),he=Math.sin(fe),Ne=Math.cos(fe),Me=Math.sin(Ie),We=Math.cos(Ie),y=-he*We,O=Ne*We,H=y*ze+Ne*Te,j=O*ze+he*Te,re=Me*ze,Re=y*Te-Ne*ze,Ue=O*Te-he*ze,et=Me*Te,tt={x:ae*H*Tn,y:ae*j*Tn,z:ae*re*Tn},Ve={x:(se*H+de*Re)*Mc,y:(se*j+de*Ue)*Mc,z:(se*re+de*et)*Mc};return{position:tt,velocity:Ve}}function Jw(t,e){var n=e.opsmode,i=e.epoch,r=e.xbstar,s=e.xecco,o=e.xargpo,a=e.xinclo,l=e.xmo,u=e.xno,f=e.xnodeo,d,h,p,_,x,m,c,v,g,E,P,w,C,D,T,S,b,F,B,q,Z,k,ne,I,$,Q,ie,le,Be,Y,X,te,oe,_e,Ce,we,je,L,Ye,Ae,Le,me,Oe,ve,xe,R,M,z,ee,J,K,Se,ae,fe,Ie,se,de=15e-13;t.isimp=0,t.method="n",t.aycof=0,t.con41=0,t.cc1=0,t.cc4=0,t.cc5=0,t.d2=0,t.d3=0,t.d4=0,t.delmo=0,t.eta=0,t.argpdot=0,t.omgcof=0,t.sinmao=0,t.t=0,t.t2cof=0,t.t3cof=0,t.t4cof=0,t.t5cof=0,t.x1mth2=0,t.x7thm1=0,t.mdot=0,t.nodedot=0,t.xlcof=0,t.xmcof=0,t.nodecf=0,t.irez=0,t.d2201=0,t.d2211=0,t.d3210=0,t.d3222=0,t.d4410=0,t.d4422=0,t.d5220=0,t.d5232=0,t.d5421=0,t.d5433=0,t.dedt=0,t.del1=0,t.del2=0,t.del3=0,t.didt=0,t.dmdt=0,t.dnodt=0,t.domdt=0,t.e3=0,t.ee2=0,t.peo=0,t.pgho=0,t.pho=0,t.pinco=0,t.plo=0,t.se2=0,t.se3=0,t.sgh2=0,t.sgh3=0,t.sgh4=0,t.sh2=0,t.sh3=0,t.si2=0,t.si3=0,t.sl2=0,t.sl3=0,t.sl4=0,t.gsto=0,t.xfact=0,t.xgh2=0,t.xgh3=0,t.xgh4=0,t.xh2=0,t.xh3=0,t.xi2=0,t.xi3=0,t.xl2=0,t.xl3=0,t.xl4=0,t.xlamo=0,t.zmol=0,t.zmos=0,t.atime=0,t.xli=0,t.xni=0,t.bstar=r,t.ecco=s,t.argpo=o,t.inclo=a,t.mo=l,t.no=u,t.nodeo=f,t.operationmode=n;var ze=78/Tn+1,Te=42/Tn,he=Te*Te*Te*Te;t.init="y",t.t=0;var Ne={ecco:t.ecco,epoch:i,inclo:t.inclo,no:t.no,method:t.method,opsmode:t.operationmode},Me=Zw(Ne),We=Me.ao,y=Me.con42,O=Me.cosio,H=Me.cosio2,j=Me.eccsq,re=Me.omeosq,Re=Me.posq,Ue=Me.rp,et=Me.rteosq,tt=Me.sinio;if(t.no=Me.no,t.con41=Me.con41,t.gsto=Me.gsto,t.a=Math.pow(t.no*Ww,-2/3),t.alta=t.a*(1+t.ecco)-1,t.altp=t.a*(1-t.ecco)-1,t.error=0,re>=0||t.no>=0){if(t.isimp=0,Ue<220/Tn+1&&(t.isimp=1),ie=ze,Z=he,F=(Ue-1)*Tn,F<156){ie=F-78,F<98&&(ie=20);var Ve=(120-ie)/Tn;Z=Ve*Ve*Ve*Ve,ie=ie/Tn+1}B=1/Re,R=1/(We-ie),t.eta=We*t.ecco*R,w=t.eta*t.eta,P=t.ecco*t.eta,q=Math.abs(1-w),m=Z*Math.pow(R,4),c=m/Math.pow(q,3.5),_=c*t.no*(We*(1+1.5*w+P*(4+w))+.375*Ir*R/q*t.con41*(8+3*w*(8+w))),t.cc1=t.bstar*_,x=0,t.ecco>1e-4&&(x=-2*m*R*Nr*t.no*tt/t.ecco),t.x1mth2=1-H,t.cc4=2*t.no*c*We*re*(t.eta*(2+.5*w)+t.ecco*(.5+2*w)-Ir*R/(We*q)*(-3*t.con41*(1-2*P+w*(1.5-.5*P))+.75*t.x1mth2*(2*w-P*(1+w))*Math.cos(2*t.argpo))),t.cc5=2*c*We*re*(1+2.75*(w+P)+P*w),v=H*H,Oe=1.5*Ir*B*t.no,ve=.5*Oe*Ir*B,xe=-.46875*jw*B*B*t.no,t.mdot=t.no+.5*Oe*et*t.con41+.0625*ve*et*(13-78*H+137*v),t.argpdot=-.5*Oe*y+.0625*ve*(7-114*H+395*v)+xe*(3-36*H+49*v),z=-Oe*O,t.nodedot=z+(.5*ve*(4-19*H)+2*xe*(3-7*H))*O,M=t.argpdot+t.nodedot,t.omgcof=t.bstar*x*Math.cos(t.argpo),t.xmcof=0,t.ecco>1e-4&&(t.xmcof=-Ko*m*t.bstar/P),t.nodecf=3.5*re*z*t.cc1,t.t2cof=1.5*t.cc1,Math.abs(O+1)>15e-13?t.xlcof=-.25*Nr*tt*(3+5*O)/(1+O):t.xlcof=-.25*Nr*tt*(3+5*O)/de,t.aycof=-.5*Nr*tt;var nt=1+t.eta*Math.cos(t.mo);if(t.delmo=nt*nt*nt,t.sinmao=Math.sin(t.mo),t.x7thm1=7*H-1,2*Ui/t.no>=225){t.method="d",t.isimp=1,Le=0,T=t.inclo;var lt={epoch:i,ep:t.ecco,argpp:t.argpo,tc:Le,inclp:t.inclo,nodep:t.nodeo,np:t.no,e3:t.e3,ee2:t.ee2,peo:t.peo,pgho:t.pgho,pho:t.pho,pinco:t.pinco,plo:t.plo,se2:t.se2,se3:t.se3,sgh2:t.sgh2,sgh3:t.sgh3,sgh4:t.sgh4,sh2:t.sh2,sh3:t.sh3,si2:t.si2,si3:t.si3,sl2:t.sl2,sl3:t.sl3,sl4:t.sl4,xgh2:t.xgh2,xgh3:t.xgh3,xgh4:t.xgh4,xh2:t.xh2,xh3:t.xh3,xi2:t.xi2,xi3:t.xi3,xl2:t.xl2,xl3:t.xl3,xl4:t.xl4,zmol:t.zmol,zmos:t.zmos},ge=qw(lt);t.e3=ge.e3,t.ee2=ge.ee2,t.peo=ge.peo,t.pgho=ge.pgho,t.pho=ge.pho,t.pinco=ge.pinco,t.plo=ge.plo,t.se2=ge.se2,t.se3=ge.se3,t.sgh2=ge.sgh2,t.sgh3=ge.sgh3,t.sgh4=ge.sgh4,t.sh2=ge.sh2,t.sh3=ge.sh3,t.si2=ge.si2,t.si3=ge.si3,t.sl2=ge.sl2,t.sl3=ge.sl3,t.sl4=ge.sl4,h=ge.sinim,d=ge.cosim,g=ge.em,E=ge.emsq,k=ge.s1,ne=ge.s2,I=ge.s3,$=ge.s4,Q=ge.s5,le=ge.ss1,Be=ge.ss2,Y=ge.ss3,X=ge.ss4,te=ge.ss5,oe=ge.sz1,_e=ge.sz3,Ce=ge.sz11,we=ge.sz13,je=ge.sz21,L=ge.sz23,Ye=ge.sz31,Ae=ge.sz33,t.xgh2=ge.xgh2,t.xgh3=ge.xgh3,t.xgh4=ge.xgh4,t.xh2=ge.xh2,t.xh3=ge.xh3,t.xi2=ge.xi2,t.xi3=ge.xi3,t.xl2=ge.xl2,t.xl3=ge.xl3,t.xl4=ge.xl4,t.zmol=ge.zmol,t.zmos=ge.zmos,b=ge.nm,ee=ge.z1,J=ge.z3,K=ge.z11,Se=ge.z13,ae=ge.z21,fe=ge.z23,Ie=ge.z31,se=ge.z33;var Qe={inclo:T,init:t.init,ep:t.ecco,inclp:t.inclo,nodep:t.nodeo,argpp:t.argpo,mp:t.mo,opsmode:t.operationmode},dt=Nv(t,Qe);t.ecco=dt.ep,t.inclo=dt.inclp,t.nodeo=dt.nodep,t.argpo=dt.argpp,t.mo=dt.mp,C=0,D=0,S=0;var Wt={cosim:d,emsq:E,argpo:t.argpo,s1:k,s2:ne,s3:I,s4:$,s5:Q,sinim:h,ss1:le,ss2:Be,ss3:Y,ss4:X,ss5:te,sz1:oe,sz3:_e,sz11:Ce,sz13:we,sz21:je,sz23:L,sz31:Ye,sz33:Ae,t:t.t,tc:Le,gsto:t.gsto,mo:t.mo,mdot:t.mdot,no:t.no,nodeo:t.nodeo,nodedot:t.nodedot,xpidot:M,z1:ee,z3:J,z11:K,z13:Se,z21:ae,z23:fe,z31:Ie,z33:se,ecco:t.ecco,eccsq:j,em:g,argpm:C,inclm:T,mm:S,nm:b,nodem:D,irez:t.irez,atime:t.atime,d2201:t.d2201,d2211:t.d2211,d3210:t.d3210,d3222:t.d3222,d4410:t.d4410,d4422:t.d4422,d5220:t.d5220,d5232:t.d5232,d5421:t.d5421,d5433:t.d5433,dedt:t.dedt,didt:t.didt,dmdt:t.dmdt,dnodt:t.dnodt,domdt:t.domdt,del1:t.del1,del2:t.del2,del3:t.del3,xfact:t.xfact,xlamo:t.xlamo,xli:t.xli,xni:t.xni},Je=$w(Wt);t.irez=Je.irez,t.atime=Je.atime,t.d2201=Je.d2201,t.d2211=Je.d2211,t.d3210=Je.d3210,t.d3222=Je.d3222,t.d4410=Je.d4410,t.d4422=Je.d4422,t.d5220=Je.d5220,t.d5232=Je.d5232,t.d5421=Je.d5421,t.d5433=Je.d5433,t.dedt=Je.dedt,t.didt=Je.didt,t.dmdt=Je.dmdt,t.dnodt=Je.dnodt,t.domdt=Je.domdt,t.del1=Je.del1,t.del2=Je.del2,t.del3=Je.del3,t.xfact=Je.xfact,t.xlamo=Je.xlamo,t.xli=Je.xli,t.xni=Je.xni}t.isimp!==1&&(p=t.cc1*t.cc1,t.d2=4*We*R*p,me=t.d2*R*t.cc1/3,t.d3=(17*We+ie)*me,t.d4=.5*me*We*R*(221*We+31*ie)*t.cc1,t.t3cof=t.d2+2*p,t.t4cof=.25*(3*t.d3+t.cc1*(12*t.d2+10*p)),t.t5cof=.2*(3*t.d4+12*t.cc1*t.d3+6*t.d2*t.d2+15*p*(2*t.d2+p)))}Uv(t,0),t.init="n"}function e2(t,e){var n="i",i=1440/(2*Ui),r=0,s={};s.error=0,s.satnum=t.substring(2,7),s.epochyr=parseInt(t.substring(18,20),10),s.epochdays=parseFloat(t.substring(20,32)),s.ndot=parseFloat(t.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(t.substring(44,50),10),"E").concat(t.substring(50,52))),s.bstar=parseFloat("".concat(t.substring(53,54),".").concat(parseInt(t.substring(54,59),10),"E").concat(t.substring(59,61))),s.inclo=parseFloat(e.substring(8,16)),s.nodeo=parseFloat(e.substring(17,25)),s.ecco=parseFloat(".".concat(e.substring(26,33))),s.argpo=parseFloat(e.substring(34,42)),s.mo=parseFloat(e.substring(43,51)),s.no=parseFloat(e.substring(52,63)),s.no/=i,s.inclo*=So,s.nodeo*=So,s.argpo*=So,s.mo*=So,s.epochyr<57?r=s.epochyr+2e3:r=s.epochyr+1900;var o=Yw(r,s.epochdays),a=o.mon,l=o.day,u=o.hr,f=o.minute,d=o.sec;return s.jdsatepoch=uh(r,a,l,u,f,d),Jw(s,{opsmode:n,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function t2(t){return n2(t)||i2(t)||r2(t)||s2()}function n2(t){if(Array.isArray(t))return td(t)}function i2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function r2(t,e){if(t){if(typeof t=="string")return td(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return td(t,e)}}function td(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function s2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nm(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e[0],r=Array.prototype.slice.call(e,1),s=uh.apply(void 0,t2(r)),o=(s-i.jdsatepoch)*Vw;return Uv(i,o)}class o2{constructor(e,n){Tt(this,"container");Tt(this,"canvas");Tt(this,"renderer");Tt(this,"scene");Tt(this,"camera");Tt(this,"controls");Tt(this,"earthMesh");Tt(this,"pointsMesh");Tt(this,"pointsGeometry");Tt(this,"pointsMaterial");Tt(this,"selectedMarker");Tt(this,"trajectoryPast");Tt(this,"trajectoryFuture");Tt(this,"footprintRing");Tt(this,"satRecords",[]);Tt(this,"positions",[]);Tt(this,"simTime",Date.now());Tt(this,"selectedNorad",null);Tt(this,"visibleGroups",new Set);Tt(this,"frameTimes",[]);Tt(this,"animFrameId",null);this.container=e,this.canvas=n,this.renderer=new Pw({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=ev,this.renderer.toneMappingExposure=1.2,this.scene=new bw,this.scene.background=new ot(132631),this.camera=new Un(45,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(0,0,15),this.controls=new Hw(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.rotateSpeed=.6,this.controls.zoomSpeed=1.2,this.controls.minDistance=7,this.controls.maxDistance=40,this.controls.enablePan=!1;const i=new zw(16777215,.3);this.scene.add(i);const r=new wm(16777215,1.5);r.position.set(10,5,8),this.scene.add(r);const s=new wm(4491519,.3);s.position.set(-10,-5,-8),this.scene.add(s);const o=new Kl(6.371,64,64),l=new Uw().load("/earth-blue-marble.jpg"),u=new Lw({map:l,roughness:.85,metalness:.05});this.earthMesh=new Kn(o,u),this.scene.add(this.earthMesh);const f=new Kl(6.55,64,64),d=new di({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.55 - dot(vNormal, vec3(0, 0, 1.0)), 2.5);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 0.15) * intensity;
        }
      `,blending:vf,side:ln,transparent:!0,depthWrite:!1});this.scene.add(new Kn(f,d));const h=new Ht,p=new Float32Array(2e3*3);for(let g=0;g<2e3;g++){const E=80+Math.random()*120,P=Math.random()*Math.PI*2,w=Math.acos(2*Math.random()-1);p[g*3]=E*Math.sin(w)*Math.cos(P),p[g*3+1]=E*Math.sin(w)*Math.sin(P),p[g*3+2]=E*Math.cos(w)}h.setAttribute("position",new on(p,3));const _=new Dv({color:16777215,size:.3,sizeAttenuation:!0});this.scene.add(new ym(h,_)),this.pointsGeometry=new Ht,this.pointsMaterial=new di({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 pos1;
        attribute vec3 pos2;
        attribute vec3 velocity;
        attribute float visible;
        uniform float uTime;

        void main() {
          if (visible < 0.5) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }
          vec3 p0 = pos1;
          vec3 p1 = pos2;
          vec3 m0 = velocity;
          float t = uTime;
          float t2 = t * t;
          float t3 = t2 * t;
          vec3 pos = (2.0 * t3 - 3.0 * t2 + 1.0) * p0 + (t3 - 2.0 * t2 + t) * m0 + (-2.0 * t3 + 3.0 * t2) * p1 + (t3 - t2) * m0;
          
          // Scale down from km to engine units (1 unit = 1000km)
          vec4 mvPosition = modelViewMatrix * vec4(pos / 1000.0, 1.0);
          gl_PointSize = 3.0;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0 - d * 2.0);
        }
      `,transparent:!0,depthTest:!0}),this.pointsMesh=new ym(this.pointsGeometry,this.pointsMaterial),this.scene.add(this.pointsMesh);const x=new Ht,m=[];for(let g=0;g<=32;g++){const E=g/32*Math.PI*2;m.push(Math.cos(E)*.2,Math.sin(E)*.2,0)}x.setAttribute("position",new Cn(m,3)),this.selectedMarker=new _m(x,new yo({color:16776960})),this.selectedMarker.visible=!1,this.scene.add(this.selectedMarker),this.trajectoryPast=new Qf(new Ht,new yo({color:16729156})),this.trajectoryFuture=new Qf(new Ht,new yo({color:4474111})),this.scene.add(this.trajectoryPast),this.scene.add(this.trajectoryFuture);const c=new Ht,v=[];for(let g=0;g<=64;g++){const E=g/64*Math.PI*2;v.push(Math.cos(E)*.5,Math.sin(E)*.5,0)}c.setAttribute("position",new Cn(v,3)),this.footprintRing=new _m(c,new yo({color:65535})),this.footprintRing.visible=!1,this.scene.add(this.footprintRing),this.animate=this.animate.bind(this),this.animFrameId=requestAnimationFrame(this.animate)}setSatellites(e){this.satRecords=e}updatePositions(e,n,i){this.positions=e,this.selectedNorad=n,this.visibleGroups=i;const r=e.length,s=new Float32Array(r*3),o=new Float32Array(r*3),a=new Float32Array(r*3),l=new Float32Array(r);for(let u=0;u<r;u++){const f=e[u],d=this.satRecords[u],h=d&&i.has(d.group)&&f&&f.pos1&&f.pos2;l[u]=h?1:0,f&&f.pos1&&f.pos2&&(s[u*3]=f.pos1[0],s[u*3+1]=f.pos1[1],s[u*3+2]=f.pos1[2],o[u*3]=f.pos2[0],o[u*3+1]=f.pos2[1],o[u*3+2]=f.pos2[2],f.velocity&&(a[u*3]=f.velocity[0],a[u*3+1]=f.velocity[1],a[u*3+2]=f.velocity[2]))}this.pointsGeometry.setAttribute("pos1",new on(s,3)),this.pointsGeometry.setAttribute("pos2",new on(o,3)),this.pointsGeometry.setAttribute("velocity",new on(a,3)),this.pointsGeometry.setAttribute("visible",new on(l,1)),this.pointsGeometry.attributes.pos1.needsUpdate=!0,this.updateTrajectory()}setSimTime(e){this.simTime=e,this.pointsMaterial.uniforms.uTime.value=e%1e3/1e3}resize(e,n){this.camera.aspect=e/n,e>768?this.camera.setViewOffset(e,n,340/2,0,e-340,n):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}pick(e,n){const i=this.canvas.getBoundingClientRect(),r=(e-i.left)/i.width*2-1,s=-((n-i.top)/i.height)*2+1,o=new kw;o.params.Points.threshold=.2,o.setFromCamera(new Xe(r,s),this.camera);const a=o.intersectObject(this.pointsMesh);for(const l of a){const u=l.index;if(u!==void 0&&this.satRecords[u]){const f=this.satRecords[u];if(!this.visibleGroups.has(f.group))continue;const d=l.point,h=this.camera.position,p=d.clone().sub(h).normalize(),_=h.distanceTo(d);if(!this.checkEarthOcclusion(h,p,_))return f.norad}}return null}checkEarthOcclusion(e,n,i){const s=e.clone(),o=s.dot(n),a=s.dot(s)-6.371*6.371,l=o*o-a;if(l<0)return!1;const u=-o-Math.sqrt(l);return u>0&&u<i}updateTrajectory(){if(!this.selectedNorad){this.selectedMarker.visible=!1,this.trajectoryPast.visible=!1,this.trajectoryFuture.visible=!1,this.footprintRing.visible=!1;return}const e=this.satRecords.findIndex(l=>l.norad===this.selectedNorad);if(e===-1||!this.positions[e]||!this.positions[e].pos1)return;const n=new V().fromArray(this.positions[e].pos1).divideScalar(1e3);this.selectedMarker.position.copy(n),this.selectedMarker.quaternion.copy(this.camera.quaternion),this.selectedMarker.visible=!0;const i=this.satRecords[e],r=e2(i.tle1,i.tle2),s=[],o=[],a=90*60*1e3/4;for(let l=-20;l<=0;l++){const u=new Date(this.simTime+l/20*a),f=Nm(r,u);f.position&&typeof f.position!="boolean"&&s.push(new V(f.position.x,f.position.y,f.position.z).divideScalar(1e3))}for(let l=0;l<=20;l++){const u=new Date(this.simTime+l/20*a),f=Nm(r,u);f.position&&typeof f.position!="boolean"&&o.push(new V(f.position.x,f.position.y,f.position.z).divideScalar(1e3))}this.trajectoryPast.geometry.dispose(),this.trajectoryPast.geometry=new Ht().setFromPoints(s),this.trajectoryPast.visible=!0,this.trajectoryFuture.geometry.dispose(),this.trajectoryFuture.geometry=new Ht().setFromPoints(o),this.trajectoryFuture.visible=!0}animate(e){this.animFrameId=requestAnimationFrame(this.animate),this.controls.update(),this.frameTimes.length>0&&(e-this.frameTimes[this.frameTimes.length-1]>40?this.renderer.setPixelRatio(1):this.frameTimes.filter((r,s)=>s>0&&r-this.frameTimes[s-1]>30).length===0&&this.frameTimes.length>5&&this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))),this.frameTimes.push(e),this.frameTimes.length>10&&this.frameTimes.shift(),this.renderer.render(this.scene,this.camera)}dispose(){this.animFrameId&&cancelAnimationFrame(this.animFrameId),this.controls.dispose(),this.renderer.dispose()}}const a2=({satellites:t,onSelectNorad:e,onEnsureGroupVisible:n})=>{const[i,r]=qe.useState(""),[s,o]=qe.useState(!1),a=qe.useRef(null),l=i.trim()?t.filter(d=>d.name.toLowerCase().includes(i.toLowerCase())||d.norad.toString().startsWith(i.trim())).slice(0,8):[];qe.useEffect(()=>{const d=h=>{a.current&&!a.current.contains(h.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]);const u=d=>{n(d.group),e(d.norad),r(""),o(!1)},f=d=>{d.key==="Enter"&&l.length>0?u(l[0]):d.key==="Escape"&&(r(""),o(!1))};return pe.jsxs("div",{ref:a,className:"relative w-full",children:[pe.jsx("input",{type:"text",value:i,onChange:d=>{r(d.target.value),o(!0)},onKeyDown:f,placeholder:"Search satellite name or NORAD ID...",className:"w-full bg-slate-900/80 border border-slate-700/60 text-white placeholder-slate-400 px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition"}),s&&l.length>0&&pe.jsx("div",{className:"absolute top-full left-0 right-0 mt-1 bg-slate-900/95 border border-slate-700 rounded-lg max-h-60 overflow-y-auto z-50 shadow-xl backdrop-blur-md",children:l.map(d=>pe.jsxs("button",{onClick:()=>u(d),className:"w-full text-left px-3 py-2 hover:bg-slate-800 flex justify-between items-center text-sm border-b border-slate-800/40 last:border-0",children:[pe.jsx("span",{className:"text-slate-200 font-medium truncate mr-2",children:d.name}),pe.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:["#",d.norad]})]},d.norad))})]})},l2=({visibleGroups:t,onToggleGroup:e,source:n})=>{const i={SNAPSHOT:"bg-amber-500/20 text-amber-300 border-amber-500/40",CACHED:"bg-blue-500/20 text-blue-300 border-blue-500/40",LIVE:"bg-emerald-500/20 text-emerald-300 border-emerald-500/40"};return pe.jsxs("div",{className:"bg-slate-900/60 backdrop-blur-md border border-slate-800 p-4 rounded-xl space-y-3",children:[pe.jsxs("div",{className:"flex items-center justify-between",children:[pe.jsx("h3",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400",children:"Layers"}),pe.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded border ${i[n]}`,children:n})]}),pe.jsx("div",{className:"space-y-2",children:q0.map(r=>{const s=t.has(r.id);return pe.jsxs("label",{className:`flex items-center space-x-3 cursor-pointer text-sm transition ${s?"text-slate-200":"text-slate-500"}`,children:[pe.jsx("input",{type:"checkbox",checked:s,onChange:()=>e(r.id),className:"rounded border-slate-700 bg-slate-800 text-cyan-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"}),pe.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:r.color}}),pe.jsx("span",{className:"flex-1 select-none",children:r.label})]},r.id)})})]})},u2=({satellite:t,medianEpoch:e,onClearSelection:n})=>{if(!t)return null;const i=e?Math.max(0,Math.round((Date.now()-t.epoch.getTime())/(1e3*60))):null;return pe.jsxs("div",{className:"bg-slate-900/60 backdrop-blur-md border border-slate-800 p-4 rounded-xl space-y-3 relative",children:[pe.jsx("button",{onClick:n,className:"absolute top-3 right-3 text-slate-400 hover:text-white text-sm p-1",title:"Clear Selection",children:"✕"}),pe.jsxs("div",{children:[pe.jsx("span",{className:"text-xs text-cyan-400 font-mono uppercase tracking-wider",children:t.group}),pe.jsx("h2",{className:"text-lg font-bold text-white truncate pr-6",children:t.name}),pe.jsxs("div",{className:"text-xs text-slate-400 font-mono mt-0.5",children:["NORAD ID: ",t.norad]})]}),pe.jsxs("div",{className:"border-t border-slate-800 pt-3 space-y-2 text-xs text-slate-300",children:[pe.jsxs("div",{className:"flex justify-between",children:[pe.jsx("span",{className:"text-slate-400",children:"TLE Epoch:"}),pe.jsx("span",{className:"font-mono",children:t.epoch.toUTCString().slice(5,22)})]}),i!==null&&pe.jsxs("div",{className:"flex justify-between",children:[pe.jsx("span",{className:"text-slate-400",children:"TLE Age:"}),pe.jsxs("span",{className:"font-mono",children:[i," min"]})]})]}),pe.jsxs("div",{className:"border-t border-slate-800 pt-3 text-xs space-y-1",children:[pe.jsx("div",{className:"text-slate-400 font-medium mb-1",children:"Orbit Trajectory Legend:"}),pe.jsxs("div",{className:"flex items-center space-x-2",children:[pe.jsx("span",{className:"w-3 h-0.5 bg-red-500 rounded-full"}),pe.jsx("span",{className:"text-slate-300",children:"Past 1/4 Orbit (-22.5 min)"})]}),pe.jsxs("div",{className:"flex items-center space-x-2",children:[pe.jsx("span",{className:"w-3 h-0.5 bg-blue-500 rounded-full"}),pe.jsx("span",{className:"text-slate-300",children:"Future 1/4 Orbit (+22.5 min)"})]})]})]})},c2=({simTime:t,paused:e,speed:n,onTogglePause:i,onSetSpeed:r,satellites:s,source:o,selectedNorad:a,onSelectNorad:l,visibleGroups:u,onToggleGroup:f,onEnsureGroupVisible:d})=>{const h=s.find(_=>_.norad===a)||null,p=Xm.useMemo(()=>{if(s.length===0)return null;const _=[...s].sort((x,m)=>x.epoch.getTime()-m.epoch.getTime());return _[Math.floor(_.length/2)].epoch},[s]);return pe.jsxs("div",{className:"w-full md:w-[340px] md:h-full bg-slate-950/80 md:bg-slate-950/40 md:backdrop-blur-xl border-t md:border-t-0 md:border-l border-slate-800 p-4 flex flex-col gap-4 overflow-y-auto text-slate-100 z-10",children:[pe.jsx("div",{className:"flex items-center justify-between",children:pe.jsxs("div",{children:[pe.jsx("h1",{className:"text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",children:"LEO LIVE"}),pe.jsx("p",{className:"text-[11px] text-slate-400",children:"Satellite Tracker"})]})}),pe.jsxs("div",{className:"bg-slate-900/60 backdrop-blur-md border border-slate-800 p-3 rounded-xl space-y-2",children:[pe.jsxs("div",{className:"text-xs font-mono text-cyan-400",children:["UTC: ",new Date(t).toISOString().replace("T"," ").slice(0,19)]}),pe.jsxs("div",{className:"flex items-center justify-between gap-2",children:[pe.jsx("button",{onClick:i,className:"flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs py-1.5 px-3 rounded-lg border border-slate-700 transition font-medium",children:e?"▶ Play":"❚❚ Pause"}),pe.jsx("div",{className:"flex bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60",children:[1,60,600].map(_=>pe.jsxs("button",{onClick:()=>r(_),className:`text-[10px] px-2 py-1 rounded font-mono transition ${n===_?"bg-cyan-500 text-slate-950 font-bold":"text-slate-400"}`,children:[_,"×"]},_))})]})]}),pe.jsx(a2,{satellites:s,onSelectNorad:_=>l(_),onEnsureGroupVisible:d}),pe.jsx(l2,{visibleGroups:u,onToggleGroup:f,source:o}),pe.jsx(u2,{satellite:h,medianEpoch:p,onClearSelection:()=>l(null)})]})},f2=({satellites:t})=>{const[e,n]=qe.useState(()=>new Date().toLocaleTimeString());return qe.useEffect(()=>{const i=setInterval(()=>{n(new Date().toLocaleTimeString())},2e3);return()=>clearInterval(i)},[]),pe.jsx("div",{className:"min-h-screen bg-slate-950 text-slate-100 p-6",children:pe.jsxs("div",{className:"max-w-4xl mx-auto space-y-4",children:[pe.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl",children:[pe.jsx("h2",{className:"text-amber-400 font-bold text-lg",children:"WebGL Not Supported"}),pe.jsx("p",{className:"text-slate-300 text-sm mt-1",children:"Your browser or device does not support 3D WebGL rendering. Displaying 2D satellite list fallback instead."}),pe.jsxs("div",{className:"text-xs text-slate-400 mt-2",children:["Last updated: ",e]})]}),pe.jsx("div",{className:"bg-slate-900 border border-slate-800 rounded-xl overflow-hidden",children:pe.jsxs("table",{className:"w-full text-left text-sm",children:[pe.jsx("thead",{className:"bg-slate-800/60 text-slate-400 font-mono text-xs uppercase",children:pe.jsxs("tr",{children:[pe.jsx("th",{className:"p-3",children:"NORAD ID"}),pe.jsx("th",{className:"p-3",children:"Name"}),pe.jsx("th",{className:"p-3",children:"Group"}),pe.jsx("th",{className:"p-3",children:"Epoch (UTC)"})]})}),pe.jsx("tbody",{className:"divide-y divide-slate-800",children:t.map(i=>pe.jsxs("tr",{className:"hover:bg-slate-800/40",children:[pe.jsxs("td",{className:"p-3 font-mono text-cyan-400",children:["#",i.norad]}),pe.jsx("td",{className:"p-3 font-medium text-slate-200",children:i.name}),pe.jsx("td",{className:"p-3 capitalize text-slate-400",children:i.group}),pe.jsx("td",{className:"p-3 text-slate-400 font-mono",children:i.epoch.toISOString()})]},i.norad))})]})})]})})},d2=()=>{const t=qe.useRef(null),e=qe.useRef(null),n=qe.useRef(null),[i,r]=qe.useState(!0),[s,o]=qe.useState(!1),{data:a,source:l}=Sy(),{simTime:u,paused:f,speed:d,togglePause:h,setSpeed:p}=My(),_=Ey(a,u),[x,m]=Ty("sat"),c=x?parseInt(x,10):null,[v,g]=qe.useState(()=>new Set(q0.map(T=>T.id))),E=qe.useRef(null);qe.useEffect(()=>{const T=document.createElement("canvas");T.getContext("webgl2")||T.getContext("webgl")||r(!1)},[]),qe.useEffect(()=>{if(!i||!t.current||!e.current)return;const T=new o2(t.current,e.current);n.current=T;const S=()=>{t.current&&n.current&&n.current.resize(t.current.clientWidth,t.current.clientHeight)};window.addEventListener("resize",S),S();const b=e.current,F=B=>{B.preventDefault(),o(!0)};return b.addEventListener("webglcontextlost",F),()=>{window.removeEventListener("resize",S),b.removeEventListener("webglcontextlost",F),T.dispose(),n.current=null}},[i]),qe.useEffect(()=>{n.current&&n.current.setSatellites(a)},[a]),qe.useEffect(()=>{n.current&&(n.current.setSimTime(u),n.current.updatePositions(_,c,v))},[u,_,c,v]);const P=T=>{g(S=>{const b=new Set(S);return b.has(T)?b.delete(T):b.add(T),b})},w=T=>{g(S=>{if(!S.has(T)){const b=new Set(S);return b.add(T),b}return S})},C=T=>{E.current={x:T.clientX,y:T.clientY}},D=T=>{if(!E.current||!n.current)return;const S=Math.abs(T.clientX-E.current.x),b=Math.abs(T.clientY-E.current.y);if(S<3&&b<3){const F=n.current.pick(T.clientX,T.clientY);m(F?F.toString():null)}};return i?pe.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-slate-950 flex flex-col md:flex-row select-none",children:[pe.jsxs("div",{ref:t,className:"relative flex-1 h-[60vh] md:h-full w-full overflow-hidden cursor-grab active:cursor-grabbing",onPointerDown:C,onPointerUp:D,children:[pe.jsx("canvas",{ref:e,className:"block w-full h-full"}),s&&pe.jsxs("div",{className:"absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-50",children:[pe.jsx("h2",{className:"text-xl font-bold text-red-400 mb-2",children:"WebGL Context Lost"}),pe.jsx("p",{className:"text-slate-300 text-sm mb-4",children:"Your GPU context was reset. Please reload the page to restart the rendering engine."}),pe.jsx("button",{onClick:()=>window.location.reload(),className:"bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition",children:"Reload Page"})]})]}),pe.jsx(c2,{simTime:u,paused:f,speed:d,onTogglePause:h,onSetSpeed:p,satellites:a,source:l,selectedNorad:c,onSelectNorad:T=>m(T?T.toString():null),visibleGroups:v,onToggleGroup:P,onEnsureGroupVisible:w})]}):pe.jsx(f2,{satellites:a})};function h2(){return pe.jsx(d2,{})}Ec.createRoot(document.getElementById("root")).render(pe.jsx(Xm.StrictMode,{children:pe.jsx(h2,{})}));
