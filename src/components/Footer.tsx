import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';
/*CSS*/
import styles from "../css/Footer.module.css";
/*Iconos*/
import { FaTiktok, FaInstagram, FaGoogle, FaTripadvisor, FaWhatsapp } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

function Footer() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <footer className={styles.footer}>
      <div className={styles.imageBackground}>
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <img className={styles.logo}
              src="/vectors/Logo Blanco.png"
              alt='Screen Tours Logo'
            />
            <ul className="row">
              <li><a href="https://www.instagram.com/screentours/" target='_blank' rel="noreferrer"><FaGoogle className={styles.bigIcon} /></a></li>
              <li><a href="https://www.instagram.com/screentours/" target='_blank' rel="noreferrer"><FaTripadvisor className={styles.bigIcon} /></a></li>
              <li><a href="https://www.instagram.com/screentours/" target='_blank' rel="noreferrer"><FaTiktok className={styles.bigIcon} /></a></li>
              <li><a href="https://www.instagram.com/screentours/" target='_blank' rel="noreferrer"><FaInstagram className={styles.bigIcon} /></a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <ul className={styles.links}>
              <li><FaMapMarkerAlt className={styles.icon} />Amsterdám, Netherlands </li>
              <li><FaClock className={styles.icon} />09:00h - 17:00h</li>
              <li><FaPhoneAlt className={styles.icon} />
                <a href="https://wa.me/5491163733844" target='_blank' rel="noopener noreferrer">+31 629 123 242</a>
              </li>
              <li><FaWhatsapp className={styles.icon} />
                <a href="https://wa.me/5491163733844" target='_blank' rel="noopener noreferrer">+31 629 123 242</a>
              </li>
              <li><FaEnvelope className={styles.icon} />
                <a href="mailto:screentours.uptodate@gmail.com" target='_blank' rel="noopener noreferrer">ScreenToursEurope@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <ul className={styles.links}>
              <li><Link to="/">{translations[language].navbar.home}</Link></li>
              <li><Link to="/Tours">Tours</Link></li>
              <li><Link to="/ToursVIP">Tours VIP</Link></li>
              <li><Link to="/Contact">{translations[language].contact.subtitle}</Link></li>
              <li><Link to="/OurTeam">{translations[language].ourTeam.subtitle}</Link></li>
              {/*<li><Link to="/Daytrips">Daytrips</Link></li>
              <li><Link to="/FreeTours">Free Tours</Link></li>*/}
            </ul>
          </div>

          {/*<div className={styles.column}>
            <ul className={styles.links}>
              <li><Link to="/Tours">Circuitos</Link></li>
              <li><Link to="/Museos">Museos</Link></li>
              <li><Link to="/Vlogs">Vlogs</Link></li>
              <li><Link to="/Contact">Contacto</Link></li>
            </ul>
          </div>*/}

          <div className={styles.column}>
            <Link to="/OurTeam"><button>{translations[language].ourTeam.button}</button></Link>
          </div>
        </div>

        <div className={styles.row}>
          <p>
            {translations[language].navbar.credits} <a href='https://www.linkedin.com/in/mateo-tardini-acu%C3%B1a-falc%C3%B3n-35064b195/'>Mateo Tardini Acuña.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;