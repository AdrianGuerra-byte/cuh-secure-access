import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { SigeUser, CreateUserData, UpdateUserData } from '@/types/sige.types';
import { SigeApiService } from '@/services/sige-api.service';
import { UserCard } from '@/components/sige/UserCard';
import { UserTable } from '@/components/sige/UserTable';
import { UserFormCreate } from '@/components/sige/UserFormCreate';
import { UserModalEdit } from '@/components/sige/UserModalEdit';
import { ConfirmDelete } from '@/components/sige/ConfirmDelete';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import cuhLogo from '@/assets/cuh-logo.png';
import { Plus, LayoutGrid, Table, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type ViewMode = 'cards' | 'table';
type PageState = 'list' | 'create';

const SigeHome = () => {
  const [users, setUsers] = useState<SigeUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [pageState, setPageState] = useState<PageState>('list');

  // Edit modal state
  const [editingUser, setEditingUser] = useState<SigeUser | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Delete confirmation state
  const [deletingUser, setDeletingUser] = useState<SigeUser | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Create user state
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setIsLoading(true);
      const data = await SigeApiService.getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error loading users:', error);
      toast.error('Error al cargar los usuarios');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateUser = async (data: CreateUserData) => {
    try {
      setIsCreating(true);
      await SigeApiService.createUser(data);
      toast.success('Usuario creado exitosamente');
      setPageState('list');
      await loadUsers();
    } catch (error) {
      console.error('Error creating user:', error);
      const message = error instanceof Error ? error.message : 'Error al crear usuario';
      toast.error(message);
      throw error; // Re-throw to let form handle it
    } finally {
      setIsCreating(false);
    }
  };

  const handleEditClick = (user: SigeUser) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  const handleUpdateUser = async (data: UpdateUserData) => {
    if (!editingUser?.numero_usuario) return;

    try {
      setIsUpdating(true);
      await SigeApiService.updateUser(editingUser.numero_usuario, data);
      toast.success('Usuario actualizado exitosamente');
      setIsEditModalOpen(false);
      setEditingUser(null);
      await loadUsers();
    } catch (error) {
      console.error('Error updating user:', error);
      const message = error instanceof Error ? error.message : 'Error al actualizar usuario';
      toast.error(message);
      throw error; // Re-throw to let form handle it
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteClick = (user: SigeUser) => {
    setDeletingUser(user);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!deletingUser) return;
    
    const userId = deletingUser.numero_usuario;
    if (userId === undefined || userId === null) {
      toast.error('No se puede eliminar: ID de usuario no válido');
      console.error('Usuario sin numero_usuario:', deletingUser);
      return;
    }

    try {
      setIsDeleting(true);
      await SigeApiService.deleteUser(userId);
      toast.success('Usuario eliminado exitosamente');
      setIsDeleteDialogOpen(false);
      setDeletingUser(null);
      await loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      const message = error instanceof Error ? error.message : 'Error al eliminar usuario';
      toast.error(message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={cuhLogo} 
                alt="Centro Universitario Hidalguense" 
                className="h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary">SIGE - Gestión de Usuarios</h1>
                <p className="text-sm text-muted-foreground">
                  Sistema Integral de Gestión Educativa
                </p>
              </div>
            </div>
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                SIREC
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {pageState === 'list' ? (
          <>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-xl font-semibold">
                Usuarios SIGE ({users.length})
              </h2>
              <div className="flex gap-2">
                {/* View Mode Toggle */}
                <div className="flex rounded-md border border-border overflow-hidden">
                  <Button
                    variant={viewMode === 'cards' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('cards')}
                    className="rounded-none"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'table' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('table')}
                    className="rounded-none"
                  >
                    <Table className="h-4 w-4" />
                  </Button>
                </div>

                {/* Create Button */}
                <Button onClick={() => setPageState('create')}>
                  <Plus className="h-4 w-4 mr-2" />
                  Crear nuevo usuario
                </Button>
              </div>
            </div>

            {/* Content */}
            {isLoading ? (
              <div className="space-y-4">
                {viewMode === 'cards' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <Skeleton key={i} className="h-32" />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {[...Array(5)].map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                )}
              </div>
            ) : users.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No hay usuarios registrados
                </p>
                <Button onClick={() => setPageState('create')}>
                  <Plus className="h-4 w-4 mr-2" />
                  Crear primer usuario
                </Button>
              </div>
            ) : viewMode === 'cards' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                  <UserCard
                    key={user.numero_usuario || user.cuenta}
                    user={user}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                  />
                ))}
              </div>
            ) : (
              <UserTable
                users={users}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
              />
            )}
          </>
        ) : (
          <UserFormCreate
            onSubmit={handleCreateUser}
            onCancel={() => setPageState('list')}
            isSubmitting={isCreating}
          />
        )}
      </main>

      {/* Edit Modal */}
      <UserModalEdit
        user={editingUser}
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        onSubmit={handleUpdateUser}
        isSubmitting={isUpdating}
      />

      {/* Delete Confirmation */}
      <ConfirmDelete
        user={deletingUser}
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleConfirmDelete}
        isDeleting={isDeleting}
      />

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Centro Universitario Hidalguense. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SigeHome;
