"use strict";function Scroll4Controller(){function a(a){var b=0;return $(o.container.find(".im-tp-sc-detailpage-mytext")[a]).children().each(function(){b+=$(this).outerHeight()}),b}function b(){var a=.5*$(".controlsContainer",o.container).innerHeight();$(".controlsContainer",o.container).css("margin-top",-a),$($(".nav li",$(".controls",o.container))[v]).addClass("active")}function c(){$(".im-sc-button-wrapper",o.container).css("display","block").startAnimation(Animation.fadeInDown,{delay:300})}function d(){o.container.find(".im-tp-sc-detailpage-item").attr("style","")}function e(a){for(var b=o.container.find(".im-tp-sc-detailpage-item"),c=0;c<p.content.scrollitem.length;c++)$(b[c]).removeClass("sc-before").removeClass("sc-next").removeClass("sc-active"),c===a?$(b[c]).addClass("sc-active"):c===a+1?$(b[c]).addClass("sc-next"):c===a-1&&$(b[c]).addClass("sc-before")}function f(b,c){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){if(y)return;d();var f=Magazine.device.getCssProperty("transitionend"),g=o.container.find(".im-tp-sc-detailpage.text-block"),i=p.content.scrollitem[b].style||{};if(void 0!=i.paragraph_background?i.appendTo(g,["paragraph_background"]):g.css("background",""),c)o.container.find(".im-tp-sc-detailpage-item").css("opacity",""),e(b),d(),h();else if(x<=b){y=!0;var j=$(o.container.find(".im-tp-sc-detailpage-item")[b]),k=o.container.find(".im-tp-sc-detailpage-item.sc-active"),m=o.container.find(".im-tp-sc-detailpage-item.sc-before").removeClass("sc-before");o.container.find(".im-tp-sc-detailpage-item.sc-next").removeClass("sc-next"),j.addClass("sc-active");var n=j.offset().top+$(".im-tp-sc-detailpage",o.container).scrollTop(),q={scrollTop:$(".im-tp-sc-detailpage",o.container).scrollTop()},r={onUpdate:function(){$(".im-tp-sc-detailpage",o.container).scrollTop(q.scrollTop)},onComplete:function(){$(".im-tp-sc-detailpage",o.container).scrollTop(0)},ease:"easeInOut"};r.scrollTop=0,TweenMax.to(q,.5,r);var s,t=function(){j.off(f),j.css(Magazine.device.getCssProperty("transition-duration"),"0s").css(Magazine.device.getCssProperty("transform"),""),k.removeClass("sc-active"),!c&&b<B-1?s.startAnimation(Animation.fadeInUp,{},function(){Magazine.device.requestAnimationFrame(function(){d()}),y=!1}):y=!1,b>0&&k.css(Magazine.device.getCssProperty("transition-duration"),"0s").addClass("sc-before")};k.css("opacity",0),Magazine.device.isIE8||Magazine.device.isIE9?(t(),d(),y=!1):j.on(f,t),b<B-1&&(s=j.addClass("sc-active").next().addClass("sc-next")),c?(e(b),h()):j.css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,-n,0))}else{var m=o.container.find(".im-tp-sc-detailpage-item.sc-before").css("opacity","1"),u="100%",v=$(".im-tp-sc-detailpage-header-image",m).height(),w=a(m.index()),z=$(o.container.find(".im-tp-sc-detailpage-mytext")[m.index()]);w+v<=Magazine.pages.height&&(u=Math.max(Magazine.pages.height-v,w+v+parseInt(z.css("padding-bottom"))+parseInt(z.css("padding-top"))));var A={height:u};A[Magazine.device.getCssProperty("transform")]=Magazine.device.getCssTranslate(0,0,0);var t=function(){m.off(f),e(b),m.css(Magazine.device.getCssProperty("transition-duration"),"0s"),m.css("height",""),Magazine.device.requestAnimationFrame(function(){d()})};Magazine.device.isIE8||Magazine.device.isIE9?(t(),y=!1):m.css(A).on(f,t)}}x=b,l(x)}function g(){(Magazine.device.isIE8||Magazine.device.isIE9)&&$(".nav-img, .nav-img-dn, .im-ts-title-background, .nav-text, .nav-text-dn",o.container).css("display","none")}function h(){w=!0,Magazine.device.isIE8&&$(".controlsWrapper",o.container).css("display","none"),$(".controlsWrapper",o.container).css("opacity",0),$(".im-tp-sc-detailpage",o.container).startAnimation(Animation.scaleUpIn),$(".close-button",o.container).startAnimation(Animation.scaleUpIn),$(".dt-arrows",o.container).startAnimation(Animation.fadeOut),$(".im-tp-sc-overview",o.container).startAnimation(Animation.scaleUpOut),c()}function i(){z=!0,w=!1,Magazine.device.isIE8&&$(".controlsWrapper",o.container).css("display","block"),$(".controlsWrapper",o.container).css("opacity",1),$(".im-tp-sc-detailpage",o.container).startAnimation(Animation.scaleDownOut),$(".close-button",o.container).startAnimation(Animation.scaleDownOut),$(".dt-arrows",o.container).startAnimation(Animation.fadeIn),$(".im-tp-sc-overview",o.container).startAnimation(Animation.scaleDownIn),t.onEndResizeHandler()}function j(){$(".nav",o.container).children().on("click",function(){var a=$(this).index();null!==r&&r.setPosition(a)})}function k(b){var c=a(b),d=$(o.container.find(".im-tp-sc-detailpage-mytext")[b]);return c+600<=Magazine.pages.height?Magazine.pages.height-600-(parseInt(d.css("padding-bottom"))+parseInt(d.css("padding-top"))):"100%"}function l(a){var b=k(a);isNaN(a)?$($(".im-tp-sc-detailpage-mytext")[x]).css("height",""):$($(".im-tp-sc-detailpage-mytext")[x]).height(b)}function m(){var a=o.container.find(".im-tp-sc-overview"),c=new TableGridDelegate;b(),c.getSize=function(){return{width:700,height:a.height()}},c.disableUpButton=function(){var a=Magazine.device.getCssProperty("transitionend");$(".down",o.container).css("opacity","0").on(a,function(){$(this).off(a),$(this).css("display","none")})},c.disableDownButton=function(){var a=Magazine.device.getCssProperty("transitionend");$(".up",o.container).css("opacity","0").on(a,function(){$(this).off(a),$(this).css("display","none")})},c.enableUpButton=function(){$(".down",o.container).css({opacity:1,display:"block"})},c.enableDownButton=function(){$(".up",o.container).css({opacity:1,display:"block"})},c.willChangePosition=function(a,b){var c=$(".controls",o.container);$(".nav li",c).removeClass("active"),$($(".nav li",c)[a]).addClass("active"),v=a},c.didChangePosition=function(a,b){if(!Magazine.device.isIE8&&!Magazine.device.isIE9){if(void 0!==p.content.scrollitem[a-1]){var c=$(".up-container",o.container);c.find("img").attr("src",""),c.find(".nav-text").html(p.content.scrollitem[a-1].title).attr("style",p.content.scrollitem[a-1].title_style),void 0!==p.content.scrollitem[a-1].image&&null!==p.content.scrollitem[a-1].image?(c.find("img").attr("src",Utils.viewHelper("getImageUrl",[p.content.scrollitem[a-1].image.uri,200,70,null,null,1])),c.find(".nav-text").removeClass("alt2"),c.find(".nav-img").removeClass("alt3").css("opacity",1)):(c.find(".nav-text").addClass("alt2"),c.find(".nav-img").addClass("alt3").css("opacity",0)),"string"==typeof p.content.scrollitem[a-1].title_style&&-1!==p.content.scrollitem[a-1].title_style.indexOf("transparent")?c.find(".nav-text").addClass("alt"):c.find(".nav-text").removeClass("alt"),null===p.content.scrollitem[a-1].title&&c.find(".nav-text").html(p.content.scrollitem[a-1].subtitle)}if(void 0!==p.content.scrollitem[a+1]){var d=$(".down-container",o.container);d.find(".nav-text-dn").html(p.content.scrollitem[a+1].title).attr("style",p.content.scrollitem[a+1].title_style),d.find("img").attr("src",""),void 0!==p.content.scrollitem[a+1].image&&null!==p.content.scrollitem[a+1].image?(d.find("img").attr("src",Utils.viewHelper("getImageUrl",[p.content.scrollitem[a+1].image.uri,200,70,null,null,1])),d.find(".nav-text-dn").removeClass("alt2"),d.find(".nav-img-dn").removeClass("alt3").css("opacity",1)):(d.find(".nav-text-dn").addClass("alt2"),d.find(".nav-img-dn").addClass("alt3").css("opacity",0)),"string"==typeof p.content.scrollitem[a+1].title_style&&-1!==p.content.scrollitem[a+1].title_style.indexOf("transparent")?d.find(".nav-text-dn").addClass("alt"):d.find(".nav-text-dn").removeClass("alt"),null===p.content.scrollitem[a+1].title&&d.find(".nav-text-dn").html(p.content.scrollitem[a+1].subtitle)}}},c.getViewByIndex=function(a,b){return a=$(q.render(p.content.scrollitem[b])),a.scanDirectives(o),a},c.onRender=function(a,b){1==p.content.scrollitem.length&&($(o.container.find(".controlsWrapper").css("display","none")),$(o.container.find(".dt-arrows").css("display","none")));var c=IntroAnimation.contentType,d=IntroAnimation.textType,e=(IntroAnimation.duration,IntroAnimation.textDelay),f=IntroAnimation.contentDelay;a.css("margin-top",(550-a.innerHeight())/2),$(".im-ts-title-background",a).hasTransparentBackground()?$(".im-ts-title-background",a).css("margin-top",-$(".im-ts-title-background",a).outerHeight()+"px"):$(".im-ts-title-background",a).css("margin-top","");var g=$(a).children();if(1==z&&1==A){g.startAnimation(c).css(Magazine.device.getCssProperty("animation-delay"),(0+1)*f+"ms").css(Magazine.device.getCssProperty("AnimationDuration"),IntroAnimation.duration),$(this).hasClass("text-block")&&$(this).children().each(function(a){$(this).startAnimation(d).css(Magazine.device.getCssProperty("animation-delay"),(a+3)*e+"ms")}),z=!1}},c.amount=p.content.scrollitem.length,c.spacing=10,c.getCellSize=function(){return{width:700,height:550}},c.startTransform="perspective(500) rotateY(170deg)",r=new TableGrid,r.init(a,c),r.setPosition(0),c.didChangePosition(0)}function n(a){v=a;var b=new SubPage;p.content.scrollitem.slice(0).splice(v,1),b.data={title:p.content.scrollitem[v].title,description:p.content.scrollitem[v].description,image:p.content.scrollitem[v].alt},null!==p.content.scrollitem[v].description&&o.pushPage(b)}var o,p,q,r,s,t=this,u=null,v=0,w=!1,x=0,y=!1,z=!0,A=!0,B=0;this.init=function(a){o=a},this.onLoad=function(a){Loader.loadFiles([Config.templatePathView+o.template+"/overview.html",Config.templatePathView+o.template+"/detail.html"],function(b){q=Hogan.compile(b[0].response),s=Hogan.compile(b[1].response),a()})},this.willLoadView=function(a){},this.didLoadView=function(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){o.container.find(".im-tp-sc-detailpage").append(s.render(p.content)),m(),j(),g(),p.content.background&&(o.getBackground().init([p.content.background]),o.container.prepend(o.getBackground().render()),o.getBackground().show()),o.scanDirectives(),$(".up",o.container).on("click",function(){null!==r&&r.down()}),$(".down",o.container).on("click",function(){null!==r&&r.up()}),$(".sc-next",o.container).on("click",function(a){y&&a.preventDefault()})}else{$(o.container.find(".mobile-header-background").css("height","53px"));for(var a=0;a<=p.content.scrollitem.length-1;a++)null===p.content.scrollitem[a].description&&$(o.container.find(".arrow")[a]).css("display","none");var b=o.container.find(".scroller");b.length>0&&b.bind("touchmove",function(a){o.onScrollHandler(-1*b.children("div").first().offset().top)})}},this.willLoad=function(){},this.didLoad=function(a){p=a},this.didAppear=function(a){void 0!==a.item?f(parseInt(a.item),!0):w&&i()},this.willAppear=function(a){b()},this.up=function(){var a=$(".scroll-overlay",o.container)[v];w&&$(a).scrollTop()+$(a).outerHeight()<a.scrollHeight||v<p.content.scrollitem.length-1&&location.replace("#!/"+o.alias+"/item/"+(v+1))},this.down=function(){var a=$(".scroll-overlay",o.container)[v];w&&$(a).scrollTop()>0||v>0&&location.replace("#!/"+o.alias+"/item/"+(v-1))},this.onHashChange=function(a){Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?($(".im-sc-button-wrapper",o.container).startAnimation(Animation.fadeIn,{delay:600}),void 0!==a.item?f(parseInt(a.item),!w):i()):void 0!==a.item&&n(a.item)},this.onOrientationChange=function(a){},this.willDisappear=function(){},this.didDisappear=function(){},this.onEndResizeHandler=function(a){r&&r.onResize()},this.onResizeHandler=function(a){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){l(x);var b=-$(".im-tp-sc-container").height()*v;$(".scrollView",o.container).css("top",b),w&&$(".scroll-overlay",o.container).height(Magazine.pages.height-400)}},this.onSwitchSize=function(){w&&Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE&&n(x)},this.destroy=function(){null!==u&&(u.release(),u=null),$(".nav",o.container).children().off("click")},this.render=function(a){a.urlbase="#!/"+o.alias;for(var b=0,c=0;c<a.scrollitem.length;c++){a.scrollitem[c].alt=a.scrollitem[c].alt||a.scrollitem[c].image,a.scrollitem[c].nextItem=b<a.scrollitem.length?b:0,a.scrollitem[c].prevItem=b>0?b-1:0,a.scrollitem[c].hasPrevButton=0!==b,a.scrollitem[c].description?a.scrollitem[c].action=new ActionModel(a.scrollitem[c].action||"#!/"+o.alias+"/item/"+b++):a.scrollitem[c].action=new ActionModel,a.scrollitem[c].index=c,a.scrollitem[c].url="#!/"+o.alias,c<a.scrollitem.length&&(a.scrollitem[c].next=a.scrollitem[c+1]),c>0&&(a.scrollitem[c].previous=a.scrollitem[c-1]);var d=new StyleModel(a.scrollitem[c].style);a.scrollitem[c].title_style=d.get(["title","title_background"]),a.scrollitem[c].m_title_background=d.get(["m_title_background"]),a.scrollitem[c].m_title_style=d.get(["m_title"]),a.scrollitem[c].subtitle_style=d.get(["subtitle"]),a.scrollitem[c].m_subtitle_style=d.get(["m_subtitle"]),a.scrollitem[c].description_style=d.get(["paragraph","paragraph_background"]),a.scrollitem[c].m_description_style=d.get(["m_paragraph","m_paragraph_background"]),a.scrollitem[c].has_paragraph=null!==a.scrollitem[c].subtitle||null!==a.scrollitem[c].intro}B=b}}Loader.loadComplete();