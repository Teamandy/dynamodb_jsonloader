var aws = require('../aws');

var docClient = aws.docClient;

var table = "DestinationTable";


var params = {
    TableName:table,
    Key:{
        "alias": "basilica-di-santa-sabina"
    }
};
docClient.delete(params, function(err, data) {
    if (err) {
        console.log("Unable to delete item: " + "\n" + JSON.stringify(err, undefined, 2));
    } else {
        console.log("Item deleted: " + alias);
    }
});