import { Component, OnInit } from '@angular/core';
import { Docente } from '../docentes';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-director-p',
  templateUrl: './director-p.component.html'
})
export class DirectorPComponent implements OnInit {
  Director:Docente[]=[];

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.Director=this.adminservice.getDirectores();
  }

}
