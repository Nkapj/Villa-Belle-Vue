import { X, ChevronLeft, ChevronRight, Camera, Waves } from "lucide-react";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from "@/components/ui/navigation";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - vous pourrez remplacer ces URLs par vos vraies photos
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      alt: "Vue extérieure de la villa",
      category: "Extérieur",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
      alt: "Salon principal",
      category: "Intérieur",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      alt: "Chambre principale",
      category: "Chambres",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      alt: "Vue sur la lagune",
      category: "Vue",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
      alt: "Cuisine équipée",
      category: "Intérieur",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      alt: "Deuxième chambre",
      category: "Chambres",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
      alt: "Terrasse avec vue",
      category: "Extérieur",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      alt: "Salle de bain",
      category: "Intérieur",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80",
      alt: "Coucher de soleil sur la lagune",
      category: "Vue",
    },
  ];

  const categories = ["Tous", "Extérieur", "Intérieur", "Chambres", "Vue"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredImages = galleryImages.filter(
    (image) =>
      selectedCategory === "Tous" || image.category === selectedCategory,
  );

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1,
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-vacation-blue-light to-white">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Camera className="h-12 w-12 text-vacation-coral mr-4" />
            <h1 className="text-5xl font-bold text-gray-900">
              Galerie Photos
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez la beauté de notre villa et la magnifique vue sur la
            lagune d'Adiaké
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-vacation-coral hover:bg-vacation-coral/90 text-white"
                    : "border-vacation-blue text-vacation-blue hover:bg-vacation-blue hover:text-white"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                    <span className="text-white/80 text-sm">
                      {image.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="max-w-4xl max-h-[80vh] mx-4">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">
                {filteredImages[selectedImage].alt}
              </p>
              <p className="text-white/80">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-vacation-coral/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à réserver votre séjour ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous pour plus d'informations et pour réserver votre
            séjour à la Villa Lagune
          </p>
          <Button
            size="lg"
            className="bg-vacation-coral hover:bg-vacation-coral/90 text-white px-8 py-3"
            onClick={() => (window.location.href = "/#contact")}
          >
            Nous contacter
          </Button>
        </div>
      </section>

    </div>
  );
}