let wolk = 800
let car = 10
let sun = -100
let Lightgreen = "green"
let Darkorange = "darkorange"
let Darkred = "red"

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

  //sun
  sun = sun + 0.5
  fill ("yellow")
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
  fill (Darkred)
  circle (737, 335, 40)
  fill (Darkorange)
  circle (737, 380, 40)
  fill (Lightgreen)
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
  if (Lightgreen === "lime")
  car = car +4
  if (Darkred ==="red")
  car = car +0
  if (Darkorange ==="orange")
  car = car +2 
}

function keyPressed () {
  if (key === "Enter")
  if (Darkred === "red") {
  Darkorange = "orange"
  Darkred = "darkred"}
  else {
  Darkorange = "darkorange"
  Lightgreen = "lime"
  }
}  