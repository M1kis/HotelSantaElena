import React from 'react';
import heroImage from '../assets/Images/Hero_Image.webp';

const Hero: React.FC = () => {
    return (
        <div
            className="hero min-h-[70vh] lg:min-h-screen mt-12"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >
            <div className="hero-overlay"></div>

            <div className="hero-content text-neutral-content w-full lg:justify-start justify-center text-left">
                <div className="max-w-4xl px-4">
                    <h1 className="mb-5 text-2xl lg:text-3xl font-bold">HOTEL SANTA ELENA</h1>
                    <p className="mb-5 text-lg lg:text-xl">
                        En el corazón de Ocaña, el Hotel Santa Elena te ofrece una experiencia de descanso única, donde la elegancia clásica y la calidez del servicio se unen para hacerte sentir como en casa.
                    </p>

                    <a
                        href="https://wa.me/573144822770"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-full shadow-none lg:w-60 border-none rounded-none text-[#4A3530] bg-[#ECE6D1] hover:bg-[#4A3530] hover:text-white transition duration-300 text-sm mt-12"
                    >
                        RESERVAR
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
