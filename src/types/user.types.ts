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
  nombre_completo: string;
  matricula: string;
  grado_academico: string;
  carrera: string;
  // Legacy fields for backward compatibility
  nombre?: string;
  cuenta?: string;
  depto?: string;
  nombre_departamento?: string;
  telefono?: string;
}

export interface Administrative {
  nombre_completo: string;
  matricula: string;
  grado_academico: string;
  carrera: string;
  // Legacy fields for backward compatibility
  nombre?: string;
  cuenta?: string;
  depto?: string;
  nombre_departamento?: string;
  telefono?: string;
}

export type UserData = Student | Teacher | Administrative;
