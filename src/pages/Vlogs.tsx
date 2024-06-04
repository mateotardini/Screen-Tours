import React from "react";
import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"
import RetrowaveItem from '../components/RetrowaveItem.tsx';

function Vlogs() {
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
                <h1 className="outTeamTextOverlay">Vlogs</h1>
                <RetrowaveItem
                    src="/Retrowave6.png"
                    alt="Screen Tours Logo"
                    width="30vw"
                    translateX="-50%"
                    translateY="12%"
                    filter="none"
                    opacity={0.85}
                />
            </section>

            <section className="sectionPaddingLeft spaceBetween colorBlack">
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        Viajar es invertir en felicidad. Descubre, disfruta y comparte
                    </h1>
                    <p>
                        Screen Tours es una empresa de turismo receptivo en Los Países Bajos, especializada en el viajero hispanohablante.
                        Con un amplio equipo de guías turísticos profesionales encargado de organizar tours, circuitos y excursiones guiadas en Ámsterdam,
                        Bruselas y Bélgica, exclusivamente en español.
                    </p>
                </div>

                <div className="imageContainer">
                </div>
            </section>

            <section className="sectionPaddingRight spaceBetween colorBlack">
                <div className="imageContainer">
                </div>

                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        Viajar es invertir en felicidad. Descubre, disfruta y comparte
                    </h1>
                    <p>
                        Screen Tours es una empresa de turismo receptivo en Los Países Bajos, especializada en el viajero hispanohablante.
                        Con un amplio equipo de guías turísticos profesionales encargado de organizar tours, circuitos y excursiones guiadas en Ámsterdam,
                        Bruselas y Bélgica, exclusivamente en español.
                    </p>
                </div>
            </section>

            <Footer />
        </main >
    );
}
export default Vlogs;