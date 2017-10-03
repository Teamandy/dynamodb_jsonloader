
var aws = require('../aws');

var docClient = aws.docClient;


var table = "RouteTable";
var origin = "KGX";
var destination = "KEI";

var params = {
    TableName: table,
    Key:{
        "origin": origin,
        "destination": destination
    }
};
docClient.get(params, function(err, data) {
	if (err) {
		console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
	} else {
		console.log("GetItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
	}
});

