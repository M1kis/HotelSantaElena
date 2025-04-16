import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp: React.FC = () => {
    return (
        <div>
            <a
                href="https://wa.me/573144822770"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-[#4A3530] hover:bg-[#69473e] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp size={28} />
            </a>
        </div>
    );
};

export default Whatsapp;
