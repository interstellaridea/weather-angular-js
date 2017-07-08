// module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);



// Config routes
weatherApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: '/pages/home.htm',
			controller: 'homeController'
		})
		.when('/forcast',{
			templateUrl: '/pages/forcast.htm',
			controller: 'forcastController'
		})


});


// HomePage controller
weatherApp.controller('homeController', ['$scope','$log',function($scope,$log){

	$scope.say = 'homePageController'
	//$log.log($scope.say);

}]);



// Forcast controller
weatherApp.controller('forcastController', ['$scope','$log',function($scope,$log){



}]);


