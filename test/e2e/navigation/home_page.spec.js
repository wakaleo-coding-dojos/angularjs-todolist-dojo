'use strict';

describe('Displaying the todo list', function() {

  var todoField = element(by.id('new-todo'));
  var submitButton = element(by.id('new-todo-submit'));

  it('should display the home page by default', function() {
    browser.get('/#/');

    var defaultUrl = browser.getCurrentUrl();

    browser.get('/#/home');

    expect(browser.getCurrentUrl()).toEqual(defaultUrl);

  });

  it('should prompt for todos on the home page', function() {

    browser.get('/#/');

    expect(todoField.isDisplayed()).toBeTruthy();

  });

  it('should add a todo', function() {
    browser.get('/#/');
    todoField.sendKeys('get bread.');

    submitButton.click();

    var repeater = element(by.repeater('todo in todos').row(0).column('title'));

    expect(repeater.getText()).toContain('get bread.');  //c;

  });

  it('should add multiple todos', function() {
    browser.get('/#/');
    todoField.sendKeys('get bread.');

    submitButton.click();

    todoField.sendKeys('get eggs.');

    submitButton.click();

    todoField.sendKeys('get cheese.');

    submitButton.click();

    var bread = element(by.repeater('todo in todos').row(0).column('title'));
    var eggs = element(by.repeater('todo in todos').row(1).column('title'));
    var cheese = element(by.repeater('todo in todos').row(2).column('title'));

    var todos = element(by.model('todos')).getTagName();

    console.info(todos);

    expect(bread.getText()).toContain('get bread.');  //c;
    expect(eggs.getText()).toContain('get eggs.');  //c;
    expect(cheese.getText()).toContain('get cheese.');  //c;

  });


});
