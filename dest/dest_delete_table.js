var aws = require('../aws');

var dynamodb = aws.dynamodb;

var table = "DestinationTable";

var params = {
    TableName: table
};

dynamodb.deleteTable(params, function (err, data) {
    if (err) {
        console.log("Unable to delete table: " + "\n" + JSON.stringify(err, undefined, 2));
    } else {
        console.log("DestinationTable's deleted.");
    }
});