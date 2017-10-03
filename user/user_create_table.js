var aws = require('../aws');

var dynamodb = aws.dynamodb;

const userParams = {
    TableName: "UserTable",
    KeySchema: [
        { AttributeName: "email", KeyType: "HASH" }
    ],
    AttributeDefinitions: [
        { AttributeName: "email", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

dynamodb.createTable(userParams, function (err, data) {
    if (err) {
        console.log(JSON.stringify(err, undefined, 2));
    } else {
        console.log("UserTable's been created");
    }
});