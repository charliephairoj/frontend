
angular.module('employeeApp')
.directive('imageUploader', ['$mdToast', 'FileUploader', 
function ($mdToast, FileUploader) {
	return {
		templateUrl: 'views/templates/image-uploader.html',
		restrict: 'EA',
		replace: true,
		scope: {
			url: '@url',
			onUpload: '&',
			square: '=',
		},
		link: function postLink(scope, element, attrs) {
			scope.selection = "addImage";
			scope.showUploadButton = false;

			scope.buttonOn = function () {
				scope.showUploadButton = true;
			};
			scope.buttonOff = function () {
				scope.showUploadButton = false;
			};

			/*
			* Upload Image
			* 
			* Uploads image to the designated url. It then calls
			* the on-upload function that is 
			*/
			scope.upload = function ($image, callback) {
				var promise = FileUploader.upload($image, scope.url);
				promise.then(function (dataObj) {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(3000)
						.content('File was uploaded.'));

					scope.onUpload({data: dataObj.data, $image: dataObj.data});
					(callback || angular.noop)(dataObj.data);
				}, function () {
					$mdToast.show($mdToast.simple()
						.position('top right')
						.hideDelay(0)
						.content('There was an error uploading the file'));
				});
			};
		}
	};
}]);
