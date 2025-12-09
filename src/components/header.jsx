import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 
      bg-black/80 backdrop-blur-md border-b border-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
      
      <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="relative">
             {/* Efecto de resplandor detrás del logo */}
             <div className="absolute inset-0 bg-red-600 blur-lg opacity-40 rounded-full"></div>
             <img 
              src="./public/img/logo.jpg" 
              alt="Thimar Store Logo" 
              className="relative w-12 h-12 rounded-full border-2 border-red-500 object-cover"
            />
          </div>
          
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Tapiceria <span className="text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">Frank</span>
          </h1>
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="/" className="text-gray-300 hover:text-red-400 hover:scale-105 transition duration-300">Home</a>
          <a href="#" className="text-gray-300 hover:text-red-400 hover:scale-105 transition duration-300">About</a>
        </nav>

        {/* BOTÓN MOBILE CON ANIMACIÓN SNAKE (4 SPANS) */}
        <button 
          onClick={toggleSidebar}
          className="md:hidden snake-btn text-black hover:text-red-500 text-3xl transition-colors"
        >
          {/* 🔥 ESTOS 4 SPANS SON LAS LÍNEAS DE LUZ (NO LOS BORRES) */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          
          {/* ÍCONO */}
          ☰
        </button>

      </div>
    </header>
  );
};

export default Header;