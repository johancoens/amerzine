function WebshopController(){function a(){var a;this.view=null,this.index,this.init=function(b){a=$.extend({},b),this.index=a.index,a.details=this,a.urlbase="#!/"+j.alias,a.order_label=i.content.order_label,a.action=new ActionModel(a.action)},this.show=function(){var b=this;if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE)null===this.view&&this.render(),this.view.scanDirectives(j),this.view.find(".im-media")[0].imMedia.imageTag=!1,this.view.find(".im-media")[0].imMedia.setMedia(a.images),f.append(this.view),this.view.find(".dynamicForm").each(function(){new DynamicForm(null,$(this))}),this.view[0].offsetHeight,Magazine.device.requestAnimationFrame(function(){b.view.addClass("show"),b.onResize()});else{var c=new SubPage;c.htmltemplate=e,c.data=$.extend({mobile:!0},a),j.pushPage(c,void 0,function(){this.container.find(".im-media")[0].imMedia.imageTag=!1,this.container.find(".im-media")[0].imMedia.setMedia(a.images)},function(){this.container.find(".im-media")[0].imMedia.release()})}},this.hide=function(){var b=this,c=Magazine.device.getCssProperty("transitionend"),d=function(){b.view.off(c),b.view.find(".im-media")[0].imMedia.release(),b.view.remove(),b.view=null,a=void 0};Magazine.device.isIE8?d():this.view&&(this.view.on(c,function(){d()}),this.view.removeClass("show"))},this.release=function(){null!==this.view&&this.view.length>0&&(this.view.off(Magazine.device.getCssProperty("transitionend")),this.view.find(".im-media")[0].imMedia.release(),this.view.remove(),this.view=null,a=void 0)},this.render=function(){this.view=$(d.render(a))},this.onResize=function(){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){var a=$(".detail-text",this.view),b=$(".im-webshop-p",this.view),c=$(".detail-price",this.view),d=b.outerHeight()-b.height();Magazine.device.width<1250&&Magazine.device.height>1e3?b.css("height","310px"):b.css("height",this.view.height()-c.outerHeight()-d-25-a.outerHeight()+"px")}else b.css("height",this.view.height()-b.offset().top)}}function b(){var a,b,d,e,f=this,g={};this.setContainerSize=function(){d={left:parseInt(e.css("padding-left"),10),top:parseInt(e.css("padding-top"),10),right:parseInt(e.css("padding-right"),10),bottom:parseInt(e.css("padding-bottom"),10)},g.width=Magazine.pages.width-d.right-d.left,g.height=Magazine.pages.height-d.top-d.bottom-30,e.width(g.width),e.height(g.height)},this.build=function(){e=$(".table-grid-container",j.container),f.setContainerSize(),a=new TableGridDelegate,a.startAtPosition=d.top,a.amount=i.content.products.length,a.spacing=10,a.getCellSize=function(){return Magazine.device.screen.height>700?{width:350,height:520}:Magazine.device.screen.height>648?{width:350,height:500}:{width:350,height:440}},a.startTransform="perspective(500) rotateY(170deg)",a.getSize=function(){return g},a.getViewByIndex=function(a,b){var d=i.content.products[b];return null===a&&(null!==d.images&&null!==d.images[0].image&&"undefined"==typeof d.image_css&&(d.image_css={"background-image":"url('"+Utils.viewHelper("getImageUrl",[d.images[0].image.uri,null,null,575,800])+"')"},d.has_description===!1&&(d.image_css.height="100%"),"object"==typeof d.images[0].image.settings&&"undefined"!=typeof d.images[0].image.settings.position&&(d.image_css["background-position"]=d.images[0].image.settings.position)),a=$(c.render(d)),"object"==typeof d.image_css&&a.find(".webshop-image").css(d.image_css)),a},a.enableNavigation=function(){$(".tp-webshop-nav",j.container).removeClass("disabled")},a.disableNavigation=function(){$(".tp-webshop-nav",j.container).addClass("disabled")},a.disableUpButton=function(){$(".up",j.container).addClass("disabled"),$(".tp-webshop-nav",j.container).addClass("only-down"),f.calculateNavigationPosition()},a.enableUpButton=function(){$(".up",j.container).removeClass("disabled"),$(".tp-webshop-nav",j.container).removeClass("only-down"),f.calculateNavigationPosition()},a.disableDownButton=function(){$(".down",j.container).addClass("disabled"),$(".tp-webshop-nav",j.container).addClass("only-up"),f.calculateNavigationPosition()},a.cellClass="text-block",a.enableDownButton=function(){$(".down",j.container).removeClass("disabled"),$(".tp-webshop-nav",j.container).removeClass("only-up"),f.calculateNavigationPosition()},b=new TableGrid,b.init(e,a,function(a){j.onScrollHandler(300*a)}),b.setPosition(0),$(".up",j.container).click(function(a){a.preventDefault(),b.pageUp()}),$(".down",j.container).click(function(a){a.preventDefault(),b.pageDown()})},this.getContainer=function(){return e},this.hide=function(){e.removeClass("show")},this.show=function(){e.addClass("show")},this.release=function(){b.release(),a=b=d=e=null},this.onResize=function(){null!==b&&(f.setContainerSize(),b.onResize()),this.calculateNavigationPosition()},this.calculateNavigationPosition=function(){var a=$(".tp-webshop-nav",j.container),b=$(".up",a).outerWidth(),c=$(".down",a).outerWidth(),e=Magazine.pages.width-d.left-d.right;a.hasClass("only-up")?a.css("margin-left",.5*e-.5*b+d.left):a.hasClass("only-down")?a.css("margin-left",.5*e-b-.5*c+d.left):a.css("margin-left",.5*e-.5*(b+c)+d.left)}}var c,d,e,f,g,h,i=!1,j=null,k=null,l=null;this.init=function(a){j=a},this.onLoad=function(a){Loader.loadFiles([Config.templatePathView+j.template+"/productView.html",Config.templatePathView+j.template+"/productDetails.html"],function(b){c=Hogan.compile(b[0].response),d=Hogan.compile(b[1].response),e=Hogan.compile('<div class="wrapper">{{{header}}}<div class="scroller" style="height:inherit;">'+b[1].response+"</div></div>"),a()}),g=new TransparentOverlay,g.opacity=.6,g.init(j.container),g.setOnClick(function(){window.location.href="#!/"+j.alias})},this.willLoadView=function(a){},this.didLoadView=function(){Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE?($(".header",j.container)[0]&&$(".table-grid-container",j.container).addClass("withheader"),k=new b,k.build(),i.content.background&&(j.getBackground().init([i.content.background]),$(j.container).prepend(j.getBackground().render()),j.getBackground().show()),f=$(".tp-webshop-details-container",j.container)):(h=new ImList,h.init($(".scroller",j.container),$(".scroller",j.container).children(".im-webshop-list"),{onScroll:function(a){j.onScrollHandler($(".scroller",j.container).scrollTop())}}),h.setCount(i.content.products.length),h.getItemByIndex=function(a){var b=i.content.products[a];null!==b.images&&null!==b.images[0].image&&"undefined"==typeof b.image_css&&(b.image_css={"background-image":"url('"+Utils.viewHelper("getImageUrl",[b.images[0].image.uri,null,null,575,800])+"')"},"object"==typeof b.images[0].image.settings&&"undefined"!=typeof b.images[0].image.settings.position&&(b.image_css["background-position"]=b.images[0].image.settings.position)),b.has_description===!1&&(b.image_css.height="570px");var d=$(c.render(b));return"undefined"!=typeof b.image_css&&d.children(".webshop-image").css(b.image_css),d},h.load())},this.willLoad=function(){},this.didLoad=function(a){i=a},this.didAppear=function(){null!==k&&k.onResize()},this.willAppear=function(a){if(this.showProduct(a.item||-1),j.isFirstView()){var b=$(".tp-webshop-nav",j.container).children();$(b[0]).find(".arrow").css({"border-top-color":b.css("background-color")}),$(b[1]).find(".arrow").css({"border-bottom-color":b.css("background-color")})}},this.willDisappear=function(){},this.didDisappear=function(){j.container.off("mousewheel")},this.onHashChange=function(a){this.showProduct(a.item||-1)},this.onEndResizeHandler=function(a){null!=k&&k.onResize()},this.onResizeHandler=function(){null!==l&&l.onResize()},this.onOrientationChange=function(){},this.render=function(a){var b=function(a){return"undefined"==typeof a||null===a||0===a.length};a.actionmodel=new ActionModel(a.buttonlink);for(var c in a.products){var d=a.products[c];d.has_description=!(b(d.title)&&b(d.intro)&&b(d.subtitle)&&b(d.price)),null===d.description?d.overview_action=new ActionModel(d.action,d.title):d.overview_action=new ActionModel("#!/"+j.alias+"/item/"+c)}},this.destroy=function(){h&&(h.destroy(),h=null)},this.showProduct=function(b){if(Magazine.device.size>DeviceSize.MOBILE_LANDSCAPE){if(null!==l){if(b===l.index)return;l.hide(),l=null}-1!==b?("undefined"==typeof i.content.products[b].details?(l=new a,l.init(i.content.products[b])):l=i.content.products[b].details,k.hide(),l.show(),g.show()):(k.show(),g.hide())}else-1!==b?("undefined"==typeof i.content.products[b].details?(l=new a,l.init(i.content.products[b])):l=i.content.products[b].details,l.show()):null!==l&&l.hide()},this.onSwitchSize=function(a,b){a.size>DeviceSize.MOBILE_LANDSCAPE},this.destroy=function(){null!==l&&(l.release(),l=null),null!==k&&(k.release(),k=null)}}Loader.loadComplete();