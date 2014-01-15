'use strict';

describe('Todo Controller', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var TodoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, todoStorage) {

    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
    });

    this.todoStorage = todoStorage;
    this.todoStorage.storeIn('temp-todos')

  }));

  afterEach(function() {
    this.todoStorage.clear();
  });

  it('should have no todo items initially', function () {
    expect(scope.todos.length).toEqual(0);
  });

  it('should be able to add a new todo', function(){
    scope.newTodo = 'new todo';
    TodoCtrl.addTodo();
    expect(scope.todos.length).toEqual(1);
    expect(scope.todos[0]).
  });

});
