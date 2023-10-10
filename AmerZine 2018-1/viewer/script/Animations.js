/*
 * @author Joost Galama
 */
var animationstarted = 0;
var animationended = 0;
/**
 * extending jQuery functions/plugins
 * @class jQueryObject
 * @function abortAnimation
 * @function startAnimation({String} animation, {Object} settings, {Function} callback)
 * startAnimation
 *
 * @example:
 * jQuery("#elementId").startAnimation(Animation.fadeIn, 2, onCompleteEventListener);
 */
(function (jQuery) {
    jQuery.fn.abortAnimation = function (animation) {
        var _animationClass;
        var _item = jQuery(this);
        //Todo: should be for each item
        function _abort() {
            if (animation) {
                _animationClass = 'animate ' + animation;
            } else if (_item.data('animation')) {
                _animationClass = 'animate ' + _item.data('animation');
            } else {
                return this;
            }
            if (_item[0].loopTimer) {
                clearTimeout(_item[0].loopTimer);
            }
            if (_item[0].safetyTimer != null) {
                clearTimeout(_item[0].safetyTimer);
                _item[0].safetyTimer = null;
            }
            if (_item.hasClass(_animationClass)) {
                _item.off(Magazine.device.getCssProperty('animationend')).css(Magazine.device.getCssProperty('AnimationDelay'), '').css(Magazine.device.getCssProperty('AnimationIterationCount'), '').css(Magazine.device.getCssProperty('AnimationTimingFunction'), '').css(Magazine.device.getCssProperty('AnimationDuration'), '').removeClass(_animationClass);
            }
        }
        _abort();
        return this;
    };
    jQuery.fn.setAnimation = function (animation, settings) {
        return this.each(function (index) {
        });
    };
    /**
    * @param {String} animation Type (see const Animation)
    * @param {Object} settings
    *  - animation type (see below Animation Object)
    *  - settings object
    *      @default values:
    *      - delay: 0 (milliseconds)
    *      - hideAfterAnimation: true (if it's a fadeOut animation the object will be hidded).
    *      - loop: -1 (-1 = no loop, 0 = infinit loop, >0 = times of loop playing
    *      - ease: null (default using the animations easing parameters)
    */
    jQuery.fn.startAnimation = function (animation, settings, onComplete) {
        return this.each(function (index) {
            var _animationClass = 'animate ' + animation;
            var _item = jQuery(this);
            _item[0].safetyTimer = 0;
            this.loopTimer = false;
            var _defaultSettings = {
                delay: 0,
                hideAfterAnimation: true,
                loop: -1,
                loopDelay: false,
                ease: null,
                duration: null
            };
            var _timesRun = 0;
            var _settings = settings || {};
            if (!_settings.display) {
                try {
                    _settings.display = _item.css('display');
                }catch(e){
                    _settings.display = 'block';
                }
                if (_settings.display === 'none') {
                    _settings.display = 'block';
                }
            }
            function _reset() {
                _item.off(Magazine.device.getCssProperty('animationend')).css(Magazine.device.getCssProperty('AnimationDelay'), '').css(Magazine.device.getCssProperty('AnimationIterationCount'), '').css(Magazine.device.getCssProperty('AnimationTimingFunction'), '').css(Magazine.device.getCssProperty('AnimationDuration'), '');
            }
            function _init() {
                if (/animate.\w*/.test(_item[0].className)) {
                    _reset();
                    //                    Console.error("unfinished animation");
                    _item[0].className = _item[0].className.replace(/animate.\w*/, '');
                }
                _settings = jQuery.extend({}, _defaultSettings, _settings);
                _item.on(Magazine.device.getCssProperty('animationend'), _didEndAnimation);
                if (_settings.delay > 0) {
                    _item.css(Magazine.device.getCssProperty('AnimationDelay'), _settings.delay + 'ms');
                }
                if (_settings.loop == 0 && _settings.loopDelay == false) {
                    _item.css(Magazine.device.getCssProperty('AnimationIterationCount'), 'infinite');
                } else if (_settings.loop > -1 && _settings.loopDelay == false) {
                    _item.css(Magazine.device.getCssProperty('AnimationIterationCount'), _settings.loop);
                } else if (_settings.loop > 0) {
                }
                if (_settings.ease != null) {
                    _item.css(Magazine.device.getCssProperty('AnimationTimingFunction'), _settings.ease);
                }
                if (_settings.duration != null) {
                    _item.css(Magazine.device.getCssProperty('AnimationDuration'), _settings.duration + 'ms');
                }
                if (/In/.test(animation) && _settings.delay === 0) {
                    if(_settings.display !== 'ignore'){
                        if (_settings.display === 'inline-block') {
                            _item.css('display', 'inline-block');
                        } else {
                            _item.css('display', 'block');
                        }
                    }
                }
                _item.data('animation', _animationClass);
                _item.addClass(_animationClass);
                if (_item[0].safetyTimer != null) {
                    clearTimeout(_item[0].safetyTimer);
                    _item[0].safetyTimer = null;
                }
                if (/Out/.test(animation) && _settings.loopDelay == false) {
                    _item[0].safetyTimer = setTimeout(function(){
						_didEndAnimation({
							target: _item[0]
						})
					}, 5000);
                }
                if (!Magazine.device.supportsAnimations()) {
                    _didEndAnimation({
						target: _item[0]
					});
                }
            }
            function _didEndAnimation(e) {
				if(e.target !== _item[0]) return;
                _timesRun++;
                if (_item[0].safetyTimer != null) {
                    clearTimeout(_item[0].safetyTimer);
                    _item[0].safetyTimer = null;
                }
                if (_settings.loop > _timesRun - 1 && _settings.loopDelay != false && Magazine.device.supportsAnimations() && typeof e != 'undefined') {
                    if (_settings.delay > 0) {
                        _item.css(Magazine.device.getCssProperty('AnimationDelay'), '');
                    }
                    _settings.delay = 0;
                    if (/In/.test(_animationClass)) {
                        _item.hide();
                    }
                    _item.removeClass(_animationClass);
                    e.target.loopTimer = setTimeout(function () {
                        _item.show().addClass(_animationClass);
                    }, _settings.loopDelay);
                    return;
                }
                _item.data('animation', '');
                _item.off(Magazine.device.getCssProperty('animationend'), _didEndAnimation);
                if (_settings.delay > 0) {
                    _item.css(Magazine.device.getCssProperty('animationDelay'), '');
                }
                if (_settings.loop != -1) {
                    _item.css(Magazine.device.getCssProperty('AnimationIterationCount'), '');
                }
                if (_settings.ease != null) {
                    _item.css(Magazine.device.getCssProperty('AnimationTimingFunction'), '');
                }
                if (_settings.duration != null) {
                    _item.css(Magazine.device.getCssProperty('AnimationDuration'), '');
                }
                if (_settings.hideAfterAnimation && /Out/.test(_item[0].className)) {
                    _item.hide();
                }
                _item.removeClass(_animationClass);
                if (jQuery.isFunction(onComplete)) {
                    onComplete(_item);
                }
            }
            _init();
            return this;
        });
    };
}(jQuery));
/*
 * @constant
 */

