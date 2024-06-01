import React from "react";
import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"

import RetrowaveItem from '../components/RetrowaveItem.tsx';
import WaveSeparator from '../components/WaveSeparator.tsx';
import ImageTeam from "../components/ImageTeam.tsx"

import { FaRegArrowAltCircleRight } from "react-icons/fa";

function OurTeam() {
    return (
        <main>
            <NavBar></NavBar>

            <section style={{ minHeight: "unset",height: "43vh", position: "relative", overflow: "hidden" }}>
                <div className="videoBackground">
                    <video autoPlay muted loop playsInline>
                        <source src="/videos/Skyline2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h1 className="outTeamTextOverlay">Nuestro Equipo</h1>
                <RetrowaveItem
                    src="/Retrowave5.png"
                    alt="Screen Tours Logo"
                    width="30vw"
                    translateX="-50%"
                    translateY="12%"
                    filter="none"
                    opacity={0.85}
                />
            </section>

            <section className="sectionPaddingRight spaceBetween colorBlack">
                <div className="imageContainerLeft">
                </div>

                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        Somos un equipo, apúntate a la aventura
                    </h1>
                    <p>
                        Organizamos visitas únicas, mediante un modelo de turismo respetuoso con cada una de los
                        destinos a través de nuestros tours y excursiones con un equipo de guías turísticos que te mostrarán
                        las particularidades de esta ciudad con la mayor profesionalidad, puntualidad y amabilidad.
                    </p>
                    <button>Conoce nuestras <strong>excursiones en español</strong> <FaRegArrowAltCircleRight /></button>
                </div>

            </section>

            <section className="sectionPadding">
                <div className="spaceBetween">
                    <ImageTeam
                        nombre="Guy"
                        puesto="Fundador"
                        testimonio="La vida no está hecha para vivir en un solo lugar"
                        linkImagen="/team/Team1.jpeg"
                    />

                    <ImageTeam
                        nombre="Maya"
                        puesto="Guia/Host"
                        testimonio="Los Países Bajos están llenos de sorpresas, aspectos desconocidos por los viajeros y ciudades súper interesantes.¿Os las enseño?"
                        linkImagen="/team/Team2.jpg"
                    />

                    <ImageTeam
                        nombre="Patricia"
                        puesto="Diseñadora Grafica"
                        testimonio="Me encanta compartir el día a día en esta ciudad y todas las experiencias que voy viviendo"
                        linkImagen="/team/Team3.jpg"
                    />
                </div>

                <div className="spaceBetween">
                    <ImageTeam
                        nombre="Guy"
                        puesto="Fundador"
                        testimonio="La vida no está hecha para vivir en un solo lugar"
                        linkImagen="/team/Team3.jpg"
                    />

                    <ImageTeam
                        nombre="Maya"
                        puesto="Guia/Host"
                        testimonio="La vida no está hecha para vivir en un solo lugar"
                        linkImagen="/team/Team1.jpeg"
                    />

                    <ImageTeam
                        nombre="Patricia"
                        puesto="Diseñadora Grafica"
                        testimonio="La vida no está hecha para vivir en un solo lugar"
                        linkImagen="/team/Team2.jpg"
                    />
                </div>
            </section>

            <section className="sectionBorderRadius spaceBetween colorBlack">
                <div className="imageContainer">
                </div>
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        ¡Únete a nuestro equipo!
                    </h1>
                    <p>
                        Descarga nuestra guía y descubre los 20 lugares que no te puedes perder en tu primera visita a Ámsterdam
                    </p>
                    <button>Guía-Conductor Bilingüe</button>
                    <button>Conductor de autobús</button>
                </div>
            </section>


            <Footer></Footer>
        </main >
    );
}
export default OurTeam;