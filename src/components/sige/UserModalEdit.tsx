import { useState, useEffect } from 'react';
import { SigeUser, UpdateUserData, GradoConsulta } from '@/types/sige.types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DepartmentSelect } from './DepartmentSelect';

interface UserModalEditProps {
  user: SigeUser | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: UpdateUserData) => Promise<void>;
  isSubmitting: boolean;
}

export const UserModalEdit = ({ user, open, onOpenChange, onSubmit, isSubmitting }: UserModalEditProps) => {
  const [formData, setFormData] = useState<UpdateUserData>({
    nombre: '',
    cuenta: '',
    clave: '',
    depto: '',
    gradoconsulta: 'LICU'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof UpdateUserData, string>>>({});

  useEffect(() => {
    if (user) {
      setFormData({
        nombre: user.nombre,
        cuenta: user.cuenta,
        clave: '',
        depto: user.depto || '',
        gradoconsulta: (user.gradoconsulta as GradoConsulta) || 'LICU'
      });
      setErrors({});
    }
  }, [user]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof UpdateUserData, string>> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    } else if (formData.nombre.trim().length > 100) {
      newErrors.nombre = 'El nombre no puede exceder 100 caracteres';
    }

    if (!formData.cuenta.trim()) {
      newErrors.cuenta = 'La cuenta es requerida';
    } else if (formData.cuenta.trim().length > 14) {
      newErrors.cuenta = `La 'cuenta' (${formData.cuenta.trim()}) excede los 14 caracteres permitidos.`;
    }

    if (formData.clave && formData.clave.trim().length > 14) {
      newErrors.clave = 'La contraseña no puede exceder 14 caracteres';
    }

    if (!formData.depto) {
      newErrors.depto = 'El departamento es requerido';
    }

    if (!formData.gradoconsulta) {
      newErrors.gradoconsulta = 'El grado de consulta es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await onSubmit(formData);
    } catch (error: any) {
      // Handle specific API errors
      if (error.message?.includes('409') || error.message?.toLowerCase().includes('existe')) {
        setErrors({ cuenta: `La cuenta de usuario '${formData.cuenta.trim()}' ya existe. Por favor, ingrese una cuenta diferente.` });
      }
    }
  };

  const handleChange = (field: keyof UpdateUserData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editar usuario</DialogTitle>
          <DialogDescription>
            Actualice la información del usuario SIGE
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div className="space-y-2">
            <Label htmlFor="edit-nombre">Nombre completo *</Label>
            <Input
              id="edit-nombre"
              type="text"
              placeholder="Nombre completo"
              value={formData.nombre}
              onChange={(e) => handleChange('nombre', e.target.value)}
              disabled={isSubmitting}
              className={errors.nombre ? 'border-destructive' : ''}
              maxLength={100}
            />
            {errors.nombre && (
              <p className="text-sm text-destructive">{errors.nombre}</p>
            )}
          </div>

          {/* Cuenta */}
          <div className="space-y-2">
            <Label htmlFor="edit-cuenta">Cuenta (max 14 caracteres) *</Label>
            <Input
              id="edit-cuenta"
              type="text"
              placeholder="Cuenta (max 14 caracteres)"
              value={formData.cuenta}
              onChange={(e) => handleChange('cuenta', e.target.value)}
              disabled={isSubmitting}
              className={errors.cuenta ? 'border-destructive' : ''}
              maxLength={14}
            />
            {errors.cuenta && (
              <p className="text-sm text-destructive">{errors.cuenta}</p>
            )}
          </div>

          {/* Clave */}
          <div className="space-y-2">
            <Label htmlFor="edit-clave">
              Nueva contraseña (max 14 caracteres)
              <span className="text-muted-foreground text-xs ml-2">(dejar vacío para no cambiar)</span>
            </Label>
            <Input
              id="edit-clave"
              type="password"
              placeholder="Contraseña (max 14 caracteres)"
              value={formData.clave}
              onChange={(e) => handleChange('clave', e.target.value)}
              disabled={isSubmitting}
              className={errors.clave ? 'border-destructive' : ''}
              maxLength={14}
            />
            {errors.clave && (
              <p className="text-sm text-destructive">{errors.clave}</p>
            )}
          </div>

          {/* Departamento */}
          <div className="space-y-2">
            <Label htmlFor="edit-depto">Departamento *</Label>
            <DepartmentSelect
              value={formData.depto}
              onValueChange={(value) => handleChange('depto', value)}
              disabled={isSubmitting}
            />
            {errors.depto && (
              <p className="text-sm text-destructive">{errors.depto}</p>
            )}
          </div>

          {/* Grado Consulta */}
          <div className="space-y-2">
            <Label htmlFor="edit-gradoconsulta">Grado de consulta *</Label>
            <Select
              value={formData.gradoconsulta}
              onValueChange={(value: GradoConsulta) => handleChange('gradoconsulta', value)}
              disabled={isSubmitting}
            >
              <SelectTrigger id="edit-gradoconsulta">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">Todos (ALL)</SelectItem>
                <SelectItem value="LICU">Licenciaturas (LICU)</SelectItem>
                <SelectItem value="MACU">Maestrías (MACU)</SelectItem>
              </SelectContent>
            </Select>
            {errors.gradoconsulta && (
              <p className="text-sm text-destructive">{errors.gradoconsulta}</p>
            )}
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Guardando...' : 'Guardar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
