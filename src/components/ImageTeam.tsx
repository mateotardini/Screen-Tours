import React from 'react';
/*CSS*/
import styles from "../css/ImageTeam.module.css";

interface ImageTeamProps {
  nombre: string;
  puesto: string;
  testimonio: string;
  linkImagen: string;
}

const ImageTeam: React.FC<ImageTeamProps> = ({ nombre, puesto, testimonio, linkImagen }) => {
  return (
    <div className={styles.imageButton}>
      <div className={styles.buttonText}>
        <h2 >{nombre}</h2>
        <h2 className={`${styles.puesto} fontTrueLies`}>{puesto}</h2>
      </div>
      <div className={styles.testimonio}>
        <p>"{testimonio}"</p>
      </div>

      <img
        className={styles.retrowaveImage}
        src="/Retrowave6.png"
        alt="Screen Tours Logo">
      </img>

      <img className={styles.backgroundImage} src={linkImagen} alt='Screen Tours Tours' />
    </div>
  );
}

export default ImageTeam;