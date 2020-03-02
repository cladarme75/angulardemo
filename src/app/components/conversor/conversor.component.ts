import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  temperatura1:number = 0;
  temperatura2:number = 0;
 
  medida1:string = "celsius";
  medida2:string = "celsius";

  recalcular(): void{

  }
  constructor() { }

  ngOnInit(): void {
  }
}