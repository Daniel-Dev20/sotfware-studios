import { UiServiceService } from './../../services/ui-service.service';
import { Login } from './../../interfaces/interfaces';
import { UsuarioService } from './../../services/usuario.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  usuarioLogin: Login = {};
  constructor(private usuarioService:UsuarioService, private  router:Router, private uiService:UiServiceService) { }

  ngOnInit(): void {
  }

  /*
  async login(){
    //Validacion del foprmulario
   
    //Servicio para obtener el token
  const existe = await  this.usuarioService.login(this.usuarioLogin);

  if(existe){
    //Navegar a home
    this.router.navigate(['/home']);
  }else{
    //Mostrar alerta de usuario y contraseña incorrectos
    this.uiService.alertaError('Usuario y contraseña incorrectos');
  }
  }
  cerrarSesion(){
     this.usuarioService.logout();
  }

  */
}


