app.factory('AlertFactory', function($http){
  var AlertFactory = {}

  AlertFactory.getAlerts = function(){
    return $http.get('http://localhost:3000/alerts')
  }

  AlertFactory.setAlert= function(alert){
    console.log(alert);
    return $http.post("http://localhost:3000/alerts", alert)
  }

  return AlertFactory
})
