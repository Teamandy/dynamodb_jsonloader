var aws = require('../aws');

var docClient = aws.docClient;

var params = {
    TableName: "StationCodeTable",
    Key: {
        "code": "KEI"
    },
    UpdateExpression: "set lat =:lat, lon =:lon",
    ExpressionAttributeValues: {
        ":lat": 53.86787,
        ":lon": -1.90112
    }
};

docClient.update(params, function (err, data) {
    if (err) {
        console.log("Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2));
    } else {
        console.log(data.Item);
    }
});