import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Ochrana proti inflaci a znehodnocení měny",
  "Diverzifikace investičního portfolia",
  "Fyzické aktivum s reálnou hodnotou",
  "Historicky stabilní výkonnost",
  "Vysoká likvidita a celosvětová obchodovatelnost",
  "Nezávislost na finančních institucích"
];

export const About = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Investice do Zlata
              <span className="block text-primary mt-2">Krok k Finanční Svobodě</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Zlato je po tisíce let považováno za symbol bohatství a stability. V moderní době je investice 
              do zlata chytrým způsobem, jak ochránit své úspory před ekonomickou nejistotou a inflací.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Jako váš finanční poradce vám pomohu nastavit optimální investiční strategii, která respektuje 
              vaše cíle a rizikový profil. Zajistím transparentnost celého procesu a budu vás provázet 
              každým krokem.
            </p>
          </div>
          
          <Card className="p-8 bg-card shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Výhody Investice do Zlata
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
