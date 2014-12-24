
angular.module('employeeApp')
.factory('FileUploader', ['$q', '$http', 'Notification', function($q, $http, Notification) {
	var uploader = {},
		type,
		fd;

	uploader.upload = function (file, url, data) {
        
        //if(!file.isPrototypeOf){
            //throw new TypeError("Expectina a file");
        //}
        //Determine file type and data
		try {
			type = file.type.split('/')[0];
		} catch (e) {

		}
        
		type = file.isPrototypeOf(Image) || type === 'image' ? 'Image' : 'File';
				
		var fd = new FormData();
		//fd = data.isPrototypeOf(FormData) ? data : new FormData();
	
		Notification.display('Uploading '+type+'...', false);
        
        //Attch the file to be sent
		fd.append(type.toLowerCase(), file);
        
        //Add additional data to the form data
		try {
			for(var i in data){
				fd.append(i, data[i]);
			}
		} catch (e) {

		}
        
        /*
         * We use the angular $http module to send the image
         * 
         * We have to set the content type to undefined so that 
         * it is not automatically 'application/json'
         * 
         * We set the transformRequest to angular.identity so that
         * the data is not serialized
         */
        var promise = $http({
			method: 'POST', 
			url: url || "upload/images", 
			data: fd, 
			headers: {'Content-Type': undefined}, 
			transformRequest: angular.identity
		});
        
        /*
		promise.success(function(data, status, headers, config) {

		}).error(function (response) {
			Notification.display("There was an error in uploading the "+type.toLowerCase(), false);
		});
		*/
		return promise;
    };
    
    return uploader;
}]);
