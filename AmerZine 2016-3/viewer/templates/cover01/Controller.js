function Cover01Controller(){var a,b;this.init=function(b){a=b},this.willLoadView=function(a){},this.didLoadView=function(){$("h1",a.container).css("background-color");$("h1",a.container).hasTransparentBackground()&&$("#head",a.container).addClass("morespace"),$(".textBlockCover",a.container).hasTransparentBackground()&&($(".textBlockCover",a.container).css("margin-top","0"),$(".subtitle .im-ts-subtitle-background",a.container).hasTransparentBackground()&&$(".subtitle",a.container).parent().css("margin-top","0")),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE||null==b.content.alt?null!=b.content.background&&a.getBackground().init([b.content.background]):null!=b.content.alt&&a.getBackground().init([b.content.alt]),a.hasBackground&&(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?a.container.prepend(a.getBackground().render()):$(".wrapper",a.container).prepend(a.getBackground().render()),a.getBackground().show()),a.scanDirectives();var c=a.container.find(".scroller");c.length>0&&c.bind("touchmove",function(b){a.onScrollHandler(-1*c.children("div").first().offset().top)})},this.willLoad=function(){},this.didLoad=function(c){if(b=c,Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){var d=$("#head",a.container);TweenMax.set(d,{css:{top:"-40"}});var e=$(".logo",a.container);e.length>0&&TweenMax.set(e,{css:{opacity:0,scale:1.3}});var f=$(".datetext",a.container);f.length>0&&TweenMax.set(f,{css:{opacity:0,scale:1.3}});var g=$(".shortcutsContainer",a.container);g.length>0&&TweenMax.set(g,{css:{width:0,opacity:0}});var h=$(".title",a.container);h.length>0&&TweenMax.set(h,{css:{opacity:0,top:"-40",scale:1.3}});var i=$(".textBlockCover",a.container);i.length>0&&TweenMax.set(i,{css:{opacity:0,top:"-40",scale:1.3}});var j=$(".subtitle",a.container);j.length>0&&TweenMax.set(j,{css:{opacity:0,top:"-40",scale:1.3}});jQuery(".polaroid",a.container).each(function(a){TweenMax.set(this,{css:{opacity:"0"}})})}},this.didAppear=function(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){var b=$("#head",a.container);TweenMax.to(b,.8,{css:{top:"0"},delay:.5,ease:Expo.easeOut});var c=$(".logo",a.container);c.length>0&&TweenMax.to(c,.8,{css:{opacity:1,top:"0",scale:1},delay:.5,ease:Expo.easeOut});var d=$(".datetext",a.container);d.length>0&&TweenMax.to(d,.8,{css:{opacity:1,top:"0",scale:1},delay:.8,ease:Expo.easeOut});var e=$(".title",a.container);e.length>0&&TweenMax.to(e,1,{css:{opacity:1,top:"0",scale:1},delay:1.2,ease:Expo.easeOut});var f=$(".textBlockCover",a.container);f.length>0&&TweenMax.to(f,1,{css:{opacity:1,top:"0",scale:1},delay:1.4,ease:Expo.easeOut});var g=$(".subtitle",a.container);g.length>0&&TweenMax.to(g,1,{css:{opacity:1,top:"0",scale:1},delay:1.6,ease:Expo.easeOut});var h=$(".shortcutsContainer",a.container);TweenMax.to(h,2.5,{css:{width:"720",opacity:1},delay:2.4,ease:Expo.easeOut});jQuery(".polaroid",a.container).each(function(a){TweenMax.to(this,1,{css:{opacity:"1"},delay:.3*a+3.4,ease:Quad.easeOut})})}},this.willAppear=function(){},this.onResizeHandler=function(b){var c=$(".alignCenter",a.container).height();b.screen.height<c?($(".alignCenter",a.container).css({top:"0px","margin-top":"0px"}),jQuery(".backgroundImage",a.container).height(c)):($(".alignCenter",a.container).css({top:"50%","margin-top":-$(".alignCenter",a.container).height()/2+"px"}),jQuery(".backgroundImage",a.container).css("height","100%"))},this.render=function(a){if(a.intromobile=a.intromobile||a.intro,null!=a.image){var b=getImageUrl();"devicePixelRatio"in window&&window.devicePixelRatio>1?a.image.src=b.execute(a.image.uri,null,null,600,200):a.image.src=b.execute(a.image.uri,null,null,300,100)}if(null===a.datetext&&null===a.image&&(a.noheader=!0),null!==a.shortcuts)for(var c in a.shortcuts)a.shortcuts[c].action=a.shortcuts[c].shortcut=new ActionModel(a.shortcuts[c].shortcut),null!==a.shortcuts[c].image&&(null===a.shortcuts[c].shortcut&&(a.shortcuts[c].shortcut={}),a.shortcuts[c].shortcut.thumb=a.shortcuts[c].image.uri)},this.onSwitchSize=function(a,b){},this.onOrientationChange=function(){},this.willDisappear=function(){},this.didDisappear=function(){},this.destroy=function(){}}Loader.loadComplete();