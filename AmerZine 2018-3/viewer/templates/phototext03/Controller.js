function Phototext03Controller(){function a(a){var d=b.content.textblock[a];$(".im-pt3-h2-text",c.container).html(d.title);var f=$(".paragraph .im-pt3-paragraph",c.container);if(c.viewType===PageViewType.NORMAL?f.html(d.description):c.viewType===PageViewType.MOBILE&&f.html(d.descriptionmobile||d.description),i.length>0){for(var g in i)i[g].destroy();i=[]}c.container.find("iframe").each(function(){var a=$(this).attr("src");/w.soundcloud.com/.test(a)&&i.push(new Magazine.media.soundcloud.player(this))}),f.scanDirectives(),$(".dynamicForm",f).each(function(){new DynamicForm(null,$(this))}),Magazine.device.requestAnimationFrame(function(){e.onResizeHandler(Magazine.device)})}var b,c,d,e=this,f=!1,g=0,h='<div class="item"><div class="im-pt3-h2-wrapper"><h2 class="im-ts-title-background"><span class="im-pt3-h2-text"></span></h2></div><div class="im-pt3-paragraph-wrapper"><div class="text-block paragraph"><div class="im-pt3-paragraph"></div></div></div></div><div class="im-pt3-navigation-wrapper"><div class="label navigationBlock"><div class="im-ts-button im-pt3-up im-ts-border-radius"></div><div class="item-indicator"><span class="indicator-text">1 / 4</span></div><div class="im-ts-button im-pt3-down im-ts-border-radius"></div></div></div>',i=[],j=Magazine.device.animationLevel>1;this.init=function(a){c=a},this.willLoad=function(){},this.willLoadView=function(a){},this.didLoad=function(a){b=a;var d=c.getInPageNavigation();d.setIconClass("im-sp-arrow-<>-s-2"),null!=b.content.textblock?d.total=b.content.textblock.length:d.total=0,d.onRequestHandler=this["goto"]},this.didLoadView=function(){function a(){if(f===!1){if(f=!0,j){var a=$(".item",c.container)[0],b=$(".navigationBlock",c.container)[0];TweenMax.to(a,.5,{opacity:0,y:60,ease:Expo.easeOut,onComplete:function(){$(b).hide()}}),b.length>0&&TweenMax.to(b,.5,{opacity:0,ease:Expo.easeOut})}}else if(f===!0&&(f=!1,j)){var a=$(".item",c.container)[0];TweenMax.to(a,.5,{y:0,opacity:1,ease:Expo.easeOut});var b=$(".navigationBlock",c.container).show()[0];b.length>0&&TweenMax.to(b,.5,{opacity:1,ease:Expo.easeOut})}}c.viewType===PageViewType.NORMAL&&(d=(new AbsoluteView).init($(".canScroll",c.container)),d.appendChild(h),d.setPosition(b.content.margin));var e=[];for(var g in b.content.textblock)e.push(b.content.textblock[g].background);c.getBackground().init(e),c.hasBackground&&(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?$(c.container).prepend(c.getBackground().render()):$(".wrapper",c.container).prepend(c.getBackground().render()));var i=$(".item",c.container).find(".im-ts-title-background",c.container),k=$(".item",c.container).find(".text-block.paragraph",c.container);if(c.getInPageNavigation().total<=1)$(".navigationBlock",c.container).hide(),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?i.css("margin-right","39px"):i.css("margin-right",0),k.css("margin-right",0);else{i.css("margin-right","39px"),k.css("margin-right","39px"),c.container.addClass("multiple"),c.getInPageNavigation().setUseButtons(!0);var l=c.getInPageNavigation().getButtons();$(".im-pt3-down",c.container).append(l.next),$(".im-pt3-up",c.container).append(l.previous)}$(".up",c.container).click(a)},this["goto"]=function(d){function f(){function b(){!Magazine.device.isIE8&&j&&(TweenMax.set($(".paragraph .im-pt3-paragraph",c.container),{y:10}),TweenMax.set($(".im-pt3-h2-text",c.container),{y:10}),Magazine.device.requestAnimationFrame(function(){TweenMax.to($(".paragraph .im-pt3-paragraph",c.container),.4,{opacity:1,y:0,delay:.1,ease:Power2.easeout}),TweenMax.to($(".im-pt3-h2-text",c.container),.4,{opacity:1,y:0,delay:.1,ease:Power2.easeout})})),e.onResizeHandler(Magazine.device)}a(d),$(".paragraph .im-pt3-paragraph",c.container).outerHeight()===$(".paragraph",c.container).height()&&$(".im-pt3-h2-text",c.container).outerHeight()===$(".im-pt3-h2-wrapper h2",c.container).height()?b():Magazine.device.isIE9?setTimeout(function(){TweenMax.to($(".paragraph",c.container),.5,{css:{height:$(".paragraph .im-pt3-paragraph",c.container).outerHeight()}}),TweenMax.to($(".im-pt3-h2-wrapper h2",c.container),.5,{css:{height:$(".im-pt3-h2-text",c.container).outerHeight()},onComplete:function(){b()}})},10):($(".paragraph .im-pt3-paragraph",c.container)[0].scrollHeight!==$(".paragraph",c.container).height()?$(".paragraph",c.container).on(Magazine.device.getCssProperty("transitionend"),function(a){$(".paragraph",c.container).off(a.type),b()}):$(".im-pt3-h2-wrapper h2",c.container).on(Magazine.device.getCssProperty("transitionend"),function(a){$(".paragraph",c.container).off(a.type),b()}),$(".paragraph",c.container).css("height",$(".paragraph .im-pt3-paragraph",c.container).outerHeight()),$(".im-pt3-h2-wrapper h2",c.container).css("height",$(".im-pt3-h2-text",c.container).outerHeight()))}-1==d&&(d=0),c.getBackground().show(d,!0);var h=b.content.textblock.length;$(".item-indicator",c.container).html(d+1+" / "+h),g!=d&&(!Magazine.device.isIE8&&j?(TweenMax.to($(".paragraph .im-pt3-paragraph",c.container),.4,{opacity:0,y:-10,ease:Power2.easeout,delay:.1,onComplete:function(){f()}}),TweenMax.to($(".im-pt3-h2-text",c.container),.4,{opacity:0,y:-10,ease:Power2.easeout})):f(),Magazine.device.isIE8&&!j&&(TweenMax.to($(".paragraph .im-pt3-paragraph",c.container),.4,{opacity:1,onComplete:function(){f()}}),TweenMax.to($(".im-pt3-h2-text",c.container),.4,{opacity:1,ease:Power2.easeout})),g=d)},this.willAppear=function(b){if(c.isFirstView()){if(a(b.item||0),j&&Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){TweenMax.from($(".im-pt3-h2-wrapper h2",c.container),1.5,{y:$(".im-pt3-h2-wrapper h2",c.container).outerHeight()+5+"px",delay:1,ease:Power3.easeOut}),TweenMax.from($(".im-pt3-paragraph-wrapper .paragraph",c.container),1.5,{y:"-"+$(".im-pt3-paragraph-wrapper .paragraph",c.container).outerHeight()+"px",delay:1,ease:Power3.easeOut});var d=$(".im-pt3-navigation-wrapper .navigationBlock",c.container);d.length>0&&TweenMax.from(d,1,{left:"-41px",delay:2,ease:Power3.easeOut})}setTimeout(function(){$(".paragraph",c.container).css("height",$(".paragraph .im-pt3-paragraph",c.container).outerHeight()),$(".im-pt3-h2-wrapper h2",c.container).css("height",$(".im-pt3-h2-text",c.container).height())},10)}},this.onEndResizeHandler=function(a){if(a.size<DeviceSize.PORTRAIT){$(".paragraph",c.container).css("height",$(".paragraph .im-pt3-paragraph",c.container).outerHeight()),$(".im-pt3-h2-wrapper h2",c.container).css("height",$(".im-pt3-h2-text",c.container).outerHeight());var b=$(".fiv-text-block",c.container);Magazine.pages.height-40<b.height()?b.css({position:"relative"}):b.css({position:"absolute"})}},this.onResizeHandler=function(a){var b=$(".fiv-text-block",c.container);b.length>0&&(Magazine.pages.height-40<b[0].scrollHeight?b.css({position:"relative"}):b.css({position:"absolute"}))},this.destroy=function(){if(i.length>0){for(var a in i)i[a].destroy();i=[]}},this.didDisappear=function(){if(i.length>0){for(var a in i)i[a].pause();i=[]}}}Loader.loadComplete();