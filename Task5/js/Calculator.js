// variable declaration
var isFloatNum = true;
var isPriority = true;
// creating a storage array
var calculatorDate = [];
// data entry function
function insert(num){
    if(document.getElementById('Integer').checked) {
        isFloatNum = false;
    }
    else 
    {
        isFloatNum = true;
    }

    if(document.getElementById('withoutPr').checked) {
        isPriority = false;
    }
    else 
    {
        isPriority = true;
    }

    if (num == '.' && isFloatNum == true){
        document.form.textview.value = 
        document.form.textview.value + num;
    }
    else if(num == '.' && isFloatNum == false){
        document.form.textview.value = 
        document.form.textview.value;
    }
    else if((num == '(' || num == ')') && isPriority == true){
        document.form.textview.value = 
        document.form.textview.value + num;
        }
    else if((num == '(' || num == ')') && isPriority == false){
        document.form.textview.value = 
        document.form.textview.value;
        }
    else{
        document.form.textview.value = 
        document.form.textview.value + num;
    }
}
// shape cleaning function
function clean(){
    document.form.textview.value = '';
}
// function to delete one form element
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
// function for calculating arithmetic expressions
function equal(){
    var exp = document.form.textview.value;
    document.form.textview.value = document.form.textview.value +  '=' + eval(exp);
}
// function for adding data to an array and outputting it
function OutputDate() {
    var newArray = document.getElementById("calculation").value;
     // adding data to an array from a form
    calculatorDate.push(newArray);
    document.getElementById("calculation").value = "";
    alert(calculatorDate);
}