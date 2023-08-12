/// <reference path="./utils.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App;
(function (App) {
    var Detail = /** @class */ (function (_super) {
        __extends(Detail, _super);
        function Detail() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Detail.prototype.getName = function () {
            console.log("name is ".concat(this.name));
        };
        Detail.prototype.bio = function () {
            return "Name: ".concat(this.getName(), " ");
        };
        return Detail;
    }(Bio.Name));
    App.Detail = Detail;
    var a = new App.Detail("Ahsan");
    console.log(a.bio());
})(App || (App = {}));
