
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5530286449?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20transporte%20de%20resíduos.', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-background/95 backdrop-blur-md shadow-nav' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="relative z-20">
            <img 
              src="/lovable-uploads/1548f396-239a-4124-b1b3-750e3bf84956.png" 
              alt="Resilog Transportes Especiais - Logo" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLinks />
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground">
                  <Menu size={24} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-16 pb-8 px-6">
                <nav className="flex flex-col items-center space-y-4 text-lg">
                  <NavLinks mobile />
                  <SheetClose asChild>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                    >
                      Solicitar Orçamento
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const links = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Localização', href: '#location' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`font-medium transition-all duration-300 px-3 py-2 rounded-md
            ${mobile 
              ? 'text-xl text-foreground hover:text-primary mb-2 w-full text-center py-3' 
              : 'text-foreground/80 hover:text-primary hover:bg-secondary/50'
            }`}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Header;
