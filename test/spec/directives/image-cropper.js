'use strict';

describe('Directive: fileCropper', function () {
    beforeEach(module('employeeApp'));
    beforeEach(module('employeeApp.directives'));

    var directive,
        cropper,
        message,
        element;
    
    beforeEach(function(){
        inject(function($rootScope, $compile){
            element = angular.element('<div image-cropper></div>');
            directive = $compile(element)($rootScope);
            message = directive.find('.cropper-message');
            
        });
    });
    
    it('should create a file cropper', function ($rootScope, $compile) {
        expect(element.hasClass('cropper')).toBeTruthy();
        expect(message.html()).toEqual('<h3>Drop Image Here</h3>')
    });
});
