import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const LanguageContext = createContext();

const translations = {
  en: {
    home: {
      welcome: "Welcome to Netherlands",
      welcomeButton: "Are you in?",
      firstTitle: "ScreenTours, an immersive tour through time",
      firstText: "The ScreenTours guided tours have been specially prepared for you, a traveler eager for knowledge and experiences who wants to know and experience first-hand the reality of your destination, Amsterdam and the Netherlands.\n\nOur ScreenTours have 13-inch tablets and portable projectors, with which you will see happen in situ the most significant moments in history that have shaped a city as complex as Amsterdam.\n\nAnd of course our guides, with them you will experience a unique tour. Their passion and experience will immerse you in the country from the first minute while they teach you the triumphs and darkest stages of its history.",
      secondTitle: "Our ScreenTours",
      thirdTitle: "What will you live?",
      fourthTitle: "Arrive well prepared for your adventure!",
      fourthText: "Visit our guides and discover the essential tours to connect even more with the rich history of the Netherlands.",
      seeTours: "See Tours"
    },
    navbar: {
      home: "Home"
    },
    ourTeam: {
      title: "Meet our team",
      subtitle: "Our Team",
      text: "Get familiar with our team of professionals. Here you will be able to learn about the professional background and training of the guides who will accompany you during your tour. In addition to having extensive experience and training, they will instill in you their passion for the city and Dutch culture.",
      secondTitle: "Ready to tour Netherlands?",
      secondText: "You already know our team, it's time for you to get to know the Netherlands!",
      button: "Meet Our Guides"
    },
    museums: {
      subtittle: "Museums"
    },
    contact: {
      title: "We can help you?",
      subtitle: "Contact",
      text: "Since you are here, if you have any questions or concerns to ask us, take advantage of this magnificent form. We will reply to you as soon as possible!",
      name: "Your Name",
      email: "Your E-mail",
      subject: "Subject",
      comments: "Comments",
      send: "Send"
    },
    tour: {
      from: "From",
      more: "More",
      book: "Book Now",
      duration: "Duration",
      kindTour: "Kind Tour",
      meetingPoint: "Meeting Point"
    },
    imageButton: {
      amsterdam: "Amsterdam",
      thirdImage: "Holocaust names",
      fourthImage: "Flower Market"
    }
  },
  es: {
    home: {
      welcome: "Welcome to Netherlands",
      welcomeButton: "¿Te apuntas?",
      firstTitle: "ScreenTours, un tour inmersivo a través del tiempo",
      firstText: "Las vistas guiadas de ScreenTours se han preparado especialmente para tí, un viajero ávido de conocimiento y experiencias que quiere conocer y vivir de primera mano la realidad de su destino, Ámsterdam y Países Bajos.\n\nNuestros ScreenTours cuentan con tablets de 13 pulgadas y proyectores portátiles, con los que verás pasar in situ los momentos más significativos de la historia que han moldeado una ciudad tan compleja como Ámsterdam.\n\nY por supuesto nuestros guías, con ellos vivirás un tour único. Su pasión y experiencia te sumergirán en el país desde el primer minuto mientras te enseñan los triunfos y etapas más oscuras de su historia.",
      secondTitle: "Nuestros ScreenTours",
      thirdTitle: "¿Qué Vivirás?",
      fourthTitle: "¡Llega bien preparado para tu aventura!",
      fourthText: "Visita nuestras guías y descubre los tours imprescindibles para conectar aún mas con la rica historia de los Países Bajos.",
      seeTours: "Ver Tours"
    },
    navbar: {
      home: "Inicio"
    },
    ourTeam: {
      title: "Conoce a nuestro equipo",
      subtitle: "Nuestro Equipo",
      text: "Familiarizate con nuestro equipo de profesionales. Aquí podrás conocer el background profesional y formación de los guías que te acompañarán durante tu tour, además de contar con una amplia experiencia y formación, te contagiarán su pasión por la ciudad y cultura holandesa.",
      secondTitle: "¿Listo para recorrer Netherlands?",
      secondText: "¡Ya conoces a nuestro equipo, es hora que conozcas Países Bajos!",
      button: "Conocé A Nuestros Guias"
    },
    museums: {
      subtittle: "Museos"
    },
    contact: {
      title: "¿Te podemos ayudar?",
      subtitle: "Contacto",
      text: "Ya que estás por aquí, si tienes cualquier duda o pregunta que hacernos, aprovecha este magnífico formulario. ¡Te responderemos lo antes posible!",
      name: "Tu Nombre",
      email: "Tu E-mail",
      subject: "Asunto",
      comments: "Mensaje",
      send: "Enviar"
    },
    tour: {
      from: "Desde",
      more: "Saber Más",
      book: "Reservar Ahora",
      duration: "Duración",
      kindTour: "Tipo de Tour",
      meetingPoint: "Punto de Encuentro"
    },
    imageButton: {
      amsterdam: "Ámsterdam",
      thirdImage: "Nombres del Holocausto",
      fourthImage: "Mercado de las Flores"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Establece el estado inicial a español

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const country = response.data.country_code;

        // Array de códigos de países de habla hispana
        const spanishSpeakingCountries = [
          'ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'UY', 'PA'
        ];

        // Verifica si el país obtenido está en el array de países de habla hispana
        if (spanishSpeakingCountries.includes(country)) {
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