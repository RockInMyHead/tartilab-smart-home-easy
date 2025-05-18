
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
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: 'Центральный Хаб',
    description: 'Центральный мозг вашей системы умного дома, соединяющий и управляющий всеми устройствами.',
    price: '14 990 ₽',
    image: 'https://images.unsplash.com/photo-1551273226-c532e59ab2d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    tag: 'Хит продаж',
    discount: '20%'
  },
  {
    id: 2,
    name: 'Умный Термостат',
    description: 'Экономьте энергию и поддерживайте оптимальный комфорт с нашим самообучающимся термостатом.',
    price: '8 990 ₽',
    image: 'https://images.unsplash.com/photo-1567030326741-fc39253afcbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    tag: 'Экономия'
  },
  {
    id: 3,
    name: 'Набор Умных Ламп',
    description: 'Преобразите освещение с помощью цветных, диммируемых умных ламп с голосовым управлением.',
    price: '7 990 ₽',
    image: 'https://images.unsplash.com/photo-1573821663912-6df460f9c684?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    discount: '15%'
  },
  {
    id: 4,
    name: 'Камера Безопасности',
    description: 'Следите за своим домом с помощью нашей HD-камеры с ночным видением и детектором движения.',
    price: '12 990 ₽',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    tag: 'Новинка'
  }
];

const ProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  
  return (
    <section id="products" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-purple font-medium text-lg">Каталог</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши Умные Устройства</h2>
          <p className="text-ehome-muted text-lg max-w-2xl mx-auto">
            Высококачественные, надежные умные устройства, созданные для безупречной совместной работы.
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
              <div className="relative overflow-hidden h-48">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                {product.tag && (
                  <Badge className="absolute top-3 left-3 bg-purple text-white">
                    {product.tag}
                  </Badge>
                )}
                {product.discount && (
                  <Badge className="absolute top-3 right-3 bg-destructive text-white">
                    Скидка {product.discount}
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription className="text-ehome-muted">{product.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{product.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button className="w-full btn-primary">Добавить в корзину</Button>
                <Button variant="outline" className="w-full border border-purple text-purple hover:bg-purple hover:text-white">
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple/10 to-purple-light/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Нужна помощь с выбором?</h3>
              <p className="text-ehome-muted">Получите бесплатную консультацию от наших специалистов</p>
            </div>
            <Button className="bg-purple text-white hover:bg-purple-dark">
              Связаться с консультантом
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
