
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface GalleryProps {
  images: string[];
  title?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {title && <h3 className="text-xl font-display font-bold text-neutral-800 pl-2 border-l-4 border-rose-500">{title}</h3>}
      
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedImage(img)}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
          >
            <img src={img} alt="Resultado" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <ZoomIn className="text-white w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white z-[110]">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
