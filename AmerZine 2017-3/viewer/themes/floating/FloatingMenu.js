var FloatingMenu=function(){var a,b,c=[],d=!1,e=function(a){var b=$('<div class="sidebar-page im-ts-sidebar im-ts-nav-active-color sidebar-page-'+a.id+'"></div>');c.push(b);var d=$('<h2 class="title">'+a.nav_title+"</h2>"),e=$('<p class="text">'+a.nav_description+"</p>"),f=$('<a class="close-button im-sp-size-70-0_4" aria-label="Close" href="#"><span class="im-sp im-sp-times inherit-font-size"></span></a>');return f.click(function(a){a.preventDefault(),h(null)}),b.append(f),b.append(d),b.append(e),b.find(".dynamicForm").each(function(){new DynamicForm(null,$(this))}),b},f=function(){b=$('<div class="sidebar-page floating-menu im-ts-nav-active-color editions-list"></div>');var a=$('<div class="list nav-page"></div>');b.append(a);var d=$('<a class="close-button im-sp-size-70-0_4" aria-label="Close" href="#"><span class="im-sp im-sp-times inherit-font-size"></span></a>');d.click(function(a){a.preventDefault(),h(null)}),b.append(d),c.push(b);for(var e=0;e<Magazine.editions.length;e++){var f=Magazine.editions[e],g=e%2==0?"odd":"even",i=$('<a class="polaroid edition '+g+'" href="'+f.url+'" target="_blank"><img src="'+Utils.viewHelper("getImageUrl",[f.thumb,600,416,null,null,1,1,1])+'"><span class="title">'+f.title+"</span></a>");a.append(i)}return b},g=function(){h(null),$(".floating-menu").removeClass("show"),$(".navigation_bar .floating-menu").on(Magazine.device.getCssProperty("transitionend"),function(){$(".navigation_bar .floating-menu").off(Magazine.device.getCssProperty("transitionend")),$(".navigation_bar .floating-menu").hide()}),d=!1,$(".pages").removeClass("floating-menu-show")},h=function(a){for(var b=0;b<c.length;b++)a!==c[b]&&c[b].removeClass("show");a&&a.toggleClass("show")},i=function(a){0===$(a.target).closest("a").length&&0===$(a.target).closest(".clickable").length&&($(window).height()-a.pageY>130?$(".wrapper-mobile-navigation").toggleClass("inactive"):$(".wrapper-mobile-navigation").removeClass("inactive"))},j=!1,k=function(){$(".wrapper-mobile-navigation:visible").length>0&&!j?($("body").bind("click",i),j=!0):0===$(".wrapper-mobile-navigation:visible").length&&j&&($("body").unbind("click",i),j=!1)},l=function(a,b){function c(a){setTimeout(function(){a.find("a").addClass("show")},2e3)}k(),b["mobile-navigation"]="bottom-center";var d=[];for(key in b){var e;if(-1===d.indexOf(b[key])){if(d.push(b[key]),e=$('<div class="floating-nav buttons '+b[key]+'">'),$(".navigation_bar").append(e),-1!==b[key].indexOf("-center")){var f=$('<div class="inner-wrapper"></div>');e.append(f),e=f}c(e)}}var g=m("menu",b);m("navigation",b),m("share",b);var h=g.find(".wrapper-menu"),i=$("#Magazine").find(".navigation_bar > .wrapper-sound");return-1!=b.menu.indexOf("right")&&h.prepend(h.find(".im-branding")),g.append(i),Config.options.floating_hamburger||void 0===Config.options.floating_hamburger?($(".floating-nav.buttons.mobile .im-btn-index").find(".im-page-indicator").hide(),g.find(".im-page-indicator").hide()):($(".floating-nav.buttons.mobile .im-btn-index").find(".im-sp.im-sp-index").hide(),g.find(".im-sp.im-sp-index").hide()),g},m=function(a,b){$(".navigation_bar").addClass("floating");var c=$(".navigation_bar").find(".wrapper-"+a),d=b[a].split("-"),e=c.find("a");e.attr("data-alignment",d[0]),e.attr("data-align-l-r",d[1]);var f=$(".navigation_bar").find(".floating-nav.buttons."+b[a]);return-1!==b[a].indexOf("-center")&&(f=f.find(".inner-wrapper")),f.append(c),f};return{init:function(c){$("#NavigationBar .wrapper a.nav-item").each(function(a){$(this).addClass("item-"+a)}),a=c,Magazine.registClass(this);var d=l(c,Magazine.theme.bucket),i=d.find(".nav-mute-button");c.addClass("floating-menu"),c.append('<div class="background im-ts-nav-active-color"></div>');var j=$('<div class="container"></div>');c.append(j),Magazine.on(this,"hideSoundControls",function(){Magazine.getSoundControl().isMuted()?i.find("span").addClass("muted"):i.find("span").removeClass("muted"),i.addClass("hidden").hide()}),Magazine.on(this,"showSoundControls",function(){Magazine.getSoundControl().isMuted()?i.find("span").addClass("muted"):i.find("span").removeClass("muted"),i.removeClass("hidden").show()}),0===Magazine.soundControl.registedSounds.length&&Magazine.trigger("hideSoundControls"),$(".pages").addClass(-1!==Magazine.theme.bucket.menu.indexOf("-right")?"menu-right":"menu-left"),i.click(function(a){return Magazine.getSoundControl().isMuted()?($(this).find("span").removeClass("muted"),Magazine.getSoundControl().unmute()):($(this).find("span").addClass("muted"),Magazine.getSoundControl().mute()),!1}),c[0].directive=this;var k=Magazine.getNavigationBar();if(k){var m=k.getLogo();if(m){var n='<div class="logo-wrapper logoNav"><img src="'+Config.magazine_url+m.uri+'"></div>';j.append(n)}var o=$('<a class="close-button im-sp-size-70-0_4" aria-label="Close" href="#"><span class="im-sp im-sp-times inherit-font-size"></span></a>');o.click(function(a){a.preventDefault(),g()}),j.append(o);var p=$("<div class='buttons-list nav-page-bottom'></div>");if(j.append(p),1==Config.options.has_search){var q=$('<a class="im-ts-nav-bar-background">'+Translate.getLabel("search")+"</a>");q.click(function(){g(),Magazine.searchWindow.open()}),p.append(q)}if(Magazine.editions){var r=$('<a class="im-ts-nav-bar-background">'+Translate.getLabel("btn_editions")+"</a>");r.click(function(){h(b)}),p.append(r),c.parent().append(f())}for(var s=0;s<k.getInfo().length;s++){var t=k.getInfo()[s],u=$('<a class="im-ts-nav-bar-background '+t.nav_action+'">'+t.label+"</a>");u.data("data",t),u.click(function(a){var b=$(this).data("data"),c=b.nav_action;if("text"===c)h($(".sidebar-page-"+$(this).data("data").id));else if("print"===c)$(".navigation_bar div.floating-nav .nav-page-right.print-bar").css("top",parseInt($(a.target).offset().top)+"px"),h(null),k.showPrintOptions();else if("page"===c)if(h(null),isNaN(b.nav_description))"string"==typeof b.nav_description&&0===b.nav_description.indexOf("overlay:")?(Magazine.overlay.show(parseInt(b.nav_description.substr(8))),a.preventDefault()):window.open(b.nav_description,"_blank");else{var d=Magazine.getNavigationController().getPageById(b.nav_description);b.href="#!/"+d.alias,window.location.hash=b.href}}),"text"===t.nav_action&&c.parent().append(e(t)),p.append(u)}p.append($(".mobile-share-buttons-wrapper"))}var v=Magazine.getNavigationController().getPages();$list=$("<div class='list nav-page'></div>");for(var s in v){var w=Utils.viewHelper("getImageUrl",[v[s].thumb,600,416,null,null,1,1]);if(1!=v[s].options.exclude_from_navigationbar){var x=s%2==0?"odd":"even";$list.append('<a href="#!/'+v[s].alias+'" data-pagenumber="'+v[s].number+'" title="'+v[s].title+'" class="polaroid nav-btn '+x+'"><img src="'+w+'" alt="'+v[s].title+'"><span>'+v[s].title.maxLines(2)+"</span></a>")}}if(Magazine.social||$(".wrapper-share").hide(),_activeButton=$("<div class='active'><span></span></div>"),$list.append(_activeButton),$list.children(".nav-btn").on("click",function(){h(null),window.location.hash=$(this).attr("href")}),j.append($list),!0===Magazine.isBranded){var y="https://www.instantmagazine.com/?utm_source=im&utm_medium=magazine&utm_campaign=im-branding&utm_content="+Magazine.id,z="Magazine.tracker.trackEvent('branding', "+Magazine.id+", '"+window.location.href+"')";j.append('<div class="mobile-branding"><div class="im-branding-poweredby" style="background-color:#000;"><a href="'+y+'" onclick="'+z+'" target="_blank"><img src="/images/branding/powered-by-im-07.png" width="128" /></a></div>'+Assets.navigationBar.navigationButtonIcon.render({label:"Branding",href:y,onclick:z,classname:"im-branding im-sp-size-80-0_375",target:"_blank",sprite:"branding"})+"</div>")}jQuery(".list.nav-page").find("a:nth-child("+(Magazine.getNavigationController().current+1)+")").addClass("active")},onPageChangeHandler:function(a,b){g()},toggle:function(){d=!d,d&&$(".navigation_bar .floating-menu").show(),$(".navigation_bar .floating-menu").off(Magazine.device.getCssProperty("transitionend")),setTimeout(function(){d?(a.addClass("show"),$(".pages").addClass("floating-menu-show"),Magazine.device.supportsAnimations()?$(".navigation_bar .floating-menu").on(Magazine.device.getCssProperty("transitionend"),function(){$(".navigation_bar .floating-menu").off(Magazine.device.getCssProperty("transitionend")),$($(".navigation_bar .floating-menu a")[0]).focus()}):setTimeout(function(){$($(".navigation_bar .floating-menu a")[0]).focus()},500)):(a.removeClass("show"),$(".pages").removeClass("floating-menu-show"),Magazine.device.supportsAnimations()?$(".navigation_bar .floating-menu").on(Magazine.device.getCssProperty("transitionend"),function(){$(".navigation_bar .floating-menu").off(Magazine.device.getCssProperty("transitionend")),$(".navigation_bar .floating-menu").hide()}):setTimeout(function(){$(".navigation_bar .floating-menu").hide()},500))},50)},onSwitchSize:function(a,b){k()},show:function(){$(".wrapper-mobile-navigation").removeClass("inactive")},hide:function(){$(".wrapper-mobile-navigation").addClass("inactive")}}};Loader.loadComplete();