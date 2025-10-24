import { SigeUser, Department, CreateUserData, UpdateUserData } from '@/types/sige.types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:6667/api/v1';

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
      
      // Debug: Log first user to see structure
      if (users.length > 0) {
        console.log('=== SIGE USER STRUCTURE ===');
        console.log('First user from API:', users[0]);
        console.log('===========================');
      }
      
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
  static async updateUser(idOrCuenta: number | string, userData: UpdateUserData): Promise<SigeUser> {
    try {
      // Trim data before sending
      const trimmedData = {
        nombre: userData.nombre.trim(),
        cuenta: userData.cuenta.trim(),
        ...(userData.clave && { clave: userData.clave.trim() }),
        depto: userData.depto.trim(),
        gradoconsulta: userData.gradoconsulta
      };

      const response = await fetch(`${API_BASE_URL}/usuarios/${idOrCuenta}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify(trimmedData)
      });

      // Handle different status codes
      if (response.status === 404) {
        throw new Error('Usuario no encontrado. Puede que haya sido eliminado.');
      }

      if (response.status === 400) {
        try {
          const error = await response.json();
          throw new Error(error.message || error.error || 'Datos de usuario no válidos.');
        } catch (e) {
          throw new Error('Datos de usuario no válidos.');
        }
      }

      if (response.status === 500) {
        throw new Error('Error interno del servidor. Por favor, intenta nuevamente.');
      }

      if (!response.ok) {
        try {
          const error = await response.json();
          throw new Error(error.message || error.error || 'Error al actualizar usuario');
        } catch {
          throw new Error('Error al actualizar usuario');
        }
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
  static async deleteUser(idOrCuenta: number | string): Promise<void> {
    try {
      const url = `${API_BASE_URL}/usuarios/${idOrCuenta}`;
      console.log('DELETE Request URL:', url);
      console.log('DELETE User ID:', idOrCuenta, 'Type:', typeof idOrCuenta);
      
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });

      // Handle different status codes
      if (response.status === 204) {
        // Success - No Content
        return;
      }

      if (response.status === 404) {
        throw new Error('Usuario no encontrado. Puede que ya haya sido eliminado.');
      }

      if (response.status === 400) {
        throw new Error('ID de usuario no válido.');
      }

      if (response.status === 500) {
        throw new Error('Error interno del servidor. Por favor, intenta nuevamente.');
      }

      if (!response.ok) {
        // Try to get error message from response
        try {
          const error = await response.json();
          throw new Error(error.message || error.error || 'Error al eliminar usuario');
        } catch {
          throw new Error('Error al eliminar usuario');
        }
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }
}
