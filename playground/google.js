

const request = require("request");


   // const encodedAddress = encodeURIComponent(address);
request({
    url: "https://www.google.com/search?client=firefox-b-d&q=cmd+console+how+to+see+folder",
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body));
    }
)

