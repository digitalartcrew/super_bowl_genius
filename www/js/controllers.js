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

.controller('RestaurantsCtrl', function($scope,superbowlService) {
   superbowlService.restaurants().then(function(res){
    console.log(res);
  $scope.restaurantResults = res.data;
});
  
})

.controller('TriviaCtrl', function($scope) {
  $scope.trivia = [
    {question: "What is the name of the Super Bowl trophy?", answer: "The Vince Lombardi Trophy", category: "Super Bowl"},
  {question: "Where did Super Bowl 49 take place?", answer: "Glendale, AZ", category: "Super Bowl"},
  {question: "Which NFL quarterback is known for his glorious neckbeard?", answer: "Andrew Luck", category: "Players"},
  {question: "Which was the first team to play in a domed stadium?", answer: "Oilers", category: "Teams"},
  {question: "What team performed the Super Bowl Shuffle in 1985?", answer: "Chicago Bears", category: "Teams"},
  {question: "What team was at the center of 2015's Deflategate controversy?", answer: "New England Patriots", category: "Teams"},
  {question: "What city did the Indianapolis Colts move from in 1984?", answer: "Baltimore, MD", category: "Teams"},
  {question: "Who is the only player in the Pro Football Hall of Fame with more than one Super Bowl interception?", answer: "Mel Blount", category: "Super Bowl"},
  {question: "Who holds the record for most completions in a Super Bowl?", answer: "Peyton Manning", category: "Super Bowl"},
  {question: "In which Super Bowl did John Elway play without scoring a touchdown?", answer: "Super Bowl XXII", category: "Super Bowl"},
  {question: "Which NFL player was convicted of dogfighting?", answer: "Michael Vick", category: "Players"},
  {question: "How many players are allowed on the field at a time for each team?", answer: "11", category: "Rules"},
  {question: "Which NFL team has produced the most regular season MVPs?", answer: "Colts", category: "Teams"},
  {question: "What is the only team that hasn't played in a conference championship since 1988?", answer: "Houston Texans", category: "Teams"},
  {question: "Which coach has the most lifetime coaching victories?", answer: "Don Shula", category: "Coaches"},
  {question: "Who was the oldest Hall of Fame inductee?", answer: "Ed Sabol", category: "Players"},
  {question: "Who holds the record for most rushing yards in a single game?", answer: "Adrian Peterson", category: "Players"},
  {question: "Who is the only left-handed quarterback in the Pro Football Hall of Fame?", answer: "Steve Young", category: "Players"}
  ];

  
})

.controller('TeamsCtrl', function($scope) {
})

.controller('ChatCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, superbowlService) {
    superbowlService.events().then(function(res){
    console.log(res);

})

.controller('CelebrititesCtrl', function($scope) {
})

.controller('RulesCtrl', function($scope) {
})

.controller('WeatherCtrl', function($scope) {
})


.controller('HomeCtrl', function($scope, $stateParams) {

});
