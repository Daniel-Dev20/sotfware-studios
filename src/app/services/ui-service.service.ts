import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import Swal from 'sweetalert2'


// CommonJS


@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  titularAlerta:string = '';

  constructor() { }

  alertaError(text:string){
    Swal.fire({
       title: 'Error!',
       text,
       icon: 'error',
       confirmButtonText: 'Ok'
     });
     
    
  }

  alertConfirm(text:string){
    Swal.fire({
      position: 'center',
      icon: 'success',
      text,
      showConfirmButton: false,
      timer: 1500
    })
  }
}
