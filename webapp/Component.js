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
			//manifest: "json"
			rootView:{
				"viewName": "com.synconic.practice.SAPUI5_Walkthorugh.view.Home",
				"type": "XML",
				"async": true,
				"id": "app"
			}
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
			
			var i18nModel = new ResourceModel({
				bundleName: "com.synconic.practice.SAPUI5_Walkthorugh.i18n.i18n"
			});
			this.setModel(i18nModel,"i18n");
			// // enable routing
			// this.getRouter().initialize();

			// // set the device model
			// this.setModel(models.createDeviceModel(), "device");
		}
	});
});