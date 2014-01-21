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
    this.todoStorage.storeIn('temp-todos');

  }));

  afterEach(function() {
    this.todoStorage.clear();
  });

  it('should have no todo items initially', function () {
    expect(scope.todos.length).toEqual(0);
  });

  it('should add a new item to the list', function () {
    scope.newTodo = 'Buy milk from Safeway';
    scope.addTodo();
    expect(scope.todos.length).toEqual(1);
    expect(scope.todos[0].title).toEqual('Buy milk from Safeway');
  });

  it('should clear the input field when an item is added', function () {
    scope.newTodo = 'Buy milk from Safeway';
    scope.addTodo();
    expect(scope.newTodo).toEqual('');
  });

  it('should add multiple new items to the list', function () {
    scope.newTodo = 'Buy milk from Safeway';
    scope.addTodo();
    scope.newTodo = 'Buy milk from Coles';
    scope.addTodo();
    expect(scope.todos.length).toEqual(2);
    expect(scope.todos).toContain({title: 'Buy milk from Safeway'});
    expect(scope.todos).toContain({title: 'Buy milk from Coles'});
  });




});
