function FlexiblepagerController(){function a(){var a=!1;"top"==f.content.nav_type&&(f.content.nav_type="circle",a=!0),v.init(e.container,NavigationButtonType[f.content.nav_type.toUpperCase()]),v.setTop(a)}function b(a){o.each(function(){void 0!==$(this)[0].imParallax&&$(this)[0].imParallax.onScroll()});var b=a.scrollTop(),c=Math.max(0,a[0].scrollHeight-Magazine.pages.height),d=100/(c/b);void 0!==v&&null!==v&&v.onScroll(b,b+Magazine.pages.height,a[0].scrollHeight),Math.floor(d/25)!=p&&(p=Math.floor(d/25),Magazine.tracker.trackEvent("Scroll",b>h?"Down":"Up",25*p+"%")),h=b,e.onScrollHandler(b)}function c(){if(u.length>0)for(var a in u)u[a].pause()}function d(){for(var a=0;a<n.length;a++)"function"==typeof n[a].didDisappear&&n[a].didDisappear()}var e,f,g,h,i,j={FULLSCREEN_TEXT:0,TITLE_SUBTITLE:1,TEXT:2,IMAGE_TEXT:3,VIDEO:4,CAROUSEL:5,BLOCK:6,VERTICAL:7,MAP:8,SHARE:9,SINGLE_BLOCK:99,SINGLE_VERTICAL_BLOCK:98},k={FULLSCREEN_TEXT:0,TITLE_SUBTITLE:1,TEXT:2,IMAGE_TEXT:3,VIDEO:4,CAROUSEL:5,BLOCK:6,VERTICAL:6,MAP:7,SHARE:8,SINGLE_BLOCK:9,SINGLE_VERTICAL_BLOCK:10},l=this,m=140,n=[],o=[],p=0,q=IntroAnimation.contentType,r=IntroAnimation.textType,s=IntroAnimation.textDelay,t=IntroAnimation.contentDelay,u=[],v=null,w=!0,x=[{height:m,width:m},{height:m,width:2*m},{height:2*m,width:m},{height:2*m,width:2*m},{height:m,width:4*m}],y=function(a,b){w&&a.children().each(function(a){$(this).startAnimation(b).css(Magazine.device.getCssProperty("animation-delay"),(a+1)*t+"ms"),$(this).hasClass("paragraph")&&$(this).children().each(function(a){$(this).startAnimation(r).css(Magazine.device.getCssProperty("animation-delay"),(a+2)*s+"ms")})})},z=function(a,b){a.type!==j.BLOCK&&("1.5"===a.margin?Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?b.css("margin-bottom","6px"):b.css("margin-bottom","3px"):"2.5"===a.margin&&(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?b.css("margin-bottom","14px"):b.css("margin-bottom","7px")))},A=function(a){for(var b in j)if(a===j[b])return g[k[b]]},B=function(a,b,c){var d=null===b.margin?1.5:parseInt(b.margin),f=(new DynamicGrid).init(a,{maxCols:4,maxBlockWidth:m+100,minBlockWidth:m,loadCount:20,align:"left",padding:d||0,fixedBlockHeight:c,perfectFit:!!d}),g=c?b.block_item:b.vertical_item;if(g)for(var h=0;h<g.length;h++){void 0===g[h].rollover_effect&&(g[h].rollover_effect=1);var i,k=g[h];k.action=new ActionModel(k.action),k.margin=!!d;var l=new StyleModel(g[h].style);1!=k.rollover_effect&&2!=k.rollover_effect&&(k.hasContentOnAppear=!0),k.hasContent=k.title||k.description||k.subtitle,k.background_style=l.get(["background"]),k.title_style=l.get(["title","title_background"]),k.subtitle_style=l.get(["subtitle","subtitle_background"]),k.paragraph_style=l.get(["paragraph","paragraph_background"]),k.mobile_title_style=l.get(["m_title"]),k.mobile_subtitle_style=l.get(["m_subtitle"]),k.mobile_paragraph_style=l.get(["m_paragraph"]),k.effect0=!parseInt(k.rollover_effect)||null===k.rollover_effect,i=c?$(A(j.SINGLE_BLOCK).render(k)):$(A(j.SINGLE_VERTICAL_BLOCK).render(k)),i.scanDirectives(e);var n=x[g[h].block_size];if(void 0===n&&(n=x[0]),!c)if(k.image&&k.image.width){var o=k.image.height/k.image.width*m;n={width:m,height:o}}else n={width:m,height:m};f.add(i,n),c&&!k.effect0&&(new AbsoluteView).init($(".block-content",i)).setPosition(g[h].position)}return{onResizeHandler:function(){f.setPosition(),Magazine.device.requestAnimationFrame(function(){e.container.handleAlignments()})},willAppear:function(){}}},C=function(a,b){if(b.ts_item){b=b.ts_item[0];var c=new TextBlock;return c.init(),c.setTitle(b.title),c.setSubtitle(b.subtitle),c.setStyle(b.style),c.appendTo(a),{onSwitchSize:function(a){c.onSwitchSize(a,!0)}}}},D=function(a,b){function c(){var c=a.find(".paragraph");"2"===b.columns&&(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?(c.removeClass("im-columns-1"),c.addClass("im-columns-2")):(c.removeClass("im-columns-2"),c.addClass("im-columns-1")))}if(b.tx_item){b=b.tx_item[0];var d=new TextBlock;return d.init(),d.setDescription(b.description),d.setColumns(b.columns),d.setStyle(b.style),d.appendTo(a),d.removeRadius(),c(),{onSwitchSize:function(a){d.onSwitchSize(a),c()}}}},E=function(a,b){if(b.fs_item){b=b.fs_item[0];var c=new Background,d=new TextBlock;return c.init([b.background]),a.prepend(c.render()),c.show(),d.init(),d.setTitle(b.title),d.setSubtitle(b.subtitle),d.setDescription(b.description),d.setStyle(b.style),Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE?d.setPosition({bottom:"20px"}):d.setPosition(b.margin),d.appendTo(a),{onSwitchSize:function(a){Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE?d.setPosition({bottom:"20px"}):d.setPosition(b.margin),d.onSwitchSize(a,!0)},willAppear:function(){c.pageWillAppear()},didDisappear:function(){c.pageDidDisappear()},onEndResizeHandler:function(b){d.getHeight()>Magazine.pages.height?a.height(d.height()+50):a.css("height","100%"),c.onEndResizeHandler(b)}}}},F=function(a,b){if(b.vid_item){b=b.vid_item[0];var c=new Video($(a).find($(".im-ts-videocontainer")),b.youtube);return u.push(c),{onSwitchSize:function(a){}}}},G=function(a,b){function c(){var b=a.find(".block-column"),c=a.find(".im-media-image"),d=a.find(".im-media-image")[0].imMedia.getRatio(),e=a.find(".im-media-image")[0].imMedia.getWidth();Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?(b.css("width","50%").css("min-height","200px"),c.height(1/d*e)):(b.css("width","100%").css("min-height","0px"),c.height(1/d*a.width()))}if(b.ti_item)return b=b.ti_item[0],{onSwitchSize:function(a){c()},onEndResizeHandler:function(a){c()},willAppear:function(){}}},H=function(a,b){if(b.so_item)return b=b.so_item[0],{onSwitchSize:function(a){}}},I=function(a,b){var c,d=!0;if(!b.map_item)return{};if("object"==typeof(b=b.map_item[0])&&null!==b){var e=a,f=b;c=new GoogleMaps}var g=function(){_container=$(".im-fop-maps",e),_container.append(c.getView()),c.setHeight(f.map_height);var a=GoogleMaps.getMapDataByUrl(f.maps);c.init({coordinates:a,zoom:a.zoom}),c.addMarker({coordinates:a,action:f.action,image:f.image,animation:f.check})};return{onResizeHandler:function(){c.onResizeHandler()},didAppear:function(){c.triggerResize()},willAppear:function(){d&&(d=!1,g())}}},J=function(a,b){if(!b.cs_item)return{};var c,d,e,f,g=!0,h=null;return function(b,i,j){c=a,d=new ImageCarousel,e=b,f=i;for(var k in e){var l=e[k],m=new ImageCarouselImage;m.init(l.background);var n,o,p=[],q=[];if(null!=l.style){var r=new StyleModel(l.style);p=r.get(["line_1_font","line_1_bg"]),n=r.get(["line_1_mobile_font"]),q=r.get(["line_2_font","line_2_bg"]),o=r.get(["line_2_mobile_font"])}l.title_1&&void 0!==l.title_1&&m.setTitle(l.title_1,p,n),l.title_2&&void 0!==l.title_2&&m.setSubtitle(l.title_2,q,o),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?null!=l.position&&m.setPosition(l.position.split(" ")):m.setPosition("0px","20px"),d.addImage(m)}c.append(d.render()),d.showImage(0),g=!1,h=new ImParallaxDirective,h.init(c,f)}(b.cs_item,l),{willAppear:function(){d&&d.startTimer()},didDisappear:function(){d&&d.stopTimer()},onSwitchSize:function(a){d.reset()}}};this.init=function(a){e=a},this.onLoad=function(a){Loader.loadFiles([Config.templatePathView+e.template+"/_fs-text.html",Config.templatePathView+e.template+"/_title-subtitle.html",Config.templatePathView+e.template+"/_text.html",Config.templatePathView+e.template+"/_text-image.html",Config.templatePathView+e.template+"/_video.html",Config.templatePathView+e.template+"/_carousel.html",Config.templatePathView+e.template+"/_blockrow.html",Config.templatePathView+e.template+"/_map.html",Config.templatePathView+e.template+"/_share.html",Config.templatePathView+e.template+"/_blockitem.html",Config.templatePathView+e.template+"/_verticalitem.html"],function(b){g=[];for(var c=0;c<b.length;c++)g.push(Hogan.compile(b[c].response));a()})},this.didLoad=function(a){f=a},this.render=function(a){for(var b=a.item,c=0;c<b.length;c++){var d=new StyleModel(b[c].style);if(b[c].background_style=d.get(["background"]),b[c].type==j.IMAGE_TEXT){var d=new StyleModel(b[c].ti_item[0].style);b[c].ti_item[0].paragraph_style=d.get(["paragraph"]),b[c].ti_item[0].mobile_paragraph_style=d.get(["m_paragraph"])}}},this.didLoadView=function(){if(f.content.item){for(var b=0;b<f.content.item.length;b++){var c,d=f.content.item[b],g=$(A(d.type).render(d));switch($(".tp-fop-wrapper",e.container).append(g),d.type){case j.FULLSCREEN_TEXT:c=E(g,d);break;case j.TITLE_SUBTITLE:c=C(g,d);break;case j.TEXT:c=D(g,d);break;case j.IMAGE_TEXT:c=G(g,d);break;case j.VIDEO:c=F(g,d);break;case j.CAROUSEL:c=J(g,d);break;case j.BLOCK:c=B(g,d,!0);break;case j.VERTICAL:c=B(g,d,!1);break;case j.MAP:c=I(g,d);break;case j.SHARE:c=H(g,d)}z(d,g),n.push(c),g[0].rowObject=c,i=g.parent().parent()}null!==f.content.nav_type&&void 0!==f.content.nav_type&&(v=new NavigationButtons,a(),v.onUp=function(){l.scrollTo(-Magazine.pages.height),Magazine.tracker.trackEvent("Scroll","Click","Up")},v.onDown=function(){l.scrollTo(Magazine.pages.height),Magazine.tracker.trackEvent("Scroll","Click","Down")}),o=e.scanDirectives(),e.container.find(".dynamicForm").each(function(){new DynamicForm(null,$(this))})}},this.rowWillAppear=function(){if(this.imParallax.isFirstView()){var a,b=$(this).find(".paragraph");switch(!0){case $(this).hasClass("im-tp-fop-fullscreen-text"):case $(this).hasClass("im-tp-fop-title-subtitle"):b=$(this).find(".im-cl-text-block"),a=q;break;case $(this).hasClass("im-tp-fop-block-row"):b=$(this).children().children().hasClass("vertical")?$(this).find(".block-content"):$(this).find(".animated-content"),a=q;break;case $(this).hasClass("im-tp-fop-share"):b=$(this).find(".shareButton"),a=q;break;default:b=$(this).find(".paragraph"),a=r}y(b,a),$(this).startAnimation(q),$(this).css("opacity",1)}"function"==typeof this.rowObject.willAppear&&this.rowObject.willAppear()},this.rowDidDisappear=function(){$(this).hasClass("im-tp-fop-video")&&c(),"function"==typeof this.rowObject.didDisappear&&this.rowObject.didDisappear()},this.willAppear=function(){$(".block-column-image",e.container).each(function(){$(this).find(".im-media-image").height($(this).parent().parent().height())}),$(".im-ts-videocontainer",e.container).each(function(){$(this).height(9*$(this).width()/16)});for(var a=0;a<n.length;a++)n[a]&&"function"==typeof n[a].willAppear&&n[a].willAppear()},this.willDisappear=function(){c(),d()},this.onResizeHandler=function(a){for(var b=0;b<n.length;b++)"function"==typeof n[b].onResizeHandler&&n[b].onResizeHandler(a)},this.didAppear=function(a){$($(".tp-fop-wrapper",e.container)).on("scroll mousewheel",function(){b($(this))}),b($(".tp-fop-wrapper",e.container));for(var c=0;c<n.length;c++)"function"==typeof n[c].didAppear&&n[c].didAppear(a)},this.onEndResizeHandler=function(a){for(var b=0;b<n.length;b++)"function"==typeof n[b].onEndResizeHandler&&n[b].onEndResizeHandler(a)},this.onSwitchSize=function(a){for(var b=0;b<n.length;b++)"function"==typeof n[b].onSwitchSize&&n[b].onSwitchSize(a)},this.scrollTo=function(a){var c,d=$(".tp-fop-wrapper",e.container),f={y:d.scrollTop()};c=isNaN(a)?d.scrollTop()+a.offset().top-Magazine.pages.offset.top:d.scrollTop()+a,c=Math.max(0,Math.min(c,d[0].scrollHeight-d.outerHeight())),TweenLite.to(f,1,{y:c,ease:"easeInOutCubic",onUpdate:function(){d.scrollTop(f.y),b(d)}})}}Loader.loadComplete();