import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ucdjc6e", // Wstaw swój SERVICE_ID
        "MyFirstTemplate", // Wstaw swój TEMPLATE_ID
        formData,
        "0ux7sK84Kacbu3-vK" // Wstaw swój USER_ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Wiadomość została wysłana!");
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        alert("Wystąpił problem z wysyłaniem wiadomości.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Imię:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        E-mail:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Wiadomość:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default ContactForm;
