import { UiServiceService } from './../../services/ui-service.service';
import { UsuarioService } from './../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Postulados } from './../../interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private usuarioService:UsuarioService, private uiService: UiServiceService) { }
  postulado: Postulados = {}
  ngOnInit(): void {
  }
async postulados(postuladosForm:NgForm){
  if(postuladosForm.invalid){
    return;
  }
  const existe = await this.usuarioService.postulados(this.postulado);

  if(existe){
    this.uiService.alertConfirm('Se enviaron  correctamente sus datos..!');
    
  }
}
}
