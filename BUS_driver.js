// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: bus-alt;
const BUS_CONSTANTS = importModule("BUS_CONSTANTS.js")
const BUS = importModule("BUS_methods.js");

const STOPS = BUS_CONSTANTS.STOPS;
const ROUTES = BUS_CONSTANTS.ROUTES;


function sendNotification(message) {
    let n = new Notification;
    n.title = "🐶🚌";
    n.body = message;
    n.schedule();
} //sendNotification




//defining args json
/*

{
    type : "get" | "loop",
    stops : [],
    route : Route name, bus format ie cc or ec | null,
    testing : true | false

}

*/
var ARGS = args.shortcutParameter;



if (ARGS.testing) { //testing--------------------------

    let stopList = [2737281];
    let str = '';
    for (let i = 0; i < stopList.length; i++) {
        str = str + STOPS[2737281] + "\n";

        let request = new Request(BUS.urlMaker(stopList[i]));
        let r = await request.loadJSON().then(json => {
            str = str + BUS.getAllArrivals(json);
        }
        );
    }
    sendNotification("testing");
    //sendNotification(str);
    Script.setShortcutOutput(str);




    //end testing ------------------------------
} else if (ARGS == undefined || ((ARGS.testing == undefined || ARGS.testing == false) && (ARGS.stops == undefined || ARGS.stops.length == 0) && ARGS.routeName == undefined && ARGS.route == undefined)) {
    sendNotification('wrong args bozo');

} else if (ARGS.type == "get") { //determining action to perform
    if (ARGS.stops.length == 0) {
        sendNotification('stops list empty bozo');
    } else if (ARGS.route == undefined) { //ALL      action getting stops and all routes on stop
        let str = '';
        for (let i = 0; i < ARGS.stops.length; i++) {
            str = str + STOPS[ARGS.stops[i]] + ":" + "\n";
            let request = new Request(BUS.urlMaker(ARGS.stops[i]));
            let r = await request.loadJSON().then(json => {
                str = str + BUS.getAllArrivals(json);
            }
            );
            str = str + "\n";
        }
        //sendNotification(str);
        Script.setShortcutOutput(str); //shortcut app shows output instead of notificaiton cuz there is character limit


    } else { //SPECIFIC      actions getting stops but only specified route
        if (ROUTES[ARGS.route] == undefined) {
            sendNotification("nonexistent route bozo");
        } else {
            let str = '';
            for (let i = 0; i < ARGS.stops.length; i++) {
                str = str + STOPS[ARGS.stops[i]] + ":" + "\n";
                let request = new Request(BUS.urlMaker(ARGS.stops[i]));
                let r = await request.loadJSON().then(json => {
                    str = str + BUS.getArrivals(json, ROUTES[ARGS.route]);
                }
                );
                str = str + "\n";
            }
            //sendNotification(str);
            Script.setShortcutOutput(str); //shortcut app shows output instead of notificaiton cuz there is character limit

        }
    }
    //-----------------------------------------------------------------------------

} else if (ARGS.type == 'loop') { //loop reminder- inprogress
    if (stops.length == 0) {
        sendNotification('stops list empty bozo');
    } else {

    }
}



Script.complete();