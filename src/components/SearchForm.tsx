import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Search, ArrowLeft } from 'lucide-react';
import { ProfileType } from '@/types/user.types';

interface SearchFormProps {
  profileType: ProfileType;
  onSearch: (query: string, searchType: 'name' | 'id') => void;
  onBack: () => void;
  isLoading?: boolean;
}

const SearchForm = ({ profileType, onSearch, onBack, isLoading }: SearchFormProps) => {
  const [searchType, setSearchType] = useState<'name' | 'id'>('name');
  const [query, setQuery] = useState('');

  const profileLabels = {
    student: { name: 'Nombre completo del alumno', id: 'Matrícula del alumno' },
    teacher: { name: 'Nombre completo del docente', id: 'Matrícula del docente' },
    administrative: { name: 'Nombre completo', id: 'ID de empleado' },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), searchType);
    }
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6 -ml-2"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Regresar
      </Button>

      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">
            Búsqueda de usuario
          </h2>
          <p className="text-muted-foreground">
            Ingrese los datos para encontrar el perfil
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <RadioGroup
            value={searchType}
            onValueChange={(value) => setSearchType(value as 'name' | 'id')}
            className="space-y-3"
          >
            <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
              <RadioGroupItem value="name" id="name" />
              <Label htmlFor="name" className="flex-1 cursor-pointer font-normal">
                Buscar por nombre completo
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
              <RadioGroupItem value="id" id="id" />
              <Label htmlFor="id" className="flex-1 cursor-pointer font-normal">
                Buscar por {profileType === 'administrative' ? 'ID de empleado' : 'matrícula'}
              </Label>
            </div>
          </RadioGroup>

          <div className="space-y-2">
            <Label htmlFor="search-query">
              {searchType === 'name' 
                ? profileLabels[profileType].name 
                : profileLabels[profileType].id}
            </Label>
            <Input
              id="search-query"
              type="text"
              placeholder={
                searchType === 'name'
                  ? 'Ej: Juan Pérez García'
                  : profileType === 'administrative' 
                  ? 'Ej: ADM2019023'
                  : 'Ej: EST2024001'
              }
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-lg"
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            className="w-full text-lg py-6"
            disabled={!query.trim() || isLoading}
          >
            <Search className="w-5 h-5 mr-2" />
            {isLoading ? 'Buscando...' : 'Buscar usuario'}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default SearchForm;
