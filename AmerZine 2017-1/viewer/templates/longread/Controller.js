function LongreadController(){function a(){w=q,h()}function b(){w&&g()}function c(a){a=a||window.event,a.preventDefault&&a.preventDefault(),a.returnValue=!1}function d(a){for(var b=x.length;b--;){var d="number"==typeof a.which?a.which:a.keyCode;if(9==d||40==d)return v||r.down(Magazine.pages.height-50),void c(a);if(d===x[b])return void c(a)}}function e(){l.container.hasClass("p-mobile")&&o.hasClass("intro-animation")?l.onScrollHandler(40):l.onScrollHandler(0)}function f(a){c(a),e()}function g(){l.container.find(".im-tp-lr-container").css("overflow","hidden"),l.container.on("touchstart",function(a){"use strict";try{y=a.originalEvent.touches[0].pageX}catch(a){}}),l.container.on("touchmove",function(a){try{z-=a.originalEvent.touches[0].pageY,i(a,z),y=a.originalEvent.touches[0].pageY}catch(a){}}),l.container.on("mousewheel scroll",f),document.onkeydown=d,q=!0}function h(){l.container.find(".im-tp-lr-container").css("overflow-y","scroll"),l.container.off("mousewheel scroll",f),document.onkeydown=null,q=!1}function i(a,b){var c=p.scrollTop();if(e(),!("undefined"!=typeof b&&"number"==typeof b&&!v&&b>0&&c<=0)){c<=0&&(v&&b>0||void 0===b?(o.removeClass("intro-animation"),"anm1"!==k.content.animation&&(o.find(".im-tp-lr-intro .im-ts-title").addClass("im-ts-title-background").removeClass("im-ts-title"),o.find(".im-tp-lr-intro .im-ts-subtitle").addClass("im-ts-subtitle-background").removeClass("im-ts-subtitle")),setTimeout(function(){v=!1},1200),g()):(b<0||void 0===b)&&(p.scrollTop(1),o.addClass("intro-animation"),"anm1"!==k.content.animation&&(o.find(".im-tp-lr-intro .im-ts-title-background").removeClass("im-ts-title-background").addClass("im-ts-title"),o.find(".im-tp-lr-intro .im-ts-subtitle-background").removeClass("im-ts-subtitle-background").addClass("im-ts-subtitle")),setTimeout(function(){h(),v=!0},1200)));var d=p[0].scrollHeight;c+$(window).height()>=d?$(".im-tp-lr-scroller.down",l.container).addClass("hide"):$(".im-tp-lr-scroller.down",l.container).removeClass("hide"),0===c?$(".im-tp-lr-scroller.up",l.container).addClass("hide"):$(".im-tp-lr-scroller.up",l.container).removeClass("hide"),o.hasClass("intro-animation")?$(".im-tp-lr-navigation",l.container).addClass("right"===k.content.nav_position?"right":"left"):"right"!==k.content.nav_position&&"left"!==k.content.nav_position&&$(".im-tp-lr-navigation",l.container).removeClass("left");var f=j(),i=100/(f/c);0!==f&&("undefined"!=typeof n&&null!==n&&n.onScroll(c,c+Magazine.pages.height,o[0].scrollHeight),Math.floor(i/25)!=u&&(u=Math.floor(i/25),Magazine.tracker.trackEvent("Scroll",c>t?"Down":"Up",25*u+"%")),t=c,c>30&&l.onScrollHandler(c))}}function j(){return"undefined"!=typeof o?Math.max(0,o[0].scrollHeight-Magazine.pages.height):0}var k,l,m,n,o,p,q=!0,r=this,s=null,t=0,u=0,v=!1,w=null;this.init=function(a){l=a},this.willLoad=function(){},this.willLoadView=function(a){},this.didLoad=function(a){k=a},this.didLoadView=function(){v=!1,null!=k.content.background&&(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?l.getBackground().init([k.content.background]):l.getBackground().init([k.content.alt||k.content.background])),l.hasBackground&&(l.container.find(".im-tp-lr-header").append(l.getBackground().render()),l.getBackground().getView().addClass("im-tp-lr-image"),l.getBackground().getView().prepend('<div class="im-tp-lr-header-gradient"></div>'),l.getBackground().show()),null!==k.content.nav_type&&"undefined"!=typeof k.content.nav_type&&(n=new NavigationButtons,n.init(l.container,NavigationButtonType[k.content.nav_type.toUpperCase()]),n.onUp=function(){r.up(Magazine.pages.height-50),Magazine.tracker.trackEvent("Scroll","Click","Up")},n.onDown=function(){r.down(Magazine.pages.height-50),Magazine.tracker.trackEvent("Scroll","Click","Down")},$(".im-tp-lr-scroller",l.container).hide()),o=$(".im-tp-lr-container",l.container).on("mousewheel scroll",i),$(".im-tp-lr-navigation",l.container).addClass(k.content.nav_position),p="anm3"===k.content.animation||"anm5"===k.content.animation?$(".im-tp-lr-content",l.container):o,1!=k.content.header_style&&k.content.title&&(m=(new AbsoluteView).init($(".im-tp-lr-header-intro",l.container)),m.setPosition(k.content.title_position)),$(".im-tp-lr-arrow",o).css("border-right-color",o.css("background-color")),s=l.scanDirectives(),$(".im-tp-lr-scroller.down",l.container).on("click",function(a){a.preventDefault(),r.down(Magazine.pages.height-50),e()}),$(".im-tp-lr-scroller.up",l.container).on("click",function(a){a.preventDefault(),r.up(Magazine.pages.height-50),e()}),$(".im-ts-title-background",l.container).hasTransparentBackground()&&$(".im-ts-title-background",l.container).css("padding","0"),$(".im-ts-subtitle-background",l.container).hasTransparentBackground()&&$(".im-ts-subtitle-background",l.container).css("padding","0"),$(".im-tp-lr-intro .paragraph, .im-tp-lr-header-intro .paragraph",l.container).hasTransparentBackground()&&$(".im-tp-lr-intro .paragraph, .im-tp-lr-header-intro .paragraph",l.container).css("padding","0"),$(".im-tp-lr-scroller.up",l.container).addClass("hide"),"anm1"===k.content.animation&&(o.find(".im-tp-lr-intro .im-ts-title-background").removeClass("im-ts-title-background").addClass("im-ts-title"),o.find(".im-tp-lr-intro .im-ts-subtitle-background").removeClass("im-ts-subtitle-background").addClass("im-ts-subtitle"))},this.willAppear=function(a){var b=p.scrollTop();0===b&&g()},this.didAppear=function(c){l.isFirstView()&&"undefined"!=typeof n&&(o[0].scrollHeight>Magazine.pages.height?n.show():n.hide()),"undefined"!=typeof c.item&&r.scrollTo($("[name=lr-p-"+c.item+"]",l.container));var d=$(".im-tp-lr-container",l.container).css("backgroundColor").replace("rgb(","").replace(")","");$(".im-tp-lr-header-gradient",l.container).css({background:"-moz-linear-gradient(top,  rgba("+d+",0) 0%, rgba("+d+",1) 100%)",background:"-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba("+d+",0)), color-stop(100%,rgba("+d+",1)))",background:"-webkit-linear-gradient(top,  rgba("+d+",0) 0%,rgba("+d+",1) 100%)",background:"-o-linear-gradient(top,  rgba("+d+"5,0) 0%,rgba("+d+",1) 100%)",background:"-ms-linear-gradient(top,  rgba("+d+",0) 0%,rgba("+d+",1) 100%)",background:"linear-gradient(to bottom,  rgba("+d+",0) 0%,rgba("+d+",1) 100%)"}),l.events.addEventListener(PageEvents.EVENTS.ON_OVERLAY_SHOW,a),l.events.addEventListener(PageEvents.EVENTS.ON_OVERLAY_HIDE,b)},this.willDisappear=function(){q&&h()},this.didDisappear=function(){null!==s&&s.each(function(){"undefined"!=typeof this.imMedia&&this.imMedia.pause()}),l.events.removeEventListener(PageEvents.EVENTS.ON_OVERLAY_SHOW,a),l.events.removeEventListener(PageEvents.EVENTS.ON_OVERLAY_HIDE,b)},this.onSwitchSize=function(a,b){null!==s&&s.each(function(){"undefined"!=typeof this.imMedia&&this.imMedia.onSwitchSize(a,b)});var c=$(".background",l.container).find(".background-image"),d=!1;c.find(".im-background-video").length>0&&(d=!0)},this.render=function(a){a.author||a.author_image||(a.noauthor=!0),a.background&&a.alt&&"object"==typeof a.background&&"object"==typeof a.alt&&(a.background.mobile=a.alt);for(var b in a.paragraphs){if(a.paragraphs[b].index=b,null!==a.paragraphs[b].style&&"undefined"!=typeof a.paragraphs[b].style){var c=new StyleModel(a.paragraphs[b].style);a.paragraphs[b].title_style=c.get("title"),a.paragraphs[b].title_style_mobile=c.get("title_mobile"),a.paragraphs[b].quote_style=c.get("quote"),a.paragraphs[b].quote_style_mobile=c.get("quote_mobile"),a.paragraphs[b].subtitle_style=c.get("subtitle"),a.paragraphs[b].subtitle_style_mobile=c.get("subtitle_mobile"),a.paragraphs[b].paragraph_background_style=c.get(["background"]),a.paragraphs[b].paragraph_style=c.get(["paragraph"]),c.get(["background"])}switch(a.paragraphs[b].sidenote_type){case 1:a.paragraphs[b].sidenote_icon="&#128240;",a.paragraphs[b].action=new ActionModel(a.paragraphs[b].action);break;case 2:a.paragraphs[b].sidenote_icon="&#128247;",a.paragraphs[b].action=new ActionModel({image:a.paragraphs[b].sidenote_image});break;case 3:a.paragraphs[b].sidenote_icon="&#128279;",a.paragraphs[b].action=new ActionModel(a.paragraphs[b].action);break;case 4:a.paragraphs[b].sidenote_icon="&#127916;",a.paragraphs[b].action=new ActionModel({video:a.paragraphs[b].sidenote_video});break;default:a.paragraphs[b].sidenote_icon=!1}a.paragraphs[b].sidenote_icon!==!1&&null===a.paragraphs[b].description&&(a.paragraphs[b].sidenote_conflict="sidenote-conflict")}"anm1"===a.animation&&(a.isAnm1=!0,setTimeout(function(){$(".im-tp-lr-container",l.container).find(".im-tp-lr-header-intro").css("top",a.position_height)},100))},this.onOrientationChange=function(){},this.onHashChange=function(a){"undefined"!=typeof a.item&&r.scrollTo($("[name=lr-p-"+a.item+"]",l.container))},this.onResizeHandler=function(a){"undefined"!=typeof m&&a.size<DeviceSize.LANDSCAPE,"undefined"!=typeof n&&(o[0].scrollHeight>Magazine.pages.height?n.show():n.hide())},this.destroy=function(){s=null},this.up=function(a){this.scrollTo(p.scrollTop()-a)},this.down=function(a){this.scrollTo(p.scrollTop()+a)},this.scrollTo=function(a){var b,c={y:Math.max(p.scrollTop(),2)};if(isNaN(a)){if(0==a.length)return;b=p.scrollTop()+a.offset().top-Magazine.pages.offset.top+a.outerHeight()}else b=a;0!==p.scrollTop()||o.hasClass("intro-animation")?TweenLite.to(c,2,{y:b,ease:"easeInOutCubic",onUpdate:function(){p.scrollTop(c.y),i()}}):i(null,-40)};var x=[37,38,39,40],y=0,z=0}Loader.loadComplete();