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
    const schoolElectricityCost = 1331291;
    const electricityRate = 15;
    let schoolElectricity_kWh = schoolElectricityCost / electricityRate;
    let schoolElectricityEmissions = schoolElectricity_kWh * electricityEmissionFactor;

    const schoolFuelCost = 700000;
    const fuelRate = 272;
    let schoolFuel_liters = schoolFuelCost / fuelRate;
    let schoolFuelEmissions = schoolFuel_liters * 2.68;

    let totalSchoolCarbonFootprint = schoolElectricityEmissions + schoolFuelEmissions;
    document.getElementById("schoolResult").innerText = `The school's annual carbon footprint is ${totalSchoolCarbonFootprint.toFixed(2)} kg CO2e.`;
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
