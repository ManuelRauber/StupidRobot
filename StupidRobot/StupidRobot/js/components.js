/// <reference path="/libs/crafty.js"/>

Crafty.c('ProgressBar', {
    ProgressBar: function() {
        return this;
    },

    update: function (progress) {
        this.progress = progress;
    },

    init: function () {
        this.w = 500;
        this.h = 50;
        this.x = (Game.width() / 2) - (this.w / 2);
        this.y = (Game.height() / 2) - (this.h / 2);
        this.progress = 0;
    },

    draw: function () {
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


Crafty.c('Button', {
	Button: function (text) {
		this.text = text;

		return this;
	},

	init: function () {
		this.requires('Mouse');

		this.w = 250;
		this.h = 70;

		var ctx = Crafty.canvas.context;

		var gradient = ctx.createLinearGradient(0, 0, 0, this.h);
		gradient.addColorStop(0, '#b0b43b');
		gradient.addColorStop(1, '#D6DB48');
		this.normalGradient = gradient;

		gradient = ctx.createLinearGradient(0, 0, 0, this.h);
		gradient.addColorStop(0, '#656722');
		gradient.addColorStop(1, '#939633');
		this.hoverGradient = gradient;
		
		this.isHovering = false;

		this.bind('MouseOver', function () {
			this.isHovering = true;
			this.trigger('Change');
		});

		this.bind('MouseOut', function() {
			this.isHovering = false;
			this.trigger('Change');
		});
	},

	draw: function () {
		var ctx = Crafty.canvas.context;
		ctx.save();

		ctx.fillStyle = this.isHovering ? this.hoverGradient : this.normalGradient;
		ctx.fillRect(this.x, this.y, this.w, this.h);

		ctx.lineWidth = 1;
		ctx.strokeRect(this.x, this.y, this.w, this.h);

		ctx.fillStyle = 'white';
		ctx.font = "35px Arial";
		ctx.textAlign = 'center';
		ctx.fillText(this.text, this.x + (this.w / 2), this.y + this.h / 2 + 13);

		ctx.restore();
	}
});