import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock  } from 'react-icons/fa';
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
            <p><FaMapMarkerAlt />  {duracion}</p>
            <p><FaClock  />  {tipoDeTour}</p>
          </div>

          <h2 className={`${styles.buttonText} fontMontserrat`}>{nombre}</h2>

          <div className='row'>
            <FaMapMarkerAlt className={styles.icon}/> <p className={styles.captionText}>{lugar}</p>
          </div>

          <div className='column'>
            <p>Desde</p>
            <h2>{precio}€</h2>
          </div>

          <button><a href={link}>Reservar Ahora</a></button>
        </div>
        <img src={linkImagen} alt='Screen Tours Tours' />
      </Link>
    </div>
  );
}

export default TourButton;