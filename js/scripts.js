$(document).ready(function(){
  event.preventDefault();

const flavorArray = ["Vanilla", "Chocolate", "Strawberry", "Salted Caramel", "Cookies & Cream"];

flavorArray.forEach(function(element){
  $("#flavors").append(element + "is my favorite flavor of ice cream.")
})

})