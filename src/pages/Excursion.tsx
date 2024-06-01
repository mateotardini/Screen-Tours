import React from "react";
import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"
import TourButton from "../components/TourButton.tsx";
import RetrowaveItem from '../components/RetrowaveItem.tsx';

function Excursion() {
    return (
        <main>
            <NavBar />

            <section style={{ minHeight: "unset",height: "43vh", position: "relative", overflow: "hidden" }}>
                <div className="videoBackground">
                    <video autoPlay muted loop playsInline>
                        <source src="/videos/Skyline2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h1 className="outTeamTextOverlay">Excursiones</h1>
            </section>


            <section className="sectionPaddingLeft rowSpaceB colorBlack" style={{ paddingTop: "0" }}>
                <RetrowaveItem
                    src="/Retrowave7.png"
                    alt="Screen Tours Logo"
                    width="30vw"
                    translateX="-8%"
                    translateY="13%"
                    filter="none"
                    opacity={0.25}
                />

                <RetrowaveItem
                    src="/Mill2.png"
                    alt="Screen Tours Logo"
                    width="30vw"
                    translateX="-14%"
                    translateY="40%"
                    filter="drop-shadow(6px 6px 2px #ffffff) invert(27%) sepia(82%) saturate(420%) hue-rotate(173deg) brightness(94%) contrast(96%)"
                    opacity={1}
                />

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

            <section className="sectionPadding colorBlack">
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
                <div className="row">
                    <TourButton
                        nombre="Second World War, The Liberation of Amsterdam"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={50}
                        tipoDeTour="Tour"
                        linkImagen="/Background3.jpg"
                        link="">
                    </TourButton>
                    <TourButton
                        nombre="The Dutch Scaped"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={50}
                        tipoDeTour="Excursión"
                        linkImagen="/Background2.jpg"
                        link="">
                    </TourButton>
                </div>
            </section>

            <Footer />
        </main >
    );
}
export default Excursion;