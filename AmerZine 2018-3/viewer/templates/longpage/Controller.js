function LongpageController(){function a(){m.each(function(a){"undefined"!=typeof $(this)[0].imParallax&&$(this)[0].imParallax.onScroll()});var a=j.scrollTop(),b=c(),d=100/(b/a);0!==b&&(null!==o&&o.onScroll(a,a+Magazine.pages.height,j[0].scrollHeight),Math.floor(d/25)!=l&&(l=Math.floor(d/25),Magazine.tracker.trackEvent("Scroll",a>k?"Down":"Up",25*l+"%")),k=a,$(".im-scroll-handler-sticky",j).each(function(a){var b=$(this),c=Boolean(b.data("sh-disabled")),d=parseInt(b.data("sh-start")),e=parseInt(b.data("sh-end"));return c?void b.css("top","").css("bottom",-b.outerHeight()+"px").css(Magazine.device.getCssProperty("transform"),""):(b.css("bottom",""),void(k>=d?Magazine.device.isIE8?b.css("top",Math.min(e-d,k-d)+"px"):b.css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,Math.min(e-d,k-d))):Magazine.device.isIE8?b.css("top",""):b.css(Magazine.device.getCssProperty("transform"),"")))}))}function b(b){var c=$(".im-tp-lp-container",j).scrollTop();$(".im-scroll-handler-sticky",j).each(function(){var a=$(this),b=a.parent().height(),d=c+a.parent().offset().top,e=Magazine.pages.height-a.outerHeight(),f=Boolean(a.data("sh-disabled"));f?a.css("top","").css("bottom",-a.outerHeight()+"px").css(Magazine.device.getCssProperty("transform"),""):a.css({top:e+"px"}),void 0===k&&(k=0),a.data("sh-start",d+k),a.data("sh-end",d+k+(b-e))}),b&&a()}function c(){return"undefined"!=typeof j?Math.max(0,j[0].scrollHeight-Magazine.pages.height):0}function d(a,b){$(a).each(function(){var a=$(this).find(".c-buttons"),c=$(this).find(".nav-dots");Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE?(a.css("display","none"),c.css("display","block")):null===b?(a.css("display","block"),c.css("display","none"),$(this).css("padding-bottom","0px")):(a.css("display","none"),c.css("display","block"),$(this).css("padding-bottom","44px")),(Magazine.device.isIE8||Magazine.device.isIE9)&&(c.css("display","none"),a.css("display","block"))})}function e(){Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE&&$(".carousel",g.container).each(function(){var a=[];$(this).find(".slide-content").each(function(b){a.push($(this).innerHeight())});var b=Math.max.apply(null,a);$(this).find(".im-scroll-handler-sticky").data("sh-disabled",b<Magazine.pages.height),$(this).find(".im-tp-lp-carousel").css("height",b)})}function f(){var a,b,c,d,f=[];Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?$(".carousel",g.container).each(function(){a=$(this).index(),$(".slide-container",this).each(function(e){b=e,c=$(this).parent().width(),d=h.content.row[a].row_column_1[b].image,d&&($(this).find(".slide-content .im-media").height(c/d.width*d.height),f.push($(this).children().outerHeight()))}),f.push($(".paragraph",this).outerHeight());var e=Math.max.apply(Math,f);$(this).find(".im-scroll-handler-sticky").data("sh-disabled",e<Magazine.pages.height),$(this).height(e),f=[]}):(e(),$(".carousel",g.container).css("height","").find(".slide-content .im-media").css("height",""))}var g,h,i,j,k,l,m,n,o=null,p=[],q={image_slider:0,text_over:1,text:2,text_img:3,text_video:4,slider:5,carousel:6,custom:7};this.clickHandler=!1;var r=this;this.init=function(a){g=a},this.initSliders=function(){n=[];for(var a in h.content.row)if(h.content.row[a].row_type==q.image_slider&&"undefined"!=typeof $(".im-tp-lp-slider",g.container)[n.length]){var b={media:$(".im-tp-lp-slider",g.container)[n.length].imMedia,data:h.content.row[a].cover};b.media.useCarousel(!0);for(var a in b.data){var c=b.data[a],d=new StyleModel(c.style);null!==c.background&&b.media.addImage({src:c.background,title:c.title_1,titleStyle:d.get(["line_1_bg","line_1_font"]),titleStyleMobile:d.get(["m_line_1_bg","m_line_1_font"]),subtitle:c.title_2,subtitleStyle:d.get(["line_2_bg","line_2_font"]),subtitleStyleMobile:d.get(["m_line_2_bg","m_line_2_font"]),position:c.position?c.position.split(" "):null})}b.media.render(),n.push(b)}},this.initOver=function(a,b){var c,d,e,f,h=!1;f=$(g.container.find(".row")[b]),e=f.find(".im-tp-lp-over"),c=new Background,c.init([a.background]),e.append(c.render()),c.show(),p.push(c),f[0].background=c,d=new TextBlock,d.init(),d.order=["title","subtitle","description","button"],d.setTitle(a.title),d.setSubtitle(a.subtitle),d.setDescription(a.description),a.read_more_button&&d.setButton(Translate.getLabel("btn_more"),function(a){a.preventDefault(),g.controller.down(Magazine.pages.height),Magazine.tracker.trackEvent("Scroll","Click","Down")}),Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE?(void 0!==a.style&&null!==a.style&&c.setOverlayStyle(a.style.m_background_overlay),d.setPosition("4 4"),d.setSize("96%")):(c.setOverlayStyle(""),d.setPosition(a.margin),d.setSize(a.width)),d.setStyle(a.style),d.appendTo(e),e[0].onSwitchSize=function(b){b.size<=DeviceSize.MOBILE_LANDSCAPE?(d.setPosition("4 4"),"undefined"!=typeof a.style&&null!==a.style&&c.setOverlayStyle(a.style.m_background_overlay),d.setSize("96%")):(d.setPosition(a.margin),d.setSize(700),c.setOverlayStyle(""),h&&(e.css("height",""),h=!1)),d.onSwitchSize(b)},e[0].onResizeHandler=function(a){if(a.size<=DeviceSize.MOBILE_LANDSCAPE&&null!==d){var b=d.height();b+40>Magazine.pages.height?(h=!0,e.css("height",b+40+"px")):(e.css("height",Magazine.pages.height+"px"),h=!1)}else e.css("height",Magazine.pages.height+"px")}},this.up=function(a){this.scrollTo(j.scrollTop()-a)},this.down=function(a){this.scrollTo(j.scrollTop()+a)},this.willLoadView=function(a){},this.onClickSlider=function(){if(!$(this).hasClass("active")){$(this).parent().children().index($(this));Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&r.onShowColByIndex($(this),$(this).closest(".im-lp-column.slider"))}},this.onCloseSlider=function(a){r.onShowColByIndex(null,$(this).closest(".im-lp-column.slider")),a.preventDefault(),a.stopPropagation()},this.onShowColByIndex=function(a,b){var c=b.children().length;Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&(b.children().each(function(){a?$(this).css({width:Math.floor(43.4/(c-1)*100)/100+"%"}):$(this).css({width:100/c+"%"}),$(this).find(".absoluteview .paragraph",g.container).startAnimation("fadeOut"),$(this).find(".im-ts-button",g.container).startAnimation("fadeOut"),$(this).removeClass("active"),$(this).find(".absoluteview",g.container).removeClass("active")}),a&&(a.addClass("active"),a.css({width:"56.6%"}),a.find(".im-ts-button",g.container).startAnimation("fadeIn"),a.find(".absoluteview .paragraph",g.container).length>0&&(a.find(".absoluteview",g.container).addClass("active"),a.find(".absoluteview .paragraph",g.container).startAnimation("fadeInUp"))))},this.fitHeight=function(a){var b,c,d=".paragraph",e=h.content.row;a===q.text_img?b=".im-lp-img":a===q.text_video&&(b=".im-video"),g.container.find(".grid_container").children().each(function(f){e[f].row_type==a&&($(d,this).outerHeight()<=$(b,this).innerHeight()?(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?(c=Math.max($(d,this).height(),$(b,this).height()),$(this).css("height",c||"auto")):$(this).css("height","auto"),$(b,this).css("margin-top","")):($(this).css("height","auto"),$(b,this).css("margin-top","16px")))})},this.destroy=function(){o.release(),o=null},this.didLoadView=function(){m=g.scanDirectives(),Magazine.device.size>DeviceSize.MOBILE&&(this.clickHandlers=!0,g.container.find(".slider").children("div").on("click",this.onClickSlider),g.container.find(".slider").children("div").find(".im-ts-button").on("click",this.onCloseSlider)),g.isFirstView()&&g.container.find(".row-1").css("opacity",1);var b=0,c=0;for(b=0;b<h.content.row.length;b++)h.content.row[b].row_type===q.text_over?this.initOver(h.content.row[b].cover_item[0],b):h.content.row[b].row_type===q.carousel&&(d(g.container.find(".carousel")[c],h.content.row[b].carousel_nav),c++);i=[],$(".row-title",g.container).each(function(){var a=(new AbsoluteView).init($(".row-title",g.container));a.setPosition($(this).data("position")),i.push(a)});var e=[],k=this;if(g.container.find(".carousel").each(function(){e.push(new k.slider($(this))),$($(this).find(".nav-dots").children()[0]).addClass("active")}),null!==h.content.nav_type){o=new NavigationButtons;var l=!1;"top"===h.content.nav_type&&(h.content.nav_type="circle",l=!0),o.init(g.container,NavigationButtonType[h.content.nav_type.toUpperCase()]),l===!0?o.type.top=!0:o.type.top=!1,o.onUp=function(){k.scrollTo(j.scrollTop()-Magazine.pages.height-50),Magazine.tracker.trackEvent("Scroll","Click","Up")},o.onDown=function(){k.scrollTo(j.scrollTop()+Magazine.pages.height-50),Magazine.tracker.trackEvent("Scroll","Click","Down")}}j=$(".im-tp-lp-container",g.container).on("mousewheel scroll",a),this.fitHeight(q.text_img),this.fitHeight(q.text_video),this.initSliders(),f()},this.scrollTo=function(b){var c,d={y:j.scrollTop()};if(isNaN(b)){if(0==b.length)return;c=j.scrollTop()+b.offset().top-Magazine.pages.offset.top+b.outerHeight()}else c=b;TweenLite.to(d,2,{y:c,ease:"easeInOutCubic",onUpdate:function(){j.scrollTop(d.y),a()}})},this.willLoad=function(){},this.didLoad=function(a){h=a},this.getElementHeight=function(a,b){var c=!1;$(".im-lp-column img",a).each(function(){return 0!==$(this).height()||c?void 0:(setTimeout(function(){r.getElementHeight(a,b)},100),void(c=!0))}),c||b($(".im-lp-column",a).map(function(){return $(this).outerHeight()}).get())},this.didAppear=function(){j.children().length;$(".alignHeight",g.container).each(function(){r.getElementHeight($(this),function(a){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){var b=Math.max.apply(null,a);$(".im-lp-column",this).height(5>b?"auto":b)}else $(".im-lp-column",this).height("auto")})}),$(".im-tp-lp-slider",g.container).each(function(){this.imMedia.show()}),null!==o&&o.show()},this.willDisappear=function(a){m.find(".im-video").each(function(){this.imMedia.pause()}),$(".im-tp-lp-slider",g.container).each(function(){this.imMedia.pause()})},this.didDisappear=function(a){m.each(function(a){"undefined"!=typeof $(this)[0].imParallax&&$(this)[0].imParallax.didDisappear()})},this.willAppear=function(a){},this.onHashChange=function(a){},this.onOrientationChange=function(){},this.onSwitchSize=function(a){g.container.find(".im-tp-lp-over").each(function(){this.onSwitchSize(a)});var b=0,c=0;for(b=0;b<h.content.row.length;b++)h.content.row[b].row_type===q.carousel&&(d(g.container.find(".carousel")[c],h.content.row[b].carousel_nav),c++);Magazine.device.size<=DeviceSize.MOBILE_LANDSCAPE&&$(".alignHeight",g.container).each(function(){$(".im-lp-column",this).height("auto")})},this.onResizeHandler=function(a){},this.onEndResizeHandler=function(a){if(a.size>DeviceSize.MOBILE&&!this.clickHandlers?(this.clickHandlers=!0,g.container.find(".slider").children("div").on("click",this.onClickSlider)):a.size==DeviceSize.MOBILE&&this.clickHandlers&&(this.clickHandlers=!1,g.container.find(".slider").children("div").off("click",this.onClickSlider)),m.each(function(){void 0!==$(this)[0].imParallax&&$(this)[0].imParallax.onResizeHandler(a)}),g.container.find(".im-tp-lp-over").each(function(){this.onResizeHandler(a)}),null!==p)for(var c=0;c<p.length;c++)p[c].onEndResizeHandler(a);m.each(function(){void 0!==$(this)[0].imMedia&&($(this).parent().hasClass("slide-content")&&$(this)[0].imMedia.containSize(),$(this)[0].imMedia.onEndResizeHandler(a))}),f(),this.fitHeight(q.text_img),this.fitHeight(q.text_video),b(!0)},this.rowWillAppear=function(a){var c,d,e,f,i,j=IntroAnimation.contentType,k=IntroAnimation.textType,l=IntroAnimation.contentDelay,m=.5*IntroAnimation.textDelay,n=$(this).children();switch($(this).css("opacity",1),!0){case $(this).hasClass("row-0"):c=".absoluteview, .im-ts-paragraph",f=!0,i=0;break;case $(this).hasClass("row-1"):n=$(this).find(".im-absolute-view").children().children(),$(this).find(".im-cl-text-block").css("opacity",1),c=".absoluteview, .im-ts-paragraph",e=!0,i=1,$(this)[0].background.pageWillAppear();break;case $(this).hasClass("row-2"):c=".paragraph",e=!0,i=2;break;case $(this).hasClass("row-3"):c=".paragraph",i=3;break;case $(this).hasClass("row-4"):c=".paragraph",e=!0,i=4;break;case $(this).hasClass("row-5"):e=!0,i=5;break;case $(this).hasClass("row-6"):c=".im-cl-text-block",d=!0,i=6;break;case $(this).hasClass("row-7"):c=".paragraph",e=!0,i=7}this.imParallax.isFirstView()&&Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&n.each(function(a){if(d===!0||e===!0||f===!0){var g=$(this);Magazine.device.isIE8||g.startAnimation(j,{},function(){6===i&&b(!1)}),g.css(Magazine.device.getCssProperty("animation-delay"),a*l+"ms").css(Magazine.device.getCssProperty("AnimationDuration"),IntroAnimation.duration)}$(this).find(c).children().each(function(a){$(this).startAnimation(k).css(Magazine.device.getCssProperty("animation-delay"),(a+1)*m+l+"ms").css(Magazine.device.getCssProperty("AnimationDuration"),IntroAnimation.duration)})});var a=$(this).index();rowData=h.content.row[a],rowData.row_type==q.image_slider&&$(".im-tp-lp-slider",g.container).each(function(){this.imMedia.show()})},this.rowDidDisappear=function(){var a=$(this).index();rowData=h.content.row[a],rowData.row_type==q.text_video||rowData.row_type==q.custom?m.find(".im-video").each(function(){this.imMedia.pause()}):rowData.row_type==q.image_slider?$(".im-tp-lp-slider",g.container).each(function(){this.imMedia.pause()}):rowData.row_type==q.text_over&&$(this)[0].background.pageDidDisappear()},this.slider=function(a){var b=".nav-dots, .c-buttons";$(a.find(".im-tp-lp-carousel li")[0]).addClass("active"),a.find(b).children().on("click",function(b){b.preventDefault();var c=0;c="undefined"!=typeof $(this).data("index")?$(this).data("index"):$(this).index(),a.find(".nav-dots").children(".active").removeClass("active"),$(a.find(".nav-dots").children()[c]).addClass("active"),a.find(".im-tp-lp-carousel").children(".active").removeClass("active"),$(a.find(".im-tp-lp-carousel").children()[c]).addClass("active")})},this.render=function(a){for(var b,c=0;c<a.row.length;c++){a.row[c].type={},a.row[c].background_style=new StyleModel(a.row[c].row_style).get(["background"]),a.row[c].type[a.row[c].row_type]=!0;var d=new StyleModel(a.row[c].style);if(a.row[c].title_style=d.get(["title_background","title"]),a.row[c].m_title_style=d.get(["m_title"]),a.row[c].subtitle_style=d.get(["subtitle","subtitle_background"]),a.row[c].m_style=d.get(["m_subtitle"]),(a.row[c].align_height||a.row[c].row_type===q.carousel||a.row[c].row_type===q.custom)&&(a.row[c].align_height="alignHeight"),b=a.row[c],b.row_type===q.custom){b.isCustom=!0;for(var e=0;e<b.column.length;e++){var f=b.column[e];3==f.layout_type&&(f.layout_type=2),f["layout"+f.layout_type]=!0,f.className="",b.column.length-1==e&&(f.className="last");var d=new StyleModel(f.style);f.background_style=d.get(["background"]),f.title_style=d.get(["title","title_background"]),f.m_title_style=d.get(["m_title","m_title_background"]),f.subtitle_style=d.get(["subtitle","subtitle_background"]),f.m_subtitle_style=d.get(["m_subtitle","m_subtitle_background"]),f.paragraph_style=d.get(["paragraph"]),f.m_paragraph_style=d.get(["m_paragraph"])}}else if(b.row_type===q.slider){var g=b.slider.length;b.has_margin="",b.isSlider=!0;for(var h=0;h<b.slider.length;h++){var i=b.slider[h];i.width=Math.floor(100/g*100)/100,i.height=b.height,Magazine.device.isIE8&&i.height.indexOf("vh")&&(i.height=parseInt(Magazine.pages.height*(parseInt(i.height)/100))+"px"),i.action=new ActionModel(i.action);var d=new StyleModel(i.style);i.title_style=d.get(["title","title_background"]),i.m_title_style=d.get(["m_title","m_title_background"]),i.subtitle_style=d.get(["subtitle","subtitle_background"]),i.m_subtitle_style=d.get(["m_subtitle","m_subtitle_background"]),i.paragraph_style=d.get(["paragraph","paragraph_background"]),i.m_paragraph_style=d.get(["m_paragraph","m_paragraph_background"])}}else if(b.row_type===q.carousel){b.align_height="";b.row_column_1.length;b.isSlider=!1,b.isCarousel=!0,b.has_margin="";var d=new StyleModel(b.style);b.background_style=d.get(["background"]),b.title_style=d.get(["title"]),b.m_title_style=d.get(["m_title"]),b.subtitle_style=d.get(["subtitle"]),b.m_subtitle_style=d.get(["m_subtitle"]),b.paragraph_style=d.get(["paragraph"]),b.m_paragraph_style=d.get(["m_paragraph"]),b.navigation_style=d.get(["navigation_background"]);for(var h=0;h<b.row_column_1.length;h++){var j=b.row_column_1[h],k=new StyleModel(j.style);j.image_height=j.title_style=k.get(["title"]),j.background_style=k.get(["background"]),j.subtitle_style=k.get(["subtitle"]),j.label_style=k.get(["label","label_background"]),j.paragraph_style=k.get(["paragraph"]),j.m_title_style=k.get(["m_title"]),j.m_subtitle_style=k.get(["m_subtitle"]),j.m_paragraph_style=k.get(["m_paragraph"])}}else if(b.row_type===q.text){var l=b.text_item[0],d=new StyleModel(l.style);b.background_style=d.get(["background"]),b.title_style=d.get(["title"]),b.subtitle_style=d.get(["subtitle"]),b.paragraph_style=d.get(["paragraph"]),b.m_title_style=d.get(["m_title"]),b.m_subtitle_style=d.get(["m_subtitle"]),b.m_paragraph_style=d.get(["m_paragraph"])}else if(b.row_type===q.text_img){if(null===b.item)return;var m=b.item[0].type;switch(m){case 0:b["float"]="left",b.image_size=8,b.text_size=4;break;case 1:b["float"]="left",b.image_size=6,b.text_size=6;break;case 2:b["float"]="left",b.image_size=4,b.text_size=8;break;case 3:b["float"]="right",b.image_size=4,b.text_size=8;break;case 4:b["float"]="right",b.image_size=6,b.text_size=6;break;case 5:b["float"]="right",b.image_size=8,b.text_size=4;break;default:b["float"]="left",b.image_size=6,b.text_size=6}var n=b.item[0],d=new StyleModel(n.style);b.background_style=d.get(["background"]),b.title_style=d.get(["title"]),b.subtitle_style=d.get(["subtitle"]),b.paragraph_style=d.get(["paragraph"]),b.m_title_style=d.get(["m_title"]),b.m_subtitle_style=d.get(["m_subtitle"]),b.m_paragraph_style=d.get(["m_paragraph"])}else if(b.row_type===q.image_slider);else if(b.row_type===q.text_over){var d=new StyleModel(b.style);b.background_style=d.get(["background"]),b.title_style=d.get(["title","title_background"]),b.subtitle_style=d.get(["subtitle","subtitle_background"]),b.paragraph=d.get(["paragraph","paragraph_background"]),b.m_title_style=d.get(["m_title","m_title_background"]),b.m_subtitle_style=d.get(["m_subtitle","m_subtitle_background"]),b.m_paragraph=d.get(["m_paragraph","m_paragraph_background"]),b.mobile_background_overlay=d.get(["m_background_overlay"])}else if(b.row_type===q.text_video){if(null===b.video_item)return;var m=b.video_item[0].type;switch(null!==b.video_item[0].youtube&&void 0!==b.video_item[0].youtube&&(void 0!==b.video_item[0].youtube.settings&&0!==b.video_item[0].youtube.settings.length||(b.video_item[0].youtube.settings={}),b.video_item[0].youtube.settings.autoresize=!0,b.video_item[0].youtube.settings.flexible_height=!0),m){case 0:b["float"]="left",b.video_size=8,b.text_size=4;break;case 1:b["float"]="left",b.video_size=6,b.text_size=6;break;case 2:b["float"]="right",b.video_size=8,b.text_size=4;break;case 3:b["float"]="right",b.video_size=6,b.text_size=6;break;default:b["float"]="left",b.video_size=6,b.text_size=6}var d=new StyleModel(b.style),o=b.video_item[0],d=new StyleModel(o.style);b.background_style=d.get(["background"]),b.title_style=d.get(["title"]),b.subtitle_style=d.get(["subtitle"]),b.paragraph_style=d.get(["paragraph"]),b.m_title_style=d.get(["m_title"]),b.m_subtitle_style=d.get(["m_subtitle"]),b.m_paragraph_style=d.get(["m_paragraph"])}}}}Loader.loadComplete();