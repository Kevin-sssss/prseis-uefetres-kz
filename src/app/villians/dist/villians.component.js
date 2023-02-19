"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var mock_villians_1 = require("../villians/mock-villians");
var VilliansComponent = /** @class */ (function () {
    function VilliansComponent() {
        this.villians = mock_villians_1.VILLIANS;
    }
    VilliansComponent.prototype.onSelect = function (villians) {
        this.selectedVillian = villians;
    };
    VilliansComponent = __decorate([
        core_1.Component({
            selector: 'app-villians',
            templateUrl: './villians.component.html',
            styleUrls: ['./villians.component.css']
        })
    ], VilliansComponent);
    return VilliansComponent;
}());
exports.VilliansComponent = VilliansComponent;

//# sourceMappingURL=villians.component.js.map
