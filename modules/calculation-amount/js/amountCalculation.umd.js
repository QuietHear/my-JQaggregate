/*
 * @LastEditors: aFei
 * @LastEditTime: 2022-12-06 09:17:57
*/
(function(n){typeof define=="function"&&define.amd?define(n):n()})(function(){"use strict";$(document).ready(()=>{let n=[1e4,5e3,1e3,100,50,20,10,5,1],s=[5,1],a=[5,1];function u(){n.forEach(t=>{$(".form form").append(`<div class="item">
            <span>${t}\u5143:</span>
            <input type="number" attr-num="${t}">
            <button class="reast">\u91CD\u7F6E</button>
            </div>`)}),s.forEach(t=>{$(".form form").append(`<div class="item">
            <span>${t}\u89D2:</span>
            <input type="number" attr-num="${t/10}">
            <button class="reast">\u91CD\u7F6E</button>
            </div>`)}),a.forEach(t=>{$(".form form").append(`<div class="item">
            <span>${t}\u5206:</span>
            <input type="number" attr-num="${t/100}">
            <button class="reast">\u91CD\u7F6E</button>
            </div>`)})}function i(){$(".form .item").each(function(){$(this).find("input").val(0)})}$("body").on("focus","input",function(){$(this).val()==="0"&&$(this).val("")}),$("body").on("blur","input",function(){$(this).val()===""&&$(this).val(0)}),$(".reast").on("click",function(){$(this).prev().val(0)}),$(".submit").on("click",function(){let t=0;$(".form .item").each(function(){t+=parseFloat($(this).find("input").attr("attr-num"))*parseInt($(this).find("input").val())}),t=Math.round(t*100)/100,$(".outPut .inner").append(`<p>
        <span class="title">\u7B2C${$(".outPut .inner p").length+1}\u4E2A--></span>
        <em class="first">${t}</em>
        +
        <input type="number" value="0">
        <em class="second hide"></em>
        <span class="hide">=</span>
        <em class="end hide">111</em>
        </p>`),$(".result").text(t)}),$(".reast-all").on("click",function(){i()}),$(".clear-all").on("click",function(){i(),$(".outPut .inner").html("")}),$(".compute-finally").on("click",function(){$(".outPut .inner p").each(function(){let t=parseFloat($(this).find(".first").text()),e=parseFloat($(this).find("input").val()),o=Math.round((t+e)*100)/100;$(this).find(".second").text(e),$(this).find(".end").text(o),$(this).find(".hide").each(function(){$(this).removeClass("hide")}),$(this).find("input").addClass("hide")})}),u(),i()})});