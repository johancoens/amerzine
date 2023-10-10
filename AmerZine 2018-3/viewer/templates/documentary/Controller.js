function DocumentaryController(){"use strict";function a(){var a=!1;"top"==c.content.nav_type&&(c.content.nav_type="circle",a=!0),k&&(k.init(b.container,NavigationButtonType[c.content.nav_type.toUpperCase()]),k.setTop(a))}var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s=0,t=9/16,u=Hogan.compile('{{#slide_title}}<h3 class="im-ts-slide-title im-ts-subtitle im-ts-subtitle-background im-3d" im-object="im-style-directive" data-style="{{slide_title_style}}">{{{slide_title}}}</h3>{{/slide_title}}'),v={TITLE:0,TEXT:1,TEXT_IMAGE:2,TEXT_VIDEO:3,SCROLLER:4,HOTSPOTS:5,VIDEO:6},w={SMALL:300,MEDIUM:500,BIG:800,EXTREME:1e3},x={SMALL:w.SMALL*t,MEDIUM:w.MEDIUM*t,BIG:w.BIG*t,EXTREME:w.EXTREME*t},y=IntroAnimation.contentType,z=IntroAnimation.textType,A=(IntroAnimation.duration,IntroAnimation.textDelay,IntroAnimation.contentDelay),B=0,C=0,D=!0,E=function(a,c){a.markers=[];for(var d=0;d<c.marker.length;d++){var e=c.marker[d],f=(new Marker).init(d);e.label&&f.setLabel(e.label),e.position_fixed?f.setFixed(!0,Magazine.device.size<DeviceSize.PORTRAIT&&null!==c.alt?c.alt:c.background):f.setFixed(!1,Magazine.device.size<DeviceSize.PORTRAIT&&null!==c.alt?c.alt:c.background),f.setImage(e.button_image),f.setPosition(e.position),f.setAction(e.action),f.appendTo(a.view),f.set3dLevel(4),f.pulseAnimation(!0,5e3,3e3),e.label&&f.getLabel().attr("style",c.marker[d].label_style),a.markers.push(f),c.marker[d]._textBalloon=new TextBalloon(b),c.marker[d]._baseurl="#!/"+b.alias+"/item/"+a.index,c.marker[d]._textBalloon.init(b.container.find(".im-tp-do-sub-container")).setView($(h.render(c.marker[d]))),e.$marker=f}},F=function(a){var b=a.position.split(" "),c=a._textBalloon.getElement().width(),d=a._textBalloon.getElement().height(),e=[],f=2;return"Explorer"==Magazine.device.browser&&(f=1),Magazine.pages.height>=500?(e={x:b[0],y:b[1]},parseInt(b[0])<=50&&parseInt(b[1])>=50?e.align="bottom left":parseInt(b[0])>=50&&parseInt(b[1])>=50?e.align="bottom right":parseInt(b[0])<=50&&parseInt(b[1])<=50?e.align="top left":parseInt(b[0])>=50&&parseInt(b[1])<=50&&(e.align="top right")):e={left:.5*(Magazine.pages.width-c)+"px",top:.5*(Magazine.pages.height-d)+"px"},e},G=function(a){var b,g=c.content.item[a];switch(g.layout_type){case 0:b=i.render(g);break;case 1:case 2:case 3:b=d.render(g);break;case 4:b=e.render(g);break;case 5:b=f.render(g);break;case 6:switch(parseInt(g.video_size)){case 0:g.video_width=w.SMALL,g.video_height=x.SMALL;break;case 1:g.video_width=w.MEDIUM,g.video_height=x.MEDIUM;break;case 3:g.video_width=w.EXTREME,g.video_height=x.EXTREME;break;default:g.video_width=w.BIG,g.video_height=x.BIG}b=j.render(g)}var h=(new PageControllerPage).init(g);if(Magazine.device.size<DeviceSize.PORTRAIT&&null!==g.alt?h.setBackground(g.alt):h.setBackground(g.background),h.layout_type=g.layout_type,h.index=a,null!==g.layer)for(var k=0;k<g.layer.length;k++)null!==g.layer[k].image&&null!==h.background&&h.background.getBackgroundImage(0)&&h.background.getBackgroundImage(0).appendLayer(g.layer[k]);switch(h.append(u.render(g)+b),g.layout_type){case 0:case 1:case 2:case 3:case 4:break;case v.HOTSPOTS:E(h,g)}if($(".im-cl-text-block",h.view).length>0){var l=(new AbsoluteView).init($(".im-cl-text-block",h.view));l.setPosition(g.margin),h.absoluteView=l}return h},H=function(a){var b,d=a.view.find(".text-block");switch(a.layout_type){case v.TITLE:a.view.find(".tp-do-title").css("text-align",c.content.item[a.index].text_align),M(a.view.find(".tp-do-title"));break;case v.TEXT:M(a.view.find(".tp-do-type-text"));break;case v.TEXT_IMAGE:var e=d.find("img");d.find(".paragraph").width(.5*d.width()-32).css("float","left"),e.width(.5*d.width()),b=.5*(d.height()-e.height()),e.css("margin-top",b+"px"),M(a.view.find(".tp-do-type-text"));break;case v.TEXT_VIDEO:var f=d.find(".im-tp-do-video");d.find(".paragraph").width(.5*d.width()-32).css("float","left"),f.width(.5*d.width()),b=.5*(d.height()-f.height()),f.css("margin-top",b+"px"),M(a.view.find(".tp-do-type-text"));break;case v.SCROLLER:M(a.view.find(".im-tp-do-scroller")),$(a.view.find(".im-tp-do-scroller")).scrollTop(0);break;case v.HOTSPOTS:a.view.find(".tp-do-type-text").css("text-align",c.content.item[a.index].text_align),M(a.view.find(".tp-do-type-text")),M(a.view.find(".marker"),null,!0);break;case v.VIDEO:a.view.find(".im-ts-videocontainer");M(a.view.find(".im-tp-do-video"))}M(a.view.find(".im-ts-slide-title"),null,!1)},I=function(a){if(a.layout_type===v.HOTSPOTS)for(var b=$(".im-ts-label",a.view),c=0;c<a.markers.length;c++)a.markers[c].show(),$(b[c]).css("top",.5*($(b[c]).parent().outerHeight()-b.innerHeight())+"px").css("left",$(b[c]).parent().outerWidth()+8+"px")},J=function(a){},K=function(a){},L=function(a,b){-1==a&&(a=0),l=a>b?"down":"up",Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&m.gotoPage(a)},M=function(a,c,d){var e=y;e=void 0!==c&&null!==c?c:y,"up"===l&&(e.indexOf("Up")>=0?e=e.replace("Up","Down"):e.indexOf("Down")>=0&&(e=e.replace("Down","Up"))),d!==!1&&(a=$(a).children()),a.each(function(c){"br"!==this.tagName.toLowerCase()&&($(this).startAnimation(e).css(Magazine.device.getCssProperty("animation-delay"),(c+1)*A*.5+"ms").css(Magazine.device.getCssProperty("AnimationDuration"),IntroAnimation.duration),$(a).find(".paragraph",b.container).startAnimation(z).css(Magazine.device.getCssProperty("animation-delay"),Number(IntroAnimation.duration.split("ms")[0])+(c+a.length)*A+"ms"))})},N=function(){var a=r.scrollTop(),c=O(),d=100/(c/a);0!==c&&(Math.floor(d/25)!=B&&(B=Math.floor(d/25),Magazine.tracker.trackEvent("Scroll",a>C?"Down":"Up",25*B+"%")),C=a,D&&Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE&&$(".im-tp-do-m-container",b.container).each(function(){var a=($(this).scrollTop()-$(this).offset().top)*s;$(this).find(".im-tp-do-m-background").css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,a))}))},O=function(){return"undefined"!=typeof r?Math.max(0,r[0].scrollHeight-Magazine.pages.height):0};this.init=function(a){b=a},this.willLoadView=function(a){},this.didLoadView=function(){var d=b.getInPageNavigation();if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){1==c.content.effect&&b.enable3d(),null!==c.content.nav_type&&"undefined"!=typeof c.content.nav_type&&(k=new NavigationButtons,a(),k.onUp=function(){d.prev()},k.onDown=function(){d.next()},k.show()),m=new PageController,m.init({willAppear:H,didAppear:I,didDisappear:J,willDisappear:K}),m.isAnimating=function(a){b.getInPageNavigation().setDisabled(a)};for(var e=0;e<c.content.item.length;e++)m.addPage(G(e));m.appendTo(b.container.find(".im-tp-do-page")),d.enableScroll(b.container),d.setDisabled(!0),d.total=c.content.item.length,d.onRequestHandler=L;var f=b.container.find(".scroller");f.bind("touchstart touchmove touchend",function(a){a.stopPropagation()})}else{1==c.content.effect&&(s=.2),q=b.scanDirectives(),b.container.find(".im-tp-do-m-container").each(function(a){if($(this).find(".im-tp-do-m-background").length>0){var b=c.content.item[a];if(null!==b.layer)for(var d=0;d<b.layer.length;d++)null!==b.layer[d].image&&$(this).find(".im-tp-do-m-background")[0].imMedia.appendLayer(b.layer[d])}}),r=$(".im-tp-do-m-page",b.container).on("mousewheel scroll",N);var f=b.container.find(".scroller");f.length>0&&f.bind("touchmove",function(a){b.onScrollHandler(-1*f.children("div").first().offset().top)})}},this.willLoad=function(){},this.onLoad=function(a){Loader.loadFiles([Config.templatePathView+b.template+"/_text.html",Config.templatePathView+b.template+"/_scroller.html",Config.templatePathView+b.template+"/_video.html",Config.templatePathView+b.template+"/_marker.html",Config.templatePathView+b.template+"/_hotspots.html",Config.templatePathView+b.template+"/_title.html"],function(b){d=Hogan.compile(b[0].response),e=Hogan.compile(b[1].response),f=Hogan.compile(b[0].response+'<div class="sub-overlay"></div>"'),j=Hogan.compile(b[2].response),p=Hogan.compile(b[3].response),h=Hogan.compile(b[4].response),i=Hogan.compile(b[5].response),a()})},this.didLoad=function(a){c=a},this.didAppear=function(a){k&&k.show(),void 0!==o&&clearTimeout(o),o=setTimeout(function(){Magazine.getNavigationController().getParams().item!==a.item&&L(Magazine.getNavigationController().getParams().item,a.item),b.controller.checkHash(Magazine.getNavigationController().getParams(),Magazine.getNavigationController().getParams().item!==a.item),clearTimeout(o),o=void 0},1e3)},this.willAppear=function(a){$(".im-n-buttons-circle .im-n-button",b.container).startAnimation("fadeInUp"),k&&k.onScroll((parseInt(a.item)||0)*Magazine.pages.height,((parseInt(a.item)||0)+1)*Magazine.pages.height,c.content.item.length*Magazine.pages.height)},this.onHashChange=function(a){this.checkHash(a,!0)},this.checkHash=function(a,d){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){if(void 0!==a.item){var e=m.getPage(a.item),f=e.getData();if(void 0!==a.h){f._current&&f.marker[a.h]._textBalloon!==f._current&&f._current.hide();try{f.marker[a.h]._textBalloon.setPosition(F(f.marker[a.h])),f.marker[a.h]._textBalloon.show(),k&&k.hide(),f._current=f.marker[a.h]._textBalloon}catch(h){Console.error(h)}}else k&&k.show(),$(f.marker).each(function(){this._textBalloon.hide(),e.view.find(".sub-overlay").css("visibility","hidden").css("opacity",0)}),e.view.find(".tp-do-type-text").startAnimation("fadeInUp");this.scrollToggle()}g=m.getPage(a.item||0),k&&k.onScroll((parseInt(a.item)||0)*Magazine.pages.height,((parseInt(a.item)||0)+1)*Magazine.pages.height,c.content.item.length*Magazine.pages.height)}else void 0!==a.item&&(void 0!==a.h&&(n=new SubPage(IMAnimation.bunnyScaleUpIn,IMAnimation.slideOutLeft,!0),void 0!==c.content.item[a.item].marker&&(n.data={title:c.content.item[a.item].marker[a.h].title,description:c.content.item[a.item].marker[a.h].description,image:c.content.item[a.item].marker[a.h].image}),b.pushPage(n)),d===!0&&void 0!==a.h||this.itemToScroll(a.item))},this.itemToScroll=function(a){$(".scroller",b.container).scrollTop($(".scroller",b.container).scrollTop()+$($(".im-tp-do-m-container",b.container)[a]).offset().top)},this.scrollToggle=function(){$(".flex-scroller",b.container).each(function(a){this.scrollHeight<=this.offsetHeight?$(this).removeClass("scroller").height(Magazine.device.screen.height):$(this).addClass("scroller")})},this.render=function(a){for(var c=0;c<a.item.length;c++){a.item[c]["type_"+a.item[c].layout_type]=!0,a.item[c].hasDescription=a.item[c].title||a.item[c].subtitle||a.item[c].description||a.item[c].image||a.item[c].youtube;var d=new StyleModel(a.item[c].style);if(a.item[c].slide_title_style=d.get(["slide_title","slide_title_background"]),a.item[c].title_style=d.get(["title","title_background"]),a.item[c].subtitle_style=d.get(["subtitle","subtitle_background"]),a.item[c].paragraph_style=d.get("paragraph"),a.item[c].paragraph_style_bg=d.get("paragraph_background"),a.item[c].m_slide_title_style=d.get(["m_slide_title","m_slide_title_background"]),a.item[c].m_title_style=d.get("m_title"),a.item[c].m_subtitle_style=d.get("m_subtitle"),a.item[c].m_paragraph_style=d.get("m_paragraph"),a.item[c].m_paragraph_style_bg=d.get("m_paragraph_background"),a.item[c].layout_type===v.HOTSPOTS&&null!==a.item[c].marker)for(var e=0;e<a.item[c].marker.length;e++){var f=a.item[c].marker[e],g=new StyleModel(f.style);f.image&&(f.imageHeight=Math.round(400/f.image.width*f.image.height)),f.text_block_style=g.get(["background","paragraph"])||d.get(["marker_background","marker_paragraph"]),f.title_style=g.get("title")||d.get(["marker_title"]),f.subtitle_style=g.get("subtitle")||d.get(["marker_subtitle"]),f.label_style=g.get(["label_background","label_font"])||d.get(["label_background","label_font"]),null==f.position&&(f.position="40.0 40.0"),f.action=new ActionModel(f.action||"#!/"+b.alias+"/item/"+c+"/h/"+e)}}},this.onEndResizeHandler=function(a){if(void 0!==m&&m.onEndResizeHandler(a),void 0!==q)for(var b=0;b<q.length;b++)q[b].imMedia&&q[b].imMedia.onEndResizeHandler();this.scrollToggle()},this.onOrientationChange=function(a){},this.willDisappear=function(){},this.didDisappear=function(){void 0!==m&&m.didDisappear()},this.destroy=function(){void 0!==n&&(n=void 0),void 0!==m&&(m.release(),m=void 0),void 0!==q&&(q=void 0)}}Loader.loadComplete();