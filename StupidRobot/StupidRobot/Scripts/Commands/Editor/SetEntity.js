(function () {
  "use strict";

	var setEntityClass = WinJS.Class.define(
  function () {
    //get the current selected entity of the editor entitylist
    var currentSelectedEntity = document.getElementById('basicListView').winControl.currentItem;
    //save the entity to this class
    this.setSelectedEntity(StupidRobot.Editor.LoadedEntities.getItem(currentSelectedEntity.index));
  },
  {

    //perform the specific action of this class on the gridItem
    performActionOn: function (gridItem) {
      gridItem.setEntity(this.getSelectedEntity());
    },

    //update the entity of this class
    setSelectedEntity: function (selectedEntity) {
      this.selectedEntity = selectedEntity;
    },

    //get the newest entity of this entitytype (important at themechange)
    getSelectedEntity: function () {
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