import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styles from "../css/TourButton.module.css";

interface TourButtonProps {
  nombre: string;
  lugar: string;
  precio: number;
  duracion: string;
  tipoDeTour: string;
  linkImagen: string;
  link: string;
}

const TourButton: React.FC<TourButtonProps> = ({ nombre, lugar, precio, duracion, tipoDeTour, linkImagen, link }) => {
  return (
    <div className={styles.buttonContainer}>
      <Link to={link} className={styles.imageButton}>
        <div className={styles.captionBox}>
          <div className={styles.durationBox}>
            <div className='row'>
              <p><FaClock />  <strong></strong>{duracion}</p>

              <p><FaClock />  <strong>{tipoDeTour}</strong></p>
            </div>

            
          </div>

          <h2 className={`${styles.buttonText} fontMontserrat`}>{nombre}</h2>

          <div className='row'>
            <FaMapMarkerAlt className={styles.icon} /> <p className={styles.captionText}>{lugar}</p>
            <a>Saber Más</a>
          </div>

          <div className='row'>
            <div className='column'>
              <p>Desde</p>
              <h2>{precio}€</h2>
            </div>

          </div>


          <button><a href={link}>Reservar Ahora</a></button>
        </div>
        <img src={linkImagen} alt='Screen Tours Tours' />
      </Link>
    </div>
  );
}

export default TourButton;