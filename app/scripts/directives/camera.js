
angular.module('employeeApp.directives')
.directive('camera', ['CameraService', function (CameraService) {
	return {
		template: '<div class="camera">' +
					'<canvas></canvas>' +
					'<video class="camera-video"></video>' +
					'<div class="snapshot-btn" ng-click="takeSnapshot()"></div>' +
					'<div class="btn-menu">' +
						'<div  class="save-btn" ng-click="save()">Save</div>' +
						'<div class="retake-btn" ng-click="retake()">Retake</div>' +
					'</div>' +
				'</div>',
		restrict: 'EA',
		replace: true,
		scope: {
			onSnapshot: '&'
		},
		link: function postLink(scope, element, attrs) {
			//console.log('test');
			//console.log(CameraService.hasUserMedia());
			if (!CameraService.hasUserMedia()) {return; }
			
			var userMedia = CameraService.getUserMedia,
				canvas = element.find('canvas')[0],
				ctx = canvas.getContext('2d'),
				video = element.find('video')[0],
				width = attrs.width || 1280,
				height = attrs.height || 720;
				
								
			var onSuccess = function (stream) {
				video.src = window.URL.createObjectURL(stream);
				
				video.play();
			};
			
			navigator.getUserMedia({
				video: {
					mandatory: {
						minWidth: width,
						minHeight: height
					}
				},
				audio: false
			}, onSuccess, function (e) {
				console.log(e);
			});
			
			function getImageAsBlob(url) {
				var bytes = atob(url.split(',')[1]);
				var stream = new Uint8Array(bytes.length);
				for (var key in bytes) {
					stream[key] = bytes.charCodeAt(key);
				}
				return new Blob([stream], {type: 'image/jpeg'});
			}
			
			scope.retake = function () {
				$(canvas).removeClass('active');
			};
			
			scope.save = function () {
				var img = getImageAsBlob(canvas.toDataURL("image/jpeg"));
				scope.onSnapshot({$image: img});
				scope.retake();
			};
			
			scope.takeSnapshot = function () {
				width = video.videoWidth;
				height = video.videoHeight;
				
				canvas.width = width;
				canvas.height = height;
				
				ctx.fillRect(0, 0, width, height);
				ctx.drawImage(video, 0, 0, width, height);
				$(canvas).addClass('active');
			};
		}
	};
}]);
