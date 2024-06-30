import React, { useContext } from "react";
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';
/*Components*/
import Footer from "../components/Footer.tsx"
import RetrowaveItem from '../components/RetrowaveItem.tsx';

function Giftcard() {
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
                <h1 className="outTeamTextOverlay">Giftcards</h1>
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

            <Footer />
        </main >
    );
}
export default Giftcard;