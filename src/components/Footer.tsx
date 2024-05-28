import React from 'react';
import { Link } from 'react-router-dom';
/*CSS*/
import styles from "../css/Footer.module.css";
/*Iconos*/
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
/*Componentes*/
import Linea from "./Linea.tsx";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageBackground}>
      </div>

      <div className={styles.container}>
        <div className="row" style={{ alignItems: "flex-start" }}>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <img className={styles.logo}
              src="/Logo.png"
              alt='Screen Tours Logo'
            />
            <ul className={styles.links}>
              <li><a href="https://www.instagram.com/nnwines/"><FaFacebookF /></a></li>
              <li><a href="https://www.instagram.com/nnwines/"><FaInstagram /></a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <h2>Contacto</h2>
            <Linea color="var(--primary-color)" grosor={5} longitud={60} />
            <ul className={styles.links}>
              <li><FaMapMarkerAlt />Amsterdam, Paises Bajos</li>
              <li><FaMapMarkerAlt />09:00h - 17:00h</li>
              <li><FaPhoneAlt /><a href="https://wa.me/5491163733844">+54 9 11 6373-3844 </a></li>
              <li><FaPhoneAlt /><a href="https://wa.me/5491163733844">+54 9 11 6373-3844 </a></li>
              <li><FaEnvelope /><a href="mailto:info@nnwines.com">info@screentours.com</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <h2>Paginas</h2>
            <Linea color="var(--primary-color)" grosor={5} longitud={60} />
            <ul className={styles.links}>
              <li><Link to="/Tours">Home</Link></li>
              <li><Link to="/Tours">Nuestro Equipo</Link></li>
              <li><Link to="/Tours">Tours</Link></li>
              <li><Link to="/Tours">Excursiones</Link></li>
              <li><Link to="/Tours">Free Tours</Link></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <h2>Paginas</h2>
            <Linea color="var(--primary-color)" grosor={5} longitud={60} />
            <ul className={styles.links}>
              <li><Link to="/Tours">Home</Link></li>
              <li><Link to="/Tours">Nuestro Equipo</Link></li>
              <li><Link to="/Tours">Tours</Link></li>
              <li><Link to="/Tours">Excursiones</Link></li>
              <li><Link to="/Tours">Free Tours</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;