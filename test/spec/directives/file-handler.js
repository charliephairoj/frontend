'use strict';

describe('Directive: fileHandler', function () {
    beforeEach(module('employeeApp'));

    var element;

    it('should make hidden element visible', inject(function ($rootScope, $compile) {
        element = angular.element('<file-handler></file-handler>');
        element = $compile(element)($rootScope);
        expect(element.text()).toBe('');
    }));
});
