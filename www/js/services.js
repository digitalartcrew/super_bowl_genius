app.factory('mmaService', function($http, $q) {
	return {
		news: function(){
			return $http.get('http://localhost:3001/news');
		},
		media: function(){
			return $http.get('http://localhost:3001/media');
		},
		fighters: function(){
			return $http.get('http://localhost:3001/fighters');
		},
		events: function(){
			return $http.get('http://localhost:3001/events');
		},
		boxing: function(){
			return $http.get('http://localhost:3001/boxing');
		},
		mma: function(){
			return $http.get('http://localhost:3001/mma');
		},
		bjj: function(){
			return $http.get('http://localhost:3001/bjj');
		},
		muaythai: function(){
			return $http.get('http://localhost:3001/muaythai');
		},
		yoga: function(){
			return $http.get('http://localhost:3001/yoga');
		},
		fitness: function(){
			return $http.get('http://localhost:3001/fitness');
		},
		wrestling: function(){
			return $http.get('http://localhost:3001/wrestling');
		},
	};

});
