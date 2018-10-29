var easyButtonDisplay;
var easyButtonHover;
function preloadMainMenu()
{
  loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonEasy-OnHover.png");
  loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonEasy-OnDisplay.png");
}
function setupMainMenu()
{

}

function drawMainMenu()
{
  background (0,200,200);
  fill(50,50,50);
  image(easyButtonDisplay,100,100)
  if (mouseX > button2X && mouseX < button2X + 300 && mouseY > button2Y && mouseY < button2Y+ 150)
  image(easyButtonHover,100,100)
}
