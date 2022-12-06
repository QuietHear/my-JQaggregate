/*
 * @LastEditors: aFei
 * @LastEditTime: 2022-12-06 09:21:51
*/
(function(t){typeof define=="function"&&define.amd?define(t):t()})(function(){"use strict";var t={$carousel:$(".bigCarousel"),$msg:$(".bigCarousel .list"),$prv:$(".bigCarousel .prv-btn"),$next:$(".bigCarousel .next-btn"),$indicator:$(".bigCarousel .indicator"),itemNum:null,indexMax:null,itemWidth:null,beforePlace:null,nowPlace:null,INIT:null,start:function(){var s=this;this.itemNum=this.$msg.children(".item").length,this.indexMax=this.itemNum-1,this.itemWidth=parseInt(this.$carousel.css("width")),this.itemNum>2&&this.$msg.find(".item").each(function(i){i===0?$(this).addClass("top"):i===1?$(this).addClass("moveRight middle"):i===s.indexMax?$(this).addClass("moveLeft middle"):$(this).addClass("bottom")}),this.$indicator.css({width:this.itemNum*20+(this.itemNum-1)*10});for(var e=0;e<this.itemNum;e++)this.$indicator.append($("<li />",{"data-place":e,class:e===0?"active":"",css:{left:e*30}}));navigator.appName=="Microsoft Internet Explorer"&&navigator.appVersion.split(";")[1].replace(/[ ]/g,"")=="MSIE8.0"&&this.$indicator.find("li").each(function(i){$(this).css({left:30*i,background:"rgb(204,204,204)"})}),this.$carousel.length>0&&this.itemNum>4&&(this.INIT=setInterval(this.along.bind(this),5e3),this.addEvent())},numRule:function(s){return s>this.indexMax?s-this.indexMax-1:s<0?s+this.indexMax+1:s},calculation:function(s){this.beforePlace=parseInt(this.$indicator.find(".active").attr("data-place"));var e=s-this.beforePlace;e===-this.indexMax?e=1:e===this.indexMax&&(e=-1),e!==0&&(e===1?this.along():e===-1?this.back():this.jump(e))},along:function(){this.beforePlace=parseInt(this.$indicator.find(".active").attr("data-place")),this.$indicator.find("li").eq(this.beforePlace).removeClass("active"),this.$msg.find(".item").eq(this.numRule(this.beforePlace-2)).removeClass("bottom").css("animation","unset"),this.$msg.find(".item").eq(this.numRule(this.beforePlace-1)).removeClass("middle moveLeft").css("animation","unset"),this.$msg.find(".item").eq(this.beforePlace).removeClass("top").css("animation","unset"),this.$msg.find(".item").eq(this.numRule(this.beforePlace+1)).removeClass("middle moveRight").css("animation","unset"),this.$msg.find(".item").eq(this.numRule(this.beforePlace+2)).removeClass("bottom").css("animation","unset"),this.nowPlace=this.numRule(this.beforePlace+1),this.$indicator.find("li").eq(this.nowPlace).addClass("active"),this.$msg.find(".item").eq(this.numRule(this.nowPlace-2)).css("animation","leaveLeft .4s ease").css("-moz-animation","leaveLeft .4s ease").css("-webkit-animation","leaveLeft .4s ease").css("-o-animation","leaveLeft .4s ease").addClass("bottom"),this.$msg.find(".item").eq(this.numRule(this.nowPlace-1)).addClass("middle").css("animation","moveLeft .4s ease").css("-moz-animation","moveLeft .4s ease").css("-webkit-animation","moveLeft .4s ease").css("-o-animation","moveLeft .4s ease").addClass("moveLeft"),this.$msg.find(".item").eq(this.nowPlace).addClass("top").css("animation","topLeft .4s ease").css("-moz-animation","topLeft .4s ease").css("-webkit-animation","topLeft .4s ease").css("-o-animation","topLeft .4s ease"),this.$msg.find(".item").eq(this.numRule(this.nowPlace+1)).addClass("middle").css("animation","moveRight .4s ease").css("-moz-animation","moveRight .4s ease").css("-webkit-animation","moveRight .4s ease").css("-o-animation","moveRight .4s ease").addClass("moveRight"),this.$msg.find(".item").eq(this.numRule(this.nowPlace+2)).addClass("bottom")},back:function(){this.beforePlace=parseInt(this.$indicator.find(".active").attr("data-place")),this.$indicator.find("li").eq(this.beforePlace).removeClass("active"),this.$msg.find(".item").eq(this.numRule(this.beforePlace-2)).removeClass("bottom").css("animation","unset"),this.$msg.find(".item").eq(this.numRule(this.beforePlace-1)).removeClass("middle moveLeft").css("animation","unset"),this.$msg.find(".item").eq(this.beforePlace).removeClass("top").css("animation","unset"),this.$msg.find(".item").eq(this.numRule(this.beforePlace+1)).removeClass("middle moveRight").css("animation","unset"),this.$msg.find(".item").eq(this.numRule(this.beforePlace+2)).removeClass("bottom").css("animation","unset"),this.nowPlace=this.numRule(this.beforePlace-1),this.$indicator.find("li").eq(this.nowPlace).addClass("active"),this.$msg.find(".item").eq(this.numRule(this.nowPlace-2)).addClass("bottom"),this.$msg.find(".item").eq(this.numRule(this.nowPlace-1)).addClass("middle").css("animation","moveLeft .4s ease").css("-moz-animation","moveLeft .4s ease").css("-webkit-animation","moveLeft .4s ease").css("-o-animation","moveLeft .4s ease").addClass("moveLeft"),this.$msg.find(".item").eq(this.nowPlace).addClass("top").css("animation","topRight .4s ease").css("-moz-animation","topRight .4s ease").css("-webkit-animation","topRight .4s ease").css("-o-animation","topRight .4s ease"),this.$msg.find(".item").eq(this.numRule(this.nowPlace+1)).addClass("middle").css("animation","moveRight .4s ease").css("-moz-animation","moveRight .4s ease").css("-webkit-animation","moveRight .4s ease").css("-o-animation","moveRight .4s ease").addClass("moveRight"),this.$msg.find(".item").eq(this.numRule(this.nowPlace+2)).css("animation","leaveRight .4s ease").css("-moz-animation","leaveRight .4s ease").css("-webkit-animation","leaveRight .4s ease").css("-o-animation","leaveRight .4s ease").addClass("bottom")},jump:function(s){this.beforePlace=parseInt(this.$indicator.find(".active").attr("data-place")),this.$indicator.find("li").eq(this.beforePlace).removeClass("active"),this.$msg.find(".item").eq(this.numRule(this.beforePlace-2)).removeClass("bottom").css("animation","unset"),this.$msg.find(".item").eq(this.numRule(this.beforePlace-1)).removeClass("middle moveLeft").css("animation","unset"),this.$msg.find(".item").eq(this.beforePlace).removeClass("top").css("animation","unset"),this.$msg.find(".item").eq(this.numRule(this.beforePlace+1)).removeClass("middle moveRight").css("animation","unset"),this.$msg.find(".item").eq(this.numRule(this.beforePlace+2)).removeClass("bottom").css("animation","unset"),this.nowPlace=this.numRule(this.beforePlace+s),this.$indicator.find("li").eq(this.nowPlace).addClass("active"),this.$msg.find(".item").eq(this.numRule(this.nowPlace-2)).css("animation","leaveLeft .4s ease").css("-moz-animation","leaveLeft .4s ease").css("-webkit-animation","leaveLeft .4s ease").css("-o-animation","leaveLeft .4s ease").addClass("bottom"),this.$msg.find(".item").eq(this.numRule(this.nowPlace-1)).addClass("middle").css("animation","moveLeft .4s ease").css("-moz-animation","moveLeft .4s ease").css("-webkit-animation","moveLeft .4s ease").css("-o-animation","moveLeft .4s ease").addClass("moveLeft"),this.$msg.find(".item").eq(this.nowPlace).addClass("top").css("animation","topJump .4s ease").css("-moz-animation","topJump .4s ease").css("-webkit-animation","topJump .4s ease").css("-o-animation","topJump .4s ease"),this.$msg.find(".item").eq(this.numRule(this.nowPlace+1)).addClass("middle").css("animation","moveRight .4s ease").css("-moz-animation","moveRight .4s ease").css("-webkit-animation","moveRight .4s ease").css("-o-animation","moveRight .4s ease").addClass("moveRight"),this.$msg.find(".item").eq(this.numRule(this.nowPlace+2)).css("animation","leaveRight .4s ease").css("-moz-animation","leaveRight .4s ease").css("-webkit-animation","leaveRight .4s ease").css("-o-animation","leaveRight .4s ease").addClass("bottom")},addEvent:function(){this.$carousel.on({mouseenter:function(){clearInterval(this.INIT)}.bind(this),mouseleave:function(){this.INIT=setInterval(this.along.bind(this),5e3)}.bind(this)}),this.$prv.on("click",this.back.bind(this)),this.$next.on("click",this.along.bind(this)),this.$indicator.on("mouseenter","li",function(s){var e=s.currentTarget;this.calculation(parseInt($(e).attr("data-place")))}.bind(this))}};window.bigCarousel=t});