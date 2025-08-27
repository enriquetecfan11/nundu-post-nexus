import { Check, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Plan Gratuito",
    price: "€0",
    period: "/siempre",
    description: "Perfecto para probar la plataforma y crear tus primeras publicaciones",
    features: [
      "Hasta 10 posts por mes",
      "Generación de contenido con IA",
      "Panel de control completo",
      "Gestión centralizada en tabla",
      "Programación básica",
      "Soporte por email"
    ],
    buttonText: "Comenzar gratis",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Plan Premium", 
    price: "€5",
    period: "/mes",
    description: "Ideal para creadores de contenido y pequeñas empresas",
    features: [
      "Hasta 30 posts por mes",
      "Generación ilimitada con IA",
      "Programación avanzada",
      "Analytics detallados",
      "Plantillas premium",
      "Soporte prioritario",
      "Exportación de datos"
    ],
    buttonText: "Suscribirse ahora",
    buttonVariant: "hero" as const,
    popular: true
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Precios Simples y Transparentes
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comienza gratis con 10 posts. Cuando necesites más, únete al plan premium por solo 5€/mes.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-primary shadow-xl scale-105 bg-gradient-to-b from-white to-primary/5' 
                  : 'border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-primary-light text-white px-4 py-1 font-semibold">
                    <Crown className="w-4 h-4 mr-1" />
                    Más Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground mb-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full h-12 font-semibold group-hover:scale-105 transition-transform"
                >
                  {plan.name === "Enterprise" && <Zap className="w-4 h-4 mr-2" />}
                  {plan.buttonText}
                </Button>

                {/* Additional Info */}
                {plan.popular && (
                  <p className="text-center text-xs text-muted-foreground">
                    Sin tarjeta de crédito • Cancela en cualquier momento
                  </p>
                )}
              </CardContent>

              {/* Hover Glow Effect */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12 space-y-6">
          <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-lg mb-3 text-primary">¿Por qué elegir nuestro Gestor de Contenido?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>IA generativa integrada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Interfaz súper intuitiva</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Precios accesibles</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Soporte en español</span>
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            <strong>Sin permanencia</strong> • Cancela cuando quieras • <strong>Prueba gratis ahora</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;