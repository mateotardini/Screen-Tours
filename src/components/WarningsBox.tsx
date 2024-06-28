import React, { useState, useContext } from 'react';
import styles from "../css/WarningsBox.module.css";
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';

interface WarningsBoxProps {
  queIncluye: string;
  queLlevar: string;
  noPermitido: string;
  noIncluye: string;
  importante: string;
}

const WarningsBox: React.FC<WarningsBoxProps> = ({ queIncluye, queLlevar, noPermitido, noIncluye, importante }) => {
  const { language, translations } = useContext(LanguageContext);

  const [activeTab, setActiveTab] = useState('queIncluye');
  const [openSections, setOpenSections] = useState<string[]>([]);

  const tabs = [
    { key: 'queIncluye', label: '¿Qué Incluye?', content: queIncluye },
    { key: 'queLlevar', label: '¿Qué Llevar?', content: queLlevar },
    { key: 'noPermitido', label: 'No Permitido', content: noPermitido },
    { key: 'noIncluye', label: 'No Incluye', content: noIncluye },
    { key: 'importante', label: 'Información Importante', content: importante }
  ];

  const renderContent = () => {
    const activeTabContent = tabs.find(tab => tab.key === activeTab)?.content;
    return activeTabContent || queIncluye; 
  };

  const toggleSection = (key: string) => {
    setOpenSections(prevState =>
      prevState.includes(key)
        ? prevState.filter(section => section !== key)
        : [...prevState, key]
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <div key={tab.key} style={{ width: '100%' }}>
            <button
              className={activeTab === tab.key ? styles.activeTab : ''}
              onClick={() => {
                setActiveTab(tab.key);
                toggleSection(tab.key);
              }}
            >
              {tab.label}
            </button>
            {openSections.includes(tab.key) && (
              <div className={styles.contentMobile}>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <p>{renderContent()}</p>
      </div>
    </div>
  );
};

export default WarningsBox;