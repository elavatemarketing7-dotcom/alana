
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
    <div className="space-y-8">
      {title && (
        <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-200" />
            <h3 className="text-xl font-display font-bold text-neutral-800 whitespace-nowrap">{title}</h3>
            <div className="h-px flex-1 bg-neutral-200" />
        </div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedImage(img)}
            className="relative aspect-square rounded-[2rem] overflow-hidden shadow-md group cursor-pointer border-4 border-white"
          >
            <img src={img} alt="Resultado" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-rose-600/20 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
               <div className="bg-white p-3 rounded-full shadow-xl">
                 <ZoomIn className="text-rose-600 w-6 h-6" />
               </div>
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
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white z-[110] bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
