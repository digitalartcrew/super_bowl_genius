app.factory('superbowlService', function($http, $q) {
	return {
		restaurants: function(){
			return $http.get('http://localhost:3001/restaurants');
		}
	};
});
