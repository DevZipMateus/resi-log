
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Shield, Truck } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5530286449?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20transporte%20de%20resíduos.', '_blank');
  };

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/5 to-primary/20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary font-medium mb-6 animate-slide-up [animation-delay:300ms]">
                Transporte Especializado de Resíduos
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
                <span className="text-primary">Segurança</span> e Eficiência no Transporte de Resíduos
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-slide-up [animation-delay:700ms]">
                Cuidamos do seu descarte com responsabilidade. Especialistas em coleta, transporte e destinação final de resíduos industriais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:900ms] mb-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-lg group"
                  onClick={handleWhatsAppClick}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-muted-foreground text-sm animate-slide-up [animation-delay:1100ms]">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-2" />
                  Licenciado e certificado
                </div>
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-primary mr-2" />
                  Frota especializada
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-slide-up [animation-delay:800ms]">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Responsabilidade Ambiental</h3>
                    <p className="text-muted-foreground">
                      Destinação correta e sustentável de resíduos industriais com total segurança e conformidade legal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
