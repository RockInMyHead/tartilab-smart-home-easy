
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
    quote: "Easy Home has completely transformed how I interact with my living space. The system is intuitive and the devices work flawlessly together.",
    author: "Elena Petrova",
    position: "Interior Designer"
  },
  {
    quote: "I was skeptical about smart home tech, but Easy Home made it so simple to set up and use. Now I can't imagine living without it!",
    author: "Ivan Sokolov",
    position: "Software Engineer"
  },
  {
    quote: "The energy savings alone paid for my Easy Home system in less than a year. The climate control feature is incredibly efficient.",
    author: "Marina Ivanova",
    position: "Financial Analyst"
  },
  {
    quote: "As someone who travels often, the security features give me peace of mind knowing I can check on my home from anywhere.",
    author: "Dmitry Volkov",
    position: "Business Consultant"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-ehome-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-ehome-muted text-lg max-w-2xl mx-auto">
            Hear from people who have transformed their homes with our smart solutions.
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
