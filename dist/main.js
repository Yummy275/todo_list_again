!function(e){var t={};function n(d){if(t[d])return t[d].exports;var r=t[d]={i:d,l:!1,exports:{}};return e[d].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(d,r,function(t){return e[t]}.bind(null,r));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const d={createElement:e=>document.createElement(e),addClassName:(e,t)=>{t.classList.add(e)},changeTextContent:(e,t)=>{t.textContent=e},setEventListenerClick:(e,t)=>{e.addEventListener("click",t)},createAddtextAddclasses:(e,t,...n)=>{const d=document.createElement(e);for(var r of(d.textContent=t,n))d.classList.add(r);return d},appendChildren:(e,...t)=>{for(var n of t)e.appendChild(n)},appendToDisplayContent:(...e)=>{for(var t of e)document.getElementById("displayContent").appendChild(t)},clearDisplay:()=>{document.getElementById("displayContent").innerHTML=""}};function r(e){let t=[];return{title:e,todosInCategory:t,add:e=>{t.push(e)}}}const a=(()=>{let e=[];return{container:e,addToContainer:t=>{e.push(t)},deleteFromContainer:t=>{e.splice(e.indexOf(t),1)}}})(),o=e=>{i(e)},c=()=>{const e=r(prompt("What is the name of the new category?"));a.addToContainer(e),l()},s=e=>{a.deleteFromContainer(e),l()},l=()=>{d.clearDisplay(),(()=>{const e=d.createAddtextAddclasses("div","","catDiv"),t=d.createAddtextAddclasses("button","Create","createBtn");d.setEventListenerClick(t,c),d.appendChildren(e,t);for(var n=0;n<a.container.length;n++){const t=d.createAddtextAddclasses("button",a.container[n].title,"categoryLink");t.addEventListener("click",o.bind(event,a.container[n]));const r=d.createAddtextAddclasses("button","Edit","catBtn"),c=d.createAddtextAddclasses("button","Delete","catBtn");c.addEventListener("click",s.bind(event,a.container[n])),d.appendChildren(e,t,r,c)}d.appendToDisplayContent(e)})()},i=e=>{d.clearDisplay(),(e=>{const t=d.createAddtextAddclasses("table","","catTable"),n=d.createElement("tr");d.appendChildren(n,d.createAddtextAddclasses("th","Title","theader"),d.createAddtextAddclasses("th","End Date","theader"),d.createAddtextAddclasses("th","Priority","theader"),d.createAddtextAddclasses("th","Complete","theader")),d.appendChildren(t,n);for(var r=0;r<e.todosInCategory.length;r++){const n=d.createElement("tr");d.appendChildren(n,d.createAddtextAddclasses("td",e.todosInCategory[r].title,"tbody"),d.createAddtextAddclasses("td",e.todosInCategory[r].endDate,"tbody"),d.createAddtextAddclasses("td",e.todosInCategory[r].priority,"tbody")),d.appendChildren(t,n)}const a=d.createAddtextAddclasses("button","Add","normalBtn","catBtn"),o=d.createAddtextAddclasses("button","Edit","normalBtn","catBtn"),c=d.createAddtextAddclasses("button","Delete","normalBtn","catBtn");d.appendToDisplayContent(t,a,o,c)})(e)},p=r("long term"),u={title:"gym",description:"keep it up",endDate:"never",priority:"yes"};p.add(u),a.addToContainer(p),l()}]);