import { SigeUser } from '@/types/sige.types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface UserCardProps {
  user: SigeUser;
  onEdit: (user: SigeUser) => void;
  onDelete: (user: SigeUser) => void;
}

export const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={() => onEdit(user)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onEdit(user);
        }
      }}
      aria-label={`Editar usuario ${user.nombre}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg flex-shrink-0">
            {getInitial(user.nombre)}
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">
              {user.nombre}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {user.cuenta}
            </p>
            <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
              {user.nombre_departamento}
            </span>
          </div>

          {/* Actions */}
          <div className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(user)}
              aria-label={`Eliminar ${user.nombre}`}
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
