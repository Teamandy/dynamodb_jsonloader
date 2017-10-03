var aws = require('../aws');

var docClient = aws.docClient;

var params = {
    TableName: "StatusTable",
    Limit: 5
};

docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
    } else {
        console.log("GetItem succeeded: " + "\n" + JSON.stringify(data.Items, undefined, 2));       
    }
}