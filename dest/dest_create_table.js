var aws = require('../aws');

var dynamodb = aws.dynamodb;

const destParams = {
	TableName: "DestinationTable",
	KeySchema: [
		{ AttributeName: "alias", KeyType: "HASH" }
	],
	AttributeDefinitions: [
		{ AttributeName: "alias", AttributeType: "S" }
	],
	ProvisionedThroughput: {
		ReadCapacityUnits: 5,
		WriteCapacityUnits: 5
	}
};

dynamodb.createTable(destParams, function (err, data) {
	if (err) {
		console.log(JSON.stringify(err, undefined, 2));
	} else {
		console.log("DestinationTable's been created");
	}
});