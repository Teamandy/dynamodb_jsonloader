var aws = require('../aws');

var docClient = aws.docClient;

var params = {
    TableName : "RouteTable",
    KeyConditionExpression: "#or = :origin",
    ExpressionAttributeNames:{
        "#or": "origin"
    },
    ExpressionAttributeValues: {
        ":origin": "LDS"
    }
};

docClient.query(params, function(err, data) {
    if (err) {
        console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
    } else {
        data.Items.forEach(function(route) {
            console.log("GetItem succeeded: " + "\n" + JSON.stringify(route, undefined, 2));
        });     
    }
});