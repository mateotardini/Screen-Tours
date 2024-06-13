import React, { useState, useContext } from 'react';
/*Context*/
import { LanguageContext } from '../contexts/LanguageContext.js';
/*CSS*/
import styles from "../css/ContactForm.module.css";

const ContactForm = () => {
  const { language, translations } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} name="contactform" id="contactform">
      <input
        className={styles.input}
        name="name"
        type="text"
        id="name"
        placeholder={translations[language].contact.name}
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        name="email"
        type="text"
        id="email"
        placeholder={translations[language].contact.email}
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        name="subject"
        type="text"
        id="subject"
        placeholder={translations[language].contact.subject}
        value={formData.subject}
        onChange={handleChange}
      />
      <textarea
        className={styles.textArea}
        name="comments"
        cols="40"
        rows="3"
        id="comments"
        placeholder={translations[language].contact.comments}
        value={formData.comments}
        onChange={handleChange}
      ></textarea>
      <button
        type="submit"
        id="submit"
        value={translations[language].contact.send}
      >Enviar</button>
    </form>
  );
};

export default ContactForm;