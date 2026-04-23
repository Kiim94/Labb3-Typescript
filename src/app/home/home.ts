import { Component } from '@angular/core';
import { HelloComponent } from "../hello/hello";
import { PickRandom } from "../pick-random/pick-random";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HelloComponent, PickRandom],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}
