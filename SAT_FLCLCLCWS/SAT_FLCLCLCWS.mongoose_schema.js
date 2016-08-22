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


	var connection = mongoose.createConnection('mongodb://localhost/test');
	var SAT_FLCLCLCWS = connection.model('SAT_FLCLCLCWS', SAT_FLCLCLCWSSchema);
    var test1 = new SAT_FLCLCLCWS( { Criterio : { Nombre : 'Criterio 2' } });

    /*
	var test1 = new SAT_FLCLCLCWS( {
		"Criterio" : {
	  		"Nombre" : 'Criterio 1',
			"Descripcion" : 'Un ejemplo de criterio',
	        "Request" : { "tipoOperacion": "OPZX2"
	                    ,"usuario": "JUNIGA"
	                    ,"centalta" : "234345"
	                    ,"cuenta" : "3253452436"
	                    ,"identcli" : "1243654"
	                    } , 
        "Response" : {
                 "claveFin": "000000000000 0142 01988514 604 0609 000000003068 T TARJETA TI TITULAR 0001-01-01 2015-11-06-16.17.15.058635    ",
          "claveInicio": "000000000000 0142 01988514 604 0609 000000003068 T TARJETA TI TITULAR 0001-01-01 2015-11-06-16.17.15.058635    ",
          "descRetorno": "Operación Realizada con éxito",
          "indMasDatos": "N",
          "pantPagina": "001",
          "retorno": "000",
          "tiempoEjecucion": "18ms",
          "totalRegistros": "1",
          "registros_FLCLCLC": {
            "registro_Numero": "1",
            "calpart": "TI",
            "centalta": "0609",
            "contcur": "2015-11-06-16.17.15.058635",
            "cuenta": "000000003068",
            "descalpart": "TITULAR",
            "destipcont": "TARJETA",
            "fechabaja": {
              "anno": "0",
              "dia": "0",
              "format": "dd-MM-yyyy",
              "mes": "0" 
                } ,
              "motbaja": "2",
            "tipcont": "T"
            }
            }
}});
*/
	test1.save(function (err) {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log('Exito al Guardar');
	  }
