(function () {
  "use strict";

	var setEntityClass = WinJS.Class.define(
  function () {
    var my = this;
    //TODO: Crashes if selectedEntity is NULL
    Crafty.bind('EntitySelected', function (selectedEntity) {
      if (typeof (my.selectedEntity) == "undefined")
        my.selectedEntity = selectedEntity;
    });
  },
  {
    performActionOn: function (gridItem) {
      gridItem.setEntity(this.selectedEntity);
    },

    getActionName: function () {
      return 'setEntity';
    }
  });


	WinJS.Namespace.define("StupidRobot.Commands", {
	  SetEntity: {
	  get: function () {
	    return new setEntityClass();
	  }
	}

	});
})();