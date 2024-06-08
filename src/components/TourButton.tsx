import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { LuLanguages } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

import styles from "../css/TourButton.module.css";

interface TourButtonProps {
  nombre: string;
  lugar: string;
  precio: number;
  duracion: string;
  tipoDeTour: string;
  linkImagen: string;
  link: string;
  linkAPI: string;
}

const TourButton: React.FC<TourButtonProps> = ({ nombre, lugar, precio, duracion, tipoDeTour, linkImagen, link, linkAPI }) => {
  return (
    <div className={styles.buttonContainer}>
      <Link to={link} className={styles.imageButton}>
        <div className={styles.captionBox}>
          <div className={styles.durationBox}>
            <p><FaClock /> <strong></strong>{duracion}</p>
            <p><FaClock /> <strong>{tipoDeTour}</strong></p>
            <p><LuLanguages /> <strong>ESP/EN</strong></p>
          </div>

          <h3 className={`${styles.buttonText} fontMontserrat`}>{nombre}</h3>

          <div className={styles.infoBox}>
            <p className={styles.captionText}><FaMapMarkerAlt className={styles.icon} /> {lugar}</p>
            <Link to={link}> <strong>Saber Más</strong> <IoIosArrowForward className={styles.icon2} /></Link>
          </div>

          <div className='row'>
            <div className='column'>
              <p>Desde</p>
              <h2>{precio}€</h2>
            </div>
          </div>


          <button><a href={linkAPI}>Reservar Ahora</a></button>
        </div>
        <img src={linkImagen} alt='Screen Tours Tours' />
      </Link>
    </div>
  );
}

export default TourButton;