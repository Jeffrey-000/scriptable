// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: magic;
const BUS_CONSTANTS = importModule("BUS_CONSTANTS.js");

const ROUTE = BUS_CONSTANTS.ROUTE;
const STOPS = BUS_CONSTANTS.STOPS;


function urlMaker(id) {
    return `https://routes.uga.edu/Stop/${id}/Arrivals`;
}


function sendNotification(message) {
    var n = new Notification;
    n.title = "🐶🚌";
    n.body = message;
    n.schedule();
}


function getArrivalTime(json, routeId) {
    let time = 9999999999;
    if (json[0] == undefined) {
        return -9999999999;
    }
    json[0].Arrivals.forEach((elem) => {
        if (elem.RouteID == routeId) {
            if (elem.SecondsToArrival < time) {
                time = elem.SecondsToArrival;
            }
        }
    });
    return time;
}

let routeId = '';
let threshold = 0;

args.shortcutParameter

let time = 0;
do {
    let r = await new Request(urlMaker(value))
        .loadJSON()
        .then(e => time = getArrivals(e, routeId));
} while (time > threshold)
//can possibly use a timer object
sendNotification(str);


Script.complete();

