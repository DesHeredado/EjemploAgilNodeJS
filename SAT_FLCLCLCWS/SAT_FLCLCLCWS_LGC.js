// Soap_Example_validate
// ------------------------------
var mongoose = require('mongoose');

var SAT_FLCLCLCWSSchema = new mongoose.Schema({
"Criterio" : {
    "Nombre" : String,
    "Descripcion" : String,
    "Request" : {
        "tipoOperacion" : String,
        "usuario" : String,
        "centalta" : String,
        "cuenta" : String,
        "identcli" : String
    },
    "Response" : {
        "claveFin" : String,
        "claveInicio" : String,
        "descRetorno" : String,
        "indMasDatos" : String,
        "pantPagina" : String,
        "retorno" : String,
        "tiempoEjecucion" : String,
        "totalRegistros" : String,
        "registros_FLCLCLC" : {
            "registro_Numero" : String,
            "calpart" : String,
            "centalta" : String,
            "contcur" : String,
            "cuenta" : String,
            "descalpart" : String,
            "destipcont" : String,
            "fechabaja" : {
                "anno" : String,
                "dia" : String,
                "format" : String,
                "mes" : String
            },
            "motbaja" : String,
            "tipcont" : String
        }
    }
}
});


var et = require('elementtree');
var XML = et.XML;
var ElementTree = et.ElementTree;
var element = et.Element;
var subElement = et.SubElement;

var root, etree;

root = element('ns:return');
root.set('xsi:type', 'ax2241:Respuesta_FLCLCLCWS');
root.set('xmlns:ax2245', 'http://commons.soapwebservices.ease/xsd');
root.set('xmlns:ax2242', 'http://satNewAge.soapwebservices.ease/xsd');
root.set('xmlns:ax2241', 'http://webservice.sat.mediosdepago.tecnocom.com/xsd');
root.set('xmlns:xsi','http://www.w3.org/2001/XMLSchema-instance');

	   claveFin = subElement(root, 'ax2242:claveFin');
	claveInicio = subElement(root, 'ax2242:claveInicio');
	descRetorno = subElement(root, 'ax2242:descRetorno');
	indMasDatos = subElement(root, 'ax2242:indMasDatos');
	 pantPagina = subElement(root, 'ax2242:pantPagina');
	    retorno = subElement(root, 'ax2242:retorno');
tiempoEjecucion = subElement(root, 'ax2242:tiempoEjecucion');
 totalRegistros = subElement(root, 'ax2242:totalRegistros');

registros_FLCLCLC = subElement(root, 'ax2241:registros_FLCLCLC');
registros_FLCLCLC.set('xsi:type','ax2241:Registro_FLCLCLCWS');

registro_Numero = subElement(registros_FLCLCLC, 'ax2245:registro_Numero');
        calpart = subElement(registros_FLCLCLC, 'ax2241:calpart');
       centalta = subElement(registros_FLCLCLC, 'ax2241:centalta');
         clamon = subElement(registros_FLCLCLC, 'ax2241:clamon');
         codent = subElement(registros_FLCLCLC, 'ax2241:codent');
        contcur = subElement(registros_FLCLCLC, 'ax2241:contcur');
         cuenta = subElement(registros_FLCLCLC, 'ax2241:cuenta');
     descalpart = subElement(registros_FLCLCLC, 'ax2241:descalpart');    
         desmot = subElement(registros_FLCLCLC, 'ax2241:desmot');  
     destipcont = subElement(registros_FLCLCLC, 'ax2241:destipcont');  

	  fechabaja = subElement(registros_FLCLCLC, 'ax2241:fechabaja');  
      fechabaja.set('xsi:type','ax2245:EaseDate');

		   anno = subElement(fechabaja, 'ax2245:anno');
			dia = subElement(fechabaja, 'ax2245:dia');  
		 format = subElement(fechabaja, 'ax2245:format');  
		    mes = subElement(fechabaja, 'ax2245:mes');  
      nombreDia = subElement(fechabaja, 'ax2245:nombreDia');
	  nombreMes = subElement(fechabaja, 'ax2245:nombreMes');
	  valueDate = subElement(fechabaja, 'ax2245:valueDate');

	  motbaja = subElement(registros_FLCLCLC, 'ax2241:motbaja'); 
	  tipcont = subElement(registros_FLCLCLC, 'ax2241:tipcont'); 

module.exports = {

  resuelveLogicaResponse: function ( args ) {

      if ( args.msgEnvio.autoPaginable && args.msgEnvio.avanzar && ! args.msgEnvio.retroceder ) {

		console.log('resuelveLogicaResponse , Condicion 1 Aplica ' );

      } else {

      	console.log('resuelveLogicaResponse , Condicion 2 Aplica ' );

      }

 		var connection = mongoose.createConnection('mongodb://localhost/test');
 		var SAT_FLCLCLCWS = connection.model('SAT_FLCLCLCWS', SAT_FLCLCLCWSSchema);

		SAT_FLCLCLCWS.findOne({ "Criterio.Request.tipoOperacion" : "OPZX2" , "Criterio.Request.cuenta" : "3253452436"   }, function(err, Criterios ) {
			if (err) return console.error(err);
				//console.log( '{' + CriterioEncontrado[0].path(Criterio).get(clavefin) + '}{' + claveFin.text  + '}' );
		//	console.log( CriterioEncontrado);
		//	console.log( CriterioEncontrado._id);
		//	console.log( CriterioEncontrado.toObject().Criterio);
		//	console.log( CriterioEncontrado.toObject().Criterio.Nombre);
		//	console.log( CriterioEncontrado.toObject().Criterio.Response);
        claveFin.text = Criterios.toObject().Criterio.Response.claveFin;
        claveInicio.text = Criterios.toObject().Criterio.Response.claveInicio;
		//console.log( 'claveFin->' + CriterioEncontrado.toObject().Criterio.Response.claveFin );
		});

    //   claveFin.text = '000000000000 0142 01988514 604 0609 000000003068 T TARJETA TI TITULAR 0001-01-01 2015-11-06-16.17.15.058635    ';
    //claveInicio.text = '000000000000 0142 01988514 604 0609 000000003068 T TARJETA TI TITULAR 0001-01-01 2015-11-06-16.17.15.058635    ';
    descRetorno.text = 'Operación Realizada con éxito';
    indMasDatos.text = 'N';
     pantPagina.text = '001';
        retorno.text = '000';
tiempoEjecucion.text = '18ms';
 totalRegistros.text = '1';

registro_Numero.text = '1';
        calpart.text = 'TI';
       centalta.text = '0609';
        
        contcur.text = '2015-11-06-16.17.15.058635';
         cuenta.text = '000000003068';
     descalpart.text = 'TITULAR';    

     destipcont.text = 'TARJETA';    

		   anno.text = '0';
			dia.text = '0'; 
		 format.text = 'dd-MM-yyyy';  
		    mes.text = '0';

	    motbaja.text = '2';
        tipcont.text = 'T';


	etree = new ElementTree(root);
	var myXML = etree.write({'xml_declaration': false});

	return myXML;
  }

};

// Fin de Archivo
