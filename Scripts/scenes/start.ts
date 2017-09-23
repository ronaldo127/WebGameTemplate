module scenes {
    export class Start extends objects.Scene{
        private assetManager;
        private helloLabel:objects.Label;
        private clickButton:objects.Button;

        constructor(assetManager:createjs.LoadQueue){
            super();
            this.assetManager=assetManager;
        }
        
        public Start():void{
            this.helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240, true);
            this.clickButton = new objects.Button(this.assetManager, "clickMeButton", 320, 340, true);

        }
        
        public Update():void{

        }

        public Main():void{

            this.addChild(this.helloLabel);
        
            this.addChild(this.clickButton);
        
            this.clickButton.on("click", function() {
              this.helloLabel.TextString = "GoodBye Cruel World";
            });
        }
    }
}