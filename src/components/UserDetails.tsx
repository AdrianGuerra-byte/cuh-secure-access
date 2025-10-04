import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Phone, Key, GraduationCap, Users, Briefcase } from 'lucide-react';
import { ProfileType, Student, Teacher, Administrative } from '@/types/user.types';

interface UserDetailsProps {
  profileType: ProfileType;
  userData: Student | Teacher | Administrative;
  onBack: () => void;
  onResetPassword: () => void;
  isResetting?: boolean;
}

const UserDetails = ({ profileType, userData, onBack, onResetPassword, isResetting }: UserDetailsProps) => {
  const renderProfileIcon = () => {
    switch (profileType) {
      case 'student':
        return <GraduationCap className="w-12 h-12 text-primary" />;
      case 'teacher':
        return <Users className="w-12 h-12 text-primary" />;
      case 'administrative':
        return <Briefcase className="w-12 h-12 text-primary" />;
    }
  };

  const renderSpecificInfo = () => {
    if (profileType === 'student') {
      const student = userData as Student;
      return (
        <>
          <InfoRow label="Licenciatura" value={student.degree} />
          <InfoRow label="Grupo" value={student.group} />
          <InfoRow label="Matrícula" value={student.matricula} />
        </>
      );
    }
    
    if (profileType === 'teacher') {
      const teacher = userData as Teacher;
      const teachesLabel = teacher.teachesAt === 'BOTH' 
        ? 'Licenciatura (LICU) y Maestría (MICU)'
        : teacher.teachesAt === 'MICU' 
        ? 'Maestría (MICU)'
        : 'Licenciatura (LICU)';
      
      return (
        <>
          <InfoRow label="Imparte clases en" value={teachesLabel} />
          <InfoRow label="Matrícula" value={teacher.matricula} />
        </>
      );
    }
    
    if (profileType === 'administrative') {
      const admin = userData as Administrative;
      return (
        <>
          <InfoRow label="Departamento" value={admin.department} />
          <InfoRow label="ID de Empleado" value={admin.employeeId} />
        </>
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Button
        variant="ghost"
        onClick={onBack}
        className="-ml-2"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Nueva búsqueda
      </Button>

      <Card className="p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-4 pb-6 border-b border-border">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
              {renderProfileIcon()}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                {userData.fullName}
              </h2>
              <Badge variant="secondary" className="text-sm">
                {profileType === 'student' ? 'Alumno' : profileType === 'teacher' ? 'Docente' : 'Administrativo'}
              </Badge>
            </div>
          </div>

          {/* Information */}
          <div className="space-y-4">
            {renderSpecificInfo()}
            
            <InfoRow 
              label="Correo Institucional" 
              value={userData.institutionalEmail}
              icon={<Mail className="w-4 h-4" />}
            />
            
            <InfoRow 
              label="Número Telefónico" 
              value={userData.phoneNumber}
              icon={<Phone className="w-4 h-4" />}
            />
          </div>

          {/* Reset Password Button */}
          <div className="pt-6 border-t border-border">
            <Button
              onClick={onResetPassword}
              className="w-full py-6 text-lg"
              disabled={isResetting}
            >
              <Key className="w-5 h-5 mr-2" />
              {isResetting ? 'Restableciendo contraseña...' : 'Restablecer contraseña'}
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              La nueva contraseña será enviada al correo institucional
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const InfoRow = ({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) => (
  <div className="flex items-start space-x-3 py-3 border-b border-border last:border-0">
    {icon && <div className="mt-1 text-muted-foreground">{icon}</div>}
    <div className="flex-1">
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="text-base font-medium text-foreground">{value}</p>
    </div>
  </div>
);

export default UserDetails;
