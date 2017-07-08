// module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);



// Config routes
weatherApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'pages/home.htm',
			controller: 'homeController'
		})
		.when('/forcast',{
			templateUrl: 'pages/forcast.htm',
			controller: 'forcastController'
		})


});

// Custom Scope
weatherApp.service('placeService', function(){

	var self = this;

	self.cityName = 'San Francisco, CA';

});


// HomePage controller
weatherApp.controller('homeController', ['$scope','placeService','$log',function($scope, placeService, $log){


	$scope.cityName = placeService.cityName;

	$scope.$watch('cityName',function(){

		placeService.cityName = $scope.cityName;

	});



}]);



// Forcast controller
weatherApp.controller('forcastController', ['$scope','placeService','$log',function($scope, placeService, $log){

	$scope.cityName = placeService.cityName;

}]);







