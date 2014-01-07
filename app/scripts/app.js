'use strict';

angular.module('thucydidesUiApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .when('/outcomes/:outcomeId', {
                templateUrl: 'outcomes/outcomes.tpl.html',
                controller: 'OutcomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
