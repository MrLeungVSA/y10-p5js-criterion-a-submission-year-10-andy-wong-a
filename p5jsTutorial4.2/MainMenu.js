var easyButtonDisplay;
var easyButtonHover;
var mediumButtonDisplay;
var mediumButtonHover;
var hardButtonDisplay;
var hardButtonHover;
var button2X;
var button2Y;
var buttonBackHover;
var buttonBackDisplay;
var bgm1;
var bgm2;
var bgm3;
var bgm4;
var easySFX;
var mediumSFX;
var hardSFX;
var backSFX;
var buttonPause;
var buttonPause2;
var buttonSkip;
var buttonSkip2;
var buttonPause;
var buttonPause2;
var songNumber;
function preloadMainMenu()
{
  buttonBackHover = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/ButtonBack-OnHover.png");
  buttonBackDisplay = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/ButtonBack-OnDisplay.png");

  easyButtonHover = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/ButtonEasy-OnHover.png");
  easyButtonDisplay = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/ButtonEasy-OnDisplay.png");

  mediumButtonHover = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/ButtonMedium-OnHover.png");
  mediumButtonDisplay = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/ButtonMedium-OnDisplay.png");

  hardButtonHover = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/ButtonHard-OnHover.png");
  hardButtonDisplay = loadImage("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/ButtonHard-OnDisplay.png");

  bgm1 = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/BGM1.mp3")
  bgm2 = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/BGM2.mp3")
  bgm3 = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/BGM3.mp3")
  bgm4 = loadSound("https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-andy-wong-a/p5jsTutorial4.2/BGM4.mp3")
  easySFX = loadSound(" ")
  mediumSFX = loadSound(" ")
  hardSFX = loadSound(" ")
  backSFX = loadSound(" ")


}
function setupMainMenu()
{
    buttonEasyX = 20;
    buttonEasyY = 100;
    buttonEasy2X = 220;
    buttonEasy2Y = 150;

    buttonMediumX = 20;
    buttonMediumY = 200;
    buttonMedium2X = 300;
    buttonMedium2Y = 220;

    buttonHardX = 20;
    buttonHardY = 300;
    buttonHard2X = 220;
    buttonHard2Y = 500;
    songnumber = 1
    if (!bgm1.isplaying())
    {
      play.bgm1
    }

}

function drawMainMenu()
{
  songNumber = 1
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



  if (mouseX > buttonEasyX && mouseX < buttonEasy2X && mouseY > buttonEasyY && mouseY < buttonEasy2Y)
  {
    image(easyButtonHover,buttonEasyX,buttonEasyY);
    if (mouseIsPressed)
      {
        canvasID = 2
        if (!easySFX.isplaying())
          {
            play.easySFX
          }
      }
  }
  if (mouseX > buttonMediumX && mouseX < buttonMedium2X && mouseY > buttonMediumY && mouseY < buttonMedium2Y)
     {
    image(mediumButtonHover,buttonMediumX,buttonMediumY);
    if (mouseIsPressed)
      {
        canvasID = 3
        if (!mediumSFX.isplaying())
          {
            play.mediumSFX
          }
      }
     }

  if (mouseX > buttonHardX && mouseX < buttonHard2X && mouseY > buttonHardY && mouseY < buttonHard2Y)
     {
    image(hardButtonHover,buttonHardX,buttonHardY);
    if (mouseIsPressed)
      {
        canvasID = 4
        if (!hardSFX.isplaying())
          {
            play.hardSFX
          }
      }
     }

}
