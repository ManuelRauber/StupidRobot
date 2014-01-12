(function () {
  "use strict";

	var setEntityClass = WinJS.Class.define(
  function () {
    var currentSelectedEntity = document.getElementById('basicListView').winControl.currentItem;
    this.setSelectedEntity(StupidRobot.Editor.LoadedEntities.getItem(currentSelectedEntity.index));
  },
  {

    performActionOn: function (gridItem) {
      gridItem.setEntity(this.selectedEntity);
    },

    setSelectedEntity: function (selectedEntity) {
      this.selectedEntity = selectedEntity;
      return this;
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