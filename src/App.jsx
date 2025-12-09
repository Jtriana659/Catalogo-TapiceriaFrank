import "./App.css";
import Header from "./components/header.jsx";
import Sidebar from "./components/sidebar.jsx";
import Gallery from "./components/gallery.jsx";
import FloatingWA from "./components/floatingwa.jsx";
import { useState } from "react";
//new sidebar12
function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Mazda");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // 1️⃣ CONTENEDOR PRINCIPAL
    // Quitamos 'bg-black' de aquí para que no tape nada, lo maneja el CSS global o los fijos
    <div className="min-h-screen w-full">
      
      {/* 2️⃣ CAPA DE FONDO 1: La Cuadrícula (Grid) */}
      {/* CAMBIO: Usamos 'fixed inset-0' para que cubra toda la PANTALLA y no se mueva al scrollear */}
      <div className="fixed inset-0 z-0 bg-black">
          {/* Esta es la rejilla grisácea */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      
      {/* 3️⃣ CAPA DE FONDO 2: La Luz Radial Superior */}
      {/* CAMBIO: También 'fixed' para que la luz siempre te acompañe arriba */}
      <div className="fixed left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] pointer-events-none mx-auto z-0 opacity-50"></div>

      {/* 4️⃣ TU APLICACIÓN */}
      {/* IMPORTANTE: 'relative z-10' para que el texto flote ENCIMA del fondo fijo */}
      <div className="relative z-10">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex pt-20">
          <Sidebar
            selected={categoriaSeleccionada}
            onSelect={(cat) => {
              setCategoriaSeleccionada(cat);
              setSidebarOpen(false);
            }}
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
