var aws = require('../aws');

var docClient = aws.docClient;

var lang = "en";

var params = {
    TableName: "DestinationTable",
    FilterExpression: "not tripadvisor.id in (:tripid) and lang = :lng",
    ExpressionAttributeValues: {
        ":tripid": null,
        ":lng": lang
    },
};

docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
    } else {
        console.log("=======partially scanned==========")
        console.log("Items.count: " + data.Items.length);
        // continue scanning if we have more than 1MB data
        if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        } else {
            console.log("scan is complete");
        }
    }
}