/*
 * @LastEditors: aFei
 * @LastEditTime: 2022-12-06 09:48:38
*/
(function(e){typeof define=="function"&&define.amd?define(e):e()})(function(){"use strict";let e=null,t,n;$("section .left").on("click",".tit b",function(){$(this).toggleClass("route"),$(this).closest(".tit").nextAll("ul").toggleClass("hide")}),$("html").on("mousewheel",function(){e===null&&(e=setInterval(function(){n=$(window).scrollTop(),n>=136?$("section").addClass("fixed"):$("section").removeClass("fixed")},10))}),setInterval(function(){t=$(window).scrollTop(),n!==void 0&&t===n&&(clearInterval(e),e=null,n=void 0)},3e3)});