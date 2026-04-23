import { Component, Input } from '@angular/core';

//hade först en vanlig hälsning - hej
//testade att göra så man får annan hälsning beroende på tid
@Component({
  selector: 'hello-comp',
  standalone: true,
  template: '<h3>{{ greeting }}</h3>',
})
export class HelloComponent {
  @Input() name = "";
  get greeting(): string{
    const hour = new Date().getHours();
    if(hour < 12){
      return "🌅 God morgon! 🌅";
    }else if(hour > 12){
      return "🌞 God eftermiddag! 🌞";
    }else{
      return "🌙 God kväll! 🌙";
    }
  }
}