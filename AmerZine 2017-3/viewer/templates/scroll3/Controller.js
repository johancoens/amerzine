function Scroll3Controller(){var a,b,c,d=this,e=null,f=Hogan.compile("<div class='im-sc-scoll-block'>{{#title}}<h1 class='im-ts-title-background'im-object='im-style-directive'data-mobile-style='{{m_title_style}}'data-style='{{title_style}}'>{{{title}}}</h1>{{/title}}{{{video}}}{{#description}}<div class='text-block paragraph im-columns-{{columns}}'im-object='im-style-directive'data-mobile-style='{{m_paragraph_style}}'data-style='{{paragraph_style}}'>{{{description}}}</div>{{/description}}</div>"),g=!1,h=null;this.init=function(b){a=b},this.willLoadView=function(a){},this.didLoadView=function(){Magazine.device.size>DeviceSize.PORTRAIT&&a.getInPageNavigation().enableScroll(a.container),a.container.append(this.getPageController().view),a.getInPageNavigation().setUseButtons(!0);var b=a.getInPageNavigation().getButtons();$(".im-sc-prev-button-wrapper .im-sc-prev-button-circle",a.container).append(b.previous),$(".im-sc-next-button-wrapper .im-sc-next-button-circle",a.container).append(b.next),g=!0,Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&$(".im-sc-scoll-block h1",a.container).length>0&&TweenMax.set($(".im-sc-scoll-block h1",a.container),{opacity:0,y:20}),$(".im-sc-scoll-block .paragraph",a.container).each(function(){var a=$(this).children("p")[0];a&&$(this).parent().css("text-align",$(a).css("text-align"))}),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&($(".im-sc-scoll-block .paragraph",a.container).length>0&&TweenMax.set($(".im-sc-scoll-block .paragraph",a.container),{opacity:0,y:20}),$(".im-sc-next-button-wrapper",a.container).length>0&&TweenMax.set($(".im-sc-next-button-wrapper",a.container),{y:150,opacity:0}))},this.willLoad=function(){},this.getPageController=function(){if(null===e){e=new PageController,e.setAnimationTime(1);var d={didSwipeTo:function(b){a.getInPageNavigation().to(b)},willDisappear:function(b){Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&($(".im-sc-scoll-block h1",a.container).length>0&&TweenMax.to($(".im-sc-scoll-block h1",a.container),.3,{opacity:0,y:20,ease:Power2.easeout}),$(".im-sc-scoll-block .text-block",a.container).length>0&&TweenMax.to($(".im-sc-scoll-block .text-block",a.container),.3,{opacity:0,y:20,ease:Power2.easeout}))},didDisappear:function(a){},didAppear:function(b){a.getInPageNavigation().setDisabled(!1),$(".im-sc-scoll-block h1",a.container).length>0&&TweenMax.to($(".im-sc-scoll-block h1",a.container),.4,{opacity:1,y:0,delay:g?1:0,ease:Power2.easeout}),$(".im-sc-scoll-block .text-block",a.container).length>0&&TweenMax.to($(".im-sc-scoll-block .text-block",a.container),.4,{opacity:1,y:0,delay:g?1.1:.1,ease:Power2.easeout})},willAppear:function(b){a.getInPageNavigation().setDisabled(!0),b.isFirstView&&($(".im-sc-scoll-block h1",b.view).hasTransparentBackground()&&$(".im-sc-scoll-block h1",b.view).css({padding:"0"}),$(".im-sc-scoll-block .text-block",b.view).hasTransparentBackground()&&$(".im-sc-scoll-block .text-block",b.view).css({padding:"0"})),Magazine.device.size>=DeviceSize.PORTRAIT&&$(".im-align",b.view).each(function(){var a=$(this),b=a.attr("class");if(-1!==b.indexOf("center-")){var c=a.outerHeight();a.css({"margin-top":.5*-c+"px",top:"50%"})}if(-1!==b.indexOf("-center")){var d=a.outerWidth();a.css({"margin-left":.5*-d+"px",left:"50%"})}}),b.isLast()?TweenMax.to($(".im-sc-next-button-wrapper",a.container),.5,{y:200,delay:0,opacity:1,ease:Power1.easeOut}):TweenMax.to($(".im-sc-next-button-wrapper",a.container),.5,{y:"0",opacity:1,delay:g?1:0,ease:Power1.easeOut})}};e.init(d);var h=b.content.page;c=[];for(var i in h){var j,k=h[i];j=Magazine.device.type!=DeviceType.MOBILE||Magazine.device.supports("overflow-scroll")?(new AbsoluteView).init():(new AbsoluteView).init(null,"scroller"),j.appendChild(f.render(k)),Magazine.device.size<DeviceSize.PORTRAIT?(e.disableTouch(),j.setPosition({top:"0px",left:"0"})):j.setPosition(k.margin),k.width&&j.view.css({width:k.width,"max-width":"none"}),c.push(j);var l=(new PageControllerPage).init();l.setBackground(k.background),l.append(j.view),e.addPage(l)}}return e},this.didLoad=function(c){b=c;var d=a.getInPageNavigation();d.setIconClass("im-sp-arrow-<>-3","im-sp-arrow-<>-4","80-1_4"),d.addButtonClass("","im-ts-button-background"),b.content.page?d.total=b.content.page.length:d.total=0,d.onRequestHandler=this.goto},this.onSwitchSize=function(c,d){Magazine.device.size<DeviceSize.PORTRAIT&&d>=DeviceSize.PORTRAIT?(a.disableAlignments(),e.disableTouch(),e.foreachPage(function(a){$(".im-absolute-view",this.view).each(function(){this.absoluteView.setPosition({top:"0px",left:"0px"})})}),this.getPageController().disableTouch()):d<DeviceSize.PORTRAIT&&c.size>=DeviceSize.PORTRAIT&&(a.enableAlignments(),e.foreachPage(function(a){$(".im-absolute-view",this.view).each(function(c){this.absoluteView.setPosition(b.content.page[a].margin)})}),a.handleAlignments(),this.getPageController().enableTouch()),$(".im-sc-scoll-block h1",a.container).eachTransparentBackground(function(a){a?$(this).css({padding:"0"}):$(this).css({padding:""})}),$(".im-sc-scoll-block .text-block",a.container).eachTransparentBackground(function(a){a?$(this).css({padding:"0"}):$(this).css({padding:""})})},this.goto=function(c,e){if(-1==c&&(c=0),d.getPageController().gotoPage(c),!$(".im-sc-next-button-wrapper .im-next",a.container).hasClass("disabled")){var f=b.content.page[c+1];null!==f.title&&$(".im-sc-next-button-title h3",a.container).html(f.title.stripHtml().maxLength(32))}},this.didAppear=function(){g=!1},this.willAppear=function(b){PageViewType.MOBILE===a.viewType&&$(".im-ts-videocontainer",a.container).length>0&&(h=new Video($(".im-ts-videocontainer",a.container)))},this.onHashChange=function(a){},this.render=function(a){if(a.page){for(var b in a.page)a.page[b].index=b;for(var c,d=0;d<a.page.length;d++)c=new StyleModel(a.page[d].style),a.page[d].title_style=c.get(["title","title_background"]),a.page[d].paragraph_style=c.get(["paragraph","paragraph_background"]),a.page[d].m_title_style=c.get(["m_title","m_title_background"]),a.page[d].m_paragraph_style=c.get(["m_paragraph","m_paragraph_background"])}return a},this.onResizeHandler=function(b){var c=$(".im-page-controller-page",a.container).height();$(".im-absolute-view",a.container).css("max-height",c)},this.onEndResizeHandler=function(a){null!==e&&e.onEndResizeHandler(a)},this.willDisappear=function(){},this.didDisappear=function(){null!==e&&e.didDisappear()},this.destroy=function(){}}Loader.loadComplete();