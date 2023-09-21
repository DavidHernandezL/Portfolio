import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { ContactButton, ContactForm, ContactInput, ContactInputMessage, ContactTitle, Container, Desc, Title, Wrapper } from './Contact.js'

export const Contact = () => {

  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_he0yr8b', 'template_e1335q9', form.current, '1F8zp9wxZ5dGbduh-')
      .then((result) => {
        console.log(result.text);
        setOpen(true);
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
          <ContactInput placeholder="Correo Electronico" name="from_email" />
          <ContactInput placeholder="Nombre" name="from_name" />
          <ContactInput placeholder="Asunto" name="subject" />
          <ContactInputMessage placeholder="Mensaje" rows="4" name="message" />
          <ContactButton type="submit" value="Enviar" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}