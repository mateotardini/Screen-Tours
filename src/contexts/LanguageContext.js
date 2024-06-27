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
      text: "Get familiar with our team of professionals. Here you will be able to learn about the professional background and training of the guides who will accompany you during your tour. In addition to having extensive experience and training, they will instill in you their passion for the city and Dutch culture.\n\nOur guides will take you to explore every corner of Amsterdam and the Netherlands, revealing fascinating stories and hidden details every step of the way. With them, you will discover the city's best-kept secrets, from its medieval origins to its vibrant contemporary life. Each tour is an opportunity to immerse yourself in the rich history and culture of the region, transforming your visit into an experience of constant discovery and wonder.",
      secondTitle: "Ready to tour Netherlands?",
      secondText: "You already know our team, it's time for you to get to know the Netherlands!",
      button: "Meet Our Guides",
      guide: "Guide",
      ceo: "Founder / Guide",
      anaMaria: "Together, we are going to discover all the corners of a city that has a special charm, a European capital that, without the need for world-famous monuments, has managed to steal our hearts with dream canals, dancing houses and bicycles without brakes.",
      ana: "A city like this must be explained very well to understand it, and it is fortunate to find a guide who not only immerses you from the first minute, but also knows the triumphs and the darkest stages of its history.",
      gabi: "I love sharing everyday life in this city and all the experiences I am having."
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
    tours: {
      firstTitle: "Explore our historical and immersive Tours",
      firstText: "Each ScreenTours tour is an opportunity to see, hear and feel history in an interactive and immersive way. Our guides, with their deep knowledge and enthusiasm, will make you live every moment as if you were there.\n\nSelect the tour that interests you most and reserve your place in advance to ensure an unforgettable experience. With ScreenTours, you not only visit a place, but you also travel through time, living every moment of the history that has built Amsterdam and the Netherlands as we know it today.",
      vipFirstTitle: "Discover History at Your Own Pace",
      vipFirstText: "Each private tour from ScreenTours is an opportunity to see, hear, and feel history in an interactive and immersive way. Our guides, with their deep knowledge and enthusiasm, will make you experience every moment as if you were there, but enjoying the exclusivity and personalized attention that only a private tour can offer.\n\nSelect the private tour that interests you the most and book your spot in advance to ensure an unforgettable experience. With ScreenTours, you don't just visit a place, but also travel through time, living each moment of the history that has shaped Amsterdam and the Netherlands as we know them today, in a unique and exclusive way."
    },
    tour: {
      from: "From",
      more: "More",
      book: "Book Now",
      duration: "Duration",
      kindTour: "Kind Tour",
      meetingPoint: "Meeting Point",
      lastTitle: "Ready for Netherlands?",
      lastText: "Don't miss the opportunity to discover wonderful places and create unique memories. Click the button below to secure your place on this incredible tour.",
      lastButton: "Book Tour"
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
      text: "Familiarizate con nuestro equipo de profesionales. Aquí podrás conocer el background profesional y formación de los guías que te acompañarán durante tu tour, además de contar con una amplia experiencia y formación, te contagiarán su pasión por la ciudad y cultura holandesa.\n\nNuestros guías te llevarán a explorar cada rincón de Ámsterdam y los Países Bajos, revelando historias fascinantes y detalles ocultos en cada paso del camino. Con ellos, descubrirás los secretos mejor guardados de la ciudad, desde sus orígenes medievales hasta su vibrante vida contemporánea. Cada tour es una oportunidad para sumergirse en la rica historia y cultura de la región, transformando tu visita en una experiencia de descubrimiento y asombro constante.",
      secondTitle: "¿Listo para recorrer Netherlands?",
      secondText: "¡Ya conoces a nuestro equipo, es hora que conozcas Países Bajos!",
      button: "Conocé A Nuestros Guias",
      guide: "Guía",
      ceo: "Fundadora / Guía",
      anaMaria: "Juntos, vamos a conocer todos los rincones de una ciudad que tiene un encanto especial, una capital europea que sin necesidad de monumentos mundialmente conocidos, ha sabido robarnos el corazón con canales de ensueño, casas bailarinas y bicicletas sin frenos.",
      ana: "Una ciudad así debe ser muy bien explicada para llegar a comprenderla, y es una suerte dar con un guía que no sólo te sumerja desde el primer minuto, sino que también conozca los triunfos y las etapas más oscuras de su historia.",
      gabi: "Me encanta compartir el día a día en esta ciudad y todas las experiencias que voy viviendo."
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
    tours: {
      firstTitle: "Explora nuestros Tours históricos e inmersivos",
      firstText: "Cada tour de ScreenTours es una oportunidad para ver, escuchar y sentir la historia de manera interactiva y envolvente. Nuestros guías, con su conocimiento profundo y entusiasmo, te harán vivir cada momento como si estuvieras allí.\n\nSelecciona el tour que más te interese y reserva tu plaza con anticipación para asegurar una experiencia inolvidable. Con ScreenTours, no solo visitas un lugar, sino que también viajas a través del tiempo, viviendo cada instante de la historia que ha construido Ámsterdam y los Países Bajos tal como los conocemos hoy.",
      vipFirstTitle: "Descubre la historia a tu ritmo",
      vipFirstText: "Cada tour privado de ScreenTours es una oportunidad para ver, escuchar y sentir la historia de manera interactiva y envolvente. Nuestros guías, con su conocimiento profundo y entusiasmo, te harán vivir cada momento como si estuvieras allí, pero disfrutando de la exclusividad y la atención personalizada que solo un tour privado puede ofrecer.\n\nSelecciona el tour privado que más te interese y reserva tu plaza con anticipación para asegurar una experiencia inolvidable. Con ScreenTours, no solo visitas un lugar, sino que también viajas a través del tiempo, viviendo cada instante de la historia que ha construido Ámsterdam y los Países Bajos tal como los conocemos hoy, de una manera única y exclusiva."
    },
    tour: {
      from: "Desde",
      more: "Saber Más",
      book: "Reservar Ahora",
      duration: "Duración",
      kindTour: "Tipo de Tour",
      meetingPoint: "Punto de Encuentro",
      lastTitle: "¿Listo para Netherlands?",
      lastText: "No pierdas la oportunidad de descubrir lugares maravillosos y crear recuerdos únicos.Haz clic en el botón de abajo para asegurar tu lugar en este increíble tour.",
      lastButton: "Reservar Tour"
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