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

// radious for the eventListener for the mouse
let maxRadius = 40;
// let minR = 2; 

// create an objrct to get mouse value for event listener
let mouse = {
  x: undefined,
  y: undefined
}
//eventListeners for interactivenesssssss
window.addEventListener('mousemove',(e)=>{
  mouse.x = e.x;
  mouse.y = e.y;
});

//eventListener for resizing the canvas
window.addEventListener('resize',()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init()
});

let colorArray =[
  '#024059',
  '#026873',
  '#04BF8A',
  '#025940',
  '#03A64A'
]

function Circle(x, y,dx,dy,r) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;
  this.minRadius = r;
  this.color = colorArray[Math.floor(Math.random()* colorArray.length)] ;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    // c.strokeStyle = "black";
    // c.stroke();
    
  // getting random color in the circles
    c.fillStyle= this.color;
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

// mouse interactivity 
    // distance position between mouse and circles
if(mouse.x -this.x <50 && mouse.x -this.x >-50 &&
   mouse.y -this.y <50 && mouse.y -this.y>-50){
    
    if(this.r < maxRadius){
      this.r += 1;
    }
}else if(this.r > this.minRadius){
this.r -= 1;
}

// calling the draw function
this.draw();

  };
}



var circleArray = [];

init = () => {
  circleArray = [];
// for loop for multiple circles
for (let i = 0; i < 1000; i++) {

  // for the starting position
  // for the circle radius
  var r = Math.random()* 3 + 1;
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

init();
animate();
