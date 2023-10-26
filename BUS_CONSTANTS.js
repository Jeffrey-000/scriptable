// icon-color: yellow; icon-glyph: bus-alt;

const ROUTES = {
    "BH": 19369, //bulldog housing
    "CL": 22472, //central loop
    "CS": 17221, //chicopee shuttle
    "CC": 19376, //cross campus connector
    "EC": 19367, //east campus
    "GS": 22698, //green house shuttle
    "HS": 14736, //health science
    "INTERSESSION": 5675, //? idk what this is and the route id wrong
    "M": 20002, //millidge ave
    "NC": 18724, //night campus
    "NSC": 22473, //north south connector
    "P&Rmorning": 20049, //park and ride morning?
    "P&Rafternoon": 20032, //park and ride afternoon
    "PM": 20156, //prince millidge
    "VM": 20051, //vet med
    "WS": 20233, //weekender south 
    "WN": 20056, //weekender north
    "W": 20003 //west campus
}

const STOPS = {
    "2732990": "Building S",
    "2737326": "Building Q",
    "2737327": "Building P",
    "2737328": "Rogers Road",
    "2734400": "Building G",
    "2737301": "Driftmier Engineering Center (to Carlton St.)",
    "2737297": "Science Learning Center",
    "2737263": "Snelling Dining Commons",
    "2737279": "Physics (north)",
    "2737275": "Memorial Hall",
    "2747832": "Correll Hall ",
    "7964080": "Black-Diallo-MIller Hall",
    "2737277": "Creswell Hall (Cloverhurst Ave.)",
    "2746275": "Oglethorpe House (East)",
    "2737281": "Rutherford Hall (south)",
    "2737291": "Myers Quad",
    "2737295": "Stegeman Coliseum",
    "2737298": "Aderhold Hall (to East Campus Rd.)",
    "2737315": "JOE momma",
    "2737316": "University Health Center",
    "2737324": "Building H",
    "2737329": "Brandon Oaks",
    "2737331": "Jamestown Apartments",
    "2731576": "Main Library",
    "2737294": "Tucker Hall (southbound)",
    "2736531": "East Campus Village",
    "2734105": "Aderhold Hall (to Plant Science)",
    "2737296": "Plant Sciences",
    "2737268": "Gilbert Hall",
    "2732612": "The Arch",
    "6781620": "Chicopee",
    "6781621": "School of Social Work",
    "2737293": "Tucker Hall (northbound)",
    "2737287": "Food Science",
    "2737284": "Chemistry",
    "2746274": "Russell Hall (Linnentown Lane.)",
    "2737285": "Conner Hall",
    "2737286": "STEM Research",
    "2736232": "Intramural Fields Deck",
    "2737322": "Lot E01",
    "2737274": "Psychology-Journalism",
    "2737276": "Tate Center",
    "2737280": "Physics (south)",
    "2737302": "Driftmier Engineering Center (to College Station)",
    "2737325": "Building F",
    "7965358": "Soccer Softball",
    "2737381": "UGA Greenhouses",
    "9015811": "Engineering Research and Education Center",
    "2751905": "Botanical Gardens",
    "2737379": "UGA Campus Transit",
    "2737334": "CCRC",
    "2737337": "UGA Automotive Center",
    "2737363": "Health Sciences Campus",
    "3711486": "Lucy Cobb",
    "2737304": "Clarke Central High School",
    "2737307": "Springdale Street",
    "2737309": "Oakland Ave (to Five Points)",
    "2737310": "Lumpkin St @ Rutherford St (to campus)",
    "2737361": "Nacoochee Avenue",
    "2734680": "ACC Multi-Modal Center",
    "2737312": "Presbyterian Center",
    "2737311": "Lumpkin St @ Rutherford St (to Five Points)",
    "2735848": "Oakland Avenue (Tri-Delta)",
    "2737308": "Rutherford Street",
    "2737306": "Peabody Street",
    "2737305": "Henderson Avenue",
    "2737303": "Waddell Street",
    "2737264": "Broad Street Studios",
    "2737282": "Rutherford Hall (north)",
    "2737278": "Creswell Hall (Finley St.)",
    "2737299": "Coverdell",
    "2737271": "Learning & Development",
    "3711493": "Park and Ride",
    "5259967": "Ag Tech to Campus",
    "2734277": "Human Resources",
    "5020449": "Spring St.",
    "5992702": "Veterinary Medical Center - Platform",
    "2737383": "Poultry Diagnostic &amp; Research Center to Campus",
    "2737320": "Intramural Fields (College Station Rd.)",
    "5928507": "Park and Ride Outbound (to VMC)",
    "2737384": "River's Crossing",
    "5260218": "Poultry Diagnostic & Research Center to Vet Med"
}




