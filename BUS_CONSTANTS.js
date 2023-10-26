// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: magic;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-brown; icon-glyph: magic;
const ROUTES = {
    "BH": 4915, //bulldog housing
    "CL": 4918, //central loop
    "CS": 5419, //chicopee shuttle
    "CC": 5296, //cross campus connector
    "EC": 4921, //east campus
    "GS": 4917, //green house shuttle
    "HS": 2611, //health science
    "INTERSESSION": 5675, //?
    "M": 2607, //millidge ave
    "NC": 2616, //night campus
    "NSC": 4919, //north south connector
    "P&R": 4916, //park and ride
    "PM": 2615, //prince millidge
    "VM": 2613, //vet med
    "WEEKENDER": 2620, //weekender
    "WS": 20233, //weekender south ?maybe 
    "WN": 20056, //weekender north
    "W": 4913 //west campus
}

const STOPS = {
    "2732990" : "Building S",
    "2737326" : "Building Q",
    "2737327" : "Building P",
    "2737328" : "Rogers Road",
    "2734400" : "Building G",
    "2737301" : "Driftmier Engineering Center (to Carlton St.)",
    "2737297" : "Science Learning Center",
    "2737263" : "Snelling Dining Commons",
    "2737279" : "Physics (north)",
    "2737275" : "Memorial Hall",
    "2747832" : "Correll Hall ",
    "7964080" : "Black-Diallo-MIller Hall",
    "2737277" : "Creswell Hall (Cloverhurst Ave.)",
    "2746275" : "Oglethorpe House (East)",
    "2737281" : "Rutherford Hall (south)",
    "2737291" : "Myers Quad",
    "2737295" : "Stegeman Coliseum",
    "2737298" : "Aderhold Hall (to East Campus Rd.)",
    "2737315" : "Joe Frank Harris Commons",
    "2737316" : "University Health Center",
    "2737324" : "Building H",
    "2737329" : "Brandon Oaks",
    "2737331" : "Jamestown Apartments",
    "2731576" : "Main Library",
    "2737294" : "Tucker Hall (southbound)",
    "2736531" : "East Campus Village",
    "2734105" : "Aderhold Hall (to Plant Science)",
    "2737296" : "Plant Sciences",
    "2737268" : "Gilbert Hall",
    "2732612" : "The Arch",
    "6781620" : "Chicopee",
    "6781621" : "School of Social Work",
    "2737293" : "Tucker Hall (northbound)",
    "2737287" : "Food Science",
    "2737284" : "Chemistry",
    "2746274" : "Russell Hall (Linnentown Lane.)",
    "2737285" : "Conner Hall",
    "2737286" : "STEM Research",
    "2736232" : "Intramural Fields Deck",
    "2737322" : "Lot E01",
    "2737274" : "Psychology-Journalism",
    "2737276" : "Tate Center",
    "2737280" : "Physics (south)",
    "2737302" : "Driftmier Engineering Center (to College Station)",
    "2737325" : "Building F",
    "7965358" : "Soccer Softball",
    "2737381" : "UGA Greenhouses",
    "9015811" : "Engineering Research and Education Center",
    "2751905" : "Botanical Gardens",
    "2737379" : "UGA Campus Transit",
    "2737334" : "CCRC",
    "2737337" : "UGA Automotive Center",
    "2737363" : "Health Sciences Campus",
    "3711486" : "Lucy Cobb",
    "2737304" : "Clarke Central High School",
    "2737307" : "Springdale Street",
    "2737309" : "Oakland Ave (to Five Points)",
    "2737310" : "Lumpkin St @ Rutherford St (to campus)",
    "2737361" : "Nacoochee Avenue",
    "2734680" : "ACC Multi-Modal Center",
    "2737312" : "Presbyterian Center",
    "2737311" : "Lumpkin St @ Rutherford St (to Five Points)",
    "2735848" : "Oakland Avenue (Tri-Delta)",
    "2737308" : "Rutherford Street",
    "2737306" : "Peabody Street",
    "2737305" : "Henderson Avenue",
    "2737303" : "Waddell Street",
    "2737264" : "Broad Street Studios",
    "2737282" : "Rutherford Hall (north)",
    "2737278" : "Creswell Hall (Finley St.)",
    "2737299" : "Coverdell",
    "2737271" : "Learning & Development",
    "3711493" : "Park and Ride",
    "5259967" : "Ag Tech to Campus",
    "2734277" : "Human Resources",
    "5020449" : "Spring St.",
    "5992702" : "Veterinary Medical Center - Platform",
    "2737383" : "Poultry Diagnostic &amp; Research Center to Campus",
    "2737320" : "Intramural Fields (College Station Rd.)",
    "5928507" : "Park and Ride Outbound (to VMC)",
    "2737384" : "River's Crossing",
    "5260218" : "Poultry Diagnostic & Research Center to Vet Med"
    }



module.exports.ROUTES = ROUTES;
module.exports.STOPS = STOPS;