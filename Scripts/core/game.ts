// IIFE - Immediately Invoked Function Expression
(function(){
  let stage:createjs.Stage;
  let canvas:any;
  let assetManager:createjs.LoadQueue;
  let gameContainer:objects.Scene;

  let currentScene:objects.Scene;

  let assetManifest = [
    {id: "clickMeButton", src:"../../Assets/images/clickMeButton.png"}
  ];

  function Init() {
    assetManager = new createjs.LoadQueue();
    assetManager.installPlugin(createjs.Sound);
    assetManager.on("complete", Start);
    assetManager.loadManifest(assetManifest);
  }

  function Start() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);

    gameContainer = new scenes.Start(assetManager);
    gameContainer.Start();
    Main();
  }

  function Update() {
    stage.update();
    gameContainer.Update();
  }

  function Main() {
    console.log("Game Started...");
    stage.addChild(gameContainer);
  }

  window.onload = Init;

})();
