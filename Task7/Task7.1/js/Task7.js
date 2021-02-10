function FirstTask() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(350,350,100,0,Math.PI*2,true);
    ctx.fillStyle = "#87CEEB";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(350,350,100,0,Math.PI*2,true);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#4682B4";
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(330, 400, 17, 45, -1.35 , 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(290, 320, 12, 20,  4.7 , 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(285, 320, 6, 10,  0 , 0, 2 * Math.PI);
    ctx.fillStyle = "#4682B4";
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(370, 320, 12, 20,  4.7 , 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(365, 320, 6, 10,  0 , 0, 2 * Math.PI);
    ctx.fillStyle = "#4682B4";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(340, 365);
    ctx.lineTo(315, 365);
    ctx.lineTo(330, 320);
    ctx.strokeStyle = "#4682B4";
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(350, 260, 30, 120,  4.7 , 0, 2 * Math.PI);
    ctx.fillStyle = "#008080";
    ctx.fill();
    
    ctx.beginPath();
    ctx.ellipse(350, 260, 30, 120,  4.7 , 0, 2 * Math.PI);
    ctx.strokeStyle = "#696969";
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(350, 240, 20, 65,  4.7 , 0, 2 * Math.PI);
    ctx.fillStyle = "#008080";
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(350, 240, 20, 65,  4.7 , 0, 2 * Math.PI);
    ctx.strokeStyle = "#696969";
    ctx.stroke();

    ctx.fillRect(285,120,131,120);

    ctx.beginPath();
    ctx.ellipse(350, 120, 20, 65,  4.7 , 0, 2 * Math.PI);
    ctx.fillStyle = "#008080";
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(350, 120, 20, 65,  4.7 , 0, 2 * Math.PI);
    ctx.strokeStyle = "#696969";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(285, 120);
    ctx.lineTo(285, 240);
    ctx.strokeStyle = "#696969";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(415, 120);
    ctx.lineTo(415, 240);
    ctx.strokeStyle = "#696969";
    ctx.stroke();
}

function SecondTask() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(220,350,60,0,Math.PI*2,true);
    ctx.fillStyle = "#87CEEB";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(220,350,60,0,Math.PI*2,true);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#4682B4";
    ctx.stroke();
    // left
    ctx.beginPath();
    ctx.arc(470,350,60,0,Math.PI*2,true);
    ctx.fillStyle = "#87CEEB";
    ctx.fill();
    // right
    ctx.beginPath();
    ctx.arc(470,350,60,0,Math.PI*2,true);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#4682B4";
    ctx.stroke();
    // little
    ctx.beginPath();
    ctx.arc(330,350,20,0,Math.PI*2,true);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#4682B4";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(220, 350);
    ctx.lineTo(330, 350);

    ctx.moveTo(330, 350);
    ctx.lineTo(280, 250);

    ctx.moveTo(250, 250);
    ctx.lineTo(310, 250);

    ctx.moveTo(470, 350);
    ctx.lineTo(440, 250);

    ctx.moveTo(410, 250);
    ctx.lineTo(440, 250);

    ctx.moveTo(460, 230);
    ctx.lineTo(440, 250);

    ctx.moveTo(330, 350);
    ctx.lineTo(448, 280);

    ctx.moveTo(448, 280);
    ctx.lineTo(294, 280);

    ctx.moveTo(294, 280);
    ctx.lineTo(220, 350);

    ctx.moveTo(294, 280);
    ctx.lineTo(220, 350);

    ctx.moveTo(364, 380);
    ctx.lineTo(345, 362);

    ctx.moveTo(315, 337);
    ctx.lineTo(295, 320);

    ctx.strokeStyle = "#4682B4";
    ctx.stroke();
}

function ThirdTask() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#CD5C5C";
    ctx.fillRect(215,220,300,250);

    ctx.moveTo(365,20);
    ctx.lineTo(165,220);
    ctx.lineTo(565,220);
    ctx.closePath();

    // fill
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(215,220,300,250);

    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(235,250,110,80);
    ctx.fillRect(385,250,110,80);
    ctx.fillRect(385,350,110,80);

    ctx.beginPath();
    ctx.moveTo(220, 290);
    ctx.lineTo(350, 290);

    ctx.moveTo(385, 290);
    ctx.lineTo(500, 290);

    ctx.moveTo(385, 390);
    ctx.lineTo(500, 390);

    ctx.moveTo(290, 250);
    ctx.lineTo(290, 340);

    ctx.moveTo(440, 250);
    ctx.lineTo(440, 340);

    ctx.moveTo(440, 350);
    ctx.lineTo(440, 440);

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#CD5C5C";
    ctx.stroke();

    // roof
    ctx.moveTo(365,20);
    ctx.lineTo(165,220);
    ctx.lineTo(565,220);
    ctx.closePath();

    // Fill
    ctx.fillStyle = "#CD5C5C";
    ctx.fill();
    //trumpet
    ctx.beginPath();
    ctx.fillStyle = "#CD5C5C";
    ctx.fillRect(435,50,50,100);
    //circuit 
    ctx.beginPath();
    ctx.moveTo(435, 50);
    ctx.lineTo(435, 150);

    ctx.moveTo(485, 50);
    ctx.lineTo(485, 150);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(460, 50, 10, 25,  4.7 , 0, 2 * Math.PI);
    ctx.fillStyle = "#CD5C5C";
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(460, 50, 10, 25,  4.7 , 0, 2 * Math.PI);
    ctx.stroke();
    //door
    ctx.beginPath();
    ctx.ellipse(290, 380, 25, 45,  4.7 , 17.3, Math.PI/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(245, 380);
    ctx.lineTo(245, 470);

    ctx.moveTo(335, 380);
    ctx.lineTo(335, 470);

    ctx.moveTo(290, 355);
    ctx.lineTo(290, 470);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    //door handles
    ctx.beginPath();
    ctx.arc(275,420,6,0,Math.PI*2,true);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(305,420,6,0,Math.PI*2,true);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}

function clearCanvas() {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

