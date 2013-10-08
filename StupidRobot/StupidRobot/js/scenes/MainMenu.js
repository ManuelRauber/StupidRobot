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