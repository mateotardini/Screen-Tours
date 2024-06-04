import React, { useRef, useState, useEffect } from 'react';
import styles from "../css/ImageTeam.module.css";

interface ImageTeamProps {
  nombre: string;
  puesto: string;
  testimonio: string;
  linkImagen: string;
}

const ImageTeam: React.FC<ImageTeamProps> = ({ nombre, puesto, testimonio, linkImagen }) => {
  const testimonioRef = useRef<HTMLDivElement>(null);
  const [testimonioHeight, setTestimonioHeight] = useState(0);

  useEffect(() => {
    if (testimonioRef.current) {
      setTestimonioHeight(testimonioRef.current.clientHeight);
    }
  }, [testimonio]);

  return (
    <div
      className={styles.imageButton}
      style={{ '--testimonio-height': `${testimonioHeight}px` } as React.CSSProperties}
    >
      <div className={styles.buttonText}>
        <h2>{nombre}</h2>
        <h2 className={`${styles.puesto} fontTrueLies`}>{puesto}</h2>
      </div>
      <div className={styles.testimonio} ref={testimonioRef}>
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