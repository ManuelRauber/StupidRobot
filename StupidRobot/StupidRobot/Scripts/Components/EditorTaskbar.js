(function () {
	"use strict";
	
	Crafty.c('EditorTaskbar', {
		EditorTaskbar: function (x, y, w, h) {
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			return this;
		},

		draw: function () {
			var ctx = Crafty.canvas.context;
			ctx.save();
			
			ctx.fillStyle = '#FFFF00';
			ctx.fillRect(this.x, this.y, this.w, this.h);

			ctx.restore();
		}
	});
})();