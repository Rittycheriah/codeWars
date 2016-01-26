function getVillainName(birthday){
  var month = birthday.getMonth();
  var lastDigitOfDate = birthday.getDate().toString().split('').pop();
  var villainName1 = getMonth(month);
  var villainName2 = getDate(lastDigitOfDate);
  
  return villainName1 + villainName2;
        
}

function getMonth(month) {
   var villainName; 
   
   if (month === 0){
      villainName = "The Evil";
   } else if (month === 1) {
      villainName = "The Vile";
   } else if (month === 2) {
     villainName = "The Cruel";
   } else if (month === 3) {
     villainName = "The Trashy";
   } else if (month === 4) {
      villainName = "The Despicable";   
   } else if (month === 5) {
      villainName = "The Embarrassing";
   } else if (month === 6) {
      villainName = "The Disreputable";
   } else if (month === 7) {
      villainName = "The Atrocious";   
   } else if (month === 8) {
      villainName = "The Twirling";
   } else if (month === 9) {
      villainName = "The Orange";
   } else if (month === 10) {
      villainName = "The Terrifying";
   } else if (month === 11) {
      villainName = "The Awkward";
   }
   
   return villainName;
}

function getDate(lastDigitOfDate){
   var villainName;
   
   if (lastDigitOfDate === "0") {
     return villainName = " Mustache";
   } else if (lastDigitOfDate === "1") {
     return villainName = " Pickle";
   } else if (lastDigitOfDate === "2") {
     return villainName = " Hood Ornament";
   } else if (lastDigitOfDate === "3") {
     return villainName = " Raisin";
   } else if (lastDigitOfDate === "4") {
     return villainName = " Recycling Bin";
   } else if (lastDigitOfDate === "5") {
     return villainName = " Potato";
   } else if (lastDigitOfDate === "6") {
     return villainName = " Tomato";   
   } else if (lastDigitOfDate === "7") {
     return villainName = " House Cat";
   } else if (lastDigitOfDate === "8") {
     return villainName = " Teaspoon";
   } else if (lastDigitOfDate === "9") {
     return villainName = " Laundry Basket";
   }
   
   return villainName;
}
