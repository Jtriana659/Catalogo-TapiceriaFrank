import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header
      className="w-full fixed top-0 left-0 right-0 z-50 
      bg-black/80 backdrop-blur-md border-b border-red-600/30 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
    >
      <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="relative">
            {/* Efecto de resplandor detrás del logo */}
            <div className="absolute inset-0 bg-red-600 blur-lg "></div>
          </div>

          {/* LOGO 2 */}
          <div className="relative">
            <div className="absolute inset-0 blur-lg"></div>
            <img
              src="/img/fondo2.png"
              alt="Thimar Store Logo"
              className="relative w-40 h-14 rounded-full object-cover"
            />
          </div>
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a
            href="/"
            className="text-gray-300 hover:text-red-400 hover:scale-105 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-red-400 hover:scale-105 transition duration-300"
          >
            About
          </a>
        </nav>

        {/* --- BOTÓN MOBILE CON SERPIENTE RESTAURADA --- */}
        <button
          onClick={toggleSidebar}
          className="md:hidden snake-btn text-red-600 hover:text-red-500 text-3xl font-bold"
        >
          {/* Estos 4 spans son OBLIGATORIOS para la animación del CSS */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* El ícono de menú */}☰
        </button>
      </div>
    </header>
  );
};

export default Header;
