angular.module('directives', [])
.directive('menu', function(){
  return {
    restrict: 'AE',
    controller: 'menuController',
   	templateUrl: 'menu.html'
  };
})
.directive('helloWorld', function() {
  return {
    scope: true,  // use a child scope that inherits from parent
    restrict: 'AE',
    replace: 'true',
    template: '<h3>Hello World!!</h3>'
  };
});