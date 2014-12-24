
angular.module('employeeApp.directives')
.directive('imageCropper', ['Notification', '$compile', function (Notification, $compile) {
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
    
    
    
    return {
        restrict: 'A',
		/*jshint multistr: true */
        template: '<div class="cropper">\
                        <div class="cropper-message" ng-show="!cropper.image.loaded"><h3>Drop Image Here</h3></div>\
                        <div class="cropper-controller" ng-show="cropper.image.loaded">\
                            <button ng-click="cropper.crop()" ng-show="!cropper.cropping">Crop</button>\
                            <button ng-click="cropper.save()" ng-show="cropper.cropping">Done Cropping</button>\
                            <button ng-click="save()" ng-show="!cropper.cropping">Save</button>\
                            <button data-ng-click="preview(cropper.getImageAsURL())">Preview</button>\
                            <table class="cropper-scale">\
                                <tr>\
                                    <td>Scale:</td>\
                                    <td><input class="scale" type="number" data-ng-model="cropper.scale" min="0" max="100">%</td>\
                                </tr>\
                                <tr>\
                                    <td>Width</td>\
                                    <td>{{cropper.image.scaled_width | number:0}}px</td>\
                                </tr>\
                                <tr>\
                                    <td>Height</td>\
                                    <td>{{cropper.image.scaled_height | number:0}}px</td>\
                                </tr>\
                            </table>\
                        </div>\
                        <div class="canvas-container" ng-class="{show:cropper.image.loaded}">\
                            <canvas class="cropper-canvas"></canvas>\
                        </div>\
                    </div>',
        replace: true,
		scope: {
			onSave: '&',
			onLoad: '&'
		},
        link: function postLink(scope, element, attrs) {
            var cubes = [];
            var canvasContainer = element.find('.canvas-container');
            var canvasElement = canvasContainer.find('canvas');
            var canvas = canvasContainer.find("canvas")[0];
            var parent = element;
            var fileReader = new FileReader();
            var ctx = canvas.getContext('2d');
            var mouseX;
            var mouseY;
            var corner;
            var scene;
            var image;
            var mousedown = false;

            //Set Canvas to parent width and height
            canvas.width = canvasContainer.outerWidth();
            canvas.height = canvasContainer.outerHeight();
            
            fileReader.onload = function (evt) {
                parent.removeClass('drag-drop-active');
                //Create Image
                image = new Image();
                image.onload = function (e) {
                    //Display Notification
                    Notification.display('Image Rendered');
                    //Set canvas dimensions
                    
                   
                    var height = canvasContainer.outerHeight();
                    var width = canvasContainer.outerWidth();
                    var ratio1 = height / width;
                    var ratio2 = image.height / image.width;
                    if (ratio1 > ratio2) {
                        canvas.width = width;
                        canvas.height = (image.height * width) / image.width;
                    } else { 
                        canvas.height = height;
                        canvas.width = (image.width * height) / image.height;
                    }
                    //Position the canvas relative to parent
                    angular.element(canvas).css('top', (height - canvas.height) / 2);
                    angular.element(canvas).css('left', (width - canvas.width) / 2);
                    //Create and Draw new Scene
                    scene = new Scene(canvas, ctx, image);
                    scene.drawImage();
                    
                    /*
                     * Try running the onload function that is 
                     * attached to the scope directive
                     */
                    try {
						scope.onLoad();
                    } catch (evt) {
						console.warn(evt);
                    }
                    
                    scope.$apply();
                };
                image.src = evt.target.result;
                
            };
            
            //Drag Enter
            element.bind('dragenter', function (evt) {
                evt.preventDefault();
                parent.addClass('drag-drop-active');
            });
            
            //Drag Leave
            element.bind('dragleave', function (evt) {
				evt.preventDefault(); 
				parent.removeClass('drag-drop-active');
            });
            
            //Drag over
            element.bind('dragover', function (evt) {
                evt.preventDefault();
                parent.addClass('drag-drop-active');
            });
            
            element.bind('drop', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                Notification.display('Processing Image...', false);
                parent.removeClass('drag-drop-active');
                //Get original evt within jquery evt
                var e = evt.originalEvent;
                //Get the files
                var file = e.dataTransfer.files[0];
                fileReader.readAsDataURL(file);
            });

            function mouseDown(e) {
                e.preventDefault();
                mousedown = true;
                mouseX = e.offsetX;
                mouseY = e.offsetY;
                corner = scene.inCorner(e.offsetX, e.offsetY);
                scene.canvas.style.cursor = 'move';
            }
            
            function mouseMove(e) {
                if (mousedown) {
                    if (corner) {
                        switch (corner) {
						case "topLeft":
                            scene.w = scene.w + ((mouseX - e.offsetX) / scene.xProportion);
                            scene.h = scene.h + ((mouseY - e.offsetY) / scene.yProportion);
                            scene.y = scene.y - ((mouseY - e.offsetY) / scene.yProportion);
                            scene.x = scene.x - ((mouseX - e.offsetX) / scene.xProportion);
                            break;
                        case "topRight":
                            scene.w = scene.w - ((mouseX - e.offsetX) / scene.xProportion);
                            scene.h = scene.h + ((mouseY - e.offsetY) / scene.yProportion);
                            scene.y = scene.y - ((mouseY - e.offsetY) / scene.yProportion);
                            break;
                        case "bottomRight":
                            scene.w = scene.w - ((mouseX - e.offsetX) / scene.xProportion);
                            scene.h = scene.h - ((mouseY - e.offsetY) / scene.yProportion);
                            break;
                        case "bottomLeft":
                            scene.x = scene.x - ((mouseX - e.offsetX) / scene.xProportion);
                            scene.h = scene.h - ((mouseY - e.offsetY) / scene.yProportion);
                            scene.w = scene.w + ((mouseX - e.offsetX) / scene.xProportion);
                            break;
                        }
                    } else {
                        var topLeft = scene.corners.topLeft,
                            bottomRight = scene.corners.bottomRight;
                       
                        if (topLeft.y - (mouseY - e.offsetY) > 0 && bottomRight.y - (mouseY - e.offsetY) < scene.img.height * scene.yProportion) {
                            scene.y = scene.y - ((mouseY - e.offsetY) / scene.yProportion);
                        } else {
                            scene.y = topLeft.y - (mouseY - e.offsetY) <= 0 ? 0 : (scene.canvas.height - (bottomRight.y - topLeft.y)) / scene.yProportion;
                        }
                        if (topLeft.x - (mouseX - e.offsetX) > 0 && bottomRight.x - (mouseX - e.offsetX) < scene.img.width * scene.xProportion) {
                            scene.x = scene.x - ((mouseX - e.offsetX) / scene.xProportion);
                        } else {
                            scene.x = topLeft.x - (mouseX - e.offsetX) <= 0 ? 0 : (scene.canvas.width - (bottomRight.x - topLeft.x)) / scene.xProportion;
                        }                            
                    }
                    
                    mouseX = e.offsetX;
                    mouseY = e.offsetY;
                    scene.draw();
                    scope.$apply();
                    
                }
            }
            
            function mouseUp(e) {
                mousedown = false;
                corner = false;
            }
            
            function mouseLeave(e) {
                mousedown = false;
                corner = false;
            }
            
            /*
             * API Section
             * 
             * Properties:
             * -scale
             * 
             * Methods:
             * -crop
             * -save
             * -getImage
             */
            scope.cropper = {cropping: false, image: {}};
            
            Object.defineProperties(scope.cropper, {
                scale: {
                    get: function () {
                        return scene ? scene.scale * 100 : 100;
                    },
                    set: function (scale) {
                        if (scene) {
                            scene.scale = scale;
                        }
                    }
                } 
            });  
            
            Object.defineProperties(scope.cropper.image, {
                width: {
                    get: function () {
                        return scene ? scene.w ? scene.w : 0 : 0;
                    }
                },
                height: {
                    get: function () {
                        return scene ? scene.h ? scene.h : 0 : 0;
                    }
                },
                scaled_height: {
                    get: function () {
                        return scene ? scene.h ? scene.h * scene.scale : 0 : 0;
                    }
                },
                scaled_width: {
                    get: function () {
                        return scene ? scene.w ? scene.w * scene.scale : 0 : 0;
                    }
                },
                loaded: {
                    get: function () {
                        return scene ? true : false;
                    }
                }
            }); 
            
            scope.cropper.crop = function () {
                scope.cropper.cropping = true;
                scene.x = 10;
                scene.y = 10;
                scene.w = scene.w - 20;
                scene.h = scene.h - 20;
                scene.canvas.style.cursor = 'move';
                scene.draw();
                canvasElement.bind('mousedown', mouseDown);
                canvasElement.bind('mousemove', mouseMove);
                canvasElement.bind('mouseup', mouseUp);
                canvasElement.bind('mouseleave', mouseLeave);
            };
            
            scope.cropper.save = function () {
                scope.cropper.cropping = false;
                scene.canvas.style.cursor = 'move';
                scene.crop(canvasContainer.innerWidth(), canvasContainer.innerHeight());
                canvasElement.unbind('mousedown', mouseDown);
                canvasElement.unbind('mousemove', mouseMove);
                canvasElement.unbind('mouseup', mouseUp);
                canvasElement.unbind('mouseleave', mouseLeave);
            };
            
            scope.cropper.upload = function () {
                
            };
            
            scope.cropper.getImage = function () {
                return scene ? scene.getImageAsBlob() : null;
            };
            
            scope.cropper.getImageAsURL = function () {
                return scope.cropper.getImageURL();
            };
            
            scope.cropper.getImageURL = function () {
                return scene ? scene.getImageAsURL() : null;
            };
            
            scope.preview = function (url) {
                if (url) {
                    window.open(url);
                }
            };
            
            scope.cropper.reset = function () {
                scene = undefined;
            };
            
           
            scope.save = function () {
				scope.onSave({$image: scope.cropper.getImage()});
				scope.cropper.reset();
            };
        }
    };
}]);
