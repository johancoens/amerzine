function BootstrapController(){function a(){var a=d.scrollTop(),e=b(),j=100/(e/a);Math.floor(j/25)!=i&&(i=Math.floor(j/25),Magazine.tracker.trackEvent("Scroll",a>h?"Down":"Up",25*i+"%")),null!==g&&g.onScroll(a,a+Magazine.pages.height,d[0].scrollHeight),Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE&&(0===a&&2===c.controller.showButton||0!==a&&2===c.controller.showButton),h=a;for(var k in f)$.isFunction(f[k].onScroll)&&f[k].onScroll(d.scrollTop());c.onScrollHandler(a)}function b(){return"undefined"!=typeof d?Math.max(0,d[0].scrollHeight-Magazine.pages.height):0}var c,d,e,f=[],g=null,h=0,i=0,j={0:"circle",1:"arrows",2:"",3:"bars",4:"circle"},k=function(){return e.content.navigationLabel};this.init=function(a){c=a},this.willLoadView=function(a){},this.showButton=1,this.didLoadView=function(){var b=this;d=c.container.find("#bootstrap"),(Magazine.device.browser===DeviceBrowser.IE||Magazine.device.OS===DeviceOS.WINDOWS&&Magazine.device.browser===DeviceBrowser.FIREFOX)&&d.addClass("ie");for(var h in f)d.append(f[h].render()),$.isFunction(f[h].afterRendering)&&f[h].afterRendering();d.on("mousewheel scroll",function(){a()}),d.css("height","100%"),2===this.showButton,d.scanDirectives(c),d.find(".dynamicForm").each(function(){new DynamicForm(null,$(this))});var i=!1;"0"==e.content.permanent_navigation&&(i=!0),"2"!==e.content.permanent_navigation&&null!==e.content.permanent_navigation&&"undefined"!=typeof e.content.permanent_navigation&&(g=new NavigationButtons,g.init($(".scroller",c.container),NavigationButtonType[j[e.content.permanent_navigation].toUpperCase()],k()),g.setTop(i),g.onUp=function(){b.scrollTo(-Magazine.pages.height,!0),Magazine.tracker.trackEvent("Scroll","Click","Up")},g.onDown=function(){b.scrollTo(Magazine.pages.height,!0),Magazine.tracker.trackEvent("Scroll","Click","Down")},g.show())},this.setStyleTitle=function(a,b){function c(a,c){a&&c?b.attr("style",a.join("")+c.join("")):a&&!c?b.attr("style",a.join("")):a&&c&&b.attr("style",c.join(""))}a&&(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?c(a.title,a.title_background):c(a.m_title,a.m_title_background))},this.rowDidDisappear=function(){this.page&&"function"==typeof this.page.rowDidDisappear&&this.page.rowDidDisappear()},this.rowWillAppear=function(){var a,b,c=$(this).children(),d=!1,e=!1,f=!1,g=IntroAnimation.contentType,h=IntroAnimation.textType,i=(IntroAnimation.duration,IntroAnimation.textDelay),j=!1;this.page&&"function"==typeof this.page.rowWillAppear&&this.page.rowWillAppear(),$(this).css("opacity",1),$(this).hasClass("im-bs-cover")?(d=!0,c=$(this).children().find(".im-cl-text-block"),a=c.find(".paragraph").children()):$(this).hasClass("im-bs-image-text")&&(0!==$(this).find(".im-bs-video").length?(e=!0,c=$(this).children().children(),j=!$(this).children().hasClass("col-left"),1==j?(a=$(this).find(".im-bs-video").children(),g=IntroAnimation.textType,h=IntroAnimation.contentType):a=$(this).find(".im-bs-text").find(".paragraph"),i+=200):0!==$(this).find(".im-bs-img").length&&(Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE,f=!0,c=$(this).children().children(),j=!$(this).children().hasClass("col-right"),1==j?(a=$(this).find(".im-bs-img").children(),g=IntroAnimation.textType,h=IntroAnimation.contentType):a=$(this).find(".im-bs-text").find(".paragraph"),i+=200)),!this.imParallax.isFirstView()||d===!0&&0===this.page.index||c.each(function(){$(this).startAnimation(g).css(Magazine.device.getCssProperty("animation-delay"),IntroAnimation.contentDelay+"ms").css(Magazine.device.getCssProperty("AnimationDuration"),IntroAnimation.duration).css("opacity",1),b=1==j?$($(this).children().get().reverse()):$(this).children(),b.each(function(b){$(this).startAnimation(g).css(Magazine.device.getCssProperty("animation-delay"),(b+1)*IntroAnimation.contentDelay+"ms").css(Magazine.device.getCssProperty("AnimationDuration"),IntroAnimation.duration).css("opacity",1),0==d&&0==e&&0==f&&(a=$(this).find(".paragraph"),i=IntroAnimation.textDelay),a.startAnimation(h).css(Magazine.device.getCssProperty("animation-delay"),(b+1)*i+"ms").css(Magazine.device.getCssProperty("AnimationDuration"),IntroAnimation.duration).css("opacity",1)})})},this.willLoad=function(){},this.didLoad=function(a){e=a;for(var b in a.content.pages){var c=a.content.pages[b],d=!1;switch(parseInt(c.page_type)){case 3:if(null!=c.columns)for(var g in c.columns)d=new BootstrapText,d.init(c.columns[g],this,parseInt(b)),f.push(d);break;case 1:if(null!=c.text_image)for(var g in c.text_image)d=new BootstrapImageText,0==g&&c.title&&d.setTitle(c.title,c.title_align),d.init(c.text_image[g],this,parseInt(b),c),f.push(d);break;case 4:if(null!=c.videoblock)for(var g in c.videoblock)d=new BootstrapVideo,0==g&&c.title&&d.setTitle(c.title,c.title_align),d.init(c.videoblock[g],this,parseInt(b),c),f.push(d);break;case 2:null!=c.contacts&&(d=new BootstrapThumbs,c.title&&d.setTitle(c.title,c.title_align),d.init(c,this,parseInt(b),c),f.push(d));break;case 5:d=new BootstrapFullscreenText,d.init(c,this,parseInt(b)),f.push(d);break;case 6:d=new BootstrapMaps,d.init(c,this,parseInt(b)),f.push(d);break;default:null!=c.cover&&(d=new BootstrapCover,d.init(c,this,parseInt(b)),f.push(d))}}},this.didAppear=function(b){a();for(var c in f)$.isFunction(f[c].didAppear)&&f[c].didAppear();null!==g&&g.show()},this.willAppear=function(b){if(c.isFirstView())for(var d=0;d<f.length;d++)$.isFunction(f[d].pageFirstAppear)&&f[d].pageFirstAppear();a();for(var e in f)$.isFunction(f[e].willAppear)&&f[e].willAppear();"undefined"!=typeof b.item&&this.scrollTo($("[name=bs-p-"+b.item+"]",c.container),!0)},this.onHashChange=function(a){"undefined"!=typeof a.item&&this.scrollTo($("[name=bs-p-"+a.item+"]",c.container),!0)},this.onSwitchSize=function(a,b){for(var c in f)$.isFunction(f[c].onSwitchSize)&&f[c].onSwitchSize(a,b)},this.onResizeHandler=function(a){for(var b in f)f[b].onResizeHandler(a)},this.onEndResizeHandler=function(a){for(var b in f)"function"==typeof f[b].onEndResizeHandler&&f[b].onEndResizeHandler(a)},this.willDisappear=function(){for(var a in f)$.isFunction(f[a].willDisappear)&&f[a].willDisappear()},this.render=function(a){for(var b=0;b<a.pages.length;b++)if(a.pages[b].label){a.navigationLabel=a.pages[b].label;break}},this.didDisappear=function(){},this.destroy=function(){},this.scrollTo=function(b,c){"undefined"==typeof c&&(c=!0);var e,f={y:d.scrollTop()};e=isNaN(b)?d.scrollTop()+b.offset().top-Magazine.pages.offset.top:d.scrollTop()+b,c?TweenLite.to(f,1.2,{y:e,ease:"easeInOutCubic",onUpdate:function(){d.scrollTop(f.y),a()}}):d.scrollTop(f.y)}}function BootstrapFullscreenText(){var a,b,c,d,e,f,g=null,h=!0,i=500,j=!1,k=!1,l=null;this.init=function(a,g,h){c=$("<div class='opacity im-bs-cover im-bs-full-text' name='bs-p-"+h+'\' im-will-appear="rowWillAppear" im-did-disappear="rowDidDisappear"></div>'),c[0].page=this,d=a,this.index=f=h,e=g,b=new TextBlock,b.init(),b.order=["subtitle","title","description","button"],b.setTitle(d.title),b.setSubtitle(d.subtitle),b.setDescription(d.description),d.read_more_button&&b.setButton(Translate.getLabel("btn_more"),function(a){a.preventDefault(),Magazine.tracker.trackEvent("Scroll","Click","Down"),g.scrollTo(c.next())}),Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE?(b.setPosition("4 4"),b.setSize("96%")):(b.setPosition(d.margin),b.setSize(i)),b.setStyle(d.fullscreen_style),b.appendTo(c),"undefined"!=typeof g&&0===h&&"string"!=typeof a.label&&(a.label=Translate.getLabel("btn_scroll")),l=new ImParallaxDirective,l.init(c,e)},this.onScroll=function(){l.onScroll()},this.rowWillAppear=function(){a&&a.pageWillAppear(),h||$(this).find($(g)).startAnimation("fadeInUp").css(Magazine.device.getCssProperty("animation-delay"),"600ms")},this.rowDidDisappear=function(){a&&a.pageDidDisappear()},this.onResizeHandler=function(d){if(d.size<=DeviceSize.MOBILE_LANDSCAPE&&null!==b){var e=b.height();e+40>Magazine.pages.height?(j=!0,c.height(e+40)):(c.css("height",""),j=!1)}a&&a.onEndResizeHandler(d)},this.onSwitchSize=function(e,f){e.size<=DeviceSize.MOBILE_LANDSCAPE?(b.setPosition("4 4"),"undefined"!=typeof d.fullscreen_style&&null!==d.fullscreen_style&&a.setOverlayStyle(d.fullscreen_style.mobile_background_overlay),b.setSize("96%")):(b.setPosition(d.margin),b.setSize(i),a.setOverlayStyle(""),j&&(c.css("height",""),j=!1)),b.onSwitchSize(e)},this.afterRendering=function(){b.afterRendering(),this.onResizeHandler(Magazine.device),(d.background||d.alt)&&(a=new Background,Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE?a.init([d.alt||d.background]):a.init([d.background||d.alt]),c.prepend(a.render()),a.show(),Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE?"undefined"!=typeof d.fullscreen_style&&null!==d.fullscreen_style&&a.setOverlayStyle(d.fullscreen_style.mobile_background_overlay):a.setOverlayStyle(""))},this.willAppear=function(){"undefined"!=typeof a&&(a.pageWillAppear(),k=!0)},this.didAppear=function(){},this.willDisappear=function(){"undefined"!=typeof a&&a.pageDidDisappear()},this.render=function(){return c}}function BootstrapCover(){var a,b,c,d,e,f=!0,g=null,h=null;this.init=function(f,g,i){a=$("<div class='opacity im-bs-cover im-bs-cover-height-"+f.height+"' name='bs-p-"+i+'\' im-will-appear="rowWillAppear" im-did-disappear="rowDidDisappear"></div>'),b=new ImageCarousel,a[0].page=this,c=f,e=g,this.index=d=i;for(var j in f.cover){var k=f.cover[j],l=new ImageCarouselImage;l.init(k.background);var m,n,o=[],p=[];if(null!=k.style){var q=new StyleModel(k.style);o=q.get(["line_1_font","line_1_bg"]),m=q.get(["line_1_mobile_font"]),p=q.get(["line_2_font","line_2_bg"]),n=q.get(["line_2_mobile_font"])}k.title_1&&"undefined"!=typeof k.title_1&&l.setTitle(k.title_1,o,m),k.title_2&&"undefined"!=typeof k.title_2&&l.setSubtitle(k.title_2,p,n),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?null!=k.position&&l.setPosition(k.position.split(" ")):l.setPosition("0px","20px"),b.addImage(l)}a.append(b.render()),"undefined"!=typeof g&&0===i&&"string"!=typeof f.label&&(f.label=Translate.getLabel("btn_scroll")),b.onResizeHandler(),h=new ImParallaxDirective,h.init(a,e)},this.didAppear=function(){b&&b.startTimer()},this.willDisappear=function(){b&&b.stopTimer()},this.rowDidDisappear=function(){$(this).find($(g)).startAnimation("fadeOut"),b&&b.stopTimer()},this.onScroll=function(){h.onScroll()},this.rowWillAppear=function(){f||isIpad()?b.showImage(0):$(this).find($(g)).startAnimation("fadeInUp").css(Magazine.device.getCssProperty("animation-delay"),"600ms"),b&&b.startTimer()},this.render=function(){return b.onResizeHandler(Magazine.device),a},this.onSwitchSize=function(a,e){if(a.size<=DeviceSize.MOBILE_LANDSCAPE){for(var f in c.cover)b.getImage(f).setPosition("0px","20px");0==c.page_type&&0==d&&$(".im-image-carousel-indicators").css({"text-align":"right",right:"20px"})}else{for(var f in c.cover){var g=c.cover[f];null!=g.position?b.getImage(f).setPosition(g.position.split(" ")):b.getImage(f).setPosition()}0==c.page_type&&0==d&&$(".im-image-carousel-indicators").css({"text-align":"center",right:"0px"})}(a.size<=DeviceSize.MOBILE_LANDSCAPE&&e>DeviceSize.MOBILE_LANDSCAPE||a.size>DeviceSize.MOBILE_LANDSCAPE&&e<=DeviceSize.MOBILE_LANDSCAPE)&&setTimeout(function(){b.reset()},500)},this.onResizeHandler=function(a){b.onResizeHandler(a)},this.onEndResizeHandler=function(a){b.onEndResizeHandler(a)}}function BootstrapImageText(){var a,b,c,d,e,f,g,h,i=Hogan.compile("<div class='opacity im-bs-img'><img src='{{helper(getImageUrl, {image.uri}, null, null, 600, null, 0)}}'{{#image.alt}} alt='{{image.alt}}'{{/image.alt}} /></div>"),j=Hogan.compile("<div class='opacity im-bs-text'><div class='paragraph' im-object='im-style-directive' data-style='{{paragraph_style}}' data-mobile-style='{{mobile_paragraph_style}}'>{{#title}}<h2 class='im-ts-border-radius' im-object='im-style-directive' data-style='{{title_style}}' data-mobile-style='{{mobile_title_style}}'>{{{title}}}</h2>{{/title}}{{#subtitle}}<br /><h3 class='im-ts-border-radius'  im-object='im-style-directive' data-style='{{subtitle_style}}' data-mobile-style='{{mobile_subtitle_style}}'>{{{subtitle}}}</h3>{{/subtitle}}{{{description}}}</div></div>"),k=null;this.container,this.init=function(c,f,g,l){d=f,h=l,this.index=g,this.setData(c),this.container=$("<div class='opacity im-bs-image-text' name='bs-p-"+g+'\' im-will-appear="rowWillAppear"></div>'),this.container[0].page=this;var m=$("<div class='col-grid col-2'></div>");this.container.append(m);var n=new StyleModel(c.style);c.title_style=n.get(["title_background","title"]),c.subtitle_style=n.get(["subtitle_background","subtitle"]),c.paragraph_style=n.get(["paragraph","link"]),c.mobile_title_style=n.get(["m_title"]),c.mobile_subtitle_style=n.get(["m_subtitle"]),c.mobile_paragraph_style=n.get(["m_paragraph"]),"right"==c.image_right?(a=$(j.render(c)),b=$(i.render(c)),m.append(a),m.append(b)):(b=$(j.render(c)),a=$(i.render(c)),m.append(b),m.append(a),m.addClass("col-right")),null!=c.style&&"undefined"!=typeof c.style.background&&this.container.attr("style",c.style.background.join("")),"undefined"!=typeof e&&this.container.prepend(e),this.container.find(".dynamicForm").each(function(){new DynamicForm(null,$(this))}),k=new ImParallaxDirective,k.init(this.container,d)},this.onScroll=function(){k.onScroll()},this.rowWillAppear=function(){},this.rowDidDisappear=function(){},this.setTitle=function(a,b){null!==b&&void 0!==b||(b="center"),e="object"==typeof a?a:$("<div class='title-align align-"+b+"'><h1 class='im-ts-title-background im-bs-text-center'>"+a+"</h1></div>")},this.getTitle=function(){return e},this.setData=function(a){c=a},this.getData=function(){return c},this.render=function(){return this.container},this.afterRendering=function(){"undefined"!=typeof e&&this.container.prepend(e),this.container.find("h2, h3").each(function(){$(this).hasTransparentBackground()||$(this).css({padding:"5px 16px","margin-bottom":"20px"})}),"undefined"==typeof f&&(f=$(this.container.find(".paragraph p")[0]).css("text-align")),this.alignText(Magazine.device.size,f),g=f,e&&d.setStyleTitle(h.style_title,e.find(".im-ts-title-background"))},this.onSwitchSize=function(a){e&&d.setStyleTitle(h.style_title,e.find(".im-ts-title-background")),this.alignText(a.size,g)},this.alignText=function(a,b){a>DeviceSize.MOBILE_LANDSCAPE?(this.container.find(".paragraph p").each(function(){$(this).css("text-align")===b&&$(this).css("text-align","")}),this.container.find(".paragraph").css("text-align",f)):"right"===this.container.find(".paragraph").css("text-align")&&this.container.find(".paragraph").css("text-align","start")},this.onResizeHandler=function(a){},this.setColumnLeft=function(b){a=b},this.setColumnRight=function(a){b=a}}function BootstrapThumbs(){var a,b,c,d,e,f=Hogan.compile("<div><{{a.element}} onclick=\"{{a.onclick}}\" target=\"{{a.target}}\" href=\"{{a.href}}\" class='im-bs-thumb'>{{#image}}<div class='im-bs-img'><img src='{{helper(getImageUrl, {image.uri}, null, null, 400, null, 0)}}'{{#image.alt}} alt='{{image.alt}}'{{/image.alt}} /></div>{{/image}}<div class='im-bs-text'><div class='paragraph' im-object='im-style-directive' data-style='{{paragraph_style}}' data-mobile-style='{{mobile_paragraph_style}}'><h3 im-object='im-style-directive' data-style='{{title_style}}' data-mobile-style='{{mobile_title_style}}'>{{{name}}}</h3><h4 im-object='im-style-directive' data-style='{{subtitle_style}}' data-mobile-style='{{mobile_subtitle_style}}'>{{{function}}}</h4>{{{description}}}</div></div></{{a.element}}></div>"),g=null;this.init=function(h,i,j,k){d=i,e=k;var l=$("<div class='col-grid col-"+h.contacts.length+(2!=h.image_style?" small":"")+"'></div>");this.index=j,a=$("<div class='opacity im-bs-thumbs' name='bs-p-"+j+'\' im-will-appear="rowWillAppear"></div>'),a.append(l),a[0].page=this,h.style_thumbnail&&"undefined"!=typeof h.style_thumbnail.background&&a.attr("style",h.style_thumbnail.background.join("")),"undefined"!=typeof c&&a.prepend(c),c&&d.setStyleTitle(k.style_thumbnail,c.find(".im-ts-title-background"));for(var m in h.contacts){var n=new StyleModel(h.contacts[m].style);h.contacts[m].a=new ActionModel(h.contacts[m].action),h.contacts[m].title_style=n.get(["title"]),h.contacts[m].subtitle_style=n.get(["subtitle"]),h.contacts[m].paragraph_style=n.get(["paragraph"]),h.contacts[m].mobile_title_style=n.get(["m_title"]),h.contacts[m].mobile_subtitle_style=n.get(["m_subtitle"]),h.contacts[m].mobile_paragraph_style=n.get(["m_paragraph"]),l.append(f.render(h.contacts[m]))}1==h.image_style?l.find("img").addClass("round"):l.find("img").removeClass("round"),b=new TimelineLite,Magazine.device.allowAnimateOnScroll&&TweenLite.set(a.children(),{y:-100}),b.to(a.children(),1,{y:0}),"undefined"!=typeof c&&(Magazine.device.allowAnimateOnScroll&&TweenMax.set(c,{opacity:0,rotationX:-90,transformOrigin:"50% -200%",transformPerspective:500}),b.to(c,1,{opacity:1,rotationX:0,ease:"easeInOutPower2"},"-=0.8")),b.pause(),g=new ImParallaxDirective,g.init(a,d)},this.onScroll=function(){g.onScroll()},this.rowWillAppear=function(){},this.setTitle=function(a,b){null!==b&&void 0!==b||(b="center"),c="object"==typeof a?a:$("<div class='title-align align-"+b+"'><h1 class='im-ts-title-background im-bs-text-center'>"+a+"</h1></div>")},this.render=function(){return a},this.onResizeHandler=function(a){},this.onSwitchSize=function(a){c&&d.setStyleTitle(e.style_thumbnail,c.find(".im-ts-title-background"))}}var BootstrapVideo=function(){var a,b,c,d,e=null,f=!1,g=Hogan.compile("<div class='opacity im-bs-video'>{{^has_description}}{{#title}}<div class='video-title'><h2 class='im-ts-border-radius' style='{{title_style}}'>{{{title}}}</h2>{{#subtitle}}<br /><h3 class='im-ts-border-radius' style='{{subtitle_style}}'>{{{subtitle}}}</h3>{{/subtitle}}</div>{{/title}}{{/has_description}}<div class='im-ts-videocontainer' data-video-id='{{youtube}}' ></div></div>"),h=Hogan.compile("<div class='opacity im-bs-text'><div class='paragraph' im-object='im-style-directive' data-style='{{paragraph_style}}' data-mobile-style='{{mobile_paragraph_style}}'>{{#title}}<h2 class='im-ts-border-radius' im-object='im-style-directive' data-style='{{title_style}}' data-mobile-style='{{mobile_title_style}}'>{{{title}}}</h2>{{/title}}{{#subtitle}}<br /><h3 class='im-ts-border-radius'  im-object='im-style-directive' data-style='{{subtitle_style}}' data-mobile-style='{{mobile_subtitle_style}}'>{{{subtitle}}}</h3>{{/subtitle}}{{{description}}}</div></div>"),i=null;return $.extend(new BootstrapImageText,{init:function(e,j,k,l){a=j,c=l,this.setData(e);var m,n;this.index=k,this.container=$("<div class='opacity im-bs-image-text' name='bs-p-"+k+'\' im-will-appear="rowWillAppear" im-did-disappear="rowDidDisappear"></div>'),this.container[0].page=this,e.description||e.title||e.subtitle?(m=$("<div class='col-grid col-2'></div>"),e.has_description=!0):(m=$("<div class='title-align align-center'></div>"),e.has_description=!1),this.container.append(m),this.container.addClass("im-bs-text-block");var o=new StyleModel(e.style);e.title_style=o.get(["title_background","title"]),e.subtitle_style=o.get(["subtitle_background","subtitle"]),e.paragraph_style=o.get(["paragraph","link"]),e.mobile_title_style=o.get(["m_title"]),e.mobile_subtitle_style=o.get(["m_subtitle"]),e.mobile_paragraph_style=o.get(["m_paragraph"]),e.has_description===!1?(d=$(g.render(e)),this.container.css("padding","0"),f=!0,m.append(d)):"right"===e.image_right?(n=$(h.render(e)),d=$(g.render(e)),m.append(n),m.append(d)):(n=$(h.render(e)),d=$(g.render(e)),m.append(d),m.append(n),m.addClass("col-left")),"undefined"!=typeof b&&this.container.prepend(b),null!=e.style&&"undefined"!=typeof e.style.background&&this.container.attr("style",e.style.background.join("")),this.container.find(".dynamicForm").each(function(){new DynamicForm(null,$(this))}),i=new ImParallaxDirective,i.init(this.container,a)},setTitle:function(a,c){null!==c&&void 0!==c||(c="center"),b="object"==typeof a?a:$("<div class='title-align align-"+c+"'><h1 class='im-ts-title-background im-bs-text-center'>"+a+"</h1></div>")},getTitle:function(){return b},afterRendering:function(){e=new Video(d.children(".im-ts-videocontainer")),"undefined"!=typeof b&&this.container.prepend(b),b&&a.setStyleTitle(c.style_title,b.find(".im-ts-title-background"))},onSwitchSize:function(){b&&a.setStyleTitle(c.style_title,b.find(".im-ts-title-background"))},onScroll:function(){i.onScroll()},rowWillAppear:function(){},rowDidDisappear:function(){e&&e.pause()},willDisappear:function(){e&&e.stop()},willAppear:function(){e&&e.reset()},onResizeHandler:function(a){f&&this.container.find(".im-ts-videocontainer").height(Magazine.pages.width/16*9)}})},BootstrapText=function(){var a,b,c,d=null;return $.extend(new BootstrapImageText,{init:function(b,c,e){this.setData(b);var f,g,h,i=new StyleModel(b.style);a=c,this.index=e,this.container=$('<div class="opacity im-bs-textblock" name="bs-p-'+e+'" im-will-appear="rowWillAppear" im-did-disappear="rowDidDisappear"></div>'),this.container[0].page=this,h=b.column_2?$("<div class='col-grid col-2'></div>"):$("<div class='title-align align-center'></div>"),this.container.append(h),this.container.addClass("im-bs-text-block"),b.column_1&&(g=$('<div class="im-bs-text"><div class="paragraph col-l" im-object="im-style-directive" data-mobile-style="'+i.get(["m_paragraph"])+'" style="'+i.get(["paragraph"])+'">'+b.column_1+"</div></div>"),h.append(g),this.setColumnLeft(g)),b.column_2?(f=$('<div class="im-bs-text"><div class="paragraph col-r" im-object="im-style-directive" data-mobile-style="'+i.get(["m_paragraph"])+'" style="'+i.get(["paragraph"])+'">'+b.column_2+"</div></div>"),h.append(f),this.setColumnRight(f)):g&&g.addClass("im-bs-text-center"),b.title&&this.setTitle(b.title,b.title_align),this.container.find(".dynamicForm").each(function(){new DynamicForm(null,$(this))}),d=new ImParallaxDirective,d.init(this.container,a)},afterRendering:function(){var a=this.getData(),d=this.getTitle();if("undefined"!=typeof d&&this.container.prepend(d),null!=a.style){"undefined"!=typeof a.style.background&&this.container.attr("style",a.style.background.join(""));var e="";"undefined"!=typeof a.style.title_background&&(e+=a.style.title_background.join("")),"undefined"!=typeof a.style.title&&(e+=a.style.title.join("")),"undefined"!=typeof a.style.m_title&&Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE&&(e+=a.style.m_title.join("")),e.length>0&&this.container.find("h1.im-bs-text-center").attr("style",e)}this.container.find("h1").each(function(){$(this).hasTransparentBackground()&&$(this).css({padding:"0px","margin-bottom":"5px"})}),"undefined"==typeof b&&(b=$(this.container.find(".paragraph p")[0]).css("text-align")),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?this.container.find(".paragraph").css("text-align",b):"right"==b&&this.container.find(".paragraph").css("text-align","left").children("p").css("text-align","left"),c=b},onSwitchSize:function(a){"undefined"==typeof b&&(b=$(this.container.find(".paragraph p")[0]).css("text-align")),a.size>DeviceSize.MOBILE_LANDSCAPE?this.container.find(".paragraph").css("text-align",c).children("p").css("text-align",c):"right"==b&&this.container.find(".paragraph").css("text-align","left").children("p").css("text-align","left")},onScroll:function(){d.onScroll()},rowWillAppear:function(){}})},BootstrapMaps=function(){var a,b,c,d,e=null;this.init=function(b,c,d){this.setData(b);var f=(new StyleModel(b.style),c);this.index=d,a=$("<div class='opacity im-bs-maps' name='bs-p-"+d+'\'im-will-appear="rowWillAppear" im-did-disappear="rowDidDisappear"></div>'),a[0].page=this,e=new ImParallaxDirective,e.init(a,f)},this.pageFirstAppear=function(){d=new GoogleMaps(c.key),a.append(d.getView()),d.setHeight(c.map_height);var b=GoogleMaps.getMapDataByUrl(c.maps);d.init({coordinates:b,zoom:b.zoom}),d.addMarker({coordinates:b,action:c.action,image:c.image,animation:c.check})},this.onScroll=function(){e.onScroll()},this.rowWillAppear=function(){},this.didAppear=function(){d.triggerResize()},this.setData=function(a){c=a},this.render=function(){return a},this.getData=function(){return c},this.getTitle=function(){return b},this.onResizeHandler=function(a){d&&d.onResizeHandler(a)}};Loader.loadComplete();