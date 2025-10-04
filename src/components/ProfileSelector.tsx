import { Card } from '@/components/ui/card';
import { GraduationCap, Users, Briefcase } from 'lucide-react';
import { ProfileType } from '@/types/user.types';

interface ProfileSelectorProps {
  onSelectProfile: (profile: ProfileType) => void;
}

const ProfileSelector = ({ onSelectProfile }: ProfileSelectorProps) => {
  const profiles = [
    {
      type: 'student' as ProfileType,
      title: 'Alumno',
      description: 'Estudiante de licenciatura',
      icon: GraduationCap,
    },
    {
      type: 'teacher' as ProfileType,
      title: 'Docente',
      description: 'Profesor de licenciatura o maestría',
      icon: Users,
    },
    {
      type: 'administrative' as ProfileType,
      title: 'Administrativo',
      description: 'Personal administrativo',
      icon: Briefcase,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">
          Seleccione perfil a resetear
        </h2>
        <p className="text-muted-foreground">
          Elija el tipo de usuario para restablecer su contraseña
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {profiles.map((profile) => {
          const Icon = profile.icon;
          return (
            <Card
              key={profile.type}
              className="p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary/50 group"
              onClick={() => onSelectProfile(profile.type)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {profile.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {profile.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSelector;
