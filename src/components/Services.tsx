import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Bezpečné Investice",
    description: "Zlato je historicky osvědčená ochrana proti inflaci a ekonomické nejistotě. Zajistěte si stabilní budoucnost."
  },
  {
    icon: TrendingUp,
    title: "Dlouhodobý Růst",
    description: "Investice do zlata nabízí stabilní výnosy a ochranu vašeho kapitálu v každém ekonomickém cyklu."
  },
  {
    icon: Users,
    title: "Osobní Přístup",
    description: "Každý klient je jedinečný. Vytvoříme investiční strategii přesně na míru vašim potřebám a cílům."
  },
  {
    icon: Sparkles,
    title: "Odborné Poradenství",
    description: "Mnohaletá zkušenost v oblasti finančního poradenství a detailní znalost trhu s drahými kovy."
  }
];

export const Services = () => {
  return (
    <section id="sluzby" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Proč Investovat do Zlata?
          </h2>
          <p className="text-xl text-muted-foreground">
            Objevte výhody investic do zlata a zajistěte si finanční stabilitu pro sebe i svou rodinu
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group"
            >
              <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
