// https://learn.co/tracks/full-stack-web-development-v8/module-14-front-end-web-programming-in-javascript/section-12-oo-javascript-prototypal-inheritance/oojs-constructor-functions-lab
// Scooter with year, color, and model properties
function Scooter(year, color, model){
  this.year = year;
  this.color = color;
  this.model = model
}

// Driver with name, age, and experience properties
function Driver(name, age, experience){
  this.name = name;
  this.age = age;
  this.experience = experience
}

// PickupLocation with address and city properties
function PickupLocation(address, city){
  this.address = address;
  this.city = city
}
