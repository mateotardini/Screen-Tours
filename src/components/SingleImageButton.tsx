import React from 'react';
/*CSS*/
import styles from "../css/ImageButton.module.css";

function SingleImageButton(props) {
  const { src, name } = props;

  return (
    <div className={styles.imageButton}>
      <h2 className={styles.buttonTextBottom}>
        {name}
      </h2>
      <img src={src} alt='Screen Tours Tours' />
    </div>
  );
}

export default SingleImageButton;