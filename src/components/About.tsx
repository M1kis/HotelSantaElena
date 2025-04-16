import React from 'react';
import Hotel from '../assets/Images/Hotel-About-Us.webp';

const About: React.FC = () => {
    return (
        <div className='px-[16px]'>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row min-h-[90vh]">
                {/* Texto */}
                <div className="flex-1 flex flex-col justify-center mt-10 lg:mt-0">
                    <h1 className="text-xl font-bold mb-2 tracking-wide text-[#4A3530] text-center lg:text-left">SOBRE NOSOTROS</h1>
                    <hr className="w-8 border-[#4A3530] mx-auto lg:mx-0" />
                    <p className="mt-10 lg:mt-5 text-[#4A3530]">
                        En Santa Elena creemos que el descanso debe sentirse como un regreso a casa. Ubicados en el corazón de Ocaña, Norte de Santander, somos un refugio de tranquilidad donde la elegancia clásica se encuentra con la calidez del servicio familiar.
                    </p>
                    <br />
                    <p className="text-[#4A3530]">
                        Desde nuestras habitaciones cuidadosamente ambientadas hasta cada detalle en los espacios comunes, buscamos ofrecer a nuestros huéspedes una experiencia única que combine comodidad, historia y hospitalidad.
                    </p>
                    <a
                        href="https://wa.me/573144822770?text=Hola%2C%20quisiera%20más%20información%20sobre%20el%20Hotel%20Santa%20Elena"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn lg:w-60 border rounded-none border-[#4A3530] text-[#4A3530] bg-transparent hover:bg-[#4A3530] hover:text-white transition duration-300 text-sm mt-12"
                    >
                        QUIERO HOSPEDARME
                    </a>
                </div>

                {/* Imagen */}
                <div className="flex-1 flex justify-center items-center mb-10 lg:mb-0">
                    <img
                        src={Hotel}
                        alt="Vista interior del Hotel Santa Elena"
                        className="object-cover w-full h-[280px] lg:w-[80%] lg:h-[80%] rounded-none shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
