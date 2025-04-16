import React, { useEffect } from 'react';
import { FaWifi, FaCar, FaCoffee, FaConciergeBell } from "react-icons/fa";

const Reviews: React.FC = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        script.setAttribute("data-elfsight-app-lazy", "true");
        document.body.appendChild(script);
    }, []);

    return (
        <div id="servicios" className='px-[16px]'>
            <div className="container mx-auto px-4 pt-12 flex flex-col justify-center">
                {/* Título */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl font-bold mb-2 tracking-wide text-[#4A3530] text-center">NUESTRAS RESEÑAS</h1>
                    <hr className="w-8 border-[#4A3530] mx-auto" />
                </div>

                <div className="w-full flex flex-col justify-center items-center mt-10">
                    <div className="elfsight-app-19f8dd44-4b8c-44ec-b531-ba7722a90345" />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
