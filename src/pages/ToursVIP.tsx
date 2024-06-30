import React, { useContext } from "react";
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';
/*Components*/
import Footer from "../components/Footer.tsx"
import TourButton from "../components/TourButton.tsx";
import RetrowaveItem from '../components/RetrowaveItem.tsx';

function ToursVIP() {
    const { language, translations } = useContext(LanguageContext);

    return (
        <main>
            <section style={{ minHeight: "unset", height: "43vh", position: "relative", overflow: "hidden" }}>
                <div className="videoBackground">
                    <video autoPlay muted loop playsInline>
                        <source src="/videos/Tulipans.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h1 className="outTeamTextOverlay">Tours VIP</h1>
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
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        {translations[language].tours.vipFirstTitle}
                    </h1>
                    <p>
                        {translations[language].tours.vipFirstText}
                    </p>
                </div>
                <div style={{marginRight:"auto"}}>
                    <TourButton
                        nombre="ScreenTour Mokum, El Ámsterdam Judío PRIVATE"
                        duracion="4 Hrs"
                        lugar="Ámsterdam"
                        precio={400}
                        tipoDeTour="Tour"
                        linkImagen="/images/Mokum.jpg"
                        link="/Mokum, el Ámsterdam Judío"
                        widgetId="">
                    </TourButton>
                </div>
            </section>
            <Footer />
        </main >
    );
}
export default ToursVIP;