import { useState } from "react";
import { X } from "lucide-react";

/**
 * Gallery Page Component
 * Vedic Minimalism Design System
 * - Grid layout with hover effects
 * - Lightbox modal for full-screen image viewing
 * - Filter tabs for different content types
 */

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "photos" | "videos" | "all";
  title: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://www.dattapaaduka.com/wp-content/uploads/2023/10/DSC_0543-scaled.jpg",
    alt: "Ashram Ceremony",
    category: "photos",
    title: "Sacred Ritual at Ashram",
  },
  {
    id: "2",
    src: "https://www.dattapaaduka.com/wp-content/uploads/2023/10/4c.12.jpg",
    alt: "Devotees Gathering",
    category: "photos",
    title: "Community Gathering",
  },
  {
    id: "3",
    src: "https://www.dattapaaduka.com/wp-content/uploads/2023/11/img.jpg",
    alt: "Spiritual Celebration",
    category: "photos",
    title: "Spiritual Celebration",
  },
  {
    id: "4",
    src: "https://www.dattapaaduka.com/wp-content/uploads/2023/10/DSC_0445.jpg",
    alt: "Temple Worship",
    category: "photos",
    title: "Temple Worship",
  },
  {
    id: "5",
    src: "https://www.dattapaaduka.com/wp-content/uploads/2023/10/IMG_20160102_114135-scaled.jpg",
    alt: "Ashram Celebration",
    category: "photos",
    title: "Festival Celebration",
  },
  {
    id: "6",
    src: "https://www.dattapaaduka.com/wp-content/uploads/2023/10/DSC_0013-scaled.jpg",
    alt: "Puja Ceremony",
    category: "photos",
    title: "Puja Ceremony",
  },
  {
    id: "7",
    src: "https://www.dattapaaduka.com/wp-content/uploads/2023/10/4C.4.jpg",
    alt: "Ashram Interior",
    category: "photos",
    title: "Ashram Interior",
  },
  {
    id: "8",
    src: "https://www.dattapaaduka.com/wp-content/uploads/2023/10/4c.3.jpg",
    alt: "Devotional Space",
    category: "photos",
    title: "Devotional Space",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "photos" | "videos">("all");

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter);

  const currentIndex = selectedImage ? filteredImages.findIndex((img) => img.id === selectedImage.id) : -1;

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-primary/10"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Gallery</h1>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: "all", label: "All" },
              { id: "photos", label: "Photos" },
              { id: "videos", label: "Videos" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as "all" | "photos" | "videos")}
                className={`px-6 py-2 font-semibold transition-all ${
                  activeFilter === filter.id
                    ? "bg-primary text-white rounded-full"
                    : "text-primary border-2 border-primary hover:bg-primary/10 rounded-full"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-lg cursor-pointer h-64 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/400x300?text=" + encodeURIComponent(image.title);
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold text-lg">{image.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/800x600?text=" + encodeURIComponent(selectedImage.title);
                }}
              />

              {/* Image Info */}
              <div className="bg-primary text-white p-4 text-center">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-sm text-white/80 mt-1">
                  {currentIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                ← Previous
              </button>

              <div className="flex gap-2">
                {filteredImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? "bg-accent w-8" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentIndex === filteredImages.length - 1}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
