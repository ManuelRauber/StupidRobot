﻿(function () {
  "use strict";

	var setEntityClass = WinJS.Class.define(
  function () {
    var my = this;
    Crafty.bind('EntitySelected',
      function (selectedEntity) { my.selectedEntity = selectedEntity });
  },
  {
    performActionOn: function (gridItem) {
      console.log(this.gridItem);
      gridItem.setEntity(this.selectedEntity);
      this.gridItem = gridItem;
    },

    undo: function () {
      StupidRobot.Commands.RemoveEntity.performActionOn(this.gridItem);
    },

    redo: function (gridItem) {
      this.performActionOn(this.gridItem);
    }
  }
  );

  //public access
	WinJS.Namespace.define("StupidRobot.Commands", {
	  SetEntity: {
	  get: function () {
	    return new setEntityClass();
	  }
	}

	});
})();