"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.title = 'PR6-kzproject';
        this.footer = '© 2023 My Website KZ';
        this.green = 'GREEN';
        this.blue = 'BLUE';
        this.red = 'RED';
        this.showHeroes = true;
        this.showVillians = true;
    }
    AppComponent.prototype.onButton1Click = function () {
        var header = this.el.nativeElement.querySelector('header');
        this.renderer.setStyle(header, 'background-color', 'red');
    };
    AppComponent.prototype.onButton2Click = function () {
        var header = this.el.nativeElement.querySelector('header');
        this.renderer.setStyle(header, 'background-color', 'blue');
    };
    AppComponent.prototype.onButton3Click = function () {
        var header = this.el.nativeElement.querySelector('header');
        this.renderer.setStyle(header, 'background-color', 'green');
    };
    AppComponent.prototype.HeroesSection = function () {
        this.showHeroes = true;
        this.showVillians = false;
    };
    AppComponent.prototype.VilliansSection = function () {
        this.showVillians = true;
        this.showHeroes = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
