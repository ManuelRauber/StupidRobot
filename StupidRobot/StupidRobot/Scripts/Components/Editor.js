/// <reference path="/Scripts/Reference.js"/>

(function() {
	"use strict";

	var editorMode = WinJS.Class.define(
		null,
		null,
		{			
			Edit: function() {
				return 0;
			},
			View: function() {
				return 1;
			}
		});

	Crafty.c('Editor', {
		init: function() {
			var windowWidth = StupidRobot.Game.width;
			var windowHeight = StupidRobot.Game.height;

			this._grid = Crafty.e('2D, Canvas, Grid')
				.Grid((windowWidth / 2), (windowHeight / 2), null, null, 20);

			this.bind('EntitySelected', this._entitySelected);
		},

		_entitySelected: function(data) {
			this._grid.isVisible = false;

			this.trigger('Change');
		}
	});

	WinJS.Namespace.define('StupidRobot.Editor', {
		EditorMode: editorMode
	});
})();