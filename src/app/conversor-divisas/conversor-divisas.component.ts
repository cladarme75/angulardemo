import { Component } from '@angular/core';

const FACTORES_CONVERSION = {
  euro: 1,
  dolar: 0.9,
  libra: 1.4,
  francosuizo: 1.07, 
  dolaraustraliano:1.67
}

@Component({
  selector: 'app-conversor-divisas',
  templateUrl: './conversor-divisas.component.html',
  styleUrls: ['./conversor-divisas.component.css']
})
export class ConversorDivisasComponent {

  monedaA:string = "euro";
  monedaB:string = "euro";
  importeA:number = 1;
  importeB:number = 1;

  recalcular(lado:string):void {

    if (lado === 'A'){

      let euro = this.importeB * FACTORES_CONVERSION[this.monedaB];
      this.importeA = euro / FACTORES_CONVERSION[this.monedaA];

    } else {

      let euro = this.importeA * FACTORES_CONVERSION[this.monedaA];
      this.importeB = euro / FACTORES_CONVERSION[this.monedaB];

    }

  
  }
  
}

