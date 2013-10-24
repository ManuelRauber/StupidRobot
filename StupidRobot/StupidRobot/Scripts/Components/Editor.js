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
			this.windowWidth = StupidRobot.Game.width;
			this.windowHeight = StupidRobot.Game.height;

			this.bind('CreateMap', this._createMap);
		},

		_createMap: function (data) {

			/*
							var mapname = name.value;
				var size;
				for (var i = 0 ; i < mapsize.length; i++) {
					if (mapsize[i].checked) {
						size = mapsize[i].value;
					}
				}

				console.log(mapname);
				console.log(size);
			*/

			this._grid = Crafty.e('2D, Canvas, Grid')
				.Grid((this.windowWidth / 2), (this.windowHeight / 2), null, null, 20);
			this.trigger('Change');

		}
	});

	WinJS.Namespace.define('StupidRobot.Editor', {
		EditorMode: editorMode
	});
})();