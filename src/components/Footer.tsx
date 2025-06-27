import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary-foreground text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/1548f396-239a-4124-b1b3-750e3bf84956.png" 
              alt="Resilog Transportes Especiais - Logo" 
              className="h-16 w-auto object-contain"
            />
            <p className="text-white/80 max-w-xs">
              Especialistas em coleta, transporte e destinação final de resíduos industriais com segurança e responsabilidade.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#about">Sobre</FooterNavItem>
              <FooterNavItem href="#services">Serviços</FooterNavItem>
              <FooterNavItem href="#testimonials">Depoimentos</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#services">Postos de Combustíveis</FooterNavItem>
              <FooterNavItem href="#services">Concessionárias</FooterNavItem>
              <FooterNavItem href="#services">Transportadoras</FooterNavItem>
              <FooterNavItem href="#services">Oficinas Mecânicas</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li>(55) 3028-6449</li>
              <li>resilogtransportes@hotmail.com</li>
              <li>Rua Barão do Triunfo, 1140/01</li>
              <li>Segunda a Sexta, 8h às 18h</li>
              <li>Sábado, 8h às 12h</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        {/* Seção da Fepam e IBAMA */}
        <div className="flex flex-col items-center justify-center mb-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/6e396db7-0724-4c0c-a750-5c8402ccf68b.png" 
                alt="FEPAM - Fundação Estadual de Proteção Ambiental" 
                className="h-12 w-auto object-contain"
              />
              <p className="text-white/90 text-sm text-center">
                RESILOG é uma empresa licenciada pela FEPAM<br />
                <span className="text-white/70 text-xs">
                  Fundação Estadual de Proteção Ambiental
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/d38001b3-1061-4acf-9489-50757522097f.png" 
                alt="IBAMA - Instituto Brasileiro do Meio Ambiente" 
                className="h-12 w-auto object-contain"
              />
              <p className="text-white/90 text-sm text-center">
                RESILOG é uma empresa licenciada pelo IBAMA<br />
                <span className="text-white/70 text-xs">
                  Instituto Brasileiro do Meio Ambiente
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Resilog Transportes Especiais Ltda. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-primary/80 border-primary/20 hover:bg-primary/90 text-white"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
}

const FooterNavItem = ({ href, children }: FooterNavItemProps) => (
  <li>
    <a
      href={href}
      className="text-white/70 hover:text-primary transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

export default Footer;
