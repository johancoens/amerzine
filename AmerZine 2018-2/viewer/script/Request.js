/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Magazine.request = function () {
    var _params = {};
    function _init() {
        _params = _getSearchParams();
    }
	function multiIndex(obj, is, value) {  // obj,['1','2','3'] -> ((obj['1'])['2'])['3']
		if(is.length > 1){
			var key = is.shift();
			obj[key] = obj[key] || {};
			multiIndex(obj[key], is, value);
		} else {
			var key = is.shift();
			obj[key] = value;
		}
	}
	function pathIndex(obj,is, value) {   // obj,'1.2.3' -> multiIndex(obj,['1','2','3'])
		return multiIndex(obj, is.split('.'), value);
	}
    function _getSearchParams() {
        var params = {};
        var query = window.location.search.substring(1);
        if (query.length > 0) {
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (pair.length === 1 || pair[1] === '') {
                    continue;
                }
                // If first entry with this name
                if (typeof params[pair[0]] === 'undefined') {
					if(pair[0].indexOf('.') !== -1){
						pathIndex(params, pair[0], pair[1]);
					} else {
                    	params[pair[0]] = decodeURIComponent(pair[1]);    // If second entry with this name
					}
                } else if (typeof params[pair[0]] === 'string') {
                    var arr = [
                        params[pair[0]],
						decodeURIComponent(pair[1])
                    ];
                    params[pair[0]] = arr;    // If third or later entry with this name
                } else {
                    params[pair[0]].push(decodeURIComponent(pair[1]));
                }
            }
        }
        if (typeof Config.getParams !== 'undefined' && Config.getParams.length !== 0) {
            $.extend(params, Config.getParams);
            Config.getParams = params;
        }
        return params;
    }
    _init();
    return {
        getParams: function () {
            return _params;
        },
        setParam: function (key, value) {
            if (value === null) {
                delete _params[key];
                return;
            }
            //if (typeof value === 'object') {
            //    value = 'o::' + JSON.stringify(value);
            //}
			Config.getParams = Config.getParams || {};
			Config.getParams[key] = value;
            _params[key] = value;
        },
        getParam: function (key, _default) {
            if (typeof _params[key] !== 'undefined') {
                if (typeof _params[key] === "string" && _params[key].indexOf('o::') === 0) {
                    return JSON.parse(_params[key].substring(3));
                }
                return _params[key];
            }
            if (typeof _default !== 'undefined') {
                return _default;
            }
            return false;
        }
    };
}();
Loader.loadComplete();