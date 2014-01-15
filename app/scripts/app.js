'use strict';

angular.module('todoApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($stateProvider,  $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.html'
      });

    $urlRouterProvider.otherwise('/home');
  });
