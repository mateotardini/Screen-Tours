import React from "react";
/*Components */
import Footer from "../components/Footer.tsx"
import RetrowaveItem from '../components/RetrowaveItem.tsx';

function Vlogs() {
    return (
        <main>
            <section style={{ minHeight: "unset", height: "43vh", position: "relative", overflow: "hidden" }}>
                <div className="videoBackground">
                    <video autoPlay muted loop playsInline>
                        <source src="/videos/Tour.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h1 className="outTeamTextOverlay">Vlogs</h1>
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

            <section className="sectionPaddingLeft spaceBetween colorBlack" style={{ paddingTop: "0", paddingBottom: "0"}}>
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        Tour Virtual - Kinkerbuurt
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo viverra metus, mollis porta arcu tristique quis. Nam sodales eros eu sem tempor finibus. Fusce ultrices mauris ac dolor mollis feugiat. Aliquam sollicitudin id enim quis auctor. Mauris ut arcu nunc. Vestibulum sit amet tortor at eros ornare fringilla sed in libero.
                        Sed orci nunc, congue eu facilisis in, porttitor at justo. Cras vestibulum viverra justo, at finibus enim fringilla vitae. Integer ornare ex id pretium rutrum.
                    </p>
                </div>

                <div className="videoContainerLeft">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EtxCpMzu1GY?si=-GNmAv4Td1qRzgvK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section className="sectionPaddingRight spaceBetween colorBlack" style={{ paddingTop: "0", paddingBottom: "0"}}>
                <div className="videoContainer">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EtxCpMzu1GY?si=-GNmAv4Td1qRzgvK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        Visita guiada por el Barrio Rojo
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo viverra metus, mollis porta arcu tristique quis. Nam sodales eros eu sem tempor finibus.
                        Fusce ultrices mauris ac dolor mollis feugiat. Aliquam sollicitudin id enim quis auctor. Mauris ut arcu nunc. Vestibulum sit amet tortor at eros ornare fringilla sed in libero.
                        Sed orci nunc, congue eu facilisis in, porttitor at justo. Cras vestibulum viverra justo, at finibus enim fringilla vitae. Integer ornare ex id pretium rutrum.
                    </p>
                </div>
            </section>

            <section className="sectionPaddingLeft spaceBetween colorBlack" style={{ paddingTop: "0", paddingBottom: "0"}}>
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        Tour Virtual - Kinkerbuurt
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo viverra metus, mollis porta arcu tristique quis. Nam sodales eros eu sem tempor finibus. Fusce ultrices mauris ac dolor mollis feugiat. Aliquam sollicitudin id enim quis auctor. Mauris ut arcu nunc. Vestibulum sit amet tortor at eros ornare fringilla sed in libero.
                        Sed orci nunc, congue eu facilisis in, porttitor at justo. Cras vestibulum viverra justo, at finibus enim fringilla vitae. Integer ornare ex id pretium rutrum.
                    </p>
                </div>

                <div className="videoContainerLeft">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EtxCpMzu1GY?si=-GNmAv4Td1qRzgvK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <Footer />
        </main >
    );
}
export default Vlogs;