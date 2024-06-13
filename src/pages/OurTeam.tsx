import React, { useContext } from "react";
import { Link } from 'react-router-dom';
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';
/*Components*/
import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"
import RetrowaveItem from '../components/RetrowaveItem.tsx';
import ImageTeam from "../components/ImageTeam.tsx"

function OurTeam() {
    const { language, translations } = useContext(LanguageContext);

    return (
        <main>
            <NavBar></NavBar>

            <section style={{ minHeight: "unset", height: "43vh", position: "relative", overflow: "hidden" }}>
                <div className="videoBackground">
                    <video autoPlay muted loop playsInline>
                        <source src="/videos/Tour.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h1 className="outTeamTextOverlay">{translations[language].ourTeam.subtitle}</h1>
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

            <section className="sectionPaddingRight spaceBetween colorBlack">
                <div className="imageContainerLeft" style={{ backgroundImage: "url('../images/Team.jpg')" }}>
                </div>

                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        {translations[language].ourTeam.title}
                    </h1>
                    <p>
                        {translations[language].ourTeam.text}
                    </p>
                </div>
            </section>

            <section className="sectionPadding ourTeam">
                <div className="spaceBetween" style={{ flexWrap: "wrap" }}>

                    <ImageTeam
                        nombre="Ana María"
                        puesto="Guia/Host"
                        testimonio="Juntos, vamos a conocer todos los rincones de una ciudad que tiene un encanto especial, una capital europea que sin necesidad de monumentos mundialmente conocidos, ha sabido robarnos el corazón con canales de ensueño, casas bailarinas y bicicletas sin frenos."
                        linkImagen="/team/Ana María.png"
                    />

                    <ImageTeam
                        nombre="Ana"
                        puesto="Fundadora Guia/Host"
                        testimonio="Una ciudad así debe ser muy bien explicada para llegar a comprenderla, y es una suerte dar con un guía que no sólo te sumerja desde el primer minuto, sino que también conozca los triunfos y las etapas más oscuras de su historia."
                        linkImagen="/team/Ana Blazquez.jpg"
                    />

                    <ImageTeam
                        nombre="Gabi"
                        puesto="Guia/Host"
                        testimonio="Me encanta compartir el día a día en esta ciudad y todas las experiencias que voy viviendo"
                        linkImagen="/team/Gabi.png"
                    />

                </div>
            </section>

            <section className="sectionBorderRadius colorBlack">
                <div className="imageContainer" style={{ backgroundImage: "url('../images/Tour(Mattia Sacco).jpg')" }}>
                </div>
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        {translations[language].ourTeam.secondTitle}
                    </h1>
                    <p>
                        {translations[language].ourTeam.secondText}
                    </p>
                    <Link to="/Tours"><button>Conoce nuestras <strong>excursiones en español</strong></button></Link>
                </div>
            </section>


            <Footer></Footer>
        </main >
    );
}
export default OurTeam;