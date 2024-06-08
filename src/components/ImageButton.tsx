import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';
/*CSS*/
import styles from "../css/ImageButton.module.css";

function ImageButton() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <div className={styles.row}>
      <h1 className={`${styles.overlayText} fontTrueLies`}>{translations[language].home.thirdTittle}</h1>
      <Link to="/Tours" className={styles.imageButton}>
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>TOURS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          Museo Judío
          <h4>Amsterdám</h4>
        </h2>
        <img src="/images/Tour(Mattia Sacco).jpg" alt='Screen Tours Tours' />
      </Link>
      <Link to="/Museums" className={styles.imageButton}>
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>MUSEOS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          Plaza de Rembrandt
          <h4>Amsterdám</h4>
        </h2>
        <img src="/images/Rembrant.jpg" alt='Screen Tours Tours' />
      </Link>
      <Link to="/Tours" className={styles.imageButton}>
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>FREE TOURS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          Mercado de las Flores
          <h4>Amsterdám</h4>
        </h2>
        <img src="/images/Background4.jpg" alt='Screen Tours Tours' />
      </Link>
      <Link to="/Tours" className={styles.imageButton}>
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>DAYTRIPS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          Placas del tropiezo
          <h4>Amsterdám</h4>
        </h2>
        <img src="/images/Background3.jpg" alt='Screen Tours Tours' />
      </Link>
    </div>
  );
}

export default ImageButton;