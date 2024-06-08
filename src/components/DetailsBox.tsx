import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { LuLanguages } from "react-icons/lu";
/*CSS*/
import styles from "../css/DetailsBox.module.css";
/*Components*/
import RetrowaveItem from '../components/RetrowaveItem.tsx';

interface DetailsBoxProps {
  duracion: string;
  tipoDeTour: string;
  puntoEncuentro: string;
  idioma: string;
  cancelacion: string;
  lugares: string;
}

const DetailsBox: React.FC<DetailsBoxProps> = ({ duracion, tipoDeTour, puntoEncuentro, idioma, cancelacion, lugares }) => {

  return (
    <div className={styles.container}>
      <h3>Información General</h3>
      <div className={styles.durationBox}>
        <p><FaClock className={styles.icon} /><strong>Duración: </strong>{duracion}</p>
        <p><FaClock className={styles.icon} /><strong>Tipo de Tour: </strong>{tipoDeTour}</p>
        <p><LuLanguages className={styles.icon} /><strong>Idiomas: </strong>{idioma}</p>
        <p><LuLanguages className={styles.icon} /><strong>{cancelacion}</strong></p>
      </div>
      <p className={styles.noMargin}><FaMapMarkerAlt className={styles.icon} /><strong>Punto de Encuentro: </strong>{puntoEncuentro}</p>
      <p className={styles.noMargin}><FaMapMarkerAlt className={styles.icon} /><strong>¿Que veras?: </strong>{lugares}</p>

      <RetrowaveItem
        src="/vectors/Retrowave6.png"
        alt="Screen Tours Logo"
        width="21vw"
        translateX="-200%"
        translateY="45%"
        filter="none"
        opacity={1}
        zIndex={-1}
        responsiveWidth="70vw"
        responsiveTranslateX="-50%"
        responsiveTranslateY="185%"
      />
    </div>
  );
}

export default DetailsBox;