import { SigeUser, Department, CreateUserData, UpdateUserData } from '@/types/sige.types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';

export class SigeApiService {
  /**
   * Get all SIGE users
   */
  static async getAllUsers(): Promise<SigeUser[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/usuarios/sige`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });

      if (!response.ok) {
        throw new Error('Error al obtener usuarios SIGE');
      }

      const users = await response.json();
      
      // Trim spaces from nombre and cuenta
      return users.map((user: SigeUser) => ({
        ...user,
        nombre: user.nombre?.trim() || '',
        cuenta: user.cuenta?.trim() || '',
        nombre_departamento: user.nombre_departamento?.trim() || ''
      }));
    } catch (error) {
      console.error('Error fetching SIGE users:', error);
      throw error;
    }
  }

  /**
   * Get all departments
   */
  static async getAllDepartments(): Promise<Department[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/departamentos`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });

      if (!response.ok) {
        throw new Error('Error al obtener departamentos');
      }

      const departments = await response.json();
      
      // Sort alphabetically by descripcion
      return departments.sort((a: Department, b: Department) => 
        a.descripcion.localeCompare(b.descripcion)
      );
    } catch (error) {
      console.error('Error fetching departments:', error);
      throw error;
    }
  }

  /**
   * Create a new user
   */
  static async createUser(userData: CreateUserData): Promise<SigeUser> {
    try {
      // Trim data before sending
      const trimmedData = {
        nombre: userData.nombre.trim(),
        cuenta: userData.cuenta.trim(),
        clave: userData.clave.trim(),
        depto: userData.depto.trim(),
        gradoconsulta: userData.gradoconsulta
      };

      const response = await fetch(`${API_BASE_URL}/usuarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify(trimmedData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || error.error || 'Error al crear usuario');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  /**
   * Update an existing user
   */
  static async updateUser(numeroUsuario: number, userData: UpdateUserData): Promise<SigeUser> {
    try {
      // Trim data before sending
      const trimmedData = {
        nombre: userData.nombre.trim(),
        cuenta: userData.cuenta.trim(),
        ...(userData.clave && { clave: userData.clave.trim() }),
        depto: userData.depto.trim(),
        gradoconsulta: userData.gradoconsulta
      };

      const response = await fetch(`${API_BASE_URL}/usuarios/${numeroUsuario}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify(trimmedData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || error.error || 'Error al actualizar usuario');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  /**
   * Delete a user
   */
  static async deleteUser(numeroUsuario: number): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/usuarios/${numeroUsuario}`, {
        method: 'DELETE',
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || error.error || 'Error al eliminar usuario');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
}
