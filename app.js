// module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Base URL
var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily';

// API KEY for open weather map . org
var API_KEY = '9e2ffd02fc78320b3b944ab3210c459a';


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
		.when('/forcast/:days',{
			templateUrl: 'pages/forcast.htm',
			controller: 'forcastController'
		})


});

// Custom service
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
weatherApp.controller('forcastController', ['$scope','$resource','$routeParams','placeService',
	function($scope, $resource, $routeParams, placeService){

	$scope.cityName = placeService.cityName;

	$scope.days = $routeParams.days || 2;

	$scope.weatherAPI =
		$resource(baseUrl, {
		callback: 'JSON_CALLBACK' },
		{ get: { method: 'JSONP'} });

	$scope.weatherResult = $scope.weatherAPI.get({
		APPID: API_KEY,
		q: $scope.cityName,
		cnt: $scope.days });

	$scope.convertToFarenheit = function(degK){
		return Math.round((1.8 * (degK - 273) + 32));
	}

	$scope.convertToDate = function(dt){
		return new Date(dt * 1000);
	}


}]);





























