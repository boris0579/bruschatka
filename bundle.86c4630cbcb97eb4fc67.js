(()=>{"use strict";var t,e={139:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function i(t){var e=function(t){if("object"!=r(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==r(e)?e:e+""}var a=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dropdown=e,this.menu=e.querySelector("[data-dropdown-menu]"),this.arrow=e.querySelector("[data-dropdown-arrow]"),this.menu&&this.arrow?this.init():console.error("Dropdown elements are missing.")},(e=[{key:"init",value:function(){var t=this;this.menu.style.display="block",this.arrow.addEventListener("click",(function(){return t.toggleDropdown()}))}},{key:"toggleDropdown",value:function(){var t="block"===this.menu.style.display;this.menu.style.display=t?"none":"block",this.arrow.classList.toggle("opened",!t)}}])&&o(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}(),l=n(846);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function s(t){var e=function(t){if("object"!=u(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:e+""}var f=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.attribute=e,this.options=n},(e=[{key:"init",value:function(){var t=this,e=document.querySelectorAll('[data-splide="'.concat(this.attribute,'"] .splide'));0!==e.length?e.forEach((function(e){try{new l.Ay(e,t.options).mount()}catch(t){console.error("Error initializing Splide slider:",t)}})):console.error('No elements found with attribute [data-splide="'.concat(this.attribute,'"].'))}}])&&c(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function p(t){var e=function(t){if("object"!=y(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==y(e)?e:e+""}var b=function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.button=document.querySelector(e),this.filterBlock=document.querySelector(n),this.isOpen=!1,this.init()},(e=[{key:"init",value:function(){var t=this;this.button&&this.filterBlock&&this.button.addEventListener("click",(function(){return t.toggleFilter()}))}},{key:"toggleFilter",value:function(){this.isOpen=!this.isOpen,this.filterBlock.classList.toggle("active",this.isOpen);var t=this.isOpen?"Закрыть фильтры":"Открыть фильтры";this.button.querySelector("span").nextSibling.nodeValue=t}}])&&d(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function h(t){var e=function(t){if("object"!=v(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(e)?e:e+""}const g=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.navbar=document.querySelector(e),this.navbarHeight=this.navbar.offsetHeight,this.init()},(e=[{key:"checkScroll",value:function(){window.scrollY>this.navbarHeight?this.navbar.classList.add("scrolled"):this.navbar.classList.remove("scrolled")}},{key:"init",value:function(){var t=this;this.checkScroll(),window.addEventListener("scroll",(function(){return t.checkScroll()}))}}])&&m(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,k(r.key),r)}}function k(t){var e=function(t){if("object"!=w(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==w(e)?e:e+""}const P=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.menuToggle=document.querySelector("[data-toggle-menu]"),this.menuIcon=this.menuToggle.querySelector("[data-icon-menu]"),this.sidePanel=document.querySelector("[data-panel]"),this.overlay=document.querySelector(".overlay"),this.addEventListeners()},(e=[{key:"addEventListeners",value:function(){var t=this;this.menuToggle.addEventListener("click",(function(){return t.toggleSidePanel()})),document.addEventListener("click",(function(e){return t.handleOutsideClick(e)})),window.addEventListener("resize",(function(){return t.handleResize()}))}},{key:"toggleSidePanel",value:function(){"open"===this.sidePanel.getAttribute("data-panel")?this.closeSidePanel():this.openSidePanel()}},{key:"openSidePanel",value:function(){this.sidePanel.setAttribute("data-panel","open"),this.menuIcon.setAttribute("data-icon","close"),document.body.classList.add("no-scroll"),this.overlay.classList.add("active")}},{key:"closeSidePanel",value:function(){this.sidePanel.setAttribute("data-panel","closed"),this.menuIcon.setAttribute("data-icon","menu"),document.body.classList.remove("no-scroll"),this.overlay.classList.remove("active")}},{key:"handleOutsideClick",value:function(t){"open"===this.sidePanel.getAttribute("data-panel")&&(this.sidePanel.contains(t.target)||this.menuToggle.contains(t.target)||this.closeSidePanel())}},{key:"handleResize",value:function(){window.innerWidth>834&&this.closeSidePanel()}}])&&S(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-dropdown-id]").forEach((function(t){new a(t)})),new f("card-slider",{type:"loop",perPage:1,gap:"10px",live:!1,pagination:!0,arrows:!1}).init(),new b("[data-filter-btn]","[data-filter-block]"),new g(".header"),new P}))}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,o,i)=>{if(!n){var a=1/0;for(s=0;s<t.length;s++){for(var[n,o,i]=t[s],l=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((t=>r.O[t](n[u])))?n.splice(u--,1):(l=!1,i<a&&(a=i));if(l){t.splice(s--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[n,o,i]},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={792:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,[a,l,u]=n,c=0;if(a.some((e=>0!==t[e]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)var s=u(r)}for(e&&e(n);c<a.length;c++)i=a[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(s)},n=self.webpackChunkbruschatka=self.webpackChunkbruschatka||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=r.O(void 0,[846],(()=>r(139)));o=r.O(o)})();