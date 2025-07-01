import { MapPin, Clock, Users, Star, Camera, Compass } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";

const Activities = () => {
  const activities = [
    {
      title: "Exploration de la Lagune",
      location: "Lagune d'Adiaké",
      duration: "2-4 heures",
      participants: "2-8 personnes",
      price: "Gratuit",
      description:
        "Profitez d'une vue imprenable sur la lagune directement depuis la villa. Idéal pour la détente, la pêche ou simplement admirer les couchers de soleil spectaculaires.",
      highlights: ["Vue panoramique", "Couchers de soleil", "Pêche", "Détente"],
      image:
        "ChatGPT Image 25 juin 2025, 21_03_01.png",
    },
    {
      title: "Découverte d'Adiaké",
      location: "Centre-ville d'Adiaké",
      duration: "Demi-journée",
      participants: "Tous âges",
      price: "Variable",
      description:
        "Explorez le charme local d'Adiaké, ses marchés colorés, sa culture authentique et rencontrez les habitants chaleureux de cette belle région.",
      highlights: [
        "Marchés locaux",
        "Culture ivoirienne",
        "Artisanat",
        "Gastronomie",
      ],
      image:
        "https://images.pexels.com/photos/7427435/pexels-photo-7427435.jpeg",
    },
    {
      title: "Excursion à Assinie Mafia",
      location: "Cinemafia",
      duration: "Journée complète",
      participants: "2-10 personnes",
      price: "À définir",
      description:
        "Découvrez les attractions de Cinemafia, une destination proche offrant des paysages magnifiques et des activités culturelles uniques.",
      highlights: [
        "Paysages naturels",
        "Activités culturelles",
        "Photographie",
        "Aventure",
      ],
      image:
        "https://images.pexels.com/photos/32717998/pexels-photo-32717998.jpeg",
    },
  ];

  const nearbyAttractions = [
    {
      name: "Marchés Locaux",
      description: "Découvrez l'artisanat et les produits locaux",
      icon: MapPin,
    },
    {
      name: "Restaurants Traditionnels",
      description: "Savourez la cuisine ivoirienne authentique",
      icon: Star,
    },
    {
      name: "Sites Naturels",
      description: "Explorez la beauté naturelle de la région",
      icon: Compass,
    },
    {
      name: "Activités Nautiques",
      description: "Profitez de la lagune pour diverses activités",
      icon: Camera,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="PHOTO-2025-06-09-11-00-02[6].jpg"
            alt="Activités locales"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            Découverte & Aventure
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Activités & Attractions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez les merveilles d'Adiaké et de ses environs. Des
            expériences authentiques vous attendent dans cette magnifique région
            de Côte d'Ivoire.
          </p>
        </div>
      </section>

      {/* Main Activities */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Activités Principales
        </h2>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">
                          {activity.title}
                        </CardTitle>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {activity.location}
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-primary border-primary"
                      >
                        {activity.price}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-4">
                      {activity.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{activity.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>{activity.participants}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {activity.highlights.map((highlight, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Attractions à Proximité
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbyAttractions.map((attraction, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <attraction.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {attraction.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {attraction.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Conseils pour Votre Séjour
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2 text-primary">Transports</h4>
                <p className="text-sm text-muted-foreground">
                  Possibilité de recharge dans les commerces locaux selon vos
                  besoins
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Climat</h4>
                <p className="text-sm text-muted-foreground">
                  Climat tropical, pensez à des vêtements légers et protection
                  solaire
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Culture</h4>
                <p className="text-sm text-muted-foreground">
                  Respectez les traditions locales et profitez de l'hospitalité
                  ivoirienne
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Activities;
