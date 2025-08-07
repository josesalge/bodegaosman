import { Upload, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.jpg";

export const HeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-secondary" />
      
      <div className="container relative px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Dulces & Snacks
                </span>
                <br />
                <span className="text-foreground">para todos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Descubre nuestra deliciosa selección de dulces, chocolates y snacks. 
                Calidad premium, precios justos.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {/* <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Ver Productos
              </Button>
              <Button variant="outline" size="lg">
                Contactar
              </Button> */}
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-medium">4.9/5</span>
                <span className="text-muted-foreground">Calificación</span>
              </div>
              <div>
                <span className="font-medium">+1000</span>
                <span className="text-muted-foreground ml-1">Productos Vendidos</span>
              </div>
              <div>
                <span className="font-medium">Entrega</span>
                <span className="text-muted-foreground ml-1">Rápida</span>
              </div>
            </div>
          </div>
          
          {/* Right content */}
          <div className="space-y-6">
            <div className="relative w-full max-w-[400px] mx-auto"> {/* limita el ancho */}
              <img
                src={logo}
                alt="Dulces y snacks variados"
                className="w-full h-auto object-cover rounded-xl shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
            </div>
            
            {/* Logo upload section
            <Card className="p-6 border-dashed border-2 border-muted-foreground/30 hover:border-primary/50 transition-colors">
              <div className="text-center space-y-3">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Cargar Logo de la Empresa</h3>
                  <p className="text-sm text-muted-foreground">
                    Arrastra o haz clic para subir tu logo personalizado
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Seleccionar Archivo
                </Button>
              </div>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};