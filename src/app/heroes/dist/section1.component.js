"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var mock_heroes_1 = require("../mock-heroes");
var Section1Component = /** @class */ (function () {
    function Section1Component() {
        this.heroes = mock_heroes_1.HEROES;
    }
    Section1Component.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    Section1Component = __decorate([
        core_1.Component({
            selector: 'app-section1',
            templateUrl: './section1.component.html',
            styleUrls: ['./section1.component.css']
        })
    ], Section1Component);
    return Section1Component;
}());
exports.Section1Component = Section1Component;

//# sourceMappingURL=section1.component.js.map
