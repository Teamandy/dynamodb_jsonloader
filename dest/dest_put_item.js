/*********************************
Simple Demo for loading files into
DynamoDB.
**********************************/

//package to read json files
var jsonfile = require('jsonfile');

var aws = require('../aws');

var docClient = aws.docClient;

var placeFile = "./jsonDB/destination_lost.json";
var table = "DestinationTable";
      

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
            //with half a second delay or faster for huge collections
            setTimeout(function () {
                savePlaces(index);
            }, 0);
        }
    });
}

//start saving from index - 0
savePlaces(0);