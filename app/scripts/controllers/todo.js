'use strict';

angular.module('todoApp')
  .controller('TodoCtrl', function ($scope, todoStorage) {
    $scope.newTodo = {};
    $scope.todos = todoStorage.get();
    $scope.addTodo = function() {
      $scope.todos.push($scope.newTodo);
      todoStorage.put($scope.todos);
      $scope.newTodo = {};
    };

    $scope.deleteTodos = function(todos){
      todoStorage.deleteTodos()
      angular.forEach($scope.todos, function(x){

      });
    };
  });
