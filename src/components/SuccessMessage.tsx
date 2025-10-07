import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, MessageCircle } from 'lucide-react';

interface SuccessMessageProps {
  phoneNumber: string;
  onReset: () => void;
}

const SuccessMessage = ({ phoneNumber, onReset }: SuccessMessageProps) => {
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
            La nueva contraseña ha sido generada y enviada
          </p>
        </div>

        <Card className="p-6 bg-accent/30">
          <div className="flex items-start space-x-3">
            <MessageCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground mb-2">
                Mensaje enviado por WhatsApp a:
              </p>
              <p className="text-base text-primary font-semibold">
                {phoneNumber}
              </p>
            </div>
          </div>
        </Card>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Importante:</strong> Por favor, revise su WhatsApp para 
            encontrar el mensaje con su nueva contraseña temporal. 
            Se recomienda cambiar esta contraseña después del primer inicio de sesión.
          </p>
        </div>

        <Button
          onClick={onReset}
          variant="outline"
          className="w-full py-6 text-lg"
        >
          Realizar otro restablecimiento
        </Button>
      </div>
    </Card>
  );
};

export default SuccessMessage;
