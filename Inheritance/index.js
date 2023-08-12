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
var Name = /** @class */ (function () {
    function Name(name) {
        this.name = name;
    }
    Name.prototype.getName = function () {
        console.log("My name is ".concat(this.name));
    };
    return Name;
}());
var Fullname = /** @class */ (function (_super) {
    __extends(Fullname, _super);
    function Fullname(name, lastname) {
        var _this = _super.call(this, name) || this;
        _this.lastname = lastname;
        return _this;
    }
    Fullname.prototype.getFullname = function () {
        console.log("My full name is ".concat(this.name, " ").concat(this.lastname));
    };
    return Fullname;
}(Name));
// Create instances
var person = new Fullname("John", "Doe");
// Use methods
person.getName(); // Output: My name is John
person.getFullname(); // Output: My full name is John Doe
