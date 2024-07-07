import React from 'react';
import ContactForm from '../../atoms/ContactForm/ContactForm';
import GoogleMap from '../../atoms/GoogleMap/GoogleMap';

const ContactSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <GoogleMap />
      </div>
    </div>
  );
};

export default ContactSection;