import React from "react";
import { Link } from 'react-router-dom';
/*Components*/
import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"
import RetrowaveItem from '../components/RetrowaveItem.tsx';
import ImageTeam from "../components/ImageTeam.tsx"

function OurTeam() {
    return (
        <main>
            <NavBar></NavBar>

            <section style={{ minHeight: "unset", height: "43vh", position: "relative", overflow: "hidden" }}>
                <div className="videoBackground">
                    <video autoPlay muted loop playsInline>
                        <source src="/videos/Skyline2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h1 className="outTeamTextOverlay">Nuestro Equipo</h1>
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
                        Conoce a nuestro equipo
                    </h1>
                    <p>
                        Familiarizate con nuestro equipo de profesionales. Aquí podrás conocer el background
                        profesional y formación de los guías que te acompañarán durante tu tour, además de contar
                        con una amplia experiencia y formación, te contagiarán su pasión por la ciudad y cultura
                        holandesa.
                    </p>
                </div>
            </section>

            <section className="sectionPadding ourTeam">
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
                        puesto="DiseÑadora Grafica"
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
                        puesto="DiseÑadora Grafica"
                        testimonio="La vida no está hecha para vivir en un solo lugar"
                        linkImagen="/team/Team2.jpg"
                    />
                </div>
            </section>

            <section className="sectionBorderRadius colorBlack">
                <div className="imageContainer" style={{ backgroundImage: "url('../images/Tour(Mattia Sacco).jpg')" }}>
                </div>
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        ¿Listo para recorrer Netherlands?
                    </h1>
                    <p>
                        ¡Ya conoces a nuestro equipo, es hora que conozcas Países Bajos!
                    </p>
                    <Link to="/Tours"><button>Conoce nuestras <strong>excursiones en español</strong></button></Link>
                </div>
            </section>


            <Footer></Footer>
        </main >
    );
}
export default OurTeam;