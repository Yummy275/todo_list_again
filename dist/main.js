!function(t){var e={};function n(d){if(e[d])return e[d].exports;var a=e[d]={i:d,l:!1,exports:{}};return t[d].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,d){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:d})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(d,a,function(e){return t[e]}.bind(null,a));return d},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const d={createElement:t=>document.createElement(t),addClassName:(t,e)=>{e.classList.add(t)},changeTextContent:(t,e)=>{e.textContent=t},setEventListenerClick:(t,e)=>{t.addEventListener("click",e)},createAddtextAddclasses:(t,e,...n)=>{const d=document.createElement(t);for(var a of(d.textContent=e,n))d.classList.add(a);return d},appendChildren:(t,...e)=>{for(var n of e)t.appendChild(n)},appendToDisplayContent:(...t)=>{for(var e of t)document.getElementById("displayContent").appendChild(e)},clearDisplay:()=>{document.getElementById("displayContent").innerHTML=""}};function a(t){let e=[];return{title:t,todosInCategory:e,add:t=>{e.push(t)}}}const r=(()=>{let t=[];return{container:t,addToContainer:e=>{t.push(e)}}})(),o=t=>{l(t)},s=()=>{const t=a(prompt("What is the name of the new category?"));r.addToContainer(t),c()},c=()=>{d.clearDisplay(),(()=>{const t=d.createAddtextAddclasses("div","","catDiv");for(var e=0;e<r.container.length;e++){const n=d.createAddtextAddclasses("button",r.container[e].title,"categoryLink");n.addEventListener("click",o.bind(event,r.container[e])),t.appendChild(n)}const n=d.createAddtextAddclasses("button","Add","normalBtn","catBtn");d.setEventListenerClick(n,s);const a=d.createAddtextAddclasses("button","Edit","normalBtn","catBtn"),c=d.createAddtextAddclasses("button","Delete","normalBtn","catBtn");d.appendChildren(t,n,a,c),d.appendToDisplayContent(t)})()},l=t=>{d.clearDisplay(),(t=>{const e=d.createAddtextAddclasses("table","","catTable"),n=d.createElement("tr");d.appendChildren(n,d.createAddtextAddclasses("th","Title","theader"),d.createAddtextAddclasses("th","End Date","theader"),d.createAddtextAddclasses("th","Priority","theader"),d.createAddtextAddclasses("th","Complete","theader")),d.appendChildren(e,n);for(var a=0;a<t.todosInCategory.length;a++){const n=d.createElement("tr");d.appendChildren(n,d.createAddtextAddclasses("td",t.todosInCategory[a].title,"tbody"),d.createAddtextAddclasses("td",t.todosInCategory[a].endDate,"tbody"),d.createAddtextAddclasses("td",t.todosInCategory[a].priority,"tbody")),d.appendChildren(e,n)}const r=d.createAddtextAddclasses("button","Add","normalBtn","catBtn"),o=d.createAddtextAddclasses("button","Edit","normalBtn","catBtn"),s=d.createAddtextAddclasses("button","Delete","normalBtn","catBtn");d.appendToDisplayContent(e,r,o,s)})(t)},i=a("long term"),p={title:"gym",description:"keep it up",endDate:"never",priority:"yes"};i.add(p),r.addToContainer(i),c()}]);