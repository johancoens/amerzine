function Gallery02Controller(){"use strict";var a,b,c,d,e,f,g,h,i,j=null,k=!1,l=null,m=0,n=null,o=!1,p=null,q=[],r=200,s=function(){e=$(".wrapper",a.container);var b=e.find(".scroller");b.bind("touchmove",function(c){a.onScrollHandler(b.children("div").first().offset().top*-1)})},t=function(){if(e=$(".im-g2-overview",a.container),null!==b.content.background&&a.getBackground().init([b.content.background]),b.content.sidebar){a.container.addClass("im-g2-sidebar");var c=a.container.find(".im-side-block .im-ts-paragraph"),d=c.children("p");d.length>0&&c.css("text-align",$(d[0]).css("text-align")),c.children().each(function(a){$(this).css(Magazine.device.getCssProperty("animation-delay"),200*a+400+"ms")})}if(a.hasBackground&&(e.prepend(a.getBackground().render()),a.getBackground().show()),r=b.content.block_size||r,null!==b.content.item){for(var f=0;f<b.content.item.length;f++){var h=b.content.item[f];if(null!==h.item){for(var i=(new DynamicGrid).init($(a.container.find(".im-g2-gallery")[f]).children(".im-g2-image"),{maxCols:5,maxBlockWidth:r+100,minBlockWidth:r,loadCount:20,padding:b.content.padding||2,align:b.content.text_align,fixedBlockHeight:!0}),j=0;j<h.item.length;j++){var k=$(g.render($.extend(h.item[j],{urlbase:"#!/"+a.alias,gallery:f})));k.scanDirectives(a),i.add(k,{width:1,height:1})}q.push(i)}}z()}},u=function(a){Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&(d.find(".im-tp-g2-list li.active").removeClass("active"),$(d.find(".im-tp-g2-list li")[a]).addClass("active"))},v=function(c){if(l[0].imGallery.setMedia(b.content.item[c].item),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){f.html(""),f.attr("style","width: "+124*b.content.item[c].item.length+"px;");for(var g=0;g<b.content.item[c].item.length;g++){var h=b.content.item[c].item[g];f.append(i.render($.extend({},{gallery:c},h)))}f.scanDirectives(a)}e.startAnimation(Animation.scaleUpOut),d.startAnimation(Animation.scaleDownIn),d.addClass("show").addClass("open"),a.controller.onEndResizeHandler(Magazine.device)},w=function(a){k&&(e.startAnimation(Animation.scaleDownIn),d.addClass("hide"),d.startAnimation(Animation.scaleUpOut,{},function(){Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&z(),d.removeClass("hide"),d.removeClass("show").removeClass("open"),"function"==typeof a&&a()}),l[0].imGallery.pause(),k=!1)},x=function(a,b){if(k&&m===a)return u(b),void d.find(".im-gallery-directive")[0].imGallery.jumpTo(b);if(k){return void w(function(){x(a,b)})}null!==j&&j.disable(),null!==n&&n.disable(),m=a,c=b,v(a),d.find(".im-gallery-directive")[0].imGallery.jumpTo(b,null,!1),u(b),k=!0},y=function(){var c=!1;"top"==b.content.nav_type&&(b.content.nav_type="circle",c=!0),n.init($(".im-g2-overview",a.container),NavigationButtonType[b.content.nav_type.toUpperCase()]),n.type.top=c},z=function(){if(null===j){var c=$(".im-g2-container",a.container);j=new ScrollHandler,j.onScroll=function(b,c){a.onScrollHandler(b)},j.height=Magazine.pages.height,j.init(c,c.children(".im-g2-content"))}else j.enable();null===n?null!==b.content.nav_type&&"undefined"!=typeof b.content.nav_type&&(n=new NavigationButtons,y(),n.setScrollHandler(j)):n.enable()},A=function(){d.append(h.render(b.content)),l=d.scanDirectives(a),l[0].imGallery.onChange=function(b,e,f){if(c=b,document.location.hash="#!/"+a.alias+"/item/"+m+"/image/"+b,null!==p){var g=$(d.find(".im-tp-g2-list li")[b]);p.scrollTo(-(g.parent().offset().left-g.offset().left)-(Magazine.pages.width-100)/2)}},a.container.find(".im-ts-button.arrow-right").on("click",B),a.container.find(".im-ts-button.arrow-left").on("click",C),a.container.find(".im-ts-button.arrow-left-list").on("click",function(){p.up(!1)}),a.container.find(".im-ts-button.arrow-right-list").on("click",function(){p.down(!1)}),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&(f=$(".im-tp-g2-list",a.container),p=new ScrollHandler,p.onScroll=function(b,c){a.onScrollHandler(b)},p.delta=Magazine.pages.width,p.init(f.parent(),f,{orientation:"horizontal"}),p.width=Magazine.pages.width-100)},B=function(){o=!0,d.find(".im-gallery-directive")[0].imGallery.up()},C=function(){o=!0,d.find(".im-gallery-directive")[0].imGallery.down()};this.init=function(b){a=b},this.onLoad=function(b){Loader.loadFiles([Config.templatePathView+a.template+"/image.html",Config.templatePathView+a.template+"/details.html",Config.templatePathView+a.template+"/list.html"],function(a){g=Hogan.compile(a[0].response),h=Hogan.compile(a[1].response),i=Hogan.compile(a[2].response),b()})},this.willLoadView=function(a){},this.didLoadView=function(){a.scanDirectives(),d=$(".im-g2-details",a.container),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?t():s(),A(),d.hide()},this.willLoad=function(){},this.didLoad=function(a){b=a},this.didAppear=function(b){Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&a.isFirstView()&&($(".im-db-block, .im-g2-intro, .im-side-block",a.container).css("opacity",1),$(".im-side-block",a.container).startAnimation(Animation.fadeInUp),$(".im-side-block",a.container).children(".im-ts-paragraph").children().startAnimation(Animation.fadeInUp),$(".im-db-block",a.container).startAnimation(Animation.fadeInUp),$(".im-g2-intro",a.container).startAnimation(Animation.fadeInUp),n&&(j.canScroll()?n.show():n.hide())),a.isFirstView()&&$(".im-ts-title-background, .im-ts-subtitle-background, .im-ts-paragraph",a.container).each(function(){$(this).hasClass("im-align")||$(this).hasTransparentBackground()&&$(this).css("padding","0")}),"undefined"!=typeof b.item?x(b.item,b.image||0):k&&m&&(window.location.hash="#!/"+a.alias+"/item/"+m+"/image/"+c)},this.willAppear=function(b){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){for(var c=0;c<q.length;c++)q[c].setPosition();a.isFirstView()&&($(".im-db-block",a.container).each(function(a){$(this).css(Magazine.device.getCssProperty("animation-delay"),100*a+300+"ms").css("opacity","0")}),$(".im-g2-intro, .im-side-block",a.container).each(function(a){$(this).css(Magazine.device.getCssProperty("animation-delay"),400*a+"ms").css("opacity","0")}))}},this.onHashChange=function(a){if(o)return void(o=!1);try{"undefined"!=typeof a.item?x(a.item,a.image||0):k&&w()}catch(a){Console.error(a)}},this.onOrientationChange=function(a){},this.willDisappear=function(){},this.didDisappear=function(){},this.onResizeHandler=function(c){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){if(b.content.sidebar&&a.container.children(".im-g2-container").css({width:Magazine.pages.width-380}),null!==j&&(j.height=a.container.height(),j.onResizeHandler(c),null!==n&&(j.canScroll()?n.show():n.hide())),a.container.find(".im-tp-g2-detail-list").width(Magazine.pages.width-100),0!==b.content.header_space&&b.content.header_space>0){var d=$(".im-g2-items",a.container),e=Math.round(Magazine.pages.height*(parseInt(b.content.header_space||0)/100));e+d.outerHeight()<Magazine.pages.height?d.css({position:"absolute",bottom:0,width:"100%"}).parent().css({height:"100%",width:"100%",position:"relative"}):($(".im-g2-container-spacing",a.container).css({height:e}).parent().css({height:"",width:"",position:""}),d.css({position:"relative",bottom:""}))}}else $(".im-tp-g2-gallery",a.container).children(".im-media").each(function(){$(this).height($(this).width())})},this.onEndResizeHandler=function(b){var c;if(null!==l&&l.length>0)for(c=0;c<l.length;c++)"undefined"!=typeof l[c].imGallery&&l[c].imGallery.onEndResizeHandler(b);for(c=0;c<q.length;c++)q[c].setPosition();p&&p.canScroll()?a.container.find(".arrow-left-list,.arrow-right-list").show():a.container.find(".arrow-left-list,.arrow-right-list").hide()},this.destroy=function(){k=!1,q=[],null!==j&&j.release(),j=null,null!==p&&p.release(),p=null,null!==n&&n.release(),n=null,a.container.find(".im-ts-button.arrow-left-list").off(),a.container.find(".im-ts-button.arrow-right-list").off(),a.container.find(".im-ts-button.arrow-left").off(),a.container.find(".im-ts-button.arrow-right").off();for(var b=0;b<q.length;b++)q[b].release();null!==d&&(d.html(""),l=null)},this.render=function(b){try{var c=0;if(b.image&&(b.image.width>250?(b.image_height=Math.round(250/b.image.width*b.image.height),b.image_width=250):(b.image_height=b.image.height,b.image_width=b.image.width)),b.urlbase="#!/"+a.alias,b.carousel_settings={slide:!0},null===b.item)return;for(var d=0;d<b.item.length;d++){b.item[d].i=d;var e=new StyleModel(b.item[d].style);if(b.item[d].paragraph_style=e.get(["paragraph_background","paragraph"]),b.item[d].title_style=e.get(["title_background","title"]),b.item[d].subtitle_style=e.get(["subtitle_background","subtitle"]),b.item[d].m_title_style=e.get(["m_title"]),b.item[d].m_subtitle_style=e.get(["m_subtitle"]),b.item[d].m_paragraph_style=e.get(["m_paragraph"]),null!==b.item[d].item)for(var f=0;f<b.item[d].item.length;f++)b.item[d].item[f].index=c,b.item[d].item[f].j=f,f%4===3&&(b.item[d].item[f].isLast=!0)}}catch(a){Console.error("Incomplete data"+a)}}}Loader.loadComplete();