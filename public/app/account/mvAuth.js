angular.module('app').factory('mvAuth', function($http, mvIdentity, $q) {
	return {
		authenticateUser: function(username, password) {
			var dfd = $q.defer();
			$http.post('/login', {username: username, password: password}).then(function(response) {
				if (response.data.success) {
					dfd.resolve(true);
					mvIdentity.currentUser = response.data.user;
				} else {
					dfd.resolve(false);
				}
			});
			return dfd.promise;
		}
	}
});