(function () {
	"use strict";

	var PersistanceManagerClass = WinJS.Class.define(
  null,
  {
    saveMapFromList: function (file, items) {

      var xml = document.createElement('stupidmap');
      for (var i = 0 ; i < items.length ; i++) {
        var xmlnode = document.createElement('i' + i);
        //row
        var child1 = document.createElement('row');
        child1.textContent = items[i]['row'];
        xmlnode.appendChild(child1);
        //column
        var child2 = document.createElement('column');
        child2.textContent = items[i]['column'];
        xmlnode.appendChild(child2);
        //entitytype
        var child3 = document.createElement('entitytype');
        child3.textContent = items[i]['entity'];
        xmlnode.appendChild(child3);
        xml.appendChild(xmlnode);
      }

      // Prevent updates to the remote version of the file until we finish making changes and call CompleteUpdatesAsync. 
      Windows.Storage.CachedFileManager.deferUpdates(file);
      // write to file 
      Windows.Storage.FileIO.writeTextAsync(file, xml.innerHTML).done(function () {
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