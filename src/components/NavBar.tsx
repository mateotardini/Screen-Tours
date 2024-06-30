import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext.js';
import styles from "../css/NavBar.module.css";

function NavBar() {
  const { language, changeLanguage, translations } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null); // Estado para la pestaña activa

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para manejar el clic en una pestaña
  const handleTabClick = (index) => {
    setActiveTab(index);
    setMenuOpen(false); // Cerrar menú al seleccionar una pestaña en móvil
  };

  return (
    <div className={`${styles.container} ${menuOpen ? styles.open : ''}`}>
      <img className={`${styles.logo} ${styles.invisible}`} src="/vectors/Logo Blanco.png" alt="Logo Screen Tours" />

      <div className={styles.lenguajesResponsive}>
        <button onClick={() => changeLanguage('en')}>En</button>
        <button onClick={() => changeLanguage('es')}>Esp</button>
      </div>

      <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <ul className={`${styles.flex} ${menuOpen ? styles.showMenu : ''}`}>
        <li className={`${styles.animatedItem} ${activeTab === 0 ? styles.active : ''}`} style={{ animationDelay: '0s' }} onClick={() => handleTabClick(0)}>
          <Link to="/">
            <img className={styles.icon} src="icons/home.png" alt="Home Icon Screen Tours" />
            {translations[language].navbar.home}
          </Link>
        </li>

        <li className={`${styles.animatedItem} ${activeTab === 1 ? styles.active : ''}`} style={{ animationDelay: '0.3s' }} onClick={() => handleTabClick(1)}>
          <Link to="/Tours">
            <img className={styles.icon} src="icons/tour.png" alt="Tours Icon Screen Tours" />
            Tours
          </Link>
        </li>

        <li className={`${styles.animatedItem} ${activeTab === 2 ? styles.active : ''}`} style={{ animationDelay: '0.3s' }} onClick={() => handleTabClick(2)}>
          <Link to="/ToursVIP">
            <img className={styles.icon} src="icons/vip.png" alt="Tours VIP Icon Screen Tours" />
            Tours VIP
          </Link>
        </li>

        <img className={`${styles.logo} ${menuOpen ? styles.open : ''}`} src="/vectors/Logo Blanco.png" alt="Logo Screen Tours" />

        <li className={`${styles.animatedItem} ${activeTab === 3 ? styles.active : ''}`} style={{ animationDelay: '0.3s' }} onClick={() => handleTabClick(3)}>
          <Link to="/Giftcards">
            <img className={styles.icon} src="icons/gift2.png" alt="Giftcards Icon Screen Tours" />
            Giftcards
          </Link>
        </li>

        <li className={`${styles.animatedItem} ${activeTab === 4 ? styles.active : ''}`} style={{ animationDelay: '0.45s' }} onClick={() => handleTabClick(4)}>
          <Link to="/Contact">
            <img className={styles.icon} src="icons/contact2.png" alt="Contact Icon Screen Tours" />
            {translations[language].contact.subtitle}
          </Link>
        </li>

        <li className={`${styles.animatedItem} ${activeTab === 5 ? styles.active : ''}`} style={{ animationDelay: '0.15s' }} onClick={() => handleTabClick(5)}>
          <Link to="/OurTeam">
            <img className={styles.icon} src="icons/team.png" alt="Team Icon Screen Tours" />
            {translations[language].ourTeam.subtitle}
          </Link>
        </li>

        <div className={styles.lenguajes}>
          <button onClick={() => changeLanguage('en')}>En</button>
          <button onClick={() => changeLanguage('es')}>Esp</button>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;