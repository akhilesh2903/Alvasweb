"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, MousePointer2 } from "lucide-react";
import "./RadialMenu.css";

interface Tab {
  id: string;
  label: string;
}

interface RadialMenuProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (id: string) => void;
}

const RadialMenu: React.FC<RadialMenuProps> = ({
  tabs,
  activeTab,
  onTabClick,
}) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Constants for the 3-item view
  const ANGLE_STEP = 40; // Degrees between items
  const VISIBLE_RANGE = 1.2; // Range around center to show items

  const getTabStyle = (index: number) => {
    // Calculate current position of the item based on global rotation
    const baseAngle = index * ANGLE_STEP;
    const currentPosAngle = baseAngle + rotation;

    // Normalize angle to be relative to the center (0 degrees)
    // We want items to fade in/out as they move away from the center
    const normalizedAngle = ((currentPosAngle + 180) % 360) - 180;
    const distanceFromCenter = Math.abs(normalizedAngle) / ANGLE_STEP;

    const isVisible = distanceFromCenter <= VISIBLE_RANGE;
    const radius = 220;

    return {
      transform: `rotate(${normalizedAngle}deg) translate(${radius}px) rotate(${-normalizedAngle}deg)`,
      opacity: isVisible ? 1 : 0,
      pointerEvents:
        isVisible && isMobileMenuOpen ? ("auto" as const) : ("none" as const),
      zIndex: 100 - Math.round(distanceFromCenter * 10),
      transition: isDragging
        ? "none"
        : "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    setRotation((prev) => prev + deltaY * 0.4);
    setStartY(e.clientY);
  };

  const handleWheel = (e: React.WheelEvent) => {
    setRotation((prev) => prev - e.deltaY * 0.1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaY = e.touches[0].clientY - startY;
    setRotation((prev) => prev + deltaY * 0.4);
    setStartY(e.touches[0].clientY);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, []);

  // Mobile View Toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Container is now mostly hidden on desktop or contains only the mobile elements */}
      <div className="radial-menu-mobile-container lg:hidden">
        {/* Mobile View Toggle Button */}
        <button
          className="mobile-radial-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Radial Overlay */}
        <div
          className={`mobile-radial-overlay ${isMobileMenuOpen ? "active" : ""}`}
        >
          <div
            className="radial-menu-wrapper"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {/* Background Scroll Listener */}
            <div className="radial-scroll-listener"></div>

            <div className="radial-menu-center">
              <div className="center-pulse"></div>
              <Menu size={28} color="white" className="relative z-10" />
            </div>

            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`radial-item ${activeTab === tab.id ? "active" : ""}`}
                style={getTabStyle(index)}
                onClick={() => {
                  onTabClick(tab.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                <div className="radial-item-content">
                  <span className="radial-item-label">{tab.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RadialMenu;
