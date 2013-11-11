(function () {
  "use strict";

  var removeEntityClass = WinJS.Class.define(
  null,
  {
    performActionOn: function (gridItem) {
      gridItem.removeEntity(this.selectedEntity); //TODO
      this.gridItem = gridItem;
    },

    undo: function () {
      if (typeof (this.gridItem) == "undefined") {
        console.log("RemoveEntity: Trying to execute undo for not existing gridItem!")
        return;
      }
      this.gridItem.setEntity();
    },

    redo: function (gridItem) {
      if (typeof (this.gridItem) == "undefined") {
        console.log("RemoveEntity: Trying to execute redo for not existing gridItem!")
        return;
      }
      this.performActionOn(this.gridItem);
    }
  }
  );


  WinJS.Namespace.define("StupidRobot.Commands", {
    RemoveEntity: {
      get: function () {
        return new removeEntityClass();
      }
    }

  });
})();