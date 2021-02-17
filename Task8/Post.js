// connection fs module
var fs = require('fs');
// object import
const { events } = require('./js/Events.js');

// Function that should be triggered when events change :)

// function ChangeEvent1() {

//     events[0].date = document.getElementsByName('dateEvent1').value;
//     events[0].time = document.getElementsByName('timeEvent1').value;
//     events[0].name = document.getElementsByName('nameEvent1').value;
//     events[0].priority = document.getElementsByName('priorityEvent1').value;
//     events[0].note = document.getElementsByName('noteEvent1').value;

// writing json data to a file
    fs.writeFile ("./events/Anastasia_01.01.2021[1].json", JSON.stringify(events[0]), function(err) {
        if (err) throw err;
        console.log('complete');
        console.log(JSON.stringify(events[0]));
    }
);
// }