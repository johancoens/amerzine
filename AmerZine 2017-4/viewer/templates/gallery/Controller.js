function GalleryController(){function a(){if(1===h.content.style_type&&n.show(),Magazine.device.isIE8){$("#galleryContainer",f.container).css("display","block");var a=$(".table",f.container)[0];TweenMax.to(a,.5,{css:{opacity:.3},delay:0,ease:Quad.easeOut});var b=$(".photos",f.container)[0];TweenMax.to(b,.5,{css:{opacity:.3},delay:0,ease:Quad.easeOut})}else{if(1!==h.content.style_type){var c={opacity:".3"};c[Magazine.device.getCssProperty("filter")]="blur(5px)",$(".table",f.container).css(c)}$("#galleryContainer",f.container).css("display","block").children("#gallery").startAnimation(Animation.scaleDownIn)}$("#galleryContainer",f.container).append("<div class='im-tp-gallery-nav'><div class='im-tp-gallery-next'></div><div class='im-tp-gallery-prev'></div></div>")}function b(){if(1===h.content.style_type&&n.hide(),Magazine.device.isIE8){var a=$(".table",f.container)[0];TweenMax.to(a,.5,{css:{opacity:1},delay:0,ease:Quad.easeOut});var b=$(".photos",f.container)[0];TweenMax.to(b,.5,{css:{opacity:1},delay:0,ease:Quad.easeOut}),$("#galleryContainer",f.container).css("display","none").children("#gallery").startAnimation(Animation.scaleUpOut)}else{if(1!==h.content.style_type){var c={opacity:"1"};c[Magazine.device.getCssProperty("filter")]="blur(0px)",$(".table",f.container).css(c)}$("#gallery",f.container).startAnimation(Animation.scaleUpOut,{},function(){$("#galleryContainer",f.container).css("display","none")})}}function c(){var a=!1;"top"==h.content.nav_type&&(h.content.nav_type="circle",a=!0),g.init(f.container,NavigationButtonType[h.content.nav_type.toUpperCase()]),g.setTop(a)}function d(a){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){var b=a.scrollTop(),c=Math.max(0,a[0].scrollHeight-Magazine.pages.height),d=100/(c/b);void 0!==g&&g.onScroll(b,b+Magazine.pages.height,a[0].scrollHeight),Math.floor(d/25)!=o&&(o=Math.floor(d/25),Magazine.tracker.trackEvent("Scroll",b>p?"Down":"Up",25*o+"%")),p=b,f.onScrollHandler(b)}}function e(){var a=new GalleryDelegate;return a.getAmount=function(){return null===h.content.images?0:Math.max(7,h.content.images.length)},Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?(1===h.content.style_type&&(a.onResizeHandler=function(a,b,c){if(h.content.images[c]){var d=h.content.images[c].image;if(null!==d){var e=d.width/d.height,f=Magazine.pages.height-60,g=Math.round(.8*Magazine.pages.width);f*e>g?b.css({width:g,height:Math.round(g/e),"margin-left":Math.round(.5*(Magazine.pages.width-g)),"margin-top":Math.round(.5*(Magazine.pages.height-Math.round(g/e)))}):b.css({width:Math.round(f*e),height:f,"margin-top":30,"margin-left":Math.round(.5*(Magazine.pages.width-Math.round(f*e)))})}}}),a.onClose=function(){b()},a.getViewItem=function(a,c,d){try{null==c&&(1===h.content.style_type?c=$(k):(c=$(j),c.children(".label").children("a.next").click(function(a){a.preventDefault(),l.next()}),c.children(".label").children("a.prev").click(function(a){a.preventDefault(),l.prev()}),c.children("a.im-ts-button-close").click(function(a){a.preventDefault(),b()}))),void 0===h.content.images[d]&&(d%=h.content.images.length);var e=h.content.images[d].image;null!==e&&(1===h.content.style_type?c.css({backgroundImage:"url('"+getBackgroundImage().execute(e.uri)+"')"}):c.css({backgroundImage:"url('"+getImageUrl().execute(e.uri,500,400,null,null,1)+"')"})),null!==h.content.images[d].title?c.find(".label").show().children(".description").html(h.content.images[d].title):1===h.content.style_type&&c.find(".label").hide();var f=h.content.images[d].action;null!==f?(f=new ActionModel(f),c.find(".im-ga-image-button").show().attr("href",f.href).attr("onclick",f.onclick).attr("target",f.target).html(h.content.images[d].label)):c.find(".im-ga-image-button").hide()}catch(a){}return c},1===h.content.style_type&&(a.getItemCssWithPosition=function(a,b,c,d,e){var f={};switch(c){case-2:f[Magazine.device.getCssProperty("transform")]="translate3d(-1000px, 0px, 0px) scale3d(.3, .3, 0.6)",f.opacity="0",f.display="block";break;case-1:f[Magazine.device.getCssProperty("transform")]="translate3d(-500px, 0px, 0px) scale3d(.4, .4, 0.6)",f.opacity=".5",f.display="block";break;case 0:f[Magazine.device.getCssProperty("transform")]="translate3d(0px, 0px, 1px) scale3d(1, 1, 1)",f.opacity="1",f.display="block";break;case 1:f[Magazine.device.getCssProperty("transform")]="translate3d(500px, 0px, 0px) scale3d(.4, .4, 0.6)",f.opacity=".5",f.display="block";break;case 2:f[Magazine.device.getCssProperty("transform")]="translate3d(1000px, 0px, 0px) scale3d(.2, .2, 0.6)",f.opacity="0",f.display="block";break;default:f.display="none"}return(Magazine.device.isIE8||Magazine.device.isIE9&&0!=c)&&(f.display="none"),f.zIndex=-1*Math.abs(c)+Math.ceil(.5*a.getTotalItems()),f})):(a.getItemCssWithPosition=function(a,b,c,d,e){var f={};switch(c){case-1:f[Magazine.device.getCssProperty("transform")]="translate3d("+(-window.innerWidth+e)+"px, 0px, 0px)",f.display="block";break;case 0:f[Magazine.device.getCssProperty("transform")]="translate3d("+e+"px, 0px, 0px)",f.display="block";break;case 1:f[Magazine.device.getCssProperty("transform")]="translate3d("+(window.innerWidth+e)+"px, 0px, 0px)",f.display="block";break;default:f.display="none"}return f},a.getFullscreenView=function(a){var b=$(m);return b.find("#fsGallery").html(a),b.find("a").click(function(){switch($(this).data("action")){case"next":l.next();break;case"prev":l.prev();break;case"share":break;case"close":l.close()}}),b},a.getFSViewItem=function(a,b,c){null==b&&(b=$("<div class='gallery_mobile'><div><p></p></div></div>")),null!=h.content.images[c].image&&b.css({backgroundImage:"url('"+Utils.viewHelper("getImageUrl",[h.content.images[c].image.uri,null,null,700])+"')"});var d=function(){var a=new ActionModel(h.content.images[c].action);b.find("p").show().append("<br />"),b.find("p").show().append($("<a class='button im-ts-button im-ga-image-button'></a>").attr("href",a.href).attr("onclick",a.onclick).attr("target",a.target).html(h.content.images[c].label))};return null!=h.content.images[c].title?(b.find("p").show().html(h.content.images[c].title),null!==h.content.images[c].action&&d()):(b.find("p").hide(),null!==h.content.images[c].action&&d()),b},a.getVisibleItems=function(){return 5}),a}var f,g,h=null,i=!0,j="<div><a class='im-ts-button-close button square-small close-button im-ts-button' href='#'><span class='im-sp im-sp-times'></span></a><a class='button im-ts-button im-ga-image-button'></a><div class='label'><a href='javascript:void(0);' class='button square im-ts-button prev'><span class='im-sp im-sp-arrow-left-2'></span></a><span></span><a href='javascript:void(0);' class='button square im-ts-button next'><span class='im-sp im-sp-arrow-right-2'></span></a><span class='description'></span></div></div>",k="<div><a class='button im-ts-button im-ga-image-button'></a><div class='label'><span class='description'></span></div></div>",l=null,m=null,n=null,o=0,p=0,q=this;this.scrollable=!0,this.init=function(a){f=a,Loader.load({files:[{type:LoadType.STRING,file:Config.themePathView+Config.theme+"/GalleryFullscreen.html"}],callback:function(a){var b=Hogan.compile(a.response);m=b.render()}})},this.willLoadView=function(a){},this.didLoadView=function(){null!=l?(l.reset(),l.setDelegate(e())):(l=new Gallery,l.init(e()),l.select(0)),1===h.content.style_type&&l.setNavigation(!0),l.render($("#gallery",f.container)),$(".photo",f.container).click(function(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE)l.show($(this).index()),a();else{if(null==m)return;l.fullscreen(!0,$(this).index())}}),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&(null!==h.content.nav_type&&void 0!==h.content.nav_type&&(g=new NavigationButtons,c(),g.onUp=function(){q.scrollTo(50-Magazine.pages.height),Magazine.tracker.trackEvent("Scroll","Click","Up")},g.onDown=function(){q.scrollTo(Magazine.pages.height-50),Magazine.tracker.trackEvent("Scroll","Click","Down")}),$("h2",f.container).hasTransparentBackground()&&$("h2",f.container).css({"padding-top":"0px","padding-bottom":"0px"}),h.content.background&&(f.getBackground().init([h.content.background]),f.container.prepend(f.getBackground().render()),f.getBackground().show()),1===h.content.style_type&&(f.container.addClass("style-2"),n=new TransparentOverlay,n.init(f.container),n.setOnClick(function(){b()}))),f.scanDirectives()},this.scrollTo=function(a){var b,c=$(".overflowscroll",f.container),e={y:c.scrollTop()};b=isNaN(a)?c.scrollTop()+a.offset().top-Magazine.pages.offset.top:c.scrollTop()+a,b=Math.max(0,Math.min(b,c[0].scrollHeight-c.outerHeight())),TweenLite.to(e,1,{y:b,ease:"easeInOutCubic",onUpdate:function(){c.scrollTop(e.y),d(c)}})},this.willLoad=function(){},this.didLoad=function(a){h=a},this.didAppear=function(){$(".overflowscroll",f.container).on("scroll mousewheel",function(){d($(this))}),d($(".overflowscroll",f.container))},this.willAppear=function(){},this.onHashChange=function(a){},this.onOrientationChange=function(a){},this.onResizeHandler=function(a){Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&$(".photos",f.container).css("max-height",Magazine.pages.height-50),i&&(Magazine.pages.height>$(".table",f.container).height()?f.container.removeClass("scrollable"):f.container.addClass("scrollable")),null!=l&&l.onResizeHandler(a),1!==h.content.style_type&&$("#gallery",f.container).css({"margin-top":Math.round((Magazine.pages.height-400)/2),"margin-left":"theme-2"!==Config.theme?Math.round((Magazine.pages.width-500)/2):Math.round((Magazine.pages.width-500-62)/2)})},this.onEndResizeHandler=function(a){Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&void 0!==g&&($(".overflowscroll",f.container)[0].scrollHeight>Magazine.pages.height?g.show():g.hide())},this.willDisappear=function(){l.close()},this.willOpenOverlay=function(){l.close()},this.didDisappear=function(){},this.render=function(a){Magazine.device.isIE8?a.style_type=0:a.style_type=parseInt(a.style_type||0)},this.destroy=function(){}}Loader.loadComplete();