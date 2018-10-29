var easyButtonDisplay;
var easyButtonHover;
var mediumButtonDisplay;
var mediumButtonHover;
var hardButtonDisplay;
var hardButtonHover;
var button2X;
var button2Y;
function preloadMainMenu()
{
  easyButtonHover = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonEasy-OnHover.png");
  easyButtonDisplay = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonEasy-OnDisplay.png");

  mediumButtonHover = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonMedium-OnHover.png");
  mediumButtonDisplay = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonMedium-OnDisplay.png");

  hardButtonHover = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonHard-OnHover.png");
  hardButtonDisplay = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial3.2/ButtonHard-OnDisplay.png");
}
function setupMainMenu()
{
    buttonEasyX = 100;
    buttonEasyY = 100;
    buttonEasy2X = 300;
    buttonEasy2Y = 150;

    buttonMediumX = 100;
    buttonMediumY = 200;
    buttonMedium2X = 300;
    buttonMedium2Y = 300;

    buttonHardX = 100;
    buttonHardY = 300;
    buttonHard2X = 300;
    buttonHard2Y = 500;

}

function drawMainMenu()
{
  background (190,180,230);
  fill(50,75,150);
  stroke(20,40,80);
  strokeWeight(3);
  textSize(40);
  text("Main Menu",200,60);
  image(easyButtonDisplay,buttonEasyX,buttonEasyY);
  image(mediumButtonDisplay,buttonMediumX,buttonMediumY);
  image(hardButtonDisplay,buttonHardX,buttonHardY);
  if (mouseX > buttonEasyX && mouseX < buttonEasy2X && mouseY > buttonEasyY && mouseY < buttonEasy2Y)
  {
    image(easyButtonHover,buttonEasyX,buttonEasyY);
    if (mouseIsPressed)
      {
        canvasID = 2
      }
  }
  if (mouseX > buttonMediumX && mouseX < buttonMedium2X && mouseY > buttonMediumY && mouseY < buttonMedium2Y)
     {
    image(mediumButtonHover,buttonMediumX,buttonMediumY);
    if (mouseIsPressed)
      {
        canvasID = 3
      }
     }

  if (mouseX > buttonHardX && mouseX < buttonHard2X && mouseY > buttonHardY && mouseY < buttonHard2Y)
     {
    image(hardButtonHover,buttonHardX,buttonHardY);
    if (mouseIsPressed)
      {
        canvasID = 4
      }
     }
}
