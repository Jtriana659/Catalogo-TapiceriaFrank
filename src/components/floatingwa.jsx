import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWA = () => {
    return (
    <a
      href="https://wa.me/3005274404"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-green-400 transition z-50 animate-bounce"
    >
      <FaWhatsapp size={35} />
    </a>
  );    
};

export default FloatingWA;