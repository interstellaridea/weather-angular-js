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
weatherApp.controller('forcastController', ['$scope','$resource','$routeParams','placeService',
	function($scope, $resource, $routeParams, placeService){

	$scope.cityName = placeService.cityName;
	$scope.days = $routeParams.days || '2';

	$scope.weatherAPI =
		$resource(baseUrl, {
		callback: 'JSON_CALLBACK' },
		{ get: { method: 'JSONP'} });

	$scope.weatherResult = $scope.weatherAPI.get({
		APPID: API_KEY,
		q: $scope.cityName,
		cnt: $scope.days });

	$scope.convertToFahrenheit = function(degK){
		return Math.round((1.8 * (degK - 273) + 32));
	}

	$scope.convertToDate = function(dt){
		return new Date(dt * 1000);
	}


}]);