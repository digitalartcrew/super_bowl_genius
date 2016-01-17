// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers','firebase','ngCordova','youtube-embed'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if (window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.disableScroll(true);

  }
  if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

     .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.restaurants', {
    url: '/restaurants',
    views: {
      'menuContent': {
        templateUrl: 'templates/restaurants.html',
        controller: 'RestaurantsCtrl'
      }
    }
  })

   .state('app.team', {
    url: '/teams',
    views: {
      'menuContent': {
        templateUrl: 'templates/teams.html',
        controller: 'TeamsCtrl'
      }
    }
  })

    .state('app.trivia', {
    url: '/trivia',
    views: {
      'menuContent': {
        templateUrl: 'templates/trivia.html',
        controller: 'TriviaCtrl'
      }
    }
  })

       .state('app.chat', {
    url: '/chat',
    views: {
      'menuContent': {
        templateUrl: 'templates/chat.html',
        controller: 'ChatCtrl'
      }
    }
  })
            .state('app.events', {
    url: '/events',
    views: {
      'menuContent': {
        templateUrl: 'templates/events.html',
        controller: 'EventsCtrl'
      }
    }
  })

          .state('app.celebrities', {
    url: '/celebrities',
    views: {
      'menuContent': {
        templateUrl: 'templates/celebrities.html',
        controller: 'CelebrititesCtrl'
      }
    }
  })

             .state('app.rules', {
    url: '/rules',
    views: {
      'menuContent': {
        templateUrl: 'templates/rules.html',
        controller: 'RulesCtrl'
      }
    }
  })

                .state('app.weather', {
    url: '/weather',
    views: {
      'menuContent': {
        templateUrl: 'templates/weather.html',
        controller: 'WeatherCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
