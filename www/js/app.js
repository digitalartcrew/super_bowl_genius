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


  .state('app.gyms', {
    url: '/gyms',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'GymsCtrl'
      }
    }
  })

    .state('app.mma', {
    url: '/mma',
    views: {
      'menuContent': {
        templateUrl: 'templates/mma.html',
        controller: 'MmaCtrl'
      }
    }
  })

  .state('app.fitness', {
    url: '/fitness',
    views: {
      'menuContent': {
        templateUrl: 'templates/fitness.html',
        controller: 'FitnessCtrl'
      }
    }
  })

  .state('app.boxing', {
    url: '/boxing',
    views: {
      'menuContent': {
        templateUrl: 'templates/boxing.html',
        controller: 'BoxingCtrl'
      }
    }
  })

  .state('app.bjj', {
    url: '/bjj',
    views: {
      'menuContent': {
        templateUrl: 'templates/bjj.html',
        controller: 'BjjCtrl'
      }
    }
  })

  .state('app.wrestling', {
    url: '/wrestling',
    views: {
      'menuContent': {
        templateUrl: 'templates/wrestling.html',
        controller: 'WrestlingCtrl'
      }
    }
  })

  .state('app.yoga', {
    url: '/yoga',
    views: {
      'menuContent': {
        templateUrl: 'templates/yoga.html',
        controller: 'YogaCtrl'
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

  .state('app.singleevent', {
    url: '/events/:eventId',
    views: {
      'menuContent': {
        templateUrl: 'templates/event.html',
        controller: 'EventCtrl'
      }
    }
  })

  .state('app.fighters', {
    url: '/fighters',
    views: {
      'menuContent': {
        templateUrl: 'templates/fighters.html',
        controller: 'FightersCtrl'
      }
    }
  })

  .state('app.singlefighter', {
    url: '/fighters/:fighterId',
    views: {
      'menuContent': {
        templateUrl: 'templates/fighter.html',
        controller: 'FighterCtrl'
      }
    }
  })


  .state('app.news', {
    url: '/news',
    views: {
      'menuContent': {
        templateUrl: 'templates/news.html',
        controller: 'NewsCtrl'
      }
    }
  })

  .state('app.story', {
    url: '/news/:storyId',
    views: {
      'menuContent': {
        templateUrl: 'templates/story.html',
        controller: 'FighterCtrl'
      }
    }
  })

  .state('app.shop', {
    url: '/shop',
    views: {
      'menuContent': {
        templateUrl: 'templates/shop.html',
        controller: 'ShopCtrl'
      }
    }
  })

  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('app.progress', {
    url: '/progress',
    views: {
      'menuContent': {
        templateUrl: 'templates/progress.html',
        controller: 'ProgressCtrl'
      }
    }
  })
  .state('app.goals', {
    url: '/goals',
    views: {
      'menuContent': {
        templateUrl: 'templates/goals.html',
        controller: 'GoalsCtrl'
      }
    }
  })
  .state('app.films', {
    url: '/films',
    views: {
      'menuContent': {
        templateUrl: 'templates/films.html',
        controller: 'FilmsCtrl'
      }
    }
  })
  .state('app.blog', {
    url: '/blog',
    views: {
      'menuContent': {
        templateUrl: 'templates/blog.html',
        controller: 'BlogCtrl'
      }
    }
  })
  .state('app.friends', {
    url: '/friends',
    views: {
      'menuContent': {
        templateUrl: 'templates/friends.html',
        controller: 'FriendsCtrl'
      }
    }
  })

  .state('app.singlefriend', {
    url: '/friends/:friendId',
    views: {
      'menuContent': {
        templateUrl: 'templates/friend.html',
        controller: 'FriendCtrl'
      }
    }
  })

  .state('app.instructions', {
    url: '/instructions',
    views: {
      'menuContent': {
        templateUrl: 'templates/instructions.html',
        controller: 'InstructionsCtrl'
      }
    }
  })

  .state('app.media', {
    url: '/media',
    views: {
      'menuContent': {
        templateUrl: 'templates/media.html',
        controller: 'MediaCtrl'
      }
    }
  })

  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
        controller: 'AppCtrl'
      }
    }
  })
  ;


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/gyms');
});
