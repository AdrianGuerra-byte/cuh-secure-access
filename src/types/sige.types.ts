export interface SigeUser {
  numero_usuario?: number;
  nombre: string;
  cuenta: string;
  nombre_departamento: string;
  depto?: string;
  gradoconsulta?: string;
}

export interface Department {
  iddepartamento: string;
  descripcion: string;
}

export interface CreateUserData {
  nombre: string;
  cuenta: string;
  clave: string;
  depto: string;
  gradoconsulta: string;
}

export interface UpdateUserData {
  nombre: string;
  cuenta: string;
  clave?: string;
  depto: string;
  gradoconsulta: string;
}

export type GradoConsulta = 'ALL' | 'LICU' | 'MACU';
