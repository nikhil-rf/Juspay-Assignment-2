import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuCard from "./components/MenuCard";
import { ChevronLeft } from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState("main");
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubService, setSelectedSubService] = useState(null);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      setCurrentView("main");
      setSelectedService(null);
    }, 300);
  };

  const navigateToSubmenu = (serviceId) => {
    setSelectedService(serviceId);
    setCurrentView("submenu");
  };

  const navigateToSubmenu2 = (subServiceId) => {
    setSelectedSubService(subServiceId);
    setCurrentView("submenu2");
  };

  const navigateBack = () => {
    if (currentView === "submenu2") {
      setCurrentView("submenu");
      setSelectedSubService(null);
    } else if (currentView === "submenu") {
      setCurrentView("main");
      setSelectedService(null);
    } else {
      closeMenu();
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <AnimatePresence>
        {!isMenuOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={openMenu}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
          >
            Open Menu
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-40"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.y > 150 || velocity.y > 500) {
                closeMenu();
              }
            }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto overflow-hidden">
              {/* Drag Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center px-5 pb-3 border-b border-gray-100">
                <button
                  onClick={navigateBack}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="font-medium text-base">Back</span>
                </button>
              </div>

              <div className="relative overflow-hidden">
                <MenuCard
                  currentView={currentView}
                  selectedService={selectedService}
                  selectedSubService={selectedSubService}
                  onNavigateToSubmenu={navigateToSubmenu}
                  onNavigateToSubmenu2={navigateToSubmenu2}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
