'use strict';

describe('Directive: imageDropTarget', function () {
  beforeEach(module('employeeApp.directives'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<image-drop-target></image-drop-target>');
    element = $compile(element)($rootScope);
    //expect(element.text()).toBe('this is the imageDropTarget directive');
  }));
});
