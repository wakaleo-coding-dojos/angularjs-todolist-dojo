'use strict';

describe('Todo Service', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var todos;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (todoStorage) {
    todos = todoStorage;
    todos.storeIn('test-repo');
  }));

  afterEach(function() {
    todos.clear();
  });

  it('should initially be empty', function () {
    var storedTodos = todos.get();
    expect(storedTodos.length).toEqual(0);
  });

  it('should be able to clear the todo list', function() {

    todos.put([{title:'Gotta do this'},{title:'Gotta do this too'}]);

    todos.clear();

    var storedTodos = todos.get();
    expect(storedTodos.length).toEqual(0);

  });

  it('should be able to store new todos', function () {

    todos.put([{title:'Gotta do this'},{title:'Gotta do this too'}]);

    var storedTodos = todos.get();

    expect(storedTodos).toContain({title:'Gotta do this'});
    expect(storedTodos).toContain({title:'Gotta do this too'});
  });

});
