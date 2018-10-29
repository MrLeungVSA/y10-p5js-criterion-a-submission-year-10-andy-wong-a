/*

*/
var canvasID;
function preload()
{
  preloadIntro();
  preloadMainMenu();
  preloadGameEasy();
  preloadGameHard();
}

function setup()
{
  canvasID = 0;
  createCanvas(1000,800);
  fill(125,125,0);
  setupIntro();
  setupMainMenu();
  setupGameEasy();
  setupGameHard();

}

function draw()
{
  if (canvasID == 0)
  {
    drawIntro()
  }
  if (canvasID == 1)
  {
    drawMainMenu()
  }
  if (canvasID == 2)
  {
    drawGameEasy()
  }
  if (canvasID == 3)
  {
    drawGameHard()
  }

}
