var XMLPARSER         = require('xml2json');

var XML2JSON_OPTS     = {
        object        : true,
        reversible    : false,
        coerce        : false,
        sanitize      : true,
        trim          : true,
        arrayNotation : false
    };

console.log(XMLPARSER.toJson("<?xml version='1.0' encoding='UTF-8'?><S:Envelope xmlns:S=\"http://schemas.xmlsoap.org/soap/envelope/\"><S:Body><ns2:postPaymentResponse xmlns:ns2=\"http://paymentPosting.web.service.rms.djb.tcs.com/\"><return><responseStatus>Success:3325117317</responseStatus></return></ns2:postPaymentResponse></S:Body></S:Envelope>",XML2JSON_OPTS));
