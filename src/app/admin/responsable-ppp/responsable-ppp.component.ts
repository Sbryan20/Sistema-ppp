import { Component, OnInit } from '@angular/core';
import { Docente } from '../docentes';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-responsable-ppp',
  templateUrl: './responsable-ppp.component.html'
})
export class ResponsablePppComponent implements OnInit {
  Responsable:Docente[]=[];

  constructor(private adminservic:AdminService) { }

  ngOnInit(): void {
    this.Responsable=this.adminservic.getResponsable();
  }

}
