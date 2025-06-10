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
