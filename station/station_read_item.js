
var aws = require('../aws');

var docClient = aws.docClient;


var table = "StationTable";
var name = "Leeds";

var params = {
	TableName: table,
	Key: {
		"name": name
	}
};
docClient.get(params, function(err, data) {
	if (err) {
		console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
	} else {
		console.log("GetItem succeeded: " + "\n" + JSON.stringify(data.Item, undefined, 2));
	}
});
