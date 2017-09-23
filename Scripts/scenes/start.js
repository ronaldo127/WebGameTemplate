var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        function Start(assetManager) {
            var _this = _super.call(this) || this;
            _this.assetManager = assetManager;
            return _this;
        }
        Start.prototype.Start = function () {
            this.helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240, true);
            this.clickButton = new objects.Button(this.assetManager, "clickMeButton", 320, 340, true);
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Main = function () {
            this.addChild(this.helloLabel);
            this.addChild(this.clickButton);
            this.clickButton.on("click", function () {
                this.helloLabel.TextString = "GoodBye Cruel World";
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map