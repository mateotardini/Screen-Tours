import React, { useState } from 'react';
/*CSS*/
import styles from "../css/ContactForm.module.css";

const ContactForm = () => {
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
    // You can handle form submission here, e.g., sending data to your server
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} name="contactform" id="contactform">
      <input
        className={styles.input}
        name="name"
        type="text"
        id="name"
        placeholder="Tu Nombre"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        name="email"
        type="text"
        id="email"
        placeholder="Tu Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        name="subject"
        type="text"
        id="subject"
        placeholder="Asunto"
        value={formData.subject}
        onChange={handleChange}
      />
      <textarea
        className={styles.textArea}
        name="comments"
        cols="40"
        rows="3"
        id="comments"
        placeholder="Mensaje"
        value={formData.comments}
        onChange={handleChange}
      ></textarea>
      <button
        type="submit"
        id="submit"
        value="Enviar Mensaje"
      >Enviar</button>
    </form>
  );
};

export default ContactForm;