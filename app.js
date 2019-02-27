const yargs = require("yargs");

const geocode = require ('./geocode/geocode.js');
const weather = require ('./weather/weather.js');


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "Address to fetch weather for",
            string: true
        }
    })
    .help().alias("help","h").argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) =>
                   {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(`Il fait actuellement ${weatherResults.temperature} à ${results.address}. La température recentie est de ${weatherResults.temperatureRecentie}.`);
    }
});
    }
});


