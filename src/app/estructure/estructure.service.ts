import { Injectable } from '@angular/core';
import { Rol } from './rol';
import { ROLES } from './rol.json';

@Injectable({
  providedIn: 'root'
})
export class EstructureService {

  constructor() { }


  getRol():Rol[]{
    return ROLES
  }
}
