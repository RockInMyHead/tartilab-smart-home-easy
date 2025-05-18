
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Easy Home полностью изменил мое взаимодействие с жилым пространством. Система интуитивно понятна, а устройства безупречно работают вместе.",
    author: "Елена Петрова",
    position: "Дизайнер интерьера"
  },
  {
    quote: "Я скептически относился к технологиям умного дома, но Easy Home сделал настройку и использование настолько простыми. Теперь я не могу представить жизнь без этого!",
    author: "Иван Соколов",
    position: "Программист"
  },
  {
    quote: "Экономия энергии окупила мою систему Easy Home менее чем за год. Функция климат-контроля невероятно эффективна.",
    author: "Марина Иванова",
    position: "Финансовый аналитик"
  },
  {
    quote: "Как человеку, который часто путешествует, функции безопасности дают мне душевное спокойствие, зная, что я могу проверить свой дом из любой точки мира.",
    author: "Дмитрий Волков",
    position: "Бизнес-консультант"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-ehome-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что Говорят Наши Клиенты</h2>
          <p className="text-ehome-muted text-lg max-w-2xl mx-auto">
            Отзывы людей, которые преобразили свои дома с помощью наших умных решений.
          </p>
        </div>
        
        <div className="py-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="glass h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <svg className="w-8 h-8 text-purple-light" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-ehome-muted">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 bg-purple-light text-white hover:bg-purple-dark hover:text-white" />
              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 bg-purple-light text-white hover:bg-purple-dark hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
