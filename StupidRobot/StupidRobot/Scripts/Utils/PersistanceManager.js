(function () {
	"use strict";

	var PersistanceManagerClass = WinJS.Class.define(
  null,
  {
    saveMapFromList: function (file, items) {
      //root node
      var xml = document.createElement('stupidmap');

      //get the size of the map from the amount of items sqrt(row*column)
      var mapsize = Math.sqrt(items.length);
      var mapsizeentry = document.createElement('mapsize');
      mapsizeentry.textContent = mapsize;
      xml.appendChild(mapsizeentry);

      //add all blocks from the map
      for (var i = 0 ; i < items.length ; i++) {
        var xmlnode = document.createElement('block');
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
        child3.textContent = items[i]['entity'].getEntity().data['type'];
        xmlnode.appendChild(child3);
        xml.appendChild(xmlnode);
      }

      // Prevent updates to the remote version of the file until we finish making changes and call CompleteUpdatesAsync. 
      Windows.Storage.CachedFileManager.deferUpdates(file);
      // write to file 
      Windows.Storage.FileIO.writeTextAsync(file, xml.outerHTML).done(function () {
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

    loadMapData: function (map) {
      console.log(map.path);
      
      Windows.Storage.StorageFile.getFileFromPathAsync(map.path).done(function (file) {
        Windows.Storage.FileIO.readTextAsync(file).then(function (text) {
          var xmlDoc;
          var parser = new DOMParser();
          xmlDoc = parser.parseFromString(file.path, 'text/xml');
          return xmlDoc;
        });
      });
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