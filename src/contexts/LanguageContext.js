import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
  en: {
    home:{
      welcome: "Welcome to Netherlands.",
      subtittle: "Let us show you around",
      welcomeButton: "Are you in?",
      firstTittle: "To travel is to invest in your happiness. Discover, enjoy and share.",
      firstText: "Camaleon Tours is a receptive tourism company in the Netherlands. With a large team of professional tour guides in charge of organizing tours, circuits and guided day trips in Amsterdam, Brussels and Belgium, both in English and Spanish.",
    },
    navbar: {
      home: "Home",
      ourTeam: "Our Team",
      contact: "Contact"
    },
    museos: {
      subtittle: "Museums"
    }
  },
  es: {
    home:{
      welcome: "Welcome to Netherlands.",
      subtittle: "Déjanos mostrarte todo",
      welcomeButton: "¿Te apuntas?",
      firstTittle: "Viajar es invertir en felicidad. Descubre, disfruta y comparte",
      firstText: "Screen Tours es una empresa de turismo receptivo en Los Países Bajos, especializada en el viajero hispanohablante. Con un amplio equipo de guías turísticos profesionales encargado de organizar tours, circuitos y excursiones guiadas en Ámsterdam, Bruselas y Bélgica, exclusivamente en español.",
    },
    navbar: {
      home: "Inicio",
      about: "Nuestro Equipo",
      contact: "Contacto"
    },
    museos: {
      subtittle: "Museos"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};