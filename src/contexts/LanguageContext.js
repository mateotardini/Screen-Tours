import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const LanguageContext = createContext();

const translations = {
  en: {
    home:{
      welcome: "Welcome to Netherlands.",
      subtittle: "Let us show you around",
      welcomeButton: "Are you in?",
      firstTittle: "ScreenTours, an immersive tour through time.",
      firstText: "The ScreenTours guided tours have been specially prepared for you, a traveler eager for knowledge and experiences who wants to know and experience first-hand the reality of your destination, Amsterdam and the Netherlands.\nOur ScreenTours have 13-inch tablets and portable projectors, with which you will see happen in situ the most significant moments in history that have shaped a city as complex as Amsterdam.And of course our guides, with them you will experience a unique tour. Their passion and experience will immerse you in the country from the first minute while they teach you the triumphs and darkest stages of its history.",
      secondTittle: "Our ScreenTours",
      thirdTittle: "What will you live?",
    },
    navbar: {
      home: "Home"
    },
    outTeam:{
      subtittle: "Our Team"
    },
    museums: {
      subtittle: "Museums"
    },
    contact: {
      subtittle: "Contact"
    }
  },
  es: {
    home:{
      welcome: "Welcome to Netherlands.",
      subtittle: "Déjanos mostrarte todo",
      welcomeButton: "¿Te apuntas?",
      firstTittle: "ScreenTours, un tour inmersivo a través del tiempo.",
      firstText: "Las vistas guiadas de ScreenTours se han preparado especialmente para tí, un viajero ávido de conocimiento y experiencias que quiere conocer y vivir de primera mano la realidad de su destino, Ámsterdam y Países Bajos.\nNuestros ScreenTours cuentan con tablets de 13 pulgadas y proyectores portátiles, con los que verás pasar in situ los momentos más significativos de la historia que han moldeado una ciudad tan compleja como Ámsterdam.Y por supuesto nuestros guías, con ellos vivirás un tour único. Su pasión y experiencia te sumergirán en el país desde el primer minuto mientras te enseñan los triunfos y etapas más oscuras de su historia.",
      secondTittle: "Nuestros ScreenTours",
      thirdTittle: "¿Que Viviras?",
    },
    navbar: {
      home: "Inicio"
    },
    outTeam:{
      subtittle: "Nuestro Equipo"
    },
    museums: {
      subtittle: "Museos"
    },
    contact: {
      subtittle: "Contacto"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const country = response.data.country_code;
        if (country === 'ES') {
          setLanguage('es');
        } else {
          setLanguage('en');
        }
      } catch (error) {
        console.error("Error fetching country information:", error);
      }
    };

    fetchCountry();
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};