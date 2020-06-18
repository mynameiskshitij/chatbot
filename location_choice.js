const prompt = require("prompt-sync")();
function choice(no) {
  var lon, lat;
  var city;
  if (no == 1) {
    console.log("Please enter your latitude and longitute");
    lat = Number(prompt(""));
    lon = Number(prompt(""));
  } else {
    console.log("Please enter your City name");
    city = prompt("");
  }
}
module.exports = choice;
