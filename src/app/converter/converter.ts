import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrls: ['./converter.scss'],
})
export class Converter {

  //pga att det bara är konvertering av enkla data, ingen interface behövs
  lengthValue: number | null = null;
  lengthResult: number | null = null;
  lengthType = "";

  tempValue: number | null = null;
  tempType = "";
  tempResult: number | null = null;

  currencyValue: number | null = null;
  currencyType="";
  currencyResult: number | null = null;
  //ungefär hur mycket en euro är i svenska kronor
  rate = 10.77;

  //liten animering istället för ren text på resultatet
  animateCurrency = false;
  animateTemp = false;
  animateLength = false;

  //konverteringar:
  //längd, meter till feet
  convertLength(){
    //om inget är inskrivet i input och man försöker klicka på knapp, inget händer
    if(this.lengthValue === null || this.lengthValue === undefined){
      return;
    }
    if(this.lengthType === "meterFeet"){
      this.lengthResult = Number((this.lengthValue * 3.28084).toFixed(2));
    } else if(this.lengthType === "feetMeter"){
      this.lengthResult = Number((this.lengthValue / 3.28084).toFixed(2));
    }
    this.animateLength = true;
    setTimeout(() => {
      this.animateLength = false, 300
    })
  }

  //celsius till fahrenheit
  convertTemp(){
    //om inget är inskrivet i input och man försöker klicka på knapp, inget händer
    if(this.tempValue === null || this.tempValue === undefined){
      return
    }
    if(this.tempType === "celFahr"){
      this.tempResult = Number(((this.tempValue * 9/5) + 32).toFixed(2));
    }else if(this.tempType === "fahrCel"){
      this.tempResult = Number(((this.tempValue - 32) * 5/9).toFixed(2));
    }

    this.animateTemp = true;
    setTimeout(() => {
      this.animateTemp = false, 300
    })
  }

  //svensk krona till euro
  convertCurrency(){
    //om inget är inskrivet i input och man försöker klicka på knapp, inget händer
    if(this.currencyValue === null || this.currencyValue === undefined){
      return;
    }
    if(this.currencyType === "sekEur"){
      this.currencyResult = Number((this.currencyValue /this.rate).toFixed(2));
    }else if(this.currencyType === "eurSek"){
      this.currencyResult = Number((this.currencyValue * this.rate).toFixed(2));
    }

    this.animateCurrency = true;
    setTimeout(() => {
      this.animateCurrency = false, 300
    })
  }
}
