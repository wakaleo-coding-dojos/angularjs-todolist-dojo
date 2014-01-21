'use strict';

angular.module('todoApp')
  .controller('TodoCtrl', function ($scope, todoStorage) {
    $scope.todos = todoStorage.get();
    $scope.addTodo = function() {
      $scope.todos.push({title:$scope.newTodo});
      todoStorage.put($scope.todos);
      $scope.newTodo = '';
    };
  });
