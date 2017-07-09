// SERVICES
weatherApp.service('placeService', function(){
	var self = this;
	self.cityName = 'San Francisco, CA';

});

weatherApp.service('weatherService', [ '$resource',
	function($resource){

		this.GetWeather = function(city, days){
			var weatherAPI =
				$resource(baseUrl, {
				callback: 'JSON_CALLBACK' },
				{ get: { method: 'JSONP'} });

		 return weatherAPI.get({ APPID: API_KEY, q: city, cnt: days });
	};
	
}]);