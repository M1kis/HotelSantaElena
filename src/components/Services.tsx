import React from 'react';
import { FaWifi, FaCar, FaCoffee, FaConciergeBell } from "react-icons/fa";

const Services: React.FC = () => {
    return (
        <div className='px-[16px]'>
            <div className="container mx-auto px-4 py-12 flex flex-col justify-center">
                {/* Título */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl font-bold mb-2 tracking-wide text-[#4A3530] text-center">SERVICIOS</h1>
                    <hr className="w-8 border-[#4A3530] mx-auto" />
                </div>

                {/* Tarjetas de servicios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 justify-items-center items-center">
                    {/* Servicio 1 */}
                    <div className="bg-base-100 border-[#4A3530] border w-full max-w-[320px] h-[350px]">
                        <div className='flex flex-col items-center justify-center h-full px-6 text-center gap-5'>
                            <FaWifi className='w-[40px] h-auto text-[#4A3530]' />
                            <h2 className='font-bold'>Wi-Fi 24/7</h2>
                            <p>Mantente conectado en todo momento gracias a nuestra red Wi-Fi de alta velocidad disponible en todo el hotel.</p>
                        </div>
                    </div>

                    {/* Servicio 2 */}
                    <div className="bg-base-100 border-[#4A3530] border w-full max-w-[320px] h-[350px] lg:h-[380px]">
                        <div className='flex flex-col items-center justify-center h-full px-6 text-center gap-5'>
                            <FaCar className='w-[40px] h-auto text-[#4A3530]' />
                            <h2 className='font-bold'>Parqueadero</h2>
                            <p>Ofrecemos parqueadero gratuito para nuestros huéspedes, disponible las 24 horas.</p>
                        </div>
                    </div>

                    {/* Servicio 3 */}
                    <div className="bg-base-100 border-[#4A3530] border w-full max-w-[320px] h-[350px] lg:h-[380px]">
                        <div className='flex flex-col items-center justify-center h-full px-6 text-center gap-5'>
                            <FaCoffee className='w-[40px] h-auto text-[#4A3530]' />
                            <h2 className='font-bold'>Desayuno Incluido</h2>
                            <p>Disfruta cada mañana de un desayuno tradicional sin costo adicional en nuestro comedor principal.</p>
                        </div>
                    </div>

                    {/* Servicio 4 */}
                    <div className="bg-base-100 border-[#4A3530] border w-full max-w-[320px] h-[350px]">
                        <div className='flex flex-col items-center justify-center h-full px-6 text-center gap-5'>
                            <FaConciergeBell className='w-[40px] h-auto text-[#4A3530]' />
                            <h2 className='font-bold'>Recepción 24h</h2>
                            <p>Nuestro equipo está disponible las 24 horas para atender cualquier necesidad o solicitud.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
