sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller,MessageToast,JSONModel,ResourceModel) {
	"use strict";

	return Controller.extend("com.synconic.practice.SAPUI5_Walkthorugh.controller.Home", {
		
		onInit:function(){
			var oData = {
				recipient : {
					name:"World"
				}	
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			
			var i18nModel = new ResourceModel({
            bundleName: "com.synconic.practice.SAPUI5_Walkthorugh.i18n.i18n"
        	});
        	this.getView().setModel(i18nModel, "i18n1");
		},
		onPressHello: function(){
			var oBundle = this.getView().getModel("i18n1").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMSg = oBundle.getText("helloMsg",[sRecipient]);
			
			MessageToast.show(sMSg);
		}
	});
});