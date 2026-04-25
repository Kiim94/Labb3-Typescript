import { Component } from '@angular/core';
import { HelloComponent } from "../hello/hello";
import { PickRandom } from "../pick-random/pick-random";
import { ShowLive } from "../show-live/show-live";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HelloComponent, PickRandom, ShowLive],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}
