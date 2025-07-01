import { useState } from "react";
import { Calendar, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/components/ui/navigation";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkin: "",
        checkout: "",
        guests: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Villa Belle Vue, Adiaké\nCôte d'Ivoire",
      detail: "Vue sur lagune",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@villalagune.ci",
      detail: "Réponse sous 24h",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+225 XX XX XX XX",
      detail: "Disponible 9h-18h",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <Badge className="mb-4 bg-accent text-accent-foreground">
          Demande de Renseignements
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Contactez-nous
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Vous souhaitez réserver Villa Belle Vue ou obtenir plus d'informations ?
          Remplissez le formulaire ci-dessous et nous vous recontacterons
          rapidement.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Demande de Réservation</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Complétez ce formulaire pour que nous puissions vous contacter
                  avec une proposition personnalisée.
                </p>
              </CardHeader>

              <CardContent>
                {isSubmitted ? (
                  <Alert className="mb-6 border-green-500 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-700 ml-2">
                      Merci pour votre demande ! Nous vous recontacterons dans
                      les plus brefs délais.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Votre nom"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="votre@email.com"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+33 6 XX XX XX XX"
                        className="mt-1"
                      />
                    </div>

                    {/* Stay Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="checkin">Date d'arrivée</Label>
                        <Input
                          id="checkin"
                          name="checkin"
                          type="date"
                          value={formData.checkin}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="checkout">Date de départ</Label>
                        <Input
                          id="checkout"
                          name="checkout"
                          type="date"
                          value={formData.checkout}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests">Nombre de personnes</Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          max="10"
                          value={formData.guests}
                          onChange={handleInputChange}
                          placeholder="2"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">
                        Message ou questions spécifiques
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Dites-nous en plus sur votre séjour souhaité, vos besoins particuliers, questions sur les activités, etc."
                        rows={4}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer la Demande
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      En soumettant ce formulaire, vous acceptez d'être contacté
                      par le propriétaire de Villa Lagune concernant votre
                      demande de réservation.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Quick Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            {/* <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Informations de Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{info.title}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                      <p className="text-xs text-accent">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card> */}

            {/* Quick Summary */}
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-lg">Villa Lagune en Bref</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Capacité</span>
                  <span className="font-semibold">4-5 chambres (10 pers.)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tarif normal</span>
                  <span className="font-semibold">150€/nuit</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tarif 3+ nuits</span>
                  <span className="font-semibold text-accent">100€/nuit</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Électricité</span>
                  <span className="font-semibold">+7,50€/jour</span>
                </div>
                <hr className="my-3" />
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">
                    ✓ Vue imprenable sur la lagune
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ✓ Climatisation dans toutes les pièces
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ✓ Cuisine équipée & WiFi
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ✓ Activités locales à proximité
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Response Time Info */}
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription className="ml-2 text-sm">
                <strong>Temps de réponse :</strong> Nous nous engageons à vous
                répondre dans les 24 heures suivant votre demande. Pour les
                demandes urgentes, n'hésitez pas à nous appeler directement.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
