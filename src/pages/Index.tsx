import { useState } from 'react';
import { toast } from 'sonner';
import cuhLogo from '@/assets/cuh-logo.png';
import ProfileSelector from '@/components/ProfileSelector';
import SearchForm from '@/components/SearchForm';
import UserDetails from '@/components/UserDetails';
import SuccessMessage from '@/components/SuccessMessage';
import { ProfileType, UserData } from '@/types/user.types';
import { ApiService } from '@/services/api.service';

type ViewState = 'profile-selection' | 'search' | 'user-details' | 'success';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>('profile-selection');
  const [selectedProfile, setSelectedProfile] = useState<ProfileType | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleProfileSelect = (profile: ProfileType) => {
    setSelectedProfile(profile);
    setCurrentView('search');
  };

  const handleSearch = async (query: string, searchType: 'name' | 'id') => {
    setIsLoading(true);
    
    try {
      let result: UserData | null = null;

      // Call appropriate API based on profile type
      if (selectedProfile === 'student') {
        result = await ApiService.searchStudent(query);
      } else if (selectedProfile === 'teacher') {
        result = await ApiService.searchTeacher(query);
      } else if (selectedProfile === 'administrative') {
        result = await ApiService.searchAdministrative(query);
      }

      if (result) {
        setUserData(result);
        setCurrentView('user-details');
        toast.success('Usuario encontrado');
      } else {
        toast.error('No se encontró ningún usuario con esos datos');
      }
    } catch (error) {
      toast.error('Error al buscar usuario. Por favor, intente nuevamente.');
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!userData || !selectedProfile) return;

    setIsResetting(true);

    try {
      const result = await ApiService.resetPassword(
        selectedProfile,
        userData.id,
        userData.institutionalEmail
      );

      if (result.success) {
        setCurrentView('success');
        toast.success(result.message);
      } else {
        toast.error('Error al restablecer la contraseña');
      }
    } catch (error) {
      toast.error('Error al restablecer la contraseña. Por favor, intente nuevamente.');
      console.error('Reset password error:', error);
    } finally {
      setIsResetting(false);
    }
  };

  const handleBackToProfileSelection = () => {
    setCurrentView('profile-selection');
    setSelectedProfile(null);
    setUserData(null);
  };

  const handleBackToSearch = () => {
    setCurrentView('search');
    setUserData(null);
  };

  const handleReset = () => {
    setCurrentView('profile-selection');
    setSelectedProfile(null);
    setUserData(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-4">
            <img 
              src={cuhLogo} 
              alt="Centro Universitario Hidalguense" 
              className="h-16 object-contain"
            />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary">SIREC</h1>
              <p className="text-sm text-muted-foreground">
                Sistema Integral de Recuperación de Credenciales
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {currentView === 'profile-selection' && (
          <ProfileSelector onSelectProfile={handleProfileSelect} />
        )}

        {currentView === 'search' && selectedProfile && (
          <SearchForm
            profileType={selectedProfile}
            onSearch={handleSearch}
            onBack={handleBackToProfileSelection}
            isLoading={isLoading}
          />
        )}

        {currentView === 'user-details' && selectedProfile && userData && (
          <UserDetails
            profileType={selectedProfile}
            userData={userData}
            onBack={handleBackToSearch}
            onResetPassword={handleResetPassword}
            isResetting={isResetting}
          />
        )}

        {currentView === 'success' && userData && (
          <SuccessMessage
            email={userData.institutionalEmail}
            onReset={handleReset}
          />
        )}
      </main>

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

export default Index;
