/// <reference path="/libs/crafty.js"/>
/// <reference path="game.js"/>
/// <reference path="components.js"/>

Crafty.scene('AppStart', function () {
	Crafty.background('black');

	Crafty.e('2D,Canvas,Text')
		.text('Loading. Please be patient!')
		.attr({
			w: Game.width(),
			x: 0,
			y: Game.height() / 2 - 25
		});

	Crafty.load([
		'/assets/Game/Images/robot-east.scale-100.png',
		'/assets/Game/Images/robot-north.scale-100.png',
		'/assets/Game/Images/robot-south.scale-100.png',
		'/assets/Game/Images/robot-west.scale-100.png',
		'/assets/Game/Images/rocket.scale-100.png',
		'/assets/Game/Images/tree.scale-100.png',
		'/assets/Game/Sounds/Music/BrightlyFancy.mp3',
		'/assets/Game/Sounds/Music/DiscoConTutti.mp3',
		'/assets/Game/Sounds/Music/TheComplex.mp3'
	], function() {
		Crafty.scene('MainMenu');
	});
});

Crafty.scene('MainMenu', function () {
	Crafty.background('white');

	Crafty.e('2D,Canvas,Button')
		.Button('Start')
		.attr({
			x: 50,
			y: 500
		});

	Crafty.e('2D,Canvas,Button')
		.Button('Settings')
		.attr({
			x: 50,
			y: 580
		});

	Crafty.e('2D,Canvas,Button')
		.Button('Help')
		.attr({
			x: 50,
			y: 660
		});
});