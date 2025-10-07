export type ProfileType = 'student' | 'teacher' | 'administrative';

// API Response types
export interface Teacher {
  clave_docente: string;
  nombre: string;
  paterno: string;
  materno: string;
  telefono_celular: string;
  gradoimparte: string;
}

export interface Student {
  nombre: string;
  matricula: string;
  telefono: string;
}

export interface Administrative {
  nombre: string;
  matricula: string;
  telefono: string;
}

export type UserData = Student | Teacher | Administrative;
