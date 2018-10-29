var buttonBackHover;
var buttonBackDisplay;
var buttonZ2;
var buttonD2;
function preloadGameEasy()
{
  buttonBackHover = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonBack-OnHover.png");
  buttonBackDisplay = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonBack-OnDisplay.png");
}

function drawGameEasy()
{
  background(60,190,10);
  textSize(40);
  fill(50,75,150);
  stroke(20,40,80);
  strokeWeight(3);
  text("Easy Mode",400,60);
  image(buttonBackDisplay,200,200)
  if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 250)
  {
    image(buttonBackHover,200,200);
    if (mouseIsPressed)
      {
        canvasID = 1
      }
  }
}

function setupGameEasy()
{
}
