import React from 'react';


const Navbar: React.FC = () => {
    return (
        <div className="bg-[#ECE6D1] text-[#4A3530] fixed top-0 w-full z-50">
            <div className="container mx-auto px-4">
                <div className="navbar py-3">

                    {/* Sección izquierda: Logo y menú hamburguesa */}
                    <div className="navbar-start">
                        <a href="#" className="text-lg font-semibold">Hotel Santa Elena</a>
                    </div>

                    {/* Sección Final: Menú en escritorio */}
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu text-lg menu-horizontal px-1">
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#about">Habitaciones</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#rooms">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Sección Final: Menu Desplegable */}
                    <div className="navbar-end lg:hidden">
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden"
                                aria-label="Abrir menú"
                            >
                                ☰
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-lg dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0"
                            >
                                <li><a href="#home">Inicio</a></li>
                                <li><a href="#about">Habitaciones</a></li>
                                <li><a href="#services">Servicios</a></li>
                                <li><a href="#rooms">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;