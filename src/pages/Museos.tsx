import React, { useContext } from 'react';
/*Contexts */
import { LanguageContext } from '../contexts/LanguageContext.js';
/*Components */
import Footer from "../components/Footer.tsx"
import TourButton from "../components/TourButton.tsx";
import RetrowaveItem from '../components/RetrowaveItem.tsx';

function Museos() {
    const { language, translations } = useContext(LanguageContext);

    return (
        <main>
            <section style={{ minHeight: "unset", height: "43vh", position: "relative", overflow: "hidden" }}>
                <div className="videoBackground">
                    <video autoPlay muted loop playsInline>
                        <source src="/videos/Skyline3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h1 className="outTeamTextOverlay">{translations[language].museums.subtittle}</h1>
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


            <section className="sectionPaddingLeft spaceBetween colorBlack" style={{ paddingTop: "0" }}>
                <RetrowaveItem
                    src="/vectors/Retrowave10.png"
                    alt="Screen Tours Logo"
                    width="25vw"
                    translateX="25%"
                    translateY="0%"
                    filter="none"
                    opacity={1}
                    zIndex={0}
                />

                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo viverra metus, mollis porta arcu tristique quis.
                        Nam sodales eros eu sem tempor finibus. Fusce ultrices mauris ac dolor mollis feugiat.
                        Aliquam sollicitudin id enim quis auctor. Mauris ut arcu nunc. Vestibulum sit amet tortor at eros ornare fringilla sed in libero.
                    </p>
                </div>
            </section>

            <section className="sectionPadding colorBlack">
                <div className="row">
                    <TourButton
                        nombre="Tour Histórico de Ámsterdam"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={50}
                        tipoDeTour="Tour"
                        linkImagen="/images/Background3.jpg"
                        link="">
                    </TourButton>
                    <TourButton
                        nombre="Amsterdam through Rembrandt"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={50}
                        tipoDeTour="Excursión"
                        linkImagen="/images/Rembrant.jpg"
                        link="">
                    </TourButton>
                    <TourButton
                        nombre="Mokum, el Ámsterdam Judío"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={20}
                        tipoDeTour="Tour"
                        linkImagen="/images/Mokum.jpg"
                        link="">
                    </TourButton>
                </div>
                <div className="row">
                    <TourButton
                        nombre="Second World War, The Liberation of Amsterdam"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={50}
                        tipoDeTour="Tour"
                        linkImagen="/images/Background3.jpg"
                        link="">
                    </TourButton>
                    <TourButton
                        nombre="The Dutch Scaped"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={50}
                        tipoDeTour="Excursión"
                        linkImagen="/images/Background2.jpg"
                        link="">
                    </TourButton>
                </div>
            </section>

            <Footer />
        </main >
    );
}
export default Museos;