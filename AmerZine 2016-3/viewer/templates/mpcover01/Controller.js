function Mpcover01Controller(){var a,b,c;this.init=function(a){b=a},this.willLoadView=function(a){},this.onLoad=function(b){Loader.loadImages([Config.magazine_url+"/images"+a.content.image.uri],function(){b()})},this.didLoadView=function(){if(a.content.background&&(b.getBackground().init([a.content.background]),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?b.container.prepend(b.getBackground().render()):$(".wrapper",b.container).prepend(b.getBackground().render()),b.getBackground().show()),Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){if(c=[],a.content.image){var d=(new AbsoluteView).init();d.appendChild("<img src='"+Config.magazine_url+"/images"+a.content.image.uri+"'>"),d.setPosition(a.content.image_position||"top left"),c.push(d)}if(a.content.title){var d=(new AbsoluteView).init();d.appendChild("<h1 class='im-ts-title-background'>"+a.content.title+"</h1>"),d.setPosition(a.content.title_position||"top center"),c.push(d)}if(a.content.markers)for(var e in a.content.markers){var f=a.content.markers[e];if(2!=f.display){var d=(new AbsoluteView).init(),g="im-ts-label";null!=f.image&&(f.label="<img src='"+Config.magazine_url+"/images"+f.image.uri+"' />",g="im-ts-label-image"),d.appendChild("<"+f.element.element+f.element.getAnchor()+" class='"+g+"'>"+f.label+"</"+f.element.element+">"),d.setPosition(f.margin||"center center"),c.push(d)}}for(var h in a.content.highlights){var d=(new AbsoluteView).init();if(d.setPosition(a.content.highlights[h].margin),"object"==typeof a.content.highlights[h].highlight)for(var i in a.content.highlights[h].highlight){var j=a.content.highlights[h].highlight[i],k=new ActionModel(j.action);d.appendChild("<"+k.element+k.getAnchor()+" class='im-mp-cover01-highlight'"+("right"==d.getHorizontalAlignment()?" style='text-align: right;'":"")+"><h3 class='im-ts-label'>"+j.title+"</h3><br /><div class='text-block paragraph'>"+j.subtitle+"</div></"+k.element+">")}c.push(d)}for(var l in c)c[l].appendTo(b.container)}},this.willLoad=function(){},this.didLoad=function(b){a=b},this.didAppear=function(){if(b.isFirstView()&&!Config.is_screenshot)for(var a in c){var d=new TimelineMax;for(var a in c){var e={x:0,y:0,ease:"easeOutQuint"};0===a&&(e.delay=1),d.to(c[a].view,.6,e,"-=.4")}}},this.willAppear=function(a){if(b.isFirstView()){var d=$(".paragraph",b.container);if(d.hasTransparentBackground()&&d.css({padding:0}),!Config.is_screenshot)for(var e in c){var f=c[e].view,g=c[e].getVerticalAlignment(),h=c[e].getHorizontalAlignment(),i={};"top"==g&&"right"!=h?i.y=-f.outerHeight()-f.offset().top:"right"==h?i.x=Magazine.pages.width+f.outerWidth():"left"==h?i.x=-f.outerWidth()-f.offset().left:i.y=Magazine.pages.height+f.outerHeight(),TweenLite.set(f,i)}}},this.onHashChange=function(a){},this.render=function(a){if(a.image){var b=getImageUrl();"devicePixelRatio"in window&&window.devicePixelRatio>1?a.image.src=b.execute(a.image.uri,null,null,600):a.image.src=b.execute(a.image.uri,null,null,300)}if(a.markers)for(var c in a.markers)a.markers[c].on_mobile=1!=a.markers[c].display,a.markers[c].element=new ActionModel(a.markers[c].action)},this.onOrientationChange=function(){},this.onResizeHandler=function(a){},this.willDisappear=function(){},this.didDisappear=function(){},this.destroy=function(){}}Loader.loadComplete();