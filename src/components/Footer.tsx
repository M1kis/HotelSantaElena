import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#ECE6D1] text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4 text-[#4A3530]">
                <a className="link link-hover">Inicio</a>
                <a className="link link-hover">Habitaciones</a>
                <a className="link link-hover">Servicios</a>
                <a className="link link-hover">Contacto</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24}/>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24}/>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={24}/>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <a href='https://github.com/M1kis' className='font-bold'>M1kis</a></p>
            </aside>
        </footer>
    );
};

export default Footer;
