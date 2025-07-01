import { Check, Zap, Calendar, Users, Euro, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/ui/navigation";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Séjour Court",
      subtitle: "1-2 nuits",
      price: "150",
      currency: "€",
      period: "par nuit",
      description: "Parfait pour un weekend ou une escapade courte",
      features: [
        "Accès complet à la villa",
        "4-5 chambres climatisées",
        "Vue panoramique sur la lagune",
        "Cuisine équipée",
        "Parking privé",
        "WiFi gratuit",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Séjour Préférentiel",
      subtitle: "3 nuits ou plus",
      price: "100",
      currency: "€",
      period: "par nuit",
      description: "Meilleur tarif pour des vacances prolongées",
      features: [
        "Accès complet à la villa",
        "4-5 chambres climatisées",
        "Vue panoramique sur la lagune",
        "Cuisine équipée",
        "Parking privé",
        "WiFi gratuit",
        "Économie de 50€ par nuit",
      ],
      popular: true,
      color: "from-primary to-tropical-turquoise",
    },
  ];

  const additionalServices = [
    {
      service: "Électricité (Climatisation)",
      price: "7,50€",
      period: "par jour",
      description: "Couvre l'utilisation intensive de la climatisation",
      icon: Zap,
    },
  ];

  const includedFeatures = [
    "Villa entièrement équipée",
    "Linge de maison fourni",
    "Produits d'accueil",
    "Accès direct à la lagune",
    "Espace de stationnement",
    "Assistance 24h/24",
    "Guide des activités locales",
    "Recommandations restaurants",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <Badge className="mb-4 bg-accent text-accent-foreground">
          Tarifs Transparents
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Tarifs & Réservation
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Des prix clairs et transparents pour votre séjour à Villa Belle Vue. Plus
          vous restez longtemps, plus vous économisez !
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold">
                  MEILLEUR PRIX
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">
                  {plan.title}
                </CardTitle>
                <p className="text-muted-foreground">{plan.subtitle}</p>

                <div className="flex items-center justify-center mt-6">
                  <span className="text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-lg font-semibold ml-2">
                    {plan.currency}
                  </span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.period}</p>
                <p className="text-sm text-muted-foreground mt-4">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Demander un Devis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Services Additionnels
          </h3>
          <div className="max-w-2xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="mb-4">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{service.service}</h4>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">
                      {service.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {service.period}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Ce qui est Inclus
          </h3>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Information */}
        <Alert className="max-w-4xl mx-auto">
          <Info className="h-4 w-4" />
          <AlertDescription className="ml-2">
            <strong>Informations importantes :</strong>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                • Les tarifs sont par nuit pour l'ensemble de la villa (jusqu'à
                10 personnes)
              </li>
              <li>
                • La réduction s'applique automatiquement pour les séjours de 3
                nuits ou plus
              </li>
              <li>
                • L'électricité est facturée séparément en raison de
                l'utilisation intensive de la climatisation
              </li>
              <li>
                • Possibilité de recharge électrique dans les commerces locaux
                selon vos besoins
              </li>
              <li>
                • Arrhes demandées à la réservation, solde à régler sur place
              </li>
            </ul>
          </AlertDescription>
        </Alert>
      </section>

      {/* Example Calculations */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">
          Exemples de Tarifs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { duration: "2 nuits", nights: 2, rate: 150, total: 315 },
            { duration: "3 nuits", nights: 3, rate: 100, total: 322.5 },
            { duration: "7 nuits", nights: 7, rate: 100, total: 752.5 },
          ].map((example, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">
                  {example.duration}
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>
                      Hébergement ({example.nights} × {example.rate}€)
                    </span>
                    <span>{example.nights * example.rate}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Électricité ({example.nights} × 7,50€)</span>
                    <span>{example.nights * 7.5}€</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-bold text-foreground">
                    <span>Total</span>
                    <span>{example.total}€</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
