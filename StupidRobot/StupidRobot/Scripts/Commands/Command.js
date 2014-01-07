(function () {
  "use strict";

  //TODO: Commands should be removed when not used any more
  var commandClass = WinJS.Class.define(
  function (gridItem, commandType) {
    this.gridItem = gridItem;
    this.commandType = commandType;
  },
  {
    doAction: function () {
      this.commandType.performActionOn(this.gridItem);
    },
    
    undoAction: function () {
      if (this.commandType.getActionName() == 'setEntity')
        StupidRobot.Commands.RemoveEntity.performActionOn(this.gridItem);
      if (this.commandType.getActionName() == 'removeEntity')
        //StupidRobot.Commands.SetEntity.performActionOn(this.gridItem); <- darf kein neues objekt erzeugen, da sonst currentEntity info fehlt
    },
  }
  );

  WinJS.Namespace.define("StupidRobot", {
    Command: function (griditem, commandType) {
      return new commandClass(griditem, commandType);
    }

  });
})();