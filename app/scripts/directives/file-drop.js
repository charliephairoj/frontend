
/**
 * @ngdoc directive
 * @name frontendApp.directive:fileDrop
 * @description
 * # fileDrop
 */
angular.module('employeeApp')
.directive('fileDrop', function () {
    return {
      	restrict: 'EA',
		scope: {
			onDrop: '&fileDrop'
		},
      	link: function postLink(scope, element, attrs) {
        	/*
             * Create Objects and Functions to be used
             */
            
            //File Reader
            var fileReader = new FileReader();
            
            fileReader.onload = function (evt) {
				scope.onDrop({$file: evt.target.result});
            };
       
            /*
             * Add functions to deal with the drag enter,leave and
             * over actions of the user
             */
			
            //Drag Enter
            element.bind('drag', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
				
                element.addClass('drag-active');
            });
            
            //Drag Enter
            element.bind('dragenter', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
				
                element.addClass('drag-activeactive');
            });
            
            //Drag Leave
            element.bind('dragleave', function (evt) {
				evt.preventDefault(); 
                evt.stopPropagation();
				
				element.removeClass('drag-activeactive');
            });
            
            //Drag over
            element.bind('dragover', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
				
                element.addClass('drag-activeactive');
            });
            
            /*
             * This Section deals with the Dropping of the file, 
             * checking if it is an image, and adding it to the array
             * "scope.images"
             */
            
            element.bind('drop', function (evt) {
                
                //prevent default
                evt.preventDefault();
                evt.stopPropagation();
                element.removeClass('drag-activeactive');
                
                //Get original evt within jquery evt
                var e = evt.originalEvent;
                //Get the files
                var files = e.dataTransfer.files;

				scope.onDrop({$files: files});
               
            });
      	}
    };
});
