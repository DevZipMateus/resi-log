
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const testimonials = [
    {
      name: "João Silva",
      company: "Posto Combustível Central",
      text: "A Resilog tem sido nossa parceira há anos. Serviço impecável, sempre pontuais e com total responsabilidade no manuseio dos resíduos. Recomendo!",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Concessionária AutoMax",
      text: "Profissionalismo exemplar! A equipe da Resilog é altamente qualificada e segue todos os protocolos de segurança. Excelente custo-benefício.",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      company: "Oficina Mecânica do Carlos",
      text: "Atendimento diferenciado e serviço de qualidade. A Resilog nos ajuda a manter nossa empresa em conformidade com todas as normas ambientais.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            A confiança dos nossos clientes é nosso maior patrimônio. Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <Card className="border border-border/50 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Quote className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Faça Parte da Nossa Família de Clientes Satisfeitos</h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco e descubra como podemos ajudar sua empresa com soluções seguras e eficientes para o transporte de resíduos.
              </p>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">Avaliação média dos nossos clientes</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  rating: number;
  index: number;
}

const TestimonialCard = ({ name, company, text, rating, index }: TestimonialCardProps) => (
  <Card className={`animate-on-scroll service-card border border-border/50 shadow-md h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-6 flex flex-col h-full">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-muted-foreground mb-6 flex-grow italic">
        "{text}"
      </blockquote>
      <div className="mt-auto">
        <div className="font-bold">{name}</div>
        <div className="text-sm text-muted-foreground">{company}</div>
      </div>
    </CardContent>
  </Card>
);

export default TestimonialsSection;
