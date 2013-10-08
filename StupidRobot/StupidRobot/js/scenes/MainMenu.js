Crafty.scene('MainMenu', function () {
    Crafty.background('white');

    Crafty.e('2D,Canvas,Button')
		.Button('Campaign')
		.attr({
		    x: 50,
		    y: 50
		});

    Crafty.e('2D,Canvas,Button')
		.Button('Play map')
		.attr({
		    x: 50,
		    y: 130
		});

    Crafty.e('2D,Canvas,Button')
		.Button('Editor')
		.attr({
		    x: 50,
		    y: 210
		});

    Crafty.e('2D,Canvas,Button')
    .Button('Settings')
    .attr({
        x: 50,
        y: 290
    });

    Crafty.e('2D,Canvas,Button')
    .Button('Credits')
    .attr({
        x: 50,
        y: 370
    });
});