var app = angular.module('hrdApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.bootstrap'])

		app.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '../partials/index.html',
					controller: 'IndexController'
				})
				.when('/alerts', {
					templateUrl: '../partials/alerts/alerts.html',
					controller: 'AlertsController'
				})
				.when('/cases', {
					templateUrl: '../partials/cases.html',
					controller: 'CasesController'
				})
				.when('/alerts/new', {
					templateUrl: '../partials/alerts/new.html',
					controller: 'NewAlertController'
				})
				.otherwise({redirectTo : '/'})
		})
