var scotchApp = angular.module('scotchApp', ['ngRoute']);

//Routing...
scotchApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});
});

scotchApp.controller('mainController', function($scope){
	$scope.message = 'Everyone come and look at me!';
});

scotchApp.controller('aboutController', function($scope){
	$scope.message = "Look, an about page!";
});
scotchApp.controller('contactController', function($scope){
	$scope.message = "Look, a contact page!";
});
