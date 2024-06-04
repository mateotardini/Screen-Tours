import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "../css/NavBar.module.css";

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
          <Link to="/">
            <img className={styles.icon} src="icons/home.png" alt="Logo Screen Tours" />
            Inicio
          </Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '0.25s' }}>
          <Link to="/OurTeam">
            <img className={styles.icon} src="icons/team.png" alt="Logo Screen Tours" />
            Nuestro Equipo
          </Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '0.50s' }}>
          <Link to="/Excursion">
            <img className={styles.icon} src="icons/compass.png" alt="Logo Screen Tours" />
            Excursiones
          </Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '0.75s' }}>
          <Link to="/Tours">
            <img className={styles.icon} src="icons/tour.png" alt="Logo Screen Tours" />
            Tours
          </Link>
        </li>
        <img className={styles.logo} src="/Logo Blanco.png" alt="Logo Screen Tours" />

        <li className={styles.animatedItem} style={{ animationDelay: '1.0s' }}>
          <Link to="/FreeTours">
            <img className={styles.icon} src="icons/free.png" alt="Logo Screen Tours" />
            Free Tours
          </Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '1.25s' }}>
          <Link to="/Tours">
            <img className={styles.icon} src="icons/singpost.png" alt="Logo Screen Tours" />
            Circuitos
          </Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '1.5s' }}>
          <Link to="/Tickets">
            <img className={styles.icon} src="icons/ticket.png" alt="Logo Screen Tours" />
            Tickets
          </Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '1.75s' }}>
          <Link to="/Vlogs">
            <img className={styles.icon} src="icons/camera.png" alt="Logo Screen Tours" />
            Vlogs
          </Link>
        </li>
        <li className={styles.animatedItem} style={{ animationDelay: '2.0s' }}>
          <Link to="/Contact">
            <img className={styles.icon} src="icons/contact.png" alt="Logo Screen Tours" />
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;