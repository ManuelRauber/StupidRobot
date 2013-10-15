(function () {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.MainMenu, function () {
		Crafty.background('white');

		//Campaign button
		Crafty.e('2D,Canvas,Button,Tween')
			.Button('Campaign')
			.attr({
				x: -250,
				y: 50
			})
			.click(function () {
				StupidRobot.Game.switchScene(StupidRobot.Scenes.Campaign);
			})
			.tweenAnimate(50, 50, 20, 'menuanimation1');

		//Play Map button
		Crafty.e('2D,Canvas,Button,Tween')
			.Button('Play map')
			.attr({
				x: -250,
				y: 130
			})
			.bind('menuanimation1', function () {
				this.tweenAnimate(50, 130, 20, 'menuanimation2');
			});

		//Editor button
		Crafty.e('2D,Canvas,Button,Tween')
			.Button('Editor')
			.attr({
				x: -250,
				y: 210
			})
			.click(function () {
				StupidRobot.Game.switchScene(StupidRobot.Scenes.Editor);
			})
			.bind('menuanimation2', function () {
				this.tweenAnimate(50, 210, 20, 'menuanimation3');
			});

		//Settings button
		Crafty.e('2D,Canvas,Button,Tween')
			.Button('Settings')
			.attr({
				x: -250,
				y: 290
			})
  		.click(function () {
  			StupidRobot.Settings.showFlyout();
  		})
			.bind('menuanimation3', function () {
				this.tweenAnimate(50, 290, 20, 'menuanimation4');
			});

		//Credits button
		Crafty.e('2D,Canvas,Button,Tween')
			.Button('Credits')
			.attr({
				x: -250,
				y: 370
			})
			.bind('menuanimation4', function () {
				this.tweenAnimate(50, 370, 20, null);
			});
	});
})();