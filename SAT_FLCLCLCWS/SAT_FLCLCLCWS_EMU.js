    var http = require("http");
    var soap = require('soap');
    var url = 'http://localhost/SAT_FLCLCLCWS/wsdl?wsdl';


// Read Synchrously
    var fsResponse = require("fs");
    var contentResponse = fsResponse.readFileSync("./SAT_FLCLCLCWS.response.json");
 
   // console.log("Output Content : \n"+ contentResponse);

    var validate = require('./SAT_FLCLCLCWS_VAL');
    var logic = require('./SAT_FLCLCLCWS_LGC');


    var myService = {

        SAT_FLCLCLCWS: {

           SAT_FLCLCLCWSHttpSoap11Endpoint: {

                        runService: function(args, cb, headers, req) {

                            console.log('SOAP `reallyDetailedFunction` request from ' + req.connection.remoteAddress);
                            console.log('Headers ' + JSON.stringify(headers) );

                            if ( validate.validaElementosObligatorios( args ) ) {

                                var nuevoValor = logic.resuelveLogicaResponse( args ) ;

                                return { $xml : nuevoValor };

                            } else {

                                throw {
                                    Fault: {
                                        Code: {
                                                Value: "soap:Sender",
                                                Subcode: { value: "rpc:BadArguments" }
                                        },
                                        Reason: { Text: "Processing Error" }
                                    }
                                };

                            }
                        }
            }
        }
    };

    var xml = require('fs').readFileSync('SAT_FLCLCLCWS.wsdl', 'utf8'),
        server = http.createServer(function(request,response) {
            response.end("404: Not Found: " + request.url);
        });

    server.listen(8000);
    soap.listen(server, '/wsdl', myService, xml  );

// Fin de Archivo

