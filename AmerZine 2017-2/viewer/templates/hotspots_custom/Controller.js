function InterviewController(){function a(){g=i.content.background,f.children("#interviewBackground").each(function(a){null!=g&&jQuery(this).css({backgroundImage:"url('"+Config.magazine_url+g.uri+"')"})})}function b(){f.children(".marker").on("click",function(){window.location.hash="#!/"+d.alias+"/item/"+jQuery(this).index()}),f.children(".interviewButton").on("click",function(){window.location.hash="#!/"+d.alias+"/item/"+jQuery(this).index()}),f.children(".closeButton").on("click",function(){window.location.hash="#!/"+d.alias+"/item/"+jQuery(this).index()})}function c(a,b){var c=jQuery("#interviewTextBlock",d.container);j!=a&&(c.children(".active").removeClass("active"),jQuery(c.children().get(a)).addClass("active")),j=a}var d,e,f,g,h,i=!1,j=-1;this.init=function(a){d=a},this.willLoadView=function(a){j=isNumber(a.item)?parseInt(a.item):0},this.didLoadView=function(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){f=jQuery("#interviewBackground",d.container),jQuery("#interviewTextBlock",d.container).addClass(i.content.markers.position),e=i.content.markers.length,b();var k=j;j=-1,c(k,!1),a(),$("#interviewTextBlock",d.container).hide(),h=jQuery(".marker",d.container),h.each(function(a){TweenMax.set(this,{css:{scale:.1,opacity:0}})}),$("h2",d.container).hasTransparentBackground()&&$("h2",d.container).css({"padding-top":"0px","padding-bottom":"0px"})}else if(f=null,g=null,"undefined"!=typeof d.params.item){var l=new SubPage;l.data={title:i.content.markers[d.params.item].title,description:i.content.markers[d.params.item].description},d.pushPage(l)}},this.willLoad=function(){},this.didLoad=function(a){i=a,g=i.content.background},this.didAppear=function(){Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&($("#interviewTextBlock",d.container).show(),h=jQuery(".marker",d.container),h.each(function(a){TweenMax.to(this,.5,{css:{scale:1,opacity:1},delay:.3*a+.5,ease:Quad.easeOut})}))},this.willAppear=function(){},this.onHashChange=function(a){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE)"undefined"!=typeof a.item?c(a.item,!0):c(0,!0);else if("undefined"!=typeof a.item){var b=new SubPage;b.data={title:i.content.markers[a.item].title,description:i.content.markers[a.item].description},d.pushPage(b)}},this.onOrientationChange=function(){},this.onResizeHandler=function(a){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE&&null!=f&&null!=g){var b=f.children("div").width(),c=f.children("div").height(),d=0,e=0,h=0;g.width/g.height>b/c?(d=c/g.height,h=.5*(g.width*d-b)):(d=b/g.width,e=.5*(g.height*d-c)),f.children(".marker").each(function(){var a=jQuery(this),b=a.index()-1;Magazine.device.size==DeviceType.MOBILE?a.hide():(a.show(),a.css({left:i.content.markers[b].x*d-h+"px",top:i.content.markers[b].y*d-e+"px"}))})}},this.willDisappear=function(){Magazine.device.isIE8?$("#interviewTextBlock",d.container).hide():$("#interviewTextBlock",d.container).fadeOut()},this.didDisappear=function(){},this.destroy=function(){},this.render=function(a){for(var b in a.markers){var c=a.markers[b].position.split(" ");a.markers[b].index=b,a.markers[b].left=c[0],a.markers[b].top=c[1]}}}Loader.loadComplete();