Crafty.c('ProgressBar', {
	ProgressBar: function() {
		return this;
	},

	init: function() {
		this.w = 500;
		this.h = 50;
		this.x = (Game.width() / 2) - (this.w / 2);
		this.y = (Game.height() / 2) - (this.h / 2);
		this.progress = 0;

		this.bind('update', function(progress) {
			this.progress = progress;
			this.draw();
		});
	},

	draw: function() {
		var ctx = Crafty.canvas.context;
		ctx.save();

		ctx.fillStyle = 'white';
		ctx.fillRect(this.x, this.y, this.w, this.h);

		ctx.lineWidth = 2;
		ctx.fillStyle = 'green';
		ctx.strokeRect(this.x, this.y, this.w, this.h);

		ctx.fillStyle = 'yellow';
		ctx.fillRect(this.x, this.y, this.progress * (this.w / 100), this.h);

		ctx.restore();
	}
});