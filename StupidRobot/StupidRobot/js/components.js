/// <reference path="/libs/crafty.js"/>

Crafty.c('Button', {
	Button: function(text) {
		this.text = text;

		this.initialize();
		
		return this;
	},
	
	initialize: function() {
		var ctx = Crafty.canvas.context;
		
		var gradient = ctx.createLinearGradient(0, 0, 0, 70);
		gradient.addColorStop(0, '#b0b43b');
		gradient.addColorStop(1, '#D6DB48');

		this.normalGradient = gradient;

		this.buttonWidth = 250;
		this.buttonHeight = 70;
	},
	
	draw: function() {
		var ctx = Crafty.canvas.context;
		ctx.save();

		ctx.fillStyle = this.normalGradient;
		ctx.fillRect(this.x, this.y, this.buttonWidth, this.buttonHeight);

		ctx.lineWidth = 1;
		ctx.strokeRect(this.x, this.y, this.buttonWidth, this.buttonHeight);

		ctx.fillStyle = 'white';
		ctx.font = "35px Arial";
		ctx.textAlign = 'center';

		var measure = ctx.measureText(this.text);

		ctx.fillText(this.text, this.x + (this.buttonWidth / 2), this.y + this.buttonHeight / 2 + 13);

		ctx.restore();
	}
});