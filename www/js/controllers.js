angular.module('starter.controllers', ['youtube-embed'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state,$http) {
  $scope.data = {};
  var authData;


  $scope.loggedIn = false;
  $scope.isLoggedIn = function() {
    return $scope.loggedIn;
  };

  
  var ref = new Firebase("https://super-bowl-genius.firebaseio.com/");

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.signUpData = {};

  //Form for Facebook
  var fbData = [];

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };

  $scope.signupEmail = function(data){  

    ref.createUser({
      email    : data.email,
      password : data.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);

      } else {
        console.log("Successfully created user account with uid:", userData.uid);

        return $state.go('app.gyms');
        
      }
    });
    
  };

  $scope.loginEmail = function(data){

    ref.authWithPassword({
      email    : data.email,
      password : data.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:");
        $scope.isLoggedIn = true;
        $scope.isLoggedIn();
        return $state.go('app.gyms');
        
      }
    });

     // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
    
  };


  $scope.loginFacebook = function(){

    if(ionic.Platform.isWebView()){

      $cordovaFacebook.login(["public_profile", "email"]).then(function(success){

        console.log(success);
        
        ref.authWithOAuthToken("facebook", success.authResponse.accessToken, function(error, authData) {
          if (error) {
            console.log('Firebase login failed!', error);
          } else {
            console.log('Authenticated successfully with payload:', authData);

            return $state.go('app.gyms');
          }
        });
        
      }, function(error){
        console.log(error);
      });        
      
    }
    else {

      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          fbData.push(authData);
          $scope.displayName = authData.facebook.displayName;
          $scope.profileImageURL = authData.facebook.profileImageURL;
          $scope.modal.hide();
          $scope.loggedIn = true;

        }
      });
      
    }
    
  };


  $scope.logoutFacebook = function(){
    ref.unauth();
    $scope.loggedIn = false;
    console.log("Should be loggin out!");
    return $state.go('app.gyms');
  };
})

.controller('RestaurantsCtrl', function($scope) {
  
})

.controller('TriviaCtrl', function($scope) {
  $scope.trivia = [
    { question: 'What is this?', answer: 1 },
    { question: 'Where is this', answer: 2 },
    { question: 'Who is this', answer: 3 },
    { question: 'When is this', answer: 4 },
    { question: 'What is that', answer: 5 },
    { question: 'What is going on', answer: 6 }
  ];
  
})

.controller('TeamsCtrl', function($scope) {
})

.controller('ChatCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope) {
})

.controller('CelebrititesCtrl', function($scope) {
})

.controller('RulesCtrl', function($scope) {
})

.controller('WeatherCtrl', function($scope) {
})


.controller('HomeCtrl', function($scope, $stateParams) {

});
