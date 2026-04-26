import { Component } from '@angular/core';
//formsModule pga ngModel: fungerar inte annars
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-show-live',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './show-live.html',
  styleUrl: './show-live.scss',
})
export class ShowLive {
  //namn är en sträng, börjar tom. Simpel boolean för mouseover/mouseout
  name: string = "";
  isHovering: boolean = false;

  onMouseOver(){
    this.isHovering = true;
  }
  onMouseOut(){
    this.isHovering = false;
  }
}
