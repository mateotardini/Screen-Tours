import React from 'react';
import { Link } from 'react-router-dom';
/*CSS*/
import styles from "../css/Footer.module.css";
/*Iconos*/
import { FaFacebookF, FaInstagram, FaGoogle,FaTripadvisor,FaWhatsapp  } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageBackground}>
      </div>

      <div className={styles.container}>
        <div className="row" style={{ alignItems: "flex-start", justifyContent: "space-between", padding: "0 18%" }}>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <img className={styles.logo}
              src="/Logo Blanco.png"
              alt='Screen Tours Logo'
            />
            <ul className="row">
              <li><a href="https://www.instagram.com/screentours/"><FaGoogle   className={styles.bigIcon}/></a></li>
              <li><a href="https://www.instagram.com/screentours/"><FaTripadvisor   className={styles.bigIcon}/></a></li>
              <li><a href="https://www.instagram.com/screentours/"><FaFacebookF  className={styles.bigIcon}/></a></li>
              <li><a href="https://www.instagram.com/screentours/"><FaInstagram  className={styles.bigIcon}/></a></li>      
            </ul>
          </div>

          <div className={styles.column}>
            <ul className={styles.links}>
              <li><FaMapMarkerAlt className={styles.icon}/>Amsterdam, Paises Bajos</li>
              <li><FaClock  className={styles.icon}/>09:00h - 17:00h</li>
              <li><FaPhoneAlt className={styles.icon}/><a href="https://wa.me/5491163733844" target='_blank'>+54 9 11 6373-3844 </a></li>
              <li><FaWhatsapp className={styles.icon}/><a href="https://wa.me/5491163733844" target='_blank'>+54 9 11 6373-3844 </a></li>
              <li><FaEnvelope className={styles.icon}/><a href="mailto:screentours.uptodate@gmail.com" target='_blank'>screentours.uptodate@gmail.com</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <ul className={styles.links}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/OurTeam">Nuestro Equipo</Link></li>
              <li><Link to="/Tours">Tours</Link></li>
              <li><Link to="/Tours">Excursiones</Link></li>
              <li><Link to="/Tours">Free Tours</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <ul className={styles.links}>
              <li><Link to="/Tours">Circuitos</Link></li>
              <li><Link to="/Tours">Tickets</Link></li>
              <li><Link to="/Tours">Vlogs</Link></li>
              <li><Link to="/Contact">Contacto</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <button>Conocé A Nuestros Guias</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;