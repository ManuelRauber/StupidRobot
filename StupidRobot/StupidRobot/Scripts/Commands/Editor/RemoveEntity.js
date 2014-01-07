(function () {
  "use strict";

  var removeEntityClass = WinJS.Class.define(
    null,
  {
    performActionOn: function (gridItem) {
      gridItem.removeEntity();
    },

    getActionName: function () {
      return 'removeEntity';
    }
  });


  WinJS.Namespace.define("StupidRobot.Commands", {
    RemoveEntity: {
      get: function () {
        return new removeEntityClass();
      }
    }

  });
})();