var selectedTransition = {
    slideInLeft: 'slideInLeft',
    slideInRight: 'slideInRight',
    slideOutLeft: 'slideOutLeft',
    slideOutRight: 'slideOutRight'
};


//console.log(Config.options.transition.name);

var IntroAnimation = {
    animate: true,
    contentType: 'fadeInUp',
    textType: 'fadeInLeft',
    duration: '',
    contentType2: 'scaleDownIn',
    textType2: 'fadeIn',
    contentDelay: 100,
    textDelay: 400
};

var Animation = {

	semiFadeIn: 'semiFadeIn',
	semiFadeOut: 'semiFadeOut',
    bunnyScaleUpIn: 'bunnyScaleUpIn',

    scaleUpIn: 'scaleUpIn',
    scaleUpOut: 'scaleUpOut',
    scaleDownIn: 'scaleDownIn',
    scaleDownOut: 'scaleDownOut',
    //Attention seekers,
    flash: 'attentionflash',
    bounce: 'attentionbounce',
    shake: 'attentionshake',
    ring: 'attentionring',
    swing: 'attentionswing',
    wobble: 'attentionwobble',
    wiggle: 'attentionwiggle',
    pulse: 'attentionpulse',
    pulseInOut: 'pulseInOut',
    pulse2: 'pulse',
    //Flippers (currently Webkit, Firefox, &amp; IE10 only),
    flip: 'flip',
    flipInX: 'flipInX',
    flipOutX: 'flipOutX',
    flipInY: 'flipInY',
    flipOutY: 'flipOutY',
    //Fading entrances,
    fadeIn: 'fadeIn',
    fadeInUp: 'fadeInUp',
    fadeInDown: 'fadeInDown',
    fadeInLeft: 'fadeInLeft',
    fadeInRight: 'fadeInRight',
    fadeInUpBig: 'fadeInUpBig',
    fadeInDownBig: 'fadeInDownBig',
    fadeInLeftBig: 'fadeInLeftBig',
    fadeInRightBig: 'fadeInRightBig',
    //Fading exits,
    fadeOut: 'fadeOut',
    fadeOutUp: 'fadeOutUp',
    fadeOutDown: 'fadeOutDown',
    fadeOutLeft: 'fadeOutLeft',
    fadeOutRight: 'fadeOutRight',
    fadeOutUpBig: 'fadeOutUpBig',
    fadeOutDownBig: 'fadeOutDownBig',
    fadeOutLeftBig: 'fadeOutLeftBig',
    fadeOutRightBig: 'fadeOutRightBig',
    //Bouncing entrances,
    bounceIn: 'bounceIn',
    bounceInDown: 'bounceInDown',
    bounceInUp: 'bounceInUp',
    bounceInLeft: 'bounceInLeft',
    bounceInRight: 'bounceInRight',
    slideInDown: 'slideInDown',
    slideInUp: 'slideInUp',
    slideInLeft: 'slideInLeft',
    slideInRight: 'slideInRight',
    slideOutDown: 'slideOutDown',
    slideOutUp: 'slideOutUp',
    slideOutLeft: 'slideOutLeft',
    slideOutRight: 'slideOutRight',
    //Bouncing exits,
    bounceOut: 'bounceOut',
    bounceOutDown: 'bounceOutDown',
    bounceOutUp: 'bounceOutUp',
    bounceOutLeft: 'bounceOutLeft',
    bounceOutRight: 'bounceOutRight',
    //Rotating entrances,
    rotateIn: 'rotateIn',
    rotateInDownLeft: 'rotateInDownLeft',
    rotateInDownRight: 'rotateInDownRight',
    rotateInUpLeft: 'rotateInUpLeft',
    rotateInUpRight: 'rotateInUpRight',
    //Rotating exits,
    rotateOut: 'rotateOut',
    rotateOutDownLeft: 'rotateOutDownLeft',
    rotateOutDownRight: 'rotateOutDownRight',
    rotateOutUpLeft: 'rotateOutUpLeft',
    rotateOutUpRight: 'rotateOutUpRight',
    //Lightspeed,
    lightSpeedIn: 'lightSpeedIn',
    lightSpeedOut: 'lightSpeedOut',
    //Specials,
    hinge: 'hinge',
    rollIn: 'rollIn',
    rollOut: 'rollOut'
};
/*
 *  author Joost Galama - Joostmedia
 *
 */
