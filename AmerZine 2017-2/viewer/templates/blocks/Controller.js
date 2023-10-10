function BlocksController(){var a,b,c,d,e,f,g=null,h=240,i=0,j=[{height:h,width:h},{height:h,width:2*h},{height:2*h,width:h},{height:2*h,width:2*h},{height:h,width:4*h}],k=Hogan.compile('{{#image}}<div im-object="im-media-directive" data-media="{{image}}" width="1000" class="im-media im-media-image"></div>{{/image}}<div class="block-content" style="{{content_block_style}}"><span class="im-ts-title-padding">{{#title}}<h2 class="im-ts-title" data-style="{{title_style}}" im-object="im-style-directive" data-mobile-style="{{m_title_style}}">{{{title}}}</h2>{{/title}}{{#intro}}<span class="desc paragraph" data-style="{{intro_style}}" im-object="im-style-directive" data-mobile-style="{{m_intro_style}}" style="{{^label}} margin-bottom: 20px;{{/label}}">{{{intro}}}</span>{{/intro}}{{#label}}<{{click_action.element}} data-style="{{button_style}}" im-object="im-style-directive" data-mobile-style="{{m_button_style}}" class="im-ts-button button-1" target="{{click_action.target}}" onclick="{{click_action.onclick}}" href="{{click_action.href}}">{{{label}}}</{{click_action.element}}>{{/label}}</span></div>'),l=function(){var a=$(this),c=a.scrollTop(),e=Math.max(0,a[0].scrollHeight-Magazine.pages.height),f=100/(e/c);null!==g&&g.onScroll(c,c+Magazine.pages.height,a[0].scrollHeight),Math.floor(f/25)!=i&&(i=Math.floor(f/25),Magazine.tracker.trackEvent("Scroll",c>d?"Down":"Up",25*i+"%")),b.onScrollHandler(c)},m=function(a){var c,d=$(".im-tp-blocks-container",b.container);if(scroll={y:d.scrollTop()},isNaN(a)){if(0==a.length)return;c=d.scrollTop()+a.offset().top-Magazine.pages.offset.top+a.outerHeight()}else c=a;TweenLite.to(scroll,2,{y:c,ease:"easeInOutCubic",onUpdate:function(){d.scrollTop(scroll.y)}})};this.init=function(a){b=a},this.willLoadView=function(a){},this.onLoad=function(a){Loader.loadFile(Config.templatePathView+b.template+"/Dialog.html",function(b){e=b.response,a()})},this.didLoadView=function(){var d=null===a.content.margin?1.5:parseInt(a.content.margin);if(c=(new DynamicGrid).init(b.container.find(".im-tp-blocks-container"),{maxCols:6,maxBlockWidth:h+100,minBlockWidth:h,mobile:{maxBlockWidth:h+100,minBlockWidth:h},mobile_landscape:{maxBlockWidth:h+100,minBlockWidth:h},loadCount:20,align:"left",padding:d,fixedBlockHeight:!0}),null!==a.content.nav_type&&"undefined"!=typeof a.content.nav_type){g=new NavigationButtons;var i=!1;"top"===a.content.nav_type&&(a.content.nav_type="circle",i=!0),g.init(b.container,NavigationButtonType[a.content.nav_type.toUpperCase()]),i===!0?g.type.top=!0:g.type.top=!1,g.onUp=function(){m($(".im-tp-blocks-container",b.container).scrollTop()-Magazine.pages.height-50),Magazine.tracker.trackEvent("Scroll","Click","Up")},g.onDown=function(){m($(".im-tp-blocks-container",b.container).scrollTop()+Magazine.pages.height-50),Magazine.tracker.trackEvent("Scroll","Click","Down")}}var l="";f=new IMDialogGroup(b.container,e),f.onAddedToStage=function(a){a.find(".dialog-text").css("text-align",$(a.find("p")[0]).css("text-align"))},f.className="im-tp-b-dialog",f.urlbase=b.alias;for(var n in a.content.blocks){"undefined"==typeof a.content.blocks[n].rollover_effect&&(a.content.blocks[n].rollover_effect=1),a.content.blocks[n].margin=!!d;var o;o=null===a.content.blocks[n].label&&a.content.blocks[n].click_action?$("<"+a.content.blocks[n].click_action.element+" "+a.content.blocks[n].click_action.getAnchor()+' style="'+a.content.blocks[n].block_style+'" class="im-tp-b-block '+l+" effect"+a.content.blocks[n].rollover_effect+'">'+k.render(a.content.blocks[n])+"</"+a.content.blocks[n].click_action.element+">"):$('<div style="'+a.content.blocks[n].block_style+'" class="im-tp-b-block '+l+" effect"+a.content.blocks[n].rollover_effect+'">'+k.render(a.content.blocks[n])+"</div>");var p=j[a.content.blocks[n].block_size];"undefined"==typeof p&&(p=j[0]),c.add(o,p),0!=a.content.blocks[n].rollover_effect?(new AbsoluteView).init($(".im-ts-title-padding",o)).setPosition(a.content.blocks[n].position):o.find(".block-content").addClass("text-block").css({"-webkit-border-radius":"0px","-moz-border-radius":"0px","border-radius":"0px"}),o.scanDirectives(b),null!==a.content.blocks[n].position&&2!=a.content.blocks[n].rollover_effect&&("undefined"!=typeof a.content.blocks[n].position.left?$(".im-ts-title-padding",o).css("text-align","left"):"undefined"!=typeof a.content.blocks[n].position.right&&$(".im-ts-title-padding",o).css("text-align","right")),1==a.content.blocks[n].action_type&&f.add(a.content.blocks[n])}},this.willLoad=function(){},this.didLoad=function(b){a=b},this.didAppear=function(){$(".im-tp-blocks-container",b.container).on("scroll mousewheel",l),l.apply($(".im-tp-blocks-container",b.container)[0])},this.willAppear=function(a){b.getBackground().show(),c.setPosition(),b.isFirstView()&&(Magazine.device.SUPPORT_TOUCH?$(".effect1, .effect2",b.container).on("click",function(a){$(this).hasClass("hover")?$(this).removeClass("hover"):($(this).addClass("hover"),a.preventDefault())}):Magazine.device.isIE8&&($(".effect1, .effect2",b.container).on("mouseover",function(a){$(this).addClass("hover")}),$(".effect1, .effect2",b.container).on("mouseout",function(a){$(this).removeClass("hover")}))),"undefined"!=typeof a.item&&f.show(a.item)},this.onHashChange=function(a){"undefined"!=typeof a.item?($("body").addClass("hide-floating-navigation"),f.show(a.item),$(".im-ts-button-background").css("z-index",0)):(f.hide(),$("body").removeClass("hide-floating-navigation"),$(".im-ts-button-background").css("z-index",4))},this.onOrientationChange=function(){},this.onResizeHandler=function(a){var c=b.container.find(".im-tp-blocks-container");c.length>0&&(Assets.navigationBar.size[a.size][2]?c.width(Magazine.pages.width-Assets.navigationBar.size[a.size][0]):Assets.navigationBar.size[4][2]&&c.width(""),c.css("height",Magazine.pages.height+"px"))},this.onEndResizeHandler=function(a){c.setPosition(),b.container.handleAlignments(),null!==g&&($(".im-tp-blocks-container",b.container)[0].scrollHeight>Magazine.pages.height?g.show():g.hide())},this.render=function(a){var c=0;for(var d in a.blocks){var e=a.blocks[d],f=new StyleModel(a.blocks[d].style);e.block_style=f.get(["background"]),e.content_block_style=f.get(["content_background"]),e.title_style=f.get(["title"]),e.m_title_style=f.get(["mobile_title"]),e.intro_style=f.get(["intro"]),e.m_intro_style=f.get(["mobile_intro"]),e.button_style=f.get(["button_background","button_font"]).split("background-color:").join("border-color:"),e.m_button_style=f.get(["mobile_button_font"]).split("background-color:").join("border-color:"),1==e.action_type?e.click_action=new ActionModel("#!/"+b.alias+"/item/"+c++):e.click_action=new ActionModel(e.action,e.title)}},this.willDisappear=function(){},this.didDisappear=function(){$(".im-tp-blocks-container",b.container).off("scroll mousewheel",l)},this.destroy=function(){null!==g&&g.release(),g=null},this.onSwitchSize=function(a,b){}}Loader.loadComplete();