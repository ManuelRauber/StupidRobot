(function () {
	"use strict";

	var PersistanceManagerClass = WinJS.Class.define(
  function () {
    this.localFolder = Windows.Storage.ApplicationData.current.localFolder;
  },
  {
    saveMapFromList: function (mapname, items) {
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

      this.localFolder.createFileAsync(mapname + ".xml", Windows.Storage.CreationCollisionOption.openIfExists)
        .then(function (file) {
          Windows.Storage.FileIO.writeTextAsync(file, xml.outerHTML);
        })
    },

    getFilesFromLocalSpace: function () {
      this.localFolder.getFilesAsync().done(function (fileList) {
        return fileList;
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
    },

    getDataSourceFromLocalSpaceItems: {
      get: function () {
        var fileList = this.getFilesFromLocalSpace();
        var array = [];
        for (var i = 0 ; i < fileList.size ; i++) {
          console.log(fileList.getAt(i));
        }
        var itemList = new WinJS.Binding.List(array);
        return itemList.dataSource;
      }
    }
  });

	var persistanceManagerClass = new PersistanceManagerClass();

	WinJS.Namespace.define("StupidRobot.Editor.PersistenceManager", {
	  getInstance: {
	    get: function () {
	      return persistanceManagerClass;
	    }
	  },

	  getDataSourceFromLocalSpaceItems: {
	    get: function () {
	      return persistanceManagerClass.getDataSourceFromLocalSpaceItems;
	    }
	  },
	});

})();