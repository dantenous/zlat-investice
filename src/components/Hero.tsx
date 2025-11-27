import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gold.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-secondary/85" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase bg-primary/10 px-4 py-2 rounded-full">
              Váš Partner v Investicích
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-secondary-foreground leading-tight">
            Investice do Zlata
            <span className="block text-primary mt-2">Pro Vaši Budoucnost</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-secondary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Profesionální finanční poradenství se zaměřením na stabilní a výnosné investice do drahých kovů
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Nezávazná Konzultace
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('sluzby')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-2 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 hover:border-primary transition-all duration-300"
            >
              Více o Službách
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
