import React, { useState, useEffect, useRef } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { key: 'queIncluye', label: '¿Qué Incluye?', content: queIncluye },
    { key: 'queLlevar', label: '¿Qué Llevar?', content: queLlevar },
    { key: 'noPermitido', label: 'No Permitido', content: noPermitido },
    { key: 'noIncluye', label: 'No Incluye', content: noIncluye },
    { key: 'importante', label: 'Importante', content: importante }
  ];

  const renderContent = () => {
    const activeTabContent = tabs.find(tab => tab.key === activeTab)?.content;
    return activeTabContent || queIncluye; // Default to 'queIncluye' content if not found
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile && containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.clientWidth * tabs.findIndex(tab => tab.key === activeTab),
        behavior: 'smooth'
      });
    }
  }, [activeTab, isMobile]);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? styles.activeTab : ''}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div ref={containerRef} className={isMobile ? styles.slides : styles.content}>
        {isMobile ? (
          tabs.map(tab => (
            <div key={tab.key} className={styles.slide}>
              <button
                key={tab.key}
                className={activeTab === tab.key ? styles.activeTab : ''}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
              <p>{tab.content}</p>
            </div>
          ))
        ) : (
          <p>{renderContent()}</p>
        )}
      </div>
    </div>
  );
};

export default WarningsBox;