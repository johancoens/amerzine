/**
 * Created by jgalama on 06/01/16.
 */
function IMUser(us){

	var user = $.extend(us, {
		save: function(cb, error){
			//rewrite without the use of whitepaper class
			if(user.raw) {
				Magazine.whitepaper.api.saveProfile(user.raw, function(response){
					user.setProfile(response._glimpsed);
					delete user.raw;
					cb(user);
				}, error);
			}
		},
		setProfile: function(profile) {
			for(var i in profile){
				if(i.indexOf('__') === 0){
					user[i.replace(/__/g, '')] = profile[i];
				}else {
					user[i] = profile[i];
				}
			}
		},
		getProfile: function() {
			var profile = {};
			for(var i in user){
				if(typeof user[i] !== "function") {
					profile[i] = user[i];
				}
			}
			return profile;
		}
	});
	return user;
}

Loader.loadComplete();