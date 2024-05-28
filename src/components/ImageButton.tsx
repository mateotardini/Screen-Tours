import React from 'react';
import { Link } from 'react-router-dom';
/*CSS*/
import styles from "../css/ImageButton.module.css";

function ImageButton() {
  return (
    <div className='row'>
      <Link to="/Tours" className={styles.imageButton}>
        <h2 className={`${styles.buttonText} fontTrueLies`}>TOURS</h2>
        <img src="/Background.jpg" alt='Screen Tours Tours' />
      </Link>
      <Link to="/Tours" className={styles.imageButton}>
        <h2 className={`${styles.buttonText} fontTrueLies`}>EXCURSIONES</h2>
        <img src="/Background4.jpg" alt='Screen Tours Tours' />
      </Link>
      <Link to="/Tours" className={styles.imageButton}>
        <h2 className={`${styles.buttonText} fontTrueLies`}>FREE TOURS</h2>
        <img src="/Background5.jpg" alt='Screen Tours Tours' />
      </Link>
      <Link to="/Tours" className={styles.imageButton}>
        <h2 className={`${styles.buttonText} fontTrueLies`}>DAYTRIPS</h2>
        <img src="/Background3.jpg" alt='Screen Tours Tours' />
      </Link>
    </div>
  );
}

export default ImageButton;