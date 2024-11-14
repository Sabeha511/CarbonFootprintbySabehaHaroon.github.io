// Constants for emission factors
const electricityEmissionFactor = 0.92;
const vehicleEmissionFactors = { car: 0.21, bus: 0.1, bike: 0, walking: 0 };
const dietEmissionFactors = { omnivore: 2200, vegetarian: 1600, vegan: 1200 };
const landfillEmissionFactor = 0.3;

function calculatePersonalFootprint() {
    const monthly_kWh = parseFloat(document.getElementById("monthly_kWh").value) || 0;
    const weekly_commute_distance = parseFloat(document.getElementById("weekly_commute_distance").value) || 0;
    const vehicle_type = document.getElementById("vehicle_type").value;
    const diet_type = document.getElementById("diet_type").value;
    const monthlyWaste = parseFloat(document.getElementById("monthlyWaste").value) || 0;

    let electricityEmissions = monthly_kWh * electricityEmissionFactor * 12;
    let commuteEmissions = weekly_commute_distance * vehicleEmissionFactors[vehicle_type] * 52;
    let dietEmissions = dietEmissionFactors[diet_type];
    let wasteEmissions = monthlyWaste * landfillEmissionFactor * 12;

    let totalPersonalCarbonFootprint = electricityEmissions + commuteEmissions + dietEmissions + wasteEmissions;
    document.getElementById("personalResult").innerText = `Your annual carbon footprint is ${totalPersonalCarbonFootprint.toFixed(2)} kg CO2e.`;
}

function calculateSchoolFootprint() {
    // Constants
    const electricityEmissionFactorGrid = 0.233; // kg CO2e/kWh
    const solarEmissionFactor = 0; // kg CO2e/kWh for solar energy
    const waterEmissionFactor = 0.0004; // kg CO2e/liter for water treatment
    const wasteEmissionFactor = 0.4; // kg CO2e/kg for waste

    // Electricity usage
    const totalElectricity_kWh = 60000; // kWh per year
    const electricityFromGrid_kWh = totalElectricity_kWh * 0.5; // 50% from grid
    const electricityFromSolar_kWh = totalElectricity_kWh * 0.5; // 50% from solar

    // Calculating CO2 emissions from electricity
    let electricityEmissions = electricityFromGrid_kWh * electricityEmissionFactorGrid;
    let totalElectricityEmissions = electricityEmissions; // Solar emissions are 0

    // Transportation emissions (given value for a sustainable school)
    let transportationEmissions = 5000; // kg CO2e annually

    // Waste management
    const totalWaste_kg = 2500; // kg of waste per year
    let wasteEmissions = totalWaste_kg * wasteEmissionFactor;

    // Water usage
    const totalWater_liters = 500000; // liters per year
    let waterEmissions = totalWater_liters * waterEmissionFactor;

    // Heating and cooling
    const heatingCooling_kWh = 20000; // kWh per year
    let heatingCoolingEmissions = heatingCooling_kWh * electricityEmissionFactorGrid;

    // Total carbon footprint calculation
    let totalSchoolCarbonFootprint = totalElectricityEmissions + transportationEmissions + wasteEmissions + waterEmissions + heatingCoolingEmissions;

    // Displaying the detailed breakdown of the calculation
    document.getElementById("schoolResult").innerHTML = `
        <p><strong>Electricity Usage:</strong></p>
        <p>Total Electricity: 60,000 kWh</p>
        <p>Electricity from Grid: ${electricityFromGrid_kWh} kWh &times; ${electricityEmissionFactorGrid} kg CO2e/kWh = ${electricityEmissions.toFixed(2)} kg CO2e</p>
        <p>Electricity from Solar: ${electricityFromSolar_kWh} kWh &times; 0 kg CO2e/kWh = 0 kg CO2e</p>
        <p>Total Electricity Emissions: ${totalElectricityEmissions.toFixed(2)} kg CO2e</p>
        
        <p><strong>Transportation:</strong> 5,000 kg CO2e annually (eco-friendly initiatives)</p>
        
        <p><strong>Waste Management:</strong></p>
        <p>Total Waste: 2,500 kg &times; ${wasteEmissionFactor} kg CO2e/kg = ${wasteEmissions.toFixed(2)} kg CO2e</p>
        
        <p><strong>Water Usage:</strong></p>
        <p>500,000 liters &times; ${waterEmissionFactor} kg CO2e/liter = ${waterEmissions.toFixed(2)} kg CO2e</p>
        
        <p><strong>Heating and Cooling:</strong></p>
        <p>20,000 kWh &times; ${electricityEmissionFactorGrid} kg CO2e/kWh = ${heatingCoolingEmissions.toFixed(2)} kg CO2e</p>
        
        <p><strong>Total Carbon Footprint:</strong></p>
        <p>Total CO2e = ${totalElectricityEmissions.toFixed(2)} (electricity) + 5,000 (transportation) + ${wasteEmissions.toFixed(2)} (waste) + ${waterEmissions.toFixed(2)} (water) + ${heatingCoolingEmissions.toFixed(2)} (heating/cooling) = ${totalSchoolCarbonFootprint.toFixed(2)} kg CO2e annually</p>
    `;
}

// Daily Challenge
const tasks = ["Go meatless today!", "Use a reusable bag!", "Take a 5-minute shower!", "Switch off unnecessary lights!"];
let dailyTask = tasks[Math.floor(Math.random() * tasks.length)];
document.getElementById("taskDisplay").innerText = dailyTask;

let points = 0;
function completeTask() {
    points += 10;
    document.getElementById("taskPoints").innerText = `Points: ${points}`;
}

// Carbon Quiz
function checkAnswer(answer) {
    const correctAnswer = "36";
    document.getElementById("quizFeedback").innerText = answer === correctAnswer
        ? "Correct! Streaming an hour of HD emits about 36g of CO2."
        : "Try again! Streaming an hour of HD emits about 36g of CO2.";
}

// Interactive Scenario
let dayFootprint = 0;
function updateFootprint(activity, choice) {
    const emissions = { breakfast: { low: 0.1, high: 0.5 }, commute: { low: 0, high: 2 } };
    dayFootprint += emissions[activity][choice];
    document.getElementById("dayFootprint").innerText = `Today's carbon footprint: ${dayFootprint} kg CO2`;
}

// Habits Tracker
let habitPoints = 0;
function logHabit() {
    habitPoints += 5;
    document.getElementById("habitPoints").innerText = `Habit Streak: ${habitPoints}`;
}

// Fun Fact Section
const facts = ["Livestock emits around 14.5% of global greenhouse gases.", "Recycling one aluminum can saves enough energy to run a TV for 3 hours!"];
document.getElementById("factDisplay").innerText = facts[Math.floor(Math.random() * facts.length)];
