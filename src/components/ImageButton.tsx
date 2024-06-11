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
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>DAYTRIPS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          Dam Square
          <h4>Amsterdám</h4>
        </h2>
        <img src="/images/Mokum/DamSquare.jpg" alt='Screen Tours Tours Westerkerk y Anna Frank Huis' />
      </Link>

      <Link to="/Museums" className={styles.imageButton}>
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>MUSEOS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          Rijksmuseum 
          <h4>Amsterdám</h4>
        </h2>
        <img src="/images/Rembrant.jpg" alt='Screen Tours Tours Rembrant Square' />
      </Link>

      <Link to="/Tours" className={styles.imageButton}>
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>TOURS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          Nombres del Holocausto
          <h4>Amsterdám</h4>
        </h2>
        <img src="/images/Mokum/CopyrightKeeHummel.jpg" alt='Screen Tours Tours Jewish Museum' />
      </Link>

      <Link to="/Tours" className={styles.imageButton}>
        {/*<h2 className={`${styles.buttonText} fontTrueLies`}>FREE TOURS</h2>*/}
        <h2 className={styles.buttonTextBottom}>
          Mercado de las Flores
          <h4>Amsterdám</h4>
        </h2>
        <img src="/images/Bloemenmarkt2.jpg" alt='Screen Tours Tours Bloemenmarkt Mercado de las Flores' />
      </Link>
    </div>
  );
}

export default ImageButton;