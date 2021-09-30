import { Injectable } from '@angular/core';
import { Docente } from './docentes';
import { DOCENTES } from './docentes.json';
import { Estudiante } from './estudiantes';
import { ESTUDIANTES } from './estudiantes.json';
import { COORDINADOR } from './coordinador.json';
import { RESPONSABLE } from './responsable.json';
import { DIRECTOR } from './director.json';
import { DOCENTESA } from './docenteA.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Docentes } from './models/response';
import { DOC } from './models/response.json';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private urlEndPoint:string = 'http://localhost:8080/api/clientes';
  

  private HttpHeaders=new HttpHeaders({'Content-Type':
'application/json'})
  constructor() { }

  getDocentes():Docente[]{
    return DOCENTES
  }

  getDocentesApoyo():Docente[]{
    return DOCENTESA
  }

  getEstudiantes():Estudiante[]{
    return ESTUDIANTES
  }

  getcoordinadores():Docente[]{
    return COORDINADOR
  }

  getDirectores():Docente[]{
    return DIRECTOR
  }

  getResponsable():Docente[]{
    return RESPONSABLE
  }

  createRol():void{
  }

  cargardocente():Observable<Docentes[]>{
    return of(DOC);
    //return this.hhtp.get(this.urlEndPoint);
  }

}
