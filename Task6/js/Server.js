// serialization function in JSON and sending data to the server using the POST method
window.onload = function(){
    var xhr = new XMLHttpRequest();

    xhr.open("POST", 'Url', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.send(JSON.stringify(pizzaArray, false, 4));
}