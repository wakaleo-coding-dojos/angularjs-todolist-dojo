'use strict';

angular.module('thucydidesUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'dashboard/dashboard.tpl.html'
      })
      .state('requirements', {
        url: '/requirements',
        templateUrl: 'requirements/requirements.tpl.html',
        controller: 'RequirementsCtrl'
      });
  });
