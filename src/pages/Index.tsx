import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Contact />
      
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Investice do Zlata. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
