import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyectos';
import { ConvocatoriaService } from './convocatoria.service';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.css']
})
export class ConvocatoriaComponent implements OnInit {
  Proyecto:Proyecto[]=[];

  constructor(private convocatoriaService:ConvocatoriaService  ) { }

  ngOnInit(): void {
    this.Proyecto=this.convocatoriaService.getproyecto();
  }

}
