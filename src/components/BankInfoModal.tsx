import { CreditCard, Phone, Building, FileText, TrendingUp } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BankInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BankInfoModal = ({ isOpen, onClose }: BankInfoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <CreditCard className="h-5 w-5" />
            <span>Información Bancaria</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Teléfono de Contacto</p>
                  <p className="text-muted-foreground">+58 414-2079800</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Building className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Banco</p>
                  <p className="text-muted-foreground">0105 - Banco Mercantil</p>
                  <p className="text-sm text-muted-foreground">Cuenta Corriente: 0102-0000-00-0000000000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Documento de Identidad</p>
                  <p className="text-muted-foreground">Cédula: V-15.908.003</p>
                  <p className="text-sm text-muted-foreground">Bodega Osman C.A.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-4 w-4 text-accent" />
                <Badge variant="outline" className="border-accent text-accent">
                  Importante
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                📈 Utilizamos la <strong>tasa oficial del BCV</strong> para el cambio de divisas.
                Los precios mostrados en REF son referenciales y pueden variar según la tasa del día.
              </p>
            </CardContent>
          </Card>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>💬 Envíanos tu comprobante de pago por WhatsApp</p>
            <p>⚡ Entregas rápidas en toda la oficina</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};