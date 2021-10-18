
//gridRowUpdating QueryView: QV_JJ58_LDD89
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_JJ58_LDD89 = function (entities,gridRowUpdatingEventArgs) {

     gridRowUpdatingEventArgs.commons.execServer = true;
     //gridRowUpdatingEventArgs.commons.serverParameters.Cliente = true;

};




