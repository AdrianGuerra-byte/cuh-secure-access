import { ProfileType, Student, Teacher, Administrative } from '@/types/user.types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';

export class ApiService {
  /**
   * Search for a student or administrative by name or matricula
   */
  static async searchStudent(query: string, searchType: 'name' | 'id'): Promise<Student | null> {
    try {
      const params = new URLSearchParams();
      if (searchType === 'id') {
        params.append('matricula', query);
      } else {
        params.append('nombre', query);
      }

      const response = await fetch(`${API_BASE_URL}/usuarios?${params.toString()}`);
      
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Error al buscar usuario');
      }

      const usuarios = await response.json();
      return usuarios.length > 0 ? usuarios[0] : null;
    } catch (error) {
      console.error('Error searching student:', error);
      throw error;
    }
  }

  /**
   * Search for a teacher by name or clave_docente
   */
  static async searchTeacher(query: string, searchType: 'name' | 'id'): Promise<Teacher | null> {
    try {
      const params = new URLSearchParams();
      if (searchType === 'id') {
        params.append('clave_docente', query);
      } else {
        params.append('nombre', query);
      }

      const response = await fetch(`${API_BASE_URL}/docentes?${params.toString()}`);
      
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Error al buscar docente');
      }

      const docentes = await response.json();
      return docentes.length > 0 ? docentes[0] : null;
    } catch (error) {
      console.error('Error searching teacher:', error);
      throw error;
    }
  }

  /**
   * Search for administrative staff by name or matricula
   */
  static async searchAdministrative(query: string, searchType: 'name' | 'id'): Promise<Administrative | null> {
    try {
      const params = new URLSearchParams();
      if (searchType === 'id') {
        params.append('matricula', query);
      } else {
        params.append('nombre', query);
      }

      const response = await fetch(`${API_BASE_URL}/usuarios?${params.toString()}`);
      
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Error al buscar usuario');
      }

      const usuarios = await response.json();
      return usuarios.length > 0 ? usuarios[0] : null;
    } catch (error) {
      console.error('Error searching administrative:', error);
      throw error;
    }
  }

  /**
   * Reset password and send via WhatsApp
   */
  static async resetPassword(
    profileType: ProfileType,
    userData: Student | Teacher | Administrative
  ): Promise<{ success: boolean; message: string; phoneNumber: string }> {
    try {
      let response;
      
      if (profileType === 'teacher') {
        const teacher = userData as Teacher;
        response = await fetch(`${API_BASE_URL}/docentes/${teacher.clave_docente}/password`, {
          method: 'PATCH',
        });
      } else {
        const user = userData as Student | Administrative;
        response = await fetch(`${API_BASE_URL}/usuarios/${user.matricula}/password`, {
          method: 'PATCH',
        });
      }

      if (!response.ok) {
        throw new Error('Error al restablecer contraseña');
      }

      const result = await response.json();
      const phoneNumber = profileType === 'teacher' 
        ? (userData as Teacher).telefono_celular 
        : (userData as Student | Administrative).telefono;

      return {
        success: true,
        message: result.message || 'Contraseña restablecida exitosamente.',
        phoneNumber,
      };
    } catch (error) {
      console.error('Error resetting password:', error);
      throw error;
    }
  }
}
