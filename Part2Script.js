const tripDistance = 1500;
const fuelEfficiency = {
    55: 30, // miles per gallon
    60: 28, // miles per gallon
    75: 23  // miles per gallon
};
const fuelBudget = 175;
const avgCostGallon = 3;
const totalGallons = fuelBudget/avgCostGallon;
const fuelNeeded55 = tripDistance/fuelEfficiency[55];
const fuelNeeded60 = tripDistance/fuelEfficiency[60];
const fuelNeeded75 = tripDistance/fuelEfficiency[75];