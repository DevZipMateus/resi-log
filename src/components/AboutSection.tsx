
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Users, Truck } from 'lucide-react';

const AboutSection = () => {
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

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Segurança",
      description: "Transporte seguro e responsável com total conformidade às normas ambientais."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Excelência",
      description: "Prestação de serviços com qualidade superior e responsabilidade ambiental."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Parceria",
      description: "Excelentes parceiros para tratamento e disposição final dos resíduos sólidos."
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Especialização",
      description: "Expertise no transporte de resíduos para diversos segmentos industriais."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre a Resilog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Especialistas em Transporte de Resíduos
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto animate-on-scroll">
            A Resilog Transportes Especiais Ltda. é uma empresa especializada em coleta, transporte e 
            destinação final de resíduos, atendendo postos de combustíveis, concessionárias, 
            transportadoras, oficinas mecânicas e demais empresas do ramo industrial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Nossa Missão</h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Fornecer a prestação de serviço de transporte de resíduos para várias empresas da região, 
              com excelência, responsabilidade e segurança.
            </p>
            
            <h3 className="text-2xl font-bold mb-6">Nosso Negócio</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A empresa RESILOG conta com excelentes parceiros para o tratamento e disposição final dos 
              resíduos sólidos industriais, garantindo total conformidade ambiental e legal.
            </p>
          </div>

          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-2xl"></div>
              <Card className="relative border border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-4">Compromisso Ambiental</h4>
                    <p className="text-muted-foreground">
                      Trabalhamos com responsabilidade total na destinação correta de resíduos, 
                      protegendo o meio ambiente e cumprindo todas as exigências legais.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="animate-on-scroll service-card border border-border/50 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
