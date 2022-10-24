/*
 * Author:Alex Jones, Jacquelyn Meek, Tristan Van Dixon
 * Created:   18.10.2023
 * License: Public Domain
 */

 // Define Variebles
 myTransport = ["Car", "Bike", "Bus","Scooter"];

 myMainRide = {
   make: "Ford",
   model: "Escape",
   color: "White",
   year: "2017",
}

// Output
document.writeln("My Use to Moves: ", myTransport, "</br>");
document.writeln("My Car Mobile Wheels: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
