app.directive('auHeader', function(){
  return {

    controller: ['$scope', function($scope){

        $scope[$scope.pageWhat] = {active : true}
        $scope.main = {search:""}

    }],

    templateUrl: '../partials/header.html'

  }
})

app.directive('link', function(){
  return {
    link: function(scope, element, attrs) {
      element.on('click', function(){
        console.log('Link ' + scope.workingy)
      })
    }
  }
})
