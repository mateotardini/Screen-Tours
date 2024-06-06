import React from "react";
import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"
import RetrowaveItem from '../components/RetrowaveItem.tsx';
import ContactForm from '../components/ContactForm.tsx';
/*CSS*/
import styles from "../css/Contact.module.css";
/*Iconos*/
import { FaWhatsapp } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

function Contact() {
    return (
        <main>
            <NavBar />
            <section style={{ minHeight: "unset", height: "43vh", position: "relative", overflow: "hidden" }}>
                <div className="videoBackground">
                    <video autoPlay muted loop playsInline>
                        <source src="/videos/Tulipans.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <h1 className="outTeamTextOverlay">Contacto</h1>
                <RetrowaveItem
                    src="/Retrowave5.png"
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

            <section className="sectionPaddingLeft row colorBlack" style={{ paddingTop: "0", justifyContent: "flex-start",  marginBottom:"-8%" }}>
                <RetrowaveItem
                    src="/Retrowave7.png"
                    alt="Screen Tours Logo"
                    width="20vw"
                    translateX="170%"
                    translateY="13%"
                    filter="none"
                    opacity={0.5}
                />

                <RetrowaveItem
                    src="/Mill2.png"
                    alt="Screen Tours Logo"
                    width="23vw"
                    translateX="138%"
                    translateY="45%"
                    filter="drop-shadow(6px 6px 2px #ffffff) invert(27%) sepia(82%) saturate(420%) hue-rotate(173deg) brightness(94%) contrast(96%)"
                    opacity={1}
                />


                <div className="textContainer">
                    <h1 className="fontMontserrat">
                        ¿Te podemos ayudar?
                    </h1>
                    <p>
                        Ya que estás por aquí, si tienes cualquier duda o pregunta que hacernos, aprovecha este magnífico formulario. ¡Te responderemos lo antes posible!
                    </p>
                    <div className={styles.column}>
                        <ul className={styles.links}>
                            <li><FaMapMarkerAlt className={styles.icon} /> <strong>Amsterdam, Paises Bajos</strong></li>
                            <li><FaClock className={styles.icon} /><strong>09:00h - 17:00h</strong></li>
                            <li><FaPhoneAlt className={styles.icon} /><a href="https://wa.me/5491163733844" target="_blank" rel="noreferrer" ><strong>+54 9 11 6373-3844</strong> </a></li>
                            <li><FaWhatsapp className={styles.icon} /><a href="https://wa.me/5491163733844" target="_blank" rel="noreferrer" ><strong>+54 9 11 6373-3844</strong> </a></li>
                            <li><FaEnvelope className={styles.icon} /><a href="mailto:screentours.uptodate@gmail.com" target="_blank" rel="noreferrer" ><strong>screentours.uptodate@gmail.com</strong></a></li>
                        </ul>
                    </div>
                </div>
                <ContactForm></ContactForm>
            </section>

            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.66565661412!2d4.8215604995263925!3d52.354741843979895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sar!4v1717436473704!5m2!1sen!2sar"
                width="15%"
                height="70%"
                style={{ border: 0, position: "absolute", border: "0px", top: "50%", left: "50%", transform: "translate(-334%, 0%)", borderRadius: "0 45px 45px 0px"}}
                loading="lazy"
            ></iframe>

            <Footer />
        </main >
    );
}
export default Contact;