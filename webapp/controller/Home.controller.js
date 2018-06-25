sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast,JSONModel,ResourceModel) {
	"use strict";

	return Controller.extend("com.synconic.practice.SAPUI5_Walkthorugh.controller.Home", {
		
		onPressHello: function(){
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMSg = oBundle.getText("helloMsg",[sRecipient]);
			
			MessageToast.show(sMSg);
		},
		
		onOpenDialog:function(){
			var oView = this.getView();
			var oDialog= oView.byId("HelloDialog");
			
			if(!oDialog){
				oDialog=sap.ui.xmlfragment(oView.getId(),"com.synconic.practice.SAPUI5_Walkthorugh.view.HelloDialog");
				oView.addDependent(oDialog);
			}
			
			oDialog.open();
		}
	});
});