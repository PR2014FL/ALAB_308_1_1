const tripDistance = 1500;
const fuelEfficiency = {
    55: 30, // miles per gallon
    60: 28, // miles per gallon
    75: 23  // miles per gallon
};
const fuelBudget = 175;
const avgCostGallon = 3;
const totalGallons = fuelBudget/avgCostGallon;
const fuelNeeded55 = tripDistance/fuelEfficiency[55];//1500/30 = 50 gallons
const fuelNeeded60 = tripDistance/fuelEfficiency[60];
const fuelNeeded75 = tripDistance/fuelEfficiency[75];

//How many gallons of fuel will you need for the entire trip?
console.log(`How many gallons of fuel will you need for the entire trip if you average at 55MPH? ${fuelNeeded55} gallons.`)
console.log(`How many gallons of fuel will you need for the entire trip if you average at 60MPH? ${fuelNeeded60} gallons.`)
console.log(`How many gallons of fuel will you need for the entire trip if you average at 75MPH? ${fuelNeeded75} gallons.`)

//Will your budget be enough?
console.log(`Your budget of $175 will be enough for the entire trip traveling at 50MPH? ${(fuelNeeded55 * 3) < 175}`);
console.log(`Your budget of $175 will be enough for the entire trip traveling at 60MPH? ${(fuelNeeded60 * 3) < 175}`);
console.log(`Your budget of $175 will be enough for the entire trip traveling at 75MPH? ${(fuelNeeded75 * 3) < 175}`);

//How long will the trip take, in hours?
console.log(`How long will the trip take, in hours at 55MPH? ${tripDistance / 55} hours.`);
console.log(`How long will the trip take, in hours at 60MPH? ${tripDistance / 60} hours.`);
console.log(`How long will the trip take, in hours at 75MPH? ${tripDistance / 75} hours.`);