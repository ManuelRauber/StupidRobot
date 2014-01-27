(function () {
	"use strict";

	var PersistanceManagerClass = WinJS.Class.define(
  null,
  {
    saveMap: function (file) {
      // Prevent updates to the remote version of the file until we finish making changes and call CompleteUpdatesAsync. 
      Windows.Storage.CachedFileManager.deferUpdates(file);
      // write to file 
      Windows.Storage.FileIO.writeTextAsync(file, "test").done(function () {
        // Let Windows know that we're finished changing the file so the other app can update the remote version of the file. 
        // Completing updates may require Windows to ask for user input. 
        Windows.Storage.CachedFileManager.completeUpdatesAsync(file).done(function (updateStatus) {
          if (updateStatus === Windows.Storage.Provider.FileUpdateStatus.complete) {
            WinJS.log && WinJS.log("File " + file.name + " was saved.", "sample", "status");
          } else {
            WinJS.log && WinJS.log("File " + file.name + " couldn't be saved.", "sample", "status");
          }
        });
      });
    },

    //perform the specific action of this class on the gridItem
    performActionOn: function (gridItem) {
      gridItem.removeEntity();
    },

    getActionName: function () {
      return 'removeEntity';
    }
  });

	var persistanceManagerClass = new PersistanceManagerClass();

	WinJS.Namespace.define("StupidRobot.Editor", {
	  PersistenceManager: {
	    get: function () {
	      return persistanceManagerClass;
	    }
	  }
	});

})();