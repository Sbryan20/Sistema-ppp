import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Docente } from '../docentes';

@Component({
  selector: 'app-tabledocentes',
  templateUrl: './tabledocentes.component.html'
})
export class TabledocentesComponent implements OnInit {

  Docentes:Docente[]=[];

  constructor( private adminservice:AdminService) { }

  ngOnInit(): void {
    this.Docentes=this.adminservice.getDocentesApoyo();
  }

}
