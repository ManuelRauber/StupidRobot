(function () {
	"use strict";

	var EditorTophandlers = WinJS.Class.define(
		null,
		null,
		{
			doCreate: function (name, mapsize) {
				var mapname = name.value;
				var size;
				for (var i = 0 ; i < mapsize.length; i++) {
					if (mapsize[i].checked) {
						size = mapsize[i].value;
					}
				}

				console.log(mapname);
				console.log(size);
			},

			doSave: function () {
				//TODO: pass the map object to this saving code

				// Create the picker object and set options 
				var savePicker = new Windows.Storage.Pickers.FileSavePicker();
				savePicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.documentsLibrary;
				savePicker.fileTypeChoices.insert("Stupid Map", [".stupidmap"]);
				savePicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.documentsLibrary;
				savePicker.suggestedFileName = "map";

				savePicker.pickSaveFileAsync().then(function (file) {
					if (file) {
						// Prevent updates to the remote version of the file until we finish making changes and call CompleteUpdatesAsync. 
						Windows.Storage.CachedFileManager.deferUpdates(file);
						// write to file 
						Windows.Storage.FileIO.writeTextAsync(file, file.name).done(function () {
							Windows.Storage.CachedFileManager.completeUpdatesAsync(file).done(function (updateStatus) {
								if (updateStatus === Windows.Storage.Provider.FileUpdateStatus.complete) {
									console.log("File " + file.name + " was saved.", "sample", "status");
								} else {
									console.log && WinJS.log("File " + file.name + " couldn't be saved.", "sample", "status");
								}
							});
						});
					} else {
						console.log("Operation cancelled.", "sample", "status");
					}
				});
			}
	});

	WinJS.Namespace.define('StupidRobot', {
		EditorTop: EditorTophandlers
	});

})();