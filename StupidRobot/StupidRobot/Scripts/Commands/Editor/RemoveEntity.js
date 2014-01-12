(function () {
  "use strict";

  var removeEntityClass = WinJS.Class.define(
    null,
  {

    //perform the specific action of this class on the gridItem
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