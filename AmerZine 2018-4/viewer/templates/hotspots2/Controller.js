function Hotspots2Controller(){function a(){g=l.content.background,d.getBackground().init([g]),d.container.prepend(d.getBackground().render()),d.getBackground().show()}function b(){h=[];for(var a in l.content.hotspots){var b=l.content.hotspots[a],e=(new Marker).init(a,$(i.render(b)));e.setPosition(b.position),l.content.position_fixed&&e.setFixed(!0,l.content.background),e.setImage(b.marker),e.setCharacter(b.numlist),e.setAction(b.action),e.appendTo($(".im-tp-hs2-marker-container",d.container)),h.push(e)}c()}function c(){j=new TimelineMax({repeat:-1,repeatDelay:6});var a=$(".pulse1",d.container),b=$(".pulse2",d.container);j.set(a,{css:{opacity:1,scale:1}}),j.set(b,{css:{opacity:1,scale:1}}),j.to(a,1.5,{css:{opacity:0,scale:1.8},ease:Quad.easeOut}),j.to(b,1.5,{css:{opacity:0,scale:1.8},ease:Quad.easeOut},"-=1.1"),j.pause()}var d,e,f,g,h,i,j,k,l=!1,m=-1;this.init=function(a){d=a},this.onLoad=function(a){Loader.loadFile(Config.templatePathView+d.template+"/marker.html",function(b){i=Hogan.compile(b.response),a()})},this.willLoadView=function(a){m=parseInt(a.item)-1},this.didLoadView=function(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){f=jQuery(".im-tp-hs2-background",d.container),e=0,l.content.hotspots&&(e=l.content.hotspots.length),b(),a(),$(".im-tp-hs2-container",d.container).addClass("intro");(new AbsoluteView).init($(".introtext",d.container)).setPosition(l.content.margin),$(".introtext h1",d.container).hasTransparentBackground()&&$(".introtext h1",d.container).css({"padding-top":"0px","padding-bottom":"0px"}),$(".introtext .paragraph",d.container).hasTransparentBackground()&&$(".introtext .paragraph",d.container).css({"padding-top":"0px","padding-bottom":"0px"}),$(".im-tp-hs2-hotspot.hover",d.container).mouseenter(function(){k||($(this).find(".hotspot-label").height($(this).find(".hotspot-label .label-text").outerHeight()+10),thishotspot=$(this).find(".marker"),TweenMax.to(thishotspot,1.2,{scale:"1.2",ease:"easeOutElastic"}))}),$(".im-tp-hs2-hotspot.hover",d.container).mouseleave(function(){$(this).find(".hotspot-label").height(0),thishotspot=$(this).find(".marker"),TweenMax.to(thishotspot,.5,{scale:"1",ease:Quad.easeInOut})}),$(".closeButton",d.container).click(function(){$(".im-tp-hs2-hotspot",d.container).removeClass("hover")})}else{if(f=null,g=null,void 0!==d.params.item){var c=new SubPage;c.data={title:l.content.hotspots[d.params.item].title,subtitle:l.content.hotspots[d.params.item].subtitle,description:l.content.hotspots[d.params.item].description,image:l.content.hotspots[d.params.item].image},d.pushPage(c)}var h=d.container.find(".scroller");h.length>0&&h.bind("touchmove",function(a){d.onScrollHandler(-1*h.children("div").first().offset().top)})}d.scanDirectives()},this.willLoad=function(){},this.didLoad=function(a){l=a,g=l.content.background},this.didAppear=function(a){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&d.isFirstView()){$(".im-tp-hs2-hotspot",d.container).addClass("intro"),setTimeout(function(){for(var a=0;a<h.length;a++)h[a].show(function(){$(this).removeClass("intro")},"easeOutElastic",1.2,.15*a)},500),setTimeout(function(){j.seek(0),j.resume()},1400);var b=this.checkHash;setTimeout(function(){$(".im-tp-hs2-container",d.container).removeClass("intro"),b(a)},1500)}else this.checkHash(a)},this.willAppear=function(a){},this.onHashChange=function(a){this.checkHash(a)},this.checkHash=function(a){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE)k=!0,void 0!==a.item?($("body").addClass("hide-floating-navigation"),$(".im-tp-hs2-textblock .im-tp-hs2-block",d.container).removeClass("active"),$(".im-tp-hs2-hotspot",d.container).removeClass("active"),$(".im-tp-hs2-hotspot",d.container).removeClass("hover"),m=parseInt(a.item),console.log("_curItemNumber",m),$(".im-tp-hs2-container",d.container).hasClass("intro")?setTimeout(function(){$(".im-tp-hs2-textblock .im-tp-hs2-block:eq("+m+")",d.container).addClass("active"),console.log($(".im-absolute-view:eq("+m+")",d.container)),$(".im-tp-hs2-hotspot:eq("+m+")",d.container).parent().addClass("active"),$(".im-tp-hs2-hotspot:eq("+m+")",d.container).find(".marker .pulse").addClass("active"),$(".im-tp-hs2-hotspot:eq("+m+")",d.container).find(".hotspot-label").addClass("hide"),$(".im-tp-hs2-textblock",d.container).addClass("visible"),$(".im-tp-hs2-container",d.container).addClass("open")},2e3):($(".im-tp-hs2-textblock .im-tp-hs2-block:eq("+m+")",d.container).addClass("active"),$(".im-tp-hs2-hotspot:eq("+m+")",d.container).parent().addClass("active"),$(".im-tp-hs2-hotspot:eq("+m+")",d.container).find(".marker .pulse").addClass("active"),$(".im-tp-hs2-hotspot:eq("+m+")",d.container).find(".hotspot-label").addClass("hide"),$(".im-tp-hs2-textblock",d.container).addClass("visible"),$(".im-tp-hs2-container",d.container).addClass("open"))):($("body").removeClass("hide-floating-navigation"),$(".im-tp-hs2-textblock .im-tp-hs2-block",d.container).removeClass("active"),$(".im-absolute-view.active",d.container).addClass("animating").removeClass("active"),$(".im-tp-hs2-container",d.container).removeClass("open"),setTimeout(function(){$(".im-tp-hs2-textblock",d.container).removeClass("visible")},500),setTimeout(function(){$(".im-absolute-view",d.container).removeClass("animating"),$(".pulse",d.container).removeClass("active"),$(".hotspot-label",d.container).removeClass("hide"),$(".im-tp-hs2-hotspot",d.container).addClass("hover")},1300)),setTimeout(function(){k=!1},1500);else if(void 0!==a.item){var b=new SubPage;b.data={title:l.content.hotspots[a.item].title,subtitle:l.content.hotspots[a.item].subtitle,description:l.content.hotspots[a.item].description,image:l.content.hotspots[a.item].image},d.pushPage(b)}},this.onResizeHandler=function(a){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE)for(var b in h)h[b].onResizeHandler(a)},this.willDisappear=function(){},this.didDisappear=function(){j&&j.pause()},this.destroy=function(){},this.render=function(a){for(var b in a.hotspots)a.hotspots[b].index=b,a.hotspots[b].image||(a.hotspots[b].className="no-image"),a.hotspots[b].action=new ActionModel(a.hotspots[b].action||"#!/"+d.alias+"/item/"+b)}}Loader.loadComplete();