import { Calendar, BarChart3, Zap, Shield, Users, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Programación Inteligente",
    description: "Programa tus posts en el momento perfecto con IA que aprende de tu audiencia.",
    color: "text-blue-500"
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzados",
    description: "Métricas detalladas y insights accionables para mejorar tu estrategia de contenido.",
    color: "text-green-500"
  },
  {
    icon: Zap,
    title: "Automatización Total",
    description: "Automatiza respuestas, hashtags y reposteo para maximizar tu alcance orgánico.",
    color: "text-yellow-500"
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Conexiones seguras y encriptadas. Tus datos están protegidos con estándares bancarios.",
    color: "text-purple-500"
  },
  {
    icon: Users,
    title: "Gestión de Equipos",
    description: "Colabora con tu equipo, asigna roles y aprueba contenido antes de publicar.",
    color: "text-pink-500"
  },
  {
    icon: Smartphone,
    title: "Multiplataforma",
    description: "Gestiona Facebook, Instagram, Twitter, LinkedIn y TikTok desde una sola plataforma.",
    color: "text-indigo-500"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Características Poderosas
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Todo lo que necesitas para dominar las redes sociales y hacer crecer tu marca de manera inteligente y eficiente.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:-translate-y-2"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-all duration-300 ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-primary font-medium">
            <Zap className="w-5 h-5" />
            <span>Y muchas funciones más en desarrollo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;