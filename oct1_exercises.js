// 1. The Fortune Teller
// Store the following into variables: number of children,
// partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will
// be a X in Y, and married to Z with N kids."
var numOfChildren = 3;
var partnerName = "Kristal";
var geoLocation = "San Francisco";
var jobTitle = "Software Engineer";
//console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numOfChildren + " kids.");

//with a function
var fortuneTeller = function(numOfChildren, partnerName, geoLocation, jobTitle){
  console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numOfChildren + " kids.");
}
//fortuneTeller(2, "Kristal Delacruz", "New York", "Front-End Engineer");


// 2. Age Calculator
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: "They are either
// NN or NN", substituting the values.
var currentYear = 2015;
var birthYear = 1989;
var age1 = currentYear-birthYear;
var age2 = age1 - 1;
//console.log("They are either " + age1 + " or " +age2);
//function way
function calculateAge(currentYear, birthYear){
  var age1 = currentYear-birthYear;
  var age2 = age1 - 1;
  console.log("They are either " + age2 + " or " + age1);
}
//calculateAge(2015, 1974);


// 3. Calculate the properties of a circle with the definitions of
// radius, circumference, and area.
// Store a radius into a variable.
// Calculate the circumference based on the radius,
// and output "The circumference is NN".
// Calculate the area based on the radius, and output
// "The area is NN".
var pi = 3.14;
var radius = 10;
var circumference = Math.floor(2*radius*pi);
var area = Math.floor(pi*(radius*radius));
// console.log("The circumference is " + circumference);
// console.log('The area is ' + area);
//object way
function Circle(radius){
  this.radius = radius;
  this.pi = 3.14;
  this.diameter = radius*2;
}
Circle.prototype.circumference = function(diameter, pi){
  var result = Math.floor(diameter*pi);
  console.log("The circumference is " + result);
}
Circle.prototype.area = function(radius, pi){
  var output = Math.floor(pi*(radius*radius));
  console.log("The area is " + output);
}
var newCircle = new Circle(20);
//newCircle.circumference(newCircle.diameter, newCircle.pi);
//newCircle.area(newCircle.radius, newCircle.pi);

// 4. Make a convertor based (look up conversion)
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
var celsius = 30;
var fahrenheit = celsius*(1.8) + 32;
console.log(celsius + "°C is "+fahrenheit+"°F");





















//
