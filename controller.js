'use strict';


angular.module('oneController', [])
.controller('Controller', ['$rootScope','$scope', '$http','dataService',
                   function($rootScope, $scope, $http, dataService) {

  // $scope.test = "prova";
  $scope.test = dataService.data;

}])
.controller('SecondController', ['$rootScope','$scope', '$http','dataService',
                   function($rootScope, $scope, $http, dataService) {

  // $scope.test = "prova";
  dataService.data = "ehilaaaaa";

}]);

