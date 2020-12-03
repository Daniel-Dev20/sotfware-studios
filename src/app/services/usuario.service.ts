
import { Postulados, Contacto, Login, Usuario } from './../interfaces/interfaces';
import { LocalStorage, LocalStorageService } from 'angular-web-storage';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';



const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token: string = null;
  constructor(private http: HttpClient, private storage:LocalStorageService, private router: Router) { }

//Metodo login del servicio para traer los datos del usuario
login(usuarioLogin:Login){
  return new Promise(resolve => {
    this.http.post( `${URL}/user/login`, usuarioLogin).subscribe(resp => {
      console.log(resp);
      if(resp['ok']){
        this.guardarToken(resp['token']);
        resolve(true);
      }else{
        this.token = null;
        this.storage.clear();
        resolve(false);
      }
    })
  })
 
}
register(usuario:Usuario){
  return new Promise(resolve => {
    this.http.post(`${URL}/user/create`, usuario).subscribe(response => {
    

      if(response['ok']){
        console.log(response);
        this.guardarToken(response['token']);
        resolve(true);
      }else{
        this.token = null;
        this.storage.clear();
        resolve(false);
        console.log(response);
      }
    })
  })
}

logout(){
this.token = null;
this.storage.clear();
this.router.navigate(['/home']);
}

postulados(postulado:Postulados){
  return new Promise(resolve => {
    this.http.post(`${URL}/user/postularse`, postulado).subscribe(response => {
      if(response['ok']){
        console.log(response);
        this.guardarToken(response['token']);
        resolve(true);
      }else{
        this.token = null;
        this.storage.clear();
        resolve(false);
        console.log(response);
      }
    })
  })
}

contactos(contactos:Contacto){
  return new Promise(resolve => {
    this.http.post(`${URL}/user/contactos`, contactos).subscribe(response => {
      if(response['ok']){
        console.log(response);
        this.guardarToken(response['token']);
        resolve(true);
      }else{
        this.token = null;
        this.storage.clear();
        resolve(false);
        console.log(response);
      }
    })
  })
}

getEmpleados():any{
  return this.http.get(`${URL}/empleados`);
}
async guardarToken(token:string){
  this.token = token;
  await this.storage.set('token', token);
}
}
