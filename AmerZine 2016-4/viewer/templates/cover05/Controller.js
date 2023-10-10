function Cover05Controller(){var a,b,c;this.init=function(a){b=a},this.willLoadView=function(a){},this.onLoad=function(b){a.content.image?Loader.loadImages([Config.magazine_url+a.content.image.uri],function(){b()}):b()},this.didLoadView=function(){if(a.content.background&&(Magazine.device.size<DeviceSize.PORTRAIT&&null!==a.content.alt?b.getBackground().init([a.content.alt]):b.getBackground().init([a.content.background]),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?b.container.prepend(b.getBackground().render()):$(".wrapper",b.container).prepend(b.getBackground().render()),b.getBackground().show()),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){if(c=[],a.content.image){var d=(new AbsoluteView).init();d.appendChild("<img src='"+Config.magazine_url+a.content.image.uri+"'"+(a.content.image.alt?" alt='"+a.content.image.alt+"'":"")+">"),d.setPosition(a.content.image_position||"top left"),d.setRelative(Magazine.device.size<DeviceSize.PORTRAIT),c.push(d)}if(a.content.title){var d=(new AbsoluteView).init();d.appendChild("<h1 class='im-ts-title-background'>"+a.content.title+"</h1>"),d.setPosition(a.content.title_position||"top center"),d.setRelative(Magazine.device.size<DeviceSize.PORTRAIT),c.push(d)}for(var e in a.content.highlights){var d=(new AbsoluteView).init();d.setPosition(a.content.highlights[e].margin);var f=getImageUrl();if("object"==typeof a.content.highlights[e].highlight){var g=("right"===d.getHorizontalAlignment()?" im-cover05-right":"")+" view-type-"+a.content.view_style;for(var h in a.content.highlights[e].highlight){var i=a.content.highlights[e].highlight[h],j=i.action,k="<"+j.element+j.getAnchor()+" class='im-cover05-highlight"+g+"'>";if("right"!==d.getHorizontalAlignment()&&i.image){var l=f.execute(i.image.uri,200,200,null,null,1);k+="<img class='im-cover05-highlight-img' src='"+l+"'"+(i.image.alt?" alt='"+i.image.alt+"'":"")+"/>"}if((i.title||i.subtitle)&&(k+=i.title&&i.subtitle?"<div class='im-cover05-highlight-text two-rules'>":"<div class='im-cover05-highlight-text'>",i.title&&(k+="<h3 class='im-ts-title-background' style=\""+i["title-style"]+'">'+i.title+"</h3>"),i.subtitle&&(i.title&&(k+="<br />"),k+="<h3 class='im-ts-subtitle-background' style=\""+i["subtitle-style"]+'">'+i.subtitle+"</h3>"),k+="</div>"),"right"===d.getHorizontalAlignment()&&i.image){var l=f.execute(i.image.uri,200,200,null,null,1);k+="<img class='im-cover05-highlight-img' src='"+l+"'"+(i.image.alt?" alt='"+i.image.alt+"'":"")+"/>"}k+="<br />",k+="</"+j.element+">",d.appendChild(k),d.setRelative(Magazine.device.size<DeviceSize.PORTRAIT)}}c.push(d)}for(var m in c)c[m].appendTo(b.container)}else{var n=b.container.find(".scroller");n.length>0&&n.bind("touchmove",function(a){b.onScrollHandler(n.children("div").first().offset().top*-1)})}},this.willLoad=function(){},this.didLoad=function(b){a=b},this.didAppear=function(){},this.willAppear=function(a){if(b.isFirstView()){var c=0;b.container.find(".im-cover05-highlight").each(function(){var a=$(this).hasClass("im-cover05-right")?"right":"left";if($("h3",this).length>1){var b=$($("h3",this)[0]),d=$($("h3",this)[1]);d.css({"padding-left":b.css("padding-left"),"padding-right":b.css("padding-right")}),b.width()>=d.width()?(b.css("background-color")!==d.css("background-color")||$(this).hasTransparentBackground()?b.css("background-color")===d.css("background-color")&&(b.css({"padding-bottom":"4px"}),d.css({"padding-top":"4px"})):d.css({"padding-top":"4px"}),b.css("border-bottom-"+a+"-radius","0"),d.css({"border-top-right-radius":"0","border-top-left-radius":"0"})):(b.css("background-color")!==d.css("background-color")||$(this).hasTransparentBackground()?b.css("background-color")===d.css("background-color")&&(b.css({"padding-bottom":"4px"}),d.css({"padding-top":"4px"})):b.css({"padding-bottom":"4px"}),b.css({"border-bottom-right-radius":"0","border-bottom-left-radius":"0"}),d.css("border-top-"+a+"-radius","0")),$(".im-cover05-highlight-img",this).length>0&&(c=Math.max($(".im-cover05-highlight-text",this).height(),c))}}),c>0&&$(".im-cover05-highlight .im-cover05-highlight-img",b.container).css({height:c-4,width:c-4});var d=$("h3",b.container);d.each(function(){$(this).hasTransparentBackground()&&($(this).css({"padding-left":0}),$(this).addClass("nobackground"))}),$("h1",b.container).hasTransparentBackground()&&$("h1",b.container).css({padding:"0"}),TweenMax.from($("h1",b.container),.4,{css:{bottom:"-20",opacity:"0"},delay:1,ease:Quad.easeOut});var e=$(".im-cover05-highlight .im-cover05-highlight-img",b.container);e.each(function(a){TweenMax.from(this,.5,{css:{scale:"0.1",opacity:"0"},delay:.4*a+.6,ease:Back.easeOut})});var f=$(".im-cover05-highlight .im-cover05-highlight-text",b.container);f.each(function(a){TweenMax.from(this,.5,{css:{left:"-30",opacity:"0"},delay:.4*a+.9,ease:Quad.easeOut})})}},this.onHashChange=function(a){},this.render=function(a){if(a.image){var b=getImageUrl();"devicePixelRatio"in window&&window.devicePixelRatio>1?a.image.src=b.execute(a.image.uri,null,null,600):a.image.src=b.execute(a.image.uri,null,null,300)}if(a.highlights)for(var c in a.highlights)for(var d in a.highlights[c].highlight){var e=a.highlights[c].highlight[d];e.action=new ActionModel(e.action),e.style=new StyleModel(e.style),e["mobile-title-style"]=e.style.get(["mobile_background","mobile_title"]),e["mobile-subtitle-style"]=e.style.get(["mobile_background","mobile_subtitle"]),e["title-style"]=e.style.get(["background","title"]),e["subtitle-style"]=e.style.get(["background","subtitle"]),0==e["mobile-title-style"].length&&(e["mobile-title-style"]=e["title-style"]),0==e["mobile-subtitle-style"].length&&(e["mobile-subtitle-style"]=e["subtitle-style"])}},this.onOrientationChange=function(){},this.onResizeHandler=function(a){var c=$(".im-page-controller-page",b.container).height();$(".im-absolute-view",b.container).css("max-height",c),$(".im-relative",b.container).outerWidth>window.outerWidth&&$(".im-relative",b.container).css("-webkit-transform","scale(0.9)"),a.size<DeviceSize.PORTRAIT?$(".im-cover05-highlight",b.container).each(function(){if($(".im-cover05-highlight-img",this).length>0){var a=$(".im-cover05-highlight-img",this).width()+28,b=Magazine.pages.width-41;$(".im-cover05-highlight-text",this).width(b-a)}}):$(".im-cover05-highlight-text",this).css("width","")},this.willDisappear=function(){},this.didDisappear=function(){},this.destroy=function(){}}Loader.loadComplete();