"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import "./MobileExploreNav.css";

interface Tab {
  id: string;
  label: string;
}

interface MobileExploreNavProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (id: string) => void;
}

const MobileExploreNav: React.FC<MobileExploreNavProps> = ({
  tabs,
  activeTab,
  onTabClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleItemClick = (id: string) => {
    onTabClick(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Toggle Button - Middle Left */}
      <button
        onClick={handleToggle}
        className={`mobile-nav-toggle ${isOpen ? "open" : ""}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Backdrop with Blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="mobile-nav-backdrop"
          />
        )}
      </AnimatePresence>

      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="mobile-nav-panel"
          >
            <div className="mobile-nav-header">
              <h2 className="mobile-nav-title">Explore Section</h2>
              <p className="mobile-nav-subtitle">
                Navigate through departments
              </p>
            </div>

            <div className="mobile-nav-list-container">
              <div className="mobile-nav-list">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleItemClick(tab.id)}
                    className={`mobile-nav-pill ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                  >
                    <span className="pill-label">{tab.label}</span>
                    <ChevronRight size={18} className="pill-arrow" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mobile-nav-footer">
              <p>© Alva&apos;s Institute of Engineering & Technology</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileExploreNav;
