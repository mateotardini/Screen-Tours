import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
/*Icons*/
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { LuLanguages } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';

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
  const { language, translations } = useContext(LanguageContext);

  return (
    <div className={styles.buttonContainer}>
      <Link to={link} className={styles.imageButton}>
        <div className={styles.captionBox}>
          <div className={styles.durationBox}>
            <p><FaClock /> <strong></strong>{duracion}</p>
            <p><IoInformationCircle /> <strong>{tipoDeTour}</strong></p>
            <p><LuLanguages /> <strong>ESP/EN</strong></p>
          </div>

          <h3 className={`${styles.buttonText} fontMontserrat`}>{nombre}</h3>

          <div className={styles.infoBox}>
            <p className={styles.captionText}><FaMapMarkerAlt className={styles.icon} /> {lugar}</p>
            <Link to={link}> <strong>{translations[language].tour.more}</strong> <IoIosArrowForward className={styles.icon2} /></Link>
          </div>

          <div className='row'>
            <div className='column'>
              <p>{translations[language].tour.from}</p>
              <h2>{precio}€</h2>
            </div>
          </div>


          <button><a href={linkAPI}>{translations[language].tour.book}</a></button>
        </div>
        <img src={linkImagen} alt='Screen Tours Tours' />
      </Link>
    </div>
  );
}

export default TourButton;