const STOPSBYROUTE = {
    "BH": [
        2732990,
        2737326,
        2737327,
        2737328,
        2734400,
        2737301,
        2737297,
        2737263,
        2737279,
        2737275,
        2747832,
        7964080,
        2737277,
        2746275,
        2737281,
        2737291,
        2737295,
        2737298,
        2737315,
        2737316,
        2737324,
        2737329,
        2737331
    ],


    "CL": [
        2731576,
        2737294,
        2737315,
        2737316,
        2736531,
        2734105,
        2737296,
        2737297,
        2737263,
        2737279,
        2737275,
        2737268,
        2732612
    ],


    "CS": [
        6781620,
        2731576,
        6781621
    ],


    "CC": [
        2736531,
        2737293,
        2737287,
        2737284,
        2737279,
        2737275,
        2747832,
        2746274,
        2746275,
        2737281,
        2737285,
        2737286,
        2737294,
        2737315,
        2737316
    ],


    "EC": [
        2736232,
        2737322,
        2736531,
        2737293,
        2737287,
        2737284,
        2737279,
        2737275,
        2737268,
        2732612,
        2731576,
        2737274,
        2737276,
        2737280,
        2737285,
        2737286,
        2737294,
        2737315,
        2737316
    ],


    "GS": [
        2737296,
        2737302,
        2737325,
        7965358,
        2737381,
        9015811,
        2751905,
        2737379,
        2737334,
        2737337
    ],


    "HS": [
        2737363,
        3711486,
        2737304,
        2737307,
        2737309,
        2737310,
        2737263,
        2737279,
        2737275,
        2737268,
        2737361
    ],


    "INTERSESSION": [
        2732990,
        2737326,
        2737327,
        2737328,
        2734400,
        2737325,
        2736531,
        2734105,
        2737296,
        2737297,
        2737263,
        2737279,
        2737275,
        2737268,
        2732612,
        2734680,
        2731576,
        2737274,
        2747832,
        2746274,
        2746275,
        2737281,
        2737291,
        2737295,
        2737298,
        2737315,
        2737316,
        2737324,
        2737329,
        2737331
    ],


    "M": [
        2731576,
        2737274,
        2737276,
        2737280,
        2737291,
        2737312,
        2737311,
        2735848,
        2737308,
        2737306,
        2737305,
        2737303,
        2737264,
        2732612
    ],


    "NC": [
        2732990,
        2737326,
        2737327,
        2737328,
        2734400,
        2737325,
        2736531,
        2734105,
        2737296,
        2737297,
        2737263,
        2737282,
        2737278,
        2737268,
        2732612,
        2731576,
        2737274,
        2747832,
        2746274,
        2746275,
        2737281,
        2737291,
        2737295,
        2737298,
        2737315,
        2737316,
        2737324,
        2737329,
        2737331
    ],


    "NSC": [
        2731576,
        2737274,
        2737276,
        2737280,
        2737291,
        2737295,
        2737299,
        2737302,
        2737325,
        2737293,
        2737271
    ],


    "P&R": [
        3711493,
        5259967,
        2736531,
        2737293,
        2737287,
        2737284,
        2737279,
        2737275,
        2734277,
        5020449,
        2737294,
        2737315,
        2737316,
        2736232,
        2737322
    ],


    "PM": [
        2737363,
        3711486,
        2737264,
        2732612,
        2731576,
        2737274,
        2737276,
        2737280,
        2737291,
        2737312,
        2737311,
        2735848,
        2737308,
        2737306,
        2737305,
        2737303,
        2737361
    ],


    "VM": [
        5992702,
        2737383,
        3711493,
        5259967,
        2736531,
        2734105,
        2737296,
        2737299,
        2737302,
        2737325,
        2737320,
        5928507,
        2737384,
        5260218
    ],


    "WN": [
        2732990,
        2737326,
        2737327,
        2737328,
        2734400,
        2737325,
        2736531,
        2734105,
        2737296,
        2737297,
        2737263,
        2737282,
        2737278,
        7964080,
        2737277,
        2746275,
        2737281,
        2737279,
        2737275,
        2737268,
        2737361,
        2737363
    ],


    "WS": [
        2737363,
        2732612,
        2731576,
        2737274,
        2737276,
        2737280,
        2737282,
        2737278,
        7964080,
        2737277,
        2746275,
        2737281,
        2737291,
        2737295,
        2737298,
        2737315,
        2737316,
        2737324,
        2737329,
        2737331,
        2732990
    ],


    "W": [
        2746274,
        2746275,
        2737281,
        2737279,
        2737275,
        2737268,
        2732612,
        2734680,
        2731576,
        2737274,
        2747832
    ],
}


module.exports.ROUTES = ROUTES;
module.exports.STOPS = STOPS;
module.exports.STOPSBYROUTE = STOPSBYROUTE;