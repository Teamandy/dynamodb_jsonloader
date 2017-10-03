/*********************************
Simple loader for loading files into
DynamoDB.
**********************************/

//package to read json files
var jsonfile = require('jsonfile');

var aws = require('./aws');

var docClient = aws.docClient;

//prepared JSON file should look like an array:
//[{ ... }, { ... }]
var TABLE = process.env.TABLE;
switch (TABLE) {
    case "user":
        var placeFile = "./jsonDB/users.json";
        var table = "UserTable";
        break;
    case "city":
        var placeFile = "./jsonDB/cities.json";
        var table = "CityTable";
        break;
    case "destination":
        var placeFile = "./jsonDB/destinations.json";
        var table = "DestinationTable";
        break;
    case "station":
        var placeFile = "./jsonDB/stations.json";
        var table = "StationTable";
        break;
    case "stationcode":
        var placeFile = "./jsonDB/stationcodes.json";
        var table = "StationCodeTable";
        break;
    case "route":
        var placeFile = "./jsonDB/routes.json";
        var table = "RouteTable";
        break;
    case "status":
        var placeFile = "./jsonDB/status.json";
        var table = "StatusTable";
        break;
};

var placeArray = jsonfile.readFileSync(placeFile);

//utility function to create a single put request
function getPlace(index) {
    return {
        TableName: table,
        Item: placeArray[index]
    };
}
//empty value to place instead of empty strings
var EMPTY_VALUE = "null";

//recursive function to save one place at a time
function savePlaces(index) {
    if (index == placeArray.length) {
        console.log("saved all.");
        return;
    }

    var params = getPlace(index);

    //spit out what we are saving for sanity
    // console.log(JSON.stringify(params));

    //check for null AttributeValues
    for (var itemKey in params.Item) {
        if (params.Item[itemKey] === undefined || params.Item[itemKey] === "") {
            console.log(itemKey, "of item _id:", params.Item._id.$oid, "is undefined!") //params.Item._id.$oid - thats where id is after mongoDB
            params.Item[itemKey] = EMPTY_VALUE;
        }
    }

    docClient.put(params, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("saved Place item " + index);
            index += 1;
            //save the next place on the list
            //with recursive setTimeOut
            setTimeout(function () {
                savePlaces(index);
            }, 0);
        }
    });
}

//start saving from index - 0
savePlaces(0);