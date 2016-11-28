"use strict";function aload(){var e="data-aload",t=window.document.querySelectorAll("["+e+"]");return void 0===t.length&&(t=[t]),[].forEach.call(t,function(t){t["LINK"!==t.tagName?"src":"href"]=t.getAttribute(e),t.removeAttribute(e)}),t}var animateScroll=function e(t,n,i,o,s,a){o=o||0;var r=document.documentElement,u=r.clientHeight,l="scrollMaxY"in window?window.scrollMaxY:r.scrollHeight-u,c=window.pageYOffset,g=c,d=isNaN(t)?t.getBoundingClientRect():0;"center"===s?(g+=isNaN(t)?d.top+d.height/2:t,g-=u/2,g-=o):"bottom"===s?(g+=d.bottom||t,g-=u,g+=o):(g+=d.top||t,g-=o),g=Math.max(Math.min(l,g),0);var m=g-c,f={targetY:g,deltaY:m,duration:n||0,easing:i in e.Easing?e.Easing[i]:e.Easing.linear,onFinish:a,startTime:Date.now(),lastY:c,step:e.step};window.requestAnimationFrame(f.step.bind(f))};animateScroll.Easing={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},animateScroll.step=function(){if(this.lastY!==window.pageYOffset&&this.onFinish)return void this.onFinish();var e=Math.min((Date.now()-this.startTime)/this.duration,1),t=this.targetY-(1-this.easing(e))*this.deltaY;window.scrollTo(window.scrollX,t),1!==e?(this.lastY=window.pageYOffset,window.requestAnimationFrame(this.step.bind(this))):this.onFinish&&this.onFinish()},aload();var menu=document.querySelector("#menu"),menuLinks=menu.querySelectorAll("a"),menuToggle=document.querySelector("#menu-toggle"),nav=document.querySelector("#nav"),toggleMenu=function(){menu.classList.toggle("dn"),menu.classList.toggle("db"),menu.classList.toggle("fadeIn"),menuToggle.classList.contains("is-active")?menuToggle.textContent="Menú":menuToggle.textContent="Cerrar",menuToggle.classList.toggle("is-active"),nav.classList.toggle("bg-light-purple-90"),nav.classList.toggle("bg-purple-80")};menuToggle.addEventListener("click",function(e){e.preventDefault(),toggleMenu()}),Array.prototype.forEach.call(menuLinks,function(e){e.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(e.currentTarget.getAttribute("href"));toggleMenu(),animateScroll(t,1e3,"easeInOutQuint",nav.offsetHeight)})});var goToLinks=document.querySelectorAll(".js-go-to"),closeMenuIfOpen=function(){menuToggle.classList.contains("is-active")&&(menu.classList.add("dn"),menu.classList.remove("db"),menu.classList.remove("fadeIn"),menuToggle.textContent="☰ Menú",menuToggle.classList.remove("is-active"))};Array.prototype.forEach.call(goToLinks,function(e){e.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(e.currentTarget.getAttribute("href"));closeMenuIfOpen(),animateScroll(t,1e3,"easeInOutQuint",nav.offsetHeight)})});var toggleBioLinks=document.querySelectorAll(".js-toggle-previous-sibling");Array.prototype.forEach.call(toggleBioLinks,function(e){e.addEventListener("click",function(e){e.preventDefault();var t=e.target,n=t.previousSibling;n.classList.contains("is-shown")?(t.textContent="Leer más",n.classList.add("dn"),n.classList.remove("fadeIn"),n.classList.remove("is-shown")):(t.textContent="Leer menos",n.classList.remove("dn"),n.classList.add("fadeIn"),n.classList.add("is-shown"))})});