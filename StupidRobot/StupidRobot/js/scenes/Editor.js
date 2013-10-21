(function () {
	"use strict";

	var page = WinJS.UI.Pages.define("/pages/game/game.html", {
		ready: function (element, options) {

			var basicFragmentLoadDiv = element.querySelector("#pageBody");
			// Read fragment from the HTML file and load it into the div.  Note 
			// Fragments.renderCopy() returns a promise which a done() statement 
			// is attached to in order to perform additional processing or handle errors 
			// that may have occurred during the cloneTo() action. 
			WinJS.UI.Fragments.renderCopy("/pages/editor/appbar.html",
				basicFragmentLoadDiv)
				.done(
					function () {
						WinJS.log && WinJS.log("successfully loaded fragment", "sample", "status");
						manageBar = document.getElementById('editor_manageBar').winControl;
						manageBar.show();
					},
					function (error) {
						WinJS.log && WinJS.log("error loading fragment: " + error, "sample", "error");
					}
			);
		},
		unload: function () {
			
		}
	});

	Crafty.scene(StupidRobot.Scenes.Editor, function() {
		Crafty.background('green');

		var windowWidth = StupidRobot.Game.width;
		var windowHeight = StupidRobot.Game.height;

		//var manageBar;
		//var editBar;

		Crafty.e('2D, Canvas, Grid')
			.Grid(0, 0, windowWidth - 200, windowHeight, 20);
		
		Crafty.e('2D, Canvas, EditorTaskbar')
			.EditorTaskbar(windowWidth - 200, 0, 200, windowHeight);

		/*
		manageBar = document.getElementById('editor_manageBar').winControl;
		editBar = document.getElementById('editor_editBar').winControl;
		manageBar.show();
		editBar.show();
	*/
	});
})();