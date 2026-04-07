"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Show popup after a delay to ensure it doesn't conflict with initial page loads/animations
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Disable scroll when modal is open
      document.body.style.overflow = "hidden";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
            {/* Close Button Outside the Poster */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={handleClose}
              className="absolute -top-12 right-0 md:-right-12 p-2 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm group"
              title="Close Admission Poster"
            >
              <X className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </motion.button>

            {/* Poster Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative shadow-2xl rounded-2xl overflow-hidden bg-white/5"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <img
                src={`/api/image-proxy?url=${encodeURIComponent(
                  "https://drive.google.com/uc?export=view&id=1_3gIji1XcGijBz4J1q8Z0O5Nn1aoMG3C",
                )}`}
                alt="AIET Admission Poster"
                className="max-h-[85vh] w-auto object-contain block select-none"
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
              />

              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
