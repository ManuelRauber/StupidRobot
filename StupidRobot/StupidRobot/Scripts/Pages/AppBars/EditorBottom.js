(function () {
	"use strict";

	var EditorBottomhandlers = WinJS.Class.define(
		null,
		null,
		{
			doSave: function () {
				console.log("save button clicked!");
			}
		});

	WinJS.Namespace.define('StupidRobot', {
		EditorBottom: EditorBottomhandlers
	});

})();