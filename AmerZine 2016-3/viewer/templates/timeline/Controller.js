function TimelineController(){function a(){var a=!1;"top"==e.content.nav_type&&(e.content.nav_type="circle",a=!0),g.init(b.container,NavigationButtonType[e.content.nav_type.toUpperCase()]),g.setTop(a)}var b,c,d,e,f,g,h,i=[],j=0,k=!0;this.init=function(a){b=a},this.onLoad=function(a){Loader.loadFile(Config.templatePathView+b.template+"/ContentBlock.html",function(b){d=Hogan.compile(b.response),a()})},this.didLoad=function(a){e=a},this.didLoadView=function(){if(f=new ScrollHandler,f.onScroll=function(a,c){b.onScrollHandler(a);for(var d in i)i[d].onScroll(a,c);f.height=Magazine.pages.height-j},null!==e.content.nav_type&&void 0!==e.content.nav_type&&(g=new NavigationButtons,a(),g.setScrollHandler(f),b.container.addClass("nav-type-"+e.content.nav_type)),c=$(".im-tp-timelines",b.container),e.content.background&&(b.getBackground().init([e.content.background]),b.container.prepend(b.getBackground().render()),b.getBackground().show()),null!==e.content.timeline){for(var k=0;k<e.content.timeline.length;k++){h=new IMTimeline(b),h.init(),void 0!==e.content.order_by&&null!==e.content.order_by&&""!==e.content.order_by&&h.orderBy(e.content.order_by),h.setTitle(e.content.timeline[k].title),h.setStyle(e.content.timeline[k].header_style);for(var l in e.content.timeline[k].content_block)h.addItem(d.render(e.content.timeline[k].content_block[l]),e.content.timeline[k].content_block[l]);h.appendTo(c),i.push(h)}c.find("a.timeline-unit .paragraph").each(function(){for(var a=$($(this).children()[$(this).children().length-1]);a.hasClass("im-media")&&a.length>0;)a=a.prev();a.length>0&&a.addClass("im-sp-after-relative")})}},this.willAppear=function(a){if(b.isFirstView()){var c=$("h1",b.container);c.length>0&&(j=c.outerHeight())}for(var d in i)i[d].willAppear()},this.didAppear=function(a){if(b.isFirstView()){f.init(b.container,c);for(var d in i)i[d].offsetCorrectie=c.offset().top,i[d].show();for(var d in i)i[d].onScroll(0,f.height,k);$(".im-tp-timeline-line",b.container).css({opacity:1,height:"100%"}),void 0!==g&&(f.canScroll()?g.show():g.hide())}if(void 0!==a.item){var e=parseInt(a.item);void 0!==i[e]&&f.scrollTo(i[e].getPosition(),!0)}for(var d in i)i[d].onResizeHandler(Magazine.device);k=!1},this.render=function(a){if(null!==a.timeline)for(var b in a.timeline){var c=a.timeline[b];c.header_style=new StyleModel(c.header_style);for(var d in c.content_block){var e=c.content_block[d];"1"==e.media_type?e.media_first=!0:e.media_first=!1,e.action=new ActionModel(e.action),e.style=new StyleModel(e.style),e.style.title=e.style.get(["title","title_background"]),e.style.subtitle=e.style.get(["subtitle"]),e.style.block=e.style.get(["paragraph_background"]),e.style.paragraph=e.style.get(["paragraph"]),e.style.m_title=e.style.get(["m_title","m_title_background"]),e.style.m_subtitle=e.style.get(["m_subtitle"]),e.style.m_block=e.style.get(["m_paragraph_background"]),e.style.m_paragraph=e.style.get(["m_paragraph"])}}},this.willDisappear=function(){for(var a in i)i[a].willDisappear()},this.onResizeHandler=function(a){var c=$("h1",b.container);c.length>0&&(j=c.outerHeight());for(var d in i)i[d].onResizeHandler(a);"object"==typeof f&&(f.height=Magazine.pages.height-j,f.onResizeHandler(a)),void 0!==g&&(f.canScroll()?g.show():g.hide())},this.onEndResizeHandler=function(a){for(var b=0;b<e.content.timeline.length;b++)i[b].setStyle(e.content.timeline[b].header_style)},this.onHashChange=function(a){if(void 0!==a.item){var b=parseInt(a.item);void 0!==i[b]&&f.scrollTo(i[b].getPosition(),!0)}}}Loader.loadComplete();