import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  display:number = 0;
  memoria:number =0;

  boton(cifra:number): void{
    this.display = this.display *10 + cifra;

  }

  botonC():void{
    this.display = 0;
  }
  
  botonSuma():void{
    this.memoria += this.display;
    this.display = 0;
  } 
  botonResta():void{
    this.memoria -= this.display;
    this.display = 0;
  } 
}
