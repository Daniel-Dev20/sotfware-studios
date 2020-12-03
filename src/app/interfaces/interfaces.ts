

export interface Usuario {
    _id?: string;
    nombre?: string;
    apellido?:string;
    email?: string;
    password?:string;
    role?:string;
    avatar?: string;
    contrato?: string;
    turnoLaboral?: string;
    telefono?: string;
    salario?: string;
    

  }

  
export interface Login {
  
  email?: string;
  password?:string;
 
}

  export interface Postulados {
    _id?: string;
    nombre?: string;
    apellido?:string;
    email?: string;
    telefono?: string;
    nivelExperiencia?: string;
    resumen?: string;


  }

  export interface Contacto {
    _id?: string;
    nombre?: string;
    apellido?:string;
    email?: string;
    telefono?: string;
    mensaje?: string;
  


  }