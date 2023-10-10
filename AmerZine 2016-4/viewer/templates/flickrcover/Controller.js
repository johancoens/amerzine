function FlickrcoverController(){var a,b,c;this.init=function(a){b=a},this.willLoadView=function(a){},this.onLoad=function(b){a.content.image?Loader.loadImages([Config.magazine_url+a.content.image.uri],function(){b()}):b()},this.didLoadView=function(){a.content.background&&(Magazine.device.size<DeviceSize.PORTRAIT&&null!==a.content.alt?b.getBackground().init([a.content.alt]):b.getBackground().init([a.content.background])),a.content.flickr_type=a.content.flickr_type?"search":"photoset";var d={};if(d.flickr=!0,d.type=a.content.flickr_type,"photoset"===a.content.flickr_type?d.value=a.content.photoset_id:"search"===a.content.flickr_type&&(d.value={tags:a.content.tags,user_id:a.content.user_id,group_id:a.content.group_id},"string"==typeof a.content.user_id&&0===a.content.user_id.indexOf("http")&&(d.type="api",d.url=a.content.user_id)),d.value?(d.sortType=a.content.sort,b.getBackground().isset?b.getBackground().addFile(d,!1):b.getBackground().init([d]),a.content.background?b.getBackground().onReady(function(){b.getBackground().show(1)}):(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?b.container.prepend(b.getBackground().render()):$(".wrapper",b.container).prepend(b.getBackground().render()),b.getBackground().show()),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?b.container.prepend(b.getBackground().render()):$(".wrapper",b.container).prepend(b.getBackground().render()),b.getBackground().show()):a.content.background&&(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?b.container.prepend(b.getBackground().render()):$(".wrapper",b.container).prepend(b.getBackground().render()),b.getBackground().show()),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){if(c=[],a.content.image){var e=(new AbsoluteView).init();e.appendChild("<img src='"+Config.magazine_url+a.content.image.uri+"'"+(a.content.image.alt?" alt='"+a.content.image.alt+"'":"")+">"),e.setPosition(a.content.image_position||"top left"),e.setRelative(Magazine.device.size<DeviceSize.PORTRAIT),c.push(e)}if(a.content.title){var e=(new AbsoluteView).init();e.appendChild("<h1 class='im-ts-title-background'>"+a.content.title+"</h1>"),e.setPosition(a.content.title_position||"top center"),e.setRelative(Magazine.device.size<DeviceSize.PORTRAIT),c.push(e)}for(var f in a.content.highlights){var e=(new AbsoluteView).init();e.setPosition(a.content.highlights[f].margin);var g=getImageUrl();if("object"==typeof a.content.highlights[f].highlight){var h=("right"===e.getHorizontalAlignment()?" im-cover05-right":"")+" view-type-"+a.content.view_style;for(var i in a.content.highlights[f].highlight){var j=a.content.highlights[f].highlight[i],k=j.action,l="<"+k.element+k.getAnchor()+" class='im-cover05-highlight"+h+"'>";if("right"!==e.getHorizontalAlignment()&&j.image){var m=g.execute(j.image.uri,200,200,null,null,1);l+="<img src='"+m+"'/>"}if((j.title||j.subtitle)&&(l+=j.title&&j.subtitle?"<div class='im-cover05-highlight-text two-rules'>":"<div class='im-cover05-highlight-text'>",j.title&&(l+="<h3 class='im-ts-title-background' style=\""+j["title-style"]+'">'+j.title+"</h3>"),j.subtitle&&(j.title&&(l+="<br />"),l+="<h3 class='im-ts-subtitle-background' style=\""+j["subtitle-style"]+'">'+j.subtitle+"</h3>"),l+="</div>"),"right"===e.getHorizontalAlignment()&&j.image){var m=g.execute(j.image.uri,200,200,null,null,1);l+="<img src='"+m+"'/>"}l+="<br />",l+="</"+k.element+">",e.appendChild(l),e.setRelative(Magazine.device.size<DeviceSize.PORTRAIT)}}c.push(e)}for(var n in c)c[n].appendTo(b.container)}b.scanDirectives()},this.willLoad=function(){},this.didLoad=function(b){a=b},this.didAppear=function(){},this.willAppear=function(a){if(b.isFirstView()){var c=0;b.container.find(".im-cover05-highlight").each(function(){var a=$(this).hasClass("im-cover05-right")?"right":"left";$("h3",this).length>1&&($($("h3",this)[1]).css({"padding-left":$($("h3",this)[0]).css("padding-left"),"padding-right":$($("h3",this)[0]).css("padding-right")}),$($("h3",this)[0]).width()>=$($("h3",this)[1]).width()?($($("h3",this)[0]).css("background-color")===$($("h3",this)[1]).css("background-color")&&$($("h3",this)[1]).css({"padding-top":"0"}),$($("h3",this)[0]).css("border-bottom-"+a+"-radius","0"),$($("h3",this)[1]).css({"border-top-right-radius":"0","border-top-left-radius":"0"})):($($("h3",this)[0]).css("background-color")===$($("h3",this)[1]).css("background-color")&&$($("h3",this)[0]).css({"padding-bottom":"0"}),$($("h3",this)[0]).css({"border-bottom-right-radius":"0","border-bottom-left-radius":"0"}),$($("h3",this)[1]).css("border-top-"+a+"-radius","0")),$("img",this).length>0&&(c=Math.max($(".im-cover05-highlight-text",this).height(),c)))}),c>0&&$(".im-cover05-highlight img",b.container).css({height:c-4,width:c-4});var d=$("h3",b.container);d.each(function(){$(this).hasTransparentBackground()&&($(this).css({"padding-left":0}),$(this).addClass("nobackground"))}),$("h1",b.container).hasTransparentBackground()&&$("h1",b.container).css({padding:"0"}),TweenMax.from($("h1",b.container),.4,{css:{bottom:"-20",opacity:"0"},delay:1,ease:Quad.easeOut});var e=$(".im-cover05-highlight img",b.container);e.each(function(a){TweenMax.from(this,.5,{css:{scale:"0.1",opacity:"0"},delay:.4*a+.6,ease:Back.easeOut})});var f=$(".im-cover05-highlight .im-cover05-highlight-text",b.container);f.each(function(a){TweenMax.from(this,.5,{css:{left:"-30",opacity:"0"},delay:.4*a+.9,ease:Quad.easeOut})})}},this.onHashChange=function(a){},this.render=function(a){if(a.image){var b=getImageUrl();"devicePixelRatio"in window&&window.devicePixelRatio>1?a.image.src=b.execute(a.image.uri,null,null,600):a.image.src=b.execute(a.image.uri,null,null,300)}if(a.highlights)for(var c in a.highlights)for(var d in a.highlights[c].highlight){var e=a.highlights[c].highlight[d];e.action=new ActionModel(e.action),e.style=new StyleModel(e.style),e["mobile-title-style"]=e.style.get(["mobile_background","mobile_title"]),e["mobile-subtitle-style"]=e.style.get(["mobile_background","mobile_subtitle"]),e["title-style"]=e.style.get(["background","title"]),e["subtitle-style"]=e.style.get(["background","subtitle"]),0==e["mobile-title-style"].length&&(e["mobile-title-style"]=e["title-style"]),0==e["mobile-subtitle-style"].length&&(e["mobile-subtitle-style"]=e["subtitle-style"])}},this.onOrientationChange=function(){},this.onResizeHandler=function(a){var c=$(".im-page-controller-page",b.container).height();$(".im-absolute-view",b.container).css("max-height",c),$(".im-relative",b.container).outerWidth>window.outerWidth&&$(".im-relative",b.container).css("-webkit-transform","scale(0.9)"),a.size<DeviceSize.PORTRAIT?$(".im-cover05-highlight",b.container).each(function(){if($("img",this).length>0){var a=$("img",this).width()+28,b=Magazine.pages.width-40;$(".im-cover05-highlight-text",this).width(b-a)}}):$(".im-cover05-highlight-text",this).css("width","")},this.willDisappear=function(){},this.didDisappear=function(){},this.destroy=function(){}}Loader.loadComplete();