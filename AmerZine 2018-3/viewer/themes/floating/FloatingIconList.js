function FloatingIconList(){var a,b,c=this;this.view=null,this.events=new NavigationItemEvents,this.template=null,this.init=function(b){"undefined"!=typeof b&&(a=b)},this.setView=function(a){c.view=a},this.setModels=function(b){a=b},this.getModels=function(){return a},this.willShow=function(a){0==c.view.children().length&&c.build(a)},this.hide=function(){c.view.removeClass("show").css(Magazine.device.getCssProperty("transform"),Magazine.device.getCssTranslate(0,0))},this.show=function(a){b=a,c.view.addClass("show").css("left",parseInt(a.css("margin-left"))+(a.outerWidth()/2-c.view.outerWidth()/2)+"px")},this.build=function(b){b.parent().append($(".nav-page.nav-page-right.share-bar"));for(var d=0;d<a.length;d++){var e;a[d].oddOrEven=d%2===0?"even":"odd",a[d].index=d,e="undefined"==typeof a[d].view?this.template.render(a[d]):a[d].view,a[d].button=$(e),c.view.append(a[d].button),"undefined"!=typeof a[d]._onclick&&a[d].button.on("click",a[d]._onclick)}b.data("alignment")&&c.view.css(b.data("alignment"),b.outerHeight())}}Loader.loadComplete();