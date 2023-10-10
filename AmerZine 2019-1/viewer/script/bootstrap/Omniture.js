var OmnitureExcludedCategory = [];

function OmnitureTracker(analytics) {
	"use strict";

	this.setPageName = function (page) {
		this.page = page;
		var metas = document.getElementsByTagName('meta');

		for (var i=0; i<metas.length; i++) {
			if (metas[i].getAttribute("name") && metas[i].getAttribute("name").toUpperCase().indexOf('PAGENAME') !== -1) {
				return metas[i].setAttribute("content", this.validateValue(page.title));
			}
		}
	};

	this.trackEvent = function (category, action, opt_label, opt_value, opt_noninteraction) {
		if (OmnitureExcludedCategory.indexOf(category) !== -1) return;

		var page = this.getPageName(category, action, opt_label);
		var conversionObject = {};
		if (category === 'Video') {
			if (action === 'Playing') {
			conversionObject.name = 'video_start';
			conversionObject.videoname = opt_label;
			}
		} else {
		conversionObject.pagename = page;
		conversionObject.name = 'interaction';
		conversionObject.description = this.getDescription(category, action, opt_label, opt_value);
		}
		analytics.trackConversion(conversionObject);
	};
	this.getPageName = function() {
		if (this.page) {
			return this.validateValue(this.page.title);
		}
		return false;
	};
	this.getDescription = function (category, action, label, value) {
		var description;
		switch(category) {
			case 'Footer':
				description = 'menu:' + label;
				break;
			case 'Scroll':
				description = category + '_' + action;
				break;
			case 'Gallery':
				description = 'img:' + value;
				break;
			case 'Videos':
				description = 'video_start' + value;
				break;
			case 'Multi gallery':
				description = action + ':img:' + label;
				break;
			case 'Overlay':
				description = category + '_' + action + '_' + label;
				break;
			case 'Video':
				description = category + '_' + action + '_' + label;
				break;
			case 'Navigationbar':
				switch(label) {
					case 'pageindex':
						description = label + '_' + action;
						break;
					default:
						description = category + label;
						break;
				}
				break;
			default:
				description = label;
				break;
		}
		return this.validateValue(description)
	};

	this.validateValue = function (value) {
		return value.toLowerCase().replace(/:\s/g, ':').replace(/[\s|\/]/g, '_');
	};

	this.trackPageView = function (imPage) {
		if (!this.page || imPage.number !== this.page.number) {
			this.setPageName(imPage);
			analytics.trackAjax({
				type: 'o',
				pagename: this.getPageName()
			});
		}
	};
}