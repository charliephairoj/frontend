'use strict';

describe('Directive: modal', function () {
    
    var directive,
        backdrop,
        element,
        $scope, 
        model,
        $compile,
        $rootScope;
  
    beforeEach(function(){
        module('employeeApp.directives')
        inject(['$compile','$rootScope', function($c, $r) {
            $compile = $c;
            $rootScope = $r;
        }]);
        $scope = $rootScope.$new();
        $scope.tester = false;
        element = angular.element("<div modal ng-model=tester>test</div>");
        directive = $compile(element)($scope);
        
    });
    
    it('should create a modal directive', function(){
        expect(directive.hasClass('modal')).toBeTruthy();
        expect(directive.hasClass('hide')).toBeTruthy();
        expect(angular.element(document.body).children('#backdrop').length).toBeDefined();
    });
    
    it('should change the modal to showing', function(){
        var flag = false;
        $scope.$on('shown', function(){
            flag = true;
        });
        $scope.$apply(function(){
            $scope.tester = true;
        });
        waitsFor(function(){
            return flag;
        }, 1500);
        runs(function(){
            backdrop = angular.element(document.body).find('#backdrop');
            expect(directive.hasClass('hide')).toBeFalsy(); 
            expect(parseInt(directive.css('opacity'))).toEqual(1);
            expect(directive.css('display')).toEqual('block');
            expect(backdrop.css('opacity')).toBeGreaterThan(0.65);
            expect(backdrop.css('display')).toEqual('block');
        });
        
    });
    
    it('should change the modal to hiding', function(){
        expect(directive.hasClass('hide')).toBeTruthy();
        var flag = false;
        $scope.$on('hidden', function(){
            flag = true; 
        });
        $scope.$apply(function(){
            $scope.tester = false; 
        });
        waitsFor(function(){
            return flag; 
        }, 1500);
        runs(function(){
            backdrop = angular.element(document.body).find('#backdrop');
            expect(backdrop).toBeDefined(); 
        });
    });
    
    xit('should change the modal to hiding when the backdrop is clicked', function(){
        var flag = false,
            flag2 = false;
        $scope.$on('shown', function(){
            flag = true; 
        });
        
        $scope.$on('hidden', function(){ 
            flag2 = true;
            
        });
        
        $scope.$apply(function(){
            $scope.tester = true; 
        });
        waitsFor(function(){
            return flag;
        }, 2000);
        
        runs(function(){
            backdrop = angular.element(document.body).find('#backdrop');
            backdrop.one('click', function(){
                console.log('test');
            });
            backdrop.trigger('click');
        });

        waitsFor(function(){
            return flag2;
        }, 1500);
        
        runs(function(){
             expect(parseInt(directive.css('opacity'))).toEqual(0); 
        });
    });
    
    
});
