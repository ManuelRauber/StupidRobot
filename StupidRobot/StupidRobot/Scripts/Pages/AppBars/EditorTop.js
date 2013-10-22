(function () {
	"use strict";

	var EditorTophandlers = WinJS.Class.define(
		null,
		null,
		{
			doSave: function () {
				console.log("save button clicked!");
			}
	});

	WinJS.Namespace.define('StupidRobot', {
		EditorTop: EditorTophandlers
	});

})();