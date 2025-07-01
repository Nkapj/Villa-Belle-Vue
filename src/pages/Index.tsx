import { Star, Wifi, Car, Waves, Home, Users, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Home,
      title: "4 Chambres",
      description: "Spacieuse maison pouvant accueillir jusqu'à 10 personnes",
    },
    {
      icon: Waves,
      title: "Vue sur Lagune",
      description: "Magnifique vue panoramique sur la lagune d'Adiaké",
    },
    {
      icon: Wind,
      title: "Climatisation",
      description: "Toutes les pièces équipées de climatisation",
    },
    {
      icon: Wifi,
      title: "Équipements Modernes",
      description: "WiFi, cuisine équipée, et tout le confort nécessaire",
    },
    {
      icon: Car,
      title: "Parking Privé",
      description: "Espace de stationnement sécurisé pour vos véhicules",
    },
    {
      icon: Users,
      title: "Idéal Familles",
      description: "Parfait pour des vacances en famille ou entre amis",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="ChatGPT Image 25 juin 2025, 20_15_51.png"
            alt="Vue magnifique de la lagune"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            Côte d'Ivoire • Adiaké
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Villa Belle Vue
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-accent">
              Votre Maison pour un séjour au calme
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Découvrez la beauté de la Côte d'Ivoire dans notre spacieuse villa
            avec vue imprenable sur la lagune. Un havre de paix pour des
            vacances inoubliables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Réserver Maintenant
              </Button>
            </Link>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground"
              >
                Voir les Tarifs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Pourquoi Choisir Villa Belle Vue ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expérience de vacances unique alliant confort moderne et beauté
            naturelle de la Côte d'Ivoire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="md:col-span-2">
            <img
              src="ChatGPT Image 25 juin 2025, 20_40_48.png"
              alt="Chambre confortable"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <img
              src="ChatGPT Image 25 juin 2025, 20_41_21.png"
              alt="Vue aérienne"
              className="w-full h-36 object-cover rounded-lg shadow-lg"
            />
            <img
              src="ChatGPT Image 25 juin 2025, 20_43_42.png"
              alt="Coucher de soleil"
              className="w-full h-36 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Quick Pricing */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none shadow-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Tarifs Préférentiels
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
              <div>
                <div className="text-3xl font-bold text-primary">150€</div>
                <div className="text-muted-foreground">par nuit</div>
              </div>
              <div className="text-lg text-muted-foreground">ou</div>
              <div>
                <div className="text-3xl font-bold text-accent">100€</div>
                <div className="text-muted-foreground">par nuit (3+ nuits)</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              + 7,50€ par jour pour l'électricité (climatisation)
            </p>
            <Link to="/pricing">
              <Button className="bg-primary hover:bg-primary/90">
                Voir Tous les Tarifs
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Waves className="h-6 w-6" />
            <span className="text-xl font-bold">Villa Belle Vue</span>
          </div>
          <p className="text-background/80 mb-4">
            Adiaké, Côte d'Ivoire • Votre maison de vacances de rêve
          </p>
          <div className="flex items-center justify-center space-x-1 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
