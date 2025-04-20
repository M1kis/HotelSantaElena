import React from 'react';
import Hotel from '../assets/Images/Hotel-About-Us.webp';

import { FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

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
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            (document.getElementById('my_modal_3') as HTMLDialogElement)?.showModal();
                        }}
                        className="btn lg:w-60 border rounded-none border-[#4A3530] text-[#4A3530] bg-transparent hover:bg-[#4A3530] hover:text-white transition duration-300 text-sm mt-12"
                    >
                        QUIERO HOSPEDARME
                    </a>

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
                            </form>
                            <div className="flex w-full flex-col p-4 justify-center gap-4">
                                <h1 className='text-center text-black text-lg mb-2'>¿Cómo prefieres reservar?</h1>
                                <a href="https://wa.me/573144822770" target='blank'>
                                    <div className="bg-base-300 rounded-box h-20 px-4 flex items-center justify-center gap-2 text-[#4A3530] text-xl font-medium">
                                        <FaWhatsapp />
                                        <h1>+57 314 4822770</h1>
                                    </div>
                                </a>
                                <a href="https://wa.me/573144822770" target='blank'>
                                    <div className="bg-base-300 rounded-box h-20 px-4 flex items-center justify-center gap-2 text-[#4A3530] text-xl font-medium">
                                        <FaWhatsapp />
                                        <h1>+57 301 7972846</h1>
                                    </div>
                                </a>
                                <div className="divider">O</div>
                                <a href="mailto:Santaelenaocana@gmail.com?subject=Reserva%20Hotel%20Santa%20Elena">
                                    <div className="bg-base-300 rounded-box h-20 px-4 flex items-center justify-center gap-2 text-[#4A3530] text-xl font-medium">
                                        <IoIosMail />
                                        <h1>Santaelenaocana@gmail.com</h1>
                                    </div>
                                </a>
                                <p className="text-sm text-center mt-2 text-[#4A3530]">
                                    Si no tienes una app configurada, puedes enviar un correo directamente desde <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Santaelenaocana@gmail.com&su=Reserva%20Hotel%20Santa%20Elena" target="_blank" rel="noopener noreferrer" className="underline text-[#4A3530] hover:text-[#69473e]">Gmail</a>.
                                </p>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
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
