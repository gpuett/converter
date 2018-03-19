var gallons = parseInt(prompt("How many gallons?"));

var liters = function(gallons) { return gallons * 3.785 };

alert(liters(gallons) + " liters")
