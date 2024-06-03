import React from "react";
import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"
import RetrowaveItem from '../components/RetrowaveItem.tsx';
import ContactForm from '../components/ContactForm.tsx';
/*CSS*/
import styles from "../css/Contact.module.css";
/*Iconos*/
import { FaFacebookF, FaInstagram, FaGoogle, FaTripadvisor, FaWhatsapp } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

function Contact() {
    return (
        <main>
            <NavBar />

            <section className="sectionPaddingLeft rowSpaceB colorBlack" style={{ paddingTop: "0" }}>
                <RetrowaveItem
                    src="/Retrowave7.png"
                    alt="Screen Tours Logo"
                    width="20vw"
                    translateX="8%"
                    translateY="37%"
                    filter="none"
                    opacity={0.5}
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
                            <li><FaMapMarkerAlt className={styles.icon} />Amsterdam, Paises Bajos</li>
                            <li><FaClock className={styles.icon} />09:00h - 17:00h</li>
                            <li><FaPhoneAlt className={styles.icon} /><a href="https://wa.me/5491163733844" target="_blank">+54 9 11 6373-3844 </a></li>
                            <li><FaWhatsapp className={styles.icon} /><a href="https://wa.me/5491163733844" target="_blank">+54 9 11 6373-3844 </a></li>
                            <li><FaEnvelope className={styles.icon} /><a href="mailto:screentours.uptodate@gmail.com" target="_blank">screentours.uptodate@gmail.com</a></li>
                        </ul>
                    </div>
                </div>

                <ContactForm></ContactForm>
            </section>

            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.66565661412!2d4.8215604995263925!3d52.354741843979895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sar!4v1717436473704!5m2!1sen!2sar"
                width="100%"
                height="400vh"
                style={{ border: 0, position: "absolute", border: "0px", top: "50%", left: "50%", transform: "translate(-50%, 28%)" }}
                loading="lazy"
            ></iframe>

            <Footer />
        </main >
    );
}
export default Contact;