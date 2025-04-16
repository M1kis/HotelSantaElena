import React from 'react';

import Tourism1 from '../assets/Images/Tourism/1.webp';
import Tourism2 from '../assets/Images/Tourism/2.webp';
import Tourism3 from '../assets/Images/Tourism/3.webp';
import Tourism4 from '../assets/Images/Tourism/4.webp';
import Tourism5 from '../assets/Images/Tourism/5.webp';

const Timeline: React.FC = () => {
    return (
        <div id="turismo" className='px-[16px]'>
            <div className="container mx-auto px-4 py-12 flex flex-col justify-center">
                {/* Título */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl font-bold mb-2 tracking-wide text-[#4A3530] text-center">TURISMO</h1>
                    <hr className="w-8 border-[#4A3530] mx-auto" />
                </div>

                <div className='flex flex-col items-center justify-center mt-20'>
                    <ul className="timeline timeline-vertical lg:timeline-horizontal">
                        <li>
                            <div className="timeline-start">0.8 Km</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">
                                <div className='flex flex-col items-center justify-center gap-2'>
                                    <h3 className='text-center'>Catedral de Santa Ana</h3>
                                    <a
                                        href="https://maps.app.goo.gl/5CUVonBx7s33WEXA7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <picture>
                                            <img
                                                className="rounded-none"
                                                src={Tourism1}
                                                alt="Catedral de Santa Ana"
                                                width={200}
                                                height={180}
                                            />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end">0.9 Km</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start timeline-box">
                                <div className='flex flex-col items-center justify-center gap-2'>
                                    <h3 className='text-center'>Columna de la Libertad de los Esclavos</h3>
                                    <a
                                        href="https://maps.app.goo.gl/mrS6XYAfmoH9yjCK6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <picture>
                                            <img
                                                className="rounded-none"
                                                src={Tourism2}
                                                alt="Catedral de Santa Ana"
                                                width={200}
                                                height={180}
                                            />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">1.2 Km</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">
                                <div className='flex flex-col items-center justify-center gap-2'>
                                    <h3 className='text-center'>Museo Antón García de Bonilla</h3>
                                    <a
                                        href="https://maps.app.goo.gl/mev73wZr2eSdrqnw7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <picture>
                                            <img
                                                className="rounded-none"
                                                src={Tourism3}
                                                alt="Catedral de Santa Ana"
                                                width={200}
                                                height={180}
                                            />
                                        </picture>
                                    </a>
                                </div></div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-end">1.4 Km</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start timeline-box">
                                <div className='flex flex-col items-center justify-center gap-2'>
                                    <h3 className='text-center'>Complejo Histórico la Gran Convención</h3>
                                    <a
                                        href="https://maps.app.goo.gl/qqbVpienemF2LogZ8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <picture>
                                            <img
                                                className="rounded-none"
                                                src={Tourism4}
                                                alt="Catedral de Santa Ana"
                                                width={200}
                                                height={180}
                                            />
                                        </picture>
                                    </a>
                                </div></div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">8.0 Km</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box">
                                <div className='flex flex-col items-center justify-center gap-2'>
                                    <h3 className='text-center'>Santuario de la virgen de Torcoroma</h3>
                                    <a
                                        href="https://maps.app.goo.gl/2jWYTzV73TxExFncA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <picture>
                                            <img
                                                className="rounded-none"
                                                src={Tourism5}
                                                alt="Catedral de Santa Ana"
                                                width={200}
                                                height={180}
                                            />
                                        </picture>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Timeline;
