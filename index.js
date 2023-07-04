//round the numbers down to 3 decimal points
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let userInput = document.getElementById('input-box')
let convertBtn = document.getElementById('convert-btn')
let length = document.getElementById('length')
let volume = document.getElementById('volume')
let mass = document.getElementById('mass')

// add event listener to button
convertBtn.addEventListener('click', function () {
	convertLength(userInput.value)
	convertVolume(userInput.value)
	convertMass(userInput.value)
})

function convertLength(num) {
	// Feet per 1 meter
	let feetPerMeter = 3.281
	let totalFeet = feetPerMeter * num
	let baseString = `${num} meters = ${totalFeet.toFixed(3)} feet`
	// Meters per 1 foot
	let metersPerFoot = 0.3048 //meters per foot
	let totalMeters = metersPerFoot * 20
	baseString += ` | ${num} feet = ${totalMeters.toFixed(3)} meters`
	// render string to the DOM
	length.textContent = baseString
}
function convertVolume(num) {
	// Gallons per 1 liter
	let gallonsPerLiter = 0.264 //gallons per liter
	let totalGallons = gallonsPerLiter * num
	let baseString = `${num} liters = ${totalGallons.toFixed(3)} gallons`
	// Liters per 1 gallon
	let litersPerGallon = 3.785
	let totalLiters = litersPerGallon * num
	baseString += ` | ${num} gallons = ${totalLiters.toFixed(3)} liters`
	// render string to the DOM
	volume.textContent = baseString
}
function convertMass(num) {
	// Pounds per 1 kilo
	let poundsPerKilo = 2.204
	let totalPounds = poundsPerKilo * num
	let baseString = `${num} kilos = ${totalPounds.toFixed(3)} pounds`
	// Kilos per 1 pound
	let kilosPerPound = 0.453
	let totalKilos = num * kilosPerPound
	baseString += ` | ${num} pounds = ${totalKilos.toFixed(3)} kilos`
	// render string to the DOM
	mass.textContent = baseString
}
