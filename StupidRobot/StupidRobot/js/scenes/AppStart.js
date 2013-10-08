Crafty.scene('AppStart', function () {
	Crafty.background('black');

	Crafty.e('2D,Canvas,Text')
		.text('Initialize Loading')
		.attr({
			w: Game.width(),
			x: 0,
			y: Game.height() / 2 - 25
		});

	Crafty.e('2D,Canvas,ProgressBar')
        .ProgressBar();

	Crafty.load([
		'/assets/Game/Images/robot-east.scale-100.png',
		'/assets/Game/Images/robot-north.scale-100.png',
		'/assets/Game/Images/robot-south.scale-100.png',
		'/assets/Game/Images/robot-west.scale-100.png',
		'/assets/Game/Images/rocket.scale-100.png',
		'/assets/Game/Images/tree.scale-100.png'
	],

    //on load finish
    function () {
        Crafty.scene('MainMenu');
    },

    //on progress
    function (e) {
        Crafty.trigger('update', e.percent - 100);
    },

    //on error
    function (e) {
        
	});
});