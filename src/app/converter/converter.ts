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

  //pga att det bara är konvertering av enkla data, ingen interface
  lengthValue = 0;
  lengthResult = 0;
  lengthType = "";

  tempValue=0;
  tempType = "";
  tempResult = 0;

  currencyValue=0;
  currencyType="";
  currencyResult=0;
  //ungefär hur mycket en euro är i svenska kronor
  rate = 10.77;

  //liten animering istället för ren text på resultatet
  animateCurrency = false;
  animateTemp = false;
  animateLength = false;

  //konverteringar:
  //längd, meter till feet
  convertLength(){
    if(this.lengthType === "meterFeet"){
      this.lengthResult = this.lengthValue * 3.28084;
    } else{
      this.lengthResult = this.lengthValue / 3.28084;
    }
    this.animateLength = true;
    setTimeout(() => {
      this.animateLength = false, 300
    })
  }

  //celsius till fahrenheit
  convertTemp(){
    if(this.tempType === "celFahr"){
      this.tempResult = (this.tempValue * 9/5) + 32;
    }else{
      this.tempResult = (this.tempValue - 32) * 5/9;
    }
    this.animateTemp = true;
    setTimeout(() => {
      this.animateTemp = false, 300
    })
  }

  //svensk krona till euro
  convertCurrency(){
    if(this.currencyType === "sekEur"){
      this.currencyResult = Number((this.currencyValue /this.rate).toFixed(2));
    }else{
      this.currencyResult = Number((this.currencyValue * this.rate).toFixed(2));
    }
    this.animateCurrency = true;
    setTimeout(() => {
      this.animateCurrency = false, 300
    })
  }
}
