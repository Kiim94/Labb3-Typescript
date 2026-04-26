import { Component, Input } from '@angular/core';

//hade först en vanlig hälsning - hej
//testade att göra så man får annan hälsning beroende på tid
@Component({
  selector: 'hello-comp',
  standalone: true,
  template: '<h3>{{ greeting }}</h3>',
})
export class HelloComponent {
  //räknar ut och visar häslning beroende på tidpunkt
  get greeting(): string{
    const hour = new Date().getHours();
    if(hour >= 5 && hour < 12){
      return "🌅 God morgon! 🌅";
    }else if(hour >= 12 && hour < 18){
      return "🌞 God eftermiddag! 🌞";
    }else if(hour >= 18 && hour < 22){
      return "🌄 God kväll! 🌄";
    }else{
      return "God natt! 🦉"
    }
  }
}