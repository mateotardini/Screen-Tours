import React, { useEffect } from 'react';
import styles from "../css/RegiondoWidgetPopup.module.css";

const RegiondoWidgetPopup = ({ widgetId, onClose }) => {
  useEffect(() => {
    // Cargar el script del widget de Regiondo
    const script = document.createElement('script');
    script.src = 'https://widgets.regiondo.net/product/v1/product-widget.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <product-details-widget widget-id={widgetId}></product-details-widget>
      </div>
    </div>
  );
};

export default RegiondoWidgetPopup;