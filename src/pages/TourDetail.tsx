import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';
/*CSS*/
import styles from "../css/ToursDetails.module.css";
/*Componentes*/
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import DetailsBox from '../components/DetailsBox.tsx';
import WarningsBox from '../components/WarningsBox.tsx';
/*Data*/
import toursData from '../tours.json'; // Importa el archivo JSON de datos de tours


function TourDetail() {
    const [tour, setTour] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const foundTour = toursData.find(tour => tour.id === id);

        if (foundTour) {
            setTour(foundTour);
        }
    }, [id]);

    if (!tour) {
        return <div>Cargando...</div>;
    }

    const instroduccion = DOMPurify.sanitize(tour.introduccion);
    const queVeras = DOMPurify.sanitize(tour.queVeras);
    const places = tour.queVeras.split('\n');
    const queHaras = DOMPurify.sanitize(tour.queHaras);
    const enDetalle = DOMPurify.sanitize(tour.enDetalle);

    return (
        <main>
            <NavBar />

            <section id="introduccion" className="sectionPaddingLeft spaceBetween colorBlack">
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        {tour.titulo}
                        <h3 className="fontMontserrat">{tour.subtitulo}</h3>
                    </h1>

                    <p dangerouslySetInnerHTML={{ __html: instroduccion }}></p>
                </div>
                <div
                    className="imageContainer"
                    style={{ backgroundImage: "url('../images/Mokun/CopyrightKeeHummel.jpg')" }}
                >
                </div>
            </section>

            <DetailsBox
                duracion="4 horas"
                tipoDeTour="Tour"
                puntoEncuentro={tour.puntoEncuentro}
                idioma="Guía ES/EN"
                lugares="Museo Rembrandt, Waterlooplein, Museo Judío, Sinagoga Portuguesa, Monumento Nombres Holocausto, Hortus Amsterdam, Museo del Holocausto, Escultura de Anna Frank, Merwedeplein, Anne Frank Huis, Westerkerk, Homomonument"
                cancelacion="Cancelación gratuita 48hrs."
            />

            <section className="sectionPaddingRight spaceBetween colorBlack" style={{ paddingTop: "0", paddingBottom: "0" }}>
                <div className="imageContainerLeft" style={{ backgroundImage: "url('../images/Mokun/WesterkerkAnneFrank.jpg')" }}>
                </div>

                <div className="textContainer">
                    <h1 className="fontMontserrat">¿Que haras?</h1>
                    <p dangerouslySetInnerHTML={{ __html: queHaras }}></p>
                </div>
            </section>

            <WarningsBox
                queIncluye={tour.incluye}
                queLlevar={tour.queLlevar}
                noPermitido={tour.noPermitido}
                noIncluye={tour.noIncluye}
                importante={tour.importante}
            />

            <section id="detalle" className="sectionPaddingLeft spaceBetween colorBlack" style={{ paddingTop: "0", paddingBottom: "0" }}>
                <div className="textContainer">
                    <h1 className="fontMontserrat">Detalle</h1>
                    <p dangerouslySetInnerHTML={{ __html: enDetalle }}></p>
                </div>
                <div className="imageContainer" style={{ backgroundImage: "url('../images/Mokum.jpg')" }}>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default TourDetail;