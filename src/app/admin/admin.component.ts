import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Docentes } from './models/response';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit { 
  Docs:Docentes[]=[];
  constructor( private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.cargardocente().subscribe(resp =>{
    this.Docs=resp
    console.log(resp)
  })
      
  }

  guardarRol():void{
    let nombre=localStorage.getItem("nombres_completo")
    console.log(nombre)

    

    
  }

  
  

}
