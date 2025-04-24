import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaWifi, FaCar, FaCoffee, FaConciergeBell, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Services: React.FC = () => {

    const CustomPrevArrow = (props: any) => {
        const { className, onClick } = props;
        return (
            <div
                className={`${className} !text-[#4A3530] !text-2xl !z-10 !left-2 cursor-pointer`}
                onClick={onClick}
            >
                <FaChevronLeft />
            </div>
        );
    };

    const CustomNextArrow = (props: any) => {
        const { className, onClick } = props;
        return (
            <div
                className={`${className} !text-[#4A3530] !text-2xl !z-10 !right-2 cursor-pointer`}
                onClick={onClick}
            >
                <FaChevronRight />
            </div>
        );
    };

    const settings = {
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        infinite: true,
        speed: 500,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };

    const serviceCards = [
        {
            icon: <FaWifi className="w-[40px] h-auto text-[#4A3530]" />,
            title: "Wi-Fi 24/7",
            description: "Mantente conectado en todo momento gracias a nuestra red Wi-Fi de alta velocidad disponible en todo el hotel.",
        },
        {
            icon: <FaCar className="w-[40px] h-auto text-[#4A3530]" />,
            title: "Parqueadero",
            description: "Ofrecemos parqueadero gratuito para nuestros huéspedes, disponible las 24 horas.",
        },
        {
            icon: <FaCoffee className="w-[40px] h-auto text-[#4A3530]" />,
            title: "Desayuno Incluido",
            description: "Disfruta cada mañana de un desayuno tradicional sin costo adicional en nuestro comedor principal.",
        },
        {
            icon: <FaConciergeBell className="w-[40px] h-auto text-[#4A3530]" />,
            title: "Recepción 24h",
            description: "Nuestro equipo está disponible las 24 horas para atender cualquier necesidad o solicitud.",
        },
    ];

    return (
        <div id="servicios" className="px-[16px]">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-10">
                    <h1 className="text-xl font-bold tracking-wide text-[#4A3530]">SERVICIOS</h1>
                    <hr className="w-8 border-[#4A3530] mx-auto mt-2" />
                </div>

                <Slider
                    {...settings}
                    className="!pb-10" // esto agrega padding-bottom al contenedor del slider
                >
                    {serviceCards.map((card, index) => (
                        <div key={index} className="px-4 mt-5">
                            <div className="bg-base-100 border-[#4A3530] border mx-auto transition-all duration-300 ease-in-out
                w-[280px] h-[350px] lg:w-[320px] lg:h-[380px] 
                slick-center:scale-110 slick-center:shadow-xl slick-center:border-2">
                                <div className="flex flex-col items-center justify-center h-full px-6 text-center gap-5">
                                    {card.icon}
                                    <h2 className="font-bold">{card.title}</h2>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Services;