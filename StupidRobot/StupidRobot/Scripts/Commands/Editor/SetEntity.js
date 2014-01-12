(function () {
  "use strict";

	var setEntityClass = WinJS.Class.define(
  function () {
    var currentSelectedEntity = document.getElementById('basicListView').winControl.currentItem;
    this.setSelectedEntity(StupidRobot.Editor.LoadedEntities.getItem(currentSelectedEntity.index));
  },
  {

    performActionOn: function (gridItem) {
      gridItem.setEntity(this.getSelectedEntity());
    },

    setSelectedEntity: function (selectedEntity) {
      this.selectedEntity = selectedEntity;
    },

    getSelectedEntity: function () {
      //ask for the newest entity of this entitytype (important at themechange)
      return StupidRobot.Editor.GetEntity(this.selectedEntity.data['type']);
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