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
      <h1 className={`${styles.overlayText} fontTrueLies`}>{translations[language].home.thirdTitle}</h1>
      <Link to="/Tours" className={styles.imageButton}>
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>DAYTRIPS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          Dam Square
          <h4>{translations[language].imageButton.amsterdam}</h4>
        </h2>
        <img src="/images/Mokum/DamSquare.jpg" alt='Screen Tours Dam Square' />
      </Link>

      <Link to="/Museums" className={styles.imageButton}>
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>MUSEOS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          Rijksmuseum
          <h4>{translations[language].imageButton.amsterdam}</h4>
        </h2>
        <img src="/images/Rembrant.jpg" alt='Screen Tours Rijksmuseum' />
      </Link>

      <Link to="/Tours" className={styles.imageButton}>
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>TOURS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          {translations[language].imageButton.thirdImage}
          <h4>{translations[language].imageButton.amsterdam}</h4>
        </h2>
        <img src="/images/Mokum/CopyrightKeeHummel.jpg" alt='Screen Tours Copyright Kee Hummel' />
      </Link>

      <Link to="/Tours" className={styles.imageButton}>
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>FREE TOURS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          {translations[language].imageButton.fourthImage}
          <h4>{translations[language].imageButton.amsterdam}</h4>
        </h2>
        <img src="/images/Bloemenmarkt2.jpg" alt='Screen Tours Tours Bloemenmarkt Mercado de las Flores' />
      </Link>
    </div>
  );
}

export default ImageButton;