Assets.extend=function(){this.navigationBar.soundButtonAfter=null,this.navigationBar.socialIconListClass="FloatingIconList",this.navigationBar.size=[],this.navigationBar.size[1]=[0,0,!0],this.navigationBar.size[2]=[0,0,!0],this.navigationBar.size[3]=[0,0,!0],this.navigationBar.size[4]=[0,0,!0],this.sources=[Config.viewer_url+"/themes/"+Config.theme+"/FloatingMenu.js",Config.viewer_url+"/themes/"+Config.theme+"/FloatingIconList.js"],this.branding.navigationBarPosition=".wrapper-menu",this.branding.appendOption="append",this.navigationBar.iconListClass="FloatingIconList",this.navigationBar.navigationButtonSocial=Hogan.compile('<a href="share" target="_blank" class="shareButton {{type}} item-{{index}} {{oddOrEven}}" onclick="Magazine.social.onClick(event,this)" data-type="{{type}}"><span class="im-sp im-sp-social-{{icon}}"></span></a>')},Loader.loadComplete();