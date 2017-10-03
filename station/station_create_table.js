var aws = require('../aws');

var dynamodb = aws.dynamodb;

const stationParams = {
	TableName: "StationTable",
	KeySchema: [
		{ AttributeName: "name", KeyType: "HASH" }
	],
	AttributeDefinitions: [
		{ AttributeName: "name", AttributeType: "S" }
	],
	ProvisionedThroughput: {
		ReadCapacityUnits: 5,
		WriteCapacityUnits: 5
	}
};

dynamodb.createTable(stationParams, function (err, data) {
	if (err) {
		console.log(JSON.stringify(err, undefined, 2));
	} else {
		console.log("StationTable's been created");
	}
});