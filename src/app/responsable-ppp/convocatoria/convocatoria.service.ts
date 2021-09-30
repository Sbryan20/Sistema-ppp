import { Injectable } from '@angular/core';
import { Proyecto } from './proyectos';
import { PROYECTO } from './proyecto.json';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {

  constructor() { }


  getproyecto():Proyecto[]{
return PROYECTO
  }
}
