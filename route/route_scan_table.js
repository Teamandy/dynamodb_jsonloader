var aws = require('../aws');

var docClient = aws.docClient;

var params = {
    TableName: "RouteTable",
    Limit: 5
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
            data.Items.forEach(route => { buffer.push(route) });
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        } else {
            //push last scan results in buffer
            data.Items.forEach(route => { buffer.push(route) });
            console.log("scan is complete");
            console.log(buffer);
        }
    }
}