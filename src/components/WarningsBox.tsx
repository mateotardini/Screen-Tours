import React, { useState } from 'react';
import styles from "../css/WarningsBox.module.css";

interface WarningsBoxProps {
  queIncluye: string;
  queLlevar: string;
  noPermitido: string;
  noIncluye: string;
  importante: string;
}

const WarningsBox: React.FC<WarningsBoxProps> = ({ queIncluye, queLlevar, noPermitido, noIncluye, importante }) => {
  const [activeTab, setActiveTab] = useState('queIncluye');

  const renderContent = () => {
    switch (activeTab) {
      case 'queIncluye':
        return queIncluye;
      case 'queLlevar':
        return queLlevar;
      case 'noPermitido':
        return noPermitido;
      case 'noIncluye':
        return noIncluye;
      case 'importante':
        return importante;
      default:
        return queIncluye;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button className={activeTab === 'queIncluye' ? styles.activeTab : ''} onClick={() => setActiveTab('queIncluye')}>
          ¿Qué Incluye?
        </button>
        <button className={activeTab === 'queLlevar' ? styles.activeTab : ''} onClick={() => setActiveTab('queLlevar')}>
          ¿Qué Llevar?
        </button>
        <button className={activeTab === 'noPermitido' ? styles.activeTab : ''} onClick={() => setActiveTab('noPermitido')}>
          No Permitido
        </button>
        <button className={activeTab === 'noIncluye' ? styles.activeTab : ''} onClick={() => setActiveTab('noIncluye')}>
          No Incluye
        </button>
        <button className={activeTab === 'importante' ? styles.activeTab : ''} onClick={() => setActiveTab('importante')}>
          Importante
        </button>
      </div>
      <div className={styles.content}>
        <p>{renderContent()}</p>
      </div>
    </div>
  );
};

export default WarningsBox;