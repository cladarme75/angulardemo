import { Component, OnInit } from '@angular/core';
const CONVERSOR ={
  euro: 1,
  francoSuizo : 0.89898989,
  dolar:1.2,
  dolarAu:1.7,
  dolarcan:0.67,  
}
cambioSelector():void{
  this.numero--;
  console.log("la divisa es : " + this.dº)
} 
@Component({
  selector: 'app-conversor-divisas',
  templateUrl: './conversor-divisas.component.html',
  styleUrls: ['./conversor-divisas.component.css']
})
export class ConversorDivisasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
