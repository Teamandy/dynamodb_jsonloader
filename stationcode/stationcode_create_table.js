var aws = require('../aws');

var dynamodb = aws.dynamodb;

const stationcodeParams = {
	TableName: "StationCodeTable",
	KeySchema: [
		{ AttributeName: "code", KeyType: "HASH" }
	],
	AttributeDefinitions: [
		{ AttributeName: "code", AttributeType: "S" }
	],
	ProvisionedThroughput: {
		ReadCapacityUnits: 5,
		WriteCapacityUnits: 5
	}
};

dynamodb.createTable(stationcodeParams, function (err, data) {
	if (err) {
		console.log(JSON.stringify(err, undefined, 2));
	} else {
		console.log("StationCodeTable's been created");
	}
});