import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "María González",
    role: "Community Manager",
    company: "TechStartup",
    content: "La IA para generar contenido es impresionante. En minutos tengo publicaciones profesionales listas. El panel es súper fácil de usar y la tabla centralizada me permite tener todo organizado.",
    rating: 5,
    initials: "MG"
  },
  {
    name: "Carlos Rodríguez",
    role: "Emprendedor Digital",
    company: "E-commerce Plus",
    content: "Empecé con el plan gratuito y a los pocos días me suscribí al premium. La calidad del contenido generado automáticamente superó mis expectativas. Vale cada euro.",
    rating: 5,
    initials: "CR"
  },
  {
    name: "Ana Martín",
    role: "Freelancer",
    company: "Marketing Digital",
    content: "Como freelancer, el tiempo es oro. Esta plataforma me permite crear contenido para varios clientes de forma rápida y profesional. La función de programación es perfecta.",
    rating: 5,
    initials: "AM"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-primary-light/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Miles de profesionales ya transformaron su estrategia digital con nuestro gestor de contenido.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-foreground/90 leading-relaxed font-medium">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <Avatar className="h-12 w-12 bg-gradient-to-r from-primary to-primary-light">
                    <AvatarFallback className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </Card>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary">IA</div>
              <div className="text-sm text-muted-foreground">Generación automática</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Usuarios activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Posts creados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5€</div>
              <div className="text-sm text-muted-foreground">Precio justo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;