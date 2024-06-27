import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';
/*CSS*/
import styles from "../css/ToursDetails.module.css";
/*Componentes*/
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import DetailsBox from '../components/DetailsBox.tsx';
import WarningsBox from '../components/WarningsBox.tsx';
import RegiondoWidgetPopup from '../components/RegiondoWidgetPopup.tsx';
/*Data*/
import toursData from '../tours.json';

interface Tour {
    id: string;
    titulo: string;
    subtitulo: string;
    introduccion: string;
    duracion: string;
    queVeras: string;
    queHaras: string;
    enDetalle: string;
    incluye: string;
    queLlevar: string;
    noPermitido: string;
    importante: string;
    noIncluye: string;
    puntoEncuentro: string;
    widgetId: string;
}

function TourDetail() {
    const { language, translations } = useContext(LanguageContext);

    const [showPopup, setShowPopup] = useState(false);

    const [tour, setTour] = useState<Tour | null>(null);
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
    const noIncluye = DOMPurify.sanitize(tour.noIncluye);

    //Button
    const handleButtonClick = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    //End Button

    return (
        <main>
            <NavBar />

            <section id="introduccion" className={`sectionPaddingLeft spaceBetween colorBlack ${styles.marginTop}`}>
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        {tour.titulo}
                        <h3 className="fontMontserrat">{tour.subtitulo}</h3>
                    </h1>

                    <p dangerouslySetInnerHTML={{ __html: instroduccion }}></p>
                    <button onClick={handleButtonClick}>{translations[language].tour.lastButton}</button>
                </div>
                <div
                    className="imageContainer"
                    style={{ backgroundImage: `url(${tour.imagen1})` }}
                    title={"Screen Tours Europ " + tour.titulo}
                >
                </div>
            </section>

            <DetailsBox
                duracion={tour.duracion}
                tipoDeTour="Tour"
                puntoEncuentro={tour.puntoEncuentro}
                idioma="Guía ES/EN"
                lugares={queVeras}
                cancelacion="Cancelación gratuita 48hrs."
            />

            {queHaras && (
                <section className="sectionPaddingRight spaceBetween colorBlack" style={{ paddingTop: "0", paddingBottom: "0" }}>
                    <div
                        className="imageContainerLeft"
                        style={{ backgroundImage: `url(${tour.imagen2})` }}
                        title={"Screen Tours Europ " + tour.titulo}>
                    </div>

                    <div className="textContainer">
                        <h1 className="fontMontserrat">¿Qué harás?</h1>
                        <p dangerouslySetInnerHTML={{ __html: queHaras }}></p>
                    </div>
                </section>
            )}

            <WarningsBox
                queIncluye={tour.incluye}
                queLlevar={tour.queLlevar}
                noPermitido={tour.noPermitido}
                noIncluye={tour.noIncluye}
                importante={tour.importante}
            />

            {enDetalle && (
                <section id="detalle" className="sectionPaddingLeft spaceBetween colorBlack" style={{ paddingTop: "0", paddingBottom: "0" }}>
                    <div className="textContainer">
                        <h1 className="fontMontserrat">En Detalle</h1>
                        <p dangerouslySetInnerHTML={{ __html: enDetalle }}></p>
                    </div>
                    <div
                        className="imageContainer"
                        style={{ backgroundImage: `url(${tour.imagen3})` }}
                        title={"Screen Tours Europ " + tour.titulo}>
                    </div>
                </section>
            )
            }
            <section className="sectionBorderRadius colorBlack">
                <div
                    className="imageContainer"
                    style={{ backgroundImage: `url(${tour.imagen4})` }}
                    title={"Screen Tours Europ " + tour.titulo}>
                </div>
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        {translations[language].tour.lastTitle}
                    </h1>
                    <p>
                        {translations[language].tour.lastText}
                    </p>

                    <button onClick={handleButtonClick}>{translations[language].tour.lastButton}</button>

                    {showPopup && <RegiondoWidgetPopup widgetId={tour.widgetId} onClose={handleClosePopup} />}
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default TourDetail;