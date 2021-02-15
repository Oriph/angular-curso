import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[]=['spiderman', 'ironman', 'hulk','thor','roger rabbit'];
  heroeBorrado: string = '';

  borrarHeroe(){ 
   
   this.heroeBorrado= this.heroes.shift() || '';
  }
}
