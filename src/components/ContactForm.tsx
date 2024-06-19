import React, { useState } from 'react';
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar los datos antes de enviar al servidor (opcional)
    if (!formData.name || !formData.email || !formData.subject || !formData.comments) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    try {
      // Enviar datos al servidor PHP utilizando fetch
      const response = await fetch('./sendEmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario.');
      }

      // Limpiar el formulario después de enviar
      setFormData({
        name: '',
        email: '',
        subject: '',
        comments: ''
      });

      alert('Formulario enviado correctamente.');
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <form onSubmit={handleSubmit} name="contactform" id="contactform">
      <input
        className={styles.input}
        name="name"
        type="text"
        id="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className={styles.input}
        name="email"
        type="email"
        id="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className={styles.input}
        name="subject"
        type="text"
        id="subject"
        placeholder="Asunto"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        className={styles.textArea}
        name="comments"
        cols="40"
        rows="3"
        id="comments"
        placeholder="Comentarios"
        value={formData.comments}
        onChange={handleChange}
        required
      ></textarea>
      <button
        type="submit"
      >Enviar</button>
    </form>
  );
};

export default ContactForm;