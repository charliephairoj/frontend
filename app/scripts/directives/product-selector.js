
angular.module('employeeApp')
.directive('productSelector', ['Upholstery', 'Fabric', 'Table', '$rootScope', 'Notification', 'FileUploader',
    function (Upholstery, Fabric, Table, $rootScope, Notification, FileUploader) {
        return {
            templateUrl: 'views/templates/product-selector.html',
            replace: true,
            restrict: 'A',
            scope: {
                visible: '=productSelector',
                url: '@productSelectorUploadUrl',
                add: '&productSelectorAdd'
            },
            link: function postLink(scope, element, attrs) {
				
                
                
                scope.fabricList = Fabric.query();
                scope.tableList = Table.query();
				scope.product = {};
                
				function uploadImage(image, callback) {
                    //Display Notification
                    Notification.display('Uploading image...', false);
                    //Set the upload Target
                    
                    //Get new image and add to form data
                    //var fd = new FormData();
                    //fd.append('image', image);
                   
					var promise = FileUploader.upload(image, scope.url || 'upload/images');

					promise.then(function (response) {
						Notification.display('Image Uploaded');
						(callback || angular.noop)(response.data);
					}, function () {
						Notification.display('Failed to upload image.');
					});
                    
                    /*//Upload the image
                    jQuery.ajax(scope.url || "upload/images", {
						type:'POST',
						data:fd,
						processData:false,
						contentType:false,
						success: function(response){
							Notification.display('Image Uploaded');
							(callback || angular.noop)(response);
						}
					});
					*/
                }
                
                function add() {
                    var newProduct = angular.copy(scope.product);
                    scope.add({product: newProduct});
                }
                
                scope.addImage = function (data) {
					var image = data.hasOwnProperty('data') ? data.data : data;
					scope.product.image = image;
                };
                
                scope.addUpholstery = function (upholstery) {
                    if (upholstery) {
                        scope.product = upholstery;
                        scope.selection = 'quantity';  
                    } else {
                        throw new TypeError("Expecting an Upholstery.");
                    }
                    
                };
                
                scope.addTable = function (table) {
                    if (table) {
                        scope.product = table;
                        scope.selection = 'quantity';
                    } else {
                        throw new TypeError("Expecting a Table.");
                    }
                    
                };

                scope.addCustomItem = function (item, image) {
                    
                    if (item) { 
						/*
                        var promise = FileUploader.upload(image, scope.url);
                        promise.then(function(response){
                            
                            angular.copy(response, scope.product.image);
                                            
                            
                        });*/
						angular.extend(scope.product, item);
						scope.product.is_custom = true;
						scope.product.type = 'custom';
						scope.selection = 'quantity';
					} else {
                        throw new TypeError("Expecting a Custom Item and Image.");
                    }
                };
                
                scope.setQuantity = function (quantity) {
                    scope.product.quantity = quantity;
                    if (scope.product.type.toLowerCase() == 'upholstery') {
                        scope.selection = 'fabric';
                    } else {
                        scope.visible = false;
                        var newProduct = angular.copy(scope.product); 
                        scope.reset();
                        scope.add({product: newProduct});
                    }
                };
                
                scope.setFabric = function () {
                    scope.visible = false;
                    var newProduct = angular.copy(scope.product);
                    scope.reset();
                    scope.add({product: newProduct});
                };
                
                scope.reset = function () {
                    scope.product = {};
                    scope.selection = 'upholstery';  
                };
                
               
               
                         
            }
        };
    }]);
