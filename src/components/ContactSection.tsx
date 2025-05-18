
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Связаться с Нами</h2>
          <p className="text-ehome-muted text-lg max-w-2xl mx-auto">
            У вас есть вопросы о наших продуктах или нужна консультация? Свяжитесь с нами!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Напишите Нам</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Ваше Имя
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Иван Иванов"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Ваш Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="ivan@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Тема
                </label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="Чем мы можем помочь?"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Ваше Сообщение
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Напишите ваше сообщение здесь..."
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full btn-primary">
                Отправить Сообщение
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center animate-fade-in-slow">
            <div className="bg-gradient-purple p-0.5 rounded-2xl shadow-xl mb-8">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-2xl font-semibold mb-4">Почему Выбирают Easy Home?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-purple mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="ml-3">Профессиональная установка и настройка</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-purple mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="ml-3">2 года гарантии на все продукты</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-purple mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="ml-3">Техническая поддержка 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-purple mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="ml-3">Бесплатная консультация и проектирование</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass p-6">
              <h3 className="text-xl font-semibold mb-4">Наш Офис</h3>
              <p className="mb-2">ул. Умная, 123, Москва</p>
              <p className="mb-2">Телефон: +7 (123) 456-7890</p>
              <p>Email: info@easyhome.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
