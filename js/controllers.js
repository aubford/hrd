app.controller('IndexController', ['$scope','AlertFactory', function($scope, AlertFactory){

    $scope.pageWhat = 'pageHome'

  AlertFactory.getAlerts().then(function(results){
      $scope.alerts = results.data
  })

}])


app.controller('AlertsController', ['$scope', 'AlertFactory', function($scope, AlertFactory){

    $scope.pageWhat = 'pageAlerts'

    AlertFactory.getAlerts().then(function(results){
        $scope.alerts = results.data
    })
}])


app.controller('NewAlertController', ['$scope', 'AlertFactory', '$location', function($scope, AlertFactory, $location){
    $scope.alert = {}

    $scope.newAlert = function(){
      

      var date = new Date()
      $scope.alert.date = date
      AlertFactory.setAlert($scope.alert).then(function(response){
        $location.path('/#/alerts')
      })
    }

    $scope.pageWhat = 'pageCases'

}])
