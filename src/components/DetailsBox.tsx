import React, {useContext} from 'react';
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';
/*Components*/
import RetrowaveItem from '../components/RetrowaveItem.tsx';
/*CSS*/
import styles from "../css/DetailsBox.module.css";
/*Icons*/
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import { LuLanguages } from "react-icons/lu";

interface DetailsBoxProps {
  duracion: string;
  tipoDeTour: string;
  puntoEncuentro: string;
  idioma: string;
  cancelacion: string;
  lugares: string;
}

const DetailsBox: React.FC<DetailsBoxProps> = ({ duracion, tipoDeTour, puntoEncuentro, idioma, cancelacion, lugares }) => {

  const { language, translations } = useContext(LanguageContext);

  return (
    <div className={styles.container}>
      <h3>Información General</h3>
      <div className={styles.durationBox}>
        <p><FaClock className={styles.icon} /><strong>Duración: </strong>{duracion}</p>
        <p><FaClock className={styles.icon} /><strong>Tipo de Tour: </strong>{tipoDeTour}</p>
        <p><LuLanguages className={styles.icon} /><strong>Idiomas: </strong>{idioma}</p>
        <p><LuLanguages className={styles.icon} /><strong>{cancelacion}</strong></p>
      </div>
      <p className={styles.noMargin}>
        <FaMapMarkerAlt className={styles.icon} /><strong>Punto de Encuentro: </strong>{puntoEncuentro}
        <a href=''> <strong>{translations[language].tour.more}</strong> <IoIosArrowForward className={styles.icon2} /></a>
      </p>
      <p className={styles.noMargin}>
        <p>
          <FaMapMarkerAlt className={styles.icon} /><strong>¿Qué veras?: </strong>
        </p>
        <p className={styles.places}>
          {lugares}
        </p>
      </p>

      <RetrowaveItem
        src="/vectors/Retrowave6.png"
        alt="Screen Tours Logo"
        width="21vw"
        translateX="-200%"
        translateY="-110%"
        filter="none"
        opacity={1}
        zIndex={-1}
        responsiveWidth="70vw"
        responsiveTranslateX="-50%"
        responsiveTranslateY="-195%"
      />
    </div>
  );
}

export default DetailsBox;