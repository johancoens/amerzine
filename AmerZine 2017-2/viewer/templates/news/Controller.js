function NewsController(){function a(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&k.content.news&&k.content.news.length)for(var a=0;a<k.content.news.length;a++){var b=$(".newsItem",i.container),c=b.find(".newsContent");1===k.content.news[a].is_background&&k.content.news[a].image&&($(b[a]).addClass("checked"),$(c[a]).find("img").remove(),$(c[a]).css("background-image",'url("'+Config.magazine_url+k.content.news[a].image.uri+'")')),null===k.content.news[a].title&&($(b[a]).find(".im-ts-subtitle-background").remove(),$(c[a]).find(".paragraph").css("margin-top","58px"))}}function b(){"undefined"!=typeof l.item?f():1==n&&e()}function c(){j.each(function(a){$(this).css("opacity",.2).css(q,"100ms")}),$(".im-ts-title-background",i.container).css("opacity",.2).css(q,"100ms")}function d(){j.each(function(a){$(this).css("opacity",1).css(q,"600ms")}),$(".im-ts-title-background",i.container).css("opacity",1).css(q,"600ms")}function e(){if(n=!1,Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){d();var a=$(".im-news-overlay-container",i.container)[0];$(a).startAnimation(Animation.scaleDownOut)}else i.subPagesLength()>0&&i.getSubPages()[i.subPagesLength()-1].hide()}function f(){if(n=!0,Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){c();var a=$(".im-news-overlay-container",i.container);a.html(g()),a.find(".dynamicForm").each(function(){Console.log("News: Create form"),new DynamicForm(null,$(this))}),Magazine.device.isIE8&&setTimeout(function(){m.onResizeHandler(Magazine.device)},500),m.onResizeHandler(Magazine.device),$(a).startAnimation(Animation.bunnyScaleUpIn).css(q,"200ms")}else{i.subPagesLength()>0&&i.popPage();var b=new SubPage;setTimeout(function(){b.onHashChange=m.onHashChange},100),b.template=Config.templatePathView+i.template+"/Details_news.html";var d=null;"object"==typeof Magazine.social&&(d=Magazine.social.getButtonViews().join("")),b.data={title:k.content.news[l.item].title,description:k.content.news[l.item].description,intro:k.content.news[l.item].intro,datetext:k.content.news[l.item].datetext,social:!k.content.social_disabled&&d},i.pushPage(b)}}function g(){var a=null;"object"==typeof Magazine.social&&(a=Magazine.social.getButtonViews().join(""));var b=k.content.news[l.item];return b.urlbase="#!/"+i.alias,b.imageurl=Config.magazine_url+"/images",b.social=!k.content.social_disabled&&a,b.documentUrl=escape(window.location.href),b.titleUrl=escape(b.title),b.social_disabled=k.content.social_disabled,o.render(b)}function h(){this.init=function(){this.url={},1==this.data_type&&null!==this.action?(this.action=new ActionModel(this.action),this.label=this.label?this.label:Translate.getLabel("btn_more")):(this.label=Translate.getLabel("btn_more"),this.action={href:"#!/"+i.alias+"/item/"+this.index})}}var i,j,k=!1,l=null,m=this,n=!1,o=({facebook:Config.imagePath+"theme/socialmedia/facebookIcon.svg",twitter:Config.imagePath+"theme/socialmedia/twitterIcon.svg",google:Config.imagePath+"theme/socialmedia/googleIcon.svg",linkedin:Config.imagePath+"theme/socialmedia/linkedinIcon.svg"},Hogan.compile('<div class="overlayHeader im-ts-subtitle-background"><h3>{{{title}}}</h3><a class="button im-ts-button square-small close-button" href="{{urlbase}}"><span class="im-sp im-sp-times"></span></a><div class="clear"></div></div><div class="overlayContent overlay im-ts-overlay"><div class="topBar"><span class="date"><p>{{datetext}}</p></span>{{^social_disabled}}{{#social}}<span class="share"><div class="share-container">{{{social}}}</div></span>{{/social}}{{/social_disabled}}<div class="clear"></div></div>{{#image}}<img style="float: right; margin: 15px 0 15px 15px; width: 100px;" src="{{Config.magazine_url}}{{image.uri}}" {{#image.alt}}alt="{{image.alt}}"{{/image.alt}}/>{{/image}}<div class="paragraph">{{^description}}{{{intro}}}{{/description}}{{{description}}}</div><div class="clear"></div></div>')),p=(IntroAnimation.contentType,IntroAnimation.textType,IntroAnimation.duration,IntroAnimation.textDelay),q=(IntroAnimation.contentDelay,Magazine.device.getCssProperty("animation-delay")),r=0;this.init=function(a){i=a},this.willLoadView=function(a){l=a},this.didLoadView=function(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE)k.content.background&&(i.getBackground().init([k.content.background]),i.container.prepend(i.getBackground().render()),i.getBackground().show()),j=$(".newsItem",i.container),j.length>0&&(CSSPlugin.defaultTransformPerspective=800,j.each(function(){$(this).css("opacity",0)}),$(".close-button",i.container).click(e),$("#title",i.container).length>0&&$($("#title",i.container)[0]).css("opacity",0)),$("h1",i.container).length>0&&$("h1",i.container).hasTransparentBackground()&&$("h1",i.container).css({"padding-top":"0px","padding-bottom":"0px"}),Magazine.device.isIE8&&j.each(function(){var a=$("h5",this);a.css("max-width",280-(a.outerWidth()-a.width())+"px")}),i.scanDirectives(),a();else{i.scanDirectives();var b=i.container.find(".scroller");b.length>0&&b.bind("touchmove",function(a){i.onScrollHandler(b.children("div").first().offset().top*-1)})}},this.willLoad=function(){},this.didLoad=function(a){k=a},this.didAppear=function(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&i.isFirstView()){CSSPlugin.defaultTransformPerspective=800,j.each(function(a){$(this).startAnimation("flipInY").css(q,.5*a*p+"ms").css("opacity",1)});var a=$("#title",i.container);a.length>0&&a.startAnimation("fadeIn").css(Magazine.device.getCssProperty("animation-delay"),p+"ms").css("opacity",1)}b()},this.willAppear=function(a){l=a},this.onHashChange=function(a){l=a,b()},this.onResizeHandler=function(a){var b=[];$(".alignCenter",i.container).each(function(c){var d=$(this),e=$(".im-news-overlay-container",i.container);r=d.height(),b[c]=r,0!==r?a.screen.height<r?d.addClass("myClass"):(d.removeClass("myClass"),d.css({top:"50%","margin-top":.5*-r})):e.css({top:"10px","margin-top":.1*a.screen.height})}),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&j&&a.screen.height<640&&j.each(function(a){var b=$(this).find(".newsContent"),c=$(this).find(".newsIntro").outerHeight(),d=b.find(".paragraph");d.length>0&&(d[0].scrollHeight>c?d.css("overflow-y","scroll"):d.css("overflow-y","hidden"))})},this.onOrientationChange=function(){},this.willDisappear=function(){},this.didDisappear=function(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&j)try{j.each(function(a){$(this).css("opacity",1)}),$("#title",i.container).length>0&&$($("#title",i.container)[0]).css("opacity",1)}catch(a){Console.error(a)}},this.destroy=function(){},this.render=function(a){if(a.news&&a.news.length){for(var b in a.news)$.extend(a.news[b],new h),a.news[b].index=b,a.news[b].init(),a.news[b].has_button=!0,null==a.news[b].description&&1!=a.news[b].data_type&&(a.news[b].has_button=!1);for(var c=0;c<a.news.length;c++){var d=new StyleModel(a.news[c].style);a.news[c].title_style=d.get(["title","title_background"]),a.news[c].m_title_style=d.get(["m_title"]),a.news[c].m_subtitle_style=d.get(["m_subtitle"]),a.news[c].m_bg_style=d.get(["m_background"]),a.news[c].paragraph_style=d.get("paragraph"),a.news[c].m_paragraph_style=d.get("m_paragraph"),a.news[c].paragraph_style_bg=d.get("paragraph_background"),a.news[c].m_paragraph_style_bg=d.get("m_paragraph_background")}}}}Loader.loadComplete();