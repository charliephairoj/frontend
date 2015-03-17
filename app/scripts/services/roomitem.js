'use strict';

/**
 * @ngdoc service
 * @name frontendApp.RoomItem
 * @description
 * # RoomItem
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('RoomItem', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
