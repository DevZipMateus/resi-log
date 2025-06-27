
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Factory, Car, Wrench, Building, Recycle } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "Postos de Combustíveis",
      description: "Coleta especializada de resíduos perigosos gerados em postos de combustíveis, incluindo águas oleosas e materiais contaminados."
    }, 
    {
      icon: <Car className="h-12 w-12 text-primary" />,
      title: "Concessionárias",
      description: "Coletamos os sólidos, filtros e outros materiais das concessionárias."
    }, 
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      title: "Transportadoras",
      description: "Gestão completa de resíduos gerados por empresas de transporte, garantindo conformidade ambiental."
    }, 
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Oficinas Mecânicas",
      description: "Coleta e destinação adequada de filtros usados e demais resíduos mecânicos."
    }, 
    {
      icon: <Factory className="h-12 w-12 text-primary" />,
      title: "Empresas Industriais",
      description: "Transporte especializado de resíduos industriais diversos, seguindo todas as normas de segurança."
    }, 
    {
      icon: <Recycle className="h-12 w-12 text-primary" />,
      title: "Destinação Final",
      description: "Parceria com empresas licenciadas para tratamento e disposição final ambientalmente correta."
    }
  ];
  
  return (
    <section id="services" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Soluções Completas em Transporte de Resíduos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Atendemos diversos segmentos com expertise, segurança e total conformidade às normas ambientais e de segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              index={index} 
            />
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <Card className="border border-border/50 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Por que Escolher a Resilog?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Conformidade Legal</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Suporte Disponível</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">+10</div>
                  <p className="text-muted-foreground">Anos de Experiência</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  index
}: ServiceCardProps) => (
  <Card className={`animate-on-scroll service-card border border-border/50 shadow-md overflow-hidden h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-8 flex flex-col items-center text-center h-full">
      <div className="mb-5 p-4 bg-primary/5 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default ServicesSection;
