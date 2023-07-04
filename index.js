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
	convertMass(userInput.value)
})

function convertLength(num) {
	// Meters = Feet
	let meter = 3.281 //feet per meter
	let metersToFeet = meter * num
	let baseString1 = `${num} meters = ${metersToFeet.toFixed(3)} feet`
	// Feet = Meters
	let feet = 0.3048 //meters per foot
	let feetToMeters = feet * 20
	let baseString2 = `${num} feet = ${feetToMeters.toFixed(3)} meters`
	// Send data to render function to display results on the page
	render(baseString1, baseString2)
}
function convertMass(num) {}
function convertVolume(num) {}

function render(string1, string2) {
	console.log(string1)
	console.log(string2)
}
