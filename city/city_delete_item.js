
var aws = require('../aws');

var docClient = aws.docClient;


var table = "CityTable";
var alias = "keighley";

var params = {
    TableName: table,
    Key:{
        "alias": alias
    }
};
docClient.delete(params, function(err, data) {
	if (err) {
		console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
	} else {
		console.log("Item deleted: " + alias);
	}
});

