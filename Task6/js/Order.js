var totalCoast;
var totalCalories;
var finalyCoast;

var typeDough;
var toppings = [];
var sauces = [];
// array of pizza objects
var pizzaArray = [];

window.onclick = function onclickFunction() {
// item selection + calorie counting and price
    if(document.getElementById('thin').checked)
    {
        totalCoast = thin.price;
        totalCalories = thin.calories; 
        typeDough =  thin.name;
    }
    else if(document.getElementById('thick').checked)
    {
        totalCoast = thick.price;  
        totalCalories = thick.calories;
        typeDough =  thick.name;
    }
    else if(document.getElementById('puff').checked)
    {
        totalCoast = puff.price;
        totalCalories = puff.calories;
        typeDough =  puff.name;  
    }
    else if(document.getElementById('italian').checked)
    {
        totalCoast = italian.price; 
        totalCalories = italian.calories;
        typeDough =  italian.name;     
    }
    else if(document.getElementById('calzone').checked)
    {
        totalCoast = calzone.price;  
        totalCalories = calzone.calories;  
        typeDough =  calzone.name;      
    }
// Toppings
    if(document.getElementById('mozzarella').checked)
    {
        totalCoast += mozzarella.price;
        totalCalories += mozzarella.calories; 
        toppings.push(mozzarella.name);  
    }
    if(document.getElementById('parmesan').checked)
    {
        totalCoast += parmesan.price;  
        totalCalories += parmesan.calories; 
        toppings.push(parmesan.name);   
    }
    if(document.getElementById('peperoni').checked)
    {
        totalCoast += peperoni.price;  
        totalCalories += peperoni.calories;  
        toppings.push(peperoni.name);   
    }
    if(document.getElementById('ham').checked)
    {
        totalCoast += ham.price;  
        totalCalories += ham.calories; 
        toppings.push(ham.name);  
    }
    if(document.getElementById('chicken').checked)
    {
        totalCoast += chicken.price;  
        totalCalories += chicken.calories;
        toppings.push(chicken.name); 
    }
    if(document.getElementById('bacon').checked)
    {
        totalCoast += bacon.price;  
        totalCalories += bacon.calories;
        toppings.push(bacon.name); 
    }
    if(document.getElementById('champignon').checked)
    {
        totalCoast += champignon.price; 
        totalCalories += champignon.calories; 
        toppings.push(champignon.name);
    }
    if(document.getElementById('tomatoes').checked)
    {
        totalCoast += tomatoes.price; 
        totalCalories += tomatoes.calories;
        toppings.push(tomatoes.name);  
    }
    if(document.getElementById('pineapple').checked)
    {
        totalCoast += pineapple.price; 
        totalCalories += pineapple.calories; 
        toppings.push(pineapple.name);    
    }
    if(document.getElementById('onion').checked)
    {
        totalCoast += onion.price;  
        totalCalories += onion.calories; 
        toppings.push(onion.name);  
    }
    if(document.getElementById('seafood').checked)
    {
        totalCoast += seafood.price;  
        totalCalories += seafood.calories;   
        toppings.push(seafood.name);  
    }
    if(document.getElementById('pepper').checked)
    {
        totalCoast += pepper.price;  
        totalCalories += pepper.calories; 
        toppings.push(pepper.name);    
    }
// Souses
    if(document.getElementById('ketchup').checked)
    {
        totalCoast += ketchup.price; 
        totalCalories += ketchup.calories;  
        sauces.push(ketchup.name);     
    }
    if(document.getElementById('bbq').checked)
    {
        totalCoast += bbq.price;  
        totalCalories += bbq.calories;   
        sauces.push(bbq.name);   
    }
    if(document.getElementById('cheeseSauce').checked)
    {
        totalCoast += cheeseSauce.price;  
        totalCalories += cheeseSauce.calories;  
        sauces.push(cheeseSauce.name);    
    }
    if(document.getElementById('mushroomSauce').checked)
    {
        totalCoast += mushroomSauce.price;  
        totalCalories += mushroomSauce.calories;  
        sauces.push(mushroomSauce.name);  
    }
    if(document.getElementById('sweetAndSourSauce').checked)
    {
        totalCoast += sweetAndSourSauce.price;  
        totalCalories += sweetAndSourSauce.calories;  
        sauces.push(sweetAndSourSauce.name);  
    }
    if(document.getElementById('oysterSauce').checked)
    {
        totalCoast += oysterSauce.price;  
        totalCalories += oysterSauce.calories;
        sauces.push(oysterSauce.name);  
    }
// Price calculation including taxes (rounding to the nearest hundredth)
    if(totalCoast <= 20){
        finalyCoast = Math.round(totalCoast * 100 * 1.2) / 100;
    }
    else if( 20 < totalCoast <= 25){
        finalyCoast = Math.round(totalCoast * 100 * 1.15) / 100;
    }
    else if(totalCoast > 25){
        finalyCoast = Math.round(totalCoast * 100 * 1.1) / 100;
    }  
// data output to HTML
    document.getElementById('coastTotal').innerHTML = totalCoast + ' $';
    document.getElementById('coastFinaly').innerHTML = finalyCoast + ' $';
    document.getElementById('coastCalories').innerHTML = totalCalories;

}