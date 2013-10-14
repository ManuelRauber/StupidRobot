(function () {
	Crafty.c('Grid', {
		Grid: function (x, y, w, h, blocks) {
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			this.blocks = blocks;

			return this;
		},

		init: function () {
			this.windowWidth = StupidRobot.Game.width;
			this.windowHeight = StupidRobot.Game.height;
		},

		draw: function () {
			var ctx = Crafty.canvas.context;
			ctx.save();
			
			for (var j = 0; j < this.blocks; j++) {
				for (var i = 0; i < this.blocks; i++) {
					ctx.strokeRect(this.x + (this.w * i), this.y + (this.h * j), this.w, this.h);
				}
			}

			ctx.restore();
		}
	});
})();