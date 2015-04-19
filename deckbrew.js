angular.module('deckbrew', ['ngResource'])

angular.module('deckbrew').factory('deckbrew', ['$resource', function($resource) {

	var deckbrew = {};
	var api = 'https://api.deckbrew.com/';

	deckbrew.search = function(params) {
		params = angular.copy(params);
		return $resource(api + 'mtg/cards', params).query();
	};

	deckbrew.getCardTypes = function() {
		return $resource(api + 'mtg/types').query();
	};

	deckbrew.getCardColors = function() {
		return $resource(api + 'mtg/colors').query();
	};

	return deckbrew;
}]);