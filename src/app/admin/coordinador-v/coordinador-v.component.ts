import { Component, OnInit } from '@angular/core';
import { Docente } from '../docentes';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-coordinador-v',
  templateUrl: './coordinador-v.component.html'
})
export class CoordinadorVComponent implements OnInit {
  Coordinador:Docente[]=[];

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.Coordinador=this.adminservice.getcoordinadores();
  }

}
