angular.module('EmailApp')
	.factory('EmailFactory', function EmailFactory($q, $http, $routeParams) {
		var exports = {};

		exports.reply = function(message) {
			if(message) {
				//should be backend but we dont have one soooo...
				alert('reply content: ' + message);
			}
		};

		exports.getMessage = function(params) {
			if(params.id) {
				var deferred = $q.defer();
				$http.get('json/message/' + params.id + '.json')
					.success( function(data) {
						deferred.resolve(data);
					})
					.error( function(data) {
						deferred.reject(data);
					});
				return deferred.promise;
			}
		};

		return exports;
	
	});
	