// IIFE - Immediately Invoked Function Expression
(function(){
  let stage:createjs.Stage;
  let canvas:any;
  let assetManager:createjs.LoadQueue;

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

    currentScene = new scenes.Start(assetManager);
    currentScene.Start();
    Main();
  }

  function Update() {
    currentScene.Update();
    stage.update();
  }

  function Main() {
    console.log("Game Started...");
    stage.addChild(currentScene);
  }

  window.onload = Init;

})();
