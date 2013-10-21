(function () {
	"use strict";
	
	/**
	* Grid
	* - this component has two behaviours:
	*  1: if x2 and y2 params are given, it will create a rectangle grid from
	*     (x1,y1)-(x2,y2) with the amount of blocks (it will scale if necessary.
	*			The cube shapes of the blocks can become rectangles because of this).
	*  2: if x2 and y2 params are not given, x1 and y1 params are seen as the middle point
	*     of the wanted grid. Therefore it will place the amount of blocks around it,
	*     so the grid is centralised. It will automatically scale the blocks on low-res screens
	*/
	Crafty.c('Grid', {
		Grid: function (x1, y1, x2, y2, blocks) {
			this.x1 = x1;
			this.y1 = y1;
			this.x2 = x2;
			this.y2 = y2;
			this.blocks = blocks;
			this.init();
			return this;
		},

		init: function () {
			//mode 1 was chosen
			if (this.x2 != null || this.y2 != null)
			{
				var gridWidth = this.x2 - this.x1;
				var gridHeight = this.y2 - this.y1;
				this.w = gridWidth / this.blocks;
				this.h = gridHeight / this.blocks;
			}
			//mode 2 was chosen
			else
			{
				var windowWidth = StupidRobot.Game.width;
				var windowHeight = StupidRobot.Game.height;

				//calculate size of blocks depending on screen resolution (minus appbars)
				this.w = Math.floor((windowHeight - (200)) / this.blocks);
				this.h = this.w;

				//centralise
				this.x1 = this.x1 - (this.w * (this.blocks / 2));
				this.y1 = this.y1 - (this.h * (this.blocks / 2));
			}
		},

		draw: function () {
			var ctx = Crafty.canvas.context;
			ctx.save();

			for (var j = 0; j < this.blocks; j++) {
				for (var i = 0; i < this.blocks; i++) {
					ctx.strokeRect(this.x1 + (this.w * i), this.y1 + (this.h * j), this.w, this.h);
				}
			}

			ctx.restore();
		}
	});
})();