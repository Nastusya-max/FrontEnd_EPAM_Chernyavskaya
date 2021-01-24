// a function to add a new pizza to an array and output data
window.onload = function(){
    var add = document.getElementById('order');
    add.onclick = function() {
        pizzaArray.push(new Pizza(typeDough, toppings, sauces, totalCalories, totalCoast, finalyCoast));
        alert(pizzaArray);
        // cleaning fields
        typeDough = '';
        toppings = [];
        sauces = [];
        totalCoast = 0;
        totalCalories = 0;
    }
}