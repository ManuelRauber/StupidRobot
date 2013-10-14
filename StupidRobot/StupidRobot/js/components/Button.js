(function () {

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

			this.bind('MouseOut', function () {
				this.isHovering = false;
				this.trigger('Change');
			});
		},

		click: function (callback) {
			this.unbind('Click');
			this.bind('Click', callback);

			return this;
		},

		//perform a tweenanimation on the button
		tweenAnimate: function (new_x, new_y, duration, follow_trigger) {
			this.tween({
				x: new_x,
				y: new_y
			}, duration).bind('TweenEnd', function () {
				this.unbind('TweenEnd');
				//if this animation is completed, perfom the follow_trigger (if not null)
				if (follow_trigger != null) Crafty.trigger(follow_trigger);
			})
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
})();