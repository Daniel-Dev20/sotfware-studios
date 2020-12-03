import { MenuComponent } from './../menu/menu.component';
import { Login } from './../../interfaces/interfaces';
import { UiServiceService } from './../../services/ui-service.service';
import { UsuarioService } from './../../services/usuario.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage'
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario = {};
  usuarioLogin:Login = {};


 
  token = null;
  

  constructor(
    private usuarioService:UsuarioService, 
    private route: Router,
    private uiService:UiServiceService
    ) { }

  ngOnInit(): void {
  }
  
  //metodo de login para comprobar que los datos son correctos
  async login(formLogin:NgForm){
    //Validacion del foprmulario
    if(formLogin.invalid) {
      return;
    }
    //Servicio para obtener el token
  const existe = await  this.usuarioService.login(this.usuarioLogin);

  if(existe){
    //Navegar a home
    this.route.navigate(['/home']);
  }else{
    //Mostrar alerta de usuario y contraseña incorrectos
    this.uiService.alertaError('Usuario y contraseña incorrectos');
  }
  }

  async register(formRegister:NgForm){
    if(formRegister.invalid){
      return;
    }
    const existe = await this.usuarioService.register(this.usuario);
  if(existe){
    //Navegar a home
    this.route.navigate(['/home']);
  }else{
    //Mostrar alerta de usuario y contraseña incorrectos
    this.uiService.alertaError('Lo sentimos, ese email ya existe, intenta con otro!');
  }


  }



}
