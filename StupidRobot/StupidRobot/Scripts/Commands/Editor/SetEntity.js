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
    }
  }
  );

  //load the Class
	var setEntity = new setEntityClass();

  //public access
	WinJS.Namespace.define("StupidRobot.Commands", {
	  SetEntity: {
	    get: function () {
	      return setEntity;
	    }
	  }
	});
})();