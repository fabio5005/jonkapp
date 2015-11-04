'use strict';
var jonkApp = angular.module('mainModule', [
  'services',
  'directives',
  'oneController',
  'ngRoute',
]);
  
jonkApp.config(function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'Controller'
      });
      $routeProvider.when('/home', {
        templateUrl: 'home2.html',
        controller: 'SecondController'
      });
  });



// TODO: TEMPLATE CACHE TO TRY -- RT 8 Oct 2014
// jonkApp.run(function($rootScope, $templateCache) {
//   $rootScope.$on('$routeChangeStart', function(event, next, current) {
//   });
// });