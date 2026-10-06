import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, MapPin, Sparkles, Building2 } from 'lucide-react';
import { CLINIC_GALLERY, CLINIC_INFO } from '../data/cardiologistData';
import { ClinicImage } from '../types';

export function ClinicGallery() {
  const [selectedImage, setSelectedImage] = useState<ClinicImage | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="consultorio" className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
              Estrutura e Ambiente
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight [text-wrap:balance]">
              Ambiente planejado para o seu conforto, privacidade e bem-estar.
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 max-w-sm">
            <span className="flex items-center gap-1.5 font-semibold text-slate-800 mb-1">
              <MapPin className="w-4 h-4 text-teal-700" />
              Edifício Metropolitan Office · Jardins, SP
            </span>
            Isolamento acústico, climatização suave e espaço reservado para você se sentir à vontade.
          </div>
        </div>

        {/* Gallery Grid (3 cards showcasing the user-provided images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_GALLERY.map((item, index) => {
            const isFailed = failedImages[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image Container with 4:3 Aspect Ratio */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  {!isFailed ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-100 text-slate-400">
                      <Building2 className="w-10 h-10 text-teal-700 mb-2 opacity-50" />
                      <p className="text-xs font-semibold text-slate-600">{item.title}</p>
                    </div>
                  )}

                  {/* Hover Overlay with expand icon */}
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-xs text-xs font-semibold text-slate-900 shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Ampliar foto
                    </span>
                  </div>

                  {/* Category chip overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-teal-900 shadow-2xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Text Details below image */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-teal-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Amenity Badges Strip */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200/80 flex flex-wrap items-center justify-around gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-700" />
            <span>Consultório 100% esterilizado e higienizado</span>
          </div>
          <span className="hidden sm:inline text-slate-300">|</span>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-teal-700" />
            <span>Acessibilidade completa para cadeirantes</span>
          </div>
          <span className="hidden sm:inline text-slate-300">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-700" />
            <span>{CLINIC_INFO.valet}</span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 text-white bg-slate-900/60 hover:bg-slate-900 rounded-full transition-colors"
                aria-label="Fechar ampliação"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-16/10 w-full bg-slate-950">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-white">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
