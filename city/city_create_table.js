var aws = require('../aws');

var dynamodb = aws.dynamodb;

const cityParams = {
	TableName: "CityTable",
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

dynamodb.createTable(cityParams, function (err, data) {
	if (err) {
		console.log(JSON.stringify(err, undefined, 2));
	} else {
		console.log("CityTable's been created");
	}
});