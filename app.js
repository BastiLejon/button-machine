angular.module('bl-buttonMachine', [])
  .directive('clip', function(){
    return {
      restrict: 'E',
      scope: {
        value: '='
      },
      template: '<iframe ng-src="http://www.youtube.com/embed/{{value}}"></iframe>'
    };
  })
  .controller('ClipsCtrl', function($scope){
    $scope.clips = [
      { id: "lI1EI_XsgHg", key: 1 },
      { id: "wgvwfvTcNl0", key: 2 },
      { id: "BWi-ZgaSCEw", key: 3 },
      { id: "qe5GS0MS5gU", key: 4 }
    ];
});

  

