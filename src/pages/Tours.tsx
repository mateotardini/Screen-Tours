import React from "react";
import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"
import TourButton from "../components/TourButton.tsx";
import RetrowaveItem from '../components/RetrowaveItem.tsx';

function Tours() {
    return (
        <main>
            <NavBar />

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
                <RetrowaveItem
                    src="/vectors/Retrowave7.png"
                    alt="Screen Tours Logo"
                    width="30vw"
                    translateX="15%"
                    translateY="3%"
                    filter="none"
                    opacity={0.25}
                />

                <RetrowaveItem
                    src="/vectors/Mill2.png"
                    alt="Screen Tours Logo"
                    width="30vw"
                    translateX="8%"
                    translateY="28%"
                    filter="drop-shadow(6px 6px 2px #ffffff) invert(27%) sepia(82%) saturate(420%) hue-rotate(173deg) brightness(94%) contrast(96%)"
                    opacity={1}
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
                        nombre="ScreenTour Mokum, El Ámsterdam Judío"
                        duracion="4 Hrs"
                        lugar="Ámsterdam"
                        precio={30}
                        tipoDeTour="Tour"
                        linkImagen="/images/Mokum.jpg"
                        link="/Mokum, el Ámsterdam Judío"
                        linkAPI="">
                    </TourButton>
                    <TourButton
                        nombre="ScreenFreeTour Histórico de Ámsterdam"
                        duracion="2 Hrs 30 Mins"
                        lugar="Ámsterdam"
                        precio="Free "
                        tipoDeTour="FreeTour"
                        linkImagen="/images/Background3.jpg"
                        link="/ScreenFreeTour Histórico de Ámsterdam"
                        linkAPI="">
                    </TourButton>
                    <TourButton
                        nombre="ScreenTour Amsterdam through Rembrandt"
                        duracion="3 Hrs 30 Mins"
                        lugar="Ámsterdam"
                        precio={35}
                        tipoDeTour="Tour"
                        linkImagen="/images/Rembrant.jpg"
                        link=""
                        linkAPI="">
                    </TourButton>
                </div>
            </section>

            <Footer />
        </main >
    );
}
export default Tours;