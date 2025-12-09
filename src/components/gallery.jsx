import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const Gallery = ({ category }) => {
  const [imageList, setImageList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // ☁️ TU CLOUD NAME
  const cloudName = import.meta.env.VITE_CLOUD_NAME || "tu_cloud_name";

  // 1. CARGA INICIAL DE LA LISTA
  useEffect(() => {
    // Reset scroll al cambiar categoría
    window.scrollTo(0, 0);

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const tag = category
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/ñ/g, "n")
          .replace(/\s+/g, "_");

        const response = await fetch(
          `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`
        );

        if (!response.ok) {
          setImageList([]);
          return;
        }

        const data = await response.json();

        const images = data.resources.map((img) => ({
          // Miniatura (Grid)
          small: `https://res.cloudinary.com/${cloudName}/image/upload/w_500,c_scale,q_auto,f_auto/${img.public_id}.${img.format}`,

          // 🔥 Grande (Modal) - CONFIGURACIÓN TURBO QUE PEDISTE (720p + q_30)
          large: `https://res.cloudinary.com/${cloudName}/image/upload/w_800,c_limit,q_30,f_auto/${img.public_id}.${img.format}`,
        }));

        setImageList(images);
      } catch (error) {
        console.error("Error cargando imágenes:", error);
        setImageList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [category]);

  // 🔥 2. NUEVO: EFECTO DE PRE-CARGA (La Magia)
  useEffect(() => {
    if (selectedIndex === null || imageList.length === 0) return;

    // Calculamos cuáles son las siguientes 2 imágenes
    const nextIndex = (selectedIndex + 1) % imageList.length;
    const nextNextIndex = (selectedIndex + 2) % imageList.length;

    // Pre-cargamos la SIGUIENTE
    const img1 = new Image();
    img1.src = imageList[nextIndex].large;

    // Pre-cargamos la QUE LE SIGUE (opcional, para más velocidad)
    const img2 = new Image();
    img2.src = imageList[nextNextIndex].large;
  }, [selectedIndex, imageList]); // Se ejecuta cada vez que cambias de foto

  // 🔄 NAVEGACIÓN
  const showNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex((prev) => (prev + 1) % imageList.length);
    },
    [imageList]
  );

  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setSelectedIndex(
        (prev) => (prev - 1 + imageList.length) % imageList.length
      );
    },
    [imageList]
  );

  // ⌨️ TECLADO
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  return (
    <>
      {isLoading && (
        <div className="w-full flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      {!isLoading && imageList.length === 0 && (
        <div className="text-center text-white py-10">
          <p className="text-xl">No hay imágenes para {category} 😕</p>
        </div>
      )}

      {/* GRID (MINIATURAS) */}
      {!isLoading && imageList.length > 0 && (
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {imageList.map((img, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md aspect-[4/5] bg-gray-800"
            >
              <img
                src={img.small}
                alt={`${category} ${idx}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl cursor-pointer 
                           transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedIndex(idx)}
              />
            </div>
          ))}
        </div>
      )}

      {/* MODAL (VISOR GRANDE) */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-black/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition z-50"
          >
            <FaTimes size={30} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-2 md:left-8 text-black/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition z-50"
          >
            <FaChevronLeft size={40} />
          </button>

          <div
            className="relative max-w-5xl max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGEN PRINCIPAL */}
            <img
              key={selectedIndex} // 🔥 TRUCO: El key fuerza a React a pintar la nueva imagen rápido
              src={imageList[selectedIndex].large}
              alt="Zoom"
              className="max-h-[85vh] max-w-full rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300 select-none"
            />

            <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 font-medium">
              {selectedIndex + 1} / {imageList.length}
            </p>
          </div>

          <button
            onClick={showNext}
            className="absolute right-2 md:right-8 text-black/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition z-50"
          >
            <FaChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
