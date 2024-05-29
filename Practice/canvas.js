var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// c.fillRect(x , y , width , height);
// add color
// c.fillStyle='00000'
c.fillStyle = 'red'
c.fillRect(100 , 100 , 100 , 100);
c.fillStyle = 'blue'
c.fillRect(200 , 200 , 50 , 50);
c.fillStyle = 'aqua'
c.fillRect(250 , 250 , 100 , 100);

// LInes
//this starts the line drawing

// c.beginPath();

// this is for starting and ending the line

// c.moveTo(x,y);
// c.lineTo(x,y);

// color
// c.strokeStyle = "000000"

// shows the line
// c.stroke();

c.beginPath();
c.moveTo(600,600);
c.lineTo(300,300);
c.lineTo(550,47);
c.strokeStyle = 'red'
c.stroke();

// arcs / circles

//  c.arc(x: Int , y: Int , r: Int , startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false));
// to draw use the same stroke like above

// c.beginPath();
// c.arc(x, y, 30, 0,  Math.PI * 2, false);
// c.strokeStyle='green'
// c.stroke();

// use for loop for many circles etc

for (let i = 0; i < 20; i++) {

    var x = Math.random()* window.innerWidth;
    var y = Math.random()* window.innerHeight;

    c.beginPath();
    c.arc(x, y, 30, 0,  Math.PI * 2, false);
    c.strokeStyle='green'
    c.stroke();
}
