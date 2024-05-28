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
          <img src="icons/home.png" alt="Logo Screen Tours" />
          <Link to="/">Inicio</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '0.5s' }}>
          <img src="icons/team.png" alt="Logo Screen Tours" />
          <Link to="/OurTeam">Nuestro Equipo</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '1.0s' }}>
          <img src="icons/compass.png" alt="Logo Screen Tours" />
          <Link to="/Tours">Excursiones</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '1.5s' }}>
          <img src="icons/tour.png" alt="Logo Screen Tours" />
          <Link to="/Tours">Tours</Link>
        </li>
        <img className={styles.logo} src="/Logo Blanco.png" alt="Logo Screen Tours" />

        <li className={styles.animatedItem} style={{ animationDelay: '2.0s' }}>
          <img src="icons/free.png" alt="Logo Screen Tours" />
          <Link to="/Tours">Free Tours</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '2.5s' }}>
          <img src="icons/singpost.png" alt="Logo Screen Tours" />
          <Link to="/Tours">Circuitos</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '3.0s' }}>
          <img src="icons/ticket.png" alt="Logo Screen Tours" />
          <Link to="/Tours">Tickets</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '3.5s' }}>
          <img src="icons/camera.png" alt="Logo Screen Tours" />
          <Link to="/Tours">Vlogs</Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '4.0s' }}>
          <img src="icons/contact.png" alt="Logo Screen Tours" />
          <Link to="/Contact">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;