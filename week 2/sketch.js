let count = 800
let car = -100
let sun = -100
let Lightgreen = "lime"
let Darkorange = "darkorange"
let Darkred = "darkred"

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 235);

  //bergen
  strokeWeight (1)
  fill ("grey")
  triangle (400, 250, 200, 585, 600, 585)
  triangle (150, 300, 0, 585, 350, 585)

  //sun
  sun = sun + 0.5
  fill ("yellow")
  strokeWeight (0)
  circle (sun + 1 + 60, 50, 80)
  if (sun > 800) 
    sun = sun = -400
  
  //de wolk 1
  fill (255)
  strokeWeight (0)
  count = count + -1.5
  circle (count + -1 + 60, 150, 50)
  circle (count + -1 + 80, 140, 50)
  circle (count + -1 + 80, 160, 50)
  circle (count + -1 + 105, 150, 50)
  if (count < -200) 
 count = count = +800

  //de weg
  strokeWeight (10)
  stroke (100)
  rect (0, 590, 800, 10)

  //het stoplicht
  strokeWeight (0)
  fill (50, 50, 50)
  //het frame
  rect (730, 450, 15, 135)
  rect (710, 310, 55, 140)

  // de lichten van het stoplicht
  
  fill (Darkred)
  circle (737, 335, 40)
  fill (Darkorange)
  circle (737, 380, 40)
  fill (Lightgreen)
  circle (737, 425, 40)
 
  //de auto
  if (Lightgreen === "lime")
  car = car +4
  if (Darkred ==="red")
    car = car +0
  if (Darkorange ==="orange")
    car = car +2
  strokeWeight (0)
  fill ("green")
  rect (car + 1 + 1, 545, 100, 30)
  rect (car + 1 + 15, 520, 70, 30)
  fill (135, 206, 235)
  strokeWeight (1)
  rect (car + 1 + 60, 530, 20, 15)
  rect (car + 1 + 30, 530, 20, 15)
  stroke (0)
  fill (255)
  strokeWeight (10)
  //linker wiel
  circle (car + 1 + 30, 580, 15)
  //rechter wiel
  circle (car + 1 + 80, 580, 15)
  if (car > 800) 
  car = car = -100 
}

function keyPressed () {
  if (key === "Enter")
  if (Lightgreen === "lime") 
  Darkorange = "orange"
else {
Darkred = "red"
Darkorange = "darkorange"
}
  if (Darkorange === "orange")
  Lightgreen = "green"
loop 
}  