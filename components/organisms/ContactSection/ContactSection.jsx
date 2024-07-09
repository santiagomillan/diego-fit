import React from 'react';
import ContactForm from '../../atoms/ContactForm/ContactForm';
import GoogleMap from '../../atoms/GoogleMap/GoogleMap';
import { Title } from 'app/components/atoms/Title/Title';

const ContactSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
       <Title 
        title="¡Conéctate con tu Entrenador Personal!" 
        subtitle="Mejora tu salud física y mental, aumenta tu energía y alcanza tus objetivos de forma efectiva."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <GoogleMap />
      </div>
    </div>
  );
};

export default ContactSection;