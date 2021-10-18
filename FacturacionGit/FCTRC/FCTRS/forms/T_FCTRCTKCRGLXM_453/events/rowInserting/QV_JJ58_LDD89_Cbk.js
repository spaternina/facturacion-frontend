
//Start signature to Callback event to QV_JJ58_LDD89
task.gridRowInsertingCallback.QV_JJ58_LDD89 = function(entities, gridRowInsertingCallbackEventArgs) {
    console.log("Refrescando después de insertar...");
    gridRowInsertingCallbackEventArgs.commons.api.grid.refresh("QV_JJ58_LDD89");
};
