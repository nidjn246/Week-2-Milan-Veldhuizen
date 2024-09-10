let wolk = 800
let car = 10
let sun = -100
let color = 1
let red = "red"
let green = "green"
let orange = "orange"

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 235);

  //bergen
  strokeWeight (1)
  fill ("grey")
  //rechterberg
  triangle (400, 250, 200, 585, 600, 585)
  //linkerberg
  triangle (150, 300, 0, 585, 350, 585)

  //bomen achter de auto
  //boom kleur
  fill (165, 42, 41)
  strokeWeight (0)
  //linker boomstam
  rect (80, 500, 20, 100)
  //blaadjes kleur
  fill (32, 133, 58)
  //linker blaadjes
  circle (90, 490, 70)
  //rechter boomstamkleur
  fill (165, 42, 41)
  //rechter boomstam
  rect (590, 500, 20, 100)
  //blaadjes kleur
  fill (32, 133, 58)
  //rechter blaadjes
  circle (600, 490, 70)
  

  //sun
  sun = sun + 0.5
  fill (254, 203, 0)
  strokeWeight (0)
  //sun beweging
  circle (sun + 1 + 60, 50, 80)
  if (sun > 800) 
  sun = sun = -100
  
  //de wolk 
  fill (255)
  strokeWeight (0)
  circle (wolk + -1 + 60, 150, 50)
  circle (wolk + -1 + 80, 140, 50)
  circle (wolk + -1 + 80, 160, 50)
  circle (wolk + -1 + 105, 150, 50)
  //wolk beweging
  wolk = wolk + -1.5
  if (wolk < -200) 
  wolk = wolk = +800

  //de weg
  strokeWeight (10)
  stroke (100)
  rect (0, 590, 800, 10)

  //het stoplicht
  strokeWeight (0)
  fill (50, 50, 50)
  //onderste deel stoplight
  rect (730, 450, 15, 135)
  //bovenste dell stoplight
  rect (710, 310, 55, 140)

  // de lichten van het stoplicht
  fill (red)
  circle (737, 335, 40)
  fill (orange)
  circle (737, 380, 40)
  fill (green)
  circle (737, 425, 40)
 
  //de auto
  strokeWeight (0)
  fill ("green")
  //onderste autoframe
  rect (car + 1 + 1, 545, 100, 30)
  //bovenste outoframe
  rect (car + 1 + 15, 520, 70, 30)
  //kleur van de ramen
  fill (135, 206, 235)
  strokeWeight (1)
  //linker raam
  rect (car + 1 + 60, 530, 20, 15)
  //rechter raam
  rect (car + 1 + 30, 530, 20, 15)
  stroke (0)
  fill (255)
  strokeWeight (10)
  //linker wiel
  circle (car + 1 + 30, 580, 15)
  //rechter wiel
  circle (car + 1 + 80, 580, 15)
  //beweging auto
  if (car > 800) 
  car = car = -100
  if (color === 2)
  car = car +4
  if (color === 1)
  car = car +0
  if (color === 3)
  car = car +2 

//voorste boom
strokeWeight (0)
//rechter boomstamkleur
fill (165, 42, 41)
//rechter boomstam
rect (350, 500, 20, 100)
//blaadjes kleur
fill (32, 133, 58)
//rechter blaadjes
circle (360, 490, 70)
}

//stoplicht lichten op enter klikken
function keyPressed () {
  if (key === "Enter"){
//als je op enter klikt gaat color +1
  color = color +1}
  if (color === 4) {
  color = 1
  }
//als color 1 is gaat rood aan
  if (color === 1){
    red = "red"
  }
  else {
    red = "darkred"
  }
//als color 1 is gaat groen aan
  if (color === 2){
    green = "lime"
  }
  else {
    green = "green"
  }
//als color 1 is gaat oranje aan
  if (color === 3){
    orange = "orange"
  }
  else {
    orange = "darkorange"
  }
}