import { Component, OnInit } from '@angular/core';
import { Rol } from './rol';
import { EstructureService } from './estructure.service';

@Component({
  selector: 'app-estructure',
  templateUrl: './estructure.component.html'
})
export class EstructureComponent implements OnInit {
  Roles:Rol[]=[];
  //dato para roles y su ventana 
  rol: String='admin';

  constructor(private estructureService:EstructureService) { }

  ngOnInit(): void {
    this.Roles=this.estructureService.getRol();
    
  }

}
