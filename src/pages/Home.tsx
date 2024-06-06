import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LanguageContext } from '../contexts/LanguageContext.js';

import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"
import TourButton from "../components/TourButton.tsx";
import ImageButton from "../components/ImageButton.tsx";
import WaveSeparator from '../components/WaveSeparator.tsx';
import RetrowaveItem from '../components/RetrowaveItem.tsx';

function Home() {
    const { language, translations } = useContext(LanguageContext);

    return (
        <main>
            <NavBar></NavBar>

            <section className="heroSection">
                <video className="backgroundVideo" autoPlay loop muted>
                    <source src="/videos/Skyline3.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>

                <RetrowaveItem
                    src="/Retrowave7.png"
                    alt="Screen Tours Sun Item"
                    width="50vw"
                    translateX="-50%"
                    translateY="-43%"
                    filter="none"
                    opacity={1}
                    responsiveWidth="90vw"
                    responsiveTranslateY="-44%"
                />

                <RetrowaveItem
                    src="/Recurso 1.png"
                    alt="Screen Tours Logo"
                    width="101vw"
                    translateX="-50%"
                    translateY="-38%"
                    filter="none"
                    opacity={1}
                    responsiveWidth="250vw"
                    responsiveTranslateY="-34%"
                />

                <img
                    className="logoTittle"
                    src="/Logo.png"
                    alt="Screen Tours Logo">
                </img>

                <div className="overlayText">
                    <h2 className="fontMontserrat">
                        Welcome to Netherlands.
                        <br />
                        {translations[language].home.subtittle}
                    </h2>
                    <button>{translations[language].home.welcomeButton}</button>
                </div>
            </section>

            <WaveSeparator topColor="#090d29" bottomColor="#f8f8f8"></WaveSeparator>

            <section className="sectionPaddingLeft spaceBetween colorBlack">
                <RetrowaveItem
                    src="/Retrowave7.png"
                    alt="Screen Tours Logo"
                    width="30vw"
                    translateX="-211%"
                    translateY="129%"
                    filter="none"
                    opacity={0.25}
                />

                <RetrowaveItem
                    src="/Mill2.png"
                    alt="Screen Tours Logo"
                    width="30vw"
                    translateX="-211%"
                    translateY="200%"
                    filter="drop-shadow(6px 6px 2px #ffffff) invert(27%) sepia(82%) saturate(420%) hue-rotate(173deg) brightness(94%) contrast(96%)"
                    opacity={1}
                />

                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        {translations[language].home.firstTittle}
                    </h1>
                    <p>
                        {translations[language].home.firstText}
                    </p>
                </div>

                <div className="imageContainer">
                </div>
            </section>

            <section className="sectionPadding colorBlack">
                <h1 className="fontMontserrat">¿Looking for tour in Amsterdam?</h1>
                <div className="row">
                    <TourButton
                        nombre="Tour Histórico de Ámsterdam"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={50}
                        tipoDeTour="Tour"
                        linkImagen="/Background3.jpg"
                        link="">
                    </TourButton>
                    <TourButton
                        nombre="Amsterdam through Rembrandt"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={50}
                        tipoDeTour="Excursión"
                        linkImagen="/Rembrant.jpg"
                        link="">
                    </TourButton>
                    <TourButton
                        nombre="Mokum, el Ámsterdam Judío"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={20}
                        tipoDeTour="Tour"
                        linkImagen="/Mokum.jpg"
                        link="">
                    </TourButton>
                </div>
            </section>

            <section className="colorBlack">
                <ImageButton></ImageButton>
            </section>

            <section className="sectionBorderRadius spaceBetween colorBlack">
                <div className="imageContainer">
                </div>
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        ¡VEN CON LOS DEBERES HECHOS!
                    </h1>
                    <p>
                        Descarga nuestra guía y descubre los 20 lugares que no te puedes perder en tu primera visita a Ámsterdam
                    </p>
                    <button><Link to="/Vlogs">Ver Vlogs</Link></button>
                </div>
            </section>

            <Footer></Footer>
        </main >
    );
}
export default Home;