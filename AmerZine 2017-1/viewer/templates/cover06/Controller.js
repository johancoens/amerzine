function Cover06Controller(){function a(){Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?(d.getBackground().init([e.content.background]),d.container.prepend(d.getBackground().render()),d.getBackground().show()):(d.getBackground().init([e.content.alt||e.content.background]),d.container.find(".im-tp-m1-header").prepend(d.getBackground().render()),d.getBackground().show())}function b(){var a=$container.scrollTop(),b=c(),e=100/(b/a);if(0!==b&&("undefined"!=typeof f&&null!==f&&f.onScroll(a,a+Magazine.pages.height,$container[0].scrollHeight),Math.floor(e/25)!=i&&(i=Math.floor(e/25),Magazine.tracker.trackEvent("Scroll",a>_scrollPosition?"Down":"Up",25*i+"%")),_scrollPosition=a,Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE&&d.onScrollHandler(a),!Magazine.device.SUPPORT_TOUCH&&Magazine.device.browser!==DeviceBrowser.IE&&g)){var h=.2,j=$(this).scrollTop()*h,k=$(this).scrollTop()*(h+.2);$(".background",$(this)).css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,j)),$(".im-absolute-view",$(this)).css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,k))}}function c(){return"undefined"!=typeof $container?Math.max(0,$container[0].scrollHeight-Magazine.pages.height):0}var d,e,f,g,h=null,i=0,j=null,k=Magazine.pages.height,l=300;this.init=function(a){d=a},this.willLoadView=function(a){d.container.addClass("start")},this.didLoadView=function(){if(d.scanDirectives(),a(),null===h){var c=d.container.find(".im-pg-text");h=(new AbsoluteView).init(c),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?(h.setPosition(e.content.margin),"auto"!==c.css("right")&&c.addClass("align-right")):h.setPosition("center center")}Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE&&($container=$(".im-tp-m1-container",d.container).on("mousewheel scroll",b));var f=d.container.find(".im-pg-text");f.find(".im-ts-title-background").hasTransparentBackground()&&f.find(".im-ts-title-background").css("padding","0"),f.find(".im-ts-subtitle-background").hasTransparentBackground()&&f.find(".im-ts-subtitle-background").css("padding","0"),f.find(".text-block").hasTransparentBackground()&&f.find(".im-ts-paragraph").css("padding","0"),null==e.content.item&&d.container.addClass("no-items");var g=Magazine.device.getCssProperty("animation-delay");d.container.find(".im-pg-text").children().each(function(a){$(this).css(g,.1*a+"s")})},this.willLoad=function(){},this.didLoad=function(a){e=a},this.didAppear=function(){d.isFirstView()&&(d.container.find(".im-pg-text").children().css({opacity:"1"}),d.container.find(".im-pg-text").children().each(function(a){"br"!=this.tagName&&($(this).hasClass("im-media")?$(this).startAnimation(Animation.fadeInUp):$(this).startAnimation(Animation.fadeInUp,{display:"inline-block"}))}),d.handleAlignments(),this.onResizeHandler(Magazine.device),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&($(".group-of-highlights",d.container).each(function(){var a=$(this).children(".group-of-highlights-image");a.length>0?a.height(Math.max(150,$(this).height())):$(this).height()<150&&$(this).height(150)}),Magazine.device.isIE8||(j=new ScrollHandler,j.height=Magazine.pages.height,j.init(d.container,$(".im-tp-m1-scrollable",d.container)),"none"!==e.content.nav_type&&null!==e.content.nav_type&&"undefined"!=typeof e.content.nav_type&&(f=new NavigationButtons,f.init($(".im-tp-m1-container",d.container),NavigationButtonType[e.content.nav_type.toUpperCase()]),f.setScrollHandler(j),null!=f&&(j.canScroll()?f.show():f.hide()))),d.container.removeClass("start"),d.container.find(".im-tp-m1-animation").each(function(a){a<10?$(this).css(Magazine.device.getCssProperty("transform"),"rotateY(0deg)").css("opacity",1).css(Magazine.device.getCssProperty("transition-delay"),a*l+"ms"):$(this).css("opacity",1).css(Magazine.device.getCssProperty("transform"),"rotateY(0deg)").css(Magazine.device.getCssProperty("transition-duration"),"0s")}),d.container.find(".group-of-highlights-image").each(function(a){a<10?$(this).css("opacity",1).css(Magazine.device.getCssProperty("transition-delay"),a*l+400+"ms"):$(this).css("opacity",1).css(Magazine.device.getCssProperty("transition-duration"),"0s")}),d.container.find(".highlights-text .im-ts-title").each(function(a){a<10?$(this).css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,0,0)).css("opacity",1).css(Magazine.device.getCssProperty("transition-delay"),a*l+400+"ms"):$(this).css("opacity",1).css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,0,0)).css(Magazine.device.getCssProperty("transition-duration"),"0s")}),d.container.find(".highlights-text .im-ts-subtitle").each(function(a){a<10?$(this).css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,0,0)).css("opacity",1).css(Magazine.device.getCssProperty("transition-delay"),a*l+400+"ms"):$(this).css("opacity",1).css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,0,0)).css(Magazine.device.getCssProperty("transition-duration"),"0s")}),null!==e.content.item&&(k>$(".im-tp-m1-highlight",d.container).height()*d.container.find(".im-tp-m1-highlight").length?d.container.find(".im-tp-m1-fill-div").height(Magazine.pages.height-$(".im-tp-m1-highlight",d.container).height()*d.container.find(".im-tp-m1-highlight").length+"px"):d.container.find(".im-tp-m1-fill-div").height(0))))},this.willAppear=function(a){Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE&&this.onResizeMobile()},this.onHashChange=function(a){},this.onOrientationChange=function(a){},this.willDisappear=function(){},this.didDisappear=function(){},this.onResizeHandler=function(a){if(a.size>DeviceSize.MOBILE_LANDSCAPE){var b;if(b=Magazine.device.isIE8?{width:Magazine.pages.width-200,left:200}:{width:Magazine.pages.width-400,left:400},1==e.content.alignment)if("bottom"!=Assets.navigationBar.align[Magazine.device.size]){var c=Assets.navigationBar.size[Magazine.device.size][0];b.left=-Math.round(.5*c)}else b.left=0;null!==e.content.item&&(d.container.children(".im-tp-m1-intro").css("width",b.width).css("left",b.left+"px"),Magazine.pages.height>$(".im-tp-m1-highlight",d.container).height()*d.container.find(".im-tp-m1-highlight").length?d.container.find(".im-tp-m1-fill-div").height(Magazine.pages.height-$(".im-tp-m1-highlight").height()*d.container.find(".im-tp-m1-highlight").length+"px"):d.container.find(".im-tp-m1-fill-div").height(0))}else this.onResizeMobile();null!==j&&(j.height=Magazine.pages.height,j.onResizeHandler(a),"undefined"!=typeof f&&(j.canScroll()?f.show():f.hide()))},this.onEndResizeHandler=function(a){},this.destroy=function(){h=null,null!==j&&(j.release(),j=null)},this.onResizeMobile=function(){var a,b,c=d.container.find(".im-absolute-view").outerHeight()+40,f=Math.min(.5*Magazine.pages.width,300);null!==e.content.image&&(b=e.content.image.width>f?{width:f+"px",height:Math.round(f/e.content.image.width*e.content.image.height)+"px"}:{width:e.content.image.width+"px",height:e.content.image.height+"px"},$(".im-pg-text .im-media",d.container).css(b)),$(".group-of-highlights",d.container).length>0&&$(".group-of-highlights",d.container).each(function(){if(!$(this).hasClass("no-text")){var a=Math.max(116,$(this).outerHeight());$(".im-media",this).css({width:116,height:a})}}),a=null===e.content.item?Magazine.pages.height:.8*Magazine.pages.height,c>=a?(d.container.find(".im-tp-m1-header").css("height",c),$(".background",d.container).css(Magazine.device.getCssProperty("transform"),""),$(".im-absolute-view",d.container).css(Magazine.device.getCssProperty("transform"),""),g=!1):g=!0},this.render=function(a){if(a.action=new ActionModel(a.action),null!==a.image&&(a.image.width>300?(a.image_height=Math.round(300/a.image.width*a.image.height),a.image_width=300):(a.image_height=a.image.height,a.image_width=a.image.width)),a.item)for(var b=0;b<a.item.length;b++){var c=new StyleModel(a.item[b].style);a.item[b].title_style=c.get("title"),a.item[b].subtitle_style=c.get("subtitle"),a.item[b].background_style=c.get("background"),a.item[b].mobile_title_style=c.get(["title","mobile-title"]),a.item[b].mobile_subtitle_style=c.get(["subtitle","mobile-subtitle"]),a.item[b].mobile_background_style=c.get(["background","mobile-background"]),a.item[b].decription_style=c.get("description"),a.item[b].action=new ActionModel(a.item[b].action),a.item[b].no_text=null===a.item[b].title&&null===a.item[b].subtitle}}}Loader.loadComplete();