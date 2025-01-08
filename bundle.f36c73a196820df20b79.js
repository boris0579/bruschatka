/*! For license information please see bundle.f36c73a196820df20b79.js.LICENSE.txt */
"use strict";(self.webpackChunkbruschatka=self.webpackChunkbruschatka||[]).push([[846],{846:(n,t,e)=>{function i(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}e.d(t,{Ay:()=>Kt});var r="(prefers-reduced-motion: reduce)";function o(n){n.length=0}function u(n,t,e){return Array.prototype.slice.call(n,t,e)}function a(n){return n.bind.apply(n,[null].concat(u(arguments,1)))}var s=setTimeout,c=function(){};function f(n){return requestAnimationFrame(n)}function l(n,t){return typeof t===n}function d(n){return!m(n)&&l("object",n)}var v=Array.isArray,p=a(l,"function"),h=a(l,"string"),g=a(l,"undefined");function m(n){return null===n}function y(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(n){return!1}}function b(n){return v(n)?n:[n]}function w(n,t){b(n).forEach(t)}function E(n,t){return n.indexOf(t)>-1}function S(n,t){return n.push.apply(n,b(t)),n}function x(n,t,e){n&&w(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function k(n,t){x(n,h(t)?t.split(" "):t,!0)}function C(n,t){w(t,n.appendChild.bind(n))}function P(n,t){w(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function L(n,t){return y(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function _(n,t){var e=n?u(n.children):[];return t?e.filter((function(n){return L(n,t)})):e}function A(n,t){return t?_(n,t)[0]:n.firstElementChild}var D=Object.keys;function M(n,t,e){return n&&(e?D(n).reverse():D(n)).forEach((function(e){"__proto__"!==e&&t(n[e],e)})),n}function z(n){return u(arguments,1).forEach((function(t){M(t,(function(e,i){n[i]=t[i]}))})),n}function N(n){return u(arguments,1).forEach((function(t){M(t,(function(t,e){v(t)?n[e]=t.slice():d(t)?n[e]=N({},d(n[e])?n[e]:{},t):n[e]=t}))})),n}function O(n,t){w(t||D(n),(function(t){delete n[t]}))}function I(n,t){w(n,(function(n){w(t,(function(t){n&&n.removeAttribute(t)}))}))}function T(n,t,e){d(t)?M(t,(function(t,e){T(n,e,t)})):w(n,(function(n){m(e)||""===e?I(n,t):n.setAttribute(t,String(e))}))}function F(n,t,e){var i=document.createElement(n);return t&&(h(t)?k(i,t):T(i,t)),e&&C(e,i),i}function j(n,t,e){if(g(e))return getComputedStyle(n)[t];m(e)||(n.style[t]=""+e)}function R(n,t){j(n,"display",t)}function W(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function X(n,t){return n.getAttribute(t)}function G(n,t){return n&&n.classList.contains(t)}function B(n){return n.getBoundingClientRect()}function H(n){w(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function Y(n){return A((new DOMParser).parseFromString(n,"text/html").body)}function q(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function U(n,t){return n&&n.querySelector(t)}function K(n,t){return t?u(n.querySelectorAll(t)):[]}function J(n,t){x(n,t,!1)}function V(n){return n.timeStamp}function Q(n){return h(n)?n:n?n+"px":""}var Z="splide",$="data-"+Z;function nn(n,t){if(!n)throw new Error("["+Z+"] "+(t||""))}var tn=Math.min,en=Math.max,rn=Math.floor,on=Math.ceil,un=Math.abs;function an(n,t,e){return un(n-t)<e}function sn(n,t,e,i){var r=tn(t,e),o=en(t,e);return i?r<n&&n<o:r<=n&&n<=o}function cn(n,t,e){var i=tn(t,e),r=en(t,e);return tn(en(i,n),r)}function fn(n){return+(n>0)-+(n<0)}function ln(n,t){return w(t,(function(t){n=n.replace("%s",""+t)})),n}function dn(n){return n<10?"0"+n:""+n}var vn={};function pn(){var n=[];function t(n,t,e){w(n,(function(n){n&&w(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,r,o){t(e,i,(function(t,e,i){var u="addEventListener"in t,a=u?t.removeEventListener.bind(t,e,r,o):t.removeListener.bind(t,r);u?t.addEventListener(e,r,o):t.addListener(r),n.push([t,e,i,r,a])}))},unbind:function(e,i,r){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||r&&n[3]!==r)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i,r=!0;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:r,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,r,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),o(n)}}}var hn="mounted",gn="ready",mn="move",yn="moved",bn="click",wn="refresh",En="updated",Sn="resize",xn="resized",kn="scroll",Cn="scrolled",Pn="destroy",Ln="navigation:mounted",_n="autoplay:play",An="autoplay:pause",Dn="lazyload:loaded",Mn="ei";function zn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=pn();return n&&n.event.on(Pn,e.destroy),z(e,{bus:t,on:function(n,i){e.bind(t,b(n).join(" "),(function(n){i.apply(i,v(n.detail)?n.detail:[])}))},off:a(e.unbind,t),emit:function(n){e.dispatch(t,n,u(arguments,1))}})}function Nn(n,t,e,i){var r,o,u=Date.now,a=0,s=!0,c=0;function l(){if(!s){if(a=n?tn((u()-r)/n,1):1,e&&e(a),a>=1&&(t(),r=u(),i&&++c>=i))return d();o=f(l)}}function d(){s=!0}function v(){o&&cancelAnimationFrame(o),a=0,o=0,s=!0}return{start:function(t){t||v(),r=u()-(t?a*n:0),s=!1,o=f(l)},rewind:function(){r=u(),a=0,e&&e(a)},pause:d,cancel:v,set:function(t){n=t},isPaused:function(){return s}}}var On="Arrow",In=On+"Left",Tn=On+"Right",Fn=On+"Up",jn=On+"Down",Rn="ttb",Wn={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Fn,Tn],ArrowRight:[jn,In]};var Xn="role",Gn="tabindex",Bn="aria-",Hn=Bn+"controls",Yn=Bn+"current",qn=Bn+"selected",Un=Bn+"label",Kn=Bn+"labelledby",Jn=Bn+"hidden",Vn=Bn+"orientation",Qn=Bn+"roledescription",Zn=Bn+"live",$n=Bn+"busy",nt=Bn+"atomic",tt=[Xn,Gn,"disabled",Hn,Yn,Un,Kn,Jn,Vn,Qn],et=Z+"__",it="is-",rt=Z,ot=et+"track",ut=et+"list",at=et+"slide",st=at+"--clone",ct=at+"__container",ft=et+"arrows",lt=et+"arrow",dt=lt+"--prev",vt=lt+"--next",pt=et+"pagination",ht=pt+"__page",gt=et+"progress__bar",mt=et+"toggle",yt=et+"sr",bt=it+"initialized",wt=it+"active",Et=it+"prev",St=it+"next",xt=it+"visible",kt=it+"loading",Ct=it+"focus-in",Pt=it+"overflow",Lt=[wt,xt,Et,St,kt,Ct,Pt],_t={slide:at,clone:st,arrows:ft,arrow:lt,prev:dt,next:vt,pagination:pt,page:ht,spinner:et+"spinner"},At="touchstart mousedown",Dt="touchmove mousemove",Mt="touchend touchcancel mouseup click",zt="slide",Nt="loop",Ot="fade";var It=$+"-interval",Tt={passive:!1,capture:!0},Ft={Spacebar:" ",Right:Tn,Left:In,Up:Fn,Down:jn};function jt(n){return n=h(n)?n:n.key,Ft[n]||n}var Rt="keydown",Wt=$+"-lazy",Xt=Wt+"-srcset",Gt="["+Wt+"], ["+Xt+"]",Bt=[" ","Enter"],Ht=Object.freeze({__proto__:null,Media:function(n,t,e){var i=n.state,o=e.breakpoints||{},u=e.reducedMotion||{},a=pn(),s=[];function c(n){n&&a.destroy()}function f(n,t){var e=matchMedia(t);a.bind(e,"change",l),s.push([n,e])}function l(){var t=i.is(7),r=e.direction,o=s.reduce((function(n,t){return N(n,t[1].matches?t[0]:{})}),{});O(e),d(o),e.destroy?n.destroy("completely"===e.destroy):t?(c(!0),n.mount()):r!==e.direction&&n.refresh()}function d(t,r,o){N(e,t),r&&N(Object.getPrototypeOf(e),t),!o&&i.is(1)||n.emit(En,e)}return{setup:function(){var n="min"===e.mediaQuery;D(o).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){f(o[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),f(u,r),l()},destroy:c,reduce:function(n){matchMedia(r).matches&&(n?N(e,u):O(e,D(u)))},set:d}},Direction:function(n,t,e){return{resolve:function(n,t,i){var r="rtl"!==(i=i||e.direction)||t?i===Rn?0:-1:1;return Wn[n]&&Wn[n][r]||n.replace(/width|left|right/i,(function(n,t){var e=Wn[n.toLowerCase()][r]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}},Elements:function(n,t,e){var i,r,u,a=zn(n),s=a.on,c=a.bind,f=n.root,l=e.i18n,d={},v=[],h=[],g=[];function m(){var n,t,o;i=w("."+ot),r=A(i,"."+ut),nn(i&&r,"A track/list element is missing."),S(v,_(r,"."+at+":not(."+st+")")),M({arrows:ft,pagination:pt,prev:dt,next:vt,bar:gt,toggle:mt},(function(n,t){d[t]=w("."+n)})),z(d,{root:f,track:i,list:r,slides:v}),t=f.id||""+(n=Z)+dn(vn[n]=(vn[n]||0)+1),o=e.role,f.id=t,i.id=i.id||t+"-track",r.id=r.id||t+"-list",!X(f,Xn)&&"SECTION"!==f.tagName&&o&&T(f,Xn,o),T(f,Qn,l.carousel),T(r,Xn,"presentation"),b()}function y(n){var t=tt.concat("style");o(v),J(f,h),J(i,g),I([i,r],t),I(f,n?t:["style",Qn])}function b(){J(f,h),J(i,g),h=E(rt),g=E(ot),k(f,h),k(i,g),T(f,Un,e.label),T(f,Kn,e.labelledby)}function w(n){var t=U(f,n);return t&&function(n,t){if(p(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!L(e,t);)e=e.parentElement;return e}(t,"."+rt)===f?t:void 0}function E(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===rt&&wt]}return z(d,{setup:m,mount:function(){s(wn,y),s(wn,m),s(En,b),c(document,At+" keydown",(function(n){u="keydown"===n.type}),{capture:!0}),c(f,"focusin",(function(){x(f,Ct,!!u)}))},destroy:y})},Slides:function(n,t,e){var i=zn(n),r=i.on,u=i.emit,s=i.bind,c=t.Elements,f=c.slides,l=c.list,d=[];function v(){f.forEach((function(n,t){m(n,t,-1)}))}function g(){_((function(n){n.destroy()})),o(d)}function m(t,e,i){var r=function(n,t,e,i){var r,o=zn(n),u=o.on,s=o.emit,c=o.bind,f=n.Components,l=n.root,d=n.options,v=d.isNavigation,p=d.updateOnMove,h=d.i18n,g=d.pagination,m=d.slideFocus,y=f.Direction.resolve,b=X(i,"style"),w=X(i,Un),E=e>-1,S=A(i,"."+ct);function k(){var r=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");T(i,Un,ln(h.slideX,(E?e:t)+1)),T(i,Hn,r),T(i,Xn,m?"button":""),m&&I(i,Qn)}function C(){r||P()}function P(){if(!r){var e=n.index;(o=L())!==G(i,wt)&&(x(i,wt,o),T(i,Yn,v&&o||""),s(o?"active":"inactive",_)),function(){var t=function(){if(n.is(Ot))return L();var t=B(f.Elements.track),e=B(i),r=y("left",!0),o=y("right",!0);return rn(t[r])<=on(e[r])&&rn(e[o])<=on(t[o])}(),e=!t&&(!L()||E);if(n.state.is([4,5])||T(i,Jn,e||""),T(K(i,d.focusableNodes||""),Gn,e?-1:""),m&&T(i,Gn,e?-1:0),t!==G(i,xt)&&(x(i,xt,t),s(t?"visible":"hidden",_)),!t&&document.activeElement===i){var r=f.Slides.getAt(n.index);r&&W(r.slide)}}(),x(i,Et,t===e-1),x(i,St,t===e+1)}var o}function L(){var i=n.index;return i===t||d.cloneStatus&&i===e}var _={index:t,slideIndex:e,slide:i,container:S,isClone:E,mount:function(){E||(i.id=l.id+"-slide"+dn(t+1),T(i,Xn,g?"tabpanel":"group"),T(i,Qn,h.slide),T(i,Un,w||ln(h.slideLabel,[t+1,n.length]))),c(i,"click",a(s,bn,_)),c(i,"keydown",a(s,"sk",_)),u([yn,"sh",Cn],P),u(Ln,k),p&&u(mn,C)},destroy:function(){r=!0,o.destroy(),J(i,Lt),I(i,tt),T(i,"style",b),T(i,Un,w||"")},update:P,style:function(n,t,e){j(e&&S||i,n,t)},isWithin:function(e,i){var r=un(e-t);return E||!d.rewind&&!n.is(Nt)||(r=tn(r,n.length-r)),r<=i}};return _}(n,e,i,t);r.mount(),d.push(r),d.sort((function(n,t){return n.index-t.index}))}function S(n){return n?D((function(n){return!n.isClone})):d}function _(n,t){S(t).forEach(n)}function D(n){return d.filter(p(n)?n:function(t){return h(n)?L(t.slide,n):E(b(n),t.index)})}return{mount:function(){v(),r(wn,g),r(wn,v)},destroy:g,update:function(){_((function(n){n.update()}))},register:m,get:S,getIn:function(n){var i=t.Controller,r=i.toIndex(n),o=i.hasFocus()?1:e.perPage;return D((function(n){return sn(n.index,r,r+o-1)}))},getAt:function(n){return D(n)[0]},add:function(n,t){w(n,(function(n){if(h(n)&&(n=Y(n)),y(n)){var i=f[t];i?P(n,i):C(l,n),k(n,e.classes.slide),r=n,o=a(u,Sn),c=K(r,"img"),(d=c.length)?c.forEach((function(n){s(n,"load error",(function(){--d||o()}))})):o()}var r,o,c,d})),u(wn)},remove:function(n){H(D(n).map((function(n){return n.slide}))),u(wn)},forEach:_,filter:D,style:function(n,t,e){_((function(i){i.style(n,t,e)}))},getLength:function(n){return n?f.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(n,t,e){var i,r,o,u=zn(n),s=u.on,c=u.bind,f=u.emit,l=t.Slides,v=t.Direction.resolve,p=t.Elements,h=p.root,g=p.track,m=p.list,y=l.getAt,b=l.style;function w(){i=e.direction===Rn,j(h,"maxWidth",Q(e.width)),j(g,v("paddingLeft"),S(!1)),j(g,v("paddingRight"),S(!0)),E(!0)}function E(n){var t,u=B(h);(n||r.width!==u.width||r.height!==u.height)&&(j(g,"height",(t="",i&&(nn(t=k(),"height or heightRatio is missing."),t="calc("+t+" - "+S(!1)+" - "+S(!0)+")"),t)),b(v("marginRight"),Q(e.gap)),b("width",e.autoWidth?null:Q(e.fixedWidth)||(i?"":C())),b("height",Q(e.fixedHeight)||(i?e.autoHeight?null:C():k()),!0),r=u,f(xn),o!==(o=M())&&(x(h,Pt,o),f("overflow",o)))}function S(n){var t=e.padding,i=v(n?"right":"left");return t&&Q(t[i]||(d(t)?0:t))||"0px"}function k(){return Q(e.height||B(m).width*e.heightRatio)}function C(){var n=Q(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function P(){return B(m)[v("width")]}function L(n,t){var e=y(n||0);return e?B(e.slide)[v("width")]+(t?0:D()):0}function _(n,t){var e=y(n);if(e){var i=B(e.slide)[v("right")],r=B(m)[v("left")];return un(i-r)+(t?0:D())}return 0}function A(t){return _(n.length-1)-_(0)+L(0,t)}function D(){var n=y(0);return n&&parseFloat(j(n.slide,v("marginRight")))||0}function M(){return n.is(Ot)||A(!0)>P()}return{mount:function(){var n,t;w(),c(window,"resize load",(n=a(f,Sn),t=Nn(0,n,null,1),function(){t.isPaused()&&t.start()})),s([En,wn],w),s(Sn,E)},resize:E,listSize:P,slideSize:L,sliderSize:A,totalSize:_,getPadding:function(n){return parseFloat(j(g,v("padding"+(n?"Right":"Left"))))||0},isOverflow:M}},Clones:function(n,t,e){var i,r=zn(n),u=r.on,a=t.Elements,s=t.Slides,c=t.Direction.resolve,f=[];function l(){u(wn,d),u([En,Sn],p),(i=h())&&(function(t){var i=s.get().slice(),r=i.length;if(r){for(;i.length<t;)S(i,i);S(i.slice(-t),i.slice(0,t)).forEach((function(o,u){var c=u<t,l=function(t,i){var r=t.cloneNode(!0);return k(r,e.classes.clone),r.id=n.root.id+"-clone"+dn(i+1),r}(o.slide,u);c?P(l,i[0].slide):C(a.list,l),S(f,l),s.register(l,u-t+(c?0:r),o.index)}))}}(i),t.Layout.resize(!0))}function d(){v(),l()}function v(){H(f),o(f),r.destroy()}function p(){var n=h();i!==n&&(i<n||!n)&&r.emit(wn)}function h(){var i=e.clones;if(n.is(Nt)){if(g(i)){var r=e[c("fixedWidth")]&&t.Layout.slideSize(0);i=r&&on(B(a.track)[c("width")]/r)||e[c("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:l,destroy:v}},Move:function(n,t,e){var i,r=zn(n),o=r.on,u=r.emit,a=n.state.set,s=t.Layout,c=s.slideSize,f=s.getPadding,l=s.totalSize,d=s.listSize,v=s.sliderSize,p=t.Direction,h=p.resolve,m=p.orient,y=t.Elements,b=y.list,w=y.track;function E(){t.Controller.isBusy()||(t.Scroll.cancel(),S(n.index),t.Slides.update())}function S(n){x(L(n,!0))}function x(e,i){if(!n.is(Ot)){var r=i?e:function(e){if(n.is(Nt)){var i=P(e),r=i>t.Controller.getEnd();(i<0||r)&&(e=k(e,r))}return e}(e);j(b,"transform","translate"+h("X")+"("+r+"px)"),e!==r&&u("sh")}}function k(n,t){var e=n-A(t),i=v();return n-m(i*(on(un(e)/i)||1))*(t?1:-1)}function C(){x(_(),!0),i.cancel()}function P(n){for(var e=t.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var u=e[o].index,a=un(L(u,!0)-n);if(!(a<=r))break;r=a,i=u}return i}function L(t,i){var r=m(l(t-1)-function(n){var t=e.focus;return"center"===t?(d()-c(n,!0))/2:+t*c(n)||0}(t));return i?function(t){return e.trimSpace&&n.is(zt)&&(t=cn(t,0,m(v(!0)-d()))),t}(r):r}function _(){var n=h("left");return B(b)[n]-B(w)[n]+m(f(!1))}function A(n){return L(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,o([hn,xn,En,wn],E)},move:function(n,t,e,r){var o,s;n!==t&&(o=n>e,s=m(k(_(),o)),o?s>=0:s<=b[h("scrollWidth")]-B(w)[h("width")])&&(C(),x(k(_(),n>e),!0)),a(4),u(mn,t,e,n),i.start(t,(function(){a(3),u(yn,t,e,n),r&&r()}))},jump:S,translate:x,shift:k,cancel:C,toIndex:P,toPosition:L,getPosition:_,getLimit:A,exceededLimit:function(n,t){t=g(t)?_():t;var e=!0!==n&&m(t)<m(A(!1)),i=!1!==n&&m(t)>m(A(!0));return e||i},reposition:E}},Controller:function(n,t,e){var i,r,o,u,s=zn(n),c=s.on,f=s.emit,l=t.Move,d=l.getPosition,v=l.getLimit,p=l.toPosition,m=t.Slides,y=m.isEnough,b=m.getLength,w=e.omitEnd,E=n.is(Nt),S=n.is(zt),x=a(A,!1),k=a(A,!0),C=e.start||0,P=C;function L(){r=b(!0),o=e.perMove,u=e.perPage,i=z();var n=cn(C,0,w?i:r-1);n!==C&&(C=n,l.reposition())}function _(){i!==z()&&f(Mn)}function A(n,t){var e=o||(T()?1:u),r=D(C+e*(n?-1:1),C,!(o||T()));return-1===r&&S&&!an(d(),v(!n),1)?n?0:i:t?r:M(r)}function D(t,a,s){if(y()||T()){var c=function(t){if(S&&"move"===e.trimSpace&&t!==C)for(var i=d();i===p(t,!0)&&sn(t,0,n.length-1,!e.rewind);)t<C?--t:++t;return t}(t);c!==t&&(a=t,t=c,s=!1),t<0||t>i?t=o||!sn(0,t,a,!0)&&!sn(i,a,t,!0)?E?s?t<0?-(r%u||u):r:t:e.rewind?t<0?i:0:-1:N(O(t)):s&&t!==a&&(t=N(O(a)+(t<a?-1:1)))}else t=-1;return t}function M(n){return E?(n+r)%r||0:n}function z(){for(var n=r-(T()||E&&o?1:u);w&&n-- >0;)if(p(r-1,!0)!==p(n,!0)){n++;break}return cn(n,0,r-1)}function N(n){return cn(T()?n:u*n,0,i)}function O(n){return T()?tn(n,i):rn((n>=i?r-1:n)/u)}function I(n){n!==C&&(P=C,C=n)}function T(){return!g(e.focus)||e.isNavigation}function F(){return n.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){L(),c([En,wn,Mn],L),c(xn,_)},go:function(n,t,e){if(!F()){var r=function(n){var t=C;if(h(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],r=e[1],o=e[2];"+"===r||"-"===r?t=D(C+ +(""+r+(+o||1)),C):">"===r?t=o?N(+o):x(!0):"<"===r&&(t=k(!0))}else t=E?n:cn(n,0,i);return t}(n),o=M(r);o>-1&&(t||o!==C)&&(I(o),l.move(r,o,P,e))}},scroll:function(n,e,r,o){t.Scroll.scroll(n,e,r,(function(){var n=M(l.toIndex(d()));I(w?tn(n,i):n),o&&o()}))},getNext:x,getPrev:k,getAdjacent:A,getEnd:z,setIndex:I,getIndex:function(n){return n?P:C},toIndex:N,toPage:O,toDest:function(n){var t=l.toIndex(n);return S?cn(t,0,i):t},hasFocus:T,isBusy:F}},Arrows:function(n,t,e){var i,r,o=zn(n),u=o.on,s=o.bind,c=o.emit,f=e.classes,l=e.i18n,d=t.Elements,v=t.Controller,p=d.arrows,h=d.track,g=p,m=d.prev,y=d.next,b={};function w(){var n;!(n=e.arrows)||m&&y||(g=p||F("div",f.arrows),m=L(!0),y=L(!1),i=!0,C(g,[m,y]),!p&&P(g,h)),m&&y&&(z(b,{prev:m,next:y}),R(g,n?"":"none"),k(g,r=ft+"--"+e.direction),n&&(u([hn,yn,wn,Cn,Mn],_),s(y,"click",a(x,">")),s(m,"click",a(x,"<")),_(),T([m,y],Hn,h.id),c("arrows:mounted",m,y))),u(En,E)}function E(){S(),w()}function S(){o.destroy(),J(g,r),i?(H(p?[m,y]:g),m=y=null):I([m,y],tt)}function x(n){v.go(n,!0)}function L(n){return Y('<button class="'+f.arrow+" "+(n?f.prev:f.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function _(){if(m&&y){var t=n.index,e=v.getPrev(),i=v.getNext(),r=e>-1&&t<e?l.last:l.prev,o=i>-1&&t>i?l.first:l.next;m.disabled=e<0,y.disabled=i<0,T(m,Un,r),T(y,Un,o),c("arrows:updated",m,y,e,i)}}return{arrows:b,mount:w,destroy:S,update:_}},Autoplay:function(n,t,e){var i,r,o=zn(n),u=o.on,a=o.bind,s=o.emit,c=Nn(e.interval,n.go.bind(n,">"),(function(n){var t=l.bar;t&&j(t,"width",100*n+"%"),s("autoplay:playing",n)})),f=c.isPaused,l=t.Elements,d=t.Elements,v=d.root,p=d.toggle,h=e.autoplay,g="pause"===h;function m(){f()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),r=i=g=!1,w(),s(_n))}function y(n){void 0===n&&(n=!0),g=!!n,w(),f()||(c.pause(),s(An))}function b(){g||(i||r?y(!1):m())}function w(){p&&(x(p,wt,!g),T(p,Un,e.i18n[g?"play":"pause"]))}function E(n){var i=t.Slides.getAt(n);c.set(i&&+X(i.slide,It)||e.interval)}return{mount:function(){h&&(e.pauseOnHover&&a(v,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()})),e.pauseOnFocus&&a(v,"focusin focusout",(function(n){r="focusin"===n.type,b()})),p&&a(p,"click",(function(){g?m():y(!0)})),u([mn,kn,wn],c.rewind),u(mn,E),p&&T(p,Hn,l.track.id),g||m(),w())},destroy:c.cancel,play:m,pause:y,isPaused:f}},Cover:function(n,t,e){var i=zn(n).on;function r(n){t.Slides.forEach((function(t){var e=A(t.container||t.slide,"img");e&&e.src&&o(n,e,t)}))}function o(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),R(t,n?"none":"")}return{mount:function(){e.cover&&(i(Dn,a(o,!0)),i([hn,En,wn],a(r,!0)))},destroy:a(r,!1)}},Scroll:function(n,t,e){var i,r,o=zn(n),u=o.on,s=o.emit,c=n.state.set,f=t.Move,l=f.getPosition,d=f.getLimit,v=f.exceededLimit,p=f.translate,h=n.is(zt),g=1;function m(n,e,o,u,d){var p=l();if(w(),o&&(!h||!v())){var m=t.Layout.sliderSize(),E=fn(n)*m*rn(un(n)/m)||0;n=f.toPosition(t.Controller.toDest(n%m))+E}var S=an(p,n,1);g=1,e=S?0:e||en(un(n-p)/1.5,800),r=u,i=Nn(e,y,a(b,p,n,d),1),c(5),s(kn),i.start()}function y(){c(3),r&&r(),s(Cn)}function b(n,t,i,o){var u,a,s=l(),c=(n+(t-n)*(u=o,(a=e.easingFunc)?a(u):1-Math.pow(1-u,4))-s)*g;p(s+c),h&&!i&&v()&&(g*=.6,un(c)<10&&m(d(v(!0)),600,!1,r,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){u(mn,w),u([En,wn],E)},destroy:w,scroll:m,cancel:E}},Drag:function(n,t,e){var i,r,o,u,a,s,f,l,v=zn(n),p=v.on,h=v.emit,g=v.bind,m=v.unbind,y=n.state,b=t.Move,w=t.Scroll,E=t.Controller,S=t.Elements.track,x=t.Media.reduce,k=t.Direction,C=k.resolve,P=k.orient,_=b.getPosition,A=b.exceededLimit,D=!1;function M(){var n=e.drag;G(!n),u="free"===n}function z(n){if(s=!1,!f){var t=X(n);i=n.target,r=e.noDrag,L(i,"."+ht+", ."+lt)||r&&L(i,r)||!t&&n.button||(E.isBusy()?q(n,!0):(l=t?S:window,a=y.is([4,5]),o=null,g(l,Dt,N,Tt),g(l,Mt,O,Tt),b.cancel(),w.cancel(),T(n)))}var i,r}function N(t){if(y.is(6)||(y.set(6),h("drag")),t.cancelable)if(a){b.translate(i+F(t)/(D&&n.is(zt)?5:1));var r=j(t)>200,o=D!==(D=A());(r||o)&&T(t),s=!0,h("dragging"),q(t)}else(function(n){return un(F(n))>un(F(n,!0))})(t)&&(a=function(n){var t=e.dragMinThreshold,i=d(t),r=i&&t.mouse||0,o=(i?t.touch:+t)||10;return un(F(n))>(X(n)?o:r)}(t),q(t))}function O(i){y.is(6)&&(y.set(3),h("dragged")),a&&(function(i){var r=function(t){if(n.is(Nt)||!D){var e=j(t);if(e&&e<200)return F(t)/e}return 0}(i),o=function(n){return _()+fn(n)*tn(un(n)*(e.flickPower||600),u?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(r),a=e.rewind&&e.rewindByDrag;x(!1),u?E.scroll(o,0,e.snap):n.is(Ot)?E.go(P(fn(r))<0?a?"<":"-":a?">":"+"):n.is(zt)&&D&&a?E.go(A(!0)?">":"<"):E.go(E.toDest(o),!0),x(!0)}(i),q(i)),m(l,Dt,N),m(l,Mt,O),a=!1}function I(n){!f&&s&&q(n,!0)}function T(n){o=r,r=n,i=_()}function F(n,t){return W(n,t)-W(R(n),t)}function j(n){return V(n)-V(R(n))}function R(n){return r===n&&o||r}function W(n,t){return(X(n)?n.changedTouches[0]:n)["page"+C(t?"Y":"X")]}function X(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function G(n){f=n}return{mount:function(){g(S,Dt,c,Tt),g(S,Mt,c,Tt),g(S,At,z,Tt),g(S,"click",I,{capture:!0}),g(S,"dragstart",q),p([hn,En],M)},disable:G,isDragging:function(){return a}}},Keyboard:function(n,t,e){var i,r,o=zn(n),u=o.on,a=o.bind,c=o.unbind,f=n.root,l=t.Direction.resolve;function d(){var n=e.keyboard;n&&(i="global"===n?window:f,a(i,Rt,h))}function v(){c(i,Rt)}function p(){var n=r;r=!0,s((function(){r=n}))}function h(t){if(!r){var e=jt(t);e===l(In)?n.go("<"):e===l(Tn)&&n.go(">")}}return{mount:function(){d(),u(En,v),u(En,d),u(mn,p)},destroy:v,disable:function(n){r=n}}},LazyLoad:function(n,t,e){var i=zn(n),r=i.on,u=i.off,s=i.bind,c=i.emit,f="sequential"===e.lazyLoad,l=[yn,Cn],d=[];function v(){o(d),t.Slides.forEach((function(n){K(n.slide,Gt).forEach((function(t){var i=X(t,Wt),r=X(t,Xt);if(i!==t.src||r!==t.srcset){var o=e.classes.spinner,u=t.parentElement,a=A(u,"."+o)||F("span",o,u);d.push([t,n,a]),t.src||R(t,"none")}}))})),f?m():(u(l),r(l,p),p())}function p(){(d=d.filter((function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||h(t)}))).length||u(l)}function h(n){var t=n[0];k(n[1].slide,kt),s(t,"load error",a(g,n)),T(t,"src",X(t,Wt)),T(t,"srcset",X(t,Xt)),I(t,Wt),I(t,Xt)}function g(n,t){var e=n[0],i=n[1];J(i.slide,kt),"error"!==t.type&&(H(n[2]),R(e,""),c(Dn,e,i),c(Sn)),f&&m()}function m(){d.length&&h(d.shift())}return{mount:function(){e.lazyLoad&&(v(),r(wn,v))},destroy:a(o,d),check:p}},Pagination:function(n,t,e){var i,r,s=zn(n),c=s.on,f=s.emit,l=s.bind,d=t.Slides,v=t.Elements,p=t.Controller,h=p.hasFocus,g=p.getIndex,m=p.go,y=t.Direction.resolve,b=v.pagination,w=[];function E(){i&&(H(b?u(i.children):i),J(i,r),o(w),i=null),s.destroy()}function S(n){m(">"+n,!0)}function x(n,t){var e=w.length,i=jt(t),r=C(),o=-1;i===y(Tn,!1,r)?o=++n%e:i===y(In,!1,r)?o=(--n+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var u=w[o];u&&(W(u.button),m(">"+o),q(t,!0))}function C(){return e.paginationDirection||e.direction}function P(n){return w[p.toPage(n)]}function L(){var n=P(g(!0)),t=P(g());if(n){var e=n.button;J(e,wt),I(e,qn),T(e,Gn,-1)}if(t){var r=t.button;k(r,wt),T(r,qn,!0),T(r,Gn,"")}f("pagination:updated",{list:i,items:w},n,t)}return{items:w,mount:function t(){E(),c([En,wn,Mn],t);var o=e.pagination;b&&R(b,o?"":"none"),o&&(c([mn,kn,Cn],L),function(){var t=n.length,o=e.classes,u=e.i18n,s=e.perPage,c=h()?p.getEnd()+1:on(t/s);k(i=b||F("ul",o.pagination,v.track.parentElement),r=pt+"--"+C()),T(i,Xn,"tablist"),T(i,Un,u.select),T(i,Vn,C()===Rn?"vertical":"");for(var f=0;f<c;f++){var g=F("li",null,i),m=F("button",{class:o.page,type:"button"},g),y=d.getIn(f).map((function(n){return n.slide.id})),E=!h()&&s>1?u.pageX:u.slideX;l(m,"click",a(S,f)),e.paginationKeyboard&&l(m,"keydown",a(x,f)),T(g,Xn,"presentation"),T(m,Xn,"tab"),T(m,Hn,y.join(" ")),T(m,Un,ln(E,f+1)),T(m,Gn,-1),w.push({li:g,button:m,page:f})}}(),L(),f("pagination:mounted",{list:i,items:w},P(n.index)))},destroy:E,getAt:P,update:L}},Sync:function(n,t,e){var i=e.isNavigation,r=e.slideFocus,u=[];function s(){var t,e;n.splides.forEach((function(t){t.isParent||(f(n,t.splide),f(t.splide,n))})),i&&((e=(t=zn(n)).on)(bn,d),e("sk",v),e([hn,En],l),u.push(t),t.emit(Ln,n.splides))}function c(){u.forEach((function(n){n.destroy()})),o(u)}function f(n,t){var e=zn(n);e.on(mn,(function(n,e,i){t.go(t.is(Nt)?i:n)})),u.push(e)}function l(){T(t.Elements.list,Vn,e.direction===Rn?"vertical":"")}function d(t){n.go(t.index)}function v(n,t){E(Bt,jt(t))&&(d(n),q(t))}return{setup:a(t.Media.set,{slideFocus:g(r)?i:r},!0),mount:s,destroy:c,remount:function(){c(),s()}}},Wheel:function(n,t,e){var i=zn(n).bind,r=0;function o(i){if(i.cancelable){var o=i.deltaY,u=o<0,a=V(i),s=e.wheelMinThreshold||0,c=e.wheelSleep||0;un(o)>s&&a-r>c&&(n.go(u?"<":">"),r=a),function(i){return!e.releaseWheel||n.state.is(4)||-1!==t.Controller.getAdjacent(i)}(u)&&q(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",o,Tt)}}},Live:function(n,t,e){var i=zn(n).on,r=t.Elements.track,o=e.live&&!e.isNavigation,u=F("span",yt),s=Nn(90,a(c,!1));function c(n){T(r,$n,n),n?(C(r,u),s.start()):(H(u),s.cancel())}function f(n){o&&T(r,Zn,n?"off":"polite")}return{mount:function(){o&&(f(!t.Autoplay.isPaused()),T(r,nt,!0),u.textContent="…",i(_n,a(f,!0)),i(An,a(f,!1)),i([yn,Cn],a(c,!0)))},disable:f,destroy:function(){I(r,[Zn,nt,$n]),H(u)}}}}),Yt={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:_t,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function qt(n,t,e){var i=t.Slides;function r(){i.forEach((function(n){n.style("transform","translateX(-"+100*n.index+"%)")}))}return{mount:function(){zn(n).on([hn,wn],r)},start:function(n,t){i.style("transition","opacity "+e.speed+"ms "+e.easing),s(t)},cancel:c}}function Ut(n,t,e){var i,r=t.Move,o=t.Controller,u=t.Scroll,s=t.Elements.list,c=a(j,s,"transition");function f(){c(""),u.cancel()}return{mount:function(){zn(n).bind(s,"transitionend",(function(n){n.target===s&&i&&(f(),i())}))},start:function(t,a){var s=r.toPosition(t,!0),f=r.getPosition(),l=function(t){var i=e.rewindSpeed;if(n.is(zt)&&i){var r=o.getIndex(!0),u=o.getEnd();if(0===r&&t>=u||r>=u&&0===t)return i}return e.speed}(t);un(s-f)>=1&&l>=1?e.useScroll?u.scroll(s,l,!1,a):(c("transform "+l+"ms "+e.easing),r.translate(s,!0),i=a):(r.jump(t),a())},cancel:f}}var Kt=function(){function n(t,e){var i;this.event=zn(),this.Components={},this.state=(i=1,{set:function(n){i=n},is:function(n){return E(b(n),i)}}),this.splides=[],this._o={},this._E={};var r=h(t)?U(document,t):t;nn(r,r+" is invalid."),this.root=r,e=N({label:X(r,Un)||"",labelledby:X(r,Kn)||""},Yt,n.defaults,e||{});try{N(e,JSON.parse(X(r,$)))}catch(n){nn(!1,"Invalid JSON")}this._o=Object.create(N({},e))}var t,e,r=n.prototype;return r.mount=function(n,t){var e=this,i=this.state,r=this.Components;return nn(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=t||this._T||(this.is(Ot)?qt:Ut),this._E=n||this._E,M(z({},Ht,this._E,{Transition:this._T}),(function(n,t){var i=n(e,r,e._o);r[t]=i,i.setup&&i.setup()})),M(r,(function(n){n.mount&&n.mount()})),this.emit(hn),k(this.root,bt),i.set(3),this.emit(gn),this},r.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},r.go=function(n){return this._C.Controller.go(n),this},r.on=function(n,t){return this.event.on(n,t),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(u(arguments,1))),this},r.add=function(n,t){return this._C.Slides.add(n,t),this},r.remove=function(n){return this._C.Slides.remove(n),this},r.is=function(n){return this._o.type===n},r.refresh=function(){return this.emit(wn),this},r.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?zn(this).on(gn,this.destroy.bind(this,n)):(M(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(Pn),t.destroy(),n&&o(this.splides),e.set(7)),this},t=n,(e=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&i(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),n}();Kt.defaults={},Kt.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7}}}]);