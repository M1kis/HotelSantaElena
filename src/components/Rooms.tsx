import React from 'react';

import roomStandar from '../assets/Images/Rooms/Room_Standar.webp';
import roomStandarPlus from '../assets/Images/Rooms/Room_Standar_Plus.webp';
import roomDouble from '../assets/Images/Rooms/Room_Double_1.webp';
import roomFamiliar from '../assets/Images/Rooms/Room_Family.webp';
import roomFamiliarPlus from '../assets/Images/Rooms/Room_Family_Plus.webp';

import { FaUser } from "react-icons/fa";

const Rooms: React.FC = () => {
    return (
        <div id="habitaciones" className='px-[16px]'>
            <div className="container mx-auto px-4 py-12 flex flex-col justify-center">
                {/* Texto */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl font-bold mb-2 tracking-wide text-[#4A3530] text-center">HABITACIONES Y TARIFAS</h1>
                    <hr className="w-8 border-[#4A3530] mx-auto" />
                </div>

                {/* Tarjetas de habitaciones */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 lg:mx-auto justify-center items-center">
                    {/* Tarjeta 1 */}
                    <div>
                        <div className="card rounded-none bg-base-100 shadow-xl w-full lg:w-[420px] h-[450px]">
                            <figure>
                                <img
                                    src={roomStandar}
                                    alt="Habitación estándar"
                                    className="w-full h-[230px] object-cover"
                                />
                            </figure>
                            <div className="card-body p-4 text-sm">
                                <div className='flex justify-between'>
                                    <h2 className="card-title text-[#4A3530]">Habitación Estándar</h2>
                                    <div className='flex items-center gap-1'>
                                        <FaUser />
                                        <p>1</p>
                                    </div>
                                </div>
                                <p>Disfruta de una estancia cómoda y acogedora en nuestra habitación estándar.</p>
                                <hr />
                                <div className='flex'>
                                    <p>Ventilador</p>
                                    <p>Televisor</p>
                                    <p>Baño</p>
                                    <p>Cama sencilla</p>
                                </div>
                                <div className='flex items-center aling-center justify-between mt-4'>
                                    <p>
                                        Desde <span className="text-lg font-extrabold">$79.900 COP</span>/noche
                                    </p>
                                    <a
                                        href="https://wa.me/573144822770?text=Hola%2C%20quiero%20más%20información%20sobre%20la%20Habitación%20Estándar.%20Gracias."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn lg:w-40 border rounded-none border-[#4A3530] text-[#4A3530] bg-transparent hover:bg-[#4A3530] hover:text-white transition duration-300 text-[12px]"
                                    >
                                        MÁS DETALLES
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Tarjeta 2 */}
                    <div>
                        <div className="card rounded-none bg-base-100 shadow-xl w-full lg:w-[420px] h-[450px]">
                            <figure>
                                <img
                                    src={roomDouble}
                                    alt="Habitación doble"
                                    className="w-full h-[230px] object-cover"
                                />
                            </figure>
                            <div className="card-body p-4 text-sm">
                                <div className='flex justify-between'>
                                    <h2 className="card-title text-[#4A3530]">Habitación Doble</h2>
                                    <div className='flex items-center gap-1'>
                                        <FaUser />
                                        <p>2</p>
                                    </div>
                                </div>
                                <p>Perfecta para dos personas, esta habitación ofrece un ambiente tranquilo y funcional con dos camas individuales.</p>
                                <hr />
                                <div className='flex'>
                                    <p>Ventilador</p>
                                    <p>Televisor</p>
                                    <p>Baño</p>
                                </div>
                                <div className='flex items-center aling-center justify-between mt-4'>
                                    <p>
                                        Desde <span className="text-lg font-extrabold">$159.900 COP</span>/noche
                                    </p>
                                    <a
                                        href="https://wa.me/573144822770?text=Hola%2C%20quiero%20más%20información%20sobre%20la%20Habitación%20Doble.%20Gracias."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn lg:w-40 border rounded-none border-[#4A3530] text-[#4A3530] bg-transparent hover:bg-[#4A3530] hover:text-white transition duration-300 text-[12px]"
                                    >
                                        MÁS DETALLES
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Tarjeta 3 */}
                    <div>
                        <div className="card rounded-none bg-base-100 shadow-xl w-full lg:w-[420px] h-[450px]">
                            <figure>
                                <img
                                    src={roomStandarPlus}
                                    alt="Habitación estándar plus"
                                    className="w-full h-[230px] object-cover"
                                />
                            </figure>
                            <div className="card-body p-4 text-sm">
                                <div className='flex justify-between'>
                                    <h2 className="card-title text-[#4A3530]">Habitación Estándar Plus</h2>
                                    <div className='flex items-center gap-1'>
                                        <FaUser />
                                        <p>2</p>
                                    </div>
                                </div>
                                <p>Disfruta de un espacio cómodo con una cama doble ideal para parejas o viajeros que buscan mayor confort.</p>
                                <hr />
                                <div className='flex'>
                                    <p>Aire Acondicionado</p>
                                    <p>Televisor</p>
                                    <p>Baño</p>
                                    <p>Cama Doble</p>
                                </div>
                                <div className='flex items-center aling-center justify-between mt-4'>
                                    <p>
                                        Desde <span className="text-lg font-extrabold">$129.900 COP</span>/noche
                                    </p>
                                    <a
                                        href="https://wa.me/573144822770?text=Hola%2C%20quiero%20más%20información%20sobre%20la%20Habitación%20Estándar%20Plus.%20Gracias."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn lg:w-40 border rounded-none border-[#4A3530] text-[#4A3530] bg-transparent hover:bg-[#4A3530] hover:text-white transition duration-300 text-[12px]"
                                    >
                                        MÁS DETALLES
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Tarjeta 4 */}
                    <div>
                        <div className="card rounded-none bg-base-100 shadow-xl w-full lg:w-[420px] h-[450px]">
                            <figure>
                                <img
                                    src={roomFamiliar}
                                    alt="Habitación familiar"
                                    className="w-full h-[230px] object-cover"
                                />
                            </figure>
                            <div className="card-body p-4 text-sm">
                                <div className='flex justify-between'>
                                    <h2 className="card-title text-[#4A3530]">Habitación Familiar</h2>
                                    <div className='flex items-center gap-1'>
                                        <FaUser />
                                        <p>3-4</p>
                                    </div>
                                </div>
                                <p>Espaciosa y versátil, pensada para familias que desean descansar juntas en un entorno cálido y acogedor.</p>
                                <hr />
                                <div className='flex'>
                                    <p>Ventilador</p>
                                    <p>Televisor</p>
                                    <p>Baño</p>
                                </div>
                                <div className='flex items-center aling-center justify-between mt-4'>
                                    <p>
                                        Desde <span className="text-lg font-extrabold">$199.900 COP</span>/noche
                                    </p>
                                    <a
                                        href="https://wa.me/573144822770?text=Hola%2C%20quiero%20más%20información%20sobre%20la%20Habitación%20Familiar.%20Gracias."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn lg:w-40 border rounded-none border-[#4A3530] text-[#4A3530] bg-transparent hover:bg-[#4A3530] hover:text-white transition duration-300 text-[12px]"
                                    >
                                        MÁS DETALLES
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tarjeta 5 */}
                    <div className='lg:col-span-2 lg:justify-self-center last:lg:col-span-2 last:lg:justify-self-center'>
                        <div className="card rounded-none bg-base-100 shadow-xl w-full lg:w-[420px] h-[450px] ">
                            <figure>
                                <img
                                    src={roomFamiliarPlus}
                                    alt="Habitación familiar"
                                    className="w-full h-[230px] object-cover"
                                />
                            </figure>
                            <div className="card-body p-4 text-sm">
                                <div className='flex justify-between'>
                                    <h2 className="card-title text-[#4A3530]">Habitación Familiar Plus</h2>
                                    <div className='flex items-center gap-1'>
                                        <FaUser />
                                        <p>3-6</p>
                                    </div>
                                </div>
                                <p>Espaciosa y versátil, pensada para familias que desean descansar juntas en un entorno cálido y acogedor.</p>
                                <hr />
                                <div className='flex'>
                                    <p>Aire Acondicionado</p>
                                    <p>Televisor</p>
                                    <p>Baño</p>
                                </div>
                                <div className='flex items-center aling-center justify-between mt-4'>
                                    <p>
                                        Desde <span className="text-lg font-extrabold">$239.900 COP</span>/noche
                                    </p>
                                    <a
                                        href="https://wa.me/573144822770?text=Hola%2C%20quiero%20más%20información%20sobre%20la%20Habitación%20Familiar%20Plus.%20Gracias."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn lg:w-40 border rounded-none border-[#4A3530] text-[#4A3530] bg-transparent hover:bg-[#4A3530] hover:text-white transition duration-300 text-[12px]"
                                    >
                                        MÁS DETALLES
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;
