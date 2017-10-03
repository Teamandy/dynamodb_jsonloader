//AWS node sdk
var AWS = require('aws-sdk');

//need to update region in config
AWS.config.update({
    region: "eu-west-1",
    endpoint: 'http://localhost:8000',
    accessKeyId: "fakeMyKeyId",
    secretAccessKey: "fakeSecretAccessKey"
});

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

exports.dynamodb = dynamodb;
exports.docClient = docClient;