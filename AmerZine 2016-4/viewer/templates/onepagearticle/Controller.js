function OnepagearticleController(){function a(){null!==d.content.title&&(null!==d.content.margin?Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?h.setPosition(d.content.margin):h.setPosition(d.content.mobilePosition):h.setPosition("center center"))}function b(){var a=i.scrollTop(),b=c(),f=100/(b/a);if(0!==b){if("undefined"!=typeof g&&null!==g&&g.onScroll(a,a+Magazine.pages.height,i[0].scrollHeight),Math.floor(f/25)!=m&&(m=Math.floor(f/25),Magazine.tracker.trackEvent("Scroll",a>l?"Down":"Up",25*m+"%")),l=a,!Magazine.device.SUPPORT_TOUCH&&Magazine.device.browser!==DeviceBrowser.IE){var h=.4;1!=d.content.header_style&&(h=.6);var j=$(this).scrollTop()*h;$(".im-tp-opa-header",$(this)).css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,j)),$(".im-tp-opa-header h1.im-ts-title-background",$(this)).length>0&&$(".im-tp-opa-header h1.im-ts-title-background",$(this)).removeClass("animate").removeClass("fadeInLeft").css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,j*-.2))}e.onScrollHandler(a)}}function c(){return"undefined"!=typeof i?Math.max(0,i[0].scrollHeight-Magazine.pages.height):0}var d,e,f,g,h,i,j=this,k=null,l=0,m=0;this.init=function(a){e=a},this.willLoad=function(){},this.willLoadView=function(a){},this.didLoad=function(a){d=a},this.didLoadView=function(){if($(".im-tp-opa-header .im-ts-title-background",e.container).length>0&&(h=(new AbsoluteView).init($(".im-tp-opa-header .im-ts-title-background",e.container)),a()),null!==d.content.nav_type&&"undefined"!=typeof d.content.nav_type&&(g=new NavigationButtons,g.init(e.container,NavigationButtonType[d.content.nav_type.toUpperCase()]),g.onUp=function(){j.up(Magazine.pages.height-50),Magazine.tracker.trackEvent("Scroll","Click","Up")},g.onDown=function(){j.down(Magazine.pages.height-50),Magazine.tracker.trackEvent("Scroll","Click","Down")},$(".im-tp-opa-scroller",e.container).hide()),i=$(".im-tp-opa-container",e.container).on("mousewheel scroll",b),$(".im-tp-opa-arrow",i).css("border-right-color",i.css("background-color")),k=e.scanDirectives(),$(".im-tp-opa-scroller",e.container).on("click",function(a){a.preventDefault(),j.down(Magazine.pages.height-50)}),d.content.paragraphs&&d.content.paragraphs.length)for(var c=0;c<d.content.paragraphs.length;c++)0==c&&null===d.content.paragraphs[c].title&&$($(".im-tp-opa-paragraph",e.container)[0]).css("padding-top","50px"),$($(".subtitles",e.container)[c]).css("margin-top","0px")},this.willAppear=function(a){},this.didAppear=function(a){e.isFirstView()&&"undefined"!=typeof g&&(i[0].scrollHeight>Magazine.pages.height?g.show():g.hide()),"undefined"!=typeof a.item&&j.scrollTo($("[name=opa-p-"+a.item+"]",e.container))},this.willDisappear=function(){},this.didDisappear=function(){null!==k&&k.each(function(){"undefined"!=typeof this.imMedia&&this.imMedia.pause()})},this.render=function(a){if(a.author||a.author_image||(a.noauthor=!0),a.background&&a.alt&&"object"==typeof a.background&&"object"==typeof a.alt&&(a.background.mobile=a.alt),null!==a.margin){a.mobilePosition={};for(var b in a.margin)null!==a.margin[b]&&"string"==typeof a.margin[b]&&a.margin[b].indexOf("px")!==-1&&(a.mobilePosition[b]=.5*parseInt(a.margin[b].split("px")[0]))}if(a.paragraphs&&a.paragraphs.length)for(var b in a.paragraphs){if(a.paragraphs[b].index=b,null!==a.paragraphs[b].style&&"undefined"!=typeof a.paragraphs[b].style){var c=new StyleModel(a.paragraphs[b].style);a.paragraphs[b].title_style=c.get("title"),a.paragraphs[b].title_style_mobile=c.get("title_mobile"),a.paragraphs[b].subtitle_style=c.get("subtitle"),a.paragraphs[b].subtitle_style_mobile=c.get("subtitle_mobile"),a.paragraphs[b].paragraph_style=c.get(["paragraph","background"])}switch(a.paragraphs[b].sidenote_type){case 1:a.paragraphs[b].sidenote_icon="&#128240;",a.paragraphs[b].action=new ActionModel(a.paragraphs[b].action);break;case 2:a.paragraphs[b].sidenote_icon="&#128247;",a.paragraphs[b].action=new ActionModel({image:a.paragraphs[b].sidenote_image});break;case 3:a.paragraphs[b].sidenote_icon="&#128279;",a.paragraphs[b].action=new ActionModel(a.paragraphs[b].action);break;case 4:a.paragraphs[b].sidenote_icon="&#127916;",a.paragraphs[b].action=new ActionModel({video:a.paragraphs[b].sidenote_video.id});break;default:a.paragraphs[b].sidenote_icon=!1}a.paragraphs[b].sidenote_icon!==!1&&null===a.paragraphs[b].description&&(a.paragraphs[b].sidenote_conflict="sidenote-conflict")}},this.onOrientationChange=function(){},this.onSwitchSize=function(b){a()},this.onHashChange=function(a){"undefined"!=typeof a.item&&j.scrollTo($("[name=opa-p-"+a.item+"]",e.container))},this.onResizeHandler=function(a){"undefined"!=typeof f&&a.size<DeviceSize.LANDSCAPE,"undefined"!=typeof g&&(i[0].scrollHeight>Magazine.pages.height?g.show():g.hide())},this.destroy=function(){k=null},this.up=function(a){this.scrollTo(i.scrollTop()-a)},this.down=function(a){this.scrollTo(i.scrollTop()+a)},this.scrollTo=function(a){var c,d={y:i.scrollTop()};if(isNaN(a)){if(0==a.length)return;c=i.scrollTop()+a.offset().top-Magazine.pages.offset.top+a.outerHeight()}else c=a;TweenLite.to(d,2,{y:c,ease:"easeInOutCubic",onUpdate:function(){i.scrollTop(d.y),b()}})}}Loader.loadComplete();