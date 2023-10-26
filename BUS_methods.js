// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: magic;


/* returns api url based on route input
*/
function urlMaker(id) {
    return `https://routes.uga.edu/Stop/${id}/Arrivals`;
} //urlMaker


/* gets all routes from a stop json
*  loops through each route and returns the arrival times for the active buses
*/
function getAllArrivals(json) {
    let str = '';
    if (json[0] === undefined) {
        str = str + "<----stop not active---->" + '\n';
        return str;
    }
    let DUPLICATES = [];
    json.forEach(route => route.Arrivals.forEach(bus => {

        if (DUPLICATES.find(i => i === bus.VehicleID) === undefined) { //only add unique buses to list
            DUPLICATES.push(bus.VehicleID);
            str = str + bus.RouteName + ': ';
            if (bus.SecondsToArrival > 0) {
                str = str + (((bus.SecondsToArrival - (bus.SecondsToArrival % 60)) / 60) + " min " + Math.trunc(bus.SecondsToArrival % 60) + " sec" + '\n');
            } else {
                str = str + bus.SecondsToArrival + " sec" + '\n';
            }
        } //if

    } //arrivals.forEach
    ) //json.forEach
    );
    return str;
} //getAllArrivals

/* gets arrival times for a specific route for a given stop
*/
function getArrivals(json, routeId) {
    let str = '';
    if (json[0] === undefined) {
        str = str + "<----stop not active---->" + '\n';
        return str;
    }

    let DUPLICATES = [];

    let routeFound = false;

    json.forEach(route => {
        if (route.RouteID == routeId) {
            routeFound = true;
            route.Arrivals.forEach(bus => {
                if (DUPLICATES.find(i => i === bus.VehicleID) === undefined) { //only add unique buses to list
                    DUPLICATES.push(bus.VehicleID);
                    str = str + bus.RouteName + ': ';
                    if (bus.SecondsToArrival > 0) {
                        str = str + (((bus.SecondsToArrival - (bus.SecondsToArrival % 60)) / 60) + " min " + Math.trunc(bus.SecondsToArrival % 60) + " sec" + '\n');
                    } else {
                        str = str + bus.SecondsToArrival + " sec" + '\n';
                    }
                } //if
            })
        }
    });
    if (!routeFound) {
        return "route not found.\n";
    }
    return str;
} //getArrivals



module.exports.getAllArrivals = getAllArrivals;
module.exports.getArrivals = getArrivals;
module.exports.urlMaker = urlMaker;