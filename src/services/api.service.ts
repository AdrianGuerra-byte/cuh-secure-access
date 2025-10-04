import { ProfileType, Student, Teacher, Administrative } from '@/types/user.types';

/**
 * API Service for backend integration
 * This service is prepared for future API integration
 * Currently returns mock data for frontend development
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export class ApiService {
  /**
   * Search for a student by name or matricula
   */
  static async searchStudent(query: string): Promise<Student | null> {
    // TODO: Implement actual API call
    // const response = await fetch(`${API_BASE_URL}/students/search?q=${encodeURIComponent(query)}`);
    // return response.json();
    
    // Mock data for development
    return {
      id: '1',
      fullName: 'Juan Pérez García',
      matricula: 'EST2024001',
      degree: 'Ingeniería en Sistemas Computacionales',
      group: 'ISC-8A',
      institutionalEmail: 'juan.perez@cuh.edu.mx',
      phoneNumber: '+52 771 234 5678',
    };
  }

  /**
   * Search for a teacher by name or matricula
   */
  static async searchTeacher(query: string): Promise<Teacher | null> {
    // TODO: Implement actual API call
    // const response = await fetch(`${API_BASE_URL}/teachers/search?q=${encodeURIComponent(query)}`);
    // return response.json();
    
    // Mock data for development
    return {
      id: '1',
      fullName: 'Dra. María López Hernández',
      matricula: 'DOC2020045',
      teachesAt: 'BOTH',
      institutionalEmail: 'maria.lopez@cuh.edu.mx',
      phoneNumber: '+52 771 876 5432',
    };
  }

  /**
   * Search for administrative staff by name or employee ID
   */
  static async searchAdministrative(query: string): Promise<Administrative | null> {
    // TODO: Implement actual API call
    // const response = await fetch(`${API_BASE_URL}/administrative/search?q=${encodeURIComponent(query)}`);
    // return response.json();
    
    // Mock data for development
    return {
      id: '1',
      fullName: 'Carlos Ramírez Sánchez',
      employeeId: 'ADM2019023',
      department: 'Servicios Escolares',
      institutionalEmail: 'carlos.ramirez@cuh.edu.mx',
      phoneNumber: '+52 771 345 6789',
    };
  }

  /**
   * Reset password and send email via MailGun
   */
  static async resetPassword(
    profileType: ProfileType,
    userId: string,
    email: string
  ): Promise<{ success: boolean; message: string }> {
    // TODO: Implement actual API call to backend that handles:
    // 1. Password reset in database (set to "12345678Az*")
    // 2. Email sending via MailGun with new password
    
    // const response = await fetch(`${API_BASE_URL}/password/reset`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ profileType, userId, email }),
    // });
    // return response.json();
    
    // Mock success response for development
    return {
      success: true,
      message: 'Contraseña restablecida exitosamente. Se ha enviado un correo con la nueva contraseña.',
    };
  }
}
