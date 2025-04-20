import React from 'react';
import heroImage from '../assets/Images/Hero_Image.webp';

import { FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

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
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            (document.getElementById('my_modal_3') as HTMLDialogElement)?.showModal();
                        }}
                        className="btn w-full shadow-none lg:w-60 border-none rounded-none text-[#4A3530] bg-[#ECE6D1] hover:bg-[#4A3530] hover:text-white transition duration-300 text-sm mt-12"
                    >
                        RESERVAR
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
            </div>
        </div>
    );
};

export default Hero;
