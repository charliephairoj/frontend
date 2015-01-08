
angular.module('employeeApp')
.factory('ImageCropper', [function Imagecropper() {
    function Scene(canvas, ctx, image) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.img = image;
        this._scale = 1;
        this.bX = 0;
        this.bY = 0;
        this.bH = this.img.height;
        this.bW = this.img.width;
        this.cropX = null;
        this.cropY = null;
        this.cropW = null;
        this.cropH = null;
        this.mouseX = null;
        this.mouseY = null;
        this.corners = [];
        this.xProportion = this.canvas.width / this.img.width;
        this.yProportion = this.canvas.height / this.img.height; 
    }
    
	Object.defineProperties(Scene.prototype, {
		scale: {
            get: function () {
                return this._scale;
            },
            set: function (scale) {
                this._scale = scale <= 1 ? scale : scale / 100;
            }
        },
		x: {
			get: function () {
				return this.bX;
			},
			set: function (x) {
				this.bX = x;
			}
		},
		y: {
			get: function () {
				return this.bY;
			},
			set: function (y) {
				this.bY = y;
			}
		}, 
		w: {
			get: function () {
				return this.bW;
			},
			set: function (w) {
				this.bW = w;
			}
		}, 
		h: {
			get: function () {
				return this.bH;
			},
			set: function (h) {
				this.bH = h;
			}
		} 
	});

    Scene.prototype.repositionCorners = function () {
        this.corners.topLeft = {x: this.bX * this.xProportion, y: this.bY * this.yProportion};
        this.corners.topRight = {x: (this.bX + this.bW) * this.xProportion, y: this.bY * this.yProportion};
        this.corners.bottomRight = {x: (this.bX + this.bW) * this.xProportion, y: (this.bY + this.bH) * this.yProportion};
        this.corners.bottomLeft = {x: this.bX * this.xProportion, y: (this.bY + this.bH) * this.yProportion};
    };
    
    Scene.prototype.inCorner = function (x, y) {
        for (var key in this.corners) {
            if (Math.sqrt(Math.pow(x - this.corners[key].x, 2) + Math.pow(y - this.corners[key].y, 2)) <= 10) {
                return key;
            }
        }
    };
    
    Scene.prototype.drawCube = function (x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 5, 0, Math.PI * 2, true);
        this.ctx.fill();
    };
    
    Scene.prototype.drawCubes = function () {
        this.ctx.fillStyle = 'rgb(255, 255, 255)';
        this.drawCube(this.bX * this.xProportion, this.bY * this.yProportion);
        this.drawCube((this.bX + this.bW) * this.xProportion, (this.bY + this.bH) * this.yProportion);
        this.drawCube((this.bX + this.bW) * this.xProportion, this.bY * this.yProportion);
        this.drawCube(this.bX * this.xProportion, (this.bY + this.bH) * this.yProportion);
    };
    
    Scene.prototype.drawBackground = function () {
        this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    
    Scene.prototype.draw = function () {
        //Calculations
        this.repositionCorners();
        
        //Rendering
        this.drawBackground();
        this.ctx.drawImage(this.img, this.bX, this.bY, this.bW, this.bH, this.bX * this.xProportion, this.bY * this.yProportion, this.bW * this.xProportion, this.bH * this.yProportion);
        this.drawCubes();
    };
    
    Scene.prototype.drawImage = function () {
        this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.canvas.width, this.canvas.height);
    };
    
    Scene.prototype.crop = function (boundingWidth, boundingHeight) {
        if (boundingHeight && boundingWidth) {
            var ratio1 = boundingHeight / boundingWidth;
            var ratio2 = this.bH / this.bW;
            if (ratio1 > ratio2) {
                this.canvas.width = boundingWidth;
                this.canvas.height = (this.bH * boundingWidth) / this.bW;
                angular.element(this.canvas).css('top', (boundingHeight - this.canvas.height) / 2);
                angular.element(this.canvas).css('left', (boundingWidth - this.canvas.width) / 2);
            } else { 
                this.canvas.height = boundingHeight;
                this.canvas.width = (this.bW * boundingHeight) / this.bH;
                angular.element(this.canvas).css('left', (boundingWidth - this.canvas.width) / 2);
                angular.element(this.canvas).css('top', (boundingHeight - this.canvas.height) / 2);
            }
        } else {
            this.canvas.width = this.bW;
            this.canvas.height = this.bH;
        }
        
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h, 0, 0, this.canvas.width, this.canvas.height);
       // this.canvas.width = this.bW/this.xProportion
       // this.canvas.height = this.bH/this.xProportion
        //this.ctx.putImageData(imageData, 0, 0, this.canvas.width, this.canvas.height);
    };
    
    Scene.prototype.getImageAsURL = function () {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext('2d');
        canvas.width = this.w * this._scale;
        canvas.height = this.h * this._scale;
        context.drawImage(this.img, this.x, this.y, this.w, this.h, 0, 0, this.w * this._scale, this.h * this._scale);
        return canvas.toDataURL("image/jpeg");
        
    };
    
    Scene.prototype.getImageAsBlob = function () {
        var url = this.getImageAsURL();
        var bytes = atob(url.split(',')[1]);
        var stream = new Uint8Array(bytes.length);
        for (var key in bytes) {
            stream[key] = bytes.charCodeAt(key);
        }
        return new Blob([stream], {type: 'image/jpeg'});
    };
	
	return Scene;
	
}]);
