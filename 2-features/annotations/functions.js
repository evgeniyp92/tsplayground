"use strict";
var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) { return a + b; };
function divide(a, b) {
    return a / b;
}
var multiply = function (a, b) {
    return a * b;
};
var logger = function (message) {
    console.log(message);
};
var throwError = function (message) {
    throw new Error(message);
};
/* ----------------------------------- ** ----------------------------------- */
var todaysWeather = {
    date: new Date(),
    weather: "sunny",
};
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
