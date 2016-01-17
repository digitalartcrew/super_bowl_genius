app.factory('superbowlService', function($http,$q) {
	return {
		restaurants: function(){
			return $http.get('http://localhost:3001/restaurants/');
		},
		events: function(){
			return $http.get('http://localhost:3001/events');
		},
		teams: function(){
			return $http.get('http://localhost:3001/teams/');
		},
		greenbay: function(){
			return $http.get('http://localhost:3001/greenbay/');
		},	
		carolina: function(){
			return $http.get('http://localhost:3001/carolina/');
		},	
		seattle: function(){
			return $http.get('http://localhost:3001/seattle/');
		},	
		arizona: function(){
			return $http.get('http://localhost:3001/arizona/');
		},		
		denver: function(){
			return $http.get('http://localhost:3001/denver/');
		},	
		kansas: function(){
			return $http.get('http://localhost:3001/kansas/');
		},	
		newengland: function(){
			return $http.get('http://localhost:3001/newengland/');
		},	
	}; 
});




