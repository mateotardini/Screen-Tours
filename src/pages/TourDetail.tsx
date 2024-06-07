import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import RetrowaveItem from '../components/RetrowaveItem.tsx';
import toursData from '../tours.json'; // Importa el archivo JSON de datos de tours
import { useParams } from "react-router-dom";

function TourDetail() {
    const [tour, setTour] = useState(null);
    const { id } = useParams();
    
console.log(id);

    useEffect(() => {
        // Busca el tour con el ID proporcionado
        const foundTour = toursData.find(tour => tour.id === id);
        
        // Actualiza el estado del tour encontrado
        if (foundTour) {
            setTour(foundTour);
        }
    }, [id]);

    return (
        <main>
            <NavBar />

            <section style={{ minHeight: "unset", height: "43vh", position: "relative", overflow: "hidden" }}>
                <div className="videoBackground">
                    <video autoPlay muted loop playsInline>
                        <source src="/videos/Skyline2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h1 className="outTeamTextOverlay">{tour.nombre}</h1>
                <RetrowaveItem
                    src="/vectors/Retrowave5.png"
                    alt="Screen Tours Logo"
                    width="30vw"
                    translateX="-50%"
                    translateY="-25%"
                    filter="none"
                    opacity={0.85}
                    responsiveWidth="30vh"
                    responsiveTranslateY="-35%"
                />
            </section>

            <section className="sectionPaddingLeft rowSpaceB colorBlack" style={{ paddingTop: "0" }}>
                <div>
                    <RetrowaveItem
                        src="/vectors/Retrowave7.png"
                        alt="Screen Tours Logo"
                        width="30vw"
                        translateX="15%"
                        translateY="3%"
                        filter="none"
                        opacity={0.25}
                    />

                    <RetrowaveItem
                        src="/vectors/Mill2.png"
                        alt="Screen Tours Logo"
                        width="30vw"
                        translateX="8%"
                        translateY="28%"
                        filter="drop-shadow(6px 6px 2px #ffffff) invert(27%) sepia(82%) saturate(420%) hue-rotate(173deg) brightness(94%) contrast(96%)"
                        opacity={1}
                    />

                    <div className="textContainer">
                        <h1 className="fontMontserrat">Introducción</h1>
                        <p>{tour.introduccion}</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default TourDetail;