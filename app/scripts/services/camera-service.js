
angular.module('employeeApp.services')
.service('CameraService', function CameraService() {
    
	function getUserMedia() {
		navigator.getUserMedia = (window.navigator.getUserMedia || 
									window.navigator.webkitGetUserMedia ||
									window.navigator.mozGetUserMedia || 
									window.navigator.msGetUserMedia);
		return navigator.getUserMedia;
	}
	
	return {
		hasUserMedia: function () {
			return !!getUserMedia();
		},
		getUserMedia: getUserMedia
	};
});
