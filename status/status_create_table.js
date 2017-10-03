var aws = require('../aws');

var dynamodb = aws.dynamodb;

const statusParams = {
	TableName: "StatusTable",
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

dynamodb.createTable(statusParams, function (err, data) {
	if (err) {
		console.log(JSON.stringify(err, undefined, 2));
	} else {
		console.log("StatusTable's been created");
	}
});