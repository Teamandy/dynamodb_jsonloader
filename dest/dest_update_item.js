var aws = require('../aws');

var docClient = aws.docClient;
var newTripadvisor = {
    "rating":2,
    "reviewCount":2,
    "reviewLink":"http:1",
    "updated":"today",
    "rankingString":"#2"
};
var params = {
    TableName: "DestinationTable",
    Key: {
        "alias": "nostell-priory-and-parkland"
    },
    UpdateExpression: "set tripadvisor =:newtripadvisor",
    ExpressionAttributeValues: {
        ":newtripadvisor": newTripadvisor
    }
};

docClient.update(params, function (err, data) {
    if (err) {
        console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
    } else {
        console.log("successfully updated");
    }
});