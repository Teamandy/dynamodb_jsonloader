
var aws = require('../aws');

var docClient = aws.docClient;


var table = "StationCodeTable";
var code = "KEI";

var params = {
	TableName: table,
	Key: {
		"code": code
	}
};
const getPromise = new Promise( function(resolve, reject) {
	docClient.get(params, function (err, data) {
		if (err) {
			console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
		} else {
			resolve(data.Item);
			// console.log("GetItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
		}
	});
});

getPromise
	.then(function (data){
		console.log("GetItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
		console.log("first then done");
		return data;
	})
	.then(function (station){
		console.log("GetItem succeeded: " + "\n" + JSON.stringify(station, undefined, 2));
		// console.log(station.Item.name);
		console.log("happy end");
	})

