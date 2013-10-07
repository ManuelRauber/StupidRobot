/// <reference path="/libs/crafty.js"/>

Crafty.c('Button', {
	Button: function(text) {
		this.text = text;
		
		return this;
	},
	
	draw: function() {
		var ctx = Crafty.canvas.context;
		ctx.save();

		var gradient = ctx.createLinearGradient(0, 0, 0, 70);
		gradient.addColorStop(0, '#b0b43b');
		gradient.addColorStop(1, '#D6DB48');
		ctx.fillStyle = gradient;
		ctx.fillRect(this.x, this.y, 250, 70);

		ctx.lineWidth = 1;
		ctx.strokeRect(this.x, this.y, 250, 70);

		ctx.fillStyle = 'white';
		ctx.font = "35px Arial";
		ctx.textAlign = 'center';

		var measure = ctx.measureText(this.text);

		ctx.fillText(this.text, this.x + (250 / 2), this.y + 70 / 2 + 13);

		ctx.restore();
	}
});