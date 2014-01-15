'use strict';

describe('Displaying the main menu bar', function() {

  var todoField = element(by.id("new-todo"));

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

  xit("should be able to add items to the todo list", function() {
    browser.get('/#/home');

    todoField.sendKeys('My task');
    element(by.id('add-task')).click();



  });

});
