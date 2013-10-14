(function () {
	"use strict";

	Crafty.scene(StupidRobot.Scenes.Editor, function() {
		Crafty.background('green');

		var width = StupidRobot.Game.width;
		var height = StupidRobot.Game.height;

		var htmlString = '<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="1">';
		for (var i=0; i < 30; i++)
		{
			htmlString += '<tr>';
			for (var j = 0; j < 30; j++)
			{
				htmlString += '<td></td>';
			}
			htmlString += '</tr>';
		}
		htmlString += '</table>';


		Crafty.e('HTML')
		.attr({
			x: 0,
			y: 0,
			w: width,
			h: height
		})
		.replace(htmlString);
			

	
	});
})();