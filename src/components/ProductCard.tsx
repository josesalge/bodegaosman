import { useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
            <Badge variant="secondary" className="ml-2 shrink-0">
              {product.category}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-primary">
              {product.price.toFixed(2)} REF
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-3">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium">Cantidad:</span>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-8 w-8 p-0"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="font-medium min-w-[2rem] text-center">{quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity(quantity + 1)}
              className="h-8 w-8 p-0"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};