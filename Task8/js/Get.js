// function triggered when the checkbox is pressed (if selected - green, no - red)
function ProgressIndicator() {
    var chbox1 = document.getElementById('checkEvent1');
    var event1 = document.getElementById('event1');

    if (chbox1.checked) {
        event1.style.backgroundColor = "green";
    }
    else {
        event1.style.backgroundColor = "red";
    }

    var chbox2 = document.getElementById('checkEvent2');
    var event2 = document.getElementById('event2');

    if (chbox2.checked) {
        event2.style.backgroundColor = "green";
    }
    else {
        event2.style.backgroundColor = "red";
    }

    var chbox3 = document.getElementById('checkEvent3');
    var event3 = document.getElementById('event3');

    if (chbox3.checked) {
        event3.style.backgroundColor = "green";
    }
    else {
        event3.style.backgroundColor = "red";
    }
}

window.onload  = function GetEvent(){
    // Get function to read data from selected files
    function httpGet(url, callback) {
        const request = new XMLHttpRequest();

        request.open('get', url, true);
        request.onload = function () {
            callback(request);
        };

        request.send();
    }
    //function httpGet() triggering across 1s 
    function OutputEvent1() {
        httpGet('/events/Anastasia_01.01.2021[1].json', function (request) {
        console.log(request.responseText);
        let html = 'First event: ' + request.responseText; 
        document.getElementById('event1').innerHTML = html;
        let check = document.getElementById('checkEvent1');
        check.style.opacity = 1;
    })
    }
    setTimeout(OutputEvent1, 1000);
    //function httpGet() triggering across 2s 
    function OutputEvent2() {
        httpGet('/events/Anastasia_01.01.2021[2].json', function (request) {
        console.log(request.responseText);
        let html = 'Second event: ' + request.responseText; 
        document.getElementById('event2').innerHTML = html;
        let check = document.getElementById('checkEvent2');
        check.style.opacity = 1;
    })
    }
    setTimeout(OutputEvent2, 2000);
    //function httpGet() triggering across 3s 
    function OutputEvent3() {
        httpGet('/events/Anastasia_01.01.2021[3].json', function (request) {
        console.log(request.responseText);
        let html = 'Third event: ' + request.responseText; 
        document.getElementById('event3').innerHTML = html;
        let check = document.getElementById('checkEvent3');
        check.style.opacity = 1;
    })
    }
    setTimeout(OutputEvent3, 3000);

}
