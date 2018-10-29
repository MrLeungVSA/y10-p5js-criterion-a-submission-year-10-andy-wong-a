function preloadIntro()
{

}

function setupIntro()
{

}

function drawIntro()
{
  background (200,200,0);
  fill(0,0,0);
  textSize(15);
  text("Welcome to my test game!",240,180);
  text("Click anywhere to continue.",240,200);
  if (mouseIsPressed)
  {
    canvasID = 1
  }
}