//var Ease = {
//    InQuad: "InQuad",
//    InCubic: "InCubic",
//    InQuart: "InQuart",
//    InQuint: "InQuint",
//    InSine: "InSine",
//    InExpo: "InExpo",
//    InCirc: "InCirc",
//    InBack: "InBack",
//    OutQuad: "OutQuad",
//    OutCubic: "OutCubic",
//    OutQuart: "OutQuart",
//    OutQuint: "OutQuint",
//    OutSine: "OutSine",
//    OutExpo: "OutExpo",
//    OutCirc: "OutCirc",
//    OutBack: "OutBack",
//    InOutQuad: "InOutQuad",
//    InOutCubic: "InOutCubic",
//    InOutQuart: "InOutQuart",
//    InOutQuint: "InOutQuint",
//    InOutSine: "InOutSine",
//    InOutExpo: "InOutExpo",
//    InOutCirc: "InOutCirc",
//    InOutBack: "InOutBack"
//};
var CssEase = {
    bounce: 'cubic-bezier(0.0, 0.35, .5, 1.3)',
    linear: 'linear',
    swing: '-in-out',
    InQuad: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
    InCubic: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
    InQuart: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
    InQuint: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
    InSine: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)',
    InExpo: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
    InCirc: 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
    InBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
    OutQuad: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    OutCubic: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
    OutQuart: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    OutQuint: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)',
    OutSine: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    OutExpo: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
    OutCirc: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
    OutBack: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    InOutQuad: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    InOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    InOutQuart: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
    InOutQuint: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
    InOutSine: 'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
    InOutExpo: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
    InOutCirc: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
    InOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550',
    MarcoTest: 'cubic-bezier(0.875, 0.220, 0.715, 1.350)'
};
Loader.loadComplete();
