app.factory('supebowlService', function($http, $q) {
	return {
		restaurants: function(){
			return $http.get('http://localhost:3001/restaurants');
		}
	};
});

//
//Demetris - START
//
var chat_server = "http://localhost:6789/";
app.factory('ChatService', function($rootScope, $http, $q) {
  return {
    connect: function() {
      //if the socket is already initialized then no need to initialize
      if (_.isUndefined($rootScope.messenger)) {
        if (_.isUndefined($rootScope.messenger_connected) || $rootScope.messenger_connected === false) {
          //socket is initialized but not connected => reconnect
          $rootScope.messenger.connect(chat_server);
        }
        return;
      }
      else {
        //socket is not initialized - do it now
        $rootScope.messenger_connected = false; //this will be set to false in the 'on connect' callback
        $rootScope.messenger = io.connect(chat_server);
      }
      //
      //register message handlers
      //
      //generic messages
      $rootScope.messenger.on('connect', function(socket){
        $rootScope.messenger_connected = true;
        $rootScope.messenger.emit('user-join', $rootScope.user_channel);
      });
      //user-defined messages
      $rootScope.messenger.on('post', function(message) {
        //a new message received
        var new_m = Array(); new_m.push(message);
        if (_.isUndefined($rootScope.messages))
          $rootScope.messages = new_m;
        else
          $rootScope.messages = new_m.concat($rootScope.messages);
        $rootScope.last_message = null;
        //update scope
        $rootScope.$apply();
      });
    },
  }
});
//
//Demetris - END
//