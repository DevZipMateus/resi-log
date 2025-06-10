
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const FeaturedProducts = () => {
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

  const featuredProducts = [
    {
      id: 1,
      name: "Plantadeira John Deere 2130",
      category: "Plantadeiras",
      price: "R$ 450.000",
      originalPrice: "R$ 480.000",
      image: "https://www.deere.com.br/assets/images/region-3/products/planting-equipment/dualflex-hitch/dualflex_estudio_large_348510ce4fc3841078cb501dbbe542eeb5d020f2.jpg",
      rating: 4.8,
      reviews: 24,
      features: ["GPS Integrado", "20 Linhas", "Sistema Automático"],
      badge: "Mais Vendido"
    },
    {
      id: 2,
      name: "Colheitadeira Case IH 6140",
      category: "Colheitadeiras",
      price: "R$ 1.200.000",
      originalPrice: null,
      image: "https://static.wixstatic.com/media/f37214_2dccbbd253444ff580234e83743f7924~mv2.jpeg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f37214_2dccbbd253444ff580234e83743f7924~mv2.jpeg",
      rating: 4.9,
      reviews: 18,
      features: ["Cabine Luxo", "Sistema Auto-Track", "Tanque 10.000L"],
      badge: "Lançamento"
    },
    {
      id: 3,
      name: "Trator New Holland T7.245",
      category: "Tratores",
      price: "R$ 380.000",
      originalPrice: "R$ 420.000",
      image: "data:image/jpeg;base64,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",
      rating: 4.7,
      reviews: 32,
      features: ["245cv", "Transmissão CVT", "Ar Condicionado"],
      badge: "Oferta"
    }
  ];

  return (
    <section id="products" ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Produtos em Destaque
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Equipamentos de <span className="text-primary">Última Geração</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Confira nossa seleção especial de máquinas e implementos que estão revolucionando o agronegócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-background shadow-card animate-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.badge === 'Mais Vendido' ? 'bg-green-500 text-white' :
                      product.badge === 'Lançamento' ? 'bg-blue-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      OFERTA
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="space-y-1 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through block">
                          {product.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Adicionar
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/20">
                      Orçamento
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
