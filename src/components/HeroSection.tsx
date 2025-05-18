
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-ehome-bg to-white pt-20">
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-from-left">
          <div className="mb-4">
            <Badge className="bg-purple/10 text-purple hover:bg-purple/20 border-none">
              #1 в России
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Преобразите Свой Дом</span>
            <span className="text-gradient bg-gradient-purple bg-clip-text text-transparent">С Умными Технологиями</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-ehome-muted max-w-lg">
            Создайте более комфортное, эффективное и безопасное жилое пространство с нашими инновационными решениями для умного дома.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary">Исследовать Продукты</Button>
            <Button variant="outline" className="border border-purple hover:bg-purple-light hover:text-white transition-all duration-300">
              Смотреть Демо
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center text-white text-xs">ИМ</div>
              <div className="w-8 h-8 rounded-full bg-purple-light flex items-center justify-center text-white text-xs">АК</div>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-xs">ПС</div>
            </div>
            <div className="text-sm">
              <span className="text-purple font-medium">5000+</span> довольных клиентов
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 animate-slide-from-right">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-light/20 rounded-full filter blur-2xl animate-pulse-subtle"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple/20 rounded-full filter blur-2xl animate-pulse-subtle"></div>
            <img 
              src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Панель Управления Умным Домом" 
              className="rounded-2xl shadow-xl w-full max-w-lg mx-auto animate-float"
            />
            
            <div className="absolute -bottom-5 -left-5 md:left-5 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs font-medium">Активные устройства</span>
              </div>
              <div className="text-xl font-bold">12 устройств</div>
              <div className="text-xs text-ehome-muted mt-1">Все работают нормально</div>
            </div>
            
            <div className="absolute -top-5 -right-5 md:right-5 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-purple"></div>
                <span className="text-xs font-medium">Экономия энергии</span>
              </div>
              <div className="text-xl font-bold">-23% расходов</div>
              <div className="text-xs text-ehome-muted mt-1">По сравнению с прошлым месяцем</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-container mt-16">
        <div className="py-8 px-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md flex flex-wrap justify-around items-center gap-8">
          <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Партнер 1" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo2.png" alt="Партнер 2" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png" alt="Партнер 3" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo4.png" alt="Партнер 4" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo5.png" alt="Партнер 5" className="h-10 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
