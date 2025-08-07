import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard, Product } from "@/components/ProductCard";
import { CartModal, CartItem } from "@/components/CartModal";
import { BankInfoModal } from "@/components/BankInfoModal";
import { Footer } from "@/components/Footer";
import { sampleProducts } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBankInfoOpen, setIsBankInfoOpen] = useState(false);
  const { toast } = useToast();

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('dulceshop-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dulceshop-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
    
    toast({
      title: "Producto agregado",
      description: `${product.name} ha sido agregado al carrito`,
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    toast({
      title: "Producto eliminado",
      description: "El producto ha sido eliminado del carrito",
    });
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        onBankInfoClick={() => setIsBankInfoOpen(true)}
      />
      
      <main className="flex-1">
        <HeroSection />
        
        <section id="productos" className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestros <span className="bg-gradient-primary bg-clip-text text-transparent">Productos</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Descubre nuestra amplia selección de dulces, snacks y golosinas para todos los gustos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sampleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
      
      <BankInfoModal
        isOpen={isBankInfoOpen}
        onClose={() => setIsBankInfoOpen(false)}
      />
    </div>
  );
};

export default Index;