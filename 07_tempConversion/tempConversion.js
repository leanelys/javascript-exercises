const convertToCelsius = function(fahrenheit) {

  // °C = (°F - 32) × 5/9
  let result = (fahrenheit - 32) * (5 / 9);
  result = Math.round(result * 10) / 10;
  return result;

};

const convertToFahrenheit = function(celsius) {

  // °F = (9/5) °C + 32
  let result = (celsius * (9 / 5)) + 32;
  result = Math.round(result * 10) / 10;
  return result;

};

// npm test tempConversion.spec.js

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
