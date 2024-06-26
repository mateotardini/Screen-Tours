import React, { useContext } from "react";
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';
/*Components*/
import Footer from "../components/Footer.tsx"
import TourButton from "../components/TourButton.tsx";
import RetrowaveItem from '../components/RetrowaveItem.tsx';

function Tours() {
    const { language, translations } = useContext(LanguageContext);

    return (
        <main>
            <section style={{ minHeight: "unset", height: "43vh", position: "relative", overflow: "hidden" }}>
                <div className="videoBackground">
                    <video autoPlay muted loop playsInline>
                        <source src="/videos/Skyline2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h1 className="outTeamTextOverlay">Tours</h1>
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
                        {translations[language].tours.firstTitle}
                    </h1>
                    <RetrowaveItem
                        src="/vectors/Retrowave10.png"
                        alt="Screen Tours Logo"
                        width="25vw"
                        translateX="25%"
                        translateY="-50%"
                        filter="none"
                        opacity={1}
                        zIndex={0}
                        responsivePosition="static"
                        responsiveWidth="60vw"
                        responsiveTranslateX="10%"
                        responsiveTranslateY="0%"
                    />
                    <p>
                        {translations[language].tours.firstText}
                    </p>
                </div>
            </section>

            <section className="sectionPadding colorBlack">
                <div className="row">
                <TourButton
                        nombre="ScreenTour Mokum, El Ámsterdam Judío"
                        duracion="4 Hrs"
                        lugar="Ámsterdam"
                        precio={30}
                        tipoDeTour="Tour"
                        linkImagen="/images/Mokum.jpg"
                        link="/Mokum, el Ámsterdam Judío"
                        widgetId="cb3092b5-1aab-4449-b720-5049bd81e7d7">
                    </TourButton>
                    <TourButton
                        nombre="ScreenFreeTour Histórico de Ámsterdam"
                        duracion="4 Hrs"
                        lugar="Ámsterdam"
                        precio="Free "
                        tipoDeTour="FreeTour"
                        linkImagen="/images/HistoryTour.jpg"
                        link="/ScreenFreeTour Histórico de Ámsterdam"
                        widgetId="b66447ad-9f69-4337-a22b-e758fdd18c19">
                    </TourButton>
                    <TourButton
                        nombre="ScreenTour Second World War"
                        duracion="3 Hrs 30 Mins"
                        lugar="Ámsterdam"
                        precio={20}
                        tipoDeTour="Tour"
                        linkImagen="/images/HistoryTour3.jpg"
                        link="/ScreenTour Second World War"
                        widgetId="">
                    </TourButton>
                    <TourButton
                        nombre="ScreenTour Amsterdam through Rembrandt"
                        duracion="3 Hrs 30 Mins"
                        lugar="Ámsterdam"
                        precio={40}
                        tipoDeTour="Tour"
                        linkImagen="/images/Rembrandt/RembrandtEstatue.jpg"
                        link="/ScreenTour Amsterdam through Rembrandt"
                        widgetId="">
                    </TourButton>
                </div>
            </section>

            <Footer />
        </main >
    );
}
export default Tours;