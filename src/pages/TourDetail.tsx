import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

import styles from "../css/ToursDetails.module.css";

/*Componentes*/
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import DetailsBox from '../components/DetailsBox.tsx';
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
                    <h1 className="fontMontserrat">{tour.nombre}</h1>
                    <p dangerouslySetInnerHTML={{ __html: instroduccion }}></p>
                </div>
                <div className="imageContainer" style={{ backgroundImage: "url('../images/Mokum.jpg')" }}>
                </div>
            </section>

            <DetailsBox
                duracion="4 horas"
                tipoDeTour="Tour"
                puntoEncuentro="Museo Casa de Rembrandt, Jodenbreestraat 4, 1011 NK Amsterdam"
                idioma="Guía ES/EN"
                lugares="Museo Rembrandt, Waterlooplein, Museo Judío, Sinagoga Portuguesa, Monumento Nombres Holocausto, Hortus Amsterdam, Museo del Holocausto, Escultura de Anna Frank, Merwedeplein, Anne Frank Huis, Westerkerk, Homomonument"
                cancelacion="Cancelación gratuita 48hrs."
            />

            <section id="queHaras" className="sectionPaddingTour spaceBetween colorBlack">
                <div className="textContainer">
                    <h1 className="fontMontserrat">¿Que haras?</h1>
                    <p dangerouslySetInnerHTML={{ __html: queHaras }}></p>
                </div>
                <div className="textContainer">
                    <h1 className="fontMontserrat">Detalle</h1>
                    <p dangerouslySetInnerHTML={{ __html: enDetalle }}></p>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default TourDetail;