var aws = require('../aws');

var docClient = aws.docClient;

var stationLang = "fr";

var params = {
    TableName: "StationTable",
    ProjectionExpression: "#nm, code",
    ExpressionAttributeNames: {
        "#nm": "name"
    },
    Limit: 10
};

var buffer = [];

docClient.scan(params, onScan);


function onScan(err, data) {
    if (err) {
        console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
    } else {
        // continue scanning if we have more than 1MB data
        if (typeof data.LastEvaluatedKey != "undefined") {
            //push results in buffer
            data.Items.forEach(station => { buffer.push(station) });
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        } else {
            //push last scan results in buffer
            data.Items.forEach(station => { buffer.push(station) });
            console.log("scan is complete");
            console.log(buffer);
        }
    }
}