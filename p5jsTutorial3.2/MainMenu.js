var easyButtonDisplay;
var easyButtonHover;
var button2X;
var button2Y;
function preloadMainMenu()
{
  easyButtonHover = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonEasy-OnHover.png");
  easyButtonDisplay = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonEasy-OnDisplay.png");
}
function setupMainMenu()
{
    buttonX = 100;
    buttonY = 100;
    button2X = 300;
    button2Y = 150;
}

function drawMainMenu()
{
  background (191, 179, 232);
  fill(191, 179, 232);
  image(easyButtonDisplay,100,100);
  if (mouseX > buttonX && mouseX < button2X && mouseY > buttonY && mouseY < button2Y) 
  {
    image(easyButtonHover,100,100);
  }
}
