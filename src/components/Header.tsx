import { ShoppingCart, Store, Phone, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onBankInfoClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick, onBankInfoClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Bodega Osman
              </h1>
              <p className="text-xs text-muted-foreground">Dulces & Snacks</p>
            </div>
          </div>
        </div>
        
        {/* <nav className="hidden md:flex items-center space-x-6">
          <a href="#productos" className="text-sm font-medium hover:text-primary transition-colors">
            Productos
          </a>
          <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </a>
        </nav> */}

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onBankInfoClick}
            className="hidden sm:flex items-center space-x-2"
          >
            <CreditCard className="h-4 w-4" />
            <span>Datos Bancarios</span>
          </Button>
          
          <Button
            variant="outline" 
            size="sm"
            onClick={onBankInfoClick}
            className="sm:hidden"
          >
            <CreditCard className="h-4 w-4" />
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={onCartClick}
            className="relative bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">Carrito</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};