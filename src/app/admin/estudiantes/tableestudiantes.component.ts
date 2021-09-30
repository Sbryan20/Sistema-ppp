import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiantes';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-tableestudiantes',
  templateUrl: './tableestudiantes.component.html'
  
})
export class TableestudiantesComponent implements OnInit {
  Estudiante:Estudiante[]=[];


  constructor(private AdminService:AdminService) { }

  ngOnInit(): void {
    this.Estudiante=this.AdminService.getEstudiantes();
  }

}
