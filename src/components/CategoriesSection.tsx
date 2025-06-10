
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tractor, Sprout, ShieldCheck, Wrench, ArrowRight } from 'lucide-react';

const CategoriesSection = () => {
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

  const categories = [
    {
      icon: <Tractor className="h-12 w-12 text-primary" />,
      title: "Máquinas e Tratores",
      description: "Plantadeiras, colheitadeiras, tratores e equipamentos de última geração",
      items: ["Plantadeiras", "Colheitadeiras", "Tratores", "Pulverizadores"],
      image: "data:image/jpeg;base64,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",
      color: "bg-green-500"
    },
    {
      icon: <Sprout className="h-12 w-12 text-primary" />,
      title: "Sementes e Mudas",
      description: "Sementes certificadas e mudas de alta qualidade para sua lavoura",
      items: ["Soja", "Milho", "Algodão", "Feijão"],
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-yellow-500"
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: "Defensivos e Fertilizantes",
      description: "Proteção completa e nutrição adequada para suas culturas",
      items: ["Herbicidas", "Fungicidas", "Inseticidas", "Fertilizantes"],
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      color: "bg-blue-500"
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Peças e Assistência",
      description: "Peças originais e serviços especializados para seus equipamentos",
      items: ["Peças Originais", "Manutenção", "Suporte Técnico", "Garantia"],
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhAQEBMWEhUTFxUQFRYREiISExkVGBYWGRkXFhgaICshGRolHRgaLTEiJTUsLy46Hh8zODMsOCgtLisBCgoKDg0OFxAQGS0lHx8rLS0tLSstLS0tLjctLS0tLS0tLSstKy0rNy4tLS0rLS0tNy0tLy0tLS0vNSsyNy0yN//AABEIAMkA+wMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBAwUEAgj/xAA9EAACAgEDAQYEBAUCBAcBAAABAgARAwQSITEFBhMiQVEHMmFxFCOBkUJSYqGxM3IXJILBNFNjkqLh8BX/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHhEBAQACAwEBAQEAAAAAAAAAAAECESExQRJxIgP/2gAMAwEAAhEDEQA/ALxiaLi4G+JouLgb4mi4uBviaLi4G+JouLgb4mi4uBviaLi4G+JouLgb4mi4uBviaLi4G+JouLgb4mi4uBviaLi4G+JouLgb4mi4uBviaLi4CIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/Z",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="categories" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Soluções Completas para o <span className="text-primary">Agronegócio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Encontre tudo que você precisa para aumentar a produtividade da sua propriedade rural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm animate-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 text-white">
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-1 mb-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group/btn border-primary/20 hover:bg-primary hover:text-primary-foreground">
                    Ver Produtos
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Ver Todos os Produtos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
