

//Entity: Factura
//Factura. (Button) View: AgregarFacturaForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONPAOQHFC_992264 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    if (entities.Factura.codigoProducto !== null){
        executeCommandEventArgs.commons.api.viewState.show('G_AGREGARTAA_127264');
    }

};