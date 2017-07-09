// CONTROLLERS

// HOME
weatherApp.controller('homeController', ['$scope','$location','placeService','$log',
	function($scope, $location, placeService, $log){

	$scope.cityName = placeService.cityName;
	$scope.$watch('cityName',function(){

		placeService.cityName = $scope.cityName;

	});

	$scope.submit = function(){
		$location.path("/forcast");
	};

}]);


// FORCAST
weatherApp.controller('forcastController', ['$scope','$routeParams','placeService', 'weatherService',
	function($scope, $routeParams, placeService, weatherService){

	$scope.cityName = placeService.cityName;
	$scope.days = $routeParams.days || '2';

	$scope.weatherResult = weatherService.GetWeather($scope.cityName, $scope.days);

	$scope.convertToFahrenheit = function(degK){
		return Math.round((1.8 * (degK - 273) + 32));
	}

	$scope.convertToDate = function(dt){
		return new Date(dt * 1000);
	}


}]);