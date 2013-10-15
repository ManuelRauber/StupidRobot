(function () {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.MainMenu, function () {
		Crafty.background('white');

		//Campaign button
		Crafty.e('2D,Canvas,Button,TweenAnimation')
			.Button('Campaign')
			.attr({
				x: 50,
				y: 50
			})
			.click(function() {
				StupidRobot.Game.switchScene(StupidRobot.Scenes.Campaign);
			})
			.animation(StupidRobot.Animations.FlyInFromLeft, null, 'menuanimation1');
			//.flyIn(StupidRobot.Animation.StartDirection.FromLeft, 'menuanimation1');

		//Play Map button
		Crafty.e('2D,Canvas,Button,TweenAnimation')
			.Button('Play map')
			.attr({
				x: 50,
				y: 130
			})
			.animation(StupidRobot.Animations.FlyInFromLeft, 'menuanimation1', 'menuanimation2');

		//Editor button
		Crafty.e('2D,Canvas,Button,TweenAnimation')
			.Button('Editor')
			.attr({
				x: 50,
				y: 210
			})
			.click(function() {
				StupidRobot.Game.switchScene(StupidRobot.Scenes.Editor);
			})
			.animation(StupidRobot.Animations.FlyInFromLeft, 'menuanimation2', 'menuanimation3');

		//Settings button
		Crafty.e('2D,Canvas,Button,TweenAnimation')
			.Button('Settings')
			.attr({
				x: 50,
				y: 290
			})
			.click(function () {
				StupidRobot.Settings.showFlyout();
			})
			.animation(StupidRobot.Animations.FlyInFromLeft, 'menuanimation3', 'menuanimation4');


		//Credits button
		Crafty.e('2D,Canvas,Button,TweenAnimation')
			.Button('Credits')
			.attr({
				x: 50,
				y: 370
			})
			.animation(StupidRobot.Animations.FlyInFromLeft, 'menuanimation4');

	});
})();