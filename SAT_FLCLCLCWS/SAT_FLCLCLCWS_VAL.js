// Soap_Example_validate
// ------------------------------

  module.exports = {

    validaElementosObligatorios: function ( args ) {

      console.log('------ Valores Obligatorios de acuerdo a funcionalidad ------');

      console.log('Elemento: autoPaginable ' + JSON.stringify( args.msgEnvio.autoPaginable ) );
      console.log('Elemento: avanzar       ' + JSON.stringify( args.msgEnvio.avanzar       ) );
      console.log('Elemento: retroceder    ' + JSON.stringify( args.msgEnvio.retroceder    ) );

      console.log('Elemento: tipoOperacion ' + JSON.stringify( args.msgEnvio.tipoOperacion ) );
      console.log('Elemento: usuario       ' + JSON.stringify( args.msgEnvio.usuario       ) );
      console.log('Elemento: centalta      ' + JSON.stringify( args.msgEnvio.centalta      ) );
      console.log('Elemento: cuenta        ' + JSON.stringify( args.msgEnvio.cuenta        ) );
      console.log('Elemento: identcli      ' + JSON.stringify( args.msgEnvio.identcli      ) );
      

      // Valida si existe el elemento o es nulo
      if ( (typeof( args.msgEnvio.tipoOperacion ) == "undefined") || ( !args.msgEnvio.tipoOperacion ) )
      {

        console.log('Validacion [msgEnvio.tipoOperacion] [' + JSON.stringify( args.msgEnvio.tipoOperacion ) + '] ,Falsa!' );
        return false;

      }

      if ( args.msgEnvio.autoPaginable  ) {

        console.log('Validacion [msgEnvio.autoPaginable] [' + JSON.stringify( args.msgEnvio.autoPaginable ) + '] ,Correcta!' );

      } else {

        console.log('Validacion [msgEnvio.autoPaginable] [' + JSON.stringify( args.msgEnvio.autoPaginable ) + '] ,Falsa!' );
        return false;

      }

      return true;

  },

  validaFecha: function ( args ) {
  return false;
  }
  };


// Fin de Archivo
