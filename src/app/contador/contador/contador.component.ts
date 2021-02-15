
import { Component } from '@angular/core';

@Component ({
selector: 'app-contador',
template: `
<h1> {{ titulo }} </h1>


<h3>la base es {{base}} </h3>
<button (click)="acumular(base)"> +5</button>

<span> {{ numero }} </span>

<button (click)="quitar(base)"> -5</button>
`
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;
  
  
   acumular ( valor: number ){
   this.numero += valor;
   }
  
   quitar (valor: number){
     this.numero -= 5;
   }
}