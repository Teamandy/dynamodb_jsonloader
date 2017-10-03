var aws = require('../aws');

var dynamodb = aws.dynamodb;

const routeParams = {
	TableName: "RouteTable",
	KeySchema: [
		{ AttributeName: "origin", KeyType: "HASH"},
		{ AttributeName: "destination", KeyType: "RANGE" }
	],
	AttributeDefinitions: [       
		{ AttributeName: "origin", AttributeType: "S" },
		{ AttributeName: "destination", AttributeType: "S" }
	],
	ProvisionedThroughput: {
		ReadCapacityUnits: 5,
		WriteCapacityUnits: 5
	}
};

dynamodb.createTable(routeParams, function (err, data) {
	if (err) {
		console.log(JSON.stringify(err, undefined, 2));
	} else {
		console.log("RouteTable's been created");
	}
});