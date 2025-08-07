import { Store, Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground mt-auto">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Store className="h-6 w-6" />
              <h3 className="text-xl font-bold">BodegaOsman</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Tu tienda favorita de dulces y snacks. Productos frescos, 
              precios justos y entregas rápidas en toda la oficina.
            </p>
          </div>
          
          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+58 414-2079800</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@bodegaosman.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Caracas, Venezuela</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4" />
                <span>@bodegaosman</span>
              </div>
            </div>
          </div>
          
          {/* Horarios */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Horarios</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div>
                  <p>Lunes - Viernes: 8:00 AM - 5:00 PM</p>
                  <p>Sábados: Cerrado</p>
                  <p>Domingos: Cerrado</p>
                  <p>Feriados: No laboramos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Bodega Osman. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};