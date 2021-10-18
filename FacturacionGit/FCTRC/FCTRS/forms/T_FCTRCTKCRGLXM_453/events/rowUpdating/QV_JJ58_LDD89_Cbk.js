
//Start signature to Callback event to QV_JJ58_LDD89
task.gridRowUpdatingCallback.QV_JJ58_LDD89 = function(entities, gridRowUpdatingCallbackEventArgs) {
    console.log("Refrescadno después de actualizar");
    gridRowUpdatingCallbackEventArgs.commons.api.grid.refresh("QV_JJ58_LDD89");
};
