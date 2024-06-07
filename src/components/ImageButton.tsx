import React from 'react';
import { Link } from 'react-router-dom';
/*CSS*/
import styles from "../css/ImageButton.module.css";

function ImageButton() {
  return (
    <div className={styles.row}>
      <Link to="/Tours" className={styles.imageButton}>
        <h2 className={`${styles.buttonText} fontTrueLies`}>TOURS</h2>
        <img src="/images/Tour(Mattia Sacco).jpg" alt='Screen Tours Tours' />
      </Link>
      <Link to="/Museums" className={styles.imageButton}>
        <h2 className={`${styles.buttonText} fontTrueLies`}>MUSEOS</h2>
        <img src="/images/Background5.jpg" alt='Screen Tours Tours' />
      </Link>
      <Link to="/Tours" className={styles.imageButton}>
        <h2 className={`${styles.buttonText} fontTrueLies`}>FREE TOURS</h2>
        <img src="/images/Background4.jpg" alt='Screen Tours Tours' />
      </Link>
      <Link to="/Tours" className={styles.imageButton}>
        <h2 className={`${styles.buttonText} fontTrueLies`}>DAYTRIPS</h2>
        <img src="/images/Background3.jpg" alt='Screen Tours Tours' />
      </Link>
    </div>
  );
}

export default ImageButton;