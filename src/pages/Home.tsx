import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';
/*Components*/
import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"
import TourButton from "../components/TourButton.tsx";
import ImageButton from "../components/ImageButton.tsx";
import WaveSeparator from '../components/WaveSeparator.tsx';
import RetrowaveItem from '../components/RetrowaveItem.tsx';

function Home() {
    const { language, translations } = useContext(LanguageContext);

    const nextSectionRef = useRef(null);

    return (
        <main>
            <NavBar></NavBar>

            <section className="heroSection">
                <video className="backgroundVideo" autoPlay loop muted title='Screen Tours Europe, Amsterdam Skyline'>
                    <source src="/videos/Skyline3.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>

                <RetrowaveItem
                    src="/vectors/Retrowave7.png"
                    alt="Screen Tours Sun Retrowave Item"
                    width="50vw"
                    translateX="-50%"
                    translateY="-43%"
                    filter="none"
                    opacity={1}
                    responsiveWidth="90vw"
                    responsiveTranslateY="-44%"
                    zIndex={0}
                />

                <RetrowaveItem
                    src="/vectors/Recurso 1.png"
                    alt="Screen Tours Logo"
                    width="101vw"
                    translateX="-50%"
                    translateY="-38%"
                    filter="none"
                    opacity={1}
                    responsiveWidth="250vw"
                    responsiveTranslateY="-34%"
                    zIndex={0}
                />

                <img
                    className="logoTittle"
                    src="/vectors/Logo.png"
                    alt="Screen Tours Logo">
                </img>

                <div className="overlayText">
                    <h1 className="fontMontserrat">
                        Welcome to Netherlands
                    </h1>
                    {/*<button onClick={scrollToNextSection}>{translations[language].home.welcomeButton}</button>*/}
                </div>
            </section>

            <WaveSeparator topColor="#090d29" bottomColor="#f8f8f8"></WaveSeparator>

            <section ref={nextSectionRef} className="sectionPaddingLeft spaceBetween colorBlack" style={{ alignItems: "center" }}>
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        {translations[language].home.firstTitle}
                    </h1>

                    <RetrowaveItem
                        src="/vectors/Retrowave11.png"
                        alt="Screen Tours Retrowave Item"
                        width="24vw"
                        translateX="-240%"
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
                        {translations[language].home.firstText}
                    </p>
                </div>

                <div className="imageContainer" style={{ overflow: "hidden" }}>
                    <video autoPlay loop muted style={{ height: "-webkit-fill-available" }} title='Screen Tours Europe, Amsterdam Presentation'>
                        <source src="/videos/SCREENTOURS.mp4" type="video/mp4"></source>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="sectionPadding colorBlack">
                <h1 className="fontMontserrat">{translations[language].home.secondTitle}</h1>
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
                        precio={25}
                        tipoDeTour="Tour"
                        linkImagen="/images/HistoryTour3.jpg"
                        link="/ScreenTour Second World War"
                        widgetId="3db2b990-6b95-4738-9fa1-43730e792668">
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

            <section className="colorBlack">
                <ImageButton></ImageButton>
            </section>

            <section className="sectionBorderRadius colorBlack">
                <div className="imageContainer" style={{ backgroundImage: "url('../images/Bike.jpg')" }} title='Screen Tours Europe, Amsterdam'>
                </div>
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        {translations[language].home.fourthTitle}
                    </h1>
                    <p>
                        {translations[language].home.fourthText}
                    </p>
                    <Link to="/Tours"><button>{translations[language].home.seeTours}</button></Link>
                </div>
            </section>

            <Footer></Footer>
        </main >
    );
}
export default Home;