parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){return i(t)||c(t,n)||e(t,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,n){if(t){if("string"==typeof t)return o(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,n):void 0}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function c(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,o=!1,c=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done)&&(r.push(i.value),!n||r.length!==n);e=!0);}catch(u){o=!0,c=u}finally{try{e||null==a.return||a.return()}finally{if(o)throw c}}return r}}function i(t){if(Array.isArray(t))return t}var a,u=document.querySelector("button"),f=document.querySelector(".message-start"),s=document.querySelector(".message-win"),l=document.querySelector(".message-lose"),d=document.querySelector(".game-score"),m=document.querySelectorAll(".field-row"),y=4,v=0,h=!1,b=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function p(t){switch(a=b,t.key){case"ArrowLeft":A();break;case"ArrowRight":k();break;case"ArrowDown":j();break;case"ArrowUp":q();break;default:return}for(var n=0;n<y;n++)for(var r=0;r<y;r++)a[n][r]!==b[n][r]&&(b=a,w(),L());h&&s.classList.remove("hidden"),C()||(l.classList.remove("hidden"),document.removeEventListener("keydown",p))}function S(){v=0,b=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],l.classList.contains("hidden")||l.classList.add("hidden"),s.classList.contains("hidden")||s.classList.add("hidden")}function w(){var t=n(g(),2),r=t[0],e=t[1];b[r][e]=Math.random()<.9?2:4}function g(){var t=[];return b.forEach(function(n,r){n.forEach(function(n,e){0===n&&t.push([r,e])})}),t[Math.floor(Math.random()*t.length)]}function L(){for(var t=0;t<y;t++)for(var n=0;n<y;n++){var r=m[t].children[n],e=b[t][n];0===e?(r.textContent="",r.className="field-cell"):(r.textContent=e,r.className="field-cell field-cell--".concat(e))}d.textContent=v}function A(){M()&&(a=a.map(function(t){var n=t.filter(function(t){return 0!==t});return n.forEach(function(t,r){t===n[r+1]&&(n[r]*=2,n.splice(r+1,1),v+=n[r],2048===n[r]&&(h=!0))}),n.concat(Array(y-n.length).fill(0))}))}function k(){M()&&(E(),A(),E())}function E(){a.forEach(function(t){return t.reverse()})}function j(){x(),k(),x()}function q(){x(),A(),x()}function x(){a=a[0].map(function(t,n){return a.map(function(t){return t[n]})})}function C(){return!!M()||(x(),I())}function M(){for(var n=function(t){if(a[t].some(function(t){return 0===t})||a[t].some(function(n,r){return n===a[t][r+1]}))return{v:!0}},r=0;r<y;r++){var e=n(r);if("object"===t(e))return e.v}return!1}function I(){for(var n=function(t){if(a[t].some(function(n,r){return n===a[t][r+1]}))return{v:!0}},r=0;r<y;r++){var e=n(r);if("object"===t(e))return e.v}return!1}u.addEventListener("click",function(t){document.addEventListener("keydown",p),u.classList.contains("start")?(u.classList.replace("start","restart"),u.innerText="Restart",f.classList.add("hidden")):(h=!1,S()),w(),w(),L()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.2472a666.js.map