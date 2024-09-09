let count = -100
let car = -100

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 235);
  
  //de wolk 1
  fill (255)
  strokeWeight (0)
  count = count + 1.5
  circle (count + 1 + 60, 90, 50)
  circle (count + 1 + 80, 80, 50)
  circle (count + 1 + 80, 100, 50)
  circle (count + 1 + 105, 90, 50)
  if (count > 800) 
 count = count = -200

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

  //de auto
  car = car +4
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
