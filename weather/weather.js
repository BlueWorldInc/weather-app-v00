const request = require("request");
var os = require("os");
const convertToC = (temp) => {
    return Math.round(((temp-32)*5/9)*10) / 10
}

let getWeather = (lat,lng,callback) => {
    request ({
    url: "https://api.darksky.net/forecast/a51af8ca881f99037dc650c8c5478d16/"+lat+",%20"+lng,
    json: true },
         (error, response, body) => {
        if (error) {
            callback("Unable to connect to Forecast.io server.");
        } else if (response.statusCode === 200) {
            callback(undefined,  {
                temperature: convertToC(body.currently.temperature),
                temperatureRecentie: convertToC(body.currently.apparentTemperature) })
        } else {
            callback ("Unable to fetch weather!");
         }
    }); 
}

module.exports = {
    getWeather: getWeather
}