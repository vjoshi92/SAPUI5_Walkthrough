sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/synconic/practice/SAPUI5_Walkthorugh/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(UIComponent, Device, models,JSONModel,ResourceModel) {
	"use strict";

	return UIComponent.extend("com.synconic.practice.SAPUI5_Walkthorugh.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			var oData = { recipient : {
				name:"World"
				}
			};
			
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
			// // enable routing
			// this.getRouter().initialize();

			// // set the device model
			// this.setModel(models.createDeviceModel(), "device");
		}
	});
});