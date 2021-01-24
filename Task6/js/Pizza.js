'use strict';
// pizza object class
class Pizza{
// pizza object constructor
    constructor (typeDough, toppings, sauces, calorieContent, price, finalyCoast){
        this.typeDough = typeDough;
        this.toppings = toppings;
        this.sauces = sauces;
        this.calorieContent = calorieContent;
        this.price = price;
        this.finalyCoast = finalyCoast;
    }
// method to convert an array of objects to a string
    toString() {
        var idx = pizzaArray.indexOf(this);
        return `\n Pizza №${idx} 
        dough: "${this.typeDough}", 
        toppings: ${this.toppings}, 
        sauces: ${this.sauces},
        calories: ${this.calorieContent},
        price: ${this.price},
        finaly price: ${this.finalyCoast}`;
    }
}


