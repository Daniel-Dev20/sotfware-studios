import { Contacto } from './../../interfaces/interfaces';
import { UiServiceService } from './../../services/ui-service.service';
import { UsuarioService } from './../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  constructor(private usuarioService: UsuarioService, private uiService: UiServiceService) { }
  contact: Contacto = {};
  ngOnInit(): void {
  }


  async contacto(formContacto: NgForm) {
    if (formContacto.invalid) {
      return;
    }

    const existe = await this.usuarioService.contactos(this.contact);
    if(existe){
      this.uiService.alertConfirm('Se enviaron correctamento sus datos..!');
      
    }
  }
}
