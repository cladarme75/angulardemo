import { Component } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent {

  display:string = "00:00:00";
  incremento:number = 1;
  totalSegundos:number = 0;
  interval_ID:any = undefined;

  startEnabled = true;
  pauseEnabled = false;
  resumeEnabled = false;
  invertEnabled = false;
  
  start():void {

    this.startEnabled = false;
    this.pauseEnabled = true;
    this.resumeEnabled = false;
    this.invertEnabled = true;

    this.interval_ID = setInterval(() => {

      let horas     = ("0" +  Math.floor(this.totalSegundos / 3600)).slice(-2);
      let minutos   = ("0" +  Math.floor(this.totalSegundos / 60 % 60)).slice(-2);
      let segundos  = ("0" +  Math.floor(this.totalSegundos % 60)).slice(-2);

      this.display = horas + ":" + minutos + ":" + segundos;

      this.totalSegundos += this.incremento;

    }, 1000);
  }

  pause():void {
    this.pauseEnabled = false;
    this.resumeEnabled = true;
    clearInterval(this.interval_ID);
  }

  resume():void {
    this.pauseEnabled = true;
    this.resumeEnabled = false;
    this.start();
  }

  reset():void {
    this.totalSegundos = 0;
    this.pause();
    this.display = "00:00:00";
    this.incremento = 1;
    this.startEnabled = true;
    this.pauseEnabled = false;
    this.resumeEnabled = false;
    this.invertEnabled = false;
  }

  invert():void {
    this.incremento *= -1;
  }

}
