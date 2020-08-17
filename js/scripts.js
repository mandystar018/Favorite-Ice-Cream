$(document).ready(function(){
  // event.preventDefault();

const flavorArray = ["Chocolate with Peanut Butter", "Salted Caramel", "Cookies & Cream"];

flavorArray.forEach(function(element){
  // $("#flavors").append(element + "are my favorite flavors of ice cream.")
  $("#flavors").append(element + ", ")
})

})