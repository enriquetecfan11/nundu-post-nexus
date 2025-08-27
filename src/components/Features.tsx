import { UserPlus, Layout, Sparkles, Table, Calendar, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: UserPlus,
    title: "Registro Fácil y Seguro",
    description: "Crea tu cuenta en segundos y accede inmediatamente a todas las funcionalidades de la plataforma.",
    color: "text-blue-500"
  },
  {
    icon: Layout,
    title: "Panel de Control Intuitivo",
    description: "Dashboard completo con formularios simples para crear y gestionar tus publicaciones de forma eficiente.",
    color: "text-green-500"
  },
  {
    icon: Sparkles,
    title: "Generación de Texto con IA",
    description: "Crea contenido atractivo automáticamente. Nuestra IA genera textos optimizados para cada red social.",
    color: "text-purple-500"
  },
  {
    icon: Table,
    title: "Gestión Centralizada",
    description: "Tabla interactiva que te permite ver, editar y organizar todo tu contenido desde un solo lugar.",
    color: "text-orange-500"
  },
  {
    icon: Calendar,
    title: "Programación Inteligente",
    description: "Programa tus publicaciones para el momento óptimo y mantén tu presencia digital activa 24/7.",
    color: "text-indigo-500"
  },
  {
    icon: BarChart3,
    title: "Seguimiento y Análisis",
    description: "Monitorea el rendimiento de tus posts y optimiza tu estrategia con datos en tiempo real.",
    color: "text-pink-500"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Funcionalidades Principales
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Una plataforma completa que combina simplicidad, inteligencia artificial y gestión centralizada para potenciar tu presencia digital.
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
            <Sparkles className="w-5 h-5" />
            <span>Potenciado por Inteligencia Artificial para máximo rendimiento</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;