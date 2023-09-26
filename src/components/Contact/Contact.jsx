import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactButton, ContactForm, ContactInput, ContactInputMessage, ContactTitle, Container, Desc, Title, Wrapper } from './Contact.js'

export const Contact = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_he0yr8b', 'template_e1335q9', form.current, '1F8zp9wxZ5dGbduh-')
      .then((result) => {
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container>
      <Wrapper>
        <Title>Contacto</Title>
        <Desc>¡No dude en ponerse en contacto conmigo para cualquier pregunta u oportunidad!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Envíame un email 🚀</ContactTitle>
          <ContactInput placeholder="Correo Electronico" name="user_email" />
          <ContactInput placeholder="Nombre" name="user_name" />
          <ContactInputMessage placeholder="Mensaje" rows="4" name="message" />
          <ContactButton type="submit" value="Enviar" />
        </ContactForm>
      </Wrapper>
    </Container>
  )
}