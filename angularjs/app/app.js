'use strict';

// Declare app level module which depends on views, and components

var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.version',
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// Wootric code
app.factory('wootricFactory', function () {
  window.wootricSettings = {
    email: 'nps@example.com',// TODO: The current logged in user's email address.
    created_at: 1234567890, // TODO: The current logged in user's sign-up date as a 10 digit Unix timestamp.
    account_token: 'NPS-xxxxxxx' // This is your unique account token.
  };

  return {
    run: function() {
      window.wootric_survey_immediately = true; // Shows survey immediately for testing purposes.  TODO: Comment out for production.
      window.wootric_no_surveyed_cookie = true; // Bypass cookie based throttle for testing purposes.  TODO: Comment out for production.
      window.wootric("run");
    }
  }
});

app.controller('myController', [
  'wootricFactory',
  function(wootricFactory, $scope, $location){
    wootricFactory.run();
  }
]);