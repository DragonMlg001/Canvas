var canvas = document.querySelector("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext("2d");

//  create the circle
//   c.beginPath();
//   c.arc(x, y, r, 0, Math.PI * 2, false);
//   c.strokeStyle = "black";
//   c.stroke();
// this is for moving the circle
// x += 1;



function Circle(x, y,dx,dy,r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle='lightgreen'
    c.fill();
  };
  this.update = function () {
    // using if statement for bounce effect left to right

    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    // for moving back and forth
    this.x += this.dx;
    // using if statement for bounce effect top to bottom
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    // for moving up and down
    this.y += this.dy;
// calling the draw function
this.draw();

  };
}



const circleArray = [];

// for loop for multiple circles
for (let i = 0; i < 100; i++) {

// for the starting position
// for the circle radius
var r = 30;
var x = Math.random() * (innerWidth - r *2)+r;
var y = Math.random() * (innerHeight - r *2)+r;
// for moving in positive or negative
var dx = (Math.random() - 0.5);
var dy = (Math.random() - 0.5);

// calling the above function
// Circle(x,y,dx,dy,r)
// var circle = new Circle(200, 200,3,3,30);

circleArray.push(new Circle(x,y,dx,dy,r));

};


// animation
animate = () => {
  requestAnimationFrame(animate);
  
  // this is to clear the old circles
  // c.clearRect(x,y,width,height);

  c.clearRect(0, 0, innerWidth, innerHeight);

  for(let i=0; i < circleArray.length; i++ ){
    circleArray[i].update();
  }


};

animate();
