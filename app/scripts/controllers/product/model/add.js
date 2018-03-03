
angular.module('employeeApp')
.controller('ProductModelAddCtrl', ['$scope', 'Model', 'Notification', '$location', 'FileUploader', '$mdDialog',
function ($scope, Model, Notification, $location, FileUploader, $mdDialog) {
      
    $scope.model = new Model();
    
    //Adds a new models
    $scope.create = function (model) {
        Notification.display('Saving Model...', false);
        $scope.model.$create(function (obj) {
            $location.path('/product/model/'+obj.id+'/');
            Notification.display('Model Saved'); 
            
        });
    };
    
    //Uploads Profie Image
    $scope.addFiles = function (files) {
		
		/**
		 * Upload image
		 * @private
		 * @param {String|Object|Array|Boolean|Number} paramName Describe this parameter
		 * @returns Describe what it returns
		 * @type String|Object|Array|Boolean|Number
		 */
		function uploadImage (image) {
	        //display notification
	        Notification.display('Uploading Model Image...', false);

	        //Notify of uploading image        
			var promise = FileUploader.upload(image, "/api/v1/upholstery/image/");
				promise.then(function (dataObj) {
                    Notification.display('Image uploaded.');
                    $scope.model.images = $scope.model.images || [];
					$scope.model.images.push(dataObj.data);
		
					$scope.update();
		
					$scope.images = null;
		
		
			}, function () {
		        Notification.display('Error uploading image', false);
	
			});
		}
		
		if (files[0].type === 'image/jpeg') {
			$mdDialog.show({
		  		templateUrl: 'views/templates/edit-image.html',
				controller: function ($scope, $mdDialog) {
					var sizeVar;
					var placeholder = {size: 'Calculating size'};
					
					$scope.imageToEdit = files[0]
					$scope.fileSize = 0;
					
					$scope.$watch('cropper.scale', function () {
						clearTimeout(sizeVar);
						sizeVar = setTimeout(function () {
							$scope.fileSize = $scope.cropper.image.size;
							$scope.$apply();
						}, 500);
					});
				
		            $scope.preview = function (url) {
		                if (url) {
		                    window.open(url);
		                }
		            };
				
					$scope.cancel = function () {
						$mdDialog.hide();
					}
				
					$scope.save = function (image) {
						$mdDialog.hide();
				        uploadImage(image);
					}
				}
		   	});
			
		} else {
			uploadImage(files[0]);
		}
       
		
    };
}]);
