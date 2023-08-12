var Bio;
(function (Bio) {
    var Name = /** @class */ (function () {
        function Name(name) {
            this.name = name;
        }
        return Name;
    }());
    Bio.Name = Name;
    var FatherName = /** @class */ (function () {
        function FatherName(name) {
            this.name = name;
        }
        FatherName.prototype.getFatherName = function () {
            console.log("father name is ".concat(this.name));
        };
        return FatherName;
    }());
    Bio.FatherName = FatherName;
    var Age = /** @class */ (function () {
        function Age(age) {
            this.age = age;
        }
        Age.prototype.getAge = function () {
            console.log("age is ".concat(this.age));
        };
        return Age;
    }());
    Bio.Age = Age;
})(Bio || (Bio = {}));
