(function () {
  "use strict";

	var setEntityClass = WinJS.Class.define(
  function () {
    var my = this;
    Crafty.bind('EntitySelected',
      function (selectedEntity) { my.selectedEntity = selectedEntity });
  },
  {
    performActionOn: function (gridItem) {
      gridItem.setEntity(this.selectedEntity);
      this.gridItem = gridItem;
      //that selectedEntity var is saved in this class (for later redos)
      Crafty.unbind('EntitySelected'); //not sure if this works, it could unbind all events for other setEntity commands too
    },

    undo: function () {
      if (typeof (this.gridItem) == "undefined") {
        console.log("SetEntity: Trying to execute undo for not existing gridItem!")
        return;
      }
      this.gridItem.removeEntity();
    },

    redo: function (gridItem) {
      if (typeof (this.gridItem) == "undefined") {
        console.log("SetEntity: Trying to execute redo for not existing gridItem!")
        return;
      }
      this.performActionOn(this.gridItem);
    }
  }
  );


	WinJS.Namespace.define("StupidRobot.Commands", {
	  SetEntity: {
	  get: function () {
	    return new setEntityClass();
	  }
	}

	});
})();