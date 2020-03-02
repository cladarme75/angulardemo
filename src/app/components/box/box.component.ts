import { Component } from '@angular/core';


@Component({
   selector: 'app-box',
   templateUrl: './box.component.html',
   styleUrls: ['./box.component.css']
})
export class BoxComponent{

    titulo ="Componente Box";
    nombre = "Bartolo";
    numero = 20;
    recibirPropaganda = true;
    fechaAlta:Date = new Date();
    ciudadSeleccionada:string = undefined;
    
    duplicar(): void{
        this.nombre += this.nombre;
    }

    cambioSelector():void{
        this.numero--;
        console.log("la ciudad es : " + this.ciudadSeleccionada)
    } 
}