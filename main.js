var userPurse = Number(prompt("Qancha pulingiz bor"))
var ticketCost = 500;
var hotelCost = 250;
var musemCost = 120;




var currencyUSD = 11600;
var currencyEURO = 13000



var ticketCostUZS = ticketCost * currencyUSD;
var hotelCostUZS = hotelCost * currencyUSD;
var musemCostUZS = musemCost * currencyEURO;

var totalCost = ticketCostUZS + hotelCostUZS + musemCostUZS


if(totalCost < userPurse) {
  console.log("Go Alish")
} else {
 console.log('Ishla, hali borakan')
}