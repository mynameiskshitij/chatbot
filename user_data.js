const prompt = require("prompt-sync")();
var name = "",
  number,
  country_code = 0,
  location;
function user_data() {
  while (name == "") {
    name = prompt("Please provide us with your name: ");
  }
  console.log(
    `\nHey ${name} please provide us with the basic details before we get started\n`
  );
  while (
    country_code.length > 4 ||
    country_code.length < 1 ||
    country_code == 0 ||
    country_code != Number(country_code)
  ) {
    country_code = prompt("enter your country code example '91':");
    country_code = Number(country_code);
  }
  console.log(
    "\n Thanks, please provide us with your loction using coordinates (lat,lon) or your city name"
  );
  var choice = 0;
  while (choice == 0 || choice > 2 || choice < 1) {
    console.log("press 1 for coords and 2 for distict name");
    choice = Number(prompt(""));
  }
  const loc = require("./location_choice");
  loc(choice);
}

module.exports = user_data;
