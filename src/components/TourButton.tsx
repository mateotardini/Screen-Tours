import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
/*Contexts*/
import { LanguageContext } from '../contexts/LanguageContext.js';
/*Components*/
import RegiondoWidgetPopup from './RegiondoWidgetPopup.tsx';
/*CSS*/
import styles from "../css/TourButton.module.css";
/*Icons*/
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { LuLanguages } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";

const TourButton = ({ nombre, subtitulo, lugar, precio, precioDescuento, duracion, tipoDeTour, linkImagen, link, widgetId }) => {
  const { language, translations } = useContext(LanguageContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.buttonContainer}>
      <Link to={link} className={styles.imageButton}>
        <div className={styles.captionBox}>
          <div className={styles.durationBox}>
            <p><FaClock /> <strong>{duracion}</strong></p>
            <p><IoInformationCircle /> <strong>{tipoDeTour}</strong></p>
            <p><LuLanguages /> <strong>ESP/EN</strong></p>
          </div>

          <div className={styles.tittle}>
            <h3 className={`${styles.buttonText} fontMontserrat`}>{nombre}</h3>
            <p className={`${styles.buttonText} fontMontserrat`}>{subtitulo}</p>
          </div>

          <div className={styles.infoBox}>
            <p className={styles.captionText}><FaMapMarkerAlt className={styles.icon} /> {lugar}</p>
            <Link to={link}> <strong>{translations[language].tour.more}</strong> <IoIosArrowForward className={styles.icon2} /></Link>
          </div>

          <div className='row'>
            <div className='column'>
              <p>{translations[language].tour.from}</p>
              {precioDescuento ? (
                <div className={styles.priceContainer}>
                  <h2 className={styles.discountedPrice}>{precioDescuento}€</h2>
                  <p className={styles.originalPrice}>{precio}€</p>
                </div>
              ) : (
                <h2>{precio}€</h2>
              )}
            </div>
          </div>

          <button onClick={handleButtonClick} disabled={!widgetId}>{widgetId ? translations[language].tour.book : translations[language].tour.coomingSoon}</button>
        </div>
        <img src={linkImagen} alt={'Screen Tours ' + nombre} />
      </Link>

      {showPopup && <RegiondoWidgetPopup widgetId={widgetId} onClose={handleClosePopup} />}
    </div>
  );
}

export default TourButton;