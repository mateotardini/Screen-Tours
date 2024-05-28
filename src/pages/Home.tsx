import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"
import TourButton from "../components/TourButton.tsx";
import ImageButton from "../components/ImageButton.tsx";
import WaveSeparator from '../components/WaveSeparator.tsx';

function Home() {
    return (
        <main>
            <NavBar></NavBar>

            <section className="heroSection">
                <video className="backgroundVideo" autoPlay loop muted>
                    <source src="/Video1.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>

                <img
                    className="retrowaveItem2"
                    src="/Retrowave7.png"
                    alt="Screen Tours Logo">
                </img>

                <img
                    className="retrowaveItem"
                    src="/Recurso 1.png"
                    alt="Screen Tours Logo">
                </img>

                <img
                    className="logoTittle"
                    src="/Logo.png"
                    alt="Screen Tours Logo">
                </img>

                <div className="overlayText">
                    <h2 className="fontMontserrat">
                        Welcome to Amsterdam.
                        <br />
                        Let us show you around
                    </h2>
                    <button>Are you in?</button>
                </div>
            </section>

            <WaveSeparator topColor="#090d29" bottomColor="#f8f8f8"></WaveSeparator>

            <section className="sectionPaddingLeft rowSpaceB colorBlack">
                <div className="textContainer">
                    <img
                        className="retrowaveItem4"
                        src="/Retrowave7.png"
                        alt="Screen Tours Logo">
                    </img>
                    <img
                        className="retrowaveItem3"
                        src="/Mill2.png"
                        alt="Screen Tours Logo">
                    </img>
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


            <section className="sectionPadding colorBlack">
                <h1 className="fontMontserrat">¿Looking for tour in Amsterdam?</h1>
                <div className="row">
                    <TourButton
                        nombre="Tour del Rijksmuseum"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={50}
                        tipoDeTour="Tour"
                        linkImagen=""
                        link="">
                    </TourButton>
                    <TourButton
                        nombre="Tour del Rijksmuseum"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={50}
                        tipoDeTour="Excursión"
                        linkImagen=""
                        link="">
                    </TourButton>
                    <TourButton
                        nombre="Tour del Barrio Rojo"
                        duracion="X Horas"
                        lugar="Ámsterdam"
                        precio={20}
                        tipoDeTour="Tour"
                        linkImagen=""
                        link="">
                    </TourButton>
                </div>
            </section>

            <section className="colorBlack">
                <ImageButton></ImageButton>
            </section>

            <section className="sectionBorderRadius rowSpaceB colorBlack">
                <div className="imageContainer">
                </div>
                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        ¡VEN CON LOS DEBERES HECHOS!
                    </h1>
                    <p>
                        Descarga nuestra guía y descubre los 20 lugares que no te puedes perder en tu primera visita a Ámsterdam
                    </p>
                    <button>Explorar</button>
                </div>
            </section>

            <Footer></Footer>
        </main >
    );
}
export default Home;