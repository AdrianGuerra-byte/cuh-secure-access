import { useEffect, useState } from 'react';
import { Department } from '@/types/sige.types';
import { SigeApiService } from '@/services/sige-api.service';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

interface DepartmentSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
}

export const DepartmentSelect = ({ value, onValueChange, disabled }: DepartmentSelectProps) => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    try {
      setIsLoading(true);
      const data = await SigeApiService.getAllDepartments();
      setDepartments(data);
    } catch (error) {
      console.error('Error loading departments:', error);
      toast.error('Error al cargar departamentos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled || isLoading}>
      <SelectTrigger>
        <SelectValue placeholder={isLoading ? "Cargando..." : "Seleccionar departamento"} />
      </SelectTrigger>
      <SelectContent>
        {departments.map((dept) => (
          <SelectItem key={dept.iddepartamento} value={dept.iddepartamento}>
            {dept.descripcion}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
