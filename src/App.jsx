import "./App.css";
import Header from "./components/header.jsx";
import Sidebar from "./components/sidebar.jsx";
import Gallery from "./components/gallery.jsx";
import FloatingWA from "./components/floatingwa.jsx";
import { useState, useEffect } from "react";

function App() {
  // ✅ SOLUCIÓN: Leemos la URL DIRECTAMENTE en el estado inicial.
  // Esto evita el "doble renderizado" porque el primer valor ya será el correcto.
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(() => {
    // Verificamos si window está disponible (seguridad estándar)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catUrl = params.get("cat");
      // Si hay categoría en la URL, úsala. Si no, usa "Mazda".
      return catUrl || "Mazda";
    }
    return "Mazda";
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 🔥 EFECTO SÓLO PARA EL BOTÓN ATRÁS (Historial)
  // Ya no seteamos la categoría inicial aquí, así que el error desaparece.
  useEffect(() => {
    const handleBackButton = (event) => {
      if (event.state && event.state.category) {
        // Volver a la categoría del historial
        setCategoriaSeleccionada(event.state.category);
        setSidebarOpen(false);
      } else {
        // Si no hay estado (llegamos al inicio), volver a Mazda (o tu default)
        setCategoriaSeleccionada("Mazda");
      }
    };

    window.addEventListener("popstate", handleBackButton);
    return () => window.removeEventListener("popstate", handleBackButton);
  }, []);

  // 🔄 FUNCIÓN DE CAMBIO DE CATEGORÍA
  const handleCambioCategoria = (cat) => {
    setCategoriaSeleccionada(cat);
    setSidebarOpen(false);

    // Actualizamos la URL sin recargar
    const newUrl = `?cat=${cat}`;
    window.history.pushState({ category: cat }, "", newUrl);
  };

  return (
    <div className="min-h-screen w-full">
      {/* CAPA DE FONDO 1: Grid */}
      <div className="fixed inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* CAPA DE FONDO 2: Luz Radial */}
      <div className="fixed left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] pointer-events-none mx-auto z-0 opacity-50"></div>

      {/* CONTENIDO */}
      <div className="relative z-10">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex pt-20">
          <Sidebar
            selected={categoriaSeleccionada}
            onSelect={handleCambioCategoria}
            isOpen={sidebarOpen}
          />

          <main className="flex-1 min-h-screen pt-4 md:ml-64">
            <Gallery category={categoriaSeleccionada} />
          </main>
        </div>
        <FloatingWA />
      </div>
    </div>
  );
}

export default App;
