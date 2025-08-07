import { useState } from "react";
import { Trash2, Plus, Minus, ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Product } from "./ProductCard";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const CartModal = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}: CartModalProps) => {
  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    
    let message = "*NUEVO PEDIDO - Bodega Osman*\n\n";
    message += "*Detalles del pedido:*\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      message += `   • Precio unitario: ${item.product.price.toFixed(2)} REF\n`;
      message += `   • Subtotal: ${(item.product.price * item.quantity).toFixed(2)} REF\n\n`;
    });
    
    message += `*TOTAL: ${total.toFixed(2)} REF*\n\n`;
    message += "Por favor confirme disponibilidad. ";
    message += "La factura será enviada en los pagos de nómina. En caso de querer adelantar el pago, escribir al Whatsapp.";

    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+584142079800?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Carrito de Compras</span>
            {items.length > 0 && (
              <Badge variant="secondary">{items.length} productos</Badge>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Tu carrito está vacío</p>
              <p className="text-sm text-muted-foreground mt-1">
                Agrega algunos productos para comenzar
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-16 w-16 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{item.product.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.product.price.toFixed(2)} REF c/u
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="font-medium min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {(item.product.price * item.quantity).toFixed(2)} REF
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-destructive hover:text-destructive mt-1 p-1 h-auto"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <>
            <Separator />
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">
                  {total.toFixed(2)} REF
                </span>
              </div>
              <Button
                onClick={handleWhatsAppOrder}
                className="w-full bg-gradient-accent hover:opacity-90 transition-opacity text-accent-foreground"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Realizar Pedido por WhatsApp
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};