"use strict";
//  ----------------------------------------- TypeScript Enums -------------------------------------
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
Object.defineProperty(exports, "__esModule", { value: true });
var currentDirection = 0 /* cardinalDirections.North */;
var anotherDirection = 1 /* cardinalDirections.East */;
// It will log 0 
console.log(currentDirection);
// it will log 1
console.log(anotherDirection);
// ------ Initialized --------
// You can set the value of the first numeric enum and have it auto increment from that:
var cardinalDirections1;
(function (cardinalDirections1) {
    cardinalDirections1[cardinalDirections1["North"] = 1] = "North";
    cardinalDirections1[cardinalDirections1["East"] = 2] = "East";
    cardinalDirections1[cardinalDirections1["South"] = 3] = "South";
    cardinalDirections1[cardinalDirections1["West"] = 4] = "West";
})(cardinalDirections1 || (cardinalDirections1 = {}));
// It will log 1
console.log(cardinalDirections1.North);
// It will log 4
console.log(cardinalDirections1.West);
// It will log 404
console.log(404 /* statusCode.NotFound */);
// It will log 202
console.log(202 /* statusCode.Accepted */);
// It will log North
console.log("North" /* cardinalDirections2.North */);
// it will log South
console.log("South" /* cardinalDirections2.South */);
console.log("South" /* cardinalDirections3.South */);
