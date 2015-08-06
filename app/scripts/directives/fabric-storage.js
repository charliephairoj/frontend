

angular.module('employeeApp')
.directive('fabricStorage', ['$rootScope', function ($rootScope) {
	
	function Shelf () {
		this.hMargin = 10;
	}
	
	Shelf.prototype.draw = function (ctx, tower) {
		ctx.beginPath();
		ctx.fillStyle = "#CCCCCC";
		ctx.fillRect(10 + this.hMargin, 10 + 10, 200 - (this.hMargin * 2), 100 - (this.hMargin * 2));
	};
	
	Shelf.prototype.isPointInElement = function (x, y) {
		return ((x >= this.x && x <= (this.x + this.w)) && (y >= this.y && y <= (this.y + this.h))) ? true : false;
	};
	
	function Tower () {
		this.x = 10;
		this.y = 10;
		this.h = 50;
		this.w = 50;
		this.color = "#AAAAAA";
		this.textColor = "#000000";
		this.active = false;
		
		for (var i = 0; i < 4; i++) {
			this.shelves = [];
		}
	}
	
	Tower.prototype.draw = function (ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.h, this.w);
		ctx.fillStyle = this.textColor;
		ctx.fillText(this.id, this.x + 20, this.y + 25);
		
		if (this.active) {
			ctx.fillStyle = "#CCCCCC";
			ctx.strokeRect(10, 10, 200, 300);
			
			for (var i = 0; i < this.shelves.length; i++) {
				this.shelves[i].draw(ctx, this);
			}
		}
	};
	
	Tower.prototype.isPointInElement = function (x, y) {
		return ((x >= this.x && x <= (this.x + this.w)) && (y >= this.y && y <= (this.y + this.h))) ? true : false;
	};
	
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
				{id: 11, x: 410, y: 10},
				{id: 12, x: 465, y: 10},
				{id: 13, x: 410, y: 85},
				{id: 14, x: 465, y: 85},
				{id: 15, x: 410, y: 140},
				{id: 16, x: 465, y: 140},
				{id: 17, x: 410, y: 215},
				{id: 18, x: 465, y: 215}
			],
			towers = [];
				
			
			//Add towers on the left of the room
			for (var i = 0; i < 5; i++) {
				positions.push({id: 10 - (i * 2), x: 540, y: (i * 50) + (i * 5) + 10});
				positions.push({id: 10 - (i * 2) - 1, x: 595, y: (i * 50) + (i * 5) + 10});
			} 
			
        	var context = element[0].getContext('2d');
			context.canvas.height = 400;
			context.canvas.width =  800;
			
			for (i = 0; i < positions.length; i++) {
				var tower = new Tower();
				towers.push(tower);
				tower.id = positions[i].id;
				tower.x = positions[i].x;
				tower.y = positions[i].y;
				tower.draw(context);
			}
			
			element[0].addEventListener('mousemove', function (evt) {
				var pos = getMousePos(element[0], evt);
				var active = false;
				for (var i = 0; i < towers.length; i++) {
					if (towers[i].isPointInElement(pos.x, pos.y)) {
						active = true;
					} 
					
					document.body.style.cursor = active ? "pointer" : "default";
					
				}
			});
			
			element[0].addEventListener('click', function (evt) {
				var pos = getMousePos(element[0], evt);
				
				for (var i = 0; i < towers.length; i++) {
					towers[i].active = false;
					towers[i].color = '#AAAAAA';
					towers[i].textColor = "#000000";
					if (towers[i].isPointInElement(pos.x, pos.y)) {
						towers[i].active = true;
						towers[i].color = '#313131';
						towers[i].textColor = "#FFFFFF";
					}
					towers[i].draw(context);
					
				}
			});
      	}
    };
}]);
