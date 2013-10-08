Crafty.scene('MainMenu', function () {
	Crafty.background('white');

	//Campaign button
	Crafty.e('2D,Canvas,Button,Tween')
		.Button('Campaign')
		.attr({
			x: -250,
			y: 50
		})
		.bind('startMenuAnimation', function () {
			this.tween({
				x: 50
			}, 10).bind('TweenEnd', function () {
				this.unbind('TweenEnd');
				Crafty.trigger('menuanimation1');
			})
		});


	//Play Map button
	Crafty.e('2D,Canvas,Button,Tween')
		.Button('Play map')
		.attr({
			x: -250,
			y: 130
		})
		.bind('menuanimation1', function () {
			this.tween({
				x: 50
			}, 10).bind('TweenEnd', function () {
				this.unbind('TweenEnd');
				Crafty.trigger('menuanimation2');
			})
		});


	//Editor button
	Crafty.e('2D,Canvas,Button,Tween')
		.Button('Editor')
		.attr({
			x: -250,
			y: 210
		})
		.bind('menuanimation2', function () {
			this.tween({
				x: 50
			}, 10).bind('TweenEnd', function () {
				this.unbind('TweenEnd');
				Crafty.trigger('menuanimation3');
			})
		});


	//Settings button
	Crafty.e('2D,Canvas,Button,Tween')
		.Button('Settings')
		.attr({
			x: -250,
			y: 290
		})
		.bind('menuanimation3', function () {
			this.tween({
				x: 50
			}, 10).bind('TweenEnd', function () {
				this.unbind('TweenEnd');
				Crafty.trigger('menuanimation4');
			})
		});


	//Credits button
	Crafty.e('2D,Canvas,Button,Tween')
		.Button('Credits')
		.attr({
			x: -250,
			y: 370
		})
		.bind('menuanimation4', function () {
			this.tween({
				x: 50
			}, 10)
		});

	Crafty.trigger('startMenuAnimation');
});