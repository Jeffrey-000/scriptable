// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-brown; icon-glyph: magic;
const BUS_CONSTANTS = importModule("BUS_CONSTANTS.js")
const BUS = importModule("BUS_methods.js");

const STOPS = BUS_CONSTANTS.STOPS;
const ROUTE = BUS_CONSTANTS.ROUTE;


function sendNotification(message) {
    let n = new Notification;
    n.title = "🐶🚌";
    n.body = message;
    n.schedule();
} //sendNotification


var ARGS = args.shortcutParameter; 
//ARGS = JSON.parse(ARGS);
//"commandline" arguments
//args can be read in as json
//defining args json
/*

{
    type : "get" | "loop",
    testing : true | false,
    stops : [],
    routeName : name | null,
    route : RouteId | null
}

*/


if (ARGS.testing) { //testing--------------------------

    let stopList = [2737281];
    let str = '';
    for (let i = 0; i < stopList.length; i++) {
        let request = new Request(BUS.urlMaker(stopList[i]));
        let r = await request.loadJSON().then(json => {
            str = str + BUS.getAllArrivals(json);
        }
        );
    }
    sendNotification("testing");
    sendNotification(str);





    //end testing ------------------------------
} else if (ARGS == undefined || ((ARGS.testing == undefined || ARGS.testing == false) && (ARGS.stops == undefined || ARGS.stops.length == 0) && ARGS.routeName == undefined && ARGS.route == undefined)) {
    sendNotification('wrong args bozo');
} else if (0) {
    
}



Script.complete();