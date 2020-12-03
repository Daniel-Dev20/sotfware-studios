import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }
  getEmpleados(){
    this.usuarioService.getEmpleados().subscribe(response => {
      console.log(response);
    });
  }
}
