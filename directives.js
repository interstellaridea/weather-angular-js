// DIRECTIVES

// WEATHER RESULTS
weatherApp.directive('weatherResults', function(){
	return {
		restrict: 'E', // HTML only elemets
		templateUrl: 'directives/weatherResults.htm',
		replace: true,
		scope: { // pass whole object to directive
			weatherObject: '=', // two way binding
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat: '@'
		}
	}
});
