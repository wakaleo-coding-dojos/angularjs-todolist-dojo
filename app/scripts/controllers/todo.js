'use strict';

angular.module('todoApp')
  .controller('TodoCtrl', function ($scope, todoStorage) {
    $scope.todos = todoStorage.get();
  });
