/**
* bl-buttonMachine Module
*
* Description
*/
var myApp = angular.module('bl-buttonMachine', []);

myApp.controller('myController', ['$scope', function($scope){
  
  $scope.greeting = 'Todd Motto';

  $scope.text = 'Hello world.';

  $scope.user = {};
  $scope.user.details = {
    "username": "Todd Motto",
    "id": "89101112"
  };

  $scope.numbers = [10, 25, 35, 45, 60, 80, 100];
  $scope.lowerBound = 42;

  // Does the Filters
  $scope.greaterThanNum = function (item) {
      return item > $scope.lowerBound;
  };

}]);

myApp.directive('custombutton', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    /* template: '<strong><a href="" ng-transclude>' +
                '<i></i>' +
              '</a></strong>', */
    templateUrl: 'tmplt.html',
    link: function (scope, element, attrs) {
      // DOM manipulation/events here!
    }
  };
});

myApp.filter('reverse', function () {
    return function (input, uppercase) {
        var out = "";

        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }

        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    }
});






/*

angular.module('bl-buttonMachine', [])
.config(function($sceDelegateProvider) {
     $sceDelegateProvider.resourceUrlWhitelist([
       // Allow same origin resource loads.
       'self',
       // Allow loading from our assets domain.  Notice the difference between * and **.
       'http://www.youtube.com/**']);
     })
  .directive('clip', function(){
    return {
      restrict: 'E',
      scope: {
        value: '='
      },
      template: '<iframe ng-src="http://www.youtube.com/embed/{{value}}?rel=0" frameborder="0" width="180" height="101"></iframe>'
    };
  })
  .controller('ClipsCtrl', function($scope){
    $scope.clips = [
      { id: "lI1EI_XsgHg", key: 1 },
      { id: "wgvwfvTcNl0", key: 2 },
      { id: "BWi-ZgaSCEw", key: 3 }
    ];
})

  /*
.config(function($sceDelegateProvider, apiUrl) {
  $sceDelegateProvider.resourceUrlWhitelist([
   'self',
   "http://www.youtube.com/embed/**"
  ];
})


  angular.module('myApp', []).config(function($sceDelegateProvider) {
     $sceDelegateProvider.resourceUrlWhitelist([
       // Allow same origin resource loads.
       'self',
       // Allow loading from our assets domain.  Notice the difference between * and **.
       'http://srv*.assets.example.com/**']);

     // The blacklist overrides the whitelist so the open redirect here is blocked.
     $sceDelegateProvider.resourceUrlBlacklist([
       'http://myapp.example.com/clickThru**']);
     });

  

*/