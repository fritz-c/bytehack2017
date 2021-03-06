/**
  Ok so I know that I ask a lot out of you guys when I talk about making this
  game, but not many of you have nearly as much experience as I have.
  I've tried to make everything more convenient by commenting before as many
  blocks of code as I can.

  Comments begin with a double slash (i.e. //) and have plain text in them.
  Whatever text you put in there doesn't get run by the computer, even if its
  actual code, so it's pretty convenient. In fact, this whole block is a huge
  comment oAo

  You guys don't have to be experts to contribute, I don't want to be the
  busybody running the whole project by myself without leaving room for
  teamwork, so please come to me if you need any kind of help whatsoever.


  Here is a list of resources so everybody can all get in together on developing
  this game :)

    - Alex


  Learn Git in 15 minutes!!!
    https://try.github.io/levels/1/challenges/1

  Some basic Git + github guide
    http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners

  A couple more GitHub tutorials (quick reads, I promise!)
      https://guides.github.com/
      I REALLY RECOMMEND STARTING WITH THIS ONE:
      https://guides.github.com/introduction/getting-your-project-on-github/

  Learn Javascript:
    https://www.javascript.com/

  PIXI.js tutorial (scroll down the page):
    https://github.com/kittykatattack/learningPixi

  PIXI.js documentation (you can look for objects referenced from PIXI to
  understand how they work and what they do through search, and find new things
  that may make your life easier when doing something in particular)
    http://pixijs.download/release/docs/
    For example, you can understand how Sprites work by looking at the sprite
    article at: http://pixijs.download/release/docs/PIXI.Sprite.html

  Collection of examples (with code!) in PIXI:
    https://pixijs.github.io/examples/
*/


//Initialize PIXI by creating a renderer and stage
var app = new PIXI.Application({width: 640, height: 480});

//Alias for loader resources
var loader = app.loader;

//Adds renderer to the website
document.body.appendChild(app.view);

//Load all the images needed for the game
loader
  .add('bg1', "media/ldr_bg1.png")
  .add('lion1', "media/ldr_lion1.png")
  .load(setup);


//Declare sprite variables
const sprites = {};

//Variable for key listeners
const keys = {};


//This function runs when all the images have been loaded
function setup() {
  //Create background sprite
  sprites.bg = new PIXI.extras.TilingSprite(
    loader.resources["bg1"].texture,
    640, 480);
  sprites.bg.vx = 0.64;

  //This contains all the lion dancer sprites
  sprites.lion = new PIXI.Sprite(loader.resources["lion1"].texture);
  sprites.lion.position.x = 20
  sprites.lion.position.y = 290

  //Add the sprite to the stage
  app.stage.addChild(sprites.bg)
    .addChild(sprites.lion);


  //Starts running the game!
  app.ticker.add(update);
  app.start();
}



//Current game state: play, menu, dead, etc.
var gameState = menu;

//This is where all the animation is handled centrally!
function update() {
  //Call the function for the current game state
  gameState();

  //Render game for this frame
  app.render();
}

//Runs when user is on menu screen
function menu(){
  //Move the background
  sprites.bg.tilePosition.x -= sprites.bg.vx;

  //TODO implement code to show a play button and a logo, maybe?
}

//Runs when user is playing the game
function play(){
  if (sprites.bg.vx < 1.28) {
    sprites.bg.vx = sprites.bg.vx*1.2;
  } else if (sprites.bg.vx > 1.28) {
    sprites.bg.vx = 1.28;
  }
}
