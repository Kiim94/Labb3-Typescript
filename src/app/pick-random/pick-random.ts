import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-pick-random',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pick-random.html',
  styleUrl: './pick-random.scss',
})
export class PickRandom {
  inputText: string = "";
  result: string = "";
  items: string[] = [];

  pickRandomly(): void{
    //första gången med denna version av split. Vem kom på detta?!
    this.items = this.inputText.trim().split(/\s+/).filter(x => x);
    if(this.items.length === 0){
      this.result = "";
      return;
    }
    //avrunda till närmaste heltal (i arrayen) det som randomiseras gånger listans längd
    const randomIndex = Math.floor(Math.random() * this.items.length);
    this.result = this.items[randomIndex];
  }
}
