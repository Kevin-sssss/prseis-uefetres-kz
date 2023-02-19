import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PR6-kzproject';
  footer = '© 2023 My Website KZ';
  green = 'GREEN';
  blue = 'BLUE';
  red = 'RED';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  onButton1Click() {
    const header = this.el.nativeElement.querySelector('header');
    this.renderer.setStyle(header, 'background-color', 'red');
    }

  onButton2Click() {
    const header = this.el.nativeElement.querySelector('header');
    this.renderer.setStyle(header, 'background-color', 'blue');
  }

  onButton3Click() {
    const header = this.el.nativeElement.querySelector('header');
    this.renderer.setStyle(header, 'background-color', 'green');
  }

  showHeroes = true;
  showVillians = true;
   HeroesSection() {
     this.showHeroes = true;
     this.showVillians = false;

    }

    VilliansSection() {
      this.showVillians = true;
      this.showHeroes = false;
     }
  
}