import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from"../css/NavBar.module.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${styles.container} ${menuOpen ? styles.open : ''}`}>
      <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.flex} ${menuOpen ? styles.showMenu : ''}`}>
        <li className={styles.animatedItem} style={{ animationDelay: '0s' }}>
          <img src="icons/tour.png" alt="Logo Screen Tours" />
          <Link to="/AboutUs">Inicio</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '0.5s' }}>
          <img src="icons/tour.png" alt="Logo Screen Tours" />
          <Link to="/Soluciones">Nuestro Equipo</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '1.0s' }}>
          <img src="icons/tour.png" alt="Logo Screen Tours" />
          <Link to="/Soluciones">Excursiones</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '1.5s' }}>
          <img src="icons/tour.png" alt="Logo Screen Tours" />
          <Link to="/Soluciones">Tours</Link>
        </li>
        <img className={styles.logo} src="/Logo.png" alt="Logo Screen Tours" />

        <li className={styles.animatedItem} style={{ animationDelay: '2.0s' }}>
          <img src="icons/tour.png" alt="Logo Screen Tours" />
          <Link to="/Soluciones">Free Tours</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '2.5s' }}>
          <img src="icons/tour.png" alt="Logo Screen Tours" />
          <Link to="/Soluciones">Circuitos</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '3.0s' }}>
          <img src="icons/tour.png" alt="Logo Screen Tours" />
          <Link to="/Soluciones">Tickets</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '3.5s' }}>
          <img src="icons/tour.png" alt="Logo Screen Tours" />
          <Link to="/Ingenieria">Vlogs</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '4.0s' }}>
          <img src="icons/tour.png" alt="Logo Screen Tours" />
          <Link to="/Diseño">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;