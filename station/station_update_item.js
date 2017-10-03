var aws = require('../aws');

var docClient = aws.docClient;

var params = {
    TableName: "StationTable",
    Key: {
        "name": "Leeds"
    },
    UpdateExpression: "set lat =:lat, lon =:lon",
    ExpressionAttributeValues: {
        ":lat": 53.795158,
        ":lon": -1.549089
    }
};

docClient.update(params, function (err, data) {
    if (err) {
        console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
    } else {
        console.log(data.Item);
    }
});