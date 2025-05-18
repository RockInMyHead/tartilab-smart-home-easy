
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const products = [
  {
    id: 1,
    name: 'Smart Hub Controller',
    description: 'The central brain of your smart home system, connecting and controlling all your devices.',
    price: '$149.99',
    image: 'https://images.unsplash.com/photo-1551273226-c532e59ab2d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Smart Thermostat',
    description: 'Save energy and maintain optimal comfort with our learning thermostat.',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1567030326741-fc39253afcbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Smart Bulb Kit',
    description: 'Transform your lighting with color-changing, dimmable smart bulbs.',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1573821663912-6df460f9c684?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Security Camera',
    description: 'Keep an eye on your home with our HD security camera with night vision.',
    price: '$129.99',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

const ProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  
  return (
    <section id="products" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Smart Products</h2>
          <p className="text-ehome-muted text-lg max-w-2xl mx-auto">
            High-quality, reliable smart devices designed to work seamlessly together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className={`overflow-hidden transition-all duration-300 ${
                hoveredProduct === product.id 
                  ? 'shadow-xl transform -translate-y-2' 
                  : 'shadow-md'
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="overflow-hidden h-48">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription className="text-ehome-muted">{product.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full btn-primary">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
