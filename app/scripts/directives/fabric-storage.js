'use strict';


angular.module('employeeApp')
.directive('fabricStorage', function () {
	
	function Shelf () {
		
	}
	
	function Tower () {
		this.x = 10,
		this.y = 10,
		this.h = 50,
		this.w = 50;
		this.color = "#AAAAAA";
	}
	
	Tower.prototype.draw = function (ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.h, this.w);
	}
	
	Tower.prototype.clicked = function (x, y) {
		return ((x >= this.x && x <= (this.x + this.w)) && (y >= this.y && y <= (this.y + this.h))) ? true : false;
	}
	
	function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
	}
	
    return {
      	template: '<canvas></canvas>',
		replace: true,
      	restrict: 'EA',
      	link: function postLink(scope, element, attrs) {
			var positions = [
				[10, 10],
				[65, 10],
				[10, 85],
				[65, 85],
				[10, 140],
				[65, 140],
				[10, 215],
				[65, 215]
			]
				
			
			//Add towers on the left of the room
			for (var i = 0; i <= 5; i++) {
				positions.push([140, (i * 50) + (i * 5) + 10]);
				positions.push([195, (i * 50) + (i * 5) + 10]);
			} 
			
			var towers = [];
        	var context = element[0].getContext('2d');
			context.canvas.height = 400;
			context.canvas.width =  400;
			
			for (var i = 0; i < positions.length; i++) {
				var tower = new Tower();
				towers.push(tower);
				tower.x = positions[i][0];
				tower.y = positions[i][1];
				tower.draw(context);
			}
			
			element[0].addEventListener('click', function (evt) {
				var pos = getMousePos(element[0], evt);
				
				for (var i = 0; i < towers.length; i++) {
					if (towers[i].clicked(pos.x, pos.y)) {
						towers[i].color = '#313131';
						towers[i].draw(context);
					}
					
				}
			});
      	}
    };
});
