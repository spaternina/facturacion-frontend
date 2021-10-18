
//Start signature to Callback event to QV_JJ58_LDD89
task.gridRowDeletingCallback.QV_JJ58_LDD89 = function(entities, gridRowDeletingCallbackEventArgs) {
     //here your code
    console.log("Refrescando después de eliminar...")
    gridRowDeletingCallbackEventArgs.commons.api.grid.refresh("QV_JJ58_LDD89");
};
