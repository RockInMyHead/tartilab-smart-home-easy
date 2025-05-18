
import React from 'react';
import { Wifi, Lightbulb, Lock, Thermometer, Shield, Home, Smartphone, Globe, Battery } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: <Wifi className="h-8 w-8 text-purple" />,
    title: 'Беспроблемное Подключение',
    description: 'Подключайте и управляйте всеми устройствами через единое приложение для полностью интегрированного умного дома.',
    badge: 'Популярное'
  },
  {
    icon: <Thermometer className="h-8 w-8 text-purple" />,
    title: 'Климат-контроль',
    description: "Оптимизируйте температуру в доме автоматически на основе ваших предпочтений для комфорта и эффективности.",
    badge: 'Экономия Энергии'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-purple" />,
    title: 'Умное Освещение',
    description: 'Автоматизируйте освещение в зависимости от времени суток, присутствия или по расписанию для идеальной атмосферы.',
    image: 'https://images.unsplash.com/photo-1573821663912-6df460f9c684?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: <Lock className="h-8 w-8 text-purple" />,
    title: 'Улучшенная Безопасность',
    description: 'Контролируйте доступ к вашему дому удаленно с помощью умных замков, камер и датчиков движения.',
    badge: 'Безопасность'
  },
  {
    icon: <Shield className="h-8 w-8 text-purple" />,
    title: 'Конфиденциальность Данных',
    description: 'Ваша информация остается защищенной благодаря продвинутому шифрованию и локальной обработке данных.',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: <Home className="h-8 w-8 text-purple" />,
    title: 'Голосовое Управление',
    description: 'Управляйте всей системой умного дома с помощью естественных голосовых команд для удобства использования.',
    badge: 'Новинка'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-purple" />,
    title: 'Мобильное Приложение',
    description: 'Управляйте всеми устройствами через удобное мобильное приложение из любой точки мира.',
    image: 'https://images.unsplash.com/photo-1551273226-c532e59ab2d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    icon: <Globe className="h-8 w-8 text-purple" />,
    title: 'Умная Экосистема',
    description: 'Интеграция со всеми популярными сервисами для создания полноценной экосистемы умного дома.',
    badge: 'Интеграция'
  },
  {
    icon: <Battery className="h-8 w-8 text-purple" />,
    title: 'Энергосбережение',
    description: 'Снижение расходов на электроэнергию благодаря умным алгоритмам и эффективному управлению питанием.',
    image: 'https://images.unsplash.com/photo-1567030326741-fc39253afcbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

const FeatureHighlight = () => (
  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple/10 to-purple-light/30 backdrop-blur-sm mb-16 overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-purple/10 rounded-full filter blur-3xl"></div>
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
      <div className="md:w-2/3">
        <Badge className="mb-4 bg-purple text-white hover:bg-purple-dark">Революция в умном доме</Badge>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple to-purple-light bg-clip-text text-transparent">
          Представляем Easy Home AI Assistant
        </h3>
        <p className="text-lg text-ehome-muted mb-6">
          Наш новый ИИ-ассистент научился предугадывать ваши потребности и автоматически адаптировать работу всех устройств для максимального комфорта.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 text-sm bg-purple/10 text-purple rounded-full">Голосовые команды</span>
          <span className="px-3 py-1 text-sm bg-purple/10 text-purple rounded-full">Машинное обучение</span>
          <span className="px-3 py-1 text-sm bg-purple/10 text-purple rounded-full">Автоматизация</span>
        </div>
      </div>
      <div className="relative w-full md:w-1/3 h-64 rounded-xl overflow-hidden shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="Easy Home AI Assistant" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ehome-text/80 to-transparent flex items-end">
          <span className="p-4 text-white font-semibold">Новое поколение умного дома</span>
        </div>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-ehome-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-purple font-medium text-lg">Наши Возможности</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мощные Функции для Умного Дома</h2>
          <p className="text-ehome-muted text-lg max-w-2xl mx-auto">
            Наши решения для умного дома разработаны, чтобы сделать вашу жизнь проще, комфортнее и безопаснее.
          </p>
        </div>
        
        <FeatureHighlight />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card hover-scale"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="mb-4 p-3 bg-purple/10 w-fit rounded-lg">
                {feature.icon}
              </div>
              {feature.badge && (
                <Badge className="mb-3 bg-purple-light/20 text-purple border-purple/30">
                  {feature.badge}
                </Badge>
              )}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-ehome-muted mb-4">{feature.description}</p>
              {feature.image && (
                <div className="mt-4 rounded-lg overflow-hidden h-36">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-purple to-purple-light">
            <button className="rounded-full bg-white px-6 py-3 text-purple font-medium hover:bg-transparent hover:text-white transition-colors">
              Узнать больше о функциях
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
