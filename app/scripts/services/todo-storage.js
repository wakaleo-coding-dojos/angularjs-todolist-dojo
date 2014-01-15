/**
 * Services that persists and retrieves TODOs from localStorage
 */
angular.module('todoApp')
.factory('todoStorage', function () {
  var STORAGE_ID = 'todos';

  return {
    get: function () {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },

    put: function (todos) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
    },

    clear: function() {
      localStorage.removeItem(STORAGE_ID);
    },

    storeIn: function(storageId) {
      STORAGE_ID = storageId;
    }
  };
});