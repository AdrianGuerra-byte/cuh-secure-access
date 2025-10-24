import { ProfileType, Student, Teacher, Administrative } from '@/types/user.types';
import { TeacherNameData } from '@/components/SearchForm';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:6667/api/v1';

export class ApiService {
  /**
   * Search for a student by name or matricula
   */
  static async searchStudent(query: string, searchType: 'name' | 'id'): Promise<Student | null> {
    try {
      const params = new URLSearchParams();
      // Add required 'tipo' parameter for students
      params.append('tipo', 'alumno');
      
      if (searchType === 'id') {
        params.append('matricula', query);
      } else {
        params.append('nombre', query);
      }

      console.log('Search Student - Request URL:', `${API_BASE_URL}/usuarios?${params.toString()}`);

      const response = await fetch(`${API_BASE_URL}/usuarios?${params.toString()}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });
      
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Error al buscar estudiante');
      }

      const usuarios = await response.json();
      
      if (usuarios.length === 0) return null;
      
      const rawUser = usuarios[0];
      
      // Debug: Log the raw user data returned by the API
      console.log('Search Student - Raw API Response:', rawUser);
      
      // Map API response to expected Student interface
      const user: Student = {
        nombre_completo: rawUser.nombre_completo?.trim() || '',
        matricula: rawUser.matricula?.trim() || '',
        grado_academico: rawUser.grado_academico?.trim() || '',
        carrera: rawUser.carrera?.trim() || '',
        // Legacy fields for backward compatibility
        nombre: rawUser.nombre_completo?.trim() || '',
        cuenta: rawUser.matricula?.trim() || '',
        telefono: '' // Not provided by the new API response
      };
      
      // Debug: Log the mapped user data
      console.log('Search Student - Mapped User:', user);
      
      return user;
    } catch (error) {
      console.error('Error searching student:', error);
      throw error;
    }
  }

  /**
   * Search for a teacher by name or clave_docente
   */
  static async searchTeacher(query: string | TeacherNameData, searchType: 'name' | 'id'): Promise<Teacher | null> {
    try {
      const params = new URLSearchParams();
      if (searchType === 'id') {
        params.append('clave_docente', query as string);
      } else {
        // Handle separate name fields for teachers
        if (typeof query === 'object') {
          params.append('nombre', query.nombre);
          params.append('paterno', query.apellidoPaterno);
          params.append('materno', query.apellidoMaterno);
        } else {
          // Fallback for old format (shouldn't be used for teachers anymore)
          params.append('nombre', query);
        }
      }

      const response = await fetch(`${API_BASE_URL}/docentes?${params.toString()}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });
      
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Error al buscar docente');
      }

      const docentes = await response.json();
      
      if (docentes.length === 0) return null;
      
      const rawTeacher = docentes[0];
      
      // Debug: Log the raw teacher data returned by the API
      console.log('Search Teacher - Raw API Response:', rawTeacher);
      
      // Map API response to expected Teacher interface
      const teacher: Teacher = {
        clave_docente: rawTeacher.clave_docente?.trim() || rawTeacher.cuenta?.trim() || '',
        nombre: rawTeacher.nombre?.trim() || '',
        paterno: rawTeacher.paterno?.trim() || rawTeacher.apellido_paterno?.trim() || '',
        materno: rawTeacher.materno?.trim() || rawTeacher.apellido_materno?.trim() || '',
        telefono_celular: rawTeacher.telefono_celular?.trim() || rawTeacher.telefono?.trim() || '',
        gradoimparte: rawTeacher.gradoimparte?.trim() || rawTeacher.grado_imparte?.trim() || ''
      };
      
      // Debug: Log the mapped teacher data
      console.log('Search Teacher - Mapped Teacher:', teacher);
      
      return teacher;
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
      // Add required 'tipo' parameter for administrative staff
      params.append('tipo', 'administrativo');
      
      if (searchType === 'id') {
        params.append('matricula', query);
      } else {
        params.append('nombre', query);
      }

      console.log('Search Administrative - Request URL:', `${API_BASE_URL}/usuarios?${params.toString()}`);

      const response = await fetch(`${API_BASE_URL}/usuarios?${params.toString()}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });
      
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Error al buscar administrativo');
      }

      const usuarios = await response.json();
      
      if (usuarios.length === 0) return null;
      
      const rawUser = usuarios[0];
      
      // Debug: Log the raw user data returned by the API
      console.log('Search Administrative - Raw API Response:', rawUser);
      
      // Map API response to expected Administrative interface
      const user: Administrative = {
        nombre_completo: rawUser.nombre_completo?.trim() || '',
        matricula: rawUser.matricula?.trim() || '',
        grado_academico: rawUser.grado_academico?.trim() || '',
        carrera: rawUser.carrera?.trim() || '',
        // Legacy fields for backward compatibility
        nombre: rawUser.nombre_completo?.trim() || '',
        cuenta: rawUser.matricula?.trim() || '',
        telefono: '' // Not provided by the new API response
      };
      
      // Debug: Log the mapped user data
      console.log('Search Administrative - Mapped User:', user);
      
      return user;
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
      
      // Debug: Log the userData to see what we're working with
      console.log('Reset password - Profile Type:', profileType);
      console.log('Reset password - User Data:', userData);
      
      if (profileType === 'teacher') {
        const teacher = userData as Teacher;
        if (!teacher.clave_docente) {
          throw new Error('Clave de docente no encontrada');
        }
        console.log('Reset password - Teacher clave_docente:', teacher.clave_docente);
        response = await fetch(`${API_BASE_URL}/docentes/${teacher.clave_docente}/password`, {
          method: 'PATCH',
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });
      } else {
        const user = userData as Student | Administrative;
        const userId = user.matricula || user.cuenta;
        if (!userId) {
          throw new Error('ID de usuario no encontrado (matrícula o cuenta)');
        }
        console.log('Reset password - User ID (matricula):', userId);
        response = await fetch(`${API_BASE_URL}/usuarios/${userId}/password`, {
          method: 'PATCH',
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });
      }

      if (!response.ok) {
        throw new Error('Error al restablecer contraseña');
      }

      const result = await response.json();
      
      // For the new API, phone number is not returned, so we use a default message
      const phoneNumber = profileType === 'teacher' 
        ? (userData as Teacher).telefono_celular 
        : 'Número registrado en el sistema';

      console.log('Reset password - API Result:', result);
      console.log('Reset password - Phone Number:', phoneNumber);
      console.log('Reset password - Final Response:', {
        success: true,
        message: result.message || 'Contraseña restablecida exitosamente.',
        phoneNumber,
      });

      return {
        success: true,
        message: result.message || 'Contraseña restablecida exitosamente.',
        phoneNumber: phoneNumber || 'Número registrado',
      };
    } catch (error) {
      console.error('Error resetting password:', error);
      throw error;
    }
  }
}
