var app = angular.module('WebApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'HomeCont',
			controllerAs: 'home'
		})
		.when('/port', {
			templateUrl: 'templates/port.html',
			controller: 'PortCont',
			controllerAs: 'port'
		})
		.otherwise({
			redirectTo: '/'
		});
})