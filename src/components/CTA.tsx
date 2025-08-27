import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-light to-primary-glow relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSI+PC9jaXJjbGU+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            ¿Listo para revolucionar tu
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              estrategia digital?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Únete a miles de profesionales que ya automatizaron su éxito en redes sociales. 
            Comienza tu transformación digital hoy mismo.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span>Setup en 5 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-300" />
              <span>14 días gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-300" />
              <span>Soporte 24/7 en español</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="glass" 
              size="xl" 
              className="group text-lg px-8 py-4 font-semibold"
            >
              Comenzar prueba gratuita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="xl" 
              className="text-white hover:bg-white/10 group text-lg px-8 py-4"
            >
              Ver demostración
            </Button>
          </div>

          {/* Trust Signal */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Empresas que confían en nosotros:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="text-white/50 text-sm font-medium">StartupX</div>
              <div className="text-white/50 text-sm font-medium">TechCorp</div>
              <div className="text-white/50 text-sm font-medium">MarketingPro</div>
              <div className="text-white/50 text-sm font-medium">CreativeHub</div>
            </div>
          </div>

          {/* Risk-free message */}
          <p className="text-white/70 text-sm">
            Sin compromisos • Cancela cuando quieras • Datos protegidos según GDPR
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default CTA;