import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Phone, Key, GraduationCap, BookOpen, Briefcase } from 'lucide-react';
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
        return <BookOpen className="w-12 h-12 text-primary" />;
      case 'administrative':
        return <Briefcase className="w-12 h-12 text-primary" />;
    }
  };

  // Validation function to check if we have required data for password reset
  const canResetPassword = () => {
    console.log('UserDetails - Validating password reset capability');
    console.log('UserDetails - Profile Type:', profileType);
    console.log('UserDetails - User Data:', userData);
    
    if (profileType === 'teacher') {
      const teacher = userData as Teacher;
      const canReset = Boolean(teacher.clave_docente?.trim());
      console.log('UserDetails - Teacher clave_docente:', teacher.clave_docente, '- Can reset:', canReset);
      return canReset;
    } else {
      const user = userData as Student | Administrative;
      const userId = user.matricula || user.cuenta;
      const canReset = Boolean(userId?.trim());
      console.log('UserDetails - User matricula/cuenta:', userId, '- Can reset:', canReset);
      return canReset;
    }
  };

  const getFullName = () => {
    if (profileType === 'teacher') {
      const teacher = userData as Teacher;
      return `${teacher.nombre} ${teacher.paterno} ${teacher.materno}`;
    }
    const user = userData as Student | Administrative;
    return user.nombre_completo || user.nombre || 'Nombre no disponible';
  };

  const getPhoneNumber = () => {
    if (profileType === 'teacher') {
      return (userData as Teacher).telefono_celular;
    }
    // For students and administrative, phone number is not provided by the new API
    return (userData as Student | Administrative).telefono || 'No disponible';
  };

    const renderSpecificInfo = () => {
    if (profileType === 'teacher') {
      const teacher = userData as Teacher;
      return (
        <>
          <InfoRow label="Imparte clases en" value={teacher.gradoimparte} />
          <InfoRow label="Clave Docente" value={teacher.clave_docente} />
        </>
      );
    } else {
      const user = userData as Student | Administrative;
      return (
        <>
          <InfoRow 
            label="Matrícula" 
            value={user.matricula || 'N/A'} 
            icon={<GraduationCap className="w-4 h-4" />}
          />
          <InfoRow 
            label="Grado Académico" 
            value={user.grado_academico || 'N/A'} 
            icon={<BookOpen className="w-4 h-4" />}
          />
          <InfoRow 
            label={profileType === 'student' ? 'Carrera' : 'Área'} 
            value={user.carrera || 'N/A'} 
            icon={<Briefcase className="w-4 h-4" />}
          />
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
                {getFullName()}
              </h2>
              <Badge variant="secondary" className="text-sm">
                {profileType === 'student' ? 'Alumno' : profileType === 'teacher' ? 'Docente' : 'Administrativo'}
              </Badge>
            </div>
          </div>

          {/* Information */}
          <div className="space-y-4">
            {renderSpecificInfo()}
            
            {(profileType === 'teacher' || (userData as Student | Administrative).telefono) && (
              <InfoRow 
                label="Número Telefónico" 
                value={getPhoneNumber()}
                icon={<Phone className="w-4 h-4" />}
              />
            )}
          </div>

          {/* Reset Password Button */}
          <div className="pt-6 border-t border-border">
            {canResetPassword() ? (
              <>
                <Button
                  onClick={onResetPassword}
                  className="w-full py-6 text-lg"
                  disabled={isResetting}
                >
                  <Key className="w-5 h-5 mr-2" />
                  {isResetting ? 'Restableciendo contraseña...' : 'Restablecer contraseña'}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  La nueva contraseña será generada.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-sm text-destructive mb-2">
                  No se puede restablecer la contraseña
                </p>
                <p className="text-xs text-muted-foreground">
                  {profileType === 'teacher' 
                    ? `Falta la clave de docente. Valor actual: "${(userData as Teacher).clave_docente || 'undefined'}"` 
                    : `Falta la matrícula del usuario. Valor actual: "${(userData as Student | Administrative).matricula || (userData as Student | Administrative).cuenta || 'undefined'}"`
                  }
                </p>
              </div>
            )}
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
