import { useState } from 'react';
import { CreateUserData, GradoConsulta } from '@/types/sige.types';
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

interface UserFormCreateProps {
  onSubmit: (data: CreateUserData) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
}

export const UserFormCreate = ({ onSubmit, onCancel, isSubmitting }: UserFormCreateProps) => {
  const [formData, setFormData] = useState<CreateUserData>({
    nombre: '',
    cuenta: '',
    clave: '',
    depto: '',
    gradoconsulta: 'LICU'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CreateUserData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CreateUserData, string>> = {};

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

    if (!formData.clave.trim()) {
      newErrors.clave = 'La contraseña es requerida';
    } else if (formData.clave.trim().length > 14) {
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

  const handleChange = (field: keyof CreateUserData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <CardTitle>Crear nuevo usuario</CardTitle>
            <CardDescription>Complete el formulario para crear un usuario SIGE</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre completo *</Label>
            <Input
              id="nombre"
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
            <Label htmlFor="cuenta">Cuenta (max 14 caracteres) *</Label>
            <Input
              id="cuenta"
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
            <Label htmlFor="clave">Contraseña (max 14 caracteres) *</Label>
            <Input
              id="clave"
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
            <Label htmlFor="depto">Departamento *</Label>
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
            <Label htmlFor="gradoconsulta">Grado de consulta *</Label>
            <Select
              value={formData.gradoconsulta}
              onValueChange={(value: GradoConsulta) => handleChange('gradoconsulta', value)}
              disabled={isSubmitting}
            >
              <SelectTrigger id="gradoconsulta">
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

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? 'Guardando...' : 'Guardar'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
