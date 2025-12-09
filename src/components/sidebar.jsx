import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import React from "react";

const Sidebar = ({ selected, onSelect, isOpen }) => {
  // Lista 1: Categorías Principales
  const categoriasPrincipales = [
    "Mazda",
    "Chevrolet",
    "Renault",
    "Volkswagen",
    "KIA",
    "Nissan",
    "Ford",
    "BMW",
    "Hyundai",
  ];

  // Lista 2: Días Especiales
  const diasEspeciales = ["Techos", "Pisos", "Carteras", "Otros"];

  return (
    <aside
      className={` 
        /* 🔥 FONDO DEGRADADO ROJO A NEGRO TECH 🔥 */
        bg-gradient-to-b from-[#1a0505] via-black to-black
        backdrop-blur-xl border-r border-red-900/50
        
        fixed top-20 left-0 w-64 h-[calc(100vh-5rem)] p-4 z-40 overflow-y-auto
        transform transition-transform duration-300 shadow-[5px_0_15px_rgba(0,0,0,0.5)]
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:block
      `}
    >
      {/* SECCIÓN 1: CATEGORÍAS PRINCIPALES */}
      <h2 className="text-xl font-bold mb-4 text-red-500 uppercase tracking-widest border-b border-red-900/30 pb-2">
        Categorías
      </h2>

      <ul className="space-y-2">
        {categoriasPrincipales.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelect(cat)}
            className={`cursor-pointer px-4 py-3 rounded-md font-medium transition-all duration-300 border border-transparent
              ${
                selected === cat
                  ? "bg-red-900/40 text-white border-red-600/50 shadow-[0_0_10px_rgba(220,38,38,0.2)]" // Activo
                  : "text-gray-400 hover:bg-red-950/30 hover:text-red-300 hover:border-red-900/30" // Inactivo
              }
            `}
          >
            {cat}
          </li>
        ))}
      </ul>

      {/* SEPARADOR VISUAL */}
      <div className="my-6 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>

      {/* SECCIÓN 2: DÍAS ESPECIALES */}
      <h2 className="text-xl font-bold mb-4 text-red-500 uppercase tracking-widest border-b border-red-900/30 pb-2">
        Servicios
      </h2>
      <ul className="space-y-2">
        {diasEspeciales.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelect(cat)}
            className={`cursor-pointer px-4 py-3 rounded-md font-medium transition-all duration-300 border border-transparent
              ${
                selected === cat
                  ? "bg-red-900/40 text-white border-red-600/50 shadow-[0_0_10px_rgba(220,38,38,0.2)]"
                  : "text-gray-400 hover:bg-red-950/30 hover:text-red-300 hover:border-red-900/30"
              }
            `}
          >
            {cat}
          </li>
        ))}
      </ul>

      {/* SECCIÓN 3: CONTACTO */}
      <div className="mt-8 border-t border-red-900/30 pt-6 text-left">
        <h3 className="text-sm font-semibold mb-4 text-center text-gray-500 uppercase">
          Contáctanos
        </h3>

        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://wa.me/3005274404"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full hover:border-green-500/50 transition w-full justify-center shadow-lg"
          >
            <FaWhatsapp
              size={20}
              className="text-green-500 group-hover:scale-110 transition"
            />
            <span className="text-gray-300 text-sm group-hover:text-white transition">
              300-5274404
            </span>
          </a>
{/* 
          <a
            href="https://www.facebook.com/profile.php?id=61572086377286"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full hover:border-blue-500/50 transition w-full justify-center shadow-lg"
          >
            <FaFacebook
              size={20}
              className="text-blue-500 group-hover:scale-110 transition"
            />
            <span className="text-gray-300 text-sm group-hover:text-white transition">
              Thimar Store
            </span>
          </a> */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
