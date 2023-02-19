import { Component } from '@angular/core';
import { Villians } from '../../villians';
import { VILLIANS } from '../villians/mock-villians';

@Component({
  selector: 'app-villians',
  templateUrl: './villians.component.html',
  styleUrls: ['./villians.component.css']
})
export class VilliansComponent {
  villians = VILLIANS;
  selectedVillian?: Villians;

  onSelect(villians: Villians): void{
    this.selectedVillian = villians;
  }

}
