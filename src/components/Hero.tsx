import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Sparkles, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-social.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary-glow overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSI+PC9jaXJjbGU+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      
      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm font-medium animate-float">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Potencia tu presencia digital
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Gestor de
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-glow">
                  Contenido
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-lg">
                Crea publicaciones automáticamente con IA, gestiona todo desde un panel intuitivo 
                y programa tu contenido. <strong>¡Comienza gratis!</strong>
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Generación automática con IA</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Gestión centralizada</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="xl" className="group">
                Comenzar gratis
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="ghost" size="xl" className="text-white hover:bg-white/10 group">
                <Play className="w-5 h-5 mr-2" />
                Ver demo
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30"></div>
                ))}
              </div>
              <span>Únete a miles de creadores que confían en nosotros</span>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage}
                alt="Gestor de Contenido - Dashboard de redes sociales"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl animate-float"
                style={{ animationDelay: '0.5s' }}
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-card p-4 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-white text-sm font-semibold">+47% Engagement</div>
                <div className="text-green-300 text-xs">↗ Este mes</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="text-white text-sm font-semibold">248 Posts</div>
                <div className="text-blue-300 text-xs">Programados</div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,69.3C672,64,768,64,864,69.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;