import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, MessageCircle, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SuccessMessageProps {
  phoneNumber: string;
  onReset: () => void;
  onGoHome?: () => void;
}

const SuccessMessage = ({ phoneNumber, onReset, onGoHome }: SuccessMessageProps) => {
  const [countdown, setCountdown] = useState(50);

  // Redireccion al Home despues de 50 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (onGoHome) {
            onGoHome();
          } else {
            onReset();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onGoHome, onReset]);

  // Escape para ir al inicio
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (onGoHome) {
          onGoHome();
        } else {
          onReset();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onGoHome, onReset]);

  return (
    <Card className="p-8 max-w-2xl mx-auto text-center">
      <div className="space-y-6">
        <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-12 h-12 text-success" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">
            ¡Contraseña restablecida exitosamente!
          </h2>
          <p className="text-muted-foreground">
            La nueva contraseña ha sido generada.
          </p>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/20 border-2 border-primary/20">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
              <p className="text-lg font-medium text-foreground">
                Su nueva contraseña es:
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-primary/30 shadow-lg">
              <p className="text-3xl font-mono font-bold text-primary tracking-wider break-all select-all">
                12345678Aa
              </p>
            </div>
          </div>
        </Card>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Importante:</strong> Por favor, una vez ingrese a su portal, cambie su contraseña.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <Button
              onClick={onGoHome || onReset}
              className="flex-1 py-6 text-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              Ir al inicio
            </Button>
            
            <Button
              onClick={onReset}
              variant="outline"
              className="flex-1 py-6 text-lg"
            >
              Otro restablecimiento
            </Button>
          </div>
          
          {countdown > 0 && (
            <div className="text-center py-2">
              <p className="text-sm text-muted-foreground">
                Redirigiendo automáticamente al inicio en <span className="font-semibold text-primary">{countdown}</span> segundos...
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Presiona Escape para regresar inmediatamente
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default SuccessMessage;
