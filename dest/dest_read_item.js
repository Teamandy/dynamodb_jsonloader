
var aws = require('../aws');

var docClient = aws.docClient;


var table = "DestinationTable";
// var alias = "basilica-di-santa-sabina";
var alias = "east-riddlesden-hall";

var params = {
    TableName: table,
    Key:{
        "alias": alias
	}
};
docClient.get(params, function(err, data) {
	if (err) {
		console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
	} else {
		console.log(data.Item.tripadvisor);
	}
});

