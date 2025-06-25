
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Telefone",
      details: "(55) 3028-6449",
      link: "tel:+5530286449"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "E-mail",
      details: "resilogtransportes@hotmail.com",
      link: "mailto:resilogtransportes@hotmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Endereço",
      details: "Rua Barão do Triunfo, 1140/01",
      link: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Horário",
      details: "Segunda a Sexta, 8h às 18h | Sábado, 8h às 12h",
      link: null
    }
  ];

  return (
    <>
      <section id="contact" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
              Entre em Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              Solicite Seu Orçamento
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Entre em contato conosco para orçamentos de transporte de resíduos. Nossa equipe especializada está à disposição para atender sua empresa com segurança e responsabilidade.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border border-border/50 shadow-card animate-on-scroll">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                    <p className="text-muted-foreground mb-8">
                      Para solicitar orçamentos de transporte de resíduos ou obter mais informações sobre nossos serviços, utilize um dos canais de atendimento abaixo.
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      {contactInfo.map((item, index) => (
                        <ContactInfoItem 
                          key={index}
                          icon={item.icon}
                          title={item.title}
                          details={item.details}
                          link={item.link}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-center p-6 bg-primary/5 rounded-xl max-w-md">
                      <div className="mb-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3">Prefere atendimento via WhatsApp?</h3>
                      <p className="text-muted-foreground mb-6">
                        Clique no botão do WhatsApp no canto inferior direito da tela para falar diretamente com nossos especialistas e receber atendimento personalizado.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        Tempo médio de resposta: <span className="font-medium text-foreground">30 minutos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="location" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              Nossa Localização
            </h2>
            <p className="text-muted-foreground animate-on-scroll">
              Venha nos conhecer pessoalmente ou encontre-nos no mapa
            </p>
          </div>
          
          <div className="animate-on-scroll">
            <Card className="border border-border/50 shadow-card overflow-hidden">
              <div className="h-[400px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.123456789!2d-53.1234567!3d-29.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12345678901234567%3A0x1234567890abcdef!2sRua%20Bar%C3%A3o%20do%20Triunfo%2C%201140%2001!5e0!3m2!1spt-BR!2sbr!4v1627909542948!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mapa de localização - Resilog Transportes Especiais"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string | null;
}

const ContactInfoItem = ({ icon, title, details, link }: ContactInfoItemProps) => {
  const content = (
    <div className="flex">
      <div className="flex-shrink-0 mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground mt-1">{details}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block hover:text-primary transition-colors">
        {content}
      </a>
    );
  }

  return content;
};

export default ContactSection;
