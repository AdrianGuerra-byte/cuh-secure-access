export type ProfileType = 'student' | 'teacher' | 'administrative';

export interface Student {
  id: string;
  fullName: string;
  matricula: string;
  degree: string;
  group: string;
  institutionalEmail: string;
  phoneNumber: string;
}

export interface Teacher {
  id: string;
  fullName: string;
  matricula: string;
  teachesAt: 'MICU' | 'LICU' | 'BOTH';
  institutionalEmail: string;
  phoneNumber: string;
}

export interface Administrative {
  id: string;
  fullName: string;
  employeeId: string;
  department: string;
  institutionalEmail: string;
  phoneNumber: string;
}

export type UserData = Student | Teacher | Administrative;
