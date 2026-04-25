import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-show-live',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './show-live.html',
  styleUrl: './show-live.scss',
})
export class ShowLive {
  name: string = "";
  isHovering: boolean = false;

  onMouseOver(){
    this.isHovering = true;
  }
  onMouseOut(){
    this.isHovering = false;
  }
}
