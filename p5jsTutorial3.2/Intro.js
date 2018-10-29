function preloadIntro()
{

}

function setupIntro()
{

}

function drawIntro()
{
  background (35,75,140);
  fill(170,230,70);
  stroke(20,40,80);
  strokeWeight(3);
  textSize(25);
  text("Welcome to my test game!",125,225);
  text("Click anywhere to continue.",125,250);
  if (mouseIsPressed)
  {
    canvasID = 1
  }
}
