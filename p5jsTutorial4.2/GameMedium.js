var buttonBackHover;
var buttonBackDisplay;
var buttonBackX;
var buttonBackY;
var buttonBack2X;
var buttonBack2Y;

function preloadGameHard()
{

}
function setupGameHard()
{
  buttonBackX = 200;
  buttonBackY = 200;
  buttonBack2X = 400;
  buttonBack2Y = 250;
}
function drawGameHard()
{

  background(60,190,10);
  textSize(40);
  fill(50,75,150);
  stroke(20,40,80);
  strokeWeight(3);
  text("Medium Mode",200,60);
  image(buttonBackDisplay,200,200)
  if (mouseX > buttonBackX && mouseX < buttonBack2X && mouseY > buttonBackY && mouseY < buttonBack2Y)
  {
    image(buttonBackHover,buttonBackX,buttonBackY);
    if (mouseIsPressed)
      {
        canvasID = 1
      }
  }
}
