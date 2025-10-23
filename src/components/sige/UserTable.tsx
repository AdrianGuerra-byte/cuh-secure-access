import { useState } from 'react';
import { SigeUser } from '@/types/sige.types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Edit, Trash2, Search, ArrowUpDown } from 'lucide-react';

interface UserTableProps {
  users: SigeUser[];
  onEdit: (user: SigeUser) => void;
  onDelete: (user: SigeUser) => void;
}

export const UserTable = ({ users, onEdit, onDelete }: UserTableProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAscending, setSortAscending] = useState(true);

  // Filter users by search query
  const filteredUsers = users.filter(user =>
    user.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.cuenta.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.nombre_departamento.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort users by name
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const comparison = a.nombre.localeCompare(b.nombre);
    return sortAscending ? comparison : -comparison;
  });

  const toggleSort = () => {
    setSortAscending(!sortAscending);
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar por nombre, cuenta o departamento..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={toggleSort}
                  className="flex items-center gap-2 hover:bg-transparent"
                >
                  Nombre
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Cuenta</TableHead>
              <TableHead>Departamento</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground">
                  No se encontraron usuarios
                </TableCell>
              </TableRow>
            ) : (
              sortedUsers.map((user) => (
                <TableRow key={user.numero_usuario || user.cuenta}>
                  <TableCell className="font-medium">{user.nombre}</TableCell>
                  <TableCell>{user.cuenta}</TableCell>
                  <TableCell>
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {user.nombre_departamento}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onEdit(user)}
                        aria-label={`Editar ${user.nombre}`}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onDelete(user)}
                        aria-label={`Eliminar ${user.nombre}`}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground text-center">
        Mostrando {sortedUsers.length} de {users.length} usuarios
      </p>
    </div>
  );
};
