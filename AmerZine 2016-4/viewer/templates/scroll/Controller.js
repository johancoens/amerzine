"use strict";function ScrollController(){function a(){var a=$(".controls",e.container);$(".nav li",a).removeClass("active"),$($(".nav li",a)[i]).addClass("active"),i<=0?$(".up",a).css("visibility","hidden"):$(".up",a).css("visibility","visible"),i>=f.content.scrollitem.length-1?$(".down",a).css("visibility","hidden"):$(".down",a).css("visibility","visible");var b=$(".controlsExtra",e.container);i<=0?$(".up2",b).css("visibility","hidden"):$(".up2",b).css("visibility","visible"),i>=f.content.scrollitem.length-1?$(".down2",b).css("visibility","hidden"):$(".down2",b).css("visibility","visible")}function b(){$("h2",e.container).hasTransparentBackground()?$("h2",e.container).css({"padding-top":"0px","padding-left":"0px","padding-bottom":"0px"}):$("h2",e.container).css({"padding-top":"","padding-left":"","padding-bottom":""}),$("h4",e.container).hasTransparentBackground()?$("h4",e.container).css({"padding-top":"0px","padding-left":"0px","padding-bottom":"0px"}):$("h4",e.container).css({"padding-top":"","padding-left":"","padding-bottom":""}),$(".paragraph",e.container).hasTransparentBackground()?$(".paragraph",e.container).css({"padding-top":"0px","padding-left":"0px","padding-bottom":"0px"}):$(".paragraph",e.container).css({"padding-top":"","padding-left":"","padding-bottom":""})}function c(){var a=new SubPage;a.template=Config.templatePathView+e.template+"/Details_scroll.html",a.data={title:f.content.scrollitem[i].title,subtitle:f.content.scrollitem[i].subtitle,description:f.content.scrollitem[i].description,video:f.content.scrollitem[i].youtube},e.pushPage(a)}function d(a){var b="<div><h2 class='im-ts-title-background'></h2><br /><h4 class='im-ts-subtitle-background'></h4><div class='scroll-wrapper'>";return b+="<div class='mytext text-block paragraph'></div>",b+=f.content.keep_image_ratio?"<img class='scroll-img im-ts-border-radius' {{#image.alt}}alt=\"{{image.alt}}\"{{/image.alt}}/>":"<div class='scroll-image im-ts-border-radius' style=''></div>",b+="</div></div>"}var e,f,g=null,h=!1,i=0;this.init=function(a){e=a},this.willLoadView=function(a){},this.didLoadView=function(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){f.content.background&&(e.getBackground().init([f.content.background]),e.container.prepend(e.getBackground().render()),e.getBackground().show());var c=new ScrollListDelegate;c.getHeight=function(){return Magazine.pages.height},c.getRowHeightForRow=function(a){return 600},c.getNumberRows=function(){return f.content.scrollitem?f.content.scrollitem.length:0},c.onChangedPosition=function(b){b!=i&&(h=!0,location.href="#!/"+e.alias+"/item/"+b,i=b),a()},Magazine.device.supportsTransform()?(c.useIteration=!1,c.iterationHandler=function(a,b,c){var d=(Math.round(100*(1-Math.abs(.6*(b-.4))))/100,Math.round(100*Math.abs(1e3*(b-.4)*(b-.4)))/100);a.getView().css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(d,0,0))}):c.useIteration=!1,c.getViewForRow=function(a,b){var c=!0,e=f.content.scrollitem[b];if(a||(c=!1,a=$(d())),e.subtitle?(a.children("h4").show().html(e.subtitle).attr("style",e.subtitle_style),c&&a.children("h4").hasTransparentBackground()?a.children("h4").css({"padding-top":"0px","padding-left":"0px","padding-bottom":"0px"}):c&&a.children("h4").css({"padding-top":"","padding-left":"","padding-bottom":""})):a.children("h4").hide().html(""),e.title?(a.children("h2").show().html(e.title).attr("style",e.title_style),c&&a.children("h2").hasTransparentBackground()?a.children("h2").css({"padding-top":"0px","padding-left":"0px","padding-bottom":"0px"}):c&&a.children("h2").css({"padding-top":"","padding-left":"","padding-bottom":""})):a.children("h2").hide().html(""),a.find(".paragraph").html(e.description).attr("style",e.paragraph_style),null!==e.image?(f.content.keep_image_ratio?$(a.find(".scroll-img")[0]).show().attr("src","").attr("src",Utils.viewHelper("getImageUrl",[e.image.uri,null,null,500])):$(a.find(".scroll-image")[0]).show().attr("style","").attr("style","background:url("+Utils.viewHelper("getImageUrl",[e.image.uri,null,null,500])+");"),a.find(".paragraph").css("width","").addClass("has-image")):(f.content.keep_image_ratio?$(a.find(".scroll-img")[0]).hide():$(a.find(".scroll-image")[0]).hide(),a.find(".paragraph").css({width:"auto","margin-right":"0px"}).removeClass("has-image")),e.youtube&&null!==e.youtube.id){var g=a.find(".scroll-wrapper"),h=g.find(".play-button");h.length>0&&h.remove();var i=document.createElement("a"),j=document.createTextNode("▶");i.setAttribute("href",e.video.href),i.setAttribute("onclick",e.video.onclick),i.setAttribute("target",e.video.target),i.setAttribute("class","play-button"),i.appendChild(j),g.append(i)}else a.find(".play-button").remove();return a.find(".paragraph").find(".dynamicForm").each(function(){"undefined"==typeof this.dynamicForm&&new DynamicForm(null,$(this))}),a},g=new ScrollList,g.init(c,function(a){e.onScrollHandler(a)}),g.useMouseScroll(!0),g.supportTouch(!0),g.useScroll(!1),g.load(),i?g.toViewNumber(i,!1):g.position(-30),a(),g.listenToRowChange=!0,$(".pageScroll",e.container).html(g.toString());var j=(new ScrollController($(".scrollController",e.container)),$(".controls",e.container));$(".up",j).bind("click",function(a){"visible"===$(a.target).css("visibility")&&location.replace("#!/"+e.alias+"/item/"+(i-1))}),$(".down",j).bind("click",function(a){"visible"===$(a.target).css("visibility")&&location.replace("#!/"+e.alias+"/item/"+(i+1))});var k=$(".controlsExtra",e.container);$(".up2",k).bind("click",function(a){"visible"===$(a.target).css("visibility")&&location.replace("#!/"+e.alias+"/item/"+(i-1))}),$(".down2",k).bind("click",function(a){"visible"===$(a.target).css("visibility")&&location.replace("#!/"+e.alias+"/item/"+(i+1))}),$(".controls a",e.container).click(function(){$(".pageScroll",e.container).addClass("tween"),setTimeout(function(){$(".pageScroll",e.container).removeClass("tween")},1200)});var l=$(".controlsContainer",e.container)[0];TweenMax.set(l,{css:{left:"-200",opacity:0}});var j=$(".controls",e.container)[0];TweenMax.set(j,{css:{left:"-200",opacity:0}});var m=$(".pageScroll",e.container)[0];TweenMax.set(m,{css:{top:"-1000"}}),b()}else{var n=e.container.find(".scroller");n.length>0&&n.bind("touchmove",function(a){e.onScrollHandler(n.children("div").first().offset().top*-1)})}},this.willLoad=function(){},this.didLoad=function(a){f=a},this.didAppear=function(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){var a=$(".controlsContainer",e.container)[0];TweenMax.to(a,1,{css:{left:"0",opacity:1},delay:1,ease:Quart.easeOut});var b=$(".controls",e.container)[0];TweenMax.to(b,1,{css:{left:"37",opacity:1},delay:1,ease:Quart.easeOut});var c=$(".pageScroll",e.container)[0];TweenMax.to(c,1,{css:{top:"0"},delay:0,ease:Quart.easeOut});var d=$(".downPuls",e.container)[0];TweenMax.to(d,2.5,{css:{top:"-40",opacity:0,scale:1.5},repeat:-1,delay:2,ease:Quart.easeOut});var f=function(){var a=$(".downPuls",e.container)[0];TweenMax.to(a,1,{css:{opacity:0},ease:Quart.easeOut,overwrite:"auto"})};$(".down",e.container).click(f),$(".scrollitem",e.container).click(f)}},this.willAppear=function(a){"undefined"!=typeof a.item?(i=parseInt(a.item),Magazine.device.size>=DeviceSize.PORTRAIT&&i&&g.toViewNumber(i,!1)):i=0,Magazine.device.size<DeviceSize.PORTRAIT&&"undefined"!=typeof a.item&&c()},this.onHashChange=function(b){if(i="undefined"!=typeof b.item?parseInt(b.item):0,Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){if(h)return void(h=!1);if(null!==g){g.listenToRowChange=!1;var d=0;i&&(d=i),g.toViewNumber(d,!0,function(){g.listenToRowChange=!0})}a()}else c()},this.onOrientationChange=function(a){},this.willDisappear=function(){},this.didDisappear=function(){},this.onResizeHandler=function(a){$(".controls",e.container).each(function(){var b=$(this),c=b.height();a.screen.height<c?b.css({top:"0px","margin-top":"0px"}):b.css({top:"65%","margin-top":.5*-c-100})})},this.destroy=function(){null!=g&&(g.release(),g=null)},this.render=function(a){if(a.scrollitem)for(var b in a.scrollitem){a.scrollitem[b].index=b,a.scrollitem[b].image?a.scrollitem[b].hasImage=!0:a.scrollitem[b].hasImage=!1;var c=new StyleModel(a.scrollitem[b].style);a.scrollitem[b].paragraph_style=c.get(["background","paragraph"]),a.scrollitem[b].video=new ActionModel({video:a.scrollitem[b].youtube}),a.scrollitem[b].title_style=c.get(["title"]),a.scrollitem[b].subtitle_style=c.get(["subtitle"]),a.scrollitem[b].m_subtitle_style=c.get(["mobile_title"]),a.scrollitem[b].m_subtitle_style=c.get(["mobile_subtitle"])}}}Loader.loadComplete();