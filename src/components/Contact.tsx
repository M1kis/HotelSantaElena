import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <div id="contacto" className='px-[16px] mb-10'>
            <div className="container mx-auto px-4 py-12 flex flex-col justify-center">
                {/* Título */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl font-bold mb-2 tracking-wide text-[#4A3530] text-center">CONTACTO</h1>
                    <hr className="w-8 border-[#4A3530] mx-auto" />
                </div>

                {/* Informacion de contacto */}
                <div className='mt-20 flex flex-col-reverse lg:flex-row gap-5'>

                    {/* Mapa */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.1624104838162!2d-73.35389586997302!3d8.237941014166669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e677b0023598951%3A0x2456c8c8361e8f0a!2sHotel%20Santa%20Elena!5e0!3m2!1ses-419!2sco!4v1744659668454!5m2!1ses-419!2sco"
                        className="flex-2 w-full border-0 y-6"
                        loading="lazy"
                    ></iframe>

                    {/* Redes (Movile) */}
                    <div className='flex lg:hidden border-1 justify-center items-center p-2 gap-5'>
                        <p>Encuéntranos también en</p>
                        <a href="https://www.facebook.com/profile.php?id=61574948311031" target='_blank'><FaFacebook size={20} /></a>
                        <a href="https://www.instagram.com/hotel.santaelena?igsh=YzljYTk1ODg3Zg==" target='_blank'><FaInstagram size={20} /></a>
                        <a href="https://wa.me/573144822770" target='blank'><FaWhatsapp size={20} /></a>
                    </div>

                    {/* Formulario */}
                    <div className='flex-[2] p-6 border-1 border-[#4A3530]'>
                        <h1 className="text-lg text-center font-semibold mb-2">¿Tienes alguna duda? Escríbenos!</h1>
                        <form className="space-y-4">
                            {/* Nombre */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-white">Nombre</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        placeholder="Ej. Juan"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white">Apellido</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        placeholder="Ej. Pérez"
                                    />
                                </div>
                            </div>

                            {/* Celular */}
                            <div>
                                <label className="block text-sm font-medium text-white">Celular</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="+57 300 000 0000"
                                />
                            </div>

                            {/* Correo */}
                            <div>
                                <label className="block text-sm font-medium text-white">Correo electrónico</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label className="block text-sm font-medium text-white">Mensaje</label>
                                <textarea
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    rows={4}
                                    placeholder="Escríbenos tu consulta..."
                                ></textarea>
                            </div>

                            {/* Botón */}
                            <div className='flex'>
                                <div className='flex-[1]'>
                                    <button type='submit' className="btn w-full border rounded-none border-[#4A3530] text-[#4A3530] bg-transparent hover:bg-[#4A3530] hover:text-white transition duration-300 text-sm">
                                        ENVIAR
                                    </button>
                                </div>
                                <div className='flex-[2] hidden lg:flex justify-center items-center gap-5'>
                                    <p>Encuéntranos también en</p>
                                    <a href="https://www.facebook.com/profile.php?id=61574948311031" target='_blank'><FaFacebook size={20} /></a>
                                    <a href="https://www.instagram.com/hotel.santaelena?igsh=YzljYTk1ODg3Zg==" target='_blank'><FaInstagram size={20} /></a>
                                    <a href="https://wa.me/573144822770" target='blank'><FaWhatsapp size={20} /></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
